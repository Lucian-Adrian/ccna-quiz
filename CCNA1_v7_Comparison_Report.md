# In-Depth CCNA1 v7 Quiz Extraction Comparison Report
This report compares the quiz questions extracted from **itexamanswers.net** (`_itexam`) and **infraexam.com** (`_infra`).

## 📊 Overview Metrics

| Module/Exam | itexamanswers.net Count | infraexam.com Count | Common Questions | itexamanswers Only | infraexam Only | Answer Discrepancies |
| --- | --- | --- | --- | --- | --- | --- |
| Modules 1-3 | 75 | 73 | 59 | 15 | 7 | 1 |
| Modules 4-7 | 70 | 76 | 57 | 7 | 3 | 2 |
| Modules 8-10 | 76 | 75 | 51 | 17 | 18 | 0 |
| Modules 11-13 | 71 | 83 | 53 | 12 | 16 | 1 |
| Modules 14-15 | 61 | 65 | 56 | 5 | 1 | 0 |
| Modules 16-17 | 67 | 64 | 55 | 11 | 7 | 0 |
| Practice Final | 55 | 59 | 48 | 7 | 11 | 1 |
| Final Exam | 158 | 166 | 143 | 14 | 19 | 8 |
| **Total** | **633** | **661** | **522** | - | - | **13** |

## ⚠️ Answer Discrepancies
The following matched questions have different correct answers specified between the two sources.

### Modules 1-3

#### Discrepancy 1: For the TCP/IP protocol suite, what is the correct order of events when a Telnet message is being prepared to be sent ov...
- **itexamanswers.net** says: `[]`
- **infraexam.com** says: `['The IP header is added. ==>\xa0\nThird', 'The TCP header is added. ==>\xa0\nSecond', 'The Ethernet header is added. ==>\xa0\nFourth', 'The Telnet-formatted data is provided to the next layer. ==>\xa0\nFirst']`

### Modules 4-7

#### Discrepancy 1: Match the situation with the appropriate use of network media....
- **itexamanswers.net** says: `[]`
- **infraexam.com** says: `['backbone cabling in an enterprise ==> Fiber Optic', 'guest access in a coffee shop ==> Wireless', 'horizontal cabling structure ==> Copper Cables', 'waiting rooms in a hospital ==> Wireless', 'desktop PCs in an enterprise office ==> Copper Cables', 'long-haul networks ==> Fiber Optic']`

#### Discrepancy 2: Refer to the exhibit. The PC is connected to the console port of the switch. All the other connections are made through ...
- **itexamanswers.net** says: `[]`
- **infraexam.com** says: `['1 – rollover, 2 – straight-through, 3 – crossover']`

### Modules 11-13

#### Discrepancy 1: Consider the following range of addresses:...
- **itexamanswers.net** says: `['The prefix-length for the range of addresses is /60 .']`
- **infraexam.com** says: `[]`

### Practice Final

#### Discrepancy 1: A router boots and enters setup mode. What is the reason for this?...
- **itexamanswers.net** says: `['The configuration file is missing from NVRAM.', 'Retrieves email from the server by downloading the email to the local mail application of the client.']`
- **infraexam.com** says: `['The configuration file is missing from NVRAM.']`

### Final Exam

#### Discrepancy 1: Match the description to the IPv6 addressing component. (Not all options are used.)...
- **itexamanswers.net** says: `[]`
- **infraexam.com** says: `['“This part of the address is used by an organization to identify subnets.” matches with subnet ID . This is the part of the IPv6 address that an organization can use to create its internal addressing structure, defining different subnetworks within its allocation.', '“This network portion of the address is assigned by the provider.” matches with global routing prefix . This is the portion of the IPv6 address provided by the ISP or a regional internet registry, which is used to route traffic to the organization’s network on the internet.', '“This part of the address is the equivalent to the host portion of an IPv4 address.” matches with interface ID . In IPv6, the interface ID is the portion of the address that is typically used to identify a unique interface on a network, similar to how the host portion of an IPv4 address identifies a unique host in a subnet.']`

#### Discrepancy 2: Match the application protocols to the correct transport protocols....
- **itexamanswers.net** says: `[]`
- **infraexam.com** says: `['DHCP (Dynamic Host Configuration Protocol) – Typically uses UDP. DHCP is used for dynamic IP addressing and operates on a simpler request/response model which does not require the reliability and overhead of TCP.', 'FTP (File Transfer Protocol) – Uses TCP. FTP requires reliable data transfer as files are transmitted, so it uses TCP to ensure that all data reaches its destination correctly.', 'HTTP (Hypertext Transfer Protocol) – Uses TCP. HTTP is used for web traffic which requires reliable transmission, thus TCP is used to ensure the complete and accurate delivery of web pages.', 'SMTP (Simple Mail Transfer Protocol) – Uses TCP. SMTP is used for sending emails which requires reliability; hence, it uses TCP to ensure that email messages are reliably delivered to the recipient server.']`

#### Discrepancy 3: Match the type of threat with the cause. (Not all options are used.)...
- **itexamanswers.net** says: `[]`
- **infraexam.com** says: `['Hardware threats – These are typically associated with physical damage to servers, routers, switches, cabling plants, and workstations. Hardware threats can also include poor handling of key electrical components, which can lead to electrostatic discharge, and issues such as lack of critical spare parts, poor cabling, and poor labeling.', 'Environmental threats – These include temperature extremes (too hot or too cold) or humidity extremes (too wet or too dry). Environmental threats can cause equipment to fail prematurely or operate inefficiently.', 'Electrical threats – These refer to voltage spikes, insufficient supply voltage (brownouts), unconditioned power (noise), and total power loss. These threats can lead to equipment damage or data loss.', 'Maintenance threats – These might include unauthorized access resulting in loss of data. They can also be associated with poor maintenance practices that fail to prevent or predict the failure of systems.']`

