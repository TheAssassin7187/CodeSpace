LOG 4 - Solving Problem of phpLDAPadmin Installation Failed
===========================================

| Attribute   | Information      |
| :---------- | :--------------- |
| Creator     | Casper LI        |
| Date        | 02/07/2016 (SAT) |
| Description | Solving Problem of phpLDAPadmin Installation Failed |

Content
-------------------------------------------
Previously, I have encounter a problem with installing phpLDAPadmin software and this time is mainly for solving the problem.

After watching the video (https://www.youtube.com/watch?v=TPZdK5ViVpw), it seems that the security setting is not necessary to make phpLDAPadmin work. Therefore, I just by-pass this process and reinstall phpLDAPadmin. But I still meet a problem during the installation and I finally posted my question on the repository of phpLDAPadmin, github. (Link: https://github.com/leenooks/phpLDAPadmin/issues/38)

I guess that the problem may come from the "unsupportness" of PHP7 of phpLDAPadmin. But PHP7 is defaultly installed in Ubuntu Server 16.04 that I am currently using on the LDAP servers.

References
---------------------------------------------
 1. [Youtube] OpenLDAP: Installation and adding objects using php ldap admin and ldapadd-linux folks
    https://www.youtube.com/watch?v=TPZdK5ViVpw
 2. [Youtube] Creació d'un domini LDAP amb Ubuntu Server 14.4
    https://www.youtube.com/watch?v=SqGgRKXnTFc
 3. [Youtube] LD01 Instalación servidor Openldap
 	https://www.youtube.com/watch?v=E0mIYO_vbx8
 4. [Youtube] Instalacion de LDAP en Centos 6.4 + phpldapadmin - cliente Ubuntu
 	https://www.youtube.com/watch?v=7NidxR5ax0M
 5. [Youtube] OpenLDAP - Installation and adding objects using phpldapadmin and ldapadd
    https://www.youtube.com/watch?v=DM_UQVVVtoY
