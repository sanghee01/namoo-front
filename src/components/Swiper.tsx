import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Modal from './Modal'; 
import styled from 'styled-components';

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

const StyledButton = styled.button`
  background-color: #bb8e79;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  font-size: 15px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a57a64;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(165, 42, 42, 0.5);
  }
`;

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
      <StyledButton ref={navigationPrevRef}>이전</StyledButton>
      <StyledButton ref={navigationNextRef}>다음</StyledButton>

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

