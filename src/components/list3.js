import Img1 from "../images/c/c1.jpeg";
import Img2 from "../images/c/c2.jpeg";
import Img3 from "../images/c/c3.jpeg";
import Img4 from "../images/c/c4.jpeg";
import Img5 from "../images/c/c5.jpeg";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";

export default function List1() {
  return (
    <Box sx={{ marginLeft: "10%" }}>
      <ImageList variant="masonry" cols={2} gap={6}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              style={{ width: "80%" }}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
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
];