#### Discrepancy 4: Refer to the exhibit. PC1 issues an ARP request because it needs to send a packet to PC2. In this scenario, what will ha...
- **itexamanswers.net** says: `['PC2 will send an ARP reply with the PC2 MAC address.']`
- **infraexam.com** says: `['PC2 will send an ARP reply with its MAC address.']`

#### Discrepancy 5: Match each type of frame field to its function. (Not all options are used.)...
- **itexamanswers.net** says: `[]`
- **infraexam.com** says: `['Addressing : This field is responsible for directing the frame toward its destination. In an Ethernet frame, this would correspond to both the source and destination MAC addresses.', 'Error detection : This field checks if the frame has been damaged during the transfer. This corresponds to the Frame Check Sequence (FCS) at the end of an Ethernet frame.', 'Type : This field is used by the Logical Link Control (LLC) to identify the Layer 3 protocol, such as IP. It can indicate what type of payload the frame is carrying.', 'Frame start : This field identifies the beginning of a frame. In Ethernet frames, this is typically the preamble or the start frame delimiter (SFD).']`

#### Discrepancy 6: Which connector is used with twisted-pair cabling in an Ethernet LAN?...
- **itexamanswers.net** says: `[]`
- **infraexam.com** says: `['Answers RJ 45']`

#### Discrepancy 7: Match the header field with the appropriate layer of the OSI model. (Not all options are used.)...
- **itexamanswers.net** says: `[]`
- **infraexam.com** says: `['802.2 header : This refers to the IEEE 802.2 standard for logical link control (LLC) which is part of the Data Link Layer. It provides addressing and control of the data link. It encapsulates the network layer protocol information.', 'FCS (Frame Check Sequence) : The FCS is used for error detection. It’s a part of the trailer in the Ethernet frame, which is a Layer 2 PDU (Protocol Data Unit). It allows the receiving node to detect if the frame was damaged in transit.', 'Destination MAC Address : The MAC address is a hardware address that identifies each device on a local network uniquely. It is used by switches to forward frames to the correct destination on a local network, which is a Layer 2 activity.']`

#### Discrepancy 8: Match each description to its corresponding term. (Not all options are used.)...
- **itexamanswers.net** says: `[]`
- **infraexam.com** says: `['Message encoding : The process of converting information from one format into another acceptable for transmission. Encoding is the preparation of message data for transport across a network, where data is transformed into a suitable format for transmission over the network.', 'Message encapsulation : The process of placing one message format inside another message format. Encapsulation refers to the wrapping of data with protocol information before network transmission, where each layer in the OSI model encapsulates the layer above it.', 'Message sizing typically would match with a description related to determining the size of messages for efficient network transmission, which might involve breaking up a long message into smaller pieces, also known as segmentation.']`

## 📝 Explanation Depth & Quality Comparison
Comparing the explanation lengths for matched questions:

### Modules 1-3
- Average explanation length:
  - **itexamanswers.net**: 757 characters
  - **infraexam.com**: 685 characters
- Number of questions where **infraexam.com** has longer explanation: **21** / 59
- Number of questions where **itexamanswers.net** has longer explanation: **38** / 59

### Modules 4-7
- Average explanation length:
  - **itexamanswers.net**: 775 characters
  - **infraexam.com**: 447 characters
- Number of questions where **infraexam.com** has longer explanation: **12** / 57
- Number of questions where **itexamanswers.net** has longer explanation: **45** / 57

### Modules 8-10
- Average explanation length:
  - **itexamanswers.net**: 907 characters
  - **infraexam.com**: 410 characters
- Number of questions where **infraexam.com** has longer explanation: **7** / 51
- Number of questions where **itexamanswers.net** has longer explanation: **44** / 51

### Modules 11-13
- Average explanation length:
  - **itexamanswers.net**: 675 characters
  - **infraexam.com**: 337 characters
- Number of questions where **infraexam.com** has longer explanation: **2** / 53
- Number of questions where **itexamanswers.net** has longer explanation: **51** / 53

### Modules 14-15
- Average explanation length:
  - **itexamanswers.net**: 756 characters
  - **infraexam.com**: 310 characters
- Number of questions where **infraexam.com** has longer explanation: **2** / 56
- Number of questions where **itexamanswers.net** has longer explanation: **54** / 56

### Modules 16-17
- Average explanation length:
  - **itexamanswers.net**: 614 characters
  - **infraexam.com**: 449 characters
- Number of questions where **infraexam.com** has longer explanation: **18** / 55
- Number of questions where **itexamanswers.net** has longer explanation: **36** / 55

### Practice Final
- Average explanation length:
  - **itexamanswers.net**: 253 characters
  - **infraexam.com**: 240 characters
- Number of questions where **infraexam.com** has longer explanation: **36** / 48
- Number of questions where **itexamanswers.net** has longer explanation: **12** / 48

### Final Exam
- Average explanation length:
  - **itexamanswers.net**: 420 characters
  - **infraexam.com**: 637 characters
- Number of questions where **infraexam.com** has longer explanation: **80** / 143
- Number of questions where **itexamanswers.net** has longer explanation: **50** / 143

