import React from "react";
import { FiSearch } from "react-icons/fi";
import "../style/mytable_style.css";
import data from "../data/table_data";

function MyTable() {
  return (
    <div className="mytable">
      <div
        className="mytb-head"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <h2>Product Shell</h2>
        </div>
        <div className="mytb-search">
          <input
            type="search"
            style={{ background: "#f3f3f3" }}
            className="tb-search"
            required
          />
          <FiSearch className="tb-ico" />
          <span className="tb-ico">Search</span>
        </div>
        <div>
          <select
            className="tb-select"
            style={{
              background: "#f3f3f3",
              fontSize: "20px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              color: "#9e9393",
            }}
          >
            <option>Last 30 day</option>
            <option>last 15 days</option>
            <option>last 7 days</option>
          </select>
        </div>
      </div>
      <table className="tb">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td data-title="Product">
                <div className="product" style={{ display: "flex" }}>
                  <img src={item.image}></img>
                  <div>
                    <div>
                      <h3>{item.product}</h3>
                    </div>
                    <div>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </td>
              <td className="stock" data-title="Stock">
                {item.stock}
              </td>
              <td className="price" data-title="Price">
                {item.price}
              </td>
              <td className="sales" data-title="New Sales">
                {item.sales}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyTable;
