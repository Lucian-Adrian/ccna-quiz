# CCNA 1 ITN v7.02 ITNv7 Course Final Exam Answers 2026

Source: [https://infraexam.com/ccna1-v7/ccna1-v7-itnv7-final-exam-answers/](https://infraexam.com/ccna1-v7/ccna1-v7-itnv7-final-exam-answers/)

Total Questions: 166

---

## Question 1

A client packet is received by a server. The packet has a destination port number of 143. What service is the client requesting?

- [ ] Telnet
- [ ] SSH
- [x] **IMAP**
- [ ] FTP
- [ ] Telnet, typically used for remote command-line access, uses port 23.
- [ ] SSH (Secure Shell), used for secure remote access, uses port 22.
- [ ] FTP (File Transfer Protocol), used for transferring files, uses ports 20 and 21.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The client is requesting the IMAP (Internet Message Access Protocol) service. In TCP/IP networking, port numbers are used to distinguish different services. Port number 143 is specifically assigned to the IMAP service, which is used for retrieving emails from a mail server.
This is different from the other services you mentioned:
Telnet, typically used for remote command-line access, uses port 23.
SSH (Secure Shell), used for secure remote access, uses port 22.
FTP (File Transfer Protocol), used for transferring files, uses ports 20 and 21.

---

## Question 2

Which two functions are performed at the MAC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.) —> 
Case A

- [x] **applies delimiting of Ethernet frame fields to synchronize communication between nodes**
- [x] **applies source and destination MAC addresses to Ethernet frame**
- [ ] places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame
- [ ] handles communication between upper layer networking software and Ethernet NIC hardware
- [ ] adds Ethernet control information to network protocol data

---

## Question 3

Which two functions are performed at the MAC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.) —> 
Case B

- [x] **implements a process to delimit fields within an Ethernet 2 frame**
- [x] **implements trailer with frame check sequence for error detection**
- [ ] handles communication between upper layer networking software and Ethernet NIC hardware
- [ ] adds Ethernet control information to network protocol data
- [ ] places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame

---

## Question 4

Which two functions are performed at the MAC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.) —> 
Case C

- [x] **implements CSMA/CD over legacy shared half-duplex media**
- [x] **integrates Layer 2 flows between 10 Gigabit Ethernet over fiber and 1 Gigabit Ethernet over copper**
- [ ] handles communication between upper layer networking software and Ethernet NIC hardware
- [ ] adds Ethernet control information to network protocol data
- [ ] enables IPv4 and IPv6 to utilize the same physical medium

---

## Question 5

A new network administrator has been asked to enter a banner message on a Cisco device. What is the fastest way a network administrator could test whether the banner is properly configured?

- [ ] Enter CTRL-Z at the privileged mode prompt.
- [ ] Power cycle the device.
- [x] **Exit privileged EXEC mode and press Enter.**
- [ ] Exit global configuration mode.
- [ ] Reboot the device.

> [!NOTE]
> **Explanation:** Explanation & Hint:
While at the privileged mode prompt such as Router#, type exit, press Enter, and the banner message appears. Power cycling a network device that has had the banner motd command issued will also display the banner message, but this is not a quick way to test the configuration.

---

## Question 6

What happens when the 
transport input ssh
 command is entered on the switch vty lines?

- [ ] The switch requires a username/password combination for remote access.
- [ ] The SSH client on the switch is enabled.
- [x] **Communication between the switch and remote users is encrypted.**
- [ ] The switch requires remote connections via a proprietary client software.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The transport input ssh command when entered on the switch vty (virtual terminal lines) will encrypt all inbound controlled telnet connections.

---

## Question 7

What is the subnet ID associated with the IPv6 address 2001:DA48:FC5:A4:3D1B::1/64?

- [ ] 2001:DA48::/64​
- [ ] 2001::/64
- [x] **2001:DA48:FC5:A4::/64​**
- [ ] 2001:DA48:FC5::A4:/64​

> [!NOTE]
> **Explanation:** Explanation:
The /64 represents the network and subnet IPv6 fields. The fourth field of hexadecimal digits is referred to as the subnet ID. The subnet ID for this address is 2001:DA48:FC5:A4::0/64.​​

---

## Question 8

A client is using SLAAC to obtain an IPv6 address for its interface. After an address has been generated and applied to the interface, what must the client do before it can begin to use this IPv6 address?

- [ ] It must send an ICMPv6 Router Solicitation message to determine what default gateway it should use.
- [ ] It must send a DHCPv6 INFORMATION-REQUEST message to request the address of the DNS server.
- [ ] It must send a DHCPv6 REQUEST message to the DHCPv6 server to request permission to use this address.
- [x] **It must send an ICMPv6 Neighbor Solicitation message to ensure that the address is not already in use on the network.**

> [!NOTE]
> **Explanation:** Explanation:
Stateless DHCPv6 or stateful DHCPv6 uses a DHCP server, but Stateless Address Autoconfiguration (SLAAC) does not. A SLAAC client can automatically generate an address that is based on information from local routers via Router Advertisement (RA) messages. Once an address has been assigned to an interface via SLAAC, the client must ensure via Duplicate Address Detection (DAD) that the address is not already in use. It does this by sending out an ICMPv6 Neighbor Solicitation message and listening for a response. If a response is received, then it means that another device is already using this address.

---

## Question 9

Which range of link-local addresses can be assigned to an IPv6-enabled interface?​

- [x] **FE80::/10**
- [ ] FDEE::/7​
- [ ] cc00::/8​
- [ ] FEC0::/10​

> [!NOTE]
> **Explanation:** Explanation:
Link-local addresses are in the range of FE80::/10 to FEBF::/10. The original IPv6 specification defined site-local addresses and used the prefix range FEC0::/10, but these addresses were deprecated by the IETF in favor of unique local addresses. FDEE::/7 is a unique local address because it is in the range of FC00::/7 to FDcc::/7. IPv6 multicast addresses have the prefix cc00::/8.

---

## Question 10

What mechanism is used by a router to prevent a received IPv4 packet from traveling endlessly on a network?

- [ ] It checks the value of the TTL field and if it is 100, it discards the packet and sends a Destination Unreachable message to the source host.
- [ ] It increments the value of the TTL field by 1 and if the result is 100, it discards the packet and sends a Parameter Problem message to the source host.
- [ ] It checks the value of the TTL field and if it is 0, it discards the packet and sends a Destination Unreachable message to the source host.
- [x] **It decrements the value of the TTL field by 1 and if the result is 0, it discards the packet and sends a Time Exceeded message to the source host.**
- [ ] Each time an IPv4 packet passes through a router, the router reduces the TTL value in the packet’s header by 1.
- [ ] If the TTL value reaches 0 (after being decremented), the router discards the packet to prevent it from circulating indefinitely.
- [ ] When a packet is discarded due to TTL expiration, the router sends an ICMP (Internet Control Message Protocol) Time Exceeded message back to the source host, indicating that the packet was not delivered due to TTL expiration.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The mechanism used by a router to prevent an IPv4 packet from traveling endlessly on a network is based on the Time to Live (TTL) field in the IP header. The correct process is:
It decrements the value of the TTL field by 1 and if the result is 0, it discards the packet and sends a Time Exceeded message to the source host.
Here’s how it works:
Each time an IPv4 packet passes through a router, the router reduces the TTL value in the packet’s header by 1.
If the TTL value reaches 0 (after being decremented), the router discards the packet to prevent it from circulating indefinitely.
When a packet is discarded due to TTL expiration, the router sends an ICMP (Internet Control Message Protocol) Time Exceeded message back to the source host, indicating that the packet was not delivered due to TTL expiration.
This mechanism is essential for preventing routing loops and ensuring efficient use of network resources. The other options you mentioned do not accurately describe the function and purpose of the TTL field in IP networking.

---

## Question 11

A network administrator is designing the layout of a new wireless network. Which three areas of concern should be accounted for when building a wireless network? (Choose three.)

- [ ] mobility options
- [x] **security**
- [x] **interference**
- [x] **coverage area**
- [ ] packet collision
- [ ] extensive cabling

> [!NOTE]
> **Explanation:** Explanation:
The three areas of concern for wireless networks focus on the size of the coverage area, any nearby interference, and providing network security. Extensive cabling is not a concern for wireless networks, as a wireless network will require minimal cabling for providing wireless access to hosts. Mobility options are not a component of the areas of concern for wireless networks.

---

## Question 12

Refer to the exhibit. What is wrong with the displayed termination?

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/word-image-1.jpg)

- [x] **The untwisted length of each wire is too long.**
- [ ] The woven copper braid should not have been removed.
- [ ] The wrong type of connector is being used.
- [ ] The wires are too thick for the connector that is used.

> [!NOTE]
> **Explanation:** Explanation & Hint:
When a cable to an RJ-45 connector is terminated, it is important to ensure that the untwisted wires are not too long and that the flexible plastic sheath surrounding the wires is crimped down and not the bare wires. None of the colored wires should be visible from the bottom of the jack.

---

## Question 13

A network administrator notices that some newly installed Ethernet cabling is carrying corrupt and distorted data signals. The new cabling was installed in the ceiling close to fluorescent lights and electrical equipment. Which two factors may interfere with the copper cabling and result in signal distortion and data corruption? (Choose two.)

- [x] **EMI**
- [ ] signal attenuation
- [ ] crosstalk
- [x] **RFI ​**
- [ ] extended length of cabling

> [!NOTE]
> **Explanation:** Explanation:
EMI and RFI signals can distort and corrupt data signals that are carried by copper media. These distortions usually come from radio waves and electromagnetic devices such as motors and florescent lights. Crosstalk is a disturbance that is caused by adjacent wires bundled too close together with the magnetic field of one wire affecting another. Signal attenuation is caused when an electrical signal begins to deteriorate over the length of a copper cable.

---

## Question 14

Data is being sent from a source PC to a destination server. Which three statements correctly describe the function of TCP or UDP in this situation? (Choose three.)

- [ ] TCP is the preferred protocol when a function requires lower network overhead.
- [x] **The source port field identifies the running application or service that will handle data returning to the PC.**
- [ ] The TCP source port number identifies the sending host on the network.
- [x] **UDP segments are encapsulated within IP packets for transport across the network.**
- [x] **The UDP destination port number identifies the application or service on the server which will handle the data.**
- [ ] The TCP process running on the PC randomly selects the destination port when establishing a session with the server.

> [!NOTE]
> **Explanation:** Explanation:
Layer 4 port numbers identify the application or service which will handle the data. The source port number is added by the sending device and will be the destination port number when the requested information is returned. Layer 4 segments are encapsulated within IP packets. UDP, not TCP, is used when low overhead is needed. A source IP address, not a TCP source port number, identifies the sending host on the network. Destination port numbers are specific ports that a server application or service monitors for requests.

---

## Question 15

Match the application protocols to the correct transport protocols.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-008.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-–-ITNv7-–-Final-Exam-Answers-008-1024x781.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-008-1024x781.png)

- [x] **DHCP (Dynamic Host Configuration Protocol) – Typically uses UDP. DHCP is used for dynamic IP addressing and operates on a simpler request/response model which does not require the reliability and overhead of TCP.**
- [x] **FTP (File Transfer Protocol) – Uses TCP. FTP requires reliable data transfer as files are transmitted, so it uses TCP to ensure that all data reaches its destination correctly.**
- [x] **HTTP (Hypertext Transfer Protocol) – Uses TCP. HTTP is used for web traffic which requires reliable transmission, thus TCP is used to ensure the complete and accurate delivery of web pages.**
- [x] **SMTP (Simple Mail Transfer Protocol) – Uses TCP. SMTP is used for sending emails which requires reliability; hence, it uses TCP to ensure that email messages are reliably delivered to the recipient server.**

> [!NOTE]
> **Explanation:** Explanation & Hint:
DHCP (Dynamic Host Configuration Protocol)
 – Typically uses UDP. DHCP is used for dynamic IP addressing and operates on a simpler request/response model which does not require the reliability and overhead of TCP.
FTP (File Transfer Protocol)
 – Uses TCP. FTP requires reliable data transfer as files are transmitted, so it uses TCP to ensure that all data reaches its destination correctly.
HTTP (Hypertext Transfer Protocol)
 – Uses TCP. HTTP is used for web traffic which requires reliable transmission, thus TCP is used to ensure the complete and accurate delivery of web pages.
SMTP (Simple Mail Transfer Protocol)
 – Uses TCP. SMTP is used for sending emails which requires reliability; hence, it uses TCP to ensure that email messages are reliably delivered to the recipient server.

---

## Question 16

A group of Windows PCs in a new subnet has been added to an Ethernet network. When testing the connectivity, a technician finds that these PCs can access local network resources but not the Internet resources. To troubleshoot the problem, the technician wants to initially confirm the IP address and DNS configurations on the PCs, and also verify connectivity to the local router. Which three Windows CLI commands and utilities will provide the necessary information? (Choose three.)

- [ ] netsh interface ipv6 show neighbor
- [ ] arp -a
- [ ] tracert
- [x] **ping**
- [x] **ipconfig**
- [x] **nslookup**
- [ ] telnet

> [!NOTE]
> **Explanation:** Explanation:
The ipconfig and nslookup commands will provide initial IP address and DNS configuration information to the technicians and determine if DHCP is assigning correct information to the PCs. The ping utility would be used to verify, or not, connectivity to the default gateway (router) using the configured default gateway address, or using the known correct default gateway address if these are found to be different. The arp -a or netsh interface ipv6 show neighbor commands could be used if the problem is then suspected to be an IP address to MAC address mapping issue. The telnet and tracert utilities could be used to determine where the problem was located in the network if the default gateway configuration was found to be correct.

---

## Question 17

What two pieces of information are displayed in the output of the show ip interface brief command? (Choose two.)

- [ ] speed and duplex settings
- [ ] MAC addresses
- [ ] next-hop addresses
- [ ] interface descriptions
- [x] **IP addresses**
- [x] **Layer 1 statuses**

> [!NOTE]
> **Explanation:** Explanation:
The command 
show ip interface brief 
shows the IP address of each interface, as well as the operational status of the interfaces at both Layer 1 and Layer 2. In order to see interface descriptions and speed and duplex settings, use the command 
show running-config interface
. Next-hop addresses are displayed in the routing table with the command 
show ip route
, and the MAC address of an interface can be seen with the command 
show interfaces
.

---

## Question 18

A network administrator is adding a new LAN to a branch office. The new LAN must support 25 connected devices. What is the smallest network mask that the network administrator can use for the new network?

- [x] **255.255.255.224**
- [ ] 255.255.255.192
- [ ] 255.255.255.240
- [ ] 255.255.255.128
- [ ] A /27 subnet mask has 5 bits available for host addresses (32 – 27 = 5).
- [ ] With 5 bits, you can have 25 2 5 or 32 possible combinations.
- [ ] Subtracting 2 for the network and broadcast addresses leaves you with 30 usable IP addresses.

> [!NOTE]
> **Explanation:** Explanation & Hint:
To support 25 devices on a network, you need to have at least 25 available IP addresses for the devices, plus one for the network address and one for the broadcast address.
The subnet mask that can provide at least 27 addresses (25 for devices, 1 for the network, and 1 for broadcast) is a /27 subnet mask. This is because:
A /27 subnet mask has 5 bits available for host addresses (32 – 27 = 5).
With 5 bits, you can have 
25
2
5
 or 32 possible combinations.
Subtracting 2 for the network and broadcast addresses leaves you with 30 usable IP addresses.
The subnet mask 255.255.255.224 corresponds to a /27 subnet mask, which supports up to 30 usable IP addresses, which is sufficient for 25 devices.
So, the smallest network mask that the network administrator can use for the new network to support 25 connected devices is 
255.255.255.224
.

---

## Question 19

Which frame field is created by a source node and used by a destination node to ensure that a transmitted data signal has not been altered by interference, distortion, or signal loss?

- [ ] transport layer error check field
- [ ] error correction process field
- [ ] flow control field
- [ ] User Datagram Protocol field
- [x] **frame check sequence field**

> [!NOTE]
> **Explanation:** Explanation & Hint:
The frame field created by a source node and used by a destination node to ensure that a transmitted data signal has not been altered by interference, distortion, or signal loss is the 
frame check sequence (FCS) field
.
The FCS field contains a number that is calculated by the source node based on the data in the frame. This number is derived using a predetermined formula—typically a cyclic redundancy check (CRC). The destination node performs the same calculation on the received data and compares the result to the value contained in the incoming frame’s FCS field. If the numbers match, the frame is considered to be intact and free of errors. If there is a discrepancy, it indicates that the data has been altered in transit, and the frame is usually discarded.

---

## Question 20

What is a function of the data link layer?

- [ ] provides delivery of data between two applications
- [x] **provides for the exchange of frames over a common local media**
- [ ] provides end-to-end delivery of data between hosts
- [ ] provides the formatting of data

> [!NOTE]
> **Explanation:** Explanation & Hint:
The function of the data link layer (Layer 2) in the OSI model is 
provides for the exchange of frames over a common local media
.
The data link layer is responsible for node-to-node delivery of data. It handles the communication between adjacent network nodes within the same network segment or local area network. It also manages how data packets are placed onto the physical media and received from it, error detection and handling (via the Frame Check Sequence), and sometimes error correction. Additionally, the data link layer defines the protocol to establish and terminate a connection between two physically connected devices, as well as the protocol for controlling the flow of data between them.

---

## Question 21

What are three characteristics of the CSMA/CD process? (Choose three.)

- [x] **After detecting a collision, hosts can attempt to resume transmission after a random time delay has expired.**
- [ ] A jam signal indicates that the collision has cleared and the media is not busy.
- [x] **All of the devices on a segment see data that passes on the network medium.**
- [ ] The device with the electronic token is the only one that can transmit after a collision.
- [ ] Devices can be configured with a higher transmission priority.
- [x] **A device listens and waits until the media is not busy before transmitting.**
- [ ] After detecting a collision, hosts can attempt to resume transmission after a random time delay has expired. This is known as the backoff algorithm, where each device waits for a random period of time before attempting to retransmit, reducing the probability of a collision on retransmission.
- [ ] All of the devices on a segment see data that passes on the network medium. In a CSMA/CD environment, when a device transmits data, all other devices on the same network segment can detect that data because they share the same medium.
- [ ] A device listens and waits until the media is not busy before transmitting. This is the ‘carrier sense’ part of CSMA/CD, where a device checks to make sure the medium is free from traffic before it starts transmitting data.
- [ ] A jam signal is used to notify all devices that a collision has occurred, not that it has cleared.
- [ ] There is no concept of electronic tokens in CSMA/CD; this is a characteristic of another access method called Token Ring.
- [ ] While devices may have different priority levels in some network configurations, CSMA/CD itself does not inherently support priority levels for transmission. Priority levels are a part of different network protocols, such as those used in Quality of Service (QoS).

> [!NOTE]
> **Explanation:** Explanation & Hint:
The Carrier Sense Multiple Access with Collision Detection (CSMA/CD) is an access method used in Ethernet networks to control access to the network medium. Here are three characteristics of the CSMA/CD process:
After detecting a collision, hosts can attempt to resume transmission after a random time delay has expired.
 This is known as the backoff algorithm, where each device waits for a random period of time before attempting to retransmit, reducing the probability of a collision on retransmission.
All of the devices on a segment see data that passes on the network medium.
 In a CSMA/CD environment, when a device transmits data, all other devices on the same network segment can detect that data because they share the same medium.
A device listens and waits until the media is not busy before transmitting.
 This is the ‘carrier sense’ part of CSMA/CD, where a device checks to make sure the medium is free from traffic before it starts transmitting data.
The other statements are not characteristics of the CSMA/CD process:
A jam signal is used to notify all devices that a collision has occurred, not that it has cleared.
There is no concept of electronic tokens in CSMA/CD; this is a characteristic of another access method called Token Ring.
While devices may have different priority levels in some network configurations, CSMA/CD itself does not inherently support priority levels for transmission. Priority levels are a part of different network protocols, such as those used in Quality of Service (QoS).

---

## Question 22

What characteristic describes a Trojan horse?

- [ ] an attack that slows or crashes a device or network service
- [x] **malicious software or code running on an end device**
- [ ] a network device that filters access and traffic coming into a network
- [ ] the use of stolen credentials to access private data

> [!NOTE]
> **Explanation:** Explanation & Hint:
A Trojan horse is characterized as 
malicious software or code running on an end device
. It is often disguised as legitimate software, or is included within legitimate software, and can be used by cyber attackers to gain unauthorized access to systems, disrupt operations, gather sensitive information, or cause harm to the host system. Trojans are a form of malware and are distinct from other types of attacks or network devices because they require an end user to install them, usually inadvertently, by opening an email attachment or downloading them from the internet.

---

## Question 23

What three requirements are defined by the protocols used in network communications to allow message transmission across a network? (Choose three.)

- [ ] end-device installation
- [ ] media selection
- [x] **message encoding**
- [x] **delivery options**
- [ ] connector specifications
- [x] **message size**
- [ ] Message encoding : This is the process of converting information into another form or code. In network communications, protocols define how a message is formatted or converted into signals that are transmitted over the media. This can include encoding schemes such as binary, analog, or digital encoding, depending on the medium and technology in use.
- [ ] Delivery options : Protocols must define how messages are treated during the delivery process. This includes whether the communication is unicast, multicast, or broadcast, as well as handling aspects like message prioritization, quality of service (QoS), and routing.
- [ ] Message size : Protocols often define a maximum message size, which can be dictated by the Maximum Transmission Unit (MTU). The MTU is the largest size of a packet or frame that can be sent in a packet- or frame-based network such as the Internet. If a message exceeds the MTU, it must be divided into smaller packets or frames, a process known as fragmentation.

> [!NOTE]
> **Explanation:** Explanation & Hint:
Protocols in network communications are designed to ensure proper and efficient transmission of data across a network. The following three are typical requirements defined by these protocols:
Message encoding
: This is the process of converting information into another form or code. In network communications, protocols define how a message is formatted or converted into signals that are transmitted over the media. This can include encoding schemes such as binary, analog, or digital encoding, depending on the medium and technology in use.
Delivery options
: Protocols must define how messages are treated during the delivery process. This includes whether the communication is unicast, multicast, or broadcast, as well as handling aspects like message prioritization, quality of service (QoS), and routing.
Message size
: Protocols often define a maximum message size, which can be dictated by the Maximum Transmission Unit (MTU). The MTU is the largest size of a packet or frame that can be sent in a packet- or frame-based network such as the Internet. If a message exceeds the MTU, it must be divided into smaller packets or frames, a process known as fragmentation.
The other options provided, such as end-device installation, media selection, and connector specifications, are more related to the physical setup and hardware requirements of the network rather than the protocols used for network communications. Protocols do dictate certain physical layer specifications but those are more about the electrical, optical, or mechanical aspects, and less about the actual selection and installation of media and devices.

