"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


interface FAQProps {
  className?: string;
}

const faqItems = [
  {
    question: "What is A7G3N?",
    answer: "A7G3N is a decentralized cross-chain AI agent platform that enables autonomous, adaptive blockchain operations."
  },
  {
    question: "What makes A7G3N unique?",
    answer: "It combines reinforcement learning, cross-chain execution, and DAO governance into a modular, self-improving system."
  },
  {
    question: "What can AGN tokens be used for?",
    answer: "AGN tokens are used for staking, governance voting, unlocking premium modules, and rewarding data or strategy contributions."
  },
  {
    question: "How do agents operate across chains?",
    answer: "Agents use Cosmos IBC, LayerZero, and integrated cross-chain protocols to coordinate actions on Ethereum, BNB, Solana, Layer 2s, and more."
  },
  {
    question: "Can I deploy my agents?",
    answer: "Yes. Developers can build and customize agents using A7G3N's SDK and modular plugin system."
  },
  {
    question: "How does the governance system work?",
    answer: "The DAO votes on key system parameters, strategy priorities, reward models, and major upgrades."
  },
  {
    question: "Who earns rewards in A7G3N?",
    answer: "Node operators, data contributors, strategy developers, and DAO participants can all earn AGN token rewards."
  },
  {
    question: "Which blockchains are supported?",
    answer: "A7G3N launches first on Solana, with planned expansion to Ethereum, BNB, major Layer 2s, and more chains over time."
  },
  {
    question: "When will the agent strategy marketplace launch?",
    answer: "The marketplace is planned for Q1 next year, enabling users to exchange strategy modules and on-chain agent logic components."
  },
  {
    question: "How can I join the A7G3N community?",
    answer: "You can join the DAO, contribute datasets or strategies, participate in governance, or develop applications on the platform."
  }
];

function FAQ({ className = '' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`bg-black text-white ${className}`} id="faq">
      <div className="relative w-full h-full py-32 ">
        <div className="container max-w-4xl mx-auto px-4 md:px-6 relative">
          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-medium leading-tight font-[family-name:var(--font-aldrich)] text-center mb-16 bg-gradient-to-r from-blue-200  to-blue-500 text-transparent bg-clip-text"
          >
            FAQ
          </motion.h2>

          {/* FAQ List */}
          <div className="space-y-1">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${index !== faqItems.length - 1 ? 'border-b border-dashed border-gray-800' : ''}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left py-6 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg md:text-xl font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                      {item.question}
                    </h3>
                    <svg
                      className={`w-6 h-6 transform transition-transform duration-300 text-blue-500 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-gray-300 text-lg">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ; 