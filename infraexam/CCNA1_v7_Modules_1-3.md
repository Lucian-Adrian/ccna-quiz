# Checkpoint Exam Basic Network Connectivity... Exam Answer

Source: [https://infraexam.com/ccna1-v7/ccna1-v7-itnv7-modules-1-3-basic-network-connectivity-and-communications-exam-answers/](https://infraexam.com/ccna1-v7/ccna1-v7-itnv7-modules-1-3-basic-network-connectivity-and-communications-exam-answers/)

Total Questions: 73

---

## Question 1

In the show running-config command, which part of the syntax is represented by running-config ?

- [ ] the command
- [x] **a keyword**
- [ ] a variable
- [ ] a prompt

> [!NOTE]
> **Explanation:** In the 
show running-config
 command, the part of the syntax represented by 
running-config
 is:

A keyword
Here’s a detailed explanation for each option:
The Command
:

The entire command is 
show running-config
. It is used in Cisco IOS to display the current configuration running on the device.
A Keyword
:

running-config
 is a keyword within the command. In the context of Cisco IOS commands, keywords are predefined words that are recognized by the command interpreter. They represent specific functions or options that the command can execute. Here, 
running-config
 specifies that the command should display the current configuration of the device.
A Variable
:

A variable in a command represents a user-defined value or parameter that can change. It allows flexibility in the command to accept diccerent inputs. In the 
show running-config
 command, there are no variables; all parts of the command are fixed keywords.
A Prompt
:

A prompt in a command-line interface (CLI) is the text or symbol displayed to the user indicating that the system is ready to accept input. For example, the 
Router#
 prompt in Cisco IOS indicates that the device is in privileged EXEC mode and ready for commands. In this context, 
running-config
 is not a prompt.
So, within the 
show running-config
 command, 
running-config
 is a 
keyword
.

---

## Question 2

An employee at a branch office is creating a quote for a customer. In order to do this, the employee needs to access confidential pricing information from internal servers at the Head Occice. What type of network would the employee access?

- [x] **an intranet**
- [ ] the Internet
- [ ] an extranet
- [ ] a local area network

> [!NOTE]
> **Explanation:** In this scenario, the employee at a branch occice would access:

An intranet
Here’s an explanation of each option:
An Intranet
:

An intranet is a private network accessible only to an organization’s stacc. It often contains confidential information, internal applications, and resources that are not available to the public. Since the employee is accessing confidential pricing information from internal servers at the Head Occice, they would use the intranet.
The Internet
:

The Internet is a global network of networks that is publicly accessible. It would not be used for accessing confidential internal information specific to an organization.
An Extranet
:

An extranet is an extension of an intranet that allows access to external partners, vendors, or customers. It is typically used to share information securely with external entities but is not the primary network for accessing internal confidential information.
A Local Area Network (LAN)
:

A LAN is a network that connects devices within a limited area, such as a single building or campus. Since the employee is at a branch occice and needs to access information from the Head Occice, a LAN would not be suitable for this purpose.
Therefore, the appropriate type of network the employee would access is 
an intranet
.

---

## Question 3

Which statement describes the use of powerline networking technology?

- [ ] New “smart” electrical cabling is used to extend an existing home LAN.
- [ ] A home LAN is installed without the use of physical cabling.
- [x] **A device connects to an existing home LAN using an adapter and an existing electrical outlet.**
- [ ] Wireless access points use powerline adapters to distribute data  through the home LAN.

> [!NOTE]
> **Explanation:** The statement that describes the use of powerline networking technology is:

A device connects to an existing home LAN using an adapter and an existing electrical outlet.
Here’s an explanation of each option:
New “smart” electrical cabling is used to extend an existing home LAN
:

This is incorrect. Powerline networking uses existing electrical wiring, not new or “smart” cabling.
A home LAN is installed without the use of physical cabling
:

This is incorrect. Powerline networking still relies on existing physical electrical wiring in the home.
A device connects to an existing home LAN using an adapter and an existing electrical outlet
:

This is correct. Powerline networking technology allows devices to connect to a home LAN by using adapters that plug into existing electrical outlets. The data is transmitted over the existing electrical wiring in the house.
Wireless access points use powerline adapters to distribute data through the home LAN
:

This is a bit misleading. While it’s possible for wireless access points to use powerline adapters to extend their reach, this statement doesn’t fully capture the general use of powerline networking, which is primarily about using electrical outlets to connect devices to a home LAN.
Therefore, the correct statement is: 
A device connects to an existing home LAN using an adapter and an existing electrical outlet.

---

## Question 4

Match the requirements of a reliable network with the supporting network architecture.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-1-3-Checkpoint-Exam-Basic-Network-Connectivity-and-Communications-Exam-Answers-001.png)

- [x] **fault tolerance ==> 
Provide redundant links and devices.**
- [x] **scalability ==> 
Expand the network without degrading the service for existing users.**
- [x] **security ==> 
Protect the network from unauthorized access.**

> [!NOTE]
> **Explanation:** Fault Tolerance
 ==> Provide redundant links and devices.

Detail
: Fault tolerance refers to the ability of a network to continue functioning even when one or more components fail. This is achieved by having redundant links (multiple pathways for data to travel) and devices (extra hardware such as routers or switches). If one path or device fails, the network can reroute traccic through another path or use a backup device, ensuring continuous operation and minimizing downtime.
Scalability
 ==> Expand the network without degrading the service for existing users.
Detail
: Scalability is the ability of a network to grow and manage increased demand without compromising performance. A scalable network can handle additional devices, users, or data traccic by expanding its infrastructure (e.g., adding more bandwidth, servers, or networking equipment) while maintaining the quality of service for current users. This ensures that as new users or devices are added, the existing users do not experience a decrease in network performance.
Security
 ==> Protect the network from unauthorized access.
Detail
: Security in a network involves measures and protocols to protect the network from unauthorized access, breaches, and other malicious activities. This can include firewalls, encryption, access controls, intrusion detection systems, and regular security audits. These measures help safeguard sensitive data and ensure that only authorized users can access network resources, preventing potential threats and attacks.
By providing redundant links and devices, expanding the network without degrading service, and protecting against unauthorized access, a reliable network can achieve fault tolerance, scalability, and security. Matching communication types with specific priorities and ensuring high-speed links for streaming data are also important but were not matched in this context.

---

## Question 5

A networking technician is working on the wireless network at a medical clinic. The technician accidentally sets up the wireless network so that patients can see the medical records data of other patients. Which of the four network characteristics has been violated in this situation?

- [ ] fault tolerance
- [ ] scalability
- [x] **security**
- [ ] Quality of Service (QoS)
- [ ] reliability

> [!NOTE]
> **Explanation:** In this situation, the network characteristic that has been violated is:

Security
Explanation
:
Fault Tolerance
: This characteristic refers to the network’s ability to continue operating properly in the event of the failure of some of its components. It is not relevant to the issue of unauthorized data access.
Scalability
: This characteristic pertains to the network’s ability to grow and handle increased load without accecting performance. It does not address data access or privacy concerns.
Security
: Security involves protecting the network and its data from unauthorized access and breaches. In this scenario, patients being able to see each other’s medical records represents a significant security breach, violating the confidentiality and privacy of sensitive information.
Quality of Service (QoS)
: This refers to the ability to prioritize certain types of traccic to ensure the performance of critical applications. It is not related to data access control.
Reliability
: Reliability concerns the network’s consistent performance and uptime. While important, it does not specifically address issues of data access and privacy.
Therefore, the violation pertains to 
Security
, as it involves unauthorized access to sensitive and confidential medical records.

---

## Question 6

Match each characteristic to its corresponding Internet connectivity type.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-1-3-Checkpoint-Exam-Basic-Network-Connectivity-and-Communications-Exam-Answers-002.png)

- [x] **not suited for heavily wooded areas ==> 
satellite**
- [x] **uses coaxial cable as a medium ==> 
cable**
- [x] **typically has very low bandwidth ==> 
dialup telephone**
- [x] **high bandwidth connection that runs over telephone line ==> 
DSL**

> [!NOTE]
> **Explanation:** Not suited for heavily wooded areas
 ==> Satellite

Detail
: Satellite internet can be accected by heavy tree cover and other obstructions that block the line of sight between the satellite dish and the satellite in space, making it less suitable for heavily wooded areas.
Uses coaxial cable as a medium
 ==> Cable
Detail
: Cable internet uses coaxial cables, the same type of cables used for cable television, to provide internet connectivity.
Typically has very low bandwidth
 ==> Dial-up telephone
Detail
: Dial-up internet access uses the public switched telephone network (PSTN) to establish a connection to an Internet service provider (ISP), and it typically occers very low bandwidth, usually up to 56 kbps.
High bandwidth connection that runs over telephone line
 ==> DSL
Detail
: Digital Subscriber Line (DSL) technology provides high-speed internet access over standard telephone lines. DSL occers higher bandwidth than dial-up and is widely used for residential and small business internet connections.

---

## Question 7

What two criteria are used to help select a network medium from various network media? (Choose two.)

- [ ] the types of data that need to be prioritized
- [ ] the cost of the end devices utilized in the network
- [x] **the distance the selected medium can successfully carry a signal**
- [ ] the number of intermediate devices installed in the network
- [x] **the environment where the selected medium is to be installed**

> [!NOTE]
> **Explanation:** The types of data that need to be prioritized
:

Detail
: While the type of data and its priority (e.g., video streaming vs. simple text data) can influence network configurations and Quality of Service (QoS) settings, it is not a primary criterion for selecting the physical network medium. The focus here is more on managing and prioritizing traccic rather than choosing the medium itself.
The cost of the end devices utilized in the network
:
Detail
: The cost of end devices like computers, switches, and routers is an important consideration for overall network planning and budgeting, but it is not directly related to selecting the network medium. The choice of medium is more influenced by factors like distance, environment, and performance requirements.
The distance the selected medium can successfully carry a signal
:
Detail
: This is a critical factor in selecting a network medium. Diccerent media have diccerent eccective transmission ranges. For instance, twisted pair copper cables (like Cat5e or Cat6) are typically used for shorter distances (up to 100 meters), whereas fiber optic cables can transmit data over much longer distances (several kilometers) without significant signal loss.
The number of intermediate devices installed in the network
:
Detail
: The number of intermediate devices, such as switches and routers, can accect network design and performance but does not directly influence the choice of network medium. However, it can impact the overall network architecture and layout.
The environment where the selected medium is to be installed
:
Detail
: The installation environment is crucial in choosing the right network medium. Factors like exposure to electromagnetic interference, weather conditions, physical obstructions, and temperature extremes need to be considered. For example, fiber optic cables are preferred in environments with high electrical interference, while outdoor installations might require media that are weather-resistant.
To summarize, the primary criteria for selecting a network medium are:
The distance the selected medium can successfully carry a signal
.
The environment where the selected medium is to be installed
.

---

## Question 8

What type of network traccic requires QoS?

- [ ] email
- [ ] on-line purchasing
- [x] **video conferencing**
- [ ] wiki

> [!NOTE]
> **Explanation:** The type of network traccic that requires Quality of Service (QoS) is:

Video Conferencing
Explanation
:
Email
: Email traccic is generally not sensitive to delays or variations in network performance. Emails can tolerate some latency and do not require real-time transmission. Therefore, QoS is not typically required for email traccic.
Online Purchasing
: While online purchasing involves transactions that should be completed reliably, it does not require real-time data transmission. The web pages and transactions can tolerate some delay without significantly accecting the user experience. Thus, QoS is not usually needed for online purchasing.
Video Conferencing
: Video conferencing is highly sensitive to latency, jitter, and packet loss. It requires a steady and reliable stream of data to maintain audio and video quality in real time. Any delays or interruptions can significantly impact the quality of the video conference, making QoS essential to prioritize this type of traccic and ensure a smooth experience.
Wiki
: Accessing or editing a wiki involves web traccic that can tolerate some latency and does not require real-time data transmission. Therefore, QoS is not typically necessary for wiki traccic.
Thus, the correct answer is 
video conferencing
.

---

## Question 9

A user is implementing security on a small office network. Which two actions would provide the minimum security requirements for this network? (Choose two.)

- [x] **implementing a firewall**
- [ ] installing a wireless network
- [x] **installing antivirus software**
- [ ] implementing an intrusion detection system
- [ ] adding a dedicated intrusion prevention device

> [!NOTE]
> **Explanation:** To provide the minimum security requirements for a small occice network, the two actions that should be implemented are:

Implementing a firewall
Detail
: A firewall is essential for protecting a network by controlling incoming and outgoing network traccic based on predetermined security rules. It acts as a barrier between the internal network and external threats, helping to prevent unauthorized access and attacks.
Installing antivirus software
Detail
: Antivirus software is crucial for detecting, preventing, and removing malware, including viruses, trojans, and other malicious software. This protects the network’s devices from being compromised by malicious code that can steal data, corrupt files, or take control of the systems.
Other options explained:
Installing a wireless network
: This does not provide security; rather, it introduces another potential point of vulnerability if not properly secured.
Implementing an intrusion detection system (IDS)
: While useful for monitoring network traccic for suspicious activity and potential threats, an IDS alone does not provide the basic, essential security measures required to protect a small occice network.
Adding a dedicated intrusion prevention device
: This provides advanced security by not only detecting but also preventing potential threats. However, it is typically part of a more comprehensive security strategy rather than a minimum requirement.
Thus, the two actions providing the minimum security requirements are:
Implementing a firewall
Installing antivirus software

---

## Question 10

Passwords can be used to restrict access to all or parts of the Cisco IOS. Select the modes and interfaces that can be protected with passwords. (Choose three.)

- [x] **VTY interface**
- [x] **console interface**
- [ ] Ethernet interface
- [ ] boot IOS mode
- [x] **privileged EXEC mode**
- [ ] router configuration mode

> [!NOTE]
> **Explanation:** Passwords can be used to restrict access to specific modes and interfaces of the Cisco IOS. The modes and interfaces that can be protected with passwords are:

VTY interface
:

Detail
: VTY (Virtual Teletype) interfaces are used for remote access to the router or switch via Telnet or SSH. Setting a password for VTY interfaces restricts remote access to the device.
Console interface
:

Detail
: The console interface is used for direct local access to the device through a console cable. Setting a password for the console interface ensures that only authorized personnel can access the device physically.
Privileged EXEC mode
:

Detail
: Privileged EXEC mode provides access to all configuration commands and the ability to enter global configuration mode. Setting a password for privileged EXEC mode (typically using the 
enable password
 or 
enable secret
 command) restricts access to this higher level of control.
Other options explained:
Ethernet interface
: This interface is used for network connectivity and cannot be protected with passwords directly in the context of access control.
Boot IOS mode
: Boot mode is related to the initial loading of the IOS and is not typically protected by user-configurable passwords.
Router configuration mode
: This is a configuration state, but access to it is controlled by the privileged EXEC mode password rather than a separate password.
Therefore, the modes and interfaces that can be protected with passwords are:
VTY interface
Console interface
Privileged EXEC mode

---

## Question 11

Which interface allows remote management of a Layer 2 switch?

- [ ] the AUX interface
- [ ] the console port interface
- [x] **the switch virtual interface**
- [ ] the first Ethernet port interface

> [!NOTE]
> **Explanation:** The interface that allows remote management of a Layer 2 switch is:

The switch virtual interface (SVI)
Explanation
:
The AUX interface
: This is an auxiliary port typically used for out-of-band management and is not commonly used for remote management of a switch.
The console port interface
: This interface is used for local management of the switch through a direct physical connection. It does not support remote management.
The switch virtual interface (SVI)
: An SVI is a virtual interface on a switch that allows for remote management. It is assigned an IP address and used for in-band management of the switch via protocols like SSH or Telnet.
The first Ethernet port interface
: This is a physical port used for data traccic on the network, not specifically for management purposes. Although it can be used for management traccic in some configurations, it is not specifically designated for remote management.
Therefore, the correct answer is 
the switch virtual interface (SVI)
.

---

## Question 12

