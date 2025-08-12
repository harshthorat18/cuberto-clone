import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Head from "next/head";


export default function Home() {
  return (
     <div className="min-h-screen bg-white">
      <Head>
        <title>AI Design Agency | Crafting AI-Driven Products</title>
        <meta name="description" content="Design agency focused on AI-driven products" />
      </Head>

      <Header />
      <Hero />
      <Work></Work>
      <FeaturedProjects />
      <Services />
      <Footer />
    </div>
  );
}
