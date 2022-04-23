import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import contactme from "../../assets/contactme.svg";
import styles from "./Contactme.module.scss"

const animations = {
    initial:{  y:"-100%"},
    animate:{  y:0},
    exit:{  y:"-100%"},

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
    duration: .2,
    delay:.1,
    delayChildren: 0.5,
    staggerChildren: 0.3
}

export default function Contactme({exitY, cycleExitY  }) {

    const navigate = useNavigate();

    const handleMain = () => {
        navigate('/main')
        cycleExitY(2);
    }

    return (
        <motion.div  className={styles.container} variants={animations} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
            <div className={styles.background}>
                <motion.div className={styles.center} variants={base} initial="initial" animate="animate" exit="exit" transition={childTransition}>
                    <h1>Contact me</h1>
                     <h3 onClick={handleMain} className={styles.down} >Main</h3>
                </motion.div>
            </div>
                    <img className={styles.emailSvg} src={contactme} alt="" />
        </motion.div>
    );
}

