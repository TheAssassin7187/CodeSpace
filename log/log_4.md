LOG 4 - Solving Problem of phpLDAPadmin Installation Failed
===========================================

| Attribute   | Information      |
| :---------- | :--------------- |
| Creator     | Casper LI        |
| Date        | 02/07/2016 (SAT) |
| Description | Solving Problem of phpLDAPadmin Installation Failed |

Content
-------------------------------------------
Previously, I have encountered a problem with installing phpLDAPadmin software and this time is mainly for solving the problem.

After watching the video (https://www.youtube.com/watch?v=TPZdK5ViVpw), it seems that the security setting is not necessary to make phpLDAPadmin work. Therefore, I just by-pass this process and reinstall phpLDAPadmin. 

###Process I have done to follow the video
 Before I following the video, I just do the following 3 commands to uninstall the software installed previously.
  * `sudo apt-get purge slapd`
  * `sudo apt-get purge ldap-utils`
  * `sudo apt-get purge phpldapadmin`
 
 Then, I start following the video.
  * `sudo apt-get install slapd`, and set the password as if the previous one, **awe1829**.
  * `sudo apt-get install ldap-utils`
  * `sudo apt-get install phpldapadmin`
  * Setting `Base` and `URI` the file `/etc/ldap/ldap.conf` like the following.

    ```
    BASE    dc=codespace,dc=com
    URI     ldap://192.168.15.1
    ```

  * Then, I tried to access the page `http://192.168.15.1/phpldapadmin` from another computer in the same network but it seems not accessable.
  * When I tried to restart my apache2 server by using `sudo service apache2 restart`, it gives me the error message like the previous one and the apache2 server cannot be started.
  * Then I purge the phpldapadmin and reinstall it and I meet a new problem about PHP.
  * I finally posted my question on the repository of phpLDAPadmin, github. (Link: https://github.com/leenooks/phpLDAPadmin/issues/38)

###Details about the Error
````
Ubuntu Version : 16.04
PHP Version    : 7.0.4-7ubuntu2.1 (cli) ( NTS )
````

After I installed apache2 by using command sudo apt-get install apache2, I have checked that I can access the Apache2 Ubuntu Default Page from another computer in the network. Then, I install phpLDAPadmin by using command sudo apt-get install apache2. It finally shows me the following messages and I can no longer access the page.

```
$ sudo apt-get install phpldapadmin
...
Setting up phpldapadmin (1.2.2-5.2ubuntu2) ...

Creating config file /etc/phpldapadmin/config.php with new version
apache2_invoke: Enable configuration phpldapadmin.conf
apache2_reload: Your configuration is broken. Not reloading Apache 2
apache2_reload: [Sat Jul 02 15:37:55.542002 2016] [:crit] [pid 5365:tid 140027748411264] Apache is running a threaded MPM, but your PHP Module is not compiled to be threadsafe. You need to recompile PHP.
apache2_reload: AH00013: Pre-configuration failed
```

I have done some search on the threadsafe problem and I found this [See the Point 6 in the Reference Section].

###My Opinion
I guess that the problem may come from the "unsupportness" of PHP7 of phpLDAPadmin. But PHP7 is defaultly installed in Ubuntu Server 16.04 that I am currently using on the LDAP servers. So maybe I can find a way to uninstall PHP7 and reinstall PHP5 on server ldap_1. Another method is that maybe I can solve the problem by recompiling PHP as what the error message told me to do. By the way, I can continue my work without phpLDAPadmin which is only a user-friendly interface for easier configuring openLDAP but thing may become more complicated.

References
---------------------------------------------
 1. [Youtube] OpenLDAP: Installation and adding objects using php ldap admin and ldapadd-linux folks<br/>
    https://www.youtube.com/watch?v=TPZdK5ViVpw
 2. [Youtube] Creació d'un domini LDAP amb Ubuntu Server 14.4<br/>
    https://www.youtube.com/watch?v=SqGgRKXnTFc
 3. [Youtube] LD01 Instalación servidor Openldap<br/>
 	https://www.youtube.com/watch?v=E0mIYO_vbx8
 4. [Youtube] Instalacion de LDAP en Centos 6.4 + phpldapadmin - cliente Ubuntu<br/>
 	https://www.youtube.com/watch?v=7NidxR5ax0M
 5. [Youtube] OpenLDAP - Installation and adding objects using phpldapadmin and ldapadd<br/>
    https://www.youtube.com/watch?v=DM_UQVVVtoY
 6. PHP and Apache2 Threadsafe Error
    http://stackoverflow.com/questions/19185268/php-and-apache-thread-safe-error
