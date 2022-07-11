/* eslint-disable @typescript-eslint/no-explicit-any */
import { readonly, shallowReactive } from "vue";
import { $fetch } from "ohmyfetch";

export interface ControllerData {
  readonly __status: string;
  readonly isReady: boolean;
  readonly isReadyPromise: () => Promise<void>;
  readonly [key: string]: any;
}

const payloadCache = new Map<string, any>();
const promiseMap = new Map<string, Promise<any>>();

/**
 * Returns controller data from either store or network
 */
function fetcher(id: string) {
  const key = `/controllers/${id}.json`;

  if (payloadCache.has(key)) {
    return Promise.resolve(payloadCache.get(key));
  }

  if (promiseMap.has(key)) {
    return promiseMap.get(key);
  }

  const request = $fetch(key).then((response) => {
    payloadCache.set(key, response);
    promiseMap.delete(key);
    return response;
  });

  promiseMap.set(key, request);

  return request;
}

/**
 * Returns data for a given controller
 */
export function useController(id: string): ControllerData {
  // Setup page waiter promise
  let resolve: (() => void) | undefined;
  const promise = new Promise<void>((r) => (resolve = r));

  // Setup reactive page object
  const page = shallowReactive({
    __status: "pending",
    isReady: false,
    isReadyPromise: () => promise,
  });

  (async () => {
    if (!id) {
      console.error("[useController] id is required");
      page.__status = "error";
      resolve?.();
      return;
    }

    try {
      const { data } = await fetcher(id);

      // Append page data to reactive page object
      Object.assign(page, data);

      page.__status = "resolved";
      page.isReady = true;
      resolve?.();
    } catch (e) {
      page.__status = "error";
    }
  })();

  return readonly(page);
}
