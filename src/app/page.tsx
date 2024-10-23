import Hero from '@/app/components/landing/Hero'
import Navbar from '@/app/components/landing/Navbar'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CalorieSync",
  description: "CalorieSync",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
