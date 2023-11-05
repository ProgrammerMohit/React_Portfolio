import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
            initial = {{opacity:0,scale: 0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration: 0.5}}
        ></motion.span>
        <div className="social">
            <a href="https://www.linkedin.com/in/mohit-prasad-5a80181b7/"><img src="./linkedin.png" alt="" /> </a>
            <a href="https://github.com/ProgrammerMohit"><img src="./git.png" alt="" /> </a>
            <a href="https://youtu.be/95FZYX2RojE"><img src="./youtube.png" alt="" /> </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
