# Checkpoint Exam Communicating Between... Exam Answers

Source: [https://infraexam.com/ccna1-v7/ccna1-v7-itnv7-modules-8-10-communicating-between-networks-exam-answers/](https://infraexam.com/ccna1-v7/ccna1-v7-itnv7-modules-8-10-communicating-between-networks-exam-answers/)

Total Questions: 75

---

## Question 1

A computer can access devices on the same network but cannot access devices on other networks. What is the probable cause of this problem?

- [ ] The cable is not connected properly to the NIC.
- [ ] The computer has an invalid IP address.
- [ ] The computer has an incorrect subnet mask.
- [x] **The computer has an invalid default gateway address.**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The default gateway is the address of the device a host uses to access the Internet or another network. If the default gateway is missing or incorrect, that host will not be able to communicate outside the local network. Because the host can access other hosts on the local network, the network cable and the other parts of the IP configuration are working.

---

## Question 2

Which statement describes a feature of the IP protocol?

- [ ] IP encapsulation is modified based on network media.
- [ ] IP relies on Layer 2 protocols for transmission error control.
- [ ] MAC addresses are used during the IP packet encapsulation.
- [x] **IP relies on upper layer services to handle situations of missing or out-of-order packets.**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
IP protocol is a connection-less protocol, considered unreliable in terms of end-to-end delivery. It does not provide error control in the cases where receiving packets are out-of-order or in cases of missing packets. It relies on upper layer services, such as TCP, to resolve these issues.

---

## Question 3

Why is NAT not needed in IPv6?​

- [ ] Because IPv6 has integrated security, there is no need to hide the IPv6 addresses of internal networks.​
- [x] **Any host or user can get a public IPv6 network address because the number of available IPv6 addresses is extremely large.​**
- [ ] The problems that are induced by NAT applications are solved because the IPv6 header improves packet handling by intermediate routers.​
- [ ] The end-to-end connectivity problems that are caused by NAT are solved because the number of routes increases with the number of nodes that are connected to the Internet.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The large number of public IPv6 addresses eliminates the need for NAT. Sites from the largest enterprises to single households can get public IPv6 network addresses. This avoids some of the NAT-induced application problems that are experienced by applications that require end-to-end connectivity.

---

## Question 4

Which parameter does the router use to choose the path to the destination when there are multiple routes available?

- [x] **the lower metric value that is associated with the destination network**
- [ ] the lower gateway IP address to get to the destination network
- [ ] the higher metric value that is associated with the destination network
- [ ] the higher gateway IP address to get to the destination network

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
When a packet arrives at the router interface, the router examines its header to determine the destination network. If there is a route for the destination network in the routing table, the router forwards the packet using that information. If there are two or more possible routes to the same destination, the metric is used to decide which route appears on the routing table. The lower the metric, the better the route.

---

## Question 5

What are two services provided by the OSI network layer? (Choose two.)

- [ ] performing error detection
- [x] **routing packets toward the destination**
- [x] **encapsulating PDUs from the transport layer**
- [ ] placement of frames on the media
- [ ] collision detection

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The OSI network layer provides several services to allow communication between devices:addressing

encapsulation

routing

de-encapsulation

Error detection, placing frames on the media, and collision detection are all functions of the data ink layer.

---

## Question 6

Within a production network, what is the purpose of configuring a switch with a default gateway address?

- [ ] Hosts that are connected to the switch can use the switch default gateway address to forward packets to a remote destination.
- [ ] A switch must have a default gateway to be accessible by Telnet and SSH.
- [x] **The default gateway address is used to forward packets originating from the switch to remote networks.**
- [ ] It provides a next-hop address for all traffic that flows through the switch.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
A default gateway address allows a switch to forward packets that originate on the switch to remote networks. A default gateway address on a switch does not provide Layer 3 routing for PCs that are connected on that switch. A switch can still be accessible from Telnet as long as the source of the Telnet connection is on the local network.

---

## Question 7

What is a basic characteristic of the IP protocol?

- [x] **connectionless**
- [ ] media dependent
- [ ] user data segmentation
- [ ] reliable end-to-end delivery

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Internet Protocol (IP) is a network layer protocol that does not require initial exchange of control information to establish an end-to-end connection before packets are forwarded. Thus, IP is connectionless and does not provide reliable end-to-end delivery by itself. IP is media independent. User data segmentation is a service provided at the transport layer.

---

## Question 8

Which field in the IPv4 header is used to prevent a packet from traversing a network endlessly?

- [x] **Time-to-Live**
- [ ] Sequence Number
- [ ] Acknowledgment Number
- [ ] Differentiated Services

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The value of the Time-to-Live (TTL) field in the IPv4 header is used to limit the lifetime of a packet. The sending host sets the initial TTL value; which is decreased by one each time the packet is processed by a router. If the TTL field decrements to zero, the router discards the packet and sends an Internet Control Message Protocol (ICMP) Time Exceeded message to the source IP address. The Differentiated Services (DS) field is used to determine the priority of each packet. Sequence Number and Acknowledgment Number are two fields in the TCP header.

---

## Question 9

What is one advantage that the IPv6 simplified header offers over IPv4?

- [ ] smaller-sized header
- [ ] little requirement for processing checksums
- [ ] smaller-sized source and destination IP addresses
- [x] **efficient packet handling**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The IPv6 simplified header offers several advantages over IPv4:

· Better routing efficiency and efficient packet handling for performance and forwarding-rate scalability

· No requirement for processing checksums

· Simplified and more efficient extension header mechanisms (as opposed to the IPv4 Options field)

· A Flow Label field for per-flow processing with no need to open the transport inner packet to identify the various traffic flows

---

## Question 10

What IPv4 header field identifies the upper layer protocol carried in the packet?

- [x] **Protocol**
- [ ] Identification
- [ ] Version
- [ ] Differentiated Services

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
It is the Protocol field in the IP header that identifies the upper-layer protocol the packet is carrying. The Version field identifies the IP version. The Differential Services field is used for setting packet priority. The Identification field is used to reorder fragmented packets.

---

## Question 11

Refer to the exhibit. Match the packets with their destination IP address to the exiting interfaces on the router. (Not all targets are used.)

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/CCNA1-v7-ITNv7-Modules-8-10-Communicating-Between-Networks-Exam-Answers-02.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-8-10-Checkpoint-Exam-Communicating-Between-Networks-Exam-Answers-001.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-8-10-Checkpoint-Exam-Communicating-Between-Networks-Exam-Answers-001-1024x449.png)

- [x] **packets with destination of 172.17.10.5 ==> FastEthernet1/1**
- [x] **packets with destination of 172.17.12.10 ==> FastEthernet1/0**
- [x] **packets with destination of 172.17.14.8 ==> FastEthernet0/1**
- [x] **packets with destination of 172.17.8.20 ==> Serial0/0/0**
- [x] **packets with destination of 172.17.6.15 ==> FastEthernet0/0**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Packets with a destination of 172.17.6.15 are forwarded through Fa0/0. Packets with a destination of 172.17.10.5 are forwarded through Fa1/1. Packets with a destination of 172.17.12.10 are forwarded through Fa1/0. Packets with a destination of 172.17.14.8 are forwarded through Fa0/1. Because network 172.17.8.0 has no entry in the routing table, it will take the gateway of last resort, which means that packets with a destination of 172.17.8.20 are forwarded through Serial0/0/0. Because a gateway of last resort exists, no packets will be dropped.

---

## Question 12

What information does the loopback test provide?

- [x] **The TCP/IP stack on the device is working correctly.**
- [ ] The device has end-to-end connectivity.
- [ ] DHCP is working correctly.
- [ ] The Ethernet cable is working correctly.
- [ ] The device has the correct IP address on the network.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Because the loopback test sends packets back to the host device, it does not provide information about network connectivity to other hosts. The loopback test verifies that the host NIC, drivers, and TCP/IP stack are functioning.

---

## Question 13

