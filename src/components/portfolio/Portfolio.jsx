
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Page",
    img: "./rt.png",
    desc: "This is a Simple React Login Page, It's just a Front-End Part of the site. In this project I used ViteJs , is a very effective and easy to use framework",
    link: "https://elegant-paletas-f0e8d2.netlify.app/",
  },
  {
    id: 2,
    title: "Weather App",
    img: "./we.png",
    desc: "This Project is done during my College assesment test. I used HTML, CSS and JavaScript and little bit of API (RapidAPI). In this Project user can easily fetch their weather data of different locations",
    link: "https://lively-duckanoo-ff99ff.netlify.app/",
  },
  {
    id: 3,
    title: "Tic-Tac-Toe",
    img: "./tic.png",
    desc: "I made this project when I was learning JavaScript.This is Fully responsive and Funtional. You & Your friends can play it anytime or anywhere for Fun. In this project I have used arrays, map & functions.",
    link: "https://bright-jalebi-70cc2d.netlify.app/",
  },
  {
    id: 4,
    title: "Login Page",
    img: "./lg.png",
    desc: "This Project was made when me and my friend learn UI Design. I used some great illustrators which is freely available in Freepik and many more sites. I will use this login UI for my further project and I will make it more better. ",
    link: "https://sunny-marzipan-c5fcdc.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button> <a href={item.link}>See Demo</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;