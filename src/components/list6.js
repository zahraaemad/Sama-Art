import Img1 from "../images/f/f2.jpg";
import Img2 from "../images/f/f3.jpg";
import Img3 from "../images/f/f4.jpg";
import Img4 from "../images/f/f5.jpg";
import Img5 from "../images/f/f6.jpg";

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/system";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledImg = styled("img")({
  maxHeight: "90%",
  maxWidth: "90%",
});

export default function List6() {
  const [open, setOpen] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState(null);

  const handleOpen = (img) => {
    setSelectedImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImg(null);
  };

  return (
    <Box sx={{ marginLeft: "10%" }}>
      <ImageList variant="masonry" cols={2} gap={6}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              style={{ width: "80%", cursor: "pointer" }}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              onClick={() => handleOpen(item.img)}
            />
          </ImageListItem>
        ))}
      </ImageList>
      {selectedImg && (
        <StyledModal
          open={open}
          onClose={handleClose}
          aria-labelledby="image-modal-title"
          aria-describedby="image-modal-description"
        >
          <StyledImg src={selectedImg} alt="Selected" />
        </StyledModal>
      )}
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
