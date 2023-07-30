interface TrendProductProps {
  productImage: string
  productName: string
}

const TrendProduct: React.FC<TrendProductProps> = ({productImage, productName}) => {
  return (
    <figure>
    <img className='rounded-md w-[165px] h-[220px] object-cover' src={productImage} alt={productName}/>
    <figcaption className='mt-3 leading-none font-light text-sm'>{productName}</figcaption>
  </figure>
  )
}

export default TrendProduct;