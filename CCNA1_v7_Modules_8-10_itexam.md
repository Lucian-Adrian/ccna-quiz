# CCNA 1 v7 Modules 8 – 10: Communicating Between Networks Exam Answers

Total Questions: 76

---

## Question 1

Which information is used by routers to forward a data packet toward its destination?

- [ ] source IP address
- [x] **destination IP address**
- [ ] source data-link address
- [ ] destination data-link address

> [!NOTE]
> **Explanation:** **Correct Answer:** destination IP address

**Concept & Details:**
When a router receives a data packet, its primary job is to find the best path to send that packet toward its ultimate destination. To do this, the router looks at the Layer 3 (Network Layer) header of the packet and reads the **destination IP (Internet Protocol) address**. It then compares this destination address with its routing table (a list of known networks and the paths to get to them) to decide which interface to send the packet out of.

*Why other options are incorrect:*
- **source IP address:** The source IP address tells the router where the packet came from, not where it is going. It is used by the receiving device to reply, but not by routers to make forwarding decisions.
- **source data-link address / destination data-link address:** These are Layer 2 addresses (like MAC (Media Access Control) addresses). Routers make routing decisions at Layer 3 (Network Layer) using IP addresses. Data-link addresses change at every hop (from router to router) and are only used for delivery within a single local network, not for routing across different networks.

---

## Question 2

A computer has to send a packet to a destination host in the same LAN. How will the packet be sent?

- [ ] The packet will be sent to the default gateway first, and then, depending on the response from the gateway, it may be sent to the destination host.
- [x] **The packet will be sent directly to the destination host.**
- [ ] The packet will first be sent to the default gateway, and then from the default gateway it will be sent directly to the destination host.
- [ ] The packet will be sent only to the default gateway.

> [!NOTE]
> **Explanation:** **Correct Answer:** The packet will be sent directly to the destination host.

**Concept & Details:**
When a computer wants to send data, it first checks if the destination IP address is on the same local network (LAN, which stands for Local Area Network) or a remote network. It does this by comparing the destination IP address with its own IP address using its subnet mask. If the destination is on the same LAN, the sending computer doesn't need a router. It will use ARP (Address Resolution Protocol) to find the destination host's MAC (Media Access Control) address and send the packet directly to that host over the local physical switch.

*Why other options are incorrect:*
- **The packet will be sent to the default gateway first...:** A default gateway (typically a router) is only used when the destination host is on a *different* (remote) network. If the destination is on the same LAN, involving the default gateway is unnecessary and does not happen.

---

## Question 3

A router receives a packet from the Gigabit 0/0 interface and determines that the packet needs to be forwarded out the Gigabit 0/1 interface. What will the router do next?

- [ ] route the packet out the Gigabit 0/1 interface
- [x] **create a new Layer 2 Ethernet frame to be sent to the destination**
- [ ] look into the ARP cache to determine the destination IP address
- [ ] look into the routing table to determine if the destination network is in the routing table

> [!NOTE]
> **Explanation:** **Correct Answer:** create a new Layer 2 Ethernet frame to be sent to the destination

**Concept & Details:**
When a router receives a frame, it strips off the Layer 2 (Data Link layer) header and trailer to look at the Layer 3 (IP) packet inside. After the router examines the destination IP address and determines the exit interface (in this case, Gigabit 0/1), it must prepare the packet to be sent over the next physical link. To do this, the router must encapsulate the IP packet into a *new* Layer 2 frame (with a new source and destination MAC (Media Access Control) address specific to that new exit link) before physically transmitting it.

*Why other options are incorrect:*
- **route the packet out the Gigabit 0/1 interface:** The router cannot simply push the raw Layer 3 packet out of the interface without first wrapping (encapsulating) it in a proper Layer 2 frame for that media.
- **look into the ARP (Address Resolution Protocol) cache to determine the destination IP address:** The destination IP address is already inside the packet's Layer 3 header; the router does not need ARP to find it. (ARP is used to find MAC addresses, not IP addresses).
- **look into the routing table to determine if the destination network is in the routing table:** The router has *already* looked at the routing table to determine that the packet needs to go out of Gigabit 0/1.

---

## Question 4

Which IPv4 address can a host use to ping the loopback interface?

- [ ] 126.0.0.1
- [ ] 127.0.0.0
- [ ] 126.0.0.0
- [x] **127.0.0.1**

> [!NOTE]
> **Explanation:** **Correct Answer:** 127.0.0.1

**Concept & Details:**
The address `127.0.0.1` is a special reserved IPv4 address known as the **loopback address**. It is used by a host to send network traffic to itself. Pinging `127.0.0.1` tests if the local TCP/IP (Transmission Control Protocol/Internet Protocol) stack, network card (NIC), and operating system network drivers are installed and functioning correctly. If you get a reply, it means your computer's internal networking software is working.

*Why other options are incorrect:*
- **127.0.0.0:** This represents the network ID of the loopback block (127.0.0.0/8), not a specific usable host address.
- **126.0.0.1 / 126.0.0.0:** The `126.0.0.0` range belongs to normal public/private Class A addresses and is not reserved for local loopback testing.

---

## Question 5

A computer can access devices on the same network but cannot access devices on other networks. What is the probable cause of this problem?

- [ ] The cable is not connected properly to the NIC.
- [ ] The computer has an invalid IP address.
- [ ] The computer has an incorrect subnet mask.
- [x] **The computer has an invalid default gateway address.**

> [!NOTE]
> **Explanation:** **Correct Answer:** The computer has an invalid default gateway address.

