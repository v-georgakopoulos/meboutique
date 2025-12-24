import { BannerContainer } from "./Banner.styles"

const Banner = ({ category, size }) => {
  const { imageUrl, title, } = category
  return (
    <BannerContainer size={size}>
      <img src={imageUrl} alt={title} />
    </BannerContainer>
  )
}

export default Banner
