import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import { InView } from "../in-view";

export function FeaturesSectionDemo() {
    const features = [
        {
            title: "Drive Business Growth",
            description: (
                <div>
                    • Boost online engagement and offline foot traffic <br />
                    • Enhance brand presence across digital and physical
                    channels <br />• Leverage high-quality content for strategic
                    marketing
                </div>
            ),
            skeleton: <SkeletonOne />,
            className:
                "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
        },
        {
            title: "AI-Powered Content Creation and Assembly",
            description: (
                <div>
                    • Generate thousands of unique video scripts and footage
                    combinations daily <br />
                    • Ensure content diversity with smart scene selection and
                    trend integration <br />• Incorporate brand voice and
                    product selling points automatically
                </div>
            ),
            skeleton: <SkeletonTwo />,
            className:
                "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
        },
        {
            title: "Scalable Production",
            description: (
                <div>
                    • Produce thousands of videos daily for multiple locations{" "}
                    <br />
                    • Maintain brand consistency across all content <br />•
                    Customize content for different platforms and audiences
                </div>
            ),
            skeleton: <SkeletonThree />,
            className:
                "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
        },
        {
            title: "Compliance and Quality Assurance",
            description: (
                <div>
                    • Ensure high approval rates on social media platforms{" "}
                    <br />
                    • Built-in checks for platform guidelines and brand
                    standards <br />• Maintain consistent quality across all
                    generated content
                </div>
            ),
            skeleton: <SkeletonFour />,
            className: "col-span-1 lg:col-span-3 border-b lg:border-none",
        },
    ];
    return (
        <div className="relative z-20 pb-10 lg:pb-40 max-w-7xl mx-auto">
            <div className="px-8">
                <InView
                    viewOptions={{
                        once: true,
                        margin: "0px 0px -10% 0px",
                    }}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <h4 className="text-2xl md:text-5xl md:leading-tight mb-8 max-w-5xl mx-auto text-center tracking-tight font-bold text-black dark:text-white">
                        Packed with thousands of features
                    </h4>
                </InView>
                <InView
                    viewOptions={{
                        once: true,
                        margin: "0px 0px -10% 0px",
                    }}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                        From Image generation to video generation, Everything AI
                        has APIs for literally everything. It can even create
                        this website copy for you.
                    </p>
                </InView>
            </div>

            <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
                    {features.map((feature, index) => (
                        <InView
                            viewOptions={{
                                once: true,
                                margin: "0px 0px -15% 0px",
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.3,
                            }}
                            variants={{
                                visible(custom, current, velocity) {
                                    return {
                                        opacity: 1,
                                        x: 0,
                                    };
                                },
                                hidden(custom, current, velocity) {
                                    return {
                                        opacity: 0,
                                        x: index % 2 === 0 ? -100 : 100,
                                    };
                                },
                            }}
                            key={feature.title}
                            className={cn(feature.className)}
                        >
                            <FeatureCard>
                                <FeatureTitle>{feature.title}</FeatureTitle>
                                <FeatureDescription>
                                    {feature.description}
                                </FeatureDescription>
                                <div className=" h-full w-full">
                                    {feature.skeleton}
                                </div>
                            </FeatureCard>
                        </InView>
                    ))}
                </div>
            </div>
        </div>
    );
}

const FeatureCard = ({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
            {children}
        </div>
    );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
            {children}
        </p>
    );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p
            className={cn(
                "text-sm md:text-base max-w-4xl text-left mx-auto",
                "text-neutral-500 text-center font-normal dark:text-neutral-300",
                "text-left mx-0 md:text-sm my-2"
            )}
        >
            {children}
        </p>
    );
};

export const SkeletonOne = () => {
    return (
        <div className="relative flex py-8 px-2 gap-10 h-full max-h-[600px] overflow-hidden">
            <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
                <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
                    {/* TODO */}
                    <img
                        src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1920&q=75"
                        alt="header"
                        className="h-auto w-full aspect-square object-cover object-left-top rounded-sm"
                    />
                </div>
            </div>

            <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
            <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
        </div>
    );
};

export const SkeletonThree = () => {
    return (
        <a
            href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
            target="__blank"
            className="relative flex gap-10  h-full group/image"
        >
            <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
                <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
                    {/* TODO */}
                    <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
                    <img
                        src="https://assets.aceternity.com/fireship.jpg"
                        alt="header"
                        width={800}
                        height={800}
                        className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
                    />
                </div>
            </div>
        </a>
    );
};

export const SkeletonTwo = () => {
    const images = [
        "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    const imageVariants = {
        whileHover: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
        whileTap: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
    };
    return (
        <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
            {/* TODO */}
            <div className="flex flex-row -ml-20">
                {images.map((image, idx) => (
                    <motion.div
                        variants={imageVariants}
                        key={"images-first" + idx}
                        style={{
                            rotate: Math.random() * 20 - 10,
                        }}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                    >
                        <img
                            src={image}
                            alt="bali images"
                            width="500"
                            height="500"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                        />
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-row">
                {images.map((image, idx) => (
                    <motion.div
                        key={"images-second" + idx}
                        style={{
                            rotate: Math.random() * 20 - 10,
                        }}
                        variants={imageVariants}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                    >
                        <img
                            src={image}
                            alt="bali images"
                            width="500"
                            height="500"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                        />
                    </motion.div>
                ))}
            </div>

            <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
            <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" />
        </div>
    );
};

export const SkeletonFour = () => {
    return (
        <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
            <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
        </div>
    );
};

export const Globe = ({ className }: { className?: string }) => {
    return (
        <div
            style={{
                width: 500,
                height: 550,
                maxWidth: "100%",
                aspectRatio: 1,
            }}
            className={cn(className, "bg-slate-500")}
        />
    );
};