**Concept & Details:**
The **default gateway** is the address of the router interface that connects a local network (LAN) to other remote networks (like the Internet or another department's network). When a computer wants to send data to a device outside its own local subnet, it must forward those packets to the default gateway router. If the computer has an incorrect or missing default gateway configuration, it will not know where to send remote traffic, meaning it can talk to local neighbors on the same switch but cannot communicate with any device on external networks.

*Why other options are incorrect:*
- **The cable is not connected properly to the NIC / The computer has an invalid IP address:** If either of these were true, the computer would not be able to communicate with devices on the local network either.
- **The computer has an incorrect subnet mask:** An incorrect subnet mask might cause local communication issues or random routing errors, but is not the most direct cause of being able to communicate perfectly locally while failing entirely for remote networks.

---

## Question 6

Which statement describes a feature of the IP protocol?

- [ ] IP encapsulation is modified based on network media.
- [ ] IP relies on Layer 2 protocols for transmission error control.
- [ ] MAC addresses are used during the IP packet encapsulation.
- [x] **IP relies on upper layer services to handle situations of missing or out-of-order packets.**

> [!NOTE]
> **Explanation:** **Correct Answer:** IP relies on upper layer services to handle situations of missing or out-of-order packets.

**Concept & Details:**
The **IP (Internet Protocol)** is designed as a **connectionless, unreliable, and best-effort** delivery protocol at Layer 3 of the OSI (Open Systems Interconnection) model. This means that IP itself does not establish a connection before sending packets, nor does it guarantee that all packets will arrive safely or in the correct order. Instead, it leaves packet sequencing, error recovery, and flow control to upper-layer transport protocols, such as **TCP (Transmission Control Protocol)** at Layer 4.

*Why other options are incorrect:*
- **IP encapsulation is modified based on network media:** The IP packet encapsulation remains exactly the same regardless of what physical media (fiber, copper cable, Wi-Fi) is used to transport it. Only the Layer 2 frame encapsulation changes based on the media.
- **IP relies on Layer 2 protocols for transmission error control:** Layer 2 protocols (like Ethernet) can detect errors using a FCS (Frame Check Sequence) and discard corrupted frames, but they do not provide reliable recovery or retransmission of lost data. That task belongs to Layer 4 (TCP).
- **MAC (Media Access Control) addresses are used during the IP packet encapsulation:** MAC addresses are Layer 2 addresses and are added during the Layer 2 Ethernet frame encapsulation, not during the Layer 3 IP packet encapsulation.

---

## Question 7

Why is NAT not needed in IPv6?​

- [ ] Because IPv6 has integrated security, there is no need to hide the IPv6 addresses of internal networks.​
- [x] **Any host or user can get a public IPv6 network address because the number of available IPv6 addresses is extremely large.​**
- [ ] The problems that are induced by NAT applications are solved because the IPv6 header improves packet handling by intermediate routers.​
- [ ] The end-to-end connectivity problems that are caused by NAT are solved because the number of routes increases with the number of nodes that are connected to the Internet.

> [!NOTE]
> **Explanation:** **Correct Answer:** Any host or user can get a public IPv6 network address because the number of available IPv6 addresses is extremely large.​

**Concept & Details:**
**NAT (Network Address Translation)** was primarily created as a temporary workaround for the depletion of IPv4 addresses. Because IPv4 uses 32-bit addresses (allowing only about 4.3 billion addresses), private IP addresses are translated to public IP addresses to share a single public address among many devices.
IPv6, on the other hand, uses **128-bit addresses**, which provides an astronomical number of unique addresses (approximately 340 undecillion addresses). Because there is no shortage of addresses in IPv6, every device on a network can be assigned a globally unique public IPv6 address, rendering address translation (NAT) unnecessary and restoring true end-to-end internet connectivity.

*Why other options are incorrect:*
- **Because IPv6 has integrated security...:** Hiding addresses was never the primary technical reason NAT was designed; NAT was for conserving IPv4 addresses. Security in IPv6 is handled by firewalls and IPsec, not by address concealment.
- **The problems that are induced by NAT... / The end-to-end connectivity problems...:** While IPv6 does solve NAT-induced application and routing issues by eliminating the need for NAT, these options do not explain *why* NAT is not needed. The direct cause of NAT being obsolete in IPv6 is the massive size of the IPv6 address space.

---

## Question 8

Which parameter does the router use to choose the path to the destination when there are multiple routes available?

- [x] **the lower metric value that is associated with the destination network**
- [ ] the lower gateway IP address to get to the destination network
- [ ] the higher metric value that is associated with the destination network
- [ ] the higher gateway IP address to get to the destination network

> [!NOTE]
> **Explanation:** **Correct Answer:** the lower metric value that is associated with the destination network

**Concept & Details:**
When a router has multiple routes to the exact same destination network in its routing table, it must decide which path is the best (most efficient). It makes this decision using a value called a **metric**. The metric is a cost value calculated by routing protocols (based on factors like bandwidth, delay, or hop count). Routers always prefer the path with the **lowest metric value** because it represents the shortest or fastest path to the destination.

*Why other options are incorrect:*
- **the higher metric value...:** A higher metric indicates a less efficient, more costly, or slower path, so it is not preferred.
- **the lower/higher gateway IP address...:** The numerical value of the next-hop gateway's IP address has no bearing on path quality or preference; it is simply an address.

---

## Question 9

What are two services provided by the OSI network layer? (Choose two.)

- [ ] performing error detection
- [x] **routing packets toward the destination**
- [x] **encapsulating PDUs from the transport layer**
- [ ] placement of frames on the media
- [ ] collision detection

> [!NOTE]
> **Explanation:** **Correct Answer:** routing packets toward the destination AND encapsulating PDUs from the transport layer

**Concept & Details:**
The **OSI (Open Systems Interconnection) Network Layer (Layer 3)** is responsible for the delivery of packets from the source host to the destination host across networks. Two of its primary functions are:
1. **Encapsulation:** Taking the PDU (Protocol Data Unit), specifically a segment, from the Transport Layer (Layer 4) and wrapping it with a Layer 3 header containing source and destination IP addresses to create an IP packet.
2. **Routing:** Determining the best physical path for the packet to travel to reach its destination and forwarding it accordingly.

*Why other options are incorrect:*
- **performing error detection:** This is primarily a function of the Data Link Layer (Layer 2), which uses a frame check sequence (FCS), and the Transport Layer (Layer 4), which uses checksums.
- **placement of frames on the media / collision detection:** These are Layer 2 (Data Link) and Layer 1 (Physical) functions. For example, placing frames on the media is a Data Link sublayer (MAC) function, and collision detection is used in CSMA/CD (Carrier Sense Multiple Access with Collision Detection) on Ethernet networks at the physical/data link boundary.

---

## Question 10

Within a production network, what is the purpose of configuring a switch with a default gateway address?

- [ ] Hosts that are connected to the switch can use the switch default gateway address to forward packets to a remote destination.
- [ ] A switch must have a default gateway to be accessible by Telnet and SSH.
- [x] **The default gateway address is used to forward packets originating from the switch to remote networks.**
- [ ] It provides a next-hop address for all traffic that flows through the switch.

> [!NOTE]
> **Explanation:** **Correct Answer:** The default gateway address is used to forward packets originating from the switch to remote networks.

**Concept & Details:**
A Layer 2 switch is primarily used to connect devices on the same local network. However, to manage the switch remotely (using protocols like SSH (Secure Shell) or HTTPS (Hypertext Transfer Protocol Secure)) from another network, the switch itself must have a way to reply to those remote administrative queries. By configuring a **default gateway** on the switch, you give it the ability to send packets that *originate from the switch itself* (such as management traffic, syslog messages, or SNMP (Simple Network Management Protocol) alerts) out to remote networks.

*Why other options are incorrect:*
- **Hosts that are connected to the switch can use the switch default gateway...:** Connected hosts must configure their own default gateway pointing directly to the router, not the switch. The switch does not route traffic for the hosts.
- **A switch must have a default gateway to be accessible by Telnet and SSH:** A switch can still be accessed via Telnet or SSH from devices located *within the same local network* (LAN) without a default gateway. The gateway is only needed if the administrator is connecting from a *different* network.
- **It provides a next-hop address for all traffic that flows through the switch:** A Layer 2 switch forwards frames based on MAC addresses, not IP routing tables, so it does not use the default gateway for transit traffic passing between ports.

---

## Question 11

What is a basic characteristic of the IP protocol?

- [x] **connectionless**
- [ ] media dependent
- [ ] user data segmentation
- [ ] reliable end-to-end delivery

> [!NOTE]
> **Explanation:** **Correct Answer:** connectionless

**Concept & Details:**
A key characteristic of the **IP (Internet Protocol)** is that it is **connectionless**. This means that when a device wants to send a packet, it does not send control messages first to establish a pre-arranged connection or "handshake" with the receiver. It simply places the packet onto the network and trusts that it will reach its destination. This keeps the protocol lightweight and fast.

*Why other options are incorrect:*
- **media dependent:** IP is **media independent**. It does not care whether the physical medium carrying the data is copper cable, optical fiber, or wireless (Wi-Fi). It works the same way on all of them.
- **user data segmentation:** Segmenting large pieces of user data into smaller portions is the job of the Transport Layer (Layer 4), specifically TCP, not IP (Layer 3).
- **reliable end-to-end delivery:** IP is an **unreliable/best-effort** protocol. It does not perform error checking, flow control, or acknowledgment of received packets. Reliability is handled by TCP at Layer 4.

---

## Question 12

Which field in the IPv4 header is used to prevent a packet from traversing a network endlessly?

- [x] **Time-to-Live**
- [ ] Sequence Number
- [ ] Acknowledgment Number
- [ ] Differentiated Services

> [!NOTE]
> **Explanation:** **Correct Answer:** Time-to-Live

**Concept & Details:**
The **Time-to-Live (TTL)** field in the IPv4 header is an 8-bit value that acts as a safety mechanism to prevent packets from looping endlessly around the internet (which could happen if there is a routing loop). Every time a packet arrives at a router, the router decrements (reduces) the TTL value by 1. If the TTL drops to 0, the router discards the packet and sends an ICMP (Internet Control Message Protocol) "Time Exceeded" message back to the sender.

*Why other options are incorrect:*
- **Sequence Number / Acknowledgment Number:** These are fields in the Layer 4 **TCP (Transmission Control Protocol)** header, not the Layer 3 IP header. They are used to track and order segments.
- **Differentiated Services:** This field (formerly Type of Service) is used for Quality of Service (QoS) markings to prioritize certain types of traffic (like voice or video) over others, not to limit packet lifetime.

---

## Question 13

What is one advantage that the IPv6 simplified header offers over IPv4?

- [ ] smaller-sized header
- [ ] little requirement for processing checksums
- [ ] smaller-sized source and destination IP addresses
- [x] **efficient packet handling**

> [!NOTE]
> **Explanation:** **Correct Answer:** efficient packet handling

**Concept & Details:**
Although IPv6 addresses are much larger than IPv4 addresses, the IPv6 header was redesigned to be simpler and more streamlined. The IPv6 header has a fixed length of 40 bytes and contains only 8 fields (compared to 12 fields in IPv4). Unnecessary fields, such as the Header Checksum and fragmentation fields, were removed from the main header. This simplicity allows routers to process and forward packets much faster, leading to **more efficient packet handling** across the network.

*Why other options are incorrect:*
- **smaller-sized header:** The IPv6 base header is actually larger (40 bytes) than the minimum IPv4 header (20 bytes). However, it is simpler because it contains fewer fields and has a fixed size.
- **little requirement for processing checksums:** In IPv6, the header checksum was completely removed (not just simplified) to save processing time on intermediate routers, relying on Layer 2 and Layer 4 check mechanisms instead.
- **smaller-sized source and destination IP addresses:** This is false. IPv6 addresses are 128 bits (4 times larger than the 32-bit IPv4 addresses).

---

## Question 14

What IPv4 header field identifies the upper layer protocol carried in the packet?

- [x] **Protocol**
- [ ] Identification
- [ ] Version
- [ ] Differentiated Services

> [!NOTE]
> **Explanation:** **Correct Answer:** Protocol

**Concept & Details:**
The **Protocol** field in the IPv4 header (an 8-bit field) is used to tell the receiving device which transport layer protocol (or other Layer 4 protocol) is waiting inside the packet payload. For example, if the value is `6`, the packet contains a **TCP (Transmission Control Protocol)** segment; if the value is `17`, it contains a **UDP (User Datagram Protocol)** packet; and if it's `1`, it is carrying **ICMP (Internet Control Message Protocol)** data.

*Why other options are incorrect:*
- **Identification:** This field is used to identify packets that have been fragmented, helping the destination host reassemble them.
- **Version:** This specifies the IP version being used (e.g., a value of `4` for IPv4).
- **Differentiated Services:** This field is used to classify and manage traffic priority (QoS) on the network.

---

## Question 15

Refer to the exhibit. Match the packets with their destination IP address to the exiting interfaces on the router. (Not all targets are used.)

Place the options in the following order:

![exhibit](https://itexamanswers.net/wp-content/uploads/2019/12/2024-09-17_144248.jpg)

| packets with destination of 172.17.6.15  | FastEthernet0/0 |
| ---------------------------------------- | --------------- |
| packets with destination of 172.17.14.8  | FastEthernet0/1 |
| packets with destination of 172.17.12.10 | FastEthernet1/0 |
| packets with destination of 172.17.10.5  | FastEthernet1/1 |
| packets with destination of 172.17.8.20  | Serial0/0/0     |

> [!NOTE]
> **Explanation:** **Correct Answer:** Refer to matching details in the explanation.

**Concept & Details:**
To match the destination IP addresses of the packets to the router's exiting interfaces, the router performs a lookup in its routing table, searching for the longest prefix match (the most specific network route that matches the IP address).

Here is the breakdown of how each packet is forwarded based on the routing table entries:
- **172.17.6.15** matches the network subnet associated with interface **FastEthernet 0/0**.
- **172.17.14.8** matches the subnet for interface **FastEthernet 0/1**.
- **172.17.12.10** matches the subnet for interface **FastEthernet 1/0**.
- **172.17.10.5** matches the subnet for interface **FastEthernet 1/1**.
- **172.17.8.20**: Since the network `172.17.8.0` has no specific entry in the routing table, the router will forward it out of the gateway of last resort (default route), which is interface **Serial 0/0/0**.

---

## Question 16

What information does the loopback test provide?

- [x] **The TCP/IP stack on the device is working correctly.**
- [ ] The device has end-to-end connectivity.
- [ ] DHCP is working correctly.
- [ ] The Ethernet cable is working correctly.
- [ ] The device has the correct IP address on the network.

> [!NOTE]
> **Explanation:** **Correct Answer:** The TCP/IP stack on the device is working correctly.

**Concept & Details:**
A **loopback test** is performed by pinging the reserved IP address `127.0.0.1`. When you run this command, the operating system sends packets to its own network card (NIC) and reads them back without actually sending them out onto the physical network cable. If the ping succeeds, it confirms that your local computer's network interface card drivers, configuration, and **TCP/IP stack** are installed, active, and functioning properly at the software level.

*Why other options are incorrect:*
- **The device has end-to-end connectivity / The Ethernet cable is working correctly:** The loopback test does not send any signals onto the physical cable or through the switch/router, so it cannot verify external wiring or remote network connectivity.
- **DHCP (Dynamic Host Configuration Protocol) is working correctly / The device has the correct IP address:** You can successfully ping the loopback address even if your network card has no cable plugged in and has failed to obtain an IP address via DHCP.

---

## Question 17

What routing table entry has a next hop address associated with a destination network?

- [ ] directly-connected routes
- [ ] local routes
- [x] **remote routes**
- [ ] C and L source routes

> [!NOTE]
> **Explanation:** **Correct Answer:** remote routes

**Concept & Details:**
A router's routing table contains different types of routes. A **remote route** is a path to a network that is not physically attached to one of the router's own interfaces. Because the destination is far away, the router cannot deliver the packet directly. Instead, it must send the packet to another router along the path. The address of that next router is called the **next-hop address**. Therefore, only remote routes require a next-hop IP address.

*Why other options are incorrect:*
- **directly-connected routes / local routes (C and L source routes):** These routes represent networks that are plugged directly into the router's own ports. When forwarding packets to these networks, the router sends them directly out the interface to the destination host, so there is no "next-hop" router involved.

---

## Question 18

How do hosts ensure that their packets are directed to the correct network destination?

- [x] **They have to keep their own local routing table that contains a route to the loopback interface, a local network route, and a remote default route.​**
- [ ] They always direct their packets to the default gateway, which will be responsible for the packet delivery.
- [ ] They search in their own local routing table for a route to the network destination address and pass this information to the default gateway.
- [ ] They send a query packet to the default gateway asking for the best route.

> [!NOTE]
> **Explanation:** **Correct Answer:** They have to keep their own local routing table that contains a route to the loopback interface, a local network route, and a remote default route.​

**Concept & Details:**
Every network host (like a PC, laptop, or server) must maintain its own **local routing table** (which you can view on Windows using the command `route print` or `netstat -r`). This table tells the host how to handle traffic:
1. **Loopback interface (127.0.0.1):** For traffic sent to itself.
2. **Local network route:** For traffic sent to neighbors on the same local switch (no gateway needed).
3. **Default route (0.0.0.0/0):** For traffic sent to remote networks (directing it to the default gateway router).
Without this table, the host wouldn't know whether to send a packet directly onto the local LAN or forward it to the router.

*Why other options are incorrect:*
- **They always direct their packets to the default gateway...:** This is incorrect because hosts do not send local LAN traffic to the gateway; they send it directly to the local destination host.
- **They search... and pass this information to the default gateway / They send a query packet...:** Hosts do not exchange routing table lookups or query the gateway for routes before sending data. They simply make a local decision using their routing table and forward the packet accordingly.

---

## Question 19

When transporting data from real-time applications, such as streaming audio and video, which field in the IPv6 header can be used to inform the routers and switches to maintain the same path for the packets in the same conversation?

- [ ] Next Header
- [x] **Flow Label**
- [ ] Traffic Class
- [ ] Differentiated Services

> [!NOTE]
> **Explanation:** **Correct Answer:** Flow Label

**Concept & Details:**
The **Flow Label** is a 20-bit field in the IPv6 header. It is designed to handle real-time, delay-sensitive traffic like voice and video. A "flow" is a sequence of packets sent from a specific source to a specific destination. By labeling these packets with a unique Flow Label, routers and switches along the way can easily identify them as belonging to the same conversation. This allows the network devices to route all packets of that flow along the exact same path, preventing packets from arriving out of order or experiencing varied delays (jitter).

*Why other options are incorrect:*
- **Next Header:** This field specifies the type of header immediately following the IPv6 header (like TCP, UDP, or an Extension Header), similar to the Protocol field in IPv4.
- **Traffic Class:** This field (equivalent to Differentiated Services in IPv4) is used for packet prioritization (QoS) but does not force packets to follow the same path.
- **Differentiated Services:** This is the IPv4 equivalent of Traffic Class and is not a field in the IPv6 header.

---

## Question 20

What statement describes the function of the Address Resolution Protocol?

- [ ] ARP is used to discover the IP address of any host on a different network.
- [ ] ARP is used to discover the IP address of any host on the local network.
- [ ] ARP is used to discover the MAC address of any host on a different network.
- [x] **ARP is used to discover the MAC address of any host on the local network.**

> [!NOTE]
> **Explanation:** **Correct Answer:** ARP is used to discover the MAC address of any host on the local network.

**Concept & Details:**
**ARP (Address Resolution Protocol)** is a fundamental protocol used in IPv4 networks. When a device wants to send an Ethernet frame to another device on the same local network, it already knows the destination's IP (Layer 3) address, but it cannot send the frame without knowing the destination's **MAC (Media Access Control, Layer 2) address**. ARP resolves this by sending an ARP request to ask: *"Who has this IP address? Please tell me your MAC address."* The target device replies with its MAC address, which the sender then saves in its ARP cache for future packets.

*Why other options are incorrect:*
- **ARP is used to discover the IP address...:** ARP is used to discover MAC addresses, not IP addresses (which are already known before ARP runs).
- **ARP is used to discover the MAC address of any host on a different network:** ARP requests are sent as broadcasts, and routers do not forward broadcasts. Therefore, ARP cannot be used to discover the MAC address of a host on a different network. To send packets to a different network, a host uses ARP to find the MAC address of its *default gateway* router.

---

## Question 21

Under which two circumstances will a switch flood a frame out of every port except the port that the frame was received on? (Choose two.)

- [x] **The frame has the broadcast address as the destination address.**
- [x] **The destination address is unknown to the switch.**
- [ ] The source address in the frame header is the broadcast address.
- [ ] The source address in the frame is a multicast address.
- [ ] The destination address in the frame is a known unicast address.

> [!NOTE]
> **Explanation:** **Correct Answer:** The frame has the broadcast address as the destination address AND The destination address is unknown to the switch.

**Concept & Details:**
A switch maintains a **MAC address table** (a list mapping port numbers to the MAC addresses of connected devices). When a frame arrives at a switch, the switch examines the destination MAC address to decide where to send it:
1. **Broadcast Frame (Destination MAC: FFFF.FFFF.FFFF):** Since a broadcast is meant for everyone, the switch must forward it out of all active ports (except the port where the frame entered).
2. **Unknown Unicast Frame:** If the destination MAC address is a unicast address (intended for a single receiver) but is *not* currently listed in the switch's MAC address table, the switch does not know which port the destination device is connected to. To ensure the frame reaches its target, the switch floods the frame out of all ports (except the incoming port). Once the destination device replies, the switch learns its MAC address and updates its table.

*Why other options are incorrect:*
- **The source address in the frame header is the broadcast/multicast address:** A source address must always be a unicast address (representing the specific device that sent the frame). It can never be a broadcast or multicast address.
- **The destination address in the frame is a known unicast address:** If the destination MAC address is known, the switch will forward the frame only out of the specific port associated with that MAC address, which is called unicast forwarding (not flooding).

---

## Question 22

Which statement describes the treatment of ARP requests on the local link?

- [ ] They must be forwarded by all routers on the local network.
- [x] **They are received and processed by every device on the local network.**
- [ ] They are dropped by all switches on the local network.
- [ ] They are received and processed only by the target device.

> [!NOTE]
> **Explanation:** **Correct Answer:** They are received and processed by every device on the local network.

**Concept & Details:**
When a device needs to send data to a local IP address but doesn't know the destination's MAC address, it sends out an **ARP (Address Resolution Protocol) request**. Because the sending device doesn't know who has the target IP, it sends the request as a Layer 2 **broadcast** (destination MAC: `FFFF.FFFF.FFFF`). Switches flood broadcasts out of every port, meaning **every device on the local network** receives the frame and processes it (passes it up to the network layer to check if the requested IP matches its own). Only the device with the matching IP address will reply, while the others will discard the packet.

*Why other options are incorrect:*
- **They must be forwarded by all routers...:** Routers block Layer 2 broadcasts and do not forward ARP requests to other networks.
- **They are dropped by all switches...:** Switches forward (flood) broadcast frames; they do not drop them.
- **They are received and processed only by the target device:** Because it is a broadcast, every device must receive and inspect the frame first to see if it is the target device. It cannot bypass other devices.

---

## Question 23

Which destination address is used in an ARP request frame?

- [ ] 0.0.0.0
- [ ] 255.255.255.255
- [x] **FFFF.FFFF.FFFF**
- [ ] AAAA.AAAA.AAAA
- [ ] the physical address of the destination host

> [!NOTE]
> **Explanation:** **Correct Answer:** FFFF.FFFF.FFFF

**Concept & Details:**
An **ARP (Address Resolution Protocol) request** is encapsulated inside an Ethernet frame. Because the sending device does not know the specific MAC address of the target host, it must send the request to all devices on the LAN (Local Area Network). To do this, it uses the Layer 2 broadcast MAC address, which is **FFFF.FFFF.FFFF**. Every network card that receives a frame with this destination address will accept the frame and pass it to the operating system for processing.

*Why other options are incorrect:*
- **255.255.255.255:** This is the Layer 3 (IP) broadcast address, not the Layer 2 (MAC/Ethernet) address used in the frame header.
- **0.0.0.0:** This is an invalid IP address used in routing or temporary DHCP configuration, not a destination MAC address.
- **AAAA.AAAA.AAAA:** This is a placeholder MAC address and has no special broadcast meaning.
- **the physical address of the destination host:** The physical address (MAC address) of the destination host is what the ARP request is trying to find, so it is unknown at the time of sending.

---

## Question 24

A network technician issues the arp -d * command on a PC after the router that is connected to the LAN is reconfigured. What is the result after this command is issued?

- [x] **The ARP cache is cleared.**
- [ ] The current content of the ARP cache is displayed.
- [ ] The detailed information of the ARP cache is displayed.
- [ ] The ARP cache is synchronized with the router interface.

> [!NOTE]
> **Explanation:** **Correct Answer:** The ARP cache is cleared.

**Concept & Details:**
The **ARP (Address Resolution Protocol) cache** (or ARP table) is a temporary database on a computer that stores IP-to-MAC address mappings. If a router is reconfigured (for example, its network card is replaced, which changes its physical MAC address), the PC's cached ARP entry for the router's IP address becomes outdated (pointing to the old MAC address). Running the command `arp -d *` (the `-d` stands for delete, and `*` is a wildcard representing all entries) clears all cached mappings. This forces the PC to send new ARP requests and learn the updated, correct MAC addresses.

*Why other options are incorrect:*
- **The current content of the ARP cache is displayed:** To view the ARP cache, you would run `arp -a`.
- **The detailed information of the ARP cache is displayed:** The command for deleting entries does not display details.
- **The ARP cache is synchronized with the router interface:** The PC cannot directly push or synchronize tables with a router. It must rebuild its cache dynamically by sending ARP requests as needed.

---

## Question 25

Refer to the exhibit. The exhibit shows a small switched network and the contents of the MAC address table of the switch. PC1 has sent a frame addressed to PC3. What will the switch do with the frame?

![exhibit](https://itexamanswers.net/wp-content/uploads/2019/12/i275394v1n1_207267.png)

- [ ] The switch will discard the frame.
- [ ] The switch will forward the frame only to port 2.
- [x] **The switch will forward the frame to all ports except port 4.**
- [ ] The switch will forward the frame to all ports.
- [ ] The switch will forward the frame only to ports 1 and 3.

> [!NOTE]
> **Explanation:** **Correct Answer:** The switch will forward the frame to all ports except port 4.

**Concept & Details:**
When PC1 sends a frame to PC3, the frame enters the switch on **port 4**. The switch looks at the destination MAC address of PC3 in the frame. It then checks its internal **MAC address table**.
According to the exhibit, the MAC address of PC3 is not present in the switch's MAC address table. Since the destination MAC is unknown, the switch must perform **unknown unicast flooding**. This means it forwards a copy of the frame out of every active port on the switch (ports 1, 2, and 3), *except* for the port that the frame originally arrived on (port 4), to ensure the target device receives it.

*Why other options are incorrect:*
- **The switch will discard the frame:** Switches do not drop packets just because the destination MAC is unknown; they flood them to discover where the device is.
- **The switch will forward the frame only to port 2 / only to ports 1 and 3:** Without knowing which port PC3 is connected to, the switch cannot target specific ports.
- **The switch will forward the frame to all ports:** The switch never sends a frame back out of the same port it arrived on (port 4), as this would cause loops and redundant traffic.

---

## Question 26

Which two types of IPv6 messages are used in place of ARP for address resolution?

- [ ] anycast
- [ ] broadcast
- [ ] echo reply
- [ ] echo request
- [x] **neighbor solicitation**
- [x] **neighbor advertisement**

> [!NOTE]
> **Explanation:** **Correct Answer:** neighbor solicitation AND neighbor advertisement

**Concept & Details:**
In IPv6 networks, there is no ARP (Address Resolution Protocol) and no broadcast traffic. Instead, address resolution (finding the Layer 2 MAC (Media Access Control) address of a known IPv6 destination) is handled by the **ICMPv6 (Internet Control Message Protocol version 6) Neighbor Discovery (ND) protocol**. It uses two main message types:
1. **Neighbor Solicitation (NS):** Sent by a host as a multicast to ask a specific device on the local link for its MAC address.
2. **Neighbor Advertisement (NA):** Sent by the target device as a unicast back to the sender, containing its physical MAC address.

*Why other options are incorrect:*
- **broadcast:** IPv6 does not use broadcast messages at all.
- **anycast:** This is a one-to-nearest delivery address type, not a mapping message type.
- **echo reply / echo request:** These are ICMPv6 messages used for troubleshooting and testing connectivity (e.g., when you run a ping command), not for address resolution.

---

## Question 27

What is the aim of an ARP spoofing attack?

- [ ] to flood the network with ARP reply broadcasts
- [ ] to fill switch MAC address tables with bogus addresses
- [x] **to associate IP addresses to the wrong MAC address**
- [ ] to overwhelm network hosts with ARP requests

> [!NOTE]
> **Explanation:** **Correct Answer:** link-local

**Concept & Details:**
A **link-local** address is an IPv6 address that is automatically configured on any IPv6-enabled interface. Link-local addresses are restricted to the local network link (they are not routable across different networks). They always begin with the prefix **FE80::/10** (which covers any address starting with FE80 to FEBF). They are used for local network communications, routing protocol exchanges, and finding neighbors on the same link.

*Why other options are incorrect:*
- **global unicast:** These are equivalent to public IPv4 addresses and are routable on the internet (typically starting with 2000::/3).
- **unique local:** These are similar to private IPv4 addresses (starting with FC00::/7) and are routable within an organization but not on the internet.
- **multicast:** These are used to send a packet to multiple destinations simultaneously (starting with FF00::/8).

---

## Question 28

Refer to the exhibit. PC1 attempts to connect to File_server1 and sends an ARP request to obtain a destination MAC address. Which MAC address will PC1 receive in the ARP reply?

![exhibit](https://itexamanswers.net/wp-content/uploads/2019/12/2020-01-11_210907.jpg)

- [ ] the MAC address of S1
- [x] **the MAC address of the G0/0 interface on R1**
- [ ] the MAC address of the G0/0 interface on R2
- [ ] the MAC address of S2
- [ ] the MAC address of File_server1

> [!NOTE]
> **Explanation:** **Correct Answer:** 16

**Concept & Details:**
In the proposed hierarchical IPv6 addressing scheme, the subnet portion is represented by a single hexadecimal digit. A hexadecimal digit uses base-16 numbering, which includes the characters `0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F`.
Since a single hexadecimal digit has exactly 16 unique possible values, the maximum number of unique subnets that can be created per sub-site under this design is **16**.

*Why other options are incorrect:*
- Other values (like 256 or 65536) would require two or more hexadecimal characters (8 or 16 bits) to represent the subnet ID, whereas the design specifies only one character.

---

## Question 29

Where are IPv4 address to Layer 2 Ethernet address mappings maintained on a host computer?

- [ ] neighbor table
- [x] **ARP cache**
- [ ] routing table
- [ ] MAC address table

> [!NOTE]
> **Explanation:** **Correct Answer:** the MAC address of the IPv6 enabled interface

**Concept & Details:**
The **EUI-64 (Extended Unique Identifier 64-bit)** process is a method used by hosts to automatically generate a unique 64-bit Interface ID (the host portion of an IPv6 address). It does this by utilizing the interface's unique 48-bit physical **MAC (Media Access Control) address**:
1. The 48-bit MAC address is split in half (24 bits each).
2. A fixed 16-bit hex value, **FF:FE**, is inserted in the middle of the MAC address to expand it to 64 bits.
3. The 7th bit of the MAC address (the Universal/Local bit) is inverted (changed from 0 to 1 or vice-versa).

*Why other options are incorrect:*
- The process specifically relies on the hardware MAC address of the local network interface, not an IP address, routing table entry, or random number generator.

---

## Question 30

What important information is examined in the Ethernet frame header by a Layer 2 device in order to forward the data onward?

- [ ] source MAC address
- [ ] source IP address
- [x] **destination MAC address**
- [ ] Ethernet type
- [ ] destination IP address

> [!NOTE]
> **Explanation:** **Correct Answer:** 2001:DB8:BC15:A

**Concept & Details:**
In IPv6, the network portion of the address (known as the network prefix) is determined by the prefix length notation `/64`.
A prefix length of `/64` means the first 64 bits (the first four hextets, since each hextet is 16 bits) of the 128-bit address represent the network:
1. `2001` (16 bits)
2. `DB8` (16 bits)
3. `BC15` (16 bits)
4. `A` (16 bits)
Adding these together gives the network prefix: `2001:DB8:BC15:A`. The remaining 64 bits represent the unique interface ID (host portion).

*Why other options are incorrect:*
- Any portion smaller or larger (like including `12AB` or excluding `A`) does not represent the first 64 bits specified by the `/64` mask.

---

## Question 31

Match the commands to the correct actions. (Not all options are used.)

![exhibit](https://itexamanswers.net/wp-content/uploads/2019/12/2024-09-17_144554.jpg)

| displays a message after accessing the router | Router(config)# banner motd #       |
| --------------------------------------------- | ----------------------------------- |
| provides security on the console              | Router(config-line)# password class |
| configures a name on the router               | Router(config)# hostname CL1        |

> [!NOTE]
> **Explanation:** **Correct Answer:** Refer to matching details in the explanation.

**Concept & Details:**
Basic Cisco IOS (Internetwork Operating System) commands are matched to their actions as follows:
- **Router(config)# banner motd #** is the global configuration command used to set up the Message of the Day (MOTD) banner, which displays a security message when accessing the router.
- **Router(config-line)# password class** is the line configuration command used to secure the console line (line console 0) with the password "class".
- **Router(config)# hostname CL1** is the global configuration command used to configure or change the host name of the router to "CL1".

---

## Question 32

A new network administrator has been asked to enter a banner message on a Cisco device. What is the fastest way a network administrator could test whether the banner is properly configured?

- [ ] Reboot the device.
- [ ] Enter CTRL-Z at the privileged mode prompt.
- [ ] Exit global configuration mode.
- [ ] Power cycle the device.
- [x] **Exit privileged EXEC mode and press Enter.**

> [!NOTE]
> **Explanation:** **Correct Answer:** Exit privileged EXEC mode and press Enter.

**Concept & Details:**
The MOTD (Message of the Day) banner is displayed whenever a user attempts to establish a console or remote login session to the device. The fastest, non-disruptive way to verify that your configured banner displays correctly is to end the current privileged EXEC session by typing `exit` or `logout`. This logs the administrator out, returning to the login prompt. Pressing Enter will then trigger the device to display the configured MOTD banner.

*Why other options are incorrect:*
- **Rebooting/Power cycling the device:** While this does display the banner on startup, it causes network downtime and takes several minutes, making it highly inefficient.
- **Viewing the configuration (show running-config):** This command will confirm that the command was entered, but it does not test the visual rendering and presentation of the banner to a connecting user.

---

## Question 33

A network administrator requires access to manage routers and switches locally and remotely. Match the description to the access method. (Not all options are used.)

Place the options in the following order:

![exhibit](https://itexamanswers.net/wp-content/uploads/2019/12/2024-09-17_155949.jpg)

| remote access method that uses encryption | SSH     |
| ----------------------------------------- | ------- |
| preferred out-of-band access method       | console |
| remote access via a dialup connection     | AUX     |
| unsecure remote access                    | Telnet  |

> [!NOTE]
> **Explanation:** **Correct Answer:** Refer to matching details in the explanation.

**Concept & Details:**
Cisco router and switch management access methods are described as follows:
- **Console Port:** Used for out-of-band management. It provides direct local access to the device's CLI (Command Line Interface) via a physical cable, typically used for initial configuration or when network access is unavailable.
- **AUX (Auxiliary) Port:** Used for out-of-band remote management. It allows an administrator to connect a modem to dial in over a telephone network.
- **Telnet:** Used for in-band remote access over an active network. It does not encrypt traffic, transmitting credentials in plain text.
- **SSH (Secure Shell):** Used for secure in-band remote access. It uses encryption to protect all transmitted data, including passwords, from interception.

---

## Question 34

Match the phases to the functions during the boot up process of a Cisco router. (Not all options are used.)

![exhibit](https://itexamanswers.net/wp-content/uploads/2019/12/2024-09-17_145029.jpg)

> [!NOTE]
> **Explanation:** **Correct Answer:** Refer to matching details in the explanation.

**Concept & Details:**
The bootup process of a Cisco router consists of three main phases:
1. **Perform the POST (Power-On Self-Test) and load the bootstrap program:** The router tests its hardware components (stored in ROM (Read-Only Memory)) and loads the bootstrap program into memory to start the boot process.
2. **Locate and load the Cisco IOS (Internetwork Operating System) software:** The bootstrap program searches Flash memory (or TFTP server) to find and load the IOS operating system into RAM.
3. **Locate and load the startup configuration file:** The IOS searches NVRAM (Non-Volatile RAM) for the `startup-config` file. If found, it copies it to RAM as `running-config`. If it is missing, the router enters Setup Mode to let the administrator input settings manually.

---

## Question 35

Match the command with the device mode at which the command is entered. (Not all options are used.)

Place the options in the following order:

![exhibit](https://itexamanswers.net/wp-content/uploads/2019/12/2024-09-17_145429.jpg)

| service password-encryption          | R1(config)#      |
| ------------------------------------ | ---------------- |
| enable                               | R1>              |
| copy running-config startup-config   | R1#              |
| login                                | R1(config-line)# |
| ip address 192.168.4.4 255.255.255.0 | R1(config-if)#   |

> [!NOTE]
> **Explanation:** **Correct Answer:** Refer to matching details in the explanation.

**Concept & Details:**
Cisco IOS modes and command matching:
- **enable** command is entered at the User EXEC mode (`R1>`) to switch to Privileged EXEC mode.
- **login** command is entered at the Line Configuration mode (`R1(config-line)#`) to enforce password authentication on lines.
- **copy running-config startup-config** command is entered at the Privileged EXEC mode (`R1#`) to save the configuration.
- **ip address 192.168.4.4 255.255.255.0** command is entered in Interface Configuration mode (`R1(config-if)#`) to set an IP on an interface.
- **service password-encryption** command is entered in Global Configuration mode (`R1(config)#`) to encrypt plain-text passwords.

---

## Question 36

What are two functions of NVRAM? (Choose two.)

- [ ] to store the routing table
- [x] **to retain contents when power is removed**
- [x] **to store the startup configuration file**
- [ ] to contain the running configuration file
- [ ] to store the ARP table

> [!NOTE]
> **Explanation:** **Correct Answer:** to retain contents when power is removed AND to store the startup configuration file

**Concept & Details:**
**NVRAM (Non-Volatile Random-Access Memory)** is a crucial storage component on Cisco devices. It has two primary characteristics:
1. It is non-volatile, meaning it **does not lose its stored information when the device is powered down or loses electricity**.
2. It is dedicated to **storing the startup configuration file (`startup-config`)**, which the device reads every time it boots.

*Why other options are incorrect:*
- **storing the running configuration / operating system:** The active running configuration (`running-config`) is stored in volatile RAM (lost during power outages). The Cisco IOS operating system is stored in Flash memory, not NVRAM.

---

## Question 37

A router boots and enters setup mode. What is the reason for this?

- [ ] The IOS image is corrupt.
- [ ] Cisco IOS is missing from flash memory.
- [x] **The configuration file is missing from NVRAM.**
- [ ] The POST process has detected hardware failure.

> [!NOTE]
> **Explanation:** **Correct Answer:** The configuration file is missing from NVRAM.

**Concept & Details:**
When a Cisco router finishes loading its IOS operating system, it looks in **NVRAM** for the `startup-config` file. If NVRAM is empty (such as on a brand-new router, or after running the `erase startup-config` command), the router has no configuration to apply. To help the administrator configure the device for the first time, the router boots into **Setup Mode**, presenting an interactive step-by-step configuration prompt.

*Why other options are incorrect:*
- If the Cisco IOS was missing, the router would fail to boot normally and drop into ROMMON (ROM Monitor) mode.
- If RAM or hardware failed, the router would halt during the POST phase.

---

## Question 38

The global configuration command ip default-gateway 172.16.100.1 is applied to a switch. What is the effect of this command?

- [ ] The switch will have a management interface with the address 172.16.100.1.
- [x] **The switch can be remotely managed from a host on another network.**
- [ ] The switch can communicate with other hosts on the 172.16.100.0 network.
- [ ] The switch is limited to sending and receiving frames to and from the gateway 172.16.100.1.

> [!NOTE]
> **Explanation:** **Correct Answer:** The switch can be remotely managed from a host on another network.

**Concept & Details:**
A Layer 2 switch requires an IP address on its Switch Virtual Interface (SVI) to allow administrators to connect to it remotely. However, if the administrator is connecting from a *different* subnet, the switch must know how to route replies back. The command `ip default-gateway [IP]` configures the switch with the local router interface's IP. This allows the switch to send its management traffic (such as SSH, Telnet, or HTTP traffic) to the router so it can be forwarded to the remote administrator.

*Why other options are incorrect:*
- A Layer 2 switch does not perform routing for host devices connected to it. The switch's default gateway is solely used for traffic *originating from* the switch itself.

---

## Question 39

What happens when the transport input ssh command is entered on the switch vty lines?

- [ ] The SSH client on the switch is enabled.
- [x] **Communication between the switch and remote users is encrypted.**
- [ ] The switch requires a username/password combination for remote access.
- [ ] The switch requires remote connections via a proprietary client software.

> [!NOTE]
> **Explanation:** **Correct Answer:** Communication between the switch and remote users is encrypted.

**Concept & Details:**
By default, remote administration lines (vty lines) on a Cisco switch may support unencrypted protocols like Telnet. Entering the command `transport input ssh` restricts remote access to **only SSH (Secure Shell)**. Because SSH encrypts all communications between the administrator's PC and the switch, it prevents unauthorized users on the network from capturing passwords or commands.

*Why other options are incorrect:*
- Telnet connections are blocked by this command, not enabled.
- The command affects remote access, not local console or routing behavior.

---

## Question 40

Refer to the exhibit. A user PC has successfully transmitted packets to www.cisco.com. Which IP address does the user PC target in order to forward its data off the local network?

![exhibit](https://itexamanswers.net/wp-content/uploads/2019/12/i207589v1n1_207589.png)

- [ ] 172.24.255.17
- [ ] 172.24.1.22
- [x] **172.20.0.254**
- [ ] 172.24.255.4
- [ ] 172.20.1.18

> [!NOTE]
> **Explanation:** **Correct Answer:** 172.20.0.254

**Concept & Details:**
When a computer needs to send packets to a server outside its local network (such as a website like www.cisco.com on the Internet), it must send them to its **default gateway**. The default gateway is the IP address of the local router interface that is connected to the same subnet as the host. In this exhibit, the gateway interface on the local LAN has the IP address `172.20.0.254`.

*Why other options are incorrect:*
- Other addresses are either host addresses or interface IPs on remote networks (like WAN/serial interfaces) that the local PC cannot contact directly at Layer 2.

---

## Question 41

Match the configuration mode with the command that is available in that mode. (Not all options are used.)

Place the options in the following order:

![exhibit](https://itexamanswers.net/wp-content/uploads/2019/12/2024-09-17_145611.jpg)

| R1>              | enable                             |
| ---------------- | ---------------------------------- |
| R1#              | copy running-config startup-config |
| R1(config-line)# | login                              |
| R1(config)#      | interface fastethernet 0/0         |

> [!NOTE]
> **Explanation:** **Correct Answer:** Refer to matching details in the explanation.

**Concept & Details:**
Cisco IOS command modes and command availability:
- **enable** command is entered at the User EXEC prompt (`R1>`).
- **login** command is entered at the Line Configuration prompt (`R1(config-line)#`).
- **copy running-config startup-config** command is entered at the Privileged EXEC prompt (`R1#`).
- **interface fastethernet 0/0** command is entered at the Global Configuration prompt (`R1(config)#`).

---

## Question 42

Which three commands are used to set up secure access to a router through a connection to the console interface? (Choose three.)

- [ ] interface fastethernet 0/0
- [ ] line vty 0 4
- [x] **line console 0**
- [ ] enable secret cisco
- [x] **login**
- [x] **password cisco**

> [!NOTE]
> **Explanation:** **Correct Answer:** line console 0 AND login AND password cisco

**Concept & Details:**
To secure a physical connection to the router's console port, an administrator must:
1. Access the console line configuration using the command `line console 0`.
2. Define the access password using `password cisco`.
3. Enable password authentication during login using the `login` command.

*Why other options are incorrect:*
- `interface fastethernet 0/0` is used to configure a network port, not line access.
- `line vty 0 4` is used to configure remote virtual lines (Telnet/SSH) rather than the local physical console.
- `enable secret` configures the privileged EXEC mode password, not the initial login password for the console port.

---

## Question 43

Refer to the exhibit. Consider the IP address configuration shown from PC1. What is a description of the default gateway address?

![exhibit](https://itexamanswers.net/wp-content/uploads/2019/12/i206397v1n2_206397.png)

- [ ] It is the IP address of the Router1 interface that connects the company to the Internet.
- [x] **It is the IP address of the Router1 interface that connects the PC1 LAN to Router1.**
- [ ] It is the IP address of Switch1 that connects PC1 to other devices on the same LAN.
- [ ] It is the IP address of the ISP network device located in the cloud.

> [!NOTE]
> **Explanation:** **Correct Answer:** It is the IP address of the Router1 interface that connects the PC1 LAN to Router1.

**Concept & Details:**
The **default gateway** is the path through which a local host sends traffic destined for remote networks. The default gateway address configured on PC1 must match the IP address of the router interface (Router1) that resides on the same local subnet as PC1. This interface acts as the entry point to the rest of the network.

*Why other options are incorrect:*
- The default gateway is not the switch IP (which is only for switch management), nor is it a remote server IP. It must be the router interface on the host's local network.

---

## Question 44

Which two functions are primary functions of a router? (Choose two.)

- [x] **packet forwarding**
- [ ] microsegmentation
- [ ] domain name resolution
- [x] **path selection**
- [ ] flow control

> [!NOTE]
> **Explanation:** **Correct Answer:** packet forwarding AND path selection

**Concept & Details:**
A router's main job is to move data packets between different networks. Its two primary functions at the Network Layer (Layer 3) are:
1. **Path Selection:** Evaluating routing tables to determine the most efficient path (the best route) to forward a packet to its destination.
2. **Packet Forwarding:** Taking a packet received on one interface and forwarding it out of another interface based on the path selection decision.

*Why other options are incorrect:*
- Functions like collision domain separation, frame switching, and MAC address learning are functions of Layer 2 switches, not primary router functions.

---

## Question 45

What is the effect of using the Router# copy running-config startup-config command on a router?

- [ ] The contents of ROM will change.
- [ ] The contents of RAM will change.
- [x] **The contents of NVRAM will change.**
- [ ] The contents of flash will change.

> [!NOTE]
> **Explanation:** **Correct Answer:** The contents of NVRAM will change.

**Concept & Details:**
When a router is configured, changes are active in the volatile **running-config** stored in RAM. If the router reboots, these changes are lost. The command `copy running-config startup-config` saves the active configuration to the permanent **startup-config** file in **NVRAM (Non-Volatile RAM)**. This modifies NVRAM contents to ensure the configuration is preserved after a power cycle.

*Why other options are incorrect:*
- **Flash memory contents change:** Flash memory stores the IOS operating system image, not the configuration files.
- **The running configuration is cleared:** The running configuration in RAM remains active and untouched.

---

## Question 46

What will happen if the default gateway address is incorrectly configured on a host?

- [ ] The host cannot communicate with other hosts in the local network.
- [ ] The switch will not forward packets initiated by the host.
- [ ] The host will have to use ARP to determine the correct address of the default gateway.
- [x] **The host cannot communicate with hosts in other networks.**
- [ ] A ping from the host to 127.0.0.1 would not be successful.

> [!NOTE]
> **Explanation:** **Correct Answer:** The host cannot communicate with hosts in other networks.

**Concept & Details:**
The **default gateway** is the address of the router that connects the local network to remote networks. If a host has an incorrect default gateway address:
- It **can still communicate with local hosts** on the same subnet (using ARP and a switch).
- It **cannot communicate with hosts on remote networks** because it does not know the correct router address to send out-of-subnet traffic to.

*Why other options are incorrect:*
- Local communication does not involve the default gateway, so it remains unaffected by a gateway configuration error.

---

## Question 47

What are two potential network problems that can result from ARP operation? (Choose two.)

- [ ] Manually configuring static ARP associations could facilitate ARP poisoning or MAC address spoofing.
- [x] **On large networks with low bandwidth, multiple ARP broadcasts could cause data communication delays.**
- [x] **Network attackers could manipulate MAC address and IP address mappings in ARP messages with the intent of intercepting network traffic.**
- [ ] Large numbers of ARP request broadcasts could cause the host MAC address table to overflow and prevent the host from communicating on the network.
- [ ] Multiple ARP replies result in the switch MAC address table containing entries that match the MAC addresses of hosts that are connected to the relevant switch port.

> [!NOTE]
> **Explanation:** **Correct Answer:** On large networks with low bandwidth, multiple ARP broadcasts could cause data communication delays. AND Network attackers could manipulate MAC address and IP address mappings in ARP messages with the intent of intercepting network traffic.

**Concept & Details:**
ARP is vital but can cause two key network issues:
1. **Network Congestion (ARP Broadcasts):** Because ARP requests are broadcasted, every device on the local network must receive and process them. In large networks with low bandwidth, high broadcast traffic can cause packet delays.
2. **Security Vulnerabilities (ARP Spoofing):** ARP has no authentication. An attacker can send spoofed ARP replies to map a legitimate IP (like the default gateway) to their own MAC address, allowing them to intercept traffic (Man-in-the-Middle).

*Why other options are incorrect:*
- ARP tables do not typically overflow under normal conditions, and static ARP associations prevent (rather than facilitate) ARP spoofing.

---

## Question 48

Open the PT activity. Perform the tasks in the activity instructions and then answer the question.

- [ ] R1: G0/0 and S0/0/0 R2: G0/0 and S0/0/0
- [ ] R1: G0/1 and S0/0/1 R2: G0/0 and S0/0/1
- [x] **R1: G0/0 and S0/0/0 R2: G0/1 and S0/0/0**
- [ ] R1: G0/0 and S0/0/1 R2: G0/1 and S0/0/1

> [!NOTE]
> **Explanation:** **Correct Answer:** R1: G0/0 and S0/0/0 R2: G0/1 and S0/0/0

**Concept & Details:**
Using the command `show ip interface brief` in Cisco IOS, an interface's operational status is displayed. An interface is active and fully functional when both the physical layer ("Status" column) and data-link layer ("Protocol" column) are marked as **up**. On R1, these interfaces are GigabitEthernet0/0 (G0/0) and Serial0/0/0 (S0/0/0). On R2, they are GigabitEthernet0/1 (G0/1) and Serial0/0/0 (S0/0/0).

*Why other options are incorrect:*
- Interfaces marked as "administratively down" or "down" are inactive and cannot transmit network traffic.

---

## Question 49

Which term describes a field in the IPv4 packet header used to identify the next level protocol?

- [x] **protocol**
- [ ] destination IPv4 address
- [ ] source IPv4 address
- [ ] TTL

> [!NOTE]
> **Explanation:** **Correct Answer:** protocol

**Concept & Details:**
The **Protocol** field in the IPv4 header is an 8-bit value that identifies the upper-layer transport protocol (Layer 4) carried in the IP packet's payload. Common values include `6` for TCP (Transmission Control Protocol) and `17` for UDP (User Datagram Protocol), which tells the receiving operating system where to send the decapsulated data.

*Why other options are incorrect:*
- **Version:** Identifies the IP version (IPv4 vs IPv6).
- **TTL:** Limits the packet lifetime.
- **Header Checksum:** Performs error detection on the header.

---

## Question 50

Which term describes a field in the IPv4 packet header that contains an 8-bit binary value used to determine the priority of each packet?

- [x] **differentiated services**
- [ ] destination IPv4 address
- [ ] source IPv4 address
- [ ] protocol

> [!NOTE]
> **Explanation:** **Correct Answer:** differentiated services

**Concept & Details:**
The **Differentiated Services (DS)** field (formerly called Type of Service or ToS) is an 8-bit field in the IPv4 header. It is used by Quality of Service (QoS) mechanisms to label and prioritize packets (for example, marking voice and video traffic to reduce delay and jitter on congested links).

*Why other options are incorrect:*
- **Protocol:** Identifies the Layer 4 protocol.
- **Identification:** Used for packet fragmentation.
- **TTL:** Controls packet lifetime.

---

## Question 51

Which term describes a field in the IPv4 packet header that contains a 32-bit binary value associated with an interface on the sending device?

- [x] **source IPv4 address**
- [ ] destination IPv4 address
- [ ] protocol
- [ ] TTL

> [!NOTE]
> **Explanation:** **Correct Answer:** source IPv4 address

**Concept & Details:**
The **source IPv4 address** is a 32-bit field in the IPv4 packet header. It contains the unicast IP address of the sending device's network interface. This address allows the destination device to know where the packet originated and where to send any reply packets.

*Why other options are incorrect:*
- **destination IPv4 address:** Represents where the packet is going, not where it came from.
- **MAC (Media Access Control) addresses:** These are Layer 2 addresses, not Layer 3 IPv4 header fields.

---

## Question 52

Which term describes a field in the IPv4 packet header used to detect corruption in the IPv4 header?

- [x] **header checksum**
- [ ] source IPv4 address
- [ ] protocol
- [ ] TTL

> [!NOTE]
> **Explanation:** **Correct Answer:** header checksum

**Concept & Details:**
The **header checksum** is a 16-bit field in the IPv4 header used to detect transmission errors (corruption) within the IP header itself. When a router receives a packet, it calculates the checksum and compares it with the value in the header. If they do not match, the packet has been corrupted during transit and is discarded.

*Why other options are incorrect:*
- **protocol:** Identifies the upper-layer payload.
- **TTL (Time-to-Live):** Controls packet lifetime.

---

## Question 53

Refer to the exhibit. A network administrator is connecting a new host to the Payroll LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?

```text
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
```

- [x] **10.27.14.148**
- [ ] 10.27.14.1
- [ ] 10.14.15.254
- [ ] 203.0.113.39
- [ ] 10.27.15.17

> [!NOTE]
> **Explanation:** **Correct Answer:** 10.27.14.148

**Concept & Details:**
A host needs a default gateway to communicate with devices on other networks. The default gateway must be the IP address of the router interface connected to the local subnet.
Looking at the router configuration:
- The interface `gi0/0` connects to the **Payroll LAN** (as indicated by the description command: `description Connects to the Payroll LAN`).
- The IP address configured on `gi0/0` is `10.27.14.148`.
Therefore, any host connected to the Payroll LAN must configure its default gateway to `10.27.14.148` to forward packets off the local network.

*Why other options are incorrect:*
- **10.27.15.17:** Configured on `gi0/1` for the Marketing LAN.
- **10.14.15.254:** Configured on `s0/0/0` for the ISP (Internet Service Provider) connection.
- **203.0.113.39:** Configured on `s0/0/1` for the WAN (Wide Area Network) connection.

---

## Question 54

Which term describes a field in the IPv4 packet header that contains a unicast, multicast, or broadcast address?

- [x] **destination IPv4 address**
- [ ] protocol
- [ ] TTL
- [ ] header checksum

> [!NOTE]
> **Explanation:** **Correct Answer:** destination IPv4 address

**Concept & Details:**
The **destination IPv4 address** field in the IP header contains a 32-bit binary value that represents the receiver of the packet. Unlike source addresses (which must always be unicast), the destination address can be:
1. **Unicast:** Sent to a single host.
2. **Multicast:** Sent to a specific group of hosts.
3. **Broadcast:** Sent to all hosts on the local network.

*Why other options are incorrect:*
- **source IPv4 address:** Can only ever be a unicast address because a packet must originate from a single, specific host interface.

---

## Question 55

Which term describes a field in the IPv4 packet header used to limit the lifetime of a packet?

- [x] **TTL**
- [ ] source IPv4 address
- [ ] protocol
- [ ] header checksum

> [!NOTE]
> **Explanation:** **Correct Answer:** TTL

**Concept & Details:**
The **TTL (Time-to-Live)** field in the IPv4 packet header is used to prevent packets from looping endlessly through a network. Every router that forwards the packet reduces the TTL value by 1. If the TTL drops to 0, the packet is discarded, and an ICMP (Internet Control Message Protocol) time exceeded message is sent back to the source.

*Why other options are incorrect:*
- **Header Checksum:** Used for error detection.
- **Protocol:** Identifies the Layer 4 protocol.

---

## Question 56

Which term describes a field in the IPv4 packet header that contains a 4-bit binary value set to 0100?

- [x] **version**
- [ ] source IPv4 address
- [ ] protocol
- [ ] TTL

> [!NOTE]
> **Explanation:** **Correct Answer:** version

**Concept & Details:**
The **Version** field is a 4-bit binary value at the very beginning of the IP header. For an IPv4 packet, this value is set to `0100` (which is binary for `4`). This tells the receiving device to parse the packet using IPv4 formatting rules.

*Why other options are incorrect:*
- If the binary value were `0110` (which is binary for `6`), it would indicate an IPv6 packet.

---

## Question 57

Which term describes a field in the IPv4 packet header used to identify the next level protocol?

- [x] **protocol**
- [ ] version
- [ ] differentiated services
- [ ] header checksum

> [!NOTE]
> **Explanation:** **Correct Answer:** protocol

**Concept & Details:**
The **Protocol** field is an 8-bit binary value in the IPv4 header that identifies the next-level (Layer 4) protocol that should receive the payload (e.g., `6` for TCP (Transmission Control Protocol), `17` for UDP (User Datagram Protocol)).

*Why other options are incorrect:*
- **Version:** Identifies the IP version.
- **TTL (Time-to-Live):** Controls packet lifetime.

---

## Question 58

Which term describes a field in the IPv4 packet header that contains a 4-bit binary value set to 0100?

- [x] **version**
- [ ] differentiated services
- [ ] header checksum
- [ ] TTL

> [!NOTE]
> **Explanation:** **Correct Answer:** version

**Concept & Details:**
The **Version** field is a 4-bit binary value at the very beginning of the IP header. For an IPv4 packet, this value is set to `0100` (which is binary for `4`). This tells the receiving device to parse the packet using IPv4 formatting rules.

*Why other options are incorrect:*
- If the binary value were `0110` (which is binary for `6`), it would indicate an IPv6 packet.

---

## Question 59

What property of ARP causes cached IP-to-MAC mappings to remain in memory longer?

- [x] **Entries in an ARP table are time-stamped and are purged after the timeout expires.**
- [ ] A static IP-to-MAC address entry can be entered manually into an ARP table.
- [ ] The type field 0x806 appears in the header of the Ethernet frame.
- [ ] The port-to-MAC address table on a switch has the same entries as the ARP table on the switch.

> [!NOTE]
> **Explanation:** **Correct Answer:** Entries in an ARP table are time-stamped and are purged after the timeout expires.

**Concept & Details:**
The **ARP (Address Resolution Protocol) table** (or cache) dynamically maps IP addresses to MAC (Media Access Control) addresses. To prevent the table from becoming cluttered with stale or outdated mappings, each entry is assigned a **time-stamp** when it is created. The device keeps the entry in memory for a specific duration (the ARP cache timeout). If the entry is not used or refreshed before this timer expires, it is purged (deleted) from memory. If it is frequently used, the timer is reset, causing it to remain in memory longer.

*Why other options are incorrect:*
- Static entries do not expire, but the question specifically asks about the default dynamic caching property of ARP entries expiring based on timeouts.

---

## Question 60

What property of ARP allows MAC addresses of frequently used servers to be fixed in the ARP table?

- [x] **A static IP-to-MAC address entry can be entered manually into an ARP table.**
- [ ] Entries in an ARP table are time-stamped and are purged after the timeout expires.
- [ ] The type field 0x806 appears in the header of the Ethernet frame.
- [ ] The port-to-MAC address table on a switch has the same entries as the ARP table on the switch.

> [!NOTE]
> **Explanation:** **Correct Answer:** A static IP-to-MAC address entry can be entered manually into an ARP table.

**Concept & Details:**
Usually, ARP tables learn IP-to-MAC mappings dynamically as communication occurs. However, dynamic entries expire and get cleared over time. If you have critical devices (like a local file server or default gateway) whose mappings should never be cleared or spoofed, a network administrator can **manually configure a static ARP entry**. Static entries do not age out or expire, ensuring they remain permanently fixed in the ARP table.

*Why other options are incorrect:*
- Dynamic ARP processes cannot guarantee that a MAC address will remain permanently fixed, as they are subject to aging out and cache clearing commands.

---

## Question 61

What property of ARP allows MAC addresses of frequently used servers to be fixed in the ARP table?

- [x] **A static IP-to-MAC address entry can be entered manually into an ARP table.**
- [ ] The destination MAC address FF-FF-FF-FF-FF-FF appears in the header of the Ethernet frame.
- [ ] The source MAC address appears in the header of the Ethernet frame.
- [ ] The port-to-MAC address table on a switch has the same entries as the ARP table on the switch.

> [!NOTE]
> **Explanation:** **Correct Answer:** A static IP-to-MAC address entry can be entered manually into an ARP table.

**Concept & Details:**
Usually, ARP tables learn IP-to-MAC mappings dynamically as communication occurs. However, dynamic entries expire and get cleared over time. If you have critical devices (like a local file server or default gateway) whose mappings should never be cleared or spoofed, a network administrator can **manually configure a static ARP entry**. Static entries do not age out or expire, ensuring they remain permanently fixed in the ARP table.

*Why other options are incorrect:*
- Dynamic ARP processes cannot guarantee that a MAC address will remain permanently fixed, as they are subject to aging out and cache clearing commands.

---

## Question 62

What property of ARP allows hosts on a LAN to send traffic to remote networks?

- [x] **Local hosts learn the MAC address of the default gateway.**
- [ ] The destination MAC address FF-FF-FF-FF-FF-FF appears in the header of the Ethernet frame.
- [ ] The source MAC address appears in the header of the Ethernet frame.
- [ ] The port-to-MAC address table on a switch has the same entries as the ARP table on the switch.

> [!NOTE]
> **Explanation:** **Correct Answer:** Local hosts learn the MAC address of the default gateway.

**Concept & Details:**
When a local host wants to send traffic to a remote network, it knows the packet must go to the default gateway (the router). However, to send the packet over the local Ethernet LAN (Local Area Network), the host needs the router's physical MAC (Media Access Control) address. Using ARP (Address Resolution Protocol), the local host requests and **learns the MAC address of the default gateway router**. Once resolved, the host can encapsulate the packet inside an Ethernet frame with the router's destination MAC address and send it.

*Why other options are incorrect:*
- Remote host MAC addresses are never learned by local hosts because Layer 2 MAC addresses are only used for local delivery and do not cross routers.

---

## Question 63

Refer to the exhibit. A network administrator is connecting a new host to the Registrar LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?

```text
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
```

- [x] **192.168.235.234**
- [ ] 192.168.235.1
- [ ] 10.234.235.254
- [ ] 203.0.113.3
- [ ] 192.168.234.114

> [!NOTE]
> **Explanation:** **Correct Answer:** 192.168.235.234

**Concept & Details:**
A host needs a default gateway to communicate with devices on other networks. The default gateway must be the IP address of the router interface connected to the local subnet.
Looking at the router configuration:
- The interface `gi0/1` connects to the **Registrar LAN** (as indicated by the description command: `description Connects to the Registrar LAN`).
- The IP address configured on `gi0/1` is `192.168.235.234`.
Therefore, any host connected to the Registrar LAN must configure its default gateway to `192.168.235.234` to forward packets off the local network.

*Why other options are incorrect:*
- Other IP addresses in the configuration belong to interfaces on different subnets (like the Manager LAN, ISP, or Head Office WAN).

---

## Question 64

What property of ARP forces all Ethernet NICs to process an ARP request?

- [x] **The destination MAC address FF-FF-FF-FF-FF-FF appears in the header of the Ethernet frame.**
- [ ] The source MAC address appears in the header of the Ethernet frame.
- [ ] The type field 0x806 appears in the header of the Ethernet frame.
- [ ] ARP replies are broadcast on the network when a host receives an ARP request.

> [!NOTE]
> **Explanation:** **Correct Answer:** The destination MAC address FF-FF-FF-FF-FF-FF appears in the header of the Ethernet frame.

**Concept & Details:**
An **ARP (Address Resolution Protocol) request** is sent as a broadcast because the sender does not know which device has the target IP address. In Ethernet networks, a broadcast frame is marked with a special destination MAC (Media Access Control) address: **FF-FF-FF-FF-FF-FF** (in hexadecimal). When a network switch receives a frame with this destination, it forwards (floods) it out of all active ports. Consequently, every network interface card (NIC) on the local link receives, accepts, and processes the frame.

*Why other options are incorrect:*
- Source MAC address represents the sender, not the destination.
- IP broadcast addresses are Layer 3 and do not force Layer 2 NICs to process frames at the Ethernet layer directly.

---

## Question 65

What property of ARP causes a reply only to the source sending an ARP request?

- [x] **The source MAC address appears in the header of the Ethernet frame.**
- [ ] The destination MAC address FF-FF-FF-FF-FF-FF appears in the header of the Ethernet frame.
- [ ] The type field 0x806 appears in the header of the Ethernet frame.
- [ ] ARP replies are broadcast on the network when a host receives an ARP request.

> [!NOTE]
> **Explanation:** **Correct Answer:** The source MAC address appears in the header of the Ethernet frame.

**Concept & Details:**
When a device sends an ARP (Address Resolution Protocol) request, it includes its own MAC (Media Access Control) address in the **Source MAC address** field of the Ethernet frame header. When the target device receives this request, it reads the source MAC address and knows exactly which device sent it. When sending the **ARP reply**, the target device does not need to broadcast it; instead, it sends a **unicast frame** directly back to that specific source MAC address.

*Why other options are incorrect:*
- The destination MAC of the request is a broadcast, which does not tell the receiver how to reply. It is the *source* MAC that gives the receiver the return address.

---

## Question 66

What property of ARP causes the request to be flooded out all ports of a switch except for the port receiving the ARP request?

- [x] **The destination MAC address FF-FF-FF-FF-FF-FF appears in the header of the Ethernet frame.**
- [ ] The type field 0x806 appears in the header of the Ethernet frame.
- [ ] Entries in an ARP table are time-stamped and are purged after the timeout expires.
- [ ] ARP replies are broadcast on the network when a host receives an ARP request.

> [!NOTE]
> **Explanation:** **Correct Answer:** The destination MAC address FF-FF-FF-FF-FF-FF appears in the header of the Ethernet frame.

**Concept & Details:**
Switches make forwarding decisions based on the destination MAC (Media Access Control) address. When a switch reads the broadcast MAC address **FF-FF-FF-FF-FF-FF** in the destination field of an incoming ARP (Address Resolution Protocol) request, its standard behavior is to flood the frame out of every active port except the one where the frame was received.

*Why other options are incorrect:*
- The switch floods the frame based on the destination broadcast address, not the source address or Layer 3 IP information.

---

## Question 67

What property of ARP causes the NICs receiving an ARP request to pass the data portion of the Ethernet frame to the ARP process?

- [x] **The type field 0x806 appears in the header of the Ethernet frame.**
- [ ] The destination MAC address FF-FF-FF-FF-FF-FF appears in the header of the Ethernet frame.
- [ ] Entries in an ARP table are time-stamped and are purged after the timeout expires.
- [ ] ARP replies are broadcast on the network when a host receives an ARP request.

> [!NOTE]
> **Explanation:** **Correct Answer:** The type field 0x806 appears in the header of the Ethernet frame.

**Concept & Details:**
An Ethernet frame header contains a 2-byte field called the **EtherType field**. This field tells the receiving network card's driver which protocol should process the payload data inside the frame. For ARP (Address Resolution Protocol), the EtherType value is **0x0806** (hexadecimal). When the network card reads this value, it knows to pass the data portion of the frame directly to the local ARP software process.

*Why other options are incorrect:*
- Other EtherType values (like `0x0800` for IPv4 or `0x86DD` for IPv6) would cause the frame to be passed to different protocol handlers.

---

## Question 68

What property of ARP causes the NICs receiving an ARP request to pass the data portion of the Ethernet frame to the ARP process?

- [x] **The type field 0x806 appears in the header of the Ethernet frame.**
- [ ] The destination MAC address FF-FF-FF-FF-FF-FF appears in the header of the Ethernet frame.
- [ ] Entries in an ARP table are time-stamped and are purged after the timeout expires.
- [ ] The port-to-MAC address table on a switch has the same entries as the ARP table on the switch.

> [!NOTE]
> **Explanation:** **Correct Answer:** The type field 0x806 appears in the header of the Ethernet frame.

**Concept & Details:**
An Ethernet frame header contains a 2-byte field called the **EtherType field**. This field tells the receiving network card's driver which protocol should process the payload data inside the frame. For ARP (Address Resolution Protocol), the EtherType value is **0x0806** (hexadecimal). When the network card reads this value, it knows to pass the data portion of the frame directly to the local ARP software process.

*Why other options are incorrect:*
- Other EtherType values (like `0x0800` for IPv4 or `0x86DD` for IPv6) would cause the frame to be passed to different protocol handlers.

---

## Question 69

Refer to the exhibit. A network administrator is connecting a new host to the Service LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?

```text
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
```

- [x] **172.29.157.156**
- [ ] 172.29.157.1
- [ ] 10.156.157.254
- [ ] 198.51.100.177
- [ ] 172.29.156.36

> [!NOTE]
> **Explanation:** **Correct Answer:** 172.29.157.156

**Concept & Details:**
A host needs a default gateway to communicate with devices on other networks. The default gateway must be the IP address of the router interface connected to the local subnet.
Looking at the router configuration:
- The interface `gi0/1` connects to the **Service LAN** (as indicated by the description command: `description Connects to the Service LAN`).
- The IP address configured on `gi0/1` is `172.29.157.156`.
Therefore, any host connected to the Service LAN must configure its default gateway to `172.29.157.156` to forward packets off the local network.

*Why other options are incorrect:*
- Other IP addresses in the configuration belong to interfaces on different subnets (like the Engineering LAN, ISP, or Head Office WAN).

---

## Question 70

Refer to the exhibit. A network administrator is connecting a new host to the Medical LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?

```text
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
BldgA(config-if)# ip address 
198.51.100.213
 255.255.255.0
BldgA(config-if)# no shutdown
BldgA(config-if)# end
```

- [x] **192.168.191.189**
- [ ] 192.168.191.1
- [ ] 10.190.191.254
- [ ] 198.51.100.213
- [ ] 192.168.190.70

> [!NOTE]
> **Explanation:** **Correct Answer:** 192.168.191.189

**Concept & Details:**
A host needs a default gateway to communicate with devices on other networks. The default gateway must be the IP address of the router interface connected to the local subnet.
Looking at the router configuration:
- The interface `gi0/1` connects to the **Medical LAN** (as indicated by the description command: `description Connects to the Medical LAN`).
- The IP address configured on `gi0/1` is `192.168.191.189`.
Therefore, any host connected to the Medical LAN must configure its default gateway to `192.168.191.189` to forward packets off the local network.

*Why other options are incorrect:*
- Other IP addresses in the configuration belong to interfaces on different subnets (like the Client LAN, ISP, or Head Office WAN).

---

## Question 71

Refer to the exhibit. A network administrator is connecting a new host to the Registrar LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?

```text
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
```

- [x] **192.168.225.223**
- [ ] 192.168.225.1
- [ ] 10.224.225.254
- [ ] 203.0.113.246
- [ ] 192.168.224.103

> [!NOTE]
> **Explanation:** **Correct Answer:** 192.168.225.223

**Concept & Details:**
A host needs a default gateway to communicate with devices on other networks. The default gateway must be the IP address of the router interface connected to the local subnet.
Looking at the router configuration:
- The interface `gi0/1` connects to the **Registrar LAN** (as indicated by the description command: `description Connects to the Registrar LAN`).
- The IP address configured on `gi0/1` is `192.168.225.223`.
Therefore, any host connected to the Registrar LAN must configure its default gateway to `192.168.225.223` to forward packets off the local network.

*Why other options are incorrect:*
- Other IP addresses in the configuration belong to interfaces on different subnets (like the Manager LAN, ISP, or Head Office WAN).

---

## Question 72

Refer to the exhibit. A network administrator is connecting a new host to the Manager LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?

```text
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
```

- [x] **10.118.62.196**
- [ ] 10.118.62.1
- [ ] 10.62.63.254
- [ ] 209.165.200.87
- [ ] 10.118.63.65

> [!NOTE]
> **Explanation:** **Correct Answer:** 10.118.62.196

**Concept & Details:**
A host needs a default gateway to communicate with devices on other networks. The default gateway must be the IP address of the router interface connected to the local subnet.
Looking at the router configuration:
- The interface `gi0/0` connects to the **Manager LAN** (as indicated by the description command: `description Connects to the Manager LAN`).
- The IP address configured on `gi0/0` is `10.118.62.196`.
Therefore, any host connected to the Manager LAN must configure its default gateway to `10.118.62.196` to forward packets off the local network.

*Why other options are incorrect:*
- Other IP addresses in the configuration belong to interfaces on different subnets (like the Registrar LAN, ISP, or Head Office WAN).

---

## Question 73

Refer to the exhibit. A network administrator is connecting a new host to the Store LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?

```text
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
```

- [x] **172.19.98.230**
- [ ] 172.19.98.1
- [ ] 10.98.99.254
- [ ] 209.165.200.120
- [ ] 172.19.99.99

> [!NOTE]
> **Explanation:** **Correct Answer:** 172.19.98.230

**Concept & Details:**
A host needs a default gateway to communicate with devices on other networks. The default gateway must be the IP address of the router interface connected to the local subnet.
Looking at the router configuration:
- The interface `gi0/0` connects to the **Store LAN** (as indicated by the description command: `description Connects to the Store LAN`).
- The IP address configured on `gi0/0` is `172.19.98.230`.
Therefore, any host connected to the Store LAN must configure its default gateway to `172.19.98.230` to forward packets off the local network.

*Why other options are incorrect:*
- Other IP addresses in the configuration belong to interfaces on different subnets (like the Branch LAN, ISP, or Head Office WAN).

---

## Question 74

Refer to the exhibit. A network administrator is connecting a new host to the Store LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?

```text
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
```

- [x] **172.20.132.13**
- [ ] 172.20.132.1
- [ ] 10.132.133.254
- [ ] 198.51.100.156
- [ ] 172.20.133.132

> [!NOTE]
> **Explanation:** **Correct Answer:** 172.20.132.13

**Concept & Details:**
A host needs a default gateway to communicate with devices on other networks. The default gateway must be the IP address of the router interface connected to the local subnet.
Looking at the router configuration:
- The interface `gi0/0` connects to the **Store LAN** (as indicated by the description command: `description Connects to the Store LAN`).
- The IP address configured on `gi0/0` is `172.20.132.13`.
Therefore, any host connected to the Store LAN must configure its default gateway to `172.20.132.13` to forward packets off the local network.

*Why other options are incorrect:*
- Other IP addresses in the configuration belong to interfaces on different subnets (like the Branch LAN, ISP, or Head Office WAN).

---

## Question 75

Refer to the exhibit. A network administrator is connecting a new host to the Service LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?

```text
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
```

- [x] **192.168.167.166**
- [ ] 192.168.167.1
- [ ] 10.166.167.254
- [ ] 198.51.100.189
- [ ] 192.168.166.46

> [!NOTE]
> **Explanation:** **Correct Answer:** 192.168.167.166

**Concept & Details:**
A host needs a default gateway to communicate with devices on other networks. The default gateway must be the IP address of the router interface connected to the local subnet.
Looking at the router configuration:
- The interface `gi0/1` connects to the **Service LAN** (as indicated by the description command: `description Connects to the Service LAN`).
- The IP address configured on `gi0/1` is `192.168.167.166`.
Therefore, any host connected to the Service LAN must configure its default gateway to `192.168.167.166` to forward packets off the local network.

*Why other options are incorrect:*
- Other IP addresses in the configuration belong to interfaces on different subnets (like the Engineering LAN, ISP, or Head Office WAN).

---

## Question 76

Refer to the exhibit. A network administrator is connecting a new host to the Medical LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?

```text
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
BldgA(config-if)# ip address 
203.0.113.222
 255.255.255.0
BldgA(config-if)# no shutdown
BldgA(config-if)# end
```

- [x] **192.168.201.200**
- [ ] 192.168.201.1
- [ ] 10.200.201.254
- [ ] 203.0.113.222
- [ ] 192.168.200.80

> [!NOTE]
> **Explanation:** **Correct Answer:** 192.168.201.200

**Concept & Details:**
The **default gateway** is the IP address of the router interface that connects the local network (LAN (Local Area Network)) to other networks.
According to the device configuration provided in the code block:
- The interface `gi0/1` has the description `Connects to the Medical LAN`.
- The IP address configured on `gi0/1` is `192.168.201.200`.
Since the new host is being connected to the **Medical LAN**, it must use the router interface connected to that same LAN as its gateway. Therefore, the default gateway for any host on the Medical LAN must be configured with the IP address `192.168.201.200`.

*Why other options are incorrect:*
- **192.168.200.80:** This is the IP address of the router's `gi0/0` interface, which connects to the Client LAN, not the Medical LAN.
- **10.200.201.254:** This is the IP address of the router's Serial interface `s0/0/0` connecting to the ISP (Internet Service Provider).
- **203.0.113.222:** This is the IP address of the router's Serial interface `s0/0/1` connecting to the Head Office WAN (Wide Area Network).
- **192.168.201.1:** This is likely a placeholder or first host address in the subnet, but it is not configured on the router interface connected to the Medical LAN.

---

