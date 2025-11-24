"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8"
    >
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <span className="text-6xl md:text-8xl">👤</span>
        </div>
        {/* Uncomment when you have a profile image */}
        {/* <Image
          src="/images/profile.jpg"
          alt="Profile"
          fill
          className="object-cover"
        /> */}
      </div>
    </motion.div>
  );
}

