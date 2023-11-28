import React from "react";
import img from "./Images/dp.jpeg"
import { useContext } from "react";
import { ThemeContext } from "./Theme";

const ContactMe = ({th}) => {
  let {theme,setTheme} = useContext(ThemeContext)
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: theme == "light"?"#2B3499":"black" , fontSize:"1.1rem"}}>
        <div className="container py-5 h-100 " style={{marginLeft:"10vw"}}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0 ">
              <div className="card mb-3 " style={{ borderRadius: "0.5rem" ,width:"43vw" }}>
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                      backgroundColor: "#FF7F50",
                      height: "80vh",
                    }}
                  >
                    <img
                      src={img}
                      alt="Avatar"
                      className="img-fluid my-5"
                      style={{ width: "140px" , borderRadius : "50%"}}
                    />
                    <h4>Saurabh Bansal </h4>
                    <p> Software Developer </p>
                    <p> Mentor </p>

                    <p> Youtuber </p>
                    {/* <p>Web Designer</p>

                    <p>Web Designer</p>
                    <p>Web Designer</p>
                    <p>Web Designer</p>
                    <p>Web Designer</p>
                    <p>Web Designer</p>

                      <p>Web Designer</p>
                      <p>Web Designer</p> */}
                     

                    <i className="far fa-edit mb-5"></i>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted"><a  style={{textDecoration:"none" , color :"black"}}href="mailto:saurabhbansal2443@gmail.com">saurabhbansal2443</a></p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">123 456 789</p>
                        </div>
                      </div>
                      <h6>Social Profiles </h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Linkdein</h6>
                          <p className="text-muted">saurabhbansal2443</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Github</h6>
                          <p className="text-muted">saurabhbansal2443</p>
                        </div>
                      </div>

                      <h6>Platforms </h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Leetcode </h6>
                          <p className="text-muted">Lorem ipsum</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>CodeChef</h6>
                          <p className="text-muted">Dolor sit amet</p>
                        </div>
                      </div>

                      <h6>Address</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>City</h6>
                          <p className="text-muted">Delhi</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Country</h6>
                          <p className="text-muted">India</p>
                        </div>
                      </div>

                      <div className="d-flex justify-content-start">
                        <a href="#!">
                          <i className="fab fa-facebook-f fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-twitter fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-instagram fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
