import { useQuery } from "@tanstack/react-query";
import { getWorldList } from "api";
import { queryKeys } from "querys";

export const useChallengeList = () => {
  return useQuery(queryKeys.challengeList, async () => {
    const res = await getWorldList({ offset: 0, limit: 12, ownerCi: null });
    return res;
  });
};
// export const useDeleteChallengeProjectMutation = (id, params) => {
//   const queryClient = useQueryClient();
//   return useMutation(() => request.deleteChallengeProject({ id }), {
//     onSuccess: () => {
//       queryClient.invalidateQueries(queryKeys.projectLists(params));
//     },
//   });
// };
