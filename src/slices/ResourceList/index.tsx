import { FC } from "react";
import { Grid } from "@/components/Grid/Grid"
import { Resource } from "@/components/Resource/Resource"
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

/**
 * Props for `ResourceList`.
 */
export type ResourceListProps = SliceComponentProps<Content.ResourceListSlice>;

/**
 * Component for "ResourceList" Slices.
 */
const ResourceList: FC<ResourceListProps> = ({ slice }) => {
  return (
      <Grid
          heading={slice.primary.heading ?? undefined}
          copy={<PrismicRichText field={slice.primary.description} />}
          gridCountWide={slice.primary.grid_columns_desktop ?? '3'}
          gridCountMed={slice.primary.grid_columns_tablet  ?? '2'}
      >
          {slice.primary.resources_list?.map((item) => {
              const doc = item.resource;

              if (!doc || !('data' in doc)) return null;

              const {
                  title,
                  button_label,
                  description,
                  file,
              } = doc.data as Content.ResourceDocument['data'];

              return (
                  <Resource
                      key={doc.id}
                      title={title ?? ''}
                      description={<PrismicRichText field={description} />}
                      linkUrl={file?.url ?? '#'}
                      linkLabel={button_label ?? 'View'}
                  />
              );
          })}
      </Grid>
  );
};

export default ResourceList;
