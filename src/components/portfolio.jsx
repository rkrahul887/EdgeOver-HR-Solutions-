import React from "react";

//import vmarine
import certificate1 from "../img/certificate1.jpg";
import certificate2 from "../img/certificate2.jpg";
import certificate3 from "../img/certificate3.jpg";
import certificate4 from "../img/certificate4.jpg";
import certificate5 from "../img/certificate5.jpg";
import certificate6 from "../img/certificate6.jpeg";
import certificate7 from "../img/certificate7.jpeg";

//import ISA-HIT-Website
import isa1 from "../img/isa-img1.png";
import isa2 from "../img/isa-img2.png";
import isa3 from "../img/isa-img3.png";
import isa4 from "../img/isa-img4.png";
import isa5 from "../img/isa-img5.png";

//aguadeluz pics
import aguaDeLuz from "../img/aguaDeLuz.png";
import aguaDeLuz1 from "../img/aguaDeLuz-1.png";
import aguaDeLuz2 from "../img/aguaDeLuz-2.png";
import aguaDeLuz3 from "../img/aguaDeLuz-3.png";
import aguaDeLuz4 from "../img/aguaDeLuz-4.png";

//import todo
import todoList from "../img/todolist.png";
import todoList1 from "../img/todo-1.png";
import todoList2 from "../img/todo-2.png";
import todoList3 from "../img/todo-3.png";

//import amtbw
import amtbw from "../img/amtbw.png";

//import medlingos
import medlingos from "../img/medlingos.jpg";
import medlingos1 from "../img/medlingos-1.jpg";
import medlingos2 from "../img/medlingos-2.jpg";
import medlingos3 from "../img/medlingos-3.jpg";
import medlingos4 from "../img/medlingos-4.jpg";

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
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">Check Out My Latest Projects.</p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={certificate5} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={certificate5} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Achievments</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            All Achievments and Award Certificate
                          </span>{" "}
                          {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={certificate1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={certificate2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={certificate3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={certificate4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={certificate5}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={certificate6}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={certificate7}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div style={{ textAlign: "right" }} className="socials">
                  <ul>
                    <li>
                      <a
                        href="https://github.com/rkrahulmishra887/ISA/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="ico-circle">
                          <i className="ion-social-github"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <a href={isa1} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={isa1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">ISA-HIT-Website</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            NodeJS ExpressJS ReactJS Webpack MongoDB GIT AWS
                            RestAPI
                          </span>{" "}
                          {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={isa1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={isa2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={isa3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={isa4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={isa5}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={isa2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={isa1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={aguaDeLuz} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={aguaDeLuz} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Agua De Luz</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap Webpack SmoothScrolling
                            VanillaJS
                          </span>{" "}
                          {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={aguaDeLuz1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={aguaDeLuz2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={aguaDeLuz3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={aguaDeLuz4}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={todoList} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={todoList} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Todo List</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap Webpack ReactJS
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={todoList1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={todoList2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={todoList3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={medlingos} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={medlingos} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Medlingos</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Bootstrap ReactJS GoogleAPI
                          </span>
                          {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={medlingos1}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={medlingos2}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={medlingos3}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={medlingos4}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={amtbw} data-lightbox="gallery-amtbw">
                  <div className="work-img">
                    <img src={amtbw} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">A Mile To Be Wild</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Wordpress Blogging-Website
                          </span>
                          {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={product} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={product} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Product Landing Page</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap
                          </span>
                          {/*/ <span className="w-date">18 Sep. 2017</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
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
