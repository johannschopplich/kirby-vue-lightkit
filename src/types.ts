import type { App } from "vue";
import type { RouteRecordRaw } from "vue-router";

export interface UserModuleContext {
  app: App<Element>;
  routes: RouteRecordRaw[];
}

export type UserModule = (ctx: UserModuleContext) => void | Promise<void>;
