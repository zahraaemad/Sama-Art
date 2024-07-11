import React from "react";
import "./ArtPiece.css";
import "./Gallery.css";
import ArtDialog1 from "./art1";
import ArtDialog2 from "./art2";
import ArtDialog3 from "./art3";
import ArtDialog4 from "./art4";
import Img1 from "../images/a/a1.jpeg";
import Img2 from "../images/b/bb.jpeg";
import Img3 from "../images/c/c1.jpeg";
import Img4 from "../images/d/d2.jpg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Gallery = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(!open1);
  };

  const handleClickOpen2 = () => {
    setOpen2(!open2);
  };
  const handleClickOpen3 = () => {
    setOpen3(!open3);
  };

  const handleClickOpen4 = () => {
    setOpen4(!open4);
  };

  return (
    <div className="gallery">
      <Container sx={{ textAlign: "center", width: "80%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1} columns={4}>
            <Grid xs={2}>
              <div className="art-piece">
                <img src={Img4} alt="art2" onClick={handleClickOpen4} />
                <p>The Stone Throwers' Intifada</p>
              </div>
            </Grid>
            <Grid xs={2}>
              <div className="art-piece">
                <img src={Img1} alt="art1" onClick={handleClickOpen1} />
                <p>Reimagining Homeland</p>
              </div>
            </Grid>
            <Grid xs={2}>
              <div className="art-piece">
                <img src={Img2} alt="art2" onClick={handleClickOpen2} />
                <p>College</p>
              </div>
            </Grid>
            <Grid xs={2}>
              <div className="art-piece">
                <img src={Img3} alt="art1" onClick={handleClickOpen3} />
                <p>Street Banners</p>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <ArtDialog1 open={open1} onClose={handleClickOpen1} />
      <ArtDialog2 open={open2} onClose={handleClickOpen2} />
      <ArtDialog3 open={open3} onClose={handleClickOpen3} />
      <ArtDialog4 open={open4} onClose={handleClickOpen4} />
    </div>
  );
};

export default Gallery;
