import { useEffect, useState } from "react";
import Toast from "react-bootstrap/Toast";

const About = () => {
  return (
    <div className="container mt-5">
      <section className="py-3 py-md-5">
        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6 col-xl-5">
              <img
                className="img-fluid rounded"
                loading="lazy"
                src="https://avatars.githubusercontent.com/u/77499509?s=400&u=c91141df8296531ac37e16964400c6731e9a6c01&v=4"
                alt="img loading"
              />
            </div>
            <div className="col-12 col-lg-6 col-xl-7">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                  <h2 className="mb-3">Hello, I'm Mayuresh😊</h2>
                  <p className="lead fs-4 text-secondary mb-3">
                    I help people to build incredible brands and superior
                    products. Our perspective is to furnish outstanding
                    captivating services.
                  </p>
                  <p className="mb-5">
                    Hello, I'm Mayuresh - Your Web Developer ✨ Creating Awesome
                    Websites I'm passionate about making fantastic websites.
                    Right now, I'm focusing on React and Node.js, two cool tools
                    for building websites that work great and look awesome. 👥
                    Let's Team Up I love teaming up on exciting web projects. We
                    can use the latest tech and creativity to make something
                    amazing. I'm also good at making websites run super fast and
                    keeping up with what's new in web design. 📚 Always Learning
                    I'm always learning new stuff. Right now, I'm getting even
                    better at React and trying out serverless web tech with
                    Node.js. 🤔 Questions? Just Ask If you have any questions
                    about websites, React, Node.js, or anything else, feel free
                    to ask. I'm here to help. 🌱 Beyond Web Dev When I'm not
                    coding, I enjoy exploring different ways of looking at life.
                    It's what keeps my creativity flowing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
