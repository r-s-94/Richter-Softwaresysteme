import HeadComponent from "./Head";
import DevelopementDepartment from "./developmentDepartment";
import DecorationComponent from "./decorationComponent";
//import TechnologiesOverview from "./technologiesOverview";
import Contact from "./contact";
import Nav from "./nav";

export default function Roots() {
  return (
    <>
      <HeadComponent />
      <DevelopementDepartment />
      <DecorationComponent />
      <Contact />
    </>
  );
  /*  <Nav />
  <TechnologiesOverview />
      
  */
}
