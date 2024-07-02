const adminDashboardTabs = [
    {
      title: "Bookings",
      id: "booking-tab",
      dataBsTarget: "#booking",
      ariaControls: "booking",
      ariaSelected: "true"
    },
    {
      title: "Pending Vaccines",
      id: "pending-vaccines-tab",
      dataBsTarget: "#pending-vaccines",
      ariaControls: "pending-vaccines",
      ariaSelected: "false"
    },
    {
      title: "Vaccine Inventory",
      id: "vaccine-tab",
      dataBsTarget: "#vaccine",
      ariaControls: "vaccine",
      ariaSelected: "false"
    },
    {
      title: "Product Inventory",
      id: "inventory-tab",
      dataBsTarget: "#inventory",
      ariaControls: "inventory",
      ariaSelected: "false"
    },
    {
      title: "Admin Controls",
      id: "controls-tab",
      dataBsTarget: "#controls",
      ariaControls: "controls",
      ariaSelected: "false"
    },

];

export default adminDashboardTabs;