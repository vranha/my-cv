import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "./Skills.module.scss";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";

const animations = {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
};

const base = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
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
    damping: 15,
    duration: 1,
};
const childTransition = {
    type: "tween",
    bounce: 0.5,
    duration: 0.2,
    delay: 0.1,
    delayChildren: 0.5,
    staggerChildren: 0.3,
};


export default function Skills({ exitPage, cycleExitPage }) {
    const navigate = useNavigate();

    const handleMain = () => {
        navigate("/main");
        cycleExitPage(2);
    };

    return (
        <motion.div
            className={styles.container}
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
        >
            <motion.div
                className={styles.center}
                variants={base}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={childTransition}
            >
                <h1>Mi developer skills</h1>
                <motion.div className={styles.containerBasics} variants={children}>
                    <motion.img
                        className={styles.basicsHtml}
                        whileInView={{
                            x: [5, -5, 5, -5,5],
                            y: [5, -5, -15, -5, 5],
                            ease:"backInOut",
                            transition: { duration: 5, repeat: Infinity, repeatType: "loop"  },
                            
                            repeat: Infinity
                        }}
                        src={html}
                        alt="html icone"
                    />

                    <motion.img
                        className={styles.basicsCss}
                        whileInView={{
                            x: [ -5, 5, 15, 5, -5 ],
                            y: [5, 0, 5, 0 , 5],
                            ease:"backInOut",
                            transition: { duration: 5, repeat: Infinity, repeatType: "loop"  },
                            
                            repeat: Infinity
                        }}
                        src={css}
                        alt="html icone"
                    />
                    <motion.img
                        className={styles.basicsJs}
                        whileInView={{
                            x: [-5, 5, -5, 5, -5],
                            y: [-15, -5, 5, -5, -15],
                            ease:"backInOut",
                            transition: { duration: 5, repeat: Infinity, repeatType: "loop"  },
                            
                            repeat: Infinity
                        }}
                        src={js}
                        alt="html icone"
                    />
                </motion.div>
            </motion.div>
            <motion.h3
                onClick={handleMain}
                variants={base}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={childTransition}
            >
                Main
            </motion.h3>
        </motion.div>
    );
}
