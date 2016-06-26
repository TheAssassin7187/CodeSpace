LOG 3 - Install and Configure phpLDAPadmin
===========================================

| Attribute   | Information      |
| :---------- | :--------------- |
| Creator     | Casper LI        |
| Date        | 25/06/2016 (SAT) |
| Description | Install and Configure phpLDAPadmin |

Content
-------------------------------------------
### Reconfigure slapd to Select Better Settings

1. `sudo dpkg-reconfigure slapd`: Reconfiguring slapd.
2. How I have to answer the questions.
   *  If you enable this option, no initial configuration or database will be created for you.<br/>
      Omit OpenLDAP server configuration? <br/>
      **No**<hr/>
   * The DNS domain name is used to construct the base DN of the LDAP directory. For example, `foo.example.org` will create the directory with `dc=foo, dc=example, dc=org` as base DN.<br/>
     DNS domain name:<br/>
     **codespace.com**<hr/>
   * Please enter the name of the organization to use in the base DNof your LDAP directory.<br/>
     Organization name:<br/>
     **PolyU**<hr/>
   * Please enter the password for the admin entry in your LDAP directory.(According to reference 3, anything I select here will overwrite the previous password I used.)<br/>
     Administrator password:<br/>
     **awe1829**<hr/>
   * HDB and BDB use similar storage formats, but HDB adds support for subtree renames. Both support the same confguration options. The MDB backend is recommended. MDB uses a new storage format and requires less configuation than BDB or HDB. In any case, you should review the resulting database configuration for your needs. See `/urs/share/doc/slapd/README.Debian.gz` for more details.<br/>
   Database backend to use:<br/>
     **HDB**<hr/>
   * Do you want the database to be removed when slapd is purged?<br/>
     **No**<hr/>
   * There are still files in `/var/lib/ldap` which will probably break the configuration process. If you enable this option, the maintainer scripts will move to old database files out of the way before creating a new database.<br/>
     Move old database?<br/>
     **Yes**<hr/>
   * The obsolete LDAPv2 protocol is disabled by default in slapd. Programs and users should upgrade to LDAPv3. If you have old programs which can't use LDAPv3, you should select this option and 'allow bind_v2' will be added to your slapd.conf file.<br/>
     Allow LDAPv2 protocol?<br/>
     **No**
3. `sudo apt-get install phpldapadmin`: Install the phpLDAPadmin tool
4. `sudo nano /etc/phpldapadmin/config.php`: Configure phpLDAPadmin
   * Edit the line: `$servers->setValue('server','host','server_domain_name_or_IP');`, where `server_domain_name_or_IP` is the domain name of the server. After the edit, `server_domain_name_or_IP` becomes `codespace.com`;
   * Edit the line: `$servers->setValue('server','base',array('dc=test,dc=com'));`. After the edit, `array('dc=test,dc=com')` becomes `array('dc=codespace,dc=com')`.
   * Edit the line: `$servers->setValue('login','bind_id','cn=admin,dc=test,dc=com');`. After the edit, `cn=admin,dc=test,dc=com` becomes `cn=admin,dc=codespace,dc=com`.
   * Uncomment and edit the line: `$config->custom->appearance['hide_template_warning'] = false;`. After the edit, `false` becomes `true`.
5. Create an SSL certificate.
   * `sudo mkdir /etc/apache2/ssl`: make the directory `/etc/apache2/ssl`.
   * `sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/apache2/ssl/apache.key -out /etc/apache2/ssl/apache.crt`: create the key and certificate in one movement. When it is finished, the certificate and key is now in `/etc/apache2/ssl` directory.
6. Create a password anthentication file.
   * `sudo apt-get install apache2-utils`: install Apache Utility Package.
   * `sudo htpasswd -c /etc/apache2/htpasswd casper`, where `casper` is the username.
   * After the process, we have username: `casper`, password: `ask3grh4`.
