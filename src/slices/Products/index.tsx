import React, { FC } from "react";
import { Grid } from "@/components/Grid/Grid"
import { Product } from "@/components/Product/Product"
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

/**
 * Props for `Products`.
 */
export type ProductsProps = SliceComponentProps<Content.ProductsSlice>;

/**
 * Component for "ResourceList" Slices.
 */
const Products: FC<ProductsProps> = ({ slice }) => {
  return (
      <Grid
          heading={slice.primary.heading ?? undefined}
          copy={isFilled.richText(slice.primary.description) && <PrismicRichText field={slice.primary.description} />}
          gridCountWide={slice.primary.grid_columns_desktop ?? '3'}
          gridCountMed={slice.primary.grid_columns_tablet  ?? '2'}
          sectionId='shop'
      >
        {slice.primary.products?.map((item) => {
          const doc = item.product;

          if (!doc || !('data' in doc)) return null;

          const {
            product_name,
            payment_link,
            description,
            price,
            shipping_text,
            most_popular,
            image,
          } = doc.data as Content.ProductDocument['data'];

          return (
              <Product
                  key={doc.id}
                  title={product_name ?? ''}
                  description={isFilled.richText(description) && <PrismicRichText field={description} />}
                  price={price ?? ''}
                  shipping={shipping_text ?? ''}
                  linkUrl={isFilled.link(payment_link) ? (payment_link.url as string) : '#'}
                  linkLabel={payment_link.text ?? 'View'}
                  image={image?.url ?? ''}
                  imageAlt={image?.alt ?? ''}
                  mostPopular={most_popular ?? ''}
              />
          );
        })}
      </Grid>
  );
};

export default Products;
