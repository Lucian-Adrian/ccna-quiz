2.9.4 Module Quiz – Basic Switch and End Device Configuration Answers
1. Which functionality is provided by DHCP?

automatic assignment of an IP address to each host
remote switch management
translation of IP addresses to domain names
end-to-end connectivity test
Explanation: DHCP provides dynamic and automatic IP address assignment to hosts.

2. Which two functions are provided to users by the context-sensitive help feature of the Cisco IOS CLI? (Choose two.)

providing an error message when a wrong command is submitted
displaying a list of all available commands within the current mode
allowing the user to complete the remainder of an abbreviated command with the TAB key
determining which option, keyword, or argument is available for the entered command
selecting the best command to accomplish a task
Explanation: Context-sensitive help provides the user with a list of commands and the arguments associated with those commands within the current mode of a networking device. A syntax checker provides error checks on submitted commands and the TAB key can be used for command completion if a partial command is entered.

3. Which memory location on a Cisco router or switch stores the startup configuration file?

RAM
ROM
NVRAM
flash
Explanation: The startup configuration file of a Cisco router or switch is stored in NVRAM, which is nonvolatile memory.

4. To what subnet does the IP address 10.1.100.50 belong if a subnet mask of 255.255.0.0 is used?

10.1.0.0
10.0.0.0
10.1.100.32
10.1.100.0
Explanation: The purpose of a subnet mask is to separate the network portion of the address from the host portion of the IP address. The network portion of the IP address is identified by all binary 1s in the subnet mask. Using a subnet mask of 255.255.0.0 identifies the first two octets of the IP address as the network portion.

5. When a hostname is configured through the Cisco CLI, which three naming conventions are part of the guidelines? (Choose three.)

the hostname should be fewer than 64 characters in length
the hostname should be written in all lower case characters
the hostname should contain no spaces
the hostname should end with a special character
the hostname should begin with a letter
Explanation: A hostname can be configured with upper or lower case characters and should end with a letter or digit, not a special character. A hostname should start with a letter and no space is allowed for a hostname.

6. What is the function of the shell in an OS?

It interacts with the device hardware.
It interfaces between the users and the kernel.
It provides dedicated firewall services.
It provides the intrusion protection services for the device.
Explanation: Most operating systems contain a shell and a kernel. The kernel interacts with the hardware and the shell interfaces between the kernel and the users.

7. A router with a valid operating system contains a configuration file stored in NVRAM. The configuration file has an enable secret password but no console password. When the router boots up, which mode will display?

global configuration mode
setup mode
Oprivileged EXEC mode
user EXEC mode
Explanation: If a Cisco IOS device has a valid IOS and a valid configuration file, it will boot into user EXEC mode. A password will be required to enter privileged EXEC mode.

8. An administrator has just changed the IP address of an interface on an IOS device. What else must be done in order to apply those changes to the device?

Copy the running configuration to the startup configuration file.
Copy the information in the startup configuration file to the running configuration.
Reload the device and type yes when prompted to save the configuration.
Nothing must be done. Changes to the configuration on an IOS device take effect as soon as the command is typed correctly and the Enter key has been pressed.
Explanation: Changes to router and switch configurations take effect as soon as the command is entered. For this reason, it is very important that changes to live production devices are always carefully planned before being implemented. If commands are entered that render the device unstable or inaccessible, the device may have to be reloaded, resulting in network downtime.

9. Which memory location on a Cisco router or switch will lose all content when the device is restarted?

ROM
flash
NVRAM
RAM
Explanation: RAM is volatile memory and will lose all contents if the router or switch is restarted or shutdown.

10. Why would a technician enter the command copy startup-config running-config?

to remove all configurations from the switch
to save an active configuration to NVRAM
to copy an existing configuration into RAM
to make a changed configuration the new startup configuration
Explanation: Usually, changes are made to a running configuration in RAM and copied to NVRAM. However, in this case, the technician wants to copy a previously saved configuration from NVRAM into RAM in order to make changes to it.?

11. Which statement is true about the running configuration file in a Cisco IOS device?

It affects the operation of the device immediately when modified.
It is stored in NVRAM.
It should be deleted using the erase running-config command.
It is automatically saved when the router reboots.
Explanation: As soon as configuration commands are entered into a router, they modify the device immediately. Running configuration files can not be deleted nor are they saved automatically.

12. Which two statements are true regarding the user EXEC mode? (Choose two.)

All router commands are available.
Global configuration mode can be accessed by entering the enable command.
The device prompt for this mode ends with the “>” symbol.
Interfaces and routing protocols can be configured.
Only some aspects of the router configuration can be viewed.
Explanation: User EXEC mode limits access to some show and debug commands. It is the first level of user interface encountered when configuring a router and is intended for investigation of certain functions of the device. The User EXEC prompt is identified with the “>” symbol.

13. Which type of access is secured on a Cisco router or switch with the enable secret command?

virtual terminal
privileged EXEC
AUX port
console line
Explanation: The enable secret command secures access to the privileged EXEC mode of a Cisco router or switch.

14. What is the default SVI on a Cisco switch?

VLAN1
VLAN99
VLAN100
VLAN999
Explanation: Layer 2 switches use switch virtual interfaces (SVIs) to provide a means for remote access over IP. The default SVI on a Cisco switch is VLAN1.

