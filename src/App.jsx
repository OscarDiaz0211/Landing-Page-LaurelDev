import { AboutApp } from "./components/AboutApp";
import { HomeApp } from "./components/HomeApp";
import { ServicesApp } from "./components/ServicesApp";



export const App = () => {

  return (
    <>
      <section id="home">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div id="titleHomeDiv">
                <div>
                  <h1 id="titleHome">Laurel <span>Dev</span></h1>
                  <p className="pt-3" id="subTitle">Building great software</p>

                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div id="logoHome"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="curved"></section>
      <AboutApp />
      <ServicesApp />
      <HomeApp />

    </>
  );
}


