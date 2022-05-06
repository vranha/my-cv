import { motion } from "framer-motion";
import styles from "./Modal.module.scss";
import { ImCross } from "react-icons/im";
import { BsArrow90DegDown } from "react-icons/bs";
import { useEffect, useState } from "react";
import CocktailsClub from "../../assets/CocktailsClubImage.png";
import MoviesHouse from "../../assets/MoviesHouseImage.png";
import ArcaneProject from "../../assets/ArcaneProjectImage.png";
import BlogLaravel from "../../assets/BlogLaravelImage.png";



export default function Modal({ modal, setModal, title, text1, text2, text3, link, type, things, }) {

  const [color, setColor] = useState('');
  const [img, setImg] = useState('');

  useEffect(() => {
   if (title === 'Cocktails Club') {
     setColor('#5ED3F3')
     setImg(CocktailsClub)
   }
   if (title === 'Movies House') {
     setColor('#5ED3F3')
     setImg(MoviesHouse)
   }
   if (title === 'Arcane Project') {
     setColor('#BC1E32')
     setImg(ArcaneProject)
   }
   if (title === "Blog Laravel") {
     setColor('#F75C54')
     setImg(BlogLaravel)
   }
  }, [title]);

    return (
        <>
            {modal && (
                <div className={styles.containerModal}>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        exit={{
                            scale: 0,
                            opacity: 0,
                        }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        className={styles.divModal}
                    >
                        <button onClick={() => setModal((modal) => !modal)} className={styles.closeButton}>
                            <ImCross className={styles.cross} style={{ paddingTop: "4px", paddingLeft: "1px" }}></ImCross>
                        </button>
                        <div className={styles.content}>
                          <h1>{title}</h1>
                          <h3>Framework/Library: <span style={{ color: color}}>{type}</span></h3>
                          <motion.div className={styles.infoDiv} initial={{ scale: 1.2 }}
                        animate={{
                            scale: 1,
                            
                        }}
                        exit={{
                            scale: 1,
                            
                        }}
                        transition={{ type: "spring", bounce: 0, duration: 2,  }} >
                            <img src={img} alt="img project" />
                            <ul className={styles.things}><BsArrow90DegDown className={styles.arrow} /> Here you can see...
                              {things.map((thing) => {
                                return (
                                  <li key={thing}>
                                    {thing}
                                  </li>
                                )
                              })}
                            </ul>
                            <div className={styles.texts}>
                                <p>{text1}</p>
                                {text2 ? <p>{text2}</p> : ''}
                                {text3 ? <p>{text3}</p> : ''}
                            </div>
                            
                          </motion.div>
                          <a href={link}  target="_blank" rel="noreferrer" >
                            <motion.button className={styles.learnMore}
                           whileInView={{
                            rotate: [0,5, -5,0],
                            ease: "backInOut",
                            transition: { duration: 2, repeat: Infinity, delay: 1, repeatDelay: 1},
                        }}>
                              <span className={styles.circle} aria-hidden="true">
                              <span className={`${styles.icon} ${styles.arrow}`}></span>
                              </span>
                              <span className={styles.buttonText}>OPEN IN A NEW TAB</span>
                            </motion.button>
                          </a>
                        </div>
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
