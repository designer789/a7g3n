"use client";

import React from 'react';
import { Icon } from "@/components/ui/evervault-card";
import { StringDemo } from "./ui/stringDemo";



interface JoinProps {
  className?: string;
}

function Join({ className = '' }: JoinProps) {
  return (
    <section className={`bg-black text-white ${className}`} id="join">
      <div className="relative w-full h-full py-32 ">
        <div className="container max-w-8xl mx-auto px-4 md:px-6 relative">
          {/* Main Content Container */}
          <div className="relative border border-gray-800 bg-gradient-to-b from-blue-950/20 via-black to-black">

            <Icon className="absolute h-5 w-5 -top-2.5 -left-2.5 text-white" />
            <Icon className="absolute h-5 w-5 -bottom-2.5 -left-2.5 text-white" />
            <Icon className="absolute h-5 w-5 -top-2.5 -right-2.5 text-white" />
            <Icon className="absolute h-5 w-5 -bottom-2.5 -right-2.5 text-white" />

            <StringDemo />

          </div>
        </div>
      </div>
    </section>
  );
}

export default Join; 