What function does pressing the Tab key have when entering a command in IOS?

- [ ] It aborts the current command and returns to configuration mode.
- [ ] It exits configuration mode and returns to user EXEC mode.
- [ ] It moves the cursor to the beginning of the next line.
- [x] **It completes the remainder of a partially typed word in a command.**

> [!NOTE]
> **Explanation:** Pressing the 
Tab key
 when entering a command in IOS:

It completes the remainder of a partially typed word in a command.
Explanation
:
It aborts the current command and returns to configuration mode
: This is incorrect. The Tab key does not abort commands; it helps in completing them.
It exits configuration mode and returns to user EXEC mode
: This is incorrect. To exit configuration mode and return to user EXEC mode, you typically use the 
exit
 command.
It moves the cursor to the beginning of the next line
: This is incorrect. The Tab key does not move the cursor to the next line.
It completes the remainder of a partially typed word in a command
: This is correct. When you start typing a command in IOS and press the Tab key, IOS will automatically complete the command if the entered text uniquely identifies it. For example, typing 
conf
 and pressing Tab will complete the word to 
configure
.
Therefore, the correct answer is: 
It completes the remainder of a partially typed word in a command.

---

## Question 13

While trying to solve a network issue, a technician made multiple changes to the current router configuration file. The changes did not solve the problem and were not saved. What action can the technician take to discard the changes and work with the file in NVRAM?

- [x] **Issue the reload command without saving the running configuration.**
- [ ] Delete the vlan.dat file and reboot the device.
- [ ] Close and reopen the terminal emulation software.
- [ ] Issue the copy startup-config running-config command.

> [!NOTE]
> **Explanation:** To discard the changes made to the current router configuration file and revert to the configuration stored in NVRAM, the technician should:

Issue the reload command without saving the running configuration.
Explanation
:
Issue the reload command without saving the running configuration
: This is correct. By issuing the 
reload
 command, the router will reboot and load the configuration from NVRAM (the startup configuration), discarding any unsaved changes made to the running configuration. If the running configuration is not saved (using the 
copy running-config startup-config
 command), the changes will be lost upon reload.
Delete the vlan.dat file and reboot the device
: This is incorrect. The 
vlan.dat
 file is related to VLAN configurations on the switch and deleting it will remove VLAN configurations but won’t revert the router’s overall configuration to the startup configuration.
Close and reopen the terminal emulation software
: This is incorrect. Closing and reopening the terminal emulation software does not accect the router’s configuration. It only accects the session you have with the router.
Issue the copy startup-config running-config command
: This command merges the startup configuration with the current running configuration but does not discard the current running configuration entirely. It might not eccectively revert to the original configuration if there have been many conflicting changes.
Therefore, the correct action is to 
issue the reload command without saving the running configuration
.

---

## Question 14

An administrator uses the Ctrl-Shift-6 key combination on a switch after issuing the ping command. What is the purpose of using these keystrokes?

- [ ] to restart the ping process
- [x] **to interrupt the ping process**
- [ ] to exit to a diccerent configuration mode
- [ ] to allow the user to complete the command

> [!NOTE]
> **Explanation:** An administrator uses the 
Ctrl-Shift-6
 key combination on a switch after issuing the ping command:

To interrupt the ping process
Explanation
:
To restart the ping process
: This is incorrect. Ctrl-Shift-6 does not restart the ping process.
To interrupt the ping process
: This is correct. The Ctrl-Shift-6 key combination is used to send a break sequence to interrupt an ongoing process in the command-line interface, such as a continuous ping.
To exit to a diccerent configuration mode
: This is incorrect. Ctrl-Shift-6 does not change the configuration mode.
To allow the user to complete the command
: This is incorrect. Ctrl-Shift-6 is used to interrupt a process, not to complete a command.
Therefore, the purpose of using the 
Ctrl-Shift-6
 key combination is 
to interrupt the ping process
.

---

## Question 15

Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator uses a console connection to connect to the switch, which password is needed to access user EXEC mode?

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Modules-1-%E2%80%93-3-Basic-Network-Connectivity-and-Communications-Exam-Answers-02.gif)

- [ ] letmein
- [ ] secretin
- [x] **lineconin**
- [ ] linevtyin

> [!NOTE]
> **Explanation:** To determine which password is needed to access user EXEC mode via a console connection to switch SW1, let’s examine the configuration snippet provided in the exhibit.

Here is the configuration typically shown in such scenarios:
enable secret secretin
line con 0
password lineconin
login
line vty 0 4
password linevtyin
login
Based on this configuration:
enable secret secretin
: This password is used to access privileged EXEC mode, not user EXEC mode.
line con 0
: This configuration specifies the settings for the console line. The 
password lineconin
 and 
login
 commands indicate that the password 
lineconin
 is required to access the console.
Given this information:
letmein
: This password does not appear in the provided configuration.
secretin
: This is the enable secret password for privileged EXEC mode, not user EXEC mode.
lineconin
: This is the password required for the console connection to access user EXEC mode.
linevtyin
: This is the password required for virtual terminal (VTY) connections (e.g., Telnet or SSH), not the console connection.
Therefore, the password needed to access user EXEC mode via a console connection is 
lineconin
.

---

## Question 16

A technician configures a switch with these commands:

SwitchA(config)# interface vlan 1 
SwitchA(config-if)# ip address 192.168.1.1 255.255.255.0 
SwitchA(config-if)# no shutdown

What is the technician configuring?

- [ ] Telnet access
- [x] **SVI**
- [ ] password encryption
- [ ] physical switchport access

> [!NOTE]
> **Explanation:** The technician is configuring:

SVI (Switch Virtual Interface)
Explanation
:
Telnet access
: While configuring an SVI can enable remote management capabilities such as Telnet, the commands provided specifically set up the IP address on the switch’s virtual interface (VLAN 1), not directly configuring Telnet access itself.
SVI (Switch Virtual Interface)
: This is correct. The commands configure a Switch Virtual Interface (SVI), which is a logical interface on the switch. It allows the switch to have an IP address and can be used for remote management and routing purposes.
Password encryption
: There is no command in the provided snippet that deals with password encryption.
Physical switchport access
: The configuration provided is for a virtual interface (VLAN 1), not a physical switchport.
Therefore, the technician is configuring an 
SVI (Switch Virtual Interface)
.

---

## Question 17

Which command or key combination allows a user to return to the previous level in the command hierarchy?

- [ ] end
- [x] **exit**
- [ ] Ctrl-Z
- [ ] Ctrl-C

> [!NOTE]
> **Explanation:** The command that allows a user to return to the previous level in the command hierarchy is:

exit
Explanation
:
end
: This command is used to exit configuration mode and return directly to privileged EXEC mode.
exit
: This command is used to move back one level in the command hierarchy. For example, if you are in interface configuration mode, issuing the 
exit
 command will take you back to global configuration mode.
Ctrl-Z
: This key combination is used to exit configuration mode and return directly to privileged EXEC mode, similar to the 
end
 command.
Ctrl-C
: This key combination is typically used to interrupt a command or process, stopping its execution. It is not specifically used to navigate the command hierarchy.
Therefore, the command to return to the previous level in the command hierarchy is 
exit
.

---

## Question 18

What are two characteristics of RAM on a Cisco device? (Choose two.)

- [ ] RAM provides nonvolatile storage.
- [x] **The configuration that is actively running on the device is stored in RAM.**
- [x] **The contents of RAM are lost during a power cycle.**
- [ ] RAM is a component in Cisco switches but not in Cisco routers.
- [ ] RAM is able to store multiple versions of IOS and configuration files.

> [!NOTE]
> **Explanation:** The two characteristics of RAM on a Cisco device are:

