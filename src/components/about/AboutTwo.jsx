import React from "react";

const AboutTwo = () => {
  return (
    <>
      <div className="shane_tm_section" id="about">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/img/about/IMG_1589.jpg" alt="placeholder" />

                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "/img/about/IMG_1589.jpg"
                      })`,
                    }}
                  ></div>
                </div>
                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>About Me</span>
                  <h3>Full Stack Web Developer based in Houston, Texas</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    {/* I'm a web developer, and I'm very passionate and dedicated to
                    my work. With my experience as an educator combined with my skills as a web developer, I have acquired the skills and knowledge
                    necessary to learn quickly and break down large tasks.  */}
                    I am a Full Stack Web Developer with the ability to pick up new languages and technologies as needed. Prior to being a web developer, I worked as a teacher where I worked with 100+ students and developed important skills: communication, fostering positive environments, and breaking down large concepts. As a software developer, I have worked on developing full stack apps.

                  </p>
                </div>
                <div
                  className="shane_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a href="/img/resume/Mayra_Estrella-Full_Stack_Web_Developer.pdf" download>
                    Download CV
                  </a>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default AboutTwo;
