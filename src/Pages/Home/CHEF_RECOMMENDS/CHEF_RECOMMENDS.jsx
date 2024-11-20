import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";

const CHEF_RECOMMENDS = () => {
  return (
    <section>
      <SectionTitle
        heading={"Should Try"}
        subHeading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid md:grid-cols-3">
        <div className="card w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl  " />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Salads!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
            <Link to="/order/Salads">
            <button className="btn bg-slate-900 text-gray-400 border-0 border-b-4 shadow-2xl text-center shadow-orange-700 border-orange-700 mx-auto">
                Order Now !!!
              </button></Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Pizza!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
             <Link to="/order/Pizza">
             <button className="btn bg-orange-50 border-0 border-b-4 shadow-2xl text-center shadow-orange-700 border-orange-700 mx-auto">
                Order Now !!!
              </button></Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Dessert!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
            <Link to="/order/Dessert">
             <button className="btn bg-slate-900 text-gray-400 border-0 border-b-4 shadow-2xl text-center shadow-orange-700 border-orange-700 mx-auto">
                Order Now !!!
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CHEF_RECOMMENDS;
