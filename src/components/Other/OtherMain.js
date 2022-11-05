import React from "react";
import "./OtherMain.css";
import OtherContent from "./OtherContent";

function OtherMain() {
  const otherList = [
    {
      ow_title: "Undefined Panorama Web App",
      ow_by: "Yang Ah Ham",
      ow_year: 2022,
      ow_role: "Web Developer",
      ow_image: "up_img.png",
      ow_url: "http://undefinedpanorama.net/"
    },
    {
      ow_title: "AI x Body Guide",
      ow_by: "AIxDesign",
      ow_year: 2022,
      ow_role: "Author",
      ow_image: "openpose-1.jpg",
      ow_url: "https://nadiapiet.notion.site/AIxDesign-s-Guide-to-AI-x-Body-26ea1c78f253425a92f9269895ea6f46"
    },
    {
      ow_title: "Sorry, please say it again",
      ow_by: "by Soyun Park + Vera van de Seyp",
      ow_year: 2022,
      ow_role: "ML Technician",
      ow_image: "sorry_please.gif",
      ow_url: "https://www.instagram.com/p/CiZPitCDbDf/"
    },
    {
      ow_title: "Fantasia Realism",
      ow_by: "by Soyun Park and Inwoo Jung",
      ow_year: 2022,
      ow_role: "ML Technician + Researcher",
      ow_image: "ft.jpg",
      ow_url: "https://soyunparrrk.com/projects/fantasia_realism"
    },
    {
      ow_title: "Volumetric Interviews",
      ow_by: "RGBdog",
      ow_year: 2022,
      ow_role: "Intern",
      ow_image: "vmi.jpg",
      ow_url: "https://www.youtube.com/watch?v=fsMxVA4UaPA&ab_channel=Krea"
    }
  ];

  const mapOther = otherList.map((elm) => {
    return (
      <OtherContent
        ow_title={elm.ow_title}
        ow_by={elm.ow_by}
        ow_year={elm.ow_year}
        ow_role={elm.ow_role}
        ow_image={elm.ow_image}
        ow_url={elm.ow_url}
      />
    );
  });

  return (
    <div>
      <p>Other projects I have been apart of!</p>
      <div className="other-main-content">{mapOther}</div>
    </div>
  );
}

export default OtherMain;
