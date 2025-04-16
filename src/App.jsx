import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CircularProgress from "@mui/material/CircularProgress";
import ThreeDotsLoader from "./ThreeDotsLoader";
import { motion } from "framer-motion";
import SOON from "./assets/SOON.png"
import COMING from "./assets/COMING.png"
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
function App() {
  // const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container">
      {" "}
  
      <motion.div className="animate" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.img 
        src={COMING}
        alt="coming" 
        variants={itemVariants} 
        custom={0} // No delay for first element
      />

      <motion.div className="new-look" variants={itemVariants} custom={1}>
        <p> NEW LOOK AND FEEL</p>
      </motion.div>

      <motion.img 
        src={SOON}
        alt="soon" 
        variants={itemVariants} 
        custom={2} // 2-second delay
      />
    </motion.div>
      <div className="fresh">
      <motion.div
          style={{
            color: "white",
            borderRadius: "20px",
            backgroundColor: "blue",
            justifyContent: "center",
          }}
          animate={{ rotateZ: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex"
        >
          {"fresh".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="text-4xl font-bold mx-1"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

      </div>
      <div className="card">
  <ThreeDotsLoader />
  
  <a href="mailto:admin@bluecloudai.com">
    <button>Get in touch</button>
  </a>
  <div className="address" style={{ textSize: "small" , fontSize:"small", margin: "20px"}}>
          <h3>+27 11 123 123</h3>
          <h3>48 Tesla Crescent Sunninghill Johannesburg 2162</h3>
          <h3>Bluecloudai.com</h3>
        </div>
        <div
  className="socials"
  style={{
    display: "flex",
    flexDirection: "row",
    padding: "2px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
  }}
>
  <FacebookIcon
    sx={{ color: "#1877F2" }}
    onClick={() => window.open("https://www.facebook.com/BluecloudAI1/", "_blank")}
  />
  <XIcon
    sx={{ color: "black" }}
    onClick={() => window.open("https://twitter.com/BlueCloudAI_", "_blank")}
  />
  <LinkedInIcon
    sx={{ color: "#0077B5" }}
    onClick={() => window.open("https://www.linkedin.com/in/bluecloud-ai/", "_blank")}
  />
  <InstagramIcon
    sx={{ color: "#962fbf" }}
    onClick={() => window.open("https://www.instagram.com/bluecloud_ai/", "_blank")}
  />
</div>

</div>

      <div className="exciting">
        <motion.div
          style={{
            color: "black",
            borderRadius: "20px",
            backgroundColor: "yellow",
            justifyContent: "center",
          }}
          animate={{ rotateZ: [0, 30, 0] }}
          transition={{ delay: 1,repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex"
        >
          {"exciting".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="text-4xl font-bold mx-1"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.5 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { delay: delay, duration: 0.8, ease: "easeOut" }
  })
};

// export  AnimatedComingSoon;
export default App;
