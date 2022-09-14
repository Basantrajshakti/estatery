import React from "react";

import house1 from "../images/house1.jpg";
import house2 from "../images/house2.jpg";
import house3 from "../images/house3.jpg";
import house4 from "../images/house4.jpg";
import house5 from "../images/house5.jpg";
import house6 from "../images/house6.jpg";
import house7 from "../images/house7.jpg";
import house8 from "../images/house8.jpg";
import house9 from "../images/house9.jpg";
import house10 from "../images/house10.jpg";
import house11 from "../images/house11.jpg";

import townhouse1 from "../images/townhouse1.jpg";
import townhouse2 from "../images/townhouse2.jpg";
import townhouse3 from "../images/townhouse3.jpg";
import townhouse4 from "../images/townhouse4.jpg";
import townhouse5 from "../images/townhouse5.jpg";
import townhouse6 from "../images/townhouse6.jpg";
import townhouse7 from "../images/townhouse7.jpg";
import townhouse8 from "../images/townhouse8.jpg";
import townhouse9 from "../images/townhouse9.jpg";
import townhouse10 from "../images/townhouse10.jpg";
import townhouse11 from "../images/townhouse11.jpg";
import townhouse12 from "../images/townhouse12.jpg";
import townhouse13 from "../images/townhouse13.jpg";
import townhouse14 from "../images/townhouse14.jpg";

import duplex1 from "../images/duplex1.jpg";
import duplex2 from "../images/duplex2.jpg";
import duplex3 from "../images/duplex3.jpg";
import duplex4 from "../images/duplex4.jpg";
import duplex5 from "../images/duplex5.jpg";
import duplex6 from "../images/duplex6.jpg";
import duplex7 from "../images/duplex7.jpg";