What routing table entry has a next hop address associated with a destination network?

- [ ] directly-connected routes
- [ ] local routes
- [x] **remote routes**
- [ ] C and L source routes

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Routing table entries for remote routes will have a next hop IP address. The next hop IP address is the address of the router interface of the next device to be used to reach the destination network. Directly-connected and local routes have no next hop, because they do not require going through another router to be reached.

---

## Question 14

How do hosts ensure that their packets are directed to the correct network destination?

- [x] **They have to keep their own local routing table that contains a route to the loopback interface, a local network route, and a remote default route.​**
- [ ] They always direct their packets to the default gateway, which will be responsible for the packet delivery.
- [ ] They search in their own local routing table for a route to the network destination address and pass this information to the default gateway.
- [ ] They send a query packet to the default gateway asking for the best route.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Hosts must maintain their own local routing table to ensure that network layer packets are directed to the correct destination network. This local table typically contains a route to the loopback interface, a route to the network that the host is connected to, and a local default route, which represents the route that packets must take to reach all remote network addresses.

---

## Question 15

When transporting data from real-time applications, such as streaming audio and video, which field in the IPv6 header can be used to inform the routers and switches to maintain the same path for the packets in the same conversation?

- [ ] Next Header
- [x] **Flow Label**
- [ ] Traffic Class
- [ ] Differentiated Services

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The Flow Label in IPv6 header is a 20-bit field that provides a special service for real-time applications. This field can be used to inform routers and switches to maintain the same path for the packet flow so that packets will not be reordered.

---

## Question 16

What statement describes the function of the Address Resolution Protocol?

- [ ] ARP is used to discover the IP address of any host on a different network.
- [ ] ARP is used to discover the IP address of any host on the local network.
- [ ] ARP is used to discover the MAC address of any host on a different network.
- [x] **ARP is used to discover the MAC address of any host on the local network.**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
When a PC wants to send data on the network, it always knows the IP address of the destination. However, it also needs to discover the MAC address of the destination. ARP is the protocol that is used to discover the MAC address of a host that belongs to the same network.

---

## Question 17

Under which two circumstances will a switch flood a frame out of every port except the port that the frame was received on? (Choose two.)

- [x] **The frame has the broadcast address as the destination address.**
- [x] **The destination address is unknown to the switch.**
- [ ] The source address in the frame header is the broadcast address.
- [ ] The source address in the frame is a multicast address.
- [ ] The destination address in the frame is a known unicast address.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
A switch will flood a frame out of every port, except the one that the frame was received from, under two circumstances. Either the frame has the broadcast address as the destination address, or the destination address is unknown to the switch.

---

## Question 18

Which statement describes the treatment of ARP requests on the local link?

- [ ] They must be forwarded by all routers on the local network.
- [x] **They are received and processed by every device on the local network.**
- [ ] They are dropped by all switches on the local network.
- [ ] They are received and processed only by the target device.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
One of the negative issues with ARP requests is that they are sent as a broadcast. This means all devices on the local link must receive and process the request.

---

## Question 19

Which destination address is used in an ARP request frame?

- [ ] 0.0.0.0
- [ ] 255.255.255.255
- [x] **ffff.ffff.ffff**
- [ ] AAAA.AAAA.AAAA
- [ ] the physical address of the destination host

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The purpose of an ARP request is to find the MAC address of the destination host on an Ethernet LAN. The ARP process sends a Layer 2 broadcast to all devices on the Ethernet LAN. The frame contains the IP address of the destination and the broadcast MAC address, ffff.ffff.ffff. The host with the IP address that matches the IP address in the ARP request will reply with a unicast frame that includes the MAC address of the host. Thus the original sending host will obtain the destination IP and MAC address pair to continue the encapsulation process for data transmission.

---

## Question 20

A network technician issues the arp -d * command on a PC after the router that is connected to the LAN is reconfigured. What is the result after this command is issued?

- [x] **The ARP cache is cleared.**
- [ ] The current content of the ARP cache is displayed.
- [ ] The detailed information of the ARP cache is displayed.
- [ ] The ARP cache is synchronized with the router interface.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Issuing the arp –d * command on a PC will clear the ARP cache content. This is helpful when a network technician wants to ensure the cache is populated with updated information.

---

## Question 21

Refer to the exhibit. The exhibit shows a small switched network and the contents of the MAC address table of the switch. PC1 has sent a frame addressed to PC3. What will the switch do with the frame?

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/CCNA1-v7-ITNv7-Modules-8-10-Communicating-Between-Networks-Exam-Answers-04.png)

- [ ] The switch will discard the frame.
- [ ] The switch will forward the frame only to port 2.
- [x] **The switch will forward the frame to all ports except port 4.**
- [ ] The switch will forward the frame to all ports.
- [ ] The switch will forward the frame only to ports 1 and 3.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The MAC address of PC3 is not present in the MAC table of the switch. Because the switch does not know where to send the frame that is addressed to PC3, it will forward the frame to all the switch ports, except for port 4, which is the incoming port.

---

## Question 22

Which two types of IPv6 messages are used in place of ARP for address resolution?

- [ ] anycast
- [ ] broadcast
- [ ] echo reply
- [ ] echo request
- [x] **neighbor solicitation**
- [x] **neighbor advertisement**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
IPv6 does not use ARP. Instead, ICMPv6 neighbor discovery is used by sending neighbor solicitation and neighbor advertisement messages.

---

## Question 23

What is the aim of an ARP spoofing attack?

- [ ] to flood the network with ARP reply broadcasts
- [ ] to fill switch MAC address tables with bogus addresses
- [x] **to associate IP addresses to the wrong MAC address**
- [ ] to overwhelm network hosts with ARP requests

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
In an ARP spoofing attack, a malicious host intercepts ARP requests and replies to them so that network hosts will map an IP address to the MAC address of the malicious host.

---

## Question 24

Refer to the exhibit. PC1 attempts to connect to File_server1 and sends an ARP request to obtain a destination MAC address. Which MAC address will PC1 receive in the ARP reply?

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/CCNA1-v7-ITNv7-Modules-8-10-Communicating-Between-Networks-Exam-Answers-03.gif.webp)

- [ ] the MAC address of S1
- [x] **the MAC address of the G0/0 interface on R1**
- [ ] the MAC address of the G0/0 interface on R2
- [ ] the MAC address of S2
- [ ] the MAC address of File_server1

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
PC1 must have a MAC address to use as a destination Layer 2 address. PC1 will send an ARP request as a broadcast and R1 will send back an ARP reply with its G0/0 interface MAC address. PC1 can then forward the packet to the MAC address of the default gateway, R1.

---

## Question 25

Where are IPv4 address to Layer 2 Ethernet address mappings maintained on a host computer?

- [ ] neighbor table
- [x] **ARP cache**
- [ ] routing table
- [ ] MAC address table

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The ARP cache is used to store IPv4 addresses and the Ethernet physical addresses or MAC addresses to which the IPv4 addresses are mapped. Incorrect mappings of IP addresses to MAC addresses can result in loss of end-to-end connectivity.

---

## Question 26

What important information is examined in the Ethernet frame header by a Layer 2 device in order to forward the data onward?

- [ ] source MAC address
- [ ] source IP address
- [x] **destination MAC address**
- [ ] Ethernet type
- [ ] destination IP address

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The Layer 2 device, such as a switch, uses the destination MAC address to determine which path (interface or port) should be used to send the data onward to the destination device.

---

## Question 27

Match the commands to the correct actions.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-8-10-Checkpoint-Exam-Communicating-Between-Networks-Exam-Answers-002.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-8-10-Checkpoint-Exam-Communicating-Between-Networks-Exam-Answers-002-1024x336.png)

