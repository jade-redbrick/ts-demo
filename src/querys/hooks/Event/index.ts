import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getVar, listEventGstarChallengeWorld, setVar, updateEventGstarChallengeWorld } from "api";
import { VarInfo } from "types";
import { queryKeys } from "querys";

export const useGetGstarList = () => {
  return useQuery(
    queryKeys.gstarWorldList,
    async () => {
      const res = await listEventGstarChallengeWorld();
      return res;
    },
    {
      refetchIntervalInBackground: true,
      refetchInterval: 30000,
    },
  );
};

export const useUpdateGstarWorld = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    (data: { extraViewCount: number }) => updateEventGstarChallengeWorld(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKeys.gstarWorldList);
      },
    },
  );
};

export const useGetVar = (key: string) => {
  return useQuery(queryKeys.var(key), () => getVar(key).then((data) => data));
};

export const useSetCpv = () => {
  const key: string = "cpv";
  const queryClient = useQueryClient();
  return useMutation((value: Number) => setVar(key, { value: String(value) }), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.var(key));
    },
  });
};