---

## Question 24

What are two features of ARP? (Choose two.)

- [x] **If a device receiving an ARP request has the destination IPv4 address, it responds with an ARP reply.**
- [ ] When a host is encapsulating a packet into a frame, it refers to the MAC address table to determine the mapping of IP addresses to MAC addresses.
- [ ] If no device responds to the ARP request, then the originating node will broadcast the data packet to all devices on the network segment.
- [ ] An ARP request is sent to all devices on the Ethernet LAN and contains the IP address of the destination host and its multicast MAC address.
- [x] **If a host is ready to send a packet to a local destination device and it has the IP address but not the MAC address of the destination, it generates an ARP broadcast.**

> [!NOTE]
> **Explanation:** Explanation:
When a node encapsulates a data packet into a frame, it needs the destination MAC address. First it determines if the destination device is on the local network or on a remote network. Then it checks the ARP table (not the MAC table) to see if a pair of IP address and MAC address exists for either the destination IP address (if the destination host is on the local network) or the default gateway IP address (if the destination host is on a remote network). If the match does not exist, it generates an ARP broadcast to seek the IP address to MAC address resolution. Because the destination MAC address is unknown, the ARP request is broadcast with the MAC address ffff.ffff.ffff. Either the destination device or the default gateway will respond with its MAC address, which enables the sending node to assemble the frame. If no device responds to the ARP request, then the originating node will discard the packet because a frame cannot be created.

---

## Question 25

Refer to the exhibit. An administrator is trying to configure the switch but receives the error message that is displayed in the exhibit. What is the problem?

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/word-image-2.png)

- [ ] The entire command, configure terminal , must be used.
- [ ] The administrator must connect via the console port to access global configuration mode.
- [ ] The administrator is already in global configuration mode.
- [x] **The administrator must first enter privileged EXEC mode before issuing the command.**

> [!NOTE]
> **Explanation:** Explanation & Hint:
In order to enter global configuration mode, the command configure terminal , or a shortened version such as config t , must be entered from privileged EXEC mode. In this scenario the administrator is in user EXEC mode, as indicated by the > symbol after the hostname. The administrator would need to use the enable command to move into privileged EXEC mode before entering the configure terminal command.

---

## Question 26

Refer to the exhibit. On the basis of the output, which two statements about network connectivity are correct? (Choose two.)

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/word-image.jpeg.webp)

- [ ] This host does not have a default gateway configured.
- [x] **There are 4 hops between this device and the device at 192.168.100.1.**
- [ ] The average transmission time between the two hosts is 2 milliseconds.
- [x] **There is connectivity between this device and the device at 192.168.100.1.**
- [ ] The connectivity between these two hosts allows for videoconferencing calls.

> [!NOTE]
> **Explanation:** Explanation:
The output displays a successful Layer 3 connection between a host computer and a host at 19.168.100.1. It can be determined that 4 hops exist between them and the average transmission time is 1 milliseconds. Layer 3 connectivity does not necessarily mean that an application can run between the hosts.

---

## Question 27

What are two characteristics of IP? (Choose two.)

- [ ] retransmits packets if errors occur
- [ ] guarantees delivery of packets
- [x] **does not require a dedicated end-to-end connection**
- [x] **operates independently of the network media**
- [ ] re-assembles out of order packets into the correct order at the receiver end

> [!NOTE]
> **Explanation:** Explanation:
The Internet Protocol (IP) is a connectionless, best effort protocol. This means that IP requires no end-to-end connection nor does it guarantee delivery of packets. IP is also media independent, which means it operates independently of the network media carrying the packets.

---

## Question 28

What will happen if the default gateway address is incorrectly configured on a host?

- [x] **The host cannot communicate with hosts in other networks.**
- [ ] The host cannot communicate with other hosts in the local network.
- [ ] A ping from the host to 127.0.0.1 would not be successful.
- [ ] The switch will not forward packets initiated by the host.
- [ ] The host will have to use ARP to determine the correct address of the default gateway.

> [!NOTE]
> **Explanation:** Explanation & Hint:
When a host needs to send a message to another host located on the same network, it can forward the message directly. However, when a host needs to send a message to a remote network, it must use the router, also known as the default gateway. This is because the data link frame address of the remote destination host cannot be used directly. Instead, the IP packet has to be sent to the router (default gateway) and the router will forward the packet toward its destination. Therefore, if the default gateway is incorrectly configured, the host can communicate with other hosts on the same network, but not with hosts on remote networks.

---

## Question 29

Users report that the network access is slow. After questioning the employees, the network administrator learned that one employee downloaded a third-party scanning program for the printer. What type of malware might be introduced that causes slow performance of the network?

- [ ] spam
- [ ] virus
- [x] **worm**
- [ ] phishing

> [!NOTE]
> **Explanation:** Explanation:
A cybersecurity specialist needs to be familiar with the characteristics of the different types of malware and attacks that threaten an organization.

---

## Question 30

A company has a file server that shares a folder named Public. The network security policy specifies that the Public folder is assigned Read-Only rights to anyone who can log into the server while the Edit rights are assigned only to the network admin group. Which component is addressed in the AAA network service framework?

- [ ] automation
- [x] **authorization**
- [ ] accounting
- [ ] authentication

> [!NOTE]
> **Explanation:** Explanation:
After a user is successfully authenticated (logged into the server), the authorization is the process of determining what network resources the user can access and what operations (such as read or edit) the user can perform.

---

## Question 31

What are two common causes of signal degradation when using UTP cabling? (Choose two.)

- [ ] loss of light over long distances
- [x] **low-quality cable or connectors**
- [ ] low-quality shielding in cable
- [ ] installing cables in conduit
- [x] **improper termination**
- [ ] Low-quality cable or connectors : The use of inferior materials can result in increased resistance and crosstalk between the wires inside the cable, which can degrade the signal strength and quality as it travels along the cable.
- [ ] Improper termination : If the UTP cables are not terminated correctly, it can lead to reflections, crosstalk, and insertion loss. Proper termination is critical to ensure that the signal integrity is maintained and that the connection is reliable.
- [ ] Loss of light over long distances applies to fiber optic cables, which transmit light, not electrical signals as UTP does.
- [ ] Low-quality shielding in cable refers to shielded twisted pair (STP) rather than UTP. UTP does not have shielding; its design relies on twisted pairs to counteract electromagnetic interference.
- [ ] Installing cables in conduit does not inherently cause signal degradation; however, if the conduit is overfilled or if the cables are bent at sharp angles, it can potentially damage the cables and affect signal quality.

> [!NOTE]
> **Explanation:** Explanation & Hint:
Signal degradation, also known as attenuation, in UTP (Unshielded Twisted Pair) cabling can be caused by various factors. The two common causes from the options provided are:
Low-quality cable or connectors
: The use of inferior materials can result in increased resistance and crosstalk between the wires inside the cable, which can degrade the signal strength and quality as it travels along the cable.
Improper termination
: If the UTP cables are not terminated correctly, it can lead to reflections, crosstalk, and insertion loss. Proper termination is critical to ensure that the signal integrity is maintained and that the connection is reliable.
The other options listed are not typically associated with UTP cable signal degradation:
Loss of light over long distances
 applies to fiber optic cables, which transmit light, not electrical signals as UTP does.
Low-quality shielding in cable
 refers to shielded twisted pair (STP) rather than UTP. UTP does not have shielding; its design relies on twisted pairs to counteract electromagnetic interference.
Installing cables in conduit
 does not inherently cause signal degradation; however, if the conduit is overfilled or if the cables are bent at sharp angles, it can potentially damage the cables and affect signal quality.

---

## Question 32

Which scenario describes a function provided by the transport layer?

- [x] **A student has two web browser windows open in order to access two web sites. The transport layer ensures the correct web page is delivered to the correct browser window.**
- [ ] A student is using a classroom VoIP phone to call home. The unique identifier burned into the phone is a transport layer address used to contact another network device on the same network.
- [ ] A corporate worker is accessing a web server located on a corporate network. The transport layer formats the screen so the web page appears properly no matter what device is being used to view the web site.
- [ ] A student is playing a short web-based movie with sound. The movie and sound are encoded within the transport layer header.

> [!NOTE]
> **Explanation:** Explanation:
The source and destination port numbers are used to identify the correct application and window within that application.

---

## Question 33

Which two protocols operate at the top layer of the TCP/IP protocol suite? (Choose two.)

- [x] **POP**
- [x] **DNS**
- [ ] IP
- [ ] TCP
- [ ] Ethernet
- [ ] UDP
- [ ] POP (Post office Protocol) – This is an application layer protocol used by local email clients to retrieve emails from a remote server over a TCP/IP connection.
- [ ] DNS (Domain Name System) – This is also an application layer protocol that translates human-readable domain names (like www.example.com) into machine-readable IP addresses.
- [ ] IP (Internet Protocol) – Operates at the internet layer and is responsible for routing packets across network boundaries.
- [ ] TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) – Both operate at the transport layer and are responsible for delivering data to the correct application protocols.
- [ ] Ethernet – Operates at the link layer and is responsible for the transmission of data frames over a physical medium.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The top layer of the TCP/IP protocol suite, commonly known as the application layer, is where protocols that facilitate user applications and end-to-end communications operate. The two protocols from your list that operate at this layer are:
POP (Post office Protocol)
 – This is an application layer protocol used by local email clients to retrieve emails from a remote server over a TCP/IP connection.
DNS (Domain Name System)
 – This is also an application layer protocol that translates human-readable domain names (like www.example.com) into machine-readable IP addresses.
The other protocols listed operate at different layers of the TCP/IP model:
IP (Internet Protocol)
 – Operates at the internet layer and is responsible for routing packets across network boundaries.
TCP (Transmission Control Protocol)
 and 
UDP (User Datagram Protocol)
 – Both operate at the transport layer and are responsible for delivering data to the correct application protocols.
Ethernet
 – Operates at the link layer and is responsible for the transmission of data frames over a physical medium.

---

## Question 34

An employee of a large corporation remotely logs into the company using the appropriate username and password. The employee is attending an important video conference with a customer concerning a large sale. It is important for the video quality to be excellent during the meeting. The employee is unaware that after a successful login, the connection to the company ISP failed. The secondary connection, however, activated within seconds. The disruption was not noticed by the employee or other employees.

What three network characteristics are described in this scenario? (Choose three.)

- [ ] integrity
- [ ] scalability
- [x] **quality of service**
- [x] **fault tolerance**
- [ ] powerline networking
- [x] **security**
- [ ] Quality of Service (QoS) – The emphasis on the video quality being excellent during the meeting suggests that there is a mechanism in place to prioritize video traffic over other types of traffic. Quality of Service is a set of technologies used to manage network traffic in a way that ensures good performance for critical applications, such as video conferencing.
- [ ] Fault Tolerance – The fact that the connection to the company ISP failed but a secondary connection activated within seconds, without any noticeable disruption, indicates a network design that accommodates for failures. This is referred to as fault tolerance, where systems are set up in a way that allows them to continue operating properly in the event of the failure of some (non-critical) components.
- [ ] Security – The mention of the employee logging in with a username and password indicates that there are security measures in place to control access to the network. This suggests that the network has security protocols to authenticate users, which is a fundamental aspect of network security.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The scenario described indicates the following three network characteristics:
Quality of Service (QoS)
 – The emphasis on the video quality being excellent during the meeting suggests that there is a mechanism in place to prioritize video traffic over other types of traffic. Quality of Service is a set of technologies used to manage network traffic in a way that ensures good performance for critical applications, such as video conferencing.
Fault Tolerance
 – The fact that the connection to the company ISP failed but a secondary connection activated within seconds, without any noticeable disruption, indicates a network design that accommodates for failures. This is referred to as fault tolerance, where systems are set up in a way that allows them to continue operating properly in the event of the failure of some (non-critical) components.
Security
 – The mention of the employee logging in with a username and password indicates that there are security measures in place to control access to the network. This suggests that the network has security protocols to authenticate users, which is a fundamental aspect of network security.
“Integrity” in a networking context refers to the assurance that the data has not been altered during transmission, and while important, there is no specific mention of data being altered or kept intact in this scenario.
“Scalability” refers to the network’s ability to grow and handle an increasing number of clients or data traffic, and there is no information provided about the network’s growth or adaptability.
“Powerline networking” is a type of network where electrical power lines are used to transmit data, and there is no mention or implication of this technology being used in the scenario provided.

---

## Question 35

Refer to the exhibit. If PC1 is sending a packet to PC2 and routing has been configured between the two routers, what will R1 do with the Ethernet frame header attached by PC1?

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/word-image-3.png)

- [ ] open the header and use it to determine whether the data is to be sent out S0/0/0
- [ ] open the header and replace the destination MAC address with a new one
- [ ] nothing, because the router has a route to the destination network
- [x] **remove the Ethernet header and configure a new Layer 2 header before sending it out S0/0/0**

> [!NOTE]
> **Explanation:** Explanation:
When PC1 forms the various headers attached to the data one of those headers is the Layer 2 header. Because PC1 connects to an Ethernet network, an Ethernet header is used. The source MAC address will be the MAC address of PC1 and the destination MAC address will be that of G0/0 on R1. When R1 gets that information, the router removes the Layer 2 header and creates a new one for the type of network the data will be placed onto (the serial link).

---

## Question 36

Which three layers of the OSI model map to the application layer of the TCP/IP model? (Choose three.)

- [ ] transport
- [x] **application**
- [ ] network
- [x] **session**
- [ ] data link
- [x] **presentation**

> [!NOTE]
> **Explanation:** Explanation:
The TCP/IP model and OSI model perform similar functions. However, the TCP/IP model uses four layers and the OSI model uses seven layers. The layers in each model can be mapped to each other as follows:
OSI application -> TCP/IP application

OSI presentation -> TCP/IP application

OSI session -> TCP/IP application

OSI transport -> TCP/IP transport

OSI network -> TCP/IP internet

OSI data link -> TCP/IP network access

OSI physical -> TCP/IP network access

---

## Question 37

Match each description with an appropriate IP address. (Not all options are used.)

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/CCNA1-v7-ITNv7-Modules-11-13-IP-Addressing-Exam-Answers-006-1.jpg)

> [!NOTE]
> **Explanation:** Explanation:
Link-Local addresses are assigned automatically by the OS environment and are located in the block 169.254.0.0/16. The private addresses ranges are 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. TEST-NET addresses belong to the range 192.0.2.0/24. The addresses in the block 240.0.0.0 to 255.255.255.254 are reserved as experimental addresses. Loopback addresses belong to the block 127.0.0.0/8.

---

## Question 38

What does the term “attenuation” mean in data communication?

- [ ] strengthening of a signal by a networking device
- [ ] leakage of signals from one cable pair to another
- [x] **loss of signal strength as distance increases**
- [ ] time for a signal to reach its destination

> [!NOTE]
> **Explanation:** Explanation & Hint:
Data is transmitted on copper cables as electrical pulses. A detector in the network interface of a destination device must receive a signal that can be successfully decoded to match the signal sent. However, the farther the signal travels, the more it deteriorates. This is referred to as signal attenuation.

---

## Question 39

Which two statements describe how to assess traffic flow patterns and network traffic types using a protocol analyzer? (Choose two.)

- [x] **Capture traffic during peak utilization times to get a good representation of the different traffic types.**
- [x] **Perform the capture on different network segments.**
- [ ] Only capture WAN traffic because traffic to the web is responsible for the largest amount of traffic on a network.
- [ ] Only capture traffic in the areas of the network that receive most of the traffic such as the data center.
- [ ] Capture traffic on the weekends when most employees are off work.

> [!NOTE]
> **Explanation:** Explanation:
traffic flow patterns should be gathered during peak utilization times to get a good representation of the different traffic types. The capture should also be performed on different network segments because some traffic will be local to a particular segment.

---

## Question 40

Refer to the exhibit. Host B on subnet Teachers transmits a packet to host D on subnet Students. Which Layer 2 and Layer 3 addresses are contained in the PDUs that are transmitted from host B to the router?

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/word-image-5.png)

- [ ] Layer 2 destination address = 00-00-0c-94-36-dd Layer 2 source address = 00-00-0c-94-36-bb Layer 3 destination address = 172.16.20.200 Layer 3 source address = 172.16.10.200
- [ ] Layer 2 destination address = 00-00-0c-94-36-ab Layer 2 source address = 00-00-0c-94-36-bb Layer 3 destination address = 172.16.20.200 Layer 3 source address = 172.16.100.200
- [x] **Layer 2 destination address = 00-00-0c-94-36-ab Layer 2 source address = 00-00-0c-94-36-bb Layer 3 destination address = 172.16.20.200 Layer 3 source address = 172.16.10.200**
- [ ] Layer 2 destination address = 00-00-0c-94-36-cd Layer 2 source address = 00-00-0c-94-36-bb Layer 3 destination address = 172.16.20.99 Layer 3 source address = 172.16.10.200
- [ ] Layer 3 Source Address: This would be Host B’s IP address, which is 172.16.10.200 .
- [ ] Layer 3 Destination Address: This would be Host D’s IP address, which is 172.16.20.200 .
- [ ] Layer 2 Source Address: This would be Host B’s MAC address, which is 00-00-0c-94-36-bb .
- [ ] Layer 2 Destination Address: This would be the MAC address of the router’s interface on the Teachers subnet, which is 00-00-0c-94-36-ab .
- [ ] Layer 2 destination address = 00-00-0c-94-36-ab
- [ ] Layer 2 source address = 00-00-0c-94-36-bb
- [ ] Layer 3 destination address = 172.16.20.200
- [ ] Layer 3 source address = 172.16.10.200

> [!NOTE]
> **Explanation:** Explanation & Hint:
Based on the network diagram provided, when Host B in the subnet Teachers sends a packet to Host D in the subnet Students, the Layer 2 and Layer 3 addresses contained in the Protocol Data Units (PDUs) transmitted from Host B to the router would be:
Layer 3 (Network Layer):
Layer 3 Source Address: This would be Host B’s IP address, which is 
172.16.10.200
.
Layer 3 Destination Address: This would be Host D’s IP address, which is 
172.16.20.200
.
Layer 2 (Data Link Layer):
Layer 2 Source Address: This would be Host B’s MAC address, which is 
00-00-0c-94-36-bb
.
Layer 2 Destination Address: This would be the MAC address of the router’s interface on the Teachers subnet, which is 
00-00-0c-94-36-ab
.
The data packet would be framed with these addresses when Host B transmits to the router because the destination host (Host D) is on a different subnet, so the packet needs to be directed to the router’s interface that Host B is connected to.
The correct addresses for the packet transmission from Host B to the router based on the provided exhibit would be:
Layer 2 destination address = 00-00-0c-94-36-ab
Layer 2 source address = 00-00-0c-94-36-bb
Layer 3 destination address = 172.16.20.200
Layer 3 source address = 172.16.10.200

---

## Question 41

Which subnet would include the address 192.168.1.96 as a usable host address?

- [ ] 192.168.1.32/27
- [ ] 192.168.1.32/28
- [ ] 192.168.1.64/29
- [x] **192.168.1.64/26**

> [!NOTE]
> **Explanation:** Explanation:
For the subnet of 192.168.1.64/26, there are 6 bits for host addresses, yielding 64 possible addresses. However, the first and last subnets are the network and broadcast addresses for this subnet. Therefore, the range of host addresses for this subnet is 192.168.1.65 to 192.168.1.126. The other subnets do not contain the address 192.168.1.96 as a valid host address.

---

## Question 42

What are two problems that can be caused by a large number of ARP request and reply messages? (Choose two.)

- [ ] A large number of ARP request and reply messages may slow down the switching process, leading the switch to make many changes in its MAC table.
- [x] **The ARP request is sent as a broadcast, and will flood the entire subnet.**
- [ ] Switches become overloaded because they concentrate all the traffic from the attached subnets.
- [x] **All ARP request messages must be processed by all nodes on the local network.**
- [ ] The network may become overloaded because ARP reply messages have a very large payload due to the 48-bit MAC address and 32-bit IP address that they contain.
- [ ] The ARP request is sent as a broadcast, and will flood the entire subnet. ARP requests are broadcasted to all hosts on the local network segment because the source needs to discover the MAC address associated with a known IP address. If there is a large number of ARP requests, this can lead to a significant amount of broadcast traffic, which can consume a lot of the available bandwidth and processing power of the devices on the subnet.
- [ ] All ARP request messages must be processed by all nodes on the local network. Since ARP requests are broadcasted, every node on the local network must process these requests to check if they hold the IP address for which the MAC address is being queried. This can lead to unnecessary processing on each host, which can be particularly problematic on large networks or when a host is receiving more ARP requests than it can handle efficiently.
- [ ] Switches do not become overloaded due to ARP traffic specifically; they become overloaded if they have to process more traffic than they are designed to handle, whether it’s ARP traffic or other types.
- [ ] ARP messages do not have a very large payload; they are relatively small. The size of the ARP message is not typically a factor in network overload. The concern with ARP is the number of requests and their broadcast nature, not the size of the packets.

> [!NOTE]
> **Explanation:** Explanation & Hint:
A large number of ARP (Address Resolution Protocol) request and reply messages can cause several issues on a network. The two problems from the given options are:
The ARP request is sent as a broadcast, and will flood the entire subnet.
 ARP requests are broadcasted to all hosts on the local network segment because the source needs to discover the MAC address associated with a known IP address. If there is a large number of ARP requests, this can lead to a significant amount of broadcast traffic, which can consume a lot of the available bandwidth and processing power of the devices on the subnet.
All ARP request messages must be processed by all nodes on the local network.
 Since ARP requests are broadcasted, every node on the local network must process these requests to check if they hold the IP address for which the MAC address is being queried. This can lead to unnecessary processing on each host, which can be particularly problematic on large networks or when a host is receiving more ARP requests than it can handle efficiently.
The other statements either describe scenarios that are not directly related to ARP traffic or are not accurate:
Switches do not become overloaded due to ARP traffic specifically; they become overloaded if they have to process more traffic than they are designed to handle, whether it’s ARP traffic or other types.
ARP messages do not have a very large payload; they are relatively small. The size of the ARP message is not typically a factor in network overload. The concern with ARP is the number of requests and their broadcast nature, not the size of the packets.

---

## Question 43

Why would a Layer 2 switch need an IP address?

- [x] **to enable the switch to be managed remotely**
- [ ] to enable the switch to receive frames from attached PCs
- [ ] to enable the switch to send broadcast frames to attached PCs
- [ ] to enable the switch to function as a default gateway

