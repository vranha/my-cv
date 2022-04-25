import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import styles from "./Projects.module.scss"

const animations = {
    initial:{  x:"100%" },
    animate:{  x:0},
    exit:{  x:"100%"},

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
    duration: 1
}
const childTransition = {
    type: "tween",
    bounce: 0.5,
    duration: 0.2,
    delay: 0.2,
    delayChildren: 0.2,
    staggerChildren: 0.2
}

export default function Projects({exitPage, cycleExitPage  }) {

    const navigate = useNavigate();

    const handleMain = () => {
        navigate('/main')
        cycleExitPage(1);
    }

    return (
        <motion.div  className={styles.container} variants={animations} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
            <motion.div className={styles.center} variants={base} initial="initial" animate="animate" exit="exit" transition={childTransition}>
                <h1>projects</h1>
                 <h3 className={styles.left} onClick={handleMain} variants={children}>Main</h3>
            </motion.div>
        </motion.div>
    );
}
