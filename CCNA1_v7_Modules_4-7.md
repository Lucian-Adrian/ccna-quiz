# CCNA 1 v7 Modules 4 – 7: Ethernet Concepts Exam Answers

Total Questions: 70

---

## Question 1

What is the purpose of the OSI physical layer?

- [ ] controlling access to media
- [x] **transmitting bits across the local media**
- [ ] performing error detection on received frames
- [ ] exchanging frames between nodes over physical network media

> [!NOTE]
> **Explanation:** **Correct Answer:** transmitting bits across the local media

**Concept & Details:**
* The **Physical Layer** (Layer 1) of the OSI model is responsible for physically transmitting data (as raw bits) across the physical network media (copper cables, fiber-optic lines, or wireless signals). It converts the Layer 2 frames into electrical, optical, or electromagnetic signals that can be sent over the media.
* **Why other options are incorrect:**
  * **controlling access to media / exchanging frames:** These are functions of the **Data Link Layer** (Layer 2) of the OSI model, specifically the MAC sublayer.
  * **performing error detection:** This is also a function of the **Data Link Layer**, which calculates and checks the Frame Check Sequence (FCS) in the frame trailer.

---

## Question 2

Why are two strands of fiber used for a single fiber optic connection?

- [ ] The two strands allow the data to travel for longer distances without degrading.
- [ ] They prevent crosstalk from causing interference on the connection.
- [ ] They increase the speed at which the data can travel.
- [x] **They allow for full-duplex connectivity.**

> [!NOTE]
> **Explanation:** **Correct Answer:** They allow for full-duplex connectivity.

**Concept & Details:**
* A single strand of traditional fiber-optic cable can only transmit light in one direction at a time (simplex). Therefore, to allow devices to transmit and receive data simultaneously (**full-duplex connectivity**), a standard fiber-optic link requires **two strands** of fiber: one strand to transmit data from device A to device B, and a second strand to transmit data from device B to device A.
* **Why other options are incorrect:**
  * Fiber-optic cable does not use multiple strands to increase distance or prevent crosstalk (light signals are already immune to electromagnetic crosstalk).
  * While multiple fibers can be bundled to increase aggregate bandwidth, the primary reason for using two strands in a standard interface configuration is simply to allow full-duplex (two-way) transmission.

---

## Question 3

Which characteristic describes crosstalk?

- [ ] the distortion of the network signal from fluorescent lighting
- [x] **the distortion of the transmitted messages from signals carried in adjacent wires**
- [ ] the weakening of the network signal over long cable lengths
- [ ] the loss of wireless signal over excessive distance from the access point

> [!NOTE]
> **Explanation:** **Correct Answer:** the distortion of the transmitted messages from signals carried in adjacent wires

**Concept & Details:**
* **Crosstalk** is a type of signal interference that occurs in copper cabling when the electrical signal flowing through one wire pair creates an electromagnetic field that spills over and interferes with the signal running in an adjacent wire pair. This disrupts the signal and can corrupt data.
* **Why other options are incorrect:**
  * Signal distortion from fluorescent lighting is referred to as **Electromagnetic Interference (EMI)**.
  * The weakening of a network signal over distance is called **attenuation**.
  * The loss of wireless signal over distance is due to free-space path loss and absorption, not crosstalk.

---

## Question 4

Which procedure is used to reduce the effect of crosstalk in copper cables?

- [ ] requiring proper grounding connections
- [x] **twisting opposing circuit wire pairs together**
- [ ] wrapping the bundle of wires with metallic shielding
- [ ] designing a cable infrastructure to avoid crosstalk interference
- [ ] avoiding sharp bends during installation

> [!NOTE]
> **Explanation:** **Correct Answer:** twisting opposing circuit wire pairs together

**Concept & Details:**
* In copper cabling (like UTP), **twisting opposing circuit wire pairs together** is the primary method used to reduce the effect of crosstalk. When the wires are twisted, the electromagnetic fields produced by the current in the wires cancel each other out, which minimizes interference with adjacent wire pairs (this is known as cancellation).
* **Why other options are incorrect:**
  * **proper grounding / metallic shielding:** Primarily used to reduce external Electromagnetic Interference (EMI), not local crosstalk between internal wire pairs.
  * **avoiding sharp bends:** Prevents physical damage and attenuation but does not directly mitigate crosstalk.

---

## Question 5

Match the situation with the appropriate use of network media.

| Copper Cables                           | Fiber optic                       | Wireless                      |
| --------------------------------------- | --------------------------------- | ----------------------------- |
| horizontal cabling structure            | backbone cabling in an enterprise | guest access in a coffee shop |
| desktop PCs in offices in an enterprise | long-haul networks                | waiting rooms in a hospital   |

> [!NOTE]
> **Explanation:** **Correct Answer:**
* **Copper Cables** matches with **horizontal cabling structure** AND **desktop PCs in offices in an enterprise**
* **Fiber optic** matches with **backbone cabling in an enterprise** AND **long-haul networks**
* **Wireless** matches with **guest access in a coffee shop** AND **waiting rooms in a hospital**

**Concept & Details:**
* **Copper Cables (specifically UTP):** Best suited for connecting desktop PCs in office workspaces and horizontal cabling (run from wiring closets to individual desktop drops) because they are cheap, easy to install, and work great for distances up to 100 meters.
* **Fiber-Optic Cables:** Best suited for high-speed enterprise backbone links and long-haul telecommunications networks because they support massive bandwidth, are immune to EMI, and can carry signals over kilometers without significant attenuation.
* **Wireless Media:** Best suited for customer spaces, coffee shops, and hospital waiting rooms, where users need flexible, cable-free connection for portable devices (smartphones, tablets).

---

## Question 6

A network administrator is measuring the transfer of bits across the company backbone for a mission critical financial application. The administrator notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)

- [x] **the amount of traffic that is currently crossing the network**
- [ ] the sophistication of the encapsulation method applied to the data
- [x] **the type of traffic that is crossing the network**
- [x] **the latency that is created by the number of network devices that the data is crossing**
- [ ] the bandwidth of the WAN connection to the Internet
- [ ] the reliability of the gigabit Ethernet infrastructure of the backbone

> [!NOTE]
> **Explanation:** **Correct Answer:** the amount of traffic that is currently crossing the network, the type of traffic that is crossing the network, the latency that is created by the number of network devices that the data is crossing

**Concept & Details:**
* **Bandwidth** is the theoretical maximum rate at which data can be transferred over a link. **Throughput** is the actual rate of successful data delivery over that link at a given time. Throughput is typically lower than bandwidth due to several real-world factors:
  1. **Amount of traffic:** Network congestion (other devices sending data at the same time) reduces the portion of bandwidth available to a single application.
  2. **Type of traffic:** Different types of data (e.g., small voice packets vs. large file downloads) affect how efficiently buffers and links are utilized.
  3. **Latency:** Delays introduced by packets traveling through routers, switches, and other network devices slow down the round-trip time, which reduces the active throughput.
* **Why other options are incorrect:**
  * The sophistication of the encapsulation method is standardized (headers have fixed sizes) and does not dynamically change throughput in the way network congestion does.
  * The WAN connection bandwidth or general gigabit Ethernet infrastructure specs represent maximum capacities, not the dynamic factors that lower current active throughput.

---

## Question 7

What are two characteristics of fiber-optic cable? (Choose two.)

- [x] **It is not affected by EMI or RFI.**
- [ ] Each pair of cables is wrapped in metallic foil.
- [ ] It combines the technique of cancellation, shielding, and twisting to protect data.
- [ ] It typically contains 4 pairs of fiber-optic wires.
- [x] **It is more expensive than UTP cabling is.**

> [!NOTE]
> **Explanation:** **Correct Answer:** It is not affected by EMI or RFI., It is more expensive than UTP cabling is.

**Concept & Details:**
* **Fiber-optic cable** has several key benefits and trade-offs:
  1. **Immunity to Interference:** Because it transmits data as pulses of light through glass strands rather than electrical signals through copper, it is completely unaffected by **EMI (Electromagnetic Interference)** or **RFI (Radio Frequency Interference)**.
  2. **Cost:** Fiber cabling, the specialized transceivers required, and the installation/termination processes are more expensive than standard UTP (Unshielded Twisted Pair) copper cabling.
* **Why other options are incorrect:**
  * Twisting, wrapping in metallic foil (shielding), and cancellation techniques are copper-cabling strategies (STP/UTP) to combat crosstalk and interference, not fiber-optic technologies.
  * Fiber-optic cables do not contain twisted pairs. They contain individual glass cores.

---

## Question 8

What is a primary role of the Physical layer in transmitting data on the network?

- [x] **create the signals that represent the bits in each frame on to the media**
- [ ] provide physical addressing to the devices
- [ ] determine the path packets take through the network
- [ ] control data access to the media

> [!NOTE]
> **Explanation:** **Correct Answer:** create the signals that represent the bits in each frame on to the media

