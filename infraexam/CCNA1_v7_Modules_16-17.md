# Checkpoint Exam Building and Securing a Small.. Exam Answers

Source: [https://infraexam.com/ccna1-v7/ccna1-v7-itnv7-modules-16-17-building-and-securing-a-small-network-exam-answers/](https://infraexam.com/ccna1-v7/ccna1-v7-itnv7-modules-16-17-building-and-securing-a-small-network-exam-answers/)

Total Questions: 64

---

## Question 1

Which example of malicious code would be classified as a Trojan horse?

- [x] **malware that was written to look like a video game**
- [ ] malware that requires manual user intervention to spread between systems
- [ ] malware that attaches itself to a legitimate program and spreads to other programs when launched
- [ ] malware that can automatically spread from one system to another by exploiting a vulnerability in the target

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
A Trojan horse is malicious code that has been written specifically to look like a legitimate program. This is in contrast to a virus, which simply attaches itself to an actual legitimate program. Viruses require manual intervention from a user to spread from one system to another, while a worm is able to spread automatically between systems by exploiting vulnerabilities on those devices.

---

## Question 2

What is the difference between a virus and a worm?

- [ ] Viruses self-replicate but worms do not.
- [x] **Worms self-replicate but viruses do not.**
- [ ] Worms require a host file but viruses do not.
- [ ] Viruses hide in legitimate programs but worms do not.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Worms are able to self-replicate and exploit vulnerabilities on computer networks without user participation.

---

## Question 3

Which attack involves a compromise of data that occurs between two end points?

- [ ] denial-of-service
- [x] **man-in-the-middle attack**
- [ ] extraction of security parameters
- [ ] username enumeration

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Threat actors frequently attempt to access devices over the internet through communication protocols. Some of the most popular remote exploits are as follows: Man-In-the-middle attack (MITM) – The threat actor gets between devices in the system and intercepts all of the data being transmitted. This information could simply be collected or modified for a specific purpose and delivered to its original destination.

Eavesdropping attack – When devices are being installed, the threat actor can intercept data such as security keys that are used by constrained devices to establish communications once they are up and running.

SQL injection (SQLi) – Threat actors uses a flaw in the Structured Query Language (SQL) application that allows them to have access to modify the data or gain administrative privileges.

Routing attack – A threat actor could either place a rogue routing device on the network or modify routing packets to manipulate routers to send all packets to the chosen destination of the threat actor. The threat actor could then drop specific packets, known as selective forwarding, or drop all packets, known as a sinkhole attack.

---

## Question 4

Which type of attack involves an adversary attempting to gather information about a network to identify vulnerabilities?

- [x] **reconnaissance**
- [ ] DoS
- [ ] dictionary
- [ ] man-in-the-middle

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Reconnaissance is a type of attack where the intruder is looking for wireless network vulnerabilities.

---

## Question 5

Match each weakness with an example.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-16-17-Checkpoint-Exam-Building-and-Securing-a-Small-Network-Exam-Answers-001.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-16-17-Checkpoint-Exam-Building-and-Securing-a-Small-Network-Exam-Answers-001-1024x400.png)

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
An employee who is trying to guess the password of another user exemplifies not a weakness but an attack.

---

## Question 6

Match the type of information security threat to the scenario.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-16-17-Checkpoint-Exam-Building-and-Securing-a-Small-Network-Exam-Answers-002.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-16-17-Checkpoint-Exam-Building-and-Securing-a-Small-Network-Exam-Answers-002-1024x496.png)

- [x] **Information theft**
- [x] **Identity theft**
- [x] **Data loss or manipulation**
- [x] **Disruption of service**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
After an intruder gains access to a network, common network threats are as follows:
Information theft
Identity theft
Data loss or manipulation
Disruption of service
Cracking the password for a known username is a type of access attack.

---

## Question 7

Match the description to the type of firewall filtering.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-16-17-Checkpoint-Exam-Building-and-Securing-a-Small-Network-Exam-Answers-003.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-16-17-Checkpoint-Exam-Building-and-Securing-a-Small-Network-Exam-Answers-003-1024x496.png)

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Stateful packet inspection
: Prevents or allows access based on whether the traffic is in response to requests from internal hosts.
URL filtering
: Prevents or allows access based on web addresses or keywords.
Application filtering
: Prevents or allows access based on the port numbers used in the request.
Packet filtering
: Prevents or allows access based on the IP or MAC addresses of the source and destination.

---

## Question 8

What is the purpose of the network security authentication function?

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/CCNA1-v7-ITNv7-Modules-16-17-Building-and-Securing-a-Small-Network-Exam-Answers-03-1.jpg.webp)

- [x] **to require users to prove who they are**
- [ ] to determine which resources a user can access
- [ ] to keep track of the actions of a user
- [ ] to provide challenge and response questions

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Authentication, authorization, and accounting are network services collectively known as AAA. Authentication requires users to prove who they are. Authorization determines which resources the user can access. Accounting keeps track of the actions of the user.

---

## Question 9

Which firewall feature is used to ensure that packets coming into a network are legitimate responses to requests initiated from internal hosts?

- [x] **stateful packet inspection**
- [ ] URL filtering
- [ ] application filtering
- [ ] packet filtering

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Stateful packet inspection on a firewall checks that incoming packets are actually legitimate responses to requests originating from hosts inside the network. Packet filtering can be used to permit or deny access to resources based on IP or MAC address. Application filtering can permit or deny access based on port number. URL filtering is used to permit or deny access based on URL or on keywords.

---

## Question 10

When applied to a router, which command would help mitigate brute-force password attacks against the router?