- [x] **provides security on the console ==> Router(config-line)# password class**
- [x] **displays a message when the router is accessed ==> Router(config)# banner motd #**
- [x] **configures a name on the router ==> Router(config)# hostname CL1**
- [x] **provides security on the console => Router(config-line)# password class : This command sets the console line password to “class”, which will be required to access the router console.**
- [x] **displays a message when the router is accessed => Router(config)# banner motd # : This command sets a Message of the Day (MOTD) banner, which is a message displayed to all users who log into the router.**
- [x] **configures a name on the router => Router(config)# hostname CL1 : This command changes the router’s hostname to “CL1”.**

> [!NOTE]
> **Explanation:** Explanation & Hints:
provides security on the console
 => 
Router(config-line)# password class
: This command sets the console line password to “class”, which will be required to access the router console.
displays a message when the router is accessed
 => 
Router(config)# banner motd #
: This command sets a Message of the Day (MOTD) banner, which is a message displayed to all users who log into the router.
configures a name on the router
 => 
Router(config)# hostname CL1
: This command changes the router’s hostname to “CL1”.

---

## Question 28

A new network administrator has been asked to enter a banner message on a Cisco device. What is the fastest way a network administrator could test whether the banner is properly configured?

- [ ] Reboot the device.
- [ ] Enter CTRL-Z at the privileged mode prompt.
- [ ] Exit global configuration mode.
- [ ] Power cycle the device.
- [x] **Exit privileged EXEC mode and press Enter.**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
While at the privileged mode prompt such as Router#, type exit ,press Enter , and the banner message appears. Power cycling a network device that has had the banner motd command issued will also display the banner message, but this is not a quick way to test the configuration.

---

## Question 29

A network administrator requires access to manage routers and switches locally and remotely. Match the description to the access method.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-8-10-Checkpoint-Exam-Communicating-Between-Networks-Exam-Answers-003.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-8-10-Checkpoint-Exam-Communicating-Between-Networks-Exam-Answers-003-1024x422.png)

- [x] **remote access via dialup connection ==> AUX**
- [x] **preferred out-of-band access method ==> console**
- [x] **remote access method that users encryption ==> SSH**
- [x] **unsecure remote access ==> telnet**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Both the console and AUX ports can be used to directly connect to a Cisco network device for management purposes. However, it is more common to use the console port. The AUX port is more often used for remote access via a dial up connection. SSH and Telnet are both remote access methods that depend on an active network connection. SSH uses a stronger password authentication than Telnet uses and also uses encryption on transmitted data.

---

## Question 30

Match the phases to the functions during the boot up process of a Cisco router.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-8-10-Checkpoint-Exam-Communicating-Between-Networks-Exam-Answers-004.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-8-10-Checkpoint-Exam-Communicating-Between-Networks-Exam-Answers-004-1024x345.png)

- [x] **phase 1 ==> perform the POST and load the bootstrap program**
- [x] **phase 2 ==> locate and load the Cisco ISO Software**
- [x] **phase 3 ==> locate and load the startup configuration file**
- [x] **Perform the POST and load the bootstrap program.**
- [x] **Locate and load the Cisco IOS software.**
- [x] **Locate and load the startup configuration file**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
There are three major phases to the bootup process of a Cisco router:
Perform the POST and load the bootstrap program.
Locate and load the Cisco IOS software.
Locate and load the startup configuration file
If a startup configuration file cannot be located, the router will enter setup mode by displaying the setup mode prompt.

---

## Question 31

Match the command with the device mode at which the command is entered.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-8-10-Checkpoint-Exam-Communicating-Between-Networks-Exam-Answers-005.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-8-10-Checkpoint-Exam-Communicating-Between-Networks-Exam-Answers-005-1024x497.png)

- [x] **login ==> R1(config-line)#**
- [x] **service password-encryption ==> R1(config)#**
- [x] **ip address 192.168.4.4 255.255.255.0 ==> R1(config-if)#**
- [x] **copy running-config startup-config ==> R1#**
- [x] **enable ==> R1>**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The 
enable 
command is entered in R1> mode. The 
login
 command is entered in R1(config-line)# mode. The 
copy running-config startup-config 
command is entered in R1# mode. The 
ip address 192.168.4.4 255.255.255.0
 command is entered in R1(config-if)# mode. The 
service password-encryption
 command is entered in global configuration mode.

---

## Question 32

What are two functions of NVRAM? (Choose two.)

- [ ] to store the routing table
- [x] **to retain contents when power is removed**
- [x] **to store the startup configuration file**
- [ ] to contain the running configuration file
- [ ] to store the ARP table

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
NVRAM is permanent memory storage, so the startup configuration file is preserved even if the router loses power.

---

## Question 33

A router boots and enters setup mode. What is the reason for this?

- [ ] The IOS image is corrupt.
- [ ] Cisco IOS is missing from flash memory.
- [x] **The configuration file is missing from NVRAM.**
- [ ] The POST process has detected hardware failure.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
If a router cannot locate the startup-config file in NVRAM, it will enter setup mode to allow the configuration to be entered from the console device.

---

## Question 34

The global configuration command ip default-gateway 172.16.100.1 is applied to a switch. What is the effect of this command?

- [ ] The switch will have a management interface with the address 172.16.100.1.
- [x] **The switch can be remotely managed from a host on another network.**
- [ ] The switch can communicate with other hosts on the 172.16.100.0 network.
- [ ] The switch is limited to sending and receiving frames to and from the gateway 172.16.100.1.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
A default gateway address is typically configured on all devices to allow them to communicate beyond just their local network.In a switch this is achieved using the command ip default-gateway <ip address>.

---

## Question 35

What happens when the transport input ssh command is entered on the switch vty lines?

- [ ] The SSH client on the switch is enabled.
- [x] **Communication between the switch and remote users is encrypted.**
- [ ] The switch requires a username/password combination for remote access.
- [ ] The switch requires remote connections via a proprietary client software.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The transport input ssh command when entered on the switch vty (virtual terminal lines) will encrypt all inbound controlled telnet connections.

---

## Question 36

Refer to the exhibit. A user PC has successfully transmitted packets to www.cisco.com. Which IP address does the user PC target in order to forward its data occ the local network?

![exhibit](https://infraexam.com/wp-content/uploads/2023/11/CCNA1-v7-ITNv7-Modules-8-10-Communicating-Between-Networks-Exam-Answers-03.png)

- [ ] 172.24.255.17
- [ ] 172.24.1.22
- [x] **172.20.0.254**
- [ ] 172.24.255.4
- [ ] 172.20.1.18

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
When a host sends packets to a destination outside of its local network, the first hop IP address encountered is the default gateway.

---

## Question 37

Match the configuration mode with the command that is available in that mode.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-8-10-Checkpoint-Exam-Communicating-Between-Networks-Exam-Answers-006.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-8-10-Checkpoint-Exam-Communicating-Between-Networks-Exam-Answers-006-1024x419.png)

- [x] **R1(config-line)# ==> login**
- [x] **R1# ==> copy running-config startup-config**
- [x] **R1(config-router)# ==> Not matched**
- [x] **R1> ==> enable**
- [x] **R1(config)# ==> interface fastethernet 0/0**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The 
enable 
command is entered at the R1> prompt. The 
login
 command is entered at the R1(config-line)# prompt. The 
copy running-config startup-config 
command is entered at the R1# prompt. The 
interface fastethernet 0/0 
command is entered at the R1(config)# prompt.

---

## Question 38

Which three commands are used to set up secure access to a router through a connection to the console interface? (Choose three.)

- [ ] interface fastethernet 0/0
- [ ] line vty 0 4
- [x] **line console 0**
- [ ] enable secret cisco
- [x] **login**
- [x] **password cisco**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The three commands needed to password protect the console port are as follows:

line console 0

password cisco

login

The interface fastethernet 0/0 command is commonly used to access the configuration mode used to apply specific parameters such as the IP address to the Fa0/0 port. The line vty 0 4 command is used to access the configuration mode for Telnet. The 0 and 4 parameters specify ports 0 through 4, or a maximum of five simultaneous Telnet connections. The enable secret command is used to apply a password used on the router to access the privileged mode.

