import { useState } from "react";
import { Link, NavLink, useLoaderData, useNavigate } from "react-router-dom";


const Products = () => {
const allItemsData = useLoaderData();
  //console.log( allItems);

  const navigate = useNavigate();
  const [allData, setAllData] = useState(allItemsData);
  
  

//  const uniqueCategories = [...new Set(allItems.map(item => item.pCat))];

 const handleViewDetails = (id) => {
   // console.log(id)
    navigate(`/productDetails/${id}`)
 }

 // sort by price decentdingly
 const handleSortByPrice = ()=>{
  const sortedData = [...allData].sort((a, b) => b.pPrice - a.pPrice);
  setAllData(sortedData);
 }

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
      <h2 className="text-2xl font-semibold text-center my-5">All Sports Equipments</h2>
      <button onClick={handleSortByPrice} title="sort by Price Decentdingly" className="btn btn-primary mb-3 text-lg ml-auto block" >Sort by Price</button>
        <table className="table bg-blue-100 text-base font-semibold hidden lg:block w-fit mx-auto">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th> Price: $</th>
              <th> Rating (5)</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                allData.map((item, index) =>{
                    return(
                        <tr className="hover:bg-indigo-200">
                            <th>{index + 1}</th>
                            <th><img src={item.pImg} className="h-16 w-24 rounded-md"/></th>
                            <td>{item.pName}</td>
                            <td>{item.pCat}</td>
                            <td>{item.pPrice}</td>
                            <td>{item.pRating}</td>
                            
                            <td>
                                <button onClick={() => handleViewDetails(item._id)} className="btn btn-info">View Details</button>
                            </td>
                        </tr>
                    )
                }) 
            }
          </tbody>
        </table>

        {/* Card layout for small devices */}
                <div className=" lg:hidden grid md:grid-cols-2 grid-cols-1 gap-6">
                    {allData.map((item) => (
                    <div
                        key={item._id}
                        className="bg-blue-100 rounded-lg shadow-md overflow-hidden p-4"
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
                        <div className="mt-4 text-center">
                        <h3 className="text-xl font-semibold">{item.pName}</h3>
                        <p className="text-gray-600">{item.pCat}</p>
                        <p className="text-lg font-bold text-green-600">Price: ${item.pPrice}</p>
                        <p className="text-base text-yellow-600">Rating: {item.pRating} / 5</p>
                        <p className="text-gray-500 text-base mt-2">{item.pDesc}</p>
                        </div>

                        {/* Actions */}
                        <div className="mt-4 flex justify-center gap-4">
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
