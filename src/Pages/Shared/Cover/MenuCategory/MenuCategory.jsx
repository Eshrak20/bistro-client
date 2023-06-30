import { Link } from "react-router-dom";
import MenuItem from "../../MenuItem/MenuItem";
import Cover from "../Cover";

const MenuCategory = ({ items ,title ,coverImg }) => {
  return (
    <div className="items-center justify-center flex flex-col ">
          <div className="items-center justify-center">
      {title && <Cover img={coverImg} title={title}></Cover>}

      <div className="grid md:grid-cols-2 gap-6 my-24  ">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
     
      </div>
    
    </div>
    <Link to={`/order/${title}`}>
    <button className="btn bg-orange-50 border-0 border-b-4 shadow-2xl text-center shadow-orange-700 border-orange-700 mb-20  ">
      View full menu !!!
    </button>
    </Link>
    
    </div>

   

  );
};

export default MenuCategory;
