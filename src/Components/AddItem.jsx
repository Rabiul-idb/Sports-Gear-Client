import Swal from 'sweetalert2'

const AddItem = () => {

  const handleAddItem = e =>{
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

    const newItem = {pName, pCat, pPrice, pPrice, pRating, pDesc, pImg, pCus, pTime, stockStatus, userName, userEmail}
    console.log(newItem);

    // send data to server

    fetch('http://localhost:5000/addItems',{
      method: 'POST',
      headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Item Added Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }


  return (
    <div>
        <h2 className="font-bold text-2xl text-black text-center my-5">Add Sport Equipment</h2>
        
      <form onSubmit={handleAddItem} className="max-w-5xl mx-auto p-6 bg-gray-100 shadow-lg border rounded-md space-y-4">
        <div className="grid grid-cols-2 gap-6">
          {/* Product name */}
          <div>
            <label className="">Product Name:</label>
            <br></br>
            <input
              type="text"
              name="p_name"
              placeholder="Product Name"
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
            placeholder="Procecing Time"
            className="input input-bordered input-info w-full mt-1 "
          />
        </div>
        {/*Stock status*/}
        <div>
          <label className="">Stock Satus:</label>
          <br></br>
          <input
            type="text"
            name="stock_status"
            placeholder="Set stock Availability"
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
            value={"rabiul"}
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
            value={"islam"}
            className="input bg-gray-100 input-bordered input-info w-full mt-1 "
          />
        </div>
       </div>
        <div>
          <button className="btn btn-primary block mx-auto px-10 text-lg font-semibold mt-5">Submit</button>
        </div>
      </form>

      
    </div>
  );
};

export default AddItem;
