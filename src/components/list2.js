import Img1 from "../images/b/b1.jpeg";
import Img2 from "../images/b/b2.jpeg";
import Img3 from "../images/b/b3.jpeg";
import Img4 from "../images/b/b4.jpeg";
import Img5 from "../images/b/b5.jpeg";
import Img6 from "../images/b/b6.jpeg";
import Img7 from "../images/b/b7.jpeg";
import Img8 from "../images/b/b8.jpeg";
import Img9 from "../images/b/b9.jpeg";
import Img10 from "../images/b/b10.jpeg";
import Img11 from "../images/b/b11.jpeg";
import Img12 from "../images/b/b12.jpeg";
import Img13 from "../images/b/b13.jpeg";
import Img14 from "../images/b/b14.jpeg";
import Img15 from "../images/b/b15.jpeg";
import Img16 from "../images/b/b16.jpeg";
import Img17 from "../images/b/b17.jpeg";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";

export default function List2() {
  return (
    <Box
      sx={{
        width: "96%",
        height: "100%",
        overflowY: "scroll",
        backgroundColor: "#d2cec3",
        padding: "30px",
        borderRadius: "10px",
      }}
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: Img1,
    title: "img1",
  },
  {
    img: Img2,
    title: "img2",
  },
  {
    img: Img3,
    title: "img3",
  },
  {
    img: Img4,
    title: "img4",
  },
  {
    img: Img5,
    title: "img5",
  },
  {
    img: Img6,
    title: "img6",
  },
  {
    img: Img7,
    title: "img7",
  },
  {
    img: Img8,
    title: "img8",
  },
  {
    img: Img9,
    title: "img9",
  },
  {
    img: Img10,
    title: "img10",
  },
  {
    img: Img11,
    title: "img11",
  },
  {
    img: Img12,
    title: "img12",
  },
  {
    img: Img13,
    title: "img13",
  },
  {
    img: Img14,
    title: "img14",
  },
  {
    img: Img15,
    title: "img15",
  },
  {
    img: Img16,
    title: "img16",
  },
  {
    img: Img17,
    title: "img17",
  },
];
