import useFetch from "use-http";

export default <T>() =>
  useFetch<T>({
    url: "https://api.usepanda.com/v1/sources/productHunt/popular",
    onMount: true
  });
