import Banner from "./Banner";
import Products from "../Products";
import ProductsCard from "./ProductsCard";
import Service from "./Service";
import PopularBrands from "./PopularBrands";



const Homepage = () => {

    

    return (
        <div>
            
          <Banner></Banner>
          {/* <Products></Products> */}
          <Service></Service>
          <PopularBrands></PopularBrands>
          <ProductsCard></ProductsCard>
            {/* https://i.ibb.co.com/XkSyTmt/badminton-cock.webp
https://i.ibb.co.com/8MnfqJq/badminton-racket.jpg
https://i.ibb.co.com/6HxY8D1/boot-show.jpg
https://i.ibb.co.com/8NcGS2h/cricket-ball.webp
https://i.ibb.co.com/kqrBwc4/cricket-bat.jpg
https://i.ibb.co.com/q5DCkjK/football.png
https://i.ibb.co.com/x6qmWBS/hocky-stick.jpg
https://i.ibb.co.com/ZNvXq29/volly-Ball.jpg */}
        </div>
    );
};

export default Homepage;