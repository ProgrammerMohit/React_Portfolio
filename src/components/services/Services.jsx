import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on improving my skills
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Skills</motion.b> Profile
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Role.
          </h1>
          <button>WHAT I HAVE?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>LeetCode</h2>
          <p>
            This is my LeetCode Profile. I solved 100+ problems based upon Data Structure & Algoritms. I also solved SQL based questions in SQL 50 (Crack SQL interview in 50 Questions). LeetCode is one of the most used site for practicing Data Structure & Algorithms.
          </p>
          <button> <a href="https://leetcode.com/user6513IK/">See</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Coding Ninja</h2>
          <p>
          This is my Coding Ninja Profile. I solved 100+ problems based upon Data Structure & Algoritms. Some are Easy , Moderate and Hard. You can filter out your questions according to your difficulties. I solved a type of questions which is asked in companies like TCS, Infosys, Capgemini.
          </p>
          <button><a href="https://www.codingninjas.com/studio/profile/MohitU">See</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Code For Freedom</h2>
          <p>
            This Contest is held on 15 August 2023, conducted by Coding Ninja. It was a great experience for me to participate in this contest. I got a AIR 784 and the questions are easy to moderate level. These type of contests are very good for beginners to improve their coding skills 
          </p>
          <button> <a href="https://drive.google.com/file/d/1ROgRliAFkAkN5sXVqpi2eel94hBedDYw/view?usp=sharing">See</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>CodeForces</h2>
          <p>
            CodeForces is one of the toughest Competitive Programming site for Programmer/Coders. I solved 130+ questions in this platform. The contest are divided into divisions. As per as your level you can join any division for solving problems. After solving 100+ problems I can think logically.
          </p>
          <button><a href="https://codeforces.com/profile/it.20203040">See</a></button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
