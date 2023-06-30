import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import StarRatings from "react-star-ratings";

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { name, liked, suggestion, details } = data;
    const newItem = {
      name,
      liked,
      suggestion,
      details,
      rating, // Include the rating value in the newItem object
    };
    console.log(newItem);
    axiosSecure.post("/reviews", newItem).then((data) => {
      console.log("after posting new menu Item", data.data);
      if (data.data.insertedId) {
        // Refetch cart to update the number of items in the cart
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Review added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="w-1/2">
      <div className="mx-auto text-center my-8">
        <h3 className="text-yellow-600 mb-2">--- Sharing is caring ---</h3>
        <p className="text-4xl uppercase border-y-4 py-4 font-bold mb-12">
          Give a review
        </p>
        <p className="text-3xl uppercase py-4 font-bold mb-12">Rate US</p>
        <StarRatings
          rating={rating}
          starRatedColor="blue"
          changeRating={setRating} // Use setRating directly as the changeRating prop
          numberOfStars={6}
          name="rating"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs mb-5 mx-auto ">
          <label className="label">
            <span className="label-text">Please write your Name?</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="form-control w-full max-w-xs mb-5 mx-auto ">
          <label className="label">
            <span className="label-text">Which recipe you liked most ?</span>
          </label>
          <input
            type="text"
            placeholder="Recipe you like most"
            className="input input-bordered w-full max-w-xs"
            {...register("liked", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="form-control w-full max-w-xs mb-5 mx-auto">
          <label className="label">
            <span className="label-text">
              Do you have any suggestion for us ?
            </span>
          </label>
          <input
            type="text"
            placeholder="Suggestion"
            className="input input-bordered w-full max-w-xs"
            {...register("suggestion", { required: true, maxLength: 80 })}
          />
        </div>
        <div
          defaultValue="Pick One"
          className="md:flex gap-5 items-center -ml-2"
        ></div>

        <div className="form-control w-full max-w-xs mb-8 mx-auto">
          <label className="label">
            <span className="label-text">
              Kindly express your care in short way ?
            </span>
          </label>
          <textarea
            className="textarea"
            placeholder="Review in Details"
            {...register("details", { required: true })}
          ></textarea>
        </div>
        <div className="flex justify-center">
          <input
            className="btn btn-warning "
            type="submit"
            value="Send Review"
          />
        </div>
      </form>
    </div>
  );
};

export default Reviews;
