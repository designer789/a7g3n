import React from 'react';
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

interface FeaturesProps {
  className?: string;
}

const features = [
  {
    title: "Tasks Executed Across Chains",
    description: "A7G3N uses a master-agent system to coordinate operations across Ethereum, BNB, Solana, and Layer 2s, powered by Cosmos IBC and LayerZero for smooth cross-chain actions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#60A5FA" className="w-20 h-20 drop-shadow-[0_0_8px_rgba(96,165,250,0.7)]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    )
  },
  {
    title: "Sensing the On-Chain World",
    description: "By combining blockchain data, DEX liquidity, social sentiment, and off-chain signals, A7G3N agents gain real-time awareness to make smarter decisions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#60A5FA" className="w-20 h-20 drop-shadow-[0_0_8px_rgba(96,165,250,0.7)]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    )
  },
  {
    title: "Smart Contracts That Enforce Rules",
    description: "Risk controls, cost ceilings, and operational policies are encoded in smart contracts, ensuring agent behavior is transparent, verifiable, and trustless by design.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#60A5FA" className="w-20 h-20 drop-shadow-[0_0_8px_rgba(96,165,250,0.7)]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
      </svg>
    )
  },
  {
    title: "Agents That Team Up",
    description: "Agents can form swarms or DAOs, tackling large tasks together for greater efficiency and resilience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#60A5FA" className="w-20 h-20 drop-shadow-[0_0_8px_rgba(96,165,250,0.7)]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    )
  },
  {
    title: "Community Rules the System",
    description: "Through DAO votes, the community shapes key parameters, sets priorities, and earns $AGN rewards for valuable contributions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#60A5FA" className="w-20 h-20 drop-shadow-[0_0_8px_rgba(96,165,250,0.7)]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    )
  }
];

export function Features({ className = '' }: FeaturesProps) {
  return (
    <section className={`py-44 bg-black text-white ${className}`} id="features">
      <div className="container max-w-8xl mx-auto px-4 md:px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-6xl font-medium leading-tight font-[family-name:var(--font-aldrich)] text-center mb-16 bg-gradient-to-b from-blue-50 to-blue-500 text-transparent bg-clip-text">
          What Can We Do with A7G3N?
        </h2>

        

        <div className="flex flex-wrap mx-[1px] mt-[1px]">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="w-full md:w-1/2 lg:w-1/3 border border-gray-800 flex flex-col p-8 relative h-full gap-4 flex-1"
              style={{
                marginTop: '-1px',
                marginLeft: '-1px',
                height: '600px',
              }}>

              <Icon className="absolute h-5 w-5 -top-2.5 -left-2.5 text-white" />
              <Icon className="absolute h-5 w-5 -bottom-2.5 -left-2.5 text-white" />
              <Icon className="absolute h-5 w-5 -top-2.5 -right-2.5 text-white" />
              <Icon className="absolute h-5 w-5 -bottom-2.5 -right-2.5 text-white" />

             
              <EvervaultCard centerIcon={feature.icon}/>
              

              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-2xl font-bold font-medium tracking-tighter leading-tight font-[family-name:var(--font-aldrich)] text-center mb-2'>
                  {feature.title}
                </h3>
                <p className='text-base text-gray-400 text-center'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Features; 