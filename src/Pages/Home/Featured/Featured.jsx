import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item rounded-sm bg-fixed pt-6 my-20 text-white selector pselector">
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>

      <div className="md: flex justify-center items-center md:space-x-10 pb-36 pt-12 px-36">
        <div>
          <img className="rounded-sm" src={featuredImg} alt="" />
        </div>
        <div className="text-white selector">
          <p className="font-mono text-2xl ">Aug 20, 2030</p>
          <p className="uppercase font-extrabold text-3xl ">
            {" "}
            Where can I get some?
          </p>
          <p className="font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            consequatur dignissimos eaque, ut error esse eveniet, illo modi sit
            illum quis repellendus magnam qui? Tempora mollitia est vitae eaque?
            Quo totam perspiciatis fugiat. Officiis, odio dignissimos
            consequuntur corrupti voluptatibus excepturi.
          </p>
          <br />
          <Link to="/order/Salads">
          <button className="btn bg-orange-50 border-0 border-b-4 shadow-2xl text-center shadow-orange-700 border-orange-700 mx-auto">
              Oreder Now !!!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
