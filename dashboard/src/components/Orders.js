import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import {holdings} from '../data/data';

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      // console.log(res.data);
      setAllOrders(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
            <th>Value</th>
          </tr>

          {allOrders.map((stock, index) => {
            const curValue = stock.price * stock.qty;

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.mode}</td>
                <td>{curValue.toFixed(2)}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;