import "./variables.scss";
import "./App.css";
import TopNav from "./components/top-nav";
import { HeroParallax } from "./components/parallax-hero-section";
import { products } from "./components/parallax-hero-section/products";
import { FeaturesSectionDemo } from "./components/feature-section-1";
import { HowItWorks } from "./components/how-it-works";
import { VOC } from "./components/voc";
import BenifitSection from "./components/benifit-section";
import FAQSection from "./components/faq-section";
import Footer from "./components/footer";
import TrustedBy from "./components/trusted-by";
import { ContactUsForm } from "./components/form";

function App() {
    return (
        <div className="bg-white dark:bg-black">
            <TopNav />
            <div
                className="bg-white pb-16 dark:bg-black relative z-[1]"
                style={
                    {
                        // boxShadow: "rgba(45, 255, 196, 0.29) 0px -20px 137px 37px",
                    }
                }
            >
                <div className="max-w-[960px] xl:max-w-[80%] mx-auto">
                    <HeroParallax products={products} />
                    <TrustedBy />
                    <FeaturesSectionDemo />
                    <BenifitSection />
                    <HowItWorks />
                    <VOC />
                    <FAQSection />
                    <ContactUsForm />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
