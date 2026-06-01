# Checkpoint Exam: IP Addressing Exam Answers 2026 Full 100%

Source: [https://infraexam.com/ccna1-v7/ccna1-v7-itnv7-modules-11-13-ip-addressing-exam-answers/](https://infraexam.com/ccna1-v7/ccna1-v7-itnv7-modules-11-13-ip-addressing-exam-answers/)

Total Questions: 83

---

## Question 1

An administrator wants to create four subnetworks from the network address 192.168.1.0/24. What is the network address and subnet mask of the second useable subnet?

- [x] **subnetwork 192.168.1.64 subnet mask 255.255.255.192**
- [ ] subnetwork 192.168.1.32 subnet mask 255.255.255.240
- [ ] subnetwork 192.168.1.64 subnet mask 255.255.255.240
- [ ] subnetwork 192.168.1.128 subnet mask 255.255.255.192
- [ ] subnetwork 192.168.1.8 subnet mask 255.255.255.224

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The number of bits that are borrowed would be two, thus giving a total of 4 useable subnets:
192.168.1.0

192.168.1.64

192.168.1.128

192.168.1.192

Because 2 bits are borrowed, the new subnet mask would be /26 or 255.255.255.192

---

## Question 2

How many bits must be borrowed from the host portion of an address to accommodate a router with five connected networks?

- [ ] two
- [x] **three**
- [ ] four
- [ ] five

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Each network that is directly connected to an interface on a router requires its own subnet. The formula 2 n , where n is the number of bits borrowed, is used to calculate the available number of subnets when borrowing a specific number of bits.

---

## Question 3

How many host addresses are available on the 192.168.10.128/26 network?

- [ ] 30
- [ ] 32
- [ ] 60
- [x] **62**
- [ ] 64

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
A /26 prefix gives 6 host bits, which provides a total of 64 addresses, because 2 6 = 64. Subtracting the network and broadcast addresses leaves 62 usable host addresses.

---

## Question 4

Match the subnetwork to a host address that would be included within the subnetwork.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-11-13-Checkpoint-Exam-IP-Addressing-Exam-Answers-001.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-11-13-Checkpoint-Exam-IP-Addressing-Exam-Answers-001-1024x341.png)

- [x] **192.168.1.32/27 ==> 192.168.1.48**
- [x] **192.168.1.64/27 ==> 192.168.1.68**
- [x] **192.168.1.96/27 ==> 192.168.1.121**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Subnet 192.168.1.32/27 will have a valid host range from 192.168.1.33 – 192.168.1.62 with the broadcast address as 192.168.1.63

Subnet 192.168.1.64/27 will have a valid host range from 192.168.1.65 – 192.168.1.94 with the broadcast address as 192.168.1.95

Subnet 192.168.1.96/27 will have a valid host range from 192.168.1.97 – 192.168.1.126 with the broadcast address as 192.168.1.127

---

## Question 5

How many host addresses are available on the network 172.16.128.0 with a subnet mask of 255.255.252.0?

- [ ] 510
- [ ] 512
- [x] **1022**
- [ ] 1024
- [ ] 2046
- [ ] 2048

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
A mask of 255.255.252.0 is equal to a prefix of /22. A /22 prefix provides 22 bits for the network portion and leaves 10 bits for the host portion. The 10 bits in the host portion will provide 1022 usable IP addresses (2 10 – 2 = 1022).

---

## Question 6

Match each IPv4 address to the appropriate address category.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-11-13-Checkpoint-Exam-IP-Addressing-Exam-Answers-002.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-11-13-Checkpoint-Exam-IP-Addressing-Exam-Answers-002-1024x862.png)

- [x] **192.168.100.161/25 ==> host address (First)**
- [x] **192.168.1.191/26 ==> broadcast address (Second)**
- [x] **10.10.10.128/25 ==> network address (Second)**
- [x] **203.0.113.100/24 ==> host address (Second)**
- [x] **172.110.12.64/28 ==> network address (First)**
- [x] **10.0.0.159/27 ==> broadcast address (First)**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
To determine whether a given IPv4 address is a network, host, or broadcast address, first determine the address space based on the subnet mask. Convert the address and mask to binary values, then perform the ANDing function to determine the network address. To calculate the of the address space, use the number of host bits in the subnet mask as an exponent of 2. The number of valid host addresses in the space is that number minus 2. The network address will have all zeroes in the host portion, and the broadcast address will have all ones. For example, 10.0.50.10/30 yields a network IP address of 10.0.50.8 when the mask is ANDed with the given address. Because there are only 2 host bits in the mask, there are only 2 valid host addresses (4-2). 10.0.50.10 is one of the two valid host IP addresses.

---

## Question 7

What three blocks of addresses are defined by RFC 1918 for private network use? (Choose three.)

- [x] **10.0.0.0/8**
- [x] **172.16.0.0/12**
- [x] **192.168.0.0/16**
- [ ] 100.64.0.0/14
- [ ] 169.254.0.0/16
- [ ] 239.0.0.0/8

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
RFC 1918, Address Allocation for Private Internets, defines three blocks of IPv4 address for private networks that should not be routable on the public Internet.10.0.0.0/8

172.16.0.0/12

192.168.0.0/16

---

## Question 8

Refer to the exhibit. An administrator must send a message to everyone on the router A network. What is the broadcast address for network 172.16.16.0/22?

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/CCNA1-v7-ITNv7-Modules-11-13-IP-Addressing-Exam-Answers-03.png)

- [ ] 172.16.16.255
- [ ] 172.16.20.255
- [x] **172.16.19.255**
- [ ] 172.16.23.255
- [ ] 172.16.255.255

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The 172.16.16.0/22 network has 22 bits in the network portion and 10 bits in the host portion. Converting the network address to binary yields a subnet mask of 255.255.252.0. The range of addresses in this network will end with the last address available before 172.16.20.0. Valid host addresses for this network range from 172.16.16.1-172.16.19.254, making 172.16.19.255 the broadcast address.

---

## Question 9

A site administrator has been told that a particular network at the site must accommodate 126 hosts. Which subnet mask would be used that contains the required number of host bits?

- [ ] 255.255.255.0
- [x] **255.255.255.128**
- [ ] 255.255.255.224
- [ ] 255.255.255.240

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The subnet mask of 255.255.255.0 has 8 host bits. The mask of 255.255.255.128 results in 7 host bits. The mask of 255.255.255.224 has 5 host bits. Finally, 255.255.255.240 represents 4 host bits.

---

## Question 10

Refer to the exhibit. Considering the addresses already used and having to remain within the 10.16.10.0/24 network range, which subnet address could be assigned to the network containing 25 hosts?

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/CCNA1-v7-ITNv7-Modules-11-13-IP-Addressing-Exam-Answers-04.png)