7. Secure apache
   * `sudo a2enmod ssl`: Enable the SSL module in Apache.
   * `sudo nano /etc/phpldapadmin/apache.conf`: Modify the phpLDAPadmin apache configuration. This is the place where I need to decide on the URL location where I want to access the interface. The default is `/phpldapadmin`, but I want to change this to cut down on random login attempts by bots and malicious parties.
       * The original one is:
        ```xml
            <IfModule mod_alias.c>
                Alias /phpldapadmin /usr/share/phpldapadmin/htdocs
            </IfModule>
        ```
       * The modified one is:
        ```xml
            <IfModule mod_alias.c>
                Alias /superldap /usr/share/phpldapadmin/htdocs
            </IfModule>
        ```
   * `sudo nano /etc/apache2/sites-enabled/000-default.conf`: Configure the HTTP Virtual Host.
       * The original one is:
       
         ```xml
            <VirtualHost *:80>
                ServerAdmin webmaster@localhost
                DocumentRoot /var/www/html
                ErrorLog ${APACHE_LOG_DIR}/error.log
                CustomLog ${APACHE_LOG_DIR}/access.log combined
            </VirtualHost>
         ```
        
       * The modified one is:
       
         ```xml
            <VirtualHost *:80>
                ServerAdmin webmaster@ldap_01.codespace.com
                DocumentRoot /var/www/html
                ServerName ldap_01.codespace.com
                Redirect permanent /superldap https://ldap_01.codespace.com/superldap
                ErrorLog ${APACHE_LOG_DIR}/error.log
                CustomLog ${APACHE_LOG_DIR}/access.log combined
            </VirtualHost>
         ```
         
   * Configure the HTTPS Virtual Host File. Apache includes a default SSL Virtual Host file. However, it is not enabled by default.
      * `sudo a2ensite default-ssl.conf`: enable the default SSL virtual host file in apache. This will link the file from the sites-available directory into the sites-enabled directory. We can edit this file now by typing: `sudo nano /etc/apache2/sites-enabled/default-ssl.conf`.
      * First of all, set the `ServerName` value to my server's domain name or IP address again and change the `ServerAdmin` directive as well:
      
        ```shell
          ServerAdmin webmaster@ldap_01.codespace.com
          ServerName ldap_01.codespace.com
        ```
      * Next, we need to set the SSL certificate directives to point to the key and certificate that we created.
      
        ```shell
          SSLCertificateFile /etc/apache2/ssl/apache.crt
          SSLCertificateKeyFile /etc/apache2/ssl/apache.key
        ```
        
      * Set up the location block that will implement our password protection for the entire phpLDAPadmin installation.
        ```xml
          <Location /superldap>
              AuthType Basic
              AuthName "Restricted Files"
              AuthUserFile /etc/apache2/htpasswd
              Require valid-user
          </Location>
        ```
      
      * Finally, save and close the file.
   * `sudo service apache2 restart`: Restart the apache service.

### Errors
After I done the above action and execute the command `sudo service apache2 restart`, an error message occurred.


### References

1. Top 4 open source LDAP implementations <br/>
   https://opensource.com/business/14/5/top-4-open-source-ldap-implementations
2. Fundamentals of LDAP (Part I) <br/>
   https://www.youtube.com/watch?v=LVY3WbakcOE
3. How To Install and Configure OpenLDAP and phpLDAPadmin on an Ubuntu 14.04 Server **(Very Useful)**<br/>
   https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-openldap-and-phpldapadmin-on-an-ubuntu-14-04-server
4. How To Install and Configure a Basic LDAP Server on an Ubuntu 12.04 VPS <br/>
   https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-a-basic-ldap-server-on-an-ubuntu-12-04-vps#AddOrganizationalUnits,Groups,andUsers
5. phpLDAPadmin Wiki Mainpage <br/>
   http://phpldapadmin.sourceforge.net/wiki/index.php/Main_Page
6. Possibility of Using LDAP to form a Large Web Server by Multiple Servers <br/>
   http://stackoverflow.com/questions/38026071/possibility-of-using-ldap-to-form-a-web-server-by-multiple-servers
7. The benefits of using RADIUS over LDAP <br/>
   https://opensource.com/business/15/4/benefits-using-radius-over-ldap
8. How to Combine Multiple Hard Drives Into One Volume for Cheap, High-Capacity Storage <br/>
   http://lifehacker.com/5986883/how-to-combine-multiple-hard-drives-into-one-volume-for-cheap-high-capacity-storage
