import FoodCard from "../../Shared/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./OrederTab.css"

const OrderTab = ({ item }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
          <div className="grid md:grid-cols-3 gap-10">
             {item.map((item) => (
            <FoodCard key={item._id} item={item}></FoodCard>
          ))}
          </div>
         
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderTab;
