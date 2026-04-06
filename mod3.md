3.8.2 Module Quiz – Protocols and Models Answers
1. What process is used to receive transmitted data and convert it into a readable message?

access control
decoding
encapsulation
flow control
Explanation: Decoding is the process of receiving transmitted data and reversing the encoding process to interpret the information. An example is a person that listens to a voicemail and decodes the sounds to understand the received message.

2. What is done to an IP packet before it is transmitted over the physical medium?

It is tagged with information guaranteeing reliable delivery.
It is segmented into smaller individual pieces.
It is encapsulated into a TCP segment.
It is encapsulated in a Layer 2 frame.
Explanation: When messages are sent on a network, the encapsulation process works from the top of the OSI or TCP/IP model to the bottom. At each layer of the model, the upper layer information is encapsulated into the data field of the next protocol. For example, before an IP packet can be sent, it is encapsulated in a data link frame at Layer 2 so that it can be sent over the physical medium.

3. What process is used to place one message inside another message for transfer from the source to the destination?

access control
decoding
encapsulation
flow control
Explanation: Encapsulation is the process of placing one message format into another message format. An example is how a packet is placed in its entirety into the data field as it is encapsulated into a frame.

4. A web client is sending a request for a webpage to a web server. From the perspective of the client, what is the correct order of the protocol stack that is used to prepare the request for transmission?

HTTP, IP, TCP, Ethernet
HTTP, TCP, IP, Ethernet
Ethernet, TCP, IP, HTTP
Ethernet, IP, TCP, HTTP
Explanation:
1. HTTP governs the way that a web server and client interact.
2. TCP manages individual conversations between web servers and clients.
3. IP is responsible for delivery across the best path to the destination.
4. Ethernet takes the packet from IP and formats it for transmission.

5. What are two benefits of using a layered network model? (Choose two.)

It assists in protocol design.
It speeds up packet delivery.
It prevents designers from creating their own model.
It prevents technology in one layer from affecting other layers.
It ensures a device at one layer can function at the next higher layer.
Explanation: Some vendors have developed their own reference models and protocols. Today, if a device is to communicate on the Internet, the device must use the TCP/IP model. The benefits of using a layered model are as follows:

assists in protocol design
fosters competition between vendors
prevents a technology that functions at one layer from affecting any other layer
provides a common language for describing network functionality
helps in visualizing the interaction between each layer and protocols between each layer
6. What is the purpose of protocols in data communications?

specifying the bandwidth of the channel or medium for each type of communication
specifying the device operating systems that will support the communication
providing the rules required for a specific type of communication to occur
dictating the content of the message sent during communication
Explanation: Protocols provide rules that define how a message is transmitted across a network. Implementation requirements such as electronic and bandwidth details for data communication are specified by standards. Operating systems are not specified by protocols, but will implement protocols. Protocols determine how and when to send a message but they do not control the contents of a message.

7. Which logical address is used for delivery of data to a remote network?

destination MAC address
destination IP address
destination port number
source MAC address
source IP address
Explanation: The destination IP address is used for end-to-end delivery of data to a remote network. The destination MAC address is used for delivery on a local network. The destination port number identifies the application that should process the data at the destination. Source addresses identify the sender of the data.

8. What is the general term that is used to describe a piece of data at any layer of a networking model?

frame
packet
protocol data unit
segment
Explanation: The term protocol data unit (PDU) is used to describe a piece of data at any layer of a networking model. A packet is the PDU at the network layer. A frame is the data link layer PDU. A segment is the PDU at the transport layer.

9. Which two protocols function at the internet layer? (Choose two.)

POP
BOOTP
ICMP
IP
PPP
Explanation: ICMP and IP both function at the internet layer, whereas PPP is a network access layer protocol, and POP and BOOTP are application layer protocols.

10. Which layer of the OSI model defines services to segment and reassemble data for individual communications between end devices?

application
presentation
session
transport
network
Explanation: The OSI model consists of seven layers: application, presentation, session, transport, network, data link, and physical. The transport layer defines services to segment, transfer, and reassemble the data for individual communications between the end devices.

11. Which type of communication will send a message to a group of host destinations simultaneously?

broadcast
multicast
unicast
anycast
Explanation: Multicast is a one-to-many communication where the message is delivered to a specific group of hosts. Broadcast communication is a one-to-all communication. A unicast communication is a one-to-one communication. Anycast is an IPv6 term and is the sending of data in a one-to-nearest communication.

12. Which three acronyms/initialisms represent standards organizations? (Choose three.)

IANA
TCP/IP
IEEE
IETF
OSI
MAC
Explanation: TCP/IP is a protocol stack that contains a lot of other protocols such as HTTP, FTP, and DNS. The TCP/IP protocol stack is required to be used when communicating on the Internet. A MAC address is an address that is burned into an Ethernet network card. OSI is the 7 layer model that is used to explain how networking works.

13. What type of communication will send a message to all devices on a local area network?

broadcast
multicast
unicast
allcast
Explanation: Broadcast communication is a one-to-all communication. A unicast communication is a one-to-one communication. Multicast is a one-to-many communication where the message is delivered to a specific group of hosts. Allcast is not a standard term to describe message delivery.

14. In computer communication, what is the purpose of message encoding?

to convert information to the appropriate form for transmission
to interpret information
to break large messages into smaller frames
negotiate correct timing for successful communication
Explanation: Before a message is sent across a network it must first be encoded. Encoding is the process of converting the data message into another format suitable for transmission across the physical medium. Each bit of the message is encoded into a pattern of sounds, light waves, or electrical impulses depending on the network media over which the bits are transmitted. The destination host receives and decodes the signals in order to interpret the message.

15. Which message delivery option is used when all devices need to receive the same message simultaneously?

duplex
unicast
multicast
broadcast
Explanation: When all devices need to receive the same message simultaneously, the message would be delivered as a broadcast. Unicast delivery occurs when one source host sends a message to one destination host. The sending of the same message from a host to a group of destination hosts is multicast delivery. Duplex communications refers to the ability of the medium to carry messages in both directions.

16. What three requirements are defined by the protocols used in network communcations to allow message transmission across a network? (Choose three.)

connector specifications
message encoding
media selection
message size
delivery options
end-device installation
17. What type of delivery uses data link layer addresses?

remote delivery
local and remote delivery
local delivery
remote delivery using routers
18. What layer of the TCP/IP protocol model determines the best path through the network?

application
transport
internet
network access
