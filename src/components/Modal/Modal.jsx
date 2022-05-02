import { motion } from "framer-motion";
import styles from "./Modal.module.scss";
import { ImCross } from "react-icons/im";
import { useEffect, useState } from "react";

const animations = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
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
    delay: 0.1,
    delayChildren: 0.2,
    staggerChildren: 0.3,
};

export default function Modal({ modal, setModal, title, text1, text2, text3, link, type, things }) {

  const [color, setColor] = useState('');

  useEffect(() => {
   if (type === "React") {
     setColor('#5ED3F3')
   }
   if (type === "Angular") {
     setColor('#BC1E32')
   }
   if (type === "Laravel") {
     setColor('#F75C54')
   }
  }, [type]);

    return (
        <>
            {modal && (
                <div className={styles.containerModal}>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: -50,
                            opacity: 0,
                        }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        className={styles.divModal}
                    >
                        <button onClick={() => setModal((modal) => !modal)} className={styles.closeButton}>
                            <ImCross style={{ paddingTop: "4px", paddingLeft: "1px" }}></ImCross>
                        </button>
                        <h1>{title}</h1>
                        <h3>Framework/Library: <span style={{ color: color}}>{type}</span></h3>
                        <div className={styles.texts}>
                            <p>{text1}</p>
                            {text2 ? <p>{text2}</p> : ''}
                            {text3 ? <p>{text3}</p> : ''}
                        </div>
                        <a href={link}  target="_blank" rel="noreferrer" >Open in another tab</a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                        onClick={() => setModal((modal) => !modal)}
                        className={styles.backgroundModal}
                    />
                </div>
            )}
        </>
    );
}
