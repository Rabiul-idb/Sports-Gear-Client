import { useLoaderData, useNavigate } from "react-router-dom";


const ProductDetails = () => {

    const navigate = useNavigate();
    const item = useLoaderData();
    //console.log(item);
    const {_id, pName, pCat, pCus, pDesc, pImg, pPrice, pTime, pRating, stockStatus, userName, userEmail} = item || {};



    return (
        <div className="w-11/12 mx-auto border p-5 rounded-md my-8 bg-cyan-50">
            <h2 className="text-center font-semibold text-2xl my-5">Equipment Item Details</h2>
            <div className=" grid grid-cols-12 gap-6">
            <figure className="col-span-5">
                <img src={pImg} className="h-auto" alt="" />
            </figure>
            <div className="col-span-7">
                
                <h3 className="text-black font-semibold text-xl mb-2">{pName}</h3>
                <p className="text-base text-gray-700 font-semibold mb-2">{pDesc}</p>
                <p className="text-base text-gray-700 font-semibold mb-2">Category: {pCat}</p>
                <p className="text-base text-gray-700 font-semibold mb-2">Price ($): {pPrice}</p>
                <p className="text-base text-gray-700 font-semibold mb-2"> Customization: {pCus}</p>
                <p className="text-base text-gray-700 font-semibold mb-2"> Delivery Time: {pTime}</p>
                <p className="text-base text-gray-700 font-semibold mb-2"> Status: {stockStatus}</p>
                <p className="text-base text-gray-700 font-semibold mb-2"> Rating: {pRating}</p>
                <button className="btn btn-info text-lg mt-4 mr-4" disabled>Add to Cart</button>
                <button onClick={() => navigate(-1)} className="btn text-lg">go back</button>

            </div>
        </div>
        </div>
    );
};

export default ProductDetails;