import React from "react";

import WhatWeOffer from "../../../pages/partials/WhatWeOffer";
import NavBarMain from "../../../pages/partials/NavBarMain";

const AdminMainNav = () => {
  const items = [
    "About",
    "Gallery",
    "Requirements",
    "Rates & Services",
    "Team",
    "Reviews",
  ];
  const navItems = [
    <a
      href="/AdminDashBoard"
      style={{ textDecoration: "none", color: "white" }}
    >
      Dashboard
    </a>,
    ...items,
  ];
  return (
    <>
      <NavBarMain navItems={navItems} />
      <hr id="About" className="mb-5 pb-5" />
      <WhatWeOffer />
    </>
  );
};

export default AdminMainNav;
