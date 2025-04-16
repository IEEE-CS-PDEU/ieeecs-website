import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { horizontalLoop } from "./gsapLoopHelper";

const imageUrls = [
  "/gallery/photo1.webp",
  "/gallery/photo2.webp",
  "/gallery/photo3.webp",
  "/gallery/photo4.webp",
  "/gallery/photo5.webp",
  "/gallery/photo6.webp",
  "/gallery/photo7.webp",
  "/gallery/photo8.webp",
  "/gallery/photo9.webp",
  "/gallery/photo10.webp",
  "/gallery/photo11.webp",
  "/gallery/photo12.webp",
  "/gallery/photo13.webp",
  "/gallery/photo14.webp",
  "/gallery/photo15.webp",
  "/gallery/photo16.webp",
  "/gallery/photo17.webp",
  "/gallery/photo18.webp",
  "/gallery/photo19.webp",
  "/gallery/photo20.webp",
];

const GalleryImage = ({ url, type = "" }) => {
  const imageRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);
  // const [hasBeenVisible, setHasBeenVisible] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsVisible(entry.isIntersecting);
  //       if (entry.isIntersecting) setHasBeenVisible(true);
  //     },
  //     { threshold: 0.1 }
  //   );

  //   if (imageRef.current) observer.observe(imageRef.current);

  //   return () => {
  //     if (imageRef.current) observer.unobserve(imageRef.current);
  //   };
  // }, []);

  // const isCurrentlyVisible = isVisible || hasBeenVisible;

  return (
    <img
      ref={imageRef}
      src={url}
      className={`gallery_image${type}
                sm:min-w-[500px] sm:max-w-[500px] sm:min-h-[300px] sm:max-h-[300px]
                min-w-[250px] max-w-[250px] min-h-[150px] max-h-[150px]
                object-cover opacity-100
                transition-opacity duration-500`}
      alt="Gallery"
    />
  );
};

export default function Gallery() {
  const horizontalLoop1 = useRef(null);
  const horizontalLoop2 = useRef(null);

  useEffect(() => {
    horizontalLoop1.current = horizontalLoop(
      gsap.utils.toArray(".gallery_image"),
      {
        reversed: true,
        speed: 1,
        repeat: -1,
      }
    );

    horizontalLoop2.current = horizontalLoop(
      gsap.utils.toArray(".gallery_image1"),
      {
        speed: 1,
        repeat: -1,
      }
    );

    let currentScroll = 0,
      isScrollingDown = false;
    const handleScroll = () => {
      if (window.scrollY > currentScroll) {
        if (!isScrollingDown) {
          isScrollingDown = true;
          if (horizontalLoop1.current) horizontalLoop1.current.reverse();
          if (horizontalLoop2.current) horizontalLoop2.current.play();
        }
      } else {
        if (isScrollingDown) {
          isScrollingDown = false;
          if (horizontalLoop1.current) horizontalLoop1.current.play();
          if (horizontalLoop2.current) horizontalLoop2.current.reverse();
        }
      }

      currentScroll = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const midIndex = Math.ceil(imageUrls.length / 2);
  const firstHalf = imageUrls.slice(0, midIndex);
  const secondHalf = imageUrls.slice(midIndex);

  return (
    <section className="sm:min-h-screen h-fit justify-center w-full flex flex-col items-center gap-6 max-w-screen">
      <div className="flex flex-row flex-nowrap gap-4">
        {firstHalf.map((url, index) => (
          <GalleryImage key={index} url={url} />
        ))}
      </div>

      <div className="flex flex-row flex-nowrap gap-4">
        {secondHalf.map((url, index) => (
          <GalleryImage key={index} url={url} type={1} />
        ))}
      </div>
    </section>
  );
}