- [ ] exec-timeout 30
- [ ] service password-encryption
- [ ] banner motd $Max failed logins = 5$
- [x] **login block-for 60 attempts 5 within 60**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The login block-for command sets a limit on the maximum number of failed login attempts allowed within a defined period of time. If this limit is exceeded, no further logins are allowed for the specified period of time. This helps to mitigate brute-force password cracking since it will significantly increase the amount of time required to crack a password. The exec-timeout command specifies how long the session can be idle before the user is disconnected. The service password-encryption command encrypts the passwords in the running configuration. The banner motd command displays a message to users who are logging in to the device.

---

## Question 11

Identify the steps needed to configure a switch for SSH. The answer order does not matter.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-16-17-Checkpoint-Exam-Building-and-Securing-a-Small-Network-Exam-Answers-004.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-16-17-Checkpoint-Exam-Building-and-Securing-a-Small-Network-Exam-Answers-004-1024x776.png)

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The 
login 
and 
password cisco
 commands are used with Telnet switch configuration, not SSH configuration.

---

## Question 12

What feature of SSH makes it more secure than Telnet for a device management connection?

- [ ] confidentiality with IPsec
- [ ] stronger password requirement
- [ ] random one-time port connection
- [x] **login information and data encryption**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Secure Shell (SSH) is a protocol that provides a secure management connection to a remote device. SSH provides security by providing encryption for both authentication (username and password) and the transmitted data. Telnet is a protocol that uses unsecure plaintext transmission. SSH is assigned to TCP port 22 by default. Although this port can be changed in the SSH server configuration, the port is not dynamically changed. SSH does not use IPsec.

---

## Question 13

What is the advantage of using SSH over Telnet?

- [ ] SSH is easier to use.
- [ ] SSH operates faster than Telnet.
- [x] **SSH provides secure communications to access hosts.**
- [ ] SSH supports authentication for a connection request.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
SSH provides a secure method for remote access to hosts by encrypting network traffic between the SSH client and remote hosts. Although both Telnet and SSH request authentication before a connection is established, Telnet does not support encryption of login credentials.

---

## Question 14

What is the role of an IPS?

- [x] **detecting and blocking of attacks in real time**
- [ ] connecting global threat information to Cisco network security devices
- [ ] authenticating and validating traffic
- [ ] filtering of nefarious websites

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
An intrusion prevention system (IPS) provides real-time detection and blocking of attacks.

---

## Question 15

A user is redesigning a network for a small company and wants to ensure security at a reasonable price. The user deploys a new application-aware firewall with intrusion detection capabilities on the ISP connection. The user installs a second firewall to separate the company network from the public network. Additionally, the user installs an IPS on the internal network of the company. What approach is the user implementing?

- [ ] attack based
- [ ] risk based
- [ ] structured
- [x] **layered**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Using different defenses at various points of the network creates a layered approach.

---

## Question 16

What is an accurate description of redundancy?

- [ ] configuring a router with a complete MAC address database to ensure that all frames can be forwarded to the correct destination
- [ ] configuring a switch with proper security to ensure that all traffic forwarded through an interface is filtered
- [ ] designing a network to use multiple virtual devices to ensure that all traffic uses the best path through the internetwork
- [x] **designing a network to use multiple paths between switches to ensure there is no single point of failure**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Redundancy attempts to remove any single point of failure in a network by using multiple physically cabled paths between switches in the network.

---

## Question 17

A network administrator is upgrading a small business network to give high priority to real-time applications traffic. What two types of network services is the network administrator trying to accommodate? (Choose two.)

- [x] **voice**
- [x] **video**
- [ ] instant messaging
- [ ] FTP
- [ ] SNMP

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Streaming media, such as video, and voice traffic, are both examples of real-time traffic. Real-time traffic needs higher priority through the network than other types of traffic because it is very sensitive to network delay and latency.

---

## Question 18

What is the purpose of a small company using a protocol analyzer utility to capture network traffic on the network segments where the company is considering a network upgrade?

- [ ] to identify the source and destination of local network traffic
- [ ] to capture the Internet connection bandwidth requirement
- [x] **to document and analyze network traffic requirements on each network segment**
- [ ] to establish a baseline for security analysis after the network is upgraded

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
An important prerequisite for considering network growth is to understand the type and amount of traffic that is crossing the network as well as the current traffic flow. By using a protocol analyzer in each network segment, the network administrator can document and analyze the network traffic pattern for each segment, which becomes the base in determining the needs and means of the network growth.

---

## Question 19

Refer to the exhibit. An administrator is testing connectivity to a remote device with the IP address 10.1.1.1. What does the output of this command indicate?

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/CCNA1-v7-ITNv7-Modules-16-17-Building-and-Securing-a-Small-Network-Exam-Answers-04.png)

- [ ] Connectivity to the remote device was successful.
- [x] **A router along the path did not have a route to the destination.**
- [ ] A ping packet is being blocked by a security device along the path.
- [ ] The connection timed out while waiting for a reply from the remote device.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
In the output of the ping command, an exclamation mark (!) indicates a response was successfully received, a period (.) indicates that the connection timed out while waiting for a reply, and the letter “U” indicates that a router along the path did not have a route to the destination and sent an ICMP destination unreachable message back to the source.

---

## Question 20

Which method is used to send a ping message specifying the source address for the ping?

- [ ] Issue the ping command from within interface configuration mode.
- [x] **Issue the ping command without specifying a destination IP address.**
- [ ] Issue the ping command without extended commands.
- [ ] Issue the ping command after shutting down un-needed interfaces.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
By issuing the ping command without a destination IP address in privileged EXEC mode, the Cisco IOS enters extended ping mode. This allows the user to implement extended commands which include source IP address.​

---

## Question 21

A network engineer is analyzing reports from a recently performed network baseline. Which situation would depict a possible latency issue?