**Concept & Details:**
* The primary role of the **Physical Layer** (Layer 1) is to take a complete frame from the Data Link Layer (Layer 2), convert the binary bits (1s and 0s) into physical signals (electrical voltage, light pulses, or radio waves), and transmit those signals across the physical media.
* **Why other options are incorrect:**
  * **provide physical addressing:** This is done at the Data Link Layer (Layer 2) using MAC addresses.
  * **determine the path:** This is done at the Network Layer (Layer 3) using routing tables and IP addresses.
  * **control data access to media:** This is handled by the MAC sublayer of the Data Link Layer (Layer 2).

---

## Question 9

With the use of unshielded twisted-pair copper wire in a network, what causes crosstalk within the cable pairs?

- [x] **the magnetic field around the adjacent pairs of wire**
- [ ] the use of braided wire to shield the adjacent wire pairs
- [ ] the reflection of the electrical wave back from the far end of the cable
- [ ] the collision caused by two nodes trying to use the media simultaneously

> [!NOTE]
> **Explanation:** **Correct Answer:** the magnetic field around the adjacent pairs of wire

**Concept & Details:**
* In **UTP (Unshielded Twisted Pair)** copper cabling, when electric current flows through a wire, it generates a small electromagnetic/magnetic field around that wire. When wire pairs are run closely alongside one another inside the cable bundle, these magnetic fields leak into adjacent wires, inducing a false signal (crosstalk).
* **Why other options are incorrect:**
  * Braided wire shielding is used in STP (Shielded Twisted Pair) and coaxial cables to *prevent* interference, not cause it. UTP does not have this shielding.
  * The reflection of waves is a physical impedance problem (structural return loss), not crosstalk.
  * Collisions are a media access issue (CSMA/CD) that happens when two devices transmit at the same time, not a physical electromagnetic leakage.

---

## Question 10

Refer to the graphic. What type of cabling is shown?

- [ ] STP
- [ ] UTP
- [ ] coax
- [x] **fiber**

> [!NOTE]
> **Explanation:** **Correct Answer:** fiber

**Concept & Details:**
* Fiber-optic cable consists of a thin, transparent glass core surrounded by cladding, buffering materials, and an outer protective jacket. In CCNA diagrams, fiber-optic cable is easily identified by the presence of dual connectors (since two strands are used for transmit/receive), thin glass cores, or specialized connectors like SC, LC, or ST.
* **Why other options are incorrect:**
  * **UTP (Unshielded Twisted Pair):** Identified by four pairs of color-coded twisted copper wires with no shielding.
  * **STP (Shielded Twisted Pair):** Identified by twisted wire pairs wrapped in metal foil shielding.
  * **coax (Coaxial):** Identified by a single central copper conductor surrounded by thick insulation, a woven metal shield, and a single round connector (like a BNC or F-type connector).

---

## Question 11

In addition to the cable length, what two factors could interfere with the communication carried over UTP cables? (Choose two.)

- [x] **crosstalk**
- [ ] bandwidth
- [ ] size of the network
- [ ] signal modulation technique
- [x] **electromagnetic interference**

> [!NOTE]
> **Explanation:** **Correct Answer:** crosstalk, electromagnetic interference

**Concept & Details:**
* Copper media uses electrical pulses to transmit data, making it highly susceptible to signal degradation. The two major types of electrical interference are:
  1. **Crosstalk:** Interference caused by the magnetic fields of signals in adjacent wires inside the same cable bundle.
  2. **Electromagnetic Interference (EMI):** Interference from external sources like motors, fluorescent lights, or power lines.
* **Why other options are incorrect:**
  * **Bandwidth:** Represents the capacity of the link, not an interfering force.
  * **Size of the network / modulation technique:** These are architectural features and transmission methods, not physical interference sources.

---

## Question 12

Refer to the graphic. What type of cabling is shown?

- [ ] STP
- [x] **UTP**
- [ ] coax
- [ ] fiber

> [!NOTE]
> **Explanation:** **Correct Answer:** UTP

**Concept & Details:**
* **UTP (Unshielded Twisted Pair)** is the most common LAN cabling technology. It consists of four pairs of color-coded copper wires twisted together inside a simple plastic sheath, with no metallic shielding or foil wraps.
* **Why other options are incorrect:**
  * **STP:** Uses shielding foil around the pairs.
  * **coax:** A single copper conductor with a thick shield.
  * **fiber:** Uses light pulses through glass strands instead of copper wires.

---

## Question 13

Which two devices commonly affect wireless networks? (Choose two.)

- [ ] Blu-ray players
- [ ] home theaters
- [x] **cordless phones**
- [x] **microwaves**
- [ ] incandescent light bulbs
- [ ] external hard drives

> [!NOTE]
> **Explanation:** **Correct Answer:** cordless phones, microwaves

**Concept & Details:**
* Wireless LANs (Wi-Fi) transmit data using the unlicensed **2.4 GHz and 5 GHz** radio frequency bands. Other household appliances operating in these same frequency bands can cause **Radio Frequency Interference (RFI)**, degrading Wi-Fi signals.
  1. **Microwaves:** Leak electromagnetic waves in the 2.4 GHz spectrum when operating.
  2. **Cordless phones:** Many older or SOHO cordless phone systems transmit using the 2.4 GHz frequency band, causing direct contention with Wi-Fi routers.
* **Why other options are incorrect:**
  * Blu-ray players, home theaters, incandescent light bulbs, and external hard drives do not normally transmit high-power radio signals in the 2.4 GHz or 5 GHz bands, meaning they do not cause wireless signal interference.

---

## Question 14

Which two statements describe the services provided by the data link layer? (Choose two.)

- [ ] It defines the end-to-end delivery addressing scheme.
- [ ] It maintains the path between the source and destination devices during the data transmission.
- [x] **It manages the access of frames to the network media.**
- [ ] It provides reliable delivery through link establishment and flow control.
- [ ] It ensures that application data will be transmitted according to the prioritization.
- [x] **It packages various Layer 3 PDUs into a frame format that is compatible with the network interface.**

> [!NOTE]
> **Explanation:** **Correct Answer:** It manages the access of frames to the network media., It packages various Layer 3 PDUs into a frame format that is compatible with the network interface.

**Concept & Details:**
* The **Data Link Layer** (Layer 2) provides two primary functions, separated into sublayers:
  1. **LLC (Logical Link Control):** Packages the Layer 3 packets (like IPv4 or IPv6) into a standardized frame format suitable for the specific network interface and physical media.
  2. **MAC (Media Access Control):** Controls how frames are placed on and retrieved from the physical medium (managing media access).
* **Why other options are incorrect:**
  * **end-to-end addressing / path maintenance:** These are functions of the **Network Layer** (Layer 3) using IP addresses.
  * **reliable delivery via flow control:** Primarily handled at the **Transport Layer** (Layer 4) by protocols like TCP.
  * **data prioritization:** Handled by QoS protocols operating across Layers 3 and 4.

---

## Question 15

What is the function of the CRC value that is found in the FCS field of a frame?

- [x] **to verify the integrity of the received frame**
- [ ] to verify the physical address in the frame
- [ ] to verify the logical address in the frame
- [ ] to compute the checksum header for the data field in the frame

> [!NOTE]
> **Explanation:** **Correct Answer:** to verify the integrity of the received frame

**Concept & Details:**
* The **FCS (Frame Check Sequence)** field in a frame trailer is used for error detection. The sender calculates a mathematical value based on the frame contents using an algorithm called **CRC (Cyclic Redundancy Check)** and places this value in the FCS field. When the receiver gets the frame, it recalculates the CRC and compares it to the FCS value. If they match, the frame is validated. If they don't, it means the frame was corrupted in transit, and the receiver discards it.
* **Why other options are incorrect:**
  * The CRC does not verify physical MAC addresses or logical IP addresses.
  * It does not compute headers; it only verifies the integrity of the entire received frame.

---

## Question 16

What is contained in the trailer of a data-link frame?

- [ ] logical address
- [ ] physical address
- [ ] data
- [x] **error detection**

> [!NOTE]
> **Explanation:** **Correct Answer:** error detection

**Concept & Details:**
* A Data Link Layer frame is structured with a **Header**, the **Data payload**, and a **Trailer**. The trailer is placed at the end of the frame and contains **error detection** information (specifically the FCS/CRC field) to help the receiving NIC confirm the frame was not corrupted during transmission.
* **Why other options are incorrect:**
  * **logical address:** IP addresses are in the Layer 3 header.
  * **physical address:** MAC addresses are in the Layer 2 header.
  * **data:** The packet/payload is in the central body of the frame, between the header and trailer.

---

## Question 17

Which statement describes a characteristic of the frame header fields of the data link layer?

- [ ] They all include the flow control and logical connection fields.
- [ ] Ethernet frame header fields contain Layer 3 source and destination addresses.
- [x] **They vary depending on protocols.**
- [ ] They include information on user applications.

> [!NOTE]
> **Explanation:** **Correct Answer:** They vary depending on protocols.

**Concept & Details:**
* While all Data Link Layer (Layer 2) protocols package Layer 3 packets inside a frame, the specific structure of the frame and the fields included in the **header vary depending on the protocol** being used (such as Ethernet, Wi-Fi, PPP, or HDLC). Each protocol is tailored to access a specific type of media (e.g., Ethernet for copper cables, 802.11 for wireless).
* **Why other options are incorrect:**
  * Not all Layer 2 protocols include flow control or logical connection fields in their headers.
  * Ethernet frame headers contain Layer 2 physical addresses (MAC addresses), not Layer 3 logical IP addresses.
  * User application information is managed at the Application Layer (Layer 7) and is inside the data payload, not the frame header.

