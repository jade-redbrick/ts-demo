import { challengeKeys } from "./challenge";
import { eventKeys } from "./event";

export const queryKeys = {
  ...challengeKeys,
  ...eventKeys,
};

export const queryStatus = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
};
