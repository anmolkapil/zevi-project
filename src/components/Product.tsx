import { useState } from 'react';
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


interface ProductProps {
  productImage: string,
  productName: string,
  price: number,
  discountedPrice: number
  stars: number
  ratingCount: number
}

const Product:React.FC<ProductProps> = ({productImage, productName, price, discountedPrice, stars, ratingCount}) => {
  const [wishlist, setWishlist] = useState<boolean>(false);
  const toggleWishlist = () =>{
      setWishlist(!wishlist);
  }
return (
  
  <div className='relative select-none cursor-pointer'>
    <div className='absolute z-10 right-2 top-2'>
    {wishlist ? (
        <FavoriteIcon onClick={toggleWishlist} sx={{ color: 'red'}}/>
      ) : (
        <FavoriteBorderIcon onClick={toggleWishlist} sx={{ color: 'white'}}/>
      )}
    </div>

    <div className='relative group rounded-sm overflow-hidden'>
    <img className='w-[240px] h-[325px] object-cover' src={productImage} alt={productName}/>
   
    <div className='absolute invisible group-hover:visible bottom-0 left-0 right-0 bg-[rgba(109,132,255,0.7)] text-white font-medium text-xl text-center py-2'>View Product</div>
    </div>
    <h2 className='text-xl mt-4 mb-2 font-normal'>{productName}</h2>
    <span className='line-through font-light text-black/40 mr-2'>Rs. {price}</span>
    <span className='text-[#6D84FF] font-semibold'>Rs. {discountedPrice}</span>
    <div className='flex items-center gap-2 mt-2'>
    <Rating name="read-only" value={stars} readOnly/>
    <span className='font-light text-sm'>({ratingCount})</span>
    </div>
  </div>
)
}

export default Product;