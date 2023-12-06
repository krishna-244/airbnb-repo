import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ListingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="listingCreatedBy" source="listingCreatedBy" />
        <TextField label="locationData" source="locationData" />
        <TextField label="locationType" source="locationType" />
        <TextField label="mapData" source="mapData" />
        <TextField label="photos" source="photos" />
        <TextField label="placeSpace" source="placeSpace" />
        <TextField label="placeType" source="placeType" />
        <TextField label="price" source="price" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
