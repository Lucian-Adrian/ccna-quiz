# Checkpoint Exam Network Application Comm... Exam Answers

Source: [https://infraexam.com/ccna1-v7/ccna1-v7-itnv7-modules-14-15-network-application-communications-exam-answers/](https://infraexam.com/ccna1-v7/ccna1-v7-itnv7-modules-14-15-network-application-communications-exam-answers/)

Total Questions: 65

---

## Question 1

A PC is downloading a large file from a server. The TCP window is 1000 bytes. The server is sending the file using 100-byte segments. How many segments will the server send before it requires an acknowledgment from the PC?

- [ ] 1 segment
- [x] **10 segments**
- [ ] 100 segments
- [ ] 1000 segments

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
With a window of 1000 bytes, the destination host accepts segments until all 1000 bytes of data have been received. Then the destination host sends an acknowledgment.

---

## Question 2

Which factor determines TCP window size?

- [ ] the amount of data to be transmitted
- [ ] the number of services included in the TCP segment
- [x] **the amount of data the destination can process at one time**
- [ ] the amount of data the source is capable of sending at one time

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Window is the number of bytes that the sender will send prior to expecting an acknowledgement from the destination device. The initial window is agreed upon during the session startup via the three-way handshake between source and destination. It is determined by how much data the destination device of a TCP session is able to accept and process at one time.

---

## Question 3

What does a client do when it has UDP datagrams to send?

- [x] **It just sends the datagrams.**
- [ ] It queries the server to see if it is ready to receive data.
- [ ] It sends a simplified three-way handshake to the server.
- [ ] It sends to the server a segment with the SYN flag set to synchronize the conversation.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
When a client has UDP datagrams to send, it just sends the datagrams.

---

## Question 4

Which three fields are used in a UDP segment header? (Choose three.)

- [ ] Window Size
- [x] **Length**
- [x] **Source Port**
- [ ] Acknowledgment Number
- [x] **Checksum**
- [ ] Sequence Number

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
A UDP header consists of only the Source Port, Destination Port, Length, and Checksum fields. Sequence Number, Acknowledgment Number, and Window Size are TCP header fields.

---

## Question 5

What are two roles of the transport layer in data communication on a network? (Choose two.)

- [x] **identifying the proper application for each communication stream**
- [x] **tracking the individual communication between applications on the source and destination hosts**
- [ ] providing frame delimiting to identify bits making up a frame
- [ ] performing a cyclic redundancy check on the frame for errors
- [ ] providing the interface between applications and the underlying network over which messages are transmitted

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The transport layer has several responsibilities. The primary responsibilities include the following:

Tracking the individual communication streams between applications on the source and destination hosts

Segmenting data at the source and reassembling the data at the destination

Identifying the proper application for each communication stream through the use of port numbers

---

## Question 6

What information is used by TCP to reassemble and reorder received segments?

- [ ] port numbers
- [x] **sequence numbers**
- [ ] acknowledgment numbers
- [ ] fragment numbers

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
At the transport layer, TCP uses the sequence numbers in the header of each TCP segment to reassemble the segments into the correct order.

---

## Question 7

What important information is added to the TCP/IP transport layer header to ensure communication and connectivity with a remote network device?

- [ ] timing and synchronization
- [x] **destination and source port numbers**
- [ ] destination and source physical addresses
- [ ] destination and source logical network addresses

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The destination and source port numbers are used to identify exactly which protocol and process is requesting or responding to a request.

---

## Question 8

Which two characteristics are associated with UDP sessions? (Choose two.)

- [x] **Destination devices receive traccic with minimal delay.**
- [ ] Transmitted data segments are tracked.
- [ ] Destination devices reassemble messages and pass them to an application.
- [x] **Received data is unacknowledged.**
- [ ] Unacknowledged data packets are retransmitted.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
TCP:

· Provides tracking of transmitted data segments

· Destination devices will acknowledge received data.

· Source devices will retransmit unacknowledged data.
UDP

· Destination devices will not acknowledge received data

· Headers use very little overhead and cause minimal delay.​

---

## Question 9

A client application needs to terminate a TCP communication session with a server. Place the termination process steps in the order that they will occur.

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-14-15-Checkpoint-Exam-Network-Application-Communications-Exam%E2%80%8B-Answers-01.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-14-15-Checkpoint-Exam-Network-Application-Communications-Exam​-Answers-01-1024x445.png)

![exhibit](https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Module-14-15-Checkpoint-Exam-Network-Application-Communications-Exam%E2%80%8B-Answers-01-1024x445.png)

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
In order to terminate a TCP session, the client sends to the server a segment with the FIN flag set. The server acknowledges the client by sending a segment with the ACK flag set. The server sends a FIN to the client to terminate the server to client session. The client acknowledges the termination by sending a segment with the ACK flag set.

