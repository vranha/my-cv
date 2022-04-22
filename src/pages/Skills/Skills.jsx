import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "./Skills.module.scss";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import angular from "../../assets/angular.png";
import node from "../../assets/node.png";
import mongo from "../../assets/mongo.png";
import php from "../../assets/php.png";
import laravel from "../../assets/laravel.png";
import bootstrap from "../../assets/bootstrap.png";
import framermotion from "../../assets/framermotion.png";

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
    delay: 0.2,
    delayChildren: 0.2,
    staggerChildren: 0.2,
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
                <h1>Mi developer <strong>skills</strong></h1>
                <motion.div className={styles.containerBasics} variants={base} transition={childTransition}>
                <svg className={styles.backBasics} id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" >
	<path fill="#74d8c4" d="M293,337.5Q127,435,125,236.5Q123,38,291,139Q459,240,293,337.5Z" />
</svg>
                    <motion.img
                        className={styles.basicsHtml}
                        variants={children}
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
                        variants={children}
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
                        variants={children}
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
                <motion.div className={styles.containerDev} variants={base} transition={childTransition}>
                <motion.img
                        className={styles.devReact}
                        variants={children}
                        whileInView={{
                            x: [0, 110, 170, 110, 0, -110, -170, -110, -0],
                            y: [0, 65, 175, 290, 358, 290, 175, 65, 0],
                            ease:"backIn",
                            transition: { duration: 5, repeat: Infinity, repeatType: "loop"  },
                            
                            repeat: Infinity
                        }}
                        src={react}
                        alt="html icone"
                    />
                <motion.img
                        className={styles.devAngular}
                        variants={children}
                        // whileInView={{
                        //     x: [5, -5, 5, -5,5],
                        //     y: [5, -5, -15, -5, 5],
                        //     ease:"backInOut",
                        //     transition: { duration: 5, repeat: Infinity, repeatType: "loop"  },
                            
                        //     repeat: Infinity
                        // }}
                        src={angular}
                        alt="html icone"
                    />
                <motion.img
                        className={styles.devNode}
                        variants={children}
                        // whileInView={{
                        //     x: [5, -5, 5, -5,5],
                        //     y: [5, -5, -15, -5, 5],
                        //     ease:"backInOut",
                        //     transition: { duration: 5, repeat: Infinity, repeatType: "loop"  },
                            
                        //     repeat: Infinity
                        // }}
                        src={node}
                        alt="html icone"
                    />
                <motion.img
                        className={styles.devMongo}
                        variants={children}
                        // whileInView={{
                        //     x: [5, -5, 5, -5,5],
                        //     y: [5, -5, -15, -5, 5],
                        //     ease:"backInOut",
                        //     transition: { duration: 5, repeat: Infinity, repeatType: "loop"  },
                            
                        //     repeat: Infinity
                        // }}
                        src={mongo}
                        alt="html icone"
                    />
                <motion.img
                        className={styles.devPhp}
                        variants={children}
                        // whileInView={{
                        //     x: [5, -5, 5, -5,5],
                        //     y: [5, -5, -15, -5, 5],
                        //     ease:"backInOut",
                        //     transition: { duration: 5, repeat: Infinity, repeatType: "loop"  },
                            
                        //     repeat: Infinity
                        // }}
                        src={php}
                        alt="html icone"
                    />
                <motion.img
                        className={styles.devLaravel}
                        variants={children}
                        // whileInView={{
                        //     x: [5, -5, 5, -5,5],
                        //     y: [5, -5, -15, -5, 5],
                        //     ease:"backInOut",
                        //     transition: { duration: 5, repeat: Infinity, repeatType: "loop"  },
                            
                        //     repeat: Infinity
                        // }}
                        src={laravel}
                        alt="html icone"
                    />
                <motion.img
                        className={styles.devBootstrap}
                        variants={children}
                        // whileInView={{
                        //     x: [5, -5, 5, -5,5],
                        //     y: [5, -5, -15, -5, 5],
                        //     ease:"backInOut",
                        //     transition: { duration: 5, repeat: Infinity, repeatType: "loop"  },
                            
                        //     repeat: Infinity
                        // }}
                        src={bootstrap}
                        alt="html icone"
                    />
                <motion.img
                        className={styles.devFramermotion}
                        variants={children}
                        // whileInView={{
                        //     x: [5, -5, 5, -5,5],
                        //     y: [5, -5, -15, -5, 5],
                        //     ease:"backInOut",
                        //     transition: { duration: 5, repeat: Infinity, repeatType: "loop"  },
                            
                        //     repeat: Infinity
                        // }}
                        src={framermotion}
                        alt="html icone"
                    />
                </motion.div>
            </motion.div>
            <motion.h3
             className={styles.main}
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
