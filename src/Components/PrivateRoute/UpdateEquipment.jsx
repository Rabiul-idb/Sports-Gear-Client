import { useContext } from "react";
import { ContextProvider } from "../ContextProvider/AuthContext";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateEquipment = () => {


    const {user} = useContext(ContextProvider);
    const navigate = useNavigate();

    const updateItem = useLoaderData();
   // console.log(updateItem);
   
    
    
    const handleUpdateEquipment = (e)=>{
        e.preventDefault();
       
        const form = e.target;

        const pName = form.p_name.value;
        const pCat = form.p_cat.value;
        const pPrice = form.p_price.value;
        const pRating = form.p_Rating.value;
        const pDesc = form.p_desc.value;
        const pImg = form.p_img.value;
        const pCus = form.p_cus.value;
        const pTime = form.p_time.value;
        const stockStatus = form.stock_status.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;

        const updatedInfo = {pName, pCat, pPrice, pRating, pDesc, pImg, pCus, pTime, stockStatus, userName, userEmail}
       // console.log('updatedInfo');

        // send updated data to server

        fetch(`https://server-side-pi-ashy.vercel.app/updateEquipment/${updateItem._id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedInfo),

        })
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                  title: 'Success!',
                  text: 'Data Updated Successfully',
                  icon: 'success',
                  confirmButtonText: 'ok'
                })
                form.reset();
            }
            navigate(`/myEquipments/${user?.email}`);

        })
    }

    return (
        <div className="w-11/12 mx-auto ">
            <h2 className="text-2xl font-semibold text-center my-5">Update the Equipment: {updateItem.pName}</h2>

        <form onSubmit={handleUpdateEquipment} className="max-w-5xl mx-auto p-6 bg-gray-100 shadow-lg border rounded-md space-y-4">
        <div className="grid grid-cols-2 gap-6">
          {/* Product name */}
          <div>
            <label className="">Product Name:</label>
            <br></br>
            <input
              type="text"
              name="p_name"
              placeholder="Product Name"
              defaultValue={updateItem.pName}
              className="input input-bordered input-info w-full mt-1 "
            />
          </div>
          {/* product category */}
          <div>
            <label className="">Product Category:</label>
            <br></br>
            <input
              type="text"
              name="p_cat"
              defaultValue={updateItem.pCat}
              placeholder="Product Category"
              className="input input-bordered input-info w-full mt-1 "
            />
          </div>
          {/* product Price */}
          <div>
            <label className="">Product Price-$:</label>
            <br></br>
            <input
              type="text"
              name="p_price"
              defaultValue={updateItem.pPrice}
              placeholder="Product Price"
              className="input input-bordered input-info w-full mt-1 "
            />
          </div>
          {/* product Rating */}
          <div>
            <label className="">Product Rating-(1-5):</label>
            <br></br>
            <input
              type="text"
              name="p_Rating"
              defaultValue={updateItem.pRating}
              placeholder="Product Rating"
              className="input input-bordered input-info w-full mt-1 "
            />
          </div>
        </div>
        {/* product Description */}
        <div>
          <label className="">Product Description:</label>
          <br></br>
          <textarea
            type="text"
            name="p_desc"
            defaultValue={updateItem.pDesc}
            placeholder="Product Description"
            className="input input-bordered input-info w-full mt-1 "
          />
        </div>
        {/* product Image URL */}
        <div>
          <label className="">Product Image:</label>
          <br></br>
          <input
            type="text"
            name="p_img"
            defaultValue={updateItem.pImg}
            placeholder="Product Image URL"
            className="input input-bordered input-info w-full mt-1 "
          />
        </div>
        {/* product Customization */}
        <div>
          <label className="">Customization:</label>
          <br></br>
          <input
            type="text"
            name="p_cus"
            defaultValue={updateItem.pCus}
            placeholder="Product Customization"
            className="input input-bordered input-info w-full mt-1 "
          />
        </div>
       <div className="grid grid-cols-2 gap-6">
            {/*Procecing time*/}
        <div>
          <label className="">Procecing Time:</label>
          <br></br>
          <input
            type="text"
            name="p_time"
            defaultValue={updateItem.pTime}
            placeholder="Delevery Time"
            className="input input-bordered input-info w-full mt-1 "
          />
        </div>
        {/*Stock status*/}
        <div>
          <label className="">Stock Satus:</label>
          <br></br>
          <input
            type="number"
            name="stock_status"
            defaultValue={updateItem.stockStatus}
            placeholder="Available Products"
            className="input input-bordered input-info w-full mt-1 "
          />
        </div>
        {/*User Name*/}
        <div>
          <label className="">User Name:</label>
          <br></br>
          <input
            type="text"
            name="userName"
            readOnly 
            value={user?.displayName}
            className="input bg-gray-100 input-bordered input-info w-full mt-1 "
          />
        </div>
        {/*User Email*/}
        <div>
          <label className="">User Email:</label>
          <br></br>
          <input
            type="email"
            name="userEmail"
            readOnly
            value={user?.email}
            className="input bg-gray-100 input-bordered input-info w-full mt-1 "
          />
        </div>
       </div>
        <div>
          <button className="btn btn-primary block mx-auto px-10 text-lg font-semibold mt-5">Update Info</button>
        </div>
      </form>
        </div>
    );
};

export default UpdateEquipment;