---

## Question 18

A network team is comparing physical WAN topologies for connecting remote sites to a headquarters building. Which topology provides high availability and connects some, but not all, remote sites?

- [ ] mesh
- [x] **partial mesh**
- [ ] hub and spoke
- [ ] point-to-point

> [!NOTE]
> **Explanation:** **Correct Answer:** partial mesh

**Concept & Details:**
* In a WAN topology comparison:
  * A **partial mesh** topology connects some remote sites together and to the headquarters, but not all. This provides a balance of redundant paths (high availability) and lower cost since you don't need to purchase links connecting every single site.
* **Why other options are incorrect:**
  * **mesh (full mesh):** Connects *every* site directly to *every other* site. This provides the highest availability but is very expensive and complex.
  * **hub and spoke:** Connects all remote sites (spokes) to a single central headquarters (hub). It does not provide high availability because if the hub or a single link fails, remote sites cannot communicate.
  * **point-to-point:** A direct link connecting exactly two devices.

---

## Question 19

Which two fields or features does Ethernet examine to determine if a received frame is passed to the data link layer or discarded by the NIC? (Choose two.)

- [ ] auto-MDIX
- [ ] CEF
- [x] **Frame Check Sequence**
- [x] **minimum frame size**
- [ ] source MAC address

> [!NOTE]
> **Explanation:** **Correct Answer:** Frame Check Sequence, minimum frame size

**Concept & Details:**
* When an Ethernet NIC receives a frame, it performs basic filtering to ensure validity:
  1. **Minimum frame size:** The frame must be at least 64 bytes long. Any frame smaller than 64 bytes is considered a collision fragment or "runt frame" and is automatically discarded.
  2. **Frame Check Sequence (FCS):** The NIC performs a CRC check. If the calculated CRC doesn't match the FCS value in the trailer, the frame has transmission errors and is discarded.
* **Why other options are incorrect:**
  * **auto-MDIX:** A Layer 1 feature that automatically adjusts transceiver cabling pinouts.
  * **CEF (Cisco Express Forwarding):** A Layer 3 switching/routing table lookup mechanism.
  * **source MAC address:** Used to build the switch's MAC address table, not to determine if a frame is structurally valid or corrupted.

---

## Question 20

Which media communication type does not require media arbitration in the data link layer?

- [ ] deterministic
- [ ] half-duplex
- [x] **full-duplex**
- [ ] controlled access

> [!NOTE]
> **Explanation:** **Correct Answer:** full-duplex

**Concept & Details:**
* **Media arbitration** is the process of regulating which device can transmit on the physical medium to prevent collisions.
  * In a **full-duplex** connection, the link has dedicated transmit and receive paths. Because a device can send and receive data at the same time without the risk of collisions, **no media arbitration** is required.
* **Why other options are incorrect:**
  * **half-duplex:** Requires arbitration (like CSMA/CD) because devices share the same channel and cannot transmit and receive simultaneously.
  * **deterministic / controlled access:** Media access methods where devices must wait for their turn (e.g., Token Ring), which is a form of arbitration.

---

## Question 21

Which statement describes an extended star topology?

- [x] **End devices connect to a central intermediate device, which in turn connects to other central intermediate devices.**
- [ ] End devices are connected together by a bus and each bus connects to a central intermediate device.
- [ ] Each end system is connected to its respective neighbor via an intermediate device.
- [ ] All end and intermediate devices are connected in a chain to each other.

> [!NOTE]
> **Explanation:** **Correct Answer:** End devices connect to a central intermediate device, which in turn connects to other central intermediate devices.

**Concept & Details:**
* In a **star topology**, multiple end devices connect to a single central switch or hub. An **extended star topology** expands this concept by connecting those central switches/hubs to a main core switch. This creates a tree-like hierarchy that is standard in modern LAN designs.
* **Why other options are incorrect:**
  * A bus network description describes a legacy bus or hybrid bus-star topology.
  * Connecting neighbors in a chain describes a physical **ring** or **daisy chain** topology.

---

## Question 22

What is a characteristic of the LLC sublayer?

- [ ] It provides the logical addressing required that identifies the device.
- [ ] It provides delimitation of data according to the physical signaling requirements of the medium.
- [x] **It places information in the frame allowing multiple Layer 3 protocols to use the same network interface and media.**
- [ ] It defines software processes that provide services to the physical layer.

> [!NOTE]
> **Explanation:** **Correct Answer:** It places information in the frame allowing multiple Layer 3 protocols to use the same network interface and media.

**Concept & Details:**
* The **LLC (Logical Link Control)** sublayer of the Data Link Layer (IEEE 802.2 standard) acts as an interface between the upper Network Layer protocols and the lower MAC sublayer hardware. It adds control information to the frame to identify which Layer 3 protocol (such as IPv4, IPv6, or ARP) is carrying the payload, allowing them to share the same physical network card and media.
* **Why other options are incorrect:**
  * Logical addressing (IP) is handled by the Network Layer (Layer 3).
  * Data delimitation and physical signaling rules are handled by the MAC sublayer and the Physical Layer.
  * The LLC sublayer provides services to the Network Layer (above it), not the Physical Layer (below it).

---

## Question 23

What are three ways that media access control is used in networking? (Choose three.)

- [x] **Ethernet utilizes CSMA/CD.**
- [x] **Media access control provides placement of data frames onto the media.**
- [ ] Contention-based access is also known as deterministic.
- [ ] 802.11 utilizes CSMA/CD.
- [x] **Data link layer protocols define the rules for access to different media.**
- [ ] Networks with controlled access have reduced performance due to data collisions.

> [!NOTE]
> **Explanation:** **Correct Answer:** Ethernet utilizes CSMA/CD., Media access control provides placement of data frames onto the media., Data link layer protocols define the rules for access to different media.

**Concept & Details:**
* Media Access Control (MAC) governs how frames are put onto the network media:
  1. **Ethernet utilizes CSMA/CD:** Wired half-duplex Ethernet uses Carrier Sense Multiple Access with Collision Detection to regulate media access.
  2. **MAC provides placement:** The MAC sublayer is physically responsible for placing frames onto and taking them off the media.
  3. **Rules for different media:** Layer 2 protocols (like Ethernet, Wi-Fi, HDLC) establish the rules for how devices access copper, fiber, or wireless media.
* **Why other options are incorrect:**
  * Contention-based access is non-deterministic (devices contend/fight for access), whereas controlled access (like Token Ring) is deterministic.
  * **802.11 (Wi-Fi)** wireless networks use **CSMA/CA** (Collision Avoidance), not CSMA/CD.
  * Controlled access networks do not experience collisions because devices take turns.

---

## Question 24

During the encapsulation process, what occurs at the data link layer for a PC connected to an Ethernet network?

- [ ] An IP address is added.
- [ ] The logical address is added.
- [x] **The physical address is added.**
- [ ] The process port number is added.

> [!NOTE]
> **Explanation:** **Correct Answer:** The physical address is added.

**Concept & Details:**
* When a packet moves down to the **Data Link Layer** (Layer 2) during encapsulation on an Ethernet network, the NIC wraps the packet in a frame. During this step, the Layer 2 header is built, and the **physical addresses** (the source MAC address of the sender and the destination MAC address of the receiver/next-hop router) are added.
* **Why other options are incorrect:**
  * **IP address / logical address:** Added at the Network Layer (Layer 3).
  * **process port number:** Added at the Transport Layer (Layer 4).

---

## Question 25

What three items are contained in an Ethernet header and trailer? (Choose three.)

- [ ] source IP address
- [x] **source MAC address**
- [ ] destination IP address
- [x] **destination MAC address**
- [x] **error-checking information**

> [!NOTE]
> **Explanation:** **Correct Answer:** source MAC address, destination MAC address, error-checking information

**Concept & Details:**
* The Ethernet frame format consists of:
  * **Header:** Contains the Preamble, Start Frame Delimiter, **Destination MAC address**, **Source MAC address**, and Type/Length field.
  * **Trailer:** Contains the Frame Check Sequence (FCS) field, which holds the **error-checking information** (CRC).
* **Why other options are incorrect:**
  * Source and destination IP addresses are Layer 3 logical addresses and are contained in the IP header of the packet, not the Ethernet (Layer 2) header/trailer.

---

## Question 26

What type of communication rule would best describe CSMA/CD?

- [x] **access method**
- [ ] flow control
- [ ] message encapsulation
- [ ] message encoding

> [!NOTE]
> **Explanation:** **Correct Answer:** access method

**Concept & Details:**
* **CSMA/CD** stands for **Carrier Sense Multiple Access with Collision Detection**. It is a media **access method** used on legacy half-duplex Ethernet networks. It defines the rules that determine how a device detects if the transmission medium is clear and when it is allowed to transmit data, and how it handles collisions when two devices transmit at the same time.
* **Why other options are incorrect:**
  * **flow control:** Manages the rate of data transfer between two devices (like sliding windows in TCP) to prevent the receiver from being overwhelmed, not how media access is negotiated.
  * **message encapsulation:** The process of adding headers and trailers to data as it moves down the layers of the protocol stack.
  * **message encoding:** Converting bits into physical signals (light, electricity, radio) for transmission.

