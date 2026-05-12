import { FunctionComponent } from "react";
import "./PrinciplesCard.css"

interface Props {
  count: string;
  title: string;
  text: string;
  bol: string;
}

const PrinciplesCard:FunctionComponent<Props> = ({ count, title, text, bol }) => {
  return (
    <div className="principlesCard">
      <svg className="principlesCard__bg" xmlns="http://www.w3.org/2000/svg" width="322" height="282" viewBox="0 0 322 282" fill="none">
        <path
          d="M290 0C307.673 3.22127e-07 322 14.3269 322 32V250C322 267.673 307.673 282 290 282H32C14.3269 282 0 267.673 0 250V97C0 79.8792 13.8792 66 31 66C48.1208 66 62 52.1208 62 35V32C62 14.3269 76.3269 0 94 0H290Z"
          fill={!bol ? "#F3F3F3" : "#226A43"}
        />
      </svg>

      <div className="principlesCard__count">{count}</div>

      <div className="principlesCard__content">
        <h6
          className="principlesCard__title"
          style={{ color: !bol ? "#202020" : "#FFFFFF" }}
        >{title}</h6>
        <p className="principlesCard__text"
          style={{ color: !bol ? "#343434" : "#FFFFFF" }}
        >{text}</p>
      </div>


      {/* <img src="/images/bg-jk.svg" alt="33" />
      <div className="principlesCard__count">{""}</div>
     


       <div className="principlesCard__header" /> */}
    </div>
  )
}

export default PrinciplesCard;
