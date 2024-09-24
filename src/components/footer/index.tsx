import React from "react";
import Logo from "@/assets/clipo-logo.svg";
import { LampContainer } from "@/components/ui/lamp";

const Footer = () => {
    return (
        <div className="bg-white relative dark:bg-zinc-950">
            <LampContainer className="absolute top-0" />
            <div className="h-[350px]"></div>
            <div className="border-t fixed bottom-0 inset-x-0 border-neutral-100 dark:border-white/[0.1] px-8 py-20">
                <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start">
                    <div>
                        <Logo
                            style={{
                                height: 32,
                            }}
                            className="mb-4"
                        />
                        <div>
                            A product by{" "}
                            <a className="dark:text-sky-500 text-neutral-600 font-medium">
                                Tezign
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
                        <div className="flex justify-center space-y-4 flex-col mt-4">
                            <div className="font-medium text-neutral-700 dark:text-neutral-300">
                                Product
                            </div>
                            <a
                                href="#"
                                className="text-neutral-500 dark:text-neutral-400 hover:text-white"
                            >
                                Features
                            </a>
                            <a
                                href="#"
                                className="text-neutral-500 dark:text-neutral-400  hover:text-neutral-50"
                            >
                                Pricing
                            </a>
                            <a
                                href="#"
                                className="text-neutral-500 dark:text-neutral-400  hover:text-neutral-50"
                            >
                                Integrations
                            </a>
                        </div>
                        <div className="flex justify-center space-y-4 flex-col mt-4">
                            <div className="font-medium text-neutral-700 dark:text-neutral-300">
                                Product
                            </div>
                            <a
                                href="#"
                                className="text-neutral-500 dark:text-neutral-400 hover:text-white"
                            >
                                Features
                            </a>
                            <a
                                href="#"
                                className="text-neutral-500 dark:text-neutral-400  hover:text-neutral-50"
                            >
                                Pricing
                            </a>
                            <a
                                href="#"
                                className="text-neutral-500 dark:text-neutral-400  hover:text-neutral-50"
                            >
                                Integrations
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
