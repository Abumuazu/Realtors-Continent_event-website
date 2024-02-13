import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper ">
      <div className="paddings innerWidth  flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Theme: <br />
            School of 
              <br />Sales
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText heroText flexhero-des">
          This training is not for everyone as we can't accommodate everybody. It's meant for those who aspire to be among the top 10% in the industry that will be raking in 80% of the total commissions If this is you, then sign up ASAP!
Come learn how to get your business in front of the right people at the right time, increasing your visibility, engagement, and ultimately, your revenue. With this workshop, you'll generate more leads, increase conversions, and close more sales
            {/* <span>Explore real estate as a wealth-building tool at</span>
            <span>FOLLOW THE MONEY— an event for business</span>
            <span>enthusiasts, content creators, and aspiring real</span>
            <span>estate entrepreneurs. Don't miss expert insights</span>
            <span>on entrepreneurship, content creation, and real</span>
            <span>estate opportunities.</span> */}
           
          </div>
       

        
            {/* <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" /> */}
            <button className="button"> <a href="https://tix.africa/rcontinent"> Get free ticket</a> </button>
      

          <div className="flexCenter stats">
            {/* <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div> */}
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
