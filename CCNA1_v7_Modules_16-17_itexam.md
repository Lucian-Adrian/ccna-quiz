# CCNA 1 v7 Modules 16 – 17: Building and Securing a Small Network Exam Answers

Total Questions: 67

---

## Question 1

Which component is designed to protect against unauthorized communications to and from a computer?

- [ ] security center
- [ ] port scanner
- [ ] antimalware
- [ ] antivirus
- [x] **firewall**

> [!NOTE]
> **Explanation:** **Correct Answer:** firewall

**Concept & Details:** A **firewall** is a security device or software application designed to inspect, filter, and control incoming and outgoing network traffic based on predefined security rules. Its primary goal is to prevent unauthorized communications to and from a computer or private network.

Let's look at why the other options are incorrect:
* **Antivirus / Antimalware:** These protect against software-based threats (malicious code like viruses, worms, and spyware) that have already entered a host machine, rather than blocking network traffic.
* **Port scanner:** A tool used to identify open ports on a device, which is often used by network administrators for security audits or by attackers for reconnaissance.
* **Security center:** A dashboard or interface in an operating system that provides a central location to manage security settings.

---

## Question 2

Which command will block login attempts on RouterA for a period of 30 seconds if there are 2 failed login attempts within 10 seconds?

- [ ] RouterA(config)# login block-for 10 attempts 2 within 30
- [x] **RouterA(config)# login block-for 30 attempts 2 within 10**
- [ ] RouterA(config)# login block-for 2 attempts 30 within 10
- [ ] RouterA(config)# login block-for 30 attempts 10 within 2

> [!NOTE]
> **Explanation:** **Correct Answer:** RouterA(config)# login block-for 30 attempts 2 within 10

**Concept & Details:** The Cisco IOS (Internetwork Operating System) command to protect against brute-force login attempts is:
`RouterA(config)# login block-for [seconds] attempts [number] within [seconds]`

Breaking this command down:
* **login block-for 30:** Blocks any login attempts on the router for a period of 30 seconds.
* **attempts 2:** The block is triggered after 2 failed attempts.
* **within 10:** The failed attempts must occur within a window of 10 seconds.
Therefore, the correct command syntax is `login block-for 30 attempts 2 within 10`.

---

## Question 3

What is the purpose of the network security accounting function?

- [ ] to require users to prove who they are
- [ ] to determine which resources a user can access
- [x] **to keep track of the actions of a user**
- [ ] to provide challenge and response questions

> [!NOTE]
> **Explanation:** **Correct Answer:** to keep track of the actions of a user

**Concept & Details:** In the AAA (Authentication, Authorization, and Accounting) security framework:
* **Authentication:** Requires users to prove who they are (e.g., entering a username and password).
* **Authorization:** Determines which resources or commands a user is allowed to access.
* **Accounting (Correct):** Keeps track of the actions of a user, including what commands they run, when they log in, and when they log out. This creates an audit log for security purposes.

---

## Question 4

What type of attack may involve the use of tools such as nslookup and fping?

- [ ] access attack
- [x] **reconnaissance attack**
- [ ] denial of service attack
- [ ] worm attack

> [!NOTE]
> **Explanation:** **Correct Answer:** reconnaissance attack

**Concept & Details:** A **reconnaissance attack** involves gathering information about a target network (such as active hosts, open ports, and DNS mappings) to identify potential vulnerabilities before launching an active exploit. 
* **nslookup:** A tool used to query DNS (Domain Name System) servers to find domain name-to-IP address mappings.
* **fping:** A utility that pings multiple hosts in parallel to see which ones are online.
Both of these tools are used to gather data, making them reconnaissance tools.

Let's look at why the other options are incorrect:
* **Access attack:** Attempts to exploit vulnerabilities to gain unauthorized access to systems or data (e.g., password cracking).
* **Denial of Service (DoS):** Attempts to overwhelm or crash network resources.
* **Worm attack:** A self-replicating malware attack that spreads across networks.

---

## Question 5

Match each weakness with an example. (Not all options are used.)

Place the options in the following order:

![exhibit](https://itexamanswers.net/wp-content/uploads/2019/12/2024-09-19_085226.jpg)

| security policy weakness | The network administrator did not fully consider the implications of unauthorized users accessing the network. |
| ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| configuration weakness   | When implementing an access list on a router, a network engineer did not filter a type of malicous traffic.    |
| technological weakness   | A nework engineer is examining the operating system of a network device for vulnerabilities.                   |

> [!NOTE]
> **Explanation:** **Correct Answer:** Technological weakness (e.g., cleartext transmission), Configuration weakness (e.g., default password), Security Policy weakness (e.g., lack of written guidelines)

**Concept & Details:** Network security vulnerabilities generally fall into three main categories:
1. **Technological weaknesses:** Security issues inherent in technology itself, such as cleartext protocols (like Telnet or HTTP) that transmit credentials without encryption, or software bugs.
2. **Configuration weaknesses:** Issues arising from how a system is set up, such as leaving default usernames/passwords active, or leaving unnecessary services running.
3. **Security Policy weaknesses:** Flaws in organizational rules, such as having no password complexity rules or lacking employee security training.
*Note: An employee trying to guess someone else's password is an active "access attack" rather than a system weakness itself.*

---

## Question 6

Match the type of information security threat to the scenario. (Not all options are used.)

> [!NOTE]
> **Explanation:** **Correct Answer:** Information theft, Identity theft, Data loss or manipulation, Disruption of service

**Concept & Details:** After an attacker gains unauthorized access to a network, the primary security threats they pose include:
* **Information theft:** Stealing proprietary files, source code, or intellectual property.
* **Identity theft:** Stealing personal user details to impersonate employees.
* **Data loss or manipulation:** Deleting databases or altering files.
* **Disruption of service:** Shutting down servers or flooding networks to prevent legitimate users from accessing services.
*Note: Cracking a password for a known username is an example of an "access attack" used to gain entry.*

---

## Question 7

Which example of malicious code would be classified as a Trojan horse?

- [x] **malware that was written to look like a video game**
- [ ] malware that requires manual user intervention to spread between systems
- [ ] malware that attaches itself to a legitimate program and spreads to other programs when launched
- [ ] malware that can automatically spread from one system to another by exploiting a vulnerability in the target

> [!NOTE]
> **Explanation:** **Correct Answer:** malware that was written to look like a video game

**Concept & Details:** A **Trojan horse** is a type of malicious code (malware) that is disguised as a legitimate, useful program (such as a video game, system utility, or screensaver) to trick the user into executing it. Once run, it executes its hidden malicious payload.

Let's look at why the other options are incorrect:
* **Malware that requires manual user intervention to spread / attaches to legitimate programs:** These describe a **virus**. A virus requires human help to run and propagate by attaching to files.
* **Malware that automatically spreads by exploiting vulnerabilities:** This describes a **worm**, which does not need human interaction to spread.

---

## Question 8

What is the difference between a virus and a worm?

- [ ] Viruses self-replicate but worms do not.
- [x] **Worms self-replicate but viruses do not.**
- [ ] Worms require a host file but viruses do not.
- [ ] Viruses hide in legitimate programs but worms do not.

> [!NOTE]
> **Explanation:** **Correct Answer:** Worms self-replicate but viruses do not.

**Concept & Details:** The key difference between a virus and a worm is how they replicate and propagate:
* **Worms:** Are standalone, self-replicating programs that can automatically propagate across networks by exploiting security vulnerabilities in systems without any user interaction.
* **Viruses:** Require a host file or program to attach themselves to, and they require manual user intervention (such as opening an email attachment or running an infected file) to execute and spread to other files.

Let's look at why the other options are incorrect:
* Viruses hide in programs, but they do not self-replicate automatically. Worms self-replicate, but they do not require a host file.

---

## Question 9

Which attack involves a compromise of data that occurs between two end points?

- [ ] denial-of-service
- [x] **man-in-the-middle attack**
- [ ] extraction of security parameters
- [ ] username enumeration

> [!NOTE]
> **Explanation:** **Correct Answer:** man-in-the-middle attack

**Concept & Details:** A **man-in-the-middle (MITM) attack** occurs when a threat actor positions themselves between two communicating endpoints (e.g., a client and a server). The attacker intercepts, inspects, and potentially alters the data in transit without either endpoint knowing.

Let's look at why the other options are incorrect:
* **Denial-of-service (DoS):** Overwhelms a target server to make it unavailable.
* **Extraction of security parameters:** A phase of cryptographic attacks.
* **Username enumeration:** An attack to find valid usernames on a system.

---

## Question 10

Which type of attack involves an adversary attempting to gather information about a network to identify vulnerabilities?

- [x] **reconnaissance**
- [ ] DoS
- [ ] dictionary
- [ ] man-in-the-middle

> [!NOTE]
> **Explanation:** **Correct Answer:** reconnaissance

**Concept & Details:** A **reconnaissance attack** is an information-gathering phase where an adversary maps out a target network, identifies active devices, and checks for open ports to find vulnerabilities. This information is then used to plan and launch future attacks.

Let's look at why the other options are incorrect:
* **DoS (Denial of Service):** Designed to disrupt network access rather than gather information.
* **Dictionary attack:** A type of access attack used to guess passwords.
* **Man-in-the-middle:** An attack that intercepts data in transit.

---

## Question 11

Match the description to the type of firewall filtering. (Not all options are used.)

![exhibit](https://itexamanswers.net/wp-content/uploads/2019/12/2024-09-19_083338.jpg)

> [!NOTE]
> **Explanation:** **Correct Answer:** Stateful packet inspection (matches response traffic), URL filtering (matches web addresses/keywords), Application filtering (matches port numbers), Packet filtering (matches IP/MAC addresses)

**Concept & Details:** Firewalls use different filtering methods to secure a network:
* **Stateful packet inspection (SPI):** Monitors the state of active connections. It only allows incoming traffic if it is a legitimate response to a request initiated by an internal host.
* **URL filtering:** Permits or blocks access based on specific website addresses (URLs) or keywords.
* **Application filtering:** Permits or blocks access based on specific application ports or protocol behaviors.
* **Packet filtering:** Permits or blocks traffic based on Layer 3 IP addresses or Layer 2 MAC (Media Access Control) addresses.

---

## Question 12

What is the purpose of the network security authentication function?

- [x] **to require users to prove who they are**
- [ ] to determine which resources a user can access
- [ ] to keep track of the actions of a user
- [ ] to provide challenge and response questions

> [!NOTE]
> **Explanation:** **Correct Answer:** to require users to prove who they are

**Concept & Details:** In the AAA (Authentication, Authorization, and Accounting) security framework, the purpose of **Authentication** is to require users to prove who they are (confirming their identity) before they are allowed to access any network resources. This is typically done using usernames, passwords, smart cards, or biometric data.

Let's look at why the other options are incorrect:
* **Determining which resources a user can access:** This is the function of **Authorization**.
* **Keeping track of user actions:** This is the function of **Accounting**.

---

## Question 13

Which firewall feature is used to ensure that packets coming into a network are legitimate responses to requests initiated from internal hosts?

- [x] **stateful packet inspection**
- [ ] URL filtering
- [ ] application filtering
- [ ] packet filtering

> [!NOTE]
> **Explanation:** **Correct Answer:** stateful packet inspection

**Concept & Details:** **Stateful packet inspection (SPI)** is a firewall feature that tracks the state of active network sessions. It maintains a state table of outgoing requests initiated by internal hosts. When incoming packets arrive at the firewall, they are only allowed in if they match an active session in the state table, ensuring they are legitimate responses.

Let's look at why the other options are incorrect:
* **URL filtering:** Permits/denies access based on web addresses.
* **Application filtering:** Permits/denies access based on application port numbers.
* **Packet filtering:** Permits/denies access based on static IP/MAC addresses.

---

## Question 14

When applied to a router, which command would help mitigate brute-force password attacks against the router?

- [ ] exec-timeout 30
- [ ] service password-encryption
- [ ] banner motd $Max failed logins = 5$
- [x] **login block-for 60 attempts 5 within 60**

> [!NOTE]
> **Explanation:** **Correct Answer:** login block-for 60 attempts 5 within 60

**Concept & Details:** The command `login block-for 60 attempts 5 within 60` is used to mitigate brute-force password guessing attacks. It blocks login attempts for 60 seconds if 5 failed logins occur within a 60-second window. This halts automated scripts that try thousands of passwords quickly.

Let's look at why the other options are incorrect:
* **exec-timeout 30:** Disconnects an idle CLI session after 30 minutes.
* **service password-encryption:** Encrypts passwords displayed in the configuration file.
* **banner motd:** Displays a message of the day warning to users who connect to the device.

---

## Question 15

Identify the steps needed to configure a switch for SSH. The answer order does not matter. (Not all options are used.)

> [!NOTE]
> **Explanation:** **Correct Answer:** Configure Hostname, Configure IP Domain, Generate RSA Keys, Create Local Username/Password, Configure VTY lines (login local and transport input ssh)

**Concept & Details:** To configure a switch or router to accept SSH (Secure Shell) connections, you must perform these steps:
1. Set a unique **hostname** (SSH cannot run with default names).
2. Configure the **IP domain name** (e.g., `ip domain-name cisco.com`).
3. Generate the cryptographic **RSA keys** (`crypto key generate rsa`).
4. Create a local **username and password** (`username admin secret class`).
5. Configure the Virtual Terminal lines (**vty**) to use the local database (`login local`) and only allow SSH (`transport input ssh`).
*Note: The `login` and `password cisco` commands are used for Telnet, not SSH.*

---

## Question 16

What feature of SSH makes it more secure than Telnet for a device management connection?

- [ ] confidentiality with IPsec
- [ ] stronger password requirement
- [ ] random one-time port connection
- [x] **login information and data encryption**

> [!NOTE]
> **Explanation:** **Correct Answer:** login information and data encryption

**Concept & Details:** SSH (Secure Shell) is more secure than Telnet because SSH provides **login information and data encryption**. Telnet transmits everything (including usernames and passwords) in clear, unencrypted text, making it vulnerable to packet sniffing. SSH encrypts the entire session, ensuring confidentiality.

Let's look at why the other options are incorrect:
* **Confidentiality with IPsec:** SSH does not use IPsec; it has its own built-in encryption.
* **Stronger password requirement:** Switch password rules are configured independently of the access protocol.
* **Random one-time port:** SSH uses standard TCP port 22 by default.

---

## Question 17

What is the advantage of using SSH over Telnet?

- [ ] SSH is easier to use.
- [ ] SSH operates faster than Telnet.
- [x] **SSH provides secure communications to access hosts.**
- [ ] SSH supports authentication for a connection request.

> [!NOTE]
> **Explanation:** **Correct Answer:** SSH provides secure communications to access hosts.

**Concept & Details:** The primary advantage of SSH (Secure Shell) over Telnet is that **SSH provides secure communications by encrypting** all traffic between the client and the remote host. This prevents attackers from sniffing sensitive data or passwords.

Let's look at why the other options are incorrect:
* Telnet is actually simpler and faster because it does not perform cryptographic calculations.
* Both protocols support authentication, but Telnet sends those credentials in cleartext.

---

## Question 18

What is the role of an IPS?

- [x] **detecting and blocking of attacks in real time**
- [ ] connecting global threat information to Cisco network security devices
- [ ] authenticating and validating traffic
- [ ] filtering of nefarious websites

> [!NOTE]
> **Explanation:** **Correct Answer:** detecting and blocking of attacks in real time

**Concept & Details:** An **IPS (Intrusion Prevention System)** is an active network security device. It monitors network traffic, detects malicious activity, and **blocks the attacks in real-time** (by dropping packets, resetting connections, or modifying firewall rules).

Let's look at why the other options are incorrect:
* **Connecting global threat info:** This is the role of centralized threat intelligence services (like Cisco Talos).
* **Authenticating and validating traffic:** Handled by AAA servers and firewalls.
* **Filtering websites:** Handled by URL filters or secure web gateways.

---

## Question 19

A user is redesigning a network for a small company and wants to ensure security at a reasonable price. The user deploys a new application-aware firewall with intrusion detection capabilities on the ISP connection. The user installs a second firewall to separate the company network from the public network. Additionally, the user installs an IPS on the internal network of the company. What approach is the user implementing?

- [ ] attack based
- [ ] risk based
- [ ] structured
- [x] **layered**

> [!NOTE]
> **Explanation:** **Correct Answer:** layered

**Concept & Details:** The user is implementing a **layered** security approach (also known as "Defense in Depth"). This strategy involves deploying multiple, overlapping security controls (perimeter firewall, internal firewall, and internal IPS) at different levels of the network. If an attacker breaches one defense, other security layers are still in place to prevent complete compromise.

Let's look at why the other options are incorrect:
* **Attack-based / Risk-based / Structured:** These are overall security management frameworks, not the design of overlapping network security defenses.

---

## Question 20

What is an accurate description of redundancy?

- [ ] configuring a router with a complete MAC address database to ensure that all frames can be forwarded to the correct destination
- [ ] configuring a switch with proper security to ensure that all traffic forwarded through an interface is filtered
- [ ] designing a network to use multiple virtual devices to ensure that all traffic uses the best path through the internetwork
- [x] **designing a network to use multiple paths between switches to ensure there is no single point of failure**

> [!NOTE]
> **Explanation:** **Correct Answer:** designing a network to use multiple paths between switches to ensure there is no single point of failure

**Concept & Details:** **Redundancy** is the practice of designing a network with duplicate paths, cables, or devices between switches. This ensures that if a single switch or cable fails, traffic can automatically take an alternate path, preventing network downtime (removing single points of failure).

Let's look at why the other options are incorrect:
* Router MAC databases, switch security filtering, and logical path calculations (without redundant hardware/paths) do not constitute physical redundancy.

---

## Question 21

A network administrator is upgrading a small business network to give high priority to real-time applications traffic. What two types of network services is the network administrator trying to accommodate? (Choose two.)

- [x] **voice**
- [x] **video**
- [ ] instant messaging
- [ ] FTP
- [ ] SNMP

> [!NOTE]
> **Explanation:** **Correct Answer:** voice, video

**Concept & Details:** **Voice** and **video** are real-time applications. They are highly sensitive to latency (network delay) and jitter (variation in packet arrival times). If voice or video packets are delayed, the quality degrades immediately (resulting in choppy sound or frozen video). Therefore, network administrators prioritize voice and video traffic over less time-sensitive traffic (like FTP or SNMP) using Quality of Service (QoS) mechanisms.

---

## Question 22

What is the purpose of a small company using a protocol analyzer utility to capture network traffic on the network segments where the company is considering a network upgrade?

- [ ] to identify the source and destination of local network traffic
- [ ] to capture the Internet connection bandwidth requirement
- [x] **to document and analyze network traffic requirements on each network segment**
- [ ] to establish a baseline for security analysis after the network is upgraded

> [!NOTE]
> **Explanation:** **Correct Answer:** to document and analyze network traffic requirements on each network segment

**Concept & Details:** A protocol analyzer (packet sniffer, like Wireshark) is used to capture and analyze network traffic. The purpose of using it before a network upgrade is to **document and analyze network traffic requirements on each network segment**. This establishes a baseline of traffic flow, data volumes, and protocols, which is necessary to plan where upgrades are needed.

Let's look at why the other options are incorrect:
* While it captures traffic sources/destinations and bandwidth, its ultimate purpose for network planning is to analyze segment requirements.
* It does not establish a security baseline directly, though it can help identify security issues.

---

## Question 23

Refer to the exhibit. An administrator is testing connectivity to a remote device with the IP address 10.1.1.1. What does the output of this command indicate?

- [ ] Connectivity to the remote device was successful.
- [x] **A router along the path did not have a route to the destination.**
- [ ] A ping packet is being blocked by a security device along the path.
- [ ] The connection timed out while waiting for a reply from the remote device.

> [!NOTE]
> **Explanation:** **Correct Answer:** A router along the path did not have a route to the destination.

**Concept & Details:** In the Cisco IOS `ping` command output, the letter **‘U’** stands for **"Unreachable"**. This indicates that an intermediate router along the path received the ping packet, checked its routing table, realized it had no route to the destination network, dropped the packet, and sent an ICMP (Internet Control Message Protocol) Destination Unreachable message back to the source router.

Let's look at why the other options are incorrect:
* **Success:** Indicated by an exclamation mark (`!`).
* **Timeout:** Indicated by a period (`.`).
* **Blocked by security device:** Typically results in a timeout (`.`) rather than an unreachable message from a router.

---

## Question 24

Which method is used to send a ping message specifying the source address for the ping?

- [ ] Issue the ping command from within interface configuration mode.
- [x] **Issue the ping command without specifying a destination IP address.**
- [ ] Issue the ping command without extended commands.
- [ ] Issue the ping command after shutting down un-needed interfaces.

> [!NOTE]
> **Explanation:** **Correct Answer:** Issue the ping command without specifying a destination IP address.

**Concept & Details:** By entering the `ping` command in privileged EXEC mode **without specifying a destination IP address**, the Cisco IOS enters **extended ping** mode. This interactive mode prompts the administrator to configure extended parameters, including selecting the source IP address or interface, packet size, and timeout settings.

Let's look at why the other options are incorrect:
* You cannot issue the ping command from interface configuration mode.
* Shutting down interfaces or not using extended commands will not let you specify a custom source address.

---

## Question 25

A network engineer is analyzing reports from a recently performed network baseline. Which situation would depict a possible latency issue?

- [ ] a change in the bandwidth according to the show interfaces output
- [ ] a next-hop timeout from a traceroute
- [x] **an increase in host-to-host ping response times**
- [ ] a change in the amount of RAM according to the show version output

> [!NOTE]
> **Explanation:** **Correct Answer:** an increase in host-to-host ping response times

**Concept & Details:** Latency is the time it takes for data to travel from the source to the destination. Host-to-host `ping` measures this round-trip time in milliseconds (ms). Therefore, **an increase in host-to-host ping response times** indicates that packets are taking longer to travel back and forth, depicting a possible latency issue.

Let's look at why the other options are incorrect:
* Bandwidth changes, version configurations, or next-hop timeouts in traceroute are not direct indicators of host-to-host latency increases.

---

## Question 26

Which statement is true about Cisco IOS ping indicators?​

- [ ] ‘!’ indicates that the ping was unsuccessful and that the device may have issues finding a DNS server.
- [x] **‘U’ may indicate that a router along the path did not contain a route to the destination address and that the ping was unsuccessful.**
- [ ] ‘.’ indicates that the ping was successful but the response time was longer than normal.
- [ ] A combination of ‘.’ and ‘!’ indicates that a router along the path did not have a route to the destination address and responded with an ICMP unreachable message.​

> [!NOTE]
> **Explanation:** **Correct Answer:** ‘U’ may indicate that a router along the path did not contain a route to the destination address and that the ping was unsuccessful.

**Concept & Details:** In the Cisco IOS ping utility, the letter **‘U’** stands for **"Unreachable"**. This indicates that an intermediate router along the path received the ping packet, realized it did not have a route to the destination network, dropped the packet, and sent an ICMP (Internet Control Message Protocol) Destination Unreachable message back to the source.

Let's look at why the other options are incorrect:
* **‘!’ (Exclamation mark):** Indicates a successful ping.
* **‘.’ (Period):** Indicates a timeout (the request was sent but no reply was received).
* **Combination of ‘.’ and ‘!’:** Does not exist; a ping will show individual results like `!!!!!` or `...U.`.

---

## Question 27

A user reports a lack of network connectivity. The technician takes control of the user machine and attempts to ping other computers on the network and these pings fail. The technician pings the default gateway and that also fails. What can be determined for sure by the results of these tests?

- [ ] The NIC in the PC is bad.
- [ ] The TCP/IP protocol is not enabled.
- [ ] The router that is attached to the same network as the workstation is down.
- [x] **Nothing can be determined for sure at this point.**

> [!NOTE]
> **Explanation:** **Correct Answer:** Nothing can be determined for sure at this point.

**Concept & Details:** In modern network environments, many devices (including hosts, default gateways, and servers) are configured with software firewalls that block ICMP (Internet Control Message Protocol) echo request packets (pings) by default for security reasons. Therefore, if a workstation fails to ping other devices or its default gateway, it does not automatically mean the NIC is broken or the gateway is down. **Nothing can be determined for sure** without performing additional tests (such as checking link lights or attempting connectivity from another workstation).

---

## Question 28

A network technician issues the C:> tracert -6 www.cisco.com command on a Windows PC. What is the purpose of the -6 command option?

- [x] **It forces the trace to use IPv6.**
- [ ] It limits the trace to only 6 hops.
- [ ] It sets a 6 milliseconds timeout for each replay.
- [ ] It sends 6 probes within each TTL time period.

> [!NOTE]
> **Explanation:** **Correct Answer:** It forces the trace to use IPv6.

**Concept & Details:** In Windows Command Prompt, the `tracert` utility is used to trace the path to a destination. The **`-6`** option forces the utility to use **IPv6** (Internet Protocol version 6) for the trace, resolving the target domain name to an IPv6 address. Conversely, using `-4` forces the trace to use IPv4.

Let's look at why the other options are incorrect:
* The `-6` switch does not limit the trace to 6 hops, set a 6ms timeout, or send 6 probes per TTL; those are configured with other command switches (like `-h` for hops and `-w` for timeout).

---

## Question 29

Why would a network administrator use the tracert utility?

- [ ] to determine the active TCP connections on a PC
- [ ] to check information about a DNS name in the DNS server
- [x] **to identify where a packet was lost or delayed on a network**
- [ ] to display the IP address, default gateway, and DNS server address for a PC

> [!NOTE]
> **Explanation:** **Correct Answer:** to identify where a packet was lost or delayed on a network

**Concept & Details:** The **`tracert`** (traceroute) utility is used to trace the physical path that packets take to reach a destination. It lists every router hop along the way and the round-trip times (RTT) for each hop. If a connection fails or is slow, `tracert` allows network administrators to see exactly **where the packet was lost or delayed** by identifying the last active hop before timeouts start appearing.

Let's look at why the other options are incorrect:
* **Determining active TCP connections:** Done using the `netstat` command.
* **Checking DNS server records:** Done using the `nslookup` command.
* **Displaying PC IP information:** Done using the `ipconfig` command.

---

## Question 30

A ping fails when performed from router R1 to directly connected router R2. The network administrator then proceeds to issue the show cdp neighbors command. Why would the network administrator issue this command if the ping failed between the two routers?

- [ ] The network administrator suspects a virus because the ping command did not work.
- [x] **The network administrator wants to verify Layer 2 connectivity.**
- [ ] The network administrator wants to verify the IP address configured on router R2.
- [ ] The network administrator wants to determine if connectivity can be established from a non-directly connected network.

> [!NOTE]
> **Explanation:** **Correct Answer:** The network administrator wants to verify Layer 2 connectivity.

**Concept & Details:** CDP (Cisco Discovery Protocol) is a proprietary Cisco Layer 2 protocol used to share information between directly connected Cisco devices. Because CDP operates entirely at **Layer 2 (Data Link Layer)**, it does not require Layer 3 IP configurations to work. If a ping (which requires Layer 3 IP connectivity) fails, but `show cdp neighbors` successfully displays the neighboring router, it proves that physical Layer 1 cabling and Layer 2 link protocols are functioning. The ping failure is therefore isolated to a Layer 3 issue (such as misconfigured IP addresses or subnet masks).

Let's look at why the other options are incorrect:
* CDP cannot detect system viruses, verify Layer 3 IP addresses on the remote device (unless you use `show cdp neighbors detail`), or test non-directly connected networks.

---

## Question 31

A network engineer is troubleshooting connectivity issues among interconnected Cisco routers and switches. Which command should the engineer use to find the IP address information, host name, and IOS version of neighboring network devices?

- [ ] show version
- [ ] show ip route
- [ ] show interfaces
- [x] **show cdp neighbors detail**

> [!NOTE]
> **Explanation:** **Correct Answer:** show cdp neighbors detail

**Concept & Details:** The **`show cdp neighbors detail`** command is used to display extensive information about directly connected neighboring Cisco devices. It shows their configured IP addresses (both IPv4 and IPv6), host name, device capabilities, local and remote port interfaces, and the version of Cisco IOS software they are running.

Let's look at why the other options are incorrect:
* **show version:** Displays hardware and software details for the local device only.
* **show ip route:** Displays the local device's Layer 3 routing table.
* **show interfaces:** Displays interface status and statistics for the local device only.

---

## Question 32

What information about a Cisco router can be verified using the show version command?

- [ ] the routing protocol version that is enabled
- [x] **the value of the configuration register**
- [ ] the operational status of serial interfaces
- [ ] the administrative distance used to reach networks

> [!NOTE]
> **Explanation:** **Correct Answer:** the value of the configuration register

**Concept & Details:** The **`show version`** command displays hardware and software information for the Cisco router. At the very bottom of its output, it shows the value of the **configuration register** (e.g., `0x2102`). The configuration register controls how the router boots (such as loading the startup-config from NVRAM or ignoring it for password recovery).

Let's look at why the other options are incorrect:
* **Routing protocols:** Verified using `show ip protocols` or `show running-config`.
* **Interface status:** Verified using `show ip interface brief` or `show interfaces`.
* **Administrative distance:** Found in the routing table using `show ip route`.

---

## Question 33

Which command should be used on a Cisco router or switch to allow log messages to be displayed on remotely connected sessions using Telnet or SSH?

- [ ] debug all
- [ ] logging synchronous
- [ ] show running-config​
- [x] **terminal monitor**

> [!NOTE]
> **Explanation:** **Correct Answer:** terminal monitor

**Concept & Details:** By default, Cisco devices display system log messages (syslog) and debug output only on the physical console port. If an administrator is connected remotely via Telnet or SSH, they must execute the **`terminal monitor`** command in privileged EXEC mode to redirect these log messages to their remote terminal session.

Let's look at why the other options are incorrect:
* **debug all:** Enables all debugging, which can crash a router and does not redirect output to remote lines.
* **logging synchronous:** Prevents log messages from interrupting your command input typing.
* **show running-config:** Displays the configuration file.

---

## Question 34

Which command can an administrator issue on a Cisco router to send debug messages to the vty lines?

- [x] **terminal monitor**
- [ ] logging console
- [ ] logging buffered
- [ ] logging synchronous

> [!NOTE]
> **Explanation:** **Correct Answer:** terminal monitor

**Concept & Details:** Debug messages are a type of system log message. To display debug outputs on virtual terminal sessions (vty lines) via SSH or Telnet, the administrator must issue the **`terminal monitor`** command. Without this command, debug output will only print to the physical console port.

Let's look at why the other options are incorrect:
* **logging console:** Configures logging to the physical console port.
* **logging buffered:** Configures the router to save log messages in RAM.
* **logging synchronous:** Syncs console messages so they don't interrupt your typing.

---

## Question 35

By following a structured troubleshooting approach, a network administrator identified a network issue after a conversation with the user. What is the next step that the administrator should take?

- [ ] Verify full system functionality.
- [ ] Test the theory to determine cause.
- [x] **Establish a theory of probable causes.**
- [ ] Establish a plan of action to resolve the issue.

> [!NOTE]
> **Explanation:** **Correct Answer:** Establish a theory of probable causes.

**Concept & Details:** Following a structured troubleshooting approach:
1. Identify the problem (conversing with the user and gathering symptoms).
2. **Establish a theory of probable causes (Correct next step).**
3. Test the theory to determine the cause.
4. Establish a plan of action to resolve the issue.
5. Verify full system functionality and implement preventive measures.
6. Document findings, actions, and outcomes.

---

## Question 36

Users are complaining that they are unable to browse certain websites on the Internet. An administrator can successfully ping a web server via its IP address, but cannot browse to the domain name of the website. Which troubleshooting tool would be most useful in determining where the problem is?

- [ ] netstat
- [ ] tracert
- [x] **nslookup**
- [ ] ipconfig

> [!NOTE]
> **Explanation:** **Correct Answer:** nslookup

**Concept & Details:** The symptoms indicate that Layer 3 network connectivity is functional (since pinging the IP address works), but name resolution is failing (browsing via domain name fails). The **`nslookup`** (Name Server Lookup) command is a DNS diagnostic tool used to query DNS servers to verify if a domain name can be successfully resolved to its IP address.

Let's look at why the other options are incorrect:
* **netstat:** Shows active TCP connections.
* **tracert:** Traces the routing path.
* **ipconfig:** Shows local IP address configurations.

---

## Question 37

An employee complains that a Windows PC cannot connect to the Internet. A network technician issues the ipconfig command on the PC and is shown an IP address of 169.254.10.3. Which two conclusions can be drawn? (Choose two.)

- [x] **The PC cannot contact a DHCP server.**
- [ ] The DNS server address is misconfigured.
- [ ] The default gateway address is not configured.
- [x] **The PC is configured to obtain an IP address automatically.**
- [ ] The enterprise network is misconfigured for dynamic routing.

> [!NOTE]
> **Explanation:** **Correct Answer:** The PC cannot contact a DHCP server., The PC is configured to obtain an IP address automatically.

**Concept & Details:** An IP address in the `169.254.0.0/16` range is an APIPA (Automatic Private IP Addressing) address. 
* **The PC is configured to obtain an IP address automatically:** A device only attempts to obtain an address if configured for DHCP.
* **The PC cannot contact a DHCP server:** If the device is configured to use DHCP but fails to receive a response from a DHCP server, Windows automatically assigns itself an APIPA address.

Let's look at why the other options are incorrect:
* Misconfigured DNS or default gateway settings do not trigger APIPA addresses; only a failure to contact a DHCP server does.

---

## Question 38

Refer to the exhibit. Host H3 is having trouble communicating with host H1. The network administrator suspects a problem exists with the H3 workstation and wants to prove that there is no problem with the R2 configuration. What tool could the network administrator use on router R2 to prove that communication exists to host H1 from the interface on R2, which is the interface that H3 uses when communicating with remote networks?

- [ ] traceroute
- [ ] show cdp neighbors
- [ ] Telnet
- [x] **an extended ping**

> [!NOTE]
> **Explanation:** **Correct Answer:** an extended ping

**Concept & Details:** To test if router R2 can reach host H1 from the specific LAN interface facing H3 (rather than its default WAN exit interface), the administrator must use an **extended ping**. This allows the administrator to manually set the source IP address of the ping to match R2's LAN interface, proving that routing and connectivity are functional for the H3 LAN.

Let's look at why the other options are incorrect:
* **traceroute:** Maps the hops but does not let you configure the LAN interface as the ping source easily in standard commands.
* **show cdp neighbors / Telnet:** Do not test ICMP Layer 3 connectivity from a specific interface.

---

## Question 39

Refer to the exhibit. Baseline documentation for a small company had ping round trip time statistics of 36/97/132 between hosts H1 and H3. Today the network administrator checked connectivity by pinging between hosts H1 and H3 that resulted in a round trip time of 1458/2390/6066. What does this indicate to the network administrator?

- [ ] Connectivity between H1 and H3 is fine.
- [ ] H3 is not connected properly to the network.
- [ ] Something is causing interference between H1 and R1.
- [ ] Performance between the networks is within expected parameters.
- [x] **Something is causing a time delay between the networks.**

> [!NOTE]
> **Explanation:** **Correct Answer:** Something is causing a time delay between the networks.

**Concept & Details:** Ping round-trip times (RTT) are shown in milliseconds (ms). The baseline RTT was 36/97/132 ms, but the current RTT is 1458/2390/6066 ms (up to 6 seconds). This massive increase in RTT indicates that **something is causing a significant time delay (latency) between the networks**, such as network congestion, a routing loop, or packet transmission errors.

---

## Question 40

Which network service automatically assigns IP addresses to devices on the network?

- [x] **DHCP**
- [ ] Telnet
- [ ] DNS
- [ ] traceroute

> [!NOTE]
> **Explanation:** **Correct Answer:** DHCP

**Concept & Details:** **DHCP (Dynamic Host Configuration Protocol)** is a network service that automatically assigns IP addresses, subnet masks, default gateways, and DNS server addresses to client devices on the network when they connect.

Let's look at why the other options are incorrect:
* **DNS:** Translates hostnames to IP addresses.
* **Telnet:** Used for remote command-line access.
* **traceroute:** Used to trace the path of packets.

---

## Question 41

Which command can an administrator execute to determine what interface a router will use to reach remote networks?

- [ ] show arp
- [ ] show interfaces
- [x] **show ip route**
- [ ] show protocols

> [!NOTE]
> **Explanation:** **Correct Answer:** show ip route

**Concept & Details:** The **`show ip route`** command displays the router's routing table (RIB). The routing table lists all known networks (directly connected, static, and dynamic) and identifies the exit interface and next-hop IP address that the router will use to reach each destination.

Let's look at why the other options are incorrect:
* **show arp:** Displays the IP-to-MAC address mapping table.
* **show interfaces / show protocols:** Display physical interface status and statistics.

---

## Question 42

On which two interfaces or ports can security be improved by configuring executive timeouts? (Choose two.)

- [ ] Fast Ethernet interfaces
- [x] **console ports**
- [ ] serial interfaces
- [x] **vty ports**
- [ ] loopback interfaces

> [!NOTE]
> **Explanation:** **Correct Answer:** console ports, vty ports

**Concept & Details:** Configuring an executive timeout (`exec-timeout`) automatically logs out or disconnects a CLI session after a specified period of inactivity. This is a critical security measure to prevent unauthorized access if an administrator leaves a session open and walks away. This can be configured on the physical **console port** and the virtual terminal (**vty**) ports (used for SSH/Telnet access).

It cannot be configured on data interfaces like Fast Ethernet, loopback, or serial interfaces, as these do not host interactive user CLI sessions.

---

## Question 43

When configuring SSH on a router to implement secure network management, a network engineer has issued the login local and transport input ssh line vty commands. What three additional configuration actions have to be performed to complete the SSH configuration? (Choose three.)

- [ ] Set the user privilege levels.
- [x] **Generate the asymmetric RSA keys.**
- [x] **Configure the correct IP domain name.**
- [ ] Configure role-based CLI access.
- [x] **Create a valid local username and password database.**
- [ ] Manually enable SSH after the RSA keys are generated.

> [!NOTE]
> **Explanation:** **Correct Answer:** Generate the asymmetric RSA keys., Configure the correct IP domain name., Create a valid local username and password database.

**Concept & Details:** To successfully configure SSH (Secure Shell) on a router or switch, you must:
1. **Configure the correct IP domain name:** (`ip domain-name`) used as a suffix to generate keys.
2. **Generate the asymmetric RSA keys:** (`crypto key generate rsa`) which activates the SSH service.
3. **Create a local username and password database:** (`username ... secret ...`) which is required since the vty lines are configured with `login local`.

Let's look at why the other options are incorrect:
* **Setting user privilege levels / role-based CLI:** These are good security habits but are not requirements of SSH.
* **Manually enabling SSH:** SSH is enabled automatically once the RSA keys are generated.

---

## Question 44

What is considered the most effective way to mitigate a worm attack?

- [ ] Change system passwords every 30 days.
- [ ] Ensure that all systems have the most current virus definitions.
- [ ] Ensure that AAA is configured in the network.
- [x] **Download security updates from the operating system vendor and patch all vulnerable systems.**

> [!NOTE]
> **Explanation:** **Correct Answer:** Download security updates from the operating system vendor and patch all vulnerable systems.

**Concept & Details:** Worms are self-replicating malware that propagate across networks by exploiting software vulnerabilities in operating systems or applications. Because they do not require human action to execute, the most effective mitigation is to **download security updates from the operating system vendor and patch all vulnerable systems** to close the vulnerabilities that worms exploit.

Let's look at why the other options are incorrect:
* Passwords, AAA configurations, and virus definitions (while important) do not prevent network-level exploitation of unpatched system vulnerabilities by a worm.

---

## Question 45

Which statement describes the ping and tracert commands?

- [x] **Tracert shows each hop, while ping shows a destination reply only.**
- [ ] Tracert uses IP addresses; ping does not.
- [ ] Both ping and tracert can show results in a graphical display.
- [ ] Ping shows whether the transmission is successful; tracert does not.

> [!NOTE]
> **Explanation:** **Correct Answer:** Tracert shows each hop, while ping shows a destination reply only.

**Concept & Details:** The difference between the two utilities is:
* **tracert (traceroute):** Traces the route a packet takes to a destination, displaying each intermediate router hop and the latency to each hop.
* **ping:** Simply tests end-to-end Layer 3 connectivity by sending requests and displaying the destination's reply only, without showing the route or hops.

Both commands use IP addresses (or hostnames resolved to IP addresses) and are text-based command-line utilities.

---

## Question 46

A technician is to document the current configurations of all network devices in a college, including those in off-site buildings. Which protocol would be best to use to securely access the network devices?

- [ ] FTP
- [ ] HTTP
- [x] **SSH**
- [ ] Telnet

> [!NOTE]
> **Explanation:** **Correct Answer:** SSH

**Concept & Details:** **SSH (Secure Shell)** is the best protocol for securely accessing remote devices because it encrypts all traffic, including login credentials (usernames and passwords) and configuration commands. 

Let's look at why the other options are incorrect:
* **Telnet:** Transmits all information in cleartext.
* **FTP and HTTP:** Used for transferring files and browsing websites, and do not provide remote CLI shell access for configuring network devices.

---

## Question 47

Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.

Which command has to be configured on the router to complete the SSH configuration?

- [ ] service password-encryption
- [x] **transport input ssh**
- [ ] enable secret class
- [ ] ip domain-name cisco.com

> [!NOTE]
> **Explanation:** **Correct Answer:** transport input ssh

**Concept & Details:** To complete SSH configuration on a Cisco router, you must restrict the Virtual Terminal (vty) lines to accept only SSH connections. This is done by entering the line configuration mode and issuing the command **`transport input ssh`**. This disables insecure Telnet on those lines.

Let's look at why the other options are incorrect:
* **service password-encryption / enable secret:** These secure passwords on the router but are not required to configure or enable SSH.
* **ip domain-name:** A domain name has already been configured on this router, so it is not the missing command.

---

## Question 48

An administrator decides to use “WhatAreyouwaiting4” as the password on a newly installed router. Which statement applies to the password choice?

- [x] **It is strong because it uses a passphrase.**
- [ ] It is weak because it is often the default password on new devices.
- [ ] It is weak since it uses easily found personal information.
- [ ] It is weak since it is a word that is easily found in the dictionary.

> [!NOTE]
> **Explanation:** **Correct Answer:** It is strong because it uses a passphrase.

**Concept & Details:** The password "WhatAreyouwaiting4" is a passphrase (a sequence of words or a sentence). Passphrases are considered **strong because they are long** (typically 12+ characters) and contain a mix of uppercase letters, lowercase letters, and numbers. Their length makes them highly resistant to brute-force and dictionary attacks, yet they remain easy for humans to remember.

---

## Question 49

An administrator decides to use “pR3s!d7n&0” as the password on a newly installed router. Which statement applies to the password choice?

- [x] **It is strong because it uses a minimum of 10 numbers, letters and special characters.**
- [ ] It is weak because it is often the default password on new devices.
- [ ] It is weak since it uses easily found personal information.
- [ ] It is weak since it is a word that is easily found in the dictionary.

> [!NOTE]
> **Explanation:** **Correct Answer:** It is strong because it uses a minimum of 10 numbers, letters and special characters.

**Concept & Details:** The password "pR3s!d7n&0" is **strong because it uses a minimum of 10 numbers, letters, and special characters**. It mixes uppercase, lowercase, numbers, and symbols (like `!` and `&`), making it extremely complex and highly resistant to dictionary or automated brute-force attacks.

---

## Question 50

An administrator decides to use “5$7*4#033!” as the password on a newly installed router. Which statement applies to the password choice?

- [x] **It is strong because it contains 10 numbers and special characters.**
- [ ] It is weak because it is often the default password on new devices.
- [ ] It is weak since it uses easily found personal information.
- [ ] It is strong because it uses a minimum of 10 numbers, letters and special characters.

> [!NOTE]
> **Explanation:** **Correct Answer:** It is strong because it contains 10 numbers and special characters.

**Concept & Details:** The password "5$7*4#033!" is **strong because it contains 10 numbers and special characters**. Since it completely avoids dictionary words, names, or logical sequences and contains a highly randomized mix of digits and symbols, it is extremely difficult for password-cracking software to guess.

---

## Question 51

An administrator decides to use “pR3s!d7n&0” as the password on a newly installed router. Which statement applies to the password choice?

- [x] **It is strong because it uses a minimum of 10 numbers, letters and special characters.**
- [ ] It is weak since it is a word that is easily found in the dictionary.
- [ ] It is strong because it uses a passphrase.
- [ ] It is strong because it contains 10 numbers and special characters.

> [!NOTE]
> **Explanation:** **Correct Answer:** It is strong because it uses a minimum of 10 numbers, letters and special characters.

**Concept & Details:** The password "pR3s!d7n&0" is **strong because it uses a minimum of 10 numbers, letters, and special characters**. It mixes uppercase, lowercase, numbers, and symbols (like `!` and `&`), making it extremely complex and highly resistant to dictionary or automated brute-force attacks.

Let's look at why the other options are incorrect:
* **Passphrase:** A passphrase is a sequence of plain words (e.g., "WhatAreyouwaiting4").
* **10 numbers and special characters:** This password contains letters too, not just numbers/symbols.

---

## Question 52

An administrator decides to use “12345678!” as the password on a newly installed router. Which statement applies to the password choice?

- [x] **It is weak because it uses a series of numbers or letters.**
- [ ] It is strong because it uses a passphrase.
- [ ] It is weak since it is a word that is easily found in the dictionary.
- [ ] It is strong because it uses a minimum of 10 numbers, letters and special characters.

> [!NOTE]
> **Explanation:** **Correct Answer:** It is weak because it uses a series of numbers or letters.

**Concept & Details:** The password "12345678!" is **weak because it uses a series of numbers or letters**. Sequential patterns (like "12345678") are extremely easy to guess and are placed at the very top of automated password-cracking databases, offering virtually no protection even with a special character like an exclamation mark at the end.

---

## Question 53

An administrator decides to use “admin” as the password on a newly installed router. Which statement applies to the password choice?

- [x] **It is weak because it is often the default password on new devices.**
- [ ] It is strong because it uses a passphrase.
- [ ] It is strong because it uses a minimum of 10 numbers, letters and special characters.
- [ ] It is strong because it contains 10 numbers and special characters.

> [!NOTE]
> **Explanation:** **Correct Answer:** It is weak because it is often the default password on new devices.

**Concept & Details:** The password "admin" is **weak because it is often the default password on new devices**. Attackers and automated scripts always attempt default credentials (like "admin" or "password") first when trying to compromise a system. Leaving or choosing default passwords leaves the device highly vulnerable.

---

## Question 54

An administrator decides to use “Feb121978” as the password on a newly installed router. Which statement applies to the password choice?

- [x] **It is weak because it uses easily found personal information.**
- [ ] It is strong because it uses a passphrase.
- [ ] It is weak since it is a word that is easily found in the dictionary.
- [ ] It is strong because it uses a minimum of 10 numbers, letters and special characters.

> [!NOTE]
> **Explanation:** **Correct Answer:** It is weak because it uses easily found personal information.

**Concept & Details:** The password "Feb121978" is **weak because it uses easily found personal information**. It represents a specific date (February 12, 1978), which could be a birthdate or anniversary. Attackers can easily discover this type of personal information through social engineering, public records, or social media, making the password easy to guess.

---

## Question 55

An administrator decides to use “password” as the password on a newly installed router. Which statement applies to the password choice?

- [x] **It is weak because it is a commonly used password.**
- [ ] It is weak since it is a word that is easily found in the dictionary.
- [ ] It is strong because it uses a passphrase.
- [ ] It is strong because it uses a minimum of 10 numbers, letters and special characters.

> [!NOTE]
> **Explanation:** **Correct Answer:** It is weak because it is a commonly used password.

**Concept & Details:** The password "password" is **weak because it is a commonly used password**. It is the most common password in the world and is the first word tested in dictionary attacks and automated brute-force scripts, offering no real protection.

---

## Question 56

An administrator decides to use “RobErT” as the password on a newly installed router. Which statement applies to the password choice?

- [x] **It is weak since it uses easily found personal information.**
- [ ] It is strong because it uses a passphrase.
- [ ] It is strong because it uses a minimum of 10 numbers, letters and special characters.
- [ ] It is strong because it contains 10 numbers and special characters.

> [!NOTE]
> **Explanation:** **Correct Answer:** It is weak since it uses easily found personal information.

**Concept & Details:** The password "RobErT" is **weak since it uses easily found personal information**. It represents a common proper name ("Robert") with mixed capitalization. Proper names, nicknames, and names of family members are highly vulnerable to guessing and dictionary attacks.

---

## Question 57

An administrator decides to use “Elizabeth” as the password on a newly installed router. Which statement applies to the password choice?

- [x] **It is weak because it uses easily found personal information.**
- [ ] It is strong because it uses a passphrase.
- [ ] It is weak since it is a word that is easily found in the dictionary.
- [ ] It is strong because it uses a minimum of 10 numbers, letters and special characters.

> [!NOTE]
> **Explanation:** **Correct Answer:** It is weak because it uses easily found personal information.

**Concept & Details:** The password "Elizabeth" is **weak because it uses easily found personal information**. Standard proper names (like "Elizabeth") are easily guessed and are pre-programmed into standard dictionary database attacks. Strong passwords should avoid actual names, dictionary words, and personal details.

Standard password rules require:
* Minimum of 8 (preferably 10) characters.
* A mix of uppercase, lowercase, numbers, and symbols.
* Avoiding common dictionary words, names, or sequences.

---

## Question 58

A network technician is troubleshooting an issue and needs to verify the IP addresses of all interfaces on a router. What is the best command to use to accomplish the task?

- [x] **show ip interface brief**
- [ ] nslookup
- [ ] ipconfig getifaddr en0
- [ ] show ip route

> [!NOTE]
> **Explanation:** **Correct Answer:** show ip interface brief

**Concept & Details:** The best command to verify the IP addresses and status of all interfaces on a Cisco router is **`show ip interface brief`**. This command displays a concise summary table containing interface names, configured IP addresses, and their current Layer 1 (Status) and Layer 2 (Protocol) operational states.

Let's look at why the other options are incorrect:
* **nslookup:** A DNS tool used on PCs to query domain names.
* **ipconfig getifaddr en0:** A macOS command to check a host IP address.
* **show ip route:** Displays the routing table, which lists active networks but not a direct interface IP summary.

---

## Question 59

Students who are connected to the same switch are having slower than normal response times. The administrator suspects a duplex setting issue. What is the best command to use to accomplish the task?

- [x] **show interfaces**
- [ ] ipconfig getifaddr en0
- [ ] copy running-config startup-config
- [ ] show ip nat translations

> [!NOTE]
> **Explanation:** **Correct Answer:** show interfaces

**Concept & Details:** The **`show interfaces`** command displays detailed statistics for all interfaces on a Cisco switch. This includes the interface speed, duplex settings (full-duplex vs. half-duplex), and packet error counters (like collisions and runts). Since slower response times on a switch are often caused by a duplex mismatch (where one port is set to full-duplex and the connected port is set to half-duplex), checking this output is the best way to verify the duplex settings.

Let's look at why the other options are incorrect:
* **ipconfig getifaddr en0:** Used on macOS.
* **copy running-config startup-config:** Saves configurations.
* **show ip nat translations:** Displays network address translation tables.

---

## Question 60

A user wants to know the IP address of the PC. What is the best command to use to accomplish the task?

- [x] **ipconfig**
- [ ] copy running-config startup-config
- [ ] show interfaces
- [ ] show ip nat translations

> [!NOTE]
> **Explanation:** **Correct Answer:** ipconfig

**Concept & Details:** On a Windows PC, the command **`ipconfig`** is used in the command prompt to quickly display the IP address, subnet mask, and default gateway configured for all active network adapters on the computer.

Let's look at why the other options are incorrect:
* **show interfaces / show ip nat translations / copy running-config:** These are Cisco IOS commands used on routers and switches, not on a PC.

---

## Question 61

A student wants to save a router configuration to NVRAM. What is the best command to use to accomplish the task?

- [x] **copy running-config startup-config**
- [ ] show interfaces
- [ ] show ip nat translations
- [ ] show ip route

> [!NOTE]
> **Explanation:** **Correct Answer:** copy running-config startup-config

**Concept & Details:** On Cisco devices, the active configuration is stored in RAM as the "running-config" and is lost if the device is rebooted. To save it permanently, it must be copied to NVRAM (Non-Volatile Random Access Memory) as the "startup-config" using the command **`copy running-config startup-config`**.

Let's look at why the other options are incorrect:
* **show interfaces / show ip route / show ip nat translations:** These are monitoring commands and do not save configuration files.

---

## Question 62

A support technician needs to know the IP address of the wireless interface on a MAC. What is the best command to use to accomplish the task?

- [x] **ipconfig getifaddr en0**
- [ ] copy running-config startup-config
- [ ] show interfaces
- [ ] show ip nat translations

> [!NOTE]
> **Explanation:** **Correct Answer:** ipconfig getifaddr en0

**Concept & Details:** On macOS, the terminal command **`ipconfig getifaddr en0`** is used to retrieve the IP address of the `en0` network interface (which is typically the primary wireless interface).

Let's look at why the other options are incorrect:
* **copy running-config / show interfaces / show ip nat translations:** These are Cisco IOS router/switch commands, not macOS host commands.

---

## Question 63

A network technician is troubleshooting an issue and needs to verify all of the IPv6 interface addresses on a router. What is the best command to use to accomplish the task?

- [x] **show ipv6 interface**
- [ ] show interfaces
- [ ] show ip nat translations
- [ ] show ip route

> [!NOTE]
> **Explanation:** **Correct Answer:** show ipv6 interface

**Concept & Details:** The best command to verify all IPv6 interface addresses on a Cisco router is **`show ipv6 interface`** (or `show ipv6 interface brief`). This command displays the global unicast IPv6 addresses, link-local addresses, multicast groups, and interface states.

Let's look at why the other options are incorrect:
* **show interfaces:** Displays Layer 1 and 2 interface status and generic statistics, but not detailed IPv6 addressing.
* **show ip route / show ip nat translations:** Used for IPv4 routing and network address translations, not IPv6 interface configuration.

---

## Question 64

A teacher is having difficulties connecting his PC to the classroom network. He needs to verify that a default gateway is configured correctly. What is the best command to use to accomplish the task?

- [x] **ipconfig**
- [ ] copy running-config startup-config
- [ ] show interfaces
- [ ] show ip nat translations

> [!NOTE]
> **Explanation:** **Correct Answer:** ipconfig

**Concept & Details:** On a Windows computer, the **`ipconfig`** command displays all IP configuration values for the network adapters. This allows the teacher to verify that a default gateway IP address has been configured and is correct.

Let's look at why the other options are incorrect:
* **copy running-config / show interfaces / show ip nat translations:** These are Cisco IOS commands and cannot be run on a Windows host machine.

---

## Question 65

Only employees connected to IPv6 interfaces are having difficulty connecting to remote networks. The analyst wants to verify that IPv6 routing has been enabled. What is the best command to use to accomplish the task?

- [x] **show running-config**
- [ ] show interfaces
- [ ] copy running-config startup-config
- [ ] show ip nat translations

> [!NOTE]
> **Explanation:** **Correct Answer:** show running-config

**Concept & Details:** To verify if IPv6 routing has been enabled on a Cisco router, the analyst should check the router's configuration file using the **`show running-config`** command. They will look for the configuration line `ipv6 unicast-routing`. If this line is missing, the router will not forward IPv6 packets between interfaces.

Let's look at why the other options are incorrect:
* **show interfaces:** Shows interface status but not whether global routing is enabled.
* **show ip nat translations:** Used for IPv4 NAT monitoring.
* **copy running-config startup-config:** Saves the configuration, but does not display it.

---

## Question 66

An administrator is troubleshooting connectivity issues and needs to determine the IP address of a website. What is the best command to use to accomplish the task?

- [x] **nslookup**
- [ ] show ipv6 route
- [ ] show ipv6 interface
- [ ] copy startup-config running-config

> [!NOTE]
> **Explanation:** **Correct Answer:** nslookup

**Concept & Details:** The **`nslookup`** utility is a command-line tool used on PCs to query Domain Name System (DNS) servers. It resolves a domain name (like `www.cisco.com`) into its corresponding IP address, helping troubleshoot name resolution issues.

Let's look at why the other options are incorrect:
* **show ipv6 route / show ipv6 interface:** Cisco router commands for IPv6 status.
* **copy startup-config running-config:** Overwrites the active configuration with the startup file.

---

## Question 67

What is a characteristic of UDP?

- [ ] UDP datagrams take the same path and arrive in the correct order at the destination.​
- [ ] Applications that use UDP are always considered unreliable.​
- [x] **UDP reassembles the received datagrams in the order they were received.**
- [ ] UDP only passes data to the network when the destination is ready to receive the data.

> [!NOTE]
> **Explanation:** **Correct Answer:** UDP reassembles the received datagrams in the order they were received.

**Concept & Details:** UDP (User Datagram Protocol) is a connectionless, best-effort transport layer protocol. Since it does not use sequence numbers, it cannot track or reorder segments that arrive out of order. Instead, **UDP simply reassembles the received datagrams in the exact order they were received** and immediately passes them to the application layer.

Let's look at why the other options are incorrect:
* **UDP datagrams take the same path:** IP packets are routed dynamically and can take different paths.
* **Applications that use UDP are always considered unreliable:** The UDP protocol is unreliable, but applications using it can build their own reliability.
* **UDP only passes data to the network when the destination is ready:** UDP is connectionless and sends data without checking if the receiver is ready.

---

