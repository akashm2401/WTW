import React from 'react';

// Importing components
import HeroComponent from './HeroComponent/HeroComponent.tsx';
import AboutComponent from './AboutComponent/AboutComponent.tsx';
import ServicesComponent from './ServicesComponent/ServicesComponent.tsx';
import ReviewsComponent from './ReviewsComponent/ReviewsComponent.tsx';

export default function LandingPage() {
  return (
    <div>
        {/* Hero Section */}
        <section>
            <HeroComponent/>
            <AboutComponent/>
            <ServicesComponent/>
            <ReviewsComponent/>
        </section>
    </div>
  )
}
