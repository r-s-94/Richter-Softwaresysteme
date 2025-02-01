import HeadComponent from "./Head";
import DevelopementDepartment from "./developmentDepartment";
import DecorationComponent from "./decorationComponent";
//import TechnologiesOverview from "./technologiesOverview";
import Contact from "./contact";
//import Nav from "./nav";
import Footer from "./footer";

export default function Roots() {
  return (
    <>
      <HeadComponent />
      <DevelopementDepartment />
      <DecorationComponent />
      <Contact />
      <Footer />
    </>
  );
  /*  <Nav />
  <TechnologiesOverview />
      
  */
}