> [!NOTE]
> **Explanation:** Explanation & Hint:
A switch, as a Layer 2 device, does not need an IP address to transmit frames to attached devices. However, when a switch is accessed remotely through the network, it must have a Layer 3 address. The IP address must be applied to a virtual interface rather than to a physical interface. Routers, not switches, function as default gateways.

---

## Question 44

How does the service password-encryption command enhance password security on Cisco routers and switches?

- [ ] It requires encrypted passwords to be used when connecting remotely to a router or switch with Telnet.
- [x] **It encrypts passwords that are stored in router or switch configuration files.**
- [ ] It requires that a user type encrypted passwords to gain console access to a router or switch.
- [ ] It encrypts passwords as they are sent across the network.

> [!NOTE]
> **Explanation:** Explanation:
The 
service password-encryption
 command encrypts plaintext passwords in the configuration file so that they cannot be viewed by unauthorized users.

---

## Question 45

Which two statements are correct in a comparison of IPv4 and IPv6 packet headers? (Choose two.)

- [ ] The Destination Address field is new in IPv6.
- [x] **The Source Address field name from IPv4 is kept in IPv6.**
- [ ] The Version field from IPv4 is not kept in IPv6.
- [x] **The Time-to-Live field from IPv4 has been replaced by the Hop Limit field in IPv6.**
- [ ] The Header Checksum field name from IPv4 is kept in IPv6.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The IPv6 packet header fields are as follows: Version, traffic Class, Flow Label, Payload Length, Next Header, Hop Limit, Source Address, and Destination Address. The IPv4 packet header fields include the following: Version, Differentiated Services, Time-to-Live, Protocol, Source IP Address, and Destination IP Address. Both versions have a 4-bit Version field. Both versions have a Source (IP) Address field. IPv4 addresses are 32 bits; IPv6 addresses are 128 bits. The Time-to-Live or TTL field in IPv4 is now called Hop Limit in IPv6, but this field serves the same purpose in both versions. The value in this 8-bit field decrements each time a packet passes through any router. When this value is 0, the packet is discarded and is not forwarded to any other router.

---

## Question 46

Which two statements accurately describe an advantage or a disadvantage when deploying NAT for IPv4 in a network? (Choose two.)

- [ ] NAT will impact negatively on switch performance.
- [ ] NAT causes routing tables to include more information.
- [ ] NAT improves packet handling.
- [ ] NAT adds authentication capability to IPv4.
- [x] **NAT provides a solution to slow down the IPv4 address depletion.**
- [x] **NAT introduces problems for some applications that require end-to-end connectivity.**
- [ ] NAT provides a solution to slow down the IPv4 address depletion. NAT allows multiple devices on a private network to share a single public IPv4 address for accessing external networks, such as the internet. This helps to mitigate the problem of IPv4 address exhaustion by reducing the number of public addresses that an organization needs.
- [ ] NAT introduces problems for some applications that require end-to-end connectivity. Some applications, particularly those that require the initiation of connections from the external network to the internal network or use IP address information embedded within the application layer data, can have issues operating over NAT. This is because NAT modifies the IP address information in packets, which can disrupt the direct communication path that these applications rely on.
- [ ] NAT will impact negatively on switch performance. NAT is typically performed by routers or firewalls, not switches. It does not directly affect switch performance.
- [ ] NAT causes routing tables to include more information. NAT does not directly affect the size of routing tables. Routing tables are concerned with the destination IP addresses and do not need to store information about translated addresses.
- [ ] NAT improves packet handling. While NAT can help manage the IP address space, it does not inherently improve how packets are handled beyond the address translation function.
- [ ] NAT adds authentication capability to IPv4. NAT does not provide authentication capabilities; it merely translates IP addresses from private to public and vice versa. Authentication is a separate function that is not provided by NAT itself.

> [!NOTE]
> **Explanation:** Explanation & Hint:
When deploying Network Address Translation (NAT) for IPv4 in a network, the following two statements accurately describe an advantage or a disadvantage:
NAT provides a solution to slow down the IPv4 address depletion.
 NAT allows multiple devices on a private network to share a single public IPv4 address for accessing external networks, such as the internet. This helps to mitigate the problem of IPv4 address exhaustion by reducing the number of public addresses that an organization needs.
NAT introduces problems for some applications that require end-to-end connectivity.
 Some applications, particularly those that require the initiation of connections from the external network to the internal network or use IP address information embedded within the application layer data, can have issues operating over NAT. This is because NAT modifies the IP address information in packets, which can disrupt the direct communication path that these applications rely on.
The other statements are either not advantages/disadvantages of NAT or are incorrect:
NAT will impact negatively on switch performance.
 NAT is typically performed by routers or firewalls, not switches. It does not directly affect switch performance.
NAT causes routing tables to include more information.
 NAT does not directly affect the size of routing tables. Routing tables are concerned with the destination IP addresses and do not need to store information about translated addresses.
NAT improves packet handling.
 While NAT can help manage the IP address space, it does not inherently improve how packets are handled beyond the address translation function.
NAT adds authentication capability to IPv4.
 NAT does not provide authentication capabilities; it merely translates IP addresses from private to public and vice versa. Authentication is a separate function that is not provided by NAT itself.

---

## Question 47

Match each item to the type of topology diagram on which it is typically identified.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-009.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-–-ITNv7-–-Final-Exam-Answers-009-1024x487.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-009-1024x487.png)

> [!NOTE]
> **Explanation:** Explanation:
A logical topology diagram typically depicts the IP addressing scheme and groupings of devices and ports. A physical topology diagram shows how those devices are connected to each other and the network, focusing on the physical locations of intermediary devices, configured ports, and cabling.

---

## Question 48

What service is provided by HTTP?

- [ ] An application that allows real-time chatting among remote users.
- [ ] Uses encryption to secure the exchange of text, graphic images, sound, and video on the web.
- [ ] Allows for data transfers between a client and a file server.
- [x] **A basic set of rules for exchanging text, graphic images, sound, video, and other multimedia files on the web.**

> [!NOTE]
> **Explanation:** Explanation & Hint:
The service provided by HTTP (Hypertext Transfer Protocol) is:
A basic set of rules for exchanging text, graphic images, sound, video, and other multimedia files on the web.
HTTP is the protocol used for transmitting web pages over the internet, allowing users to view and navigate web pages. It does not inherently include encryption; that service is provided by HTTPS (HTTP Secure), which is HTTP over SSL/TLS. HTTP itself is not an application for chatting nor specifically for file transfers between a client and a server, although it can be used to download or upload files within the context of web services.

---

## Question 49

A client packet is received by a server. The packet has a destination port number of 67. What service is the client requesting?

- [ ] Telnet
- [ ] FTP
- [ ] SSH
- [x] **DHCP**
- [ ] Telnet uses port 23.
- [ ] FTP (File Transfer Protocol) has two ports, 20 for data transfer and 21 for control (command).
- [ ] SSH (Secure Shell) uses port 22.
- [ ] DHCP (Dynamic Host Configuration Protocol) server listens on port 67, and the DHCP client listens on port 68.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The client is requesting DHCP (Dynamic Host Configuration Protocol) service. In the context of networking, port numbers are used to identify specific services or protocols. Port number 67 is the port designated for the server side of the DHCP service. DHCP clients use port 68.
Here’s a brief overview of the services and their default ports for context:
Telnet
 uses port 23.
FTP (File Transfer Protocol)
 has two ports, 20 for data transfer and 21 for control (command).
SSH (Secure Shell)
 uses port 22.
DHCP (Dynamic Host Configuration Protocol)
 server listens on port 67, and the DHCP client listens on port 68.

---

## Question 50

What are the two most effective ways to defend against malware? (Choose two.)

- [ ] Implement strong passwords.
- [x] **Update the operating system and other application software.**
- [x] **Install and update antivirus software.**
- [ ] Implement RAID.
- [ ] Implement a VPN.
- [ ] Implement network firewalls.

> [!NOTE]
> **Explanation:** Explanation:
A cybersecurity specialist must be aware of the technologies and measures that are used as countermeasures to protect the organization from threats and vulnerabilities.

---

## Question 51

An administrator defined a local user account with a secret password on router R1 for use with SSH. Which three additional steps are required to configure R1 to accept only encrypted SSH connections? (Choose three.)

- [x] **Configure the IP domain name on the router.**
- [ ] Enable inbound vty Telnet sessions.
- [ ] Configure DNS on the router.
- [x] **Generate the SSH keys.**
- [ ] Generate two-way pre-shared keys.
- [x] **Enable inbound vty SSH sessions.**

> [!NOTE]
> **Explanation:** Explanation:
There are four steps to configure SSH support on a Cisco router:

Step 1: Set the domain name.

Step 2: Generate one-way secret keys.

Step 3: Create a local username and password.

Step 4: Enable SSH inbound on a vty line.

---

## Question 52

A host is trying to send a packet to a device on a remote LAN segment, but there are currently no mappings in its ARP cache. How will the device obtain a destination MAC address?

- [ ] It will send the frame and use its own MAC address as the destination.
- [ ] It will send the frame with a broadcast MAC address.
- [ ] It will send an ARP request for the MAC address of the destination device.
- [ ] It will send a request to the DNS server for the destination MAC address.
- [x] **It will send an ARP request for the MAC address of the default gateway.**

> [!NOTE]
> **Explanation:** Explanation & Hint:
When a host needs to send a packet to a device on a remote LAN segment and has no ARP cache entry for the destination’s MAC address, it will:
Send an ARP request for the MAC address of the default gateway.
Here’s why: for remote destinations (those not on the same local network), the host knows that it must send the packet through a router (commonly the default gateway). Since the host doesn’t have the MAC address for the gateway in its ARP cache, it will send an ARP request to resolve the MAC address of the default gateway. Once it has the MAC address of the default gateway, it will send the packet to the gateway for further routing to the remote destination.

---

## Question 53

Match the header field with the appropriate layer of the OSI model. (Not all options are used.)

![exhibit](https://infraexam.com/wp-content/uploads/2025/10/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-001.png)

![exhibit](https://infraexam.com/wp-content/uploads/2025/10/CCNA1-v7-–-ITNv7-–-Final-Exam-Answers-001-983x1024.png)

![exhibit](https://infraexam.com/wp-content/uploads/2025/10/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-001-983x1024.png)

- [x] **802.2 header : This refers to the IEEE 802.2 standard for logical link control (LLC) which is part of the Data Link Layer. It provides addressing and control of the data link. It encapsulates the network layer protocol information.**
- [x] **FCS (Frame Check Sequence) : The FCS is used for error detection. It’s a part of the trailer in the Ethernet frame, which is a Layer 2 PDU (Protocol Data Unit). It allows the receiving node to detect if the frame was damaged in transit.**
- [x] **Destination MAC Address : The MAC address is a hardware address that identifies each device on a local network uniquely. It is used by switches to forward frames to the correct destination on a local network, which is a Layer 2 activity.**

> [!NOTE]
> **Explanation:** Explanation & Hint:
In the OSI model, different layers have specific functions and responsibilities, and certain fields in network protocol headers are associated with these layers:
Layer 2: Data Link Layer
802.2 header
: This refers to the IEEE 802.2 standard for logical link control (LLC) which is part of the Data Link Layer. It provides addressing and control of the data link. It encapsulates the network layer protocol information.
FCS (Frame Check Sequence)
: The FCS is used for error detection. It’s a part of the trailer in the Ethernet frame, which is a Layer 2 PDU (Protocol Data Unit). It allows the receiving node to detect if the frame was damaged in transit.
Destination MAC Address
: The MAC address is a hardware address that identifies each device on a local network uniquely. It is used by switches to forward frames to the correct destination on a local network, which is a Layer 2 activity.
Layer 3: Network Layer
TTL (Time To Live)
: The TTL field in an IP packet header helps prevent datagrams from looping indefinitely on an IP network. Each router that forwards a packet decrements the TTL by one. If the TTL reaches zero, the packet is discarded. This is a Layer 3 function because it deals with the lifespan of a packet as it travels across networks.
Source IP Address
: This is the IP address of the device that originally sends the packet. The Network Layer (Layer 3) is responsible for the logical IP addressing and for routing packets across different networks.
Layer 4: Transport Layer
Acknowledgment Number
: In TCP (Transmission Control Protocol), which operates at Layer 4, the acknowledgment number is used to confirm receipt of packets. TCP is a connection-oriented protocol, and the acknowledgment number is a key feature that supports reliable transmission.
Destination Port Number
: The port number is used to identify specific applications/services on a host. For example, web servers usually use port 80 for HTTP. This is managed by the Transport Layer (Layer 4), which is responsible for end-to-end communication and reliability.
These fields are integral to the operation of their respective layers, ensuring that data is encapsulated, routed, and received accurately and reliably.

---

## Question 54

When a switch configuration includes a user-defined error threshold on a per-port basis, to which switching method will the switch revert when the error threshold is reached?

- [ ] fast-forward
- [ ] cut-through
- [x] **store-and-forward**
- [ ] fragment-free

> [!NOTE]
> **Explanation:** Explanation & Hint:
When a switch configuration includes a user-defined error threshold on a per-port basis, and this threshold is reached, the switch will revert to the 
store-and-forward
 switching method.
Store-and-forward switching reads the entire frame into the switch’s buffer and checks it for errors (using the Frame Check Sequence, FCS) before forwarding it on to its destination. This method ensures that the frame is error-free, which is particularly useful when the network experiences a high level of errors. If a frame does not pass the FCS check, the switch discards it rather than forwarding it.
Other switching methods like cut-through and fragment-free begin forwarding the frame before it’s entirely received, which is faster but doesn’t allow for thorough error checking. Fast-forward is a type of cut-through switching that forwards the frame as soon as the destination MAC address is read, without waiting for error checking. Fragment-free is another form of cut-through switching that waits for the collision window (64 bytes) to pass before forwarding to minimize the chance of collision-related errors. When an error threshold is set and reached, these methods would not be suitable since they do not provide comprehensive error checking like store-and-forward does.

---

## Question 55

What are proprietary protocols?

- [ ] protocols that can be freely used by any organization or vendor
- [ ] protocols developed by private organizations to operate on any vendor hardware
- [ ] a collection of protocols known as the TCP/IP protocol suite
- [x] **protocols developed by organizations who have control over their definition and operation**

> [!NOTE]
> **Explanation:** Explanation:
Proprietary protocols have their definition and operation controlled by one company or vendor. Some of them can be used by different organizations with permission from the owner. The TCP/IP protocol suite is an open standard, not a proprietary protocol.

---

## Question 56

What is an advantage to using a protocol that is defined by an open standard?

- [ ] An open standard protocol is not controlled or regulated by standards organizations.
- [ ] A company can monopolize the market.
- [x] **It encourages competition and promotes choices.**
- [ ] The protocol can only be run on equipment from a specific vendor.

> [!NOTE]
> **Explanation:** Explanation:
A monopoly by one company is not a good idea from a user point of view. If a protocol can only be run on one brand, it makes it difficult to have mixed equipment in a network. A proprietary protocol is not free to use. An open standard protocol will in general be implemented by a wide range of vendors.

---

## Question 57

Which type of server relies on record types such as A, NS, AAAA, and MX in order to provide services?

- [ ] email
- [ ] file
- [ ] web
- [x] **DNS**
- [ ] A – an end device IPv4 address
- [ ] NS – an authoritative name server
- [ ] AAAA – an end device IPv6 address
- [ ] MX – a mail exchange record

> [!NOTE]
> **Explanation:** Explanation:
A DNS server stores records that are used to resolve IP addresses to host names. Some DNS record types include the following:
A – an end device IPv4 address
NS – an authoritative name server
AAAA – an end device IPv6 address
MX – a mail exchange record

---

## Question 58

Match a statement to the related network model.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-007.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-–-ITNv7-–-Final-Exam-Answers-007-1024x633.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-007-1024x633.png)

> [!NOTE]
> **Explanation:** Explanation:
Peer-to-peer networks do not require the use of a dedicated server, and devices can assume both client and server roles simultaneously on a per request basis. Because they do not require formalized accounts or permissions, they are best used in limited situations. Peer-to-peer applications require a user interface and background service to be running, and can be used in more diverse situations.

---

## Question 59

A network administrator wants to have the same network mask for all networks at a particular small site. The site has the following networks and number of devices:

- [ ] 255.255.255.240
- [ ] 255.255.255.0
- [ ] 255.255.255.192
- [x] **255.255.255.224**
- [ ] 255.255.255.248
- [ ] 255.255.255.252

> [!NOTE]
> **Explanation:** Explanation:
If the same mask is to be used, then the network with the most hosts must be examined for the number of hosts, which in this case is 22 hosts. Thus, 5 host bits are needed. The /27 or 255.255.255.224 subnet mask would be appropriate to use for these networks.

---

## Question 60

A network administrator wants to have the same network mask for all networks at a particular small site. The site has the following networks and number of devices:

IP phones – 22 addresses
PCs – 20 addresses needed
Printers – 2 addresses needed
Scanners – 2 addresses needed

- [ ] 255.255.255.240
- [ ] 255.255.255.0
- [ ] 255.255.255.192
- [x] **255.255.255.224**
- [ ] 255.255.255.248
- [ ] 255.255.255.252

> [!NOTE]
> **Explanation:** Explanation:
If the same mask is to be used, then the network with the most hosts must be examined for the number of hosts, which in this case is 22 hosts. Thus, 5 host bits are needed. The /27 or 255.255.255.224 subnet mask would be appropriate to use for these networks.

---

## Question 61

A network administrator wants to have the same network mask for all networks at a particular small site. The site has the following networks and number of devices:

IP phones – 22 addresses
PCs – 20 addresses needed
Printers – 2 addresses needed
Scanners – 2 addresses needed

The network administrator has deemed that 192.168.10.0/24 is to be the network used at this site. Which single subnet mask would make the most efficient use of the available addresses to use for the four subnetwo
rks?

- [ ] 255.255.255.240
- [ ] 255.255.255.0
- [ ] 255.255.255.192
- [x] **255.255.255.224**
- [ ] 255.255.255.248
- [ ] 255.255.255.252

> [!NOTE]
> **Explanation:** Explanation:
If the same mask is to be used, then the network with the most hosts must be examined for the number of hosts, which in this case is 22 hosts. Thus, 5 host bits are needed. The /27 or 255.255.255.224 subnet mask would be appropriate to use for these networks.

---

## Question 62

Refer to the exhibit. The network administrator has assigned the LAN of LBMISS an address range of 192.168.10.0. This address range has been subnetted using a /29 prefix. In order to accommodate a new building, the technician has decided to use the fifth subnet for configuring the new network (subnet zero is the first subnet). By company policies, the router interface is always assigned the first usable host address and the workgroup server is given the last usable host address. Which configuration should be entered into the properties of the workgroup server to allow connectivity to the Internet?

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/word-image-9-1.jpg)

- [x] **IP address: 192.168.10.38 subnet mask: 255.255.255.248, default gateway: 192.168.10.33**
- [ ] IP address: 192.168.10.38 subnet mask: 255.255.255.240, default gateway: 192.168.10.33
- [ ] IP address: 192.168.10.254 subnet mask: 255.255.255.0, default gateway: 192.168.10.1
- [ ] IP address: 192.168.10.41 subnet mask: 255.255.255.248, default gateway: 192.168.10.46
- [ ] IP address: 192.168.10.65 subnet mask: 255.255.255.240, default gateway: 192.168.10.76

> [!NOTE]
> **Explanation:** Explanation:
Using a /29 prefix to subnet 192.168.10.0 results in subnets that increment by 8:

192.168.10.0 (1)

192.168.10.8 (2)

192.168.10.16 (3)

192.168.10.24 (4)

192.168.10.32 (5)

---

## Question 63

Refer to the exhibit. A network engineer has been given the network address of 192.168.99.0 and a subnet mask of 255.255.255.192 to subnet across the four networks shown. How many total host addresses are unused across all four subnets?

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/word-image-10.png)

- [ ] 158
- [x] **200**
- [ ] 224
- [ ] 88
- [ ] 72

> [!NOTE]
> **Explanation:** Explanation:
The network IP address 192.168.99.0 and a subnet mask of 255.255.255.192 provides 62 usable IP addresses for each subnet. Subnet A needs 30 host addresses. There are 32 addresses wasted. Subnet B uses 2 of the 62 available IP addresses, because it is a serial link. Consequently, it wastes 60 addresses. Likewise, subnet C wastes 60 addresses. Subnet D needs 14 addresses, so it wastes 48 addresses. The total wasted addresses are 32+60+60+48=200 addresses.

---

## Question 64

What would be the interface ID of an IPv6 enabled interface with a MAC address of 1C-6F-65-C2-BD-F8 when the interface ID is generated by using the EUI-64 process?

- [x] **1E6F:65FF:FEC2:BDF8**
- [ ] 106F:65FF:FEC2:BDF8
- [ ] C16F:65FF:FEC2:BDF8
- [ ] 0C6F:65FF:FEC2:BDF8

> [!NOTE]
> **Explanation:** Explanation & Hint:

---

## Question 65

Which information does the 
show startup-config 
command display?​

- [ ] the IOS image copied into RAM
- [ ] the bootstrap program in the ROM
- [x] **the contents of the saved configuration file in the NVRAM**
- [ ] the contents of the current running configuration file in the RAM

> [!NOTE]
> **Explanation:** Explanation & Hint:
The 
show startup-config
 command displays 
the contents of the saved configuration file in the NVRAM
. When you run this command on a Cisco device, it shows you the configuration that will be used the next time the device is restarted. This is the configuration that has been saved using the 
copy running-config startup-config
 command.
It does not display the IOS image, the bootstrap program, or the current running configuration, which are all different components of the device’s operation. The IOS image is the operating system file, the bootstrap program is the initial code that runs when the device is powered on, and the current running configuration is the active configuration that the device is currently using (which can be viewed using the 
show running-config
 command).

---

## Question 66

Match each type of frame field to its function. (Not all options are used.)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-011.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-–-ITNv7-–-Final-Exam-Answers-011-1024x432.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-011-1024x432.png)

- [x] **Addressing : This field is responsible for directing the frame toward its destination. In an Ethernet frame, this would correspond to both the source and destination MAC addresses.**
- [x] **Error detection : This field checks if the frame has been damaged during the transfer. This corresponds to the Frame Check Sequence (FCS) at the end of an Ethernet frame.**
- [x] **Type : This field is used by the Logical Link Control (LLC) to identify the Layer 3 protocol, such as IP. It can indicate what type of payload the frame is carrying.**
- [x] **Frame start : This field identifies the beginning of a frame. In Ethernet frames, this is typically the preamble or the start frame delimiter (SFD).**

