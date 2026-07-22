export interface VehicleBrand {
  id: string;
  name: string;
  image: string;
}

/** One merchant row = company + logo. */
export interface VehicleRow {
  brandId: string;
  brandName: string;
  brandImage: string;
}
