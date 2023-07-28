import { useEffect } from "react";

// Loading page
const loaderPage = function() {
  $(".fh5co-loader").fadeOut("slow");
};

function Loader() {
  useEffect(() => loaderPage(), []);
  return <div className="fh5co-loader"></div>;
}

export default Loader;
