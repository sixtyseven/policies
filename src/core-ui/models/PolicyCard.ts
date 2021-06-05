export interface IPartner {
  id: string;
  name: string;
  // eg: https://domain/labore.svg
  logo: string;
}

export interface IPolicyItem {
  id: string;
  type: "travel" | "product" | "parcel";
  title: string;
  description: string;
  status: "active" | "expired";
  premium: number;
  premium_formatted: string;
  payment_date: string; //"2019-10-10T13:29:38.814849Z",
  coverage_start_date: string; // "2019-11-17"
  coverage_end_date: string; // "2019-11-19",
  renewal: "annual" | null;
  partner: IPartner;
}
