import React from "react";
import "./ArtPiece.css";
import "./Gallery.css";
import ArtDialog1 from "./art1";
import ArtDialog2 from "./art2";
import Img1 from "../images/a/a13.jpeg";
import Img2 from "../images/b/bb.jpeg";

const Gallery = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  return (
    <div className="gallery">
      <div className="art-piece">
        <img src={Img1} alt="art1" onClick={handleClickOpen1} />
        <h2>Art1</h2>
      </div>
      <div className="art-piece">
        <img src={Img2} alt="art2" onClick={handleClickOpen2} />
        <h2>Art2</h2>
      </div>
      <ArtDialog1 open={open1} onClose={handleClose1} />
      <ArtDialog2 open={open2} onClose={handleClose2} />
    </div>
  );
};

export default Gallery;
