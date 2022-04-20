import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import styles from "./About.module.scss"

const animations = {
    initial:{  y:"100%"},
    animate:{  y:0},
    exit:{  y:"100%"},

}

export default function About({exitY, cycleExitY  }) {

    const navigate = useNavigate();

    const handleMain = () => {
        navigate('/main')
        cycleExitY(1);
    }

    return (
        <motion.div  className={styles.container} variants={animations} initial="initial" animate="animate" exit="exit" transition={{ duration: 1 }}>
            <div className={styles.center}>
                <h1>About</h1>
                 <h3 onClick={handleMain}>Main</h3>
            </div>
            </motion.div>
    );
}