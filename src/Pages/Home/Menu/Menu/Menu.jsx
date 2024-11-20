import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import useMenu from "../../../../Hooks/useMenu";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../../../Shared/Cover/MenuCategory/MenuCategory";
import menuImg from "../../../../assets/menu/banner3.jpg";
import dessertImg from "../../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../../assets/menu/soup-bg.jpg";
import offeredImg from "../../../../assets/reservation/category-pizza.jpg";
 

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  console.log(offered);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"}></Cover>
      {/* main cover */}
      <SectionTitle
        heading={"Today's Offer"}
        subHeading={"Don't Miss"}
      ></SectionTitle>
    
      {/* Offered Items */}
      <MenuCategory items={offered} title={"Offered"} coverImg={offeredImg}></MenuCategory>
      {/* Dessert Items */}
      <MenuCategory items={dessert} title={"Dessert"} coverImg={dessertImg}></MenuCategory>
      {/* Soup Items */}
      <MenuCategory items={soup} title={"Soup"} coverImg={soupImg}></MenuCategory>
      {/* salads Items */}
      <MenuCategory items={salad} title={"Salads"} coverImg={saladImg}></MenuCategory>
      {/* pizza Items */}
      <MenuCategory items={pizza} title={"Pizza"} coverImg={pizzaImg}></MenuCategory>
    </div>
  );
};

export default Menu;
