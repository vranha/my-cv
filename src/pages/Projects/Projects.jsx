import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import CocktailsClub from "../../assets/CocktailsClub.webp";
import MoviesHouse from "../../assets/MoviesHouse.webp";
import ArcaneProject from "../../assets/ArcaneProject.webp";
import BlogLaravel from "../../assets/BlogLaravel.webp";
import styles from "./Projects.module.scss"
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

const animations = {
    initial:{  y:"100%"},
    animate:{  y:0},
    exit:{  y:"100%"},

}
const base = {
    initial:{  scale: 0},
    animate:{  scale: 1},
    exit:{  scale: 0},

}
const children = {
    initial:{  scale: 0},
    animate:{  scale: 1},
    exit:{  scale: 0},

}
const pageTransition = {
    type: "spring",
    ease: "easeIn",
    bounce: 0,
    duration: 1,
    delay: 0.2,
    delayChildren: 0.5,
    staggerChildren: 0.3,
};
const childTransition = {
    type: "tween",
    bounce: 0.5,
    duration: 0.2,
    delay: 0.1,
    delayChildren: 0.2,
    staggerChildren: 0.3,
};

export default function Projects({exitY, cycleExitY   }) {

    const navigate = useNavigate();

    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [link, setLink] = useState("");
    const [type, setType] = useState("");
    const [things, setThings] = useState([]); //TODO: Acabar esto
    


    document.title = "🚀 My works";

    const handleMain = () => {
        navigate('/main')
        cycleExitY(1);
    }

    const modalOpener = (project) => {
        if (project === "CocktailsClub") {
            setModal((moda) => !modal)
            setTitle('Cocktails Club')
            setText1('This is a double-sided catering website.')
            setText2('The user can do actions such as reserving a table or even asking for cocktails to be brought to your site (prior registration and geologization). ')
            setText3('The administrator has access to lists of orders and reservations to manage.')
            setLink('https://www.google.com/search?q=Cocktel&oq=cocktel&aqs=chrome.0.69i59j46i131i433i512j46i512j0i512l2j0i10i512l2j0i512j46i10i512j0i271.897j0j15&sourceid=chrome&ie=UTF-8')
            setType('React')
            setThings(['Registration and Login', 'Session token', 'E-mail Confirmation and Contact', 'Pay method', 'Geolocalization', 'and more...' ])
        }
        if (project === "MoviesHouse") {
            setModal((moda) => !modal)
            setTitle('Movies House')
            setText1('Here we have a website where we call an api for movies and premieres.')
            setText2('You can search the movies by genre, name or sort them in different ways.')
            setText3('If you are registered you can save them in favorites and customize them with colors or titles.')
            setLink('https://www.google.com/search?q=movies&oq=movies&aqs=chrome..69i57j35i39i362l3j0i10i433j46i10i199i433i465j0i10i131i433j46i10i199i433i465j0i10i131i433j0i512.703j0j15&sourceid=chrome&ie=UTF-8')
            setType('React')
            setThings([])
        }
        if (project === "ArcaneProject") {
            setModal((moda) => !modal)
            setTitle('Arcane Project')
            setText1('This is a website dedicated to the popular Netflix series "Arcane".')
            setText2('In it you can research about the arcane characters (and Leage of Legends) and even create your own.')
            setText3('')
            setLink('https://www.google.com/search?q=arcane&sxsrf=ALiCzsZLltvDtIcEfo8oqipSfwbXUCGikw%3A1651522055140&ei=BzpwYp-KCMyX9u8Po_Wh-A4&ved=0ahUKEwjfqb2Lz8H3AhXMi_0HHaN6CO8Q4dUDCA4&uact=5&oq=arcane&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBwguELEDEEMyBAgAEEMyBQgAEMsBMgUIABCABDIFCAAQywEyBQgAEMsBMgUIABCABDIFCAAQywEyBQgAEMsBOgcIABBHELADOgcIABCwAxBDOgoIABDkAhCwAxgBOgwILhDIAxCwAxBDGAI6DwguENQCEMgDELADEEMYAjoECC4QQzoRCC4QgAQQsQMQgwEQxwEQ0QM6CAguELEDEIMBOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQowI6BwguENQCEEM6CgguELEDENQCEEM6CAguEIAEELEDOgsILhCABBCxAxCDAToFCC4QgAQ6DgguEIAEELEDEIMBENQCOgsILhDHARCvARDLAToICC4QgAQQ1AJKBAhBGABKBAhGGAFQpwhYtAxgvBRoAnABeACAAfEBiAGWB5IBBTAuNS4xmAEAoAEByAETwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz')
            setType('Angular')
            setThings([])
        }
        if (project === "BlogLaravel") {
            setModal((moda) => !modal)
            setTitle('Blog Laravel')
            setText1('This website is a very simple blog with a minimalist style.')
            setText2('In it you can leave comments as a user, or manage them as an administrator')
            setText3('')
            setLink('https://www.google.com/search?q=blog&sxsrf=ALiCzsZoi3Ea_iErXGaET4l1vQPx2RsUTQ%3A1651522067916&ei=EzpwYv3FN-aO9u8PlNiCqA4&ved=0ahUKEwi9m8mRz8H3AhVmh_0HHRSsAOUQ4dUDCA4&uact=5&oq=blog&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMgUIABCABDIICAAQgAQQsQMyCwgAEIAEELEDEIMBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIIxCwAxAnOgcIABBHELADOgcIABCwAxBDOgoIABDkAhCwAxgBOg8ILhDUAhDIAxCwAxBDGAI6DAguEMgDELADEEMYAjoSCC4QxwEQ0QMQyAMQsAMQQxgCOgQIIxAnOgYIIxAnEBM6EQguEIAEELEDEIMBEMcBENEDOgsILhCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQowI6CAguEIAEENQCOgQILhBDOgQIABBDOg4ILhCABBCxAxDHARDRAzoICAAQsQMQgwE6BQguEIAESgQIQRgASgQIRhgBUJILWOcPYKgWaAJwAXgAgAGlAYgBigSSAQMwLjSYAQCgAQHIARPAAQHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz')
            setType('Laravel')
            setThings([])
        }
    }

    return (
        <motion.div
            className={styles.container}
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
        >
            <motion.div className={styles.background}
            animate={{
                scale: modal ? 0.8 : 1,
                
              }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}>
        <div className={styles.containerProjects}>
        <motion.h1
                    variants={children}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{    
                    type: "tween",                    
                    duration: 0.2,
                    delay: 0.4,
                    }}>
                        My <strong>Projects</strong>
                    </motion.h1>
            <div className={styles.projectStructure}>
                <div className={styles.project}  onClick={() => modalOpener("CocktailsClub")}>
                    <img className={styles.imgProjects} src={CocktailsClub} alt="CocktailsClub" />
                    <div className={styles.textBox}>
                        <h2>Cocktails Club</h2>
                        <p>JSX / React</p>
                    </div>
                        <h4>Open</h4>
                </div>
                <div className={styles.project}  onClick={() => modalOpener("MoviesHouse")}>
                    <img className={styles.imgProjects} src={MoviesHouse} alt="MoviesHouse" />
                    <div className={styles.textBox}>
                        <h2>Movies House</h2>
                        <p>JSX / React</p>
                    </div>
                    <h4>Open</h4>
                </div>
                <div className={styles.project}  onClick={() => modalOpener("ArcaneProject")}>
                    <img className={styles.imgProjects} src={ArcaneProject} alt="ArcaneProject" />
                    <div className={styles.textBox}>
                        <h2>Arcane Project</h2>
                        <p>TS / Angular</p>
                    </div>
                    <h4>Open</h4>
                </div>
                <div className={styles.project}  onClick={() => modalOpener("BlogLaravel")}>
                    <img className={styles.imgProjects} src={BlogLaravel} alt="BlogLaravel" />
                    <div className={styles.textBox}>
                        <h2>Users Blog</h2>
                        <p>PHP / Laravel</p>
                    </div>
                    <h4>Open</h4>
                </div>
            </div>
        </div>
        <div className={styles.containerVideos}></div>
            </motion.div>
<Modal {...{ modal, setModal, title, text1, text2, text3, link, type, things, }}></Modal>
                    <h3 onClick={handleMain} className={styles.up}>
                        Main
                    </h3>
       
        </motion.div>
    );
}
