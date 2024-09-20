import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { createHtmlPlugin } from "vite-plugin-html";
import svgr from "vite-plugin-svgr";

const seoConfig = {
    title: "AI Powered Video At Scale",
    description:
        "Clipo transforms your brand assets into thousands of unique, platform-ready short videos daily with AI, driving online-to-offline traffic",
    "og:title": "AI Powered Video At Scale",
    "og:description":
        "Clipo transforms your brand assets into thousands of unique, platform-ready short videos daily with AI, driving online-to-offline traffic",
    // "og:image": "https://vite-plugin-html.netlify.app/og.png",
    "twitter:title": "AI Powered Video At Scale",
    "twitter:description":
        "Clipo transforms your brand assets into thousands of unique, platform-ready short videos daily with AI, driving online-to-offline traffic",
    // "twitter:image": "https://vite-plugin-html.netlify.app/og.png",
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                exportType: "default",
                ref: true,
                svgo: false,
                titleProp: true,
            },
            include: "**/*.svg",
        }),
        createHtmlPlugin({
            entry: "/src/main.tsx",
            template: "index.html",
            minify: false,
            inject: {
                data: {
                    title: "Vite Plugin HTML",
                    ogDescription: "Vite plugin to generate HTML files",
                    ogImage: "https://vite-plugin-html.netlify.app/og.png",
                    twitterCard: "summary_large_image",
                },
                tags: Object.entries(seoConfig).map(([name, value]) => {
                    return {
                        tag: "meta",
                        attrs: {
                            name,
                            content: value,
                        },
                    };
                }),
            },
        }),
    ],
    resolve: {
        alias: {
            "@": "/src",
        },
    },
});
