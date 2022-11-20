import React from "react";

//import vmarine
import certificate1 from "../img/certificate1.jpg";
import certificate5 from "../img/certificate5.jpg";
import international_staffing from "../img/cert_staffing.png";


//import landing page
import product from "../img/product.png";

class Portfolio extends React.Component {
  render() {
    return (
        <section id="work" className="portfolio-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">Our Business Portfolio</h3>
                  <p className="subtitle-a">EdgeOver lends its expertise in: </p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              {/*Certificates */}
              <div class="Business">
                <ul>
                  <li>
                    <h4 class="sub-staffing">
                      International Staffing
                    </h4>
                  </li>
                  <li>
                    <h4 class="sub-staffing">
                      Domestic Staffing
                    </h4>
                  </li>
                  <li>
                    <h4 class="sub-staffing">
                      Specialized Staffing
                    </h4>
                  </li>
                  <li>
                    <h4 class="sub-staffing">
                      C-level Hiring
                    </h4>
                  </li>
                  <li>
                  <h4 class="sub-staffing">
                    Recruitment Process Outsourcing
                  </h4>
                  </li>
                </ul>
                
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a href={international_staffing} data-lightbox="gallery-certificates">
                    <div className="work-img">
                      <img src={international_staffing} alt="" className="img-fluid" />
                    </div>
                    {/* <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">International Staffing</h2>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <span className="ion-ios-plus-outline"></span>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </a>
                  <a
                    href={certificate1}
                    data-lightbox="gallery-certificates"
                    style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Portfolio;