---

## Question 10

Which flag in the TCP header is used in response to a received FIN in order to terminate connectivity between two network devices?

- [ ] FIN
- [x] **ACK**
- [ ] SYN
- [ ] RST

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
In a TCP session, when a device has no more data to send, it will send a segment with the FIN flag set. The connected device that receives the segment will respond with an ACK to acknowledge that segment. The device that sent the ACK will then send a FIN message to close the connection it has with the other device. The sending of the FIN should be followed with the receipt of an ACK from the other device.​

---

## Question 11

Which protocol or service uses UDP for a client-to-server communication and TCP for server-to-server communication?

- [ ] HTTP
- [ ] FTP
- [x] **DNS**
- [ ] SMTP

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Some applications may use both TCP and UDP. DNS uses UDP when clients send requests to a DNS server, and TCP when two DNS serves directly communicate.

---

## Question 12

What is a characteristic of UDP?

- [ ] UDP datagrams take the same path and arrive in the correct order at the destination.​
- [ ] Applications that use UDP are always considered unreliable.​
- [x] **UDP reassembles the received datagrams in the order they were received.**
- [ ] UDP only passes data to the network when the destination is ready to receive the data.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
UDP has no way to reorder the datagrams into their transmission order, so UDP simply reassembles the data in the order it was received and forwards it to the application.​

---

## Question 13

What kind of port must be requested from IANA in order to be used with a specific application?

- [x] **registered port**
- [ ] private port
- [ ] dynamic port
- [ ] source port

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Registered ports (numbers 1024 to 49151) are assigned by IANA to a requesting entity to use with specific processes or applications. These processes are primarily individual applications that a user has chosen to install, rather than common applications that would receive a well-known port number. For example, Cisco has registered port 1985 for its Hot Standby Routing Protocol (HSRP) process.​

---

## Question 14

Which three application layer protocols use TCP? (Choose three.)

- [x] **SMTP**
- [x] **FTP**
- [ ] SNMP
- [x] **HTTP**
- [ ] TFTP
- [ ] DHCP

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Some protocols require the reliable data transport that is provided by TCP. In addition, these protocols do not have real time communication requirements and can tolerate some data loss while minimizing protocol overhead. Examples of these protocols are SMTP, FTP, and HTTP.

---

## Question 15

Which three statements characterize UDP? (Choose three.)

- [x] **UDP provides basic connectionless transport layer functions.**
- [ ] UDP provides connection-oriented, fast transport of data at Layer 3.
- [x] **UDP relies on application layer protocols for error detection.**
- [x] **UDP is a low overhead protocol that does not provide sequencing or flow control mechanisms.**
- [ ] UDP relies on IP for error detection and recovery.
- [ ] UDP provides sophisticated flow control mechanisms.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
UDP is a simple protocol that provides the basic transport layer functions. It has much lower overhead than TCP because it is not connection-oriented and does not occer the sophisticated retransmission, sequencing, and flow control mechanisms that provide reliability.

---

## Question 16

Which two fields are included in the TCP header but not in the UDP header? (Choose two.)

- [x] **window**
- [ ] checksum
- [ ] source port
- [ ] destination port
- [x] **sequence number**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The sequence number and window fields are included in the TCP header but not in the UDP header.

---

## Question 17

Which field in the TCP header indicates the status of the three-way handshake process?

- [ ] window
- [ ] reserved
- [ ] checksum
- [x] **control bits**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The value in the control bits field of theTCP header indicates the progress and status of the connection.

---

## Question 18

Why does HTTP use TCP as the transport layer protocol?

- [ ] to ensure the fastest possible download speed
- [ ] because HTTP is a best-eccort protocol
- [ ] because transmission errors can be tolerated easily
- [x] **because HTTP requires reliable delivery**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
When a host requests a web page, transmission reliability and completeness must be guaranteed. Therefore, HTTP uses TCP as its transport layer protocol.

---

## Question 19

Which two types of applications are best suited for UDP? (Choose two.)

- [ ] applications that need data flow control
- [ ] applications that require reliable delivery
- [x] **applications that handle reliability themselves**
- [ ] applications that need the reordering of segments
- [x] **applications that can tolerate some data loss, but require little or no delay**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Applications that can tolerate some data loss, require a simple request and reply, and handle reliability themselves are best suited for UDP. UDP has low overhead and no requirement of reliability. TCP provides services for reliability, controlling data flow, and the reordering of segments.

