import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {
  getVar,
  listEventGstarChallengeWorld,
  setVar,
  updateEventGstarChallengeWorld,
} from "api";
import {queryKeys} from "utils/Constant";

export const useGetGstarList = () => {
  return useQuery(
    queryKeys.gstarWorldList,
    () => listEventGstarChallengeWorld().then(data => data),
    {
      refetchIntervalInBackground: true,
      refetchInterval: 30000,
    },
  );
};

export const useUpdateGstarWorld = id => {
  const queryClient = useQueryClient();
  return useMutation(data => updateEventGstarChallengeWorld(id, {...data}), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.gstarWorldList);
    },
  });
};

export const useGetVar = key => {
  return useQuery(queryKeys.var(key), () => getVar(key).then(data => data));
};

export const useSetCpv = () => {
  const key = "cpv";
  const queryClient = useQueryClient();
  return useMutation(value => setVar(key, {value: String(value)}), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.var(key));
    },
  });
};
