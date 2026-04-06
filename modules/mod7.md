7.5.2 Module Quiz – Ethernet Switching Answers
1. What will a host on an Ethernet network do if it receives a frame with a unicast destination MAC address that does not match its own MAC address?

It will discard the frame.
It will forward the frame to the next host.
It will remove the frame from the media.
It will strip off the data-link frame to check the destination IP address.
Explanation: In an Ethernet network, each NIC in the network checks every arriving frame to see if the destination MAC address in the frame matches its own MAC address. If there is no match, the device discards the frame. If there is a match, the NIC passes the frame up to the next OSI layer.

2. What is auto-MDIX?

a type of Cisco switch
an Ethernet connector type
a type of port on a Cisco switch
a feature that detects Ethernet cable type
Explanation: Auto-MDIX is a feature that is enabled on the latest Cisco switches and that allows the switch to detect and use whatever type of cable is attached to a specific port.​​

3. Which two functions or operations are performed by the MAC sublayer? (Choose two.)

It is responsible for Media Access Control.
It performs the function of NIC driver software.
It adds a header and trailer to form an OSI Layer 2 PDU.
It handles communication between upper and lower layers.
It adds control information to network protocol layer data.
Explanation: The MAC sublayer is the lower of the two data link sublayers and is closest to the physical layer. The two primary functions of the MAC sublayer are to encapsulate the data from the upper layer protocols and to control access to the media.

4. What type of address is 01-00-5E-0A-00-02?

an address that reaches every host inside a local subnet
an address that reaches one specific host
an address that reaches every host in the network
an address that reaches a specific group of hosts
Explanation: The multicast MAC address is a special value that begins with 01-00-5E in hexadecimal. It allows a source device to send a packet to a group of devices.

5. What happens to runt frames received by a Cisco Ethernet switch?

The frame is dropped.
The frame is returned to the originating network device.
The frame is broadcast to all other devices on the same network.
The frame is sent to the default gateway.
Explanation: In an attempt to conserve bandwidth and not forward useless frames, Ethernet devices drop frames that are considered to be runt (less than 64 bytes) or jumbo (greater than 1500 bytes) frames.

6. What are the two sizes (minimum and expected maximum) of an Ethernet frame? (Choose two.)

56 bytes
64 bytes
128 bytes
1024 bytes
1518 bytes
Explanation: The minimum Ethernet frame is 64 bytes. The maximum Ethernet frame is 1518 bytes.  A network technician must know the minimum and maximum frame size in order to recognize runt and jumbo frames.

7. What addressing information is recorded by a switch to build its MAC address table?

the destination Layer 3 address of incoming packets
the destination Layer 2 address of outgoing frames
the source Layer 3 address of outgoing packets
the source Layer 2 address of incoming frames
Explanation: A switch builds a MAC address table by inspecting incoming Layer 2 frames and recording the source MAC address found in the frame header. The discovered and recorded MAC address is then associated with the port used to receive the frame.

8. Which two characteristics describe Ethernet technology? (Choose two.)

It is supported by IEEE 802.3 standards.
It is supported by IEEE 802.5 standards.
It typically uses an average of 16 Mbps for data transfer rates.
It uses unique MAC addresses to ensure that data is sent to the appropriate destination.
It uses a ring topology.
Explanation: The 802.3 Ethernet standard specifies that a network implement the CSMA/CD access control method. Each node on the network has a unique MAC address for communication purposes.

Form 2:

It is supported by IEEE 802.3 standards.
It is supported by IEEE 802.5 standards.
It typically uses an average of 16 Mb/s for data transfer rates.
It uses the CSMA/CD access control method.
It uses a ring topology.
Explanation: The 802.3 Ethernet standard specifies that a network implement the CSMA/CD access control method.

9. What statement describes a characteristic of MAC addresses?

They must be globally unique.
They are only routable within the private network.
They are added as part of a Layer 3 PDU.
They have a 32-bit binary value.
Explanation: Any vendor selling Ethernet devices must register with the IEEE to ensure the vendor is assigned a unique 24-bit code, which becomes the first 24 bits of the MAC address. The last 24 bits of the MAC address are generated per hardware device. This helps to ensure globally unique addresses for each Ethernet device.

10. What is the special value assigned to the first 24 bits of a multicast MAC address transporting an IPv4 packet?

01-5E-00
FF-00-5E
FF-FF-FF
01-00-5E
Explanation: Just as with multicast IP addresses, there is a special assigned value for multicast MAC addresses. The first 24 bits are set in hex to: 01-00-5E. The remaining 6 hex digits are derived from the lower 23 bits of the IP multicast.

11. Which network device makes forwarding decisions based on the destination MAC address that is contained in the frame?

repeater
hub
switch
router
Explanation: Switches are the central connection point for a LAN and they maintain a MAC address table. The MAC address table has a port number associated with a MAC address for each particular device. The switch inspects a frame to look at the destination MAC address. The switch then looks in its MAC address table and if that MAC address is found, the switch forwards the data to the port that is associated with that particular MAC address.

12. Which network device has the primary function to send data to a specific destination based on the information found in the MAC address table?

hub
router
switch
modem
Explanation: If a MAC address is found in the MAC address table, then data is sent to the associated switch port. If the MAC address is not found in the MAC address table, the data is sent to all switch ports that have devices attached to the same network.

13. Which function or operation is performed by the LLC sublayer?

It performs data encapsulation.
It communicates with upper protocol layers.
It is responsible for media access control.
It adds a header and trailer to a packet to form an OSI Layer 2 PDU.
Explanation: The Ethernet LLC sublayer has the responsibility to handle communication between the upper layers and the lower layers of the protocol stack. The LLC is implemented in software and communicates with the upper layers of the application to transition the packet to the lower layers for delivery.

14. Which statement is true about MAC addresses?

MAC addresses are implemented by software.
A NIC only needs a MAC address if connected to a WAN.
The first three bytes are used by the vendor assigned OUI.
The ISO is responsible for MAC addresses regulations.
Explanation: A MAC address is composed of 6 bytes. The first 3 bytes are used for vendor identification and the last 3 bytes must be assigned a unique value within the same OUI. MAC addresses are implemented in hardware. A NIC needs a MAC address to communicate over the LAN. The IEEE regulates the MAC addresses.
