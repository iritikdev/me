import axios from "axios";
import { useQuery } from "react-query";

import { devUsername, apiBaseUrl } from "../config.json";

const apiURL = `${apiBaseUrl}/articles?username=${devUsername}`;

const useArticles = () => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: () => axios.get(apiURL).then((response) => response.data),
  });
};

export default useArticles;
