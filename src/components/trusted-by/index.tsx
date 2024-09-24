import React from "react";
import Marquee from "../marquee";
import {
    IconBrandAdobe,
    IconBrandGoogle,
    IconBrandAirbnb,
    IconBrandAlipay,
} from "@tabler/icons-react";

const brands = [
    {
        name: "Google",
        logo: <IconBrandGoogle size={24} />,
    },
    {
        name: "Adobe",
        logo: <IconBrandAdobe size={24} />,
    },
    {
        name: "Airbnb",
        logo: <IconBrandAirbnb size={24} />,
    },
    {
        name: "Alipay",
        logo: <IconBrandAlipay size={24} />,
    },
];

const TrustedBy = () => {
    return (
        <div className="mb-40">
            <div>
                <h1 className="text-2xl text-[#CCCCCC] font-bold text-center">
                    Trusted By
                </h1>
            </div>
            <div className="relative flex h-[120px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-black md:shadow-xl">
                <Marquee pauseOnHover className="[--duration:15s]">
                    {brands.map((brand, index) => {
                        return (
                            <div
                                key={index}
                                className="flex items-center justify-center px-4 py-2"
                            >
                                {brand.logo}
                            </div>
                        );
                    })}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
            </div>
        </div>
    );
};

export default TrustedBy;
