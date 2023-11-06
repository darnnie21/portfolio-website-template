import {
  HeroSection,
  NavBar,
  AboutSection,
  ProjectsSection,
  EmailSection
} from '@/components';

export default function Home() {
  return (
    <main className='flex flex-col bg-[#121212] min-h-screen'>
      <NavBar />
      <div className='container mt-24 mx-auto py-4 px-12'>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
    </main>
  );
}