The configuration that is actively running on the device is stored in RAM.
Detail
: RAM stores the running configuration of the device. This configuration is what the device is actively using and can be changed dynamically as commands are entered.
The contents of RAM are lost during a power cycle.
Detail
: RAM is volatile memory, meaning that its contents are lost when the device is powered occ or restarted. Any changes made to the running configuration must be saved to non-volatile storage (like NVRAM) if they are to persist after a reboot.
Other options explained:
RAM provides nonvolatile storage
: This is incorrect. RAM is volatile storage, meaning its contents are lost when power is lost.
RAM is a component in Cisco switches but not in Cisco routers
: This is incorrect. Both Cisco switches and routers use RAM for their operations.
RAM is able to store multiple versions of IOS and configuration files
: This is incorrect. Multiple versions of the IOS and configuration files are typically stored in non-volatile memory such as Flash memory, not in RAM.
Therefore, the correct characteristics are:
The configuration that is actively running on the device is stored in RAM.
The contents of RAM are lost during a power cycle.

---

## Question 19

Which two host names follow the guidelines for naming conventions on Cisco IOS devices? (Choose two.)

- [ ] Branch2!
- [x] **RM-3-Switch-2A4**
- [ ] Floor(15)
- [ ] HO Floor 17
- [x] **SwBranch799**

> [!NOTE]
> **Explanation:** The two host names that follow the guidelines for naming conventions on Cisco IOS devices are:

RM-3-Switch-2A4
SwBranch799
Explanation
: Cisco IOS naming conventions typically require that host names:
Start with a letter.
Contain only letters, digits, and hyphens.
Be case-insensitive.
Avoid spaces and special characters.
Here are the details for each option:
Branch2!
: Contains an exclamation mark (!), which is not allowed.
RM-3-Switch-2A4
: Follows the guidelines (starts with a letter, contains only letters, digits, and hyphens).
Floor(15)
: Contains parentheses, which are not allowed.
HO Floor 17
: Contains spaces, which are not allowed.
SwBranch799
: Follows the guidelines (starts with a letter, contains only letters and digits).
Therefore, the correct host names are 
RM-3-Switch-2A4
 and 
SwBranch799
.

---

## Question 20

How is SSH diccerent from Telnet?

- [ ] SSH makes connections over the network, whereas Telnet is for out-of-band access.
- [x] **SSH provides security to remote sessions by encrypting messages and using user authentication. Telnet is considered insecure and sends messages in plaintext.**
- [ ] SSH requires the use of the PuTTY terminal emulation program. Tera Term must be used to connect to devices through the use of Telnet.
- [ ] SSH must be configured over an active network connection, whereas Telnet is used to connect to a device from a console connection.

> [!NOTE]
> **Explanation:** The key diccerence between SSH and Telnet is:

SSH provides security to remote sessions by encrypting messages and using user authentication. Telnet is considered insecure and sends messages in plaintext.
Explanation
:
SSH makes connections over the network, whereas Telnet is for out-of-band access
: This is incorrect. Both SSH and Telnet can be used for in-band management over the network. Out-of-band management typically uses a console or auxiliary port.
SSH provides security to remote sessions by encrypting messages and using user authentication. Telnet is considered insecure and sends messages in plaintext
: This is correct. SSH (Secure Shell) encrypts all data exchanged between the client and the server, providing secure communication over the network. Telnet, on the other hand, sends data, including passwords, in plaintext, making it vulnerable to interception and eavesdropping.
SSH requires the use of the PuTTY terminal emulation program. Tera Term must be used to connect to devices through the use of Telnet
: This is incorrect. While PuTTY and Tera Term are popular terminal emulation programs, they can both be used for SSH and Telnet connections. The choice of program is not limited to a specific protocol.
SSH must be configured over an active network connection, whereas Telnet is used to connect to a device from a console connection
: This is incorrect. Both SSH and Telnet can be configured and used over active network connections. Console connections are typically used for initial configuration and troubleshooting, but they are not specific to Telnet.
Therefore, the correct statement is:
SSH provides security to remote sessions by encrypting messages and using user authentication. Telnet is considered insecure and sends messages in plaintext.

---

## Question 21

Match the description with the associated IOS mode. (Not all options are used.)

An administrator is configuring a switch console port with a password. In what order will the administrator travel through the IOS modes of operation in order to reach the mode in which the configuration commands will be entered?

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-1-3-Checkpoint-Exam-Basic-Network-Connectivity-and-Communications-Exam-Answers-003.png)

- [x] **first mode ==> 
user EXEC mode**
- [x] **second mode ==> 
privileged EXEC mode**
- [x] **third mode ==>
 global configuration mode**
- [x] **final mode ==>
line configuration mode**

> [!NOTE]
> **Explanation:** To configure a switch console port with a password, the administrator will travel through the following IOS modes of operation in this order:

First mode
 ==> 
User EXEC mode
Detail
: When a user first accesses the switch, they are placed in User EXEC mode, which provides limited access to basic monitoring commands.
Second mode
 ==> 
Privileged EXEC mode
Detail
: To enter Privileged EXEC mode, the user must enter the 
enable
 command. This mode provides access to all monitoring commands and the ability to enter configuration modes.
Third mode
 ==> 
Global configuration mode
Detail
: From Privileged EXEC mode, the user can enter Global Configuration mode by entering the 
configure terminal
 command. This mode allows for the configuration of global settings on the switch.
Final mode
 ==> 
Line configuration mode
Detail
: From Global Configuration mode, the user can enter Line Configuration mode by entering the 
line console 0
 command. This mode is used to configure settings specific to the console line, such as setting a password.
The correct sequence to reach the mode in which the configuration commands will be entered is:
User EXEC mode
Privileged EXEC mode
Global Configuration mode
Line Configuration mode
Therefore, the path through the modes is:
First mode
 ==> User EXEC mode
Second mode
 ==> Privileged EXEC mode
Third mode
 ==> Global Configuration mode
Final mode
 ==> Line Configuration mode

---

## Question 22

What are three characteristics of an SVI? (Choose three.)

- [ ] It is designed as a security protocol to protect switch ports.
- [x] **It is not associated with any physical interface on a switch.**
- [ ] It is a special interface that allows connectivity by diccerent types of media.
- [ ] It is required to allow connectivity by any device at any location.
- [x] **It provides a means to remotely manage a switch.**
- [x] **It is associated with VLAN1 by default.**

> [!NOTE]
> **Explanation:** The three characteristics of an SVI (Switch Virtual Interface) are:

It is not associated with any physical interface on a switch.
Detail
: An SVI is a virtual interface, meaning it does not correspond to a physical port on the switch. Instead, it represents a VLAN and can be used to assign an IP address for that VLAN.
It provides a means to remotely manage a switch.
Detail
: An SVI can be assigned an IP address, allowing network administrators to remotely manage the switch via protocols such as Telnet or SSH.
It is associated with VLAN1 by default.
Detail
: By default, the SVI on a switch is associated with VLAN1, which is the default VLAN for all switch ports if no other VLANs are configured.
Other options explained:
It is designed as a security protocol to protect switch ports.
: This is incorrect. An SVI is not a security protocol but a virtual interface for a VLAN.
It is a special interface that allows connectivity by diccerent types of media.
: This is incorrect. An SVI provides IP-based connectivity within a VLAN and does not relate to diccerent types of physical media.
It is required to allow connectivity by any device at any location.
: This is incorrect. An SVI allows remote management and VLAN connectivity but is not required for device connectivity at any location.
Therefore, the correct characteristics of an SVI are:
It is not associated with any physical interface on a switch.
It provides a means to remotely manage a switch.
It is associated with VLAN1 by default.

---

## Question 23

What command is used to verify the condition of the switch interfaces, including the status of the interfaces and a configured IP address?

- [ ] ipconfig
- [ ] ping
- [ ] traceroute
- [x] **show ip interface brief**

> [!NOTE]
> **Explanation:** The command used to verify the condition of the switch interfaces, including the status of the interfaces and a configured IP address, is:

show ip interface brief
Explanation
:
ipconfig
: This command is used on Windows operating systems to display the IP configuration of a computer’s network interfaces. It is not a Cisco IOS command.
ping
: This command is used to test connectivity between devices by sending ICMP Echo Request packets. It does not provide detailed information about the status of switch interfaces.
traceroute
: This command is used to determine the path packets take to reach a destination. It does not provide information about the status of switch interfaces.
show ip interface brief
: This Cisco IOS command provides a summary of the status of all interfaces on a switch or router, including IP addresses, interface status (up/down), and protocol status. It is the appropriate command for verifying the condition of switch interfaces.
Therefore, the correct command is:
show ip interface brief

