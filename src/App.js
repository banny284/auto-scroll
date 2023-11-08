import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import "./styles.css";

export default function App() {
  return (
    <Splide
      options={{
        type: "loop",
        gap: "10px",
        drag: "free",
        arrows: false,
        pagination: false,
        perPage: 3,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: 1
        }
      }}
      extensions={{ AutoScroll }}
    >
      <SplideSlide>
        <img src="https://via.placeholder.com/150" alt="Image 1" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://via.placeholder.com/150" alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://via.placeholder.com/150" alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://via.placeholder.com/150" alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://via.placeholder.com/150" alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://via.placeholder.com/150" alt="Image 2" />
      </SplideSlide>
    </Splide>
  );
}
