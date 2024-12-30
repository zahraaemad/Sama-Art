import React from "react";
import "./ArtPiece.css";
import "./Gallery.css";
import ArtDialog1 from "./art1";
import ArtDialog2 from "./art2";
import ArtDialog3 from "./art3";
import ArtDialog4 from "./art4";
import ArtDialog5 from "./art5";
import ArtDialog6 from "./art6";
import Img1 from "../images/a/a1.jpeg";
import Img2 from "../images/b/b1.jpeg";
import Img3 from "../images/c/c1.jpeg";
import Img4 from "../images/d/d2.jpg";
import Img5 from "../images/e/ee.jpg";
import Img6 from "../images/f/f6.jpg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Gallery = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);

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
  const handleClickOpen5 = () => {
    setOpen5(!open5);
  };
  const handleClickOpen6 = () => {
    setOpen5(!open6);
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
            <Grid xs={2}>
              <div className="art-piece">
                <img src={Img5} alt="art5" onClick={handleClickOpen5} />
                <p>Genocide Kitchen</p>
              </div>
            </Grid>
            <Grid xs={2}>
              <div className="art-piece">
                <img src={Img6} alt="art6" onClick={handleClickOpen6} />
                <p>A tent for everything</p>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <ArtDialog1 open={open1} onClose={handleClickOpen1} />
      <ArtDialog2 open={open2} onClose={handleClickOpen2} />
      <ArtDialog3 open={open3} onClose={handleClickOpen3} />
      <ArtDialog4 open={open4} onClose={handleClickOpen4} />
      <ArtDialog5 open={open5} onClose={handleClickOpen5} />
      <ArtDialog6 open={open6} onClose={handleClickOpen6} />
    </div>
  );
};

export default Gallery;