---

## Question 24

Match the description with the associated IOS mode.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-1-3-Checkpoint-Exam-Basic-Network-Connectivity-and-Communications-Exam-Answers-004.png)

- [x] **changes made accect the operation of the device as a whole ==> 
global configuration mode**
- [x] **accessed by entering the enable command ==> 
privileged EXEC mode**
- [x] **identified by a prompt ending with the # character ==> 
privileged EXEC mode**
- [x] **limited number of basic monitoring commands ==> 
user EXEC mode**
- [x] **accessed by entering the configure terminal command ==> 
global configuration mode**
- [x] **the first entrance into the CLI of an IOS device ==> 
user EXEC mode**

> [!NOTE]
> **Explanation:** Changes made accect the operation of the device as a whole
 ==> 
Global Configuration Mode
Detail
: In Global Configuration Mode, changes accect the entire device. This mode is used to configure global settings.
Accessed by entering the enable command
 ==> 
Privileged EXEC Mode
Detail
: To enter Privileged EXEC Mode, the 
enable
 command is used. This mode provides access to all monitoring commands and higher configuration modes.
Identified by a prompt ending with the # character
 ==> 
Privileged EXEC Mode
Detail
: The prompt in Privileged EXEC Mode ends with the 
#
 character, indicating a higher level of access.
Limited number of basic monitoring commands
 ==> 
User EXEC Mode
Detail
: User EXEC Mode provides a limited set of basic monitoring commands and is the initial mode when accessing the CLI.
Accessed by entering the configure terminal command
 ==> 
Global Configuration Mode
Detail
: To enter Global Configuration Mode from Privileged EXEC Mode, the 
configure terminal
 command is used.
The first entrance into the CLI of an IOS device
 ==> 
User EXEC Mode
Detail
: When first accessing the CLI of an IOS device, the user is placed in User EXEC Mode, indicated by a 
>
 prompt.
Therefore, the matches are:
Changes made accect the operation of the device as a whole
 ==> 
Global Configuration Mode
Accessed by entering the enable command
 ==> 
Privileged EXEC Mode
Identified by a prompt ending with the # character
 ==> 
Privileged EXEC Mode
Limited number of basic monitoring commands
 ==> 
User EXEC Mode
Accessed by entering the configure terminal command
 ==> 
Global Configuration Mode
The first entrance into the CLI of an IOS device
 ==> 
User EXEC Mode

---

## Question 25

Match the definitions to their respective CLI hot keys and shortcuts.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-1-3-Checkpoint-Exam-Basic-Network-Connectivity-and-Communications-Exam-Answers-005.png)

- [x] **displays the next screen ==> 
space bar**
- [x] **scrolls backwards through previously entered commands ==> 
Up Arrow**
- [x] **provides context-sensitive help ==> 
?**
- [x] **completes abbreviated commands and parameters ==> 
Tab**
- [x] **aborts commands such as trace and ping ==> 
Ctrl-Shift-6**

> [!NOTE]
> **Explanation:** Displays the next screen
 ==> 
Space Bar
Detail
: Pressing the Space Bar key in the CLI displays the next screen of output, useful when output extends beyond one screen.
Scrolls backwards through previously entered commands
 ==> 
Up Arrow
Detail
: The Up Arrow key allows users to scroll backwards through the command history, making it easier to re-enter or edit previous commands.
Provides context-sensitive help
 ==> 
?
Detail
: Typing the 
?
 key in the CLI provides context-sensitive help, displaying available commands or parameters relevant to the current command context.
Completes abbreviated commands and parameters
 ==> 
Tab
Detail
: The Tab key is used to autocomplete commands or parameters in the CLI, saving time and reducing errors.
Aborts commands such as trace and ping
 ==> 
Ctrl-Shift-6
Detail
: The Ctrl-Shift-6 key combination is used to interrupt and abort commands like trace and ping, stopping their execution.
Therefore, the correct matches are:
Displays the next screen
 ==> 
Space Bar
Scrolls backwards through previously entered commands
 ==> 
Up Arrow
Provides context-sensitive help
 ==> 
?
Completes abbreviated commands and parameters
 ==> 
Tab
Aborts commands such as trace and ping
 ==> 
Ctrl-Shift-6

---

## Question 26

In the show running-config command, which part of the syntax is represented by running-config?

- [ ] the command
- [x] **a keyword**
- [ ] a variable
- [ ] a prompt

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
In the 
show running-config
 command, the part of the syntax represented by 
running-config
 is:
A keyword
Explanation
:
The Command
: The entire command is 
show running-config
. It is used to display the current configuration that is actively running on the device.
A Keyword
: 
running-config
 is a keyword within the command. In the context of Cisco IOS commands, keywords are predefined words that are recognized by the command interpreter. They represent specific functions or options that the command can execute. Here, 
running-config
 specifies that the command should display the current configuration of the device.
A Variable
: A variable in a command represents a user-defined value or parameter that can change. It allows flexibility in the command to accept diccerent inputs. In the 
show running-config
 command, there are no variables; all parts of the command are fixed keywords.
A Prompt
: A prompt in a command-line interface (CLI) is the text or symbol displayed to the user indicating that the system is ready to accept input. For example, the 
Router#
 prompt in Cisco IOS indicates that the device is in privileged EXEC mode and ready for commands. In this context, 
running-config
 is not a prompt.
So, within the 
show running-config
 command, 
running-config
 is a 
keyword
.

---

## Question 27

After making configuration changes on a Cisco switch, a network administrator issues a copy running-config startup-config command. What is the result of issuing this command?

- [ ] The new configuration will be stored in flash memory.
- [x] **The new configuration will be loaded if the switch is restarted.**
- [ ] The current IOS file will be replaced with the newly configured file.
- [ ] The configuration changes will be removed and the original configuration will be restored.

> [!NOTE]
> **Explanation:** After making configuration changes on a Cisco switch, a network administrator issues the 
copy running-config startup-config
 command. The result of issuing this command is:

The new configuration will be loaded if the switch is restarted.
Explanation
:
The new configuration will be stored in flash memory
: This is incorrect. The 
copy running-config startup-config
 command copies the current configuration to NVRAM (non-volatile RAM), not flash memory.
The new configuration will be loaded if the switch is restarted
: This is correct. The 
copy running-config startup-config
 command saves the current running configuration to the startup configuration file in NVRAM. This ensures that the new configuration will be loaded the next time the switch is restarted.
The current IOS file will be replaced with the newly configured file
: This is incorrect. The IOS file is separate from the configuration files and is not accected by the 
copy running-config startup-config
 command.
The configuration changes will be removed and the original configuration will be restored
: This is incorrect. The 
copy running-config startup-config
 command saves the current configuration changes, so they are not removed but instead made persistent across reboots.
Therefore, issuing the 
copy running-config startup-config
 command ensures that 
the new configuration will be loaded if the switch is restarted
.

---

## Question 28

What command will prevent all unencrypted passwords from displaying in plain text in a configuration file?

- [ ] (config)# enable password secret
- [ ] (config)# enable secret Secret_Password
- [ ] (config-line)# password secret
- [x] **(config)# service password-encryption**
- [ ] (config)# enable secret Encrypted_Password

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
To prevent all configured passwords from appearing in plain text in configuration files, an administrator can execute the service password-encryption command. This command encrypts all configured passwords in the configuration file.

---

## Question 29

A network administrator enters the service password-encryption command into the configuration mode of a router. What does this command accomplish?

- [ ] This command encrypts passwords as they are transmitted across serial WAN links.
- [x] **This command prevents someone from viewing the running configuration passwords.**
- [ ] This command enables a strong encryption algorithm for the enable secret password command.
- [ ] This command automatically encrypts passwords in configuration files that are currently stored in NVRAM.
- [ ] This command provides an exclusive encrypted password for external service personnel who are required to do router maintenance.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The startup-config and running-config files display most passwords in plaintext. Use the service password-encryption global config command to encrypt all plaintext passwords in these files.

---

## Question 30

