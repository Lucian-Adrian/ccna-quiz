# CCNA 1 v7 Modules 11 – 13: IP Addressing Exam Answers Full

Total Questions: 71

---

## Question 1

What is the prefix length notation for the subnet mask 255.255.255.224?

- [ ] /25
- [ ] /26
- [x] **/27**
- [ ] /28

> [!NOTE]
> **Explanation:** **Correct Answer:** /27

**Concept & Details:**
Subnet masks can be written in two formats: dotted-decimal (like `255.255.255.224`) and CIDR (Classless Inter-Domain Routing) prefix length notation (like `/27`).
The prefix length indicates the number of consecutive `1`s (network bits) in the binary format of the subnet mask.
Converting `255.255.255.224` to binary:
- `255` = `11111111` (8 bits)
- `255` = `11111111` (8 bits)
- `255` = `11111111` (8 bits)
- `224` = `11100000` (3 bits)
Adding these bits: 8 + 8 + 8 + 3 = 27 bits. Thus, the prefix length is `/27`.

*Why other options are incorrect:*
- `/26` represents `255.255.255.192` (26 binary 1s).
- `/28` represents `255.255.255.240` (28 binary 1s).

---

## Question 2

How many valid host addresses are available on an IPv4 subnet that is configured with a /26 mask?

- [ ] 254
- [ ] 190
- [ ] 192
- [x] **62**
- [ ] 64

> [!NOTE]
> **Explanation:** **Correct Answer:** 62

**Concept & Details:**
An IPv4 address consists of 32 bits. A prefix length of `/26` means 26 bits are allocated for the network portion, leaving 32 - 26 = 6 bits for the host portion.
The formula to calculate the total number of host addresses is $2^h$, where $h$ is the number of host bits. For 6 host bits, $2^6 = 64$ total addresses.
However, two addresses in every subnet are reserved:
1. **Network Address:** The first address, used to identify the subnet itself.
2. **Broadcast Address:** The last address, used to send traffic to all hosts on the subnet.
Subtracting these 2 reserved addresses ($64 - 2$) leaves **62 usable host addresses**.

*Why other options are incorrect:*
- **64:** This is the total number of addresses in the subnet, including the network and broadcast addresses.
- **30 / 14:** These correspond to subnets with `/27` and `/28` masks respectively.

---

## Question 3

Which subnet mask would be used if 5 host bits are available?

- [ ] 255.255.255.0
- [ ] 255.255.255.128
- [x] **255.255.255.224​**
- [ ] 255.255.255.240

> [!NOTE]
> **Explanation:** **Correct Answer:** 255.255.255.224

**Concept & Details:**
If 5 host bits are available, the network portion of the IPv4 address uses 32 - 5 = 27 bits.
A `/27` subnet mask has 27 binary `1`s and 5 binary `0`s:
- `11111111.11111111.11111111.11100000`
Converting each octet back to decimal:
- First three octets of all 1s = `255.255.255`
- The fourth octet `11100000` = 128 + 64 + 32 = 224
Thus, the subnet mask is `255.255.255.224`.

*Why other options are incorrect:*
- **255.255.255.240:** Represents 4 host bits (/28 mask).
- **255.255.255.192:** Represents 6 host bits (/26 mask).
- **255.255.255.0:** Represents 8 host bits (/24 mask).

---

## Question 4

A network administrator subnets the 192.168.10.0/24 network into subnets with /26 masks. How many equal-sized subnets are created?

- [ ] 1
- [ ] 2
- [x] **4**
- [ ] 8
- [ ] 16
- [ ] 64

> [!NOTE]
> **Explanation:** **Correct Answer:** 4

**Concept & Details:**
The starting network is `192.168.10.0/24`. We are subnetting it using `/26` masks.
The number of bits borrowed from the host portion is the difference between the new prefix and the old prefix: 26 - 24 = 2 bits.
The formula to find the number of subnets created is $2^n$, where $n$ is the number of borrowed bits.
With 2 borrowed bits, we get $2^2 = 4$ equal-sized subnets.
These subnets are:
1. `192.168.10.0/26`
2. `192.168.10.64/26`
3. `192.168.10.128/26`
4. `192.168.10.192/26`

*Why other options are incorrect:*
- **2 / 8 / 16:** These correspond to borrowing 1, 3, or 4 bits respectively.

---

## Question 5

Match the subnetwork to a host address that would be included within the subnetwork. (Not all options are used.)

> [!NOTE]
> **Explanation:** **Correct Answer:** Refer to matching details in the explanation.

**Concept & Details:**
To match host IP addresses to their correct subnets, we calculate the valid host ranges for each `/27` subnet (which has 32 total addresses per subnet, including the network and broadcast addresses):
- **Subnet 192.168.1.32/27:**
  - Network Address: `192.168.1.32`
  - Valid Host Range: `192.168.1.33` to `192.168.1.62`
  - Broadcast Address: `192.168.1.63`
- **Subnet 192.168.1.64/27:**
  - Network Address: `192.168.1.64`
  - Valid Host Range: `192.168.1.65` to `192.168.1.94`
  - Broadcast Address: `192.168.1.95`
- **Subnet 192.168.1.96/27:**
  - Network Address: `192.168.1.96`
  - Valid Host Range: `192.168.1.97` to `192.168.1.126`
  - Broadcast Address: `192.168.1.127`

---

## Question 6

An administrator wants to create four subnetworks from the network address 192.168.1.0/24. What is the network address and subnet mask of the second useable subnet?

- [x] **subnetwork 192.168.1.64 subnet mask 255.255.255.192**
- [ ] subnetwork 192.168.1.32 subnet mask 255.255.255.240
- [ ] subnetwork 192.168.1.64 subnet mask 255.255.255.240
- [ ] subnetwork 192.168.1.128 subnet mask 255.255.255.192
- [ ] subnetwork 192.168.1.8 subnet mask 255.255.255.224

> [!NOTE]
> **Explanation:** **Correct Answer:** subnetwork 192.168.1.64 subnet mask 255.255.255.192

**Concept & Details:**
To create four subnetworks from `192.168.1.0/24`, we must borrow 2 bits from the host portion ($2^2 = 4$ subnets).
This changes the prefix from `/24` to `/26` (24 + 2).
A `/26` prefix corresponds to the subnet mask `255.255.255.192` (binary `11111111.11111111.11111111.11000000`).
The subnets increment by 64 (since 256 - 192 = 64):
1. First subnet: `192.168.1.0/26`
2. **Second subnet: `192.168.1.64/26`**
3. Third subnet: `192.168.1.128/26`
4. Fourth subnet: `192.168.1.192/26`

*Why other options are incorrect:*
- Subnets using other masks (like /25 or /27) or incorrect subnetwork boundaries are mathematically incorrect for dividing a /24 network into exactly 4 equal subnets.

---

## Question 7

How many bits must be borrowed from the host portion of an address to accommodate a router with five connected networks?

- [ ] two
- [x] **three**
- [ ] four
- [ ] five

> [!NOTE]
> **Explanation:** **Correct Answer:** three

**Concept & Details:**
Each network that is directly connected to an interface on a router requires its own subnet. To support five connected networks, the router requires 5 unique subnets.
The number of subnets created by borrowing $n$ bits is calculated using the formula $2^n$.
- If we borrow 1 bit: $2^1 = 2$ subnets (not enough).
- If we borrow 2 bits: $2^2 = 4$ subnets (not enough).
- If we borrow 3 bits: $2^3 = 8$ subnets (enough to accommodate 5 networks).
Therefore, the administrator must borrow **3 bits** from the host portion.

*Why other options are incorrect:*
- Borrowing 2 bits only yields 4 subnets, which is short of the 5 required. Borrowing 4 bits yields 16 subnets, which is more than necessary and wastes host address space.

---

## Question 8

How many host addresses are available on the 192.168.10.128/26 network?

- [ ] 30
- [ ] 32
- [ ] 60
- [x] **62**
- [ ] 64

> [!NOTE]
> **Explanation:** **Correct Answer:** 62

**Concept & Details:**
For the subnet `192.168.10.128/26`, the prefix `/26` leaves 32 - 26 = 6 bits for host addresses.
The total number of addresses is $2^6 = 64$.
Subtracting the network address (`192.168.10.128`) and the broadcast address (`192.168.10.191`) leaves **62 usable host addresses**.

*Why other options are incorrect:*
- **64:** Represents total addresses in the subnet, not usable host addresses.
- **30 / 14:** Represent usable host addresses for /27 and /28 networks respectively.

---

## Question 9

How many host addresses are available on the network 172.16.128.0 with a subnet mask of 255.255.252.0?

- [ ] 510
- [ ] 512
- [x] **1022**
- [ ] 1024
- [ ] 2046
- [ ] 2048

> [!NOTE]
> **Explanation:** **Correct Answer:** 1022

**Concept & Details:**
A subnet mask of `255.255.252.0` represents a `/22` prefix length because:
- `255.255.252.0` in binary has 8 + 8 + 6 + 0 = 22 bits of `1`s.
The host bits remaining are 32 - 22 = 10 bits.
Using the formula for usable hosts ($2^h - 2$):
- $2^{10} - 2 = 1024 - 2 = 1022$ usable host addresses.

