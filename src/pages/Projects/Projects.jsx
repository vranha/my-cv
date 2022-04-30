import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import CocktailsClub from "../../assets/CocktailsClub.webp";
import MoviesHouse from "../../assets/MoviesHouse.webp";
import ArcaneProject from "../../assets/ArcaneProject.webp";
import BlogLaravel from "../../assets/BlogLaravel.webp";
import styles from "./Projects.module.scss"

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

    document.title = "🚀 My works";

    const handleMain = () => {
        navigate('/main')
        cycleExitY(1);
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
            <div className={styles.background}>
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
                <div className={styles.project}  onClick={() => {console.log('caca')}}>
                    <img className={styles.imgProjects} src={CocktailsClub} alt="CocktailsClub" />
                    <div className={styles.textBox}>
                        <h2>Cocktails Club</h2>
                        <p>JSX / React</p>
                    </div>
                        <h4>Open</h4>
                </div>
                <div className={styles.project} data-hover="Expand">
                    <img className={styles.imgProjects} src={MoviesHouse} alt="MoviesHouse" />
                    <div className={styles.textBox}>
                        <h2>Movies House</h2>
                        <p>JSX / React</p>
                    </div>
                    <h4>Open</h4>
                </div>
                <div className={styles.project} data-hover="Expand">
                    <img className={styles.imgProjects} src={ArcaneProject} alt="ArcaneProject" />
                    <div className={styles.textBox}>
                        <h2>Arcane Project</h2>
                        <p>TS / Angular</p>
                    </div>
                    <h4>Open</h4>
                </div>
                <div className={styles.project} data-hover="Expand">
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

            </div>
                    <h3 onClick={handleMain} className={styles.up}>
                        Main
                    </h3>
       
        </motion.div>
    );
}
