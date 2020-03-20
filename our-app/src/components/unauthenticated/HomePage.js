import React from 'react';

import './HomePage.scss'

function HomePage() {
    return (
        <div>
            <section class="et-hero-tabs">
                <h1>We are Health Wallet</h1>
                <h3>Our Goal is to provide a simple yet effective platform to keep track of one's immunization records</h3>
                <div class="et-hero-tabs-container">
                    <a class="et-hero-tab" href="#about-us">About Us</a>
                    <a class="et-hero-tab" href="#testimonials">Testimonials</a>
                    <a class="et-hero-tab" href="#technology">Technology</a>
                    <a class="et-hero-tab" href="#results">Results</a>
                    <a class="et-hero-tab" href="#our-team">Our Team</a>
                    <span class="et-hero-tab-slider"></span>
                </div>
            </section>
            <main class="et-main">
                <section class="et-slide" id="about-us">
                    <h1>About Us</h1>
                    <h3>something about us</h3>
                </section>
                <section class="et-slide" id="testimonials">
                    <h1>Testimonials</h1>
                    <h3>This is for the Testimonials by health care providers and users</h3>
                </section>
                <section class="et-slide" id="technology">
                    <h1>Technology</h1>
                    <h3>More about the technology are we using to solve this problem </h3>
                </section>
                <section class="et-slide" id="results">
                    <h1>Results</h1>
                    <h3>Our Results will go here</h3>
                </section>
                <section class="et-slide" id="our-team">
                    <h1>Our Team</h1>
                    <h3>Our pictures will go here</h3>
                </section>
            </main>
        </div >
    );
}

export default HomePage