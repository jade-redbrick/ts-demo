import RedbrickService from "@redbrick-sdk/service";
import { World } from "types";

const defaultClient_api = RedbrickService.ApiClient.instance;
defaultClient_api.basePath = "https://dev-api.redbrick.land/v2";

const world_api = new RedbrickService.WorldApi();

// export const getWorld = (id) => {
//   return new Promise((resolve, reject) => {
//     world_api.getWorld(id, (error, data, response) => {
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

type ListWorldParams = {
  offset: number;
  limit: number;
  ownerCi: string | null;
  tag?: string;
};
export const getWorldList = (opts: ListWorldParams): Promise<World[]> => {
  return new Promise((resolve, reject) => {
    world_api.listWorld(opts, (error: Error, data: World[]) => {
      if (error) {
        reject(error);
        return;
      } else {
        resolve(data);
      }
    });
  });
};

// export const updateWorld = (id, option) => {
//   const opts = {
//     body: {
//       ...option,
//     },
//   };

//   return new Promise((resolve, reject) => {
//     world_api.updateWorld(id, opts, (error, data, response) => {
//       if (error) {
//         reject(error);
//         return;
//       } else {
//         const object = response.ok;
//         resolve(object);
//       }
//     });
//   });
// };