- [ ] 10.16.10.160/26
- [ ] 10.16.10.128/28
- [x] **10.16.10.64/27**
- [ ] 10.16.10.224/26
- [ ] 10.16.10.240/27
- [ ] 10.16.10.240/28

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Addresses 10.16.10.0 through 10.16.10.63 are taken for the leftmost network. Addresses 10.16.10.192 through 10.16.10.207 are used by the center network.The address space from 208-255 assumes a /28 mask, which does not allow enough host bits to accommodate 25 host addresses.The address ranges that are available include 10.16.10.64/26 and10.16.10.128/26. To accommodate 25 hosts, 5 host bits are needed, so a /27 mask is necessary. Four possible /27 subnets could be created from the available addresses between 10.16.10.64 and 10.16.10.191:

10.16.10.64/27

10.16.10.96/27

10.16.10.128/27

10.16.10.160/27

---

## Question 11

What is the usable number of host IP addresses on a network that has a /26 mask?

- [ ] 256
- [ ] 254
- [ ] 64
- [x] **62**
- [ ] 32
- [ ] 16

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
A /26 mask is the same as 255.255.255.192. The mask leaves 6 host bits. With 6 host bits, 64 IP addresses are possible. One address represents the subnet number and one address represents the broadcast address, which means that 62 addresses can then be used to assign to network devices.

---

## Question 12

Which address prefix range is reserved for IPv4 multicast?

- [ ] 240.0.0.0 – 254.255.255.255
- [x] **224.0.0.0 – 239.255.255.255**
- [ ] 169.254.0.0 – 169.254.255.255
- [ ] 127.0.0.0 – 127.255.255.255

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Multicast IPv4 addresses use the reserved class D address range of 224.0.0.0 to 239.255.255.255.

---

## Question 13

Refer to the exhibit. Match the network with the correct IP address and prefix that will satisfy the usable host addressing requirements for each network.

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/CCNA1-v7-ITNv7-Modules-11-13-IP-Addressing-Exam-Answers-05-1.jpg)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-11-13-Checkpoint-Exam-IP-Addressing-Exam-Answers-003.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-11-13-Checkpoint-Exam-IP-Addressing-Exam-Answers-003-1024x447.png)

- [x] **Network A ==> 192.168.0.128 /25**
- [x] **Network B ==> 192.168.0.0 /26**
- [x] **Network C ==> 192.168.0.96 /27**
- [x] **Network D ==> 192.168.0.80 /30**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Network A needs to use 192.168.0.128 /25, which yields 128 host addresses.

Network B needs to use 192.168.0.0 /26, which yields 64 host addresses.

Network C needs to use 192.168.0.96 /27, which yields 32 host addresses.

Network D needs to use 192.168.0.80/30, which yields 4 host addresses.

---

## Question 14

A high school in New York (school A) is using videoconferencing technology to establish student interactions with another high school (school B) in Russia. The videoconferencing is conducted between two end devices through the Internet. The network administrator of school A configures the end device with the IP address 209.165.201.10. The administrator sends a request for the IP address for the end device in school B and the response is 192.168.25.10. Neither school is using a VPN. The administrator knows immediately that this IP will not work. Why?

- [ ] This is a loopback address.
- [ ] This is a link-local address.
- [x] **This is a private IP address.**
- [ ] There is an IP address conflict.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The IP address 192.168.25.10 is an IPv4 private address. This address will not be routed over the Internet, so school A will not be able to reach school B. Because the address is a private one, it can be used freely on an internal network. As long as no two devices on the internal network are assigned the same private IP, there is no IP conflict issue. Devices that are assigned a private IP will need to use NAT in order to communicate over the Internet.

---

## Question 15

Which three addresses are valid public addresses? (Choose three.)

- [x] **198.133.219.17**
- [ ] 192.168.1.245
- [ ] 10.15.250.5
- [x] **128.107.12.117**
- [ ] 172.31.1.25
- [x] **64.104.78.227**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The ranges of private IPv4 addresses are as folllows:

10.0.0.0 – 10.255.255.255

172.16.0.0 – 172.31.255.255

192.168.0.0 – 192.168.255.255

---

## Question 16

A message is sent to all hosts on a remote network. Which type of message is it?

- [ ] limited broadcast
- [ ] multicast
- [x] **directed broadcast**
- [ ] unicast

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
A directed broadcast is a message sent to all hosts on a specific network. It is useful for sending a broadcast to all hosts on a nonlocal network. A multicast message is a message sent to a selected group of hosts that are part of a subscribing multicast group. A limited broadcast is used for a communication that is limited to the hosts on the local network. A unicast message is a message sent from one host to another.

---

## Question 17

A company has a network address of 192.168.1.64 with a subnet mask of 255.255.255.192. The company wants to create two subnetworks that would contain 10 hosts and 18 hosts respectively. Which two networks would achieve that? (Choose two.)

- [ ] 192.168.1.16/28
- [x] **192.168.1.64/27**
- [ ] 192.168.1.128/27
- [x] **192.168.1.96/28**
- [ ] 192.168.1.192/28

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Subnet 192.168.1.64 /27 has 5 bits that are allocated for host addresses and therefore will be able to support 32 addresses, but only 30 valid host IP addresses. Subnet 192.168.1.96/28 has 4 bits for host addresses and will be able to support 16 addresses, but only 14 valid host IP addresses.

---

## Question 18

Which address is a valid IPv6 link-local unicast address?

- [ ] FEC8:1::cccc
- [ ] FD80::1:1234
- [x] **FE80::1:4545:6578:ABC1**
- [ ] FE0A::100:7788:998F
- [ ] FC90:5678:4251:cccc

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
IPv6 LLAs are in the fe80::/10 range. The /10 indicates that the first 10 bits are 1111 1110 10xx xxxx. The first hextet has a range of 1111 1110 1000 0000 (fe80) to 1111 1110 1011 1111 (febf).

---

## Question 19

Which of these addresses is the shortest abbreviation for the IP address:

- [ ] 3ccE:1044::AB::57
- [ ] 3ccE:1044::00AB::0057
- [x] **3ccE:1044:0:0:AB::57**
- [ ] 3ccE:1044:0:0:00AB::0057
- [ ] 3ccE:1044:0000:0000:00AB::57
- [ ] 3ccE:1044:0000:0000:00AB::0057

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The rules for reducing the notation of IPv6 addresses are:

1. Omit any leading 0s (zeros) in any hextet.

2. Replace any single, contiguous string of one or more 16-bit hextets consisting of all zeros with a double colon (::) .

