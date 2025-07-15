import React from 'react';
import QRAdSection from './components/QRAdSection';
import WhyChooseSection from './components/WhyChooseSection';
import FeaturesCircle from './components/FeaturesCircle';
import FeatureCards from './components/FeatureCards';
import PackagesSection from './components/PackagesSection';
import PartnersSection from './components/PartnersSection';
import ContactForm from './components/ContactForm';
import FeaturesDetailsSection from './components/FeaturesDetailsSection';
import FetureQrmiddleSection from './components/FetureQrmiddleSection';
import IcodeFeture from './components/IcodeFeture';
import NavBar from './components/NavBar';
import PhoneForm from './components/PhoneForm';
import PhoneMockup from './components/test';
import OrangeHeroFormSection from './components/OrangeHeroFormSection';
import SubscriptionForm from './components/SubscriptionForm';
function App() {
  return (
      <div className="App">
      <NavBar />

      <div id="qr-ad" className="section"><QRAdSection /></div>
      <div id="qr-middle" className="section"><FetureQrmiddleSection /></div>
      <div id="test" className ="section"><PhoneMockup /></div>
      <div id="icode-feature" className="section"><IcodeFeture /></div>
      <div id="partners" className="section"><PartnersSection /></div>
       <div id="phone-form" className="section"> <PhoneForm /> </div>
      <div id="feature-cards" className="section"><FeatureCards /></div>
      <div id="features-details" className="section FeaturesDetailsSection-section"><FeaturesDetailsSection /></div>
      <div id="contact" className="section"><ContactForm /></div>
      <div id="subscription-form" className="section"><SubscriptionForm /></div>
    </div>
  );
}

export default App;
