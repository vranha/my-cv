import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import styles from "./About.module.scss"


const animations = {
    initial:{  x:"100%" },
    animate:{  x:0},
    exit:{  x:"100%"},

}
const base = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
const children = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
};
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

export default function About({exitPage, cycleExitPage  }) {

    const navigate = useNavigate();

    const handleMain = () => {
        navigate('/main')
        cycleExitPage(1);
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
            <h1 className={styles.experience}>Latest <strong>works</strong></h1>
            <h1 className={styles.studies}>My <strong>studies</strong></h1>
            </div>
                    <h3 onClick={handleMain} className={styles.left}>
                        Main
                    </h3>
         
        </motion.div>
    );
}