---

## Question 39

Refer to the exhibit. Consider the IP address configuration shown from PC1. What is a description of the default gateway address?

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/CCNA1-v7-ITNv7-Modules-8-10-Communicating-Between-Networks-Exam-Answers-01-1.jpg)

- [ ] It is the IP address of the Router1 interface that connects the company to the Internet.
- [x] **It is the IP address of the Router1 interface that connects the PC1 LAN to Router1.**
- [ ] It is the IP address of Switch1 that connects PC1 to other devices on the same LAN.
- [ ] It is the IP address of the ISP network device located in the cloud.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The default gateway is used to route packets destined for remote networks. The default gateway IP address is the address of the first Layer 3 device (the router interface) that connects to the same network.

---

## Question 40

Which two functions are primary functions of a router? (Choose two.)

- [x] **packet forwarding**
- [ ] microsegmentation
- [ ] domain name resolution
- [x] **path selection**
- [ ] flow control

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
A router accepts a packet and accesses its routing table to determine the appropriate exit interface based on the destination address. The router then forwards the packet out of that interface.

---

## Question 41

What is the effect of using the Router# copy running-config startup-config command on a router?

- [ ] The contents of ROM will change.
- [ ] The contents of RAM will change.
- [x] **The contents of NVRAM will change.**
- [ ] The contents of flash will change.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The command copy running-config startup-config copies the running-configuration file from RAM into NVRAM and saves it as the startup-configuration file. Since NVRAM is none-volatile memory it will be able to retain the configuration details when the router is powered occ.

---

## Question 42

What will happen if the default gateway address is incorrectly configured on a host?

- [ ] The host cannot communicate with other hosts in the local network.
- [ ] The switch will not forward packets initiated by the host.
- [ ] The host will have to use ARP to determine the correct address of the default gateway.
- [x] **The host cannot communicate with hosts in other networks.**
- [ ] A ping from the host to 127.0.0.1 would not be successful.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
When a host needs to send a message to another host located on the same network, it can forward the message directly. However, when a host needs to send a message to a remote network, it must use the router, also known as the default gateway. This is because the data link frame address of the remote destination host cannot be used directly. Instead, the IP packet has to be sent to the router (default gateway) and the router will forward the packet toward its destination. Therefore, if the default gateway is incorrectly configured, the host can communicate with other hosts on the same network, but not with hosts on remote networks.

---

## Question 43

What are two potential network problems that can result from ARP operation? (Choose two.)

- [ ] Manually configuring static ARP associations could facilitate ARP poisoning or MAC address spoofing.
- [x] **On large networks with low bandwidth, multiple ARP broadcasts could cause data communication delays.**
- [x] **Network attackers could manipulate MAC address and IP address mappings in ARP messages with the intent of intercepting network traffic.**
- [ ] Large numbers of ARP request broadcasts could cause the host MAC address table to overflow and prevent the host from communicating on the network.
- [ ] Multiple ARP replies result in the switch MAC address table containing entries that match the MAC addresses of hosts that are connected to the relevant switch port.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Large numbers of ARP broadcast messages could cause momentary data communications delays. Network attackers could manipulate MAC address and IP address mappings in ARP messages with the intent to intercept network traffic. ARP requests and replies cause entries to be made into the ARP table, not the MAC address table. ARP table overflows are very unlikely. Manually configuring static ARP associations is a way to prevent, not facilitate, ARP poisoning and MAC address spoofing. Multiple ARP replies resulting in the switch MAC address table containing entries that match the MAC addresses of connected nodes and are associated with the relevant switch port are required for normal switch frame forwarding operations. It is not an ARP caused network problem.

---

## Question 44

Open the PT activity. Perform the tasks in the activity instructions and then answer the question.

