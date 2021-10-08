import React from "react";
import { tabLabels } from "./Content";
import "./tab.css";
import { Link } from "react-router-dom";
const Tab = ({ activeTabName, onClickTab }) => {
  const { CANCEL_AT_ANY_TIME, PICK_YOUR_PRICE, WATCH_ANYWHERE } = tabLabels;
  const renderTabTitle = (tabTitle, isActive, icon, id) => (
    <div
      onClick={() => onClickTab(tabTitle)}
      id={id}
      className={` ${isActive && "tab-border"}`}
    >
      <i className={icon}></i>
      <p>{tabTitle}</p>
    </div>
  );
  return (
    <>
      <section className="tabs">
        <div className="containerss">
          {renderTabTitle(
            CANCEL_AT_ANY_TIME,
            activeTabName === CANCEL_AT_ANY_TIME,
            "fas fa-door-open fa-3x ",
            "tab-1"
          )}
          {renderTabTitle(
            WATCH_ANYWHERE,
            activeTabName === WATCH_ANYWHERE,
            "fas fa-tablet-alt fa-3x",
            "tab-2"
          )}
          {renderTabTitle(
            PICK_YOUR_PRICE,
            activeTabName === PICK_YOUR_PRICE,
            "fas fa-tags fa-3x",
            "tab-3"
          )}
        </div>
      </section>
      {activeTabName === CANCEL_AT_ANY_TIME && (
        <section className="tab-content">
          <div className="container">
            <div
              id="tab-1-content"
              className={`tab-content-item ${
                activeTabName === CANCEL_AT_ANY_TIME && "show"
              }`}
            >
              <div className="tab-1-content-inner">
                <div className="one">
                  <p className="text-lg p">Bạn được thử 30 ngày xem free </p>
                  <Link to="/movies" className="btn btn-lg">
                    watch Free 30 day
                  </Link>
                </div>
                <img
                  src="https://i.ibb.co/J2xDJV7/tab-content-1.png"
                  alt="logo"
                  className="img"
                />
              </div>
            </div>
          </div>
        </section>
      )}
      {activeTabName === WATCH_ANYWHERE && (
        <section className="tab-content">
          <div className="container">
            <div
              id="tab-2-content"
              className={`tab-content-item ${
                activeTabName === WATCH_ANYWHERE && "show"
              }`}
            >
              <div className="tab-2-content-top"></div>
              <div className="tab-2-content-bottom">
                <div>
                  <img
                    src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png"
                    alt="logo"
                    className="img-batman"
                  />
                  <p className="text-md">What on your TVs</p>
                  <p className="text-dark">
                    Smart Tvs,tablet,Xbox,chrome,Apple, play and more
                  </p>
                </div>
                <div>
                  <img
                    src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png"
                    alt="logo"
                    className="img-batman"
                  />
                  <p className="text-md">What on your Smart sand tablet</p>
                  <p className="text-dark">
                    Available one phone and tablet,wherever you go.
                  </p>
                </div>
                <div>
                  <img
                    src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png"
                    alt="logo"
                    className="img-batman"
                  />
                  <p className="text-md">What on your Laptop</p>
                  <p className="text-dark">What right on MovieDev.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {activeTabName === PICK_YOUR_PRICE && (
        <section className="tab-content">
          <div className="container">
            <div
              id="tab-3-content"
              className={`tab-content-item ${
                activeTabName === PICK_YOUR_PRICE && "show"
              }`}
            >
              <div className="text-center"></div>
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      <th>Basic</th>
                      <th>Standard</th>
                      <th>Premium</th>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monthly price after month ends 31-05-2022</td>
                    <td>1.000.000</td>
                    <td>3.000.000</td>
                    <td>4.000.000</td>
                  </tr>
                  <tr>
                    <td>HD Available</td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>ULtra HD Available</td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Screen you can what on at the same time</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>What your Laptops,TV,phone and tablet</td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Cancel anytime</td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>First month free</td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Tab;
