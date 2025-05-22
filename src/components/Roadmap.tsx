"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from "@/components/ui/evervault-card";

interface RoadmapProps {
  className?: string;
}

/**
 * Roadmap data structure with phase information
 */
const roadmapPhases = [
  {
    title: "Phase 1: Core System Build",
    items: [
      "Launch the first MVP (Minimum Viable Product) version on Solana mainnet",
      "Develop the master-agent architecture and task coordination mechanisms",
      "Set up cross-chain integration (Cosmos IBC, LayerZero onboarding)",
      "Prepare staking and governance contract frameworks to enable future community participation"
    ]
  },
  {
    title: "Phase 2: Mainnet Launch",
    items: [
      "Deploy the full A7G3N mainnet with multi-chain support",
      "Launch the environment sensing module (integrating on-chain, social, and off-chain data)",
      "Activate staking and governance mechanisms, opening community voting and decision-making",
      "Release the developer SDK and module plug-in marketplace to attract ecosystem builders"
    ]
  },
  {
    title: "Phase 3: Ecosystem Expansion",
    items: [
      "Launch the agent strategy marketplace (supporting strategy module trading)",
      "Expand to Ethereum, BNB, and major Layer 2 networks",
      "Enable agent swarm coordination (Swarm Mode) for multi-agent collaboration",
      "Integrate third-party ecosystem partners to broaden cross-chain application scenarios"
    ]
  },
  {
    title: "Phase 4: Advanced Evolution",
    items: [
      "Roll out enterprise API services (targeting B2B integrations)",
      "Launch the decentralized AI training pool to enhance agent self-evolution capabilities",
      "Expand the global DAO and contributor network, increasing community diversity and engagement",
      "Explore innovative use cases (such as RWA, insurance, and blockchain gaming)"
    ]
  }
];


function Roadmap({ className = '' }: RoadmapProps) {
    return (
        <section className={`relative bg-black text-white border-y border-gray-800 ${className}`} id="roadmap">
            {/* Background Gradient */}
            <div className='absolute inset-0'>
            <div className="sticky top-0 h-screen w-full inset-0 bg-gradient-to-t from-blue-950/40  to-black pointer-events-none" />
            </div>

            {/* main wrapper */}
            <div className='container max-w-8xl mx-auto px-4 pb-12 md:px-6 relative flex flex-col lg:flex-row'>
                {/* left side */}
                <div className='w-full lg:w-1/4 my-32 lg:mb-0'>
                    <h2 className='lg:sticky lg:top-32 text-4xl md:text-6xl font-medium leading-tight font-[family-name:var(--font-aldrich)] text-center lg:text-left mb-12 lg:mb-24 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text'>
                        A7G3N Roadmap
                    </h2>
                </div>

                {/* right side */}
                <div className='w-full lg:w-3/4'>
                    {/* timeline */}
                    {roadmapPhases.map((phase, index) => (
                        <motion.div 
                            key={phase.title} 
                            className="relative w-full pl-0 lg:pl-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className='hidden lg:block w-full h-32 border-x border-dashed border-gray-800'></div>

                            {/* Phase Card */}
                            <div className="relative p-4 md:p-8 border border-gray-800 bg-gradient-to-b from-blue-950/20 via-black to-black mb-8 lg:mb-0">
                                <Icon className="absolute h-5 w-5 -top-2.5 -left-2.5 text-white" />
                                <Icon className="absolute h-5 w-5 -bottom-2.5 -left-2.5 text-white" />
                                <Icon className="absolute h-5 w-5 -top-2.5 -right-2.5 text-white" />
                                <Icon className="absolute h-5 w-5 -bottom-2.5 -right-2.5 text-white" />

                                {/* Phase Header */}
                                <div className="mb-6 md:mb-8">
                                    <div className="text-4xl md:text-5xl font-bold text-blue-500 font-[family-name:var(--font-aldrich)] mb-4">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl md:text-3xl font-medium leading-tight font-[family-name:var(--font-aldrich)] text-white">
                                        {phase.title}
                                    </h3>
                                    <div className="h-1 w-16 bg-blue-500 mt-4" />
                                </div>

                                {/* Phase Items */}
                                <ul className="text-gray-300 space-y-4">
                                    {phase.items.map((item, idx) => (
                                        <motion.li 
                                            key={idx} 
                                            className={`flex items-start pb-4 ${idx < phase.items.length - 1 && 'border-b border-dashed border-gray-800'}`}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                                        >
                                            <span className="text-blue-400 mr-2 flex-shrink-0">🔹</span>
                                            <span className="text-base md:text-lg">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>  
        </section>
    );
}

export default Roadmap;