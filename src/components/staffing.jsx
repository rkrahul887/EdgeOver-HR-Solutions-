import React from "react";
import myImage from "../img/myImage.jpg";

class Staffing extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
        <section id="staffing" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        {/* <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            src={myImage}
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div> */}
                      </div>
                      {/* <div className="col-sm-6 col-md-7">
                                                <div className="about-info">
                                                <p><span class="title-s">Name: </span> <span>Frank Izquierdo</span></p>
                                                <p><span class="title-s">Profile: </span> <span>full stack developer</span></p>
                                                <p><span class="title-s">Email: </span> <span>contact@example.com</span></p>
                                                <p><span class="title-s">Phone: </span> <span>(617) 557-0089</span></p>
                                                </div>
                                            </div> */}
                    </div>
                    {/* <div className="skill-mf">
                      {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div> */}
                  </div>
                  <div>
                    <h5 className="title-left">Staffing</h5>
                  </div>
                  {/* <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                    <h5 className="title-left">About EdgeOver</h5>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Staffing;