3. The double colon (::) can only be used once within an address.

---

## Question 20

Which of these addresses is the shortest abbreviation for the IP address:

3ccE:1044:0000:0000:00AB:0000:0000:0057?

- [ ] 3ccE:1044::AB::57
- [ ] 3ccE:1044::00AB::0057
- [x] **3ccE:1044:0:0:AB::57**
- [ ] 3ccE:1044:0:0:00AB::0057
- [ ] 3ccE:1044:0000:0000:00AB::57
- [ ] 3ccE:1044:0000:0000:00AB::0057

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The rules for reducing the notation of IPv6 addresses are:

1. Omit any leading 0s (zeros) in any hextet.

2. Replace any single, contiguous string of one or more 16-bit hextets consisting of all zeros with a double colon (::) .

3. The double colon (::) can only be used once within an address.

---

## Question 21

A network administrator has received the IPv6 prefix 2001:DB8::/48 for subnetting. Assuming the administrator does not subnet into the interface ID portion of the address space, how many subnets can the administrator create from the /48 prefix?

- [ ] 16
- [ ] 256
- [ ] 4096
- [x] **65536**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
With a network prefix of 48, there will be 16 bits available for subnetting because the interface ID starts at bit 64. Sixteen bits will yield 65536 subnets.

---

## Question 22

Given IPv6 address prefix 2001:db8::/48, what will be the last subnet that is created if the subnet prefix is changed to /52?

- [ ] 2001:db8:0:f00::/52
- [ ] 2001:db8:0:8000::/52
- [ ] 2001:db8:0:f::/52
- [x] **2001:db8:0:f000::/52**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Prefix 2001:db8::/48 has 48 network bits. If we subnet to a /52, we are moving the network boundary four bits to the right and creating 16 subnets. The first subnet is 2001:db8::/52 the last subnet is 2001:db8:0:f000::/52.

---

## Question 23

Consider the following range of addresses:

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
All the addresses have the part 2001:0DB8:BC15:00A in common. Each number or letter in the address represents 4 bits, so the prefix-length is /60.

---

## Question 24

Consider the following range of addresses:

2001:0DB8:BC15:00A0:0000::

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
All the addresses have the part 2001:0DB8:BC15:00A in common. Each number or letter in the address represents 4 bits, so the prefix-length is /60.

---

## Question 25

Consider the following range of addresses:

2001:0DB8:BC15:00A0:0000::

2001:0DB8:BC15:00A1:0000::

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
All the addresses have the part 2001:0DB8:BC15:00A in common. Each number or letter in the address represents 4 bits, so the prefix-length is /60.

---

## Question 26

Consider the following range of addresses:

2001:0DB8:BC15:00A0:0000::

2001:0DB8:BC15:00A1:0000::

2001:0DB8:BC15:00A2:0000::

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
All the addresses have the part 2001:0DB8:BC15:00A in common. Each number or letter in the address represents 4 bits, so the prefix-length is /60.

---

## Question 27

Consider the following range of addresses:

2001:0DB8:BC15:00A0:0000::

2001:0DB8:BC15:00A1:0000::

2001:0DB8:BC15:00A2:0000::

…

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
All the addresses have the part 2001:0DB8:BC15:00A in common. Each number or letter in the address represents 4 bits, so the prefix-length is /60.

---

## Question 28

Consider the following range of addresses:

2001:0DB8:BC15:00A0:0000::

2001:0DB8:BC15:00A1:0000::

2001:0DB8:BC15:00A2:0000::

…

2001:0DB8:BC15:00AF:0000::

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
All the addresses have the part 2001:0DB8:BC15:00A in common. Each number or letter in the address represents 4 bits, so the prefix-length is /60.

---

## Question 29

Consider the following range of addresses:

2001:0DB8:BC15:00A0:0000::

2001:0DB8:BC15:00A1:0000::

2001:0DB8:BC15:00A2:0000::

…

2001:0DB8:BC15:00AF:0000::

The prefix-length for the range of addresses is               
 /60   
         .

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
All the addresses have the part 2001:0DB8:BC15:00A in common. Each number or letter in the address represents 4 bits, so the prefix-length is /60.

---

## Question 30

What type of IPv6 address is FE80::1?

- [ ] loopback
- [x] **link-local**
- [ ] multicast
- [ ] global unicast

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Link-local IPv6 addresses start with FE80::/10, which is any address from FE80:: to FEBF::. Link-local addresses are used extensively in IPv6 and allow directly connected devices to communicate with each other on the link they share.

---

## Question 31

Refer to the exhibit. A company is deploying an IPv6 addressing scheme for its network. The company design document indicates that the subnet portion of the IPv6 addresses is used for the new hierarchical network design, with the site subsection to represent multiple geographical sites of the company, the sub-site section to represent multiple campuses at each site, and the subnet section to indicate each network segment separated by routers. With such a scheme, what is the maximum number of subnets achieved per sub-site?

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/CCNA1-v7-ITNv7-Modules-11-13-IP-Addressing-Exam-Answers-02.png)

- [ ] 0
- [ ] 4
- [x] **16**
- [ ] 256

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Because only one hexadecimal character is used to represent the subnet, that one character can represent 16 diccerent values 0 through F.

---

## Question 32

What is used in the EUI-64 process to create an IPv6 interface ID on an IPv6 enabled interface?

- [x] **the MAC address of the IPv6 enabled interface**
- [ ] a randomly generated 64-bit hexadecimal address
- [ ] an IPv6 address that is provided by a DHCPv6 server
- [ ] an IPv4 address that is configured on the interface

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The EUI-64 process uses the MAC address of an interface to construct an interface ID (IID). Because the MAC address is only 48 bits in length, 16 additional bits (cc:FE) must be added to the MAC address to create the full 64-bit interface ID.

---

## Question 33

What is the prefix for the host address 2001:DB8:BC15:A:12AB::1/64?

- [ ] 2001:DB8:BC15
- [x] **2001:DB8:BC15:A**
- [ ] 2001:DB8:BC15:A:1
- [ ] 2001:DB8:BC15:A:12

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The network portion, or prefix, of an IPv6 address is identified through the prefix length. A /64 prefix length indicates that the first 64 bits of the IPv6 address is the network portion. Hence the prefix is 2001:DB8:BC15:A.

---

## Question 34

An IPv6 enabled device sends a data packet with the destination address of cc02::1. What is the target of this packet?​

- [ ] the one IPv6 device on the link that has been uniquely configured with this address
- [x] **all IPv6 enabled devices on the local link​ or network**
- [ ] only IPv6 DHCP servers​
- [ ] only IPv6 configured routers

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
This address is one of the assigned IPv6 multicast addresses. Packets addressed to cc02::1 are for all IPv6 enabled devices on the link or network. cc02::2 is for all IPv6 routers that exist on the network.

