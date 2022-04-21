import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import styles from "./About.module.scss"

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
    damping: 15,
    duration: 1
}
const childTransition = {
    type: "tween",
    bounce: 0.5,
    duration: .2,
    delay:.1,
    delayChildren: 0.5,
    staggerChildren: 0.3
}
export default function About({exitY, cycleExitY  }) {

    const navigate = useNavigate();

    const handleMain = () => {
        navigate('/main')
        cycleExitY(1);
    }

    return (
        <motion.div  className={styles.container} variants={animations} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
            <motion.div className={styles.center} variants={base} initial="initial" animate="animate" exit="exit" transition={childTransition}>
                <h1>About</h1>
                 <motion.h3 onClick={handleMain} variants={children}>Main</motion.h3>
            </motion.div>
        </motion.div>
    );
}