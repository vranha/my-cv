import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "./Skills.module.scss";
import Typed from "typed.js";
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
import skills from "../../assets/skills.svg";
import { useEffect, useRef, useState } from "react";

const animations = {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
};

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
    delay: 0,
    delayChildren: 0.2,
    staggerChildren: 0.3,
};

const myHtml = {
    React: "React",
    Angular: "Angular",
    Node: "Node",
    Mongo: "Mongo",
    Php: "Php",
    Laravel: "Laravel",
    Bootstrap: "Bootstrap",
    Framer: "Fr. Motion",
};

export default function Skills({ exitPage, cycleExitPage }) {
    const navigate = useNavigate();
    const [centerDev, setCenterDev] = useState(react);
    const [htmlDev, setHtmlDev] = useState(myHtml.React);

    const reactRef = useRef();
    const angularRef = useRef();
    const nodeRef = useRef();
    const mongoRef = useRef();
    const phpRef = useRef();
    const laravelRef = useRef();
    const bootstrapRef = useRef();
    const framermotionRef = useRef();

    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Typed.js",'redux', "Toastify","passport", "email.js", 'chakra','express', "axios", 'Tippy.js','react-color',"nodemailer",'react-paginate', 'InputEmoji','mdb', "react-datepicker","react-scroll",'react-reveal', 'react-infinite-scroll',], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500,
        showCursor: true,
        cursorChar: "_",
        smartBackspace: true,
        loop: true,
      });
      
  
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);


    document.title = " 🏅 My skills";


    const handleMain = () => {
        navigate("/main");
        cycleExitPage(2);
    };

    const devClick = (program, string) => {
        setCenterDev(program);
        if (string === "Angular") {
            setHtmlDev(myHtml.Angular);
        } else if (string === "React") {
            setHtmlDev(myHtml.React);
        } else if (string === "Node") {
            setHtmlDev(myHtml.Node);
        } else if (string === "Mongo") {
            setHtmlDev(myHtml.Mongo);
        } else if (string === "Php") {
            setHtmlDev(myHtml.Php);
        } else if (string === "Laravel") {
            setHtmlDev(myHtml.Laravel);
        } else if (string === "Bootstrap") {
            setHtmlDev(myHtml.Bootstrap);
        } else if (string === "Framer") {
            setHtmlDev(myHtml.Framer);
        }

        const arrayRefs = [reactRef, angularRef, nodeRef, mongoRef, phpRef, laravelRef, bootstrapRef, framermotionRef];

        arrayRefs.forEach((element) => {
            console.log(element.current.className);
            console.log(program);
            if (element.current.className.includes(string)) {
                element.current.style.borderColor = "#ffbf35";
                element.current.style.filter = "brightness(0.7)";
            } else {
                element.current.style.borderColor = "white";
                element.current.style.filter = "brightness(1)";
            }
        });
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
            <div className={styles.background}>
                <motion.div variants={base}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={childTransition} >
                    <motion.div
                        className={styles.containerBasicsNames}
                        variants={base} transition={{
                            type: "tween",
                            duration: 0.2,
                            delay: 2,
                            delayChildren: 0.3,
                            staggerChildren: 0.3,}}>
                        {/* <motion.svg variants={children} className={styles.backBasics} id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" >
                        <path fill="#74d8c4" d="M293,337.5Q127,435,125,236.5Q123,38,291,139Q459,240,293,337.5Z" />
                    </motion.svg> */}
                        <motion.svg
                            className={styles.basicsHtmlName}
                            variants={base}
                            whileInView={{
                                x: [5, -5, 5, -5, 5],
                                y: [5, -5, -15, -5, 5],
                                ease: "backInOut",
                                transition: { duration: 5, repeat: Infinity, repeatType: "loop" },
                                repeat: Infinity,
                            }}
                            src={html}
                            alt="html icone"
                            viewBox="0 0 1600 500"
                        >
                            <path id="curve1" d="M73.5,108.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                            <text width="500">
                                <textPath href="#curve1">HTML</textPath>
                            </text>
                        </motion.svg>
                        <motion.svg
                            className={styles.basicsCssName}
                            variants={base}
                            whileInView={{
                                x: [-5, 5, 15, 5, -5],
                                y: [5, 0, 5, 0, 5],
                                ease: "backInOut",
                                transition: { duration: 5, repeat: Infinity, repeatType: "loop" },
                                repeat: Infinity,
                            }}
                            src={css}
                            alt="html icone"
                        >
                            <path id="curve2" d="M73.5,108.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                            <text width="500">
                                <textPath href="#curve2">CSS</textPath>
                            </text>
                        </motion.svg>
                        <motion.svg
                            className={styles.basicsJsName}
                            variants={base}
                            whileInView={{
                                x: [-5, 5, -5, 5, -5],
                                y: [-15, -5, 5, -5, -15],
                                ease: "backInOut",
                                transition: { duration: 5, repeat: Infinity, repeatType: "loop" },
                                repeat: Infinity,
                            }}
                            src={js}
                            alt="html icone"
                            viewBox="0 0 1400 500"
                        >
                            <path id="curve3" d="M73.5,199.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                            <text width="500">
                                <textPath href="#curve3">JAVASCRIPT</textPath>
                            </text>
                        </motion.svg>
                    </motion.div>
                </motion.div>
                <motion.div
                    className={styles.center}
                    variants={base}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={childTransition}
                >
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
                        My developer <strong>skills</strong>
                    </motion.h1>
                    <motion.div className={styles.containerBasics} variants={base} transition={{    
                    type: "tween",                    
                    duration: 0.2,
                    delay: 2,
                    delayChildren: 0.3,
                    staggerChildren: 0.3,}}>
                        <motion.img className={styles.backSvg} src={skills} alt="" variants={base}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{    
                    type: "tween",                    
                    duration: 0.2,
                    delay: 2.2,
                    }}/>
                     <div className={styles.atributesContainerPrev}>
                         <h3> I also use:
                         <span ref={el}></span></h3>
                     </div>
                        {/* <motion.svg variants={children} className={styles.backBasics} id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" >
	<path fill="#74d8c4" d="M293,337.5Q127,435,125,236.5Q123,38,291,139Q459,240,293,337.5Z" />
</motion.svg> */}
                        <motion.img
                            className={styles.basicsHtml}
                            variants={base}
                            whileInView={{
                                x: [5, -5, 5, -5, 5],
                                y: [5, -5, -15, -5, 5],
                                ease: "backInOut",
                                transition: { duration: 5, repeat: Infinity, repeatType: "loop" },

                                repeat: Infinity,
                            }}
                            src={html}
                            alt="html icone"
                        />

                        <motion.img
                            className={styles.basicsCss}
                            variants={base}
                            whileInView={{
                                x: [-5, 5, 15, 5, -5],
                                y: [5, 0, 5, 0, 5],
                                ease: "backInOut",
                                transition: { duration: 5, repeat: Infinity, repeatType: "loop" },

                                repeat: Infinity,
                            }}
                            src={css}
                            alt="html icone"
                        />
                        <motion.img
                            className={styles.basicsJs}
                            variants={base}
                            whileInView={{
                                x: [-5, 5, -5, 5, -5],
                                y: [-15, -5, 5, -5, -15],
                                ease: "backInOut",
                                transition: { duration: 5, repeat: Infinity, repeatType: "loop" },

                                repeat: Infinity,
                            }}
                            src={js}
                            alt="html icone"
                        />
                    </motion.div>
                    <motion.div className={styles.centerDev}>
                        <motion.img variants={children} src={centerDev} alt="" 
                        transition={{    
                    type: "tween",                    
                    duration: 0.2,
                    delay: 1.9,
                    }}></motion.img>
                        <motion.h3 className={styles.centerDevTitle}variants={children} src={centerDev} alt="" 
                        transition={{    
                    type: "tween",                    
                    duration: 0.2,
                    delay: 1.9,
                    }}>{htmlDev}</motion.h3>
                    </motion.div>
                    <motion.div className={styles.containerDev} variants={base} transition={{    
                    type: "tween",                    
                    duration: 0.2,
                    delay: 0,
                    delayChildren: 0.1,
                    staggerChildren: 0.1,}}>
                        <motion.img
                            onClick={() => devClick(react, "React")}
                            ref={reactRef}
                            className={styles.devReact}
                            variants={children}
                            whileInView={{
                                x: [0, 110, 170, 110, 0, -110, -170, -110, -0],
                                y: [0, 65, 175, 290, 358, 290, 175, 65, 0],
                                ease: "backInOut",
                                transition: { duration: 35, repeat: Infinity, repeatType: "loop" },

                                repeat: Infinity,
                            }}
                            src={react}
                            alt="html icone"
                        />
                        <motion.img
                            onClick={() => devClick(angular, "Angular")}
                            ref={angularRef}
                            className={styles.devAngular}
                            variants={children}
                            whileInView={{
                                x: [0, 65, 0, -110, -220, -280, -220, -110, 0],
                                y: [0, 115, 225, 295, 225, 115, 0, -65, 0],
                                ease: "backInOut",
                                transition: { duration: 35, repeat: Infinity, repeatType: "loop" },

                                repeat: Infinity,
                            }}
                            src={angular}
                            alt="html icone"
                        />
                        <motion.img
                            onClick={() => devClick(node, "Node")}
                            ref={nodeRef}
                            className={styles.devNode}
                            variants={children}
                            whileInView={{
                                x: [0, -60, -170, -280, -340, -280, -170, -60, 0],
                                y: [0, 115, 180, 115, 0, -115, -180, -115, 0],
                                ease: "backInOut",
                                transition: { duration: 35, repeat: Infinity, repeatType: "loop" },

                                repeat: Infinity,
                            }}
                            src={node}
                            alt="html icone"
                        />
                        <motion.img
                            onClick={() => devClick(mongo, "Mongo")}
                            ref={mongoRef}
                            className={styles.devMongo}
                            variants={children}
                            whileInView={{
                                x: [0, -110, -220, -280, -220, -110, 0, 60, 0],
                                y: [0, 65, 0, -115, -230, -290, -230, -115, 0],
                                ease: "backInOut",
                                transition: { duration: 35, repeat: Infinity, repeatType: "loop" },

                                repeat: Infinity,
                            }}
                            src={mongo}
                            alt="html icone"
                        />
                        <motion.img
                            onClick={() => devClick(php, "Php")}
                            ref={phpRef}
                            className={styles.devPhp}
                            variants={children}
                            whileInView={{
                                x: [0, -110, -170, -110, 0, 110, 170, 110, 0],
                                y: [0, -65, -175, -290, -358, -290, -175, -65, 0],
                                ease: "backInOut",
                                transition: { duration: 35, repeat: Infinity, repeatType: "loop" },

                                repeat: Infinity,
                            }}
                            src={php}
                            alt="html icone"
                        />
                        <motion.img
                            onClick={() => devClick(laravel, "Laravel")}
                            ref={laravelRef}
                            className={styles.devLaravel}
                            variants={children}
                            whileInView={{
                                x: [0, -65, 0, 110, 220, 280, 220, 110, 0],
                                y: [0, -115, -225, -295, -225, -115, 0, 65, 0],
                                ease: "backInOut",
                                transition: { duration: 35, repeat: Infinity, repeatType: "loop" },

                                repeat: Infinity,
                            }}
                            src={laravel}
                            alt="html icone"
                        />
                        <motion.img
                            onClick={() => devClick(bootstrap, "Bootstrap")}
                            ref={bootstrapRef}
                            className={styles.devBootstrap}
                            variants={children}
                            whileInView={{
                                x: [0, 60, 170, 280, 340, 280, 170, 60, 0],
                                y: [0, -115, -180, -115, 0, 115, 180, 115, 0],
                                ease: "backInOut",
                                transition: { duration: 35, repeat: Infinity, repeatType: "loop" },

                                repeat: Infinity,
                            }}
                            src={bootstrap}
                            alt="html icone"
                        />
                        <motion.img
                            onClick={() => devClick(framermotion, "Framer")}
                            ref={framermotionRef}
                            className={styles.devFramermotion}
                            variants={children}
                            whileInView={{
                                x: [0, 110, 220, 280, 220, 110, 0, -60, 0],
                                y: [0, -65, 0, 115, 230, 290, 230, 115, 0],
                                ease: "backInOut",
                                transition: { duration: 35, repeat: Infinity, repeatType: "loop" },

                                repeat: Infinity,
                            }}
                            src={framermotion}
                            alt="html icone"
                        />
                    </motion.div>
                </motion.div>
                <h3 className={styles.right} onClick={handleMain}>
                    Main
                </h3>
            </div>
        </motion.div>
    );
}
