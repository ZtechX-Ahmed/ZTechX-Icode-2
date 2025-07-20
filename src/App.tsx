import QRAdSection from './components/QRAdSection';
import FeatureCards from './components/FeatureCards';
import PartnersSection from './components/PartnersSection';
import IcodeFeture from './components/IcodeFeture';
import NavBar from './components/NavBar';
import PhoneForm from './components/PhoneForm';
import SecondPage from './components/test';
import ThirdPage from './components/thirdpage'; 
import FourthPage from './components/fourth page';
import SubscriptionForm from './components/SubscriptionForm';

function App() {
  return (
    <div className="App min-h-screen text-gray-800 unified-bg">
      <NavBar />
      <main className="pt-16 lg:pt-20">
        <section id="qr-ad" className="section">
          <QRAdSection />
        </section>
        <section id="phone-mockup" className="section">
          <SecondPage />
        </section>
        <section id="third-page" className="section">
          <ThirdPage />
        </section>
        <section id="fourth-page" className="section">
          <FourthPage />
        </section>
        <section id="icode-feature" className="section">
          <IcodeFeture />
        </section>
        <section id="partners" className="section">
          <PartnersSection />
        </section>
        <section id="phone-form" className="section">
          <PhoneForm />
        </section>
        <section id="feature-cards" className="section">
          <FeatureCards />
        </section>
        <section id="subscription-form" className="section">
          <SubscriptionForm />
        </section>
      </main>
    </div>
  );
}

export default App;