---

## Question 20

How are port numbers used in the TCP/IP encapsulation process?

- [ ] Source port numbers and destination port numbers are not necessary when UDP is the transport layer protocol being used for the communication.
- [ ] Source port and destination port numbers are randomly generated.
- [x] **If multiple conversations occur that are using the same service, the source port number is used to track the separate conversations.**
- [ ] Destination port numbers are assigned automatically and cannot be changed.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Both UDP and TCP use port numbers to provide a unique identifier for each conversation. Source port numbers are randomly generated and are used to track diccerent conversations. Destination port numbers identify specific services by using either a default port number for the service or a port number that is assigned manually by a system administrator.

---

## Question 21

In what two situations would UDP be better than TCP as the preferred transport protocol? (Choose two.)

- [ ] when applications need to guarantee that a packet arrives intact, in sequence, and unduplicated
- [x] **when a faster delivery mechanism is needed**
- [ ] when delivery overhead is not an issue
- [x] **when applications do not need to guarantee delivery of the data**
- [ ] when destination port numbers are dynamic

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
UDP is a very simple transport layer protocol that does not guarantee delivery. Devices on both ends of the conversation are not required to keep track of the conversation. UDP is used as the transport protocol for applications that need a speedy, best-eccort delivery.

---

## Question 22

What are three responsibilities of the transport layer? (Choose three.)

- [x] **meeting the reliability requirements of applications, if any**
- [x] **multiplexing multiple communication streams from many users or applications on the same network**
- [x] **identifying the applications and services on the client and server that should handle transmitted data**
- [ ] directing packets towards the destination network
- [ ] formatting data into a compatible form for receipt by the destination devices
- [ ] conducting error detection of the contents in frames

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The transport layer has several responsibilities. Some of the primary responsibilities include the following:

Tracking the individual communication streams between applications on the source and destination hosts

Segmenting data at the source and reassembling the data at the destination

Identifying the proper application for each communication stream through the use of port numbers

Multiplexing the communications of multiple users or applications over a single network

Managing the reliability requirements of applications

---

## Question 23

Which three statements describe a DHCP Discover message? (Choose three.)

- [ ] The source MAC address is 48 ones (cc-cc-cc-cc-cc-cc).
- [x] **The destination IP address is 255.255.255.255.**
- [ ] The message comes from a server occering an IP address.
- [x] **The message comes from a client seeking an IP address.**
- [x] **All hosts receive the message, but only a DHCP server replies.**
- [ ] Only the DHCP server receives the message.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
When a host configured to use DHCP powers up on a network it sends a DHCPDISCOVER message. cc-cc-cc-cc-cc-cc is the L2 broadcast address. A DHCP server replies with a unicast DHCPOccER message back to the host.

---

## Question 24

Which two protocols may devices use in the application process that sends email? (Choose two.)

- [ ] HTTP
- [x] **SMTP**
- [ ] POP
- [ ] IMAP
- [x] **DNS**
- [ ] POP3

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
POP, POP3, and IMAP are protocols that are used to retrieve email from servers. SMTP is the default protocol that is used to send email. DNS may be used by the sender email server to find the address of the destination email server.

---

## Question 25

What is true about the Server Message Block protocol?

- [ ] Diccerent SMB message types have a diccerent format.
- [x] **Clients establish a long term connection to servers.**
- [ ] SMB messages cannot authenticate a session.
- [ ] SMB uses the FTP protocol for communication.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The Server Message Block protocol is a protocol for file, printer, and directory sharing. Clients establish a long term connection to servers and when the connection is active, the resources can be accessed. Every SMB message has the same format. The use of SMB diccers from FTP mainly in the length of the sessions. SMB messages can authenticate sessions.

---

## Question 26

What is the function of the HTTP GET message?

- [x] **to request an HTML page from a web server**
- [ ] to send error information from a web server to a web client
- [ ] to upload content to a web server from a web client
- [ ] to retrieve client email from an email server using TCP port 110

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
There are three common HTTP message types:GET – used by clients to request data from the web server

POST – used by clients to upload data to a web server

PUT – used by clients to upload data to a web server

---

## Question 27

Which OSI layer provides the interface between the applications used to communicate and the underlying network over which messages are transmitted?

- [x] **application**
- [ ] presentation
- [ ] session
- [ ] transport

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The application layer is the layer that is closest to the end user and provides the interface between the underlying network and the applications used to communicate.

---

## Question 28

Which networking model is being used when an author uploads one chapter document to a file server of a book publisher?

