import { Fragment } from "react"
import Cards from "../../Components/Cards/Cards"
import Banner from "../../Components/banner/Banner"
import './home.css'
import HeadLines from './../../Components/headLine/HeadLines';
import HerbalData from "../../Components/HerbalData/HerbalData";
import TherapyData from "../../Components/TherapyData/TherapyData";
import HoneyData from "../../Components/HoneyData/HoneyData";
import TreatingDiseases from './../../Components/Treating diseases/TreatingDiseases';
import ScrollToTop from './../../Components/Scroll To Top/ScrollTop';

function Home() {
  return (
   <Fragment>
     <div className="home">
      <Banner />
    </div>
      <Cards />
      <div className="headline">
        <HeadLines title={"العلاج بالأعشاب"} />
      </div>
      <HerbalData />
      <TherapyData />
      <HoneyData />
      <TreatingDiseases />
      <ScrollToTop />
   </Fragment>
  )
}

export default Home