LOG 3 - 
===========================================

| Attribute   | Information      |
| :---------- | :--------------- |
| Creator     | Casper LI        |
| Date        | 25/06/2016 (SAT) |
| Description |  |

Content
-------------------------------------------
### Reconfigure slapd to Select Better Settings

1. `sudo dpkg-reconfigure slapd`
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
3. `sudo apt-get install phpldapadmin`

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
