import AboutUs from "../About";
import FAQs from "../FAQs";
import Features from "../Features";
import Footer from "../Footer";
import GetStarted from "../GetStarted";
import Header from "../Header";
import Landing from "../Landing";
import Pricing from "../Pricing";
import Testimonials from "../Testimonials";

const Home = () => {
  return (
    <>
      <Header isLegal={false} />
      <main className="flex items-center justify-center">
        <div className="max-w-[1296px] w-full px-5">
          <Landing />
          <AboutUs />
          <Features />
          <Pricing />
          <Testimonials />
          <FAQs />
          <GetStarted />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
