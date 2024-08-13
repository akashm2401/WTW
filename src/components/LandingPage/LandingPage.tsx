import React from 'react';

// Importing components
import HeroComponent from './HeroComponent/HeroComponent.tsx';

export default function LandingPage() {
  return (
    <div>
        {/* Hero Section */}
        <section>
            <HeroComponent/>
        </section>
    </div>
  )
}