- [ ] peer-to-peer
- [ ] master-slave
- [x] **client/server**
- [ ] point-to-point

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
In the client/server network model, a network device assumes the role of server in order to provide a particular service such as file transfer and storage. In the client/server network model, a dedicated server does not have to be used, but if one is present, the network model being used is the client/server model. In contrast, a peer-to-peer network does not have a dedicated server.

---

## Question 29

What do the client/server and peer-to-peer network models have in common?

- [ ] Both models have dedicated servers.
- [x] **Both models support devices in server and client roles.**
- [ ] Both models require the use of TCP/IP-based protocols.
- [ ] Both models are used only in the wired network environment.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
In both the client/server and peer-to-peer network models, clients and servers exist. In peer-to-peer networks, no dedicated server exists, but a device can assume the server role to provide information to a device serving in the client role.

---

## Question 30

In what networking model would eDonkey, eMule, BitTorrent, Bitcoin, and LionShare be used?

- [x] **peer-to-peer**
- [ ] client-based
- [ ] master-slave
- [ ] point-to-point

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
In a peer-to-peer networking model, data is exchanged between two network devices without the use of a dedicated server. Peer-to-peer applications such as Shareaz, eDonkey, and Bitcoin allow one network device to assume the role of server, while one or more other network devices assume the role of client using the peer-to-peer application.

---

## Question 31

What is a common protocol that is used with peer-to-peer applications such as WireShare, Bearshare, and Shareaza?

- [ ] Ethernet
- [x] **Gnutella**
- [ ] POP
- [ ] SMTP

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The Gnutella protocol is used when one user shares an entire file with another user. A person would load a Gnutella-based application such as gtk-gnutella or WireShare and use that application to locate and access resources shared by others.

---

## Question 32

What is a key characteristic of the peer-to-peer networking model?

- [ ] wireless networking
- [ ] social networking without the Internet
- [ ] network printing using a print server
- [x] **resource sharing without a dedicated server**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The peer-to-peer (P2P) networking model allows data, printer, and resource sharing without a dedicated server.​​

---

## Question 33

The application layer of the TCP/IP model performs the functions of what three layers of the OSI model? (Choose three.)

- [ ] physical
- [x] **session**
- [ ] network
- [x] **presentation**
- [ ] data link
- [ ] transport
- [x] **application**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The network access layer of the TCP/IP model performs the same functions as the physical and data link layers of the OSI model. The internetwork layer equates to the network layer of the OSI model. The transport layers are the same in both models. The application layer of the TCP/IP model represents the session, presentation, and application layers of the OSI model.​

---

## Question 34

What is an example of network communication that uses the client-server model?

- [ ] A user uses eMule to download a file that is shared by a friend after the file location is determined.
- [ ] A workstation initiates an ARP to find the MAC address of a receiving host.
- [ ] A user prints a document by using a printer that is attached to a workstation of a coworker.
- [x] **A workstation initiates a DNS request when the user types www.cisco.com in the address bar of a web browser.**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
When a user types a domain name of a website into the address bar of a web browser, a workstation needs to send a DNS request to the DNS server for the name resolution process. This request is a client/server model application. The eMule application is P2P. Sharing a printer on a workstation is a peer-to-peer network. Using ARP is just a broadcast message sent by a host.

---

## Question 35

Which layer in the TCP/IP model is used for formatting, compressing, and encrypting data?

- [ ] internetwork
- [ ] session
- [ ] presentation
- [x] **application**
- [ ] network access

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The application layer of the TCP/IP model performs the functions of three layers of the OSI model – application, presentation, and session. The application layer of the TCP/IP model is the layer that provides the interface between the applications, is responsible for formatting, compressing, and encrypting data, and is used to create and maintain dialogs between source and destination applications.

---

## Question 36

What is an advantage of SMB over FTP?​

- [ ] Only with SMB can data transfers occur in both directions.
- [ ] Only SMB establishes two simultaneous connections with the client, making the data transfer faster.​
- [ ] SMB is more reliable than FTP because SMB uses TCP and FTP uses UDP.​
- [x] **SMB clients can establish a long-term connection to the server.​**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
SMB and FTP are client/server protocols that are used for file transfer. SMB allows the connecting device to access resources as if they were on the local client device. SMB and FTP use the TCP protocol for connection establishment and they can transfer data in both directions. FTP requires two connections between the client and the server, one for commands and replies, the other for the actual file transfer.

---

## Question 37

A manufacturing company subscribes to certain hosted services from its ISP. The services that are required include hosted world wide web, file transfer, and e-mail. Which protocols represent these three key applications? (Choose three.)

