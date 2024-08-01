import React from "react";
import Gallery from "./components/Gallery";
import BioI from "./images/ibio.png";
import "./App.css";
import ContactInfo from "./components/contact";

function App() {
  return (
    <div className="App">
      <img className="bio-img" src={BioI} alt="bio-img" />
      <div className="box">
        <p className="box-paragraph">
          Samaa Abu Allaban, currently in Gaza is a visual artist whose dynamic
          and thought-provoking creations delve into the intersections of art,
          identity, and humanity. Born in Jabaliya, Gaza, and holding a
          Bachelor's degree in Graphic Design, Samaa explores the depths of
          human experience through a variety of mediums, including animation and
          digital tools. Her work poignantly reflects the complexities of home,
          the resilience of humanity, and the transformative power of oral
          history.
        </p>
        <p className="box-paragraph">
          Constantly pushing the boundaries of traditional art forms to evoke
          profound emotional depth and provoke critical reflection, Samaa’s
          innovative approach to storytelling and visual representation has been
          showcased in several exhibitions worldwide. These include the group
          show at the Institut Français in Gaza in 2021, the City Fragments
          Group Exhibition at the Institut Français in Gaza in 2023, and the
          APOLIDIÀ exhibition in Mestre, Italy—a collective international
          exhibition exploring the profound connection between contemporary art
          and the concept of homeland.
        </p>
        <p className="box-paragraph">
          In addition to her exhibitions, Samaa has illustrated several
          children’s books, where her distinctive artistic style merges with
          heartfelt narratives to inspire and educate young minds. Through her
          compelling work, Samaa seeks to instill a sense of wonder and
          curiosity in the next generation, fostering empathy and understanding
          for diverse lived experiences.
        </p>
      </div>
      <Gallery />
      <ContactInfo />
    </div>
  );
}

export default App;
