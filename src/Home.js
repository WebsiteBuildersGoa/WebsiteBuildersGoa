// import { FaBeer } from 'react-icons/fa';

import Features from './services';
import BrandStats from "./stats";
// import HeroSection from "./hero";
// import BlogCards from "./blog";
import Question from './quote';
import SplitScreen from './herom';
import Testimonials from './testimo';
import OverviewSection from "./heroin";



export const Home = () => {
  return (
    <>

<div><SplitScreen></SplitScreen>
      <div><BrandStats></BrandStats></div>
      <div><Features></Features></div>
      </div><div><OverviewSection></OverviewSection></div>     
      <div><Testimonials></Testimonials></div>
      <div><Question></Question></div>
      {/* <div><BlogCards ></BlogCards ></div> */}
  
      {/* <h3> Lets go for a <FaBeer color='red' />? </h3> */}

    </>
  );
};