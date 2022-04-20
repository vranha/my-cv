import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import styles from "./Skills.module.scss"

const animations = {
    initial:{  x:"-100%"},
    animate:{  x:0},
    exit:{  x:"-100%"},

}

export default function Skills({ exitPage, cycleExitPage }) {

    const navigate = useNavigate();

    const handleMain = () => {
        navigate('/main')
        cycleExitPage(2);
    }

    return (
        <motion.div  className={styles.container} variants={animations} initial="initial" animate="animate" exit="exit" transition={{ duration: 1 }}>
            <div className={styles.center}>
                <h1>skills</h1>
                 <h3 onClick={handleMain}>Main</h3>
            </div>
        </motion.div>
    );
}