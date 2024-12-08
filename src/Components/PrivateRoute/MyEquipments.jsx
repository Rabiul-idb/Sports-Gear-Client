import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FcViewDetails } from "react-icons/fc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquipments = () => {
  const myEquipments = useLoaderData();
  console.log(myEquipments);
  const navigate = useNavigate();

  const [equipments, setEquipments] = useState(myEquipments);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myEquipment/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your equipment has been deleted.",
                icon: "success",
              });
              const remainingEquipments = equipments.filter(
                (e) => e._id !== id
              );
              setEquipments(remainingEquipments);
            }
          });
      }
    });
  };

  const ViewDetails = (id) => {
    navigate(`/productDetails/${id}`);
  };

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-2xl font-semibold text-center my-5">
        My Sports Equipments
      </h2>
      <div className="">
        <button
            onClick={() => navigate("/addItem")}
            className="btn btn-info font-semibold text-lg block mb-4 ml-auto"
        >
            Add Equipment
        </button>
      </div>
      {equipments.length > 0 ? (
        <div>
            <table className="table hidden lg:block bg-blue-100 text-base font-semibold w-fit mx-auto">
            {/* head */}
            <thead className="text-lg">
                <tr>
                <th>#</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Category</th>
                <th> Price: $</th>
                <th> Rating (5)</th>
                <th>Action </th>
                </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                {equipments.map((item, index) => {
                return (
                    <tr className="hover:bg-indigo-200">
                    <th>{index + 1}</th>
                    <th>
                        <img src={item.pImg} className="h-16 w-24 rounded-md" />
                    </th>
                    <td>{item.pName}</td>
                    <td>{item.pCat}</td>
                    <td>{item.pPrice}</td>
                    <td>{item.pRating}</td>

                    <td>
                        <button
                        onClick={() => ViewDetails(item._id)}
                        className="btn text-green-500 text-lg mr-2"
                        title="View Details"
                        >
                        <FcViewDetails />
                        </button>
                        <Link
                        to={`/updateEquipment/${item?._id}`}
                        className="btn text-blue-800 text-lg"
                        title="edit"
                        >
                        <CiEdit />
                        </Link>
                        <button
                        onClick={() => handleDelete(item?._id)}
                        className="btn text-red-500 text-lg ml-2"
                        title="delete"
                        >
                        <RiDeleteBin6Line />
                        </button>
                    </td>
                    </tr>
                );
                })}
            </tbody>
            </table>

            {/* Card layout for small devices */}
                <div className=" lg:hidden grid md:grid-cols-2 grid-cols-1 gap-6">
                    {equipments.map((item) => (
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
                            onClick={() => ViewDetails(item._id)}
                            className="btn btn-sm text-green-500 text-lg"
                            title="View Details"
                        >
                            <FcViewDetails />
                        </button>
                        <Link
                            to={`/updateEquipment/${item._id}`}
                            className="btn btn-sm text-blue-800 text-lg"
                            title="Edit"
                        >
                            <CiEdit />
                        </Link>
                        <button
                            onClick={() => handleDelete(item._id)}
                            className="btn btn-sm text-red-500 text-lg"
                            title="Delete"
                        >
                            <RiDeleteBin6Line />
                        </button>
                        </div>
                    </div>
                    ))}
                </div>
        
        </div>
      ) : (
        <div className="text-center text-4xl text-red-400 font-semibold mt-8">
          No Equipments Found
        </div>
      )}
    </div>
  );
};

export default MyEquipments;
