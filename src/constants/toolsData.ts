// src/data/toolsData.ts
export interface CardData {
    id: number;
    title: string;
    description: string;
    link: string;
    icon: string;
}

export const SecuritytoolsData:CardData[] = [
  {
    id: 1,
    title: "Password Generator",
    description: "Generate secure passwords with strength analysis.",
    link: "/password-generator",
    icon: "/passtool.jpg", 
  },

  {
    id: 2,
    title: "Phishing site detector",
    description: "Identify potential phishing websites and stay safe online",
    link: "/phishing-site-detector",
    icon: "/icons/warning.svg", 
  },


  {
    id: 3,
    title: "IP Address Tracker",
    description: "Explore IP addresses and their geographical info.",
    link: "/ip-address-tracker",
    icon: "/icons/location.svg", 
  },

  {
    id: 4,
    title: "Whois Checker",
    description: "Uncover domain ownership and registration details.",
    link: "whois-checker",
    icon: "/icons/search.svg", 
  },



 
  // Add more tools as needed
];