---

## Question 27

Which three basic parts are common to all frame types supported by the data link layer? (Choose three.)

- [x] **header**
- [ ] type field
- [ ] MTU size
- [x] **data**
- [x] **trailer**
- [ ] CRC value

> [!NOTE]
> **Explanation:** **Correct Answer:** header, data, trailer

**Concept & Details:**
* While different Data Link Layer (Layer 2) protocols (like Ethernet, PPP, HDLC, Frame Relay, and Wi-Fi) have different frame structures, **all** Layer 2 frames share three basic structural components:
  1. **Header:** Contains control information such as addressing (MAC addresses) and starting indicators.
  2. **Data:** Contains the actual payload (the Layer 3 packet).
  3. **Trailer:** Contains error-checking information (FCS/CRC) and ending indicators.
* **Why other options are incorrect:**
  * The **type field** and **CRC value** are specific fields *inside* the header and trailer, not one of the three primary top-level parts of a frame.
  * **MTU (Maximum Transmission Unit) size** is a parameter/limit that defines the maximum size of a packet, not a physical part of the frame structure.

---

## Question 28

Which statement is true about the CSMA/CD access method that is used in Ethernet?

- [ ] When a device hears a carrier signal and transmits, a collision cannot occur.
- [ ] A jamming signal causes only devices that caused the collision to execute a backoff algorithm.
- [x] **All network devices must listen before transmitting.**
- [ ] Devices involved in a collision get priority to transmit after the backoff period.

> [!NOTE]
> **Explanation:** **Correct Answer:** All network devices must listen before transmitting.

**Concept & Details:**
* In **CSMA/CD (Carrier Sense Multiple Access with Collision Detection)**, the "Carrier Sense" part means that **all network devices must listen (sense the medium) before transmitting** to verify that no other device is currently sending data. If the medium is busy, the device waits.
* **Why other options are incorrect:**
  * Sensed silence doesn't guarantee no collision because another device could transmit at almost the same instant (due to propagation delay).
  * A **jamming signal** is sent to alert *all* devices on the collision domain that a collision has occurred, causing *all* listening devices to stop and execute a backoff algorithm.
  * Devices involved in a collision do not get priority; they generate a random backoff time, so they might not transmit first.

---

## Question 29

What is the auto-MDIX feature on a switch?

- [ ] the automatic configuration of an interface for 10/100/1000 Mb/s operation
- [x] **the automatic configuration of an interface for a straight-through or a crossover Ethernet cable connection**
- [ ] the automatic configuration of full-duplex operation over a single Ethernet copper or optical cable
- [ ] the ability to turn a switch interface on or off accordingly if an active connection is detected

> [!NOTE]
> **Explanation:** **Correct Answer:** the automatic configuration of an interface for a straight-through or a crossover Ethernet cable connection

**Concept & Details:**
* **auto-MDIX** stands for **Automatic Medium-Dependent Interface Crossover**. It is a feature on modern switches that automatically detects the required pin configuration (transmit/receive pairs) for an Ethernet connection. This allows the switch to work properly using either a standard straight-through or a crossover cable, regardless of the type of device connected at the other end.
* **Why other options are incorrect:**
  * Auto-negotiation of speed (10/100/1000 Mb/s) and duplex mode (half/full duplex) are separate negotiation processes, not auto-MDIX.
  * Auto-MDIX does not turn interfaces on or off based on active connection detection.

---

## Question 30

Refer to the exhibit. What is the destination MAC address of the Ethernet frame as it leaves the web server if the final destination is PC1?

