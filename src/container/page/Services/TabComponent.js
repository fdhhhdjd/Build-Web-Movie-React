import React from "react";
import { useState } from "react";
import { tabLabels } from "./Content";
import Tab from "./Tab";
import "./tab.css";
const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(tabLabels.CANCEL_AT_ANY_TIME);
  const onclickTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <Tab activeTabName={activeTab} onClickTab={onclickTab} />
    </>
  );
};

export default TabComponent;