- [ ] a change in the bandwidth according to the show interfaces output
- [ ] a next-hop timeout from a traceroute
- [x] **an increase in host-to-host ping response times**
- [ ] a change in the amount of RAM according to the show version output

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
While analyzing historical reports an administrator can compare host-to-host timers from the ping command and depict possible latency issues.​

---

## Question 22

Which statement is true about Cisco IOS ping indicators?​

- [ ] ‘!’ indicates that the ping was unsuccessful and that the device may have issues finding a DNS server.
- [x] **‘U’ may indicate that a router along the path did not contain a route to the destination address and that the ping was unsuccessful.**
- [ ] ‘.’ indicates that the ping was successful but the response time was longer than normal.
- [ ] A combination of ‘.’ and ‘!’ indicates that a router along the path did not have a route to the destination address and responded with an ICMP unreachable message.​

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The most common indicators of a ping issued from the Cisco IOS are “!”, “.”, and “U”. The “!” indicates that the ping completed successfully, verifying connectivity at Layer 3. The “.” may indicate that a connectivity problem, routing problem, or device security issue exists along the path and that an ICMP destination unreachable message was not provided. The “U” indicates that a router along the path may not have had a route to the destination address, and that it responded with an ICMP unreachable message.

---

## Question 23

A user reports a lack of network connectivity. The technician takes control of the user machine and attempts to ping other computers on the network and these pings fail. The technician pings the default gateway and that also fails. What can be determined for sure by the results of these tests?

- [ ] The NIC in the PC is bad.
- [ ] The TCP/IP protocol is not enabled.
- [ ] The router that is attached to the same network as the workstation is down.
- [x] **Nothing can be determined for sure at this point.**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
In networks today, a failed ping could mean that the other devices on the network are blocking pings. Further investigation such as checking network connectivity from other devices on the same network is warranted.

---

## Question 24

A network technician issues the C:\> tracert -6 www.cisco.com command on a Windows PC. What is the purpose of the -6 command option?

- [x] **It forces the trace to use IPv6.**
- [ ] It limits the trace to only 6 hops.
- [ ] It sets a 6 milliseconds timeout for each replay.
- [ ] It sends 6 probes within each TTL time period.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The -6 option in the command C:\> tracert -6 www.cisco.com is used to force the trace to use IPv6.

---

## Question 25

Why would a network administrator use the tracert utility?

- [ ] to determine the active TCP connections on a PC
- [ ] to check information about a DNS name in the DNS server
- [x] **to identify where a packet was lost or delayed on a network**
- [ ] to display the IP address, default gateway, and DNS server address for a PC

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The tracert utility is used to identify the path a packet takes from source to destination. Tracert is commonly used when packets are dropped or not reaching a specific destination.

---

## Question 26

A ping fails when performed from router R1 to directly connected router R2. The network administrator then proceeds to issue the show cdp neighbors command. Why would the network administrator issue this command if the ping failed between the two routers?

- [ ] The network administrator suspects a virus because the ping command did not work.
- [x] **The network administrator wants to verify Layer 2 connectivity.**
- [ ] The network administrator wants to verify the IP address configured on router R2.
- [ ] The network administrator wants to determine if connectivity can be established from a non-directly connected network.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The show cdp neighbors command can be used to prove that Layer 1 and Layer 2 connectivity exists between two Cisco devices. For example, if two devices have duplicate IP addresses, a ping between the devices will fail, but the output of show cdp neighbors will be successful. The show cdp neighbors detail could be used to verify the IP address of the directly connected device in case the same IP address is assigned to the two routers.

---

## Question 27

A network engineer is troubleshooting connectivity issues among interconnected Cisco routers and switches. Which command should the engineer use to find the IP address information, host name, and IOS version of neighboring network devices?

- [ ] show version
- [ ] show ip route
- [ ] show interfaces
- [x] **show cdp neighbors detail**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The show cdp neighbors detail command reveals much information about neighboring Cisco devices, including the IP address, the capabilities, host name, and IOS version. The show interfaces and show version commands display information about the local device.

---

## Question 28

What information about a Cisco router can be verified using the show version command?

- [ ] the routing protocol version that is enabled
- [x] **the value of the configuration register**
- [ ] the operational status of serial interfaces
- [ ] the administrative distance used to reach networks

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The value of the configuration register can be verified with the show version command.

---

## Question 29

Which command should be used on a Cisco router or switch to allow log messages to be displayed on remotely connected sessions using Telnet or SSH?

- [ ] debug all
- [ ] logging synchronous
- [ ] show running-config​
- [x] **terminal monitor**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The terminal monitor command is very important to use when log messages appear. Log messages appear by default when a user is directly consoled into a Cisco device, but require the terminal monitor command to be entered when a user is accessing a network device remotely.

---

## Question 30

Which command can an administrator issue on a Cisco router to send debug messages to the vty lines?

- [x] **terminal monitor**
- [ ] logging console
- [ ] logging buccered
- [ ] logging synchronous

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Debug messages, like other IOS log messages, are sent to the console line by default. Sending these messages to the terminal lines requires the terminal monitor command.

---

## Question 31

By following a structured troubleshooting approach, a network administrator identified a network issue after a conversation with the user. What is the next step that the administrator should take?

- [ ] Verify full system functionality.
- [ ] Test the theory to determine cause.
- [x] **Establish a theory of probable causes.**
- [ ] Establish a plan of action to resolve the issue.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
A structured network troubleshooting approach should include these steps in sequence:Identify the problem.

Establish a theory of probable causes.

Test the theory to determine cause.

Establish a plan of action to resolve the issue.

Verify full system functionality and implement preventive measures.

Document findings, actions, and outcomes.

---

## Question 32

Users are complaining that they are unable to browse certain websites on the Internet. An administrator can successfully ping a web server via its IP address, but cannot browse to the domain name of the website. Which troubleshooting tool would be most useful in determining where the problem is?

