import { ReactComponent as Svg } from "../data/Images/undraw.svg";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container d-flex flex-column">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
              </div>
              <Svg />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
