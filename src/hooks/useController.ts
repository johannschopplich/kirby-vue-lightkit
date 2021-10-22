import { shallowReactive, readonly } from "vue";

export interface ControllerData {
  readonly __status: string;
  readonly isReady: boolean;
  readonly isReadyPromise: () => Promise<unknown>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly [key: string]: any;
}

const store = new Map<string, ControllerData>();

/**
 * Returns controller data from either store or network
 */
const fetcher = async (id: string) => {
  let page;
  const url = `/controllers/${id}.json`;

  if (store.has(id)) {
    return store.get(id);
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request ${url} failed with "${response.statusText}".`);
    }

    const { data } = await response.json();
    page = data;
  } catch (error) {
    console.error(error);
    return false;
  }

  store.set(id, page);

  return page;
};

/**
 * Returns data for a given controller
 */
export default (id: string): ControllerData => {
  if (!id) throw new Error("Missing argument (id).");

  // Setup page waiter promise
  let resolve: ((value?: unknown) => void) | undefined;
  const promise = new Promise((r) => {
    resolve = r;
  });

  // Setup reactive page object
  const page = shallowReactive({
    __status: "pending",
    isReady: false,
    isReadyPromise: () => promise,
  });

  (async () => {
    const data = await fetcher(id);

    if (!data) {
      page.__status = "error";
      return;
    }

    // Append page data to reactive page object
    Object.assign(page, data);

    page.__status = "resolved";
    page.isReady = true;
    resolve?.();
  })();

  return readonly(page);
};
