import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CHEF_RECOMMENDS from "../CHEF_RECOMMENDS/CHEF_RECOMMENDS";
import Catagory from "../Catagory/Catagory";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import Testiomonial from "../Testiomonial/Testiomonial";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Catagory></Catagory>
      <PopularMenu></PopularMenu>
      <Contact></Contact>
      <CHEF_RECOMMENDS></CHEF_RECOMMENDS>
      <Featured></Featured>
      <Testiomonial></Testiomonial>
    </div>
  );
};

export default Home;
