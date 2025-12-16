(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode("/**\n * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/**\n * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-744c7161] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.checkbox-content[data-v-744c7161] {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  gap: var(--default-grid-baseline);\n  user-select: none;\n  min-height: var(--default-clickable-area);\n  border-radius: var(--checkbox-radio-switch--border-radius);\n  padding: var(--default-grid-baseline) calc((var(--default-clickable-area) - var(--icon-height)) / 2);\n  width: 100%;\n  max-width: fit-content;\n}\n.checkbox-content__text[data-v-744c7161] {\n  flex: 1 0;\n}\n.checkbox-content__text[data-v-744c7161]:empty {\n  display: none;\n}\n.checkbox-content__icon[data-v-744c7161] > * {\n  width: var(--icon-size);\n  height: var(--icon-size);\n  color: var(--color-primary-element);\n}\n.checkbox-content--button-variant .checkbox-content__icon[data-v-744c7161]:not(.checkbox-content__icon--checked) > * {\n  color: var(--color-primary-element);\n}\n.checkbox-content--button-variant .checkbox-content__icon--checked[data-v-744c7161] > * {\n  color: var(--color-primary-element-text);\n}\n.checkbox-content--has-text[data-v-744c7161] {\n  padding-inline-end: calc((var(--default-clickable-area) - 16px) / 2);\n}\n.checkbox-content[data-v-744c7161], .checkbox-content[data-v-744c7161] * {\n  cursor: pointer;\n  flex-shrink: 0;\n}/**\n * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/**\n * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-684a6614] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.checkbox-radio-switch[data-v-684a6614] {\n  --icon-size: var(--a72d0c16);\n  --icon-height: var(--24ed7e1b);\n  --checkbox-radio-switch--border-radius: var(--border-radius-element, calc(var(--default-clickable-area) / 2));\n  --checkbox-radio-switch--border-radius-outer: calc(var(--checkbox-radio-switch--border-radius) + 2px);\n  display: flex;\n  align-items: center;\n  color: var(--color-main-text);\n  background-color: transparent;\n  font-size: var(--default-font-size);\n  line-height: var(--default-line-height);\n  padding: 0;\n  position: relative;\n  /* Special rules for vertical button groups */\n  /* Special rules for horizontal button groups */\n}\n.checkbox-radio-switch__input[data-v-684a6614] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0 !important;\n  width: var(--icon-size);\n  height: var(--icon-size);\n}\n.checkbox-radio-switch__input:focus-visible + .checkbox-radio-switch__content[data-v-684a6614], .checkbox-radio-switch__input[data-v-684a6614]:focus-visible {\n  outline: 2px solid var(--color-main-text);\n  border-color: var(--color-main-background);\n  outline-offset: -2px;\n}\n.checkbox-radio-switch--disabled .checkbox-radio-switch__content[data-v-684a6614] {\n  opacity: 0.5;\n}\n.checkbox-radio-switch--disabled .checkbox-radio-switch__content[data-v-684a6614] .checkbox-radio-switch__icon > * {\n  color: var(--color-main-text);\n}\n.checkbox-radio-switch--disabled .checkbox-radio-switch__content.checkbox-content[data-v-684a6614], .checkbox-radio-switch--disabled .checkbox-radio-switch__content.checkbox-content[data-v-684a6614] *:not(a) {\n  cursor: default !important;\n}\n.checkbox-radio-switch:not(.checkbox-radio-switch--disabled, .checkbox-radio-switch--checked):focus-within .checkbox-radio-switch__content[data-v-684a6614], .checkbox-radio-switch:not(.checkbox-radio-switch--disabled, .checkbox-radio-switch--checked) .checkbox-radio-switch__content[data-v-684a6614]:hover {\n  background-color: var(--color-background-hover);\n}\n.checkbox-radio-switch--checked:not(.checkbox-radio-switch--disabled):focus-within .checkbox-radio-switch__content[data-v-684a6614], .checkbox-radio-switch--checked:not(.checkbox-radio-switch--disabled) .checkbox-radio-switch__content[data-v-684a6614]:hover {\n  background-color: var(--color-primary-element-hover);\n}\n.checkbox-radio-switch--checked:not(.checkbox-radio-switch--button-variant):not(.checkbox-radio-switch--disabled):focus-within .checkbox-radio-switch__content[data-v-684a6614], .checkbox-radio-switch--checked:not(.checkbox-radio-switch--button-variant):not(.checkbox-radio-switch--disabled) .checkbox-radio-switch__content[data-v-684a6614]:hover {\n  background-color: var(--color-primary-element-light-hover);\n}\n.checkbox-radio-switch-switch[data-v-684a6614]:not(.checkbox-radio-switch--checked) .checkbox-radio-switch__icon > * {\n  color: var(--color-text-maxcontrast);\n}\n.checkbox-radio-switch-switch.checkbox-radio-switch--disabled.checkbox-radio-switch--checked[data-v-684a6614] .checkbox-radio-switch__icon > * {\n  color: var(--color-primary-element-light);\n}\n.checkbox-radio-switch--button-variant.checkbox-radio-switch[data-v-684a6614] {\n  background-color: var(--color-main-background);\n  border: 2px solid var(--color-border-maxcontrast);\n  overflow: hidden;\n}\n.checkbox-radio-switch--button-variant.checkbox-radio-switch--checked[data-v-684a6614] {\n  font-weight: bold;\n}\n.checkbox-radio-switch--button-variant.checkbox-radio-switch--checked .checkbox-radio-switch__content[data-v-684a6614] {\n  background-color: var(--color-primary-element);\n  color: var(--color-primary-element-text);\n}\n.checkbox-radio-switch--button-variant[data-v-684a6614] .checkbox-radio-switch__text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n}\n.checkbox-radio-switch--button-variant[data-v-684a6614]:not(.checkbox-radio-switch--checked) .checkbox-radio-switch__icon > * {\n  color: var(--color-main-text);\n}\n.checkbox-radio-switch--button-variant[data-v-684a6614] .checkbox-radio-switch__icon:empty {\n  display: none;\n}\n.checkbox-radio-switch--button-variant[data-v-684a6614]:not(.checkbox-radio-switch--button-variant-v-grouped):not(.checkbox-radio-switch--button-variant-h-grouped), .checkbox-radio-switch--button-variant .checkbox-radio-switch__content[data-v-684a6614] {\n  border-radius: var(--checkbox-radio-switch--border-radius);\n}\n.checkbox-radio-switch--button-variant-v-grouped .checkbox-radio-switch__content[data-v-684a6614] {\n  flex-basis: 100%;\n  max-width: unset;\n}\n.checkbox-radio-switch--button-variant-v-grouped[data-v-684a6614]:first-of-type {\n  border-start-start-radius: var(--checkbox-radio-switch--border-radius-outer);\n  border-start-end-radius: var(--checkbox-radio-switch--border-radius-outer);\n}\n.checkbox-radio-switch--button-variant-v-grouped[data-v-684a6614]:last-of-type {\n  border-end-start-radius: var(--checkbox-radio-switch--border-radius-outer);\n  border-end-end-radius: var(--checkbox-radio-switch--border-radius-outer);\n}\n.checkbox-radio-switch--button-variant-v-grouped[data-v-684a6614]:not(:last-of-type) {\n  border-bottom: 0 !important;\n}\n.checkbox-radio-switch--button-variant-v-grouped:not(:last-of-type) .checkbox-radio-switch__content[data-v-684a6614] {\n  margin-bottom: 2px;\n}\n.checkbox-radio-switch--button-variant-v-grouped[data-v-684a6614]:not(:first-of-type) {\n  border-top: 0 !important;\n}\n.checkbox-radio-switch--button-variant-h-grouped[data-v-684a6614]:first-of-type {\n  border-start-start-radius: var(--checkbox-radio-switch--border-radius-outer);\n  border-end-start-radius: var(--checkbox-radio-switch--border-radius-outer);\n}\n.checkbox-radio-switch--button-variant-h-grouped[data-v-684a6614]:last-of-type {\n  border-start-end-radius: var(--checkbox-radio-switch--border-radius-outer);\n  border-end-end-radius: var(--checkbox-radio-switch--border-radius-outer);\n}\n.checkbox-radio-switch--button-variant-h-grouped[data-v-684a6614]:not(:last-of-type) {\n  border-inline-end: 0 !important;\n}\n.checkbox-radio-switch--button-variant-h-grouped:not(:last-of-type) .checkbox-radio-switch__content[data-v-684a6614] {\n  margin-inline-end: 2px;\n}\n.checkbox-radio-switch--button-variant-h-grouped[data-v-684a6614]:not(:first-of-type) {\n  border-inline-start: 0 !important;\n}\n.checkbox-radio-switch--button-variant-h-grouped[data-v-684a6614] .checkbox-radio-switch__text {\n  text-align: center;\n  display: flex;\n  align-items: center;\n}\n.checkbox-radio-switch--button-variant-h-grouped .checkbox-radio-switch__content[data-v-684a6614] {\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  margin: 0;\n  gap: 0;\n}"));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const appName = "extended_activity";
const appVersion = "5.0.0-dev.0";
import { c as createElementBlock, o as openBlock, f as createBaseVNode, l as createCommentVNode, t as toDisplayString, b as resolveComponent, d as createBlock, h as withCtx, g as createVNode, m as mergeProps, a2 as toHandlers, Q as createSlots, e as renderSlot, z as resolveDynamicComponent, n as normalizeClass, W as useCssVars } from "./translation-CD_FiYBO-CK2BqXfP.chunk.mjs";
import { _ as _export_sfc$1, r as register, a9 as n, t, o as createElementId } from "./index-BJ7ydZxs.chunk.mjs";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$9 = {
  name: "NcLoadingIcon",
  props: {
    /**
     * Specify the size of the loading icon.
     */
    size: {
      type: Number,
      default: 20
    },
    /**
     * The appearance of the loading icon.
     * 'auto' adjusts to the Nextcloud color scheme,
     * 'light' and 'dark' are static.
     */
    appearance: {
      type: String,
      validator(value) {
        return ["auto", "light", "dark"].includes(value);
      },
      default: "auto"
    },
    /**
     * Specify what is loading.
     */
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    colors() {
      const colors = ["#777", "#CCC"];
      if (this.appearance === "light") {
        return colors;
      } else if (this.appearance === "dark") {
        return colors.reverse();
      }
      return ["var(--color-loading-light)", "var(--color-loading-dark)"];
    }
  }
};
const _hoisted_1$8 = ["aria-label"];
const _hoisted_2$7 = ["width", "height"];
const _hoisted_3$7 = ["fill"];
const _hoisted_4$7 = ["fill"];
const _hoisted_5 = { key: 0 };
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    "aria-label": $props.name,
    role: "img",
    class: "material-design-icon loading-icon"
  }, [
    (openBlock(), createElementBlock("svg", {
      width: $props.size,
      height: $props.size,
      viewBox: "0 0 24 24"
    }, [
      createBaseVNode("path", {
        fill: $options.colors[0],
        d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
      }, null, 8, _hoisted_3$7),
      createBaseVNode("path", {
        fill: $options.colors[1],
        d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
      }, [
        $props.name ? (openBlock(), createElementBlock("title", _hoisted_5, toDisplayString($props.name), 1)) : createCommentVNode("", true)
      ], 8, _hoisted_4$7)
    ], 8, _hoisted_2$7))
  ], 8, _hoisted_1$8);
}
const NcLoadingIcon = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-551209a3"]]);
const _sfc_main$8 = {
  name: "CheckboxBlankOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
const _hoisted_1$7 = ["aria-hidden", "aria-label"];
const _hoisted_2$6 = ["fill", "width", "height"];
const _hoisted_3$6 = { d: "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" };
const _hoisted_4$6 = { key: 0 };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon checkbox-blank-outline-icon",
    role: "img",
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
  }), [
    (openBlock(), createElementBlock("svg", {
      fill: $props.fillColor,
      class: "material-design-icon__svg",
      width: $props.size,
      height: $props.size,
      viewBox: "0 0 24 24"
    }, [
      createBaseVNode("path", _hoisted_3$6, [
        $props.title ? (openBlock(), createElementBlock("title", _hoisted_4$6, toDisplayString($props.title), 1)) : createCommentVNode("", true)
      ])
    ], 8, _hoisted_2$6))
  ], 16, _hoisted_1$7);
}
const CheckboxBlankOutline = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["render", _sfc_render$8]]);
const _sfc_main$7 = {
  name: "MinusBoxIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
const _hoisted_1$6 = ["aria-hidden", "aria-label"];
const _hoisted_2$5 = ["fill", "width", "height"];
const _hoisted_3$5 = { d: "M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" };
const _hoisted_4$5 = { key: 0 };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon minus-box-icon",
    role: "img",
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
  }), [
    (openBlock(), createElementBlock("svg", {
      fill: $props.fillColor,
      class: "material-design-icon__svg",
      width: $props.size,
      height: $props.size,
      viewBox: "0 0 24 24"
    }, [
      createBaseVNode("path", _hoisted_3$5, [
        $props.title ? (openBlock(), createElementBlock("title", _hoisted_4$5, toDisplayString($props.title), 1)) : createCommentVNode("", true)
      ])
    ], 8, _hoisted_2$5))
  ], 16, _hoisted_1$6);
}
const MinusBox = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["render", _sfc_render$7]]);
const _sfc_main$6 = {
  name: "CheckboxMarkedIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
const _hoisted_1$5 = ["aria-hidden", "aria-label"];
const _hoisted_2$4 = ["fill", "width", "height"];
const _hoisted_3$4 = { d: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" };
const _hoisted_4$4 = { key: 0 };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon checkbox-marked-icon",
    role: "img",
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
  }), [
    (openBlock(), createElementBlock("svg", {
      fill: $props.fillColor,
      class: "material-design-icon__svg",
      width: $props.size,
      height: $props.size,
      viewBox: "0 0 24 24"
    }, [
      createBaseVNode("path", _hoisted_3$4, [
        $props.title ? (openBlock(), createElementBlock("title", _hoisted_4$4, toDisplayString($props.title), 1)) : createCommentVNode("", true)
      ])
    ], 8, _hoisted_2$4))
  ], 16, _hoisted_1$5);
}
const CheckboxMarked = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["render", _sfc_render$6]]);
const _sfc_main$5 = {
  name: "RadioboxMarkedIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
const _hoisted_1$4 = ["aria-hidden", "aria-label"];
const _hoisted_2$3 = ["fill", "width", "height"];
const _hoisted_3$3 = { d: "M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z" };
const _hoisted_4$3 = { key: 0 };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon radiobox-marked-icon",
    role: "img",
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
  }), [
    (openBlock(), createElementBlock("svg", {
      fill: $props.fillColor,
      class: "material-design-icon__svg",
      width: $props.size,
      height: $props.size,
      viewBox: "0 0 24 24"
    }, [
      createBaseVNode("path", _hoisted_3$3, [
        $props.title ? (openBlock(), createElementBlock("title", _hoisted_4$3, toDisplayString($props.title), 1)) : createCommentVNode("", true)
      ])
    ], 8, _hoisted_2$3))
  ], 16, _hoisted_1$4);
}
const RadioboxMarked = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = {
  name: "RadioboxBlankIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
const _hoisted_1$3 = ["aria-hidden", "aria-label"];
const _hoisted_2$2 = ["fill", "width", "height"];
const _hoisted_3$2 = { d: "M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" };
const _hoisted_4$2 = { key: 0 };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon radiobox-blank-icon",
    role: "img",
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
  }), [
    (openBlock(), createElementBlock("svg", {
      fill: $props.fillColor,
      class: "material-design-icon__svg",
      width: $props.size,
      height: $props.size,
      viewBox: "0 0 24 24"
    }, [
      createBaseVNode("path", _hoisted_3$2, [
        $props.title ? (openBlock(), createElementBlock("title", _hoisted_4$2, toDisplayString($props.title), 1)) : createCommentVNode("", true)
      ])
    ], 8, _hoisted_2$2))
  ], 16, _hoisted_1$3);
}
const RadioboxBlank = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = {
  name: "ToggleSwitchOffIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
const _hoisted_1$2 = ["aria-hidden", "aria-label"];
const _hoisted_2$1 = ["fill", "width", "height"];
const _hoisted_3$1 = { d: "M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M7,15A3,3 0 0,1 4,12A3,3 0 0,1 7,9A3,3 0 0,1 10,12A3,3 0 0,1 7,15Z" };
const _hoisted_4$1 = { key: 0 };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon toggle-switch-off-icon",
    role: "img",
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
  }), [
    (openBlock(), createElementBlock("svg", {
      fill: $props.fillColor,
      class: "material-design-icon__svg",
      width: $props.size,
      height: $props.size,
      viewBox: "0 0 24 24"
    }, [
      createBaseVNode("path", _hoisted_3$1, [
        $props.title ? (openBlock(), createElementBlock("title", _hoisted_4$1, toDisplayString($props.title), 1)) : createCommentVNode("", true)
      ])
    ], 8, _hoisted_2$1))
  ], 16, _hoisted_1$2);
}
const ToggleSwitchOff = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {
  name: "ToggleSwitchIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
const _hoisted_1$1 = ["aria-hidden", "aria-label"];
const _hoisted_2 = ["fill", "width", "height"];
const _hoisted_3 = { d: "M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M17,15A3,3 0 0,1 14,12A3,3 0 0,1 17,9A3,3 0 0,1 20,12A3,3 0 0,1 17,15Z" };
const _hoisted_4 = { key: 0 };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon toggle-switch-icon",
    role: "img",
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
  }), [
    (openBlock(), createElementBlock("svg", {
      fill: $props.fillColor,
      class: "material-design-icon__svg",
      width: $props.size,
      height: $props.size,
      viewBox: "0 0 24 24"
    }, [
      createBaseVNode("path", _hoisted_3, [
        $props.title ? (openBlock(), createElementBlock("title", _hoisted_4, toDisplayString($props.title), 1)) : createCommentVNode("", true)
      ])
    ], 8, _hoisted_2))
  ], 16, _hoisted_1$1);
}
const ToggleSwitch = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["render", _sfc_render$2]]);
const TYPE_CHECKBOX = "checkbox";
const TYPE_RADIO = "radio";
const TYPE_SWITCH = "switch";
const TYPE_BUTTON = "button";
const _sfc_main$1 = {
  name: "NcCheckboxContent",
  components: {
    NcLoadingIcon
  },
  props: {
    /**
     * Class for the icon element
     */
    iconClass: {
      type: [String, Object],
      default: null
    },
    /**
     * Class for the text element
     */
    textClass: {
      type: [String, Object],
      default: null
    },
    /**
     * Type of the input. checkbox, radio, switch, or button.
     *
     * Only use button when used in a `tablist` container and the
     * `tab` role is set.
     *
     * @type {'checkbox'|'radio'|'switch'|'button'}
     */
    type: {
      type: String,
      default: "checkbox",
      validator: (type) => [
        TYPE_CHECKBOX,
        TYPE_RADIO,
        TYPE_SWITCH,
        TYPE_BUTTON
      ].includes(type)
    },
    /**
     * Toggle the alternative button style
     */
    buttonVariant: {
      type: Boolean,
      default: false
    },
    /**
     * True if the entry is checked
     */
    isChecked: {
      type: Boolean,
      default: false
    },
    /**
     * Indeterminate state
     */
    indeterminate: {
      type: Boolean,
      default: false
    },
    /**
     * Loading state
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * Icon size
     */
    iconSize: {
      type: Number,
      default: 24
    }
  },
  computed: {
    isButtonType() {
      return this.type === TYPE_BUTTON;
    },
    /**
     * Returns the proper Material icon depending on the select case
     *
     * @return {object}
     */
    checkboxRadioIconElement() {
      if (this.type === TYPE_RADIO) {
        if (this.isChecked) {
          return RadioboxMarked;
        }
        return RadioboxBlank;
      }
      if (this.type === TYPE_SWITCH) {
        if (this.isChecked) {
          return ToggleSwitch;
        }
        return ToggleSwitchOff;
      }
      if (this.indeterminate) {
        return MinusBox;
      }
      if (this.isChecked) {
        return CheckboxMarked;
      }
      return CheckboxBlankOutline;
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NcLoadingIcon = resolveComponent("NcLoadingIcon");
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(["checkbox-content", {
      ["checkbox-content-" + $props.type]: true,
      "checkbox-content--button-variant": $props.buttonVariant,
      "checkbox-content--has-text": !!_ctx.$slots.default
    }])
  }, [
    createBaseVNode("span", {
      class: normalizeClass({
        "checkbox-content__icon": true,
        "checkbox-content__icon--checked": $props.isChecked,
        [$props.iconClass]: true
      }),
      "aria-hidden": true,
      inert: ""
    }, [
      renderSlot(_ctx.$slots, "icon", {
        checked: $props.isChecked,
        loading: $props.loading
      }, () => [
        $props.loading ? (openBlock(), createBlock(_component_NcLoadingIcon, { key: 0 })) : !$props.buttonVariant ? (openBlock(), createBlock(resolveDynamicComponent($options.checkboxRadioIconElement), {
          key: 1,
          size: $props.iconSize
        }, null, 8, ["size"])) : createCommentVNode("", true)
      ], true)
    ], 2),
    _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(["checkbox-content__text", $props.textClass])
    }, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 2)) : createCommentVNode("", true)
  ], 2);
}
const NcCheckboxContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-744c7161"]]);
register();
const _sfc_main = {
  name: "NcCheckboxRadioSwitch",
  components: {
    NcCheckboxContent
  },
  // We need to pass attributes to the input element
  inheritAttrs: false,
  props: {
    /**
     * Unique id attribute of the input
     */
    id: {
      type: String,
      default: () => "checkbox-radio-switch-" + createElementId(),
      validator: (id) => id.trim() !== ""
    },
    /**
     * Unique id attribute of the wrapper element
     */
    wrapperId: {
      type: String,
      default: null
    },
    /**
     * Input name. Required for radio, optional for checkbox, and ignored
     * for button.
     */
    name: {
      type: String,
      default: null
    },
    /**
     * Required if no text is set.
     * The aria-label is forwarded to the input or button.
     */
    ariaLabel: {
      type: String,
      default: ""
    },
    /**
     * Type of the input. checkbox, radio, switch, or button.
     *
     * Only use button when used in a `tablist` container and the
     * `tab` role is set.
     *
     * @type {'checkbox'|'radio'|'switch'|'button'}
     */
    type: {
      type: String,
      default: "checkbox",
      validator: (type) => [
        TYPE_CHECKBOX,
        TYPE_RADIO,
        TYPE_SWITCH,
        TYPE_BUTTON
      ].includes(type)
    },
    /**
     * Toggle the alternative button style
     */
    buttonVariant: {
      type: Boolean,
      default: false
    },
    /**
     * Are the elements are all direct siblings?
     * If so they will be grouped horizontally or vertically
     *
     * @type {'no'|'horizontal'|'vertical'}
     */
    buttonVariantGrouped: {
      type: String,
      default: "no",
      validator: (v) => ["no", "vertical", "horizontal"].includes(v)
    },
    /**
     * Checked state. To be used with `v-model:value`
     */
    modelValue: {
      type: [Boolean, Array, String],
      default: false
    },
    /**
     * Value to be synced on check
     */
    value: {
      type: String,
      default: null
    },
    /**
     * Disabled state
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Indeterminate state
     */
    indeterminate: {
      type: Boolean,
      default: false
    },
    /**
     * Required state
     */
    required: {
      type: Boolean,
      default: false
    },
    /**
     * Loading state
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * Wrapping element tag
     *
     * When `type` is set to `button` this will be ignored
     *
     * Defaults to `span`
     */
    wrapperElement: {
      type: String,
      default: null
    },
    /**
     * The class(es) to pass to the wrapper / root element of the component
     */
    class: {
      type: [String, Array, Object],
      default: ""
    },
    /**
     * The style to pass to the wrapper / root element of the component
     */
    style: {
      type: [String, Array, Object],
      default: ""
    }
  },
  emits: ["update:modelValue"],
  computed: {
    isButtonType() {
      return this.type === TYPE_BUTTON;
    },
    computedWrapperElement() {
      if (this.isButtonType) {
        return "button";
      }
      if (this.wrapperElement !== null) {
        return this.wrapperElement;
      }
      return "span";
    },
    listeners() {
      if (this.isButtonType) {
        return {
          click: this.onToggle
        };
      }
      return {
        change: this.onToggle
      };
    },
    iconSize() {
      return this.type === TYPE_SWITCH ? 36 : 20;
    },
    cssIconSize() {
      return this.iconSize + "px";
    },
    cssIconHeight() {
      return this.type === TYPE_SWITCH ? "16px" : this.cssIconSize;
    },
    /**
     * Return the input type.
     * Switch is not an official type
     *
     * @return {string}
     */
    inputType() {
      const nativeTypes = [
        TYPE_CHECKBOX,
        TYPE_RADIO,
        TYPE_BUTTON
      ];
      if (nativeTypes.includes(this.type)) {
        return this.type;
      }
      return TYPE_CHECKBOX;
    },
    /**
     * Check if that entry is checked
     * If value is defined, we use that as the checked value
     * If not, we expect true/false in this.checked
     *
     * @return {boolean}
     */
    isChecked() {
      if (this.value !== null) {
        if (Array.isArray(this.modelValue)) {
          return [...this.modelValue].indexOf(this.value) > -1;
        }
        return this.modelValue === this.value;
      }
      return this.modelValue === true;
    },
    hasIndeterminate() {
      return [
        TYPE_CHECKBOX,
        TYPE_RADIO
      ].includes(this.inputType);
    }
  },
  mounted() {
    if (this.name && this.type === TYPE_CHECKBOX) {
      if (!Array.isArray(this.modelValue)) {
        throw new Error("When using groups of checkboxes, the updated value will be an array.");
      }
    }
    if (this.name && this.type === TYPE_SWITCH) {
      throw new Error("Switches are not made to be used for data sets. Please use checkboxes instead.");
    }
    if (typeof this.modelValue !== "boolean" && this.type === TYPE_SWITCH) {
      throw new Error("Switches can only be used with boolean as modelValue prop.");
    }
  },
  methods: {
    t,
    n,
    onToggle(event) {
      if (this.disabled || event.target.tagName.toLowerCase() === "a") {
        return;
      }
      if (this.type === TYPE_RADIO) {
        this.$emit("update:modelValue", this.value);
        return;
      }
      if (this.type === TYPE_SWITCH) {
        this.$emit("update:modelValue", !this.isChecked);
        return;
      }
      if (typeof this.modelValue === "boolean") {
        this.$emit("update:modelValue", !this.modelValue);
        return;
      }
      const values = this.getInputsSet().filter((input) => input.checked).map((input) => input.value);
      if (values.includes(this.value)) {
        this.$emit("update:modelValue", values.filter((v) => v !== this.value));
      } else {
        this.$emit("update:modelValue", [...values, this.value]);
      }
    },
    /**
     * Get the input set based on this name
     *
     * @return {Node[]}
     */
    getInputsSet() {
      return [...document.getElementsByName(this.name)];
    }
  }
};
const __injectCSSVars__ = () => {
  useCssVars((_ctx) => ({
    "a72d0c16": _ctx.cssIconSize,
    "24ed7e1b": _ctx.cssIconHeight
  }));
};
const __setup__ = _sfc_main.setup;
_sfc_main.setup = __setup__ ? (props, ctx) => {
  __injectCSSVars__();
  return __setup__(props, ctx);
} : __injectCSSVars__;
const _hoisted_1 = ["id", "aria-labelledby", "aria-label", "disabled", "type", "value", "checked", ".indeterminate", "required", "name"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NcCheckboxContent = resolveComponent("NcCheckboxContent");
  return openBlock(), createBlock(resolveDynamicComponent($options.computedWrapperElement), mergeProps({
    id: $props.wrapperId ?? ($options.isButtonType ? $props.id : null),
    "aria-label": $options.isButtonType && $props.ariaLabel ? $props.ariaLabel : void 0,
    class: ["checkbox-radio-switch", [
      _ctx.$props.class,
      {
        ["checkbox-radio-switch-" + $props.type]: $props.type,
        "checkbox-radio-switch--checked": $options.isChecked,
        "checkbox-radio-switch--disabled": $props.disabled,
        "checkbox-radio-switch--indeterminate": $options.hasIndeterminate ? $props.indeterminate : false,
        "checkbox-radio-switch--button-variant": $props.buttonVariant,
        "checkbox-radio-switch--button-variant-v-grouped": $props.buttonVariant && $props.buttonVariantGrouped === "vertical",
        "checkbox-radio-switch--button-variant-h-grouped": $props.buttonVariant && $props.buttonVariantGrouped === "horizontal",
        "button-vue": $options.isButtonType
      }
    ]],
    style: $props.style,
    type: $options.isButtonType ? "button" : null
  }, $options.isButtonType ? _ctx.$attrs : {}, toHandlers($options.isButtonType ? $options.listeners : {})), {
    default: withCtx(() => [
      !$options.isButtonType ? (openBlock(), createElementBlock("input", mergeProps({
        key: 0,
        id: $props.id,
        "aria-labelledby": !$options.isButtonType && !$props.ariaLabel ? `${$props.id}-label` : null,
        "aria-label": $props.ariaLabel || void 0,
        class: "checkbox-radio-switch__input",
        disabled: $props.disabled,
        type: $options.inputType,
        value: $props.value,
        checked: $options.isChecked,
        ".indeterminate": $options.hasIndeterminate ? $props.indeterminate : null,
        required: $props.required,
        name: $props.name
      }, _ctx.$attrs, toHandlers($options.listeners, true)), null, 48, _hoisted_1)) : createCommentVNode("", true),
      createVNode(_component_NcCheckboxContent, {
        id: !$options.isButtonType ? `${$props.id}-label` : void 0,
        class: "checkbox-radio-switch__content",
        "icon-class": "checkbox-radio-switch__icon",
        "text-class": "checkbox-radio-switch__text",
        type: $props.type,
        indeterminate: $options.hasIndeterminate ? $props.indeterminate : false,
        "button-variant": $props.buttonVariant,
        "is-checked": $options.isChecked,
        loading: $props.loading,
        "icon-size": $options.iconSize,
        onClick: $options.onToggle
      }, createSlots({
        icon: withCtx(() => [
          renderSlot(_ctx.$slots, "icon", {}, void 0, true)
        ]),
        _: 2
      }, [
        !!_ctx.$slots.default ? {
          name: "default",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["id", "type", "indeterminate", "button-variant", "is-checked", "loading", "icon-size", "onClick"])
    ]),
    _: 3
  }, 16, ["id", "aria-label", "class", "style", "type"]);
}
const NcCheckboxRadioSwitch = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-684a6614"]]);
export {
  NcLoadingIcon as N,
  _export_sfc as _,
  NcCheckboxRadioSwitch as a
};
//# sourceMappingURL=NcCheckboxRadioSwitch-Ca1ouh22-BmLj0R_Y.chunk.mjs.map
