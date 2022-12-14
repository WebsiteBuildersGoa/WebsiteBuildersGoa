
import Features from './services';
import BrandStats from "./stats";
import Question from './quote';
import SplitScreen from './herom';
import Testimonials from './testimo';
import OverviewSection from "./heroin";



export const Home = () => {
  return (
    <>
      <div><SplitScreen></SplitScreen></div>
      <div><BrandStats></BrandStats></div>
      <div><Features></Features></div>
      <div><OverviewSection></OverviewSection></div>     
      <div><Testimonials></Testimonials></div>
      <div><Question></Question></div>
    </>
  );
};
