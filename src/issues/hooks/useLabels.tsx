import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { sleep } from "../../helpers/sleep";
import { Label } from "../interfaces/label";

const getLabels = async (): Promise<Label[]> => {
  await sleep(2);
  const { data } = await await githubApi.get<Label[]>("/labels?per_page=100", {
    headers: {
      // to avoid github 500 error
      Authorization: null,
    },
  });

  return data;
};

export const useLabels = () => {
  const labelsQuery = useQuery(["labels"], getLabels, {
    staleTime: 1000 * 60 * 60,
    // initialData: [],
    placeholderData: [
      {
        id: 791921801,
        node_id: "MDU6TGFiZWw3OTE5MjE4MDE=",
        url: "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
        name: "❤️",
        color: "ffffff",
        default: false,
      },
      {
        id: 69105383,
        node_id: "MDU6TGFiZWw2OTEwNTM4Mw==",
        url: "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
        name: "Browser: IE",
        color: "c7def8",
        default: false,
      },
      {
        id: 127893911,
        node_id: "MDU6TGFiZWwxMjc4OTM5MTE=",
        url: "https://api.github.com/repos/facebook/react/labels/Component:%20DOM",
        name: "Component: DOM",
        color: "fef2c0",
        default: false,
      },
    ],
  });

  return {
    labelsQuery,
  };
};