- [ ] netstat
- [ ] tracert
- [x] **nslookup**
- [ ] ipconfig

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The nslookup command can be used to look up information about a particular DNS name in the DNS server. The information includes the IP address of the DNS server being used as well as the IP address associated with the specified DNS name. This command can help verify the DNS that is used and if the domain name to IP address resolution works.

---

## Question 33

An employee complains that a Windows PC cannot connect to the Internet. A network technician issues the ipconfig command on the PC and is shown an IP address of 169.254.10.3. Which two conclusions can be drawn? (Choose two.)

- [x] **The PC cannot contact a DHCP server.**
- [ ] The DNS server address is misconfigured.
- [ ] The default gateway address is not configured.
- [x] **The PC is configured to obtain an IP address automatically.**
- [ ] The enterprise network is misconfigured for dynamic routing.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
When a Windows PC is configured to obtain an IP address automatically, the PC will try to obtain an IP address from a DHCP server. When the PC cannot contact a DHCP server, Windows will automatically assign an address belonging to the 169.254.0.0/16 range.

---

## Question 34

Refer to the exhibit. Host H3 is having trouble communicating with host H1. The network administrator suspects a problem exists with the H3 workstation and wants to prove that there is no problem with the R2 configuration. What tool could the network administrator use on router R2 to prove that communication exists to host H1 from the interface on R2, which is the interface that H3 uses when communicating with remote networks?

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/CCNA1-v7-ITNv7-Modules-16-17-Building-and-Securing-a-Small-Network-Exam-Answers-01.png.webp)

- [ ] traceroute
- [ ] show cdp neighbors
- [ ] Telnet
- [x] **an extended ping**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
An extended ping allows an administrator to select specific ping features. For example in this situation, the network administrator could do an extended ping and specify a source address of the gigabit Ethernet port on the router. The destination address would be the IP address of host H1. If the ping succeeds connectivity exists from the Ethernet router interface on R2 to device H1.

---

## Question 35

Refer to the exhibit. Baseline documentation for a small company had ping round trip time statistics of 36/97/132 between hosts H1 and H3. Today the network administrator checked connectivity by pinging between hosts H1 and H3 that resulted in a round trip time of 1458/2390/6066. What does this indicate to the network administrator?

