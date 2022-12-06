import { useQuery } from "@tanstack/react-query";
import { getVar, listEventGstarChallengeWorld } from "api";
import { VarInfo } from "types";
import { queryKeys } from "utils";

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

// export const useUpdateGstarWorld = (id) => {
//   const queryClient = useQueryClient();
//   return useMutation((data) => updateEventGstarChallengeWorld(id, { ...data }), {
//     onSuccess: () => {
//       queryClient.invalidateQueries(queryKeys.gstarWorldList);
//     },
//   });
// };

export const useGetVar = (key: string) => {
  return useQuery(queryKeys.var(key), () => getVar(key).then((data) => data));
};

// export const useSetCpv = () => {
//   const key = "cpv";
//   const queryClient = useQueryClient();
//   return useMutation((value) => setVar(key, { value: String(value) }), {
//     onSuccess: () => {
//       queryClient.invalidateQueries(queryKeys.var(key));
//     },
//   });
// };