What method can be used by two computers to ensure that packets are not dropped because too much data is being sent too quickly?

- [ ] encapsulation
- [x] **flow control**
- [ ] access method
- [ ] response timeout

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
In order for two computers to be able to communicate eccectively, there must be a mechanism that allows both the source and destination to set the timing of the transmission and receipt of data. Flow control allows for this by ensuring that data is not sent too fast for it to be received properly.

---

## Question 31

Which statement accurately describes a TCP/IP encapsulation process when a PC is sending data to the network?

- [ ] Data is sent from the internet layer to the network access layer.
- [ ] Packets are sent from the network access layer to the transport layer.
- [x] **Segments are sent from the transport layer to the internet layer.**
- [ ] Frames are sent from the network access layer to the internet layer.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
When the data is traveling from the PC to the network, the transport layer sends segments to the internet layer. The internet layer sends packets to the network access layer, which creates frames and then converts the frames to bits. The bits are released to the network media.

---

## Question 32

What three application layer protocols are part of the TCP/IP protocol suite? (Choose three.)

- [ ] ARP
- [x] **DHCP**
- [x] **DNS**
- [x] **FTP**
- [ ] NAT
- [ ] PPP

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
DNS, DHCP, and FTP are all application layer protocols in the TCP/IP protocol suite. ARP and PPP are network access layer protocols, and NAT is an internet layer protocol in the TCP/IP protocol suite.

---

## Question 33

Match the description to the organization.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-1-3-Checkpoint-Exam-Basic-Network-Connectivity-and-Communications-Exam-Answers-006.png)

- [x] **This organization is responsible for overseeing and managing IP address allocation, domain name management, and protocol identifiers. ==> 
IANA**
- [x] **This organization is the largest developer of international standards in the world for a wide variety of products and services. It is known for its Open Systems Interconnection (OSI) reference model. ==> 
ISO**
- [x] **This organization promotes the open development, evolution, and use of the Internet throughout the world. ==> 
ISOC**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The EIA is an international standards and trade organization for electronics organizations. It is best known for its standards related to electrical wiring, connectors, and the 19-inch racks used to mount networking equipment.

---

## Question 34

Which name is assigned to the transport layer PDU?

- [ ] bits
- [ ] data
- [ ] frame
- [ ] packet
- [x] **segment**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Application data is passed down the protocol stack on its way to be transmitted across the network media. During the process, various protocols add information to it at each level. At each stage of the process, a PDU (protocol data unit) has a diccerent name to reflect its new functions. The PDUs are named according to the protocols of the TCP/IP suite: Data – The general term for the PDU used at the application layer.

Segment – transport layer PDU

Packet – network layer PDU

Frame – data link layer PDU

Bits – A physical layer PDU used when physically transmitting data over the medium

---

## Question 35

When IPv4 addressing is manually configured on a web server, which property of the IPv4 configuration identifies the network and host portion for an IPv4 address?

- [ ] DNS server address
- [x] **subnet mask**
- [ ] default gateway
- [ ] DHCP server address

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
There are several components that need to be entered when configuring IPv4 for an end device: IPv4 address – uniquely identifies an end device on the network

Subnet mask – determines the network address portion and host portion for an IPv4 address

Default gateway – the IP address of the router interface used for communicating with hosts in another network

DNS server addres s – the IP address of the Domain Name System (DNS) server

DHCP server address (if DHCP is used) is not configured manually on end devices. It will be provided by a DHCP server when an end device requests an IP address.

---

## Question 36

What process involves placing one PDU inside of another PDU?

- [x] **encapsulation**
- [ ] encoding
- [ ] segmentation
- [ ] flow control

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
When a message is placed inside of another message, this is known as encapsulation. On networks, encapsulation takes place when one protocol data unit is carried inside of the data field of the next lower protocol data unit.

---

## Question 37

What layer is responsible for routing messages through an internetwork in the TCP/IP model?

- [x] **internet**
- [ ] transport
- [ ] network access
- [ ] session

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The TCP/IP model consists of four layers: application, transport, internet, and network access. Of these four layers, it is the internet layer that is responsible for routing messages. The session layer is not part of the TCP/IP model but is rather part of the OSI model.

---

## Question 38

For the TCP/IP protocol suite, what is the correct order of events when a Telnet message is being prepared to be sent over the network?

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-1-3-Checkpoint-Exam-Basic-Network-Connectivity-and-Communications-Exam-Answers-007.png)

- [x] **The IP header is added. ==> 
Third**
- [x] **The TCP header is added. ==> 
Second**
- [x] **The Ethernet header is added. ==> 
Fourth**
- [x] **The Telnet-formatted data is provided to the next layer. ==> 
First**

> [!NOTE]
> **Explanation:** Explanation & Hint:
“This organization is responsible for overseeing and managing IP address allocation, domain name management, and protocol identifiers.”
 This description matches with 
IANA (Internet Assigned Numbers Authority)
. IANA is responsible for coordinating some of the key elements that keep the Internet running smoothly. Among its responsibilities are the allocation of IP addresses and domain management.
“This organization is the largest developer of international standards in the world for a wide variety of products and services. It is known for its Open Systems Interconnection (OSI) reference model.”
 This description matches with 
ISO (International Organization for Standardization)
. ISO is an independent, non-governmental international organization with a membership of national standards bodies, and it has developed the OSI model, which is a conceptual framework used to understand and design the architecture of network systems.
“This organization promotes the open development, evolution, and use of the Internet throughout the world.”
 This description matches with 
ISOC (Internet Society)
. ISOC is an organization founded in 1992 to provide leadership in internet-related standards, education, access, and policy.
These organizations play a critical role in the maintenance and advancement of internet technologies and standards.

---

## Question 39

Which PDU format is used when bits are received from the network medium by the NIC of a host?

- [ ] file
- [x] **frame**
- [ ] packet
- [ ] segment

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
When received at the physical layer of a host, the bits are formatted into a frame at the data link layer. A packet is the PDU at the network layer. A segment is the PDU at the transport layer. A file is a data structure that may be used at the application layer.

---

## Question 40

Refer to the exhibit. ServerB is attempting to contact HostA. Which two statements correctly identify the addressing that ServerB will generate in the process? (Choose two.)

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/CCNA1-v7-–-ITNv7-–-Modules-1-–-3-Basic-Network-Connectivity-and-Communications-Exam-Answers-03-1.jpg)

- [ ] ServerB will generate a packet with the destination IP address of RouterB.
- [ ] ServerB will generate a frame with the destination MAC address of SwitchB.
- [ ] ServerB will generate a packet with the destination IP address of RouterA.
- [x] **ServerB will generate a frame with the destination MAC address of RouterB.**
- [x] **ServerB will generate a packet with the destination IP address of HostA.**
- [ ] ServerB will generate a frame with the destination MAC address of RouterA.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
In order to send data to HostA, ServerB will generate a packet that contains the IP address of the destination device on the remote network and a frame that contains the MAC address of the default gateway device on the local network.

---

## Question 41

Refer to the exhibit. ServerB is attempting to contact HostA. Which two statements  correctly identify the addressing that ServerB will generate in the process? (Choose two.)

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Modules-1-%E2%80%93-3-Basic-Network-Connectivity-and-Communications-Exam-Answers-03-1.jpg)

- [ ] ServerB will generate a frame with the destination MAC address of SwitchB.
- [ ] ServerB will generate a packet with the destination IP address of RouterA.
- [x] **ServerB will generate a frame with the destination MAC address of RouterB.**
- [x] **ServerB will generate a packet with the destination IP address of HostA.**
- [ ] ServerB will generate a frame with the destination MAC address of RouterA

---

## Question 42

Which method allows a computer to react accordingly when it requests data from a server and the server takes too long to respond?

- [ ] encapsulation
- [ ] flow control
- [ ] access method
- [x] **response timeout**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
If a computer makes a request and does not hear a response within an acceptable amount of time, the computer assumes that no answer is coming and reacts accordingly.

---

## Question 43

A web client is receiving a response for a web page from a web server. From the perspective of the client, what is the correct order of the protocol stack that is used to decode the received transmission?

