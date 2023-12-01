import React from "react";
import Home from "./components/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomeForm from "./components/HomeForm";
import OurMenu from "./components/Ourmenu";
import Gallery from "./components/Gallery";
import OrganizeEvent from "./components/OrganizeEvent";
import Banner from "./components/innerpages/Banner";
import CardPage from "./components/innerpages/cardpage/CardPage";
import StoryBehind from "./components/innerpages/StoryBehind";
import ContactUs from "./components/innerpages/ContactUs";
const App = () => {
  return (
    <div>
      <Header />
      <Banner objectfit={"cover"} bgImg={"/bannerImages/celebration.png"} />
      <Banner objectfit={"cover"} bgImg={"/bannerImages/Maskgroup.png"} />
      <Banner objectfit={""} bgImg={"/bannerImages/guitar.png"} />
      <Home />
      <OurMenu />
      <StoryBehind />
      <Gallery />
      <OrganizeEvent />
      <HomeForm />
      <CardPage />
      <ContactUs/>
      <Footer />
    </div>
  );
};

export default App;
