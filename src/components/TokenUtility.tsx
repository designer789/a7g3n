import React from 'react';
import { Icon } from "@/components/ui/evervault-card";
import { FlickeringGrid} from "@/components/ui/flickering-grid";
import { Ripple } from "@/components/ui/ripple-circle";

interface AGNUtilityProps {
    className?: string;
}

function AGNUtility({ className = '' }: AGNUtilityProps) {
    return (
      <section className={`bg-black text-white ${className}`} id="token-utility">
        <div className='relative w-full h-full py-16 md:py-32 border-y border-gray-800'>
            {/* background image */}
            <div className='absolute top-0 left-0 w-full h-full'>
                <FlickeringGrid
                    className="relative w-full h-full [mask-image:radial-gradient(white,transparent)]"
                    squareSize={8}
                    gridGap={6}
                    color="#60A5FA"
                    maxOpacity={0.8}
                    flickerChance={0.1}
                />
            </div>
       
            {/* main wrapper */}
            <div className="container bg-black max-w-8xl mx-auto px-4 md:px-6 z-10">
                <div className="bg-black flex flex-col lg:flex-row relative border border-gray-800">
                    <Icon className="absolute h-5 w-5 -top-2.5 -left-2.5 text-white" />
                    <Icon className="absolute h-5 w-5 -bottom-2.5 -left-2.5 text-white" />
                    <Icon className="absolute h-5 w-5 -top-2.5 -right-2.5 text-white" />
                    <Icon className="absolute h-5 w-5 -bottom-2.5 -right-2.5 text-white" />
                    
                    {/* left side */}
                    <div className='w-full lg:w-1/2 p-6 md:p-12'>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight font-[family-name:var(--font-aldrich)] text-center mb-8 md:mb-16 bg-gradient-to-br from-blue-300 via-blue-100 to-blue-400 text-transparent bg-clip-text">
                            Introducing $AGN Utility
                        </h2>
                        
                        <ul className="text-gray-300 space-y-2 text-base md:text-lg max-w-3xl mx-auto">
                            {[
                                "Staking to run agent nodes",
                                "Voting in governance decisions",
                                "Unlocking premium modules and features",
                                "Rewarding data, strategy, and improvement contributions"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center p-4 md:p-6 bg-blue-950/20 border border-blue-900/20 transition-all duration-300 hover:bg-blue-900/30 hover:border-blue-500/30">
                                    <div className="mr-4 md:mr-6 w-6 md:w-8 h-6 md:h-8 flex items-center justify-center rounded-full bg-blue-950 border border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300">
                                        <span className="text-blue-400 text-xs md:text-sm group-hover:scale-125 transition-transform duration-300">
                                            {(index + 1).toString().padStart(2, '0')}
                                        </span>
                                    </div>
                                    <span className="group-hover:text-blue-200 transition-colors duration-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* right side image */}
                    <div className='w-full lg:w-1/2 h-[300px] lg:h-auto overflow-hidden'>
                    
                        <div className="relative h-full lg:h-[150%] w-full lg:w-[120%]">
                            
                            <Ripple />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
}
  
export default AGNUtility;