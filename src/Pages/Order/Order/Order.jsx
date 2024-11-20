import { useState } from "react";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["Salads", "Pizza", "Soup", "Dessert", "Drinks", "Offered"];
 
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  // console.log(initialIndex);
  // console.log(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offered = menu.filter((item) => item.category === "offered");
  const national = menu.filter((item) => item.category === "national");
  return (
    <div>
         <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={orderCoverImg} title={"Order Food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <div className="tabs tabs-boxed text-3xl py-9 grid grid-cols-3 md:grid-cols-6 
             justify-center">
            <Tab
              className={`text-3xl p-8 underline  flex flex-col justify-center tab ${tabIndex === 0 ? "tab-active" : ""}`}
            >
              SALAD
            </Tab>
            <Tab
              className={`text-3xl p-8 underline flex flex-col  justify-center tab ${tabIndex === 1 ? "tab-active" : ""}`}
            >
              PIZZA
            </Tab>
            <Tab
              className={` text-3xl p-8 underline flex flex-col justify-center tab ${tabIndex === 2 ? "tab-active" : ""}`}
            >
              SOUP
            </Tab>
            <Tab
              className={` text-3xl p-8 underline flex flex-col justify-center tab ${tabIndex === 3 ? "tab-active" : ""}`}
            >
              DESSERT
            </Tab>
            <Tab
              className={` text-3xl p-8 underline flex flex-col justify-center tab ${tabIndex === 4 ? "tab-active" : ""}`}
            >
              DRINKS
            </Tab>
            <Tab
              className={` text-3xl p-8 underline flex flex-col justify-center tab ${tabIndex === 5 ? "tab-active" : ""}`}
            >
              OFFERED
            </Tab>
            <Tab
              className={` text-3xl p-8 underline flex flex-col justify-center tab ${tabIndex === 6 ? "tab-active" : ""}`}
            >
              NATIONAL
            </Tab>
          </div>
        </TabList>
        <TabPanel>
          <OrderTab item={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={drinks}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={offered}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={national}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
