import './App.scss';
import MenuItem from "./components/MenuItem";
import Button from "./components/Button";
import Logo from "./components/Logo";
import BenefitCard from "./components/BenefitCard";
import FeatureCard from "./components/FeatureCard";
import PricingCard from "./components/PricingCard";

function App() {
  return (
    <div className="App">

        <div className="topBar">
            <Logo />

            <div className="topBarMenu">
                <MenuItem title="Benefits" />
                <MenuItem title="Features" />
                <MenuItem title="Reviews" />
                <Button variant="stroke" title="Buy CrypAppy" />
            </div>
        </div>

        <header className="header">
            <div className="headerLeft">
                <h1 className="headerTitle">The crypto portfolio app that makes you smile. Every day.</h1>
                <p className="headerText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
            </div>
            <div className="headerRight">
                <img src="/images/header.png" alt="header"/>
            </div>
        </header>

        <section className="benefits">
            <div className="benefitsHeader">

    <h2 className="benefitsTitle">New crypto finance app</h2>
            <p className="benefitsText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>

                <div className="benefitsList">
                <BenefitCard title="Benefit description 1" text="Suspendisse varius enim in eros elementum tristique. Duis cursus." url="#" />
                <BenefitCard title="Benefit description 2" text="Suspendisse varius enim in eros elementum tristique. Duis cursus." url="#" />
                <BenefitCard title="Benefit description 3" text="Suspendisse varius enim in eros elementum tristique. Duis cursus." url="#" />
            </div>
        </section>

        <section className="features">
            <div className="featuresHeader">
                <h2 className="featuresTitle">A perfect landing page to help launch your app</h2>
                <p className="featuresText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </div>
            <div className="featuresList">
                <div>
                    <FeatureCard title="Feature description" text="Suspendisse varius enim in eros elementum tristique. Duis cursusSuspendisse varius enim in eros elementum tristique. Duis cursus." align="right" />
                    <FeatureCard title="Feature description" text="Suspendisse varius enim in eros elementum tristique. Duis cursusSuspendisse varius enim in eros elementum tristique. Duis cursus." align="right" />
                    <FeatureCard title="Feature description" text="Suspendisse varius enim in eros elementum tristique. Duis cursusSuspendisse varius enim in eros elementum tristique. Duis cursus." align="right" />
                </div>
                <div className="featuresImage">
                    <img src="/images/iphone.png" alt=""/>
                </div>
                <div>
                    <FeatureCard title="Feature description" text="Suspendisse varius enim in eros elementum tristique. Duis cursusSuspendisse varius enim in eros elementum tristique. Duis cursus." align="left" />
                    <FeatureCard title="Feature description" text="Suspendisse varius enim in eros elementum tristique. Duis cursusSuspendisse varius enim in eros elementum tristique. Duis cursus." align="left" />
                    <FeatureCard title="Feature description" text="Suspendisse varius enim in eros elementum tristique. Duis cursusSuspendisse varius enim in eros elementum tristique. Duis cursus." align="left" />
                </div>
            </div>
        </section>
        <section className="prices">
            <div className="pricesList">
<PricingCard borderColor="#159BE8" title="Essentail" price="$12/mo" text="Lorem ipsum dolor sit amet suspendisse varius. Duis cursus, mi quis viverra ornare, eros dolor interdum" button={<Button title="Start your free trial" />} />
<PricingCard borderColor="#F95B74" title="Pro" price="$56/mo" text="Lorem ipsum dolor sit amet suspendisse varius. Duis cursus, mi quis viverra ornare, eros dolor interdum" button={<Button title="Start your free trial" />} />
<PricingCard borderColor="#7C44E2" title="Premium" price="$79/mo" text="Lorem ipsum dolor sit amet suspendisse varius. Duis cursus, mi quis viverra ornare, eros dolor interdum" button={<Button title="Start your free trial" />} />
            </div>

            <div className="pricesActions">
                <Button variant="primary" title="Buy CrypAppy" />
                <Button title="View in designer" />
            </div>
        </section>
    </div>
  );
}

export default App;
