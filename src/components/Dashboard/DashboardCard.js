import React, { useState } from "react";
import "./DashboardCard.scss";

const options = [
  {
    title: "Safety Performance System",
    price: "$200 per month, unlimited",
    color: "green",
    short: "SPS",
  },
  {
    title: `Contractors/ Vendor's Safety Management System`,
    price: "$200 per month, unlimited 18+",
    color: "orange",
    short: "CSMS",
  },
  {
    title: "Auditing Management System",
    price: "$25 one-time",
    color: "yellow",
    short: "AMS",
  },
  {
    title: "Management Review Meeting",
    price: "$499 per year, unlimited 18+",
    color: "purple",
    short: "MRM",
  },
  {
    title: "Lag Indicator",
    price: "$300 per month, unlimited",
    color: "green",
    short: "LAI",
    url: "https://e-learning.abreastconsultancyservices.com/",
  },
  {
    title: "Lead Indicators",
    price: "$50 one-time",
    color: "orange",
    short: "LEI",
    url: "https://tms.abreastconsultancyservices.com/",
  },
  {
    title: "PPE Management System",
    price: "$250 per month, unlimited",
    color: "yellow",
    short: "PMS",
  },
  {
    title: `Vendor's Selection Process`,
    price: "$250 per month, unlimited",
    color: "yellow",
    short: "VSP",
  },
  {
    title: "Legal Complinces",
    price: "$600 per year, unlimited",
    color: "purple",
    short: "LC",
  },
  {
    title: "Asset Mangement System",
    price: "$100 per month",
    color: "green",
    short: "AMS",
  },
];

const DashboardCard = () => {
  const handleClick = (item) => {
    if (item.url) {
      // open in new tab if url exists
      window.open(item.url, "_blank", "noopener,noreferrer");
    } else {
      alert("Under Construction");
    }
  };

  return (
    <div className="row">
      {options.map((item, index) => (
        <div key={index} className="card1" onClick={() => handleClick(item)}>
          <h3>{item.short}</h3>
          <p>{item.title}</p>
          <button>
            <i className="fas fa-chevron-right right-own-arrow"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

export default DashboardCard;
