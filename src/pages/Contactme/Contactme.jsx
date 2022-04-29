import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import {MdOutlineMail} from 'react-icons/md'
import {HiOutlinePhone} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import contactme from "../../assets/contactme.svg";
import styles from "./Contactme.module.scss";


const animations = {
    initial: { y: "-100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
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

export default function Contactme({ exitY, cycleExitY }) {
    const navigate = useNavigate();

    document.title = "🥰 Hire me";

    const handleMain = () => {
        navigate("/main");
        cycleExitY(2);
    };

    const form = useRef();

    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
      
      emailjs.sendForm('service_5jg4jxh', 'template_2pglrqx', form.current, 'HlTnlo0W8F7_TvC8Y')
      .then((result) => {
          console.log(result.text);
          form.current.reset()
            setDone(true);
        }, (error) => {
            console.log(error.text);
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
                <motion.div
                    className={styles.center}
                    variants={base}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={childTransition}
                >
                    <motion.div className={styles.left} variants={base} transition={childTransition}> 
                        
                            <motion.article className={styles.contact__option} variants={children}>
                            <MdOutlineMail className={styles.contact__icon}/>
                                <h4>E-mail</h4>
                                <h5>urioleh@gmail.com</h5>
                                <a href="mailto:urioleh@gmail.com" target="_blank" rel="noreferrer">Send an e-mail</a>
                            </motion.article>
                            <motion.article className={styles.contact__option} variants={children}>
                            <HiOutlinePhone className={styles.contact__icon}/>
                                <h4>Wanna talk?</h4>
                                <h5>674411302</h5>
                                <a href={`tel:${+34674411302}`} target="_blank" rel="noreferrer">Call me</a>
                            </motion.article>
                            <motion.article className={styles.contact__option} variants={children}>
                            <BsWhatsapp className={styles.contact__icon}/>
                                <h4>WhatsApp</h4>
                                <h5>Don't be shy</h5>
                                <a href="https://api.whatsapp.com/send?phone=+34674411302" target="_blank" rel="noreferrer">Send a message</a>
                            </motion.article>
                        
                    </motion.div>
                    <motion.div className={styles.right} variants={children} >
                    <h1>Contact <strong>me</strong></h1>
                    {!done ? <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" className={styles.user} placeholder="Name" required />
                        <input type="email" name="user_email" className={styles.user} placeholder="E-mail"required />
                        <textarea name="message" className={styles.user} cols="30" rows="10" placeholder="Message" required></textarea>
                        <input type="submit" value="Send" className={styles.button}/>
                        <div className={styles.blur} style={{ background: "purple" }}>
                        </div>
                    </form> : <div className={styles.thanks}>
                        <h2> <span>Thanks</span> for contacting me<span>!</span> </h2>
                            <h3>I'll answer you <strong>soon</strong> </h3>
                    </div> }
                    
                    </motion.div>

                </motion.div>
            </div>
                    <h3 onClick={handleMain} className={styles.down}>
                        Main
                    </h3>
            {/* <motion.img
                variants={base}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    type: "tween",
                    bounce: 0.5,
                    duration: 0.2,
                    delay: 0.6,
                }}
                className={styles.emailSvg}
                src={contactme}
                alt=""
            /> */}
        </motion.div>
    );
}
