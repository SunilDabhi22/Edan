import Header from '../Components/header';
import Banner from '../Components/banner';
import Footer from '../Components/footer';
import Partner from '../Components/partners';
import BoilerSection from '../Components/boiler_section';
import BoilerSection2 from '../Components/boiler_section_2';
import Article from '../Components/articles'

export default function HomePage(props: any) {
    return (
        <div>
            <Header />
            <Banner />
            <Partner />
            <BoilerSection />
            {/* <WhatWeDoSection /> */}
            {/* <Testimonial /> */}
            <BoilerSection2 />
            {/* <CTA /> */}
            <Article />
            {/* <FAQ showingFrom='home' /> */}
            {/* <Quote /> */}
            <Footer />
        </div>
    )
}