export const MODULE_THEORY = {
  mod1: {
    title: "Networking Today",
    overview:
      "This module introduces why networks exist, the kinds of devices and services they connect, and the big ideas that make modern connectivity useful. Focus on understanding purpose before memorizing terms: networks let people, applications, and devices exchange data efficiently across local and global distances.",
    keyIdeas: [
      "End devices create and consume data, while intermediary devices move that data across the network.",
      "Scalability, fault tolerance, security, and quality of service are the core qualities of a healthy network.",
      "Different access methods such as wired broadband, cellular, satellite, and wireless ISPs exist because environments have different constraints.",
    ],
    glossary: [
      { term: "BYOD", definition: "Bring Your Own Device, where users connect personal laptops or phones to organizational resources." },
      { term: "VPN", definition: "A secure tunnel that lets remote users access private network resources safely over untrusted networks." },
      { term: "Fault Tolerance", definition: "A design approach that keeps services running even when devices or links fail." },
      { term: "Scalability", definition: "The ability of a network to grow without disrupting existing users or services." },
    ],
  },
  mod2: {
    title: "Basic Switch and End Device Configuration",
    overview:
      "This module is about first-contact device administration. You learn how a Cisco device stores configuration, how the CLI is structured, and how core setup steps like hostnames, passwords, and interface addressing immediately affect behavior.",
    keyIdeas: [
      "Cisco devices have multiple memory types, and knowing where the startup and running configurations live prevents common mistakes.",
      "The CLI is modal, so the prompt tells you what level of access and configuration you currently have.",
      "Configuration commands take effect immediately, which is powerful but risky on production equipment.",
    ],
    glossary: [
      { term: "NVRAM", definition: "Nonvolatile memory that stores the startup configuration file." },
      { term: "RAM", definition: "Volatile memory that holds the running configuration and working process state." },
      { term: "SVI", definition: "Switch Virtual Interface, a logical interface such as VLAN 1 used for management." },
      { term: "enable secret", definition: "The command used to protect privileged EXEC mode with an encrypted password." },
    ],
  },
  mod3: {
    title: "Protocols and Models",
    overview:
      "This module gives you the language used to explain networking. The OSI and TCP/IP models break communication into layers so you can reason about what each protocol does, where addressing is used, and how data is encapsulated as it moves from an application to the wire.",
    keyIdeas: [
      "Encapsulation wraps data with new headers and trailers as it moves down the stack.",
      "Different addresses solve different problems: MAC for local delivery, IP for end-to-end routing, and ports for application conversations.",
      "Layered models simplify design, troubleshooting, and compatibility across vendors.",
    ],
    glossary: [
      { term: "Encapsulation", definition: "The process of packaging data inside additional protocol headers as it moves through the stack." },
      { term: "PDU", definition: "Protocol Data Unit, the generic name for data at any layer." },
      { term: "Transport Layer", definition: "The layer responsible for segmenting and reassembling data for end-to-end conversations." },
      { term: "Multicast", definition: "A delivery method that sends data to a selected group of receivers." },
    ],
  },
  mod4: {
    title: "Physical Layer",
    overview:
      "The physical layer is about how bits become real signals. Cables, connectors, radio waves, interference, bandwidth, and throughput all live here. If the signal itself is weak, distorted, or incompatible, nothing above it can save the connection.",
    keyIdeas: [
      "Bandwidth describes the medium capacity, while throughput and goodput describe how much data is actually transferred in practice.",
      "Copper, fiber, and wireless each have different strengths, weaknesses, and interference patterns.",
      "Encoding and cabling choices are designed to preserve signal quality and reduce errors such as attenuation and crosstalk.",
    ],
    glossary: [
      { term: "Bandwidth", definition: "The capacity of a medium to carry data over time." },
      { term: "Throughput", definition: "The actual amount of data transferred across the medium over time." },
      { term: "Crosstalk", definition: "Signal interference caused by adjacent wires affecting one another." },
      { term: "Straight-through cable", definition: "A common Ethernet cable type used to connect unlike devices such as a PC and a switch." },
    ],
  },
  mod5: {
    title: "Number Systems",
    overview:
      "Networking relies on binary, decimal, and hexadecimal representations. This module teaches you how addresses and protocol values are displayed to people while still matching the binary values computers use internally.",
    keyIdeas: [
      "Binary is the native language of computers, but humans usually read addresses in dotted decimal or hexadecimal form.",
      "IPv4 addresses are 32 bits long and IPv6 addresses are 128 bits long.",
      "Hexadecimal is especially useful because one hex digit maps neatly to four binary bits.",
    ],
    glossary: [
      { term: "Nibble", definition: "A group of four bits, which corresponds to one hexadecimal digit." },
      { term: "Dotted Decimal", definition: "A human-friendly IPv4 format made of four decimal octets separated by periods." },
      { term: "Hexadecimal", definition: "A base-16 number system that uses digits 0-9 and letters A-F." },
      { term: "Octet", definition: "A group of eight bits." },
    ],
  },
  mod6: {
    title: "Data Link Layer",
    overview:
      "This module explains how local delivery works on a single network segment. The data link layer takes Layer 3 packets, wraps them into frames, controls media access, and uses MAC addressing so devices can exchange data across the physical medium.",
    keyIdeas: [
      "The data link layer is responsible for framing, media access control, and error detection.",
      "Logical and physical topologies describe different aspects of how devices connect and how data flows.",
      "The LLC and MAC sublayers split responsibilities between upper-layer coordination and media-specific control.",
    ],
    glossary: [
      { term: "Frame", definition: "The Layer 2 PDU created when a Layer 3 packet is encapsulated for local delivery." },
      { term: "MAC Address", definition: "A hardware address used for local network delivery." },
      { term: "LLC", definition: "Logical Link Control, the sublayer that communicates with upper layers." },
      { term: "CSMA/CD", definition: "A legacy Ethernet access method that detects collisions on shared media." },
    ],
  },
  mod7: {
    title: "Ethernet Switching",
    overview:
      "This module focuses on how Ethernet frames move across switched LANs. You learn how switches build MAC address tables, how frame sizes and MAC addressing work, and how Ethernet standards define predictable behavior across vendors.",
    keyIdeas: [
      "Switches learn the source MAC address of incoming frames and use that table for future forwarding decisions.",
      "Ethernet is standardized by IEEE 802.3 and depends on unique MAC addresses for delivery.",
      "Special MAC values support multicast and broadcast traffic patterns inside the LAN.",
    ],
    glossary: [
      { term: "Auto-MDIX", definition: "A switch feature that automatically detects the attached cable type and adapts the port." },
      { term: "Runt Frame", definition: "An Ethernet frame smaller than the minimum valid size of 64 bytes." },
      { term: "OUI", definition: "Organizationally Unique Identifier, the vendor portion of a MAC address." },
      { term: "MAC Table", definition: "The table a switch builds to map MAC addresses to switch ports." },
    ],
  },
};

export function getModuleTheory(moduleId) {
  return MODULE_THEORY[moduleId];
}
