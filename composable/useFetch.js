import { ref } from "vue";
import { useFetch as useNuxtFetch } from "#app";

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(true);

  useNuxtFetch(url)
    .then((response) => {
      data.value = response.data;
      loading.value = false;
    })
    .catch((err) => {
      error.value = err;
      loading.value = false;
    });

  return { data, error, loading };
}
