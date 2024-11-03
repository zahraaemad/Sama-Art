import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import List1 from "./list1";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ArtDialog1({ open, onClose }) {
  return (
    <Dialog
      fullScreen
      TransitionComponent={Transition}
      open={open}
      onClose={onClose}
    >
      <AppBar sx={{ position: "relative", background: "white" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon sx={{ background: "#white", color: "black" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DialogContent sx={{ background: "#f4f4f4" }}>
        <p>
        "Reimagining Homeland" is an artistic project that delves into the intricate tapestry of memory culture in Palestine through collage work. It aims to (re)create and (re)imagine the vibrant life of villages destroyed, emphasizing themes of survival, homeland, history, and identity politics. This project serves as a platform for storytelling, archive-making, and the exploration of oral histories, weaving together elements to foster dialogue, reconciliation.
The Palestinian narrative is one fraught with struggles for justice, identity, and survival, amidst a landscape marked by displacement and destruction. "Reimagining Homeland," seeks to engage with these complexities through collage, providing a visual and tactile journey through memory and imagination.  
Drawing upon archival photographs, oral histories, and personal narratives, "Reimagining Homeland" aims to collect a diverse range of materials to incorporate into collage work. These materials serve as the building blocks for compositions that capture the essence of Palestinian life and culture, while also reflecting on the impact of conflict and displacement. I have selected pictures from the Palestinian archive for the period before the Nakba. These are pictures of daily practices carried out by Palestinians in their villages, archive of life before the Nakba and the clear Palestinian identity of the place and people as well. I have included maps of these villages and their old names that were changed after the occupation.
with techniques such as tearing, cutting, layering, and stitching, the collages become a medium for exploration, dialogue, and healing.
        </p>
       
      
        <List1 />
      </DialogContent>
    </Dialog>
  );
}

export default ArtDialog1;
