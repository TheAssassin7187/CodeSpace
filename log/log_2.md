LOG 2 - Setting the Network Connection
===========================================

| Attribute   | Information      |
| :---------- | :--------------- |
| Creator     | Casper LI        |
| Date        | 19/06/2016 (SAT) |
| Description | Setting the Network Connection |

Content
-------------------------------------------
### Configuration Information about the Router

| Attribute                     | Information    |
| :---------------------------- | :------------- |
| IP Mode                       | 158.132.209.2  |
| Subnet Mask                   | 255.255.255.0  |
| Gateway                       | 158.132.209.28 |
| Static DNS 1                  | 158.132.14.1   |
| Static DNS 2                  | 158.132.18.1   |
| Router Name                   | RT41-BU        |
| Local IP Address              | 192.168.15.1   |
| Subnet Mask (Local)           | 255.255.255.0  |
| DHCP Server                   | Enabled        |
| Starting IP Address           | 192.168.15.100 |
| Maximum Number of DHCP Users  | 50             |

#### Local Network Informaiton

| Attribute             | Information       |
| :-------------------- | :---------------- |
| MAC Address           | 00:14:BF:BF:75:62 |
| IP Address            | 192.168.15.1      |
| Subnet Mask           | 255.255.255.0     |
| DHCP Server           | Enabled           |
| Starting IP Address   | 192.168.15.100    |
| End IP Address        | 192.168.15.149    |

____________________________________________________________________________________

### Connect to the Local Network
1. `sudo vi /etc/network/interfaces`: Use vi to edit the `interfaces` file.

2. There is two different method to connect to the network, DHCP and STATIC.

        # For DHCP
        auto {interface-name}
        iface {interface-name} inet dhcp
        
        # For STATIC
        auto {interface-name}
        iface {interface-name} inet static
        address 192.168.15.1{00-49}
        network 192.168.15.0
        netmask 255.255.255.0
        broadcast 192.168.15.255
        gateway 192.168.15.1

   - The `interface-name` can be found in `ifconfig -a` and now I connected the network cable to the interface `enp0s25`.
   - The DHCP mode works properly but the STATIC can work only for one server. If I set one server as `address 192.168.15.101` and anther one as `address 192.168.15.102`, the server with `address 192.168.15.102` cannot access internet service. 

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

- Reference: 
   1. http://ubuntuhandbook.org/index.php/2014/04/change-hostname-ubuntu1404/
   2. http://askubuntu.com/questions/87665/how-do-i-change-the-hostname-without-a-restart

____________________________________________________________________________________

### Fail to Start LXD Service

1. After changed the hostname to `ldap_01.codespace.com    ldap_01`, the error message `Failed to start LXD` appears during bootup.
2. I found what is LXD in: http://www.ubuntu.com/cloud/lxd. It seems that the problem only appears on Ubuntu 16.04 after a update.
3. I tried to change back the hostname to the previous one but the problem seems not completely solved but I can boot up the server os quicker.

#### Enter the recovery mode
1. Hold <kbd>Shift</kbd> and repeatly press <kbd>Esc</kbd> to go into `GNU GRUB` screen.
2. Select the `Advanced options for Ubuntu` and then select `..........recovery mode`.
3. After entering the recovery mode, enter the mode `root`.
4. The filesystem is mounted readonly by default. That means that I won't be able to save any change I make to any files and also that vim won't be able to write to root's `.viminfo` file.
5. Type `mount -o remount,rw /` to get the permission to write to the file in the system.

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
