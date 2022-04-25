import { motion, useCycle } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IoLogoGitlab } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import CV from "../../assets/CV.png";
import styles from "./Main.module.scss";

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    bounce: 0,
    damping: 15,
    duration: 1,
    delayChildren: 0.2,
    staggerChildren: 0.2,
};
const base = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
};

const childTransition = {
    type: "tween",
    bounce: 0.5,
    duration: 0.2,
    delay: 0.2,
    delayChildren: 0.2,
    staggerChildren: 0.2,
};
const children = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
};

export default function Main({ exitPage, cycleExitPage, exitY, cycleExitY }) {
    const navigate = useNavigate();
    const [initialPage, cycleInitialPage] = useCycle("0%", "-100%", "100%");
    const [initialY, cycleInitialY] = useCycle("0%", "-100%", "100%");

    const handleProjects = (page) => {
        if (page === "about") {
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
        } else if (page === "projects") {
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
                    <motion.h4
                        className={styles.fullstack}
                        variants={base}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >Full Stack Developer
                    </motion.h4>
                        <span className={styles.fullstackLine}></span>
                    <motion.h1 variants={children} className={styles.title}>
                        Oriol Arias Pérez
                    </motion.h1>
                    <motion.q variants={children} className={styles.quote}>
                        Choose a job you love, and you will never have to work a day in your life.
                    </motion.q>
                </motion.div>
                <motion.svg
                    className={styles.image}
                    variants={children}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    id="10015.io"
                    viewBox="0 0 480 480"
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
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
                <div className={styles.links}>
                    <div className={styles.linksIcons}>
                        <a href="https://gitlab.com/urioleh" target="_blank" rel="noreferrer">
                            <IoLogoGitlab className={styles.gitlab} />
                        </a>
                        <a href="https://linkedin.com/in/oriol-arias" target="_blank" rel="noreferrer">
                            <FaLinkedin className={styles.gitlab} />
                        </a>
                    </div>
                    <a className={styles.download} href={CV} download="CV Oriol Arias -- ¡Contratar!">
                        Download CV
                    </a>
                </div>
            </div>
            <h3 className={styles.right} onClick={() => handleProjects("projects")}>
                Projects
            </h3>
            <h3 className={styles.down} onClick={() => handleProjects("about")}>
                About
            </h3>
        </motion.div>
    );
}
