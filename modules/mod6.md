6.4.2 Module Quiz – Data Link Layer Answers
1. What are two services performed by the data link layer of the OSI model? (Choose two.)

It encrypts data packets.
It determines the path to forward packets.
It accepts Layer 3 packets and encapsulates them into frames.
It provides media access control and performs error detection.
It monitors the Layer 2 communication by building a MAC address table.
Explanation: The data link layer is responsible for the exchange of frames between nodes over a physical network media. Specifically the data link layer performs two basic services:

It accepts Layer 3 packets and encapsulates them into frames.
It provides media access control and performs error detection.
Path determination is a service provided at Layer 3. A Layer 2 switch builds a MAC address table as part of its operation, but path determination is not the service that is provided by the data link layer.

2. What does a router do after de-encapsulating a received frame?

determines the best path
de-encapsulates the frame
re-encapsulates the packet into a new frame
forwards the new frame onto the network medium
Explanation: Routers are responsible for encapsulating a frame with a proper format for the physical network media the routers connect. At each hop along the path, a router does the following:
1. Accepts a frame from a medium
2. De-encapsulates the frame
3. Determines the best path to forward the packet
4. Re-encapsulates the packet into a new frame
5. Forwards the new frame appropriate to the medium of that segment of the physical network

3. What attribute of a NIC would place it at the data link layer of the OSI model?

attached Ethernet cable
IP address
MAC address
RJ-45 port
TCP/IP protocol stack
Explanation: The data link layer describes media access and physical addressing. The encoding of a MAC address on a NIC places it at that layer. Ports and cables are placed at the physical layer of the OSI model. IP addresses are placed at the network layer. The TCP/IP protocol stack describes a different model.

4. Although CSMA/CD is still a feature of Ethernet, why is it no longer necessary?

the virtually unlimited availability of IPv6 addresses
the use of CSMA/CA
the use of full-duplex capable Layer 2 switches
the development of half-duplex switch operation
the use of Gigabit Ethernet speeds
Explanation: The use of Layer 2 switches operating in full-duplex mode eliminates collisions, thereby eliminating the need for CSMA/CD.

5. What type of physical topology can be created by connecting all Ethernet cables to a central device?

bus
ring
star
mesh
Explanation: Devices connected to the Ethernet star topology connect to either a hub or a switch.

6. A technician has been asked to develop a physical topology for a network that provides a high level of redundancy. Which physical topology requires that every node is attached to every other node on the network?

bus
hierarchical
mesh
ring
star
Explanation: The mesh topology provides high availability because every node is connected to all other nodes. Mesh topologies can be found in WANs. A partial mesh topology can also be used where some, but not all, end points connect to one another.

7. Which statement describes the half-duplex mode of data transmission?

Data that is transmitted over the network can only flow in one direction.
Data that is transmitted over the network flows in one direction at a time.
Data that is transmitted over the network flows in one direction to many different destinations simultaneously.
Data that is transmitted over the network flows in both directions at the same time.
Explanation: The data that is transmitted over the network can flow using one of three modes:

Simplex – Data can only flow in one direction.
Half-duplex – Data flows in one direction at a time.
Full-duplex – Data flows in both directions at the same time.
8. Which is a function of the Logical Link Control (LLC) sublayer?

to define the media access processes that are performed by the hardware
to provide data link layer addressing
to identify which network layer protocol is being used
to accept segments and package them into data units that are called packets
Explanation: Defining the media access processes that are performed by the hardware and providing data link layer addressing are functions of the MAC sublayer. The data link layer accepts Layer 3 packets and packages them into data units that are called frames.

9. Which data link layer media access control method does Ethernet use with legacy Ethernet hubs?

CSMA/CD
determinism
turn taking
token passing
Explanation: CSMA/CD is used by Ethernet networks. CSMA/CA is used by 802.11-based wireless networks.

10. What are the two sublayers of the OSI model data link layer? (Choose two.)

internet
physical
LLC
transport
MAC
network access
Explanation: The data link layer of the OSI model is divided into two sublayers: the Media Access Control (MAC) sublayer and the Logical Link Control (LLC) sublayer.

11. What method is used to manage contention-based access on a wireless network?

CSMA/CD
priority ordering
CSMA/CA
token passing
Explanation: Carrier sense multiple access with collision avoidance (CSMA/CA) is used with wireless networking technology to mediate media contention. Carrier sense multiple access with collision detection (CSMA/CD) is used with wired Ethernet technology to mediate media contention. Priority ordering and token passing are not used (or not a method) for media access control.

12. What identifier is used at the data link layer to uniquely identify an Ethernet device?

IP address
MAC address
sequence number
TCP port number
UDP port number
Explanation: Ethernet frames are identified at the data link layer by their MAC addresses, which are unique to each NIC. IP addresses are used at the network layer, and TCP and UDP port numbers are used at the transport layer. Sequence numbers are fields in TCP headers.

13. Which two engineering organizations define open standards and protocols that apply to the data link layer? (Choose two.)

Institute of Electrical and Electronics Engineers (IEEE)
Internet Assigned Numbers Authority (IANA)
International Telecommunication Union (ITU)
Electronic Industries Alliance (EIA)
Internet Society (ISOC)
Explanation: The IANA is responsible for overseeing and managing IP address allocation, domain name management, and protocol identifiers. The EIA is an international standards and trade alliance for electronics organizations, and is best known for its standards related to electrical wiring, connectors, and the 19-inch racks used to mount networking equipment. IEEE defines open standards and protocols that apply to the network access layer.

14. Which layer of the OSI model is responsible for specifying the encapsulation method used for specific types of media?

application
transport
data link
physical
Explanation: Encapsulation is a function of the data link layer. Different media types require different data link layer encapsulation.

15. What is true concerning physical and logical topologies?

The logical topology is always the same as the physical topology.
Physical topologies are concerned with how a network transfers frames.
Physical topologies display the IP addressing scheme of each network.
Logical topologies refer to how a network transfers data between devices.
Explanation: Physical topologies show the physical interconnection of devices. Logical topologies show the way the network will transfer data between connected nodes.
