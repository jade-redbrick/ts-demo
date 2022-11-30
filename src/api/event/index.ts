import RedbrickService from "@redbrick-sdk/service";
import { ListEventGstarChallengeWorld } from "types";

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

export const listEventGstarChallengeWorld = () => {
  addTokenHeader();
  return new Promise((resolve, reject) => {
    event_api.listEventGstarChallengeWorld((error: null, data: ListEventGstarChallengeWorld[]) => {
      if (error) {
        reject(error);
        return;
      } else {
        resolve(data);
      }
    });
  });
};

// export const updateEventGstarChallengeWorld = (id, options) => {
//   const opts = {
//     body: {
//       ...options,
//     },
//   };
//   addTokenHeader();
//   return new Promise((resolve, reject) => {
//     event_api.updateEventGstarChallengeWorld(id, opts, (error, data, response) => {
//       if (error) {
//         reject(error);
//         return;
//       } else {
//         const object = response.body;
//         resolve(object);
//       }
//     });
//   });
// };

// /** var api */
// export const getVar = (key) => {
//   addTokenHeader();
//   return new Promise((resolve, reject) => {
//     var_api.getVar(key, (error, data, response) => {
//       if (error) {
//         reject(error);
//         return;
//       } else {
//         const object = response.body;
//         resolve(object);
//       }
//     });
//   });
// };

// export const setVar = (key, options) => {
//   const opts = {
//     body: {
//       ...options,
//     },
//   };
//   addTokenHeader();
//   return new Promise((resolve, reject) => {
//     var_api.setVar(key, opts, (error, data, response) => {
//       if (error) {
//         reject(error);
//         return;
//       } else {
//         const object = response.body;
//         resolve(object);
//       }
//     });
//   });
// };

export {};
