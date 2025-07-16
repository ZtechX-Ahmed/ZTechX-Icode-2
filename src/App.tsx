import QRAdSectionion from './components/QRAdSection';
import FeatureCards from './components/FeatureCards';
import PartnersSection from './components/PartnersSection';
import ContactForm from './components/ContactForm';
import FetureQrmiddleSection from './components/FetureQrmiddleSection';
import IcodeFeture from './components/IcodeFeture';
import NavBar from './components/NavBar';
import PhoneForm from './components/PhoneForm';
import PhoneMockup from './components/test';

import SubscriptionForm from './components/SubscriptionForm';

function App() {
  return (
    <div className="App min-h-screen text-gray-800">
      <NavBar />
      <section id="qr home" className=""> <QRAdSectionion/></section>
      <section id="qr-middle" className=""><FetureQrmiddleSection /></section>
      <section id="test" className=""><PhoneMockup /></section>
      <section id="icode-feature" className=""><IcodeFeture /></section>
      <section id="partners" className=""><PartnersSection /></section>
      <section id="phone-form" className=""><PhoneForm /></section>
      <section id="feature-cards" className=""><FeatureCards /></section>
      <section id="contact" className=""><ContactForm /></section>
      <section id="subscription-form" className=""><SubscriptionForm /></section>
    </div>
  );
}

export default App;
