// import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { WithSub } from "./NavBar";
// import MainMint from "./MainMint";
import Footerbottom from "./footerall";
// import NotFound from './404';
import ThreeTierPricing from "./pricing";
// import "./css/style.css"
import Features from "./services";
// import HeroSection from './hero';
import BlogCards from "./blog";
import BrandStats from "./stats";
import Question from "./quote";
import Contact from "./signup";
import NotFound from "./404";
import SplitScreen from "./herom";
import Testimonials from "./testimo";
// import WithBackgroundImage from './indust';
import Deveops from './served';
import JoinOurTeam from './career'
import OverviewSection from './heroin';
import Milestones from './policies';
import Hooked from "./terms";

function App() {
  return (
    <div className="main">
      <ChakraProvider>
        <BrowserRouter>
          <WithSub />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<ThreeTierPricing />} />
            <Route path="/navbar" element={<WithSub />} />
            <Route path="/footerall" element={<Footerbottom />} />
            {<Route path="/services" element={<Features />} />}
            <Route path="/blog" element={<BlogCards />} />
            <Route path="/stats" element={< BrandStats />} />
            <Route path="/quote" element={< Question />} />
            <Route path="/signup" element={< Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/herom" element={<SplitScreen />} />
            <Route path="/testimo" element={<Testimonials />} />
            {/* <Route path="/indust" element={<WithBackgroundImage />} /> */}
            <Route path="/served" element={<Deveops />} />
            <Route path="/career" element={< JoinOurTeam/>} />
            <Route path="/heroin" element={< OverviewSection/>} />
            <Route path="/policies" element={< Milestones/>} />
            <Route path="/terms" element={<Hooked/>} />
          </Routes>
          <Footerbottom></Footerbottom>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