- [x] **FTP**
- [x] **HTTP**
- [ ] DNS
- [ ] SNMP
- [ ] DHCP
- [x] **SMTP**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The ISP uses the HTTP protocol in conjunction with hosting web pages, the FTP protocol with file transfers, and SMTP with e-mail. DNS is used to translate domain names to IP addresses. SNMP is used for network management traccic. DHCP ic commonly used to manage IP addressing.

---

## Question 38

Which application layer protocol uses message types such as GET, PUT, and POST?

- [ ] DNS
- [ ] DHCP
- [ ] SMTP
- [x] **HTTP**
- [ ] POP3

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The GET command is a client request for data from a web server. A PUT command uploads resources and content, such as images, to a web server. A POST command uploads data files to a web server.

---

## Question 39

What type of information is contained in a DNS MX record?

- [ ] the FQDN of the alias used to identify a service
- [ ] the IP address for an FQDN entry
- [x] **the domain name mapped to mail exchange servers**
- [ ] the IP address of an authoritative name server

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
MX, or mail exchange messages, are used to map a domain name to several mail exchange servers that all belong to the same domain.

---

## Question 40

Which three protocols operate at the application layer of the TCP/IP model? (Choose three.)

- [ ] ARP
- [ ] TCP
- [ ] UDP
- [x] **FTP**
- [x] **POP3**
- [x] **DHCP**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
FTP, DHCP, and POP3 are application layer protocols. TCP and UDP are transport layer protocols. ARP is a network layer protocol.

---

## Question 41

Which protocol is used by a client to communicate securely with a web server?

- [ ] SMTP
- [ ] SMB
- [ ] IMAP
- [x] **HTTPS**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
HTTPS is a secure form of HTTP used to access web content hosted by a web server.

---

## Question 42

Which applications or services allow hosts to act as client and server at the same time?

- [ ] client/server applications
- [ ] email applications
- [x] **P2P applications**
- [ ] authentication services

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
P2P applications allow the clients to behave as servers if needed. When using authentication services, email exchange, and client/server applications, one host acts as server and the other acts as client at all times.

---

## Question 43

What are two characteristics of peer-to-peer networks? (Choose two.)

- [ ] scalability
- [ ] one way data flow
- [x] **decentralized resources**
- [ ] centralized user accounts
- [x] **resource sharing without a dedicated server**

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
Peer-to-peer networks have decentralized resources because every computer can serve as both a server and a client. One computer might assume the role of server for one transaction while acting as a client for another transaction. Peer-to-peer networks can share resources among network devices without the use of a dedicated server.

---

## Question 44

Which scenario describes a function provided by the transport layer?

- [ ] A student is using a classroom VoIP phone to call home. The unique identifier burned into the phone is a transport layer address used to contact another network device on the same network.
- [ ] A student is playing a short web-based movie with sound. The movie and sound are encoded within the transport layer header.
- [x] **A student has two web browser windows open in order to access two web sites. The transport layer ensures the correct web page is delivered to the correct browser window.**
- [ ] A corporate worker is accessing a web server located on a corporate network. The transport layer formats the screen so the web page appears properly no matter what device is being used to view the web site.

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The source and destination port numbers are used to identify the correct application and window within that application.

---

## Question 45

Which three layers of the OSI model provide similar network services to those provided by the application layer of the TCP/IP model? (Choose three.)

- [ ] physical layer
- [x] **session layer**
- [ ] transport layer
- [x] **application layer**
- [x] **presentation layer**
- [ ] data link layer

> [!NOTE]
> **Explanation:** Answers Explanation & Hints:
The three upper layers of the OSI model, the session, presentation, and application layers, provide application services similar to those provided by the TCP/IP model application layer. Lower layers of the OSI model are more concerned with data flow.

---

## Question 46

A PC that is communicating with a web server has a TCP window size of 6,000 bytes when sending data and a packet size of 1,500 bytes. Which byte of information will the web server acknowledge after it has received two packets of data from the PC?

- [x] **3001**
- [ ] 6001
- [ ] 4500
- [ ] 6000

> [!NOTE]
> **Explanation:** Explanation & Hint:
In TCP (Transmission Control Protocol), the window size determines the amount of data (in bytes) that can be sent before requiring an acknowledgment. Each packet acknowledgment in TCP is cumulative and indicates the next expected byte.
Given that the packet size is 1,500 bytes, after two packets, the number of bytes sent would be 
2×1,500=3,000
2
×
1
,
500
=
3
,
000
 bytes.
TCP acknowledgments are typically for the next expected byte. So, after successfully receiving 3,000 bytes, the next expected byte would be byte number 3001.
Therefore, the web server would acknowledge byte number 
3001
 after it has received two packets of data from the PC.

---

## Question 47

