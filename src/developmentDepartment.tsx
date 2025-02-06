import "./developmentDepartment.scss";
import Richter_Websoftware from "./assets/Screenshot (15).png";
import Richter_Gamingwebsite from "./assets/Screenshot (13).png";
//import Service from "./service";

export default function DevelopementDepartment() {
  return (
    <section
      id="developent-department"
      className="development-department-section"
    >
      <h2 className="development-department-section__headline">
        Software Abteilungen
      </h2>
      <div className="development-department-section__development-department-overview-div">
        <div className="development-department-section__web-development-div">
          <p className="development-department-section__web-development-headline">
            Richter Websoftware
          </p>
          <img
            src={Richter_Websoftware}
            className="development-department-section__web-development-img"
            alt=""
          />
          <a
            href="https://www.richter-websoftware.de"
            className="development-department-section__web-development-link link"
            target="_blank"
          >
            <button className="development-department-section__web-development-button button">
              zur Websoftware Webseite
            </button>
          </a>
        </div>
        <div className="development-department-section__app-development-div">
          <p className="development-department-section__app-development-headline">
            Richter Appsoftware
          </p>
          <p className="development-department-section__app-development-text">
            Bereich folgt
          </p>
          <img
            src=""
            className="development-department-section__app-development-img"
            alt=""
          />
        </div>
        <div className="development-department-section__gaming-development-div">
          <p className="development-department-section__gaming-development-headline">
            Richter <wbr />
            Gamingsoftware
          </p>
          <img
            src={Richter_Gamingwebsite}
            className="development-department-section__gaming-development-img"
            alt=""
          />
          <a
            href="https://r-s-94.github.io/Richter-Gamingwebsite/"
            className="development-department-section__gaming-development-link link"
            target="_blank"
          >
            <button className="development-department-section__gaming-development-button button">
              zur Gamingsoftware Webseite
            </button>
          </a>
        </div>
      </div>
    </section>
  );

  /*
   <Service />
   
   <a
            href=""
            className="development-department-section__app-development-link link"
          >
            <button className="development-department-section__app-development-button button">
              zur Appsoftware Webseite
            </button>
          </a>

   <a
            href=""
            className="development-department-section__gaming-development-link link"
          >
            <button className="development-department-section__gaming-development-button button">
              zur Gamingsoftware Webseite
            </button>
          </a>{" "}
  */
}
