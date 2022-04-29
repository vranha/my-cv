import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import move from "lodash-move";
import ps from "../../assets/ps.svg"; 
import lr from "../../assets/lr.png"; 
import pr from "../../assets/pr.webp"; 
import pm from "../../assets/pm.png"; 
import c1 from "../../assets/c1.png"; 
import fc from "../../assets/fc.png"; 
import ae from "../../assets/ae.png"; 
import styles from "./About.module.scss"
import { useState } from "react";


const icones = [{image: ps, name: 'photoshop'}, {image: lr, name: 'lightroom'}, {image: pr, name: 'premiere'}, {image: pm, name: 'postman'},  {image: c1, name: 'capture one'}, {image: fc, name: 'final cut'}, {image: ae, name: 'after effects'}]

const animations = {
    initial:{  x:"100%" },
    animate:{  x:0},
    exit:{  x:"100%"},

}
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

const CARD_OBJECT = [{color: "linear-gradient(135deg, rgba(132,163,228,1) 0%, rgba(192,143,227,1) 100%)", title: "Specialist Salesman", place: {one: "FNAC", two: "ELC"}, icon: "🎧"}, {color:"linear-gradient(135deg, rgba(154,221,126,1) 0%, rgba(171,158,93,1) 100%)", title: 'Cameraman and Editor', place: {one: "BETEVÉ", two: "i3tv"}, icon : '📹'}, {color: " linear-gradient(135deg, rgba(228,132,221,1) 0%, rgba(227,170,143,1) 100%)", title: 'Guitar Teacher', place: 'Les Mandolines', icon: '🎸'}, {color: "linear-gradient(135deg, rgba(132,226,228,1) 0%, rgba(117,164,124,1) 100%)", title: 'Stage Builder', place: 'Viu el teatre', icon: '👨‍🔧'}];
const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;




export default function About({exitPage, cycleExitPage  }) {

    const navigate = useNavigate();

    const [cards, setCards] = useState(CARD_OBJECT);
    const moveToEnd = from => {
      setCards(move(cards, from, cards.length - 1));
    };

    const handleMain = () => {
        navigate('/main')
        cycleExitPage(1);
    }

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
                
            <div className={styles.experienceContainer}>
              <h1 className={styles.experience}>Latest <strong>works</strong></h1>
            
      <ul className={styles.cardWrapStyle}>
        {cards.map((work, index) => {
          const canDrag = index === 0;

          return (
            <motion.li
              key={work.color}
              className={styles.cardStyle}
              style={{
                background: work.color,
                cursor: canDrag ? "grab" : "auto"
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: CARD_OBJECT.length - index
              }}
              drag={canDrag ? "y" : true}
              dragConstraints={{
                top: 0,
                bottom: 0
              }}
              onDragEnd={() => moveToEnd(index)}
            >
              <h3><strong> [ </strong>{work.title}<strong> ] </strong></h3>
              <motion.div whileInView={{
                               rotate: [10, -10, 10],
                                ease: "backInOut",
                                transition: { duration: 3, repeat: Infinity, repeatType: "loop" },
                                repeat: Infinity,
                            }}>{work.icon}</motion.div>
              { work.place.one ? <h4>at: <strong>{work.place.one} / {work.place.two}</strong></h4>
              : <h4>at: <strong>{work.place}</strong></h4>}
            </motion.li>
          );
        })}
      </ul>
   
            </div>
            <div className={styles.studiesContainer}>
            <h1 className={styles.studies}>My <strong>studies</strong></h1>
            <div className={styles.studieDiv}>
              <div className={styles.studie1}>
                <h3>Full-Stack</h3>
                <h4>Bootcamp</h4>
                <h5>Upgrade-Hub</h5>
              </div>
              <div className={styles.studie2}>
                <h3>Audiovisual</h3>
                <h4>Higher Degree Course</h4>
                <h5>Ites</h5>
              </div>
            </div>
            </div>
            <div className={styles.videosContainer}>
            <h1 className={styles.videosTitle}>Other abilities</h1>
              <div className={styles.videos}>
                {icones.map((icon) => {
                  return(
                  <img src={icon.image} alt={icon.name} key={icon.name} />
                  )
                })}
              </div>
            </div>
            </div>
                    <h3 onClick={handleMain} className={styles.left}>
                        Main
                    </h3>
                    
         
        </motion.div>
    );
}