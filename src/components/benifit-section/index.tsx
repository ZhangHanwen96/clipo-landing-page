import React from "react";
import { MeteorsCard } from "./card";

const data = [
    {
        title: (
            <span>
                90<span className="text-4xl">%</span>
            </span>
        ),
        description: "Lower production costs*",
    },
    {
        title: (
            <span>
                2.6<span className="text-5xl capitalize">x</span>
            </span>
        ),
        description: "Higher foot traffic**",
    },
    {
        title: "$0",
        description: "Effective CPM***",
    },
];

const BenifitSection = () => {
    return (
        <div className="py-10 md:py-32 md:mb-16" id="benifits">
            <div className="mb-32 text-xl lg:text-5xl font-bold lg:leading-tight text-center dark:text-white text-black">
                Drive Offline Growth with{" "}
                <span className="font-mono bg-gradient-to-r from-yellow-400 to-fuchsia-600 px-4 rounded bg-clip-text text-transparent">
                    AI-Powered
                </span>
                <br /> Short Video at Scale
            </div>
            <div className="flex justify-between flex-col md:flex-row gap-8 md:gap-0">
                {data.map((item, index) => (
                    <MeteorsCard
                        key={index}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default BenifitSection;
