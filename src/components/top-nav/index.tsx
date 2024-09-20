import { useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import Logo from "@/assets/clipo-logo.svg";

const TopNav = () => {
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            if (scrollYProgress.get() * document.body.scrollHeight > 200) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }
    });

    return (
        <motion.div
            initial={{
                opacity: 1,
                y: -100,
            }}
            animate={{
                y: visible ? 0 : -100,
                opacity: visible ? 1 : 0,
            }}
            transition={{
                duration: 0.2,
            }}
            className="h-[64px] left-0 w-screen top-0 fixed z-50 bg-black/40 backdrop-blur"
        >
            <div className="px-4 flex items-center h-full justify-between">
                <Logo
                    style={{
                        height: 32,
                    }}
                />
                <div className="flex flex-row gap-4">
                    <a
                        href="#benifits"
                        className="text-neutral-300 hover:text-white capitalize"
                    >
                        benifits
                    </a>
                </div>

                <div
                    onClick={() => {}}
                    className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-2 py-1 bg-[#0070f3] rounded-md text-white font-light text-sm transition duration-200 ease-linear"
                >
                    Learn More
                </div>
            </div>
        </motion.div>
    );
};

export default TopNav;
