import RedbrickService from "@redbrick-sdk/service";
import { GstarChallengeWorld, VarInfo } from "types";

const defaultClient_api = RedbrickService.ApiClient.instance;
defaultClient_api.basePath = "https://dev-api.redbrick.land/v2";

const event_api = new RedbrickService.EventApi();
const var_api = new RedbrickService.VarApi();

const addTokenHeader = () => {
  const token = localStorage.getItem("redbrickToken");
  defaultClient_api.defaultHeaders = {
    authorization: `bearer ${token}`,
  };
};

export const listEventGstarChallengeWorld = (): Promise<GstarChallengeWorld[]> => {
  addTokenHeader();
  return new Promise<GstarChallengeWorld[]>((resolve, reject) => {
    event_api.listEventGstarChallengeWorld((error: Error, data: GstarChallengeWorld[]) => {
      if (error) {
        reject(error);
        return;
      } else {
        resolve(data);
      }
    });
  });
};

export const updateEventGstarChallengeWorld = (id: string, options: { extraViewCount: number }) => {
  const opts = {
    body: {
      ...options,
    },
  };
  addTokenHeader();
  return new Promise((resolve, reject) => {
    event_api.updateEventGstarChallengeWorld(
      id,
      opts,
      (
        error: Error,
        data: {
          code: number;
          message: string;
        },
      ) => {
        if (error) {
          reject(error);
          return;
        } else {
          resolve(data);
        }
      },
    );
  });
};

/** var api */
export const getVar = (key: string): Promise<VarInfo> => {
  addTokenHeader();
  return new Promise((resolve, reject) => {
    var_api.getVar(key, (error: Error, data: VarInfo) => {
      if (error) {
        reject(error);
        return;
      } else {
        resolve(data);
      }
    });
  });
};

export const setVar = (key: string, options: { value: string }) => {
  const opts = {
    body: {
      ...options,
    },
  };
  addTokenHeader();
  return new Promise((resolve, reject) => {
    var_api.setVar(
      key,
      opts,
      (error: Error, data: { code: number | undefined; message: string | undefined }) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      },
    );
  });
};

export {};
