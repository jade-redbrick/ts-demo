import { eventKeys } from "./event";

export const queryKeys = {
  ...eventKeys,
};

export const queryStatus = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
};