A PC that is communicating with a web server has a TCP window size of 6,000 bytes when sending data and a packet size of 1,500 bytes. Which byte of information will the web server acknowledge after it has received three packets of data from the PC?

- [x] **4501**
- [ ] 6001
- [ ] 6000
- [ ] 4500

> [!NOTE]
> **Explanation:** Explanation & Hint:
In TCP communication, acknowledgments are sent for the next expected byte. If the packet size is 1,500 bytes, after three packets, the number of bytes sent would be 
3×1,500=4,500
3
×
1
,
500
=
4
,
500
 bytes.
Since TCP acknowledgments are for the next byte that is expected, after receiving 4,500 bytes, the acknowledgment would be for the next byte, which is byte number 4501.
Therefore, after receiving three packets of data from the PC, the web server will acknowledge byte number 
4501
.

---

## Question 48

A PC that is communicating with a web server has a TCP window size of 6,000 bytes when sending data and a packet size of 1,500 bytes. Which byte of information will the web server acknowledge after it has received four packets of data from the PC?

- [x] **6001**
- [ ] 3001
- [ ] 1501
- [ ] 1500

> [!NOTE]
> **Explanation:** Explanation & Hint:
In a TCP (Transmission Control Protocol) communication, the acknowledgment number that is sent by a receiver (in this case, the web server) indicates the next expected byte from the sender (the PC).
Given that each packet size is 1,500 bytes, after four packets, the total number of bytes sent would be 
4×1,500=6,000
4
×
1
,
500
=
6
,
000
 bytes.
The acknowledgment sent by the receiver is for the next byte that it expects to receive. So, after successfully receiving 6,000 bytes, the next expected byte would be byte number 6,001.
Therefore, the web server will acknowledge byte number 
6001
 after it has received four packets of data from the PC.

---

## Question 49

A PC that is communicating with a web server has a TCP window size of 6,000 bytes when sending data and a packet size of 1,500 bytes. Which byte of information will the web server acknowledge after it has received four packets of data from the PC?

- [x] **6001**
- [ ] 3001
- [ ] 3000
- [ ] 1500

> [!NOTE]
> **Explanation:** Explanation & Hint:
In a TCP (Transmission Control Protocol) communication, the acknowledgment number that is sent by a receiver (in this case, the web server) indicates the next expected byte from the sender (the PC).
Given that each packet size is 1,500 bytes, after four packets, the total number of bytes sent would be 
4×1,500=6,000
4
×
1
,
500
=
6
,
000
 bytes.
The acknowledgment sent by the receiver is for the next byte that it expects to receive. So, after successfully receiving 6,000 bytes, the next expected byte would be byte number 6,001.
Therefore, the web server will acknowledge byte number 
6001
 after it has received four packets of data from the PC.

---

## Question 50

A PC that is communicating with a web server has a TCP window size of 6,000 bytes when sending data and a packet size of 1,500 bytes. Which byte of information will the web server acknowledge after it has received two packets of data from the PC?

- [x] **3001**
- [ ] 4501
- [ ] 3000
- [ ] 1500

> [!NOTE]
> **Explanation:** Explanation & Hint:
In TCP (Transmission Control Protocol), the window size determines the amount of data (in bytes) that can be sent before requiring an acknowledgment. Each packet acknowledgment in TCP is cumulative and indicates the next expected byte.
Given that the packet size is 1,500 bytes, after two packets, the number of bytes sent would be 
2×1,500=3,000
2
×
1
,
500
=
3
,
000
 bytes.
TCP acknowledgments are typically for the next expected byte. So, after successfully receiving 3,000 bytes, the next expected byte would be byte number 3001.
Therefore, the web server would acknowledge byte number 
3001
 after it has received two packets of data from the PC.

---

## Question 51

A PC that is communicating with a web server has a TCP window size of 6,000 bytes when sending data and a packet size of 1,500 bytes. Which byte of information will the web server acknowledge after it has received two packets of data from the PC?

- [x] **3001**
- [ ] 4501
- [ ] 4500
- [ ] 1500

> [!NOTE]
> **Explanation:** Explanation & Hint:
In TCP (Transmission Control Protocol), the window size determines the amount of data (in bytes) that can be sent before requiring an acknowledgment. Each packet acknowledgment in TCP is cumulative and indicates the next expected byte.
Given that the packet size is 1,500 bytes, after two packets, the number of bytes sent would be 
2×1,500=3,000
2
×
1
,
500
=
3
,
000
 bytes.
TCP acknowledgments are typically for the next expected byte. So, after successfully receiving 3,000 bytes, the next expected byte would be byte number 3001.
Therefore, the web server would acknowledge byte number 
3001
 after it has received two packets of data from the PC.

