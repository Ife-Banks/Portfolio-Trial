// src/config/cloudinary.js
import { Cloudinary } from '@cloudinary/url-gen';

// Create and configure your Cloudinary instance
export const cld = new Cloudinary({
    cloud: {
        cloudName: 'duaknewau' // Replace with your cloud name
    }
});