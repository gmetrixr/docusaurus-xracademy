import React from "react";
import "./styles.css";

interface Props {
  link: string,
  type: string,
  heading?: string,
  onClick?: (e: any) => void,
}

const AssetCard = ({ link, type, heading, onClick }: Props) => {
  console.log(type);
  return (
    <div className="asset_card_base">
      {type === "image" && <div className="asset_card_image"><img src={link} /></div>}
      {type === "video" && <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" y="0"/></g><g><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M9.5,16.5v-9l7,4.5L9.5,16.5z"/></g></svg>}
      {type === "audio" && <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>}
      <div className="asset_card_meta">
        {heading && <div className="asset_card_heading">{heading}</div>}
        <svg onClick={() => window.open(link, "_blank")} className="asset_card_icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1A222E"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
      </div>
    </div>
  )
};

export default AssetCard;