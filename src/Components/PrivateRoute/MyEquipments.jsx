import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";


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
                                <Link to={`/updateEquipment/${item._id}`} className="btn text-red-500 text-lg" title="edit"><CiEdit /></Link>
                                <button className="btn text-red-500 text-lg ml-2" title="delete"><RiDeleteBin6Line /></button>
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