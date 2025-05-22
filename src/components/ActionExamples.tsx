"use client";

/**
 * ActionExamples Component - A responsive, circular carousel showcasing A7G3N's capabilities
 * 
 * Features:
 * - Responsive design: 1 item (mobile), 2 items (tablet), 3 items (desktop)
 * - Circular navigation: Seamlessly loops back to start
 * - Smooth animations using Framer Motion
 * - Keyboard and screen reader accessible
 * - Touch-friendly navigation controls
 * 
 * @component
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ActionExampleProps {
  className?: string;
}

/**
 * Example data structure for carousel items
 * Each item represents a key feature or capability of A7G3N
 */
const actionExamples = [
  {
    title: "Cross-Chain Arbitrage",
    image: "/images/arbitrage.png",
    description: [
      "Detect DEX or chain price gaps",
      "Execute arbitrage across Ethereum, BNB, Solana, Layer 2s",
      "Maximize profit before windows close"
    ]
  },
  {
    title: "Liquidity Reallocation",
    image: "/images/liquidity.png",
    description: [
      "Track liquidity shifts across pools",
      "Automatically reallocate capital",
      "Reduce exposure to underperforming positions"
    ]
  },
  {
    title: "Cross-Chain Staking Optimization",
    image: "/images/staking.png",
    description: [
      "Analyze staking rewards across networks",
      "Move assets to the highest-yield locations",
      "React in real time, no manual input"
    ]
  },
  {
    title: "Sentiment-Driven Strategy Shifts",
    image: "/images/sentiment.png",
    description: [
      "Monitor social sentiment spikes",
      "Preemptively adjust exposure",
      "Act before on-chain signals emerge"
    ]
  },
  {
    title: "DAO-Governed Strategy Pivots",
    image: "/images/dao.png",
    description: [
      "Community votes on sector priorities",
      "Agents adjust the focus system-wide",
      "Align operations with governance"
    ]
  }
];

export function ActionExamples({ className = '' }: ActionExampleProps) {
  // State for tracking current slide and responsive layout
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  /**
   * Responsive layout handler
   * Updates items per view based on screen width:
   * - Desktop (≥1024px): 3 items
   * - Tablet (≥768px): 2 items
   * - Mobile (<768px): 1 item
   */
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // Desktop: 3 items
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2); // Tablet: 2 items
      } else {
        setItemsPerView(1); // Mobile: 1 item
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  /**
   * Navigation handlers
   * Implements circular navigation with boundary checks
   */
  const next = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      // Loop back to start if we reach the end
      return nextIndex >= actionExamples.length ? 0 : nextIndex;
    });
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      // Loop to end if we're at the start
      return nextIndex < 0 ? actionExamples.length - 1 : nextIndex;
    });
  };

  /**
   * Creates a circular array of items for infinite scrolling
   * Ensures there are always enough items to fill the view by:
   * 1. Taking all original items
   * 2. Calculating remaining space needed
   * 3. Adding items from the start to fill any gaps
   * 
   * @returns {Array} Array of items with duplicates if needed
   */
  const getVisibleItems = () => {
    const items = [...actionExamples];
    const remainingSpace = itemsPerView - (actionExamples.length - currentIndex);
    
    if (remainingSpace > 0) {
      // Add items from the beginning to fill the remaining space
      items.push(...actionExamples.slice(0, remainingSpace));
    }
    
    return items;
  };

  return (
    <section className={`py-32 bg-black text-white border-t border-gray-800 ${className}`} id="action-examples">
      <div className="container max-w-8xl mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-6xl font-medium leading-tight font-[family-name:var(--font-aldrich)] text-center mb-16 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 text-transparent bg-clip-text">
          What A7G3N Does in Action
        </h2>

        <div className="relative">
          {/* Navigation Buttons - Positioned absolutely with responsive spacing */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-2 rounded-full bg-blue-900/20 hover:bg-blue-900/40 border border-blue-500/30 transition-all"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-2 rounded-full bg-blue-900/20 hover:bg-blue-900/40 border border-blue-500/30 transition-all"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Carousel Container with Framer Motion animations */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex  "
              initial={false}
              animate={{ 
                x: `${-currentIndex * (100 / itemsPerView)}%`,
              }}
              transition={{ 
                type: "spring", 
                stiffness: 200, // Higher stiffness for snappier movement
                damping: 30    // Balanced damping for smooth finish
              }}
            >
              {/* Map through items with proper key generation for duplicates */}
              {getVisibleItems().map((example, idx) => (
                <motion.div
                  key={`${example.title}-${idx}`}
                  className="flex-none w-full md:w-full lg:w-[calc(33.333%)] p-4 md:p-6 lg:p-8 relative flex flex-col bg-gradient-to-b from-blue-950/40 via-blue-900/20 to-transparent backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-b hover:from-blue-800/30 hover:via-blue-900/20 hover:to-transparent border border-dashed border-gray-800"
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Top border accent */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-blue-500" />
      
                  {/* Image Placeholder */}
                  <div className="relative w-full aspect-[16/9] mb-8 md:mb-12 rounded-lg overflow-hidden p-8 ">
                    <Image
                      src={example.image}
                      alt={example.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 80vw, 33vw"
                      priority={idx === 0}
                    />
                  </div>
                  
                  {/* Card Title */}
        
                      <h3 className="flex flex-col items-center text-xl md:text-2xl font-medium font-[family-name:var(--font-aldrich)] text-center mb-4 md:mb-6 text-white group-hover:text-blue-300 transition-colors duration-300">
                    {example.title}
                      <div className="h-1 w-16 bg-blue-500 mt-4" />
                      </h3>
            
             
                  
                  {/* Feature List */}
                  <ul className="text-gray-300 flex-grow  ">
                {example.description.map((item, index) => (
                      <li key={index} className={`text-center text-base md:text-lg py-4 ${index < example.description.length - 1 && 'border-b border-dashed border-gray-800'}`}
                      >
                    <span className="text-blue-400 mr-2">🔹</span>
                        <span className="group-hover:text-blue-100 transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
                </motion.div>
              ))}
            </motion.div>
            </div>

          {/* Dots Navigation - Current slide indicator */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {actionExamples.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-blue-500 w-4' : 'bg-blue-500/30'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActionExamples;