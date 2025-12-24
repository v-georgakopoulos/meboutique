import { Link } from "react-router-dom";
import { SHOP_DATA } from "../../data/shop-data";
import { categories } from "../../data/categories";
import Banner from "../../components/Banner/Banner";
import CategoryPreviewSlider from "../../components/CategoryPreviewSlider/CategoryPreviewSlider";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";


import { SmallBannerContainer } from "./Home.styles.jsx";

const HomePage = () => {
  const largeBanners = categories.filter(
    (category) => category.layout === "large"
  );
  const smallBanners = categories.filter(
    (category) => category.layout === "small"
  );

  const getCategoryData = (title) =>
    SHOP_DATA.find((category) => category.title.toLowerCase() === title);

  return (
    <>
        {largeBanners.map((category) => {
          const categoryData = getCategoryData(category.title);
          return (
            <div key={category.title}>
              <Link to={category.route}>
                <Banner category={category} size="large" />
              </Link>
              {
                category.hasSlider && categoryData && (
                  <CategoryPreviewSlider category={categoryData}/>
                )
              }
            </div>
          );
        })}
      <SmallBannerContainer>
        {smallBanners.map((category) => (
          <Link key={category.title} to={category.route}>
            <Banner category={category} size="small" />
          </Link>
        ))}
      </SmallBannerContainer>
      <Subscribe/>
      <Footer/>
    </>
  );
}

export default HomePage;
