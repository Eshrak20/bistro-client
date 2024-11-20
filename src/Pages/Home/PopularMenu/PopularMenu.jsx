import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="flex flex-col items-center justify-center">
      <section className="mb-12">
        <SectionTitle
          heading="From our menu"
          subHeading="Popular Menu"
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          {popular.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
      </section>
      <button className="btn bg-orange-50 border-0 border-b-4 shadow-2xl text-center shadow-orange-700 border-orange-700 mx-auto">
        View full menu !!!
      </button>
    </div>
  );
};

export default PopularMenu;
