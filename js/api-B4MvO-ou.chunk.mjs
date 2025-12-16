const appName = "extended_activity";
const appVersion = "5.0.0-dev.0";
import { l as logger } from "./logger-27ZxKlei.chunk.mjs";
function registerGlobalAPI() {
  window.OCA = window.OCA ?? {};
  window.OCA.Activity = {
    ...window.OCA.Activity,
    __sidebar_actions: window.OCA.Activity?.__sidebar_actions ?? [],
    __sidebar_factories: window.OCA.Activity?.__sidebar_factories ?? [],
    __sidebar_filters: window.OCA.Activity?.__sidebar_filters ?? [],
    registerSidebarAction(action) {
      window.OCA.Activity.__sidebar_actions.push(action);
      logger.debug("Registered new sidebar action");
    },
    registerSidebarEntries(factory) {
      window.OCA.Activity.__sidebar_factories.push(factory);
      logger.debug("Registered new sidebar actions factory");
    },
    registerSidebarFilter(filter) {
      window.OCA.Activity.__sidebar_filters.push(filter);
    }
  };
  logger.info("Activity API registered");
}
function getSidebarActions() {
  return window.OCA?.Activity?.__sidebar_actions ?? [];
}
async function getAdditionalEntries(options) {
  if (window.OCA?.Activity?.__sidebar_factories === void 0) {
    return [];
  }
  const allPromises = window.OCA.Activity.__sidebar_factories.map(async (factory) => await factory(options));
  return (await Promise.all(allPromises)).flat();
}
function getActivityFilters() {
  return window.OCA?.Activity?.__sidebar_filters ?? [];
}
export {
  getAdditionalEntries as a,
  getSidebarActions as b,
  getActivityFilters as g,
  registerGlobalAPI as r
};
//# sourceMappingURL=api-B4MvO-ou.chunk.mjs.map
