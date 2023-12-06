import { JsonValue } from "type-fest";

export type Listing = {
  createdAt: Date;
  description: string;
  id: string;
  listingCreatedBy: string;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photos: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  price: number;
  title: string;
  updatedAt: Date;
};