const DUMMY_HOUSES = [
  {
    id: "h1",
    src: house1,
    price: 2300,
    pricetag: "$2,300",
    name: "Bellini",
    desc: "2699 Green Valley, Highland lake, FL",
    beds: 2,
    bathrooms: 2,
    area: "6x7m",
    location: "new-york",
    when: "11/2022",
    type: "houses"
  },
  {
    id: "h2",
    src: house2,
    price: 3400,
    pricetag: "$3,400",
    name: "Fairview",
    desc: "2821 Lake Sevilla, Harbor, TX",
    beds: 3,
    bathrooms: 1,
    area: "7x7m",
    location: "houston",
    when: "11/2022",
    type: "houses"
  },
  {
    id: "h3",
    src: house3,
    price: 6000,
    pricetag: "$6,000",
    name: "Black Adder",
    desc: "909 Woodland St, Michigan, IN",
    beds: 3,
    bathrooms: 2,
    area: "9x7m",
    location: "las-vegas",
    when: "11/2022",
    type: "houses"
  },
  {
    id: "h4",
    src: house4,
    price: 1500,
    pricetag: "$1,500",
    name: "Southern Comgort",
    desc: "2699 Green Valley, Highland lake, FL",
    beds: 2,
    bathrooms: 1,
    area: "5x3m",
    location: "new-york",
    when: "12/2022",
    type: "houses"
  },
  {
    id: "h5",
    src: house5,
    price: 2000,
    pricetag: "$2,000",
    name: "Brighton",
    desc: "2821 Lake Sevilla, Harbor, TX",
    beds: 2,
    bathrooms: 1,
    area: "5x4m",
    location: "houston",
    when: "12/2022",
    type: "houses"
  },
  {
    id: "h6",
    src: house6,
    price: 3000,
    pricetag: "$3,000",
    name: "Corona",
    desc: "909 Woodland St, Michigan, IN",
    beds: 3,
    bathrooms: 1,
    area: "5x7m",
    location: "las-vegas",
    when: "12/2022",
    type: "houses"
  },
  {
    id: "h7",
    src: house7,
    price: 1000,
    pricetag: "$1,000",
    name: "Lakeside",
    desc: "2699 Green Valley, Highland lake, FL",
    beds: 1,
    bathrooms: 1,
    area: "3x4m",
    location: "new-york",
    when: "01/2023",
    type: "houses"
  },
  {
    id: "h8",
    src: house8,
    price: 7499,
    pricetag: "$7,499",
    name: "Oaklands",
    desc: "2821 Lake Sevilla, Harbor, TX",
    beds: 4,
    bathrooms: 3,
    area: "5x7m",
    location: "houston",
    when: "11/2022",
    type: "houses"
  },
  {
    id: "h9",
    src: house9,
    price: 2200,
    pricetag: "$2,200",
    name: "Heaven's Haven",
    desc: "2699 Green Valley, Highland lake, FL",
    beds: 3,
    bathrooms: 1,
    area: "4x6m",
    location: "new-york",
    when: "12/2022",
    type: "houses"
  },
  {
    id: "h10",
    src: house10,
    price: 1200,
    pricetag: "$1,200",
    name: "Black Gate",
    desc: "2821 Lake Sevilla, Harbor, TX",
    beds: 2,
    bathrooms: 1,
    area: "2x7m",
    location: "houston",
    when: "01/2023",
    type: "houses"
  },
  {
    id: "h11",
    src: house11,
    price: 1500,
    pricetag: "$1,500",
    name: "Grasshoper Hill",
    desc: "909 Woodland St, Michigan, IN",
    beds: 2,
    bathrooms: 1,
    area: "5x8m",
    location: "las-vegas",
    when: "11/2022",
    type: "houses"
  },
  {
    id: "d1",
    src: duplex1,
    price: 7499,
    pricetag: "$7,499",
    name: "Tabula Rasa",
    desc: "2699 Green Valley, Highland lake, FL",
    beds: 15,
    bathrooms: 10,
    area: "20x10m",
    location: "new-york",
    when: "11/2022",
    type: "duplexes"
  },
  {
    id: "d2",
    src: duplex2,
    price: 2300,
    pricetag: "$2,300",
    name: "Oak Moas",
    desc: "2821 Lake Sevilla, Harbor, TX",
    beds: 5,
    bathrooms: 3,
    area: "7x7m",
    location: "houston",
    when: "11/2022",
    type: "duplexes"
  },
  {
    id: "d3",
    src: duplex3,
    price: 6000,
    pricetag: "$6,000",
    name: "Pandora",
    desc: "909 Woodland St, Michigan, IN",
    beds: 10,
    bathrooms: 5,
    area: "14x7m",
    location: "las-vegas",
    when: "11/2022",
    type: "duplexes"
  },
  {
    id: "d4",
    src: duplex4,
    price: 2499,
    pricetag: "$2,499",
    name: "Old Star",
    desc: "2699 Green Valley, Highland lake, FL",
    beds: 8,
    bathrooms: 4,
    area: "9x7m",
    location: "new-york",
    when: "12/2022",
    type: "duplexes"
  },
  {
    id: "d5",
    src: duplex5,
    price: 5000,
    pricetag: "$5,000",
    name: "Sku Lark",
    desc: "2821 Lake Sevilla, Harbor, TX",
    beds: 5,
    bathrooms: 5,
    area: "12x10m",
    location: "houston",
    when: "12/2022",
    type: "duplexes"
  },
  {
    id: "d6",
    src: duplex6,
    price: 3000,
    pricetag: "$3,000",
    name: "Plum Duplex",
    desc: "909 Woodland St, Michigan, IN",
    beds: 5,
    bathrooms: 3,
    area: "10x7m",
    location: "las-vegas",
    when: "12/2022",
    type: "duplexes"
  },
  {
    id: "d7",
    src: duplex7,
    price: 6500,
    pricetag: "$6,500",
    name: "Appaloosa",
    desc: "2699 Green Valley, Highland lake, FL",
    beds: 8,
    bathrooms: 4,
    area: "10x15m",
    location: "new-york",
    when: "01/2023",
    type: "duplexes"
  },
  {
    id: "t1",
    src: townhouse1,
    price: 2300,
    pricetag: "$2,300",
    name: "Crook's Corner",
    desc: "2699 Green Valley, Highland lake, FL",
    beds: 2,
    bathrooms: 2,
    area: "6x7m",
    location: "new-york",
    when: "11/2022",
    type: "townhouses1"
  },
  {
    id: "t2",
    src: townhouse2,
    price: 3400,
    pricetag: "$3,400",
    name: "Atlantis",
    desc: "2821 Lake Sevilla, Harbor, TX",
    beds: 3,
    bathrooms: 1,
    area: "7x7m",
    location: "houston",
    when: "11/2022",
    type: "townhouses2"
  },
  {
    id: "t3",
    src: townhouse3,
    price: 6000,
    pricetag: "$6,000",
    name: "Old River",
    desc: "909 Woodland St, Michigan, IN",
    beds: 3,
    bathrooms: 2,
    area: "9x7m",
    location: "las-vegas",
    when: "11/2022",
    type: "townhouses3"
  },
  {
    id: "t4",
    src: townhouse4,
    price: 1500,
    pricetag: "$1,500",
    name: "Talisker Manor",
    desc: "2699 Green Valley, Highland lake, FL",
    beds: 2,
    bathrooms: 1,
    area: "5x3m",
    location: "new-york",
    when: "12/2022",
    type: "townhouses4"
  },
  {
    id: "t5",
    src: townhouse5,
    price: 2000,
    pricetag: "$2,000",
    name: "Melora",
    desc: "2821 Lake Sevilla, Harbor, TX",
    beds: 2,
    bathrooms: 1,
    area: "5x4m",
    location: "houston",
    when: "12/2022",
    type: "townhouses5"
  },
  {
    id: "t6",
    src: townhouse6,
    price: 3000,
    pricetag: "$3,000",
    name: "Five Forks",
    desc: "909 Woodland St, Michigan, IN",
    beds: 3,
    bathrooms: 1,
    area: "5x7m",
    location: "las-vegas",
    when: "12/2022",
    type: "townhouses6"
  },
  {
    id: "t7",
    src: townhouse7,
    price: 1000,
    pricetag: "$1,000",
    name: "Appalachia Lest",
    desc: "2699 Green Valley, Highland lake, FL",
    beds: 1,
    bathrooms: 1,
    area: "3x4m",
    location: "new-york",
    when: "01/2023",
    type: "townhouses7"
  },
  {
    id: "t8",
    src: townhouse8,
    price: 7499,
    pricetag: "$7,499",
    name: "Stubbs Home",
    desc: "2821 Lake Sevilla, Harbor, TX",
    beds: 4,
    bathrooms: 3,
    area: "5x7m",
    location: "houston",
    when: "11/2022",
    type: "townhouses8"
  },
  {
    id: "t9",
    src: townhouse9,
    price: 4000,
    pricetag: "$4,000",
    name: "Corsican",
    desc: "909 Woodland St, Michigan, IN",
    beds: 3,
    bathrooms: 2,
    area: "7x5m",
    location: "las-vegas",
    when: "01/2023",
    type: "townhouses9"
  },
  {
    id: "t10",
    src: townhouse10,
    price: 1200,
    pricetag: "$1,200",
    name: "Castle Rock",
    desc: "2821 Lake Sevilla, Harbor, TX",
    beds: 2,
    bathrooms: 1,
    area: "2x7m",
    location: "houston",
    when: "01/2023",
    type: "townhouses10"
  },
  {
    id: "t11",
    src: townhouse11,
    price: 1500,
    pricetag: "$1,500",
    name: "Fiddler's Green",
    desc: "909 Woodland St, Michigan, IN",
    beds: 2,
    bathrooms: 1,
    area: "5x8m",
    location: "las-vegas",
    when: "11/2022",
    type: "townhouses11"
  },
  {
    id: "t12",
    src: townhouse12,
    price: 2300,
    pricetag: "$2,300",
    name: "Hay Stacks",
    desc: "2699 Green Valley, Highland lake, FL",
    beds: 2,
    bathrooms: 2,
    area: "6x7m",
    location: "new-york",
    when: "11/2022",
    type: "townhouses12"
  },
  {
    id: "t13",
    src: townhouse13,
    price: 3400,
    pricetag: "$3,400",
    name: "Star Dust",
    desc: "2821 Lake Sevilla, Harbor, TX",
    beds: 3,
    bathrooms: 1,
    area: "7x7m",
    location: "houston",
    when: "11/2022",
    type: "townhouses13"
  },
  {
    id: "t14",
    src: townhouse14,
    price: 6000,
    pricetag: "$6,000",
    name: "Basker Villes",
    desc: "909 Woodland St, Michigan, IN",
    beds: 3,
    bathrooms: 2,
    area: "9x7m",
    location: "las-vegas",
    when: "11/2022",
    type: "townhouses14"
  }
];

const HouseContext = React.createContext();

export const HouseContextProvider = (props) => {
  return (
    <HouseContext.Provider value={DUMMY_HOUSES}>
      {props.children}
    </HouseContext.Provider>
  );
};

export default HouseContext;
