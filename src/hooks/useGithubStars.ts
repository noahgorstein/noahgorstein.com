import React from "react";
import { fetchStars } from "../helpers/github";

function useGithubStars(repo: string) {
  const [stars, setStars] = React.useState<number>();

  React.useEffect(() => {
    const fetchData = async () => {
      const stars = await fetchStars(repo);
      setStars(stars);
    };
    fetchData();
  }, [repo]);
  return stars;
}

export default useGithubStars;
