import { useState } from "react";
import { Link, NavLink, useLoaderData, useNavigate } from "react-router-dom";


const Products = () => {
const allItemsData = useLoaderData();
  //console.log( allItems);

  const navigate = useNavigate();
  const [allData, setAllData] = useState(allItemsData);
  
  

//  const uniqueCategories = [...new Set(allItems.map(item => item.pCat))];

 const handleViewDetails = (id) => {
    console.log(id)
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
      <button onClick={handleSortByPrice} title="sort by Price Decentdingly" className="btn btn-primary mb-3 text-lg float-right" >Sort by Price</button>
        <table className="table bg-blue-100 text-base font-semibold ">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th></th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th> Price: $</th>
              <th> Rating (Out of 5)</th>
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
        
      </div>
    </div>
  );
};

export default Products;
