import { ReactComponent as ArrowDown } from "assets/svgs/ArrowDown.svg";

const DnaneerIntro = () => {
  return (
    <div className="auth-col-one">
      <img src="/assets/images/logo2.png" alt="logo" className="logo2" />

      <div className="card-one-container">
        <img
          src="/assets/images/card-one.png"
          alt="logo"
          className="card-one-img"
        />
        <div className="active-buttons">
          <div className="active-sm-btn sm-btn" />
          <div className="sm-btn" />
          <div className="sm-btn" />
          <div className="sm-btn" />
          <div className="sm-btn" />
          <div className="sm-btn" />
        </div>
        <div className="card-one-content">
          <h4>Welcome to Dnaneer</h4>
          <h1>
            Dnaneer is your first to go platform when you think about capital
            growth{" "}
          </h1>
          <p>
            {" "}
            layout. It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. It is a long established fact that a reader will be
            distracted by the readable.
          </p>
        </div>
      </div>
      <div className="card-two-container">
        <div className="arrow-down-icon">
          <ArrowDown />
        </div>
        <div className="card-two-img-container">
          <img
            src="/assets/images/card-two.png"
            alt="logo"
            className="card-two-img"
          />
          <h1>We take you on another level to your financial growth</h1>
        </div>

        <div className="card-two-content">
          <h4>Our Vision</h4>
          <h2>It is a long established fact </h2>
          <p>
            Layout. It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. It is a long established fact that a reader will be
            distracted by the readable.
          </p>
        </div>
      </div>
      <div className="cards-container">
        <div className="card-four-container">
          <div className="card-four-content">
            <h4>Opportunities</h4>
            <h1>Are you looking for the perfect investment opportunity.</h1>
            <img
              src="/assets/images/card-four.png"
              alt="logo"
              className="card-four-img"
            />
            <b>Name here</b>
            <span>Investor/Company title</span>
            <p>
              “It is a long established fact It is a long established fact.”
            </p>
          </div>
        </div>
        <div className="card-three-container">
          <img
            src="/assets/images/card-three.png"
            alt="logo"
            className="card-three-img"
          />
          <b>Ahmed</b>
          <span>Senior Business Systems Analyst</span>
          <p>
            “Dananeer gives investors the opportunity to make the most out of
            their investment.”
          </p>
        </div>
      </div>
      <div className="copyright">
        <p>Dnaneer © Copyright 2023, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default DnaneerIntro;
