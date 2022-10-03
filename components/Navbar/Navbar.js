import React from "react";
import styles from "./Navbar.module.css";
import { ArrowDown } from "../icons";
import links from "./Navbar-script";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <a href="/about" className={styles.btn} target="_blank">
        About
      </a>
      <div className={styles.links}>
        {links.map((elm) => (
          <div key={elm.url}>
            <span onClick={() => window.open(elm.url, "_blank")}>
              {elm.icon}
            </span>
            {elm.nested_urls ? (
              <>
                <ArrowDown className={styles.arrow} />
                <div className={styles.toolTip}>
                  <div>
                    {elm.nested_urls.map((link) => (
                      <a
                        href={link.url}
                        target="_blank"
                        key={link.url}
                        rel="noreferrer"
                      >
                        {elm.icon}
                        <p>{link.title}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
