import Img1 from "../images/d/d1.jpg";
import Img2 from "../images/d/d2.jpg";
import Img3 from "../images/d/d3.jpg";
import Img4 from "../images/d/d4.jpg";
import Img5 from "../images/d/d5.jpg";

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/system";
import { useSwipeable } from "react-swipeable";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledImg = styled("img")({
  maxHeight: "90%",
  maxWidth: "90%",
});

const ArrowButton = styled(IconButton)({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  zIndex: 1000, // Ensure buttons are on top
});

const ArrowButtonLeft = styled(ArrowButton)({
  left: "-60px", // Position outside the left of the image
});

const ArrowButtonRight = styled(ArrowButton)({
  right: "-60px", // Position outside the right of the image
});

export default function List1() {
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const handleOpen = (index) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedIndex(null);
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % itemData.length);
  };

  const handlePrev = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + itemData.length) % itemData.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <Box sx={{ marginLeft: "10%" }}>
      <ImageList variant="masonry" cols={2} gap={6}>
        {itemData.map((item, index) => (
          <ImageListItem key={item.img}>
            <img
              style={{ width: "80%", cursor: "pointer" }}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              onClick={() => handleOpen(index)}
            />
          </ImageListItem>
        ))}
      </ImageList>
      {selectedIndex !== null && (
        <StyledModal
          open={open}
          onClose={handleClose}
          aria-labelledby="image-modal-title"
          aria-describedby="image-modal-description"
        >
          <div
            {...handlers}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ArrowButtonLeft onClick={handlePrev} aria-label="previous">
              <ArrowBackIosNewIcon />
            </ArrowButtonLeft>
            <StyledImg
              src={itemData[selectedIndex].img}
              alt={itemData[selectedIndex].title}
            />
            <ArrowButtonRight onClick={handleNext} aria-label="next">
              <ArrowForwardIosIcon />
            </ArrowButtonRight>
          </div>
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
