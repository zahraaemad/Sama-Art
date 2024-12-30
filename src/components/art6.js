import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import List5 from "./list5";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ArtDialog5({ open, onClose }) {
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
                    A tent for everything—after displacement, everything found its place in a tent:
                     the barber, the pharmacy, even our sorrow, fear, and longing. We move between them
                      so often that we've forgotten what homes once looked like, as if we were born
                       here in the camp.
                </p>
                {/* <p style={{ marginBottom: "2rem" }}>
                    You could order the prints from{" "}
                    <a
                        href="https://gulfphotoplus.com/collections/editions-palestine?filter.p.m.custom.author=Samaa+Emad"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "black" }}
                    >
                        here
                    </a>
                </p> */}
                <List5 />
            </DialogContent>
        </Dialog>
    );
}

export default ArtDialog5;
