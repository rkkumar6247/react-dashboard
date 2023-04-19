import React from "react";
import { useState, useEffect } from "react";
import Chart from "../components/Chart";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const todayDay = new Date().toDateString()

  return (
    <div className="wrapper">
      <Header />
      <section className="body-section" id="body-section">
        <Sidebar />
        <div className="body-content">
          <h1>Dashboard</h1>
          <p className="small" id="todayTime">{todayDay}</p>
          <div className="container">
            {/* //////// LEFT COLUMN ///////// */}
            <div className="left-col">
              <div className="small-card-wrapper">
                <div className="card small-card">
                  <div className="label flex1">
                    <span className="small">Today value</span>
                    <span className="icon">
                      <i className="fa-solid fa-dollar-sign" />
                    </span>
                  </div>
                  <div className="numeric-value">
                    <span>$10.79</span>
                  </div>
                </div>
                <div className="card small-card">
                  <div className="label flex1">
                    <span className="small">Sales</span>
                    <span className="icon">
                      <i className="fa-solid fa-arrow-trend-up" />
                    </span>
                  </div>
                  <div className="numeric-value">
                    <span>96.12%</span>
                  </div>
                </div>
              </div>
              <div className="small-card-wrapper">
                <div className="card small-card">
                  <div className="label flex1">
                    <span className="small">Quick Transfer</span>
                    <span className="icon">
                      <i className="fa-solid fa-arrow-trend-up" />
                    </span>
                  </div>
                  <div className="numeric-value">
                    <span>45.69%</span>
                  </div>
                </div>
                <div className="card small-card">
                  <div className="label flex1">
                    <span className="small">Expenses</span>
                    <span className="icon">
                      <i className="fa-solid fa-arrow-trend-up" />
                    </span>
                  </div>
                  <div className="numeric-value">
                    <span>59.78%</span>
                  </div>
                </div>
              </div>
              <div className="card long-card flex1">
                <div className="content">
                  <span className="small">Circulating Supply (total)</span>
                  <h2>32000 / 60000</h2>
                </div>
                <div className="progress">
                  <div className="progress-text">
                    <span>25%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* //////// RIGHT COLUMN ///////// */}
            <div className="right-col">
              <div className="card large-card">
                <div className="title flex1">
                  <div className="label">
                    <span className="small">Total Revenue</span>
                    <h3>$21,790.00</h3>
                  </div>
                  <div className="icon">
                    <i className="fa-solid fa-percent" />
                  </div>
                </div>
                <Chart />
              </div>
              <div className="card long-card">
                <div className="list-item flex1">
                  <div className="label">
                    <i className="fa-solid fa-table" />{" "}
                    <span className="small">&nbsp; Market Cap</span>
                  </div>
                  <div className="label">
                    <span>
                      <b>$6,823.50</b>
                    </span>
                  </div>
                </div>
                <div className="list-item flex1" style={{ marginTop: 12 }}>
                  <div className="label">
                    <i className="fa-solid fa-camera" />{" "}
                    <span className="small">
                      &nbsp; Market Value of Treasury Assets
                    </span>
                  </div>
                  <div className="label">
                    <span>
                      <b>$8,823.50</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
