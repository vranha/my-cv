import { motion, useCycle } from "framer-motion"
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.scss"


const pageTransition = {
    type: "tween",
    ease: "anticipate",
    bounce: 0,
    damping: 15,
    duration: 1
}

export default function Main({ exitPage, cycleExitPage, exitY, cycleExitY }) {
    const navigate = useNavigate();
    const [initialPage, cycleInitialPage] = useCycle("0%","-100%", "100%")
    const [initialY, cycleInitialY] = useCycle("0%", "-100%", "100%")

    const handleProjects = (page) => {
        if(page=== "about") {
            cycleExitPage(0);
            cycleInitialPage(0);
            cycleExitY(1);
            cycleInitialY(1);
            navigate(`/${page}`)
        } else if(page=== "skills") {
            cycleExitPage(2);
            cycleInitialPage(2);
            cycleExitY(0);
            cycleInitialY(0);
            navigate(`/${page}`)
        } else if(page=== "contactme") {
            cycleExitPage(0);
            cycleInitialPage(0);
            cycleExitY(2);
            cycleInitialY(2);
            navigate(`/${page}`)
        } else if(page=== "projects") {
            cycleExitPage(1);
            cycleInitialPage(1);
            cycleExitY(0);
            cycleInitialY(0);
            navigate(`/${page}`)
        }
       
    }

    return (
        <motion.div className={styles.container} initial={{  x:exitPage, y: exitY }} animate={{  x:0, y: 0}} exit={{  x: initialPage, y: initialY}} transition={pageTransition} >
        <h3 className={styles.up} onClick={() => handleProjects("contactme")}>Contact Me</h3>
        <h3 className={styles.left} onClick={() => handleProjects("skills")}>Skills</h3>
        <h1 className={styles.title}>main</h1>
        <h3 className={styles.right} onClick={() => handleProjects("projects")}>Projects</h3>
        <h3 className={styles.down} onClick={() => handleProjects("about")}>About</h3>
        </motion.div>
    );
}