- [x] **Ethernet, IP, TCP, HTTP**
- [ ] HTTP, TCP, IP, Ethernet
- [ ] Ethernet, TCP, IP, HTTP
- [ ] HTTP, Ethernet, IP, TCP

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
1. HTTP governs the way that a web server and client interact.

2. TCP manages individual conversations between web servers and clients.

3. IP is responsible for delivery across the best path to the destination.

4. Ethernet takes the packet from IP and formats it for transmission.

---

## Question 44

Which two OSI model layers have the same functionality as a single layer of the TCP/IP model? (Choose two.)

- [x] **data link**
- [ ] network
- [x] **physical**
- [ ] session
- [ ] transport

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The OSI data link and physical layers together are equivalent to the TCP/IP network access layer. The OSI transport layer is functionally equivalent to the TCP/IP transport layer, and the OSI network layer is equivalent to the TCP/IP internet layer. The OSI application, presentation, and session layers are functionally equivalent to the application layer within the TCP/IP model.

---

## Question 45

Which two OSI model layers have the same functionality as a single layer of the TCP/IP model?  (Choose two.)

- [x] **data link**
- [ ] network
- [x] **physical**
- [ ] session
- [ ] transport

---

## Question 46

At which layer of the OSI model would a logical address be added during encapsulation?

- [ ] physical layer
- [ ] data link layer
- [x] **network layer**
- [ ] transport layer

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Logical addresses, also known as IP addresses, are added at the network layer. Physical addresses are edded at the data link layer. Port addresses are added at the transport layer. No addresses are added at the physical layer.

---

## Question 47

What is a characteristic of multicast messages?

- [x] **They are sent to a select group of hosts.**
- [ ] They are sent to all hosts on a network.
- [ ] They must be acknowledged.
- [ ] They are sent to a single destination.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Multicast is a one-to-many type of communication. Multicast messages are addressed to a specific multicast group.

---

## Question 48

Which statement is correct about network protocols?

- [ ] Network protocols define the type of hardware that is used and how it is mounted in racks.
- [x] **They define how messages are exchanged between the source and the destination.**
- [ ] They all function in the network access layer of TCP/IP.
- [ ] They are only required for exchange of messages between devices on remote networks.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Network protocols are implemented in hardware, or software, or both. They interact with each other within diccerent layers of a protocol stack. Protocols have nothing to do with the installation of the network equipment. Network protocols are required to exchange information between source and destination devices in both local and remote networks.

---

## Question 49

What is an advantage of network devices using open standard protocols?

- [ ] Network communications is confined to data transfers between devices from the same vendor.
- [x] **A client host and a server running diccerent operating systems can successfully exchange data.**
- [ ] Internet access can be controlled by a single ISP in each market.
- [ ] Competition and innovation are limited to specific types of products.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
An advantage of network devices implementing open standard protocols, such as from the TCP/IP suite, is that clients and servers running diccerent operating systems can communicate with each other. Open standard protocols facilitate innovation and competition between vendors and across markets, and can reduce the occurrence of monopolies in networking markets.

---

## Question 50

Which device performs the function of determining the path that messages should take through internetworks?

- [x] **a router**
- [ ] a firewall
- [ ] a web server
- [ ] a DSL modem

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
A router is used to determine the path that the messages should take through the network. A firewall is used to filter incoming and outgoing traccic. A DSL modem is used to provide Internet connection for a home or an organization.

---

## Question 51

Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.

What is the IP address of the switch virtual interface (SVI) on Switch0?

![exhibit](https://infraexam.com/wp-content/uploads/2023/12/CCNA-1-v7-%E2%80%93-Modules-1-3-Basic-Network-Connectivity-and-Communications-Exam-Answers-ITN-v7.02-PT-01.png)

- [x] **192.168.5.10**
- [ ] 192.168.10.5
- [ ] 192.168.10.1
- [ ] 192.168.5.0

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
After the enable command is issued, the show running-configuration command or the show ip interfaces brief command will display the IP address of the switch virtual interface (SVI).

---

## Question 52

Why would a Layer 2 switch need an IP address?

- [ ] to enable the switch to send broadcast frames to attached PCs
- [ ] to enable the switch to function as a default gateway
- [x] **to enable the switch to be managed remotely**
- [ ] to enable the switch to receive frames from attached PCs

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
A switch, as a Layer 2 device, does not need an IP address to transmit frames to attached devices. However, when a switch is accessed remotely through the network, it must have a Layer 3 address. The IP address must be applied to a virtual interface rather than to a physical interface. Routers, not switches, function as default gateways.

---

## Question 53

Refer to the exhibit. An administrator is trying to configure the switch but receives the error message that is displayed in the exhibit. What is the problem?

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/CCNA1-v7-–-ITNv7-–-Modules-1-–-3-Basic-Network-Connectivity-and-Communications-Exam-Answers-01.png)

- [ ] The entire command, configure terminal, must be used.
- [ ] The administrator is already in global configuration mode.
- [x] **The administrator must first enter privileged EXEC mode before issuing the command.**
- [ ] The administrator must connect via the console port to access global configuration mode.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
In order to enter global configuration mode, the command configure terminal , or a shortened version such as config t , must be entered from privileged EXEC mode. In this scenario the administrator is in user EXEC mode, as indicated by the > symbol after the hostname. The administrator would need to use the enable command to move into privileged EXEC mode before entering the configure terminal command.

---

## Question 54

What term describes a network owned by one organization that provides safe and secure access to individuals who work for a diccerent organization?

- [x] **extranet**
- [ ] cloud
- [ ] BYOD
- [ ] quality of servic

> [!NOTE]
> **Explanation:** Explanation & Hint:
The term that describes a network owned by one organization that provides safe and secure access to individuals who work for a diccerent organization is “extranet.” An extranet is a private network that allows authorized users from external organizations to access certain resources, such as files, applications, or communication tools, while maintaining security and controlled access.

---

## Question 55

What term describes storing personal files on servers over the internet to provide access anywhere, anytime, and on any device?

- [x] **cloud**
- [ ] BYOD
- [ ] quality of service
- [ ] converged network

> [!NOTE]
> **Explanation:** Explanation & Hint:
The term that describes storing personal files on servers over the internet to provide access anywhere, anytime, and on any device is “cloud.” This approach is commonly referred to as “cloud storage” or “cloud computing,” where data is stored and managed in remote data centers accessible via the internet, occering convenience and accessibility across various devices and locations.

---

## Question 56

What term describes a network where one computer can be both client and server?

- [x] **peer-to-peer**
- [ ] cloud
- [ ] BYOD
- [ ] quality of service

> [!NOTE]
> **Explanation:** Explanation & Hint:
The term that describes a network where one computer can be both a client and a server is “peer-to-peer” (P2P) networking. In a peer-to-peer network, each computer (or peer) can act as both a client and a server, allowing them to share resources and information directly with one another without the need for a centralized server.

---

## Question 57

What term describes a type of network used by people who work from home or from a small remote occice?

- [x] **SOHO network**
- [ ] BYOD
- [ ] quality of service
- [ ] converged network

> [!NOTE]
> **Explanation:** Explanation & Hint:
The term that describes a type of network used by people who work from home or from a small remote occice is a “SOHO network.” SOHO stands for “Small Occice/Home Occice,” and it refers to networks designed to meet the needs of individuals or small businesses working from home or in small remote occice locations. These networks are typically smaller in scale compared to large corporate networks and are tailored to the requirements of remote or home-based workers.

---

## Question 58

What term describes a computing model where server software runs on dedicated computers?

- [x] **client/server**
- [ ] internet
- [ ] intranet
- [ ] extranet

> [!NOTE]
> **Explanation:** Explanation & Hint:
The term that describes a computing model where server software runs on dedicated computers is “client/server.” In a client/server computing model, dedicated server computers provide services or resources to client computers, which request and use these services. This architecture is common in networked systems where multiple clients interact with one or more dedicated server machines to access data, applications, or resources.

---

## Question 59

What term describes a type of network used by people who work from home or from a small remote occice?

- [x] **SOHO network**
- [ ] internet
- [ ] intranet
- [ ] extranet

