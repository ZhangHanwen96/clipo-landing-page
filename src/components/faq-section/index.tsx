import React from "react";
import { FAQs } from "./faqs";
import { motion } from "framer-motion";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import "./index.scss";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../accordin";
import { InView } from "../in-view";

const FAQSection = () => {
    return (
        <div className="mt-16" id="faqs">
            <h1 className="text-xl text-center md:text-5xl font-bold">
                Commonly Asked Questions
            </h1>
            <div className="mb-10 lg:mb-32 faq-bg py-4 px-12">
                <Accordion
                    className="flex flex-col"
                    transition={{ duration: 0.15, ease: "easeInOut" }}
                >
                    <InView
                        viewOptions={{
                            once: true,
                            margin: "0px 0px -30% 0px",
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                        variants={{
                            hidden: {
                                opacity: 0,
                            },
                            visible: {
                                transition: {
                                    staggerChildren: 0.15,
                                    staggerDirection: -1,
                                    delayChildren: 0.3,
                                },
                                opacity: 1,
                            },
                        }}
                    >
                        {FAQs.map((faq, index) => {
                            return (
                                <motion.div
                                    variants={{
                                        visible: {
                                            x: 0,
                                            opacity: 1,
                                            transition: {
                                                duration: 0.2,
                                            },
                                        },
                                        hidden: {
                                            x: -30,
                                            opacity: 0,
                                        },
                                    }}
                                >
                                    <AccordionItem
                                        key={index}
                                        value={index}
                                        className="py-2"
                                    >
                                        <AccordionTrigger className="bg-white/10 rounded backdrop-blur w-full text-left dark:text-zinc-50">
                                            <div className="flex items-center justify-between px-4 py-4">
                                                <div>{faq.q}</div>
                                                <IconChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-zinc-50" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-zinc-500 dark:text-zinc-300">
                                                {faq.a}
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            );
                        })}
                    </InView>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQSection;
