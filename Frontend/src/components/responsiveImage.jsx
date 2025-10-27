// src/components/ResponsiveImage.jsx
import { cld } from '../config/cloudinary';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { auto } from '@cloudinary/url-gen/qualifiers/quality';
import { auto as autoFormat } from '@cloudinary/url-gen/qualifiers/format';

function ResponsiveImage({ publicId, alt, className }) {
    // Generate URLs for different sizes
    const generateUrl = (width) => {
        const image = cld.image(publicId);
        image
            .resize(scale().width(width))
            .quality(auto())
            .format(autoFormat());
        return image.toURL();
    };

    const srcSet = `
    ${generateUrl(400)} 400w,
    ${generateUrl(800)} 800w,
    ${generateUrl(1200)} 1200w,
    ${generateUrl(1600)} 1600w
  `;

    return (
        <img
            src={generateUrl(800)}
            srcSet={srcSet}
            sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
            alt={alt}
            className={className}
            loading="lazy"
        />
    );
}

export default ResponsiveImage;