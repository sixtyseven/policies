import * as React from "react";
import axio, { AxiosResponse } from "axios";
import { Container, Heading } from "./styledComponent";
import { IPolicyItem } from "../../core-ui/models";
import PolicyCard from "../../core-ui/components/PolicyCard";

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
      <Heading>Your policies</Heading>
      {policiesArr.map((policy, idx) => {
        return <PolicyCard key={policy.id + idx} policy={policy} />;
      })}
    </Container>
  );
};

export default Policies;
