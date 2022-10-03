import { useEffect } from "react";
import Layout from "../components/Layout";

const RedirectLinks = {
  "/twitter": "https://twitter.com/nearhacks",
};

const Redirect = () => {
  useEffect(() => {
    const url = RedirectLinks[window.location.pathname];
    if (url) {
      window.location.href = url;
    } else if (
      window.location.pathname === window.location.pathname.toLowerCase()
    ) {
      // Route is already lowercase but matched catch all
      // page not found, display 404
      window.location.href = "/";
    } else {
      window.location.href = window.location.pathname.toLowerCase();
    }
  }, []);
  return <Layout pageTitle="NEAR Hacks" />;
};
export default Redirect;
