// https://workintech-ng.onrender.com
// https://workintech-ng.onrender.com/motivation

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Motivation = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["motivation"],
    queryFn: () =>
      axios
        .get("https://workintech-ng.onrender.com/motivation")
        .then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <blockquote>
      <p>{data.word}</p>
      <cite>{data.author}</cite>
    </blockquote>
  );
};
