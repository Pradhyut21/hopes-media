import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Podcasts from '@/components/Podcasts';
import Articles from '@/components/Articles';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-red-500 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Podcasts />
        <Articles />
        <About />
      </main>
      <Footer />
    </div>
  );
}
