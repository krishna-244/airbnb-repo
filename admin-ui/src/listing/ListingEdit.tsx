import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ListingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="listingCreatedBy" source="listingCreatedBy" />
        <div />
        <TextInput label="locationType" source="locationType" />
        <div />
        <div />
        <div />
        <TextInput label="placeType" source="placeType" />
        <NumberInput step={1} label="price" source="price" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
