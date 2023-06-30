import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddItem = () => {
  const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          const { name, price, category, recipe, _id } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            _id,
            image: imgUrl,
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new menu Item", data.data);
            if (data.data.insertedId) {
              /// refetch cart to update the number of items in the cart
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Menu added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full">
      <div className="mx-auto text-center my-8">
        <h3 className="text-yellow-600 mb-2">--- What is new ---</h3>
        <p className="text-4xl uppercase border-y-4 py-4 font-bold mb-12">
          Add an item
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs mb-5">
          <label className="label">
            <span className="label-text">Recipe name?</span>
          </label>
          <input
            type="text"
            placeholder="Recipe name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="form-control w-full max-w-xs mb-5">
          <label className="label">
            <span className="label-text">Recipe ID?</span>
          </label>
          <input
            type="number"
            name="_id"
            placeholder="Give an ID"
            className="input input-bordered"
            {...register("_id ", {
              required: true,
              minLength: 1,
              maxLength: Infinity,
            })}
          />
          {errors._id?.type === "minLength" && (
            <span className="text-red-500">Password must be 6 characters</span>
          )}
          {errors._id?.type === "maxLength" && (
            <span className="text-red-500">
              Password must be less than 20 characters
            </span>
          )}
        </div>
        <div
          defaultValue="Pick One"
          className="md:flex gap-5 items-center -ml-2"
        >
          <select
            {...register("category", { required: true })}
            className="form-control select m-2 items-center  w-full max-w-xs"
          >
            <option disabled>All types of recipe here</option>
            <option>dessert</option>
            <option>soup</option>
            <option>salad</option>
            <option>pizza</option>
            <option>drinks</option>
            <option>offered</option>
            <option>national</option>
          </select>
          <div className="form-control w-full max-w-xs">
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered w-full max-w-xs"
              {...register("price", { required: true })}
            />
          </div>
        </div>

        <div className="form-control w-full max-w-xs mb-8">
          <label className="label">
            <span className="label-text">Recipe Details?</span>
          </label>
          <textarea
            type="text"
            className="textarea"
            placeholder="Recipe Details"
            {...register("recipe", { required: true })}
          ></textarea>
        </div>
        <div className="md:flex">
          <input
            type="file"
            {...register("image", { required: true, maxLength: 80 })}
            className="file-input file-input-bordered file-input-md w-full max-w-xs mr-12 mb-3"
          />
          <input className="btn btn-warning " type="submit" value="Add Item" />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
