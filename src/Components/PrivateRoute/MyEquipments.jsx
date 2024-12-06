import { useLoaderData } from "react-router-dom";


const MyEquipments = () => {

    const myEquipments = useLoaderData();
    console.log(myEquipments);
    return (
        <div>
            <h2 className="text-2xl font-semibold text-center my-5">My Sports Equipments</h2>
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
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                myEquipments.map((item, index) =>{
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
    );
};

export default MyEquipments;