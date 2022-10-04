import './WorkMain.css'
import WorkCard from './WorkCard';
import {Link} from 'react-router-dom';


function WorkMain(){

    const workList = [
        {
            w_title: "(O)MACHINE",
            w_year: 2022,
            w_emoji: "🧠",
            w_img: "/Covers/o-machine_cover.gif",
            w_link: "/works/o-machine"
        },
        {
            w_title: "EPCH",
            w_year: 2022,
            w_emoji: "👽",
            w_img: "/Covers/DiffusionCover.png",
            w_link: "/works/EPCH"
        },
        {
            w_title: "The Electronic Image (Thesis)",
            w_year: 2021,
            w_emoji: "⚡",
            w_img: "/Covers/eiCover.gif",
            w_link: "/works/electronic-image"
        },
        {
            w_title: "Cómháir",
            w_year: 2021,
            w_emoji: "📹",
            w_img: "/Covers/ComhairCover.gif",
            w_link: "/works/Comhair"
        },
        {
            w_title: "Online Persona",
            w_year: 2021,
            w_emoji: "🖥️",
            w_img: "/Covers/OP.png",
            w_link: "/works/online-persona"
        },
        {
            w_title: "MEMORY BANK",
            w_year: 2021,
            w_emoji: "💭",
            w_img: "/Covers/MBCover.gif",
            w_link: "/works/memory-bank"
        }
    ]

    const mapWorkList = workList.map(elm => {
        return <Link to={elm.w_link}><WorkCard title={elm.w_title} year={elm.w_year} image={elm.w_img} emoji={elm.w_emoji}/></Link>
    })

    return(
        <div>
            <p>
                Personal Works!
            </p>
            <div className='work-main-container'>
                {mapWorkList}
            </div>
        </div>
    );
}

export default WorkMain;