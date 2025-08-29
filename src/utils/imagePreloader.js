import { useEffect } from 'react';

export const useImagePreloader = (imageUrls) => {
  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) return;

    const preloadImages = imageUrls.map(url => {
      const img = new Image();
      img.src = url;
      return img;
    });

    return () => {
      preloadImages.forEach(img => {
        img.src = '';
      });
    };
  }, [imageUrls]);
};

export const extractImageUrls = (products) => {
  return products.map(product => product.image).filter(Boolean);
};
