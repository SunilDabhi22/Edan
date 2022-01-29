import React from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer';
import Quote from '../Components/quote';
import FAQ from '../Components/faq'
import CallToAction2 from '../Components/cta2';

export default function FAQPage(props: any) {
    return (
        <div>
            <Header />
            <FAQ showingFrom='FAQPage' />
            <CallToAction2 />
            <Quote />
            <Footer />
        </div>
    )
}