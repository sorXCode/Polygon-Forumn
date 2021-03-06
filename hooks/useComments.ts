import { useQuery } from "react-query";
import useCommentsContract from "./useCommentsContract";

interface UseCommentsQuery {
  topic: string;
}

const useComments = ({ topic }: UseCommentsQuery) => {
  const contract = useCommentsContract();
  return useQuery(["comments", { topic, chainId: contract.chainId }], () => {
    let result = contract.getComments(topic);
    console.log(result);
    return result;
  });
};

export default useComments;
