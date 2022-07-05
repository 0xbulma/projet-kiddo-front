import React, { Fragment, useEffect, useRef, useState } from "react";
// import Dropdown from './Dropdown';

export default function NavItem({ page }) {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className={"navbar__nav-item"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {page.submenu ? (
        <Fragment>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => {
              setDropdown((prev) => !prev);
            }}
          >
            <a href={page.href} className="nav-link">
              {page.name}
            </a>
          </button>
          {/* <Dropdown submenu={page.submenu} dropdown={dropdown} /> */}
        </Fragment>
      ) : (
        <a href={page.href} className="nav-link">
          {page.name}
        </a>
      )}
    </li>
  );
}
