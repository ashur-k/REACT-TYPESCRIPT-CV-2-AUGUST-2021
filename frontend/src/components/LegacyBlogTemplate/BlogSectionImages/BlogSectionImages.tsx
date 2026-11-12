import React, { FunctionComponent } from "react";

import { Image } from "react-bootstrap";

import "./BlogSectionImages.css";

type BlogSectionImage = {
  id: number | string;
  image_path: string;
};

type BlogSectionImagesProps = {
  mainImage?: string | null;
  images?: BlogSectionImage[] | null;
};

const BlogSectionImages: FunctionComponent<BlogSectionImagesProps> = ({ mainImage, images }) => {
  const additionalImages = images ?? [];

  if (!mainImage && additionalImages.length === 0) {
    return null;
  }

  return (
    <section className="legacy-blog-section-images">
      {mainImage && (
        <div className="legacy-blog-section-images__main">
          <Image src={mainImage} alt="Blog section illustration" fluid />
        </div>
      )}

      {additionalImages.length > 0 && (
        <div className="legacy-blog-section-images__gallery">
          {additionalImages.map((image) => (
            <div key={image.id} className="legacy-blog-section-images__item">
              <Image src={image.image_path} alt="Additional blog illustration" fluid />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default BlogSectionImages;
