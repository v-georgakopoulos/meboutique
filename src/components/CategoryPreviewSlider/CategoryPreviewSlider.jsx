import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./CategoryPreviewSlider.styles.scss"

const CategoryPreviewSlider = ({ category }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let interval;

    const startAutoScroll = () => {
      interval = setInterval(() => {
        slider.scrollBy({
          left: slider.offsetWidth * 0.7,
          behavior: "smooth",
        });

        if (
          slider.scrollLeft + slider.clientWidth >=
          slider.scrollWidth - 5
        ) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        }
      }, 3000);
    };

    startAutoScroll();

    slider.addEventListener("mouseenter", () => clearInterval(interval));
    slider.addEventListener("mouseleave", startAutoScroll);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-wrapper">
      <div className="slider-track" ref={sliderRef}>
        {category.items.map((item) => (
          <Link
            key={item.id}
            to={`/shop/${category.title.toLowerCase()}/${item.id}`}
            className="slider-item"
          >
            <img src={item.imageUrl} alt={item.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPreviewSlider;