---

## Question 52

A PC that is communicating with a web server has a TCP window size of 6,000 bytes when sending data and a packet size of 1,500 bytes. Which byte of information will the web server acknowledge after it has received two packets of data from the PC?

- [x] **3001**
- [ ] 6001
- [ ] 4500
- [ ] 3000

> [!NOTE]
> **Explanation:** Explanation & Hint:
In TCP (Transmission Control Protocol), the window size determines the amount of data (in bytes) that can be sent before requiring an acknowledgment. Each packet acknowledgment in TCP is cumulative and indicates the next expected byte.
Given that the packet size is 1,500 bytes, after two packets, the number of bytes sent would be 
2×1,500=3,000
2
×
1
,
500
=
3
,
000
 bytes.
TCP acknowledgments are typically for the next expected byte. So, after successfully receiving 3,000 bytes, the next expected byte would be byte number 3001.
Therefore, the web server would acknowledge byte number 
3001
 after it has received two packets of data from the PC.

---

## Question 53

A PC that is communicating with a web server has a TCP window size of 6,000 bytes when sending data and a packet size of 1,500 bytes. Which byte of information will the web server acknowledge after it has received two packets of data from the PC?

- [x] **3001**
- [ ] 6001
- [ ] 6000
- [ ] 3000

> [!NOTE]
> **Explanation:** Explanation & Hint:
In TCP (Transmission Control Protocol), the window size determines the amount of data (in bytes) that can be sent before requiring an acknowledgment. Each packet acknowledgment in TCP is cumulative and indicates the next expected byte.
Given that the packet size is 1,500 bytes, after two packets, the number of bytes sent would be 
2×1,500=3,000
2
×
1
,
500
=
3
,
000
 bytes.
TCP acknowledgments are typically for the next expected byte. So, after successfully receiving 3,000 bytes, the next expected byte would be byte number 3001.
Therefore, the web server would acknowledge byte number 
3001
 after it has received two packets of data from the PC.

---

## Question 54

A PC that is communicating with a web server has a TCP window size of 6,000 bytes when sending data and a packet size of 1,500 bytes. Which byte of information will the web server acknowledge after it has received three packets of data from the PC?

- [x] **4501**
- [ ] 6001
- [ ] 6000
- [ ] 3000

> [!NOTE]
> **Explanation:** Explanation & Hint:
In TCP communication, acknowledgments are sent for the next expected byte. If the packet size is 1,500 bytes, after three packets, the number of bytes sent would be 
3×1,500=4,500
3
×
1
,
500
=
4
,
500
 bytes.
Since TCP acknowledgments are for the next byte that is expected, after receiving 4,500 bytes, the acknowledgment would be for the next byte, which is byte number 4501.
Therefore, after receiving three packets of data from the PC, the web server will acknowledge byte number 
4501
.

---

## Question 55

A PC that is communicating with a web server has a TCP window size of 6,000 bytes when sending data and a packet size of 1,500 bytes. Which byte of information will the web server acknowledge after it has received three packets of data from the PC?

- [x] **4501**
- [ ] 6001
- [ ] 1500
- [ ] 4500

> [!NOTE]
> **Explanation:** Explanation & Hint:
In TCP communication, acknowledgments are sent for the next expected byte. If the packet size is 1,500 bytes, after three packets, the number of bytes sent would be 
3×1,500=4,500
3
×
1
,
500
=
4
,
500
 bytes.
Since TCP acknowledgments are for the next byte that is expected, after receiving 4,500 bytes, the acknowledgment would be for the next byte, which is byte number 4501.
Therefore, after receiving three packets of data from the PC, the web server will acknowledge byte number 
4501
.

---

## Question 56

A client creates a packet to send to a server. The client is requesting TFTP service. What number will be used as the destination port number in the sending packet?

- [x] **69**
- [ ] 67
- [ ] 53
- [ ] 80

> [!NOTE]
> **Explanation:** Explanation & Hint:
The Trivial File Transfer Protocol (TFTP) uses UDP (User Datagram Protocol) as its transport protocol. The well-known port number for TFTP is 69. This is the port that clients use to initiate a connection with a TFTP server.
So, when a client creates a packet to send to a server requesting TFTP service, the destination port number used in the sending packet will be 
69
.

---

## Question 57

A client creates a packet to send to a server. The client is requesting FTP service. What number will be used as the destination port number in the sending packet?

- [x] **21**
- [ ] 69
- [ ] 67
- [ ] 80

