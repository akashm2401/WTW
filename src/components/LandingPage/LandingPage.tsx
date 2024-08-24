import React from 'react';

// Importing components
import HeroComponent from './HeroComponent/HeroComponent.tsx';
import AboutComponent from './AboutComponent/AboutComponent.tsx';

export default function LandingPage() {
  return (
    <div>
        {/* Hero Section */}
        <section>
            <HeroComponent/>
            <AboutComponent/>
        </section>
    </div>
  )
}
