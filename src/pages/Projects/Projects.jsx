import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import CocktailsClub from "../../assets/CocktailsClub.webp";
import MoviesHouse from "../../assets/MoviesHouse.webp";
import ArcaneProject from "../../assets/ArcaneProject.webp";
import BlogLaravel from "../../assets/BlogLaravel.webp";
import styles from "./Projects.module.scss";
import Modal from "../../components/Modal/Modal";
import { useEffect, useState } from "react";

const animations = {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "100%" },
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

export default function Projects({ exitY, cycleExitY }) {
    const navigate = useNavigate();

    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [link, setLink] = useState("");
    const [type, setType] = useState("");
    const [things, setThings] = useState([]); //TODO: Acabar esto

    document.title = "🚀 My works";

    const handleMain = () => {
        navigate("/main");
        cycleExitY(1);
    };

    const modalOpener = (project) => {
        if (project === "CocktailsClub") {
            setModal((moda) => !modal);
            setTitle("Cocktails Club");
            setText1("This is a double-sided catering website.");
            setText2(
                "The user can do actions such as reserving a table or even asking for cocktails to be brought to your site (prior registration and geologization). "
            );
            setText3("The administrator has access to lists of orders and reservations to manage.");
            setLink("https://cocktailsclub.herokuapp.com");
            setType("React & Node (MERN)");
            setThings([
                "Registration and Login",
                "Session token",
                "E-mail Confirmation and Contact",
                "Pay method",
                "Geolocalization",
                "and more...",
            ]);
        }
        if (project === "MoviesHouse") {
            setModal((moda) => !modal);
            setTitle("Movies House");
            setText1("Here we have a website where we call an api for movies and premieres.");
            setText2("You can search the movies by genre, name or sort them in different ways.");
            setText3("If you are registered you can save them in favorites and customize them with colors or titles.");
            setLink("https://my-movies-house.herokuapp.com/");
            setType("React & Node (MERN)");
            setThings([
                "Redux",
                "Registration and Login",
                "Session token",
                "Local Storage",
                "Light/Dark mode",
                "and more...",
            ]);
        }
        if (project === "ArcaneProject") {
            setModal((moda) => !modal);
            setTitle("Arcane Project");
            setText1('This is a website dedicated to the popular Netflix series "Arcane".');
            setText2(
                "In it you can research about the arcane characters (and Leage of Legends) and even create your own."
            );
            setText3("");
            setLink("https://arcaneproject.herokuapp.com");
            setType("Angular");
            setThings([
                "Angular Modules",
                "Local Storage",
                "Translate Language",
                "Fake JSON api",
                "Pagination",
                "and more...",
            ]);
        }
        if (project === "BlogLaravel") {
            setModal((moda) => !modal);
            setTitle("Blog Laravel");
            setText1("This website is a very simple blog with a minimalist style.");
            setText2("In it you can leave comments as a user, or manage them as an administrator");
            setText3("");
            setLink("https://lit-inlet-82392.herokuapp.com/");
            setType("Laravel & SQL");
            setThings(["C.R.U.D", "Registration and Login", "Session token", "MySql database", "and more..."]);
        }
    };

    const [width, setWindowWidth] = useState(0);
    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        updateDimensions();

        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);

        if (width < 560) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    };

    // const responsive = width > 560;

    // const showNav = {
    //     display: responsive ? "flex" : "none",
    // };
    // const showMenuIcon = {
    //     display: responsive ? "none" : "flex",
    // };
   

    return (
        <motion.div
            className={styles.container}
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
        >
            <motion.div
                className={styles.background}
                animate={{
                    scale: modal ? 0.8 : 1,
                }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            >
                {!mobile ? <motion.div
                    className={styles.containerProjects}
                    variants={base}
                    exit={{
                        opacity: 0,
                    }}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                        delay: 0,
                    }}
                >
                    <motion.h1
                        variants={base}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            type: "tween",
                            duration: 0.2,
                            delay: 0.4,
                        }}
                    >
                        My <strong>Projects</strong>
                    </motion.h1>
                     <motion.div
                        className={styles.projectStructure}
                        variants={base}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                            delay: 0.4,
                            delayChildren: 0,
                            staggerChildren: 0.2,
                        }}
                    >
                        <motion.div
                            variants={base}
                            className={styles.project}
                            onClick={() => modalOpener("CocktailsClub")}
                        >
                            <img className={styles.imgProjects} src={CocktailsClub} alt="CocktailsClub" />
                            <div className={styles.textBox}>
                                <h2>Cocktails Club</h2>
                                <p>JSX / React</p>
                            </div>
                            <h4>Open</h4>
                        </motion.div>
                        <motion.div
                            variants={base}
                            className={styles.project}
                            onClick={() => modalOpener("MoviesHouse")}
                        >
                            <img className={styles.imgProjects} src={MoviesHouse} alt="MoviesHouse" />
                            <div className={styles.textBox}>
                                <h2>Movies House</h2>
                                <p>JSX / React</p>
                            </div>
                            <h4>Open</h4>
                        </motion.div>
                        <motion.div
                            variants={base}
                            className={styles.project}
                            onClick={() => modalOpener("ArcaneProject")}
                        >
                            <img className={styles.imgProjects} src={ArcaneProject} alt="ArcaneProject" />
                            <div className={styles.textBox}>
                                <h2>Arcane Project</h2>
                                <p>TS / Angular</p>
                            </div>
                            <h4>Open</h4>
                        </motion.div>
                        <motion.div
                            variants={base}
                            className={styles.project}
                            onClick={() => modalOpener("BlogLaravel")}
                        >
                            <img className={styles.imgProjects} src={BlogLaravel} alt="BlogLaravel" />
                            <div className={styles.textBox}>
                                <h2>Users Blog</h2>
                                <p>PHP / Laravel</p>
                            </div>
                            <h4>Open</h4>
                        </motion.div>
                    </motion.div>
                </motion.div> :
                 <div>
                     <motion.h1
                     variants={base}
                     initial="initial"
                     animate="animate"
                     exit="exit"
                     transition={{
                         type: "tween",
                         duration: 0.2,
                         delay: 0.4,
                     }}
                                  >
                     My <strong>Projects</strong>
                                  </motion.h1> 

                                  <Carousel className={styles.carousel} >
  <Carousel.Item>
  <motion.div
                            variants={base}
                            className={styles.project}
                            onClick={() => modalOpener("CocktailsClub")}
                        >
                            <img className={styles.imgProjects} src={CocktailsClub} alt="CocktailsClub" />
                            <div className={styles.textBox}>
                                <h2>Cocktails Club</h2>
                                <p>JSX / React</p>
                            </div>
                            <h4>Open</h4>
                        </motion.div>
  </Carousel.Item>
  <Carousel.Item>
  <motion.div
                            variants={base}
                            className={styles.project}
                            onClick={() => modalOpener("MoviesHouse")}
                        >
                            <img className={styles.imgProjects} src={MoviesHouse} alt="MoviesHouse" />
                            <div className={styles.textBox}>
                                <h2>Movies House</h2>
                                <p>JSX / React</p>
                            </div>
                            <h4>Open</h4>
                        </motion.div>
  </Carousel.Item>
  <Carousel.Item>
  <motion.div
                            variants={base}
                            className={styles.project}
                            onClick={() => modalOpener("ArcaneProject")}
                        >
                            <img className={styles.imgProjects} src={ArcaneProject} alt="ArcaneProject" />
                            <div className={styles.textBox}>
                                <h2>Arcane Project</h2>
                                <p>TS / Angular</p>
                            </div>
                            <h4>Open</h4>
                        </motion.div>
  </Carousel.Item>
  <Carousel.Item>
  <motion.div
                            variants={base}
                            className={styles.project}
                            onClick={() => modalOpener("BlogLaravel")}
                        >
                            <img className={styles.imgProjects} src={BlogLaravel} alt="BlogLaravel" />
                            <div className={styles.textBox}>
                                <h2>Users Blog</h2>
                                <p>PHP / Laravel</p>
                            </div>
                            <h4>Open</h4>
                        </motion.div>
  </Carousel.Item>
</Carousel>
<h3 className={styles.take}>Take a <strong>look</strong></h3>
<h4  className={styles.take}>and <strong>tell me</strong> something</h4>
                                  
                 </div>}
                <div className={styles.containerVideos}></div>
            </motion.div>
            <Modal {...{ modal, setModal, title, text1, text2, text3, link, type, things }}></Modal>
            <h3 onClick={handleMain} className={styles.up}>
                Main
            </h3>
        </motion.div>
    );
}