![exhibit](https://infraexam.com/wp-content/uploads/2020/04/CCNA1-v7-ITNv7-Modules-16-17-Building-and-Securing-a-Small-Network-Exam-Answers-01.png.webp)

- [ ] Connectivity between H1 and H3 is fine.
- [ ] H3 is not connected properly to the network.
- [ ] Something is causing interference between H1 and R1.
- [ ] Performance between the networks is within expected parameters.
- [x] **Something is causing a time delay between the networks.**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Ping round trip time statistics are shown in milliseconds. The larger the number the more delay. A baseline is critical in times of slow performance. By looking at the documentation for the performance when the network is performing fine and comparing it to information when there is a problem, a network administrator can resolve problems faster.

---

## Question 36

Which network service automatically assigns IP addresses to devices on the network?

- [x] **DHCP**
- [ ] Telnet
- [ ] DNS
- [ ] traceroute

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Dynamic Host Configuration Protocol (DHCP) can be used to allow end devices to automatically configure IP information, such as their IP address, subnet mask, DNS server, and default gateway. The DNS service is used to provide domain name resolution, mapping hostnames to IP addresses. Telnet is a method for remotely accessing a CLI session of a switch or router. Traceroute is a command used to determine the path a packet takes as it traverses the network.

---

## Question 37

Which command can an administrator execute to determine what interface a router will use to reach remote networks?

- [ ] show arp
- [ ] show interfaces
- [x] **show ip route**
- [ ] show protocols

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The show ip route command is used to display the IP routing table of the router. The IP routing table will show a list of known local and remote networks and the interfaces that the router will use to reach those networks.

---

## Question 38

On which two interfaces or ports can security be improved by configuring executive timeouts? (Choose two.)

- [ ] Fast Ethernet interfaces
- [x] **console ports**
- [ ] serial interfaces
- [x] **vty ports**
- [ ] loopback interfaces

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Executive timeouts allow the Cisco device to automatically disconnect users after they have been idle for the specified time. Console, vty, and aux ports can be configured with executive timeouts.

---

## Question 39

When configuring SSH on a router to implement secure network management, a network engineer has issued the login local and transport input ssh line vty commands. What three additional configuration actions have to be performed to complete the SSH configuration? (Choose three.)

- [ ] Set the user privilege levels.
- [x] **Generate the asymmetric RSA keys.**
- [x] **Configure the correct IP domain name.**
- [ ] Configure role-based CLI access.
- [x] **Create a valid local username and password database.**
- [ ] Manually enable SSH after the RSA keys are generated.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
SSH is automatically enabled after the RSA keys are generated. Setting user privilege levels and configuring role-based CLI access are good security practices but are not a requirement of implementing SSH.

---

## Question 40

What is considered the most effective way to mitigate a worm attack?

- [ ] Change system passwords every 30 days.
- [ ] Ensure that all systems have the most current virus definitions.
- [ ] Ensure that AAA is configured in the network.
- [x] **Download security updates from the operating system vendor and patch all vulnerable systems.**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Because worms take advantage of vulnerabilities in the system itself, the most effective way to mitigate worm attacks is to download security updates from the operating system vendor and patch all vulnerable systems.

---

## Question 41

Which statement describes the ping and tracert commands?

- [x] **Tracert shows each hop, while ping shows a destination reply only.**
- [ ] Tracert uses IP addresses; ping does not.
- [ ] Both ping and tracert can show results in a graphical display.
- [ ] Ping shows whether the transmission is successful; tracert does not.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The ping utility tests end-to-end connectivity between the two hosts. However, if the message does not reach the destination, there is no way to determine where the problem is located. On the other hand, the traceroute utility ( tracert in Windows) traces the route a message takes from its source to the destination. Traceroute displays each hop along the way and the time it takes for the message to get to that network and back.

---

## Question 42

A technician is to document the current configurations of all network devices in a college, including those in occ-site buildings. Which protocol would be best to use to securely access the network devices?

- [ ] FTP
- [ ] HTTP
- [x] **SSH**
- [ ] Telnet

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Telnet sends passwords and other information in clear text, while SSH encrypts its data. FTP and HTTP do not provide remote device access for configuration purposes.

---

## Question 43

Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.

![exhibit](https://infraexam.com/wp-content/uploads/2022/12/CCNA1-v7-ITNv7-Modules-16-17-Building-and-Securing-a-Small-Network-Exam-Answers-PT-001.png)

- [ ] service password-encryption
- [x] **transport input ssh**
- [ ] enable secret class
- [ ] ip domain-name cisco.com

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
 The missing command to complete the SSH configuration is 
 transport input ssh 
 in 
 line vty 0 4 
 mode.The commands 
 service password-encryption 
 and 
 enable secret class 
 do configure secure features on the router, but are not required to configure SSH. The command 
 ip domain-name cisco.com 
 is not required because the command 
ip domain-name span.com
 has been used.

---

## Question 44

Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.

CCNA1 v7 – ITNv7 – Modules 16 – 17 Building and Securing a Small Network Exam Answers PT 001

Which command has to be configured on the router to complete the SSH configuration?

![exhibit](https://infraexam.com/wp-content/uploads/2022/12/CCNA1-v7-ITNv7-Modules-16-17-Building-and-Securing-a-Small-Network-Exam-Answers-PT-001.png)

- [ ] service password-encryption
- [x] **transport input ssh**
- [ ] enable secret class
- [ ] ip domain-name cisco.com

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
 The missing command to complete the SSH configuration is 
 transport input ssh 
 in 
 line vty 0 4 
 mode.The commands 
 service password-encryption 
 and 
 enable secret class 
 do configure secure features on the router, but are not required to configure SSH. The command 
 ip domain-name cisco.com 
 is not required because the command 
ip domain-name span.com
 has been used.

---

## Question 45

An administrator decides to use “WhatAreyouwaiting4” as the password on a newly installed router. Which statement applies to the password choice?

- [x] **It is strong because it uses a passphrase.**
- [ ] It is weak because it is often the default password on new devices.
- [ ] It is weak since it uses easily found personal information.
- [ ] It is weak since it is a word that is easily found in the dictionary.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Rules for strong passwords:

* minimum of 8 characters, preferably 10.

* use complex combinations of numbers, special characters, and upper and lower case letters.

* avoid repetition, common dictionary words, letter or number sequences.

* avoid names of children, relatives, pets, birthdays, or any easily identifiable personal information.

* can be created by misspelling words or replacing vowels with numbers or special characters.

---

## Question 46

An administrator decides to use “pR3s!d7n&0” as the password on a newly installed router. Which statement applies to the password choice?

- [x] **It is strong because it uses a minimum of 10 numbers, letters and special characters.**
- [ ] It is weak because it is often the default password on new devices.
- [ ] It is weak since it uses easily found personal information.
- [ ] It is weak since it is a word that is easily found in the dictionary.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Rules for strong passwords:

* minimum of 8 characters, preferably 10.

* use complex combinations of numbers, special characters, and upper and lower case letters.

* avoid repetition, common dictionary words, letter or number sequences.

* avoid names of children, relatives, pets, birthdays, or any easily identifiable personal information.

* can be created by misspelling words or replacing vowels with numbers or special characters.

---

## Question 47

An administrator decides to use “5$7*4#033!” as the password on a newly installed router. Which statement applies to the password choice?

- [x] **It is strong because it contains 10 numbers and special characters.**
- [ ] It is weak because it is often the default password on new devices.
- [ ] It is weak since it uses easily found personal information.
- [ ] It is strong because it uses a minimum of 10 numbers, letters and special characters.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Rules for strong passwords:

* minimum of 8 characters, preferably 10.

* use complex combinations of numbers, special characters, and upper and lower case letters.

* avoid repetition, common dictionary words, letter or number sequences.

* avoid names of children, relatives, pets, birthdays, or any easily identifiable personal information.

* can be created by misspelling words or replacing vowels with numbers or special characters.

---

## Question 48

An administrator decides to use “pR3s!d7n&0” as the password on a newly installed router. Which statement applies to the password choice?

- [x] **It is strong because it uses a minimum of 10 numbers, letters and special characters.**
- [ ] It is weak since it is a word that is easily found in the dictionary.
- [ ] It is strong because it uses a passphrase.
- [ ] It is strong because it contains 10 numbers and special characters.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Rules for strong passwords:

* minimum of 8 characters, preferably 10.

* use complex combinations of numbers, special characters, and upper and lower case letters.

* avoid repetition, common dictionary words, letter or number sequences.

* avoid names of children, relatives, pets, birthdays, or any easily identifiable personal information.

* can be created by misspelling words or replacing vowels with numbers or special characters.

---

## Question 49

An administrator decides to use “12345678!” as the password on a newly installed router. Which statement applies to the password choice?

- [x] **It is weak because it uses a series of numbers or letters.**
- [ ] It is strong because it uses a passphrase.
- [ ] It is weak since it is a word that is easily found in the dictionary.
- [ ] It is strong because it uses a minimum of 10 numbers, letters and special characters.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Rules for strong passwords:

* minimum of 8 characters, preferably 10.

* use complex combinations of numbers, special characters, and upper and lower case letters.

* avoid repetition, common dictionary words, letter or number sequences.

* avoid names of children, relatives, pets, birthdays, or any easily identifiable personal information.

* can be created by misspelling words or replacing vowels with numbers or special characters.

---

## Question 50

An administrator decides to use “admin” as the password on a newly installed router. Which statement applies to the password choice?

- [x] **It is weak because it is often the default password on new devices.**
- [ ] It is strong because it uses a passphrase.
- [ ] It is strong because it uses a minimum of 10 numbers, letters and special characters.
- [ ] It is strong because it contains 10 numbers and special characters.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Rules for strong passwords:

* minimum of 8 characters, preferably 10.

* use complex combinations of numbers, special characters, and upper and lower case letters.

* avoid repetition, common dictionary words, letter or number sequences.

* avoid names of children, relatives, pets, birthdays, or any easily identifiable personal information.

* can be created by misspelling words or replacing vowels with numbers or special characters.

---

## Question 51

An administrator decides to use “Feb121978” as the password on a newly installed router. Which statement applies to the password choice?

- [x] **It is weak because it uses easily found personal information.**
- [ ] It is strong because it uses a passphrase.
- [ ] It is weak since it is a word that is easily found in the dictionary.
- [ ] It is strong because it uses a minimum of 10 numbers, letters and special characters.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Rules for strong passwords:

* minimum of 8 characters, preferably 10.

* use complex combinations of numbers, special characters, and upper and lower case letters.

* avoid repetition, common dictionary words, letter or number sequences.

* avoid names of children, relatives, pets, birthdays, or any easily identifiable personal information.

* can be created by misspelling words or replacing vowels with numbers or special characters.

---

## Question 52

An administrator decides to use “password” as the password on a newly installed router. Which statement applies to the password choice?

- [x] **It is weak because it is a commonly used password.**
- [ ] It is weak since it is a word that is easily found in the dictionary.
- [ ] It is strong because it uses a passphrase.
- [ ] It is strong because it uses a minimum of 10 numbers, letters and special characters.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Rules for strong passwords:

* minimum of 8 characters, preferably 10.

* use complex combinations of numbers, special characters, and upper and lower case letters.

* avoid repetition, common dictionary words, letter or number sequences.

* avoid names of children, relatives, pets, birthdays, or any easily identifiable personal information.

* can be created by misspelling words or replacing vowels with numbers or special characters.

---

## Question 53

An administrator decides to use “RobErT” as the password on a newly installed router. Which statement applies to the password choice?

- [x] **It is weak since it uses easily found personal information.**
- [ ] It is strong because it uses a passphrase.
- [ ] It is strong because it uses a minimum of 10 numbers, letters and special characters.
- [ ] It is strong because it contains 10 numbers and special characters.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Rules for strong passwords:

* minimum of 8 characters, preferably 10.

* use complex combinations of numbers, special characters, and upper and lower case letters.

* avoid repetition, common dictionary words, letter or number sequences.

* avoid names of children, relatives, pets, birthdays, or any easily identifiable personal information.

* can be created by misspelling words or replacing vowels with numbers or special characters.

---

## Question 54

An administrator decides to use “Elizabeth” as the password on a newly installed router. Which statement applies to the password choice?

- [x] **It is weak because it uses easily found personal information.**
- [ ] It is strong because it uses a passphrase.
- [ ] It is weak since it is a word that is easily found in the dictionary.
- [ ] It is strong because it uses a minimum of 10 numbers, letters and special characters.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Rules for strong passwords:

* minimum of 8 characters, preferably 10.

* use complex combinations of numbers, special characters, and upper and lower case letters.

* avoid repetition, common dictionary words, letter or number sequences.

* avoid names of children, relatives, pets, birthdays, or any easily identifiable personal information.

* can be created by misspelling words or replacing vowels with numbers or special characters.

---

## Question 55

A network technician is troubleshooting an issue and needs to verify the IP addresses of all interfaces on a router. What is the best command to use to accomplish the task?

- [x] **show ip interface brief**
- [ ] nslookup
- [ ] ipconfig getifaddr en0
- [ ] show ip route
- [ ] nslookup is typically used for querying the Domain Name System (DNS) to obtain domain name or IP address mapping.
- [ ] ipconfig getifaddr en0 is a command used on macOS systems to get the IP address of a specific interface ( en0 in this case).
- [ ] show ip route displays the routing table of the router but does not specifically list all interface IP addresses.

> [!NOTE]
> **Explanation:** Explanation & Hint:
For a network technician troubleshooting on a router and needing to verify the IP addresses of all interfaces, the best command would be:
show ip interface brief
This command is used on Cisco routers and provides a summary of all the interfaces, including their IP addresses and status (up/down). It’s a concise and effective way to view all the necessary information regarding the interfaces on a router.
nslookup
 is typically used for querying the Domain Name System (DNS) to obtain domain name or IP address mapping.
ipconfig getifaddr en0
 is a command used on macOS systems to get the IP address of a specific interface (
en0
 in this case).
show ip route
 displays the routing table of the router but does not specifically list all interface IP addresses.

---

## Question 56

Students who are connected to the same switch are having slower than normal response times. The administrator suspects a duplex setting issue. What is the best command to use to accomplish the task?

- [x] **show interfaces**
- [ ] ipconfig getifaddr en0
- [ ] copy running-config startup-config
- [ ] show ip nat translations
- [ ] ipconfig getifaddr en0 is a command specific to macOS systems and is used to get the IP address of a specific interface, which isn’t directly relevant for checking duplex settings on a switch.
- [ ] copy running-config startup-config is a Cisco command used to save the current running configuration to the startup configuration, which is not directly helpful in diagnosing duplex issues.
- [ ] show ip nat translations displays the Network Address Translation (NAT) translations table on a router, which is not directly related to troubleshooting duplex issues on a switch.

> [!NOTE]
> **Explanation:** Explanation & Hint:
If a network administrator suspects a duplex mismatch or a similar issue affecting network performance for students connected to the same switch, the most appropriate command to use would be:
show interfaces
This command is typically used on Cisco switches and routers. It provides detailed information about the status of each interface, including the duplex setting (half or full), speed, and any errors that might be affecting performance, such as collisions or CRC errors. These details are crucial for diagnosing issues related to physical connectivity and configuration mismatches on the network.
ipconfig getifaddr en0
 is a command specific to macOS systems and is used to get the IP address of a specific interface, which isn’t directly relevant for checking duplex settings on a switch.
copy running-config startup-config
 is a Cisco command used to save the current running configuration to the startup configuration, which is not directly helpful in diagnosing duplex issues.
show ip nat translations
 displays the Network Address Translation (NAT) translations table on a router, which is not directly related to troubleshooting duplex issues on a switch.

---

## Question 57

A user wants to know the IP address of the PC. What is the best command to use to accomplish the task?

- [x] **ipconfig**
- [ ] copy running-config startup-config
- [ ] show interfaces
- [ ] show ip nat translations
- [ ] copy running-config startup-config is a Cisco command used to save the current running configuration of a network device to the startup configuration.
- [ ] show interfaces and show ip nat translations are commands used on Cisco routers and switches, not on PCs for checking their own IP configuration.

> [!NOTE]
> **Explanation:** Explanation & Hint:

For a user who wants to find out the IP address of their PC, the best command to use would be:
ipconfig
This command is used on Windows operating systems. When executed in the Command Prompt, it provides network information about the PC, including the IP address, subnet mask, and default gateway for each network interface.The other commands listed are not suitable for this purpose:

copy running-config startup-config
 is a Cisco command used to save the current running configuration of a network device to the startup configuration.
show interfaces
 and 
show ip nat translations
 are commands used on Cisco routers and switches, not on PCs for checking their own IP configuration.

---

## Question 58

A student wants to save a router configuration to NVRAM. What is the best command to use to accomplish the task?

- [x] **copy running-config startup-config**
- [ ] show interfaces
- [ ] show ip nat translations
- [ ] show ip route
- [ ] show interfaces provides detailed information about the router’s interfaces.
- [ ] show ip nat translations displays the Network Address Translation (NAT) translation table.
- [ ] show ip route shows the routing table of the router.

> [!NOTE]
> **Explanation:** Explanation & Hint:
To save a router’s current configuration to NVRAM (Non-Volatile Random-Access Memory), ensuring that the configuration is retained even after a reboot, the student should use the command:
copy running-config startup-config
This command is used on Cisco routers and switches. It copies the current running configuration (which is active and stored in RAM) to the startup configuration (which is stored in NVRAM). When the device restarts, it loads the configuration stored in the startup-config file.
The other commands listed serve different purposes:
show interfaces
 provides detailed information about the router’s interfaces.
show ip nat translations
 displays the Network Address Translation (NAT) translation table.
show ip route
 shows the routing table of the router.

---

## Question 59

A support technician needs to know the IP address of the wireless interface on a MAC. What is the best command to use to accomplish the task?

- [x] **ipconfig getifaddr en0**
- [ ] copy running-config startup-config
- [ ] show interfaces
- [ ] show ip nat translations
- [ ] copy running-config startup-config is a command used on Cisco network devices to save the running configuration to the startup configuration.
- [ ] show interfaces and show ip nat translations are also Cisco commands and are not applicable to a Mac’s terminal.

> [!NOTE]
> **Explanation:** Explanation & Hint:
For a support technician who needs to find out the IP address of the wireless interface on a Mac, the best command to use is:
ipconfig getifaddr en1
Typically on a Mac, the 
en0
 interface is used for Ethernet (wired connection), and 
en1
 is often used for the wireless interface. The command 
ipconfig getifaddr en1
 is used in the terminal on macOS to display the IP address assigned to the wireless interface.
It’s important to note, however, that the assignment of interface names (
en0
, 
en1
, etc.) can vary depending on the specific hardware configuration and the version of macOS. In some cases, 
en0
 might be the wireless interface, especially in newer Macs without an Ethernet port.
The other commands listed are not applicable for this purpose:
copy running-config startup-config
 is a command used on Cisco network devices to save the running configuration to the startup configuration.
show interfaces
 and 
show ip nat translations
 are also Cisco commands and are not applicable to a Mac’s terminal.

---

## Question 60

A network technician is troubleshooting an issue and needs to verify all of the IPv6 interface addresses on a router. What is the best command to use to accomplish the task?

- [x] **show ipv6 interface**
- [ ] show interfaces
- [ ] show ip nat translations
- [ ] show ip route
- [ ] show interfaces provides detailed information about all interfaces, including their status and configuration, but it may not provide comprehensive IPv6-specific details.
- [ ] show ip nat translations and show ip route are commands relevant to IPv4 configurations; show ip nat translations displays the NAT translations table, and show ip route shows the IP routing table.

> [!NOTE]
> **Explanation:** Explanation & Hint:
For a network technician who needs to verify all of the IPv6 interface addresses on a router, the best command to use is:
show ipv6 interface
This command, when used on routers that support IPv6, will display details about IPv6 interfaces, including their addresses, status, and other relevant configuration details. It’s specifically tailored to provide comprehensive information about IPv6 configurations.
The other commands have different purposes:
show interfaces
 provides detailed information about all interfaces, including their status and configuration, but it may not provide comprehensive IPv6-specific details.
show ip nat translations
 and 
show ip route
 are commands relevant to IPv4 configurations; 
show ip nat translations
 displays the NAT translations table, and 
show ip route
 shows the IP routing table.

---

## Question 61

A teacher is having difficulties connecting his PC to the classroom network. He needs to verify that a default gateway is configured correctly. What is the best command to use to accomplish the task?

- [x] **ipconfig**
- [ ] copy running-config startup-config
- [ ] show interfaces
- [ ] show ip nat translations
- [ ] copy running-config startup-config is used on Cisco devices to save the current running configuration to the startup configuration.
- [ ] show interfaces and show ip nat translations are commands used on routers to display interface status and NAT translations, respectively, and are not applicable for checking the default gateway on a PC.

> [!NOTE]
> **Explanation:** Explanation & Hint:
For a teacher trying to verify the default gateway configuration on a PC, particularly if it’s running a Windows operating system, the best command to use is:
ipconfig
By opening the Command Prompt and typing 
ipconfig
 (or 
ipconfig /all
 for more detailed information), the teacher can view all network-related configurations on the PC. This includes the IP address, subnet mask, and importantly, the default gateway. The default gateway address is critical for a device to communicate with networks outside of its local subnet, such as the wider internet.
The other commands listed are specific to network devices like routers and switches, particularly in a Cisco environment:
copy running-config startup-config
 is used on Cisco devices to save the current running configuration to the startup configuration.
show interfaces
 and 
show ip nat translations
 are commands used on routers to display interface status and NAT translations, respectively, and are not applicable for checking the default gateway on a PC.

---

## Question 62

Only employees connected to IPv6 interfaces are having difficulty connecting to remote networks. The analyst wants to verify that IPv6 routing has been enabled. What is the best command to use to accomplish the task?

- [x] **show running-config**
- [ ] show interfaces
- [ ] copy running-config startup-config
- [ ] show ip nat translations
- [ ] show interfaces provides detailed information about the interfaces (both IPv4 and IPv6, if configured) but doesn’t directly show whether IPv6 routing is enabled.
- [ ] copy running-config startup-config is used to save the current configuration (running-config) to the startup configuration. It does not provide information about the state of IPv6 routing.
- [ ] show ip nat translations displays the NAT translations table for IPv4 and is not related to IPv6 routing.

> [!NOTE]
> **Explanation:** Explanation & Hint:
For an analyst who needs to verify whether IPv6 routing has been enabled on a device (typically a router), the best command to use would be:
show running-config
This command displays the current active configuration on the device. By examining the output of this command, the analyst can check for specific lines in the configuration that enable IPv6 routing, such as 
ipv6 unicast-routing
. If this command is present, it indicates that IPv6 routing is enabled.
The other commands have different primary functions:
show interfaces
 provides detailed information about the interfaces (both IPv4 and IPv6, if configured) but doesn’t directly show whether IPv6 routing is enabled.
copy running-config startup-config
 is used to save the current configuration (running-config) to the startup configuration. It does not provide information about the state of IPv6 routing.
show ip nat translations
 displays the NAT translations table for IPv4 and is not related to IPv6 routing.

---

## Question 63

An administrator is troubleshooting connectivity issues and needs to determine the IP address of a website. What is the best command to use to accomplish the task?

- [x] **nslookup**
- [ ] show ipv6 route
- [ ] show ipv6 interface
- [ ] copy startup-config running-config
- [ ] show ipv6 route displays the IPv6 routing table of a router.
- [ ] show ipv6 interface shows details about IPv6-enabled interfaces on a router.
- [ ] copy startup-config running-config is a command used on Cisco devices to copy the saved configuration (startup-config) to the current running configuration; it’s unrelated to DNS queries.

> [!NOTE]
> **Explanation:** Explanation & Hint:
For an administrator who needs to determine the IP address of a website, the most appropriate command to use is:
nslookup
This command is used to query Domain Name System (DNS) servers to find out the IP address associated with a domain name. By typing 
nslookup
 followed by the website’s domain name in a command line interface (such as Command Prompt on Windows or Terminal on Unix/Linux systems), the administrator can find out the IPv4 and IPv6 addresses for that website.
The other commands are more specific to network device configurations and are not typically used for resolving domain names to IP addresses:
show ipv6 route
 displays the IPv6 routing table of a router.
show ipv6 interface
 shows details about IPv6-enabled interfaces on a router.
copy startup-config running-config
 is a command used on Cisco devices to copy the saved configuration (startup-config) to the current running configuration; it’s unrelated to DNS queries.

---

## Question 64

Only employees connected to IPv6 interfaces are having difficulty connecting to remote networks. The analyst wants to verify that IPv6 routing has been enabled. What is the best command to use to accomplish the task?

- [x] **show running-config**
- [ ] show ipv6 route
- [ ] show ipv6 interface
- [ ] copy startup-config running-config
- [ ] show interfaces provides detailed information about the interfaces (both IPv4 and IPv6, if configured) but doesn’t directly show whether IPv6 routing is enabled.
- [ ] copy running-config startup-config is used to save the current configuration (running-config) to the startup configuration. It does not provide information about the state of IPv6 routing.
- [ ] show ip nat translations displays the NAT translations table for IPv4 and is not related to IPv6 routing.

> [!NOTE]
> **Explanation:** Explanation & Hint:
For an analyst who needs to verify whether IPv6 routing has been enabled on a device (typically a router), the best command to use would be:
show running-config
This command displays the current active configuration on the device. By examining the output of this command, the analyst can check for specific lines in the configuration that enable IPv6 routing, such as 
ipv6 unicast-routing
. If this command is present, it indicates that IPv6 routing is enabled.
The other commands have different primary functions:
show interfaces
 provides detailed information about the interfaces (both IPv4 and IPv6, if configured) but doesn’t directly show whether IPv6 routing is enabled.
copy running-config startup-config
 is used to save the current configuration (running-config) to the startup configuration. It does not provide information about the state of IPv6 routing.
show ip nat translations
 displays the NAT translations table for IPv4 and is not related to IPv6 routing.

---