> [!NOTE]
> **Explanation:** Explanation & Hint:
FTP, or File Transfer Protocol, typically uses port 21 for control commands. This is the port that clients use to initiate a connection with an FTP server for sending commands and managing the transfer process.
So, when a client creates a packet to send to a server requesting FTP service, the destination port number used in the sending packet will be 
21
.

---

## Question 58

A client creates a packet to send to a server. The client is requesting SSH service. What number will be used as the destination port number in the sending packet?

- [x] **22**
- [ ] 69
- [ ] 67
- [ ] 80

> [!NOTE]
> **Explanation:** Explanation & Hint:
SSH, or Secure Shell, typically uses port 22. This is the port that clients use to initiate a secure connection with a server for secure data communication, remote command-line login, remote command execution, and other secure network services.
So, when a client creates a packet to send to a server requesting SSH service, the destination port number used in the sending packet will be 
22
.

---

## Question 59

A client creates a packet to send to a server. The client is requesting HTTP service. What number will be used as the destination port number in the sending packet?

- [x] **80**
- [ ] 67
- [ ] 53
- [ ] 69

> [!NOTE]
> **Explanation:** Explanation & Hint:
HTTP, or HyperText Transfer Protocol, typically uses port 80. This is the standard port used by web browsers and servers for HTTP communication, which is the foundation of data communication for the World Wide Web.
So, when a client creates a packet to send to a server requesting HTTP service, the destination port number used in the sending packet will be 
80
.

---

## Question 60

A client creates a packet to send to a server. The client is requesting POP3 service. What number will be used as the destination port number in the sending packet?

- [x] **110**
- [ ] 67
- [ ] 53
- [ ] 69

> [!NOTE]
> **Explanation:** Explanation & Hint:
POP3, or Post Occice Protocol version 3, typically uses port 110. This protocol is used by email clients to retrieve emails from a server.
So, when a client creates a packet to send to a server requesting POP3 service, the destination port number used in the sending packet will be 
110
.

---

## Question 61

A client creates a packet to send to a server. The client is requesting telnet service. What number will be used as the destination port number in the sending packet?

- [x] **23**
- [ ] 443
- [ ] 161
- [ ] 110

> [!NOTE]
> **Explanation:** Explanation & Hint:
Telnet, a protocol used for accessing remote computers, typically uses port 23. This port is the standard TCP port for telnet connections and is used for telnet sessions that involve a user connecting to a remote host or server.
So, when a client creates a packet to send to a server requesting telnet service, the destination port number used in the sending packet will be 
23
.

---

## Question 62

A client creates a packet to send to a server. The client is requesting POP3 service. What number will be used as the destination port number in the sending packet?

- [x] **110**
- [ ] 443
- [ ] 161
- [ ] 80

> [!NOTE]
> **Explanation:** Explanation & Hint:
POP3, or Post Occice Protocol version 3, typically uses port 110. This protocol is used by email clients to retrieve emails from a server.
So, when a client creates a packet to send to a server requesting POP3 service, the destination port number used in the sending packet will be 
110
.

---

## Question 63

A client creates a packet to send to a server. The client is requesting SNMP service. What number will be used as the destination port number in the sending packet?

- [x] **161**
- [ ] 443
- [ ] 110
- [ ] 80

> [!NOTE]
> **Explanation:** Explanation & Hint:
SNMP, or Simple Network Management Protocol, typically uses port 161 for general SNMP messages. This protocol is used for the management and monitoring of networked devices.
So, when a client creates a packet to send to a server requesting SNMP service, the destination port number used in the sending packet will be 
161
.

---

## Question 64

A client creates a packet to send to a server. The client is requesting SMTP service. What number will be used as the destination port number in the sending packet?

- [x] **25**
- [ ] 443
- [ ] 161
- [ ] 110

> [!NOTE]
> **Explanation:** Explanation & Hint:
SMTP, or Simple Mail Transfer Protocol, typically uses port 25. This protocol is used for sending emails from a client to a server or between servers.
So, when a client creates a packet to send to a server requesting SMTP service, the destination port number used in the sending packet will be 
25
.

---

## Question 65

A client creates a packet to send to a server. The client is requesting HTTPS service. What number will be used as the destination port number in the sending packet?

- [x] **443**
- [ ] 161
- [ ] 110
- [ ] 80

> [!NOTE]
> **Explanation:** Explanation & Hint:
HTTPS, or Hypertext Transfer Protocol Secure, typically uses port 443. This protocol is used for secure communication over a computer network within a web browser, using encryption to ensure privacy and security.
So, when a client creates a packet to send to a server requesting HTTPS service, the destination port number used in the sending packet will be 
443
.

---

