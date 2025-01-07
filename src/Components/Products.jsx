import { useEffect, useState } from "react";
import { Link, NavLink, useLoaderData, useNavigate } from "react-router-dom";

const Products = () => {
  const allItemsData = useLoaderData();
  //console.log( allItems);

  const navigate = useNavigate();
  const [allData, setAllData] = useState(allItemsData);
  const [selectedValue, setSelectedValue] = useState('');

  //  const uniqueCategories = [...new Set(allItems.map(item => item.pCat))];

  const handleViewDetails = (id) => {
    // console.log(id)
    navigate(`/productDetails/${id}`);
  };

  const handleSelect = (e)=>{
      setSelectedValue(e.target.value);
  }

  useEffect(() => {
    if (selectedValue === "decending") {
      const sortedData = [...allItemsData].sort((a, b) => b.pPrice - a.pPrice);
      setAllData(sortedData);
    } else if (selectedValue === "acending") {
      const sortedData = [...allItemsData].sort((a, b) => a.pPrice - b.pPrice);
      setAllData(sortedData);
    } else if (selectedValue === "default") {
      setAllData(allItemsData);
    }
  }, [selectedValue, allItemsData]);



  // sort by price decentdingly
  
  // const handleSortByPrice = () => {
  //   const sortedData = [...allData].sort((a, b) => b.pPrice - a.pPrice);
  //   setAllData(sortedData);
  // };

  return (
    <div className="w-11/12 mx-auto ">
      {/* <div className="border p-2 rounded-lg ">
        {
         uniqueCategories.map(cat => (
            <Link to={`/`} key={cat} className="flex items-center my-3 p-2 text-lg font-semibold border px-6 rounded-xl bg-blue-100">
              {cat}
            </Link>
          ))
          
        }
      </div> */}
      <div className="w-full ">
        <h2 className="text-2xl font-semibold text-center my-5">
          All Sports Equipments
        </h2>
        <div
          // onClick={handleSortByPrice}
          title="sort by Price Decentdingly"
          className="text-right mb-5"
        >
          <span className="">Short by Price:</span>
          <select value={selectedValue} onChange={handleSelect} name="" className="border px-2 py-1 ml-2" id="">
            <option value="default">Default</option>
            <option value="decending">Decending</option>
            <option value="acending">Acending</option>

          </select>
        </div>

        {/* Card layout for small devices */}
        <div className="bg-blue-100 grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 p-5">
          {allData.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-md overflow-hidden p-4"
            >
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={item.pImg}
                  alt={item.pName}
                  className="h-40 w-auto object-cover rounded-md"
                />
              </div>

              {/* Product Details */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{item.pName}</h3>
                <p className="text-gray-600">Category: {item.pCat}</p>
                <p className="text-lg font-bold text-green-600">
                  {" "}
                  ${item.pPrice}
                </p>
                <p className="text-base text-black-600">
                  <div className="rating rating-sm mr-2 rating-half ">
                    <input
                      type="radio"
                      name="rating-10"
                      className="rating-hidden"
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
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="mask mask-star-2 mask-half-2 bg-yellow-500"
                      defaultChecked
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
                  </div>

                  ({item.pRating} / 5)
                </p>
                {/* <p className="text-gray-500 text-base mt-2">{item.pDesc}</p> */}
              </div>

              {/* Actions */}
              <div className="mt-4">
                <button
                  onClick={() => handleViewDetails(item._id)}
                  className="btn btn-info text-lg"
                  title="View Details"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
