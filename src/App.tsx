import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";

export default function App() {
  return (
    <div className="bg-secondary-dark  w-full text-white">
      <main className="flex items-center justify-center flex-col ">
        <Hero />
        <Features />
        <Footer />
      </main>
    </div>
  );
}
