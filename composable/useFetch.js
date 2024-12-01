import { useFetch as useNuxtFetch } from "#app";
export function useFetch(url) {
  const { data, error } = useNuxtFetch(url);
  return { data, error };
}
