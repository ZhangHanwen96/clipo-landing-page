import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { config } from "../../config";
import { HoverBorderGradient } from "../hover-border-gradient";

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );

    return (
        <div
            ref={ref}
            className=" bg-black pt-20 pb-[800px] overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 md:pt-60 px-4 w-full left-0 top-0 z-10">
            {/* <h1 className="text-2xl md:text-5xl text-center md:leading-tight font-bold dark:text-white"> */}
            <TextGenerateEffect
                className="text-2xl md:text-5xl text-center md:leading-tight font-bold dark:text-white"
                words="1000s of Unique Clips Daily"
            />
            <TextGenerateEffect
                delay={1}
                className="text-2xl md:text-5xl text-center md:leading-tight font-bold dark:text-white"
                words="Turning Online Views into Foot Traffic "
            />

            {/* 1000s of Unique Clips Daily
                <br />
                Turning Online Views into Foot Traffic */}
            {/* <motion.div
                    initial={{
                        backgroundSize: "0% 100%",
                    }}
                    animate={{
                        backgroundSize: "100% 100%",
                    }}
                    transition={{
                        duration: 1,
                        ease: "anticipate",
                        delay: 0.5,
                    }}
                    style={{
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left center",
                        display: "inline",
                    }}
                    className="inline-block px-2 rounded-lg text-black  bg-gradient-to-r from-cyan-600 to-yellow-500 dark:from-red-600 dark:to-yellow-500"
                >
                    AI Video
                </motion.div> */}
            {/* </h1> */}
            <p className="text-center animation-fade-in w-[80%] mx-auto flex flex-wrap [--animation-delay:2s] text-base md:text-xl mt-8 dark:text-neutral-200">
                {config.mainHeroSection.subHeadline}
            </p>
            <HoverBorderGradient
                containerClassName="rounded-full mx-auto translate-y-4 animation-fade-in [--animation-delay:2.8s]"
                as="button"
                className="dark:bg-black text-lg md:text-2xl bg-white text-black dark:text-white flex items-center space-x-2"
            >
                <a href="#learnMore">Learn More</a>
            </HoverBorderGradient>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
                aspectRatio: 9 / 16,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product w-[18rem] relative flex-shrink-0 rounded-lg overflow-hidden"
        >
            <a
                href={product.link}
                className="block group-hover/product:shadow-2xl"
            >
                <img
                    src={product.thumbnail}
                    className="object-cover object-left-top absolute h-full w-full inset-0"
                    alt={product.title}
                />
            </a>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.title}
            </h2>
        </motion.div>
    );
};
