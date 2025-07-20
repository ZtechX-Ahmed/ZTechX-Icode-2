import QRAdSection from './components/QRAdSection';
import FeatureCards from './components/FeatureCards';
import PartnersSection from './components/PartnersSection';
import ContactForm from './components/ContactForm';
import FetureQrmiddleSection from './components/FetureQrmiddleSection';
import IcodeFeture from './components/IcodeFeture';
import NavBar from './components/NavBar';
import PhoneForm from './components/PhoneForm';
import SecondPage from './components/test';
import ThirdPage from './components/thirdpage'; 
import FourthPage from './components/fourth page';

import SubscriptionForm from './components/SubscriptionForm';

function App() {
  return (
    <div className="App min-h-screen text-gray-800">
      <NavBar />
      <section id="qr-ad" className=""><QRAdSection /></section>
      <section id="phone-mockup" className=""><SecondPage /></section>
      <section id ="third-page" className=""><ThirdPage /></section>
      <section id="icode-feature" className=""><IcodeFeture /></section>
      <section id="partners" className=""><PartnersSection /></section>
      <section id="phone-form" className=""><PhoneForm /></section>
      <section id="feature-cards" className=""><FeatureCards /></section>
      <section id="subscription-form" className=""><SubscriptionForm /></section>
    </div>
  );
}

export default App;
