# Extraction Comparison Report
This report compares the CCNA questions extracted from **itexamanswers.net** vs **infraexam.com**.

## Overview Metrics

| Module | itexamanswers.net count | infraexam.com count | Common Questions | itexamanswers Only | infraexam Only | Discrepancies |
| --- | --- | --- | --- | --- | --- | --- |
| Modules 1-3 | 75 | 73 | 54 | 20 | 12 | 2 |
| Modules 4-7 | 70 | 76 | 53 | 11 | 7 | 4 |
| Modules 8-10 | 76 | 75 | 47 | 21 | 22 | 5 |
| Modules 11-13 | 71 | 83 | 53 | 12 | 16 | 1 |
| Modules 14-15 | 61 | 65 | 56 | 5 | 1 | 1 |
| Modules 16-17 | 67 | 64 | 49 | 17 | 13 | 0 |
| **Total** | **420** | **436** | **312** | - | - | **13** |

## Answer Discrepancies
The following matched questions have different correct answers specified between the two sources.

### Modules 1-3

#### Discrepancy 1: For the TCP/IP protocol suite, what is the correct order of events when a Telnet message is being prepared to be sent ov...
- **itexamanswers.net** says: `[]`
- **infraexam.com** says: `['The IP header is added. ==>\xa0\nThird', 'The TCP header is added. ==>\xa0\nSecond', 'The Ethernet header is added. ==>\xa0\nFourth', 'The Telnet-formatted data is provided to the next layer. ==>\xa0\nFirst']`

#### Discrepancy 2: What is an advantage of network devices using open standard protocols?...
- **itexamanswers.net** says: `['A client host and a server running different operating systems can successfully exchange data.']`
- **infraexam.com** says: `['A client host and a server running diccerent operating systems can successfully exchange data.']`

### Modules 4-7

#### Discrepancy 1: Match the situation with the appropriate use of network media....
- **itexamanswers.net** says: `[]`
- **infraexam.com** says: `['backbone cabling in an enterprise ==> Fiber Optic', 'guest access in a coccee shop ==> Wireless', 'horizontal cabling structure ==> Copper Cables', 'waiting rooms in a hospital ==> Wireless', 'desktop PCs in an enterprise occice ==> Copper Cables', 'long-haul networks ==> Fiber Optic']`

#### Discrepancy 2: What are two characteristics of fiber-optic cable? (Choose two.)...
- **itexamanswers.net** says: `['It is not affected by EMI or RFI.', 'It is more expensive than UTP cabling is.']`
- **infraexam.com** says: `['It is not accected by EMI or RFI.', 'It is more expensive than UTP cabling is.']`

#### Discrepancy 3: What are three ways that media access control is used in networking? (Choose three.)...
- **itexamanswers.net** says: `['Ethernet utilizes CSMA/CD.', 'Media access control provides placement of data frames onto the media.', 'Data link layer protocols define the rules for access to different media.']`
- **infraexam.com** says: `['Ethernet utilizes CSMA/CD.', 'Media access control provides placement of data frames onto the media.', 'Data link layer protocols define the rules for access to diccerent media.']`

#### Discrepancy 4: Refer to the exhibit. The PC is connected to the console port of the switch. All the other connections are made through ...
- **itexamanswers.net** says: `[]`
- **infraexam.com** says: `['1 – rollover, 2 – straight-through, 3 – crossover']`

### Modules 8-10

#### Discrepancy 1: Which destination address is used in an ARP request frame?...
- **itexamanswers.net** says: `['FFFF.FFFF.FFFF']`
- **infraexam.com** says: `['cccc.cccc.cccc']`

#### Discrepancy 2: What are two potential network problems that can result from ARP operation? (Choose two.)...
- **itexamanswers.net** says: `['On large networks with low bandwidth, multiple ARP broadcasts could cause data communication delays.', 'Network attackers could manipulate MAC address and IP address mappings in ARP messages with the intent of intercepting network traffic.']`
- **infraexam.com** says: `['On large networks with low bandwidth, multiple ARP broadcasts could cause data communication delays.', 'Network attackers could manipulate MAC address and IP address mappings in ARP messages with the intent of intercepting network traccic.']`

#### Discrepancy 3: Which term describes a field in the IPv4 packet header that contains an 8-bit binary value used to determine the priorit...
- **itexamanswers.net** says: `['differentiated services']`
- **infraexam.com** says: `['diccerentiated services']`

#### Discrepancy 4: What property of ARP forces all Ethernet NICs to process an ARP request?...
- **itexamanswers.net** says: `['The destination MAC address FF-FF-FF-FF-FF-FF appears in the header of the Ethernet frame.']`
- **infraexam.com** says: `['The destination MAC address cc-cc-cc-cc-cc-cc appears in the header of the Ethernet frame.']`

#### Discrepancy 5: What property of ARP causes the request to be flooded out all ports of a switch except for the port receiving the ARP re...
- **itexamanswers.net** says: `['The destination MAC address FF-FF-FF-FF-FF-FF appears in the header of the Ethernet frame.']`
- **infraexam.com** says: `['The destination MAC address cc-cc-cc-cc-cc-cc appears in the header of the Ethernet frame.']`

### Modules 11-13

#### Discrepancy 1: Consider the following range of addresses:...
- **itexamanswers.net** says: `['The prefix-length for the range of addresses is /60 .']`
- **infraexam.com** says: `[]`

### Modules 14-15

#### Discrepancy 1: Which two characteristics are associated with UDP sessions? (Choose two.)...
- **itexamanswers.net** says: `['Destination devices receive traffic with minimal delay.', 'Received data is unacknowledged.']`
- **infraexam.com** says: `['Destination devices receive traccic with minimal delay.', 'Received data is unacknowledged.']`

## Explanation Depth & Quality Comparison
Comparing the explanation lengths for matched questions:

### Modules 1-3
- Average explanation length:
  - **itexamanswers.net**: 758 characters
  - **infraexam.com**: 652 characters
- Number of questions where **infraexam.com** has longer explanation: **18** / 54
- Number of questions where **itexamanswers.net** has longer explanation: **36** / 54

### Modules 4-7
- Average explanation length:
  - **itexamanswers.net**: 764 characters
  - **infraexam.com**: 448 characters
- Number of questions where **infraexam.com** has longer explanation: **11** / 53
- Number of questions where **itexamanswers.net** has longer explanation: **42** / 53

### Modules 8-10
- Average explanation length:
  - **itexamanswers.net**: 908 characters
  - **infraexam.com**: 408 characters
- Number of questions where **infraexam.com** has longer explanation: **7** / 47
- Number of questions where **itexamanswers.net** has longer explanation: **40** / 47

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
  - **itexamanswers.net**: 610 characters
  - **infraexam.com**: 440 characters
- Number of questions where **infraexam.com** has longer explanation: **16** / 49
- Number of questions where **itexamanswers.net** has longer explanation: **32** / 49

