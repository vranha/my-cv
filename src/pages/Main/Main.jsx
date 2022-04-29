import { motion, useCycle } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IoLogoGitlab } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import CV from "../../assets/CV.png"; 
import { useEffect } from "react";
import styles from "./Main.module.scss";      

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
    bounce: 0,
    duration: 0.2,
    delay: 0,
    delayChildren: 0.3,
    staggerChildren: 0.3,
};

const itemsA = [1, 2, 3, 4]
const itemsB = [3, 1, 4, 2]
const itemsC = [4, 3, 2, 1]
const itemsD = [2, 4, 1, 3]

const colors = [{color:"linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)", word: "Creativity 🦄"},{color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", word: "Passion 🌹"},{color: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)", word: "Effort 💪"},{color: "linear-gradient(135deg, #FFB7FF 0%, #662C91 100%)", word: "Attention 👀"}]


export default function Main({ exitPage, cycleExitPage, exitY, cycleExitY }) {
    const navigate = useNavigate();
    const [initialPage, cycleInitialPage] = useCycle("0%", "-100%", "100%");
    const [initialY, cycleInitialY] = useCycle("0%", "-100%", "100%");

    const [items, setItems] = useCycle(itemsA, itemsC, itemsB, itemsD,)

    document.title = "🍀 Oriol Arias CV";
    

    useEffect(() => {
        setTimeout(() => setItems(), 2200)
       
    }, [items, setItems])

    const handleProjects = (page) => {
        if (page === "projects") {
            cycleExitPage(0);
            cycleInitialPage(0);
            cycleExitY(1);
            cycleInitialY(1);
            navigate(`/${page}`);
        } else if (page === "skills") {
            cycleExitPage(2);
            cycleInitialPage(2);
            cycleExitY(0);
            cycleInitialY(0);
            navigate(`/${page}`);
        } else if (page === "contactme") {
            cycleExitPage(0);
            cycleInitialPage(0);
            cycleExitY(2);
            cycleInitialY(2);
            navigate(`/${page}`);
        } else if (page === "about") {
            cycleExitPage(1);
            cycleInitialPage(1);
            cycleExitY(0);
            cycleInitialY(0);
            navigate(`/${page}`);
        }
    };

    return (
        <motion.div
            className={styles.container}
            initial={{ x: exitPage, y: exitY }}
            animate={{ x: 0, y: 0 }}
            exit={{ x: initialPage, y: initialY }}
            transition={pageTransition}
        >
            <h3 className={styles.up} onClick={() => handleProjects("contactme")}>
                Contact Me
            </h3>
            <h3 className={styles.left} onClick={() => handleProjects("skills")}>
                Skills
            </h3>

            <div className={styles.background}>
                <motion.div
                    className={styles.titleContainer}
                    variants={base}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={childTransition}
                >

                    <motion.h4 className={styles.fullstack} variants={base} transition={{    
                    type: "tween",                    
                    duration: 0.2,
                    delay: 0.4,
                    delayChildren: 0.6,
                    staggerChildren: 0.6,}}  >
                        Full Stack Developer
                    </motion.h4>
                    <motion.span className={styles.fullstackLine}  variants={base} transition={{    
                    type: "tween",                    
                    duration: 0.2,
                    delay: 0.4,
                    delayChildren: 0.6,
                    staggerChildren: 0.6,}}></motion.span>
                    <motion.h1 className={styles.title} variants={base} transition={{    
                    type: "tween",                    
                    duration: 0.2,
                    delay: 0.6,
                    delayChildren: 0.6,
                    staggerChildren: 0.6,}}>Oriol Arias Pérez</motion.h1>
                    <motion.q className={styles.quote} variants={base} transition={{    
                    type: "tween",                    
                    duration: 0.2,
                    delay: 0.8,
                    delayChildren: 0.6,
                    staggerChildren: 0.6,}}>
                        Choose a job you love, and you will never have to work a day in your life.
                    </motion.q>
                </motion.div>
                <motion.div  
                    className={styles.imageContainer}
                    variants={base}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={childTransition}>
                         <motion.div className={styles.atributesContainer}
                         variants={base}
                         initial="initial"
                         animate="animate"
                         exit="exit"
                         transition={{    
                            type: "tween",                    
                            duration: 0.2,
                            delay: 0.6,
                            }} > 
                             <div className={styles.atributesHidden}
                                             style={{
                                                 display: "grid",
                                                 gridTemplateRows: "auto auto auto auto ",
                                                 
                                                 gridGap: 200,
                                             }}
                                         >
                                             {items.map((item, i) => (
                                                 <motion.div
                                                     style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: 140,
                                height: 40,
                                borderRadius: 10,
                                color: "white",
                                marginTop: "130px",
                                marginLeft: "30px",
                                boxShadow: "0 0 20px rgba(0, 0, 0, 0.271)",
                                background: colors[item -1].color,
                                                     }}
                                                     key={item}
                                                     layout
                                                     transition={{
                                type: "spring",
                                stiffness: 350,
                                damping: 30,
                                                     }}
                                                 >
                                                     <h3>{colors[item -1].word}</h3>
                                                 </motion.div>
                                ))}
                                         </div>
                         </motion.div>    
                    <motion.svg
                        className={styles.image}
                        variants={base}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        id="10015.io"
                        viewBox="0 0 480 480"
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                            delay: 0.6,
                                                 }}
                    >
                        <defs>
                            <clipPath id="blob">
                                <path d="M391,297.5Q306,355,223,384Q140,413,109,326.5Q78,216,99.5,132Q142,20,216,40Q337,58,414,143Q476,240,391,297.5Z" />
                            </clipPath>
                        </defs>
                        <image
                            x="-110"
                            y="0"
                            width="150%"
                            height="100%"
                            clipPath="url(#blob)"
                            href="https://i.postimg.cc/C1hDMz8d/foto-uri-cv-1-2000x1125.png"
                        ></image>
                    </motion.svg>
                </motion.div>
                <motion.div
                    className={styles.links}
                    variants={base}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <motion.div className={styles.linksIcons} variants={children} transition={{    
                    type: "tween",                    
                    duration: 0.2,
                    delay: 0.8,
                    delayChildren: 0.8,
                    staggerChildren: 0.4,}}>
                        <motion.a
                            variants={children}
                            href="https://gitlab.com/urioleh"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IoLogoGitlab className={styles.gitlab} />
                        </motion.a>
                        <motion.a
                            variants={children}
                            href="https://github.com/vranha"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IoLogoGithub className={styles.gitlab} />
                        </motion.a>
                        <motion.a
                            variants={children}
                            href="https://linkedin.com/in/oriol-arias"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin className={styles.gitlab} />
                        </motion.a>
                    </motion.div>
                    <motion.a
                        variants={children}
                        transition={{ type: "tween", bounce: 0, duration: 0.2, delay: 1.6 }}
                        className={styles.download}
                        href={CV}
                        download="CV Oriol Arias -- ¡Contratar!"
                    >
                        Download CV
                    </motion.a>
                </motion.div>
            </div>
            <h3 className={styles.right} onClick={() => handleProjects("about")}>
                About
            </h3>
            <h3 className={styles.down} onClick={() => handleProjects("projects")}>
                Projects
            </h3>
        </motion.div>
    );
}
