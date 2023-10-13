import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <main className='flex flex-col bg-[#121212] min-h-screen'>
      <div className='container mx-auto py-4 px-12'>
        <HeroSection />
      </div>
    </main>
  );
}
