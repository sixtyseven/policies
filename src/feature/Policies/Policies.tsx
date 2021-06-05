import * as React from "react";
import axio, { AxiosResponse } from "axios";
import { Container } from "./styledComponent";

interface IPartner {
  id: string;
  name: string;
  // https://domain/labore.svg
  logo: string;
}

interface IPolicyItem {
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
  renewal: null;
  partner: IPartner;
}

interface IPoliciesResponse {
  policies: IPolicyItem[];
}

const Policies = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [fetchError, setFetchError] = React.useState<Error | null>(null);
  const [policiesArr, setPoliciesArr] = React.useState<IPolicyItem[]>([]);

  React.useEffect(() => {
    setFetchError(null);
    setIsLoading(true);

    axio
      .get("https://7946a218-d225-4d0e-80ac-450bbc9713a0.mock.pstmn.io/booking")
      .then((res: AxiosResponse<IPoliciesResponse>) => {
        setPoliciesArr(res.data.policies);
      })
      .catch((e: Error) => {
        setFetchError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  console.log("[render] Feature Policies");

  if (isLoading) {
    return <>loading...</>;
  }
  if (fetchError) {
    return <div style={{ color: `red` }}>{fetchError.message}</div>;
  }
  return (
    <Container>
      <h2>Your policies</h2>
    </Container>
  );
};

export default Policies;
