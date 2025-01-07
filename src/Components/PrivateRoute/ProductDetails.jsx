import { useLoaderData, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const item = useLoaderData();
  //console.log(item);
  const {
    _id,
    pName,
    pCat,
    pCus,
    pDesc,
    pImg,
    pPrice,
    pTime,
    pRating,
    stockStatus,
    userName,
    userEmail,
  } = item || {};

  return (
    <div className="w-11/12 mx-auto border p-5 rounded-md my-8 bg-cyan-50">
      <h2 className="text-center font-semibold text-2xl my-5">
        Equipment Item Details
      </h2>
      <div className=" grid md:grid-cols-12 grid-cols-1 gap-6">
        <figure className="col-span-5">
          <img src={pImg} className="h-auto" alt="" />
        </figure>
        <div className="col-span-7">
          <h3 className="text-black font-semibold text-xl mb-2">{pName}</h3>
          <p className="text-base text-gray-700 font-semibold mb-2">
            Category: {pCat}
          </p>
          <p className="text-base text-gray-700 font-semibold mb-2">
            Price ($): {pPrice}
          </p>
          <p className="text-base text-gray-700 font-semibold mb-2">
            {" "}
            Customization: {pCus}
          </p>
          <p className="text-base text-gray-700 font-semibold mb-2">
            {" "}
            Delivery Time: {pTime}
          </p>
          <p className="text-base text-gray-700 font-semibold mb-2">
            {" "}
            Available Qty: {stockStatus}
          </p>
          <p className="text-base text-gray-700 font-semibold mb-2 flex items-center">
            {" "}
            Rating:
            <div className="rating rating-sm mr-2 rating-half ">
              <input type="radio" name="rating-10" className="rating-hidden" />
              <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-1 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-1 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-1 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-1 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-1 bg-yellow-500"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-2 bg-yellow-500"
              />
            </div>
            ({pRating})
          </p>
          {/* <button className="btn btn-info text-lg mt-4 mr-4" disabled>Add to Cart</button> */}
          <button onClick={() => navigate(-1)} className="btn text-lg md:inline-block hidden">
            go back
          </button>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 mt-5">Product Description:</h3>

        <p className="text-base text-gray-700 font-semibold mb-2">{pDesc}</p>

        <button onClick={() => navigate(-1)} className="btn text-lg inline-block md:hidden">
            go back
        </button>

    </div>
  );
};

export default ProductDetails;
