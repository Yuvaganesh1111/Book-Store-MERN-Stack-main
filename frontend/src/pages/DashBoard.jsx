import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import DonutChart from "react-donut-chart";
import cards from "../data/cards_data";
import '../style/DashBoard_Style.css'
import {
  dataItems,
  reactDonutChartBackgroundColor,
} from "../data/pichart_data";
import bardata from "../data/barchart_data";
import MyTable from "../components/MyTable";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {
  BarChart,
  PieChart,
  Pie,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


function DashBoard() {
  const [Index, setActiveIndex] = useState({ activeIndex: 7 });

  const handleClick = (data, index) => {
    setActiveIndex({ activeIndex: index });
  };

  return (
    <>
    <NavBar/>
    <div className="dashboard">
      <div className="header">
        <div className="greet">Hello Yuva Ganesh👋🏻, </div>
        <div className="inp-search">
          <input type="search" className="search" required />
          <FiSearch className="ico" />
          <span className="ico">Search</span>
        </div>
      </div>
      <div className="cards">
        {cards.map((item, index) => (
          <div className="box" key={index}>
            <img src={item.image} className="card-img"></img>
            <div className="card-detail">
              <p className="title">{item.title}</p>
              <p className="amount">{item.amount}</p>
              <p className="percent">
                <span style={{ color: item.color }}>
                  {item.icon}
                  {item.percent}
                </span>
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="chart">
        <div className="barchart">
          <div
            className="barchart-heading"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <h2>Overview</h2>
              <p>Monthly Earning</p>
            </div>
            <div>
              <select
                style={{
                  fontSize: "20px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  color: "#9e9393",
                }}
              >
                <option>Quarterly</option>
                <option>Half Yearly</option>
              </select>
            </div>
          </div>
          <ResponsiveContainer width="80%" height={250}>
            <BarChart width={10} height={40} data={bardata}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tickMargin={14}
              />

              <Tooltip cursor={{ fill: "transparent" }} />
              <Bar dataKey="uv" onClick={handleClick} radius={8}>
                {bardata.map((entry, index) => (
                  <Cell
                    cursor="pointer"
                    fill={index === Index.activeIndex ? "#0000e6" : "#ccd9ff"}
                    key={`cell-${index}`}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="pichart">
          <h2>Customers</h2>
          <p>Customers that buy products </p>
          <div className="pi">
            <DonutChart
              className="doughnut"
              data={dataItems}
              width={230}
              clickToggle={false}
              height={230}
              colors={reactDonutChartBackgroundColor}
              selectedOffset={0.1}
              innerRadius={0.6}
              toggledOffset={222}
              marginInPercent={0}
              legend={false}
            />
          </div>
        </div>
      </div>
      <div>
        <MyTable />
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default DashBoard;
