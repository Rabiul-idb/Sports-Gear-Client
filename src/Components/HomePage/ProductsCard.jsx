import { Link, useLoaderData, useNavigate } from "react-router-dom";

const ProductsCard = () => {
  const allItems = useLoaderData();
 // console.log(allItems);

  const navigate = useNavigate();

  return (
    <div>
      <h2 className="lg:text-4xl md:text-3xl text-2xl text-center my-5 font-semibold">
        Featured Products
      </h2>
      <div className="w-11/12 mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {allItems.map((item) => {
          return (
            <div className="border rounded-lg p-3">
              <img
                src={item.pImg}
                className="w-full rounded-lg object-contain h-[200px] mb-4"
                alt=""
              />
              <div>
                <h2 className="font-semibold text-xl">{item.pName}</h2>
                {/* <p className="font-medium text-lg text-gray-600">
                  {item.pDesc}
                </p> */}
                <p
                  className={`font-medium text-lg text-gray-600 ${
                    item.stockStatus > 5
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {" "}
                  <span className="text-black">Available:</span>{" "}
                  {item.stockStatus}
                </p>
                <div className="flex justify-between items-center">
                  <p className="font-medium text-lg">$ {item.pPrice}</p>
                  <button
                    onClick={() => navigate(`/productDetails/${item._id}`)}
                    className="btn btn-info "
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Link to={'/allEquipments'} className="btn btn-info text-lg block w-fit pt-2 mx-auto mt-5">Show All Products</Link>
    </div>
  );
};

export default ProductsCard;
