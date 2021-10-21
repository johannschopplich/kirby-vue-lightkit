import type { App } from "vue";
import type { RouteRecordRaw } from "vue-router";

export interface UserModuleContext {
  app: App;
  routes: RouteRecordRaw[];
}

export type UserModule = (ctx: UserModuleContext) => void;
