import React from "react";
import { Meteors } from "@/components/meteors";

export function MeteorsCard({ title, description }) {
    return (
        <div className="w-[100%] md:w-[26%]">
            <div className="w-full relative max-w-xs mx-auto">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.90] bg-red-500 rounded-[9px] blur-3xl" />
                <div className="relative  shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-center">
                    <h1 className="text-xl md:text-7xl dark:text-white text-black font-bold mb-4 relative z-50">
                        {title}
                    </h1>

                    <p className="font-normal text-lg dark:text-slate-400 text-black mb-4 relative z-50">
                        {description}
                    </p>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                </div>
            </div>
        </div>
    );
}
