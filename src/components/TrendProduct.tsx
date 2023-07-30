interface TrendProductProps {
  productImage: string
  productName: string
}

const TrendProduct: React.FC<TrendProductProps> = ({productImage, productName}) => {
  return (
    <figure>
    <img className='rounded-[4px] w-[165px]' src={productImage} alt={productName}/>
    <figcaption className='mt-[14px] leading-none font-light text-sm'>{productName}</figcaption>
  </figure>
  )
}

export default TrendProduct;