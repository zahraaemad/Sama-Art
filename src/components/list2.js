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
