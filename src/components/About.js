import { Component } from "react";
import userContext from "../utils/userContext";
import UserClass from "./UserClass";
import { motion } from "framer-motion";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("p constructor");
  }

  componentDidMount() {
    console.log("p CDM");
  }

  render() {
    console.log("p render");
    return (
      <div className="about-page flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
        {/* Dark Background Image with animation */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30 animate-pulse"
          style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?dark,food,restaurant')" }}
        ></div>

        <motion.h1
          className="text-6xl font-bold text-orange-500 mb-6 z-10 drop-shadow-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About GrabEats
        </motion.h1>

        <motion.div
          className="bg-black bg-opacity-70 shadow-2xl rounded-xl p-8 max-w-3xl z-10 backdrop-blur-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-lg text-white mb-4">
            At GrabEats, we are passionate about bringing delicious and diverse cuisines right to your doorstep.
            Our mission is to connect food lovers with their favorite restaurants and provide a seamless food delivery experience.
          </p>
          <p className="text-md text-gray-300 mb-6">
            We believe in quality, speed, and customer satisfaction. Whether you're craving comfort food or exploring new flavors,
            GrabEats is here to make your dining experience memorable.
          </p>
          <userContext.Consumer>
            {({ loggedInUser }) => (
              <h2 className="text-xl font-semibold text-orange-400">
                Logged in as: {loggedInUser}
              </h2>
            )}
          </userContext.Consumer>
        </motion.div>

        <UserClass name="Krish (class)" location="Chandigarh" />
      </div>
    );
  }
}

export default About;
