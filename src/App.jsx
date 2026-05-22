import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

import { scheduleScrollToId } from './utils/scrollToId'

// Existing components
import BusinessCategories3D from './Component/BusinessCategories3D'
import HeroSection          from './Component/Hero'
import Navbar               from './Component/Navbar'
import { WhyChooseSection } from './Component/whychoose'
import { WelcomePopup }     from './Component/WelcomePopup'
import YouTubeSection       from './Component/YoutubeSection'
import KeyFeatures          from './Component/KeyFeatures'
import IndustriesFeatures   from './Component/IndustriesFeatures'
import PricingSection       from './Component/Pricingsection'
import ResourcesSection     from './Component/Resourcessection'
import Footer               from './Component/Footer'


// Feature Pages
import AIInvoicingPage    from './Pages/Aiinvoicingpage'
import PaymentGatewayPage from './Pages/Paymentgatewaypage'
import CloudSyncPage      from './Pages/Cloudsyncpage'
import AnalyticsPage      from './Pages/Analyticspage'
import CustomerMgmtPage   from './Pages/Customermgmtpage'
import BlogPostPage       from './Pages/Blogpostpage'
import FAQSection from './Component/FaqSection'
import PrivacyPolicy from './Pages/Privacypolicy'
import TermsConditions from './Pages/Termsconditions'
import DeleteAccount from './Pages/Deleteaccount'
import ReviewsSection from './Component/Reviewsection'

function ScrollToTop() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    // If we intend to scroll to a section on the homepage, do NOT force scroll-to-top.
    if (pathname === "/" && state && state.scrollTo) return;
    window.scrollTo(0, 0);
  }, [pathname, state]);
  return null;
}


// Home page
function HomePage() {
  const [showPopup, setShowPopup] = useState(false);
  const { state } = useLocation();

  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 7000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const selectedIndustry = state?.selectedIndustry;
    if (!selectedIndustry) return;

    // Dispatch after the home route has mounted.
    window.dispatchEvent(
      new CustomEvent("selectIndustry", { detail: selectedIndustry })
    );
  }, [state]);

  useEffect(() => {
    const targetId = state?.scrollTo;
    if (!targetId) return;

    const clear = scheduleScrollToId(targetId, {
      offset: 80,
      behavior: 'smooth',
      maxAttempts: 40,
      attemptDelayMs: 60,
    });

    return () => {
      clear();
    };
  }, [state]);

  return (
    <>
      {showPopup && <WelcomePopup onClose={() => setShowPopup(false)} />}
      <HeroSection />
      <BusinessCategories3D />
      <WhyChooseSection />
      <YouTubeSection />
      <KeyFeatures />
      <IndustriesFeatures />
      <ReviewsSection/>
      <PricingSection />
      <ResourcesSection />
      <FAQSection />
      <Footer />
    </>
  );
}




function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"                             element={<HomePage />} />
        <Route path="/blog/:id"                     element={<BlogPostPage />} />
        <Route path="/features/ai-invoicing"        element={<AIInvoicingPage />} />
        <Route path="/features/payment-gateway"     element={<PaymentGatewayPage />} />
        <Route path="/features/cloud-sync"          element={<CloudSyncPage />} />
        <Route path="/features/analytics"           element={<AnalyticsPage />} />
        <Route path="/features/customer-management" element={<CustomerMgmtPage />} />
       
        <Route path="/privacy-policy"    element={<PrivacyPolicy />} />
        <Route path="/terms-conditions"  element={<TermsConditions />} />
        <Route path="/delete-account"    element={<DeleteAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;