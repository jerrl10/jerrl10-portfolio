import Hero from './components/Hero';
import Background from './components/Background';
import Terminal from './components/Terminal';
import LiveFeed from './components/Feed';
import Moudles from './components/Moudles';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans">
      <Background />
      <Hero />
      <Terminal/>
      <Moudles />
      <LiveFeed />
      <Footer />
    </main>
  );
}