import { ReactComponent as Svg } from "../data/Images/header-svg.svg";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="container text-center">
          <div className="col">
            <div className="col-md-8 col-md-offset-2 header-content">
              <div className="intro-text ">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
              </div>
              {/* <Svg className="header-svg" /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
