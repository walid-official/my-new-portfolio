import { FaCode, FaCodepen, FaCodeBranch } from "react-icons/fa";
import { motion } from "framer-motion";

const cards = [
  {
    icon: <FaCode />,
    text: "I'm a dedicated web developer, constantly evolving and refining my skills. Every challenge I encounter is a stepping stone toward mastery, and every project is a chance to innovate. With passion and persistence, I'm crafting my place in the digital landscape. 🚀",
  },
  {
    icon: <FaCodepen />,
    text: "From problem-solving to creative design, web development is my playground. I embrace every challenge as a chance to learn and improve, refining my skills one project at a time. Passion drives me, and effort defines my journey. 🌍💻",
  },
  {
    icon: <FaCodeBranch />,
    text: "Building the web isn’t just my skill—it’s my passion. Every day, I strive to grow, refine my craft, and create meaningful digital experiences. Through hard work and curiosity, I’m shaping a future where code meets creativity. 💡💻",
  },
];

export default function DevJourneyCards() {
  return (
    <div className="flex flex-col items-center gap-10 py-10 px-4 md:px-10 lg:px-20">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="bg-white shadow-2xl p-6 rounded-2xl max-w-lg text-center border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-6xl text-gray-700 flex justify-center">{card.icon}</div>
          <p className="py-4 text-gray-700 text-center">{card.text}</p>
        </motion.div>
      ))}
    </div>
  );
}
