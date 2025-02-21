import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import List7 from "./list7";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ArtDialog7({ open, onClose }) {
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
                    Shahidat from Gaza is an effort to hear, collect, and safeguard the words of women
                     from Gaza writing and speaking from within and against the Israeli genocidal war 
                     against the Palestinians in 2023-2025. In defiance of settler-colonial and 
                     imperialist, capitalist attempts at Palestinian erasure, the women’s articulations
                      are piercing in their details of life amid the Zionist Israeli mass killing,
                       torture, displacement, siege, starvation, disfigurement, and destruction of
                        the Gaza strip.<br/><br/>

                    They speak of children who are born never knowing what home is; the contradictions 
                    of having glimpses of internet but no food, electricity or shoes; and how the rain 
                    has become a force of death and fear for those in the displacement tent camps. 
                    They write about how the most painful part of the war is motherhood and the terror
                     of knowing that one does not have the ability to protect one’s children.
                      They reaffirm their faith in the face of unimagined destruction and express their
                       longing for a dignified life on their land. They share discerning critique of the 
                       images and discourse that are used to describe the genocide and their lives.<br/><br/>


                    They reflect on the reconfigurations of who they are and how they see themselves;
                     what starvation looks and feels like on their bodies and in the streets; and the 
                     settler colonial army’s targeted destruction and stealing of their memories. They
                      offer words for Jabalia, Rafah, for Lebanon, for Syria, for their martyred 
                      children; and condemn a world that accepts their attempted annihilation.
                       As they acknowledge the limits of language to convey their experiences, their
                        words, in part, form the language for how we return to know the 470 days of the
                         war. In the words of Mariam writing from Rafah in May 2024: “Even if the war
                          ends from the perspective of the world, for us there is no ending.”<br/><br/>

                    The majority of the texts were shared publicly by the women themselves through
                     their own social media platforms, thus being susceptible to censorship and erasure,
                      while some were shared specifically for Shahidat. Permission was obtained from each
                       of the women to re-publish their words along with an English translation. 
                       Shahidat is the labor of a small Palestinian independent collective of women 
                       affiliated with Birzeit University. The website will be launched in the summer 
                       of 2025.
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
                <List7 />
            </DialogContent>
        </Dialog>
    );
}

export default ArtDialog7;