> [!NOTE]
> **Explanation:** Explanation & Hint:
The term that describes a type of network used by people who work from home or from a small remote occice is a “SOHO network.” SOHO stands for “Small Occice/Home Occice,” and it refers to networks designed to meet the needs of individuals or small businesses working from home or in small remote occice locations. These networks are typically smaller in scale compared to large corporate networks and are tailored to the requirements of remote or home-based workers.

---

## Question 60

What term describes a technology that allows devices to connect to the LAN using an electrical outlet?

- [x] **powerline networking**
- [ ] internet
- [ ] intranet
- [ ] extranet

> [!NOTE]
> **Explanation:** Explanation & Hint:
The term that describes a technology that allows devices to connect to the LAN (Local Area Network) using an electrical outlet is “powerline networking.” Powerline networking uses a building’s existing electrical wiring to transmit data signals between devices, eccectively turning electrical outlets into network connections. This technology is a convenient way to extend network connectivity within a building without the need for additional Ethernet cables or Wi-Fi networks.

---

## Question 61

What term describes a policy that allows network devices to manage the flow of data to give priority to voice and video?

- [x] **quality of service**
- [ ] internet
- [ ] intranet
- [ ] extranet

> [!NOTE]
> **Explanation:** Explanation & Hint:
The term that describes a policy that allows network devices to manage the flow of data to give priority to voice and video is “quality of service” or “QoS.” Quality of service is a set of techniques and mechanisms used to prioritize certain types of data traccic over others to ensure a consistent and acceptable level of service quality, especially for real-time or latency-sensitive applications like voice and video communication. QoS policies help manage and allocate network resources to ensure a smoother and more reliable experience for these applications.

---

## Question 62

What term describes a private collection of LANs and WANs that belongs to an organization?

- [x] **intranet**
- [ ] internet
- [ ] extranet
- [ ] peer-to-peer

> [!NOTE]
> **Explanation:** Explanation & Hint:
The term that describes a private collection of LANs and WANs that belongs to an organization is “intranet.” An intranet is a network that is used internally within an organization to facilitate communication, collaboration, and information sharing among its employees, typically in a secure and private manner. It is not accessible to the public and is designed to serve the organization’s internal needs.

---

## Question 63

What term describes the ability to use personal devices across a business or campus network?

- [x] **BYOD**
- [ ] internet
- [ ] intranet
- [ ] extranet

> [!NOTE]
> **Explanation:** Explanation & Hint:
The term that describes the ability to use personal devices across a business or campus network is “BYOD,” which stands for “Bring Your Own Device.” BYOD is a policy or practice that allows employees, students, or users to bring their personal devices, such as smartphones, tablets, or laptops, and connect them to a business or campus network to access resources, applications, and services.

---

## Question 64

At which OSI layer is a source IP address added to a PDU during the encapsulation process?

- [x] **network layer**
- [ ] data link layer
- [ ] transport layer
- [ ] application layer

> [!NOTE]
> **Explanation:** Explanation & Hint:
The source IP address is added to a Protocol Data Unit (PDU) at the “network layer,” which is also known as OSI Layer 3. The network layer is responsible for routing and forwarding data between diccerent networks, and IP addresses are used to uniquely identify the source and destination of data at this layer.

---

## Question 65

At which OSI layer is a destination port number added to a PDU during the encapsulation process?

- [x] **transport layer**
- [ ] data link layer
- [ ] network layer
- [ ] application layer

> [!NOTE]
> **Explanation:** Explanation & Hint:
A destination port number is added to a Protocol Data Unit (PDU) during the encapsulation process at the “transport layer,” which is also known as OSI Layer 4. Port numbers are used to direct data to specific services or processes on a device, allowing for the proper delivery and communication of data between applications.

---

## Question 66

At which OSI layer is data added to a PDU during the encapsulation process?

- [x] **application layer**
- [ ] data link layer
- [ ] network layer
- [ ] transport layer

> [!NOTE]
> **Explanation:** Explanation & Hint:
Data is added to a Protocol Data Unit (PDU) during the encapsulation process at the “application layer,” which is also known as OSI Layer 7. The application layer is responsible for providing the interface between the software applications and the lower layers of the OSI model, allowing applications to exchange data. Data from an application is divided into PDUs at the application layer, and then it is encapsulated in lower-layer PDUs as it moves down the OSI model.

---

## Question 67

At which OSI layer is a source IP address added to a PDU during the encapsulation process?

- [x] **network layer**
- [ ] data link layer
- [ ] application layer
- [ ] presentation layer

> [!NOTE]
> **Explanation:** Explanation & Hint:
A source IP address is added to a Protocol Data Unit (PDU) during the encapsulation process at the “network layer,” which is also known as OSI Layer 3. The network layer is responsible for routing and forwarding data between diccerent networks, and IP addresses are used to uniquely identify the source and destination of data at this layer.

---

## Question 68

At which OSI layer is data added to a PDU during the encapsulation process?

- [x] **application layer**
- [ ] transport layer
- [ ] network layer
- [ ] presentation layer

> [!NOTE]
> **Explanation:** Explanation & Hint:
Data is added to a Protocol Data Unit (PDU) during the encapsulation process at the “application layer,” which is also known as OSI Layer 7. The application layer is responsible for providing the interface between the software applications and the lower layers of the OSI model, allowing applications to exchange data. Data from an application is divided into PDUs at the application layer, and then it is encapsulated in lower-layer PDUs as it moves down the OSI model.

---

## Question 69

At which OSI layer is a destination IP address added to a PDU during the encapsulation process?

- [x] **network layer**
- [ ] application layer
- [ ] transport layer
- [ ] presentation layer

> [!NOTE]
> **Explanation:** Explanation & Hint:
A destination IP address is added to a Protocol Data Unit (PDU) during the encapsulation process at the “network layer,” which is also known as OSI Layer 3. The network layer is responsible for routing and forwarding data between diccerent networks, and IP addresses are used to uniquely identify the source and destination of data at this layer.

---

## Question 70

At which OSI layer is a source MAC address added to a PDU during the encapsulation process?

- [x] **data link layer**
- [ ] application layer
- [ ] transport layer
- [ ] presentation layer

> [!NOTE]
> **Explanation:** Explanation & Hint:
A source MAC (Media Access Control) address is added to a Protocol Data Unit (PDU) during the encapsulation process at the “data link layer,” which is also known as OSI Layer 2. The data link layer is responsible for the addressing and control of data frames on the local network segment, and MAC addresses are used to identify individual devices on the same network segment at this layer.

---

## Question 71

At which OSI layer is a source port number added to a PDU during the encapsulation process?

- [x] **transport layer**
- [ ] application layer
- [ ] network layer
- [ ] presentation layer

> [!NOTE]
> **Explanation:** Explanation & Hint:
A source port number is added to a Protocol Data Unit (PDU) during the encapsulation process at the “transport layer,” which is also known as OSI Layer 4. Port numbers are used to identify specific processes or services on a device, and they are utilized at the transport layer to ensure that data is delivered to the correct application or service on the receiving end

---

## Question 72

At which OSI layer is a destination MAC address added to a PDU during the encapsulation process?

- [x] **data link layer**
- [ ] transport layer
- [ ] application layer
- [ ] network layer

> [!NOTE]
> **Explanation:** Explanation & Hint:
A destination MAC (Media Access Control) address is added to a Protocol Data Unit (PDU) during the encapsulation process at the “data link layer,” which is also known as OSI Layer 2. The data link layer is responsible for addressing and controlling data frames within the local network segment, and MAC addresses are used to identify specific devices on the same network segment at this layer.

---

## Question 73

At which OSI layer is a source port number added to a PDU during the encapsulation process?

- [x] **transport layer**
- [ ] network layer
- [ ] application layer
- [ ] data link layer

> [!NOTE]
> **Explanation:** Explanation & Hint:
A source port number is added to a Protocol Data Unit (PDU) during the encapsulation process at the “transport layer,” which is also known as OSI Layer 4. Port numbers are used to identify specific processes or services on a device, and they are utilized at the transport layer to ensure that data is delivered to the correct application or service on the receiving end.

---

