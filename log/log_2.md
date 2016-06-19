LOG 2 - Setting the Network Connection
===========================================

| Attribute   | Information      |
| :---------- | :--------------- |
| Creator     | Casper LI        |
| Date        | 19/06/2016 (SAT) |
| Description | Setting the Network Connection |

Content
-------------------------------------------

____________________________________________________________________________________

### Connect to the Local Network
1. `sudo vi /etc/network/interfaces`: Use vi to edit the `interfaces` file.

2. There is two different method to connect to the network, DHAP and STATIC.

        # For HDAP
        auto {interface-name}
        iface {interface-name} inet dhap
        
        # For STATIC
        auto {interface-name}
        iface {interface-name} inet static

   <sup>*</sup> The `interface-name` can be found in `ifconfig -a` and now I connected the network cable to the interface `enp0s25`.

3. Finally, we need to execute `sudo service networking restart`. 

____________________________________________________________________________________

### Installing openLDAP

1. `sudo apt-get update`
2. `sudo apt-get install slapd ldap-utils`
3. The password for both `ldap_01` and `ldap_02` are set to be `awe1829`.

____________________________________________________________________________________

### Changing the Hostname 

#### Non-permanient Method
`sudo hostname {hostname}`: this can be used to test the new hostname whether is proper.

#### Permanient Method

1. `sudo vi /etc/hostname`: This file only contain the host name.
2. Change the hostname and save the file `/etc/hostname`.
3. `sudo vi /etc/hosts`
4. Edit as the line `127.0.1.1        {the hostname same as /etc/hostname}`.
5. `sudo reboot`: Reboot the server. If we don't reboot it, "sudo" keyword does not work.

<sup>*</sup> Reference: 
   1. http://ubuntuhandbook.org/index.php/2014/04/change-hostname-ubuntu1404/
   2. http://askubuntu.com/questions/87665/how-do-i-change-the-hostname-without-a-restart

____________________________________________________________________________________

Problem
1. After change the hostname to "ldap_01.codespace.com    ldap_01" 
2. During reboot, "Failed to start LXD".
P. what is LXD can be found in : http://www.ubuntu.com/cloud/lxd
it seems only appears on Ubuntu 16.04

____________________________________________________________________________________

Enter the recovery mode
1. hold "shift"
2. repeatly press "esc" to go to "GNU GRUB"
2.1. Advanced options for Ubuntu
2.2. "..........recovery mode"
3. after enter the recovery mode, enter the mode "root"
4. the filesystem is mounted readonly by default. That means that I won't be able to save any changes you make to any files - and also that vim won't be able to write to root's .viminfo file.
5. type "mount -o remount,rw /"

____________________________________________________________________________________

Problem
[FAILED] Failed to start lxd-containers.service'
half Solution (http://askubuntu.com/questions/783363/ubuntu-server-16-04-wont-boot-after-installation-fail-to-start-lxd)
1. Go into the recovery mode
2. sudo service lxd restart // Take too long time to "Starting LXD - main daemon..."
3. sudo reboot
4. problem still exist but can still boot up the server after a long wait.

____________________________________________________________________________________

Force quit in vi using '!'
e.g. 
1. ":q!" force quit
2. ":w!" force write

":x" - save change and exit vi

Problem
sometime the vi does not response to any input.

____________________________________________________________________________________

change the host for ldap
1. sudo vi /etc/hosts
2. "127.0.1.1    ldap_02" --> "127.0.1.1    ldap_02.codespace.com ldap_02"

setting up openLDAP server (https://www.youtube.com/watch?v=m_prB_2Pxwk)
