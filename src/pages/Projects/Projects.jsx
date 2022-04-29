import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
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
               
            </div>
                    <h3 onClick={handleMain} className={styles.up}>
                        Main
                    </h3>
       
        </motion.div>
    );
}
