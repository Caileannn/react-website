import "./AboutMain.css";
import { SocialIcon } from 'react-social-icons';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';



function AboutMain() {

  const about_information = [
    {
      text_info: "Ullamco laboris nisi eu incididunt elit. Ullamco id non est deserunt anim labore qui sint officia pariatur dolore nulla dolor. Elit deserunt eiusmod proident nisi eiusmod eiusmod ut mollit. Ea anim eiusmod ea nostrud dolore dolore proident laborum. Nulla amet tempor proident Ullamco laboris nisi eu incididunt elit. Ullamco id non est deserunt anim labore qui sint officia pariatur dolore nulla dolor. Elit deserunt eiusmod proident nisi eiusmod eiusmod ut mollit. Ea anim eiusmod ea nostrud dolore dolore proident laborum. Nulla amet tempor proident Ullamco laboris nisi eu incididunt elit. Ullamco id non est deserunt anim labore qui sint officia pariatur dolore nulla dolor. Elit deserunt eiusmod proident nisi eiusmod eiusmod ut mollit. Ea anim eiusmod ea nostrud dolore dolore proident laborum. Nulla amet tempor proident Ullamco laboris nisi eu incididunt elit. Ullamco id non est deserunt anim labore qui sint officia pariatur dolore nulla dolor. Elit deserunt eiusmod proident nisi eiusmod eiusmod ut mollit. Ea anim eiusmod ea nostrud dolore dolore proident laborum. Nulla amet tempor proident ",
      email: "Caileannn@gmail.com",
      updated_date: "01/10/2022",
      ig_link: "https://www.instagram.com/cailean.finn/"
    }
  ]

  const copy = async () => {
    await navigator.clipboard.writeText(about_information[0].email);

  }

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: '#fafefa',
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#2631f5',
      
    },
  }));


  return (
    <div className="about-container">
      <div className="about-text">
        <div className="about-header">
        <h2>About</h2><p className="emoji-wave">👋</p>
        </div>
        <hr></hr>
        <p>Cailean Finn is a creative technologist and new media artist based in Waterford, Ireland. In his work, Cailean explores digital systems, and their underlying structure. In this approach, he attempts to reveal and provide insight into how contemporary technologies that shape our environment function. Currently, Cailean’s practice is focused around exploring artificial intelligence, machine learning and computer vision algorithms. Through these tools, he hopes to reflect on the relationship we have formed with machines, and how it can be (re)defined moving forward. In doing so, Cailean searches for new modalities of collaboration with machines, which is underpinned by the evolutionary processes we share.</p>
      </div>
      <div className="prof-links">
            <div className="prof-links__IG">
                <p>(IG)&nbsp;&nbsp;&nbsp;&nbsp;→ <SocialIcon bgColor="#fafefa" fgColor="black" target="_blank" rel="noreferrer" url={about_information[0].ig_link}/></p>
                
            </div>
            <div className="prof-links__CV">
                <p>(CV) &nbsp;&nbsp;&nbsp;&#x21a3; <span className="doc-emoji"><a href="google.com">📄</a></span></p>
                <p className="cv-update">*updated {about_information[0].updated_date}*</p>
            </div>
            <div className="prof-links__EMAIL">
                <p>(E-MAIL) &#x21b7; &nbsp;&#x21b7;&nbsp; &#x21b7;</p>
                <BootstrapTooltip title="Copy to Clipboard!" arrow>
                  <p onClick={copy} className="Email-icon">{about_information[0].email}</p>
                </BootstrapTooltip>
            </div>
      </div>
    </div>
  );
}

export default AboutMain;
