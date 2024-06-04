import React from "react";
import Button from "../Button";
import {
  fadeInDown,
  fadeInRight,
  fadeInUp,
  revealText,
  revealWord,
  staggerContainer,
} from "../../utils/animation";
import { motion } from "framer-motion";

const SubscriptionSection: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-orange-800 bg-black"
    >
      <div className="subs-grad-section pt-16 md:pt-32 pb-44 px-2 md:px-4">
        <motion.div
          variants={fadeInUp}
          className="flex justify-center flex-col items-center mb-4 md:mb-2"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealText}
            className="text-white text-3xl md:text-7xl text-center w-full "
          >
            <motion.span variants={revealWord} className="text-gray-500">
              B
            </motion.span>
            <motion.span variants={revealWord} className="text-gray-500">
              E
            </motion.span>
            <motion.span variants={revealWord} className="text-gray-600">
              C
            </motion.span>
            <motion.span variants={revealWord} className="text-gray-600">
              O
            </motion.span>
            <motion.span variants={revealWord} className="text-gray-600">
              M
            </motion.span>
            <motion.span variants={revealWord} className="text-gray-600">
              E
            </motion.span>
            <motion.span variants={revealWord} className="text-gray-700">
              {" "}
            </motion.span>
            <motion.span variants={revealWord} className="text-gray-700">
              P
            </motion.span>
            <motion.span variants={revealWord} className="text-gray-700">
              A
            </motion.span>
            <motion.span variants={revealWord} className="text-gray-700">
              R
            </motion.span>
            <motion.span variants={revealWord} className="text-gray-700">
              T
            </motion.span>
            <motion.span variants={revealWord}> </motion.span>
            <motion.span variants={revealWord} className="text-gray-700">
              O
            </motion.span>
            <motion.span variants={revealWord} className="text-gray-700">
              F
            </motion.span>
            <motion.span variants={revealWord} className="text-gray-700">
              {" "}
            </motion.span>
            <motion.span variants={revealWord} className="text-gray-700">
              T
            </motion.span>
            <motion.span variants={revealWord} className="text-gray-700">
              H
            </motion.span>
            <motion.span variants={revealWord} className="text-gray-700">
              E
            </motion.span>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-gray-100 text-2xl md:text-7xl mb-4"
          >
            ACONOMY COMMUNITY
          </motion.h1>
        </motion.div>

        <motion.p
          variants={revealText}
          className="text-gray-300 mb-10 mx-auto text-center"
        >
          Are you keen to dive deeper into Blockchain, Financial markets, and
          Aconomy? <br />
          Sign up with your email address to stay updated and never miss any{" "}
          <br /> important news or updates.
        </motion.p>

        <motion.form
          variants={fadeInUp}
          transition={{duration:2,delay:2}}
          className="flex flex-col items-center md:items-start sm:flex-row justify-center gap-4"
        >
          <motion.span variants={fadeInUp}>
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="bg-gray-500 w-full md:w-[35vw] text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />

            <div className="mt-4 flex items-start px-4 md:gap-2">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 bg-gray-600 text-orange-600"
              />
              <motion.span variants={fadeInDown} className="text-xs text-gray-500 text-center sm:text-left max-w-sm">
                I agree to receive newsletters and promotional emails from
                Aconomy (you can unsubscribe at any time).
              </motion.span>
            </div>
          </motion.span>

          <motion.div variants={fadeInRight}>
            <Button text="SIGN UP" type="apply" />
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default SubscriptionSection;

