const appName = "extended_activity";
const appVersion = "5.0.0-dev.0";
import { H as translate, b as resolveComponent, d as createBlock, o as openBlock, h as withCtx, g as createVNode, i as createTextVNode, t as toDisplayString, R as createApp } from "./translation-CD_FiYBO-CK2BqXfP.chunk.mjs";
import { m as mapActions, a as mapState, N as NcSettingsSection, A as ActivityGrid, s as store } from "./settings-store-BxL_X4mQ.chunk.mjs";
import { _ as _export_sfc, a as NcCheckboxRadioSwitch } from "./NcCheckboxRadioSwitch-Ca1ouh22-BmLj0R_Y.chunk.mjs";
import "./_commonjsHelpers-s2JqeXRS.chunk.mjs";
import "./index-BJ7ydZxs.chunk.mjs";
import "./index-KfUaQuGs.chunk.mjs";
import "./index-_4HphU9w-BvgcUyyz.chunk.mjs";
import "./logger-27ZxKlei.chunk.mjs";
const _sfc_main$1 = {
  name: "AdminSettings",
  components: {
    NcCheckboxRadioSwitch,
    NcSettingsSection
  },
  computed: {
    ...mapState({
      emailEnabled: "emailEnabled"
    }),
    settingDescription() {
      if (this.emailEnabled) {
        return translate("activity", "Choose for which activities you want to get an email or push notification.");
      } else {
        return translate("activity", "Choose for which activities you want to get a push notification.");
      }
    }
  },
  mounted() {
    this.setEndpoint({ endpoint: "/apps/extended_activity/settings/admin" });
  },
  methods: {
    ...mapActions([
      "setEndpoint",
      "toggleEmailEnabled"
    ]),
    t: translate
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NcCheckboxRadioSwitch = resolveComponent("NcCheckboxRadioSwitch");
  const _component_NcSettingsSection = resolveComponent("NcSettingsSection");
  return openBlock(), createBlock(_component_NcSettingsSection, {
    name: $options.t("activity", "Notification")
  }, {
    default: withCtx(() => [
      createVNode(_component_NcCheckboxRadioSwitch, {
        type: "checkbox",
        modelValue: _ctx.emailEnabled,
        "onUpdate:modelValue": [
          _cache[0] || (_cache[0] = ($event) => _ctx.emailEnabled = $event),
          _cache[1] || (_cache[1] = ($event) => _ctx.toggleEmailEnabled({ emailEnabled: $event }))
        ]
      }, {
        default: withCtx(() => [
          createTextVNode(
            toDisplayString($options.t("activity", "Enable notification emails")),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["name"]);
}
const AdminSettings = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/var/www/html/custom_apps/extended_activity/src/views/AdminSettings.vue"]]);
const _sfc_main = {
  name: "DefaultActivitySettings",
  components: {
    ActivityGrid,
    NcSettingsSection
  },
  mounted() {
    this.setEndpoint({ endpoint: "/apps/extended_activity/settings/admin" });
  },
  methods: {
    ...mapActions(["setEndpoint"]),
    t: translate
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ActivityGrid = resolveComponent("ActivityGrid");
  const _component_NcSettingsSection = resolveComponent("NcSettingsSection");
  return openBlock(), createBlock(_component_NcSettingsSection, {
    name: $options.t("activity", "Default settings"),
    description: $options.t("activity", "Configure the default notification settings for new accounts.")
  }, {
    default: withCtx(() => [
      createVNode(_component_ActivityGrid)
    ]),
    _: 1
    /* STABLE */
  }, 8, ["name", "description"]);
}
const DefaultActivitySettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/var/www/html/custom_apps/extended_activity/src/views/DefaultActivitySettings.vue"]]);
const adminSettingApp = createApp(AdminSettings);
adminSettingApp.use(store);
adminSettingApp.mount("#activity-admin-settings");
const defaultSettingApp = createApp(DefaultActivitySettings);
defaultSettingApp.use(store);
defaultSettingApp.mount("#activity-default-settings");
//# sourceMappingURL=extended_activity-adminSettings.mjs.map
