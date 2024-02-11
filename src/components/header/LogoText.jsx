import "./logotext.css";

const LogoText = () => {
  return (
    <>
      {/* #CodePenChallenge: Lightness */}
      {/* <div className="overlay site-logo " /> */}
      <div className="text">
        <div className="t-wrapper">
          <div id="C" className="letter">
            C
          </div>
          <div className="shadow">C</div>
        </div>
        <div className="t-wrapper">
          <div id="O" className="letter">
            O
          </div>
          <div className="shadow">O</div>
        </div>
        <div className="t-wrapper">
          <div id="D" className="letter">
            D
          </div>
          <div className="shadow">D</div>
        </div>
        <div className="t-wrapper">
          <div id="E" className="letter">
            E
          </div>
          <div className="shadow">E</div>
        </div>
        
      </div>
    </>
  );
};

export default LogoText;