---

## Question 35

Match the IPv6 address with the IPv6 address type.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-11-13-Checkpoint-Exam-IP-Addressing-Exam-Answers-004.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-11-13-Checkpoint-Exam-IP-Addressing-Exam-Answers-004-1024x422.png)

- [x] **2001:DB8::BAF:3F57:FE94 ==> global unicast**
- [x] **cc02::1 ==> all node multicast**
- [x] **::1 ==> loopback**
- [x] **cc02::1:ccAE:F85F ==> solicited node multicast**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
cc02::1:ccAE:F85F is a solicited node multicast address.

2001:DB8::BAF:3F57:FE94 is a global unicast address.

cc02::1 is the all node multicast address. Packets sent to this address will be received by all IPv6 hosts on the local link.

::1 is the IPv6 loopback address.

There are no examples of link local or unique local addresses provided.

---

## Question 36

Which IPv6 prefix is reserved for communication between devices on the same link?

- [ ] FC00::/7
- [ ] 2001::/32
- [x] **FE80::/10**
- [ ] FDcc::/7

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
IPv6 link-local unicast addresses are in the FE80::/10 prefix range and are not routable. They are used only for communications between devices on the same link.

---

## Question 37

Which type of IPv6 address refers to any unicast address that is assigned to multiple hosts?

- [ ] unique local
- [ ] global unicast
- [ ] link-local
- [x] **anycast**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The IPv6 specifications include anycast addresses. An anycast address is any unicast IPv6 address that is assigned to multiple devices.

---

## Question 38

What are two types of IPv6 unicast addresses? (Choose two.)

- [ ] multicast
- [x] **loopback**
- [x] **link-local**
- [ ] anycast
- [ ] broadcast

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Multicast, anycast, and unicast are types of IPv6 addresses. There is no broadcast address in IPv6. Loopback and link-local are specific types of unicast addresses.

---

## Question 39

Which service provides dynamic global IPv6 addressing to end devices without using a server that keeps a record of available IPv6 addresses?

- [ ] stateful DHCPv6
- [x] **SLAAC**
- [ ] static IPv6 addressing
- [ ] stateless DHCPv6

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Using stateless address autoconfiguration (SLAAC), a PC can solicit a router and receive the prefix length of the network. From this information the PC can then create its own IPv6 global unicast address.

---

## Question 40

Which protocol supports Stateless Address Autoconfiguration (SLAAC) for dynamic assignment of IPv6 addresses to a host?

- [ ] ARPv6
- [ ] DHCPv6
- [x] **ICMPv6**
- [ ] UDP

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
SLAAC uses ICMPv6 messages when dynamically assigning an IPv6 address to a host. DHCPv6 is an alternate method of assigning an IPv6 addresses to a host. ARPv6 does not exist. Neighbor Discovery Protocol (NDP) provides the functionality of ARP for IPv6 networks. UDP is the transport layer protocol used by DHCPv6.

---

## Question 41

Three methods allow IPv6 and IPv4 to co-exist. Match each method with its description.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-11-13-Checkpoint-Exam-IP-Addressing-Exam-Answers-005.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-11-13-Checkpoint-Exam-IP-Addressing-Exam-Answers-005-1024x345.png)

- [x] **The IPv4 packets and IPv6 packets coexist in the same network. ==> dual-stack**
- [x] **The IPv6 packet is transported inside an IPv4 packet. ==> tunneling**
- [x] **IPv6 packets are converted into IPv4 packets, and vice versa. ==> translation**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The term for the method that allows for the coexistence of the two types of packets on a single network is dual-stack. Tunneling allows for the IPv6 packet to be transported inside IPv4 packets. An IP packet can also be converted from version 6 to version 4 and vice versa. DHCP is a protocol that is used for allocating network parameters to hosts on an IP network.

---

## Question 42

A technician uses the ping 127.0.0.1 command. What is the technician testing?

- [x] **the TCP/IP stack on a network host**
- [ ] connectivity between two adjacent Cisco devices
- [ ] connectivity between a PC and the default gateway
- [ ] connectivity between two PCs on the same network
- [ ] physical connectivity of a particular PC and the network

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
127.0.0.1 is the local loopback address on any TCP/IP network device. By pinging this address, the technician is verifying the TCP/IP protocol stack on that particular device.

---

## Question 43

Refer to the exhibit. An administrator is trying to troubleshoot connectivity between PC1 and PC2 and uses the tracert command from PC1 to do it. Based on the displayed output, where should the administrator begin troubleshooting?

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/CCNA1-v7-ITNv7-Modules-11-13-IP-Addressing-Exam-Answers-01.png)

- [ ] PC2
- [x] **R1**
- [ ] SW2
- [ ] R2
- [ ] SW1

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Tracert is used to trace the path a packet takes. The only successful response was from the first device along the path on the same LAN as the sending host. The first device is the default gateway on router R1. The administrator should therefore start troubleshooting at R1.

---

## Question 44

Which protocol is used by the traceroute command to send and receive echo-requests and echo-replies?

- [ ] SNMP
- [x] **ICMP**
- [ ] Telnet
- [ ] TCP

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Traceroute uses the ICMP (Internet Control Message Protocol) to send and receive echo-request and echo-reply messages.

---

## Question 45

Which ICMPv6 message is sent when the IPv6 hop limit field of a packet is decremented to zero and the packet cannot be forwarded?

- [ ] network unreachable
- [x] **time exceeded**
- [ ] protocol unreachable
- [ ] port unreachable

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
ICMPv6 uses the hop limit field in the IPv6 packet header to determine if the packet has expired. If the hop limit field has reached zero, a router will send a time exceeded message back towards the source indicating that the router cannot forward the packet.

---

## Question 46

A user executes a traceroute over IPv6. At what point would a router in the path to the destination device drop the packet?

- [ ] when the value of the Hop Limit field reaches 255
- [x] **when the value of the Hop Limit field reaches zero**
- [ ] when the router receives an ICMP time exceeded message
- [ ] when the target host responds with an ICMP echo reply message

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
When a traceroute is performed, the value in the Hop Limit field of an IPv6 packet determines how many router hops the packet can travel. Once the Hop Limit field reaches a value of zero, it can no longer be forwarded and the receiving router will drop the packet.

---

## Question 47

What is the purpose of ICMP messages?

