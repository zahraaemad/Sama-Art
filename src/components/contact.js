import React from "react";
import { Box, Container, Typography, Grid, Paper, Link } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";

function ContactInfo() {
  return (
    <Container component="main" maxWidth="md">
      <Paper
        elevation={3}
        sx={{ padding: 4, margin: 4, background: "#cac3b900" }}
      >
        <Typography component="h1" variant="h6" align="left" gutterBottom>
          CONTACT INFO
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                <PhoneIcon sx={{ mr: 1 }} />
                <Typography variant="body1">+972 59 249 2764</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                <EmailIcon sx={{ mr: 1 }} />
                <Typography variant="body1">samaaemad43@gmail.com</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                <LocationOnIcon sx={{ mr: 1 }} />
                <Typography variant="body1">Gaza, Palestine</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                display="flex"
                alignItems="center"
                component={Link}
                href="https://www.instagram.com/samaaemad43?igsh=aWJkdTBkeXZuNTZj&utm_source=qr"
                target="_blank"
                sx={{ textDecoration: "none", color: "black" }}
              >
                <InstagramIcon sx={{ mr: 1 }} />

                <Typography variant="body1">samaaemad43</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

export default ContactInfo;
