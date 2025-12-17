const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[window.OC.filePath('extended_activity', '', 'js/ActivityTab-B1eGa9lV.chunk.mjs'),window.OC.filePath('extended_activity', '', 'js/index-BJ7ydZxs.chunk.mjs'),window.OC.filePath('extended_activity', '', 'js/translation-CD_FiYBO-CK2BqXfP.chunk.mjs'),window.OC.filePath('extended_activity', '', 'js/_commonjsHelpers-s2JqeXRS.chunk.mjs'),window.OC.filePath('extended_activity', '', 'js/index-KfUaQuGs.chunk.mjs'),window.OC.filePath('extended_activity', '', 'js/ActivityComponent-Dd9WZpZW.chunk.mjs'),window.OC.filePath('extended_activity', '', 'js/NcCheckboxRadioSwitch-Ca1ouh22-BmLj0R_Y.chunk.mjs'),window.OC.filePath('extended_activity', '', 'js/preload-helper-C0h9nzpy.chunk.mjs'),window.OC.filePath('extended_activity', '', 'js/public-BbQmCZDA.chunk.mjs'),window.OC.filePath('extended_activity', '', 'js/logger-27ZxKlei.chunk.mjs'),window.OC.filePath('extended_activity', '', 'js/api-B4MvO-ou.chunk.mjs')])))=>i.map(i=>d[i]);
const appName = "extended_activity";
const appVersion = "5.0.0-dev.0";
import { _ as __vitePreload } from "./preload-helper-C0h9nzpy.chunk.mjs";
import { H as translate, R as createApp } from "./translation-CD_FiYBO-CK2BqXfP.chunk.mjs";
import "./_commonjsHelpers-s2JqeXRS.chunk.mjs";
const lightningBoltSVG = '<svg xmlns="http://www.w3.org/2000/svg" id="mdi-lightning-bolt" viewBox="0 0 24 24"><path d="M11 15H6L13 1V9H18L11 23V15Z" /></svg>';
let LazyActivityTab = null;
let activityTabApp = null;
let activityTabInstance = null;
const activityTab = new OCA.Files.Sidebar.Tab({
  id: "extended_activity",
  name: translate("activity", "Activity"),
  iconSvg: lightningBoltSVG,
  async mount(el, fileInfo) {
    if (LazyActivityTab === null) {
      const { default: ActivityTab } = await __vitePreload(async () => {
        const { default: ActivityTab2 } = await import("./ActivityTab-B1eGa9lV.chunk.mjs");
        return { default: ActivityTab2 };
      }, true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0, import.meta.url);
      LazyActivityTab = ActivityTab;
    }
    if (activityTabApp) {
      activityTabApp.unmount();
    }
    activityTabApp = createApp(LazyActivityTab);
    activityTabInstance = activityTabApp.mount(el);
    activityTabInstance.update(fileInfo);
  },
  update(fileInfo) {
    activityTabInstance.update(fileInfo);
  },
  destroy() {
    activityTabApp?.unmount();
    activityTabApp = null;
  }
});
window.addEventListener("DOMContentLoaded", async function() {
  if (OCA.Files && OCA.Files.Sidebar) {
    OCA.Files.Sidebar.registerTab(activityTab);
    const { default: ActivityTab } = await __vitePreload(async () => {
      const { default: ActivityTab2 } = await import("./ActivityTab-B1eGa9lV.chunk.mjs");
      return { default: ActivityTab2 };
    }, true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0, import.meta.url);
    LazyActivityTab = ActivityTab;
  }
});
export {
  lightningBoltSVG as l
};
//# sourceMappingURL=extended_activity-sidebar.mjs.map