- [ ] to inform routers about network topology changes
- [ ] to ensure the delivery of an IP packet
- [x] **to provide feedback of IP packet transmissions**
- [ ] to monitor the process of a domain name to IP address resolution

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The purpose of ICMP messages is to provide feedback about issues that are related to the processing of IP packets.

---

## Question 48

What source IP address does a router use by default when the traceroute command is issued?

- [ ] the highest configured IP address on the router
- [ ] a loopback IP address
- [x] **the IP address of the outbound interface**
- [ ] the lowest configured IP address on the router

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
When sending an echo request message, a router will use the IP address of the exit interface as the source IP address. This default behavior can be changed by using an extended ping and specifying a specific source IP address.

---

## Question 49

Match each description with an appropriate IP address.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-11-13-Checkpoint-Exam-IP-Addressing-Exam-Answers-006.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-11-13-Checkpoint-Exam-IP-Addressing-Exam-Answers-006-1024x502.png)

- [x] **a private address ==> 172.19.20.5**
- [x] **a loopback address ==> 127.0.0.1**
- [x] **an experimental address ==> 240.2.6.255**
- [x] **a TEST-NET address ==> 192.0.2.123**
- [x] **a link-local address ==> 169.254.1.5**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Link-Local addresses are assigned automatically by the OS environment and are located in the block 169.254.0.0/16. The private addresses ranges are 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. TEST-NET addresses belong to the range 192.0.2.0/24. The addresses in the block 240.0.0.0 to 255.255.255.254 are reserved as experimental addresses. Loopback addresses belong to the block 127.0.0.0/8.

---

## Question 50

What is the prefix length notation for the subnet mask 255.255.255.224?

- [ ] /25
- [ ] /26
- [x] **/27**
- [ ] /28

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The binary format for 255.255.255.224 is 11111111.11111111.11111111.11100000. The prefix length is the number of consecutive 1s in the subnet mask. Therefore, the prefix length is /27.

---

## Question 51

Which subnet would include the address 192.168.1.96 as a usable host address?

- [x] **192.168.1.64/26**
- [ ] 192.168.1.32/27
- [ ] 192.168.1.32/28
- [ ] 192.168.1.64/29

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
For the subnet of 192.168.1.64/26, there are 6 bits for host addresses, yielding 64 possible addresses. However, the first and last subnets are the network and broadcast addresses for this subnet. Therefore, the range of host addresses for this subnet is 192.168.1.65 to 192.168.1.126. The other subnets do not contain the address 192.168.1.96 as a valid host address.

---

## Question 52

Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.

