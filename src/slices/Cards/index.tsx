import { FC } from "react";
import { Cards as CardsLayout } from "@/components/Cards/Cards"
import { Card as CardLayout } from "@/components/Cards/Card"
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

/**
 * Props for `Cards`.
 */
export type CardsProps = SliceComponentProps<Content.CardsSlice>;

/**
 * Component for "Cards" Slices.
 */
const Cards: FC<CardsProps> = ({ slice }) => {
    return (
        <CardsLayout
            heading={slice.primary.heading ?? undefined}
            copy={<PrismicRichText field={slice.primary.description} />}
        >
            {slice.primary.card?.map((item, index) => (
                <CardLayout
                    key={index}
                    title={item.title ?? ''}
                    image={item.image.url ?? ''}
                    imageAlt={item.image.alt ?? ''}
                    description={<PrismicRichText field={item.copy} />}
                />
            ))}
        </CardsLayout>
    );
};

export default Cards;
