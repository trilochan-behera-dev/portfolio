import { motion } from "framer-motion";

export default function RightShow({children,className}) {
  return (
    <motion.div
        className={className}
        initial={{ x: '10vw' }} // Start from the left side
        animate={{ x: 0 }} // Move to the original position
        transition={{ duration: 1.5, type: 'spring', stiffness: 20 }}
      >
       {children}
      </motion.div>
  );
}
