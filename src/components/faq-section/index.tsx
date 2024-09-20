import React from "react";
import { FAQs } from "./faqs";
import { IconChevronDown } from "@tabler/icons-react";

const FAQSection = () => {
    return (
        <div className="flex flex-col my-10 lg:my-32 gap-2 bg-gradient-to-br from-indigo-100/10 to-fuchsia-600/10">
            {FAQs.map((faq, index) => {
                return (
                    <div
                        key={index}
                        className="rounded bg-slate-50 dark:bg-slate-700/20 backdrop-blur px-4 py-4"
                    >
                        <div className="flex flex-row justify-between items-center">
                            {faq.q} <IconChevronDown />
                        </div>
                        <div className="pt-2">{faq.a}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default FAQSection;
