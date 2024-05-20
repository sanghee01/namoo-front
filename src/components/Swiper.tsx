import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Modal from './Modal'; // 경로에 따라 적절히 조정해 주세요.

type NavigationOptions = {
    prevEl?: Element | null;
    nextEl?: Element | null;
    // 여기에 다른 속성 추가
  };
  

interface ImageData {
  id: string;
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { id: "lettuce", src: "/assets/images/LettuceBook.png", alt: "lettuce" },
  { id: "strawberry", src: "/assets/images/StrawberryBook.png", alt: "strawberry" },
  { id: "onion", src: "/assets/images/OnionBook.png", alt: "onion" },
  { id: "greenonion", src: "/assets/images/greenOnionBook.png", alt: "greenonion" }
];

const ImageSlider: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  const handleImageSelect = (imageId: string) => {
    setSelectedImage(imageId);
  };

  const handleCloseModal = () => {
    setSelectedImage("");
  };

  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onInit={(swiper) => {
            // 타입 단언을 사용하여 swiper.params.navigation이 NavigationOptions임을 명시
            const navigation = swiper.params.navigation as NavigationOptions;
            navigation.prevEl = navigationPrevRef.current;
            navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          
        spaceBetween={50}
        slidesPerView={1}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} onClick={() => handleImageSelect(image.id)}>
            <img src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button ref={navigationPrevRef}>이전</button>
      <button ref={navigationNextRef}>다음</button>

      <Modal isOpen={selectedImage !== ""} onClose={handleCloseModal}>
        {images
          .filter((image) => image.id === selectedImage)
          .map((image) => (
            <img key={image.id} src={image.src.replace('Book', 'Detail')} alt={image.alt} />
          ))}
      </Modal>
    </>
  );
};

export default ImageSlider;

