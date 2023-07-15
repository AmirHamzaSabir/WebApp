import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <main className="main pages">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <NavLink to="/home">
                <i className="fi-rs-home mr-5"></i>Home
              </NavLink>
              <span></span> Pages <span></span> About us
            </div>
          </div>
        </div>
        <div className="page-content pt-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-12 m-auto">
                <section className="row align-items-center mb-50">
                  <div className="col-lg-6">
                    <img
                      src="/images/about-1.png"
                      alt=""
                      className="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pl-25">
                      <h2 className="mb-30">Welcome to Nest</h2>
                      <p className="mb-25">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate id est laborum.
                      </p>
                      <p className="mb-50">
                        Ius ferri velit sanctus cu, sed at soleat accusata.
                        Dictas prompta et Ut placerat legendos interpre.Donec
                        vitae sapien ut libero venenatis faucibus. Nullam quis
                        ante Etiam sit amet orci eget. Quis commodo odio aenean
                        sed adipiscing. Turpis massa tincidunt dui ut ornare
                        lectus. Auctor elit sed vulputate mi sit amet. Commodo
                        consequat. Duis aute irure dolor in reprehenderit in
                        voluptate id est laborum.
                      </p>
                      <div className="carausel-3-columns-cover position-relative">
                        <div id="carausel-3-columns-arrows">
                          <span
                            className="slider-btn slider-prev slick-arrow"
                            
                          >
                            <i className="fi-rs-arrow-small-left"></i>
                          </span>
                          <span
                            className="slider-btn slider-next slick-arrow"
                            
                          >
                            <i className="fi-rs-arrow-small-right"></i>
                          </span>
                        </div>
                        <div
                          className="carausel-3-columns slick-initialized slick-slider"
                          id="carausel-3-columns"
                        >
                          <div className="slick-list draggable">
                            <div
                              className="slick-track"
                              style={{opacity: "1", width: "2376px", transform: "translate3d(-1296px, 0px, 0px)"}}
                            >
                              <img
                                src="/images/about-3.png"
                                alt=""
                                className="slick-slide slick-cloned"
                                tabindex="-1"
                                style={{width: "192px"}}
                                data-slick-index="-3"
                                id=""
                                aria-hidden="true"
                              />
                              <img
                                src="/images/about-4.png"
                                alt=""
                                className="slick-slide slick-cloned"
                                tabindex="-1"
                                style={{width: "192px"}}
                                data-slick-index="-2"
                                id=""
                                aria-hidden="true"
                              />
                              <img
                                src="/images/about-2.png"
                                alt=""
                                className="slick-slide slick-cloned"
                                tabindex="-1"
                                style={{width: "192px"}}
                                data-slick-index="-1"
                                id=""
                                aria-hidden="true"
                              />
                              <img
                                src="/images/about-2.png"
                                alt=""
                                className="slick-slide"
                                tabindex="-1"
                                style={{width: "192px"}}
                                data-slick-index="0"
                                aria-hidden="true"
                              />
                              <img
                                src="/images/about-3.png"
                                alt=""
                                className="slick-slide"
                                tabindex="-1"
                                style={{width: "192px"}}
                                data-slick-index="1"
                                aria-hidden="true"
                              />
                              <img
                                src="/images/about-4.png"
                                alt=""
                                className="slick-slide"
                                tabindex="-1"
                                style={{width: "192px"}}
                                data-slick-index="2"
                                aria-hidden="true"
                              />
                              <img
                                src="/images/about-2.png"
                                alt=""
                                className="slick-slide slick-current slick-active"
                                tabindex="0"
                                style={{width: "192px"}}
                                data-slick-index="3"
                                aria-hidden="false"
                              />
                              <img
                                src="/images/about-2.png"
                                alt=""
                                className="slick-slide slick-cloned slick-active"
                                tabindex="-1"
                                style={{width: "192px"}}
                                data-slick-index="4"
                                id=""
                                aria-hidden="false"
                              />
                              <img
                                src="/images/about-3.png"
                                alt=""
                                className="slick-slide slick-cloned slick-active"
                                tabindex="-1"
                                style={{width: "192px"}}
                                data-slick-index="5"
                                id=""
                                aria-hidden="false"
                              />
                              <img
                                src="/images/about-4.png"
                                alt=""
                                className="slick-slide slick-cloned"
                                tabindex="-1"
                                style={{width: "192px"}}
                                data-slick-index="6"
                                id=""
                                aria-hidden="true"
                              />
                              <img
                                src="/images/about-2.png"
                                alt=""
                                className="slick-slide slick-cloned"
                                tabindex="-1"
                                style={{width: "192px"}}
                                data-slick-index="7"
                                id=""
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="text-center mb-50">
                  <h2 className="title style-3 mb-40">What We Provide?</h2>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 mb-24">
                      <div className="featured-card">
                        <img src="/fonts/icon-1.svg" alt="" />
                        <h4>Best Prices &amp; Offers</h4>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                        <a href="#">Read more</a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-24">
                      <div className="featured-card">
                        <img src="/fonts/icon-2.svg" alt="" />
                        <h4>Wide Assortment</h4>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                        <a href="#">Read more</a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-24">
                      <div className="featured-card">
                        <img src="/fonts/icon-3.svg" alt="" />
                        <h4>Free Delivery</h4>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                        <a href="#">Read more</a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-24">
                      <div className="featured-card">
                        <img src="/fonts/icon-4.svg" alt="" />
                        <h4>Easy Returns</h4>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                        <a href="#">Read more</a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-24">
                      <div className="featured-card">
                        <img src="/fonts/icon-5.svg" alt="" />
                        <h4>100% Satisfaction</h4>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                        <a href="#">Read more</a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-24">
                      <div className="featured-card">
                        <img src="/fonts/icon-6.svg" alt="" />
                        <h4>Great Daily Deal</h4>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                        <a href="#">Read more</a>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="row align-items-center mb-50">
                  <div className="row mb-50 align-items-center">
                    <div className="col-lg-7 pr-30">
                      <img
                        src="/images/about-5.png"
                        alt=""
                        className="mb-md-3 mb-lg-0 mb-sm-4"
                      />
                    </div>
                    <div className="col-lg-5">
                      <h4 className="mb-20 text-muted">Our performance</h4>
                      <h1 className="heading-1 mb-40">
                        Your Partner for e-commerce grocery solution
                      </h1>
                      <p className="mb-30">
                        Ed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto
                      </p>
                      <p>
                        Pitatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5">
                      <h3 className="mb-30">Who we are</h3>
                      <p>
                        Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                        mattis enim ut tellus eros donec ac odio orci ultrices
                        in. ellus eros donec ac odio orci ultrices in.
                      </p>
                    </div>
                    <div className="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5">
                      <h3 className="mb-30">Our history</h3>
                      <p>
                        Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                        mattis enim ut tellus eros donec ac odio orci ultrices
                        in. ellus eros donec ac odio orci ultrices in.
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <h3 className="mb-30">Our mission</h3>
                      <p>
                        Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                        mattis enim ut tellus eros donec ac odio orci ultrices
                        in. ellus eros donec ac odio orci ultrices in.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <section className="container mb-50 d-none d-md-block">
            <div className="row about-count">
              <div className="col-lg-1-5 col-md-6 text-center mb-lg-0 mb-md-5">
                <h1 className="heading-1">
                  <span className="count">0</span>+
                </h1>
                <h4>Glorious years</h4>
              </div>
              <div className="col-lg-1-5 col-md-6 text-center">
                <h1 className="heading-1">
                  <span className="count">0</span>+
                </h1>
                <h4>Happy clients</h4>
              </div>
              <div className="col-lg-1-5 col-md-6 text-center">
                <h1 className="heading-1">
                  <span className="count">1</span>+
                </h1>
                <h4>Projects complete</h4>
              </div>
              <div className="col-lg-1-5 col-md-6 text-center">
                <h1 className="heading-1">
                  <span className="count">0</span>+
                </h1>
                <h4>Team advisor</h4>
              </div>
              <div className="col-lg-1-5 text-center d-none d-lg-block">
                <h1 className="heading-1">
                  <span className="count">0</span>+
                </h1>
                <h4>Products Sale</h4>
              </div>
            </div>
          </section>
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-12 m-auto">
                <section className="mb-50">
                  <h2 className="title style-3 mb-40 text-center">Our Team</h2>
                  <div className="row">
                    <div className="col-lg-4 mb-lg-0 mb-md-5 mb-sm-5">
                      <h6 className="mb-5 text-brand">Our Team</h6>
                      <h1 className="mb-30">Meet Our Expert Team</h1>
                      <p className="mb-30">
                        Proin ullamcorper pretium orci. Donec necscele risque
                        leo. Nam massa dolor imperdiet neccon sequata congue
                        idsem. Maecenas malesuada faucibus finibus.
                      </p>
                      <p className="mb-30">
                        Proin ullamcorper pretium orci. Donec necscele risque
                        leo. Nam massa dolor imperdiet neccon sequata congue
                        idsem. Maecenas malesuada faucibus finibus.
                      </p>
                      <a href="#" className="btn">
                        View All Members
                      </a>
                    </div>
                    <div className="col-lg-8">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="team-card">
                            <img src="/images/about-6.png" alt="" />
                            <div className="content text-center">
                              <h4 className="mb-5">H. Merinda</h4>
                              <span>CEO &amp; Co-Founder</span>
                              <div className="social-network mt-20">
                                <a href="#">
                                  <img
                                    src="/fonts/icon-facebook-brand.svg"
                                    alt=""
                                  />
                                </a>
                                <a href="#">
                                  <img
                                    src="/fonts/icon-twitter-brand.svg"
                                    alt=""
                                  />
                                </a>
                                <a href="#">
                                  <img
                                    src="/fonts/icon-instagram-brand.svg"
                                    alt=""
                                  />
                                </a>
                                <a href="#">
                                  <img
                                    src="/fonts/icon-youtube-brand.svg"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="team-card">
                            <img src="/images/about-8.png" alt="" />
                            <div className="content text-center">
                              <h4 className="mb-5">Dilan Specter</h4>
                              <span>Head Engineer</span>
                              <div className="social-network mt-20">
                                <a href="#">
                                  <img
                                    src="/fonts/icon-facebook-brand.svg"
                                    alt=""
                                  />
                                </a>
                                <a href="#">
                                  <img
                                    src="/fonts/icon-twitter-brand.svg"
                                    alt=""
                                  />
                                </a>
                                <a href="#">
                                  <img
                                    src="/fonts/icon-instagram-brand.svg"
                                    alt=""
                                  />
                                </a>
                                <a href="#">
                                  <img
                                    src="/fonts/icon-youtube-brand.svg"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUs;
