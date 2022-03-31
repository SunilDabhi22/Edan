import './App.css';
import HomePage from './Pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FAQs from './Pages/faq';
import HowItWorks from './Pages/howItWorks';
import Contact from './Pages/contact';
import TermsCondition from './Pages/terms_conditions';
import PrivacyPolicy from './Pages/privacy_policy';
import BoilerQuote from './Pages/boiler-quote';
import AboutUs from './Pages/about_us';
import Blog from './Pages/blog';
import BlogDetail_1 from './Components/blog-detail/electricity-prices-why-are-they-so-high'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/terms" element={<TermsCondition />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path='/boiler-quote' element={<BoilerQuote />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path="/blog/electricity-prices-why-are-they-so-high" element={<BlogDetail_1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
