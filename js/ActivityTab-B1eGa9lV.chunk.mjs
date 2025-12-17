(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode(".activity[data-v-c28f4480] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n}\n.activity__actions[data-v-c28f4480] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.activity__list[data-v-c28f4480] {\n  flex-grow: 1;\n  overflow: scroll;\n}\n.activity__empty-content[data-v-c28f4480] {\n  height: 100%;\n}\n[data-v-c28f4480] .empty-content__icon span {\n  background-size: 64px;\n  width: 64px;\n  height: 64px;\n}"));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const appName = "extended_activity";
const appVersion = "5.0.0-dev.0";
import { l as lightningBoltSVG } from "./extended_activity-sidebar.mjs";
import { d as cancelableClient, v } from "./index-BJ7ydZxs.chunk.mjs";
import { k as defineComponent, r as ref, s as onMounted, B as getCurrentInstance, x as onBeforeUnmount, c as createElementBlock, o as openBlock, H as translate, F as nextTick, b as resolveComponent, l as createCommentVNode, d as createBlock, h as withCtx, g as createVNode, G as Fragment, I as renderList, f as createBaseVNode, n as normalizeClass } from "./translation-CD_FiYBO-CK2BqXfP.chunk.mjs";
import { N as NcIconSvgWrapper, c as NcEmptyContent, A as ActivityComponent, b as ActivityModel } from "./ActivityComponent-Dd9WZpZW.chunk.mjs";
import { _ as _export_sfc, N as NcLoadingIcon } from "./NcCheckboxRadioSwitch-Ca1ouh22-BmLj0R_Y.chunk.mjs";
import { g as getActivityFilters, a as getAdditionalEntries, b as getSidebarActions } from "./api-B4MvO-ou.chunk.mjs";
import { l as logger } from "./logger-27ZxKlei.chunk.mjs";
import "./preload-helper-C0h9nzpy.chunk.mjs";
import "./_commonjsHelpers-s2JqeXRS.chunk.mjs";
import "./index-KfUaQuGs.chunk.mjs";
import "./public-BbQmCZDA.chunk.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ActivitySidebarPlugin",
  props: {
    plugin: { type: Object, required: true },
    fileInfo: { type: [Object, null], required: true }
  },
  emits: ["reload-activities"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const attachTarget = ref();
    onMounted(() => props.plugin.mount(attachTarget.value, {
      context: getCurrentInstance()?.proxy,
      fileInfo: props.fileInfo,
      reload: () => emit("reload-activities")
    }));
    onBeforeUnmount(() => props.plugin.unmount());
    const __returned__ = { props, emit, attachTarget };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { ref: "attachTarget" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    _hoisted_1$1,
    null,
    512
    /* NEED_PATCH */
  );
}
const ActivitySidebarPlugin = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render$1], ["__file", "/var/www/html/custom_apps/extended_activity/src/components/ActivitySidebarPlugin.vue"]]);
const ActivityTab$1 = defineComponent({
  name: "ActivityTab",
  components: {
    ActivityComponent,
    NcEmptyContent,
    NcIconSvgWrapper,
    NcLoadingIcon,
    ActivitySidebarPlugin
  },
  expose: ["update"],
  data() {
    return {
      error: "",
      loading: true,
      fileInfo: null,
      activities: [],
      lightningBoltSVG,
      sidebarPlugins: []
    };
  },
  mounted() {
    this.sidebarPlugins = getSidebarActions();
  },
  methods: {
    /**
     * Update current fileInfo and fetch new activities
     *
     * @param fileInfo the current file FileInfo
     */
    async update(fileInfo) {
      this.sidebarPlugins = [];
      const sidebarPlugins = getSidebarActions();
      if (sidebarPlugins.length > 0) {
        nextTick(() => {
          this.sidebarPlugins = sidebarPlugins;
        });
      }
      this.fileInfo = fileInfo;
      this.resetState();
      await this.getActivities();
    },
    /**
     * Get the existing activities
     */
    async getActivities() {
      try {
        this.loading = true;
        const activities = await this.processActivities(await this.loadRealActivities());
        const otherEntries = await getAdditionalEntries({ fileInfo: this.fileInfo });
        this.activities = [...activities, ...otherEntries].sort((a, b) => b.timestamp - a.timestamp);
      } catch (error) {
        this.error = translate("activity", "Unable to load the activity list");
        logger.error("Error loading the activity list", { error });
      } finally {
        this.loading = false;
      }
    },
    /**
     * Reset the current view to its default state
     */
    resetState() {
      this.loading = true;
      this.error = "";
      this.activities = [];
    },
    /**
     * Load activites from API
     */
    async loadRealActivities() {
      try {
        const { data } = await cancelableClient.get(
          v("apps/extended_activity/api/v2/activity/filter"),
          {
            params: {
              format: "json",
              object_type: "files",
              object_id: this.fileInfo.id
            }
          }
        );
        return data.ocs.data;
      } catch (error) {
        if (error.response !== void 0 && error.response.status === 304) {
          return [];
        }
        throw error;
      }
    },
    /**
     * Process the API response activities and apply filter
     *
     * @param activities the activites
     */
    processActivities(activities) {
      activities = activities.map((activity) => new ActivityModel(activity));
      logger.debug(`Processed ${activities.length} activity(ies)`, { activities, fileInfo: this.fileInfo });
      const filters = getActivityFilters();
      return activities.filter((activity) => !filters || filters.every((filter) => filter(activity)));
    },
    t: translate
  }
});
const _hoisted_1 = {
  key: 0,
  class: "extended_activity__actions"
};
const _hoisted_2 = {
  key: 3,
  class: "extended_activity__list"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NcIconSvgWrapper = resolveComponent("NcIconSvgWrapper");
  const _component_NcEmptyContent = resolveComponent("NcEmptyContent");
  const _component_ActivitySidebarPlugin = resolveComponent("ActivitySidebarPlugin");
  const _component_NcLoadingIcon = resolveComponent("NcLoadingIcon");
  const _component_ActivityComponent = resolveComponent("ActivityComponent");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass([{ "icon-loading": _ctx.loading }, "extended_activity"])
    },
    [
      createCommentVNode(" error message "),
      _ctx.error || _ctx.fileInfo === null ? (openBlock(), createBlock(_component_NcEmptyContent, {
        key: 0,
        name: _ctx.error
      }, {
        icon: withCtx(() => [
          createVNode(_component_NcIconSvgWrapper, { svg: _ctx.lightningBoltSVG }, null, 8, ["svg"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["name"])) : (openBlock(), createElementBlock(
        Fragment,
        { key: 1 },
        [
          createCommentVNode(" activities actions "),
          _ctx.sidebarPlugins.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.sidebarPlugins, (plugin, index) => {
                return openBlock(), createBlock(_component_ActivitySidebarPlugin, {
                  key: index,
                  plugin,
                  "file-info": _ctx.fileInfo,
                  onReloadActivities: _cache[0] || (_cache[0] = ($event) => _ctx.getActivities())
                }, null, 8, ["plugin", "file-info"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : createCommentVNode("v-if", true),
          createCommentVNode(" activities content "),
          _ctx.loading ? (openBlock(), createBlock(_component_NcEmptyContent, {
            key: 1,
            class: "extended_activity__empty-content",
            name: _ctx.t("activity", "Loading activities")
          }, {
            icon: withCtx(() => [
              createVNode(_component_NcLoadingIcon)
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])) : _ctx.activities.length === 0 ? (openBlock(), createBlock(_component_NcEmptyContent, {
            key: 2,
            class: "extended_activity__empty-content",
            name: _ctx.t("activity", "No activity yet")
          }, {
            icon: withCtx(() => _cache[2] || (_cache[2] = [
              createBaseVNode(
                "span",
                { class: "icon-activity" },
                null,
                -1
                /* HOISTED */
              )
            ])),
            _: 1
            /* STABLE */
          }, 8, ["name"])) : (openBlock(), createElementBlock("ul", _hoisted_2, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.activities, (activity) => {
                return openBlock(), createBlock(_component_ActivityComponent, {
                  key: activity.id,
                  activity,
                  "show-previews": false,
                  onReload: _cache[1] || (_cache[1] = ($event) => _ctx.getActivities())
                }, null, 8, ["activity"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]))
        ],
        64
        /* STABLE_FRAGMENT */
      ))
    ],
    2
    /* CLASS */
  );
}
const ActivityTab = /* @__PURE__ */ _export_sfc(ActivityTab$1, [["render", _sfc_render], ["__scopeId", "data-v-c28f4480"], ["__file", "/var/www/html/custom_apps/extended_activity/src/views/ActivityTab.vue"]]);
export {
  ActivityTab as default
};
//# sourceMappingURL=ActivityTab-B1eGa9lV.chunk.mjs.map
