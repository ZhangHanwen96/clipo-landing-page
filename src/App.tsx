import "./variables.scss";
import "./App.css";
import TopNav from "./components/top-nav";
import { HeroParallax } from "./components/parallax-hero-section";
import { products } from "./components/parallax-hero-section/products";
import { FeaturesSectionDemo } from "./components/feature-section-1";
import { HowItWorks } from "./components/how-it-works";
import { MarqueeDemo } from "./components/voc";
import BenifitSection from "./components/benifit-section";
import FAQSection from "./components/faq-section";
import Footer from "./components/footer";
import TrustedBy from "./components/trusted-by";

function App() {
    return (
        <div className=" bg-white dark:bg-black">
            <div className="relative max-w-[960px] xl:max-w-[80%] mx-auto">
                <TopNav />
                <HeroParallax products={products} />
                <TrustedBy />
                <FeaturesSectionDemo />
                <HowItWorks />
                <MarqueeDemo />
                <BenifitSection />
                <FAQSection />
                <Footer />
            </div>
        </div>
    );
}

export default App;
