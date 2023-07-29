import { useEffect } from "react";
import ProfileThumb from "./ProfileThumb";
import { isMobile } from "../utils/constants";
import { contentWayPoint } from "../utils/common";

const fullHeight = function () {
  if (!isMobile.any()) {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  }
};

function Header() {
  useEffect(() => {
    fullHeight();
    contentWayPoint();
  }, []);

  const cover = `/assets/images/cover_bg_3.jpg`;
  
  return (
    <header
      id="fh5co-header"
      className="fh5co-cover js-fullheight"
      role="banner"
      style={{ backgroundImage: `url(${cover})` }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="display-t js-fullheight">
              <ProfileThumb />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