*Why other options are incorrect:*
- **1024:** Total addresses including network and broadcast.
- **510 / 2046:** Usable host addresses for /23 and /21 subnet masks respectively.

---

## Question 10

Match each IPv4 address to the appropriate address category. (Not all options are used.)

![exhibit](https://itexamanswers.net/wp-content/uploads/2020/01/CCNA1-v7-ITN-IP-Addressing-Exam-Answers-002-1536x1013-1.png)

> [!NOTE]
> **Explanation:** **Correct Answer:** Refer to matching details in the explanation.

**Concept & Details:**
In IPv4 networking, addresses are categorized based on their function in a given subnet (determined by the subnet mask):
- **Host Address:** An IP address that can be assigned to a device's network interface (like a PC or printer). In a subnet, any address that is not the network address or the broadcast address is a usable host address.
- **Network Address:** The address that represents the subnet itself. Its host bits are all binary `0`s (e.g., `192.168.10.0` for a `/24` network).
- **Broadcast Address:** The address used to send data to all hosts within a subnet. Its host bits are all binary `1`s (e.g., `192.168.10.255` for a `/24` network).
- **Loopback Address:** Reserved addresses (like `127.0.0.1`) used by a host to send network traffic to itself for testing.
- **Link-Local (APIPA) Address:** Addresses in the range `169.254.0.0/16` that are automatically configured when a device cannot obtain an IP address from a DHCP (Dynamic Host Configuration Protocol) server.

---

## Question 11

What three blocks of addresses are defined by RFC 1918 for private network use? (Choose three.)

- [x] **10.0.0.0/8**
- [x] **172.16.0.0/12**
- [x] **192.168.0.0/16**
- [ ] 100.64.0.0/14
- [ ] 169.254.0.0/16
- [ ] 239.0.0.0/8

> [!NOTE]
> **Explanation:** **Correct Answer:** 10.0.0.0/8 AND 172.16.0.0/12 AND 192.168.0.0/16

**Concept & Details:**
**RFC 1918 (Request for Comments 1918)** is the internet standard that defines the blocks of **private IPv4 addresses** reserved for use inside private networks (like home networks or corporate LANs). These addresses are not routable on the public internet, which helps conserve the limited pool of public IPv4 addresses. The three defined blocks are:
1. `10.0.0.0/8` (addresses from `10.0.0.0` to `10.255.255.255`)
2. `172.16.0.0/12` (addresses from `172.16.0.0` to `172.31.255.255`)
3. `192.168.0.0/16` (addresses from `192.168.0.0` to `192.168.255.255`)

*Why other options are incorrect:*
- `169.254.0.0/16` is reserved for link-local autoconfiguration (APIPA).
- `100.64.0.0/14` is reserved for carrier-grade NAT (CGN).
- `239.0.0.0/8` is reserved for administrative multicast.

---

## Question 12

Refer to the exhibit. An administrator must send a message to everyone on the router A network. What is the broadcast address for network 172.16.16.0/22?

![exhibit](https://itexamanswers.net/wp-content/uploads/2020/01/i271962v1n1_211100.png)

- [ ] 172.16.16.255
- [ ] 172.16.20.255
- [x] **172.16.19.255**
- [ ] 172.16.23.255
- [ ] 172.16.255.255

> [!NOTE]
> **Explanation:** **Correct Answer:** 172.16.19.255

**Concept & Details:**
For network `172.16.16.0/22`, the prefix length `/22` means the first 22 bits represent the network portion.
The third octet is subnetted. A `/22` mask corresponds to `255.255.252.0`.
In binary, the third octet mask `252` is `11111100`. The third octet of the IP address is `16`, which is `00010000` in binary.
The 22 network bits cover the first two octets completely and the first 6 bits of the third octet:
- Network bits in third octet: `000100` (which is 16).
- Host bits in third octet: the last 2 bits (`00`).
The broadcast address is obtained by setting all host bits (the last 2 bits of the third octet and all 8 bits of the fourth octet) to binary `1`:
- Third octet: `000100` + `11` = `00010011` (binary) = `19` (decimal).
- Fourth octet: `11111111` (binary) = `255` (decimal).
Thus, the broadcast address is `172.16.19.255`.

*Why other options are incorrect:*
- Addresses like `172.16.16.255` or `172.16.17.255` are usable host addresses because they still contain binary `0`s in their host portion (e.g., in the third octet).

---

## Question 13

A site administrator has been told that a particular network at the site must accommodate 126 hosts. Which subnet mask would be used that contains the required number of host bits?

- [ ] 255.255.255.0
- [x] **255.255.255.128**
- [ ] 255.255.255.224
- [ ] 255.255.255.240

> [!NOTE]
> **Explanation:** **Correct Answer:** 255.255.255.128

**Concept & Details:**
To accommodate 126 hosts, we calculate the number of host bits ($h$) required using the formula: $2^h - 2 \ge 126$.
- If $h = 6$: $2^6 - 2 = 64 - 2 = 62$ hosts (not enough).
- If $h = 7$: $2^7 - 2 = 128 - 2 = 126$ hosts (exactly enough).
With 7 host bits, the network portion uses 32 - 7 = 25 bits.
A `/25` subnet mask is written in binary as:
- `11111111.11111111.11111111.10000000`
Converting the fourth octet (`10000000`) to decimal gives `128`.
Thus, the subnet mask is `255.255.255.128`.

*Why other options are incorrect:*
- **255.255.255.0:** Leaves 8 host bits (254 hosts), which is wasteful.
- **255.255.255.224:** Leaves 5 host bits (30 hosts), which is too small.
- **255.255.255.240:** Leaves 4 host bits (14 hosts), which is too small.

---

## Question 14

Refer to the exhibit. Considering the addresses already used and having to remain within the 10.16.10.0/24 network range, which subnet address could be assigned to the network containing 25 hosts?

![exhibit](https://itexamanswers.net/wp-content/uploads/2020/01/i274512v1n1_274512-300x251-1.png)

- [ ] 10.16.10.160/26
- [ ] 10.16.10.128/28
- [x] **10.16.10.64/27**
- [ ] 10.16.10.224/26
- [ ] 10.16.10.240/27
- [ ] 10.16.10.240/28

> [!NOTE]
> **Explanation:** **Correct Answer:** 10.16.10.64/27

**Concept & Details:**
Let's analyze the available address space in the `10.16.10.0/24` network range:
- Leftmost network has used addresses up to `10.16.10.63`.
- Center network uses addresses `10.16.10.192` to `10.16.10.207`.
This leaves the range `10.16.10.64` to `10.16.10.191` available.
The new network requires accommodating **25 hosts**.
To support 25 hosts, we need a subnet size of at least 32 addresses (since $2^5 - 2 = 30$ hosts, and 5 host bits are needed).
5 host bits mean a prefix length of 32 - 5 = /27.
The block size of a `/27` network is 32 addresses.
The first available block starting at `10.16.10.64` with a `/27` mask covers:
- Network address: `10.16.10.64/27`
- Range: `10.16.10.64` to `10.16.10.95`.
This fits perfectly and accommodates 25 hosts.

*Why other options are incorrect:*
- **10.16.10.0 / 10.16.10.192:** These ranges are already in use.
- **10.16.10.208/28:** A /28 mask only supports 14 usable host addresses, which is too small for 25 hosts.

---

## Question 15

What is the usable number of host IP addresses on a network that has a /26 mask?

- [ ] 256
- [ ] 254
- [ ] 64
- [x] **62**
- [ ] 32
- [ ] 16

> [!NOTE]
> **Explanation:** **Correct Answer:** 62

**Concept & Details:**
An IPv4 subnet with a `/26` mask has 26 network bits, leaving 32 - 26 = 6 host bits.
The number of usable host IP addresses is calculated by $2^h - 2$, where $h$ is the number of host bits:
- $2^6 - 2 = 64 - 2 = 62$ usable host addresses.
The two subtracted addresses represent the network ID (first address) and the broadcast address (last address), neither of which can be assigned to a device.

*Why other options are incorrect:*
- **64:** Total number of addresses, not usable host addresses.
- **30 / 14:** Represent usable host addresses for /27 and /28 subnets.

---

## Question 16

Which address prefix range is reserved for IPv4 multicast?

- [ ] 240.0.0.0 – 254.255.255.255
- [x] **224.0.0.0 – 239.255.255.255**
- [ ] 169.254.0.0 – 169.254.255.255
- [ ] 127.0.0.0 – 127.255.255.255

> [!NOTE]
> **Explanation:** **Correct Answer:** 224.0.0.0 to 239.255.255.255

**Concept & Details:**
In Classful IP addressing, IPv4 addresses are divided into classes. Class D addresses are reserved for **multicast** traffic.
The Class D multicast address block is defined as the prefix range **224.0.0.0/4**, which spans from **224.0.0.0** to **239.255.255.255**.
Multicast traffic is sent from a single source to a group of interested receivers who have joined the specific multicast group address.

*Why other options are incorrect:*
- Ranges starting with 240 are Class E (experimental/reserved).
- Ranges below 224 are Class A, B, and C unicast ranges.

---

## Question 17

Refer to the exhibit. Match the network with the correct IP address and prefix that will satisfy the usable host addressing requirements for each network.

Place the options in the following order:

![exhibit](https://itexamanswers.net/wp-content/uploads/2020/01/i304956v6n1_207918.png)

![exhibit](https://itexamanswers.net/wp-content/uploads/2019/12/2024-09-17_191902.jpg)

| Network A | 192.168.0.128 /25 |
| --------- | ----------------- |
| Network B | 192.168.0.0 /26   |
| Network C | 192.168.0.96 /27  |
| Network D | 192.168.0.80 /30  |

> [!NOTE]
> **Explanation:** **Correct Answer:** Refer to matching details in the explanation.

**Concept & Details:**
To match the networks with their correct subnets based on host addressing requirements:
- **Network A** (highest requirement, e.g., 120 hosts) requires a `/25` subnet (block of 128, providing up to 126 hosts). The subnetwork `192.168.0.128/25` meets this.
- **Network B** (requires up to 60 hosts) requires a `/26` subnet (block of 64, providing up to 62 hosts). The subnetwork `192.168.0.0/26` meets this.
- **Network C** (requires up to 30 hosts) requires a `/27` subnet (block of 32, providing up to 30 hosts). The subnetwork `192.168.0.96/27` meets this.
- **Network D** (requires up to 2 hosts, e.g., a WAN link) requires a `/30` subnet (block of 4, providing 2 usable host addresses). The subnetwork `192.168.0.80/30` meets this.

---

## Question 18

A high school in New York (school A) is using videoconferencing technology to establish student interactions with another high school (school B) in Russia. The videoconferencing is conducted between two end devices through the Internet. The network administrator of school A configures the end device with the IP address 209.165.201.10. The administrator sends a request for the IP address for the end device in school B and the response is 192.168.25.10. Neither school is using a VPN. The administrator knows immediately that this IP will not work. Why?

- [ ] This is a loopback address.
- [ ] This is a link-local address.
- [x] **This is a private IP address.**
- [ ] There is an IP address conflict.

> [!NOTE]
> **Explanation:** **Correct Answer:** This is a private IP address.

**Concept & Details:**
The address `192.168.25.10` falls inside the `192.168.0.0/16` private IP block defined by **RFC 1918**. Private IP addresses are designated for internal network use and are intentionally blocked from routing across the public internet. Since neither school is using a **VPN (Virtual Private Network)** (which would allow private traffic to tunnel securely through the internet), the school A device cannot route traffic directly to a private IP address located at school B across the internet. School B would need a public IP address (or NAT) for this direct connection.

*Why other options are incorrect:*
- The issue is not an IP address conflict or mismatch in configuration, but the inherent nature of private IP addresses being non-routable on the public internet.

---

## Question 19

Which three addresses are valid public addresses? (Choose three.)

- [x] **198.133.219.17**
- [ ] 192.168.1.245
- [ ] 10.15.250.5
- [x] **128.107.12.117**
- [ ] 172.31.1.25
- [x] **64.104.78.227**

> [!NOTE]
> **Explanation:** **Correct Answer:** 198.133.219.17 AND 128.107.12.117 AND 64.104.78.227

**Concept & Details:**
Public IPv4 addresses are routable on the global internet and are assigned to organizations.
Private IPv4 addresses (defined by RFC 1918) are:
- `10.0.0.0` to `10.255.255.255`
- `172.16.0.0` to `172.31.255.255`
- `192.168.0.0` to `192.168.255.255`
Any address outside these ranges (excluding other special-use ranges like `127.0.0.0/8` loopback, `169.254.0.0/16` link-local, and Class D/E) is a **public IPv4 address**.
The three correct options do not fall within any private or reserved ranges, making them valid public addresses.

*Why other options are incorrect:*
- Other choices fall into the private network categories (like 10.x.x.x or 192.168.x.x) or APIPA/link-local (169.254.x.x).

---

## Question 20

A message is sent to all hosts on a remote network. Which type of message is it?

- [ ] limited broadcast
- [ ] multicast
- [x] **directed broadcast**
- [ ] unicast

> [!NOTE]
> **Explanation:** **Correct Answer:** directed broadcast

**Concept & Details:**
In IPv4 networking, different broadcast types exist:
1. **Directed Broadcast:** A packet sent to all hosts on a *specific remote network* (e.g., sending a packet to `172.16.4.255` from a source network `192.168.1.0/24`). The routers forward this packet across the network until it reaches the destination router, which then broadcasts it to the local hosts.
2. **Limited Broadcast:** A packet sent to destination `255.255.255.255`. It is only processed by hosts on the *local network* and is never forwarded by routers.
3. **Multicast:** A packet sent to a specific group of hosts.
4. **Unicast:** A packet sent to one single host.

*Why other options are incorrect:*
- **limited broadcast:** Only targets the local network segment.
- **multicast:** Targets a group of subscribed hosts, not all hosts.
- **unicast:** Targets only one specific host.

---

## Question 21

A company has a network address of 192.168.1.64 with a subnet mask of 255.255.255.192. The company wants to create two subnetworks that would contain 10 hosts and 18 hosts respectively. Which two networks would achieve that? (Choose two.)

- [ ] 192.168.1.16/28
- [x] **192.168.1.64/27**
- [ ] 192.168.1.128/27
- [x] **192.168.1.96/28**
- [ ] 192.168.1.192/28

> [!NOTE]
> **Explanation:** **Correct Answer:** 192.168.1.64/27 AND 192.168.1.96/28

**Concept & Details:**
The company has the block `192.168.1.64/26` (which contains 64 addresses, from `192.168.1.64` to `192.168.1.127`).
We need to create two subnets to accommodate 18 hosts and 10 hosts using VLSM (Variable Length Subnet Masking):
- For **18 hosts**, we need $2^5 - 2 = 30$ host capacity (5 host bits), which requires a `/27` mask (32 - 5).
  - Starting at `192.168.1.64/27`, this covers addresses `192.168.1.64` to `192.168.1.95`.
- For **10 hosts**, we need $2^4 - 2 = 14$ host capacity (4 host bits), which requires a `/28` mask (32 - 4).
  - The next available subnet starts at `192.168.1.96/28`, covering addresses `192.168.1.96` to `192.168.1.111`.
These two subnets fit within the original allocation and satisfy both host requirements.

*Why other options are incorrect:*
- Options that do not allocate enough addresses (such as /29 for 10 hosts, which only yields 6 usable hosts) or run outside the boundaries of 192.168.1.64/26 are incorrect.

---

## Question 22

Which address is a valid IPv6 link-local unicast address?

- [ ] FEC8:1::FFFF
- [ ] FD80::1:1234
- [x] **FE80::1:4545:6578:ABC1**
- [ ] FE0A::100:7788:998F
- [ ] FC90:5678:4251:FFFF

> [!NOTE]
> **Explanation:** **Correct Answer:** FE80::1:4545:6578:ABC1

**Concept & Details:**
An IPv6 **Link-Local Address (LLA)** is a unicast address used only for communication within a single local network segment. Link-local addresses always begin with the prefix **FE80::/10**. In hex, this means the address must start with characters between `FE80` and `FEBF`. The address `FE80::1:4545:6578:ABC1` clearly matches this link-local prefix.

*Why other options are incorrect:*
- Global unicast addresses typically start with `2` or `3` (e.g. `2001::`).
- Unique local addresses start with `FC` or `FD`.

---

## Question 23

Which of these addresses is the shortest abbreviation for the IP address:

3FFE:1044:0000:0000:00AB:0000:0000:0057?

- [ ] 3FFE:1044::AB::57
- [ ] 3FFE:1044::00AB::0057
- [x] **3FFE:1044:0:0:AB::57**
- [ ] 3FFE:1044:0:0:00AB::0057
- [ ] 3FFE:1044:0000:0000:00AB::57
- [ ] 3FFE:1044:0000:0000:00AB::0057

> [!NOTE]
> **Explanation:** **Correct Answer:** 3FFE:1044:0:0:AB::57

**Concept & Details:**
To compress (abbreviate) an IPv6 address:
1. **Rule 1: Omit leading zeros** in any hextet.
   - `0000` becomes `0`
   - `00AB` becomes `AB`
   - `0057` becomes `57`
   This gives: `3FFE:1044:0:0:AB:0:0:57`.
2. **Rule 2: Replace consecutive all-zero hextets with a double colon (::)**.
   - We have two blocks of double-zeros: `0:0` (at hextets 3 and 4) and `0:0` (at hextets 6 and 7).
   - We can *only use the double colon once* in an address to avoid ambiguity.
   - To get the shortest abbreviation, we compress the longest run or the last run of zeros. Since both runs are of equal length (2 hextets), replacing the second run `0:0` at the end with `::` gives: `3FFE:1044:0:0:AB::57`.

*Why other options are incorrect:*
- **3FFE:1044::AB::57:** Invalid because the double colon is used twice, making it impossible to know how many zero hextets belong in each gap.

---

## Question 24

A network administrator has received the IPv6 prefix 2001:DB8::/48 for subnetting. Assuming the administrator does not subnet into the interface ID portion of the address space, how many subnets can the administrator create from the /48 prefix?

- [ ] 16
- [ ] 256
- [ ] 4096
- [x] **65536**

> [!NOTE]
> **Explanation:** **Correct Answer:** 65536

**Concept & Details:**
An IPv6 address is 128 bits. The standard interface ID (host portion) is 64 bits.
The administrator has a `/48` prefix.
The prefix length allocated for subnetting lies between the network prefix (/48) and the interface ID prefix (/64).
This leaves 64 - 48 = 16 bits available for creating subnets.
The number of unique subnets that can be created with 16 bits is $2^{16} = 65,536$ subnets.

*Why other options are incorrect:*
- **256 / 4096 / 16384:** These represent borrowing fewer bits (8, 12, or 14 bits respectively).

---

## Question 25

Given IPv6 address prefix 2001:db8::/48, what will be the last subnet that is created if the subnet prefix is changed to /52?

- [ ] 2001:db8:0:f00::/52
- [ ] 2001:db8:0:8000::/52
- [ ] 2001:db8:0:f::/52
- [x] **2001:db8:0:f000::/52**

> [!NOTE]
> **Explanation:** **Correct Answer:** 2001:db8:0:f000::/52

**Concept & Details:**
The starting prefix is `2001:db8::/48`.
Subnetting this to a `/52` prefix means borrowing 52 - 48 = 4 bits for subnetting.
4 bits give $2^4 = 16$ possible subnets.
In hexadecimal, the borrowed 4 bits represent one hex character in the 4th hextet:
`2001:db8:0000::/48`
The 4th hextet is `0000`. The first hex character of the 4th hextet represents the new 4 subnet bits.
The values of a single hex character range from `0` to `f`.
Therefore, the 16 subnets are:
1. `2001:db8:0:0000::/52` (or `2001:db8::/52`)
2. `2001:db8:0:1000::/52`
...
16. **`2001:db8:0:f000::/52`** (which is the last subnet).

*Why other options are incorrect:*
- Subnets ending with other characters (like `e000` or `ffff`) do not represent the final 4-bit boundary subnetwork prefix under a /52 mask.

---

## Question 26

Consider the following range of addresses:

- [ ] 2001:0DB8:BC15:00A0:0000:: 2001:0DB8:BC15:00A1:0000:: 2001:0DB8:BC15:00A2:0000:: … 2001:0DB8:BC15:00AF:0000::
- [x] **The prefix-length for the range of addresses is /60 .**

> [!NOTE]
> **Explanation:** **Correct Answer:** The prefix-length for the range of addresses is /60 .

**Concept & Details:**
In an IPv6 address, each character represents one hexadecimal digit, which is 4 bits in binary.
Looking at the range of addresses: they all share the common part `2001:0DB8:BC15:00A`.
Let's count the number of hexadecimal characters in this shared portion:
- `2001` (4 characters = 16 bits)
- `0DB8` (4 characters = 16 bits)
- `BC15` (4 characters = 16 bits)
- `00A` (3 characters = 12 bits)
Adding these bits: 16 + 16 + 16 + 12 = 60 bits.
Since all these addresses share the first 60 bits in common, they belong to the same `/60` prefix block.

*Why other options are incorrect:*
- Prefixes like /64 or /48 represent different common boundaries (4 and 3 complete hextets respectively), whereas /60 matches exactly the 15 hex characters shared.

---

## Question 27

What type of IPv6 address is FE80::1?

- [ ] loopback
- [x] **link-local**
- [ ] multicast
- [ ] global unicast

> [!NOTE]
> **Explanation:** **Correct Answer:** link-local

**Concept & Details:**
An IPv6 address starting with `FE80::` is a **link-local** address. Link-local addresses are in the reserved prefix block **FE80::/10**. They are non-routable addresses used for communication between devices connected to the same physical or logical local network link (e.g., in neighbor discovery). Every IPv6-enabled interface must have a link-local address.

*Why other options are incorrect:*
- **global unicast:** Publicly routable addresses (typically starting with `2001::` or `3::`).
- **unique local:** Private addresses (starting with `FC00::/7` or `FD00::/8`).
- **multicast:** Addresses starting with `FF00::/8`.
- **loopback:** The loopback address is `::1`.

---

## Question 28

Refer to the exhibit. A company is deploying an IPv6 addressing scheme for its network. The company design document indicates that the subnet portion of the IPv6 addresses is used for the new hierarchical network design, with the site subsection to represent multiple geographical sites of the company, the sub-site section to represent multiple campuses at each site, and the subnet section to indicate each network segment separated by routers. With such a scheme, what is the maximum number of subnets achieved per sub-site?

![exhibit](https://itexamanswers.net/wp-content/uploads/2020/01/i247454v1n1_207631-300x203-1.png)

- [ ] 0
- [ ] 4
- [x] **16**
- [ ] 256

> [!NOTE]
> **Explanation:** **Correct Answer:** 16

**Concept & Details:**
In the described IPv6 hierarchical addressing scheme, a single hexadecimal character represents the subnet section. A hexadecimal character is base-16 and can have 16 distinct values (`0-9`, `A-F` in uppercase, or `a-f` in lowercase). Therefore, the maximum number of subnets that can be created per sub-site using a single hex character is **16**.

*Why other options are incorrect:*
- Other values (like 256 or 65536) would require two or more hexadecimal characters (8 or 16 bits) to represent the subnet ID, whereas the design specifies only one character.

---

## Question 29

What is used in the EUI-64 process to create an IPv6 interface ID on an IPv6 enabled interface?

- [x] **the MAC address of the IPv6 enabled interface**
- [ ] a randomly generated 64-bit hexadecimal address
- [ ] an IPv6 address that is provided by a DHCPv6 server
- [ ] an IPv4 address that is configured on the interface

> [!NOTE]
> **Explanation:** **Correct Answer:** the MAC address of the IPv6 enabled interface

**Concept & Details:**
The **EUI-64 (Extended Unique Identifier 64-bit)** process is a method used by hosts to automatically generate a unique 64-bit interface ID (the host portion of an IPv6 address) using the device's physical **MAC (Media Access Control) address** (which is 48 bits long).
To make it 64 bits:
1. The 48-bit MAC address is split in half.
2. The 16-bit hex value **FF:FE** is inserted in the middle.
3. The 7th bit of the MAC address is inverted.

*Why other options are incorrect:*
- The EUI-64 process does not use IP addresses, subnet numbers, or default gateway parameters. It specifically converts a Layer 2 MAC address into a Layer 3 interface ID.

---

## Question 30

What is the prefix for the host address 2001:DB8:BC15:A:12AB::1/64?

- [ ] 2001:DB8:BC15
- [x] **2001:DB8:BC15:A**
- [ ] 2001:DB8:BC15:A:1
- [ ] 2001:DB8:BC15:A:12

> [!NOTE]
> **Explanation:** **Correct Answer:** 2001:DB8:BC15:A

**Concept & Details:**
For the IPv6 host address `2001:DB8:BC15:A:12AB::1/64`, the `/64` prefix length indicates that the first 64 bits of the address represent the network prefix.
Since each hextet (separated by colons) contains 16 bits:
- Hextet 1: `2001` (16 bits)
- Hextet 2: `DB8` (16 bits)
- Hextet 3: `BC15` (16 bits)
- Hextet 4: `A` (16 bits)
Summing these gives 16 + 16 + 16 + 16 = 64 bits. Therefore, the network prefix is `2001:DB8:BC15:A`.

*Why other options are incorrect:*
- Any portion smaller or larger (like including `12AB` or excluding `A`) does not represent the first 64 bits specified by the `/64` mask.

---

## Question 31

An IPv6 enabled device sends a data packet with the destination address of FF02::1. What is the target of this packet?​

- [ ] the one IPv6 device on the link that has been uniquely configured with this address
- [x] **all IPv6 enabled devices on the local link​ or network**
- [ ] only IPv6 DHCP servers​
- [ ] only IPv6 configured routers

> [!NOTE]
> **Explanation:** **Correct Answer:** all IPv6 enabled devices on the local link or network

**Concept & Details:**
In IPv6, the multicast address **FF02::1** is a reserved **link-local all-nodes multicast address**. Any packet sent to this destination address is received and processed by **all IPv6-enabled devices** on that local network segment.

*Why other options are incorrect:*
- **all IPv6 routers:** Routers are targeted using the multicast address **FF02::2**.
- **a specific host:** Unicast addresses are used to target single hosts.

---

## Question 32

Match the IPv6 address with the IPv6 address type. (Not all options are used.)

Place the options in the following order:

![exhibit](https://itexamanswers.net/wp-content/uploads/2019/12/2024-09-17_192048.jpg)

| ::1                     | loopback                 |
| ----------------------- | ------------------------ |
| FF02::1                 | all node multicast       |
| FF02::1:FFAE:F85F       | solicited node multicast |
| 2001:DB8::BAF:3F57:FE94 | global unicast           |

> [!NOTE]
> **Explanation:** **Correct Answer:** Refer to matching details in the explanation.

**Concept & Details:**
IPv6 address types are matched to their examples as follows:
- **FF02::1:FFAE:F85F** is a solicited-node multicast address (used in address resolution).
- **2001:DB8::BAF:3F57:FE94** is a global unicast address (GUA) (equivalent to a public IPv4 address).
- **FF02::1** is the all-nodes multicast address (targets all IPv6 devices on the local link).
- **::1** is the loopback address (used to test the local host's TCP/IP stack).

---

## Question 33

Which IPv6 prefix is reserved for communication between devices on the same link?

- [ ] FC00::/7
- [ ] 2001::/32
- [x] **FE80::/10**
- [ ] FDFF::/7

> [!NOTE]
> **Explanation:** **Correct Answer:** FE80::/10

**Concept & Details:**
The IPv6 prefix **FE80::/10** is reserved for **Link-Local Addresses (LLAs)**. These addresses are automatically configured on any IPv6-enabled interface and are used for communication between devices on the same link. They are not routable between subnets.

*Why other options are incorrect:*
- **FF00::/8:** Reserved for multicast addresses.
- **2001::/3:** Used for global unicast addresses (GUA).
- **FC00::/7:** Used for unique local addresses (ULA).

---

## Question 34

Which type of IPv6 address refers to any unicast address that is assigned to multiple hosts?

- [ ] unique local
- [ ] global unicast
- [ ] link-local
- [x] **anycast**

> [!NOTE]
> **Explanation:** **Correct Answer:** anycast

**Concept & Details:**
An **anycast address** is an IPv6 address that can be assigned to multiple devices (usually routers providing the same service). When a packet is sent to an anycast address, routing protocols deliver it to the **nearest** device configured with that address (based on routing metric distance).

*Why other options are incorrect:*
- **multicast:** Sent to *all* members of a group, whereas anycast goes only to the *nearest* single member.
- **unicast:** Assigned to a single host interface.
- **broadcast:** Broadcasts do not exist in IPv6.

---

## Question 35

What are two types of IPv6 unicast addresses? (Choose two.)

- [ ] multicast
- [x] **loopback**
- [x] **link-local**
- [ ] anycast
- [ ] broadcast

> [!NOTE]
> **Explanation:** **Correct Answer:** loopback and link-local

**Concept & Details:**
In IPv6, unicast addresses represent a single interface. Specific types of unicast addresses include:
1. **Loopback (`::1`):** Used to test the local TCP/IP stack.
2. **Link-local (`FE80::/10`):** Used for communication on the local link.
3. **Global Unicast:** Routable public addresses.
4. **Unique Local:** Non-routable private addresses.

*Why other options are incorrect:*
- **multicast / anycast:** These are separate address types in IPv6, not unicast. Broadcast addresses are not used in IPv6.

---

## Question 36

Which service provides dynamic global IPv6 addressing to end devices without using a server that keeps a record of available IPv6 addresses?

- [ ] stateful DHCPv6
- [x] **SLAAC**
- [ ] static IPv6 addressing
- [ ] stateless DHCPv6

> [!NOTE]
> **Explanation:** **Correct Answer:** SLAAC

**Concept & Details:**
**SLAAC (Stateless Address Autoconfiguration)** is a mechanism that allows an IPv6 host to automatically configure its own global unicast IP address and subnet mask without needing a stateful DHCPv6 (Dynamic Host Configuration Protocol for IPv6) server. The host learns the network prefix and length from local router Router Advertisement (RA) messages and generates its own unique interface ID (host portion) using EUI-64 or a random value.

*Why other options are incorrect:*
- **Stateful DHCPv6:** Relies on a server to maintain a record and allocate addresses.
- **ARP (Address Resolution Protocol):** Used in IPv4 for MAC discovery, not IPv6 address autoconfiguration.

---

## Question 37

Which protocol supports Stateless Address Autoconfiguration (SLAAC) for dynamic assignment of IPv6 addresses to a host?

- [ ] ARPv6
- [ ] DHCPv6
- [x] **ICMPv6**
- [ ] UDP

> [!NOTE]
> **Explanation:** **Correct Answer:** ICMPv6

**Concept & Details:**
SLAAC relies on **ICMPv6 (Internet Control Message Protocol version 6)** messages to operate. Specifically:
- The host sends an ICMPv6 **Router Solicitation (RS)** message to locate routers.
- Routers respond with an ICMPv6 **Router Advertisement (RA)** containing the subnet prefix, prefix length, and default gateway.

*Why other options are incorrect:*
- **DHCPv6:** A stateful/stateless address assignment server protocol, not SLAAC itself.
- **ARPv6:** Does not exist (IPv6 uses ICMPv6 Neighbor Discovery instead).
- **UDP (User Datagram Protocol):** A Layer 4 transport protocol, not the protocol that handles address autoconfiguration.

---

## Question 38

Three methods allow IPv6 and IPv4 to co-exist. Match each method with its description. (Not all options are used.)
Place the options in the following order:

| The IPv4 packets and IPv6 packets coexist in the same network. | dual-stack  |
| -------------------------------------------------------------- | ----------- |
| The IPv6 packet is transported inside an IPv4 packet.          | tunneling   |
| IPv6 packets are converted into IPv4 packets, and vice versa.  | translation |

> [!NOTE]
> **Explanation:** **Correct Answer:** Refer to matching details in the explanation.

**Concept & Details:**
Methods for IPv4 and IPv6 coexistence:
- **Dual-Stack:** Running both IPv4 and IPv6 protocols simultaneously on the same network devices.
- **Tunneling:** Transporting an IPv6 packet inside an IPv4 packet to traverse an IPv4-only network.
- **Translation (NAT64):** Converting an IPv6 packet into an IPv4 packet and vice-versa.

---

## Question 39

A technician uses the ping 127.0.0.1 command. What is the technician testing?

- [x] **the TCP/IP stack on a network host**
- [ ] connectivity between two adjacent Cisco devices
- [ ] connectivity between a PC and the default gateway
- [ ] connectivity between two PCs on the same network
- [ ] physical connectivity of a particular PC and the network

> [!NOTE]
> **Explanation:** **Correct Answer:** the TCP/IP stack on a network host

**Concept & Details:**
Pinging `127.0.0.1` (the loopback address) tests the local machine's internal network software. It verifies that the host's NIC driver, configuration, and **TCP/IP stack** are installed and working.

*Why other options are incorrect:*
- It does not test external network components, cabling, switches, or remote host status since the ping never exits the local device software.

---

## Question 40

Refer to the exhibit. An administrator is trying to troubleshoot connectivity between PC1 and PC2 and uses the tracert command from PC1 to do it. Based on the displayed output, where should the administrator begin troubleshooting?

![exhibit](https://itexamanswers.net/wp-content/uploads/2020/01/i210352v1n3_210352.png)

- [ ] PC2
- [x] **R1**
- [ ] SW2
- [ ] R2
- [ ] SW1

> [!NOTE]
> **Explanation:** **Correct Answer:** R1

**Concept & Details:**
When running the `tracert` (traceroute) command from PC1, the output shows that only the first hop (the default gateway, R1) responded successfully, and all subsequent hops timed out. This indicates that PC1 can successfully communicate with its local router (R1), but the communication is breaking down at or immediately after R1. Therefore, the administrator should begin troubleshooting at **R1** to see why it is failing to route traffic forward or receive replies.

*Why other options are incorrect:*
- Beginning troubleshooting at PC1 or PC2 is premature since we already know PC1 can communicate with its gateway R1, but the gateway R1 cannot route the traffic further.

---

## Question 41

Which protocol is used by the traceroute command to send and receive echo-requests and echo-replies?

- [ ] SNMP
- [x] **ICMP**
- [ ] Telnet
- [ ] TCP

> [!NOTE]
> **Explanation:** **Correct Answer:** ICMP

**Concept & Details:**
The traceroute command on Windows (`tracert`) sends ICMP Echo Request messages with incrementally increasing TTL values and listens for ICMP Time Exceeded and ICMP Echo Reply messages to map the path to the destination. Therefore, it uses **ICMP (Internet Control Message Protocol)**.

*Why other options are incorrect:*
- Transport protocols like TCP or UDP are not used by the standard Windows `tracert` utility, nor is DHCP.

---

## Question 42

Which ICMPv6 message is sent when the IPv6 hop limit field of a packet is decremented to zero and the packet cannot be forwarded?

- [ ] network unreachable
- [x] **time exceeded**
- [ ] protocol unreachable
- [ ] port unreachable

> [!NOTE]
> **Explanation:** **Correct Answer:** time exceeded

**Concept & Details:**
When a router receives an IPv6 packet, it decrements the **Hop Limit** field (equivalent to TTL in IPv4) by 1. If the Hop Limit reaches 0, the packet cannot be forwarded and is discarded. The router then sends an ICMPv6 **Time Exceeded** message back to the source device to report the drop.

*Why other options are incorrect:*
- **destination unreachable:** Sent if a route to the destination does not exist.
- **packet too big:** Sent if the packet size exceeds the MTU (Maximum Transmission Unit) of the exit link.
- **parameter problem:** Sent if there is an error in the IPv6 header fields.

---

## Question 43

A user executes a traceroute over IPv6. At what point would a router in the path to the destination device drop the packet?

- [ ] when the value of the Hop Limit field reaches 255
- [x] **when the value of the Hop Limit field reaches zero**
- [ ] when the router receives an ICMP time exceeded message
- [ ] when the target host responds with an ICMP echo reply message

> [!NOTE]
> **Explanation:** **Correct Answer:** when the value of the Hop Limit field reaches zero

**Concept & Details:**
In IPv6, the **Hop Limit** field acts as the safety counter. A router will drop the packet and notify the sender when this value reaches 0. Traceroute deliberately uses this behavior by starting with a Hop Limit of 1, then 2, then 3, causing each consecutive router in the path to drop the packet and identify itself.

*Why other options are incorrect:*
- Packets are not dropped because they are too large, have bad checksums, or are unauthorized, but because their hop limit expired (timed out).

---

## Question 44

What is the purpose of ICMP messages?

- [ ] to inform routers about network topology changes
- [ ] to ensure the delivery of an IP packet
- [x] **to provide feedback of IP packet transmissions**
- [ ] to monitor the process of a domain name to IP address resolution

> [!NOTE]
> **Explanation:** **Correct Answer:** to provide feedback of IP packet transmissions

**Concept & Details:**
**ICMP (Internet Control Message Protocol)** is used by network devices to send control and error messages. Its main purpose is to **provide feedback about issues** related to the delivery and processing of IP packets (such as reporting that a destination is unreachable or a packet expired).

*Why other options are incorrect:*
- ICMP does not transport user data, establish sessions, or assign IP addresses (which are functions of TCP/UDP/DHCP).

---

## Question 45

What source IP address does a router use by default when the traceroute command is issued?

- [ ] the highest configured IP address on the router
- [ ] a loopback IP address
- [x] **the IP address of the outbound interface**
- [ ] the lowest configured IP address on the router

> [!NOTE]
> **Explanation:** **Correct Answer:** the IP address of the outbound interface

**Concept & Details:**
By default, when a router generates a traceroute or ping packet, it populates the source IP address field with the **IP address of the outbound interface** used to exit the router. This can be overridden using extended commands where the administrator manually specifies a source interface or IP.

*Why other options are incorrect:*
- The router does not use the default gateway address, loopback address, or the interface facing the console by default.

---

## Question 46

Match each description with an appropriate IP address. (Not all options are used.)

Place the options in the following order:

![exhibit](https://itexamanswers.net/wp-content/uploads/2019/12/2024-09-17_193118.jpg)

| a link-local address    | 169.254.1.5 |
| ----------------------- | ----------- |
| a TEST-NET address      | 192.0.2.123 |
| an experimental address | 240.2.6.255 |
| a private address       | 172.19.20.5 |
| a loopback address      | 127.0.0.1   |

> [!NOTE]
> **Explanation:** **Correct Answer:** Refer to matching details in the explanation.

**Concept & Details:**
- **Link-Local:** `169.254.0.0/16` (APIPA block).
- **Private Addresses:** `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`.
- **TEST-NET:** `192.0.2.0/24` (reserved for documentation/examples).
- **Experimental:** `240.0.0.0` to `255.255.255.254` (Class E).
- **Loopback:** `127.0.0.0/8`.

---

## Question 47

A user issues a ping 192.135.250.103 command and receives a response that includes a code of 1. What does this code represent?

- [x] **host unreachable**
- [ ] protocol unreachable
- [ ] port unreachable
- [ ] network unreachable

> [!NOTE]
> **Explanation:** **Correct Answer:** host unreachable

**Concept & Details:**
In ICMP Destination Unreachable messages, different codes represent different reasons:
- **Code 0:** Network unreachable.
- **Code 1:** **Host unreachable** (indicating the destination network was found, but the specific target host could not be located or contacted).
- **Code 2:** Protocol unreachable.
- **Code 3:** Port unreachable.

*Why other options are incorrect:*
- Code 1 specifically represents "host unreachable" (unable to deliver to host).

---

## Question 48

Which subnet would include the address 192.168.1.96 as a usable host address?

- [x] **192.168.1.64/26**
- [ ] 192.168.1.32/27
- [ ] 192.168.1.32/28
- [ ] 192.168.1.64/29

> [!NOTE]
> **Explanation:** **Correct Answer:** 192.168.1.64/26

**Concept & Details:**
Let's evaluate the host ranges of the options:
- **192.168.1.64/26:** The subnet mask `/26` provides subnets in increments of 64.
  - Network address: `192.168.1.64`
  - Usable host range: `192.168.1.65` to `192.168.1.126`
  - Broadcast address: `192.168.1.127`
  Since `192.168.1.96` falls within `192.168.1.65` and `192.168.1.126`, it is a usable host address in this subnet.

*Why other options are incorrect:*
- Other subnets like 192.168.1.96/27 (where .96 is the network ID) or subnets ending before .96 do not include it as a usable host address.

---

## Question 49

Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.

What are the three IPv6 addresses displayed when the route from PC1 to PC2 is traced? (Choose three.)

- [x] **2001:DB8:1:1::1**
- [ ] 2001:DB8:1:1::A
- [ ] 2001:DB8:1:2::2
- [x] **2001:DB8:1:2::1**
- [ ] 2001:DB8:1:3::1
- [x] **2001:DB8:1:3::2**
- [ ] 2001:DB8:1:4::1

> [!NOTE]
> **Explanation:** **Correct Answer:** 2001:DB8:1:1::1 AND 2001:DB8:1:2::1 AND 2001:DB8:1:3::2

**Concept & Details:**
During a Packet Tracer route trace from PC1 to PC2 (destination PC2 IP: `2001:DB8:1:4::A`), the successful hops represent the IP addresses of the incoming interfaces on the routers along the path:
- Hop 1: Default gateway interface `2001:DB8:1:1::1` (Router 1).
- Hop 2: Inbound serial interface `2001:DB8:1:2::1` (Router 2).
- Hop 3: Inbound serial interface `2001:DB8:1:3::2` (Router 3).
- Hop 4: Destination host `2001:DB8:1:4::A` (PC2).
Therefore, the three transit IPv6 router addresses displayed are `2001:DB8:1:1::1`, `2001:DB8:1:2::1`, and `2001:DB8:1:3::2`.

---

## Question 50

A host is transmitting a broadcast. Which host or hosts will receive it?

- [x] **all hosts in the same subnet**
- [ ] a specially defined group of hosts
- [ ] the closest neighbor on the same network
- [ ] all hosts on the Internet

> [!NOTE]
> **Explanation:** **Correct Answer:** all hosts in the same subnet

**Concept & Details:**
An IPv4 **broadcast** packet is addressed to the local broadcast address (like `255.255.255.255` or the subnet broadcast address). When a switch receives this packet, it floods it out of all ports. Every host located **within the same local subnet** receives and processes this broadcast. Routers do not forward broadcasts, so hosts on other subnets will not receive it.

*Why other options are incorrect:*
- **one specific host:** Represents a unicast transmission.
- **a group of hosts:** Represents a multicast transmission.
- **all hosts in all subnets:** Routers block broadcasts, so they never leave the local subnet boundary.

---

## Question 51

A host is transmitting a unicast. Which host or hosts will receive it?

- [x] **one specific host**
- [ ] a specially defined group of hosts
- [ ] all hosts on the Internet
- [ ] the closest neighbor on the same network

> [!NOTE]
> **Explanation:** **Correct Answer:** one specific host

**Concept & Details:**
A **unicast** address is an address that identifies a single, specific host or network interface. When a host transmits a unicast packet, the packet is destined for **one specific host** on the network.

*Why other options are incorrect:*
- **all hosts on the network:** This describes a broadcast transmission.
- **a group of hosts:** This describes a multicast transmission.

---

## Question 52

A user issues a ping 2001:db8:FACE:39::10 command and receives a response that includes a code of 3. What does this code represent?

- [x] **address unreachable**
- [ ] network unreachable
- [ ] host unreachable
- [ ] protocol unreachable

> [!NOTE]
> **Explanation:** **Correct Answer:** address unreachable

**Concept & Details:**
In **ICMPv6 (Internet Control Message Protocol version 6)** destination unreachable messages, the **Code** field specifies the reason the packet could not be delivered:
- **Code 0:** No route to destination.
- **Code 1:** Communication with destination administratively prohibited.
- **Code 2:** Beyond scope of the source address.
- **Code 3:** **Address unreachable** (meaning the routing devices could not resolve the destination IPv6 address to a physical link address or contact it).
- **Code 4:** Port unreachable.
Thus, a code of 3 represents "address unreachable".

*Why other options are incorrect:*
- Codes 0, 1, 2, and 4 represent network unreachable, administratively prohibited, beyond scope of source address, and port unreachable respectively.

---

## Question 53

A host is transmitting a multicast. Which host or hosts will receive it?

- [x] **a specially defined group of hosts**
- [ ] the closest neighbor on the same network
- [ ] one specific host
- [ ] directly connected network devices

> [!NOTE]
> **Explanation:** **Correct Answer:** a specially defined group of hosts

**Concept & Details:**
A **multicast** transmission is used to send a packet from a single source to a **specially defined group of hosts** who have joined a specific multicast group (e.g. by subscribing using IGMP (Internet Group Management Protocol) or MLD (Multicast Listener Discovery)). Only the hosts belonging to that multicast group will receive and process the packet.

*Why other options are incorrect:*
- **one specific host:** This is unicast.
- **all hosts on the subnet:** This is broadcast.

---

## Question 60

Which is the compressed format of the IPv6 address 2001:0db8:0000:0000:0000:a0b0:0008:0001?

- [x] **2001:db8::a0b0:8:1**
- [ ] 2001:db8::ab8:1:0:1000
- [ ] 2001:db80:0:1::80:1
- [ ] 2001:db80:::1::80:1

> [!NOTE]
> **Explanation:** **Correct Answer:** 2001:db8::a0b0:8:1

**Concept & Details:**
To compress the IPv6 address `2001:0db8:0000:0000:0000:a0b0:0008:0001`:
1. **Omit leading zeros** in each hextet:
   - `0db8` -> `db8`
   - `0000` -> `0`
   - `a0b0` -> `a0b0` (keep trailing zeros!)
   - `0008` -> `8`
   - `0001` -> `1`
   This yields: `2001:db8:0:0:0:a0b0:8:1`.
2. **Replace consecutive all-zero hextets with a double colon (::)**:
   - The three consecutive `0` hextets (`0:0:0`) are compressed to `::`.
   This yields: `2001:db8::a0b0:8:1`.

*Why other options are incorrect:*
- Compressions that leave leading zeros (e.g., `0db8` or `0008`) or use multiple double colons (which is invalid) are incorrect.

---

## Question 61

Which is the compressed format of the IPv6 address fe80:09ea:0000:2200:0000:0000:0fe0:0290?

- [x] **fe80:9ea:0:2200::fe0:290**
- [ ] fe80:9:20::b000:290
- [ ] fe80:9ea0::2020:0:bf:e0:9290
- [ ] fe80:9ea0::2020::bf:e0:9290

> [!NOTE]
> **Explanation:** **Correct Answer:** fe80:9ea:0:2200::fe0:290

**Concept & Details:**
To compress the IPv6 address `fe80:09ea:0000:2200:0000:0000:0fe0:0290`:
1. **Omit leading zeros**:
   - `09ea` -> `9ea`
   - `0000` -> `0`
   - `2200` -> `2200` (trailing zeros are kept!)
   - `0000` -> `0`
   - `0fe0` -> `fe0`
   - `0290` -> `290`
   This yields: `fe80:9ea:0:2200:0:0:fe0:290`.
2. **Compress zeros**:
   - We have two sections of zeros: a single `0` at hextet 3, and a double `0:0` at hextets 5 and 6.
   - We compress the longest run (`0:0`) with `::`. The other single zero remains as a single `0`.
   This yields: `fe80:9ea:0:2200::fe0:290`.

*Why other options are incorrect:*
- Compressing both zero sections into double colons (e.g., `fe80:9ea::2200::fe0:290`) is invalid since `::` can only be used once in an IPv6 address.

---

## Question 62

Which is the compressed format of the IPv6 address 2002:0042:0010:c400:0000:0000:0000:0909?

- [x] **2002:42:10:c400::909**
- [ ] 200:420:110:c4b::910:0:90
- [ ] 2002:4200::25:1090:0:99
- [ ] 2002:42::25:1090:0:99

> [!NOTE]
> **Explanation:** **Correct Answer:** 2002:42:10:c400::909

**Concept & Details:**
To compress the IPv6 address `2002:0042:0010:c400:0000:0000:0000:0909`:
1. **Omit leading zeros**:
   - `0042` -> `42`
   - `0010` -> `10`
   - `c400` -> `c400`
   - `0000` -> `0`
   - `0909` -> `909`
   This yields: `2002:42:10:c400:0:0:0:909`.
2. **Compress zeros**:
   - The three consecutive `0` hextets are replaced by `::`.
   This yields: `2002:42:10:c400::909`.

*Why other options are incorrect:*
- Leaving leading zeros (like `0042` or `0010`) or incorrectly reducing trailing zeros (like `c4`) are common compression errors.

---

## Question 63

Which is the compressed format of the IPv6 address 2001:0db8:0000:0000:0ab8:0001:0000:1000?

- [x] **2001:db8::ab8:1:0:1000**
- [ ] 2001:db8::a0b0:8:1
- [ ] 2001:db8:1::ab8:0:1
- [ ] 2001:db8:0:1::8:1

> [!NOTE]
> **Explanation:** **Correct Answer:** 2001:db8::ab8:1:0:1000

**Concept & Details:**
To compress the IPv6 address `2001:0db8:0000:0000:0ab8:0001:0000:1000`:
1. **Omit leading zeros**:
   - `0db8` -> `db8`
   - `0000` -> `0`
   - `0ab8` -> `ab8`
   - `0001` -> `1`
   - `1000` -> `1000`
   This yields: `2001:db8:0:0:ab8:1:0:1000`.
2. **Compress zeros**:
   - There are two zero regions: `0:0` at hextets 3-4 and `0` at hextet 7.
   - Compressing the longer run `0:0` to `::` leaves the other zero as `0`.
   This yields: `2001:db8::ab8:1:0:1000`.

*Why other options are incorrect:*
- Compressing both zero sections to `::` is invalid. Replacing the single `0` instead of the double `0:0` results in a longer address than necessary.

---

## Question 64

Which is the compressed format of the IPv6 address 2002:0420:00c4:1008:0025:0190:0000:0990?

- [x] **2002:420:c4:1008:25:190::990**
- [ ] 2002:42:10:c400::909
- [ ] 2002:4200::25:1090:0:99
- [ ] 2002:42::25:1090:0:99

> [!NOTE]
> **Explanation:** **Correct Answer:** 2002:420:c4:1008:25:190::990

**Concept & Details:**
To compress the IPv6 address `2002:0420:00c4:1008:0025:0190:0000:0990`:
1. **Omit leading zeros**:
   - `0420` -> `420`
   - `00c4` -> `c4`
   - `1008` -> `1008`
   - `0025` -> `25`
   - `0190` -> `190`
   - `0000` -> `0`
   - `0990` -> `990`
   This yields: `2002:420:c4:1008:25:190:0:990`.
2. **Compress zeros**:
   - The single `0` hextet at hextet 7 is replaced by `::`.
   This yields: `2002:420:c4:1008:25:190::990`.

*Why other options are incorrect:*
- Any compression that keeps leading zeros or fails to reduce `0000` to `::` is not fully compressed.

---

## Question 65

Which is the compressed format of the IPv6 address 2001:0db8:0000:0000:0000:a0b0:0008:0001?

- [x] **2001:db8::a0b0:8:1**
- [ ] 2001:db8:1::ab8:0:1
- [ ] 2001:db8::ab8:1:0:1000
- [ ] 2001:db8:0:1::8:1

> [!NOTE]
> **Explanation:** **Correct Answer:** 2001:db8::a0b0:8:1

**Concept & Details:**
To compress the IPv6 address `2001:0db8:0000:0000:0000:a0b0:0008:0001`:
1. **Omit leading zeros** in each hextet:
   - `0db8` -> `db8`
   - `0000` -> `0`
   - `a0b0` -> `a0b0` (keep trailing zeros!)
   - `0008` -> `8`
   - `0001` -> `1`
   This yields: `2001:db8:0:0:0:a0b0:8:1`.
2. **Replace consecutive all-zero hextets with a double colon (::)**:
   - The three consecutive `0` hextets (`0:0:0`) are compressed to `::`.
   This yields: `2001:db8::a0b0:8:1`.

*Why other options are incorrect:*
- Compressions that leave leading zeros (e.g., `0db8` or `0008`) or use multiple double colons (which is invalid) are incorrect.

---

## Question 66

Which is the compressed format of the IPv6 address fe80:0000:0000:0000:0220:0b3f:f0e0:0029?

- [x] **fe80::220:b3f:f0e0:29**
- [ ] fe80:9ea:0:2200::fe0:290
- [ ] fe80:9ea0::2020:0:bf:e0:9290
- [ ] fe80:9ea0::2020::bf:e0:9290

> [!NOTE]
> **Explanation:** **Correct Answer:** fe80::220:b3f:f0e0:29

**Concept & Details:**
To compress the IPv6 address `fe80:0000:0000:0000:0220:0b3f:f0e0:0029`:
1. **Omit leading zeros**:
   - `0000` -> `0`
   - `0220` -> `220`
   - `0b3f` -> `b3f`
   - `f0e0` -> `f0e0`
   - `0029` -> `29`
   This yields: `fe80:0:0:0:220:b3f:f0e0:29`.
2. **Compress zeros**:
   - Replace the three consecutive all-zero hextets with `::`.
   This yields: `fe80::220:b3f:f0e0:29`.

*Why other options are incorrect:*
- Failing to compress the three zero hextets or retaining leading zeros (like `0220` or `0029`) represents incomplete compression.

---

## Question 67

Which is the compressed format of the IPv6 address 2001:0db8:0000:0000:0000:a0b0:0008:0001?

- [x] **2001:db8::a0b0:8:1**
- [ ] 2001:db8::ab8:1:0:1000
- [ ] 2001:db80:0:1::80:1
- [ ] 2001:db8:0:1::8:1

> [!NOTE]
> **Explanation:** **Correct Answer:** 2001:db8::a0b0:8:1

**Concept & Details:**
To compress the IPv6 address `2001:0db8:0000:0000:0000:a0b0:0008:0001`:
1. **Omit leading zeros** in each hextet:
   - `0db8` -> `db8`
   - `0000` -> `0`
   - `a0b0` -> `a0b0` (keep trailing zeros!)
   - `0008` -> `8`
   - `0001` -> `1`
   This yields: `2001:db8:0:0:0:a0b0:8:1`.
2. **Replace consecutive all-zero hextets with a double colon (::)**:
   - The three consecutive `0` hextets (`0:0:0`) are compressed to `::`.
   This yields: `2001:db8::a0b0:8:1`.

*Why other options are incorrect:*
- Compressions that leave leading zeros (e.g., `0db8` or `0008`) or use multiple double colons (which is invalid) are incorrect.

---

## Question 68

Which is the compressed format of the IPv6 address 2002:0042:0010:c400:0000:0000:0000:0909?

- [x] **2002:42:10:c400::909**
- [ ] 2002:4200::25:1090:0:99
- [ ] 2002:420:c4:1008:25:190::990
- [ ] 2002:42::25:1090:0:99

> [!NOTE]
> **Explanation:** **Correct Answer:** 2002:42:10:c400::909

**Concept & Details:**
To compress the IPv6 address `2002:0042:0010:c400:0000:0000:0000:0909`:
1. **Omit leading zeros**:
   - `0042` -> `42`
   - `0010` -> `10`
   - `c400` -> `c400`
   - `0000` -> `0`
   - `0909` -> `909`
   This yields: `2002:42:10:c400:0:0:0:909`.
2. **Compress zeros**:
   - The three consecutive `0` hextets are replaced by `::`.
   This yields: `2002:42:10:c400::909`.

*Why other options are incorrect:*
- Leaving leading zeros (like `0042` or `0010`) or incorrectly reducing trailing zeros (like `c4`) are common compression errors.

---

## Question 69

Which is the compressed format of the IPv6 address fe80:09ea:0000:2200:0000:0000:0fe0:0290?

- [x] **fe80:9ea:0:2200::fe0:290**
- [ ] fe80:9ea0::2020:0:bf:e0:9290
- [ ] fe80::220:b3f:f0e0:29
- [ ] fe80::0220:0b3f:f0e0:0029

> [!NOTE]
> **Explanation:** **Correct Answer:** fe80:9ea:0:2200::fe0:290

**Concept & Details:**
To compress the IPv6 address `fe80:09ea:0000:2200:0000:0000:0fe0:0290`:
1. **Omit leading zeros**:
   - `09ea` -> `9ea`
   - `0000` -> `0`
   - `2200` -> `2200` (trailing zeros are kept!)
   - `0000` -> `0`
   - `0fe0` -> `fe0`
   - `0290` -> `290`
   This yields: `fe80:9ea:0:2200:0:0:fe0:290`.
2. **Compress zeros**:
   - We have two sections of zeros: a single `0` at hextet 3, and a double `0:0` at hextets 5 and 6.
   - We compress the longest run (`0:0`) with `::`. The other single zero remains as a single `0`.
   This yields: `fe80:9ea:0:2200::fe0:290`.

*Why other options are incorrect:*
- Compressing both zero sections into double colons (e.g., `fe80:9ea::2200::fe0:290`) is invalid since `::` can only be used once in an IPv6 address.

---

## Question 70

A user issues a ping 2001:db8:FACE:39::10 command and receives a response that includes a code of 2. What does this code represent?

- [x] **beyond scope of the source address**
- [ ] communication with the destination administratively prohibited
- [ ] address unreachable
- [ ] no route to destination

> [!NOTE]
> **Explanation:** **Correct Answer:** beyond scope of the source address

**Concept & Details:**
In **ICMPv6 (Internet Control Message Protocol version 6)**, a Destination Unreachable response with a **Code of 2** represents **beyond scope of the source address**. This occurs when a router receives a packet with a destination that is valid, but the source address used by the sender is restricted to a scope that cannot reach that destination (for example, attempting to route a packet with a link-local source address like `FE80::1` out to a global internet address).

*Why other options are incorrect:*
- **network/host unreachable:** Represented by codes 0 and 3.
- **port unreachable:** Represented by code 4.

---

## Question 71

A user issues a ping 192.135.250.103 command and receives a response that includes a code of 1. What does this code represent?

- [x] **host unreachable**
- [ ] beyond scope of the source address
- [ ] address unreachable
- [ ] communication with the destination administratively prohibited

> [!NOTE]
> **Explanation:** **Correct Answer:** host unreachable

**Concept & Details:**
In **ICMPv4 (Internet Control Message Protocol version 4)**, a Destination Unreachable response with a **Code of 1** represents **host unreachable**. This indicates that the router was able to locate the destination subnet, but the specific target host device could not be reached (for example, because the host is offline, or it did not reply to local ARP (Address Resolution Protocol) requests).

*Why other options are incorrect:*
- **network unreachable:** Represented by code 0.
- **protocol/port unreachable:** Represented by codes 2 and 3.

---

## Question 72

A user issues a ping fe80:65ab:dcc1::100 command and receives a response that includes a code of 3. What does this code represent?

- [x] **address unreachable**
- [ ] communication with the destination administratively prohibited
- [ ] beyond scope of the source address
- [ ] no route to destination

> [!NOTE]
> **Explanation:** **Correct Answer:** address unreachable

**Concept & Details:**
In **ICMPv6 (Internet Control Message Protocol version 6)**, a Destination Unreachable response with a **Code of 3** represents **address unreachable**. This indicates that the router or routing devices cannot resolve the destination IPv6 address to a physical link-layer address (MAC address) or otherwise contact the host.

*Why other options are incorrect:*
- Codes 0, 1, 2, and 4 represent no route to destination, communication administratively prohibited, beyond scope of source address, and port unreachable respectively.

---

## Question 73

A user issues a ping 10.10.14.67 command and receives a response that includes a code of 0. What does this code represent?

- [x] **network unreachable**
- [ ] protocol unreachable
- [ ] port unreachable
- [ ] host unreachable

> [!NOTE]
> **Explanation:** **Correct Answer:** network unreachable

**Concept & Details:**
In **ICMPv4 (Internet Control Message Protocol version 4)**, a Destination Unreachable response with a **Code of 0** represents **network unreachable**. This indicates that the router has no route in its routing table for the destination network specified in the packet's IP header and has no default route (gateway of last resort) to forward it.

*Why other options are incorrect:*
- Codes 1, 2, and 3 represent host unreachable, protocol unreachable, and port unreachable respectively.

---

## Question 74

A user issues a ping fe80:65ab:dcc1::100 command and receives a response that includes a code of 4. What does this code represent?

- [x] **port unreachable**
- [ ] host unreachable
- [ ] protocol unreachable
- [ ] network unreachable

> [!NOTE]
> **Explanation:** **Correct Answer:** port unreachable

**Concept & Details:**
In **ICMP (Internet Control Message Protocol)**, a Destination Unreachable response with a **Code of 4** represents **port unreachable**. This indicates that the destination host was reached successfully, but the transport protocol (like UDP) or the requested application port is not active or listening on the target device.

*Why other options are incorrect:*
- Codes 0, 1, and 3 represent network unreachable, host unreachable, and address/port/protocol mismatches.

---

## Question 75

A user issues a ping 198.133.219.8 command and receives a response that includes a code of 0. What does this code represent?

- [x] **network unreachable**
- [ ] protocol unreachable
- [ ] port unreachable
- [ ] host unreachable

> [!NOTE]
> **Explanation:** **Correct Answer:** network unreachable

**Concept & Details:**
In **ICMPv4 (Internet Control Message Protocol version 4)**, a Destination Unreachable response with a **Code of 0** represents **network unreachable**. This indicates that the router has no route in its routing table for the destination network specified in the packet's IP header and has no default route (gateway of last resort) to forward it.

*Why other options are incorrect:*
- Codes 1, 2, and 3 represent host unreachable, protocol unreachable, and port unreachable respectively.

---

## Question 76

A user issues a ping 2001:db8:3040:114::88 command and receives a response that includes a code of 4. What does this code represent?

- [x] **port unreachable**
- [ ] host unreachable
- [ ] protocol unreachable
- [ ] network unreachable

> [!NOTE]
> **Explanation:** **Correct Answer:** port unreachable

**Concept & Details:**
In **ICMP (Internet Control Message Protocol)**, a Destination Unreachable response with a **Code of 4** represents **port unreachable**. This indicates that the destination host was reached successfully, but the transport protocol (like UDP) or the requested application port is not active or listening on the target device.

*Why other options are incorrect:*
- Codes 0, 1, and 3 represent network unreachable, host unreachable, and address/port/protocol mismatches.

---

## Question 77

A user issues a ping 2001:db8:FACE:39::10 command and receives a response that includes a code of 2. What does this code represent?

- [x] **beyond scope of the source address**
- [ ] host unreachable
- [ ] protocol unreachable
- [ ] network unreachable

> [!NOTE]
> **Explanation:** **Correct Answer:** beyond scope of the source address

**Concept & Details:**
In **ICMPv6 (Internet Control Message Protocol version 6)**, a Destination Unreachable response with a **Code of 2** represents **beyond scope of the source address**. This occurs when a router receives a packet with a destination that is valid, but the source address used by the sender is restricted to a scope that cannot reach that destination (for example, attempting to route a packet with a link-local source address like `FE80::1` out to a global internet address).

*Why other options are incorrect:*
- **network/host unreachable:** Represented by codes 0 and 3.
- **port unreachable:** Represented by code 4.

---

