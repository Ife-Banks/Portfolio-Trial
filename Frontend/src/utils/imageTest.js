// Test different Cloudinary URL formats to find working ones

const testImageUrls = [
  // Format 1: Basic with extension
  'https://res.cloudinary.com/dk21k7l2m/image/upload/devalyze_avzost.jpg',
  'https://res.cloudinary.com/dk21k7l2m/image/upload/devalyze_avzost.png',
  
  // Format 2: Without extension
  'https://res.cloudinary.com/dk21k7l2m/image/upload/devalyze_avzost',
  
  // Format 3: With folder structure
  'https://res.cloudinary.com/dk21k7l2m/image/upload/projects/devalyze_avzost.jpg',
  'https://res.cloudinary.com/dk21k7l2m/image/upload/portfolio/devalyze_avzost.jpg',
  
  // Format 4: With version
  'https://res.cloudinary.com/dk21k7l2m/image/upload/v1733478980/devalyze_avzost.jpg',
  
  // Format 5: Different cloud name
  'https://res.cloudinary.com/demo/image/upload/sample.jpg',
];

export const testCloudinaryImages = () => {
  testImageUrls.forEach((url, index) => {
    const img = new Image();
    img.onload = () => console.log(`✅ Image ${index + 1} loaded:`, url);
    img.onerror = () => console.log(`❌ Image ${index + 1} failed:`, url);
    img.src = url;
  });
};

// Alternative: Use placeholder images service
export const getPlaceholderImage = (projectTitle) => {
  const seed = projectTitle.replace(/\s+/g, '').toLowerCase();
  return `https://picsum.photos/seed/${seed}/400/300.jpg`;
};