> [!NOTE]
> **Explanation:** Explanation & Hint:
Addressing
: This field is responsible for directing the frame toward its destination. In an Ethernet frame, this would correspond to both the source and destination MAC addresses.
Error detection
: This field checks if the frame has been damaged during the transfer. This corresponds to the Frame Check Sequence (FCS) at the end of an Ethernet frame.
Type
: This field is used by the Logical Link Control (LLC) to identify the Layer 3 protocol, such as IP. It can indicate what type of payload the frame is carrying.
Frame start
: This field identifies the beginning of a frame. In Ethernet frames, this is typically the preamble or the start frame delimiter (SFD).
Flow control services are typically managed at higher layers (like the transport layer in TCP with flow control mechanisms) and not indicated by a specific field in the Ethernet frame structure.

---

## Question 67

What are two primary responsibilities of the Ethernet MAC sublayer? (Choose two.)

- [x] **accessing the media**
- [x] **data encapsulation**
- [ ] logical addressing
- [ ] error detection
- [ ] frame delimiting
- [ ] Accessing the media : This involves controlling how a network device physically places an Ethernet frame onto the network medium. Ethernet networks can have multiple devices trying to use the same medium (like twisted pair cable, fiber optic, etc.), so there needs to be a method for preventing collisions and managing what happens if they occur. The MAC sublayer uses Carrier Sense Multiple Access with Collision Detection (CSMA/CD) for this purpose in traditional Ethernet networks. The device listens to the medium to check if it is idle before sending data. If two devices transmit at the same time and a collision is detected, CSMA/CD dictates how the devices handle the collision and when they can attempt to resend the data.
- [ ] Data encapsulation : In the context of the MAC sublayer, this involves creating the Ethernet frame structure that encapsulates the network layer data. This encapsulation includes adding a header and a trailer to the data packet. The header contains the source and destination MAC addresses, and the type/length field, which is used to identify the payload type or the length of the payload. The trailer contains a Frame Check Sequence (FCS), which is used for error detection. The encapsulation ensures that the payload is delivered correctly from one MAC address to another and can be checked for errors upon arrival.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The two primary responsibilities of the Ethernet MAC sublayer based on the options provided are:
Accessing the media
: This involves controlling how a network device physically places an Ethernet frame onto the network medium. Ethernet networks can have multiple devices trying to use the same medium (like twisted pair cable, fiber optic, etc.), so there needs to be a method for preventing collisions and managing what happens if they occur. The MAC sublayer uses Carrier Sense Multiple Access with Collision Detection (CSMA/CD) for this purpose in traditional Ethernet networks. The device listens to the medium to check if it is idle before sending data. If two devices transmit at the same time and a collision is detected, CSMA/CD dictates how the devices handle the collision and when they can attempt to resend the data.
Data encapsulation
: In the context of the MAC sublayer, this involves creating the Ethernet frame structure that encapsulates the network layer data. This encapsulation includes adding a header and a trailer to the data packet. The header contains the source and destination MAC addresses, and the type/length field, which is used to identify the payload type or the length of the payload. The trailer contains a Frame Check Sequence (FCS), which is used for error detection. The encapsulation ensures that the payload is delivered correctly from one MAC address to another and can be checked for errors upon arrival.
While the MAC sublayer is directly responsible for placing the frame onto the medium, the overall process of data encapsulation includes other sublayers/functions as well. The LLC sublayer, for example, can add control information to help deliver the packet to the correct network protocol (IPv4, IPv6, ARP, etc.) once it reaches the destination. However, in the context of Ethernet and your options, encapsulation refers to the addition of Ethernet-specific framing around the network payload.

---

## Question 68

Match the characteristic to the forwarding method.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-012.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-–-ITNv7-–-Final-Exam-Answers-012-1024x931.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-012-1024x931.png)

- [x] **Begins forwarding when the destination address is received : This mode starts to forward the frame as soon as the switch reads the destination MAC address. It does not wait for the entire frame to arrive before it begins forwarding it.**
- [x] **Has low latency : Because cut-through switches start forwarding frames before they are completely received, there is less processing time, and thus, lower latency.**
- [x] **May forward runt frames : Since cut-through switches do not wait for the entire frame to arrive and do not check the frame’s integrity before forwarding, they may forward frames that are smaller than the minimum legal frame size, known as runt frames.**

> [!NOTE]
> **Explanation:** Explanation & Hint:
Cut-Through Switching:
Begins forwarding when the destination address is received
: This mode starts to forward the frame as soon as the switch reads the destination MAC address. It does not wait for the entire frame to arrive before it begins forwarding it.
Has low latency
: Because cut-through switches start forwarding frames before they are completely received, there is less processing time, and thus, lower latency.
May forward runt frames
: Since cut-through switches do not wait for the entire frame to arrive and do not check the frame’s integrity before forwarding, they may forward frames that are smaller than the minimum legal frame size, known as runt frames.
Store-and-Forward Switching:
Always stores the entire frame
: The switch receives the whole frame and buffers it completely before making any decisions on forwarding. This allows the switch to look at the entire frame from start to finish.
Checks the frame length before forwarding
: While the frame is in the buffer, the switch checks to ensure that it is not below the minimum frame size (undersized, which would make it a runt frame) or above the maximum frame size (oversized, which would make it a giant frame). Frames that don’t meet the correct specifications are discarded.
Checks the CRC before forwarding
: The switch also performs an integrity check on the frame using the Cyclic Redundancy Check (CRC). If the frame fails this check, it indicates that the frame has errors, and the switch discards it to prevent the propagation of corrupt data.

---

## Question 69

Which switching method drops frames that fail the FCS check?

- [x] **store-and-forward switching**
- [ ] ingress port buffering
- [ ] cut-through switching
- [ ] borderless switching
- [ ] Ingress port buffering refers to the practice of using buffers on the switch’s ports to hold incoming frames before processing, which can help manage congestion but isn’t directly related to FCS checking.
- [ ] Cut-through switching begins forwarding the frame as soon as the destination MAC address is read, without waiting for the entire frame to come in, and thus it does not typically check the FCS before forwarding. Some advanced cut-through switches may have mechanisms to check FCS after they have started forwarding the frame and stop forwarding if an error is detected.
- [ ] Borderless switching is a marketing term used by some vendors to describe switches designed for modern networking needs, providing integrated security, mobility, and application optimization across a network without borders. It is not specific to a method of error checking or frame forwarding.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The switching method that drops frames that fail the FCS (Frame Check Sequence) check is 
store-and-forward switching
.
In store-and-forward switching, the switch accepts the entire frame into its buffer, checks the FCS for errors, and only forwards the frame if no errors are detected. If the FCS check fails, indicating that there are errors in the frame, the switch drops the frame. This method ensures that corrupt frames are not propagated through the network.
The other methods listed have different characteristics:
Ingress port buffering
 refers to the practice of using buffers on the switch’s ports to hold incoming frames before processing, which can help manage congestion but isn’t directly related to FCS checking.
Cut-through switching
 begins forwarding the frame as soon as the destination MAC address is read, without waiting for the entire frame to come in, and thus it does not typically check the FCS before forwarding. Some advanced cut-through switches may have mechanisms to check FCS after they have started forwarding the frame and stop forwarding if an error is detected.
Borderless switching
 is a marketing term used by some vendors to describe switches designed for modern networking needs, providing integrated security, mobility, and application optimization across a network without borders. It is not specific to a method of error checking or frame forwarding.

---

## Question 70

What is an advantage for small organizations of adopting IMAP instead of POP?

- [ ] IMAP sends and retrieves email, but POP only retrieves email.
- [ ] POP only allows the client to store messages in a centralized way, while IMAP allows distributed storage.
- [x] **Messages are kept in the mail servers until they are manually deleted from the email client.**
- [ ] When the user connects to a POP server, copies of the messages are kept in the mail server for a short time, but IMAP keeps them for a long time.

> [!NOTE]
> **Explanation:** Explanation:
IMAP and POP are protocols that are used to retrieve email messages. The advantage of using IMAP instead of POP is that when the user connects to an IMAP-capable server, copies of the messages are downloaded to the client application. IMAP then stores the email messages on the server until the user manually deletes those messages.

---

## Question 71

A wired laser printer is attached to a home computer. That printer has been shared so that other computers on the home network can also use the printer. What networking model is in use?

- [ ] point-to-point
- [ ] client-based
- [x] **peer-to-peer (P2P)**
- [ ] master-slave

> [!NOTE]
> **Explanation:** Explanation:
Peer-to-peer (P2P) networks have two or more network devices that can share resources such as printers or files without having a dedicated server.

---

## Question 72

A network administrator is adding a new LAN to a branch office. The new LAN must support 200 connected devices. What is the smallest network mask that the network administrator can use for the new network?

- [ ] 255.255.255.224
- [ ] 255.255.255.240
- [ ] 255.255.255.192
- [x] **255.255.255.0**
- [ ] Each subnet has two addresses that cannot be used for hosts: the network address and the broadcast address.
- [ ] The remaining number of addresses must be equal to or greater than the number of required hosts (200 in this case).
- [ ] A /27 subnet mask (255.255.255.224) provides 2(32−27)−2=30 2 ( 32 − 27 ) − 2 = 30 usable host addresses, which is not enough.
- [ ] A /28 subnet mask (255.255.255.240) provides 2(32−28)−2=14 2 ( 32 − 28 ) − 2 = 14 usable host addresses, which is also not enough.
- [ ] A /26 subnet mask (255.255.255.192) provides 2(32−26)−2=62 2 ( 32 − 26 ) − 2 = 62 usable host addresses, which is still not enough.
- [ ] A /24 subnet mask (255.255.255.0) provides 2(32−24)−2=254 2 ( 32 − 24 ) − 2 = 254 usable host addresses, which is sufficient for 200 devices.

> [!NOTE]
> **Explanation:** Explanation & Hint:
To determine the smallest network mask that can support 200 connected devices, you need to calculate the subnet size that can accommodate at least 200 host addresses.
Here’s how to determine the required subnet size:
Each subnet has two addresses that cannot be used for hosts: the network address and the broadcast address.
The remaining number of addresses must be equal to or greater than the number of required hosts (200 in this case).
The formula to calculate the number of usable host addresses in a subnet is 
2(32−�)−2
2
(
32
−
n
)
−
2
, where 
�
n
 is the number of bits used for the network portion of the address (the subnet mask).
You will need to find the smallest subnet mask that provides at least 202 addresses (200 for the devices, plus 2 for the network and broadcast addresses).
A /27 subnet mask (255.255.255.224) provides 
2(32−27)−2=30
2
(
32
−
27
)
−
2
=
30
 usable host addresses, which is not enough.
A /28 subnet mask (255.255.255.240) provides 
2(32−28)−2=14
2
(
32
−
28
)
−
2
=
14
 usable host addresses, which is also not enough.
A /26 subnet mask (255.255.255.192) provides 
2(32−26)−2=62
2
(
32
−
26
)
−
2
=
62
 usable host addresses, which is still not enough.
A /24 subnet mask (255.255.255.0) provides 
2(32−24)−2=254
2
(
32
−
24
)
−
2
=
254
 usable host addresses, which is sufficient for 200 devices.
Therefore, the smallest subnet mask that the network administrator can use for the new LAN to support 200 connected devices is 
255.255.255.0
.

---

## Question 73

Which wireless technology has low-power and data rate requirements making it popular in home automation applications?

- [x] **ZigBee**
- [ ] 5G
- [ ] Wi-Fi
- [ ] LoRaWAN

> [!NOTE]
> **Explanation:** Explanation & Hint:
The wireless technology that has low-power and data rate requirements and is popular in home automation applications is 
ZigBee
.
ZigBee is specifically designed for low-data rate, low-power applications and is based on the IEEE 802.15.4 standard. It is widely used in home automation, sensor networks, and IoT (Internet of Things) applications because it is optimized for intermittent data transmission from a sensor or input device. ZigBee networks can operate for years on inexpensive batteries, making them an ideal choice for these types of applications.

---

## Question 74

What are two characteristics shared by TCP and UDP? (Choose two.)

- [ ] ability to to carry digitized voice
- [ ] 3-way handshake
- [ ] default window size
- [ ] connectionless communication
- [x] **port numbering**
- [x] **use of checksum**

> [!NOTE]
> **Explanation:** Explanation:
Both TCP and UDP use source and destination port numbers to distinguish different data streams and to forward the right data segments to the right applications. Error checking the header and data is done by both protocols by using a checksum calculation to determine the integrity of the data that is received. TCP is connection-oriented and uses a 3-way handshake to establish an initial connection. TCP also uses window to regulate the amount of traffic sent before receiving an acknowledgment. UDP is connectionless and is the best protocol for carry digitized VoIP signals.

---

## Question 75

A client packet is received by a server. The packet has a destination port number of 69. What service is the client requesting?

- [ ] DHCP
- [ ] SMTP
- [x] **TFTP**
- [ ] DNS

> [!NOTE]
> **Explanation:** Explanation & Hint:
The client is requesting the TFTP (Trivial File Transfer Protocol) service. In networking, port numbers are used to identify specific services or protocols, and port number 69 is designated for TFTP.
TFTP is a simple protocol to transfer files, and it is used where the simplicity of implementation is more critical than the advanced features of a more robust file transfer protocol like FTP. It is commonly used for transferring small files such as system boot files or configurations over a network.

---

## Question 76

What service is provided by Internet Messenger?

- [x] **An application that allows real-time chatting among remote users.**
- [ ] Resolves domain names, such as cisco.com, into IP addresses.
- [ ] Uses encryption to provide secure remote access to network devices and servers.
- [ ] Allows remote access to network devices and servers.

> [!NOTE]
> **Explanation:** Explanation & Hint:
Internet Messenger provides 
an application that allows real-time chatting among remote users
. This type of service is used for instant messaging, which enables users to communicate with each other in real-time over the internet, typically using text, and may also support voice and video communication.

---

## Question 77

What characteristic describes antispyware?

- [ ] a tunneling protocol that provides remote users with secure access into the network of an organization
- [ ] a network device that filters access and traffic coming into a network
- [x] **applications that protect end devices from becoming infected with malicious software**
- [ ] software on a router that filters traffic based on IP addresses or applications

> [!NOTE]
> **Explanation:** Explanation & Hint:
Antispyware is best described as 
applications that protect end devices from becoming infected with malicious software
. Antispyware programs are designed to prevent and detect unwanted spyware and remove it if found. They are essential for providing real-time protection by scanning for potential threats to prevent spyware from becoming embedded on computers or to find and remove it if it has already been installed.

---

## Question 78

A network administrator wants to have the same subnet mask for three subnetworks at a small site. The site has the following networks and numbers of devices:

- [x] **255.255.255.240**
- [ ] 255.255.255.0
- [ ] 255.255.255.248
- [ ] 255.255.255.252

> [!NOTE]
> **Explanation:** Explanation:
The largest subnet in the topology has 100 hosts in it so the subnet mask must have at least 7 host bits in it (27-2=126). 255.255.255.0 has 8 hosts bits, but this does not meet the requirement of providing the maximum number of subnets.

---

## Question 79

A network administrator wants to have the same subnet mask for three subnetworks at a small site. The site has the following networks and numbers of devices:

Subnetwork A: IP phones – 10 addresses

Subnetwork B: PCs – 8 addresses

Subnetwork C: Printers – 2 addresses

What single subnet mask would be appropriate to use for the three subnetworks?

- [x] **255.255.255.240**
- [ ] 255.255.255.0
- [ ] 255.255.255.248
- [ ] 255.255.255.252

> [!NOTE]
> **Explanation:** Explanation:
The largest subnet in the topology has 100 hosts in it so the subnet mask must have at least 7 host bits in it (27-2=126). 255.255.255.0 has 8 hosts bits, but this does not meet the requirement of providing the maximum number of subnets.

---

## Question 80

Refer to the exhibit. A company uses the address block of 128.107.0.0/16 for its network. What subnet mask would provide the maximum number of equal size subnets while providing enough host addresses for each subnet in the exhibit?