![exhibit](https://infraexam.com/wp-content/uploads/2022/12/CCNA1-v7-ITNv7-Modules-8-10-Communicating-Between-Networks-Exam-Answers-PT-001.png.webp)

- [ ] R1: G0/0 and S0/0/0 R2: G0/0 and S0/0/0
- [ ] R1: G0/1 and S0/0/1 R2: G0/0 and S0/0/1
- [x] **R1: G0/0 and S0/0/0 R2: G0/1 and S0/0/0**
- [ ] R1: G0/0 and S0/0/1 R2: G0/1 and S0/0/1

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The command to use for this activity is show ip interface brief in each router. The active and operational interfaces are represented by the value “up” in the “Status” and “Protocol” columns. The interfaces in R1 with these characteristics are G0/0 and S0/0/0. In R2 they are G0/1 and S0/0/0.

---

## Question 45

Open the PT activity. Perform the tasks in the activity instructions and then answer the question.

CCNA1 v7 – ITNv7 – Modules 8 – 10 Communicating Between Networks Exam Answers PT 001

Which interfaces in each router are active and operational?

![exhibit](https://infraexam.com/wp-content/uploads/2022/12/CCNA1-v7-ITNv7-Modules-8-10-Communicating-Between-Networks-Exam-Answers-PT-001.png.webp)

- [ ] R1: G0/0 and S0/0/0 R2: G0/0 and S0/0/0
- [ ] R1: G0/1 and S0/0/1 R2: G0/0 and S0/0/1
- [x] **R1: G0/0 and S0/0/0 R2: G0/1 and S0/0/0**
- [ ] R1: G0/0 and S0/0/1 R2: G0/1 and S0/0/1

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The command to use for this activity is show ip interface brief in each router. The active and operational interfaces are represented by the value “up” in the “Status” and “Protocol” columns. The interfaces in R1 with these characteristics are G0/0 and S0/0/0. In R2 they are G0/1 and S0/0/0.

---

## Question 46

Which term describes a field in the IPv4 packet header used to identify the next level protocol?

- [x] **protocol**
- [ ] destination IPv4 address
- [ ] source IPv4 address
- [ ] TTL

> [!NOTE]
> **Explanation:** Explanation & Hint:
The term that describes a field in the IPv4 packet header used to identify the next-level protocol is “protocol.” In the IPv4 header, the “Protocol” field is an 8-bit field that specifies the protocol used in the data portion of the packet, indicating which higher-level protocol is being carried within the IP packet. Common values for this field include 6 for TCP (Transmission Control Protocol) and 17 for UDP (User Datagram Protocol), among others.

---

## Question 47

Which term describes a field in the IPv4 packet header that contains an 8-bit binary value used to determine the priority of each packet?

- [x] **differentiated services**
- [ ] destination IPv4 address
- [ ] source IPv4 address
- [ ] protocol

> [!NOTE]
> **Explanation:** Explanation & Hint:
The term that describes a field in the IPv4 packet header that contains an 8-bit binary value used to determine the priority of each packet is “Differentiated Services” (often abbreviated as DSCP or DS field). The Differentiated Services field is used for Quality of Service (QoS) and packet prioritization in IP networks. It allows packets to be marked with a value that represents their relative priority, and routers and network devices can use this value to make forwarding and queuing decisions based on the desired quality of service for different types of traffic.

---

## Question 48

Which term describes a field in the IPv4 packet header that contains a 32-bit binary value associated with an interface on the sending device?

- [x] **source IPv4 address**
- [ ] destination IPv4 address
- [ ] protocol
- [ ] TTL

> [!NOTE]
> **Explanation:** Explanation & Hint:
The term that describes a field in the IPv4 packet header that contains a 32-bit binary value associated with an interface on the sending device is “source IPv4 address.” The source IPv4 address is a 32-bit value that identifies the source of the IP packet and is typically associated with the interface or network adapter on the sending device through which the packet is transmitted. This address helps routers and other network devices determine the origin of the packet and where replies should be sent.

---

## Question 49

Which term describes a field in the IPv4 packet header used to detect corruption in the IPv4 header?

- [x] **header checksum**
- [ ] source IPv4 address
- [ ] protocol
- [ ] TTL

> [!NOTE]
> **Explanation:** Explanation & Hint:
The term that describes a field in the IPv4 packet header used to detect corruption in the IPv4 header is the “header checksum.” The header checksum is a 16-bit field that contains a value computed based on the bits in the header. It is used to verify the integrity of the header during transmission. When the packet is received, the recipient can recalculate the checksum, and if it doesn’t match the value in the header, it indicates that the header has been corrupted in transit, and the packet may be discarded. This helps ensure the reliability of the header information.

---

## Question 50

Which term describes a field in the IPv4 packet header that contains a 32-bit binary value associated with an interface on the sending device?

- [x] **source IPv4 address**
- [ ] protocol
- [ ] TTL
- [ ] header checksum

> [!NOTE]
> **Explanation:** Explanation & Hint:
The term that describes a field in the IPv4 packet header that contains a 32-bit binary value associated with an interface on the sending device is “source IPv4 address.” The source IPv4 address is a 32-bit value that identifies the source of the IP packet and is typically associated with the interface or network adapter on the sending device through which the packet is transmitted. This address helps routers and other network devices determine the origin of the packet and where replies should be sent.

---

## Question 51

Which term describes a field in the IPv4 packet header that contains a unicast, multicast, or broadcast address?

- [x] **destination IPv4 address**
- [ ] protocol
- [ ] TTL
- [ ] header checksum

> [!NOTE]
> **Explanation:** Explanation & Hint:
The term that describes a field in the IPv4 packet header that contains a unicast, multicast, or broadcast address is the “destination IPv4 address.” The destination IPv4 address specifies where the packet should be delivered to in the network. It can be set to a unicast address for point-to-point communication, a multicast address for delivery to a group of recipients, or a broadcast address for delivery to all devices on the local network segment. The destination address plays a crucial role in determining how the packet is routed and delivered in the network.

---

## Question 52

Which term describes a field in the IPv4 packet header used to limit the lifetime of a packet?

- [x] **TTL**
- [ ] source IPv4 address
- [ ] protocol
- [ ] header checksum

> [!NOTE]
> **Explanation:** Explanation & Hint:
The term that describes a field in the IPv4 packet header used to limit the lifetime of a packet is “TTL,” which stands for “Time to Live.” The TTL field is an 8-bit value in the IPv4 header that represents the maximum number of hops (routers) that a packet can traverse before it is discarded. TTL helps prevent packets from circulating endlessly in the network and is primarily used for network stability and loop prevention. As each router processes the packet, it decrements the TTL value by one, and if the TTL reaches zero, the packet is dropped. This field ensures that packets do not endlessly loop through the network and helps in their efficient delivery.

---

## Question 53

Which term describes a field in the IPv4 packet header that contains a 4-bit binary value set to 0100?

- [x] **version**
- [ ] source IPv4 address
- [ ] protocol
- [ ] TTL

> [!NOTE]
> **Explanation:** Explanation & Hint:
The term that describes a field in the IPv4 packet header that contains a 4-bit binary value set to 0100 is “version.” The “version” field in the IPv4 header is a 4-bit field that indicates the version of the Internet Protocol being used, and in the case of IPv4, it’s set to 0100, which represents version 4. This field helps routers and devices understand which IP protocol version is being used in the packet.

---

## Question 54

Which term describes a field in the IPv4 packet header used to identify the next level protocol?

- [x] **protocol**
- [ ] version
- [ ] differentiated services
- [ ] header checksum

> [!NOTE]
> **Explanation:** Explanation & Hint:
The term that describes a field in the IPv4 packet header used to identify the next-level protocol is “protocol.” In the IPv4 header, the “Protocol” field is an 8-bit field that specifies the protocol used in the data portion of the packet, indicating which higher-level protocol is being carried within the IP packet. Common values for this field include 6 for TCP (Transmission Control Protocol) and 17 for UDP (User Datagram Protocol), among others.

---

## Question 55

Which term describes a field in the IPv4 packet header that contains a 4-bit binary value set to 0100?

- [x] **version**
- [ ] differentiated services
- [ ] header checksum
- [ ] TTL

> [!NOTE]
> **Explanation:** Explanation & Hint:
The term that describes a field in the IPv4 packet header that contains a 4-bit binary value set to 0100 is “version.” The “version” field in the IPv4 header is a 4-bit field that indicates the version of the Internet Protocol being used, and in the case of IPv4, it’s set to 0100, which represents version 4. This field helps routers and devices understand which IP protocol version is being used in the packet.

---

## Question 56

What property of ARP causes cached IP-to-MAC mappings to remain in memory longer?

- [x] **Entries in an ARP table are time-stamped and are purged after the timeout expires.**
- [ ] A static IP-to-MAC address entry can be entered manually into an ARP table.
- [ ] The type field 0x806 appears in the header of the Ethernet frame.
- [ ] The port-to-MAC address table on a switch has the same entries as the ARP table on the switch.

> [!NOTE]
> **Explanation:** Explanation & Hint:
Entries in an ARP (Address Resolution Protocol) table are time-stamped, and they are indeed purged after the timeout expires. ARP cache entries are dynamic and have a limited lifetime, typically set to a specific timeout value. When the timeout for a specific entry expires, it is removed from the ARP table to ensure that the table remains up-to-date. Thank you for the clarification.

---

## Question 57

What property of ARP allows MAC addresses of frequently used servers to be fixed in the ARP table?

- [x] **A static IP-to-MAC address entry can be entered manually into an ARP table.**
- [ ] Entries in an ARP table are time-stamped and are purged after the timeout expires.
- [ ] The type field 0x806 appears in the header of the Ethernet frame.
- [ ] The port-to-MAC address table on a switch has the same entries as the ARP table on the switch.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The property of ARP (Address Resolution Protocol) that allows MAC addresses of frequently used servers to be fixed in the ARP table is:
“A static IP-to-MAC address entry can be entered manually into an ARP table.”

By manually configuring static entries in the ARP table, you can ensure that the MAC addresses of frequently used servers remain fixed in the table and do not get purged due to the normal dynamic entry timeout. This is a common practice in network management to maintain stability for specific devices.

---

## Question 58

What property of ARP allows MAC addresses of frequently used servers to be fixed in the ARP table?

- [x] **A static IP-to-MAC address entry can be entered manually into an ARP table.**
- [ ] The destination MAC address ff-ff-ff-ff-ff-ff appears in the header of the Ethernet frame.
- [ ] The source MAC address appears in the header of the Ethernet frame.
- [ ] The port-to-MAC address table on a switch has the same entries as the ARP table on the switch.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The property of ARP (Address Resolution Protocol) that allows MAC addresses of frequently used servers to be fixed in the ARP table is:
“A static IP-to-MAC address entry can be entered manually into an ARP table.”

By manually configuring static entries in the ARP table, you can ensure that the MAC addresses of frequently used servers remain fixed in the table and do not get replaced or purged due to the normal dynamic entry aging and timeout. This is a way to maintain stable and predictable mappings for specific devices in the ARP cache.

---

## Question 59

What property of ARP allows hosts on a LAN to send traffic to remote networks?

- [x] **Local hosts learn the MAC address of the default gateway.**
- [ ] The destination MAC address ff-ff-ff-ff-ff-ff appears in the header of the Ethernet frame.
- [ ] The source MAC address appears in the header of the Ethernet frame.
- [ ] The port-to-MAC address table on a switch has the same entries as the ARP table on the switch.

> [!NOTE]
> **Explanation:** Explanation & Hint:
Local hosts learn the MAC address of the default gateway.

This is the correct answer. ARP enables a host on a local network to discover the MAC address of the default gateway (usually a router), which is necessary to route traffic to a remote network. When a host sends a packet to a destination outside its local network, it uses ARP to find the MAC address of the default gateway. The packet is then sent to this MAC address, and the gateway routes it towards the remote network.
The destination MAC address ff-ff-ff-ff-ff-ff appears in the header of the Ethernet frame.

This is incorrect in the context of ARP’s role in sending traffic to remote networks. The MAC address ff-ff-ff-ff-ff-ff is a broadcast address used in ARP requests within a local network, particularly when a device is trying to discover the MAC address associated with an IP address. This broadcast address is not used for sending traffic to remote networks.
The source MAC address appears in the header of the Ethernet frame.

While this statement is true, it’s not specific to ARP’s functionality for remote network communication. The source MAC address is part of the Ethernet frame and is used to identify the sending device on the local network. This information is important in all Ethernet communications, not just in the context of ARP or communicating with remote networks.
The port-to-MAC address table on a switch has the same entries as the ARP table on the switch.

This statement is incorrect. The port-to-MAC address table (also known as the MAC address table) on a switch maps MAC addresses to switch ports, helping the switch efficiently forward frames within the local network. On the other hand, the ARP table maps IP addresses to MAC addresses. These tables serve different purposes and contain different types of information. Additionally, switches typically do not maintain ARP tables as this is a function of devices that use IP addressing, like routers and hosts.

---

## Question 60

What property of ARP allows hosts on a LAN to send traffic to remote networks?

- [x] **Local hosts learn the MAC address of the default gateway.**
- [ ] The destination MAC address ff-ff-ff-ff-ff-ff appears in the header of the Ethernet frame.
- [ ] The source MAC address appears in the header of the Ethernet frame.
- [ ] ARP replies are broadcast on the network when a host receives an ARP request.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The property of ARP (Address Resolution Protocol) that allows hosts on a LAN to send traffic to remote networks is:
“Local hosts learn the MAC address of the default gateway.”

When a host on a local network wants to communicate with devices on remote networks, it needs to know the MAC address of its default gateway (typically a router). The local hosts learn the MAC address of the default gateway through ARP. They use the ARP protocol to resolve the IP address of the default gateway to its corresponding MAC address. Once they have this MAC address, they can encapsulate their data in Ethernet frames and send it to the default gateway, which is responsible for routing the traffic to remote networks.

---

## Question 61

What property of ARP forces all Ethernet NICs to process an ARP request?

- [x] **The destination MAC address ff-ff-ff-ff-ff-ff appears in the header of the Ethernet frame.**
- [ ] The source MAC address appears in the header of the Ethernet frame.
- [ ] The type field 0x806 appears in the header of the Ethernet frame.
- [ ] ARP replies are broadcast on the network when a host receives an ARP request.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The property of ARP (Address Resolution Protocol) that forces all Ethernet NICs to process an ARP request is:
“The destination MAC address ff-ff-ff-ff-ff-ff appears in the header of the Ethernet frame.”

When an ARP request is sent, it is broadcast with a destination MAC address of ff-ff-ff-ff-ff-ff, which is a broadcast address. This means that the frame will be received and processed by all NICs on the local network segment, forcing each NIC to check whether the ARP request is relevant to it. NICs compare the target IP address in the ARP request to their own IP address, and the one that matches responds with an ARP reply. This is how ARP works to resolve IP addresses to MAC addresses on a local network.

---

## Question 62

What property of ARP causes a reply only to the source sending an ARP request?

- [x] **The source MAC address appears in the header of the Ethernet frame.**
- [ ] The destination MAC address ff-ff-ff-ff-ff-ff appears in the header of the Ethernet frame.
- [ ] The type field 0x806 appears in the header of the Ethernet frame.
- [ ] ARP replies are broadcast on the network when a host receives an ARP request.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The property of ARP (Address Resolution Protocol) that causes a reply only to be sent to the source sending an ARP request is:
“The source MAC address appears in the header of the Ethernet frame.”

When a host sends an ARP request to resolve an IP address to a MAC address, it includes its own MAC address in the source MAC address field of the Ethernet frame. The host that receives the ARP request and has the matching IP address in its ARP table responds with an ARP reply, and it puts its own MAC address in the source MAC address field of the reply frame. This allows the requesting host to associate the IP address with the correct MAC address and update its ARP cache. The ARP reply is unicast and sent directly back to the source that made the ARP request.

---

## Question 63

What property of ARP causes the request to be flooded out all ports of a switch except for the port receiving the ARP request?

- [x] **The destination MAC address ff-ff-ff-ff-ff-ff appears in the header of the Ethernet frame.**
- [ ] The type field 0x806 appears in the header of the Ethernet frame.
- [ ] Entries in an ARP table are time-stamped and are purged after the timeout expires.
- [ ] ARP replies are broadcast on the network when a host receives an ARP request.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The property of ARP (Address Resolution Protocol) that causes the ARP request to be flooded out all ports of a switch except for the port receiving the ARP request is:
“The destination MAC address ff-ff-ff-ff-ff-ff appears in the header of the Ethernet frame.”

In an ARP request, the destination MAC address is set to the broadcast address ff-ff-ff-ff-ff-ff. When the switch receives a frame with a broadcast MAC address, it floods the frame out to all ports except for the port from which the frame was received. This behavior ensures that all devices on the local network segment have the opportunity to process the ARP request and respond if necessary, as ARP requests are used to resolve IP addresses to MAC addresses and discover the MAC addresses of devices on the local network.

---

## Question 64

What property of ARP causes the NICs receiving an ARP request to pass the data portion of the Ethernet frame to the ARP process?

- [x] **The type field 0x806 appears in the header of the Ethernet frame.**
- [ ] The destination MAC address ff-ff-ff-ff-ff-ff appears in the header of the Ethernet frame.
- [ ] Entries in an ARP table are time-stamped and are purged after the timeout expires.
- [ ] ARP replies are broadcast on the network when a host receives an ARP request.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The property of ARP (Address Resolution Protocol) that causes the NICs receiving an ARP request to pass the data portion of the Ethernet frame to the ARP process is:
“The type field 0x806 appears in the header of the Ethernet frame.”

The Ethernet frame type field indicates the protocol being used within the data portion of the frame. In the case of ARP, the type field is set to 0x806, which signifies that the frame contains ARP information. When a NIC receives an Ethernet frame with this type field, it recognizes that the frame contains ARP data and forwards it to the ARP process to handle the ARP request. This allows the NIC to pass the ARP request to the appropriate software layer for processing and resolution of IP addresses to MAC addresses.

---

## Question 65

What property of ARP causes the NICs receiving an ARP request to pass the data portion of the Ethernet frame to the ARP process?

- [x] **The type field 0x806 appears in the header of the Ethernet frame.**
- [ ] The destination MAC address ff-ff-ff-ff-ff-ff appears in the header of the Ethernet frame.
- [ ] Entries in an ARP table are time-stamped and are purged after the timeout expires.
- [ ] The port-to-MAC address table on a switch has the same entries as the ARP table on the switch.

> [!NOTE]
> **Explanation:** Explanation & Hint:
The property of ARP (Address Resolution Protocol) that causes the NICs receiving an ARP request to pass the data portion of the Ethernet frame to the ARP process is:
“The type field 0x806 appears in the header of the Ethernet frame.”

The Ethernet frame type field, with a value of 0x806, indicates that the frame contains ARP information. When NICs receive an Ethernet frame with this specific type field, they recognize that the frame contains ARP data and forward it to the ARP process to handle the ARP request. This allows the NIC to pass the ARP request to the appropriate software layer for processing and resolution of IP addresses to MAC addresses.

---

## Question 66

Main(config)# interface gi0/1 
Main(config-if)# description Connects to the Service LAN 
Main(config-if)# ip address 172.29.157.156 255.255.255.0 
Main(config-if)# no shutdown 
Main(config-if)# interface gi0/0 
Main(config-if)# description Connects to the Engineering LAN 
Main(config-if)# ip address 172.29.156.36 255.255.255.0 
Main(config-if)# no shutdown 
Main(config-if)# interface s0/0/0 
Main(config-if)# description Connects to the ISP 
Main(config-if)# ip address 10.156.157.254 255.255.255.0 
Main(config-if)# no shutdown 
Main(config-if)# interface s0/0/1 
Main(config-if)# description Connects to the Head Office WAN 
Main(config-if)# ip address 198.51.100.177 255.255.255.0 
Main(config-if)# no shutdown 
Main(config-if)# end

Refer to the exhibit. A network administrator is connecting a new host to the Service LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?

- [x] **172.29.157.156**
- [ ] 172.29.157.1
- [ ] 10.156.157.254
- [ ] 198.51.100.177
- [ ] 172.29.156.36

> [!NOTE]
> **Explanation:** Explanation & Hint:
In the given configuration, the router interface “gi0/1” is connected to the Service LAN with the IP address 172.29.157.156. This router interface serves as the gateway for hosts in the Service LAN.
So, the IP address that would be configured as the default gateway on the new host in the Service LAN is 172.29.157.156. This IP address is the one assigned to the router’s interface connected to the Service LAN, and it would be used as the default gateway for hosts in that LAN to communicate with remote networks.

---

## Question 67

BldgA(config)# interface gi0/1 
BldgA(config-if)# description Connects to the Medical LAN 
BldgA(config-if)# ip address 192.168.191.189 255.255.255.0 
BldgA(config-if)# no shutdown 
BldgA(config-if)# interface gi0/0 
BldgA(config-if)# description Connects to the Client LAN 
BldgA(config-if)# ip address 192.168.190.70 255.255.255.0 
BldgA(config-if)# no shutdown 
BldgA(config-if)# interface s0/0/0 
BldgA(config-if)# description Connects to the ISP 
BldgA(config-if)# ip address 10.190.191.254 255.255.255.0 
BldgA(config-if)# no shutdown 
BldgA(config-if)# interface s0/0/1 
BldgA(config-if)# description Connects to the Head Office WAN 
BldgA(config-if)# ip address 198.51.100.213 255.255.255.0 
BldgA(config-if)# no shutdown 
BldgA(config-if)# end

Refer to the exhibit. A network administrator is connecting a new host to the Medical LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?

- [x] **192.168.191.189**
- [ ] 192.168.191.1
- [ ] 10.190.191.254
- [ ] 198.51.100.213
- [ ] 192.168.190.70

> [!NOTE]
> **Explanation:** Explanation & Hint:
In the given configuration, the router interface “gi0/1” is connected to the Medical LAN with the IP address 192.168.191.189. This router interface serves as the gateway for hosts in the Medical LAN.
So, the IP address that would be configured as the default gateway on the new host in the Medical LAN is 192.168.191.189. This IP address is the one assigned to the router’s interface connected to the Medical LAN, and it would be used as the default gateway for hosts in that LAN to communicate with remote networks.

---

## Question 68

Floor(config)# interface gi0/1 
Floor(config-if)# description Connects to the Registrar LAN 
Floor(config-if)# ip address 192.168.225.223 255.255.255.0 
Floor(config-if)# no shutdown 
Floor(config-if)# interface gi0/0 
Floor(config-if)# description Connects to the Manager LAN 
Floor(config-if)# ip address 192.168.224.103 255.255.255.0 
Floor(config-if)# no shutdown 
Floor(config-if)# interface s0/0/0 
Floor(config-if)# description Connects to the ISP 
Floor(config-if)# ip address 10.224.225.254 255.255.255.0 
Floor(config-if)# no shutdown 
Floor(config-if)# interface s0/0/1 
Floor(config-if)# description Connects to the Head Office WAN 
Floor(config-if)# ip address 203.0.113.246 255.255.255.0 
Floor(config-if)# no shutdown 
Floor(config-if)# end

Refer to the exhibit. A network administrator is connecting a new host to the Registrar LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?

- [x] **192.168.225.223**
- [ ] 192.168.225.1
- [ ] 10.224.225.254
- [ ] 203.0.113.246
- [ ] 192.168.224.103

> [!NOTE]
> **Explanation:** Explanation & Hint:
In the given configuration, the router interface “gi0/1” is connected to the Registrar LAN with the IP address 192.168.225.223. This router interface serves as the gateway for hosts in the Registrar LAN.
So, the IP address that would be configured as the default gateway on the new host in the Registrar LAN is 192.168.225.223. This IP address is the one assigned to the router’s interface connected to the Registrar LAN, and it would be used as the default gateway for hosts in that LAN to communicate with remote networks.

---

## Question 69

Floor(config)# interface gi0/1 
Floor(config-if)# description Connects to the Registrar LAN 
Floor(config-if)# ip address 10.118.63.65 255.255.255.0 
Floor(config-if)# no shutdown 
Floor(config-if)# interface gi0/0 
Floor(config-if)# description Connects to the Manager LAN 
Floor(config-if)# ip address 10.118.62.196 255.255.255.0 
Floor(config-if)# no shutdown 
Floor(config-if)# interface s0/0/0 
Floor(config-if)# description Connects to the ISP 
Floor(config-if)# ip address 10.62.63.254 255.255.255.0 
Floor(config-if)# no shutdown 
Floor(config-if)# interface s0/0/1 
Floor(config-if)# description Connects to the Head Office WAN 
Floor(config-if)# ip address 209.165.200.87 255.255.255.0 
Floor(config-if)# no shutdown 
Floor(config-if)# end

Refer to the exhibit. A network administrator is connecting a new host to the Manager LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?

- [x] **10.118.62.196**
- [ ] 10.118.62.1
- [ ] 10.62.63.254
- [ ] 209.165.200.87
- [ ] 10.118.63.65

> [!NOTE]
> **Explanation:** Explanation & Hint:
In the given configuration, the router interface “gi0/0” is connected to the Manager LAN with the IP address 10.118.62.196. This router interface serves as the gateway for hosts in the Manager LAN.
So, the IP address that would be configured as the default gateway on the new host in the Manager LAN is 10.118.62.196. This IP address is the one assigned to the router’s interface connected to the Manager LAN, and it would be used as the default gateway for hosts in that LAN to communicate with remote networks.

---

## Question 70

HQ(config)# interface gi0/1 
HQ(config-if)# description Connects to the Branch LAN 
HQ(config-if)# ip address 172.19.99.99 255.255.255.0 
HQ(config-if)# no shutdown 
HQ(config-if)# interface gi0/0 
HQ(config-if)# description Connects to the Store LAN 
HQ(config-if)# ip address 172.19.98.230 255.255.255.0 
HQ(config-if)# no shutdown 
HQ(config-if)# interface s0/0/0 
HQ(config-if)# description Connects to the ISP 
HQ(config-if)# ip address 10.98.99.254 255.255.255.0 
HQ(config-if)# no shutdown 
HQ(config-if)# interface s0/0/1 
HQ(config-if)# description Connects to the Head Office WAN 
HQ(config-if)# ip address 209.165.200.120 255.255.255.0 
HQ(config-if)# no shutdown 
HQ(config-if)# end

Refer to the exhibit. A network administrator is connecting a new host to the Store LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?

- [x] **172.19.98.230**
- [ ] 172.19.98.1
- [ ] 10.98.99.254
- [ ] 209.165.200.120
- [ ] 172.19.99.99

> [!NOTE]
> **Explanation:** Explanation & Hint:
In the given configuration, the router interface “gi0/0” is connected to the Store LAN with the IP address 172.19.98.230. This router interface serves as the gateway for hosts in the Store LAN.
So, the IP address that would be configured as the default gateway on the new host in the Store LAN is 172.19.98.230. This IP address is the one assigned to the router’s interface connected to the Store LAN and would be used as the default gateway for hosts in that LAN to communicate with remote networks.

---

## Question 71

HQ(config)# interface gi0/1 
HQ(config-if)# description Connects to the Branch LAN 
HQ(config-if)# ip address 172.20.133.132 255.255.255.0 
HQ(config-if)# no shutdown 
HQ(config-if)# interface gi0/0 
HQ(config-if)# description Connects to the Store LAN 
HQ(config-if)# ip address 172.20.132.13 255.255.255.0 
HQ(config-if)# no shutdown 
HQ(config-if)# interface s0/0/0 
HQ(config-if)# description Connects to the ISP 
HQ(config-if)# ip address 10.132.133.254 255.255.255.0 
HQ(config-if)# no shutdown 
HQ(config-if)# interface s0/0/1 
HQ(config-if)# description Connects to the Head Office WAN 
HQ(config-if)# ip address 198.51.100.156 255.255.255.0 
HQ(config-if)# no shutdown 
HQ(config-if)# end

Refer to the exhibit. A network administrator is connecting a new host to the Store LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?

- [x] **172.20.132.13**
- [ ] 172.20.132.1
- [ ] 10.132.133.254
- [ ] 198.51.100.156
- [ ] 172.20.133.132

> [!NOTE]
> **Explanation:** Explanation & Hint:
In the given configuration, the router interface “gi0/0” is connected to the Store LAN with the IP address 172.20.132.13. This router interface serves as the gateway for hosts in the Store LAN.
So, the IP address that would be configured as the default gateway on the new host in the Store LAN is 172.20.132.13. This IP address is the one assigned to the router’s interface connected to the Store LAN and would be used as the default gateway for hosts in that LAN to communicate with remote networks.

---

## Question 72

Main(config)# interface gi0/1 
Main(config-if)# description Connects to the Service LAN 
Main(config-if)# ip address 192.168.167.166 255.255.255.0 
Main(config-if)# no shutdown 
Main(config-if)# interface gi0/0 
Main(config-if)# description Connects to the Engineering LAN 
Main(config-if)# ip address 192.168.166.46 255.255.255.0 
Main(config-if)# no shutdown 
Main(config-if)# interface s0/0/0 
Main(config-if)# description Connects to the ISP 
Main(config-if)# ip address 10.166.167.254 255.255.255.0 
Main(config-if)# no shutdown 
Main(config-if)# interface s0/0/1 
Main(config-if)# description Connects to the Head Office WAN 
Main(config-if)# ip address 198.51.100.189 255.255.255.0 
Main(config-if)# no shutdown 
Main(config-if)# end

Refer to the exhibit. A network administrator is connecting a new host to the Service LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?

- [x] **192.168.167.166**
- [ ] 192.168.167.1
- [ ] 10.166.167.254
- [ ] 198.51.100.189
- [ ] 192.168.166.46

> [!NOTE]
> **Explanation:** Explanation & Hint:
In the given configuration, the router interface “gi0/1” is connected to the Service LAN with the IP address 192.168.167.166. This router interface serves as the gateway for hosts in the Service LAN.
So, the IP address that would be configured as the default gateway on the new host in the Service LAN is 192.168.167.166. This IP address is the one assigned to the router’s interface connected to the Service LAN and would be used as the default gateway for hosts in that LAN to communicate with remote networks.

---

## Question 73

BldgA(config)# interface gi0/1 
BldgA(config-if)# description Connects to the Medical LAN 
BldgA(config-if)# ip address 192.168.201.200 255.255.255.0 
BldgA(config-if)# no shutdown 
BldgA(config-if)# interface gi0/0 
BldgA(config-if)# description Connects to the Client LAN 
BldgA(config-if)# ip address 192.168.200.80 255.255.255.0 
BldgA(config-if)# no shutdown 
BldgA(config-if)# interface s0/0/0 
BldgA(config-if)# description Connects to the ISP 
BldgA(config-if)# ip address 10.200.201.254 255.255.255.0 
BldgA(config-if)# no shutdown 
BldgA(config-if)# interface s0/0/1 
BldgA(config-if)# description Connects to the Head Office WAN 
BldgA(config-if)# ip address 203.0.113.222 255.255.255.0 
BldgA(config-if)# no shutdown 
BldgA(config-if)# end

Refer to the exhibit. A network administrator is connecting a new host to the Medical LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?

- [x] **192.168.201.200**
- [ ] 192.168.201.1
- [ ] 10.200.201.254
- [ ] 203.0.113.222
- [ ] 192.168.200.80

> [!NOTE]
> **Explanation:** Explanation & Hint:
In the given configuration, the router interface “gi0/1” is connected to the Medical LAN with the IP address 192.168.201.200. This router interface serves as the gateway for hosts in the Medical LAN.
So, the IP address that would be configured as the default gateway on the new host in the Medical LAN is 192.168.201.200. This IP address is the one assigned to the router’s interface connected to the Medical LAN and would be used as the default gateway for hosts in that LAN to communicate with remote networks.

---

## Question 74

Floor(config)# interface gi0/1 
Floor(config-if)# description Connects to the Registrar LAN 
Floor(config-if)# ip address 192.168.235.234 255.255.255.0 
Floor(config-if)# no shutdown 
Floor(config-if)# interface gi0/0 
Floor(config-if)# description Connects to the Manager LAN 
Floor(config-if)# ip address 192.168.234.114 255.255.255.0 
Floor(config-if)# no shutdown 
Floor(config-if)# interface s0/0/0 
Floor(config-if)# description Connects to the ISP 
Floor(config-if)# ip address 10.234.235.254 255.255.255.0 
Floor(config-if)# no shutdown 
Floor(config-if)# interface s0/0/1 
Floor(config-if)# description Connects to the Head Office WAN 
Floor(config-if)# ip address 203.0.113.3 255.255.255.0 
Floor(config-if)# no shutdown 
Floor(config-if)# end

Refer to the exhibit. A network administrator is connecting a new host to the Registrar LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?

- [x] **192.168.235.234**
- [ ] 192.168.235.1
- [ ] 10.234.235.254
- [ ] 203.0.113.3
- [ ] 192.168.234.114

> [!NOTE]
> **Explanation:** Explanation & Hint:
In the given configuration, the router interface “gi0/1” is connected to the Registrar LAN with the IP address 192.168.235.234. This router interface serves as the gateway for hosts in the Registrar LAN.
So, the IP address that would be configured as the default gateway on the new host in the Registrar LAN is 192.168.235.234. This IP address is the one assigned to the router’s interface connected to the Registrar LAN, and it would be used as the default gateway for hosts in that LAN to communicate with remote networks.

---

## Question 75

RTR1(config)# interface gi0/1 
RTR1(config-if)# description Connects to the Marketing LAN 
RTR1(config-if)# ip address 10.27.15.17 255.255.255.0 
RTR1(config-if)# no shutdown 
RTR1(config-if)# interface gi0/0 
RTR1(config-if)# description Connects to the Payroll LAN 
RTR1(config-if)# ip address 10.27.14.148 255.255.255.0 
RTR1(config-if)# no shutdown 
RTR1(config-if)# interface s0/0/0 
RTR1(config-if)# description Connects to the ISP 
RTR1(config-if)# ip address 10.14.15.254 255.255.255.0 
RTR1(config-if)# no shutdown 
RTR1(config-if)# interface s0/0/1 
RTR1(config-if)# description Connects to the Head Office WAN 
RTR1(config-if)# ip address 203.0.113.39 255.255.255.0 
RTR1(config-if)# no shutdown 
RTR1(config-if)# end

Refer to the exhibit. A network administrator is connecting a new host to the Payroll LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?

- [x] **10.27.14.148**
- [ ] 10.27.14.1
- [ ] 10.14.15.254
- [ ] 203.0.113.39
- [ ] 10.27.15.17

> [!NOTE]
> **Explanation:** Explanation & Hint:
In the given configuration, the router interface “gi0/0” is connected to the Payroll LAN with the IP address 10.27.14.148. This router interface serves as the gateway for hosts in the Payroll LAN.
So, the IP address that would be configured as the default gateway on the new host in the Payroll LAN is 10.27.14.148. This IP address is the one assigned to the router’s interface connected to the Payroll LAN and would be used as the default gateway for hosts in that LAN to communicate with remote networks.

---

