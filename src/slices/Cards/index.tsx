import { FC } from "react";
import { Grid } from "@/components/Grid/Grid"
import { Card as CardLayout } from "@/components/Card/Card"
import {Content, isFilled} from "@prismicio/client";
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
        <Grid
            heading={slice.primary.heading ?? undefined}
            copy={<PrismicRichText field={slice.primary.description} />}
            gridCountWide={slice.primary.grid_columns_desktop ? slice.primary.grid_columns_desktop : '3'}
            gridCountMed={slice.primary.grid_columns_tablet ? slice.primary.grid_columns_tablet : '2'}
        >
            {slice.primary.card?.map((item, index) => (
                <CardLayout
                    key={index}
                    title={item.title ?? ''}
                    image={item.image.url ?? ''}
                    imageAlt={item.image.alt ?? ''}
                    description={isFilled.richText(item.copy) && <PrismicRichText field={item.copy} />}
                />
            ))}
        </Grid>
    );
};

export default Cards;
