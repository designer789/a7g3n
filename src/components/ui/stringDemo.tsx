"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion" // Fixed import from "motion/react" to "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface StringDemoProps {
  className?: string
}

export const StringDemo = ({
  className,
}: StringDemoProps) => {
  const [randomString, setRandomString] = useState("")
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Generate initial string on mount
    const str = generateRandomString(3000)
    setRandomString(str)
  }, [])

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  const handleMouseMove = () => {
    // Generate new string on every mouse movement
    const str = generateRandomString(3000)
    setRandomString(str)
  }

  return (
    <div className={cn("bg-transparent flex items-center justify-center w-full h-full relative", className)}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="group/card w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern isHovering={isHovering} randomString={randomString} />

        {/* Content Overlay - improves text visibility */}
        <div className="absolute inset-0 bg-black opacity-50 z-[5]"></div>

        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12 w-full max-w-4xl mx-auto">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-medium leading-tight font-[family-name:var(--font-aldrich)] mb-8 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text text-center"
          >
            Join A7G3N Today
          </motion.h2>

          {/* Vision Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 text-center max-w-3xl"
          >
            We imagine a living blockchain world—where every wallet, contract, and transaction is enhanced by
            autonomous, ever-adaptive AI agents.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="https://x.com/A7G3N" target="_blank">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black">
                Follow on X
              </button>
            </Link>
            <Link href="https://t.me/A7G3N" target="_blank">
              <button className="px-8 py-4 bg-transparent border border-blue-500/30 hover:border-blue-500 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black">
                Join Telegram
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

interface CardPatternProps {
  isHovering: boolean
  randomString: string
}

function CardPattern({ isHovering, randomString }: CardPatternProps) {
  return (
    <div className="pointer-events-none">
      <motion.div className="absolute inset-0 bg-gradient-to-b from-black via-blue-600/50 to-blue-400/50 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500" />
      <motion.div className="absolute inset-0 opacity-0 mix-blend-overlay group-hover/card:opacity-50">
        <p className="absolute inset-x-0 text-lg h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  )
}

const characters = "A7G3N"
export const generateRandomString = (length: number) => {
  let result = ""
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}