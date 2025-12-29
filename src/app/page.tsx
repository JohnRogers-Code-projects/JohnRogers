import { Navigation, Hero, Projects, Experience, Philosophy, Contact, Footer } from '@/components/sections';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
