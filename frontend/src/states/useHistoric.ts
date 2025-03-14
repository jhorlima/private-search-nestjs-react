import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  HistoricItem,
  getMyHistoric,
  setMyHistoric,
  addToMyHistoric,
  removeFromMyHistoric,
} from "@api/history";

const HISTORIC_KEY = "historic";

export const useHistoric = () => {
  return useQuery({
    queryKey: [HISTORIC_KEY],
    queryFn: getMyHistoric,
    retry: 3,
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 60,
  });
};

export const useSetMyHistoric = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: setMyHistoric,
    onSuccess: (data) => {
      queryClient.setQueryData([HISTORIC_KEY], () => ({
        ...data,
      }));
    },
  });
};

export const useAddToHistoric = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addToMyHistoric,
    onSuccess: (data) => {
      const cached = queryClient.getQueryData<Record<string, HistoricItem>>([
        HISTORIC_KEY,
      ]);
      if (cached) {
        queryClient.setQueryData([HISTORIC_KEY], () => ({
          ...cached,
          [data.id]: data,
        }));
      }
    },
  });
};

export const useRemoveFromHistoric = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeFromMyHistoric,
    onSuccess: (id: string) => {
      const cached = queryClient.getQueryData<Record<string, HistoricItem>>([
        HISTORIC_KEY,
      ]);
      if (cached) {
        queryClient.setQueryData([HISTORIC_KEY], () => {
          const newCached = { ...cached };
          delete newCached[id];
          return newCached;
        });
      }
    },
  });
};