![exhibit](https://itexamanswers.net/wp-content/uploads/2019/12/i209881v1n2_209881.png)

- [ ] 00-60-2F-3A-07-AA
- [ ] 00-60-2F-3A-07-BB
- [x] **00-60-2F-3A-07-CC**
- [ ] 00-60-2F-3A-07-DD

> [!NOTE]
> **Explanation:** **Correct Answer:** 00-60-2F-3A-07-CC

**Concept & Details:**
* When a host (like the web server) sends data to a destination on a **different network** (like PC1):
  1. The destination IP address in the packet remains that of the final host (PC1).
  2. The destination MAC address in the Ethernet frame must be the MAC address of the **default gateway** (the local router interface, RouterB), which in this lab corresponds to `00-60-2F-3A-07-CC`.
  3. The router will receive the frame, strip the Ethernet header, inspect the routing table, and rebuild a new frame with the destination MAC of the next hop or the target PC.
* **Why other options are incorrect:**
  * The web server cannot use PC1's MAC address directly because PC1 is on a remote subnet and Layer 2 frames cannot cross routers.
  * The web server cannot use its own MAC or SwitchB's MAC as the destination for routing.

---

## Question 31

A Layer 2 switch is used to switch incoming frames from a 1000BASE-T port to a port connected to a 100Base-T network. Which method of memory buffering would work best for this task?

- [ ] port-based buffering
- [ ] level 1 cache buffering
- [x] **shared memory buffering**
- [ ] fixed configuration buffering

> [!NOTE]
> **Explanation:** **Correct Answer:** shared memory buffering

**Concept & Details:**
* In switches, memory buffering stores frames while they are waiting to be forwarded. When switching between ports of different speeds (e.g., from a 1000 Mbps gigabit port to a slower 100 Mbps port), **shared memory buffering** is the best method. In shared memory buffering, all ports share a single common memory pool. The amount of buffer space allocated to a port is dynamic, allowing large queues of frames destined for the slower port to be stored without being dropped.
* **Why other options are incorrect:**
  * **port-based buffering:** Frames are stored in queues linked to specific ports. A single frame waiting for a busy/slower port can block all other frames in the queue (head-of-line blocking), even if their destination ports are free.
  * **Level 1 cache / fixed configuration:** These are CPU-level memory caches or hardware layout types, not switch packet buffering methods.

---

## Question 32

What are two examples of the cut-through switching method? (Choose two.)

- [ ] store-and-forward switching
- [x] **fast-forward switching**
- [ ] CRC switching
- [x] **fragment-free switching**
- [ ] QOS switching

> [!NOTE]
> **Explanation:** **Correct Answer:** fast-forward switching, fragment-free switching

**Concept & Details:**
* **Cut-through switching** is a low-latency switching method where the switch starts forwarding the frame before the entire frame is received. There are two primary variations:
  1. **Fast-forward switching:** The switch immediately forwards the frame after reading only the destination MAC address (the first 6 bytes). This offers the lowest latency but performs no error checking.
  2. **Fragment-free switching:** The switch stores the first 64 bytes of the frame (where most collisions and fragment errors occur) before forwarding, providing a balance between speed and error mitigation.
* **Why other options are incorrect:**
  * **Store-and-forward:** The alternative major switching method where the switch receives the *entire* frame and performs a CRC integrity check before forwarding.
  * **CRC switching / QOS switching:** These are not standard Cisco IOS switching methods.

---

## Question 33

Which frame forwarding method receives the entire frame and performs a CRC check to detect errors before forwarding the frame?

- [ ] cut-through switching
- [x] **store-and-forward switching**
- [ ] fragment-free switching
- [ ] fast-forward switching

> [!NOTE]
> **Explanation:** **Correct Answer:** store-and-forward switching

**Concept & Details:**
* The **store-and-forward switching** method requires the switch to receive the entire frame and calculate the Cyclic Redundancy Check (CRC) value using the Frame Check Sequence (FCS) trailer. If an error is detected, the frame is discarded. If no errors are found, the frame is forwarded. This prevents corrupted frames from being spread across the network, but it introduces higher latency.
* **Why other options are incorrect:**
  * **cut-through / fast-forward / fragment-free:** These methods start forwarding the frame before the entire frame has been received, meaning they do not perform a complete CRC check on the frame.

---

## Question 34

What is the purpose of the FCS field in a frame?

- [ ] to obtain the MAC address of the sending node
- [ ] to verify the logical address of the sending node
- [ ] to compute the CRC header for the data field
- [x] **to determine if errors occurred in the transmission and reception**

> [!NOTE]
> **Explanation:** **Correct Answer:** to determine if errors occurred in the transmission and reception

**Concept & Details:**
* The **FCS (Frame Check Sequence)** is a field located in the trailer of a Layer 2 frame. Its purpose is to provide **error detection** capability. The sender calculates a Cyclic Redundancy Check (CRC) value based on the frame data and stores it in the FCS. The receiver performs the same calculation; a mismatch indicates that the frame was corrupted during transmission and should be dropped.
* **Why other options are incorrect:**
  * The MAC address is found in the Ethernet header, not the FCS trailer.
  * Logical IP addresses are verified at Layer 3, not via the Layer 2 FCS.
  * The FCS doesn't calculate headers; it is simply a stored mathematical checksum.

---

## Question 35

Which switching method has the lowest level of latency?

- [ ] cut-through
- [ ] store-and-forward
- [ ] fragment-free
- [x] **fast-forward**

> [!NOTE]
> **Explanation:** **Correct Answer:** fast-forward

**Concept & Details:**
* **Fast-forward switching** offers the **lowest latency** because it begins forwarding the frame immediately after reading the destination MAC address (the very first 6 bytes of the frame header). It does not wait for the rest of the frame or perform any error checking.
* **Why other options are incorrect:**
  * **fragment-free:** A type of cut-through switching that waits for the first 64 bytes to ensure no collision has occurred, introducing slightly more latency than fast-forward.
  * **store-and-forward:** Has the highest latency because it must buffer the entire frame before forwarding it.
  * **cut-through:** The general category; fast-forward is the specific type with the absolute lowest latency.

---

## Question 36

A network administrator is connecting two modern switches using a straight-through cable. The switches are new and have never been configured. Which three statements are correct about the final result of the connection? (Choose three.)

- [x] **The link between the switches will work at the fastest speed that is supported by both switches.**
- [x] **The link between switches will work as full-duplex.**
- [ ] If both switches support different speeds, they will each work at their own fastest speed.
- [x] **The auto-MDIX feature will configure the interfaces eliminating the need for a crossover cable.**
- [ ] The connection will not be possible unless the administrator changes the cable to a crossover cable.
- [ ] The duplex capability has to be manually configured because it cannot be negotiated.

> [!NOTE]
> **Explanation:** **Correct Answer:** The link between the switches will work at the fastest speed that is supported by both switches., The link between switches will work as full-duplex., The auto-MDIX feature will configure the interfaces eliminating the need for a crossover cable.

**Concept & Details:**
* Modern switches have auto-negotiation and auto-MDIX enabled by default:
  1. **Speed negotiation:** They will automatically detect and run at the fastest speed that both switches support (e.g., if one supports 1 Gbps and the other 100 Mbps, the link runs at 100 Mbps).
  2. **Duplex negotiation:** They will negotiate full-duplex mode for simultaneous transmit and receive.
  3. **auto-MDIX:** They automatically configure the ports to match the cable type. Even though a crossover cable is historically required to connect two switches, auto-MDIX allows a straight-through cable to work perfectly.
* **Why other options are incorrect:**
  * Switches cannot run at different speeds on the two ends of the same link; they must agree on a common speed.
  * Manual duplex configuration is not required.
  * Crossover cables are not mandatory because of auto-MDIX.

---

## Question 37

Which advantage does the store-and-forward switching method have compared with the cut-through switching method?

- [ ] collision detecting
- [x] **frame error checking**
- [ ] faster frame forwarding
- [ ] frame forwarding using IPv4 Layer 3 and 4 information

> [!NOTE]
> **Explanation:** **Correct Answer:** frame error checking

**Concept & Details:**
* The primary advantage of **store-and-forward switching** is **frame error checking**. Because the switch buffers the entire frame, it can perform a CRC check using the FCS trailer. If the frame is corrupted, the switch discards it, preventing invalid frames from wasting network bandwidth. Cut-through switching does not perform this check and will forward corrupted frames.
* **Why other options are incorrect:**
  * Collision detection is handled by the network interfaces (CSMA/CD), not by the switch forwarding method.
  * Cut-through switching provides faster frame forwarding (lower latency) than store-and-forward.
  * Store-and-forward switching decisions are made based on Layer 2 MAC addresses, not Layer 3/4 headers.

---

## Question 38

When the store-and-forward method of switching is in use, what part of the Ethernet frame is used to perform an error check?

- [x] **CRC in the trailer**
- [ ] source MAC address in the header
- [ ] destination MAC address in the header
- [ ] protocol type in the header

> [!NOTE]
> **Explanation:** **Correct Answer:** CRC in the trailer

**Concept & Details:**
* The **CRC (Cyclic Redundancy Check)** value is located in the **Frame Check Sequence (FCS) trailer** at the end of the Ethernet frame. The store-and-forward switch calculates the mathematical checksum of the received frame and compares it to this CRC value to verify the frame's integrity.
* **Why other options are incorrect:**
  * The source/destination MAC addresses and protocol type fields are in the Ethernet header and are used for forwarding and protocol identification, not for error checking.

---

## Question 39

Which switching method uses the CRC value in a frame?

- [ ] cut-through
- [ ] fast-forward
- [ ] fragment-free
- [x] **store-and-forward**

> [!NOTE]
> **Explanation:** **Correct Answer:** store-and-forward

**Concept & Details:**
* **Store-and-forward switching** is the only method that uses the **CRC (Cyclic Redundancy Check)** value. It reads the entire frame, calculates the mathematical checksum, and compares it to the CRC in the FCS trailer to detect errors before forwarding the frame.
* **Why other options are incorrect:**
  * **cut-through / fast-forward / fragment-free:** These methods forward the frame before it is fully received, meaning they cannot compute or verify the CRC value of the entire frame.

---

## Question 40

What are two actions performed by a Cisco switch? (Choose two.)

- [ ] building a routing table that is based on the first IP address in the frame header
- [x] **using the source MAC addresses of frames to build and maintain a MAC address table**
- [ ] forwarding frames with unknown destination IP addresses to the default gateway
- [x] **utilizing the MAC address table to forward frames via the destination MAC address**
- [ ] examining the destination MAC address to add new entries to the MAC address table

> [!NOTE]
> **Explanation:** **Correct Answer:** using the source MAC addresses of frames to build and maintain a MAC address table, utilizing the MAC address table to forward frames via the destination MAC address

**Concept & Details:**
* A Layer 2 switch performs two key actions to forward traffic:
  1. **Learning:** It inspects the **source MAC address** of every incoming frame and maps it to the port it arrived on, building and maintaining the MAC address table.
  2. **Forwarding:** It inspects the **destination MAC address** of incoming frames and looks it up in the MAC address table. If it finds a match, it forwards the frame out that specific port. If the destination MAC is unknown, it floods the frame out all ports except the ingress port.
* **Why other options are incorrect:**
  * Switches operate at Layer 2 and do not build routing tables (which are Layer 3 structures based on IP addresses).
  * A switch does not forward frames with unknown IP addresses to default gateways; it forwards frames based on MAC addresses.
  * Switches do not use the *destination* MAC address to build new table entries; they only learn from the *source* MAC address.

---

## Question 41

Which two statements describe features or functions of the logical link control sublayer in Ethernet standards? (Choose two.)

- [x] **Logical link control is implemented in software.**
- [ ] Logical link control is specified in the IEEE 802.3 standard.
- [ ] The LLC sublayer adds a header and a trailer to the data.
- [x] **The data link layer uses LLC to communicate with the upper layers of the protocol suite.**
- [ ] The LLC sublayer is responsible for the placement and retrieval of frames on and off the media.

> [!NOTE]
> **Explanation:** **Correct Answer:** Logical link control is implemented in software., The data link layer uses LLC to communicate with the upper layers of the protocol suite.

**Concept & Details:**
* The Data Link Layer is divided into two sublayers: LLC and MAC.
  1. **Software Implementation:** The **LLC (Logical Link Control)** sublayer is implemented in software (driver software for the network interface card) and is independent of the physical hardware.
  2. **Upper-Layer Interface:** It provides the interface between the Layer 2 hardware and the upper-layer network protocols (like IPv4 or IPv6), identifying which protocol is being carried in the frame.
* **Why other options are incorrect:**
  * LLC is specified in the **IEEE 802.2** standard, while IEEE 802.3 defines the MAC sublayer and physical specifications for Ethernet.
  * The MAC sublayer, not the LLC sublayer, is responsible for adding the header/trailer and placing frames onto or retrieving them from the physical media.

---

## Question 42

What is the auto-MDIX feature?

- [x] **It enables a device to automatically configure an interface to use a straight-through or a crossover cable.**
- [ ] It enables a device to automatically configure the duplex settings of a segment.
- [ ] It enables a device to automatically configure the speed of its interface.
- [ ] It enables a switch to dynamically select the forwarding method.

> [!NOTE]
> **Explanation:** **Correct Answer:** It enables a device to automatically configure an interface to use a straight-through or a crossover cable.

**Concept & Details:**
* **auto-MDIX** is a feature that allows a network interface to automatically detect if it needs to cross over its transmit and receive copper wire pairs. This eliminates the need for specialized crossover cables when connecting similar devices (like switch-to-switch or router-to-router).
* **Why other options are incorrect:**
  * Port speed and duplex settings are managed by auto-negotiation, not auto-MDIX.
  * Forwarding methods (store-and-forward vs. cut-through) are configured globally or set by hardware and are not dynamically negotiated by auto-MDIX.

---

## Question 43

What is one advantage of using the cut-through switching method instead of the store-and-forward switching method?

- [ ] has a positive impact on bandwidth by dropping most of the invalid frames
- [ ] makes a fast forwarding decision based on the source MAC address of the frame
- [x] **has a lower latency appropriate for high-performance computing applications​**
- [ ] provides the flexibility to support any mix of Ethernet speeds

> [!NOTE]
> **Explanation:** **Correct Answer:** has a lower latency appropriate for high-performance computing applications

**Concept & Details:**
* The primary advantage of the **cut-through switching** method is its **low latency**. Because the switch does not wait for the entire frame to be received before it starts forwarding it, packets move through the switch much faster. This makes it ideal for latency-sensitive applications like high-performance computing (HPC) or algorithmic trading.
* **Why other options are incorrect:**
  * Cut-through switching does not check for errors and therefore forwards invalid/corrupted frames, which can waste bandwidth (unlike store-and-forward, which drops them).
  * Forwarding decisions are made based on the *destination* MAC address, not the source MAC.
  * Store-and-forward is better suited for mixing different Ethernet port speeds because it buffers the entire frame.

---

## Question 44

Which is a multicast MAC address?

- [ ] FF-FF-FF-FF-FF-FF
- [ ] 5C-26-0A-4B-19-3E
- [x] **01-00-5E-00-00-03**
- [ ] 00-26-0F-4B-00-3E

> [!NOTE]
> **Explanation:** **Correct Answer:** 01-00-5E-00-00-03

**Concept & Details:**
* In Ethernet networks, **multicast MAC addresses** always begin with the specific Organizationally Unique Identifier (OUI) prefix of **`01-00-5E`** in hexadecimal. The remaining portion of the MAC address is mapped from the destination IP multicast group address.
* **Why other options are incorrect:**
  * **`FF-FF-FF-FF-FF-FF`:** The Ethernet **broadcast** MAC address (destined for all devices on the local segment).
  * The other options (`5C-26-...` and `00-26-...`) are standard unicast MAC addresses representing individual physical network cards.

---

## Question 45

Refer to the exhibit. What is wrong with the displayed termination?

![exhibit](https://itexamanswers.net/wp-content/uploads/2019/12/i274300v1n1_209630-300x221-1.png)

- [ ] The woven copper braid should not have been removed.
- [ ] The wrong type of connector is being used.
- [x] **The untwisted length of each wire is too long.**
- [ ] The wires are too thick for the connector that is used.

> [!NOTE]
> **Explanation:** **Correct Answer:** The untwisted length of each wire is too long.

**Concept & Details:**
* When crimping an RJ-45 connector onto a UTP copper cable, it is vital to keep the untwisted length of the wire pairs as short as possible (ideally less than 0.5 inches or 12 mm). If the **untwisted length of each wire is too long**, it removes the cancellation effect provided by twisting, making the cable highly susceptible to crosstalk and signal degradation at the termination point. Additionally, the outer plastic sheath must be secured inside the connector boot.
* **Why other options are incorrect:**
  * UTP cables do not have a woven copper braid (that is for shielded cables like coaxial).
  * The connector shown is a standard RJ-45 connector which is correct for UTP.
  * The wires are standard Category 5e/6 copper wires and are not too thick.

---

## Question 46

Refer to the exhibit. The PC is connected to the console port of the switch. All the other connections are made through FastEthernet links. Which types of UTP cables can be used to connect the devices?​

![exhibit](https://itexamanswers.net/wp-content/uploads/2019/12/i274301v1n1_206934.png)

```text
1 - rollover, 2 - crossover, 3 - straight-through

1 - rollover, 2 - straight-through, 3 - crossover

1 - crossover, 2 - rollover, 3 - straight-through
1 - crossover, 2 - straight-through, 3 - rollover
```

> [!NOTE]
> **Explanation:** **Correct Answer:** 1 - rollover, 2 - straight-through, 3 - crossover

**Concept & Details:**
* Different connections require specific copper cable pinouts:
  1. **Rollover Cable (Link 1):** Used to connect a PC's serial/USB port to the console port of a switch or router for local management.
  2. **Straight-Through Cable (Link 2):** Used to connect dissimilar devices, such as a PC's Ethernet port to a switch port, or a switch port to a router port.
  3. **Crossover Cable (Link 3):** Used to connect similar devices directly (such as switch-to-switch, router-to-router, or PC-to-PC).
* **Why other options are incorrect:**
  * Reversing these roles (e.g., using a crossover for a console port or a rollover for connecting a PC to a switch) will result in a physical link failure and no communication.

---

## Question 47

Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.

- [ ] Fa0/1
- [ ] Fa0/5
- [ ] Fa0/9
- [x] **Fa0/11**

> [!NOTE]
> **Explanation:** **Correct Answer:** Fa0/11

**Concept & Details:**
* In this Packet Tracer lab activity:
  1. Running the `ipconfig /all` command on PC0 displays its IP and MAC address.
  2. Pinging the destination address `10.1.1.5` causes PC0 to send an ICMP request.
  3. When the switch receives this frame, it learns PC0's MAC address and maps it to the port PC0 is connected to. It also learns the destination's MAC address once a reply is received.
  4. Accessing the switch CLI and running `show mac-address-table` displays the active MAC table entries. The entry corresponding to the destination `10.1.1.5` is mapped to port **`Fa0/11`**.
* **Why other options are incorrect:**
  * Ports like `Fa0/1`, `Fa0/5`, or `Fa0/9` are connected to other devices or are inactive, and do not show the MAC address mapping for the target IP host.

---

## Question 48

What does the term “attenuation” mean in data communication?

- [x] **loss of signal strength as distance increases**
- [ ] time for a signal to reach its destination
- [ ] leakage of signals from one cable pair to another
- [ ] strengthening of a signal by a networking device

> [!NOTE]
> **Explanation:** **Correct Answer:** loss of signal strength as distance increases

**Concept & Details:**
* **Attenuation** is the physical phenomenon where an electrical, optical, or radio signal loses power and becomes weaker as it travels further along a transmission medium. This is due to resistance in copper wires, scattering/absorption in optical fiber, or path loss in the air. If a cable run exceeds its maximum recommended length (e.g., 100 meters for UTP), attenuation will make the signal unreadable.
* **Why other options are incorrect:**
  * The time for a signal to reach its destination is called **latency** or **propagation delay**.
  * Signal leakage between wire pairs is called **crosstalk**.
  * Strengthening a signal is called **amplification** or **regeneration** (done by repeaters or switches).

---

## Question 49

What makes fiber preferable to copper cabling for interconnecting buildings? (Choose three.)

- [x] **greater distances per cable run**
- [ ] lower installation cost
- [x] **limited susceptibility to EMI/RFI**
- [ ] durable connections
- [x] **greater bandwidth potential**
- [ ] easily terminated

> [!NOTE]
> **Explanation:** **Correct Answer:** greater distances per cable run, limited susceptibility to EMI/RFI, greater bandwidth potential

**Concept & Details:**
* When connecting networks in separate buildings (interbuilding cabling), **fiber-optic cable** is highly preferred over copper because:
  1. **Greater distances:** Fiber can carry signals for kilometers without needing repeaters, whereas copper is limited to 100 meters.
  2. **EMI/RFI Immunity:** Since it transmits light, it is completely immune to electromagnetic interference, which is common in outdoor environments or between buildings (such as lightning strikes or power line interference).
  3. **Greater bandwidth:** Light signals support much higher transmission speeds than electrical signals on copper.
* **Why other options are incorrect:**
  * Fiber-optic cabling has higher installation costs, is less durable (glass can break if bent sharply), and requires specialized skills and tools to terminate, making it more difficult to install than copper.

---

## Question 50

What OSI physical layer term describes the process by which one wave modifies another wave?

- [x] **modulation**
- [ ] IEEE
- [ ] EIA/TIA
- [ ] air

> [!NOTE]
> **Explanation:** **Correct Answer:** modulation

**Concept & Details:**
* **Modulation** is the physical process of modifying a high-frequency carrier wave (changing its amplitude, frequency, or phase) with a data-carrying signal to transmit information. This is how digital data (1s and 0s) is converted into analog signals for transmission over media like wireless air waves or telephone lines.
* **Why other options are incorrect:**
  * **IEEE / EIA/TIA:** Standard organizations that define standards, not physical wave-modification processes.
  * **air:** A physical transmission medium, not a process.

---

## Question 51

What OSI physical layer term describes the capacity at which a medium can carry data?

- [x] **bandwidth**
- [ ] IEEE
- [ ] EIA/TIA
- [ ] air

> [!NOTE]
> **Explanation:** **Correct Answer:** bandwidth

**Concept & Details:**
* **Bandwidth** is the physical capacity of a transmission medium to carry data over a given period of time. In digital networks, it is typically measured in bits per second (bps), kilobits per second (kbps), megabits per second (Mbps), or gigabits per second (Gbps).
* **Why other options are incorrect:**
  * **IEEE / EIA/TIA:** Regulatory and standards bodies that publish guidelines, not terms for data capacity.
  * **air:** A transmission medium (used in wireless networking), not a capacity term.

---

## Question 53

What OSI physical layer term describes the measure of the transfer of bits across a medium over a given period of time?

- [x] **throughput**
- [ ] bandwidth
- [ ] latency
- [ ] goodput

> [!NOTE]
> **Explanation:** **Correct Answer:** throughput

**Concept & Details:**
* **Throughput** is the measure of the actual transfer of bits (data) across a transmission medium over a given period of time. Unlike theoretical bandwidth, throughput reflects real-world conditions, including protocol overhead, network congestion, and signal degradation.
* **Why other options are incorrect:**
  * **bandwidth:** The theoretical maximum data carrying capacity of the medium.
  * **latency:** The amount of time (delay) it takes for data to travel from one point to another.
  * **goodput:** The measure of usable application-level data transferred over a given period of time (excluding protocol headers and retransmitted packets).

---

## Question 54

What OSI physical layer term describes the amount of time, including delays, for data to travel from one point to another?

- [x] **latency**
- [ ] bandwidth
- [ ] throughput
- [ ] goodput

> [!NOTE]
> **Explanation:** **Correct Answer:** latency

**Concept & Details:**
* **Latency** is the time delay for data to travel from a source node to a destination node. It includes propagation delay (the physical speed of light/signals in the medium), serialization delay (time to put bits on the wire), and processing delays introduced by intermediary network devices like switches and routers.
* **Why other options are incorrect:**
  * **bandwidth:** The maximum data rate capacity.
  * **throughput:** The actual transfer rate of bits.
  * **goodput:** The rate of transfer of usable application payload.

---

## Question 55

What OSI physical layer term describes the amount of time, including delays, for data to travel from one point to another?

- [x] **latency**
- [ ] fiber-optic cable
- [ ] air
- [ ] copper cable

> [!NOTE]
> **Explanation:** **Correct Answer:** latency

**Concept & Details:**
* **Latency** represents the delay or transit time for a packet/signal to travel from its source to its destination across the network.
* **Why other options are incorrect:**
  * **fiber-optic cable, air, copper cable:** These are physical media types that carry data signals, not terms for measuring transit time.

---

## Question 56

What OSI physical layer term describes the measure of usable data transferred over a given period of time?

- [x] **goodput**
- [ ] fiber-optic cable
- [ ] air
- [ ] copper cable

> [!NOTE]
> **Explanation:** **Correct Answer:** goodput

**Concept & Details:**
* **Goodput** is the measure of **usable** application-level data successfully transferred over a given period of time. It excludes all network protocol headers, trailers, routing overhead, and any packets that had to be retransmitted due to errors. It represents the actual throughput minus protocol encapsulation overhead.
* **Why other options are incorrect:**
  * **fiber-optic cable, air, copper cable:** These are types of physical transmission media, not metrics of data transfer.

---

## Question 57

What OSI physical layer term describes the physical medium which uses electrical pulses?

- [x] **copper cable**
- [ ] fiber-optic cable
- [ ] air
- [ ] goodput

> [!NOTE]
> **Explanation:** **Correct Answer:** copper cable

**Concept & Details:**
* **Copper cable** (such as Unshielded Twisted Pair or coaxial cable) uses electrical voltage pulses traveling along copper conductors to transmit data representing binary 1s and 0s.
* **Why other options are incorrect:**
  * **fiber-optic cable:** Uses pulses of light.
  * **air:** Uses electromagnetic radio frequencies or infrared signals.
  * **goodput:** A performance measurement metric, not a physical medium.

---

## Question 58

What OSI physical layer term describes the physical medium that uses the propagation of light?

- [x] **fiber-optic cable**
- [ ] goodput
- [ ] latency
- [ ] throughput

> [!NOTE]
> **Explanation:** **Correct Answer:** fiber-optic cable

**Concept & Details:**
* **Fiber-optic cable** uses the propagation of light pulses down glass or plastic fibers to transmit data. This allows for very high bandwidth and long distance runs, immune to electromagnetic interference.
* **Why other options are incorrect:**
  * **goodput, latency, throughput:** Performance metrics and measures of time or data volume, not physical media.

---

## Question 59

What OSI physical layer term describes the physical medium for microwave transmissions?

- [x] **air**
- [ ] goodput
- [ ] latency
- [ ] throughput

> [!NOTE]
> **Explanation:** **Correct Answer:** air

**Concept & Details:**
* **Air** (or space) is the physical transmission medium used for wireless communications, such as Wi-Fi, cellular, and microwave transmissions. Signals are sent as electromagnetic waves (radio waves or microwaves) through the atmosphere without physical cables.
* **Why other options are incorrect:**
  * **goodput, latency, throughput:** Performance metrics and measures of time/data volume, not physical media.

---

## Question 60

Which two functions are performed at the MAC sublayer of the OSI data link layer? (Choose two.)

Case 2:

Case 3:

Case 4:

Case 5:

Case 6:

- [ ] Adds Layer 2 control information to network protocol data.
- [ ] Places information in the frame that identifies which network layer protocol is being used for the frame.
- [ ] Controls the NIC responsible for sending and receiving data on the physical medium.
- [ ] Implements a trailer to detect transmission errors.
- [ ] Enables IPv4 and IPv6 to utilize the same network interface and media.
- [ ] Provides synchronization between source and target nodes.
- [ ] Integrates various physical technologies.
- [ ] Communicates between the networking software at the upper layers and the device hardware at the lower layers.
- [ ] Adds Layer 2 control information to network protocol data.
- [ ] Enables IPv4 and IPv6 to utilize the same network interface and media.
- [ ] Enables IPv4 and IPv6 to utilize the same network interface and media.
- [ ] Provides synchronization between source and target nodes.
- [ ] Implements a trailer to detect transmission errors.
- [ ] Adds Layer 2 control information to network protocol data.
- [ ] Places information in the frame that identifies which network layer protocol is being used for the frame.
- [ ] Enables IPv4 and IPv6 to utilize the same network interface and media.
- [ ] Adds Layer 2 control information to network protocol data.
- [ ] Integrates various physical technologies.
- [ ] Communicates between the networking software at the upper layers and the device hardware at the lower layers.
- [ ] Provides synchronization between source and target nodes.
- [ ] Places information in the frame that identifies which network layer protocol is being used for the frame.
- [ ] Integrates various physical technologies.
- [ ] Adds Layer 2 control information to network protocol data.
- [ ] Controls the NIC responsible for sending and receiving data on the physical medium.
- [ ] Communicates between the networking software at the upper layers and the device hardware at the lower layers.
- [ ] Controls the NIC responsible for sending and receiving data on the physical medium
- [ ] Provides a mechanism to allow multiple devices to communicate over a shared medium.

> [!NOTE]
> **Explanation:** **Correct Answer:** Controls the NIC responsible for sending and receiving data on the physical medium., Provides a mechanism to allow multiple devices to communicate over a shared medium. (Note: Also performs data encapsulation including trailers for error detection).

**Concept & Details:**
* The Data Link Layer (Layer 2) is divided into two sublayers:
  1. **LLC (Logical Link Control):** Communicates with upper-layer software (identifying Layer 3 protocols like IPv4 or IPv6).
  2. **MAC (Media Access Control):** Interacts directly with physical hardware.
* The **MAC sublayer** performs the following functions:
  * **Controls the NIC (Network Interface Card):** It is responsible for the actual hardware transmission and reception of frames on the physical media.
  * **Media Access Control:** Provides a mechanism to allow multiple devices to communicate over a shared medium (such as CSMA/CD or CSMA/CA).
  * **Data Encapsulation:** Assembles frames, including MAC addressing and adding a trailer (FCS/CRC) for error detection.
* **Why other options are LLC functions:**
  * Identifying the Network Layer protocol (IPv4/IPv6), adding Layer 2 control info to network protocol data, and communicating with the upper-layer software are all functions of the **LLC sublayer**.

---

## Question 61

Which two functions are performed at the LLC sublayer of the OSI data link layer? (Choose two.)

- [x] **Enables IPv4 and IPv6 to utilize the same network interface and media.**
- [x] **Places information in the frame that identifies which network layer protocol is being used for the frame.**
- [ ] Integrates various physical technologies.
- [ ] Implements a process to delimit fields within a Layer 2 frame.
- [ ] Controls the NIC responsible for sending and receiving data on the physical medium.

> [!NOTE]
> **Explanation:** **Correct Answer:** Enables IPv4 and IPv6 to utilize the same network interface and media., Places information in the frame that identifies which network layer protocol is being used for the frame.

**Concept & Details:**
* The **LLC (Logical Link Control)** sublayer (IEEE 802.2) is the upper sublayer of Layer 2. Its functions are:
  1. **Network Protocol Multiplexing:** It places control information in the frame header that identifies which Network Layer protocol (such as IPv4, IPv6, ARP, or AppleTalk) is being carried inside the frame.
  2. **Shared Interface:** This allows multiple Layer 3 protocols to use the same network card (NIC) and physical media simultaneously.
* **Why other options are incorrect:**
  * **Controls the NIC / implements field delimiting:** These are functions of the hardware-oriented **MAC sublayer**.
  * **Integrates physical technologies:** While Layer 2 as a whole bridges software and physical media, "integrating various physical technologies" is a general description, whereas the LLC sublayer has specific software duties.

---

## Question 64

Which two functions are performed at the LLC sublayer of the OSI data link layer? (Choose two.)

- [x] **Adds Layer 2 control information to network protocol data.**
- [x] **Places information in the frame that identifies which network layer protocol is being used for the frame.**
- [ ] Performs data encapsulation.
- [ ] Controls the NIC responsible for sending and receiving data on the physical medium.
- [ ] Integrates various physical technologies.

> [!NOTE]
> **Explanation:** **Correct Answer:** Adds Layer 2 control information to network protocol data., Places information in the frame that identifies which network layer protocol is being used for the frame.

**Concept & Details:**
* The **LLC sublayer** is implemented in software and handles communication between the physical hardware below it and the network layer protocols above it. Its two key functions are:
  1. **Identifying Network Layer protocols:** Inserting info in the header to specify the protocol (IPv4, IPv6, etc.) being carried.
  2. **Adding Layer 2 control info:** Injecting control data to assist in logical link management.
* **Why other options are incorrect:**
  * **Performs data encapsulation / Controls the NIC:** These are functions of the **MAC sublayer** (which handles framing, addressing, error checking, and physical transmission control).

---

## Question 66

Which two functions are performed at the LLC sublayer of the OSI data link layer? (Choose two.)

- [x] **Adds Layer 2 control information to network protocol data.**
- [x] **Enables IPv4 and IPv6 to utilize the same network interface and media.**
- [ ] Provides data link layer addressing.
- [ ] Implements a trailer to detect transmission errors.
- [ ] Provides synchronization between source and target nodes.

> [!NOTE]
> **Explanation:** **Correct Answer:** Adds Layer 2 control information to network protocol data., Enables IPv4 and IPv6 to utilize the same network interface and media.

**Concept & Details:**
* The **LLC sublayer** acts as a bridge between network software and network hardware:
  1. It adds control information to the network layer protocol data unit (PDU) to prepare it for framing.
  2. It allows different protocols (like IPv4 and IPv6) to share the same physical network interface card (NIC).
* **Why other options are incorrect:**
  * **Provides addressing / Implements a trailer for error detection / Provides synchronization:** These are all functions performed at the **MAC sublayer** or the **Physical Layer** of the OSI model.

---

## Question 68

Which two functions are performed at the LLC sublayer of the OSI data link layer? (Choose two.)

- [x] **Enables IPv4 and IPv6 to utilize the same network interface and media.**
- [x] **Adds Layer 2 control information to network protocol data.**
- [ ] Integrates various physical technologies.
- [ ] Implements a trailer to detect transmission errors.
- [ ] Provides synchronization between source and target nodes.

> [!NOTE]
> **Explanation:** **Correct Answer:** Enables IPv4 and IPv6 to utilize the same network interface and media., Adds Layer 2 control information to network protocol data.

**Concept & Details:**
* The **LLC sublayer** handles software-based network protocol multiplexing and logical link management.
* **Why other options are incorrect:**
  * Implementing a trailer for error detection (FCS) and physical synchronization are handled by the hardware-focused **MAC sublayer** and **Physical Layer** respectively.

---

## Question 71

What action will occur if a switch receives a frame with the destination MAC address FF:FF:FF:FF:FF:FF?

- [x] **The switch forwards it out all ports except the ingress port.**
- [ ] The switch refreshes the timer on that entry.
- [ ] The switch does not forward the frame.
- [ ] The switch sends the frame to a connected router because the destination MAC address is not local.

> [!NOTE]
> **Explanation:** **Correct Answer:** The switch forwards it out all ports except the ingress port.

**Concept & Details:**
* The MAC address **`FF:FF:FF:FF:FF:FF`** is the Layer 2 **broadcast address**. When a switch receives a broadcast frame, it floods (forwards) the frame out of every active port on that switch except the port on which the frame originally arrived (the ingress port). This ensures all hosts in the broadcast domain receive the frame.
* **Why other options are incorrect:**
  * The switch does not refresh a timer for this address because `FF:FF:FF:FF:FF:FF` is never learned as a source address in the MAC address table.
  * The switch must forward the frame to ensure it reaches its broadcast destination.
  * The switch does not target a specific router; it simply broadcasts it to all ports.

---

## Question 73

What action will occur if a switch receives a frame with the destination MAC address 01:00:5E:00:00:D9?

- [x] **The switch forwards it out all ports except the ingress port.**
- [ ] The switch does not forward the frame.
- [ ] The switch sends the frame to a connected router because the destination MAC address is not local.
- [ ] The switch shares the MAC address table entry with any connected switches.

> [!NOTE]
> **Explanation:** **Correct Answer:** The switch forwards it out all ports except the ingress port.

**Concept & Details:**
* The MAC address **`01:00:5E:00:00:D9`** is an IP **multicast MAC address** (recognized by the `01-00-5E` prefix). By default, when a standard Layer 2 switch receives a multicast frame, it treats it similarly to a broadcast frame and floods it out all ports except the ingress port (unless IGMP snooping is configured to restrict multicast forwarding to registered ports).
* **Why other options are incorrect:**
  * Standard Layer 2 switches do not silently drop multicast frames; they flood them.
  * The switch does not send it only to a router, nor does it share MAC tables with other switches automatically.

---

## Question 74

What action will occur if a host receives a frame with a destination MAC address of FF:FF:FF:FF:FF:FF?

- [x] **The host will process the frame.**
- [ ] The host forwards the frame to the router.
- [ ] The host sends the frame to the switch to update the MAC address table.
- [ ] The host forwards the frame to all other hosts.

> [!NOTE]
> **Explanation:** **Correct Answer:** The host will process the frame.

**Concept & Details:**
* The MAC address **`FF:FF:FF:FF:FF:FF`** is the Ethernet **broadcast address**. When a host receives a frame with this destination MAC, its network card (NIC) recognizes it as a broadcast meant for everyone, accepts it, and passes the contents up the protocol stack for the operating system to process.
* **Why other options are incorrect:**
  * An end host does not forward broadcast frames to other hosts or routers; that is a switch or routing function.
  * The host does not send frames back to the switch just to update the MAC address table.

---

## Question 75

What action will occur if a switch receives a frame and does have the source MAC address in the MAC table?

- [x] **The switch refreshes the timer on that entry.**
- [ ] The switch adds it to its MAC address table associated with the port number.
- [ ] The switch forwards the frame to the associated port.
- [ ] The switch sends the frame to a connected router because the destination MAC address is not local.

> [!NOTE]
> **Explanation:** **Correct Answer:** The switch refreshes the timer on that entry.

**Concept & Details:**
* When a switch receives a frame, it inspects the **source MAC address** to build/maintain its MAC address table.
  * If the source MAC address is **already present** in the table on the correct port, the switch resets/refreshes the aging timer (typically 5 minutes by default) for that entry to prevent it from expiring.
  * If the source MAC is present but on a *different* port, the switch updates the table with the new port number.
* **Why other options are incorrect:**
  * It does not need to add a new entry because the entry already exists.
  * The switch makes *forwarding* decisions based on the *destination* MAC address, not the source MAC address.

---

## Question 76

What action will occur if a host receives a frame with a destination MAC address of FF:FF:FF:FF:FF:FF?

- [x] **The host will process the frame.**
- [ ] The host returns the frame to the switch.
- [ ] The host replies to the switch with its own IP address.
- [ ] The host forwards the frame to all other hosts.

> [!NOTE]
> **Explanation:** **Correct Answer:** The host will process the frame.

**Concept & Details:**
* When a host receives an Ethernet frame addressed to the broadcast MAC address (`FF:FF:FF:FF:FF:FF`), its network adapter knows that this frame is intended for all hosts on the local network. The host accepts and processes the frame, sending it up to the appropriate upper-layer protocol.
* **Why other options are incorrect:**
  * The host does not return frames to the switch or forward them to other hosts.
  * The host only replies if the higher-layer protocol payload requires a response (e.g., an ARP request), and it would reply to the sender, not "to the switch".

---

## Question 78

What action will occur if a host receives a frame with a destination MAC address it does not recognize?

- [x] **The host will discard the frame.**
- [ ] The host replies to the switch with its own IP address.
- [ ] The host forwards the frame to all other hosts.
- [ ] The host returns the frame to the switch.

> [!NOTE]
> **Explanation:** **Correct Answer:** The host will discard the frame.

**Concept & Details:**
* An end host's network card (NIC) checks the destination MAC address of all incoming frames. The NIC will only accept and process the frame if:
  1. The destination MAC matches the host's own MAC address.
  2. The destination MAC is the broadcast address (`FF:FF:FF:FF:FF:FF`).
  3. The destination MAC matches a multicast group the host is listening to.
* If the destination MAC is unrecognized (meaning it is a unicast frame addressed to some other device), the host's NIC silently **discards/drops the frame**.
* **Why other options are incorrect:**
  * Hosts do not forward or return unrecognized unicast frames; doing so would create loops and network chaos.

---

## Question 79

Which type of UTP cable is used to connect a PC to a switch port?

- [ ] console
- [ ] rollover
- [ ] crossover
- [x] **straight-through**

> [!NOTE]
> **Explanation:** **Correct Answer:** straight-through

**Concept & Details:**
* A **straight-through cable** (also called a patch cable) is used to connect **dissimilar devices**, such as a PC (host) to a switch port, or a switch to a router. It has the same wire pinout configuration at both ends (either T568A on both ends, or T568B on both ends).
* **Why other options are incorrect:**
  * **crossover cable:** Used to connect **similar devices** (switch-to-switch, PC-to-PC).
  * **console / rollover cable:** A Cisco proprietary cable used to connect a PC's serial port to a console port on a router or switch for local CLI configuration. It is not used for network data transmission.

---

