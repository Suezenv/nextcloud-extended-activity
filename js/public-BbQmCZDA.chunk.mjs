const appName = "extended_activity";
const appVersion = "5.0.0-dev.0";
import { l as loadState } from "./index-BJ7ydZxs.chunk.mjs";
function isPublicShare() {
  return loadState("files_sharing", "isPublic", null) ?? document.querySelector(
    'input#isPublic[type="hidden"][name="isPublic"][value="1"]'
  ) !== null;
}
function getSharingToken() {
  return loadState("files_sharing", "sharingToken", null) ?? document.querySelector('input#sharingToken[type="hidden"]')?.value ?? null;
}
export {
  getSharingToken as g,
  isPublicShare as i
};
//# sourceMappingURL=public-BbQmCZDA.chunk.mjs.map