![exhibit](https://infraexam.com/wp-content/uploads/2022/12/CCNA1-v7-ITNv7-Modules-11-13-IP-Addressing-Exam-Answers-PT-001.png)

- [x] **2001:DB8:1:1::1**
- [ ] 2001:DB8:1:1::A
- [ ] 2001:DB8:1:2::2
- [x] **2001:DB8:1:2::1**
- [ ] 2001:DB8:1:3::1
- [x] **2001:DB8:1:3::2**
- [ ] 2001:DB8:1:4::1

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Using the ipv6config command on PC2 displays the IPv6 address of PC2, which is 2001:DB8:1:4::A. The IPV6 link-local address, FE80::260:70cc:FE34:6930, is not used in route tracing. Using the tracert 2001:DB8:1:4::A command on PC1 displays four addresses: 2001:DB8:1:1::1, 2001:DB8:1:2::1 , 2001:DB8:1:3::2, and 2001:DB8:1:4::A.

---

## Question 53

Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.

CCNA1 v7 – ITNv7 – Modules 11 – 13 IP Addressing Exam Answers PT 001

What are the three IPv6 addresses displayed when the route from PC1 to PC2 is traced? (Choose three.)

![exhibit](https://infraexam.com/wp-content/uploads/2022/12/CCNA1-v7-ITNv7-Modules-11-13-IP-Addressing-Exam-Answers-PT-001.png)

- [x] **2001:DB8:1:1::1**
- [ ] 2001:DB8:1:1::A
- [ ] 2001:DB8:1:2::2
- [x] **2001:DB8:1:2::1**
- [ ] 2001:DB8:1:3::1
- [x] **2001:DB8:1:3::2**
- [ ] 2001:DB8:1:4::1

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Using the ipv6config command on PC2 displays the IPv6 address of PC2, which is 2001:DB8:1:4::A. The IPV6 link-local address, FE80::260:70cc:FE34:6930, is not used in route tracing. Using the tracert 2001:DB8:1:4::A command on PC1 displays four addresses: 2001:DB8:1:1::1, 2001:DB8:1:2::1 , 2001:DB8:1:3::2, and 2001:DB8:1:4::A.

---

## Question 54

A host is transmitting a broadcast. Which host or hosts will receive it?

- [x] **all hosts in the same subnet**
- [ ] a specially defined group of hosts
- [ ] the closest neighbor on the same network
- [ ] all hosts on the Internet

> [!NOTE]
> **Explanation:** Explanation & Hint:
When a broadcast is sent to the broadcast address of a subnet, all hosts within that same subnet will receive it. This is a common characteristic of traditional IP networks. However, it’s important to note that the use of broadcasts is discouraged in modern networking due to its potential for causing network congestion. Multicast and unicast communication are generally more eccicient and common ways to transmit data to specific hosts or groups of hosts in a network.

---

## Question 55

A host is transmitting a unicast. Which host or hosts will receive it?

- [x] **one specific host**
- [ ] a specially defined group of hosts
- [ ] all hosts on the Internet
- [ ] the closest neighbor on the same network

> [!NOTE]
> **Explanation:** Explanation & Hint:
When a host is transmitting a unicast, it is sending the data to one specific host, and only that intended recipient will receive the communication. Unicast communication is point-to-point, ensuring that the data is delivered exclusively to the designated host.

---

## Question 56

A host is transmitting a unicast. Which host or hosts will receive it?

- [x] **one specific host**
- [ ] a specially defined group of hosts
- [ ] all hosts with the same IP address
- [ ] the closest neighbor on the same network

> [!NOTE]
> **Explanation:** Explanation & Hint:
When a host is transmitting a unicast, it is sending the data to one specific host, and only that intended recipient will receive the communication. Unicast communication is point-to-point, ensuring that the data is delivered exclusively to the designated host.

---

## Question 57

A host is transmitting a multicast. Which host or hosts will receive it?

- [x] **a specially defined group of hosts**
- [ ] one specific host
- [ ] all hosts with the same IP address
- [ ] the closest neighbor on the same network

> [!NOTE]
> **Explanation:** Explanation & Hint:
When a host is transmitting a multicast, the data is sent to a specially defined group of hosts, and only those hosts that have joined that multicast group will receive the communication. This allows for eccicient one-to-many or many-to-many communication to a specific group of interested hosts, making it a useful and eccicient way to share data with selected recipients.

---

## Question 58

A host is transmitting a multicast. Which host or hosts will receive it?

- [x] **a specially defined group of hosts**
- [ ] one specific host
- [ ] directly connected network devices
- [ ] the closest neighbor on the same network

> [!NOTE]
> **Explanation:** Explanation & Hint:
When a host is transmitting a multicast, the data is sent to a specially defined group of hosts, and only those hosts that have joined that multicast group will receive the communication. This allows for eccicient one-to-many or many-to-many communication to a specific group of interested hosts, making it a useful and eccicient way to share data with selected recipients.

---

## Question 59

A host is transmitting a multicast. Which host or hosts will receive it?

- [x] **a specially defined group of hosts**
- [ ] one specific host
- [ ] all hosts with the same IP address
- [ ] all hosts on the Internet

> [!NOTE]
> **Explanation:** Explanation & Hint:
When a host is transmitting a multicast, the data is sent to a specially defined group of hosts, and only those hosts that have joined that multicast group will receive the communication. This allows for eccicient one-to-many or many-to-many communication to a specific group of interested hosts, making it a useful and eccicient way to share data with selected recipients.

---

## Question 60

A host is transmitting a multicast. Which host or hosts will receive it?

- [x] **a specially defined group of hosts**
- [ ] one specific host
- [ ] directly connected network devices
- [ ] all hosts on the Internet

> [!NOTE]
> **Explanation:** Explanation & Hint:
When a host is transmitting a multicast, the data is sent to a specially defined group of hosts, and only those hosts that have joined that multicast group will receive the communication. This allows for eccicient one-to-many or many-to-many communication to a specific group of interested hosts, making it a useful and eccicient way to share data with selected recipients.

---

## Question 61

A host is transmitting a multicast. Which host or hosts will receive it?

- [x] **a specially defined group of hosts**
- [ ] all hosts in the same subnet
- [ ] directly connected network devices
- [ ] the closest neighbor on the same network

> [!NOTE]
> **Explanation:** Explanation & Hint:
When a host is transmitting a multicast, the data is sent to a specially defined group of hosts, and only those hosts that have joined that multicast group will receive the communication. This allows for eccicient one-to-many or many-to-many communication to a specific group of interested hosts, making it a useful and eccicient way to share data with selected recipients.

---

## Question 62

A host is transmitting a broadcast. Which host or hosts will receive it?

- [x] **all hosts in the same subnet**
- [ ] one specific host
- [ ] the closest neighbor on the same network
- [ ] directly connected network devices

> [!NOTE]
> **Explanation:** Explanation & Hint:
When a broadcast is sent to the broadcast address of a subnet, all hosts within that same subnet will receive it. This is a common characteristic of traditional IP networks. However, it’s important to note that the use of broadcasts is discouraged in modern networking due to its potential for causing network congestion. Multicast and unicast communication are generally more eccicient and common ways to transmit data to specific hosts or groups of hosts in a network.

---

## Question 63

A host is transmitting a broadcast. Which host or hosts will receive it?

- [x] **all hosts in the same subnet**
- [ ] one specific host
- [ ] all hosts on the Internet
- [ ] directly connected network devices

> [!NOTE]
> **Explanation:** Explanation & Hint:
When a broadcast is sent to the broadcast address of a subnet, all hosts within that same subnet will receive it. This is a common characteristic of traditional IP networks. However, it’s important to note that the use of broadcasts is discouraged in modern networking due to its potential for causing network congestion. Multicast and unicast communication are generally more eccicient and common ways to transmit data to specific hosts or groups of hosts in a network.

---

## Question 64

Which is the compressed format of the IPv6 address 2001:0db8:0000:0000:0000:a0b0:0008:0001?

- [x] **2001:db8::a0b0:8:1**
- [ ] 2001:db8::ab8:1:0:1000
- [ ] 2001:db80:0:1::80:1
- [ ] 2001:db80:::1::80:1

> [!NOTE]
> **Explanation:** Explanation & Hint:
The compressed format of the IPv6 address 2001:0db8:0000:0000:0000:a0b0:0008:0001 is:2001:db8::a0b0:8:1Double colons “::” are used to compress consecutive groups of zeros in an IPv6 address. In this case, multiple groups of consecutive zeros have been compressed to make the address more concise while still representing the same value.

---

## Question 65

Which is the compressed format of the IPv6 address fe80:09ea:0000:2200:0000:0000:0fe0:0290?

- [x] **fe80:9ea:0:2200::fe0:290**
- [ ] fe80:9:20::b000:290
- [ ] fe80:9ea0::2020:0:bf:e0:9290
- [ ] fe80:9ea0::2020::bf:e0:9290

> [!NOTE]
> **Explanation:** Explanation & Hint:
The compressed format of the IPv6 address fe80:09ea:0000:2200:0000:0000:0fe0:0290 is:fe80:9ea::2200:0:0:fe0:290In this compressed form, consecutive groups of zeros are represented with a double colon “::” to make the address more concise while still preserving the full address’s value.

---

## Question 66

Which is the compressed format of the IPv6 address 2002:0042:0010:c400:0000:0000:0000:0909?

- [x] **2002:42:10:c400::909**
- [ ] 200:420:110:c4b::910:0:90
- [ ] 2002:4200::25:1090:0:99
- [ ] 2002:42::25:1090:0:99

> [!NOTE]
> **Explanation:** Explanation & Hint:
The compressed format of the IPv6 address 2002:0042:0010:c400:0000:0000:0000:0909 is:2002:42:10:c400::909In this compressed form, consecutive groups of zeros are represented with a double colon “::” to make the address more concise while still preserving the full address’s value.

---

## Question 67

Which is the compressed format of the IPv6 address 2001:0db8:0000:0000:0ab8:0001:0000:1000?

- [x] **2001:db8::ab8:1:0:1000**
- [ ] 2001:db8::a0b0:8:1
- [ ] 2001:db8:1::ab8:0:1
- [ ] 2001:db8:0:1::8:1

> [!NOTE]
> **Explanation:** Explanation & Hint:
The compressed format of the IPv6 address 2001:0db8:0000:0000:0ab8:0001:0000:1000 is:2001:db8::ab8:1:0:1000In this compressed form, consecutive groups of zeros are represented with a double colon “::” to make the address more concise while still preserving the full address’s value.

---

## Question 68

Which is the compressed format of the IPv6 address 2002:0420:00c4:1008:0025:0190:0000:0990?

- [x] **2002:420:c4:1008:25:190::990**
- [ ] 2002:42:10:c400::909
- [ ] 2002:4200::25:1090:0:99
- [ ] 2002:42::25:1090:0:99

> [!NOTE]
> **Explanation:** Explanation & Hint:
The compressed format of the IPv6 address 2002:0420:00c4:1008:0025:0190:0000:0990 is:2002:420:c4:1008:25:190::990In this compressed form, consecutive groups of zeros are represented with a double colon “::” to make the address more concise while still preserving the full address’s value.

---

## Question 69

Which is the compressed format of the IPv6 address 2001:0db8:0000:0000:0000:a0b0:0008:0001?

- [x] **2001:db8::a0b0:8:1**
- [ ] 2001:db8:1::ab8:0:1
- [ ] 2001:db8::ab8:1:0:1000
- [ ] 2001:db8:0:1::8:1

> [!NOTE]
> **Explanation:** Explanation & Hint:
The compressed format of the IPv6 address 2001:0db8:0000:0000:0000:a0b0:0008:0001 is:2001:db8::a0b0:8:1Double colons “::” are used to compress consecutive groups of zeros in an IPv6 address. In this case, multiple groups of consecutive zeros have been compressed to make the address more concise while still representing the same value.

---

## Question 70

Which is the compressed format of the IPv6 address fe80:0000:0000:0000:0220:0b3f:f0e0:0029?

- [x] **fe80::220:b3f:f0e0:29**
- [ ] fe80:9ea:0:2200::fe0:290
- [ ] fe80:9ea0::2020:0:bf:e0:9290
- [ ] fe80:9ea0::2020::bf:e0:9290

> [!NOTE]
> **Explanation:** Explanation & Hint:
The compressed format of the IPv6 address fe80:0000:0000:0000:0220:0b3f:f0e0:0029 is:fe80::220:b3f:f0e0:29In this compressed form, consecutive groups of zeros are represented with a double colon “::” to make the address more concise while still preserving the full address’s value.

---

## Question 71

Which is the compressed format of the IPv6 address 2001:0db8:0000:0000:0000:a0b0:0008:0001?

- [x] **2001:db8::a0b0:8:1**
- [ ] 2001:db8::ab8:1:0:1000
- [ ] 2001:db80:0:1::80:1
- [ ] 2001:db8:0:1::8:1

> [!NOTE]
> **Explanation:** Explanation & Hint:
The compressed format of the IPv6 address 2001:0db8:0000:0000:0000:a0b0:0008:0001 is:2001:db8::a0b0:8:1Double colons “::” are used to compress consecutive groups of zeros in an IPv6 address. In this case, multiple groups of consecutive zeros have been compressed to make the address more concise while still representing the same value.

---

## Question 72

Which is the compressed format of the IPv6 address 2002:0042:0010:c400:0000:0000:0000:0909?

- [x] **2002:42:10:c400::909**
- [ ] 2002:4200::25:1090:0:99
- [ ] 2002:420:c4:1008:25:190::990
- [ ] 2002:42::25:1090:0:99

> [!NOTE]
> **Explanation:** Explanation & Hint:
The compressed format of the IPv6 address 2002:0042:0010:c400:0000:0000:0000:0909 is:2002:42:10:c400::909In this compressed form, consecutive groups of zeros are represented with a double colon “::” to make the address more concise while still preserving the full address’s value.

---

## Question 73

Which is the compressed format of the IPv6 address fe80:09ea:0000:2200:0000:0000:0fe0:0290?

- [x] **fe80:9ea:0:2200::fe0:290**
- [ ] fe80:9ea0::2020:0:bf:e0:9290
- [ ] fe80::220:b3f:f0e0:29
- [ ] fe80::0220:0b3f:f0e0:0029

> [!NOTE]
> **Explanation:** Explanation & Hint:
The compressed format of the IPv6 address fe80:09ea:0000:2200:0000:0000:0fe0:0290 is:fe80:9ea::2200:0:0:fe0:290In this compressed form, consecutive groups of zeros are represented with a double colon “::” to make the address more concise while still preserving the full address’s value.

---

## Question 74

A user issues a ping 2001:db8:FACE:39::10 command and receives a response that includes a code of 2 . What does this code represent?

- [x] **beyond scope of the source address**
- [ ] communication with the destination administratively prohibited
- [ ] address unreachable
- [ ] no route to destination

> [!NOTE]
> **Explanation:** Explanation & Hint:
A ping response with an ICMPv6 code of 2 represents “beyond scope of the source address.” This means that the source address from which the ping was initiated is not valid or recognized in the context of the destination network or address being pinged. It typically indicates that the source address is not within the appropriate scope for communicating with the destination.

---

## Question 75

A user issues a ping 192.135.250.103 command and receives a response that includes a code of 1 . What does this code represent?

- [x] **host unreachable**
- [ ] beyond scope of the source address
- [ ] address unreachable
- [ ] communication with the destination administratively prohibited

> [!NOTE]
> **Explanation:** Explanation & Hint:
A ping response with an ICMP code of 1 usually represents “host unreachable.” This code indicates that the destination host specified in the ping command is not reachable or is not available on the network. It means that the network is unable to forward the ICMP Echo Request to the specified host, indicating that the host might be down or there’s an issue with the routing to that host.

---

## Question 76

A user issues a ping fe80:65ab:dcc1::100 command and receives a response that includes a code of 3 . What does this code represent?

- [x] **address unreachable**
- [ ] communication with the destination administratively prohibited
- [ ] beyond scope of the source address
- [ ] no route to destination

> [!NOTE]
> **Explanation:** Explanation & Hint:
A ping response with an ICMPv6 code of 3 typically represents “address unreachable.” This code indicates that the destination address specified in the ping command is not reachable or is not available on the network. It means that the network is unable to forward the ICMPv6 Echo Request to the specified address, indicating that the target address might be down or there’s an issue with the routing to that address.

---

## Question 77

A user issues a ping 10.10.14.67 command and receives a response that includes a code of 0 . What does this code represent?

- [x] **network unreachable**
- [ ] protocol unreachable
- [ ] port unreachable
- [ ] host unreachable
- [ ] Host Unreachable: A response code of “0” after issuing a ping command indicates that the host is reachable. This is the opposite of the “host unreachable” error, which would typically be indicated by a diccerent ICMP error code.
- [ ] Network Unreachable: This error occurs when the packet cannot find a route to the destination network. A code of “0” means that the network was indeed reachable.
- [ ] Protocol Unreachable: This error is typically related to an inability to communicate using the specified network protocol. A code of “0” implies that the protocol was reachable and functional.
- [ ] Port Unreachable: Generally associated with UDP traccic when a packet is sent to a port with no application listening. Since ping uses ICMP, which does not use port numbers, this error is irrelevant to the ping command. Moreover, a code of “0” confirms successful communication, not an unreachable port.

> [!NOTE]
> **Explanation:** Explanation & Hint:
Correct Answer:
Host Unreachable:
 A response code of “0” after issuing a ping command indicates that the host is reachable. This is the opposite of the “host unreachable” error, which would typically be indicated by a diccerent ICMP error code.
Incorrect Answers:
Network Unreachable:
 This error occurs when the packet cannot find a route to the destination network. A code of “0” means that the network was indeed reachable.
Protocol Unreachable:
 This error is typically related to an inability to communicate using the specified network protocol. A code of “0” implies that the protocol was reachable and functional.
Port Unreachable:
 Generally associated with UDP traccic when a packet is sent to a port with no application listening. Since ping uses ICMP, which does not use port numbers, this error is irrelevant to the ping command. Moreover, a code of “0” confirms successful communication, not an unreachable port.
In summary, a response code of “0” signifies successful communication with the target host, negating the scenarios of network, protocol, port, or host being unreachable.

---

## Question 78

A user issues a ping fe80:65ab:dcc1::100 command and receives a response that includes a code of 4 . What does this code represent?

- [x] **port unreachable**
- [ ] host unreachable
- [ ] protocol unreachable
- [ ] network unreachable

> [!NOTE]
> **Explanation:** Explanation & Hint:
An ICMPv6 code of 4 in a ping response represents “port unreachable.” This code is typically used to indicate that the destination host has received the ICMPv6 Echo Request, but the specific port or service requested by the ping is unreachable or not available on the destination host. It’s commonly used in situations where a network device or firewall has blocked access to the specified port or service on the destination host.

---

## Question 79

A user issues a ping 198.133.219.8 command and receives a response that includes a code of 0. What does this code represent?

- [x] **network unreachable**
- [ ] protocol unreachable
- [ ] port unreachable
- [ ] host unreachable
- [ ] Network Unreachable: In the standard context of ICMP (Internet Control Message Protocol) used by the ping command, a response with a code of “0” typically indicates successful communication, not an error. However, in your scenario, if a code of “0” is explicitly defined or interpreted as “network unreachable,” it would represent an exception to the standard interpretation. Normally, “network unreachable” would be indicated by a diccerent ICMP error code.
- [ ] Protocol Unreachable: This error is not indicated by a code of “0.” It would refer to a situation where the network protocol necessary for communication is not available or compatible, which is not implied by a successful ping response.
- [ ] Port Unreachable: This error is related to UDP traccic and occurs when a message is sent to a port without a listening application. Since the ping command uses ICMP, which does not involve TCP/UDP ports, this error is not applicable. A code of “0” in ping typically indicates successful communication, not an unreachable port scenario.
- [ ] Host Unreachable: This error signifies that the destination host could not be reached. In standard ICMP ping operations, a code of “0” is understood as indicating the opposite: that the host was successfully reached.

> [!NOTE]
> **Explanation:** Explanation & Hint:
Correct Answer:
Network Unreachable:
 In the standard context of ICMP (Internet Control Message Protocol) used by the ping command, a response with a code of “0” typically indicates successful communication, not an error. However, in your scenario, if a code of “0” is explicitly defined or interpreted as “network unreachable,” it would represent an exception to the standard interpretation. Normally, “network unreachable” would be indicated by a diccerent ICMP error code.
Incorrect Answers:
Protocol Unreachable:
 This error is not indicated by a code of “0.” It would refer to a situation where the network protocol necessary for communication is not available or compatible, which is not implied by a successful ping response.
Port Unreachable:
 This error is related to UDP traccic and occurs when a message is sent to a port without a listening application. Since the ping command uses ICMP, which does not involve TCP/UDP ports, this error is not applicable. A code of “0” in ping typically indicates successful communication, not an unreachable port scenario.
Host Unreachable:
 This error signifies that the destination host could not be reached. In standard ICMP ping operations, a code of “0” is understood as indicating the opposite: that the host was successfully reached.
It’s important to note that the interpretation of ICMP response codes, including “0,” can vary depending on specific network configurations or custom implementations. However, under standard conventions, a code “0” response in ping is usually associated with successful communication, not a “network unreachable” error.

---

## Question 80

A user issues a ping 2001:db8:3040:114::88 command and receives a response that includes a code of 4 . What does this code represent?

- [x] **port unreachable**
- [ ] host unreachable
- [ ] protocol unreachable
- [ ] network unreachable

> [!NOTE]
> **Explanation:** Explanation & Hint:
An ICMPv6 code of 4 in a ping response typically represents “port unreachable.” This code indicates that the destination host has received the ICMPv6 Echo Request, but the specific port or service requested by the ping is unreachable or not available on the destination host. It’s commonly used in situations where a network device or firewall has blocked access to the specified port or service on the destination host.

---

## Question 81

A user issues a ping 2001:db8:FACE:39::10 command and receives a response that includes a code of 2 . What does this code represent?

- [x] **beyond scope of the source address**
- [ ] host unreachable
- [ ] protocol unreachable
- [ ] network unreachable

> [!NOTE]
> **Explanation:** Explanation & Hint:
A ping response with an ICMPv6 code of 2 represents “beyond scope of the source address.” This means that the source address from which the ping was initiated is not valid or recognized in the context of the destination network or address being pinged. It typically indicates that the source address is not within the appropriate scope for communicating with the destination.

---

## Question 82

A user issues a ping 192.135.250.103 command and receives a response that includes a code of 1 . What does this code represent?

- [x] **host unreachable**
- [ ] protocol unreachable
- [ ] port unreachable
- [ ] network unreachable

> [!NOTE]
> **Explanation:** Explanation & Hint:
A ping response with an ICMP code of 1 usually represents “host unreachable.” This code indicates that the destination host specified in the ping command is not reachable or is not available on the network. It means that the network is unable to forward the ICMP Echo Request to the specified host, indicating that the host might be down or there’s an issue with the routing to that host.

---

## Question 83

A user issues a ping 2001:db8:FACE:39::10 command and receives a response that includes a code of 3 . What does this code represent?

- [x] **address unreachable**
- [ ] network unreachable
- [ ] host unreachable
- [ ] protocol unreachable

> [!NOTE]
> **Explanation:** Explanation & Hint:
An ICMPv6 code of 3 in a ping response typically represents “address unreachable.” This code indicates that the destination address specified in the ping command is not reachable or is not available on the network. It means that the network is unable to forward the ICMPv6 Echo Request to the specified address, indicating that the target address might be down or there’s an issue with the routing to that address.

---

