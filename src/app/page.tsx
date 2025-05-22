import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ActionExamples from "../components/ActionExamples";
import AGNUtility from "../components/TokenUtility";
import Roadmap from "../components/Roadmap";
import Join from "../components/Join";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Features />
      <ActionExamples />
      <AGNUtility />
      <Roadmap />
      <Join />
      <FAQ />
      <Footer />
    </main>
  );
}