![exhibit](https://infraexam.com/wp-content/uploads/2020/10/CCNA1-v7-ITNv7-Final-Exam-Answers-08.png)

- [x] **255.255.255.128**
- [ ] 255.255.255.224
- [ ] 255.255.255.192
- [ ] 255.255.255.0
- [ ] 255.255.255.240
- [ ] We need a subnet mask that allows for at least 100 hosts.
- [ ] The formula to calculate the number of hosts is 2(32−�)−2 2 ( 32 − n ) − 2 , where � n is the number of bits used for the network portion (including the subnet portion).
- [ ] The /16 indicates that the first 16 bits are already used for the network part. So, we are left with 16 bits to play with for subnetting and hosts.
- [ ] We need to find the smallest subnet size that can accommodate 100 hosts.

> [!NOTE]
> **Explanation:** Explanation & Hint:
To determine the appropriate subnet mask for the network shown in the exhibit, we need to consider the subnet with the highest number of hosts since that will dictate the size of the subnet mask. According to the exhibit, the subnet with the largest number of hosts requires support for 100 hosts.
Here’s how to calculate the subnet mask:
We need a subnet mask that allows for at least 100 hosts.
The formula to calculate the number of hosts is 
2(32−�)−2
2
(
32
−
n
)
−
2
, where 
�
n
 is the number of bits used for the network portion (including the subnet portion).
To support at least 100 hosts, we need to find 
�
n
 such that 
2(32−�)−2≥100
2
(
32
−
n
)
−
2
≥
100
.
The /16 indicates that the first 16 bits are already used for the network part. So, we are left with 16 bits to play with for subnetting and hosts.
We need to find the smallest subnet size that can accommodate 100 hosts.
Let’s calculate the required subnet size.
The subnet mask that would provide the maximum number of equal size subnets while providing enough host addresses for each subnet in the exhibit is 255.255.255.128. This subnet mask corresponds to a /25 subnet size, which supports up to 126 hosts per subnet (128 total addresses minus 2 for the network and broadcast addresses), and is the smallest subnet size that can accommodate the requirement for 100 hosts.

---

## Question 81

Refer to the exhibit. Which protocol was responsible for building the table that is shown?

![exhibit](https://infraexam.com/wp-content/uploads/2020/10/CCNA1-v7-ITNv7-Final-Exam-Answers-09.png)

- [x] **ARP**
- [ ] DNS
- [ ] DHCP
- [ ] ICMP

> [!NOTE]
> **Explanation:** Explanation & Hint:
The table shown in the image is an ARP (Address Resolution Protocol) table. It is responsible for mapping IP addresses to their corresponding physical MAC addresses. The entries show the IP addresses and their associated physical (MAC) addresses along with the type of entry, whether it is dynamic or static.
ARP is used within a local area network to find the hardware address of a device associated with an IPv4 address. The “dynamic” type means that the ARP has automatically discovered the MAC address, and “static” means that it has been manually entered into the ARP table and does not change.

---

## Question 82

Which two traffic types use the Real-Time Transport Protocol (RTP)? (Choose two.)

- [ ] web
- [ ] peer to peer
- [ ] file transfer
- [x] **video**
- [x] **voice**
- [ ] Video
- [ ] Voice

> [!NOTE]
> **Explanation:** Explanation & Hint:
The Real-Time Transport Protocol (RTP) is primarily designed for delivering audio and video over networks. It is used in streaming media systems (both live and on-demand), video conferencing, and push-to-talk systems (like VoIP, voice over IP), where timely delivery is more important than accurate delivery.
So, among the options provided:
Video
Voice
These two traffic types use RTP because it supports the delivery of real-time data, providing features for managing the timing and synchronization required for conversing or viewing media in real time.

---

## Question 83

Match the type of threat with the cause. (Not all options are used.)

![exhibit](https://infraexam.com/wp-content/uploads/2025/10/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-005-scaled.png)

![exhibit](https://infraexam.com/wp-content/uploads/2025/10/CCNA1-v7-–-ITNv7-–-Final-Exam-Answers-005-1024x502.png)

![exhibit](https://infraexam.com/wp-content/uploads/2025/10/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-005-1024x502.png)

- [x] **Hardware threats – These are typically associated with physical damage to servers, routers, switches, cabling plants, and workstations. Hardware threats can also include poor handling of key electrical components, which can lead to electrostatic discharge, and issues such as lack of critical spare parts, poor cabling, and poor labeling.**
- [x] **Environmental threats – These include temperature extremes (too hot or too cold) or humidity extremes (too wet or too dry). Environmental threats can cause equipment to fail prematurely or operate inefficiently.**
- [x] **Electrical threats – These refer to voltage spikes, insufficient supply voltage (brownouts), unconditioned power (noise), and total power loss. These threats can lead to equipment damage or data loss.**
- [x] **Maintenance threats – These might include unauthorized access resulting in loss of data. They can also be associated with poor maintenance practices that fail to prevent or predict the failure of systems.**

> [!NOTE]
> **Explanation:** Explanation & Hint:
Hardware threats
 – These are typically associated with physical damage to servers, routers, switches, cabling plants, and workstations. Hardware threats can also include poor handling of key electrical components, which can lead to electrostatic discharge, and issues such as lack of critical spare parts, poor cabling, and poor labeling.
Environmental threats
 – These include temperature extremes (too hot or too cold) or humidity extremes (too wet or too dry). Environmental threats can cause equipment to fail prematurely or operate inefficiently.
Electrical threats
 – These refer to voltage spikes, insufficient supply voltage (brownouts), unconditioned power (noise), and total power loss. These threats can lead to equipment damage or data loss.
Maintenance threats
 – These might include unauthorized access resulting in loss of data. They can also be associated with poor maintenance practices that fail to prevent or predict the failure of systems.

---

## Question 84

Refer to the exhibit. The switches are in their default configuration. Host A needs to communicate with host D, but host A does not have the MAC address for its default gateway. Which network hosts will receive the ARP request sent by host A?

![exhibit](https://infraexam.com/wp-content/uploads/2020/10/CCNA1-v7-ITNv7-Final-Exam-Answers-10.png)

- [ ] only hosts A, B, C, and D
- [ ] only router R1
- [ ] only hosts A, B, and C
- [ ] only hosts B and C
- [x] **only hosts B, C, and router R1**
- [ ] only host D

> [!NOTE]
> **Explanation:** Explanation:
Since host A does not have the MAC address of the default gateway in its ARP table, host A sends an ARP broadcast. The ARP broadcast would be sent to every device on the local network. Hosts B, C, and router R1 would receive the broadcast. Router R1 would not forward the message.

---

## Question 85

Which value, that is contained in an IPv4 header field, is decremented by each router that receives a packet?

- [ ] Differentiated Services
- [ ] Fragment Occset
- [ ] Header Length
- [x] **Time-to-Live**

> [!NOTE]
> **Explanation:** Explanation & Hint:
The value that is contained in an IPv4 header field and is decremented by each router that receives a packet is the 
Time-to-Live (TTL)
. This field is used to avoid a situation where an undeliverable packet circulates indefinitely. The TTL field is set by the sender of the packet and is decreased by one by each router that forwards the packet. When the TTL field reaches zero, the packet is discarded. This mechanism helps to ensure that packets do not loop endlessly due to routing errors.

---

## Question 86

Refer to the exhibit. The IP address of which device interface should be used as the default gateway setting of host H1?

![exhibit](https://infraexam.com/wp-content/uploads/2020/10/CCNA1-v7-ITNv7-Final-Exam-Answers-11.jpg.webp)

- [ ] R2: S0/0/1
- [x] **R1: G0/0**
- [ ] R2: S0/0/0
- [ ] R1: S0/0/0
- [ ] R2: S0/0/1 – This is an interface on R2, which is not directly connected to H1.
- [ ] R1: G0/0 – This is the correct interface, as it is the Gigabit Ethernet interface on R1 that is likely to be connected to the same subnet as H1.
- [ ] R2: S0/0/0 – This is another interface on R2, which is also not directly connected to H1.
- [ ] R1: S0/0/0 – This is a serial interface on R1, which would typically be used to connect to other routers, not hosts.

> [!NOTE]
> **Explanation:** Explanation & Hint:
In a network topology, the default gateway for a host is the router interface that is on the same network as the host and is used to forward traffic to other networks. The default gateway should be set to the IP address of the router interface that is directly connected to the same subnet as the host.
Based on the exhibit provided, host H1 is directly connected to router R1. Therefore, the default gateway for H1 should be set to the IP address of the interface on R1 that is in the same network as H1. Given the options:
R2: S0/0/1 – This is an interface on R2, which is not directly connected to H1.
R1: G0/0 – This is the correct interface, as it is the Gigabit Ethernet interface on R1 that is likely to be connected to the same subnet as H1.
R2: S0/0/0 – This is another interface on R2, which is also not directly connected to H1.
R1: S0/0/0 – This is a serial interface on R1, which would typically be used to connect to other routers, not hosts.
The correct default gateway setting for host H1 would be the IP address assigned to R1: G0/0.

---

## Question 87

Which two statements describe features of an IPv4 routing table on a router? (Choose two.)​

- [ ] Directly connected interfaces will have two route source codes in the routing table: C and S .
- [ ] The netstat -r command can be used to display the routing table of a router.​
- [ ] If there are two or more possible routes to the same destination, the route associated with the higher metric value is included in the routing table.
- [ ] The routing table lists the MAC addresses of each active interface.
- [x] **If a default static route is configured in the router, an entry will be included in the routing table with source code S .**
- [x] **It stores information about routes derived from the active router interfaces.**
- [ ] Directly connected interfaces are identified by the route source code ‘C’ which stands for connected. They are present in the routing table because the router has an interface in those networks.
- [ ] Static routes are identified by the route source code ‘S’. This includes any static routes that have been manually configured on the router, such as a default static route.
- [ ] If a default static route is configured in the router, an entry will be included in the routing table with source code ‘S’.

> [!NOTE]
> **Explanation:** Explanation & Hint:
Typically, in an IPv4 routing table on a router:
Directly connected interfaces
 are identified by the route source code ‘C’ which stands for connected. They are present in the routing table because the router has an interface in those networks.
Static routes
 are identified by the route source code ‘S’. This includes any static routes that have been manually configured on the router, such as a default static route.
However, directly connected interfaces having two route source codes ‘C’ and ‘S’ in the routing table is not a standard feature in IPv4 routing tables. In most cases, the ‘C’ code is used for directly connected networks, while ‘S’ is used exclusively for static routes. It’s possible that this statement is referring to a specific scenario where a static route has been configured for a network that is also directly connected, but this is not typical behavior as static routes are generally used to define routes to networks that are not directly connected.
With this in mind, the correct statements about features of an IPv4 routing table on a router, based on standard networking practices, include:
If a default static route is configured in the router, an entry will be included in the routing table with source code ‘S’.
If your source is stating that directly connected interfaces will have two route source codes in the routing table: ‘C’ and ‘S’, then it’s important to consider the specific context or platform where this might be the case. It could be a particular configuration or a platform-specific feature that is not widely applicable across different router models or operating systems.

---

## Question 88

Three bank employees are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other corporate managers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?

- [ ] financial transactions, web page, audio conference
- [ ] financial transactions, audio conference, web page
- [x] **audio conference, financial transactions, web page**
- [ ] audio conference, web page, financial transactions

> [!NOTE]
> **Explanation:** Explanation:
QoS mechanisms enable the establishment of queue management strategies that enforce priorities for different categories of application data. Thus, this queuing enables voice data to have priority over transaction data, which has priority over web data.

---

## Question 89

What is the consequence of configuring a router with the 
ipv6 unicast-routing 
global configuration command?​

- [ ] All router interfaces will be automatically activated.
- [ ] Each router interface will generate an IPv6 link-local address.​
- [x] **The IPv6 enabled router interfaces begin sending ICMPv6 Router Advertisement messages.**
- [ ] It statically creates a global unicast address on this router.​
- [ ] The router becomes capable of forwarding IPv6 packets, acting as an IPv6 router.
- [ ] IPv6 enabled router interfaces can then send ICMPv6 Router Advertisement (RA) messages if they are configured with an IPv6 address and the interface is activated. These RA messages are used to announce the presence of the router to other devices on the network and provide necessary network information for configuration.
- [ ] Router interfaces can generate an IPv6 link-local address, but this is not directly due to the ipv6 unicast-routing command. Link-local addresses are automatically generated for IPv6-enabled interfaces, regardless of the routing configuration, as part of the IPv6 protocol standards.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The consequence of configuring a router with the 
ipv6 unicast-routing
 global configuration command is that it enables the router to forward IPv6 unicast packets. This command does not automatically activate all router interfaces or create global unicast addresses on them. Rather, it enables the IPv6 routing capability of the router, allowing it to route IPv6 traffic between different networks.
Here’s what happens when the command is applied:
The router becomes capable of forwarding IPv6 packets, acting as an IPv6 router.
IPv6 enabled router interfaces can then send ICMPv6 Router Advertisement (RA) messages if they are configured with an IPv6 address and the interface is activated. These RA messages are used to announce the presence of the router to other devices on the network and provide necessary network information for configuration.
Router interfaces can generate an IPv6 link-local address, but this is not directly due to the 
ipv6 unicast-routing
 command. Link-local addresses are automatically generated for IPv6-enabled interfaces, regardless of the routing configuration, as part of the IPv6 protocol standards.
Therefore, the most accurate consequence of the command is that the IPv6-enabled router interfaces begin sending ICMPv6 Router Advertisement messages, assuming that the interfaces are configured properly with IPv6 addresses.

---

## Question 90

Refer to the exhibit. If Host1 were to transfer a file to the server, what layers of the TCP/IP model would be used?

![exhibit](https://infraexam.com/wp-content/uploads/2020/10/CCNA1-v7-ITNv7-Final-Exam-Answers-12.png.webp)

- [ ] only application, Internet, and network access layers
- [ ] only application, transport, network, data link, and physical layers
- [ ] application, session, transport, network, data link, and physical layers
- [ ] only application and Internet layers
- [x] **application, transport, Internet, and network access layers**
- [ ] only Internet and network access layers

> [!NOTE]
> **Explanation:** Explanation:
The TCP/IP model contains the application, transport, internet, and network access layers. A file transfer uses the FTP application layer protocol. The data would move from the application layer through all of the layers of the model and across the network to the file server.

---

## Question 91

The global configuration command 
ip default-gateway 172.16.100.1 
is applied to a switch. What is the effect of this command?

- [ ] The switch can communicate with other hosts on the 172.16.100.0 network.
- [x] **The switch can be remotely managed from a host on another network.**
- [ ] The switch will have a management interface with the address 172.16.100.1.
- [ ] The switch is limited to sending and receiving frames to and from the gateway 172.16.100.1.

> [!NOTE]
> **Explanation:** Explanation:
A default gateway address is typically configured on all devices to allow them to communicate beyond just their local network. In a switch this is achieved using the command ip default-gateway <ip address>.

---

## Question 92

What characteristic describes adware?

- [ ] a network device that filters access and traffic coming into a network
- [ ] an attack that slows or crashes a device or network service
- [ ] the use of stolen credentials to access private data
- [x] **software that is installed on a user device and collects information about the user**

> [!NOTE]
> **Explanation:** Explanation & Hint:
Adware is a type of software that is installed on a user’s device, typically without their full knowledge, which displays unwanted advertising and collects information about the user’s browsing habits. Adware can be intrusive and can degrade the user experience by displaying ads or redirecting browser searches to advertising websites. It’s often bundled with free software or downloads and can be considered a form of potentially unwanted program (PUP).
The primary purpose of adware is to generate revenue for its developers by showing advertisements to the user. Some adware tracks user behavior to target ads more effectively. While not always malicious in intent, adware can affect system performance and can sometimes lead to security vulnerabilities.

---

## Question 93

Match each description with the corresponding TCP mechanism. (Not all options are used.)

![exhibit](https://infraexam.com/wp-content/uploads/2025/10/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-004-scaled.png)

![exhibit](https://infraexam.com/wp-content/uploads/2025/10/CCNA1-v7-–-ITNv7-–-Final-Exam-Answers-004-1024x427.png)

![exhibit](https://infraexam.com/wp-content/uploads/2025/10/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-004-1024x427.png)

> [!NOTE]
> **Explanation:** Explanation & Hint:
“number of bytes a destination device can accept and process at one time”
 matches with 
window size
. The window size determines the volume of data that can be sent before an acknowledgment is required.
“used to identify missing segments of data”
 aligns with 
sequence numbers
. Sequence numbers are used to track the order of segments and identify if any are missing.
“method of managing segments of data loss”
 corresponds to 
retransmission
. Retransmission is used by TCP to resend data segments that have been lost or acknowledged as not received.
“received by a sender before transmitting more segments in a session”
 relates to 
acknowledgment
. The sender waits for an acknowledgment from the receiver before sending more data segments.

---

## Question 94

What is the purpose of the TCP sliding window?

- [ ] to ensure that segments arrive in order at the destination
- [x] **to request that a source decrease the rate at which it transmits data**
- [ ] to inform a source to retransmit data from a specific point forward
- [ ] to end communication when data transmission is complete
- [ ] It controls the flow of data between the sender and the receiver to ensure that the sender does not overwhelm the receiver’s buffer.
- [ ] It allows for more efficient use of the network by enabling the sender to transmit multiple segments before needing an acknowledgment, rather than waiting for an acknowledgment after each individual segment (which would be inefficient and increase latency).
- [ ] It dynamically adjusts the rate of data transmission based on the receiver’s ability to process data and the condition of the network (congestion control).
- [x] **to request that a source decrease the rate at which it transmits data**

> [!NOTE]
> **Explanation:** Explanation & Hint:
The purpose of the TCP sliding window is not specifically any of the options listed. The sliding window mechanism in TCP serves multiple purposes:
It controls the flow of data between the sender and the receiver to ensure that the sender does not overwhelm the receiver’s buffer.
It allows for more efficient use of the network by enabling the sender to transmit multiple segments before needing an acknowledgment, rather than waiting for an acknowledgment after each individual segment (which would be inefficient and increase latency).
It dynamically adjusts the rate of data transmission based on the receiver’s ability to process data and the condition of the network (congestion control).
So, while it indirectly ensures that segments are processed in order by the receiver and can be involved in mechanisms that decrease the rate of data transmission or result in retransmission requests, its primary purpose is flow control—managing the amount of outstanding data (data sent but not yet acknowledged) to match the receiver’s processing capabilities and current network conditions.
If we were to choose the option closest to the primary function of the TCP sliding window from the ones provided, it would be:
to request that a source decrease the rate at which it transmits data
This is because the sliding window can scale down the window size if the network is congested or the receiver’s buffer is full, effectively reducing the rate at which the sender can transmit data. However, it should be noted that the primary purpose is still flow control, which includes managing transmission rates as just one aspect.

---

## Question 95

What technique is used with UTP cable to help protect against signal interference from crosstalk?

- [ ] terminating the cable with special grounded connectors
- [x] **twisting the wires together into pairs**
- [ ] wrapping a foil shield around the wire pairs
- [ ] encasing the cables within a flexible plastic sheath

> [!NOTE]
> **Explanation:** Explanation:
To help prevent the effects of crosstalk, UTP cable wires are twisted together into pairs. Twisting the wires together causes the magnetic fields of each wire to cancel each other out.

---

## Question 96

A network technician is researching the use of fiber optic cabling in a new technology center. Which two issues should be considered before implementing fiber optic media? (Choose two.)

- [x] **Fiber optic cabling requires different termination and splicing expertise from what copper cabling requires.**
- [ ] Fiber optic cabling requires specific grounding to be immune to EMI.
- [ ] Fiber optic cabling is susceptible to loss of signal due to RFI.
- [x] **Fiber optic provides higher data capacity but is more expensive than copper cabling.**
- [ ] Fiber optic cable is able to withstand rough handling.

> [!NOTE]
> **Explanation:** Explanation and Hint:
Fiber optic media is more expensive than copper cabling used over the same distance. Fiber optic cables use light instead of an electrical signal, so EMI and RFI are not issues. However, fiber optic does require different skills to terminate and splice.

---

## Question 97

Users are reporting longer delays in authentication and in accessing network resources during certain time periods of the week. What kind of information should network engineers check to find out if this situation is part of a normal network behavior?

- [ ] syslog records and messages
- [ ] debug output and packet captures
- [ ] network configuration files
- [x] **the network performance baseline**
- [ ] The network performance baseline: A baseline consists of data that represents typical network performance during normal operational periods. By comparing current performance metrics to the baseline, engineers can determine if the delays are within normal ranges or indicative of a problem.
- [ ] Syslog records and messages: These can provide insight into system events and errors that occur on network devices, which might contribute to the delays.
- [ ] Debug output and packet captures: These tools are useful for real-time troubleshooting and in-depth analysis of the traffic flow, but they might be too granular for determining normal behavior patterns unless specific issues have been identified that need detailed investigation.

> [!NOTE]
> **Explanation:** Explanation & Hint:
To determine whether the reported delays are part of normal network behavior, network engineers should check:
The network performance baseline:
 A baseline consists of data that represents typical network performance during normal operational periods. By comparing current performance metrics to the baseline, engineers can determine if the delays are within normal ranges or indicative of a problem.
If the delays are outside the normal baseline, engineers might then consult:
Syslog records and messages:
 These can provide insight into system events and errors that occur on network devices, which might contribute to the delays.
Debug output and packet captures:
 These tools are useful for real-time troubleshooting and in-depth analysis of the traffic flow, but they might be too granular for determining normal behavior patterns unless specific issues have been identified that need detailed investigation.
Checking the baseline is generally the first step, as it gives an overview of expected performance against which actual performance can be measured. If anomalies are found, more detailed diagnostics like syslogs, debug outputs, and packet captures might be used to investigate further.

---

## Question 98

A user is complaining that an external web page is taking longer than normal to load.The web page does eventually load on the user machine. Which tool should the technician use with administrator privileges in order to locate where the issue is in the network?

- [ ] ipconfig /displaydns
- [ ] nslookup
- [x] **tracert**
- [ ] ping
- [ ] tracert (or traceroute on Unix/Linux systems): This tool traces the path that a packet takes to reach a destination and displays the time it takes to hop from one router to another. It can help identify at which point in the path there might be delays or a bottleneck causing the increased load time.
- [ ] ipconfig /displaydns: Displays the contents of the DNS client resolver cache, which includes the DNS records recently queried by the computer. This command is useful for checking cached DNS records but doesn’t help to locate network delays.
- [ ] nslookup: This is a network administration command-line tool used for querying the Domain Name System (DNS) to obtain domain name or IP address mapping or for any other specific DNS records. It’s useful for checking if DNS resolution is part of the problem but doesn’t show the network path or where delays occur.
- [ ] ping: A ping command would tell you if the destination is reachable and what the round-trip time (RTT) for the message is, but it won’t show where along the path potential issues are occurring.

> [!NOTE]
> **Explanation:** Explanation & Hint:
To locate where the issue is in the network when a web page is taking longer than normal to load, a technician should use:
tracert (or traceroute on Unix/Linux systems):
 This tool traces the path that a packet takes to reach a destination and displays the time it takes to hop from one router to another. It can help identify at which point in the path there might be delays or a bottleneck causing the increased load time.
While the other tools listed are useful for different purposes, they wouldn’t be as effective in locating the issue in the network path:
ipconfig /displaydns:
 Displays the contents of the DNS client resolver cache, which includes the DNS records recently queried by the computer. This command is useful for checking cached DNS records but doesn’t help to locate network delays.
nslookup:
 This is a network administration command-line tool used for querying the Domain Name System (DNS) to obtain domain name or IP address mapping or for any other specific DNS records. It’s useful for checking if DNS resolution is part of the problem but doesn’t show the network path or where delays occur.
ping:
 A ping command would tell you if the destination is reachable and what the round-trip time (RTT) for the message is, but it won’t show where along the path potential issues are occurring.
Using 
tracert
, the technician can see each hop along the path to the destination web server and the time taken to reach each hop, which can help locate the segment of the network that is causing the delay.

---

## Question 99

A client packet is received by a server. The packet has a destination port number of 53. What service is the client requesting?

- [ ] SSH
- [ ] FTP
- [ ] Telnet
- [x] **DNS**

> [!NOTE]
> **Explanation:** Explanation & Hint:
The client is requesting DNS (Domain Name System) service. Port 53 is the standard port used for DNS queries. DNS is used to translate domain names (like www.example.com) into IP addresses that can be used by the network to route requests to the correct server.

---

## Question 100

Refer to the exhibit. PC1 issues an ARP request because it needs to send a packet to PC2. In this scenario, what will happen next?​

![exhibit](https://infraexam.com/wp-content/uploads/2020/10/CCNA1-v7-ITNv7-Final-Exam-Answers-13.png)

- [ ] RT1 will send an ARP reply with its Fa0/0 MAC address.​
- [ ] SW1 will send an ARP reply with the PC2 MAC address.​
- [ ] RT1 will send an ARP reply with the PC2 MAC address.​
- [ ] SW1 will send an ARP reply with its Fa0/1 MAC address.​
- [x] **PC2 will send an ARP reply with its MAC address.**

> [!NOTE]
> **Explanation:** Explanation:
When a network device wants to communicate with another device on the same network, it sends a broadcast ARP request. In this case, the request will contain the IP address of PC2. The destination device (PC2) sends an ARP reply with its MAC address.

---

## Question 101

Match the description to the IPv6 addressing component. (Not all options are used.)

![exhibit](https://infraexam.com/wp-content/uploads/2025/10/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-003-scaled.png)

![exhibit](https://infraexam.com/wp-content/uploads/2025/10/CCNA1-v7-–-ITNv7-–-Final-Exam-Answers-003-1024x347.png)

![exhibit](https://infraexam.com/wp-content/uploads/2025/10/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-003-1024x347.png)

- [x] **“This part of the address is used by an organization to identify subnets.” matches with subnet ID . This is the part of the IPv6 address that an organization can use to create its internal addressing structure, defining different subnetworks within its allocation.**
- [x] **“This network portion of the address is assigned by the provider.” matches with global routing prefix . This is the portion of the IPv6 address provided by the ISP or a regional internet registry, which is used to route traffic to the organization’s network on the internet.**
- [x] **“This part of the address is the equivalent to the host portion of an IPv4 address.” matches with interface ID . In IPv6, the interface ID is the portion of the address that is typically used to identify a unique interface on a network, similar to how the host portion of an IPv4 address identifies a unique host in a subnet.**

> [!NOTE]
> **Explanation:** Explanation & Hint:
“This part of the address is used by an organization to identify subnets.” matches with 
subnet ID
. This is the part of the IPv6 address that an organization can use to create its internal addressing structure, defining different subnetworks within its allocation.
“This network portion of the address is assigned by the provider.” matches with 
global routing prefix
. This is the portion of the IPv6 address provided by the ISP or a regional internet registry, which is used to route traffic to the organization’s network on the internet.
“This part of the address is the equivalent to the host portion of an IPv4 address.” matches with 
interface ID
. In IPv6, the interface ID is the portion of the address that is typically used to identify a unique interface on a network, similar to how the host portion of an IPv4 address identifies a unique host in a subnet.

---

## Question 102

An IPv6 enabled device sends a data packet with the destination address of ff02::2. What is the target of this packet?​

- [ ] all IPv6 enabled devices on the local link​
- [ ] all IPv6 DHCP servers​
- [ ] all IPv6 enabled devices across the network​
- [x] **all IPv6 configured routers on the local link​**

> [!NOTE]
> **Explanation:** Explanation & Hint:
The destination address ff02::2 is an IPv6 multicast address that targets 
all IPv6 configured routers on the local link
. IPv6 multicast addresses are used to send a single packet to a group of hosts, in this case, all routers on the local subnet.

---

## Question 103

What are the three parts of an IPv6 global unicast address? (Choose three.)

- [x] **subnet ID**
- [x] **global routing prefix**
- [x] **interface ID**
- [ ] subnet mask
- [ ] broadcast address
- [ ] Global routing prefix : This is the prefix or network portion of the address that is assigned by the provider, such as an ISP, to a customer or other organization.
- [ ] Subnet ID : This is used by an organization to identify subnets within its site. The subnet ID is part of the local administration, allowing for internal organization and routing.
- [ ] Interface ID : This is the unique identifier for an interface within a subnet. An interface ID is typically 64 bits long, often automatically generated from the MAC address of the interface using the EUI-64 format.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The three parts of an IPv6 global unicast address are:
Global routing prefix
: This is the prefix or network portion of the address that is assigned by the provider, such as an ISP, to a customer or other organization.
Subnet ID
: This is used by an organization to identify subnets within its site. The subnet ID is part of the local administration, allowing for internal organization and routing.
Interface ID
: This is the unique identifier for an interface within a subnet. An interface ID is typically 64 bits long, often automatically generated from the MAC address of the interface using the EUI-64 format.
IPv6 does not use a subnet mask as IPv4 does; instead, the prefix length specifies the division of the address into the network and interface portions. Also, IPv6 does not have a broadcast address; it uses multicast addressing to achieve similar functionality.

---

## Question 104

What is one main characteristic of the data link layer?

- [ ] It generates the electrical or optical signals that represent the 1 and 0 on the media.
- [ ] It converts a stream of data bits into a predefined code.
- [x] **It shields the upper layer protocol from being aware of the physical medium to be used in the communication.**
- [ ] It accepts Layer 3 packets and decides the path by which to forward the packet to a remote network.

> [!NOTE]
> **Explanation:** Explanation & Hint:
One main characteristic of the data link layer is:
It shields the upper layer protocol from being aware of the physical medium to be used in the communication.
The data link layer (Layer 2) in the OSI model is responsible for node-to-node data transfer—a function that includes detecting and possibly correcting errors that may occur in the physical layer. It essentially provides a way for data to be transferred reliably across a physical link.

---

## Question 105

Which type of security threat would be responsible if a spreadsheet add-on disables the local software firewall?

- [x] **Trojan horse**
- [ ] brute-force attack
- [ ] DoS
- [ ] buffer overflow

> [!NOTE]
> **Explanation:** Explanation:
A Trojan horse is software that does something harmful, but is hidden in legitimate software code. A denial of service (DoS) attack results in interruption of network services to users, network devices, or applications. A brute-force attack commonly involves trying to access a network device. A buffer overflow occurs when a program attempts to store more data in a memory location than it can hold.

---

## Question 106

What service is provided by HTTPS?

- [ ] Allows remote access to network devices and servers.
- [ ] Resolves domain names, such as cisco.com, into IP addresses.
- [ ] Uses encryption to provide secure remote access to network devices and servers.
- [x] **Uses encryption to secure the exchange of text, graphic images, sound, and video on the web.**

> [!NOTE]
> **Explanation:** Explanation & Hint:
The service provided by HTTPS is:
Uses encryption to secure the exchange of text, graphic images, sound, and video on the web.
HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP, which is the protocol used for transmitting web pages over the internet. It uses SSL/TLS encryption to secure the connection between the client’s web browser and the web server, ensuring that all data passed between them remains private and integral.

---

## Question 107

Match the characteristic to the category.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-013.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-–-ITNv7-–-Final-Exam-Answers-013-1024x921.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-013-1024x921.png)

- [x] **Contained in the Layer 3 header : This characteristic is related to the IP address .**
- [x] **Contained in the Layer 2 header : This characteristic is related to the MAC address .**
- [x] **Separated into OUI and a unique identifier : This characteristic is related to the MAC address . The Organizationally Unique Identifier (OUI) is part of a MAC address that uniquely identifies the manufacturer or vendor of the network interface card.**
- [x] **Separated into a network portion and a unique identifier : This characteristic is related to the IP address . An IP address is divided into a network and a host portion, which identifies a specific network and a specific device on that network.**
- [x] **32 or 128 bits : This characteristic relates to the length of IP addresses . IPv4 addresses are 32 bits in length, and IPv6 addresses are 128 bits in length.**
- [x] **48 bits : This is the length of a MAC address , which is always 48 bits in length.**
- [x] **64 bits : This could potentially refer to several things in networking, but it often refers to the length of the interface identifier in an IPv6 address when using the EUI-64 format, or it might refer to a subnet size in IPv6 addressing, neither of which are specific to MAC addresses.**

> [!NOTE]
> **Explanation:** Explanation & Hint:
The characteristics given in the image seem to describe the differences between IP addresses and MAC addresses. While I can’t see the full details, I can provide information based on standard networking knowledge:
Contained in the Layer 3 header
: This characteristic is related to the 
IP address
.
Contained in the Layer 2 header
: This characteristic is related to the 
MAC address
.
Separated into OUI and a unique identifier
: This characteristic is related to the 
MAC address
. The Organizationally Unique Identifier (OUI) is part of a MAC address that uniquely identifies the manufacturer or vendor of the network interface card.
Separated into a network portion and a unique identifier
: This characteristic is related to the 
IP address
. An IP address is divided into a network and a host portion, which identifies a specific network and a specific device on that network.
32 or 128 bits
: This characteristic relates to the length of 
IP addresses
. IPv4 addresses are 32 bits in length, and IPv6 addresses are 128 bits in length.
48 bits
: This is the length of a 
MAC address
, which is always 48 bits in length.
64 bits
: This could potentially refer to several things in networking, but it often refers to the length of the interface identifier in an 
IPv6 address
 when using the EUI-64 format, or it might refer to a subnet size in IPv6 addressing, neither of which are specific to MAC addresses.

---

## Question 108

Refer to the exhibit. If host A sends an IP packet to host B, what will the destination address be in the frame when it leaves host A?

![exhibit](https://infraexam.com/wp-content/uploads/2020/10/CCNA1-v7-ITNv7-Final-Exam-Answers-14.png)

- [ ] 172.168.10.65
- [ ] 172.168.10.99
- [ ] AA:AA:AA:AA:AA:AA
- [ ] CC:CC:CC:CC:CC:CC
- [x] **BB:BB:BB:BB:BB:BB**
- [ ] DD:DD:DD:DD:DD:DD

> [!NOTE]
> **Explanation:** Explanation & Hint:
When Host A sends a packet to Host B, and they are on different networks, Host A will need to send the packet to its configured gateway so it can be routed to Host B’s network. The destination MAC address in the frame as it leaves Host A will indeed be the MAC address of its default gateway, which is the interface on Router R1 that is on the same subnet as Host A.
Given the network diagram, the correct destination MAC address for the frame leaving Host A should be the MAC address of R1’s interface on the same network as Host A, which is 
BB:BB:BB:BB:BB:BB
 if R1 is the gateway for Host A.
The previous response incorrectly identified the MAC address of R1. The correct MAC address for the gateway router’s interface, according to the exhibit, is indeed BB:BB:BB:BB:BB:BB. Host A will send the frame with this MAC address as the destination to reach its default gateway (R1), which will then route the packet towards Host B.

---

## Question 109

Which two statements are correct about MAC and IP addresses during data transmission if NAT is not involved? (Choose two.)

- [ ] Destination MAC addresses will never change in a frame that goes across seven routers.
- [ ] A packet that has crossed four routers has changed the destination IP address four times.
- [ ] Every time a frame is encapsulated with a new destination MAC address, a new destination IP address is needed.
- [x] **Destination and source MAC addresses have local significance and change every time a frame goes from one LAN to another.**
- [x] **Destination IP addresses in a packet header remain constant along the entire path to a target host.**
- [ ] Destination and source MAC addresses have local significance and change every time a frame goes from one LAN to another. MAC addresses are used for local area network (LAN) segment delivery and are changed at each hop where the frame is forwarded by routers, as the router will replace the source MAC address with its own and the destination MAC address with that of the next hop.
- [ ] Destination IP addresses in a packet header remain constant along the entire path to a target host. When a packet is sent from a source to a destination, the source and destination IP addresses in the packet header remain the same from the source to the destination if NAT is not being used. Routers use these IP addresses to make forwarding decisions and do not alter them when routing.
- [ ] Destination MAC addresses will never change in a frame that goes across seven routers. This statement is incorrect because, as mentioned, the destination MAC address changes at each hop.
- [ ] A packet that has crossed four routers has changed the destination IP address four times. This statement is false because, without NAT, the destination IP address remains the same across all routers.
- [ ] Every time a frame is encapsulated with a new destination MAC address, a new destination IP address is needed. This is not correct; the destination IP address does not change even though the MAC address changes as the frame moves through different segments of the network.

> [!NOTE]
> **Explanation:** Explanation & Hint:
When considering data transmission without NAT (Network Address Translation), the correct statements about MAC and IP addresses are:
Destination and source MAC addresses have local significance and change every time a frame goes from one LAN to another.
 MAC addresses are used for local area network (LAN) segment delivery and are changed at each hop where the frame is forwarded by routers, as the router will replace the source MAC address with its own and the destination MAC address with that of the next hop.
Destination IP addresses in a packet header remain constant along the entire path to a target host.
 When a packet is sent from a source to a destination, the source and destination IP addresses in the packet header remain the same from the source to the destination if NAT is not being used. Routers use these IP addresses to make forwarding decisions and do not alter them when routing.
The other statements are incorrect:
Destination MAC addresses will never change in a frame that goes across seven routers.
 This statement is incorrect because, as mentioned, the destination MAC address changes at each hop.
A packet that has crossed four routers has changed the destination IP address four times.
 This statement is false because, without NAT, the destination IP address remains the same across all routers.
Every time a frame is encapsulated with a new destination MAC address, a new destination IP address is needed.
 This is not correct; the destination IP address does not change even though the MAC address changes as the frame moves through different segments of the network.

---

## Question 110

Refer to the exhibit. What three facts can be determined from the viewable output of the 
show ip interface brief 
command? (Choose three.)

![exhibit](https://infraexam.com/wp-content/uploads/2020/10/CCNA1-v7-ITNv7-Final-Exam-Answers-15.png)

- [ ] Two devices are attached to the switch.
- [x] **The default SVI has been configured.**
- [x] **The switch can be remotely managed.**
- [ ] Two physical interfaces have been configured.
- [ ] Passwords have been configured on the switch.
- [x] **One device is attached to a physical interface.**
- [ ] The switch can be remotely managed : This is indicated by the IP address assigned to the VLAN1 interface, which is up and running. The IP address 192.168.11.3 allows remote management if routing and access control lists permit it.
- [ ] One device is attached to a physical interface : FastEthernet0/1 has a status of “up” and a protocol of “up”, which typically means that a device is connected and operational on that interface.
- [ ] The default SVI has been configured : The VLAN1 interface is configured with an IP address, suggesting that the default SVI has been set up.

> [!NOTE]
> **Explanation:** Explanation & Hint:
Based on the output provided from the 
show ip interface brief
 command, three facts can be determined:
The switch can be remotely managed
: This is indicated by the IP address assigned to the VLAN1 interface, which is up and running. The IP address 192.168.11.3 allows remote management if routing and access control lists permit it.
One device is attached to a physical interface
: FastEthernet0/1 has a status of “up” and a protocol of “up”, which typically means that a device is connected and operational on that interface.
The default SVI has been configured
: The VLAN1 interface is configured with an IP address, suggesting that the default SVI has been set up.
The output does not provide enough information to conclude that two devices are attached to the switch, that passwords have been configured on the switch, or that two physical interfaces have been configured (beyond the one that is up). The “unassigned” status for the IP address field on the physical interfaces also indicates that no IP addresses have been assigned to these interfaces, which is typical for layer 2 switch ports.

---

## Question 111

A user is executing a 
tracert 
to a remote device. At what point would a router, which is in the path to the destination device, stop forwarding the packet?

- [ ] when the values of both the Echo Request and Echo Reply messages reach zero
- [x] **when the value in the TTL field reaches zero**
- [ ] when the router receives an ICMP Time Exceeded message
- [ ] when the host responds with an ICMP Echo Reply message
- [ ] when the RTT value reaches zero

> [!NOTE]
> **Explanation:** Explanation:
When a router receives a traceroute packet, the value in the TTL field is decremented by 1. When the value in the field reaches zero, the receiving router will not forward the packet, and will send an ICMP Time Exceeded message back to the source.

---

## Question 112

What are two functions that are provided by the network layer? (Choose two.)

- [ ] carrying data between processes that are running on source and destination hosts
- [x] **directing data packets to destination hosts on other networks**
- [ ] providing dedicated end-to-end connections
- [ ] placing data on the network medium
- [x] **providing end devices with a unique network identifier**
- [ ] Directing data packets to destination hosts on other networks: The network layer is responsible for determining the best path for data to travel from the source to the destination across multiple networks, which is known as routing.
- [ ] Providing end devices with a unique network identifier: The network layer assigns IP addresses to end devices. These IP addresses are used to uniquely identify each device on a network and can be used to determine the path that data should take through the network to reach its destination.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The two functions that are provided by the network layer are:
Directing data packets to destination hosts on other networks:
 The network layer is responsible for determining the best path for data to travel from the source to the destination across multiple networks, which is known as routing.
Providing end devices with a unique network identifier:
 The network layer assigns IP addresses to end devices. These IP addresses are used to uniquely identify each device on a network and can be used to determine the path that data should take through the network to reach its destination.

---

## Question 113

A network administrator is adding a new LAN to a branch office. The new LAN must support 61 connected devices. What is the smallest network mask that the network administrator can use for the new network?

- [ ] 255.255.255.224
- [ ] 255.255.255.240
- [x] **255.255.255.192**
- [ ] 255.255.255.128
- [ ] 255.255.255.224 – This is a /27 subnet mask, which allows for 32 addresses in total, but with 2 addresses used for network and broadcast, you get 30 usable addresses.
- [ ] 255.255.255.240 – This is a /28 subnet mask, which allows for 16 addresses in total, with 14 usable addresses.
- [ ] 255.255.255.192 – This is a /26 subnet mask, which allows for 64 addresses in total, but with 2 addresses used for network and broadcast, you get 62 usable addresses.
- [ ] 255.255.255.128 – This is a /25 subnet mask, which allows for 128 addresses in total, with 126 usable addresses.

> [!NOTE]
> **Explanation:** Explanation & Hint:
To support 61 connected devices, you need a subnet that can provide at least 61 usable IP addresses (remembering that in any given subnet, two IP addresses are always used up – one for the network address and one for the broadcast address).
Here’s how the subnet masks break down in terms of number of available hosts:
255.255.255.224
 – This is a /27 subnet mask, which allows for 32 addresses in total, but with 2 addresses used for network and broadcast, you get 30 usable addresses.
255.255.255.240
 – This is a /28 subnet mask, which allows for 16 addresses in total, with 14 usable addresses.
255.255.255.192
 – This is a /26 subnet mask, which allows for 64 addresses in total, but with 2 addresses used for network and broadcast, you get 62 usable addresses.
255.255.255.128
 – This is a /25 subnet mask, which allows for 128 addresses in total, with 126 usable addresses.
The smallest subnet mask that will support 61 connected devices, allowing for the network and broadcast addresses, is 
255.255.255.192
 or a /26 subnet mask. This will allow for 62 usable IP addresses, just enough for the 61 devices needed.

---

## Question 114

What characteristic describes spyware?

- [ ] a network device that filters access and traffic coming into a network
- [x] **software that is installed on a user device and collects information about the user**
- [ ] an attack that slows or crashes a device or network service
- [ ] the use of stolen credentials to access private data

> [!NOTE]
> **Explanation:** Explanation & Hint:
Spyware is best described as:
Software that is installed on a user device and collects information about the user.
Spyware is typically covertly installed on a user’s device without their knowledge and gathers information on the individual’s internet activity, personal information, or other data, often for advertising purposes or malicious intent.

---

## Question 115

What are three commonly followed standards for constructing and installing cabling? (Choose three.)

- [x] **pinouts**
- [ ] tensile strength of plastic insulator
- [x] **cable lengths**
- [x] **connector types**
- [ ] cost per meter (foot)
- [ ] connector color
- [ ] Pinouts : This refers to the arrangement of conductors in the cable to connect with the corresponding pins or contacts in connectors. Correct pinouts are crucial for the network to function properly, as they ensure that signals are properly transmitted and received.
- [ ] Cable lengths : Standards often specify the maximum length for different types of cables to ensure signal integrity. For example, the Ethernet standard for Cat5e/Cat6 cabling specifies a maximum length of 100 meters (328 feet) to prevent signal degradation.
- [ ] Connector types : The use of standardized connectors ensures interoperability and proper physical connection. Common types include RJ-45 for Ethernet cables and LC/SC connectors for fiber optics.

> [!NOTE]
> **Explanation:** Explanation & Hint:
In the construction and installation of cabling, the following three are commonly followed standards:
Pinouts
: This refers to the arrangement of conductors in the cable to connect with the corresponding pins or contacts in connectors. Correct pinouts are crucial for the network to function properly, as they ensure that signals are properly transmitted and received.
Cable lengths
: Standards often specify the maximum length for different types of cables to ensure signal integrity. For example, the Ethernet standard for Cat5e/Cat6 cabling specifies a maximum length of 100 meters (328 feet) to prevent signal degradation.
Connector types
: The use of standardized connectors ensures interoperability and proper physical connection. Common types include RJ-45 for Ethernet cables and LC/SC connectors for fiber optics.
Other factors like tensile strength of the plastic insulator, cost per meter, and connector color, while they may be considered during the selection and installation process, are not standardized attributes in the same sense as pinouts, cable lengths, and connector types.

---

## Question 116

Which connector is used with twisted-pair cabling in an Ethernet LAN?

![exhibit](https://infraexam.com/wp-content/uploads/2021/02/i192179v1n1_RJ-45.png.webp)

![exhibit](https://infraexam.com/wp-content/uploads/2021/02/i192179v1n1_RJ-11-2.png.webp)

![exhibit](https://infraexam.com/wp-content/uploads/2021/02/i192179v1n1_BNC.png.webp)

![exhibit](https://infraexam.com/wp-content/uploads/2021/02/i192179v1n1_LC-connector.png.webp)

- [x] **Answers RJ 45**

---

## Question 117

What attribute of a NIC would place it at the data link layer of the OSI model?

- [ ] attached Ethernet cable
- [ ] TCP/IP protocol stack
- [ ] IP address
- [ ] RJ-45 port
- [x] **MAC address**

> [!NOTE]
> **Explanation:** Explanation & Hint:
The attribute of a NIC (Network Interface Card) that would place it at the Data Link layer of the OSI model is the 
MAC address
. The Data Link layer is responsible for node-to-node communication and typically includes physical addressing, which is the MAC address in the case of Ethernet networks. The MAC address is unique to each NIC and allows for hardware-level addressing at Layer 2 of the OSI model.

---

## Question 118

A network administrator needs to keep the user ID, password, and session contents private when establishing remote CLI connectivity with a switch to manage it. Which access method should be chosen?

- [ ] AUX
- [ ] Telnet
- [x] **SSH**
- [ ] Console
- [ ] AUX (Auxiliary port) : This is used for remote management similar to the console port but usually over a modem. It does not inherently provide encryption for security.
- [ ] Telnet : This is an older protocol that provides no encryption, making it insecure for transmitting sensitive information because the session contents, including user ID and password, can be intercepted.
- [ ] Console : The console port is for direct physical connection to the device and does not provide encryption because it’s designed for a direct serial connection rather than remote access.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The network administrator should choose 
SSH (Secure Shell)
 to keep the user ID, password, and session contents private when establishing remote CLI connectivity with a switch. SSH provides a secure channel over an unsecured network by using encryption, which ensures confidentiality and integrity of data.
The other methods listed have the following characteristics:
AUX (Auxiliary port)
: This is used for remote management similar to the console port but usually over a modem. It does not inherently provide encryption for security.
Telnet
: This is an older protocol that provides no encryption, making it insecure for transmitting sensitive information because the session contents, including user ID and password, can be intercepted.
Console
: The console port is for direct physical connection to the device and does not provide encryption because it’s designed for a direct serial connection rather than remote access.

---

## Question 119

A user sends an HTTP request to a web server on a remote network. During encapsulation for this request, what information is added to the address field of a frame to indicate the destination?

- [ ] the network domain of the destination host
- [x] **the MAC address of the default gateway**
- [ ] the IP address of the default gateway
- [ ] the MAC address of the destination host

> [!NOTE]
> **Explanation:** Explanation & Hint:
During encapsulation for an HTTP request to a web server on a remote network, the information that is added to the address field of a frame to indicate the destination would be 
the MAC address of the default gateway
.
Here’s why: The destination web server is on a remote network, so the user’s computer cannot directly address the frame to the web server’s MAC address. Instead, it sends the frame to the MAC address of its configured default gateway (typically the router on the local network), which then takes responsibility for routing the packet towards the destination server across the internet.

---

## Question 120

Which two commands can be used on a Windows host to display the routing table? (Choose two.)

- [x] **route print**
- [ ] show ip route
- [x] **netstat -r**
- [ ] netstat -s
- [ ] tracert

> [!NOTE]
> **Explanation:** Explanation & Hint:
On a Windows host, the route print or netstat -r commands can be used to display the host routing table. Both commands generate the same output. On a router, the show ip route command is used to display the routing table. The netstat –s command is used to display per-protocol statistics. The tracert command is used to display the path that a packet travels to its destination.

---

## Question 121

Match each description with an appropriate IP address.

![exhibit](https://infraexam.com/wp-content/uploads/2025/10/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-006-scaled.png)

![exhibit](https://infraexam.com/wp-content/uploads/2025/10/CCNA1-v7-–-ITNv7-–-Final-Exam-Answers-006-1024x360.png)

![exhibit](https://infraexam.com/wp-content/uploads/2025/10/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-006-1024x360.png)

- [x] **127.0.0.1 : This is a loopback address. It’s used by a host to send traffic to itself for testing and troubleshooting.**
- [x] **198.133.219.2 : This would be considered a public address. It’s a routable IP address on the internet, not within the private IP address ranges.**
- [x] **169.254.1.5 : This is a link-local address. In IPv4, addresses in the 169.254.0.0/16 range are used for automatic IP addressing when no external DHCP server is available (APIPA).**
- [x] **240.2.6.255 : This address falls within the range of 240.0.0.0 to 255.255.255.254, which is reserved for future use, often considered as part of the experimental address space, although it was originally designated for Class E network purposes.**
- [x] **172.18.45.9 : This IP address is within the range of 172.16.0.0 to 172.31.255.255, which is designated for private networks and is not a public IP address. However, without a clear label for a private address in the image you provided, and since the address is not specifically linked to any of the other listed descriptions, it’s less clear which description it should be matched to. In common practice, an IP address in this range would be considered a private address.**

> [!NOTE]
> **Explanation:** Explanation & Hint:
127.0.0.1
: This is a loopback address. It’s used by a host to send traffic to itself for testing and troubleshooting.
198.133.219.2
: This would be considered a public address. It’s a routable IP address on the internet, not within the private IP address ranges.
169.254.1.5
: This is a link-local address. In IPv4, addresses in the 169.254.0.0/16 range are used for automatic IP addressing when no external DHCP server is available (APIPA).
240.2.6.255
: This address falls within the range of 240.0.0.0 to 255.255.255.254, which is reserved for future use, often considered as part of the experimental address space, although it was originally designated for Class E network purposes.
172.18.45.9
: This IP address is within the range of 172.16.0.0 to 172.31.255.255, which is designated for private networks and is not a public IP address. However, without a clear label for a private address in the image you provided, and since the address is not specifically linked to any of the other listed descriptions, it’s less clear which description it should be matched to. In common practice, an IP address in this range would be considered a private address.
Please note that this is based on common networking knowledge and the typical use of these IP ranges; the matching might diccer if the context provided in the exercise specifies alternative interpretations.

---

## Question 122

Refer to the exhibit. Match the network with the correct IP address and prefix that will satisfy the usable host addressing requirements for each network. (Not all options are used.)

![exhibit](https://infraexam.com/wp-content/uploads/2021/02/CCNA1-v7-v7.02-ITNv7-Final-Exam-Answers-01.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-014.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-–-ITNv7-–-Final-Exam-Answers-014-1024x390.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-014-1024x390.png)

> [!NOTE]
> **Explanation:** Explanation:
Network A needs to use 192.168.0.0 /25 which yields 128 host addresses.

Network B needs to use 192.168.0.128 /26 which yields 64 host addresses.

Network C needs to use 192.168.0.192 /27 which yields 32 host addresses.

Network D needs to use 192.168.0.224 /30 which yields 4 host addresses.

---

## Question 123

A technician with a PC is using multiple applications while connected to the Internet. How is the PC able to keep track of the data flow between multiple application sessions and have each application receive the correct packet flows?

- [x] **The data flow is being tracked based on the source port number that is used by each application.**
- [ ] The data flow is being tracked based on the destination IP address that is used by the PC of the technician.
- [ ] The data flow is being tracked based on the source IP address that is used by the PC of the technician.
- [ ] The data flow is being tracked based on the destination MAC address of the technician PC.

> [!NOTE]
> **Explanation:** Explanation:
The source port number of an application is randomly generated and used to individually keep track of each session connecting out to the Internet. Each application will use a unique source port number to provide simultaneous communication from multiple applications through the Internet.

---

## Question 124

A client packet is received by a server. The packet has a destination port number of 80. What service is the client requesting?

- [ ] DNS
- [x] **HTTP**
- [ ] DHCP
- [ ] SMTP

> [!NOTE]
> **Explanation:** Explanation & Hint:
The client is requesting the HTTP (Hypertext Transfer Protocol) service. Port 80 is the standard port for HTTP, which is used for transmitting web pages on the internet.

---

## Question 125

A user is attempting to access http://www.cisco.com/ without success. Which two configuration values must be set on the host to allow this access? (Choose two.)

- [ ] source port number
- [ ] HTTP server
- [ ] source MAC address
- [x] **DNS server**
- [x] **default gateway**
- [ ] DNS server : The Domain Name System (DNS) server is necessary for resolving the domain name “www.cisco.com” into its corresponding IP address. Without this, the host would not be able to translate the URL into an address it can connect to.
- [ ] Default gateway : The default gateway is used to send packets from the local network to devices on other networks. If the host doesn’t have a default gateway configured, it wouldn’t be able to route packets to the destination outside of its local network.

> [!NOTE]
> **Explanation:** Explanation & Hint:
To access a website like “http://www.cisco.com/”, the host requires the following configuration values to be set:
DNS server
: The Domain Name System (DNS) server is necessary for resolving the domain name “www.cisco.com” into its corresponding IP address. Without this, the host would not be able to translate the URL into an address it can connect to.
Default gateway
: The default gateway is used to send packets from the local network to devices on other networks. If the host doesn’t have a default gateway configured, it wouldn’t be able to route packets to the destination outside of its local network.
The source port number is determined dynamically by the host for the duration of the session and is not something that is typically manually configured for web access. The HTTP server is a remote server that hosts the website content and is not a configuration value on the host. The source MAC address is also not a configuration that needs to be manually set for web access; it’s inherent to the network interface of the host device.

---

## Question 126

What method is used to manage contention-based access on a wireless network?

- [ ] CSMA/CD
- [ ] priority ordering
- [x] **CSMA/CA**
- [ ] token passing

> [!NOTE]
> **Explanation:** Explanation & Hint:
The method used to manage contention-based access on a wireless network is 
CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)
. Unlike Ethernet networks that use CSMA/CD (Carrier Sense Multiple Access with Collision Detection), wireless networks cannot reliably detect collisions due to the “hidden node problem.” Therefore, they use a method to avoid collisions before they happen, which is what CSMA/CA is designed to do.

---

## Question 127

What are two ICMPv6 messages that are not present in ICMP for IPv4? (Choose two.)

- [x] **Router Advertisement**
- [ ] Destination Unreachable
- [x] **Neighbor Solicitation**
- [ ] Route Redirection
- [ ] Host Confirmation
- [ ] Time Exceeded
- [ ] Router Advertisement : This is part of the Neighbor Discovery Protocol (NDP) in IPv6. Router Advertisements are sent by routers to advertise their presence along with various link and Internet parameters.
- [ ] Neighbor Solicitation : This is also part of NDP in IPv6. Neighbor Solicitations are used by nodes to determine the link-layer address of a neighbor, or to verify that a neighbor is still reachable via a cached link-layer address.

> [!NOTE]
> **Explanation:** Explanation & Hint:
ICMPv6 (Internet Control Message Protocol for IPv6) includes several messages that are not present in ICMP for IPv4 due to the differences between the IPv6 and IPv4 protocols. Among the listed options, the two ICMPv6 messages that are not present in ICMP for IPv4 are:
Router Advertisement
: This is part of the Neighbor Discovery Protocol (NDP) in IPv6. Router Advertisements are sent by routers to advertise their presence along with various link and Internet parameters.
Neighbor Solicitation
: This is also part of NDP in IPv6. Neighbor Solicitations are used by nodes to determine the link-layer address of a neighbor, or to verify that a neighbor is still reachable via a cached link-layer address.
The other options, such as “Destination Unreachable” and “Time Exceeded,” exist in both ICMPv6 and ICMP for IPv4. “Route Redirection” is a message type in ICMP for IPv4 but not used in ICMPv6. “Host Confirmation” is not a standard message type in either ICMPv6 or ICMP for IPv4.

---

## Question 128

An organization is assigned an IPv6 address block of 2001:db8:0:ca00::/56. How many subnets can be created without using bits in the interface ID space?

- [ ] 4096
- [x] **256**
- [ ] 512
- [ ] 1024

> [!NOTE]
> **Explanation:** Explanation & Hint:
The organization has been assigned a /56 IPv6 address block. IPv6 addresses are 128 bits in length. When subnetting an IPv6 address, you generally do not touch the last 64 bits as they are typically reserved for the interface ID (the actual host address).
Starting with a /56 block, you have:
128 bits (total IPv6 address length) – 56 bits (assigned block) = 72 bits remaining for subnetting and interface ID.
Since you do not use the last 64 bits for subnetting (because that’s the interface ID), you have:
72 bits – 64 bits (reserved for interface ID) = 8 bits available for subnetting.
With 8 bits available for subnetting, you can create 2^8 subnets, because each bit can be either a 0 or a 1, and there are two possibilities for each bit.
So, 2^8 = 256.
Therefore, the organization can create 
256 subnets
 without using bits in the interface ID space.

---

## Question 129

What subnet mask is needed if an IPv4 network has 40 devices that need IP addresses and address space is not to be wasted?

- [ ] 255.255.255.224
- [ ] 255.255.255.128
- [ ] 255.255.255.240
- [x] **255.255.255.192**
- [ ] 255.255.255.0
- [ ] 255.255.255.224 – This is a /27 subnet mask, which provides 32 addresses (30 usable for hosts).
- [ ] 255.255.255.240 – This is a /28 subnet mask, which provides 16 addresses (14 usable for hosts).
- [ ] 255.255.255.192 – This is a /26 subnet mask, which provides 64 addresses (62 usable for hosts).
- [ ] 255.255.255.128 – This is a /25 subnet mask, which provides 128 addresses (126 usable for hosts).
- [ ] 255.255.255.0 – This is a /24 subnet mask, which provides 256 addresses (254 usable for hosts).

> [!NOTE]
> **Explanation:** Explanation & Hint:
To determine the subnet mask needed for a network with 40 devices, you need to calculate the subnet size that can accommodate at least 40 hosts. Remember that in a subnet, two IP addresses are reserved: one for the network address and one for the broadcast address. So, you need a subnet with at least 42 addresses.
Here’s how the subnet masks correspond to the number of addresses they provide:
255.255.255.224
 – This is a /27 subnet mask, which provides 32 addresses (30 usable for hosts).
255.255.255.240
 – This is a /28 subnet mask, which provides 16 addresses (14 usable for hosts).
255.255.255.192
 – This is a /26 subnet mask, which provides 64 addresses (62 usable for hosts).
255.255.255.128
 – This is a /25 subnet mask, which provides 128 addresses (126 usable for hosts).
255.255.255.0
 – This is a /24 subnet mask, which provides 256 addresses (254 usable for hosts).
The smallest subnet mask that can accommodate at least 42 addresses is 
255.255.255.192
, which is a /26 subnet mask. This will allow for 62 usable IP addresses, which is more than enough for 40 devices without wasting too much address space.

---

## Question 130

A host is trying to send a packet to a device on a remote LAN segment, but there are currently no mappings in the ARP cache. How will the device obtain a destination MAC address?

- [ ] It will send an ARP request for the MAC address of the destination device.
- [ ] It will send the frame with a broadcast MAC address.
- [ ] It will send the frame and use the device MAC address as the destination.
- [x] **It will send an ARP request for the MAC address of the default gateway.**
- [ ] It will send an ARP request to the DNS server for the destination MAC address.

> [!NOTE]
> **Explanation:** Explanation & Hint:
If a host is trying to send a packet to a device on a remote LAN segment and there are no mappings in the ARP cache, the device will:
It will send an ARP request for the MAC address of the default gateway.
In a typical network, a device knows the IP address of the default gateway from its network configuration. When it needs to communicate with a device on a different network, it will use ARP to resolve the MAC address of the default gateway, because the packet needs to be sent there first to be routed to the remote network. The default gateway will then forward the packet to the destination on the remote LAN segment using its own ARP process and routing table.

---

## Question 131

What characteristic describes a virus?

- [ ] the use of stolen credentials to access private data
- [ ] a network device that filters access and traffic coming into a network
- [x] **malicious software or code running on an end device**
- [ ] an attack that slows or crashes a device or network service

> [!NOTE]
> **Explanation:** Explanation & Hint:
A virus is best described as:
Malicious software or code running on an end device.
A virus is a type of malware that, when executed, replicates by modifying other computer programs and inserting its own code. It typically requires some form of user interaction, such as opening an infected email attachment or downloading and running a malicious file, to be activated. Once active, a virus can cause harm by stealing data, logging keystrokes, or corrupting files.

---

## Question 132

A disgruntled employee is using some free wireless networking tools to determine information about the enterprise wireless networks. This person is planning on using this information to hack the wireless network. What type of attack is this?

- [ ] access
- [ ] DoS
- [ ] Trojan horse
- [x] **reconnaissance**

> [!NOTE]
> **Explanation:** Explanation & Hint:
The type of attack being described is 
reconnaissance
. This is a type of attack where an attacker gathers information about a network with the intent to circumvent its security controls. It is often considered a preliminary step that can lead to a more serious attack once the attacker has gained sufficient information about network vulnerabilities.

---

## Question 133

What service is provided by POP3?

- [ ] Uses encryption to provide secure remote access to network devices and servers.
- [x] **Retrieves email from the server by downloading the email to the local mail application of the client.**
- [ ] Allows remote access to network devices and servers.
- [ ] An application that allows real-time chatting among remote users.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The service provided by POP3 (Post office Protocol version 3) is:
Retrieves email from the server by downloading the email to the local mail application of the client.
POP3 is an email retrieval protocol that is used to download emails from a remote server to a local client. This allows users to access their emails while offline, as they are stored on their device after download.

---

## Question 134

What command can be used on a Windows PC to see the IP configuration of that computer?

- [x] **ipconfig**
- [ ] show interfaces
- [ ] ping
- [ ] show ip interface brief

> [!NOTE]
> **Explanation:** Explanation & Hint:
On a Windows PC, the command used to see the IP configuration is 
ipconfig
. This command provides details about the network configuration, including IP address, subnet mask, default gateway, and DNS server information.

---

## Question 135

Refer to the exhibit. Which two network addresses can be assigned to the network containing 10 hosts? Your answers should waste the fewest addresses, not reuse addresses that are already assigned, and stay within the 10.18.10.0/24 range of addresses. (Choose two.)

![exhibit](https://infraexam.com/wp-content/uploads/2021/02/CCNA1-v7-v7.02-ITNv7-Final-Exam-Answers-02.png)

- [ ] 10.18.10.224/27
- [x] **10.18.10.208/28**
- [ ] 10.18.10.200/27
- [ ] 10.18.10.200/28
- [x] **10.18.10.224/28**

> [!NOTE]
> **Explanation:** Explanation & Hint:
Addresses 10.18.10.0 through 10.18.10.63 are taken for the leftmost network. Addresses 192 through 199 are used by the center network. Because 4 host bits are needed to accommodate 10 hosts, a /28 mask is needed. 10.18.10.200/28 is not a valid network number. Two subnets that can be used are 10.18.10.208/28 and 10.18.10.224/28.

---

## Question 136

A client packet is received by a server. The packet has a destination port number of 110. What service is the client requesting?

- [ ] DNS
- [ ] DHCP
- [x] **POP3**
- [ ] SMTP

> [!NOTE]
> **Explanation:** Explanation & Hint:
The client is requesting the POP3 (Post office Protocol version 3) service. Port 110 is the standard port number for the POP3 protocol, which is used for retrieving emails from a mail server.

---

## Question 137

Which layer of the TCP/IP model provides a route to forward messages through an internetwork?

- [ ] transport
- [ ] application
- [ ] network access
- [x] **internet**

> [!NOTE]
> **Explanation:** Explanation & Hint:
The layer of the TCP/IP model that provides a route to forward messages through an internetwork is the 
Internet
 layer. This layer is equivalent to the Network layer in the OSI model and is responsible for routing the packets of data from their source to their destination by finding the best path through the network. It includes the Internet Protocol (IP), which is used for addressing and routing the packets.

---

## Question 138

What characteristic describes identity theft?

- [ ] a tunneling protocol that provides remote users with secure access into the network of an organization
- [x] **the use of stolen credentials to access private data**
- [ ] software that identifies fast-spreading threats
- [ ] software on a router that filters traffic based on IP addresses or applications

> [!NOTE]
> **Explanation:** Explanation & Hint:
Identity theft is characterized by 
the use of stolen credentials to access private data
. It involves the unauthorized acquisition and use of someone else’s personal information, typically for financial gain. This can include sensitive data such as social security numbers, credit card information, or other financial account details.

---

## Question 139

What two security solutions are most likely to be used only in a corporate environment? (Choose two.)

- [x] **intrusion prevention systems**
- [ ] antivirus software
- [ ] antispyware
- [ ] strong passwords
- [x] **virtual private networks**
- [ ] Intrusion Prevention Systems (IPS): These are security appliances that monitor network and/or system activities for malicious activity. The main functions of intrusion prevention systems are to identify malicious activity, log information about this activity, attempt to block/stop it, and report it.
- [ ] Virtual Private Networks (VPNs): While VPNs can be used by individuals, in a corporate environment, they are often employed to enable secure remote access to the company’s internal network. This allows employees to securely connect to the corporate network from remote locations.

> [!NOTE]
> **Explanation:** Explanation & Hint:
In a corporate environment, particularly where the security needs are more complex and the protection of sensitive data is paramount, the following two security solutions are most likely to be used:
Intrusion Prevention Systems (IPS):
 These are security appliances that monitor network and/or system activities for malicious activity. The main functions of intrusion prevention systems are to identify malicious activity, log information about this activity, attempt to block/stop it, and report it.
Virtual Private Networks (VPNs):
 While VPNs can be used by individuals, in a corporate environment, they are often employed to enable secure remote access to the company’s internal network. This allows employees to securely connect to the corporate network from remote locations.
Antivirus software and antispyware are also used in corporate environments but are just as likely to be found on personal computers due to the widespread need for protection against malware and spyware. Strong passwords are a fundamental security measure expected to be used in both personal and corporate environments.

---

## Question 140

What service is provided by DNS?

- [ ] Allows for data transfers between a client and a file server.
- [ ] Uses encryption to secure the exchange of text, graphic images, sound, and video on the web.
- [ ] A basic set of rules for exchanging text, graphic images, sound, video, and other multimedia files on the web.
- [x] **Resolves domain names, such as cisco.com, into IP addresses.**

> [!NOTE]
> **Explanation:** Explanation & Hint:
The service provided by DNS (Domain Name System) is 
resolves domain names, such as cisco.com, into IP addresses
. DNS is essentially the phonebook of the internet, translating human-friendly domain names into machine-friendly IP addresses so that browsers can load internet resources.

---

## Question 141

Which wireless technology has low-power and low-data rate requirements making it popular in IoT environments?

- [ ] Bluetooth
- [x] **Zigbee**
- [ ] WiMAX
- [ ] Wi-Fi

> [!NOTE]
> **Explanation:** Explanation & Hint:
Zigbee is a specification used for low-data rate, low-power communications. It is intended for applications that require short-range, low data-rates and long battery life. Zigbee is typically used for industrial and Internet of Things (IoT) environments such as wireless light switches and medical device data collection.

---

## Question 142

What characteristic describes a VPN?

- [ ] software on a router that filters traffic based on IP addresses or applications
- [x] **a tunneling protocol that provides remote users with secure access into the network of an organization**
- [ ] a network device that filters access and traffic coming into a network
- [ ] software that identifies fast-spreading threats

> [!NOTE]
> **Explanation:** Explanation & Hint:
A VPN (Virtual Private Network) is best described by 
a tunneling protocol that provides remote users with secure access into the network of an organization
. A VPN allows users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network. This is done by establishing a virtual point-to-point connection through the use of dedicated circuits or with tunneling protocols over existing networks. It provides secure access because the connection is encrypted, which keeps the data transmitted over the VPN private.

---

## Question 143

A network administrator is adding a new LAN to a branch office. The new LAN must support 4 connected devices. What is the smallest network mask that the network administrator can use for the new network?

- [ ] 255.255.255.192
- [x] **255.255.255.248**
- [ ] 255.255.255.240
- [ ] 255.255.255.224
- [ ] 255.255.255.192 – This is a /26 subnet mask, which allows for 64 addresses in total, but with 2 addresses used for network and broadcast, you get 62 usable addresses.
- [ ] 255.255.255.224 – This is a /27 subnet mask, which allows for 32 addresses in total, with 30 usable addresses.
- [ ] 255.255.255.240 – This is a /28 subnet mask, which allows for 16 addresses in total, with 14 usable addresses.
- [ ] 255.255.255.248 – This is a /29 subnet mask, which allows for 8 addresses in total, with 6 usable addresses.

> [!NOTE]
> **Explanation:** Explanation & Hint:
To support 4 connected devices, you need a subnet that can provide at least 4 usable IP addresses for hosts. Remember that in any given subnet, two IP addresses are always used up – one for the network address and one for the broadcast address, so you need a subnet that provides at least 6 addresses in total.
Here’s how the subnet masks break down in terms of number of available hosts:
255.255.255.192
 – This is a /26 subnet mask, which allows for 64 addresses in total, but with 2 addresses used for network and broadcast, you get 62 usable addresses.
255.255.255.224
 – This is a /27 subnet mask, which allows for 32 addresses in total, with 30 usable addresses.
255.255.255.240
 – This is a /28 subnet mask, which allows for 16 addresses in total, with 14 usable addresses.
255.255.255.248
 – This is a /29 subnet mask, which allows for 8 addresses in total, with 6 usable addresses.
The smallest subnet mask that will support 4 connected devices (requiring 6 addresses in total) is 
255.255.255.248
 or a /29 subnet mask.

---

## Question 144

During the process of forwarding traffic, what will the router do immediately after matching the destination IP address to a network on a directly connected routing table entry?

- [x] **switch the packet to the directly connected interface**
- [ ] discard the traffic after consulting the route table
- [ ] look up the next-hop address for the packet
- [ ] analyze the destination IP address
- [ ] Receive the packet and look up the routing table to find the best match for the destination IP address.
- [ ] If the destination network is directly connected, it will then encapsulate the packet into the appropriate frame for the outgoing interface.
- [ ] Finally, it will switch the packet to that interface for delivery to the destination.

> [!NOTE]
> **Explanation:** Explanation & Hint:
Immediately after matching the destination IP address to a network on a directly connected routing table entry, the router will 
switch the packet to the directly connected interface
. This means that the router will forward the packet out of the interface that is connected to the destination network.
Here’s a simplified sequence of steps a router typically follows when forwarding traffic:
Receive the packet and look up the routing table to find the best match for the destination IP address.
If the destination network is directly connected, it will then encapsulate the packet into the appropriate frame for the outgoing interface.
Finally, it will switch the packet to that interface for delivery to the destination.
There is no need for the router to look up a next-hop address because the destination is directly connected, meaning the router is directly on the same network as the destination IP address and can deliver the packet directly.

---

## Question 145

What service is provided by BOOTP?

- [ ] Allows for data transfers between a client and a file server.
- [x] **Legacy application that enables a diskless workstation to discover its own IP address and find a BOOTP server on the network.**
- [ ] Uses encryption to secure the exchange of text, graphic images, sound, and video on the web.
- [ ] A basic set of rules for exchanging text, graphic images, sound, video, and other multimedia files on the web.

> [!NOTE]
> **Explanation:** Explanation & Hint:
BOOTP (Bootstrap Protocol) provides the service described as a legacy application that enables a diskless workstation to discover its own IP address and find a BOOTP server on the network. BOOTP was originally designed to allow diskless workstations to boot from a network server. It is able to automatically assign an IP address to networked computers and communicate with a BOOTP server to obtain boot files necessary to start up the system.

---

## Question 146

A client packet is received by a server. The packet has a destination port number of 21. What service is the client requesting?

- [ ] DHCP
- [x] **FTP**
- [ ] TFTP
- [ ] DNS
- [ ] DHCP (Dynamic Host Configuration Protocol): This service usually uses port 67/68.
- [ ] TFTP (Trivial File Transfer Protocol): This service uses port 69.
- [ ] DNS (Domain Name System): This service uses port 53.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The client is requesting the FTP (File Transfer Protocol) service. In networking, port numbers are used to distinguish between different services that run over the network. Port 21 is the standard port number for FTP control messages. FTP is used for the transfer of computer files between a client and server on a computer network.
Here’s what the other port numbers are typically used for:
DHCP (Dynamic Host Configuration Protocol): This service usually uses port 67/68.
TFTP (Trivial File Transfer Protocol): This service uses port 69.
DNS (Domain Name System): This service uses port 53.

---

## Question 147

Match each description to its corresponding term. (Not all options are used.)

![exhibit](https://infraexam.com/wp-content/uploads/2025/10/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-002-scaled.png)

![exhibit](https://infraexam.com/wp-content/uploads/2025/10/CCNA1-v7-–-ITNv7-–-Final-Exam-Answers-002-1024x357.png)

![exhibit](https://infraexam.com/wp-content/uploads/2025/10/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-002-1024x357.png)

- [x] **Message encoding : The process of converting information from one format into another acceptable for transmission. Encoding is the preparation of message data for transport across a network, where data is transformed into a suitable format for transmission over the network.**
- [x] **Message encapsulation : The process of placing one message format inside another message format. Encapsulation refers to the wrapping of data with protocol information before network transmission, where each layer in the OSI model encapsulates the layer above it.**
- [x] **Message sizing typically would match with a description related to determining the size of messages for efficient network transmission, which might involve breaking up a long message into smaller pieces, also known as segmentation.**

> [!NOTE]
> **Explanation:** Explanation & Hint:
Message encoding
: The process of converting information from one format into another acceptable for transmission. Encoding is the preparation of message data for transport across a network, where data is transformed into a suitable format for transmission over the network.
Message encapsulation
: The process of placing one message format inside another message format. Encapsulation refers to the wrapping of data with protocol information before network transmission, where each layer in the OSI model encapsulates the layer above it.
Message sizing
 typically would match with a description related to determining the size of messages for efficient network transmission, which might involve breaking up a long message into smaller pieces, also known as segmentation.

---

## Question 148

A technician can ping the IP address of the web server of a remote company but cannot successfully ping the URL address of the same web server. Which software utility can the technician use to diagnose the problem?

- [ ] tracert
- [ ] netstat
- [x] **nslookup**
- [ ] ipconfig

> [!NOTE]
> **Explanation:** Explanation:
Traceroute (tracert) is a utility that generates a list of hops that were successfully reached along the path from source to destination.This list can provide important verification and troubleshooting information. The ipconfig utility is used to display the IP configuration settings on a Windows PC. The Netstat utility is used to identify which active TCP connections are open and running on a networked host. Nslookup is a utility that allows the user to manually query the name servers to resolve a given host name. This utility can also be used to troubleshoot name resolution issues and to verify the current status of the name servers.

---

## Question 149

What two ICMPv6 message types must be permitted through IPv6 access control lists to allow resolution of Layer 3 addresses to Layer 2 MAC addresses? (Choose two.)

- [ ] echo requests
- [ ] router solicitations
- [ ] router advertisements
- [x] **neighbor advertisements**
- [ ] echo replies
- [x] **neighbor solicitations**
- [ ] Neighbor Solicitations: These messages are used by a node to determine the link-layer address (MAC address) of a neighbor, or to verify that a neighbor is still reachable via a cached link-layer address. Neighbor Solicitations are essentially the IPv6 equivalent of ARP requests in IPv4.
- [ ] Neighbor Advertisements: These are the responses to Neighbor Solicitations. A node sends a Neighbor Advertisement to announce or confirm its link-layer address to other nodes. It is analogous to an ARP reply in IPv4.
- [ ] Echo Requests and Echo Replies: These are used by the Ping utility to test reachability in a network. While important for diagnostic purposes, they are not specifically used for address resolution.
- [ ] Router Solicitations and Router Advertisements: These are part of the NDP but are used for the discovery of routers and the acquisition of various configuration settings, not for address resolution between Layer 3 and Layer 2.

> [!NOTE]
> **Explanation:** Explanation & Hint:
In IPv6, to allow the resolution of Layer 3 addresses (IP addresses) to Layer 2 addresses (MAC addresses), certain ICMPv6 (Internet Control Message Protocol version 6) message types are essential. These messages are part of the Neighbor Discovery Protocol (NDP), which is used in IPv6 networks for various purposes, including address resolution. The two specific ICMPv6 message types that must be permitted through IPv6 access control lists (ACLs) for this purpose are:
Neighbor Solicitations:
 These messages are used by a node to determine the link-layer address (MAC address) of a neighbor, or to verify that a neighbor is still reachable via a cached link-layer address. Neighbor Solicitations are essentially the IPv6 equivalent of ARP requests in IPv4.
Neighbor Advertisements:
 These are the responses to Neighbor Solicitations. A node sends a Neighbor Advertisement to announce or confirm its link-layer address to other nodes. It is analogous to an ARP reply in IPv4.
The other ICMPv6 message types you mentioned serve different purposes:
Echo Requests and Echo Replies:
 These are used by the Ping utility to test reachability in a network. While important for diagnostic purposes, they are not specifically used for address resolution.
Router Solicitations and Router Advertisements:
 These are part of the NDP but are used for the discovery of routers and the acquisition of various configuration settings, not for address resolution between Layer 3 and Layer 2.

---

## Question 150

Refer to the exhibit. The switches have a default configuration. Host A needs to communicate with host D, but host A does not have the MAC address for the default gateway. Which network devices will receive the ARP request sent by host A?

![exhibit](https://infraexam.com/wp-content/uploads/2021/10/CCNA1-v7-v7.02-ITNv7-Final-Exam-Answers-03.png)

- [ ] only hosts A, B, C, and D
- [ ] only hosts A, B, and C
- [ ] only host D
- [x] **only hosts B, C, and router R1**
- [ ] only router R1
- [ ] only hosts B and C
- [ ] Hosts B and C, since they are presumably in the same local network (broadcast domain) as Host A.
- [ ] Router R1, because it is the default gateway for Host A’s network.

> [!NOTE]
> **Explanation:** Explanation & Hint:
In the scenario where Host A needs to communicate with Host D and does not have the MAC address for the default gateway, the behavior of the ARP (Address Resolution Protocol) request depends on the network setup, particularly how the hosts and the router (default gateway) are connected via switches.
Given that the switches have a default configuration and assuming that Host A, Host B, Host C, Host D, and router R1 are all connected to these switches in the same broadcast domain (e.g., a typical local area network setup without VLAN segmentation), the ARP request sent by Host A to determine the MAC address of the default gateway would be broadcast to all devices in the same broadcast domain.
However, since your question specifically mentions that Host A does not have the MAC address for the default gateway and needs to communicate with Host D, it implies that Host A is trying to reach Host D via the default gateway. This would usually happen in a scenario where Host D is on a different network, and Host A needs to go through the router to reach Host D.
In a typical setup, the ARP request by Host A for the default gateway’s MAC address would be broadcast within its own local network. In this case, the ARP request would reach:
Hosts B and C,
 since they are presumably in the same local network (broadcast domain) as Host A.
Router R1,
 because it is the default gateway for Host A’s network.
Host D would not receive the ARP request if it’s on a different network. ARP requests are not routed across different networks.
So, the network devices that will receive the ARP request sent by Host A are 
only hosts B, C, and router R1
.

---

## Question 151

Which two functions are performed at the LLC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.) (
Option A
)

- [ ] integrates Layer 2 flows between 10 Gigabit Ethernet over fiber and 1 Gigabit Ethernet over copper
- [x] **places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame**
- [ ] implements trailer with frame check sequence for error detection
- [ ] applies source and destination MAC addresses to Ethernet frame
- [x] **enables IPv4 and IPv6 to utilize the same physical medium**
- [ ] Places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame. The LLC sublayer adds control information in the Ethernet frame to identify the network layer protocol (like IPv4 or IPv6) being used. This is crucial for the receiving system to understand how to interpret the encapsulated data.
- [ ] Enables IPv4 and IPv6 to utilize the same physical medium. By providing multiplexing capabilities and specifying the network layer protocol in use, the LLC allows different network protocols (like IPv4 and IPv6) to share the same physical network medium, such as Ethernet.
- [ ] Integrates Layer 2 flows between 10 Gigabit Ethernet over fiber and 1 Gigabit Ethernet over copper: This is more related to the physical layer and its interfaces, rather than the LLC sublayer.
- [ ] Implements trailer with frame check sequence for error detection: This is generally a function of the MAC (Media Access Control) sublayer of the Data Link Layer, which deals with physical addressing and error detection.
- [ ] Applies source and destination MAC addresses to Ethernet frame: Again, this is a function of the MAC sublayer, not the LLC sublayer. The MAC sublayer handles the framing of data packets, including the addition of source and destination MAC addresses.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The LLC (Logical Link Control) sublayer of the OSI Data Link Layer performs several functions to facilitate Ethernet communication. Among the options you’ve listed, the two functions performed at the LLC sublayer are:
Places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame.
 The LLC sublayer adds control information in the Ethernet frame to identify the network layer protocol (like IPv4 or IPv6) being used. This is crucial for the receiving system to understand how to interpret the encapsulated data.
Enables IPv4 and IPv6 to utilize the same physical medium.
 By providing multiplexing capabilities and specifying the network layer protocol in use, the LLC allows different network protocols (like IPv4 and IPv6) to share the same physical network medium, such as Ethernet.
The other functions you mentioned are not specifically performed by the LLC sublayer:
Integrates Layer 2 flows between 10 Gigabit Ethernet over fiber and 1 Gigabit Ethernet over copper:
 This is more related to the physical layer and its interfaces, rather than the LLC sublayer.
Implements trailer with frame check sequence for error detection:
 This is generally a function of the MAC (Media Access Control) sublayer of the Data Link Layer, which deals with physical addressing and error detection.
Applies source and destination MAC addresses to Ethernet frame:
 Again, this is a function of the MAC sublayer, not the LLC sublayer. The MAC sublayer handles the framing of data packets, including the addition of source and destination MAC addresses.

---

## Question 152

Which two functions are performed at the LLC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.) (
Option B
)

- [ ] applies source and destination MAC addresses to Ethernet frame
- [x] **places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame**
- [ ] integrates Layer 2 flows between 10 Gigabit Ethernet over fiber and 1 Gigabit Ethernet over copper
- [ ] implements CSMA/CD over legacy shared half-duplex media
- [x] **adds Ethernet control information to network protocol data**
- [ ] Places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame : The LLC sublayer is responsible for identifying and encapsulating network layer protocols within the Ethernet frame. This involves adding information to the frame which indicates the type of payload it is carrying, whether it’s an IP packet, an ARP request, etc. This function is crucial for the proper delivery and interpretation of the data at the receiving end.
- [ ] Adds Ethernet control information to network protocol data : The LLC sublayer adds control information to the network protocol data, which is essential for managing and controlling the communication process. This includes frame synchronization, error checking, and flow control. This function ensures that the data transmitted over the Ethernet network is reliable and synchronized.

> [!NOTE]
> **Explanation:** Explanation & Hint:
In the context of the OSI model’s Data Link Layer, particularly the Logical Link Control (LLC) sublayer, two functions relevant to Ethernet communication are:
Places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame
: The LLC sublayer is responsible for identifying and encapsulating network layer protocols within the Ethernet frame. This involves adding information to the frame which indicates the type of payload it is carrying, whether it’s an IP packet, an ARP request, etc. This function is crucial for the proper delivery and interpretation of the data at the receiving end.
Adds Ethernet control information to network protocol data
: The LLC sublayer adds control information to the network protocol data, which is essential for managing and controlling the communication process. This includes frame synchronization, error checking, and flow control. This function ensures that the data transmitted over the Ethernet network is reliable and synchronized.
The other functions mentioned, such as applying source and destination MAC addresses, integrating Layer 2 flows between different Ethernet types, and implementing CSMA/CD over legacy half-duplex media, are typically associated with the Media Access Control (MAC) sublayer of the Data Link Layer, not the LLC sublayer. The MAC sublayer is responsible for the physical addressing and media access control mechanisms in Ethernet communication.

---

## Question 153

Two pings were issued from a host on a local network. The first ping was issued to the IP address of the default gateway of the host and it failed. The second ping was issued to the IP address of a host outside the local network and it was successful. What is a possible cause for the failed ping?

- [ ] The default gateway is not operational.
- [ ] The default gateway device is configured with the wrong IP address.
- [ ] The TCP/IP stack on the default gateway is not working properly.
- [x] **Security rules are applied to the default gateway device, preventing it from processing ping requests.**
- [ ] Security rules are applied to the default gateway device, preventing it from processing ping requests. Some network devices, including default gateways, can be configured with security rules or firewalls that block certain types of traffic. In this case, the default gateway could be configured to ignore or block ICMP packets, which are used for ping commands, from hosts within the local network.
- [ ] The default gateway is not operational : If this were the case, the host would not be able to access any external network, including the successful ping to an external host.
- [ ] The default gateway device is configured with the wrong IP address : Again, if this were the case, the host would not be able to route packets to external networks.
- [ ] The TCP/IP stack on the default gateway is not working properly : Similar to the first point, this would typically prevent all external network communication.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The scenario you’ve described is somewhat unusual because typically, if a ping to the default gateway fails, pings to external hosts should also fail, as the default gateway is the local network’s access point to outside networks. However, given the situation, one plausible explanation for the failed ping to the default gateway but successful ping to an external host could be:
Security rules are applied to the default gateway device, preventing it from processing ping requests.
 Some network devices, including default gateways, can be configured with security rules or firewalls that block certain types of traffic. In this case, the default gateway could be configured to ignore or block ICMP packets, which are used for ping commands, from hosts within the local network.
The other possibilities you mentioned are less likely given that a ping to an external host was successful:
The default gateway is not operational
: If this were the case, the host would not be able to access any external network, including the successful ping to an external host.
The default gateway device is configured with the wrong IP address
: Again, if this were the case, the host would not be able to route packets to external networks.
The TCP/IP stack on the default gateway is not working properly
: Similar to the first point, this would typically prevent all external network communication.
Therefore, the most likely scenario given your description is that the default gateway has security rules in place that specifically block ping requests from the local network.

---

## Question 154

What is a benefit of using cloud computing in networking?

- [ ] Technology is integrated into every-day appliances allowing them to interconnect with other devices, making them more ‘smart’ or automated.
- [x] **Network capabilities are extended without requiring investment in new infrastructure, personnel, or software.**
- [ ] Home networking uses existing electrical wiring to connect devices to the network wherever there is an electrical outlet, saving the cost of installing data cables.
- [ ] End users have the freedom to use personal tools to access information and communicate across a business network.

> [!NOTE]
> **Explanation:** Explanation & Hint:
Cloud computing extends IT’s capabilities without requiring investment in new infrastructure, training new personnel, or licensing new software. These services are available on-demand and delivered economically to any device anywhere in the world without compromising security or function. BYOD is about end users having the freedom to use personal tools to access information and communicate across a business or campus network. Smart home technology is integrated into every-day appliances allowing them to interconnect with other devices, making them more ‘smart’ or automated. Powerline networking is a trend for home networking that uses existing electrical wiring to connect devices to the network wherever there is an electrical outlet, saving the cost of installing data cables.

---

## Question 155

Match the firewall function to the type of threat protection it provides to the network. (Not all options are used.)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-015.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-–-ITNv7-–-Final-Exam-Answers-015-1024x360.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-v7-%E2%80%93-ITNv7-%E2%80%93-Final-Exam-Answers-015-1024x360.png)

> [!NOTE]
> **Explanation:** Explanation & Hint:
Application filters prevent access based on Layer 4 port numbers.

Packet filters prevent access based on IP or MAC address.

URL filters prevent access to web site URLs or content.

Stateful packet inspection prevents unsolicited incoming sessions.

Network address translators translate internal IP addresses to to outside IP addresses and do not prevent network attacks.

---

## Question 156

What service is provided by SMTP?

- [ ] Allows remote access to network devices and servers.
- [ ] Uses encryption to provide secure remote access to network devices and servers.
- [x] **Allows clients to send email to a mail server and the servers to send email to other servers.**
- [ ] An application that allows real-time chatting among remote users.
- [ ] Allowing remote access to network devices and servers: This is generally the role of protocols like Telnet or SSH (Secure Shell).
- [ ] Using encryption to provide secure remote access to network devices and servers: This describes SSH (Secure Shell).
- [ ] An application that allows real-time chatting among remote users: This refers to instant messaging services or applications, but it is not specifically tied to a single protocol or service.

> [!NOTE]
> **Explanation:** Explanation & Hint:
SMTP (Simple Mail Transfer Protocol) provides the service that allows clients to send email to a mail server and the servers to send email to other servers. It is a protocol used for sending emails across the Internet. SMTP is involved in the process of mail dispatch from a client’s email program to the recipient’s mail server, and also between different mail servers for relaying email.
The other options you mentioned refer to different services:
Allowing remote access to network devices and servers: This is generally the role of protocols like Telnet or SSH (Secure Shell).
Using encryption to provide secure remote access to network devices and servers: This describes SSH (Secure Shell).
An application that allows real-time chatting among remote users: This refers to instant messaging services or applications, but it is not specifically tied to a single protocol or service.

---

## Question 157

A client packet is received by a server. The packet has a destination port number of 22. What service is the client requesting?

- [x] **SSH**
- [ ] DNS
- [ ] DHCP
- [ ] TFTP
- [ ] DNS (Domain Name System): Usually uses port 53. It translates domain names into IP addresses.
- [ ] DHCP (Dynamic Host Configuration Protocol): Typically uses port 67 for the DHCP server and port 68 for the DHCP client. It is used for automatically assigning IP addresses and other network configuration parameters.
- [ ] TFTP (Trivial File Transfer Protocol): Generally uses port 69. It’s a simple file transfer protocol, with less functionality compared to FTP.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The client is requesting SSH (Secure Shell) service. In networking, port numbers are used to distinguish different services or processes. Port 22 is the default port for SSH, which is a protocol used for secure logins, file transfers, and other secure network services over an unsecured network.
Here’s a brief overview of the other services mentioned and their typical port numbers:
DNS (Domain Name System): Usually uses port 53. It translates domain names into IP addresses.
DHCP (Dynamic Host Configuration Protocol): Typically uses port 67 for the DHCP server and port 68 for the DHCP client. It is used for automatically assigning IP addresses and other network configuration parameters.
TFTP (Trivial File Transfer Protocol): Generally uses port 69. It’s a simple file transfer protocol, with less functionality compared to FTP.

---

## Question 158

A network administrator is adding a new LAN to a branch office. The new LAN must support 10 connected devices. What is the smallest network mask that the network administrator can use for the new network?

- [x] **255.255.255.240**
- [ ] 255.255.255.224
- [ ] 255.255.255.192
- [ ] 255.255.255.248
- [ ] For a subnet mask of 255.255.255.248 (/29), there are 3 host bits ( 23=8 2 3 = 8 ), which gives 6 usable addresses (8 – 2), not enough for 10 devices.
- [ ] For a subnet mask of 255.255.255.240 (/28), there are 4 host bits ( 24=16 2 4 = 16 ), which gives 14 usable addresses (16 – 2), enough for 10 devices.
- [ ] For a subnet mask of 255.255.255.224 (/27), there are 5 host bits ( 25=32 2 5 = 32 ), which gives 30 usable addresses (32 – 2), more than needed.
- [ ] For a subnet mask of 255.255.255.192 (/26), there are 6 host bits ( 26=64 2 6 = 64 ), which gives 62 usable addresses (64 – 2), more than needed.

> [!NOTE]
> **Explanation:** Explanation & Hint:
To determine the smallest network mask that can support 10 connected devices, we need to consider the number of host bits required in the subnet mask to accommodate at least 10 devices. In IP addressing, the number of usable host addresses in a subnet can be calculated using the formula:
Number of usable hosts=2^n−2
Number of usable hosts
=
2^
n
−
2
Where 
n
 is the number of host bits. The subtraction of 2 accounts for the network address and the broadcast address, which cannot be assigned to hosts.
Let’s calculate the minimum number of host bits required to support at least 10 devices:
For a subnet mask of 255.255.255.248 (/29), there are 3 host bits (
23=8
2
3
=
8
), which gives 6 usable addresses (8 – 2), not enough for 10 devices.
For a subnet mask of 255.255.255.240 (/28), there are 4 host bits (
24=16
2
4
=
16
), which gives 14 usable addresses (16 – 2), enough for 10 devices.
For a subnet mask of 255.255.255.224 (/27), there are 5 host bits (
25=32
2
5
=
32
), which gives 30 usable addresses (32 – 2), more than needed.
For a subnet mask of 255.255.255.192 (/26), there are 6 host bits (
26=64
2
6
=
64
), which gives 62 usable addresses (64 – 2), more than needed.
Therefore, the smallest network mask that the network administrator can use to support 10 devices is 255.255.255.240 (/28), which provides up to 14 usable IP addresses.

---

## Question 159

Which two statements describe how to assess traffic flow patterns and network traffic types using a protocol analyzer? (Choose two.)

- [ ] Capture traffic on the weekends when most employees are off work.
- [ ] Only capture traffic in the areas of the network that receive most of the traffic such as the data center.
- [x] **Capture traffic during peak utilization times to get a good representation of the different traffic types.**
- [x] **Perform the capture on different network segments.**
- [ ] Only capture WAN traffic because traffic to the web is responsible for the largest amount of traffic on a network.

---

## Question 160

What characteristic describes a DoS attack?

- [x] **an attack that slows or crashes a device or network service**
- [ ] the use of stolen credentials to access private data
- [ ] a network device that filters access and traffic coming into a network
- [ ] software that is installed on a user device and collects information about the user

---

## Question 161

A network administrator is adding a new LAN to a branch office. The new LAN must support 200 connected devices. What is the smallest network mask that the network administrator can use for the new network?

- [x] **255.255.255.0**
- [ ] 255.255.255.224
- [ ] 255.255.255.248
- [ ] 255.255.255.240

---

## Question 162

What service is provided by DHCP?

- [x] **Dynamically assigns IP addresses to end and intermediary devices.**
- [ ] Allows remote access to network devices and servers.
- [ ] Uses encryption to provide secure remote access to network devices and servers.
- [ ] An application that allows real-time chatting among remote users.

---

## Question 163

What service is provided by FTP?

- [x] **Allows for data transfers between a client and a file server.**
- [ ] A basic set of rules for exchanging text, graphic images, sound, video, and other multimedia files on the web.
- [ ] Uses encryption to secure the exchange of text, graphic images, sound, and video on the web.
- [ ] An application that allows real-time chatting among remote users.

---

## Question 164

Three bank employees are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other corporate managers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?

- [x] **audio conference, financial transactions, web page**
- [ ] financial transactions, web page, audio conference
- [ ] audio conference, web page, financial transactions
- [ ] financial transactions, audio conference, web page

---

## Question 165

A network administrator is adding a new LAN to a branch office. The new LAN must support 61 connected devices. What is the smallest network mask that the network administrator can use for the new network?

- [x] **255.255.255.192**
- [ ] 255.255.255.224
- [ ] 255.255.255.240
- [ ] 255.255.255.128

---

## Question 166

What characteristic describes an IPS?

- [x] **software that identifies fast-spreading threats**
- [ ] software on a router that filters traffic based on IP addresses or applications
- [ ] a network device that filters access and traffic coming into a network
- [ ] a tunneling protocol that provides remote users with secure access into the network of an organization

---

