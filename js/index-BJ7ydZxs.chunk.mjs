(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode('/**\n * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/**\n * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-0cc855a4] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.button-vue[data-v-0cc855a4] {\n  --button-size: var(--default-clickable-area);\n  --button-radius: var(--border-radius-element, calc(var(--button-size) / 2));\n  --button-padding-default: min(calc(var(--default-grid-baseline) + var(--button-radius)), calc(var(--default-grid-baseline) * 4));\n  --button-padding: var(--default-grid-baseline) var(--button-padding-default);\n  color: var(--color-primary-element-light-text);\n  background-color: var(--color-primary-element-light);\n  border: 0;\n  border-radius: var(--button-radius);\n  position: relative;\n  width: fit-content;\n  overflow: hidden;\n  padding-block: 0;\n  padding-inline: var(--button-padding);\n  min-height: var(--button-size);\n  min-width: var(--button-size);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition-property: color, border-color, background-color;\n  transition-duration: 0.1s;\n  transition-timing-function: linear;\n  cursor: pointer;\n  font-size: var(--default-font-size);\n  font-weight: bold;\n}\n.button-vue--size-small[data-v-0cc855a4] {\n  --button-size: var(--clickable-area-small, 24px);\n  --button-radius: var(--border-radius);\n}\n.button-vue--size-large[data-v-0cc855a4] {\n  --button-size: var(--clickable-area-large, 48px);\n}\n.button-vue[data-v-0cc855a4] *,\n.button-vue span[data-v-0cc855a4] {\n  cursor: pointer;\n}\n.button-vue[data-v-0cc855a4]:focus {\n  outline: none;\n}\n.button-vue[data-v-0cc855a4]:disabled {\n  filter: saturate(0.7);\n  opacity: 0.5;\n  cursor: default;\n}\n.button-vue[data-v-0cc855a4]:disabled * {\n  cursor: default;\n}\n.button-vue[data-v-0cc855a4]:hover:not(:disabled) {\n  background-color: var(--color-primary-element-light-hover);\n}\n.button-vue[data-v-0cc855a4]:active {\n  background-color: var(--color-primary-element-light);\n}\n.button-vue__wrapper[data-v-0cc855a4] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.button-vue--end .button-vue__wrapper[data-v-0cc855a4] {\n  justify-content: end;\n}\n.button-vue--start .button-vue__wrapper[data-v-0cc855a4] {\n  justify-content: start;\n}\n.button-vue--reverse .button-vue__wrapper[data-v-0cc855a4] {\n  flex-direction: row-reverse;\n}\n.button-vue--reverse.button-vue--icon-and-text[data-v-0cc855a4] {\n  padding-inline: var(--button-padding) var(--default-grid-baseline);\n}\n.button-vue__icon[data-v-0cc855a4] {\n  height: var(--button-size);\n  width: var(--button-size);\n  min-height: var(--button-size);\n  min-width: var(--button-size);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.button-vue__icon[data-v-0cc855a4]:empty {\n  display: none;\n}\n.button-vue--size-small .button-vue__icon[data-v-0cc855a4] > * {\n  max-height: 16px;\n  max-width: 16px;\n}\n.button-vue--size-small .button-vue__icon[data-v-0cc855a4] svg {\n  height: 16px;\n  width: 16px;\n}\n.button-vue__text[data-v-0cc855a4] {\n  font-weight: bold;\n  margin-bottom: 1px;\n  padding: 2px 0;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.button-vue__text[data-v-0cc855a4]:empty {\n  display: none;\n}\n.button-vue[data-v-0cc855a4]:has(.button-vue__text:empty) {\n  --button-padding: clamp(var(--default-grid-baseline), var(--button-radius), calc(var(--default-grid-baseline) * 4));\n  line-height: 1;\n  width: var(--button-size) !important;\n}\n.button-vue[data-v-0cc855a4]:has(.button-vue__icon:empty) {\n  --button-padding: var(--button-padding-default);\n}\n.button-vue:has(.button-vue__icon:empty) .button-vue__text[data-v-0cc855a4] {\n  padding-inline: var(--default-grid-baseline);\n}\n.button-vue--wide[data-v-0cc855a4] {\n  width: 100%;\n}\n.button-vue[data-v-0cc855a4]:focus-visible {\n  outline: 2px solid var(--color-main-text) !important;\n  box-shadow: 0 0 0 4px var(--color-main-background) !important;\n}\n.button-vue:focus-visible.button-vue--vue-tertiary-on-primary[data-v-0cc855a4] {\n  outline: 2px solid var(--color-primary-element-text);\n  border-radius: var(--border-radius-element, var(--border-radius));\n  background-color: transparent;\n}\n.button-vue--primary[data-v-0cc855a4] {\n  background-color: var(--color-primary-element);\n  color: var(--color-primary-element-text);\n}\n.button-vue--primary[data-v-0cc855a4]:hover:not(:disabled) {\n  background-color: var(--color-primary-element-hover);\n}\n.button-vue--primary[data-v-0cc855a4]:active {\n  background-color: var(--color-primary-element);\n}\n.button-vue--secondary[data-v-0cc855a4] {\n  color: var(--color-primary-element-light-text);\n  background-color: var(--color-primary-element-light);\n}\n.button-vue--secondary[data-v-0cc855a4]:hover:not(:disabled) {\n  color: var(--color-primary-element-light-text);\n  background-color: var(--color-primary-element-light-hover);\n}\n.button-vue--tertiary[data-v-0cc855a4] {\n  color: var(--color-main-text);\n  background-color: transparent;\n}\n.button-vue--tertiary[data-v-0cc855a4]:hover:not(:disabled) {\n  background-color: var(--color-background-hover);\n}\n.button-vue--tertiary-no-background[data-v-0cc855a4] {\n  color: var(--color-main-text);\n  background-color: transparent;\n}\n.button-vue--tertiary-no-background[data-v-0cc855a4]:hover:not(:disabled) {\n  background-color: transparent;\n}\n.button-vue--tertiary-on-primary[data-v-0cc855a4] {\n  color: var(--color-primary-element-text);\n  background-color: transparent;\n}\n.button-vue--tertiary-on-primary[data-v-0cc855a4]:hover:not(:disabled) {\n  background-color: transparent;\n}\n.button-vue--success[data-v-0cc855a4] {\n  background-color: var(--color-success);\n  color: white;\n}\n.button-vue--success[data-v-0cc855a4]:hover:not(:disabled) {\n  background-color: var(--color-success-hover);\n}\n.button-vue--success[data-v-0cc855a4]:active {\n  background-color: var(--color-success);\n}\n.button-vue--warning[data-v-0cc855a4] {\n  background-color: var(--color-warning);\n  color: white;\n}\n.button-vue--warning[data-v-0cc855a4]:hover:not(:disabled) {\n  background-color: var(--color-warning-hover);\n}\n.button-vue--warning[data-v-0cc855a4]:active {\n  background-color: var(--color-warning);\n}\n.button-vue--error[data-v-0cc855a4] {\n  background-color: var(--color-error);\n  color: white;\n}\n.button-vue--error[data-v-0cc855a4]:hover:not(:disabled) {\n  background-color: var(--color-error-hover);\n}\n.button-vue--error[data-v-0cc855a4]:active {\n  background-color: var(--color-error);\n}/**\n * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/**\n * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-0aa5a569] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.icon-vue[data-v-0aa5a569] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: var(--default-clickable-area);\n  min-height: var(--default-clickable-area);\n  opacity: 1;\n}\n.icon-vue--inline[data-v-0aa5a569] {\n  display: inline-flex;\n  min-width: fit-content;\n  min-height: fit-content;\n  vertical-align: text-bottom;\n}\n.icon-vue span[data-v-0aa5a569] {\n  line-height: 0;\n}\n.icon-vue[data-v-0aa5a569] svg {\n  fill: currentColor;\n  width: var(--4f0d35a8);\n  height: var(--4f0d35a8);\n  max-width: var(--4f0d35a8);\n  max-height: var(--4f0d35a8);\n}\n.icon-vue--directional[data-v-0aa5a569] svg:dir(rtl) {\n  transform: scaleX(-1);\n}/**\n * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/**\n * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-33bcf64a] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.modal-mask[data-v-33bcf64a] {\n  position: fixed;\n  z-index: 9998;\n  top: 0;\n  inset-inline-start: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  --backdrop-color: 0, 0, 0;\n  background-color: rgba(var(--backdrop-color), 0.5);\n}\n.modal-mask[data-v-33bcf64a], .modal-mask[data-v-33bcf64a] * {\n  box-sizing: border-box;\n}\n.modal-mask--opaque[data-v-33bcf64a] {\n  background-color: rgba(var(--backdrop-color), 0.92);\n}\n.modal-mask--light[data-v-33bcf64a] {\n  --backdrop-color: 255, 255, 255;\n}\n.modal-header[data-v-33bcf64a] {\n  position: absolute;\n  z-index: 10001;\n  top: 0;\n  inset-inline: 0 0;\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: var(--header-height);\n  overflow: hidden;\n  transition: opacity 250ms, visibility 250ms;\n}\n.modal-header__name[data-v-33bcf64a] {\n  overflow-x: hidden;\n  width: 100%;\n  padding: 0 calc(var(--default-clickable-area) * 3) 0 12px;\n  transition: padding ease 100ms;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: 16px;\n  margin-block: 0;\n}\n@media only screen and (min-width: 1024px) {\n.modal-header__name[data-v-33bcf64a] {\n    padding-inline-start: calc(var(--default-clickable-area) * 3);\n    text-align: center;\n}\n}\n.modal-header .icons-menu[data-v-33bcf64a] {\n  position: absolute;\n  inset-inline-end: 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.modal-header .icons-menu .header-close[data-v-33bcf64a] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: calc((var(--header-height) - var(--default-clickable-area)) / 2);\n  padding: 0;\n}\n.modal-header .icons-menu .play-pause-icons[data-v-33bcf64a] {\n  position: relative;\n  width: var(--header-height);\n  height: var(--header-height);\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n}\n.modal-header .icons-menu .play-pause-icons:hover .play-pause-icons__play[data-v-33bcf64a],\n.modal-header .icons-menu .play-pause-icons:hover .play-pause-icons__pause[data-v-33bcf64a], .modal-header .icons-menu .play-pause-icons:focus .play-pause-icons__play[data-v-33bcf64a],\n.modal-header .icons-menu .play-pause-icons:focus .play-pause-icons__pause[data-v-33bcf64a] {\n  opacity: 1;\n  border-radius: calc(var(--default-clickable-area) / 2);\n  background-color: rgba(127, 127, 127, 0.25);\n}\n.modal-header .icons-menu .play-pause-icons__play[data-v-33bcf64a], .modal-header .icons-menu .play-pause-icons__pause[data-v-33bcf64a] {\n  width: var(--default-clickable-area);\n  height: var(--default-clickable-area);\n  margin: calc((var(--header-height) - var(--default-clickable-area)) / 2);\n  cursor: pointer;\n  opacity: 0.7;\n}\n.modal-header .icons-menu[data-v-33bcf64a]  .action-item {\n  margin: calc((var(--header-height) - var(--default-clickable-area)) / 2);\n}\n.modal-header .icons-menu[data-v-33bcf64a]  .action-item--single {\n  width: var(--default-clickable-area);\n  height: var(--default-clickable-area);\n  cursor: pointer;\n  background-position: center;\n  background-size: 22px;\n}\n.modal-header .icons-menu .header-actions[data-v-33bcf64a] button:focus-visible {\n  box-shadow: none !important;\n  outline: 2px solid #fff !important;\n}\n.modal-header .icons-menu[data-v-33bcf64a] .action-item__menutoggle {\n  padding: 0;\n}\n.modal-header .icons-menu[data-v-33bcf64a] .action-item__menutoggle span, .modal-header .icons-menu[data-v-33bcf64a] .action-item__menutoggle svg {\n  width: var(--icon-size);\n  height: var(--icon-size);\n}\n.modal-wrapper[data-v-33bcf64a] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  /* Navigation buttons */\n  /* Content */\n}\n.modal-wrapper .prev[data-v-33bcf64a],\n.modal-wrapper .next[data-v-33bcf64a] {\n  z-index: 10000;\n  height: 35vh;\n  min-height: 300px;\n  position: absolute;\n  transition: opacity 250ms;\n  color: white;\n}\n.modal-wrapper .prev[data-v-33bcf64a]:focus-visible,\n.modal-wrapper .next[data-v-33bcf64a]:focus-visible {\n  box-shadow: 0 0 0 2px var(--color-primary-element-text);\n  background-color: var(--color-box-shadow);\n}\n.modal-wrapper .prev[data-v-33bcf64a] {\n  inset-inline-start: 2px;\n}\n.modal-wrapper .next[data-v-33bcf64a] {\n  inset-inline-end: 2px;\n}\n.modal-wrapper .modal-container[data-v-33bcf64a] {\n  position: relative;\n  display: flex;\n  padding: 0;\n  transition: transform 300ms ease;\n  border-radius: var(--border-radius-large);\n  background-color: var(--color-main-background);\n  color: var(--color-main-text);\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);\n}\n.modal-wrapper .modal-container__close[data-v-33bcf64a] {\n  z-index: 1;\n  position: absolute;\n  top: 4px;\n  inset-inline-end: var(--default-grid-baseline);\n}\n.modal-wrapper .modal-container__content[data-v-33bcf64a] {\n  width: 100%;\n  min-height: 52px;\n  overflow: auto;\n}\n.modal-wrapper--small > .modal-container[data-v-33bcf64a] {\n  width: 400px;\n  max-width: 90%;\n  max-height: min(90%, 100% - 2 * var(--header-height));\n}\n.modal-wrapper--normal > .modal-container[data-v-33bcf64a] {\n  max-width: 90%;\n  width: 600px;\n  max-height: min(90%, 100% - 2 * var(--header-height));\n}\n.modal-wrapper--large > .modal-container[data-v-33bcf64a] {\n  max-width: 90%;\n  width: 900px;\n  max-height: min(90%, 100% - 2 * var(--header-height));\n}\n.modal-wrapper--full > .modal-container[data-v-33bcf64a] {\n  width: 100%;\n  height: calc(100% - var(--header-height));\n  position: absolute;\n  top: var(--header-height);\n  border-radius: 0;\n}\n@media only screen and ((max-width: 512px) or (max-height: 400px)) {\n.modal-wrapper .modal-container[data-v-33bcf64a] {\n    max-width: initial;\n    width: 100%;\n    max-height: initial;\n    height: calc(100% - var(--header-height));\n    position: absolute;\n    top: var(--header-height);\n    border-radius: 0;\n}\n}\n\n/* TRANSITIONS */\n.fade-enter-active[data-v-33bcf64a],\n.fade-leave-active[data-v-33bcf64a] {\n  transition: opacity 250ms;\n}\n.fade-enter-from[data-v-33bcf64a],\n.fade-leave-to[data-v-33bcf64a] {\n  opacity: 0;\n}\n.fade-visibility-enter-from[data-v-33bcf64a],\n.fade-visibility-leave-to[data-v-33bcf64a] {\n  visibility: hidden;\n  opacity: 0;\n}\n.modal-in-enter-active[data-v-33bcf64a],\n.modal-in-leave-active[data-v-33bcf64a],\n.modal-out-enter-active[data-v-33bcf64a],\n.modal-out-leave-active[data-v-33bcf64a] {\n  transition: opacity 250ms;\n}\n.modal-in-enter-from[data-v-33bcf64a],\n.modal-in-leave-to[data-v-33bcf64a],\n.modal-out-enter-from[data-v-33bcf64a],\n.modal-out-leave-to[data-v-33bcf64a] {\n  opacity: 0;\n}\n.modal-in-enter .modal-container[data-v-33bcf64a],\n.modal-in-leave-to .modal-container[data-v-33bcf64a] {\n  transform: scale(0.9);\n}\n.modal-out-enter .modal-container[data-v-33bcf64a],\n.modal-out-leave-to .modal-container[data-v-33bcf64a] {\n  transform: scale(1.1);\n}\n.modal-mask .play-pause-icons .progress-ring[data-v-33bcf64a] {\n  position: absolute;\n  top: 0;\n  inset-inline-start: 0;\n  transform: rotate(-90deg);\n}\n.modal-mask .play-pause-icons .progress-ring .progress-ring__circle[data-v-33bcf64a] {\n  transition: 100ms stroke-dashoffset;\n  transform-origin: 50% 50%;\n  animation: progressring-33bcf64a linear var(--slideshow-duration) infinite;\n  stroke-linecap: round;\n  stroke-dashoffset: 94.2477796077;\n  stroke-dasharray: 94.2477796077;\n}\n.modal-mask .play-pause-icons--paused .icon-pause[data-v-33bcf64a] {\n  animation: breath-33bcf64a 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n}\n.modal-mask .play-pause-icons--paused .progress-ring__circle[data-v-33bcf64a] {\n  animation-play-state: paused !important;\n}\n@keyframes progressring-33bcf64a {\nfrom {\n    stroke-dashoffset: 94.2477796077;\n}\nto {\n    stroke-dashoffset: 0;\n}\n}\n@keyframes breath-33bcf64a {\n0% {\n    opacity: 1;\n}\n50% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}/**\n * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/**\n * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-d9d3fe59] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.action-items[data-v-d9d3fe59] {\n  display: flex;\n  align-items: center;\n  gap: calc((var(--default-clickable-area) - 16px) / 2 / 2);\n}\n.action-item[data-v-d9d3fe59] {\n  --open-background-color: var(--color-background-hover, $action-background-hover);\n  position: relative;\n  display: inline-block;\n}\n.action-item.action-item--primary[data-v-d9d3fe59] {\n  --open-background-color: var(--color-primary-element-hover);\n}\n.action-item.action-item--secondary[data-v-d9d3fe59] {\n  --open-background-color: var(--color-primary-element-light-hover);\n}\n.action-item.action-item--error[data-v-d9d3fe59] {\n  --open-background-color: var(--color-error-hover);\n}\n.action-item.action-item--warning[data-v-d9d3fe59] {\n  --open-background-color: var(--color-warning-hover);\n}\n.action-item.action-item--success[data-v-d9d3fe59] {\n  --open-background-color: var(--color-success-hover);\n}\n.action-item.action-item--tertiary-no-background[data-v-d9d3fe59] {\n  --open-background-color: transparent;\n}\n.action-item.action-item--open .action-item__menutoggle[data-v-d9d3fe59] {\n  background-color: var(--open-background-color);\n}\n.action-item__menutoggle__icon[data-v-d9d3fe59] {\n  width: 20px;\n  height: 20px;\n  object-fit: contain;\n}/**\n * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/**\n * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.v-popper--theme-dropdown.v-popper__popper.action-item__popper .v-popper__wrapper {\n  border-radius: var(--border-radius-large);\n}\n.v-popper--theme-dropdown.v-popper__popper.action-item__popper .v-popper__wrapper .v-popper__inner {\n  border-radius: var(--border-radius-large);\n  padding: 4px;\n  max-height: calc(100vh - var(--header-height));\n  overflow: auto;\n}/**\n * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/**\n * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.resize-observer {\n  position: absolute;\n  top: 0;\n  /* stylelint-disable-next-line csstools/use-logical */ /* upstream logic */\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  pointer-events: none;\n  display: block;\n  overflow: hidden;\n  opacity: 0;\n}\n.resize-observer object {\n  display: block;\n  position: absolute;\n  top: 0;\n  /* stylelint-disable-next-line csstools/use-logical */ /* upstream logic */\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: -1;\n}\n.v-popper--theme-dropdown, .v-popper--theme-dropdown * {\n  box-sizing: border-box;\n}\n.v-popper--theme-dropdown.v-popper__popper {\n  z-index: 100000;\n  top: 0;\n  /* stylelint-disable-next-line csstools/use-logical */ /* upstream logic */\n  left: 0;\n  display: block !important;\n}\n.v-popper--theme-dropdown.v-popper__popper .v-popper__wrapper {\n  /*\n   * In theory, "filter: drop-shadow" would look better here with arrow shadow.\n   * In fact, in results in a blurry popover in Chromium on scaling.\n   * The hypothesis is that "filter" creates a new composition layer,\n   * and with GPU acceleration requires the previous layers content to be rasterized.\n   * In combination with translate3d from floating-vue, it makes Chromium to first render and rasterize the popover\n   * and then apply scaling, which results in a blurry popover.\n   */\n  box-shadow: 0 1px 10px var(--color-box-shadow);\n  border-radius: var(--border-radius-large);\n}\n.v-popper--theme-dropdown.v-popper__popper .v-popper__inner {\n  padding: 0;\n  color: var(--color-main-text);\n  border-radius: var(--border-radius-large);\n  overflow: hidden;\n  background: var(--color-main-background);\n}\n.v-popper--theme-dropdown.v-popper__popper .v-popper__arrow-container {\n  position: absolute;\n  z-index: 1;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-color: transparent;\n  border-width: 10px;\n}\n.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-container {\n  bottom: -9px;\n  /* stylelint-disable-next-line csstools/use-logical */ /* upstream logic */\n  border-bottom-width: 0;\n  /* stylelint-disable-next-line csstools/use-logical */ /* upstream logic */\n  border-top-color: var(--color-main-background);\n}\n.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-container {\n  top: -9px;\n  /* stylelint-disable-next-line csstools/use-logical */ /* upstream logic */\n  border-top-width: 0;\n  /* stylelint-disable-next-line csstools/use-logical */ /* upstream logic */\n  border-bottom-color: var(--color-main-background);\n}\n.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-container {\n  /* stylelint-disable-next-line csstools/use-logical */ /* upstream logic */\n  left: -9px;\n  /* stylelint-disable-next-line csstools/use-logical */ /* upstream logic */\n  border-left-width: 0;\n  /* stylelint-disable-next-line csstools/use-logical */ /* upstream logic */\n  border-right-color: var(--color-main-background);\n}\n.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-container {\n  /* stylelint-disable-next-line csstools/use-logical */ /* upstream logic */\n  right: -9px;\n  /* stylelint-disable-next-line csstools/use-logical */ /* upstream logic */\n  border-right-width: 0;\n  /* stylelint-disable-next-line csstools/use-logical */ /* upstream logic */\n  border-left-color: var(--color-main-background);\n}\n.v-popper--theme-dropdown.v-popper__popper[aria-hidden=true] {\n  visibility: hidden;\n  transition: opacity var(--animation-quick), visibility var(--animation-quick);\n  opacity: 0;\n}\n.v-popper--theme-dropdown.v-popper__popper[aria-hidden=false] {\n  visibility: visible;\n  transition: opacity var(--animation-quick);\n  opacity: 1;\n}/**\n * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/**\n * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-551209a3] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.loading-icon svg[data-v-551209a3] {\n  animation: rotate var(--animation-duration, 0.8s) linear infinite;\n}'));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const appName = "extended_activity";
const appVersion = "5.0.0-dev.0";
import { $ as shallowRef, k as defineComponent, D as unref, a8 as shallowReactive, A as inject, U as reactive, p as computed, E as h$2, y as provide, r as ref, q as watch, B as getCurrentInstance, F as nextTick, a5 as watchEffect, a4 as getLanguage, a9 as getPlural, H as translate, aa as translatePlural, a7 as toRef$1, d as createBlock, o as openBlock, h as withCtx, f as createBaseVNode, e as renderSlot, m as mergeProps, z as resolveDynamicComponent, i as createTextVNode, t as toDisplayString, V as global, s as onMounted, a0 as toValue$1, ab as isRef, ac as hasInjectionContext, ad as getCurrentScope, ae as onScopeDispose, a6 as onUnmounted, a as readonly, af as customRef, c as createElementBlock, l as createCommentVNode, ag as pushScopeId, ah as popScopeId, ai as withScopeId, b as resolveComponent, g as createVNode, G as Fragment, C as normalizeStyle, K as withKeys, n as normalizeClass, M as normalizeProps, N as guardReactiveProps, aj as isRTL, J as warn$1, ak as Comment, al as Text } from "./translation-CD_FiYBO-CK2BqXfP.chunk.mjs";
import { p as process$1, b as getRequestToken, o as onRequestTokenUpdate } from "./index-KfUaQuGs.chunk.mjs";
const g$1 = (n2) => "/remote.php/" + n2, U = (n2, e) => {
  var o;
  return ((o = void 0) != null ? o : w()) + g$1(n2);
}, v = (n2, e, o) => {
  var c2;
  const i = Object.assign({
    ocsVersion: 2
  }, {}).ocsVersion === 1 ? 1 : 2;
  return ((c2 = void 0) != null ? c2 : w()) + "/ocs/v" + i + ".php" + u(n2, e);
}, u = (n2, e, o) => {
  const c2 = Object.assign({
    escape: true
  }, {}), r = function(i, s) {
    return s = s || {}, i.replace(
      /{([^{}]*)}/g,
      function(l, t5) {
        const a = s[t5];
        return c2.escape ? encodeURIComponent(typeof a == "string" || typeof a == "number" ? a.toString() : l) : typeof a == "string" || typeof a == "number" ? a.toString() : l;
      }
    );
  };
  return n2.charAt(0) !== "/" && (n2 = "/" + n2), r(n2, e || {});
}, _$1 = (n2, e, o) => {
  var c2, r, i;
  const s = Object.assign({
    noRewrite: false
  }, {}), l = (c2 = void 0) != null ? c2 : f();
  return ((i = (r = window == null ? void 0 : window.OC) == null ? void 0 : r.config) == null ? void 0 : i.modRewriteWorking) === true && !s.noRewrite ? l + u(n2, e) : l + "/index.php" + u(n2, e);
}, h$1 = (n2, e) => e.includes(".") ? d$1(n2, "img", e) : d$1(n2, "img", "".concat(e, ".svg")), d$1 = (n2, e, o) => {
  var c2, r, i;
  const s = (i = (r = (c2 = window == null ? void 0 : window.OC) == null ? void 0 : c2.coreApps) == null ? void 0 : r.includes(n2)) != null ? i : false, l = o.slice(-3) === "php";
  let t5 = f();
  return l && !s ? (t5 += "/index.php/apps/".concat(n2), t5 += "/".concat(encodeURI(e)), o !== "index.php" && (t5 += "/".concat(o))) : !l && !s ? (t5 = b(n2), t5 += "/".concat(e, "/"), t5.at(-1) !== "/" && (t5 += "/"), t5 += o) : (t5 += "/".concat(n2), t5 += "/".concat(e), t5 += "/".concat(o)), t5;
}, w = () => window.location.protocol + "//" + window.location.host + f();
function f() {
  let n2 = window._oc_webroot;
  if (typeof n2 > "u") {
    n2 = location.pathname;
    const e = n2.indexOf("/index.php/");
    if (e !== -1)
      n2 = n2.slice(0, e);
    else {
      const o = n2.indexOf("/", 1);
      n2 = n2.slice(0, o > 0 ? o : void 0);
    }
  }
  return n2;
}
function b(n2) {
  var e, o;
  return (o = ((e = window._oc_appswebroots) != null ? e : {})[n2]) != null ? o : "";
}
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : {};
}
const isProxyAvailable = typeof Proxy === "function";
const HOOK_SETUP = "devtools-plugin:setup";
const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
let supported;
let perf;
function isPerformanceSupported() {
  var _a2;
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else if (typeof globalThis !== "undefined" && ((_a2 = globalThis.perf_hooks) === null || _a2 === void 0 ? void 0 : _a2.performance)) {
    supported = true;
    perf = globalThis.perf_hooks.performance;
  } else {
    supported = false;
  }
  return supported;
}
function now() {
  return isPerformanceSupported() ? perf.now() : Date.now();
}
class ApiProxy {
  constructor(plugin, hook) {
    this.target = null;
    this.targetQueue = [];
    this.onQueue = [];
    this.plugin = plugin;
    this.hook = hook;
    const defaultSettings = {};
    if (plugin.settings) {
      for (const id in plugin.settings) {
        const item = plugin.settings[id];
        defaultSettings[id] = item.defaultValue;
      }
    }
    const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
    let currentSettings = Object.assign({}, defaultSettings);
    try {
      const raw = localStorage.getItem(localSettingsSaveId);
      const data = JSON.parse(raw);
      Object.assign(currentSettings, data);
    } catch (e) {
    }
    this.fallbacks = {
      getSettings() {
        return currentSettings;
      },
      setSettings(value) {
        try {
          localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
        } catch (e) {
        }
        currentSettings = value;
      },
      now() {
        return now();
      }
    };
    if (hook) {
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
    }
    this.proxiedOn = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target.on[prop];
        } else {
          return (...args) => {
            this.onQueue.push({
              method: prop,
              args
            });
          };
        }
      }
    });
    this.proxiedTarget = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target[prop];
        } else if (prop === "on") {
          return this.proxiedOn;
        } else if (Object.keys(this.fallbacks).includes(prop)) {
          return (...args) => {
            this.targetQueue.push({
              method: prop,
              args,
              resolve: () => {
              }
            });
            return this.fallbacks[prop](...args);
          };
        } else {
          return (...args) => {
            return new Promise((resolve) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve
              });
            });
          };
        }
      }
    });
  }
  async setRealTarget(target) {
    this.target = target;
    for (const item of this.onQueue) {
      this.target.on[item.method](...item.args);
    }
    for (const item of this.targetQueue) {
      item.resolve(await this.target[item.method](...item.args));
    }
  }
}
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  const descriptor = pluginDescriptor;
  const target = getTarget();
  const hook = getDevtoolsGlobalHook();
  const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
  if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
    hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
  } else {
    const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
    const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: descriptor,
      setupFn,
      proxy
    });
    if (proxy) {
      setupFn(proxy.proxiedTarget);
    }
  }
}
/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */
const isBrowser = typeof document !== "undefined";
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function isESModule(obj) {
  return obj.__esModule || obj[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  obj.default && isRouteComponent(obj.default);
}
const assign = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = isArray$1(value) ? value.map(fn) : fn(value);
  }
  return newParams;
}
const noop$2 = () => {
};
const isArray$1 = Array.isArray;
function warn(msg) {
  const args = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + msg].concat(args));
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
    warn(`Error decoding "${text}". Using original value`);
  }
  return "" + text;
}
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const hashPos = location2.indexOf("#");
  let searchPos = location2.indexOf("?");
  if (hashPos < searchPos && hashPos >= 0) {
    searchPos = -1;
  }
  if (searchPos > -1) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location2.slice(0, hashPos);
    hash = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash,
    path,
    query,
    hash: decode(hash)
  };
}
function stringifyURL(stringifyQuery2, location2) {
  const query = location2.query ? stringifyQuery2(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function stripBase(pathname, base) {
  if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
    return pathname;
  return pathname.slice(base.length) || "/";
}
function isSameRouteLocation(stringifyQuery2, a, b2) {
  const aLastIndex = a.matched.length - 1;
  const bLastIndex = b2.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b2.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b2.params) && stringifyQuery2(a.query) === stringifyQuery2(b2.query) && a.hash === b2.hash;
}
function isSameRouteRecord(a, b2) {
  return (a.aliasOf || a) === (b2.aliasOf || b2);
}
function isSameRouteLocationParams(a, b2) {
  if (Object.keys(a).length !== Object.keys(b2).length)
    return false;
  for (const key in a) {
    if (!isSameRouteLocationParamsValue(a[key], b2[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a, b2) {
  return isArray$1(a) ? isEquivalentArray(a, b2) : isArray$1(b2) ? isEquivalentArray(b2, a) : a === b2;
}
function isEquivalentArray(a, b2) {
  return isArray$1(b2) ? a.length === b2.length && a.every((value, i) => value === b2[i]) : a.length === 1 && a[0] === b2;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (!from.startsWith("/")) {
    warn(`Cannot resolve a relative location without an absolute path. Trying to resolve "${to}" from "${from}". It should look like "/${from}".`);
    return to;
  }
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  const lastToSegment = toSegments[toSegments.length - 1];
  if (lastToSegment === ".." || lastToSegment === ".") {
    toSegments.push("");
  }
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (segment === ".")
      continue;
    if (segment === "..") {
      if (position > 1)
        position--;
    } else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition).join("/");
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  // TODO: could we use a symbol in the future?
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
function normalizeBase(base) {
  if (!base) {
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base = baseEl && baseEl.getAttribute("href") || "/";
      base = base.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base = "/";
    }
  }
  if (base[0] !== "/" && base[0] !== "#")
    base = "/" + base;
  return removeTrailingSlash(base);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location2) {
  return base.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset2) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset2.behavior,
    left: elRect.left - docRect.left - (offset2.left || 0),
    top: elRect.top - docRect.top - (offset2.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    if (typeof position.el === "string") {
      if (!isIdSelector || !document.getElementById(position.el.slice(1))) {
        try {
          const foundEl = document.querySelector(position.el);
          if (isIdSelector && foundEl) {
            warn(`The selector "${position.el}" should be passed as "el: document.querySelector('${position.el}')" because it starts with "#".`);
            return;
          }
        } catch (err) {
          warn(`The selector "${position.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
          return;
        }
      }
    }
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      warn(`Couldn't find element using selector "${position.el}" returned by scrollBehavior.`);
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.scrollX, scrollToOptions.top != null ? scrollToOptions.top : window.scrollY);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
let createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base, location2) {
  const { pathname, search, hash } = location2;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/")
      pathFromHash = "/" + pathFromHash;
    return stripBase(pathFromHash, "");
  }
  const path = stripBase(pathname, base);
  return path + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
  let listeners = [];
  let teardowns = [];
  let pauseState = null;
  const popStateHandler = ({ state }) => {
    const to = createCurrentLocation(base, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state) {
      currentLocation.value = to;
      historyState.value = state;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    }
    listeners.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback) {
    listeners.push(callback);
    const teardown = () => {
      const index = listeners.indexOf(callback);
      if (index > -1)
        listeners.splice(index, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    const { history: history2 } = window;
    if (!history2.state)
      return;
    history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
  }
  function destroy() {
    for (const teardown of teardowns)
      teardown();
    teardowns = [];
    window.removeEventListener("popstate", popStateHandler);
    window.removeEventListener("beforeunload", beforeUnloadListener);
  }
  window.addEventListener("popstate", popStateHandler);
  window.addEventListener("beforeunload", beforeUnloadListener, {
    passive: true
  });
  return {
    pauseListeners,
    listen,
    destroy
  };
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base) {
  const { history: history2, location: location2 } = window;
  const currentLocation = {
    value: createCurrentLocation(base, location2)
  };
  const historyState = { value: history2.state };
  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      // the length is off by one, we need to decrease it
      position: history2.length - 1,
      replaced: true,
      // don't add a scroll as the user may have an anchor, and we want
      // scrollBehavior to be triggered without a saved position
      scroll: null
    }, true);
  }
  function changeLocation(to, state, replace2) {
    const hashIndex = base.indexOf("#");
    const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
    try {
      history2[replace2 ? "replaceState" : "pushState"](state, "", url);
      historyState.value = state;
    } catch (err) {
      {
        warn("Error with push/replace State", err);
      }
      location2[replace2 ? "replace" : "assign"](url);
    }
  }
  function replace(to, data) {
    const state = assign({}, history2.state, buildState(
      historyState.value.back,
      // keep back and forward entries but override current position
      to,
      historyState.value.forward,
      true
    ), data, { position: historyState.value.position });
    changeLocation(to, state, true);
    currentLocation.value = to;
  }
  function push(to, data) {
    const currentState = assign(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      historyState.value,
      history2.state,
      {
        forward: to,
        scroll: computeScrollPosition()
      }
    );
    if (!history2.state) {
      warn(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`);
    }
    changeLocation(currentState.current, currentState, true);
    const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }
  return {
    location: currentLocation,
    state: historyState,
    push,
    replace
  };
}
function createWebHistory(base) {
  base = normalizeBase(base);
  const historyNavigation = useHistoryStateNavigation(base);
  const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go(delta, triggerListeners = true) {
    if (!triggerListeners)
      historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign({
    // it's overridden right after
    location: "",
    base,
    go,
    createHref: createHref.bind(null, base)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, "state", {
    enumerable: true,
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const NavigationFailureSymbol = Symbol("navigation failure");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
const ErrorTypeMessages = {
  [
    1
    /* ErrorTypes.MATCHER_NOT_FOUND */
  ]({ location: location2, currentLocation }) {
    return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
  },
  [
    2
    /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
  ]({ from, to }) {
    return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
  },
  [
    4
    /* ErrorTypes.NAVIGATION_ABORTED */
  ]({ from, to }) {
    return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
  },
  [
    8
    /* ErrorTypes.NAVIGATION_CANCELLED */
  ]({ from, to }) {
    return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
  },
  [
    16
    /* ErrorTypes.NAVIGATION_DUPLICATED */
  ]({ from, to }) {
    return `Avoided redundant navigation to current location: "${from.fullPath}".`;
  }
};
function createRouterError(type, params) {
  {
    return assign(new Error(ErrorTypeMessages[type](params)), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const propertiesToLog = ["params", "query", "hash"];
function stringifyRoute(to) {
  if (typeof to === "string")
    return to;
  if (to.path != null)
    return to.path;
  const location2 = {};
  for (const key of propertiesToLog) {
    if (key in to)
      location2[key] = to[key];
  }
  return JSON.stringify(location2, null, 2);
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [
      90
      /* PathScore.Root */
    ];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value, repeatable, optional, regexp } = token;
        keys.push({
          name: value,
          repeatable,
          optional
        });
        const re22 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re22 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re22})`);
          } catch (err) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re22}): ` + err.message);
          }
        }
        let subPattern = repeatable ? `((?:${re22})(?:/(?:${re22}))*)` : `(${re22})`;
        if (!tokenIndex)
          subPattern = // avoid an optional / if there are more segments e.g. /:p?-static
          // or /:p?-:p2
          optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re22 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i = score.length - 1;
    score[i][score[i].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict && !pattern.endsWith("/"))
    pattern += "(?:/|$)";
  const re2 = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse(path) {
    const match = path.match(re2);
    const params = {};
    if (!match)
      return null;
    for (let i = 1; i < match.length; i++) {
      const value = match[i] || "";
      const key = keys[i - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (isArray$1(param) && !repeatable) {
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          }
          const text = isArray$1(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2) {
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    return path || "/";
  }
  return {
    re: re2,
    score,
    keys,
    parse,
    stringify
  };
}
function compareScoreArray(a, b2) {
  let i = 0;
  while (i < a.length && i < b2.length) {
    const diff = b2[i] - a[i];
    if (diff)
      return diff;
    i++;
  }
  if (a.length < b2.length) {
    return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
  } else if (a.length > b2.length) {
    return b2.length === 1 && b2[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a, b2) {
  let i = 0;
  const aScore = a.score;
  const bScore = b2.score;
  while (i < aScore.length && i < bScore.length) {
    const comp = compareScoreArray(aScore[i], bScore[i]);
    if (comp)
      return comp;
    i++;
  }
  if (Math.abs(bScore.length - aScore.length) === 1) {
    if (isLastScoreNegative(aScore))
      return 1;
    if (isLastScoreNegative(bScore))
      return -1;
  }
  return bScore.length - aScore.length;
}
function isLastScoreNegative(score) {
  const last = score[score.length - 1];
  return score.length > 0 && last[last.length - 1] < 0;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(`Route paths should start with a "/": "${path}" should be "/${path}".`);
  }
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer2}": ${message}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i = 0;
  let char;
  let buffer2 = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer2)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer2
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer2}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer2,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer2 = "";
  }
  function addCharToBuffer() {
    buffer2 += char;
  }
  while (i < path.length) {
    char = path[i++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer2) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer2}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  {
    const existingKeys = /* @__PURE__ */ new Set();
    for (const key of parser.keys) {
      if (existingKeys.has(key.name))
        warn(`Found duplicated params with name "${key.name}" for path "${record.path}". Only the last one will be available on "$route.params".`);
      existingKeys.add(key.name);
    }
  }
  const matcher = assign(parser, {
    record,
    parent,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes, globalOptions) {
  const matchers = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    {
      checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent);
    }
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [mainNormalizedRecord];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          normalizeRouteRecord(assign({}, mainNormalizedRecord, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            // we might be the child of an alias
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      if (normalizedRecord.path === "*") {
        throw new Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\nSee more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.');
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (parent && path[0] === "/")
        checkMissingParamsInAbsolutePath(matcher, parent);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
        {
          checkSameParams(originalRecord, matcher);
        }
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher)) {
          {
            checkSameNameAsAncestor(record, parent);
          }
          removeRoute(record.name);
        }
      }
      if (isMatchable(matcher)) {
        insertMatcher(matcher);
      }
      if (mainNormalizedRecord.children) {
        const children = mainNormalizedRecord.children;
        for (let i = 0; i < children.length; i++) {
          addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
        }
      }
      originalRecord = originalRecord || matcher;
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop$2;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index = matchers.indexOf(matcherRef);
      if (index > -1) {
        matchers.splice(index, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    const index = findInsertionIndex(matcher, matchers);
    matchers.splice(index, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve(location2, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location2 && location2.name) {
      matcher = matcherMap.get(location2.name);
      if (!matcher)
        throw createRouterError(1, {
          location: location2
        });
      {
        const invalidParams = Object.keys(location2.params || {}).filter((paramName) => !matcher.keys.find((k2) => k2.name === paramName));
        if (invalidParams.length) {
          warn(`Discarded invalid param(s) "${invalidParams.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
        }
      }
      name = matcher.record.name;
      params = assign(
        // paramsFromLocation is a new object
        paramsFromLocation(
          currentLocation.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          matcher.keys.filter((k2) => !k2.optional).concat(matcher.parent ? matcher.parent.keys.filter((k2) => k2.optional) : []).map((k2) => k2.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        location2.params && paramsFromLocation(location2.params, matcher.keys.map((k2) => k2.name))
      );
      path = matcher.stringify(params);
    } else if (location2.path != null) {
      path = location2.path;
      if (!path.startsWith("/")) {
        warn(`The Matcher cannot resolve relative paths but received "${path}". Unless you directly called \`matcher.resolve("${path}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`);
      }
      matcher = matchers.find((m2) => m2.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m2) => m2.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location: location2,
          currentLocation
        });
      name = matcher.record.name;
      params = assign({}, currentLocation.params, location2.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes.forEach((route) => addRoute(route));
  function clearRoutes() {
    matchers.length = 0;
    matcherMap.clear();
  }
  return {
    addRoute,
    resolve,
    removeRoute,
    clearRoutes,
    getRoutes,
    getRecordMatcher
  };
}
function paramsFromLocation(params, keys) {
  const newParams = {};
  for (const key of keys) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  const normalized = {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: record.aliasOf,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    // must be declared afterwards
    // mods: {},
    components: "components" in record ? record.components || null : record.component && { default: record.component }
  };
  Object.defineProperty(normalized, "mods", {
    value: {}
  });
  return normalized;
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) {
    propsObject.default = props;
  } else {
    for (const name in record.components)
      propsObject[name] = typeof props === "object" ? props[name] : props;
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults2, partialOptions) {
  const options = {};
  for (const key in defaults2) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults2[key];
  }
  return options;
}
function isSameParam(a, b2) {
  return a.name === b2.name && a.optional === b2.optional && a.repeatable === b2.repeatable;
}
function checkSameParams(a, b2) {
  for (const key of a.keys) {
    if (!key.optional && !b2.keys.find(isSameParam.bind(null, key)))
      return warn(`Alias "${b2.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${key.name}"`);
  }
  for (const key of b2.keys) {
    if (!key.optional && !a.keys.find(isSameParam.bind(null, key)))
      return warn(`Alias "${b2.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${key.name}"`);
  }
}
function checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent) {
  if (parent && parent.record.name && !mainNormalizedRecord.name && !mainNormalizedRecord.path) {
    warn(`The route named "${String(parent.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
  }
}
function checkSameNameAsAncestor(record, parent) {
  for (let ancestor = parent; ancestor; ancestor = ancestor.parent) {
    if (ancestor.record.name === record.name) {
      throw new Error(`A route named "${String(record.name)}" has been added as a ${parent === ancestor ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
    }
  }
}
function checkMissingParamsInAbsolutePath(record, parent) {
  for (const key of parent.keys) {
    if (!record.keys.find(isSameParam.bind(null, key)))
      return warn(`Absolute path "${record.record.path}" must have the exact same param named "${key.name}" as its parent "${parent.record.path}".`);
  }
}
function findInsertionIndex(matcher, matchers) {
  let lower = 0;
  let upper = matchers.length;
  while (lower !== upper) {
    const mid = lower + upper >> 1;
    const sortOrder = comparePathParserScore(matcher, matchers[mid]);
    if (sortOrder < 0) {
      upper = mid;
    } else {
      lower = mid + 1;
    }
  }
  const insertionAncestor = getInsertionAncestor(matcher);
  if (insertionAncestor) {
    upper = matchers.lastIndexOf(insertionAncestor, upper - 1);
    if (upper < 0) {
      warn(`Finding ancestor route "${insertionAncestor.record.path}" failed for "${matcher.record.path}"`);
    }
  }
  return upper;
}
function getInsertionAncestor(matcher) {
  let ancestor = matcher;
  while (ancestor = ancestor.parent) {
    if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0) {
      return ancestor;
    }
  }
  return;
}
function isMatchable({ record }) {
  return !!(record.name || record.components && Object.keys(record.components).length || record.redirect);
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i = 0; i < searchParams.length; ++i) {
    const searchParam = searchParams[i].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!isArray$1(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0) {
        search += (search.length ? "&" : "") + key;
      }
      continue;
    }
    const values = isArray$1(value) ? value.map((v2) => v2 && encodeQueryValue(v2)) : [value && encodeQueryValue(value)];
    values.forEach((value2) => {
      if (value2 !== void 0) {
        search += (search.length ? "&" : "") + key;
        if (value2 != null)
          search += "=" + value2;
      }
    });
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== void 0) {
      normalizedQuery[key] = isArray$1(value) ? value.map((v2) => v2 == null ? null : "" + v2) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
const matchedRouteKey = Symbol("router view location matched");
const viewDepthKey = Symbol("router view depth");
const routerKey = Symbol("router");
const routeLocationKey = Symbol("route location");
const routerViewLocationKey = Symbol("router view location");
function useCallbacks() {
  let handlers = [];
  function add(handler) {
    handlers.push(handler);
    return () => {
      const i = handlers.indexOf(handler);
      if (i > -1)
        handlers.splice(i, 1);
    };
  }
  function reset() {
    handlers = [];
  }
  return {
    add,
    list: () => handlers.slice(),
    reset
  };
}
function guardToPromiseFn(guard, to, from, record, name, runWithContext = (fn) => fn()) {
  const enterCallbackArray = record && // name is defined if record is because of the function overload
  (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve, reject) => {
    const next = (valid) => {
      if (valid === false) {
        reject(createRouterError(4, {
          from,
          to
        }));
      } else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are
        record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") {
          enterCallbackArray.push(valid);
        }
        resolve();
      }
    };
    const guardReturn = runWithContext(() => guard.call(record && record.instances[name], to, from, canOnlyBeCalledOnce(next, to, from)));
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    if (guard.length > 2) {
      const message = `The "next" callback was never called inside of ${guard.name ? '"' + guard.name + '"' : ""}:
${guard.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof guardReturn === "object" && "then" in guardReturn) {
        guardCall = guardCall.then((resolvedValue) => {
          if (!next._called) {
            warn(message);
            return Promise.reject(new Error("Invalid navigation guard"));
          }
          return resolvedValue;
        });
      } else if (guardReturn !== void 0) {
        if (!next._called) {
          warn(message);
          reject(new Error("Invalid navigation guard"));
          return;
        }
      }
    }
    guardCall.catch((err) => reject(err));
  });
}
function canOnlyBeCalledOnce(next, to, from) {
  let called = 0;
  return function() {
    if (called++ === 1)
      warn(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
    next._called = true;
    if (called === 1)
      next.apply(null, arguments);
  };
}
function extractComponentsGuards(matched, guardType, to, from, runWithContext = (fn) => fn()) {
  const guards = [];
  for (const record of matched) {
    if (!record.components && !record.children.length) {
      warn(`Record with path "${record.path}" is either missing a "component(s)" or "children" property.`);
    }
    for (const name in record.components) {
      let rawComponent = record.components[name];
      {
        if (!rawComponent || typeof rawComponent !== "object" && typeof rawComponent !== "function") {
          warn(`Component "${name}" in record with path "${record.path}" is not a valid component. Received "${String(rawComponent)}".`);
          throw new Error("Invalid route component");
        } else if ("then" in rawComponent) {
          warn(`Component "${name}" in record with path "${record.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const promise = rawComponent;
          rawComponent = () => promise;
        } else if (rawComponent.__asyncLoader && // warn only once per component
        !rawComponent.__warnedDefineAsync) {
          rawComponent.__warnedDefineAsync = true;
          warn(`Component "${name}" in record with path "${record.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`);
        }
      }
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name, runWithContext));
      } else {
        let componentPromise = rawComponent();
        if (!("catch" in componentPromise)) {
          warn(`Component "${name}" in record with path "${record.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`);
          componentPromise = Promise.resolve(componentPromise);
        }
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            throw new Error(`Couldn't resolve component "${name}" at "${record.path}"`);
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.mods[name] = resolved;
          record.components[name] = resolvedComponent;
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name, runWithContext)();
        }));
      }
    }
  }
  return guards;
}
function useLink(props) {
  const router = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  let hasPrevious = false;
  let previousTo = null;
  const route = computed(() => {
    const to = unref(props.to);
    if (!hasPrevious || to !== previousTo) {
      if (!isRouteLocation(to)) {
        if (hasPrevious) {
          warn(`Invalid value for prop "to" in useLink()
- to:`, to, `
- previous to:`, previousTo, `
- props:`, props);
        } else {
          warn(`Invalid value for prop "to" in useLink()
- to:`, to, `
- props:`, props);
        }
      }
      previousTo = to;
      hasPrevious = true;
    }
    return router.resolve(to);
  });
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index > -1)
      return index;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return (
      // we are dealing with nested routes
      length > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      getOriginalPath(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
      currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index
    );
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e = {}) {
    if (guardEvent(e)) {
      const p = router[unref(props.replace) ? "replace" : "push"](
        unref(props.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(noop$2);
      if (props.viewTransition && typeof document !== "undefined" && "startViewTransition" in document) {
        document.startViewTransition(() => p);
      }
      return p;
    }
    return Promise.resolve();
  }
  if (isBrowser) {
    const instance = getCurrentInstance();
    if (instance) {
      const linkContextDevtools = {
        route: route.value,
        isActive: isActive.value,
        isExactActive: isExactActive.value,
        error: null
      };
      instance.__vrl_devtools = instance.__vrl_devtools || [];
      instance.__vrl_devtools.push(linkContextDevtools);
      watchEffect(() => {
        linkContextDevtools.route = route.value;
        linkContextDevtools.isActive = isActive.value;
        linkContextDevtools.isExactActive = isExactActive.value;
        linkContextDevtools.error = isRouteLocation(unref(props.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
function preferSingleVNode(vnodes) {
  return vnodes.length === 1 ? vnodes[0] : vnodes;
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    },
    viewTransition: Boolean
  },
  useLink,
  setup(props, { slots }) {
    const link = reactive(useLink(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && preferSingleVNode(slots.default(link));
      return props.custom ? children : h$2("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e) {
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
    return;
  if (e.defaultPrevented)
    return;
  if (e.button !== void 0 && e.button !== 0)
    return;
  if (e.currentTarget && e.currentTarget.getAttribute) {
    const target = e.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e.preventDefault)
    e.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!isArray$1(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(props, { attrs, slots }) {
    warnDeprecatedUsage();
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const injectedDepth = inject(viewDepthKey, 0);
    const depth = computed(() => {
      let initialDepth = unref(injectedDepth);
      const { matched } = routeToDisplay.value;
      let matchedRoute;
      while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
        initialDepth++;
      }
      return initialDepth;
    });
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
    provide(viewDepthKey, computed(() => depth.value + 1));
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance && to && // if there is no instance but to and from are the same this might be
      // the first visit
      (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const currentName = props.name;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[currentName];
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[currentName];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h$2(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      if (isBrowser && component.ref) {
        const info = {
          depth: depth.value,
          name: matchedRoute.name,
          path: matchedRoute.path,
          meta: matchedRoute.meta
        };
        const internalInstances = isArray$1(component.ref) ? component.ref.map((r) => r.i) : [component.ref.i];
        internalInstances.forEach((instance) => {
          instance.__vrv_devtools = info;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        normalizeSlot(slots.default, { Component: component, route }) || component
      );
    };
  }
});
function normalizeSlot(slot, data) {
  if (!slot)
    return null;
  const slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function warnDeprecatedUsage() {
  const instance = getCurrentInstance();
  const parentName = instance.parent && instance.parent.type.name;
  const parentSubTreeType = instance.parent && instance.parent.subTree && instance.parent.subTree.type;
  if (parentName && (parentName === "KeepAlive" || parentName.includes("Transition")) && typeof parentSubTreeType === "object" && parentSubTreeType.name === "RouterView") {
    const comp = parentName === "KeepAlive" ? "keep-alive" : "transition";
    warn(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${comp}>
    <component :is="Component" />
  </${comp}>
</router-view>`);
  }
}
function formatRouteLocation(routeLocation, tooltip) {
  const copy = assign({}, routeLocation, {
    // remove variables that can contain vue instances
    matched: routeLocation.matched.map((matched) => omit(matched, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: true,
      display: routeLocation.fullPath,
      tooltip,
      value: copy
    }
  };
}
function formatDisplay(display) {
  return {
    _custom: {
      display
    }
  };
}
let routerId = 0;
function addDevtools(app, router, matcher) {
  if (router.__hasDevtools)
    return;
  router.__hasDevtools = true;
  const id = routerId++;
  setupDevtoolsPlugin({
    id: "org.vuejs.router" + (id ? "." + id : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app
  }, (api) => {
    if (typeof api.now !== "function") {
      console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
    }
    api.on.inspectComponent((payload, ctx) => {
      if (payload.instanceData) {
        payload.instanceData.state.push({
          type: "Routing",
          key: "$route",
          editable: false,
          value: formatRouteLocation(router.currentRoute.value, "Current Route")
        });
      }
    });
    api.on.visitComponentTree(({ treeNode: node, componentInstance }) => {
      if (componentInstance.__vrv_devtools) {
        const info = componentInstance.__vrv_devtools;
        node.tags.push({
          label: (info.name ? `${info.name.toString()}: ` : "") + info.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: PINK_500
        });
      }
      if (isArray$1(componentInstance.__vrl_devtools)) {
        componentInstance.__devtoolsApi = api;
        componentInstance.__vrl_devtools.forEach((devtoolsData) => {
          let label = devtoolsData.route.path;
          let backgroundColor = ORANGE_400;
          let tooltip = "";
          let textColor = 0;
          if (devtoolsData.error) {
            label = devtoolsData.error;
            backgroundColor = RED_100;
            textColor = RED_700;
          } else if (devtoolsData.isExactActive) {
            backgroundColor = LIME_500;
            tooltip = "This is exactly active";
          } else if (devtoolsData.isActive) {
            backgroundColor = BLUE_600;
            tooltip = "This link is active";
          }
          node.tags.push({
            label,
            textColor,
            tooltip,
            backgroundColor
          });
        });
      }
    });
    watch(router.currentRoute, () => {
      refreshRoutesView();
      api.notifyComponentUpdate();
      api.sendInspectorTree(routerInspectorId);
      api.sendInspectorState(routerInspectorId);
    });
    const navigationsLayerId = "router:navigations:" + id;
    api.addTimelineLayer({
      id: navigationsLayerId,
      label: `Router${id ? " " + id : ""} Navigations`,
      color: 4237508
    });
    router.onError((error, to) => {
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: "Error during Navigation",
          subtitle: to.fullPath,
          logType: "error",
          time: api.now(),
          data: { error },
          groupId: to.meta.__navigationId
        }
      });
    });
    let navigationId = 0;
    router.beforeEach((to, from) => {
      const data = {
        guard: formatDisplay("beforeEach"),
        from: formatRouteLocation(from, "Current Location during this navigation"),
        to: formatRouteLocation(to, "Target location")
      };
      Object.defineProperty(to.meta, "__navigationId", {
        value: navigationId++
      });
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          time: api.now(),
          title: "Start of navigation",
          subtitle: to.fullPath,
          data,
          groupId: to.meta.__navigationId
        }
      });
    });
    router.afterEach((to, from, failure) => {
      const data = {
        guard: formatDisplay("afterEach")
      };
      if (failure) {
        data.failure = {
          _custom: {
            type: Error,
            readOnly: true,
            display: failure ? failure.message : "",
            tooltip: "Navigation Failure",
            value: failure
          }
        };
        data.status = formatDisplay("❌");
      } else {
        data.status = formatDisplay("✅");
      }
      data.from = formatRouteLocation(from, "Current Location during this navigation");
      data.to = formatRouteLocation(to, "Target location");
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: "End of navigation",
          subtitle: to.fullPath,
          time: api.now(),
          data,
          logType: failure ? "warning" : "default",
          groupId: to.meta.__navigationId
        }
      });
    });
    const routerInspectorId = "router-inspector:" + id;
    api.addInspector({
      id: routerInspectorId,
      label: "Routes" + (id ? " " + id : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function refreshRoutesView() {
      if (!activeRoutesPayload)
        return;
      const payload = activeRoutesPayload;
      let routes = matcher.getRoutes().filter((route) => !route.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !route.parent.record.components);
      routes.forEach(resetMatchStateOnRouteRecord);
      if (payload.filter) {
        routes = routes.filter((route) => (
          // save matches state based on the payload
          isRouteMatching(route, payload.filter.toLowerCase())
        ));
      }
      routes.forEach((route) => markRouteRecordActive(route, router.currentRoute.value));
      payload.rootNodes = routes.map(formatRouteRecordForInspector);
    }
    let activeRoutesPayload;
    api.on.getInspectorTree((payload) => {
      activeRoutesPayload = payload;
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        refreshRoutesView();
      }
    });
    api.on.getInspectorState((payload) => {
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        const routes = matcher.getRoutes();
        const route = routes.find((route2) => route2.record.__vd_id === payload.nodeId);
        if (route) {
          payload.state = {
            options: formatRouteRecordMatcherForStateInspector(route)
          };
        }
      }
    });
    api.sendInspectorTree(routerInspectorId);
    api.sendInspectorState(routerInspectorId);
  });
}
function modifierForKey(key) {
  if (key.optional) {
    return key.repeatable ? "*" : "?";
  } else {
    return key.repeatable ? "+" : "";
  }
}
function formatRouteRecordMatcherForStateInspector(route) {
  const { record } = route;
  const fields = [
    { editable: false, key: "path", value: record.path }
  ];
  if (record.name != null) {
    fields.push({
      editable: false,
      key: "name",
      value: record.name
    });
  }
  fields.push({ editable: false, key: "regexp", value: route.re });
  if (route.keys.length) {
    fields.push({
      editable: false,
      key: "keys",
      value: {
        _custom: {
          type: null,
          readOnly: true,
          display: route.keys.map((key) => `${key.name}${modifierForKey(key)}`).join(" "),
          tooltip: "Param keys",
          value: route.keys
        }
      }
    });
  }
  if (record.redirect != null) {
    fields.push({
      editable: false,
      key: "redirect",
      value: record.redirect
    });
  }
  if (route.alias.length) {
    fields.push({
      editable: false,
      key: "aliases",
      value: route.alias.map((alias) => alias.record.path)
    });
  }
  if (Object.keys(route.record.meta).length) {
    fields.push({
      editable: false,
      key: "meta",
      value: route.record.meta
    });
  }
  fields.push({
    key: "score",
    editable: false,
    value: {
      _custom: {
        type: null,
        readOnly: true,
        display: route.score.map((score) => score.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: route.score
      }
    }
  });
  return fields;
}
const PINK_500 = 15485081;
const BLUE_600 = 2450411;
const LIME_500 = 8702998;
const CYAN_400 = 2282478;
const ORANGE_400 = 16486972;
const DARK = 6710886;
const RED_100 = 16704226;
const RED_700 = 12131356;
function formatRouteRecordForInspector(route) {
  const tags = [];
  const { record } = route;
  if (record.name != null) {
    tags.push({
      label: String(record.name),
      textColor: 0,
      backgroundColor: CYAN_400
    });
  }
  if (record.aliasOf) {
    tags.push({
      label: "alias",
      textColor: 0,
      backgroundColor: ORANGE_400
    });
  }
  if (route.__vd_match) {
    tags.push({
      label: "matches",
      textColor: 0,
      backgroundColor: PINK_500
    });
  }
  if (route.__vd_exactActive) {
    tags.push({
      label: "exact",
      textColor: 0,
      backgroundColor: LIME_500
    });
  }
  if (route.__vd_active) {
    tags.push({
      label: "active",
      textColor: 0,
      backgroundColor: BLUE_600
    });
  }
  if (record.redirect) {
    tags.push({
      label: typeof record.redirect === "string" ? `redirect: ${record.redirect}` : "redirects",
      textColor: 16777215,
      backgroundColor: DARK
    });
  }
  let id = record.__vd_id;
  if (id == null) {
    id = String(routeRecordId++);
    record.__vd_id = id;
  }
  return {
    id,
    label: record.path,
    tags,
    children: route.children.map(formatRouteRecordForInspector)
  };
}
let routeRecordId = 0;
const EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;
function markRouteRecordActive(route, currentRoute) {
  const isExactActive = currentRoute.matched.length && isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
  route.__vd_exactActive = route.__vd_active = isExactActive;
  if (!isExactActive) {
    route.__vd_active = currentRoute.matched.some((match) => isSameRouteRecord(match, route.record));
  }
  route.children.forEach((childRoute) => markRouteRecordActive(childRoute, currentRoute));
}
function resetMatchStateOnRouteRecord(route) {
  route.__vd_match = false;
  route.children.forEach(resetMatchStateOnRouteRecord);
}
function isRouteMatching(route, filter2) {
  const found = String(route.re).match(EXTRACT_REGEXP_RE);
  route.__vd_match = false;
  if (!found || found.length < 3) {
    return false;
  }
  const nonEndingRE = new RegExp(found[1].replace(/\$$/, ""), found[2]);
  if (nonEndingRE.test(filter2)) {
    route.children.forEach((child) => isRouteMatching(child, filter2));
    if (route.record.path !== "/" || filter2 === "/") {
      route.__vd_match = route.re.test(filter2);
      return true;
    }
    return false;
  }
  const path = route.record.path.toLowerCase();
  const decodedPath = decode(path);
  if (!filter2.startsWith("/") && (decodedPath.includes(filter2) || path.includes(filter2)))
    return true;
  if (decodedPath.startsWith(filter2) || path.startsWith(filter2))
    return true;
  if (route.record.name && String(route.record.name).includes(filter2))
    return true;
  return route.children.some((child) => isRouteMatching(child, filter2));
}
function omit(obj, keys) {
  const ret = {};
  for (const key in obj) {
    if (!keys.includes(key)) {
      ret[key] = obj[key];
    }
  }
  return ret;
}
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  if (!routerHistory)
    throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = (
    // @ts-expect-error: intentionally avoid the type check
    applyToParams.bind(null, decode)
  );
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      if (!parent) {
        warn(`Parent route "${String(parentOrRoute)}" not found when adding child route`, route);
      }
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    } else {
      warn(`Cannot remove non-existent route "${String(name)}"`);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve(rawLocation, currentLocation) {
    currentLocation = assign({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href2 = routerHistory.createHref(locationNormalized.fullPath);
      {
        if (href2.startsWith("//"))
          warn(`Location "${rawLocation}" resolved to "${href2}". A resolved location cannot start with multiple slashes.`);
        else if (!matchedRoute2.matched.length) {
          warn(`No match found for location with path "${rawLocation}"`);
        }
      }
      return assign(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    if (!isRouteLocation(rawLocation)) {
      warn(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, rawLocation);
      return resolve({});
    }
    let matcherLocation;
    if (rawLocation.path != null) {
      if ("params" in rawLocation && !("name" in rawLocation) && // @ts-expect-error: the type is never
      Object.keys(rawLocation.params).length) {
        warn(`Path "${rawLocation.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`);
      }
      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      const targetParams = assign({}, rawLocation.params);
      for (const key in targetParams) {
        if (targetParams[key] == null) {
          delete targetParams[key];
        }
      }
      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(targetParams)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    if (hash && !hash.startsWith("#")) {
      warn(`A \`hash\` should always start with the character "#". Replace "${hash}" with "#${hash}".`);
    }
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    {
      if (href.startsWith("//")) {
        warn(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
      } else if (!matchedRoute.matched.length) {
        warn(`No match found for location with path "${rawLocation.path != null ? rawLocation.path : rawLocation}"`);
      }
    }
    return assign({
      fullPath,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      )
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : (
          // force empty params
          { path: newTargetLocation }
        );
        newTargetLocation.params = {};
      }
      if (newTargetLocation.path == null && !("name" in newTargetLocation)) {
        warn(`Invalid redirect found:
${JSON.stringify(newTargetLocation, null, 2)}
 when navigating to "${to.fullPath}". A redirect must contain a name or path. This will break in production.`);
        throw new Error("Invalid redirect");
      }
      return assign({
        query: to.query,
        hash: to.hash,
        // avoid transferring params if the redirect has a path
        params: newTargetLocation.path != null ? {} : to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve(to);
    const from = currentRoute.value;
    const data = to.state;
    const force = to.force;
    const replace2 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(
        assign(locationAsObject(shouldRedirect), {
          state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
          force,
          replace: replace2
        }),
        // keep original redirectedFrom if it exists
        redirectedFrom || targetLocation
      );
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll(
        from,
        from,
        // this is a push, the only way for it to be triggered from a
        // history.listen is with a redirect, which makes it become a push
        true,
        // This cannot be the first navigation because the initial location
        // cannot be manually navigated to
        false
      );
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? (
      // navigation redirects still mark the router as ready
      isNavigationFailure(
        error,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? error : markAsReady(error)
    ) : (
      // reject any unknown error
      triggerError(error, toLocation, from)
    )).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(
          failure2,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          if (
            // we are redirecting to the same location we were already at
            isSameRouteLocation(stringifyQuery$1, resolve(failure2.to), toLocation) && // and we have done it a couple of times
            redirectedFrom && // @ts-expect-error: added only in dev
            (redirectedFrom._count = redirectedFrom._count ? (
              // @ts-expect-error
              redirectedFrom._count + 1
            ) : 1) > 30
          ) {
            warn(`Detected a possibly infinite redirection in a navigation guard when going from "${from.fullPath}" to "${toLocation.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`);
            return Promise.reject(new Error("Infinite redirect in navigation guard"));
          }
          return pushWithRedirect(
            // keep options
            assign({
              // preserve an existing replacement but allow the redirect to override it
              replace: replace2
            }, locationAsObject(failure2.to), {
              state: typeof failure2.to === "object" ? assign({}, data, failure2.to.state) : data,
              force
            }),
            // preserve the original redirectedFrom if any
            redirectedFrom || toLocation
          );
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function runWithContext(fn) {
    const app = installedApps.values().next().value;
    return app && typeof app.runWithContext === "function" ? app.runWithContext(fn) : fn();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of enteringRecords) {
        if (record.beforeEnter) {
          if (isArray$1(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from, runWithContext);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err) => isNavigationFailure(
      err,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? err : Promise.reject(err));
  }
  function triggerAfterEach(to, from, failure) {
    afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign({
          scroll: isFirstNavigation && state && state.scroll
        }, data));
      else
        routerHistory.push(toLocation.fullPath, data);
    }
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    if (removeHistoryListener)
      return;
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      if (!router.listening)
        return;
      const toLocation = resolve(to);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, { replace: true, force: true }), toLocation).catch(noop$2);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(
          error,
          4 | 8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        )) {
          return error;
        }
        if (isNavigationFailure(
          error,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          pushWithRedirect(
            assign(locationAsObject(error.to), {
              force: true
            }),
            toLocation
            // avoid an uncaught rejection, let push call triggerError
          ).then((failure) => {
            if (isNavigationFailure(
              failure,
              4 | 16
              /* ErrorTypes.NAVIGATION_DUPLICATED */
            ) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop$2);
          return Promise.reject();
        }
        if (info.delta) {
          routerHistory.go(-info.delta, false);
        }
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(
          // after navigation, all matched components are resolved
          toLocation,
          from,
          false
        );
        if (failure) {
          if (info.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
          // entry while a different route is displayed
          !isNavigationFailure(
            failure,
            8
            /* ErrorTypes.NAVIGATION_CANCELLED */
          )) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(
            failure,
            4 | 16
            /* ErrorTypes.NAVIGATION_DUPLICATED */
          )) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop$2);
    });
  }
  let readyHandlers = useCallbacks();
  let errorListeners = useCallbacks();
  let ready;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorListeners.list();
    if (list.length) {
      list.forEach((handler) => handler(error, to, from));
    } else {
      {
        warn("uncaught error during route navigation:");
      }
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve2, reject) => {
      readyHandlers.add([resolve2, reject]);
    });
  }
  function markAsReady(err) {
    if (!ready) {
      ready = !err;
      setupListeners();
      readyHandlers.list().forEach(([resolve2, reject]) => err ? reject(err) : resolve2());
      readyHandlers.reset();
    }
    return err;
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser || !scrollBehavior)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router = {
    currentRoute,
    listening: true,
    addRoute,
    removeRoute,
    clearRoutes: matcher.clearRoutes,
    hasRoute,
    getRoutes,
    resolve,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorListeners.add,
    isReady,
    install(app) {
      const router2 = this;
      app.component("RouterLink", RouterLink);
      app.component("RouterView", RouterView);
      app.config.globalProperties.$router = router2;
      Object.defineProperty(app.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err) => {
          warn("Unexpected error when starting the router:", err);
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) {
        Object.defineProperty(reactiveRoute, key, {
          get: () => currentRoute.value[key],
          enumerable: true
        });
      }
      app.provide(routerKey, router2);
      app.provide(routeLocationKey, shallowReactive(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app.unmount;
      installedApps.add(app);
      app.unmount = function() {
        installedApps.delete(app);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          removeHistoryListener = null;
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
      if (isBrowser) {
        addDevtools(app, router2, matcher);
      }
    }
  };
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
  }
  return router;
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i = 0; i < len; i++) {
    const recordFrom = from.matched[i];
    if (recordFrom) {
      if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
function useRoute(_name) {
  return inject(routeLocationKey);
}
/*!
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
class GettextBuilder {
  debug = false;
  language = "en";
  translations = {};
  setLanguage(language) {
    this.language = language;
    return this;
  }
  /**
   * Try to detect locale from context with `en` as fallback value
   * This only works within a Nextcloud page context.
   *
   * @deprecated use `detectLanguage` instead.
   */
  detectLocale() {
    return this.detectLanguage();
  }
  /**
   * Try to detect locale from context with `en` as fallback value.
   * This only works within a Nextcloud page context.
   */
  detectLanguage() {
    return this.setLanguage(getLanguage().replace("-", "_"));
  }
  addTranslation(language, data) {
    this.translations[language] = data;
    return this;
  }
  enableDebugMode() {
    this.debug = true;
    return this;
  }
  build() {
    if (this.debug) {
      console.debug(`Creating gettext instance for language ${this.language}`);
    }
    const translations = Object.values(this.translations[this.language]?.translations[""] ?? {}).map(({ msgid, msgid_plural: msgidPlural, msgstr }) => {
      if (msgidPlural !== void 0) {
        return [`_${msgid}_::_${msgidPlural}_`, msgstr];
      }
      return [msgid, msgstr[0]];
    });
    const bundle = {
      pluralFunction: (n2) => getPlural(n2, this.language),
      translations: Object.fromEntries(translations)
    };
    return new GettextWrapper(bundle);
  }
}
class GettextWrapper {
  constructor(bundle) {
    this.bundle = bundle;
  }
  /**
   * Get translated string (singular form), optionally with placeholders
   *
   * @param original original string to translate
   * @param placeholders map of placeholder key to value
   */
  gettext(original, placeholders = {}) {
    return translate("", original, placeholders, void 0, { bundle: this.bundle });
  }
  /**
   * Get translated string with plural forms
   *
   * @param singular Singular text form
   * @param plural Plural text form to be used if `count` requires it
   * @param count The number to insert into the text
   * @param placeholders optional map of placeholder key to value
   */
  ngettext(singular, plural, count, placeholders = {}) {
    return translatePlural("", singular, plural, count, placeholders, { bundle: this.bundle });
  }
}
function getGettextBuilder() {
  return new GettextBuilder();
}
const builder = getGettextBuilder().setLanguage(getLanguage());
let gettext = builder.build();
const n$1 = (...args) => gettext.ngettext(...args);
const t = (...args) => gettext.gettext(...args);
function register(...chunks) {
  for (const chunk of chunks) {
    if (!chunk.registered) {
      for (const { l: language, t: translations } of chunk) {
        if (language !== getLanguage() || !translations) {
          continue;
        }
        const decompressed = Object.fromEntries(
          Object.entries(translations).map(([id, value]) => [
            id,
            {
              msgid: id,
              msgid_plural: value.p,
              msgstr: value.v
            }
          ])
        );
        gettext = builder.addTranslation(getLanguage(), {
          translations: {
            "": {
              ...gettext.bundle.translations?.[""] ?? {},
              ...decompressed
            }
          }
        }).build();
      }
      chunk.registered = true;
    }
  }
}
const t2 = [{ "l": "af", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "ar", "t": { "a few seconds ago": { "v": ["منذ عدة ثوانٍ"] }, "sec. ago": { "v": ["ثانية مضت"] }, "seconds ago": { "v": ["ثوانٍ مضت"] } } }, { "l": "ast", "t": { "a few seconds ago": { "v": ["hai unos segundos"] }, "sec. ago": { "v": ["hai segs"] }, "seconds ago": { "v": ["hai segundos"] } } }, { "l": "az", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "be", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "bg", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "bn_BD", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "br", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "bs", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "ca", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "cs", "t": { "a few seconds ago": { "v": ["před několika sekundami"] }, "sec. ago": { "v": ["sek. před"] }, "seconds ago": { "v": ["sekund předtím"] } } }, { "l": "cs_CZ", "t": { "a few seconds ago": { "v": ["před několika sekundami"] }, "sec. ago": { "v": ["sek. před"] }, "seconds ago": { "v": ["sekund předtím"] } } }, { "l": "cy_GB", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "da", "t": { "a few seconds ago": { "v": ["et par sekunder siden"] }, "sec. ago": { "v": ["sek. siden"] }, "seconds ago": { "v": ["sekunder siden"] } } }, { "l": "de", "t": { "a few seconds ago": { "v": ["vor ein paar Sekunden"] }, "sec. ago": { "v": ["Sek. zuvor"] }, "seconds ago": { "v": ["Sekunden zuvor"] } } }, { "l": "de_DE", "t": { "a few seconds ago": { "v": ["vor ein paar Sekunden"] }, "sec. ago": { "v": ["Sek. zuvor"] }, "seconds ago": { "v": ["Sekunden zuvor"] } } }, { "l": "el", "t": { "a few seconds ago": { "v": ["πριν λίγα δευτερόλεπτα"] }, "sec. ago": { "v": ["δευτ. πριν"] }, "seconds ago": { "v": ["δευτερόλεπτα πριν"] } } }, { "l": "en_GB", "t": { "a few seconds ago": { "v": ["a few seconds ago"] }, "sec. ago": { "v": ["sec. ago"] }, "seconds ago": { "v": ["seconds ago"] } } }, { "l": "eo", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es", "t": { "a few seconds ago": { "v": ["hace unos pocos segundos"] }, "sec. ago": { "v": ["hace segundos"] }, "seconds ago": { "v": ["segundos atrás"] } } }, { "l": "es_419", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_AR", "t": { "a few seconds ago": { "v": ["hace unos segundos"] }, "sec. ago": { "v": ["seg. atrás"] }, "seconds ago": { "v": ["segundos atrás"] } } }, { "l": "es_CL", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_CO", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_CR", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_DO", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_EC", "t": { "a few seconds ago": { "v": ["hace unos segundos"] }, "sec. ago": { "v": ["hace segundos"] }, "seconds ago": { "v": ["Segundos atrás"] } } }, { "l": "es_GT", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_HN", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_MX", "t": { "a few seconds ago": { "v": ["hace unos segundos"] }, "sec. ago": { "v": ["seg. atrás"] }, "seconds ago": { "v": ["segundos atrás"] } } }, { "l": "es_NI", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_PA", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_PE", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_PR", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_PY", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_SV", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_UY", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "et_EE", "t": { "a few seconds ago": { "v": ["mõni sekund tagasi"] }, "sec. ago": { "v": ["sek. tagasi"] }, "seconds ago": { "v": ["sekundit tagasi"] } } }, { "l": "eu", "t": { "a few seconds ago": { "v": ["duela segundo batzuk"] }, "sec. ago": { "v": ["duela seg."] }, "seconds ago": { "v": ["duela segundo"] } } }, { "l": "fa", "t": { "a few seconds ago": { "v": ["چند ثانیه پیش"] }, "sec. ago": { "v": ["چند ثانیه پیش"] }, "seconds ago": { "v": ["چند ثانیه پیش"] } } }, { "l": "fi", "t": { "a few seconds ago": { "v": ["muutamia sekunteja sitten"] }, "sec. ago": { "v": ["sek. sitten"] }, "seconds ago": { "v": ["sekunteja sitten"] } } }, { "l": "fo", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "fr", "t": { "a few seconds ago": { "v": ["il y a quelques instants"] }, "sec. ago": { "v": ["il y a sec."] }, "seconds ago": { "v": ["il y a quelques secondes"] } } }, { "l": "ga", "t": { "a few seconds ago": { "v": ["cúpla soicind ó shin"] }, "sec. ago": { "v": ["soic. ó shin"] }, "seconds ago": { "v": ["soicind ó shin"] } } }, { "l": "gd", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "gl", "t": { "a few seconds ago": { "v": ["hai uns segundos"] }, "sec. ago": { "v": ["segs. atrás"] }, "seconds ago": { "v": ["segundos atrás"] } } }, { "l": "he", "t": { "a few seconds ago": { "v": ["לפני מספר שניות"] }, "sec. ago": { "v": ["לפני מספר שניות"] }, "seconds ago": { "v": ["לפני מס׳ שניות"] } } }, { "l": "hi_IN", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "hr", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "hsb", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "hu", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "hy", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "ia", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "id", "t": { "a few seconds ago": { "v": ["beberapa detik yang lalu"] }, "sec. ago": { "v": ["dtk. yang lalu"] }, "seconds ago": { "v": ["beberapa detik lalu"] } } }, { "l": "ig", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "is", "t": { "a few seconds ago": { "v": ["fyrir örfáum sekúndum síðan"] }, "sec. ago": { "v": ["sek. síðan"] }, "seconds ago": { "v": ["sekúndum síðan"] } } }, { "l": "it", "t": { "a few seconds ago": { "v": ["pochi secondi fa"] }, "sec. ago": { "v": ["sec. fa"] }, "seconds ago": { "v": ["secondi fa"] } } }, { "l": "ja", "t": { "a few seconds ago": { "v": ["数秒前"] }, "sec. ago": { "v": ["秒前"] }, "seconds ago": { "v": ["数秒前"] } } }, { "l": "ja_JP", "t": { "a few seconds ago": { "v": ["数秒前"] }, "sec. ago": { "v": ["秒前"] }, "seconds ago": { "v": ["数秒前"] } } }, { "l": "ka", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "ka_GE", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "kab", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "kk", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "km", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "kn", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "ko", "t": { "a few seconds ago": { "v": ["방금 전"] }, "sec. ago": { "v": ["몇 초 전"] }, "seconds ago": { "v": ["초 전"] } } }, { "l": "la", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "lb", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "lo", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "lt_LT", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "lv", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "mk", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "mn", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "mr", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "ms_MY", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "my", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "nb", "t": { "a few seconds ago": { "v": ["noen få sekunder siden"] }, "sec. ago": { "v": ["sek. siden"] }, "seconds ago": { "v": ["sekunder siden"] } } }, { "l": "ne", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "nl", "t": { "a few seconds ago": { "v": ["enkele seconden terug"] }, "sec. ago": { "v": ["sec. geleden"] }, "seconds ago": { "v": ["seconden geleden"] } } }, { "l": "nn_NO", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "oc", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "pl", "t": { "a few seconds ago": { "v": ["kilka sekund temu"] }, "sec. ago": { "v": ["sek. temu"] }, "seconds ago": { "v": ["sekund temu"] } } }, { "l": "ps", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "pt_BR", "t": { "a few seconds ago": { "v": ["há alguns segundos"] }, "sec. ago": { "v": ["seg. atrás"] }, "seconds ago": { "v": ["segundos atrás"] } } }, { "l": "pt_PT", "t": { "a few seconds ago": { "v": ["há alguns segundos"] }, "sec. ago": { "v": ["seg. atrás"] }, "seconds ago": { "v": ["segundos atrás"] } } }, { "l": "ro", "t": { "a few seconds ago": { "v": ["acum câteva secunde"] }, "sec. ago": { "v": ["sec. în urmă"] }, "seconds ago": { "v": ["secunde în urmă"] } } }, { "l": "ru", "t": { "a few seconds ago": { "v": ["несколько секунд назад"] }, "sec. ago": { "v": ["сек. назад"] }, "seconds ago": { "v": ["секунд назад"] } } }, { "l": "sc", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "si", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "sk", "t": { "a few seconds ago": { "v": ["pred chvíľou"] }, "sec. ago": { "v": ["pred pár sekundami"] }, "seconds ago": { "v": ["pred sekundami"] } } }, { "l": "sl", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "sq", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "sr", "t": { "a few seconds ago": { "v": ["пре неколико секунди"] }, "sec. ago": { "v": ["сек. раније"] }, "seconds ago": { "v": ["секунди раније"] } } }, { "l": "sr@latin", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "sv", "t": { "a few seconds ago": { "v": ["några sekunder sedan"] }, "sec. ago": { "v": ["sek. sedan"] }, "seconds ago": { "v": ["sekunder sedan"] } } }, { "l": "sw", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "ta", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "th", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "tk", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "tr", "t": { "a few seconds ago": { "v": ["birkaç saniye önce"] }, "sec. ago": { "v": ["sn. önce"] }, "seconds ago": { "v": ["saniye önce"] } } }, { "l": "ug", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "uk", "t": { "a few seconds ago": { "v": ["декілька секунд тому"] }, "sec. ago": { "v": ["с тому"] }, "seconds ago": { "v": ["с тому"] } } }, { "l": "ur_PK", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "uz", "t": { "a few seconds ago": { "v": ["bir necha soniya oldin"] }, "sec. ago": { "v": ["sek. oldin"] }, "seconds ago": { "v": ["soniyalar oldin"] } } }, { "l": "vi", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "zh_CN", "t": { "a few seconds ago": { "v": ["几秒前"] }, "sec. ago": { "v": ["几秒前"] }, "seconds ago": { "v": ["几秒前"] } } }, { "l": "zh_HK", "t": { "a few seconds ago": { "v": ["幾秒前"] }, "sec. ago": { "v": ["秒前"] }, "seconds ago": { "v": ["秒前"] } } }, { "l": "zh_TW", "t": { "a few seconds ago": { "v": ["幾秒前"] }, "sec. ago": { "v": ["秒前"] }, "seconds ago": { "v": ["秒前"] } } }, { "l": "zu_ZA", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }];
const t3 = [{ "l": "af", "t": {} }, { "l": "ar", "t": { "Acapulco": { "v": ["بازلائي مطفي"] }, "Blue Violet": { "v": ["بنفسجي مشعشع"] }, "Boston Blue": { "v": ["سماوي مطفي"] }, "Deluge": { "v": ["بنفسجي مطفي"] }, "Feldspar": { "v": ["وردي صخري"] }, "Gold": { "v": ["ذهبي"] }, "Mariner": { "v": ["أزرق بحري"] }, "Nextcloud blue": { "v": ["أزرق نكست كلاود"] }, "Olivine": { "v": ["زيتي"] }, "Purple": { "v": ["بنفسجي"] }, "Rosy brown": { "v": ["بُنِّي زهري"] }, "Whiskey": { "v": ["نبيذي"] } } }, { "l": "ast", "t": { "Acapulco": { "v": ["Acapulcu"] }, "Blue Violet": { "v": ["Viola azulao"] }, "Boston Blue": { "v": ["Azul Boston"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Feldspar"] }, "Gold": { "v": ["Oru"] }, "Mariner": { "v": ["Marineru"] }, "Nextcloud blue": { "v": ["Nextcloud azul"] }, "Olivine": { "v": ["Olivina"] }, "Purple": { "v": ["Moráu"] }, "Rosy brown": { "v": ["Marrón arrosao"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "az", "t": {} }, { "l": "be", "t": {} }, { "l": "bg", "t": {} }, { "l": "bn_BD", "t": {} }, { "l": "br", "t": {} }, { "l": "bs", "t": {} }, { "l": "ca", "t": {} }, { "l": "cs", "t": { "Acapulco": { "v": ["Akapulko"] }, "Blue Violet": { "v": ["Modrofialová"] }, "Boston Blue": { "v": ["Bostonská modrá"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Živicová"] }, "Gold": { "v": ["Zlatá"] }, "Mariner": { "v": ["Námořnická"] }, "Nextcloud blue": { "v": ["Nextcloud modrá"] }, "Olivine": { "v": ["Olivínová"] }, "Purple": { "v": ["Fialová"] }, "Rosy brown": { "v": ["Růžovohnědá"] }, "Whiskey": { "v": ["Whisky"] } } }, { "l": "cs_CZ", "t": { "Acapulco": { "v": ["Akapulko"] }, "Blue Violet": { "v": ["Modrofialová"] }, "Boston Blue": { "v": ["Bostonská modrá"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Živicová"] }, "Gold": { "v": ["Zlatá"] }, "Mariner": { "v": ["Námořnická"] }, "Nextcloud blue": { "v": ["Nextcloud modrá"] }, "Olivine": { "v": ["Olivínová"] }, "Purple": { "v": ["Fialová"] }, "Rosy brown": { "v": ["Růžovohnědá"] }, "Whiskey": { "v": ["Whisky"] } } }, { "l": "cy_GB", "t": {} }, { "l": "da", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Blue Violet"] }, "Boston Blue": { "v": ["Boston Blue"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Feldspar"] }, "Gold": { "v": ["Guld"] }, "Mariner": { "v": ["Mariner"] }, "Nextcloud blue": { "v": ["Nextcloud blue"] }, "Olivine": { "v": ["Olivine"] }, "Purple": { "v": ["Lilla"] }, "Rosy brown": { "v": ["Rosy brown"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "de", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Blau Violett"] }, "Boston Blue": { "v": ["Boston-Blau"] }, "Deluge": { "v": ["Sintflut"] }, "Feldspar": { "v": ["Feldspat"] }, "Gold": { "v": ["Gold"] }, "Mariner": { "v": ["Seemann"] }, "Nextcloud blue": { "v": ["Nextcloud Blau"] }, "Olivine": { "v": ["Olivin"] }, "Purple": { "v": ["Lila"] }, "Rosy brown": { "v": ["Rosiges Braun"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "de_DE", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Blau Violett"] }, "Boston Blue": { "v": ["Boston-Blau"] }, "Deluge": { "v": ["Sintflut"] }, "Feldspar": { "v": ["Feldspat"] }, "Gold": { "v": ["Gold"] }, "Mariner": { "v": ["Seemann"] }, "Nextcloud blue": { "v": ["Nextcloud Blau"] }, "Olivine": { "v": ["Olivin"] }, "Purple": { "v": ["Lila"] }, "Rosy brown": { "v": ["Rosiges Braun"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "el", "t": { "Acapulco": { "v": ["Ακαπούλκο"] }, "Blue Violet": { "v": ["Μπλε Βιολέτ"] }, "Boston Blue": { "v": ["Μπλε Βοστώνης"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Feldspar"] }, "Gold": { "v": ["Χρυσό"] }, "Mariner": { "v": ["Mariner"] }, "Nextcloud blue": { "v": ["Μπλε Nextcloud"] }, "Olivine": { "v": ["Olivine"] }, "Purple": { "v": ["Μωβ"] }, "Rosy brown": { "v": ["Ροζ καφέ"] }, "Whiskey": { "v": ["Ουίσκι"] } } }, { "l": "en_GB", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Blue Violet"] }, "Boston Blue": { "v": ["Boston Blue"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Feldspar"] }, "Gold": { "v": ["Gold"] }, "Mariner": { "v": ["Mariner"] }, "Nextcloud blue": { "v": ["Nextcloud blue"] }, "Olivine": { "v": ["Olivine"] }, "Purple": { "v": ["Purple"] }, "Rosy brown": { "v": ["Rosy brown"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "eo", "t": {} }, { "l": "es", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Violeta Azul"] }, "Boston Blue": { "v": ["Azul Boston"] }, "Deluge": { "v": ["Diluvio"] }, "Feldspar": { "v": ["Feldespato"] }, "Gold": { "v": ["Oro"] }, "Mariner": { "v": ["Marinero"] }, "Nextcloud blue": { "v": ["Azul Nextcloud"] }, "Olivine": { "v": ["Olivino"] }, "Purple": { "v": ["Púrpura"] }, "Rosy brown": { "v": ["Marrón rosáceo"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "es_419", "t": {} }, { "l": "es_AR", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Violeta Azul"] }, "Boston Blue": { "v": ["Azul Boston"] }, "Deluge": { "v": ["Diluvio"] }, "Feldspar": { "v": ["Feldespato"] }, "Gold": { "v": ["Oro"] }, "Mariner": { "v": ["Marinero"] }, "Nextcloud blue": { "v": ["Azul Nextcloud"] }, "Olivine": { "v": ["Olivino"] }, "Purple": { "v": ["Púrpura"] }, "Rosy brown": { "v": ["Marrón rosáceo"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "es_CL", "t": {} }, { "l": "es_CO", "t": {} }, { "l": "es_CR", "t": {} }, { "l": "es_DO", "t": {} }, { "l": "es_EC", "t": {} }, { "l": "es_GT", "t": {} }, { "l": "es_HN", "t": {} }, { "l": "es_MX", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Violeta Azul"] }, "Boston Blue": { "v": ["Azul Boston"] }, "Deluge": { "v": ["Diluvio"] }, "Feldspar": { "v": ["Feldespato"] }, "Gold": { "v": ["Oro"] }, "Mariner": { "v": ["Marinero"] }, "Nextcloud blue": { "v": ["Azul Nextcloud"] }, "Olivine": { "v": ["Olivino"] }, "Purple": { "v": ["Púrpura"] }, "Rosy brown": { "v": ["Marrón rosáceo"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "es_NI", "t": {} }, { "l": "es_PA", "t": {} }, { "l": "es_PE", "t": {} }, { "l": "es_PR", "t": {} }, { "l": "es_PY", "t": {} }, { "l": "es_SV", "t": {} }, { "l": "es_UY", "t": {} }, { "l": "et_EE", "t": { "Acapulco": { "v": ["Acapulco meresinine"] }, "Blue Violet": { "v": ["Sinakasvioletne"] }, "Boston Blue": { "v": ["Bostoni rohekassinine"] }, "Deluge": { "v": ["Tulvavee lilla"] }, "Feldspar": { "v": ["Põlevkivipruun"] }, "Gold": { "v": ["Kuldne"] }, "Mariner": { "v": ["Meresinine"] }, "Nextcloud blue": { "v": ["Nextcloudi sinine"] }, "Olivine": { "v": ["Oliiviroheline"] }, "Purple": { "v": ["Purpurpunane"] }, "Rosy brown": { "v": ["Roosikarva pruun"] }, "Whiskey": { "v": ["Viskikarva kollakaspruun"] } } }, { "l": "eu", "t": {} }, { "l": "fa", "t": { "Acapulco": { "v": ["آکاپولکو"] }, "Blue Violet": { "v": ["بنفش آبی"] }, "Boston Blue": { "v": ["آبی بوستونی"] }, "Deluge": { "v": ["سیل"] }, "Feldspar": { "v": ["فلدسپات"] }, "Gold": { "v": ["طلا"] }, "Mariner": { "v": ["مارینر"] }, "Nextcloud blue": { "v": ["نکس کلود آبی"] }, "Olivine": { "v": ["الیوین"] }, "Purple": { "v": ["بنفش"] }, "Rosy brown": { "v": ["قهوه‌ای رز"] }, "Whiskey": { "v": ["ویسکی"] } } }, { "l": "fi", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Sinivioletti"] }, "Boston Blue": { "v": ["Bostoninsininen"] }, "Deluge": { "v": ["Tulva"] }, "Feldspar": { "v": ["Feldspar"] }, "Gold": { "v": ["Kulta"] }, "Mariner": { "v": ["Merenkulkija"] }, "Nextcloud blue": { "v": ["Nextcloudin sininen"] }, "Olivine": { "v": ["Oliviini"] }, "Purple": { "v": ["Purppura"] }, "Rosy brown": { "v": ["Ruusunruskea"] }, "Whiskey": { "v": ["Viski"] } } }, { "l": "fo", "t": {} }, { "l": "fr", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Bleu violet"] }, "Boston Blue": { "v": ["Bleu de Boston"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Feldspar"] }, "Gold": { "v": ["Doré"] }, "Mariner": { "v": ["Mariner"] }, "Nextcloud blue": { "v": ["Bleu Nextcloud"] }, "Olivine": { "v": ["Olivine"] }, "Purple": { "v": ["Violet"] }, "Rosy brown": { "v": ["Brun rosé"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "ga", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Gorm Violet"] }, "Boston Blue": { "v": ["Bostún Gorm"] }, "Deluge": { "v": ["Díle"] }, "Feldspar": { "v": ["Feldspar"] }, "Gold": { "v": ["Óir"] }, "Mariner": { "v": ["Mairnéalach"] }, "Nextcloud blue": { "v": ["Nextcloud gorm"] }, "Olivine": { "v": ["Olaivín"] }, "Purple": { "v": ["Corcra"] }, "Rosy brown": { "v": ["Rosach donn"] }, "Whiskey": { "v": ["Fuisce"] } } }, { "l": "gd", "t": {} }, { "l": "gl", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Azul violeta"] }, "Boston Blue": { "v": ["Azul Boston"] }, "Deluge": { "v": ["Diluvio"] }, "Feldspar": { "v": ["Feldespato"] }, "Gold": { "v": ["Ouro"] }, "Mariner": { "v": ["Marino"] }, "Nextcloud blue": { "v": ["Nextcloud azul"] }, "Olivine": { "v": ["Olivina"] }, "Purple": { "v": ["Púrpura"] }, "Rosy brown": { "v": ["Pardo rosado"] }, "Whiskey": { "v": ["Whisky"] } } }, { "l": "he", "t": {} }, { "l": "hi_IN", "t": {} }, { "l": "hr", "t": {} }, { "l": "hsb", "t": {} }, { "l": "hu", "t": {} }, { "l": "hy", "t": {} }, { "l": "ia", "t": {} }, { "l": "id", "t": { "Gold": { "v": ["Emas"] }, "Nextcloud blue": { "v": ["Biru Nextcloud"] }, "Purple": { "v": ["Ungu"] } } }, { "l": "ig", "t": {} }, { "l": "is", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Bláklukka"] }, "Boston Blue": { "v": ["Bostonblátt"] }, "Deluge": { "v": ["Fjólublátt"] }, "Feldspar": { "v": ["Feldspat"] }, "Gold": { "v": ["Gull"] }, "Mariner": { "v": ["Sjóarablátt"] }, "Nextcloud blue": { "v": ["Nextcloud blátt"] }, "Olivine": { "v": ["Ólivín"] }, "Purple": { "v": ["Purpurablátt"] }, "Rosy brown": { "v": ["Rósabrúnt"] }, "Whiskey": { "v": ["Viský"] } } }, { "l": "it", "t": { "Gold": { "v": ["Oro"] }, "Nextcloud blue": { "v": ["Nextcloud blue"] }, "Purple": { "v": ["Viola"] } } }, { "l": "ja", "t": { "Acapulco": { "v": ["アカプルコ"] }, "Blue Violet": { "v": ["ブルーバイオレット"] }, "Boston Blue": { "v": ["ボストンブルー"] }, "Deluge": { "v": ["豪雨"] }, "Feldspar": { "v": ["長石"] }, "Gold": { "v": ["黄金"] }, "Mariner": { "v": ["船乗り"] }, "Nextcloud blue": { "v": ["ネクストクラウド・ブルー"] }, "Olivine": { "v": ["カンラン石"] }, "Purple": { "v": ["紫色"] }, "Rosy brown": { "v": ["バラ色"] }, "Whiskey": { "v": ["ウイスキー"] } } }, { "l": "ja_JP", "t": { "Acapulco": { "v": ["アカプルコ"] }, "Blue Violet": { "v": ["ブルーバイオレット"] }, "Boston Blue": { "v": ["ボストンブルー"] }, "Deluge": { "v": ["豪雨"] }, "Feldspar": { "v": ["長石"] }, "Gold": { "v": ["黄金"] }, "Mariner": { "v": ["船乗り"] }, "Nextcloud blue": { "v": ["ネクストクラウド・ブルー"] }, "Olivine": { "v": ["カンラン石"] }, "Purple": { "v": ["紫色"] }, "Rosy brown": { "v": ["バラ色"] }, "Whiskey": { "v": ["ウイスキー"] } } }, { "l": "ka", "t": {} }, { "l": "ka_GE", "t": {} }, { "l": "kab", "t": {} }, { "l": "kk", "t": {} }, { "l": "km", "t": {} }, { "l": "kn", "t": {} }, { "l": "ko", "t": { "Acapulco": { "v": ["아카풀코"] }, "Blue Violet": { "v": ["푸른 보라"] }, "Boston Blue": { "v": ["보스턴 블루"] }, "Deluge": { "v": ["폭우"] }, "Feldspar": { "v": ["장석"] }, "Gold": { "v": ["금"] }, "Mariner": { "v": ["뱃사람"] }, "Nextcloud blue": { "v": ["Nextcloud 파랑"] }, "Olivine": { "v": ["감람석"] }, "Purple": { "v": ["보라"] }, "Rosy brown": { "v": ["로지 브라운"] }, "Whiskey": { "v": ["위스키"] } } }, { "l": "la", "t": {} }, { "l": "lb", "t": {} }, { "l": "lo", "t": {} }, { "l": "lt_LT", "t": {} }, { "l": "lv", "t": {} }, { "l": "mk", "t": {} }, { "l": "mn", "t": {} }, { "l": "mr", "t": {} }, { "l": "ms_MY", "t": {} }, { "l": "my", "t": {} }, { "l": "nb", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Blå fiolett"] }, "Boston Blue": { "v": ["Boston blå"] }, "Deluge": { "v": ["Syndflod"] }, "Feldspar": { "v": ["Feltspat"] }, "Gold": { "v": ["Gull"] }, "Mariner": { "v": ["Mariner"] }, "Nextcloud blue": { "v": ["Nextcloud-blå"] }, "Olivine": { "v": ["Olivin"] }, "Purple": { "v": ["Lilla"] }, "Rosy brown": { "v": ["Rosenrød brun"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "ne", "t": {} }, { "l": "nl", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Blauw Paars"] }, "Boston Blue": { "v": ["Boston Blauw"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Veldspaat"] }, "Gold": { "v": ["Goud"] }, "Mariner": { "v": ["Marine blauw"] }, "Nextcloud blue": { "v": ["Nextcloud blauw"] }, "Olivine": { "v": ["Olivijn"] }, "Purple": { "v": ["Paars"] }, "Rosy brown": { "v": ["Rozig bruin"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "nn_NO", "t": {} }, { "l": "oc", "t": {} }, { "l": "pl", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Niebieski fiolet"] }, "Boston Blue": { "v": ["Błękit Bostonu"] }, "Deluge": { "v": ["Potop"] }, "Feldspar": { "v": ["Skaleń"] }, "Gold": { "v": ["Złote"] }, "Mariner": { "v": ["Marynarz"] }, "Nextcloud blue": { "v": ["Niebieskie Nextcloud"] }, "Olivine": { "v": ["Oliwin"] }, "Purple": { "v": ["Fioletowy"] }, "Rosy brown": { "v": ["Różowy brąz"] }, "Whiskey": { "v": ["Whisky"] } } }, { "l": "ps", "t": {} }, { "l": "pt_BR", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Violeta Azul"] }, "Boston Blue": { "v": ["Violeta Azul"] }, "Deluge": { "v": ["Dilúvio"] }, "Feldspar": { "v": ["Feldspato"] }, "Gold": { "v": ["Ouro"] }, "Mariner": { "v": ["Marinheiro"] }, "Nextcloud blue": { "v": ["azul Nextcloud"] }, "Olivine": { "v": ["Olivina"] }, "Purple": { "v": ["Roxo"] }, "Rosy brown": { "v": ["Castanho rosado"] }, "Whiskey": { "v": ["Uísque"] } } }, { "l": "pt_PT", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Azul violeta"] }, "Boston Blue": { "v": ["Azul Boston"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Feldspar"] }, "Gold": { "v": ["Ouro"] }, "Mariner": { "v": ["Mariner"] }, "Nextcloud blue": { "v": ["Nextcloud azul"] }, "Olivine": { "v": ["Olivine"] }, "Purple": { "v": ["Púrpura"] }, "Rosy brown": { "v": ["Castanho rosado"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "ro", "t": { "Gold": { "v": ["Aur"] }, "Nextcloud blue": { "v": ["Nextcloud albastru"] }, "Purple": { "v": ["Purpuriu"] } } }, { "l": "ru", "t": { "Acapulco": { "v": ["Акапулько"] }, "Blue Violet": { "v": ["Синий фиолет"] }, "Boston Blue": { "v": ["Синий Бостон"] }, "Deluge": { "v": ["Перламутрово-фиолетовый"] }, "Feldspar": { "v": ["Античная латунь"] }, "Gold": { "v": ["Золотой"] }, "Mariner": { "v": ["Морской"] }, "Nextcloud blue": { "v": ["Nextcloud голубой"] }, "Olivine": { "v": [" Оливковый"] }, "Purple": { "v": ["Фиолетовый"] }, "Rosy brown": { "v": ["Розово-коричневый"] }, "Whiskey": { "v": ["Виски"] } } }, { "l": "sc", "t": {} }, { "l": "si", "t": {} }, { "l": "sk", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Modro fialová"] }, "Boston Blue": { "v": ["Bostonská modrá"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Živec"] }, "Gold": { "v": ["Zlatá"] }, "Mariner": { "v": ["Námorník"] }, "Nextcloud blue": { "v": ["Nextcloud modrá"] }, "Olivine": { "v": ["Olivová"] }, "Purple": { "v": ["Fialová"] }, "Rosy brown": { "v": ["Ružovo hnedá"] }, "Whiskey": { "v": ["Whisky"] } } }, { "l": "sl", "t": {} }, { "l": "sq", "t": {} }, { "l": "sr", "t": { "Acapulco": { "v": ["Акапулко"] }, "Blue Violet": { "v": ["Плаво љубичаста"] }, "Boston Blue": { "v": ["Бостон плава"] }, "Deluge": { "v": ["Поплава"] }, "Feldspar": { "v": ["Фелдспар"] }, "Gold": { "v": ["Злато"] }, "Mariner": { "v": ["Морнар"] }, "Nextcloud blue": { "v": ["Nextcloud плава"] }, "Olivine": { "v": ["Маслинаста"] }, "Purple": { "v": ["Пурпурна"] }, "Rosy brown": { "v": ["Роси браон"] }, "Whiskey": { "v": ["Виски"] } } }, { "l": "sr@latin", "t": {} }, { "l": "sv", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Blåviolett"] }, "Boston Blue": { "v": ["Bostonblå"] }, "Deluge": { "v": ["Skyfallsblå"] }, "Feldspar": { "v": ["Feldspat"] }, "Gold": { "v": ["Guld"] }, "Mariner": { "v": ["Marinblå"] }, "Nextcloud blue": { "v": ["Nextcloud-blå"] }, "Olivine": { "v": ["Olivin"] }, "Purple": { "v": ["Lila"] }, "Rosy brown": { "v": ["Rosabrun"] }, "Whiskey": { "v": ["Whisky"] } } }, { "l": "sw", "t": {} }, { "l": "ta", "t": {} }, { "l": "th", "t": {} }, { "l": "tk", "t": {} }, { "l": "tr", "t": { "Acapulco": { "v": ["Akapulko"] }, "Blue Violet": { "v": ["Mavi mor"] }, "Boston Blue": { "v": ["Boston mavisi"] }, "Deluge": { "v": ["Sel"] }, "Feldspar": { "v": ["Feldispat"] }, "Gold": { "v": ["Altın"] }, "Mariner": { "v": ["Denizci"] }, "Nextcloud blue": { "v": ["Nextcloud mavi"] }, "Olivine": { "v": ["Zeytinlik"] }, "Purple": { "v": ["Mor"] }, "Rosy brown": { "v": ["Kırmızımsı kahverengi"] }, "Whiskey": { "v": ["Viski"] } } }, { "l": "ug", "t": {} }, { "l": "uk", "t": { "Acapulco": { "v": ["Акапулько"] }, "Blue Violet": { "v": ["Блакитна фіалка"] }, "Boston Blue": { "v": ["Бостонський синій"] }, "Deluge": { "v": ["Злива"] }, "Feldspar": { "v": ["Польові шпати"] }, "Gold": { "v": ["Золотий"] }, "Mariner": { "v": ["Морський"] }, "Nextcloud blue": { "v": ["Блакитний Nextcloud"] }, "Olivine": { "v": ["Олива"] }, "Purple": { "v": ["Фіолетовий"] }, "Rosy brown": { "v": ["Темно-рожевий"] }, "Whiskey": { "v": ["Кола"] } } }, { "l": "ur_PK", "t": {} }, { "l": "uz", "t": { "Acapulco": { "v": ["Akapulko"] }, "Blue Violet": { "v": ["Moviy binafsha"] }, "Boston Blue": { "v": ["Boston ko'k"] }, "Deluge": { "v": ["To'fon"] }, "Feldspar": { "v": ["Feldspar"] }, "Gold": { "v": ["Oltin"] }, "Mariner": { "v": ["Dengizchi"] }, "Nextcloud blue": { "v": ["Ko'k Nextcloud "] }, "Olivine": { "v": ["Olivine"] }, "Purple": { "v": ["Binafsha"] }, "Rosy brown": { "v": ["Qizil jigarrang"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "vi", "t": {} }, { "l": "zh_CN", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["瓦罗兰特蓝"] }, "Boston Blue": { "v": ["波士顿蓝"] }, "Deluge": { "v": ["洪水色"] }, "Feldspar": { "v": ["长石"] }, "Gold": { "v": ["金色"] }, "Mariner": { "v": ["水手"] }, "Nextcloud blue": { "v": ["Nextcloud 蓝"] }, "Olivine": { "v": ["橄榄石色"] }, "Purple": { "v": ["紫色"] }, "Rosy brown": { "v": ["玫瑰棕色"] }, "Whiskey": { "v": ["威士忌"] } } }, { "l": "zh_HK", "t": { "Acapulco": { "v": ["阿卡普爾科"] }, "Blue Violet": { "v": ["藍紫色"] }, "Boston Blue": { "v": ["波士頓藍"] }, "Deluge": { "v": ["大洪水"] }, "Feldspar": { "v": ["長石"] }, "Gold": { "v": ["Gold"] }, "Mariner": { "v": ["海軍藍"] }, "Nextcloud blue": { "v": ["Nextcloud 藍色"] }, "Olivine": { "v": ["橄欖石色"] }, "Purple": { "v": ["紫色"] }, "Rosy brown": { "v": ["玫瑰棕色"] }, "Whiskey": { "v": ["威士忌"] } } }, { "l": "zh_TW", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["藍紫色"] }, "Boston Blue": { "v": ["波士頓藍"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["長石"] }, "Gold": { "v": ["金色"] }, "Mariner": { "v": ["海軍藍"] }, "Nextcloud blue": { "v": ["Nextcloud 藍色"] }, "Olivine": { "v": ["橄欖石色"] }, "Purple": { "v": ["紫色"] }, "Rosy brown": { "v": ["玫瑰棕色"] }, "Whiskey": { "v": ["威士忌"] } } }, { "l": "zu_ZA", "t": {} }];
const t4 = [{ "l": "af", "t": { "Actions": { "v": [""] } } }, { "l": "ar", "t": { "Actions": { "v": ["إجراءات"] } } }, { "l": "ast", "t": { "Actions": { "v": ["Aiciones"] } } }, { "l": "az", "t": { "Actions": { "v": [""] } } }, { "l": "be", "t": { "Actions": { "v": [""] } } }, { "l": "bg", "t": { "Actions": { "v": [""] } } }, { "l": "bn_BD", "t": { "Actions": { "v": [""] } } }, { "l": "br", "t": { "Actions": { "v": ["Oberioù"] } } }, { "l": "bs", "t": { "Actions": { "v": [""] } } }, { "l": "ca", "t": { "Actions": { "v": ["Accions"] } } }, { "l": "cs", "t": { "Actions": { "v": ["Akce"] } } }, { "l": "cs_CZ", "t": { "Actions": { "v": ["Akce"] } } }, { "l": "cy_GB", "t": { "Actions": { "v": [""] } } }, { "l": "da", "t": { "Actions": { "v": ["Handlinger"] } } }, { "l": "de", "t": { "Actions": { "v": ["Aktionen"] } } }, { "l": "de_DE", "t": { "Actions": { "v": ["Aktionen"] } } }, { "l": "el", "t": { "Actions": { "v": ["Ενέργειες"] } } }, { "l": "en_GB", "t": { "Actions": { "v": ["Actions"] } } }, { "l": "eo", "t": { "Actions": { "v": ["Agoj"] } } }, { "l": "es", "t": { "Actions": { "v": ["Acciones"] } } }, { "l": "es_419", "t": { "Actions": { "v": [""] } } }, { "l": "es_AR", "t": { "Actions": { "v": ["Acciones"] } } }, { "l": "es_CL", "t": { "Actions": { "v": [""] } } }, { "l": "es_CO", "t": { "Actions": { "v": [""] } } }, { "l": "es_CR", "t": { "Actions": { "v": [""] } } }, { "l": "es_DO", "t": { "Actions": { "v": [""] } } }, { "l": "es_EC", "t": { "Actions": { "v": ["Acciones"] } } }, { "l": "es_GT", "t": { "Actions": { "v": [""] } } }, { "l": "es_HN", "t": { "Actions": { "v": [""] } } }, { "l": "es_MX", "t": { "Actions": { "v": ["Acciones"] } } }, { "l": "es_NI", "t": { "Actions": { "v": [""] } } }, { "l": "es_PA", "t": { "Actions": { "v": [""] } } }, { "l": "es_PE", "t": { "Actions": { "v": [""] } } }, { "l": "es_PR", "t": { "Actions": { "v": [""] } } }, { "l": "es_PY", "t": { "Actions": { "v": [""] } } }, { "l": "es_SV", "t": { "Actions": { "v": [""] } } }, { "l": "es_UY", "t": { "Actions": { "v": [""] } } }, { "l": "et_EE", "t": { "Actions": { "v": ["Tegevus"] } } }, { "l": "eu", "t": { "Actions": { "v": ["Ekintzak"] } } }, { "l": "fa", "t": { "Actions": { "v": ["کنش‌ها"] } } }, { "l": "fi", "t": { "Actions": { "v": ["Toiminnot"] } } }, { "l": "fo", "t": { "Actions": { "v": [""] } } }, { "l": "fr", "t": { "Actions": { "v": ["Actions"] } } }, { "l": "ga", "t": { "Actions": { "v": ["Gníomhartha"] } } }, { "l": "gd", "t": { "Actions": { "v": [""] } } }, { "l": "gl", "t": { "Actions": { "v": ["Accións"] } } }, { "l": "he", "t": { "Actions": { "v": ["פעולות"] } } }, { "l": "hi_IN", "t": { "Actions": { "v": [""] } } }, { "l": "hr", "t": { "Actions": { "v": [""] } } }, { "l": "hsb", "t": { "Actions": { "v": [""] } } }, { "l": "hu", "t": { "Actions": { "v": ["Műveletek"] } } }, { "l": "hy", "t": { "Actions": { "v": [""] } } }, { "l": "ia", "t": { "Actions": { "v": [""] } } }, { "l": "id", "t": { "Actions": { "v": ["Tindakan"] } } }, { "l": "ig", "t": { "Actions": { "v": [""] } } }, { "l": "is", "t": { "Actions": { "v": ["Aðgerðir"] } } }, { "l": "it", "t": { "Actions": { "v": ["Azioni"] } } }, { "l": "ja", "t": { "Actions": { "v": ["操作"] } } }, { "l": "ja_JP", "t": { "Actions": { "v": ["操作"] } } }, { "l": "ka", "t": { "Actions": { "v": [""] } } }, { "l": "ka_GE", "t": { "Actions": { "v": [""] } } }, { "l": "kab", "t": { "Actions": { "v": [""] } } }, { "l": "kk", "t": { "Actions": { "v": [""] } } }, { "l": "km", "t": { "Actions": { "v": [""] } } }, { "l": "kn", "t": { "Actions": { "v": [""] } } }, { "l": "ko", "t": { "Actions": { "v": ["동작"] } } }, { "l": "la", "t": { "Actions": { "v": [""] } } }, { "l": "lb", "t": { "Actions": { "v": [""] } } }, { "l": "lo", "t": { "Actions": { "v": [""] } } }, { "l": "lt_LT", "t": { "Actions": { "v": ["Veiksmai"] } } }, { "l": "lv", "t": { "Actions": { "v": [""] } } }, { "l": "mk", "t": { "Actions": { "v": ["Акции"] } } }, { "l": "mn", "t": { "Actions": { "v": [""] } } }, { "l": "mr", "t": { "Actions": { "v": [""] } } }, { "l": "ms_MY", "t": { "Actions": { "v": [""] } } }, { "l": "my", "t": { "Actions": { "v": ["လုပ်ဆောင်ချက်များ"] } } }, { "l": "nb", "t": { "Actions": { "v": ["Handlinger"] } } }, { "l": "ne", "t": { "Actions": { "v": [""] } } }, { "l": "nl", "t": { "Actions": { "v": ["Acties"] } } }, { "l": "nn_NO", "t": { "Actions": { "v": [""] } } }, { "l": "oc", "t": { "Actions": { "v": ["Accions"] } } }, { "l": "pl", "t": { "Actions": { "v": ["Działania"] } } }, { "l": "ps", "t": { "Actions": { "v": [""] } } }, { "l": "pt_BR", "t": { "Actions": { "v": ["Ações"] } } }, { "l": "pt_PT", "t": { "Actions": { "v": ["Ações"] } } }, { "l": "ro", "t": { "Actions": { "v": ["Acțiuni"] } } }, { "l": "ru", "t": { "Actions": { "v": ["Действия "] } } }, { "l": "sc", "t": { "Actions": { "v": [""] } } }, { "l": "si", "t": { "Actions": { "v": [""] } } }, { "l": "sk", "t": { "Actions": { "v": ["Akcie"] } } }, { "l": "sl", "t": { "Actions": { "v": ["Dejanja"] } } }, { "l": "sq", "t": { "Actions": { "v": [""] } } }, { "l": "sr", "t": { "Actions": { "v": ["Радње"] } } }, { "l": "sr@latin", "t": { "Actions": { "v": [""] } } }, { "l": "sv", "t": { "Actions": { "v": ["Åtgärder"] } } }, { "l": "sw", "t": { "Actions": { "v": [""] } } }, { "l": "ta", "t": { "Actions": { "v": [""] } } }, { "l": "th", "t": { "Actions": { "v": [""] } } }, { "l": "tk", "t": { "Actions": { "v": [""] } } }, { "l": "tr", "t": { "Actions": { "v": ["İşlemler"] } } }, { "l": "ug", "t": { "Actions": { "v": [""] } } }, { "l": "uk", "t": { "Actions": { "v": ["Дії"] } } }, { "l": "ur_PK", "t": { "Actions": { "v": [""] } } }, { "l": "uz", "t": { "Actions": { "v": ["Harakatlar"] } } }, { "l": "vi", "t": { "Actions": { "v": [""] } } }, { "l": "zh_CN", "t": { "Actions": { "v": ["行为"] } } }, { "l": "zh_HK", "t": { "Actions": { "v": ["動作"] } } }, { "l": "zh_TW", "t": { "Actions": { "v": ["動作"] } } }, { "l": "zu_ZA", "t": { "Actions": { "v": [""] } } }];
const t7 = [{ "l": "af", "t": { "Any link": { "v": [""] } } }, { "l": "ar", "t": { "Any link": { "v": ["أيَّ رابط"] } } }, { "l": "ast", "t": { "Any link": { "v": ["Cualesquier enllaz"] } } }, { "l": "az", "t": { "Any link": { "v": [""] } } }, { "l": "be", "t": { "Any link": { "v": [""] } } }, { "l": "bg", "t": { "Any link": { "v": [""] } } }, { "l": "bn_BD", "t": { "Any link": { "v": [""] } } }, { "l": "br", "t": { "Any link": { "v": [""] } } }, { "l": "bs", "t": { "Any link": { "v": [""] } } }, { "l": "ca", "t": { "Any link": { "v": [""] } } }, { "l": "cs", "t": { "Any link": { "v": ["Jakýkoli odkaz"] } } }, { "l": "cs_CZ", "t": { "Any link": { "v": ["Jakýkoli odkaz"] } } }, { "l": "cy_GB", "t": { "Any link": { "v": [""] } } }, { "l": "da", "t": { "Any link": { "v": ["Ethvert link"] } } }, { "l": "de", "t": { "Any link": { "v": ["Irgendein Link"] } } }, { "l": "de_DE", "t": { "Any link": { "v": ["Irgendein Link"] } } }, { "l": "el", "t": { "Any link": { "v": ["Οποιοσδήποτε σύνδεσμος"] } } }, { "l": "en_GB", "t": { "Any link": { "v": ["Any link"] } } }, { "l": "eo", "t": { "Any link": { "v": [""] } } }, { "l": "es", "t": { "Any link": { "v": ["Cualquier enlace"] } } }, { "l": "es_419", "t": { "Any link": { "v": [""] } } }, { "l": "es_AR", "t": { "Any link": { "v": ["Cualquier enlace"] } } }, { "l": "es_CL", "t": { "Any link": { "v": [""] } } }, { "l": "es_CO", "t": { "Any link": { "v": [""] } } }, { "l": "es_CR", "t": { "Any link": { "v": [""] } } }, { "l": "es_DO", "t": { "Any link": { "v": [""] } } }, { "l": "es_EC", "t": { "Any link": { "v": ["Cualquier enlace"] } } }, { "l": "es_GT", "t": { "Any link": { "v": [""] } } }, { "l": "es_HN", "t": { "Any link": { "v": [""] } } }, { "l": "es_MX", "t": { "Any link": { "v": ["Cualquier enlace"] } } }, { "l": "es_NI", "t": { "Any link": { "v": [""] } } }, { "l": "es_PA", "t": { "Any link": { "v": [""] } } }, { "l": "es_PE", "t": { "Any link": { "v": [""] } } }, { "l": "es_PR", "t": { "Any link": { "v": [""] } } }, { "l": "es_PY", "t": { "Any link": { "v": [""] } } }, { "l": "es_SV", "t": { "Any link": { "v": [""] } } }, { "l": "es_UY", "t": { "Any link": { "v": [""] } } }, { "l": "et_EE", "t": { "Any link": { "v": ["Mistahes link"] } } }, { "l": "eu", "t": { "Any link": { "v": ["Edozein esteka"] } } }, { "l": "fa", "t": { "Any link": { "v": ["هر پیوندی"] } } }, { "l": "fi", "t": { "Any link": { "v": ["Mikä tahansa linkki"] } } }, { "l": "fo", "t": { "Any link": { "v": [""] } } }, { "l": "fr", "t": { "Any link": { "v": ["N'importe quel lien"] } } }, { "l": "ga", "t": { "Any link": { "v": ["Aon nasc"] } } }, { "l": "gd", "t": { "Any link": { "v": [""] } } }, { "l": "gl", "t": { "Any link": { "v": ["Calquera ligazón"] } } }, { "l": "he", "t": { "Any link": { "v": ["קישור כלשהו"] } } }, { "l": "hi_IN", "t": { "Any link": { "v": [""] } } }, { "l": "hr", "t": { "Any link": { "v": [""] } } }, { "l": "hsb", "t": { "Any link": { "v": [""] } } }, { "l": "hu", "t": { "Any link": { "v": [""] } } }, { "l": "hy", "t": { "Any link": { "v": [""] } } }, { "l": "ia", "t": { "Any link": { "v": [""] } } }, { "l": "id", "t": { "Any link": { "v": ["Semua tautan"] } } }, { "l": "ig", "t": { "Any link": { "v": [""] } } }, { "l": "is", "t": { "Any link": { "v": ["Einhver tengill"] } } }, { "l": "it", "t": { "Any link": { "v": ["Qualsiasi link"] } } }, { "l": "ja", "t": { "Any link": { "v": ["任意のリンク"] } } }, { "l": "ja_JP", "t": { "Any link": { "v": ["任意のリンク"] } } }, { "l": "ka", "t": { "Any link": { "v": [""] } } }, { "l": "ka_GE", "t": { "Any link": { "v": [""] } } }, { "l": "kab", "t": { "Any link": { "v": [""] } } }, { "l": "kk", "t": { "Any link": { "v": [""] } } }, { "l": "km", "t": { "Any link": { "v": [""] } } }, { "l": "kn", "t": { "Any link": { "v": [""] } } }, { "l": "ko", "t": { "Any link": { "v": ["아무 링크"] } } }, { "l": "la", "t": { "Any link": { "v": [""] } } }, { "l": "lb", "t": { "Any link": { "v": [""] } } }, { "l": "lo", "t": { "Any link": { "v": [""] } } }, { "l": "lt_LT", "t": { "Any link": { "v": [""] } } }, { "l": "lv", "t": { "Any link": { "v": [""] } } }, { "l": "mk", "t": { "Any link": { "v": [""] } } }, { "l": "mn", "t": { "Any link": { "v": [""] } } }, { "l": "mr", "t": { "Any link": { "v": [""] } } }, { "l": "ms_MY", "t": { "Any link": { "v": [""] } } }, { "l": "my", "t": { "Any link": { "v": [""] } } }, { "l": "nb", "t": { "Any link": { "v": ["Enhver lenke"] } } }, { "l": "ne", "t": { "Any link": { "v": [""] } } }, { "l": "nl", "t": { "Any link": { "v": ["Elke link"] } } }, { "l": "nn_NO", "t": { "Any link": { "v": [""] } } }, { "l": "oc", "t": { "Any link": { "v": [""] } } }, { "l": "pl", "t": { "Any link": { "v": ["Dowolny link"] } } }, { "l": "ps", "t": { "Any link": { "v": [""] } } }, { "l": "pt_BR", "t": { "Any link": { "v": ["Qualquer link"] } } }, { "l": "pt_PT", "t": { "Any link": { "v": ["Qualquer hiperligação"] } } }, { "l": "ro", "t": { "Any link": { "v": ["Orice link"] } } }, { "l": "ru", "t": { "Any link": { "v": ["Любая ссылка"] } } }, { "l": "sc", "t": { "Any link": { "v": [""] } } }, { "l": "si", "t": { "Any link": { "v": [""] } } }, { "l": "sk", "t": { "Any link": { "v": ["Akýkoľvek odkaz"] } } }, { "l": "sl", "t": { "Any link": { "v": [""] } } }, { "l": "sq", "t": { "Any link": { "v": [""] } } }, { "l": "sr", "t": { "Any link": { "v": ["Било који линк"] } } }, { "l": "sr@latin", "t": { "Any link": { "v": [""] } } }, { "l": "sv", "t": { "Any link": { "v": ["Vilken länk som helst"] } } }, { "l": "sw", "t": { "Any link": { "v": [""] } } }, { "l": "ta", "t": { "Any link": { "v": [""] } } }, { "l": "th", "t": { "Any link": { "v": [""] } } }, { "l": "tk", "t": { "Any link": { "v": [""] } } }, { "l": "tr", "t": { "Any link": { "v": ["Herhangi bir bağlantı"] } } }, { "l": "ug", "t": { "Any link": { "v": [""] } } }, { "l": "uk", "t": { "Any link": { "v": ["Будь-яке посилання"] } } }, { "l": "ur_PK", "t": { "Any link": { "v": [""] } } }, { "l": "uz", "t": { "Any link": { "v": ["Har qanday havola"] } } }, { "l": "vi", "t": { "Any link": { "v": [""] } } }, { "l": "zh_CN", "t": { "Any link": { "v": ["任何链接"] } } }, { "l": "zh_HK", "t": { "Any link": { "v": ["任何連結"] } } }, { "l": "zh_TW", "t": { "Any link": { "v": ["任何連結"] } } }, { "l": "zu_ZA", "t": { "Any link": { "v": [""] } } }];
const t9 = [{ "l": "af", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "ar", "t": { "Avatar of {displayName}": { "v": ["صورة الملف الشخصي الرمزية لــ {displayName}  "] }, "Avatar of {displayName}, {status}": { "v": ["صورة الملف الشخصي الرمزية لــ {displayName}، {status}"] } } }, { "l": "ast", "t": { "Avatar of {displayName}": { "v": ["Avatar de: {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de: {displayName}, {status}"] } } }, { "l": "az", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "be", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "bg", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "bn_BD", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "br", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "bs", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "ca", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "cs", "t": { "Avatar of {displayName}": { "v": ["Zástupný obrázek uživatele {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Zástupný obrázek uživatele {displayName}, {status}"] } } }, { "l": "cs_CZ", "t": { "Avatar of {displayName}": { "v": ["Zástupný obrázek uživatele {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Zástupný obrázek uživatele {displayName}, {status}"] } } }, { "l": "cy_GB", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "da", "t": { "Avatar of {displayName}": { "v": ["Avatar af {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar af {displayName}, {status}"] } } }, { "l": "de", "t": { "Avatar of {displayName}": { "v": ["Avatar von {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar von {displayName}, {status}"] } } }, { "l": "de_DE", "t": { "Avatar of {displayName}": { "v": ["Avatar von {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar von {displayName}, {status}"] } } }, { "l": "el", "t": { "Avatar of {displayName}": { "v": ["Άβαταρ του {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Άβαταρ του {displayName}, {status}"] } } }, { "l": "en_GB", "t": { "Avatar of {displayName}": { "v": ["Avatar of {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar of {displayName}, {status}"] } } }, { "l": "eo", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "es_419", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_AR", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "es_CL", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_CO", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_CR", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_DO", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_EC", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "es_GT", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_HN", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_MX", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "es_NI", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_PA", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_PE", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_PR", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_PY", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_SV", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_UY", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "et_EE", "t": { "Avatar of {displayName}": { "v": ["Avatar {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar {displayName}, {status}"] } } }, { "l": "eu", "t": { "Avatar of {displayName}": { "v": ["{displayName}-(e)n irudia"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName} -(e)n irudia, {status}"] } } }, { "l": "fa", "t": { "Avatar of {displayName}": { "v": ["آواتار {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["آواتار {displayName} ، {status}"] } } }, { "l": "fi", "t": { "Avatar of {displayName}": { "v": ["{displayName}n avatar"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}n avatar, {status}"] } } }, { "l": "fo", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "fr", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "ga", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "gd", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "gl", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "he", "t": { "Avatar of {displayName}": { "v": ["תמונה ייצוגית של {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["תמונה ייצוגית של {displayName}, {status}"] } } }, { "l": "hi_IN", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "hr", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "hsb", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "hu", "t": { "Avatar of {displayName}": { "v": ["{displayName} profilképe"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName} profilképe, {status}"] } } }, { "l": "hy", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "ia", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "id", "t": { "Avatar of {displayName}": { "v": ["Avatar {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar {displayName}, {status}"] } } }, { "l": "ig", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "is", "t": { "Avatar of {displayName}": { "v": ["Auðkennismynd fyrir {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Auðkennismynd fyrir {displayName}, {status}"] } } }, { "l": "it", "t": { "Avatar of {displayName}": { "v": ["Avatar di {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar di {displayName}, {status}"] } } }, { "l": "ja", "t": { "Avatar of {displayName}": { "v": ["{displayName} のアバター"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}, {status} のアバター"] } } }, { "l": "ja_JP", "t": { "Avatar of {displayName}": { "v": ["{displayName} のアバター"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}, {status} のアバター"] } } }, { "l": "ka", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "ka_GE", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "kab", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "kk", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "km", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "kn", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "ko", "t": { "Avatar of {displayName}": { "v": ["{displayName}님의 아바타"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}, {status}님의 아바타"] } } }, { "l": "la", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "lb", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "lo", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "lt_LT", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "lv", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "mk", "t": { "Avatar of {displayName}": { "v": ["Аватар на {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Аватар на {displayName}, {status}"] } } }, { "l": "mn", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "mr", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "ms_MY", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "my", "t": { "Avatar of {displayName}": { "v": ["{displayName} ၏ ကိုယ်ပွား"] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "nb", "t": { "Avatar of {displayName}": { "v": ["Avataren til {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}'s avatar, {status}"] } } }, { "l": "ne", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "nl", "t": { "Avatar of {displayName}": { "v": ["Avatar van {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar van {displayName}, {status}"] } } }, { "l": "nn_NO", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "oc", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "pl", "t": { "Avatar of {displayName}": { "v": ["Awatar {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Awatar {displayName}, {status}"] } } }, { "l": "ps", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "pt_BR", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "pt_PT", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "ro", "t": { "Avatar of {displayName}": { "v": ["Avatarul lui {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatarul lui {displayName}, {status}"] } } }, { "l": "ru", "t": { "Avatar of {displayName}": { "v": ["Аватар {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Фотография {displayName}, {status}"] } } }, { "l": "sc", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "si", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "sk", "t": { "Avatar of {displayName}": { "v": ["Avatar {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar {displayName}, {status}"] } } }, { "l": "sl", "t": { "Avatar of {displayName}": { "v": ["Podoba {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Prikazna slika {displayName}, {status}"] } } }, { "l": "sq", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "sr", "t": { "Avatar of {displayName}": { "v": ["Аватар за {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar za {displayName}, {status}"] } } }, { "l": "sr@latin", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "sv", "t": { "Avatar of {displayName}": { "v": ["{displayName}s avatar"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}s avatar, {status}"] } } }, { "l": "sw", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "ta", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "th", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "tk", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "tr", "t": { "Avatar of {displayName}": { "v": ["{displayName} avatarı"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}, {status} avatarı"] } } }, { "l": "ug", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "uk", "t": { "Avatar of {displayName}": { "v": ["Аватар {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Аватар {displayName}, {status}"] } } }, { "l": "ur_PK", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "uz", "t": { "Avatar of {displayName}": { "v": [" {displayName}Avatari"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}, {status} Avatari"] } } }, { "l": "vi", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "zh_CN", "t": { "Avatar of {displayName}": { "v": ["{displayName}的头像"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}的头像，{status}"] } } }, { "l": "zh_HK", "t": { "Avatar of {displayName}": { "v": ["{displayName} 的頭像"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName} 的頭像，{status}"] } } }, { "l": "zh_TW", "t": { "Avatar of {displayName}": { "v": ["{displayName} 的大頭照"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}, {status} 的大頭照"] } } }, { "l": "zu_ZA", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }];
const t10 = [{ "l": "af", "t": {} }, { "l": "ar", "t": { "away": { "v": ["غير موجود"] }, "busy": { "v": ["مشغول"] }, "do not disturb": { "v": ["يُرجى عدم الإزعاج"] }, "invisible": { "v": ["غير مرئي"] }, "offline": { "v": ["غير متصل"] }, "online": { "v": ["متصل"] } } }, { "l": "ast", "t": { "away": { "v": ["ausente"] }, "busy": { "v": ["ocupáu"] }, "do not disturb": { "v": ["nun molestar"] }, "invisible": { "v": ["invisible"] }, "offline": { "v": ["desconectáu"] }, "online": { "v": ["en llinia"] } } }, { "l": "az", "t": {} }, { "l": "be", "t": {} }, { "l": "bg", "t": {} }, { "l": "bn_BD", "t": {} }, { "l": "br", "t": {} }, { "l": "bs", "t": {} }, { "l": "ca", "t": {} }, { "l": "cs", "t": { "away": { "v": ["pryč"] }, "busy": { "v": ["zaneprádněn(a)"] }, "do not disturb": { "v": ["nerušit"] }, "invisible": { "v": ["neviditelné"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "cs_CZ", "t": { "away": { "v": ["pryč"] }, "busy": { "v": ["zaneprádněn(a)"] }, "do not disturb": { "v": ["nerušit"] }, "invisible": { "v": ["neviditelné"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "cy_GB", "t": {} }, { "l": "da", "t": { "away": { "v": ["væk"] }, "busy": { "v": ["optaget"] }, "do not disturb": { "v": ["forstyr ikke"] }, "invisible": { "v": ["usynlig"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "de", "t": { "away": { "v": ["Abwesend"] }, "busy": { "v": ["Beschäftigt"] }, "do not disturb": { "v": ["Bitte nicht stören"] }, "invisible": { "v": ["Unsichtbar"] }, "offline": { "v": ["Offline"] }, "online": { "v": ["Online"] } } }, { "l": "de_DE", "t": { "away": { "v": ["Abwesend"] }, "busy": { "v": ["Beschäftigt"] }, "do not disturb": { "v": ["Bitte nicht stören"] }, "invisible": { "v": ["Unsichtbar"] }, "offline": { "v": ["Offline"] }, "online": { "v": ["Online"] } } }, { "l": "el", "t": { "away": { "v": ["μακριά"] }, "busy": { "v": ["απασχολημένος"] }, "do not disturb": { "v": ["μην ενοχλείτε"] }, "invisible": { "v": ["αόρατο"] }, "offline": { "v": ["εκτός σύνδεσης"] }, "online": { "v": ["συνδεδεμένος"] } } }, { "l": "en_GB", "t": { "away": { "v": ["away"] }, "busy": { "v": ["busy"] }, "do not disturb": { "v": ["do not disturb"] }, "invisible": { "v": ["invisible"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "eo", "t": {} }, { "l": "es", "t": { "away": { "v": ["ausente"] }, "busy": { "v": ["ocupado"] }, "do not disturb": { "v": ["no molestar"] }, "invisible": { "v": ["invisible"] }, "offline": { "v": ["fuera de línea"] }, "online": { "v": ["en línea"] } } }, { "l": "es_419", "t": {} }, { "l": "es_AR", "t": { "away": { "v": ["ausente"] }, "busy": { "v": ["ocupado"] }, "do not disturb": { "v": ["no molestar"] }, "invisible": { "v": ["invisible"] }, "offline": { "v": ["desconectado"] }, "online": { "v": ["en línea"] } } }, { "l": "es_CL", "t": {} }, { "l": "es_CO", "t": {} }, { "l": "es_CR", "t": {} }, { "l": "es_DO", "t": {} }, { "l": "es_EC", "t": {} }, { "l": "es_GT", "t": {} }, { "l": "es_HN", "t": {} }, { "l": "es_MX", "t": { "away": { "v": ["ausente"] }, "busy": { "v": ["ocupado"] }, "do not disturb": { "v": ["no molestar"] }, "invisible": { "v": ["invisible"] }, "offline": { "v": ["fuera de línea"] }, "online": { "v": ["en línea"] } } }, { "l": "es_NI", "t": {} }, { "l": "es_PA", "t": {} }, { "l": "es_PE", "t": {} }, { "l": "es_PR", "t": {} }, { "l": "es_PY", "t": {} }, { "l": "es_SV", "t": {} }, { "l": "es_UY", "t": {} }, { "l": "et_EE", "t": { "away": { "v": ["eemal"] }, "busy": { "v": ["hõivatud"] }, "do not disturb": { "v": ["ära sega"] }, "invisible": { "v": ["nähtamatu"] }, "offline": { "v": ["pole võrgus"] }, "online": { "v": ["võrgus"] } } }, { "l": "eu", "t": {} }, { "l": "fa", "t": { "away": { "v": ["دور از دستگاه"] }, "busy": { "v": ["مشغول"] }, "do not disturb": { "v": ["مزاحم نشوید"] }, "invisible": { "v": ["مخفی"] }, "offline": { "v": ["برون‌خط"] }, "online": { "v": ["برخط"] } } }, { "l": "fi", "t": { "away": { "v": ["poissa"] }, "busy": { "v": ["varattu"] }, "do not disturb": { "v": ["älä häiritse"] }, "invisible": { "v": ["näkymätön"] }, "offline": { "v": ["ei linjalla"] }, "online": { "v": ["linjalla"] } } }, { "l": "fo", "t": {} }, { "l": "fr", "t": { "away": { "v": ["absent"] }, "busy": { "v": ["occupé"] }, "do not disturb": { "v": ["ne pas déranger"] }, "invisible": { "v": ["invisible"] }, "offline": { "v": ["hors ligne"] }, "online": { "v": ["en ligne"] } } }, { "l": "ga", "t": { "away": { "v": ["ar shiúl"] }, "busy": { "v": ["gnóthach"] }, "do not disturb": { "v": ["ná cur as"] }, "invisible": { "v": ["dofheicthe"] }, "offline": { "v": ["as líne"] }, "online": { "v": ["ar líne"] } } }, { "l": "gd", "t": {} }, { "l": "gl", "t": { "away": { "v": ["ausente"] }, "busy": { "v": ["ocupado"] }, "do not disturb": { "v": ["non molestar"] }, "invisible": { "v": ["invisíbel"] }, "offline": { "v": ["desconectado"] }, "online": { "v": ["conectado"] } } }, { "l": "he", "t": {} }, { "l": "hi_IN", "t": {} }, { "l": "hr", "t": {} }, { "l": "hsb", "t": {} }, { "l": "hu", "t": {} }, { "l": "hy", "t": {} }, { "l": "ia", "t": {} }, { "l": "id", "t": { "away": { "v": ["tidak tersedia"] }, "do not disturb": { "v": ["jangan ganggu"] }, "offline": { "v": ["luring"] }, "online": { "v": ["daring"] } } }, { "l": "ig", "t": {} }, { "l": "is", "t": { "away": { "v": ["í burtu"] }, "busy": { "v": ["upptekin/n"] }, "do not disturb": { "v": ["ekki ónáða"] }, "invisible": { "v": ["ósýnilegt"] }, "offline": { "v": ["ónettengt"] }, "online": { "v": ["nettengt"] } } }, { "l": "it", "t": { "away": { "v": ["via"] }, "do not disturb": { "v": ["non disturbare"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "ja", "t": { "away": { "v": ["離れる"] }, "busy": { "v": ["ビジー"] }, "do not disturb": { "v": ["邪魔をしないでください"] }, "invisible": { "v": ["不可視"] }, "offline": { "v": ["オフライン"] }, "online": { "v": ["オンライン"] } } }, { "l": "ja_JP", "t": { "away": { "v": ["離れる"] }, "busy": { "v": ["ビジー"] }, "do not disturb": { "v": ["邪魔をしないでください"] }, "invisible": { "v": ["不可視"] }, "offline": { "v": ["オフライン"] }, "online": { "v": ["オンライン"] } } }, { "l": "ka", "t": {} }, { "l": "ka_GE", "t": {} }, { "l": "kab", "t": {} }, { "l": "kk", "t": {} }, { "l": "km", "t": {} }, { "l": "kn", "t": {} }, { "l": "ko", "t": { "away": { "v": ["자리 비움"] }, "busy": { "v": ["바쁨"] }, "do not disturb": { "v": ["방해 금지"] }, "invisible": { "v": ["보이지 않음"] }, "offline": { "v": ["오프라인"] }, "online": { "v": ["온라인"] } } }, { "l": "la", "t": {} }, { "l": "lb", "t": {} }, { "l": "lo", "t": {} }, { "l": "lt_LT", "t": {} }, { "l": "lv", "t": {} }, { "l": "mk", "t": {} }, { "l": "mn", "t": {} }, { "l": "mr", "t": {} }, { "l": "ms_MY", "t": {} }, { "l": "my", "t": {} }, { "l": "nb", "t": { "away": { "v": ["borte"] }, "busy": { "v": ["opptatt"] }, "do not disturb": { "v": ["ikke forstyrr"] }, "invisible": { "v": ["usynlig"] }, "offline": { "v": ["frakoblet"] }, "online": { "v": ["tilkoblet"] } } }, { "l": "ne", "t": {} }, { "l": "nl", "t": { "away": { "v": ["weg"] }, "busy": { "v": ["bezig"] }, "do not disturb": { "v": ["niet storen"] }, "invisible": { "v": ["Onzichtbaar"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "nn_NO", "t": {} }, { "l": "oc", "t": {} }, { "l": "pl", "t": { "away": { "v": ["stąd"] }, "busy": { "v": ["zajęty"] }, "do not disturb": { "v": ["nie przeszkadzać"] }, "invisible": { "v": ["niewidzialny"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "ps", "t": {} }, { "l": "pt_BR", "t": { "away": { "v": ["ausente"] }, "busy": { "v": ["ocupado"] }, "do not disturb": { "v": ["não perturbe"] }, "invisible": { "v": ["invisível"] }, "offline": { "v": ["off-line"] }, "online": { "v": ["on-line"] } } }, { "l": "pt_PT", "t": { "away": { "v": ["longe"] }, "busy": { "v": ["ocupado"] }, "do not disturb": { "v": ["não incomodar"] }, "invisible": { "v": ["invisível"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "ro", "t": { "away": { "v": ["plecat"] }, "do not disturb": { "v": ["nu deranjați"] }, "offline": { "v": ["deconectat"] }, "online": { "v": ["online"] } } }, { "l": "ru", "t": { "away": { "v": ["отсутствие"] }, "busy": { "v": ["занятый"] }, "do not disturb": { "v": ["не беспокоить"] }, "invisible": { "v": ["невидимый"] }, "offline": { "v": ["офлайн"] }, "online": { "v": ["онлайн"] } } }, { "l": "sc", "t": {} }, { "l": "si", "t": {} }, { "l": "sk", "t": { "away": { "v": ["neprítomný"] }, "busy": { "v": ["zaneprázdnený"] }, "do not disturb": { "v": ["nerušiť"] }, "invisible": { "v": ["neviditeľný"] }, "offline": { "v": ["Odpojený - offline"] }, "online": { "v": ["Pripojený - online"] } } }, { "l": "sl", "t": {} }, { "l": "sq", "t": {} }, { "l": "sr", "t": { "away": { "v": ["одсутан"] }, "busy": { "v": ["заузет"] }, "do not disturb": { "v": ["не узнемиравај"] }, "invisible": { "v": ["невидљиво"] }, "offline": { "v": ["ван мреже"] }, "online": { "v": ["на мрежи"] } } }, { "l": "sr@latin", "t": {} }, { "l": "sv", "t": { "away": { "v": ["borta"] }, "busy": { "v": ["upptagen"] }, "do not disturb": { "v": ["stör ej"] }, "invisible": { "v": ["osynlig"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "sw", "t": {} }, { "l": "ta", "t": {} }, { "l": "th", "t": {} }, { "l": "tk", "t": {} }, { "l": "tr", "t": { "away": { "v": ["Uzakta"] }, "busy": { "v": ["Meşgul"] }, "do not disturb": { "v": ["Rahatsız etmeyin"] }, "invisible": { "v": ["görünmez"] }, "offline": { "v": ["Çevrim dışı"] }, "online": { "v": ["Çevrim içi"] } } }, { "l": "ug", "t": {} }, { "l": "uk", "t": { "away": { "v": ["відсутній"] }, "busy": { "v": ["зайнято"] }, "do not disturb": { "v": ["не турбувати"] }, "invisible": { "v": ["Невидимий"] }, "offline": { "v": ["не в мережі"] }, "online": { "v": ["в мережі"] } } }, { "l": "ur_PK", "t": {} }, { "l": "uz", "t": { "away": { "v": ["uzoqda"] }, "busy": { "v": ["band"] }, "do not disturb": { "v": ["bezovta qilmang"] }, "invisible": { "v": ["ko'rinmas"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "vi", "t": {} }, { "l": "zh_CN", "t": { "away": { "v": ["离开"] }, "busy": { "v": ["繁忙"] }, "do not disturb": { "v": ["请勿打扰"] }, "invisible": { "v": ["隐藏的"] }, "offline": { "v": ["离线"] }, "online": { "v": ["在线"] } } }, { "l": "zh_HK", "t": { "away": { "v": ["離開"] }, "busy": { "v": ["忙碌"] }, "do not disturb": { "v": ["請勿打擾"] }, "invisible": { "v": ["隐藏的"] }, "offline": { "v": ["離線"] }, "online": { "v": ["在線"] } } }, { "l": "zh_TW", "t": { "away": { "v": ["離開"] }, "busy": { "v": ["忙碌"] }, "do not disturb": { "v": ["請勿打擾"] }, "invisible": { "v": ["不可見"] }, "offline": { "v": ["離線"] }, "online": { "v": ["線上"] } } }, { "l": "zu_ZA", "t": {} }];
const t11 = [{ "l": "af", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "ar", "t": { "Back to provider selection": { "v": ["عودة إلى اختيار المزوّد"] }, "Close Smart Picker": { "v": ["إغلاق المحدد الذكي"] }, "Smart Picker": { "v": ["اللاقط الذكي smart picker"] } } }, { "l": "ast", "t": { "Back to provider selection": { "v": ["Volver a la seleición de fornidores"] }, "Close Smart Picker": { "v": ["Zarrar la seleición intelixente"] }, "Smart Picker": { "v": ["Selector intelixente"] } } }, { "l": "az", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "be", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "bg", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "bn_BD", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "br", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "bs", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "ca", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "cs", "t": { "Back to provider selection": { "v": ["Zpět na výběr poskytovatele"] }, "Close Smart Picker": { "v": ["Zavřít inteligentní výběr"] }, "Smart Picker": { "v": ["Inteligentní výběr"] } } }, { "l": "cs_CZ", "t": { "Back to provider selection": { "v": ["Zpět na výběr poskytovatele"] }, "Close Smart Picker": { "v": ["Zavřít inteligentní výběr"] }, "Smart Picker": { "v": ["Inteligentní výběr"] } } }, { "l": "cy_GB", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "da", "t": { "Back to provider selection": { "v": ["Tilbage til udbydervalg"] }, "Close Smart Picker": { "v": ["Luk Smart Vælger"] }, "Smart Picker": { "v": ["Smart Vælger"] } } }, { "l": "de", "t": { "Back to provider selection": { "v": ["Zurück zur Anbieterauswahl"] }, "Close Smart Picker": { "v": ["Smart Picker schließen"] }, "Smart Picker": { "v": ["Smart Picker"] } } }, { "l": "de_DE", "t": { "Back to provider selection": { "v": ["Zurück zur Anbieterauswahl"] }, "Close Smart Picker": { "v": ["Smart Picker schließen"] }, "Smart Picker": { "v": ["Smart Picker"] } } }, { "l": "el", "t": { "Back to provider selection": { "v": ["Επιστροφή στην επιλογή παρόχου"] }, "Close Smart Picker": { "v": ["Κλείσιμο Έξυπνης Επιλογής"] }, "Smart Picker": { "v": ["Έξυπνη Επιλογή"] } } }, { "l": "en_GB", "t": { "Back to provider selection": { "v": ["Back to provider selection"] }, "Close Smart Picker": { "v": ["Close Smart Picker"] }, "Smart Picker": { "v": ["Smart Picker"] } } }, { "l": "eo", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es", "t": { "Back to provider selection": { "v": ["Volver a la selección de proveedor"] }, "Close Smart Picker": { "v": ["Cerrar selector inteligente"] }, "Smart Picker": { "v": ["Selector inteligente"] } } }, { "l": "es_419", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_AR", "t": { "Back to provider selection": { "v": ["Volver a la selección de proveedor"] }, "Close Smart Picker": { "v": ["Cerrar selector inteligente"] }, "Smart Picker": { "v": ["Selector inteligente"] } } }, { "l": "es_CL", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_CO", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_CR", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_DO", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_EC", "t": { "Back to provider selection": { "v": ["Volver a la selección de proveedor"] }, "Close Smart Picker": { "v": ["Cerrar selector inteligente"] }, "Smart Picker": { "v": ["Selector inteligente"] } } }, { "l": "es_GT", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_HN", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_MX", "t": { "Back to provider selection": { "v": ["Volver a la selección de proveedor"] }, "Close Smart Picker": { "v": ["Cerrar selector inteligente"] }, "Smart Picker": { "v": ["Selector inteligente"] } } }, { "l": "es_NI", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_PA", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_PE", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_PR", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_PY", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_SV", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_UY", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "et_EE", "t": { "Back to provider selection": { "v": ["Tagasi teenusepakkuja valiku juurde"] }, "Close Smart Picker": { "v": ["Sulge nutikas valija"] }, "Smart Picker": { "v": ["Nutikas valija"] } } }, { "l": "eu", "t": { "Back to provider selection": { "v": ["Itzuli hornitzaileen hautapenera"] }, "Close Smart Picker": { "v": ["Itxi hautatzaile adimenduna"] }, "Smart Picker": { "v": ["Hautatzaile adimenduna"] } } }, { "l": "fa", "t": { "Back to provider selection": { "v": ["بازگشت به انتخاب ارائه دهنده"] }, "Close Smart Picker": { "v": ["بستن انتخاب‌گر هوشمند"] }, "Smart Picker": { "v": ["انتخابگر هوشمند"] } } }, { "l": "fi", "t": { "Back to provider selection": { "v": ["Takaisin toimittajavalintaan"] }, "Close Smart Picker": { "v": ["Sulje älykas valitsin"] }, "Smart Picker": { "v": ["Älykäs valitsin"] } } }, { "l": "fo", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "fr", "t": { "Back to provider selection": { "v": ["Revenir à la sélection du fournisseur"] }, "Close Smart Picker": { "v": ["Fermer le sélecteur intelligent"] }, "Smart Picker": { "v": ["Sélecteur intelligent"] } } }, { "l": "ga", "t": { "Back to provider selection": { "v": ["Ar ais go roghnú soláthróra"] }, "Close Smart Picker": { "v": ["Dún Piocálaí Cliste"] }, "Smart Picker": { "v": ["Roghnóir Cliste"] } } }, { "l": "gd", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "gl", "t": { "Back to provider selection": { "v": ["Volver á selección do provedor"] }, "Close Smart Picker": { "v": ["Pechar o Selector intelixente"] }, "Smart Picker": { "v": ["Selector intelixente"] } } }, { "l": "he", "t": { "Back to provider selection": { "v": ["חזרה לבחירת ספק"] }, "Close Smart Picker": { "v": ["סגירת הבורר החכם"] }, "Smart Picker": { "v": ["בורר חכם"] } } }, { "l": "hi_IN", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "hr", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "hsb", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "hu", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "hy", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "ia", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "id", "t": { "Back to provider selection": { "v": ["Kembali ke pemilihan penyedia"] }, "Close Smart Picker": { "v": ["Tutup Pemilih Cerdas"] }, "Smart Picker": { "v": ["Pemilih Cerdas"] } } }, { "l": "ig", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "is", "t": { "Back to provider selection": { "v": ["Til baka í val á þjónustuveitu"] }, "Close Smart Picker": { "v": ["Loka snjall-veljara"] }, "Smart Picker": { "v": ["Snjall-veljari"] } } }, { "l": "it", "t": { "Back to provider selection": { "v": ["Torna alla selezione del provider"] }, "Close Smart Picker": { "v": ["Chiudere lo Smart Picker"] }, "Smart Picker": { "v": ["Picker intelligente"] } } }, { "l": "ja", "t": { "Back to provider selection": { "v": ["プロバイダーの選択に戻る"] }, "Close Smart Picker": { "v": ["スマートピッカーを閉じる"] }, "Smart Picker": { "v": ["スマートピッカー"] } } }, { "l": "ja_JP", "t": { "Back to provider selection": { "v": ["プロバイダーの選択に戻る"] }, "Close Smart Picker": { "v": ["スマートピッカーを閉じる"] }, "Smart Picker": { "v": ["スマートピッカー"] } } }, { "l": "ka", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "ka_GE", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "kab", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "kk", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "km", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "kn", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "ko", "t": { "Back to provider selection": { "v": ["제공자 선택으로 돌아가기"] }, "Close Smart Picker": { "v": ["스마트 선택기 닫기"] }, "Smart Picker": { "v": ["스마트 선택기"] } } }, { "l": "la", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "lb", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "lo", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "lt_LT", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "lv", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "mk", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "mn", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "mr", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "ms_MY", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "my", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "nb", "t": { "Back to provider selection": { "v": ["Tilbake til leverandørvalg"] }, "Close Smart Picker": { "v": ["Lukk Smart Velger"] }, "Smart Picker": { "v": ["Smart Velger"] } } }, { "l": "ne", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "nl", "t": { "Back to provider selection": { "v": ["Terug naar provider selectie"] }, "Close Smart Picker": { "v": ["Sluit Slimme Kiezer"] }, "Smart Picker": { "v": ["Slimme Kiezer"] } } }, { "l": "nn_NO", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "oc", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "pl", "t": { "Back to provider selection": { "v": ["Powrót do wyboru dostawcy"] }, "Close Smart Picker": { "v": ["Zamknij inteligentny selektor"] }, "Smart Picker": { "v": ["Inteligentne wybieranie"] } } }, { "l": "ps", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "pt_BR", "t": { "Back to provider selection": { "v": ["Voltar para seleção de provedor"] }, "Close Smart Picker": { "v": ["Fechar Seletor Inteligente"] }, "Smart Picker": { "v": ["Seletor Inteligente"] } } }, { "l": "pt_PT", "t": { "Back to provider selection": { "v": ["Voltar à seleção de fornecedor"] }, "Close Smart Picker": { "v": ['Fechar "Smart Picker"'] }, "Smart Picker": { "v": ["Smart Picker"] } } }, { "l": "ro", "t": { "Back to provider selection": { "v": ["Înapoi la selecția providerului"] }, "Close Smart Picker": { "v": ["Închide Smart Picker"] }, "Smart Picker": { "v": ["Smart Picker"] } } }, { "l": "ru", "t": { "Back to provider selection": { "v": ["Вернуться к выбору провайдера"] }, "Close Smart Picker": { "v": ["Закрыть интеллектуальный выбор"] }, "Smart Picker": { "v": ["Умный выбор"] } } }, { "l": "sc", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "si", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "sk", "t": { "Back to provider selection": { "v": ["Späť na výber poskytovateľa"] }, "Close Smart Picker": { "v": ["Zavrieť inteligentný výber"] }, "Smart Picker": { "v": ["Inteligentný výber"] } } }, { "l": "sl", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "sq", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "sr", "t": { "Back to provider selection": { "v": ["Назад на избор пружаоца"] }, "Close Smart Picker": { "v": ["Затвори паметни бирач"] }, "Smart Picker": { "v": ["Паметни бирач"] } } }, { "l": "sr@latin", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "sv", "t": { "Back to provider selection": { "v": ["Tillbaka till leverantörsval"] }, "Close Smart Picker": { "v": ["Stäng Smart Picker"] }, "Smart Picker": { "v": ["Smart Picker"] } } }, { "l": "sw", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "ta", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "th", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "tk", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "tr", "t": { "Back to provider selection": { "v": ["Hizmet sağlayıcı seçimine dön"] }, "Close Smart Picker": { "v": ["Akıllı seçimi kapat"] }, "Smart Picker": { "v": ["Akıllı seçim"] } } }, { "l": "ug", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "uk", "t": { "Back to provider selection": { "v": ["Назад до вибору постачальника"] }, "Close Smart Picker": { "v": ["Закрити асистент вибору"] }, "Smart Picker": { "v": ["Асистент вибору"] } } }, { "l": "ur_PK", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "uz", "t": { "Back to provider selection": { "v": ["Provayder tanloviga qaytish"] }, "Close Smart Picker": { "v": ["Smart Picker-ni yoping"] }, "Smart Picker": { "v": ["Aqlli tanlovchi"] } } }, { "l": "vi", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "zh_CN", "t": { "Back to provider selection": { "v": ["返回至提供者选择列表"] }, "Close Smart Picker": { "v": ["关闭智能拾取器"] }, "Smart Picker": { "v": ["智能拾取器"] } } }, { "l": "zh_HK", "t": { "Back to provider selection": { "v": ["回到提供者選擇"] }, "Close Smart Picker": { "v": ["關閉 Smart Picker"] }, "Smart Picker": { "v": ["Smart Picker"] } } }, { "l": "zh_TW", "t": { "Back to provider selection": { "v": ["回到提供者選擇"] }, "Close Smart Picker": { "v": ["關閉智慧型挑選器"] }, "Smart Picker": { "v": ["智慧型挑選器"] } } }, { "l": "zu_ZA", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }];
const t13 = [{ "l": "af", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "ar", "t": { "Cancel changes": { "v": ["إلغاء التغييرات"] }, "Confirm changes": { "v": ["تأكيد التغييرات"] } } }, { "l": "ast", "t": { "Cancel changes": { "v": ["Encaboxar los cambeos"] }, "Confirm changes": { "v": ["Confirmar los cambeos"] } } }, { "l": "az", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "be", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "bg", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "bn_BD", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "br", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "bs", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "ca", "t": { "Cancel changes": { "v": ["Cancel·la els canvis"] }, "Confirm changes": { "v": ["Confirmeu els canvis"] } } }, { "l": "cs", "t": { "Cancel changes": { "v": ["Zrušit změny"] }, "Confirm changes": { "v": ["Potvrdit změny"] } } }, { "l": "cs_CZ", "t": { "Cancel changes": { "v": ["Zrušit změny"] }, "Confirm changes": { "v": ["Potvrdit změny"] } } }, { "l": "cy_GB", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "da", "t": { "Cancel changes": { "v": ["Annuller ændringer"] }, "Confirm changes": { "v": ["Bekræft ændringer"] } } }, { "l": "de", "t": { "Cancel changes": { "v": ["Änderungen verwerfen"] }, "Confirm changes": { "v": ["Änderungen bestätigen"] } } }, { "l": "de_DE", "t": { "Cancel changes": { "v": ["Änderungen verwerfen"] }, "Confirm changes": { "v": ["Änderungen bestätigen"] } } }, { "l": "el", "t": { "Cancel changes": { "v": ["Ακύρωση αλλαγών"] }, "Confirm changes": { "v": ["Επιβεβαίωση αλλαγών"] } } }, { "l": "en_GB", "t": { "Cancel changes": { "v": ["Cancel changes"] }, "Confirm changes": { "v": ["Confirm changes"] } } }, { "l": "eo", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es", "t": { "Cancel changes": { "v": ["Cancelar cambios"] }, "Confirm changes": { "v": ["Confirmar cambios"] } } }, { "l": "es_419", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_AR", "t": { "Cancel changes": { "v": ["Cancelar cambios"] }, "Confirm changes": { "v": ["Confirmar cambios"] } } }, { "l": "es_CL", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_CO", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_CR", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_DO", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_EC", "t": { "Cancel changes": { "v": ["Cancelar cambios"] }, "Confirm changes": { "v": ["Confirmar cambios"] } } }, { "l": "es_GT", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_HN", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_MX", "t": { "Cancel changes": { "v": ["Cancelar cambios"] }, "Confirm changes": { "v": ["Confirmar cambios"] } } }, { "l": "es_NI", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_PA", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_PE", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_PR", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_PY", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_SV", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_UY", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "et_EE", "t": { "Cancel changes": { "v": ["Tühista muudatused"] }, "Confirm changes": { "v": ["Kinnitage muudatused"] } } }, { "l": "eu", "t": { "Cancel changes": { "v": ["Ezeztatu aldaketak"] }, "Confirm changes": { "v": ["Baieztatu aldaketak"] } } }, { "l": "fa", "t": { "Cancel changes": { "v": ["لغو تغییرات"] }, "Confirm changes": { "v": ["تایید تغییرات"] } } }, { "l": "fi", "t": { "Cancel changes": { "v": ["Peruuta muutokset"] }, "Confirm changes": { "v": ["Vahvista muutokset"] } } }, { "l": "fo", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "fr", "t": { "Cancel changes": { "v": ["Annuler les modifications"] }, "Confirm changes": { "v": ["Confirmer les modifications"] } } }, { "l": "ga", "t": { "Cancel changes": { "v": ["Cealaigh athruithe"] }, "Confirm changes": { "v": ["Deimhnigh na hathruithe"] } } }, { "l": "gd", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "gl", "t": { "Cancel changes": { "v": ["Cancelar os cambios"] }, "Confirm changes": { "v": ["Confirma os cambios"] } } }, { "l": "he", "t": { "Cancel changes": { "v": ["ביטול שינויים"] }, "Confirm changes": { "v": ["אישור השינויים"] } } }, { "l": "hi_IN", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "hr", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "hsb", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "hu", "t": { "Cancel changes": { "v": ["Változtatások elvetése"] }, "Confirm changes": { "v": ["Változtatások megerősítése"] } } }, { "l": "hy", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "ia", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "id", "t": { "Cancel changes": { "v": ["Batalkan perubahan"] }, "Confirm changes": { "v": ["Konfirmasikan perubahan"] } } }, { "l": "ig", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "is", "t": { "Cancel changes": { "v": ["Hætta við breytingar"] }, "Confirm changes": { "v": ["Staðfesta breytingar"] } } }, { "l": "it", "t": { "Cancel changes": { "v": ["Annulla modifiche"] }, "Confirm changes": { "v": ["Conferma modifiche"] } } }, { "l": "ja", "t": { "Cancel changes": { "v": ["変更をキャンセル"] }, "Confirm changes": { "v": ["変更を承認"] } } }, { "l": "ja_JP", "t": { "Cancel changes": { "v": ["変更をキャンセル"] }, "Confirm changes": { "v": ["変更を承認"] } } }, { "l": "ka", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "ka_GE", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "kab", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "kk", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "km", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "kn", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "ko", "t": { "Cancel changes": { "v": ["변경 취소"] }, "Confirm changes": { "v": ["변경 사항 확인"] } } }, { "l": "la", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "lb", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "lo", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "lt_LT", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "lv", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "mk", "t": { "Cancel changes": { "v": ["Откажи ги промените"] }, "Confirm changes": { "v": ["Потврди ги промените"] } } }, { "l": "mn", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "mr", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "ms_MY", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "my", "t": { "Cancel changes": { "v": ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { "v": ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { "l": "nb", "t": { "Cancel changes": { "v": ["Avbryt endringer"] }, "Confirm changes": { "v": ["Bekreft endringer"] } } }, { "l": "ne", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "nl", "t": { "Cancel changes": { "v": ["Wijzigingen annuleren"] }, "Confirm changes": { "v": ["Wijzigingen bevestigen"] } } }, { "l": "nn_NO", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "oc", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "pl", "t": { "Cancel changes": { "v": ["Anuluj zmiany"] }, "Confirm changes": { "v": ["Potwierdź zmiany"] } } }, { "l": "ps", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "pt_BR", "t": { "Cancel changes": { "v": ["Cancelar alterações"] }, "Confirm changes": { "v": ["Confirmar alterações"] } } }, { "l": "pt_PT", "t": { "Cancel changes": { "v": ["Cancelar alterações"] }, "Confirm changes": { "v": ["Confirmar alterações"] } } }, { "l": "ro", "t": { "Cancel changes": { "v": ["Anulează modificările"] }, "Confirm changes": { "v": ["Confirmați modificările"] } } }, { "l": "ru", "t": { "Cancel changes": { "v": ["Отменить изменения"] }, "Confirm changes": { "v": ["Подтвердить изменения"] } } }, { "l": "sc", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "si", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "sk", "t": { "Cancel changes": { "v": ["Zrušiť zmeny"] }, "Confirm changes": { "v": ["Potvrdiť zmeny"] } } }, { "l": "sl", "t": { "Cancel changes": { "v": ["Prekliči spremembe"] }, "Confirm changes": { "v": ["Potrdi spremembe"] } } }, { "l": "sq", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "sr", "t": { "Cancel changes": { "v": ["Откажи измене"] }, "Confirm changes": { "v": ["Потврдите измене"] } } }, { "l": "sr@latin", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "sv", "t": { "Cancel changes": { "v": ["Avbryt ändringar"] }, "Confirm changes": { "v": ["Bekräfta ändringar"] } } }, { "l": "sw", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "ta", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "th", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "tk", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "tr", "t": { "Cancel changes": { "v": ["Değişiklikleri iptal et"] }, "Confirm changes": { "v": ["Değişiklikleri onayla"] } } }, { "l": "ug", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "uk", "t": { "Cancel changes": { "v": ["Скасувати зміни"] }, "Confirm changes": { "v": ["Підтвердити зміни"] } } }, { "l": "ur_PK", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "uz", "t": { "Cancel changes": { "v": ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { "v": ["O'zgarishlarni tasdiqlang"] } } }, { "l": "vi", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "zh_CN", "t": { "Cancel changes": { "v": ["取消更改"] }, "Confirm changes": { "v": ["确认更改"] } } }, { "l": "zh_HK", "t": { "Cancel changes": { "v": ["取消更改"] }, "Confirm changes": { "v": ["確認更改"] } } }, { "l": "zh_TW", "t": { "Cancel changes": { "v": ["取消變更"] }, "Confirm changes": { "v": ["確認變更"] } } }, { "l": "zu_ZA", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }];
const t16 = [{ "l": "af", "t": { "No results": { "v": [""] } } }, { "l": "ar", "t": { "Clear selected": { "v": ["محو المحدّد"] }, "Deselect {option}": { "v": ["إلغاء تحديد {option}"] }, "No results": { "v": ["ليس هناك أية نتيجة"] }, "Options": { "v": ["خيارات"] } } }, { "l": "ast", "t": { "Clear selected": { "v": ["Borrar lo seleicionao"] }, "Deselect {option}": { "v": ["Deseleicionar «{option}»"] }, "No results": { "v": ["Nun hai nengún resultáu"] }, "Options": { "v": ["Opciones"] } } }, { "l": "az", "t": { "No results": { "v": [""] } } }, { "l": "be", "t": { "No results": { "v": [""] } } }, { "l": "bg", "t": { "No results": { "v": [""] } } }, { "l": "bn_BD", "t": { "No results": { "v": [""] } } }, { "l": "br", "t": { "No results": { "v": ["Disoc'h ebet"] } } }, { "l": "bs", "t": { "No results": { "v": [""] } } }, { "l": "ca", "t": { "No results": { "v": ["Sense resultats"] } } }, { "l": "cs", "t": { "Clear selected": { "v": ["Vyčistit vybrané"] }, "Deselect {option}": { "v": ["Zrušit výběr {option}"] }, "No results": { "v": ["Nic nenalezeno"] }, "Options": { "v": ["Možnosti"] } } }, { "l": "cs_CZ", "t": { "Clear selected": { "v": ["Vyčistit vybrané"] }, "Deselect {option}": { "v": ["Zrušit výběr {option}"] }, "No results": { "v": ["Nic nenalezeno"] }, "Options": { "v": ["Možnosti"] } } }, { "l": "cy_GB", "t": { "No results": { "v": [""] } } }, { "l": "da", "t": { "Clear selected": { "v": ["Ryd valgt"] }, "Deselect {option}": { "v": ["Fravælg {option}"] }, "No results": { "v": ["Ingen resultater"] }, "Options": { "v": ["Indstillinger"] } } }, { "l": "de", "t": { "Clear selected": { "v": ["Auswahl leeren"] }, "Deselect {option}": { "v": ["{option} abwählen"] }, "No results": { "v": ["Keine Ergebnisse"] }, "Options": { "v": ["Optionen"] } } }, { "l": "de_DE", "t": { "Clear selected": { "v": ["Auswahl leeren"] }, "Deselect {option}": { "v": ["{option} abwählen"] }, "No results": { "v": ["Keine Ergebnisse"] }, "Options": { "v": ["Optionen"] } } }, { "l": "el", "t": { "Clear selected": { "v": ["Εκκαθάριση επιλογής"] }, "Deselect {option}": { "v": ["Αποεπιλογή {option}"] }, "No results": { "v": ["Κανένα αποτέλεσμα"] }, "Options": { "v": ["Επιλογές"] } } }, { "l": "en_GB", "t": { "Clear selected": { "v": ["Clear selected"] }, "Deselect {option}": { "v": ["Deselect {option}"] }, "No results": { "v": ["No results"] }, "Options": { "v": ["Options"] } } }, { "l": "eo", "t": { "No results": { "v": ["La rezulto forestas"] } } }, { "l": "es", "t": { "Clear selected": { "v": ["Limpiar selección"] }, "Deselect {option}": { "v": ["Deseleccionar {option}"] }, "No results": { "v": [" Ningún resultado"] }, "Options": { "v": ["Opciones"] } } }, { "l": "es_419", "t": { "No results": { "v": [""] } } }, { "l": "es_AR", "t": { "Clear selected": { "v": ["Limpiar selección"] }, "Deselect {option}": { "v": ["Deseleccionar {option}"] }, "No results": { "v": ["Sin resultados"] }, "Options": { "v": ["Opciones"] } } }, { "l": "es_CL", "t": { "No results": { "v": [""] } } }, { "l": "es_CO", "t": { "No results": { "v": [""] } } }, { "l": "es_CR", "t": { "No results": { "v": [""] } } }, { "l": "es_DO", "t": { "No results": { "v": [""] } } }, { "l": "es_EC", "t": { "No results": { "v": ["Sin resultados"] } } }, { "l": "es_GT", "t": { "No results": { "v": [""] } } }, { "l": "es_HN", "t": { "No results": { "v": [""] } } }, { "l": "es_MX", "t": { "Clear selected": { "v": ["Limpiar selección"] }, "Deselect {option}": { "v": ["Deseleccionar {option}"] }, "No results": { "v": ["Sin resultados"] }, "Options": { "v": ["Opciones"] } } }, { "l": "es_NI", "t": { "No results": { "v": [""] } } }, { "l": "es_PA", "t": { "No results": { "v": [""] } } }, { "l": "es_PE", "t": { "No results": { "v": [""] } } }, { "l": "es_PR", "t": { "No results": { "v": [""] } } }, { "l": "es_PY", "t": { "No results": { "v": [""] } } }, { "l": "es_SV", "t": { "No results": { "v": [""] } } }, { "l": "es_UY", "t": { "No results": { "v": [""] } } }, { "l": "et_EE", "t": { "Clear selected": { "v": ["Tühjenad valik"] }, "Deselect {option}": { "v": ["Eemalda {option} valik"] }, "No results": { "v": ["Tulemusi pole"] }, "Options": { "v": ["Valikud"] } } }, { "l": "eu", "t": { "No results": { "v": ["Emaitzarik ez"] } } }, { "l": "fa", "t": { "Clear selected": { "v": ["پاک کردن مورد انتخاب شده"] }, "Deselect {option}": { "v": ["لغو انتخاب {option}"] }, "No results": { "v": ["بدون هیچ نتیجه‌ای"] }, "Options": { "v": ["گزینه‌ها"] } } }, { "l": "fi", "t": { "Clear selected": { "v": ["Tyhjennä valitut"] }, "Deselect {option}": { "v": ["Poista valinta {option}"] }, "No results": { "v": ["Ei tuloksia"] }, "Options": { "v": ["Valinnat"] } } }, { "l": "fo", "t": { "No results": { "v": [""] } } }, { "l": "fr", "t": { "Clear selected": { "v": ["Vider la sélection"] }, "Deselect {option}": { "v": ["Désélectionner {option}"] }, "No results": { "v": ["Aucun résultat"] }, "Options": { "v": ["Options"] } } }, { "l": "ga", "t": { "Clear selected": { "v": ["Glan roghnaithe"] }, "Deselect {option}": { "v": ["Díroghnaigh {option}"] }, "No results": { "v": ["Gan torthaí"] }, "Options": { "v": ["Roghanna"] } } }, { "l": "gd", "t": { "No results": { "v": [""] } } }, { "l": "gl", "t": { "Clear selected": { "v": ["Limpar o seleccionado"] }, "Deselect {option}": { "v": ["Desmarcar {opción}"] }, "No results": { "v": ["Sen resultados"] }, "Options": { "v": ["Opcións"] } } }, { "l": "he", "t": { "No results": { "v": ["אין תוצאות"] } } }, { "l": "hi_IN", "t": { "No results": { "v": [""] } } }, { "l": "hr", "t": { "No results": { "v": [""] } } }, { "l": "hsb", "t": { "No results": { "v": [""] } } }, { "l": "hu", "t": { "No results": { "v": ["Nincs találat"] } } }, { "l": "hy", "t": { "No results": { "v": [""] } } }, { "l": "ia", "t": { "No results": { "v": [""] } } }, { "l": "id", "t": { "Clear selected": { "v": ["Hapus terpilih"] }, "Deselect {option}": { "v": ["Batalkan pemilihan {option}"] }, "No results": { "v": ["Tidak ada hasil"] } } }, { "l": "ig", "t": { "No results": { "v": [""] } } }, { "l": "is", "t": { "Clear selected": { "v": ["Hreinsa valið"] }, "Deselect {option}": { "v": ["Afvelja {option}"] }, "No results": { "v": ["Engar niðurstöður"] }, "Options": { "v": ["Valkostir"] } } }, { "l": "it", "t": { "Clear selected": { "v": ["Cancella selezionati"] }, "Deselect {option}": { "v": ["Deselezionare {option}"] }, "No results": { "v": ["Nessun risultato"] } } }, { "l": "ja", "t": { "Clear selected": { "v": ["選択を解除"] }, "Deselect {option}": { "v": ["{option} の選択を解除"] }, "No results": { "v": ["結果無し"] }, "Options": { "v": ["オプション"] } } }, { "l": "ja_JP", "t": { "Clear selected": { "v": ["選択を解除"] }, "Deselect {option}": { "v": ["{option} の選択を解除"] }, "No results": { "v": ["結果無し"] }, "Options": { "v": ["オプション"] } } }, { "l": "ka", "t": { "No results": { "v": [""] } } }, { "l": "ka_GE", "t": { "No results": { "v": [""] } } }, { "l": "kab", "t": { "No results": { "v": [""] } } }, { "l": "kk", "t": { "No results": { "v": [""] } } }, { "l": "km", "t": { "No results": { "v": [""] } } }, { "l": "kn", "t": { "No results": { "v": [""] } } }, { "l": "ko", "t": { "Clear selected": { "v": ["선택 항목 지우기"] }, "Deselect {option}": { "v": ["{option} 선택 해제"] }, "No results": { "v": ["결과 없음"] }, "Options": { "v": ["옵션"] } } }, { "l": "la", "t": { "No results": { "v": [""] } } }, { "l": "lb", "t": { "No results": { "v": [""] } } }, { "l": "lo", "t": { "No results": { "v": [""] } } }, { "l": "lt_LT", "t": { "No results": { "v": ["Nėra rezultatų"] } } }, { "l": "lv", "t": { "No results": { "v": ["Nav rezultātu"] } } }, { "l": "mk", "t": { "No results": { "v": ["Нема резултати"] } } }, { "l": "mn", "t": { "No results": { "v": [""] } } }, { "l": "mr", "t": { "No results": { "v": [""] } } }, { "l": "ms_MY", "t": { "No results": { "v": [""] } } }, { "l": "my", "t": { "No results": { "v": ["ရလဒ်မရှိပါ"] } } }, { "l": "nb", "t": { "Clear selected": { "v": ["Tøm merket"] }, "Deselect {option}": { "v": ["Opphev valg {option}"] }, "No results": { "v": ["Ingen resultater"] }, "Options": { "v": ["Alternativer"] } } }, { "l": "ne", "t": { "No results": { "v": [""] } } }, { "l": "nl", "t": { "Clear selected": { "v": ["Selectie wissen"] }, "Deselect {option}": { "v": ["Deselecteer {optie}"] }, "No results": { "v": ["Geen resultaten"] }, "Options": { "v": ["Opties"] } } }, { "l": "nn_NO", "t": { "No results": { "v": [""] } } }, { "l": "oc", "t": { "No results": { "v": ["Cap de resultat"] } } }, { "l": "pl", "t": { "Clear selected": { "v": ["Wyczyść wybrane"] }, "Deselect {option}": { "v": ["Odznacz {option}"] }, "No results": { "v": ["Brak wyników"] }, "Options": { "v": ["Opcje"] } } }, { "l": "ps", "t": { "No results": { "v": [""] } } }, { "l": "pt_BR", "t": { "Clear selected": { "v": ["Limpar selecionado"] }, "Deselect {option}": { "v": ["Desmacar {option}"] }, "No results": { "v": ["Sem resultados"] }, "Options": { "v": ["Opções"] } } }, { "l": "pt_PT", "t": { "Clear selected": { "v": ["Limpeza selecionada"] }, "Deselect {option}": { "v": ["Desmarcar {option}"] }, "No results": { "v": ["Sem resultados"] }, "Options": { "v": ["Opções"] } } }, { "l": "ro", "t": { "Clear selected": { "v": ["Șterge selecția"] }, "Deselect {option}": { "v": ["Deselctează {option}"] }, "No results": { "v": ["Nu există rezultate"] } } }, { "l": "ru", "t": { "Clear selected": { "v": ["Очистить выбранный"] }, "Deselect {option}": { "v": ["Отменить выбор {option}"] }, "No results": { "v": ["Результаты отсуствуют"] }, "Options": { "v": ["Варианты"] } } }, { "l": "sc", "t": { "No results": { "v": [""] } } }, { "l": "si", "t": { "No results": { "v": [""] } } }, { "l": "sk", "t": { "Clear selected": { "v": ["Vymazať vybraté"] }, "Deselect {option}": { "v": ["Zrušiť výber {option}"] }, "No results": { "v": ["Žiadne výsledky"] }, "Options": { "v": ["možnosti"] } } }, { "l": "sl", "t": { "No results": { "v": ["Ni zadetkov"] } } }, { "l": "sq", "t": { "No results": { "v": [""] } } }, { "l": "sr", "t": { "Clear selected": { "v": ["Обриши изабрано"] }, "Deselect {option}": { "v": ["Уклони избор {option}"] }, "No results": { "v": ["Нема резултата"] }, "Options": { "v": ["Опције"] } } }, { "l": "sr@latin", "t": { "No results": { "v": [""] } } }, { "l": "sv", "t": { "Clear selected": { "v": ["Rensa val"] }, "Deselect {option}": { "v": ["Avmarkera {option}"] }, "No results": { "v": ["Inga resultat"] }, "Options": { "v": ["Alternativ"] } } }, { "l": "sw", "t": { "No results": { "v": [""] } } }, { "l": "ta", "t": { "No results": { "v": [""] } } }, { "l": "th", "t": { "No results": { "v": [""] } } }, { "l": "tk", "t": { "No results": { "v": [""] } } }, { "l": "tr", "t": { "Clear selected": { "v": ["Seçilmişleri temizle"] }, "Deselect {option}": { "v": ["{option} bırak"] }, "No results": { "v": ["Herhangi bir sonuç bulunamadı"] }, "Options": { "v": ["Seçenekler"] } } }, { "l": "ug", "t": { "No results": { "v": [""] } } }, { "l": "uk", "t": { "Clear selected": { "v": ["Очистити вибране"] }, "Deselect {option}": { "v": ["Зняти вибір {option}"] }, "No results": { "v": ["Відсутні результати"] }, "Options": { "v": ["Параметри"] } } }, { "l": "ur_PK", "t": { "No results": { "v": [""] } } }, { "l": "uz", "t": { "Clear selected": { "v": ["Tanlanganni tozalash"] }, "Deselect {option}": { "v": ["{option}tanlovni bekor qiling"] }, "No results": { "v": ["Natija yoʻq"] }, "Options": { "v": ["Variantlar"] } } }, { "l": "vi", "t": { "No results": { "v": [""] } } }, { "l": "zh_CN", "t": { "Clear selected": { "v": ["清除所选"] }, "Deselect {option}": { "v": ["取消选择 {option}"] }, "No results": { "v": ["无结果"] }, "Options": { "v": ["选项"] } } }, { "l": "zh_HK", "t": { "Clear selected": { "v": ["清除所選項目"] }, "Deselect {option}": { "v": ["取消選擇 {option}"] }, "No results": { "v": ["無結果"] }, "Options": { "v": ["選項"] } } }, { "l": "zh_TW", "t": { "Clear selected": { "v": ["清除選定項目"] }, "Deselect {option}": { "v": ["取消選取 {option}"] }, "No results": { "v": ["無結果"] }, "Options": { "v": ["選項"] } } }, { "l": "zu_ZA", "t": { "No results": { "v": [""] } } }];
const t17 = [{ "l": "af", "t": { "Clear text": { "v": [""] } } }, { "l": "ar", "t": { "Clear text": { "v": ["محو النص"] }, "Save changes": { "v": ["حفظ التغييرات"] } } }, { "l": "ast", "t": { "Clear text": { "v": ["Borrar el testu"] }, "Save changes": { "v": ["Guardar los cambeos"] } } }, { "l": "az", "t": { "Clear text": { "v": [""] } } }, { "l": "be", "t": { "Clear text": { "v": [""] } } }, { "l": "bg", "t": { "Clear text": { "v": [""] } } }, { "l": "bn_BD", "t": { "Clear text": { "v": [""] } } }, { "l": "br", "t": { "Clear text": { "v": [""] } } }, { "l": "bs", "t": { "Clear text": { "v": [""] } } }, { "l": "ca", "t": { "Clear text": { "v": ["Netejar text"] } } }, { "l": "cs", "t": { "Clear text": { "v": ["Čitelný text"] }, "Save changes": { "v": ["Uložit změny"] } } }, { "l": "cs_CZ", "t": { "Clear text": { "v": ["Čitelný text"] }, "Save changes": { "v": ["Uložit změny"] } } }, { "l": "cy_GB", "t": { "Clear text": { "v": [""] } } }, { "l": "da", "t": { "Clear text": { "v": ["Ryd tekst"] }, "Save changes": { "v": ["Gem ændringer"] } } }, { "l": "de", "t": { "Clear text": { "v": ["Klartext"] }, "Save changes": { "v": ["Änderungen speichern"] } } }, { "l": "de_DE", "t": { "Clear text": { "v": ["Klartext"] }, "Save changes": { "v": ["Änderungen speichern"] } } }, { "l": "el", "t": { "Clear text": { "v": ["Εκκαθάριση κειμένου"] }, "Save changes": { "v": ["Αποθήκευση αλλαγών"] } } }, { "l": "en_GB", "t": { "Clear text": { "v": ["Clear text"] }, "Save changes": { "v": ["Save changes"] } } }, { "l": "eo", "t": { "Clear text": { "v": [""] } } }, { "l": "es", "t": { "Clear text": { "v": ["Limpiar texto"] }, "Save changes": { "v": ["Guardar cambios"] } } }, { "l": "es_419", "t": { "Clear text": { "v": [""] } } }, { "l": "es_AR", "t": { "Clear text": { "v": ["Limpiar texto"] }, "Save changes": { "v": ["Guardar cambios"] } } }, { "l": "es_CL", "t": { "Clear text": { "v": [""] } } }, { "l": "es_CO", "t": { "Clear text": { "v": [""] } } }, { "l": "es_CR", "t": { "Clear text": { "v": [""] } } }, { "l": "es_DO", "t": { "Clear text": { "v": [""] } } }, { "l": "es_EC", "t": { "Clear text": { "v": ["Limpiar texto"] } } }, { "l": "es_GT", "t": { "Clear text": { "v": [""] } } }, { "l": "es_HN", "t": { "Clear text": { "v": [""] } } }, { "l": "es_MX", "t": { "Clear text": { "v": ["Limpiar texto"] }, "Save changes": { "v": ["Guardar cambios"] } } }, { "l": "es_NI", "t": { "Clear text": { "v": [""] } } }, { "l": "es_PA", "t": { "Clear text": { "v": [""] } } }, { "l": "es_PE", "t": { "Clear text": { "v": [""] } } }, { "l": "es_PR", "t": { "Clear text": { "v": [""] } } }, { "l": "es_PY", "t": { "Clear text": { "v": [""] } } }, { "l": "es_SV", "t": { "Clear text": { "v": [""] } } }, { "l": "es_UY", "t": { "Clear text": { "v": [""] } } }, { "l": "et_EE", "t": { "Clear text": { "v": ["Kustuta tekst"] }, "Save changes": { "v": ["Salvesta muudatused"] } } }, { "l": "eu", "t": { "Clear text": { "v": ["Garbitu testua"] } } }, { "l": "fa", "t": { "Clear text": { "v": ["پاک کردن متن"] }, "Save changes": { "v": ["ذخیرهٔ تغییرات"] } } }, { "l": "fi", "t": { "Clear text": { "v": ["Tyhjennä teksti"] }, "Save changes": { "v": ["Tallenna muutokset"] } } }, { "l": "fo", "t": { "Clear text": { "v": [""] } } }, { "l": "fr", "t": { "Clear text": { "v": ["Effacer le texte"] }, "Save changes": { "v": ["Sauvegarder les changements"] } } }, { "l": "ga", "t": { "Clear text": { "v": ["Glan téacs"] }, "Save changes": { "v": ["Sabháil na hathruithe"] } } }, { "l": "gd", "t": { "Clear text": { "v": [""] } } }, { "l": "gl", "t": { "Clear text": { "v": ["Limpar o texto"] }, "Save changes": { "v": ["Gardar os cambios"] } } }, { "l": "he", "t": { "Clear text": { "v": ["פינוי טקסט"] } } }, { "l": "hi_IN", "t": { "Clear text": { "v": [""] } } }, { "l": "hr", "t": { "Clear text": { "v": [""] } } }, { "l": "hsb", "t": { "Clear text": { "v": [""] } } }, { "l": "hu", "t": { "Clear text": { "v": ["Szöveg törlése"] } } }, { "l": "hy", "t": { "Clear text": { "v": [""] } } }, { "l": "ia", "t": { "Clear text": { "v": [""] } } }, { "l": "id", "t": { "Clear text": { "v": ["Bersihkan teks"] }, "Save changes": { "v": ["Simpan perubahan"] } } }, { "l": "ig", "t": { "Clear text": { "v": [""] } } }, { "l": "is", "t": { "Clear text": { "v": ["Hreinsa texta"] }, "Save changes": { "v": ["Vista breytingar"] } } }, { "l": "it", "t": { "Clear text": { "v": ["Cancella il testo"] }, "Save changes": { "v": ["Salva le modifiche"] } } }, { "l": "ja", "t": { "Clear text": { "v": ["テキストをクリア"] }, "Save changes": { "v": ["変更を保存"] } } }, { "l": "ja_JP", "t": { "Clear text": { "v": ["テキストをクリア"] }, "Save changes": { "v": ["変更を保存"] } } }, { "l": "ka", "t": { "Clear text": { "v": [""] } } }, { "l": "ka_GE", "t": { "Clear text": { "v": [""] } } }, { "l": "kab", "t": { "Clear text": { "v": [""] } } }, { "l": "kk", "t": { "Clear text": { "v": [""] } } }, { "l": "km", "t": { "Clear text": { "v": [""] } } }, { "l": "kn", "t": { "Clear text": { "v": [""] } } }, { "l": "ko", "t": { "Clear text": { "v": ["텍스트 지우기"] }, "Save changes": { "v": ["변경 사항 저장"] } } }, { "l": "la", "t": { "Clear text": { "v": [""] } } }, { "l": "lb", "t": { "Clear text": { "v": [""] } } }, { "l": "lo", "t": { "Clear text": { "v": [""] } } }, { "l": "lt_LT", "t": { "Clear text": { "v": [""] } } }, { "l": "lv", "t": { "Clear text": { "v": [""] } } }, { "l": "mk", "t": { "Clear text": { "v": [""] } } }, { "l": "mn", "t": { "Clear text": { "v": [""] } } }, { "l": "mr", "t": { "Clear text": { "v": [""] } } }, { "l": "ms_MY", "t": { "Clear text": { "v": [""] } } }, { "l": "my", "t": { "Clear text": { "v": [""] } } }, { "l": "nb", "t": { "Clear text": { "v": ["Fjern tekst"] }, "Save changes": { "v": ["Lagre endringer"] } } }, { "l": "ne", "t": { "Clear text": { "v": [""] } } }, { "l": "nl", "t": { "Clear text": { "v": ["Wis tekst"] }, "Save changes": { "v": ["Wijzigingen opslaan"] } } }, { "l": "nn_NO", "t": { "Clear text": { "v": [""] } } }, { "l": "oc", "t": { "Clear text": { "v": [""] } } }, { "l": "pl", "t": { "Clear text": { "v": ["Wyczyść tekst"] }, "Save changes": { "v": ["Zapisz zmiany"] } } }, { "l": "ps", "t": { "Clear text": { "v": [""] } } }, { "l": "pt_BR", "t": { "Clear text": { "v": ["Limpar texto"] }, "Save changes": { "v": ["Salvar alterações"] } } }, { "l": "pt_PT", "t": { "Clear text": { "v": ["Limpar texto"] }, "Save changes": { "v": ["Gravar alterações"] } } }, { "l": "ro", "t": { "Clear text": { "v": ["Șterge textul"] }, "Save changes": { "v": ["Salvează modificările"] } } }, { "l": "ru", "t": { "Clear text": { "v": ["Очистить текст"] }, "Save changes": { "v": ["Сохранить изменения"] } } }, { "l": "sc", "t": { "Clear text": { "v": [""] } } }, { "l": "si", "t": { "Clear text": { "v": [""] } } }, { "l": "sk", "t": { "Clear text": { "v": ["Vamazať text"] }, "Save changes": { "v": ["Uložiť zmeny"] } } }, { "l": "sl", "t": { "Clear text": { "v": ["Počisti besedilo"] } } }, { "l": "sq", "t": { "Clear text": { "v": [""] } } }, { "l": "sr", "t": { "Clear text": { "v": ["Обриши текст"] }, "Save changes": { "v": ["Сачувај измене"] } } }, { "l": "sr@latin", "t": { "Clear text": { "v": [""] } } }, { "l": "sv", "t": { "Clear text": { "v": ["Ta bort text"] }, "Save changes": { "v": ["Spara ändringar"] } } }, { "l": "sw", "t": { "Clear text": { "v": [""] } } }, { "l": "ta", "t": { "Clear text": { "v": [""] } } }, { "l": "th", "t": { "Clear text": { "v": [""] } } }, { "l": "tk", "t": { "Clear text": { "v": [""] } } }, { "l": "tr", "t": { "Clear text": { "v": ["Metni temizle"] }, "Save changes": { "v": ["Değişiklikleri kaydet"] } } }, { "l": "ug", "t": { "Clear text": { "v": [""] } } }, { "l": "uk", "t": { "Clear text": { "v": ["Очистити текст"] }, "Save changes": { "v": ["Зберегти зміни"] } } }, { "l": "ur_PK", "t": { "Clear text": { "v": [""] } } }, { "l": "uz", "t": { "Clear text": { "v": ["Matnni tozalash"] }, "Save changes": { "v": ["O'zgarishlarni saqlang"] } } }, { "l": "vi", "t": { "Clear text": { "v": [""] } } }, { "l": "zh_CN", "t": { "Clear text": { "v": ["清除文本"] }, "Save changes": { "v": ["保存修改"] } } }, { "l": "zh_HK", "t": { "Clear text": { "v": ["清除文本"] }, "Save changes": { "v": ["保存更改"] } } }, { "l": "zh_TW", "t": { "Clear text": { "v": ["清除文字"] }, "Save changes": { "v": ["儲存變更"] } } }, { "l": "zu_ZA", "t": { "Clear text": { "v": [""] } } }];
const t18 = [{ "l": "af", "t": { "Close": { "v": [""] } } }, { "l": "ar", "t": { "Close": { "v": ["إغلاق"] } } }, { "l": "ast", "t": { "Close": { "v": ["Zarrar"] } } }, { "l": "az", "t": { "Close": { "v": [""] } } }, { "l": "be", "t": { "Close": { "v": [""] } } }, { "l": "bg", "t": { "Close": { "v": [""] } } }, { "l": "bn_BD", "t": { "Close": { "v": [""] } } }, { "l": "br", "t": { "Close": { "v": ["Serriñ"] } } }, { "l": "bs", "t": { "Close": { "v": [""] } } }, { "l": "ca", "t": { "Close": { "v": ["Tanca"] } } }, { "l": "cs", "t": { "Close": { "v": ["Zavřít"] } } }, { "l": "cs_CZ", "t": { "Close": { "v": ["Zavřít"] } } }, { "l": "cy_GB", "t": { "Close": { "v": [""] } } }, { "l": "da", "t": { "Close": { "v": ["Luk"] } } }, { "l": "de", "t": { "Close": { "v": ["Schließen"] } } }, { "l": "de_DE", "t": { "Close": { "v": ["Schließen"] } } }, { "l": "el", "t": { "Close": { "v": ["Κλείσιμο"] } } }, { "l": "en_GB", "t": { "Close": { "v": ["Close"] } } }, { "l": "eo", "t": { "Close": { "v": ["Fermu"] } } }, { "l": "es", "t": { "Close": { "v": ["Cerrar"] } } }, { "l": "es_419", "t": { "Close": { "v": [""] } } }, { "l": "es_AR", "t": { "Close": { "v": ["Cerrar"] } } }, { "l": "es_CL", "t": { "Close": { "v": [""] } } }, { "l": "es_CO", "t": { "Close": { "v": [""] } } }, { "l": "es_CR", "t": { "Close": { "v": [""] } } }, { "l": "es_DO", "t": { "Close": { "v": [""] } } }, { "l": "es_EC", "t": { "Close": { "v": ["Cerrar"] } } }, { "l": "es_GT", "t": { "Close": { "v": [""] } } }, { "l": "es_HN", "t": { "Close": { "v": [""] } } }, { "l": "es_MX", "t": { "Close": { "v": ["Cerrar"] } } }, { "l": "es_NI", "t": { "Close": { "v": [""] } } }, { "l": "es_PA", "t": { "Close": { "v": [""] } } }, { "l": "es_PE", "t": { "Close": { "v": [""] } } }, { "l": "es_PR", "t": { "Close": { "v": [""] } } }, { "l": "es_PY", "t": { "Close": { "v": [""] } } }, { "l": "es_SV", "t": { "Close": { "v": [""] } } }, { "l": "es_UY", "t": { "Close": { "v": [""] } } }, { "l": "et_EE", "t": { "Close": { "v": ["Sulge"] } } }, { "l": "eu", "t": { "Close": { "v": ["Itxi"] } } }, { "l": "fa", "t": { "Close": { "v": ["بستن"] } } }, { "l": "fi", "t": { "Close": { "v": ["Sulje"] } } }, { "l": "fo", "t": { "Close": { "v": [""] } } }, { "l": "fr", "t": { "Close": { "v": ["Fermer"] } } }, { "l": "ga", "t": { "Close": { "v": ["Dún"] } } }, { "l": "gd", "t": { "Close": { "v": [""] } } }, { "l": "gl", "t": { "Close": { "v": ["Pechar"] } } }, { "l": "he", "t": { "Close": { "v": ["סגירה"] } } }, { "l": "hi_IN", "t": { "Close": { "v": [""] } } }, { "l": "hr", "t": { "Close": { "v": [""] } } }, { "l": "hsb", "t": { "Close": { "v": [""] } } }, { "l": "hu", "t": { "Close": { "v": ["Bezárás"] } } }, { "l": "hy", "t": { "Close": { "v": [""] } } }, { "l": "ia", "t": { "Close": { "v": [""] } } }, { "l": "id", "t": { "Close": { "v": ["Tutup"] } } }, { "l": "ig", "t": { "Close": { "v": [""] } } }, { "l": "is", "t": { "Close": { "v": ["Loka"] } } }, { "l": "it", "t": { "Close": { "v": ["Chiudi"] } } }, { "l": "ja", "t": { "Close": { "v": ["閉じる"] } } }, { "l": "ja_JP", "t": { "Close": { "v": ["閉じる"] } } }, { "l": "ka", "t": { "Close": { "v": [""] } } }, { "l": "ka_GE", "t": { "Close": { "v": [""] } } }, { "l": "kab", "t": { "Close": { "v": [""] } } }, { "l": "kk", "t": { "Close": { "v": [""] } } }, { "l": "km", "t": { "Close": { "v": [""] } } }, { "l": "kn", "t": { "Close": { "v": [""] } } }, { "l": "ko", "t": { "Close": { "v": ["닫기"] } } }, { "l": "la", "t": { "Close": { "v": [""] } } }, { "l": "lb", "t": { "Close": { "v": [""] } } }, { "l": "lo", "t": { "Close": { "v": [""] } } }, { "l": "lt_LT", "t": { "Close": { "v": ["Užverti"] } } }, { "l": "lv", "t": { "Close": { "v": ["Aizvērt"] } } }, { "l": "mk", "t": { "Close": { "v": ["Затвори"] } } }, { "l": "mn", "t": { "Close": { "v": [""] } } }, { "l": "mr", "t": { "Close": { "v": [""] } } }, { "l": "ms_MY", "t": { "Close": { "v": [""] } } }, { "l": "my", "t": { "Close": { "v": ["ပိတ်ရန်"] } } }, { "l": "nb", "t": { "Close": { "v": ["Lukk"] } } }, { "l": "ne", "t": { "Close": { "v": [""] } } }, { "l": "nl", "t": { "Close": { "v": ["Sluiten"] } } }, { "l": "nn_NO", "t": { "Close": { "v": [""] } } }, { "l": "oc", "t": { "Close": { "v": ["Tampar"] } } }, { "l": "pl", "t": { "Close": { "v": ["Zamknij"] } } }, { "l": "ps", "t": { "Close": { "v": [""] } } }, { "l": "pt_BR", "t": { "Close": { "v": ["Fechar"] } } }, { "l": "pt_PT", "t": { "Close": { "v": ["Fechar"] } } }, { "l": "ro", "t": { "Close": { "v": ["Închideți"] } } }, { "l": "ru", "t": { "Close": { "v": ["Закрыть"] } } }, { "l": "sc", "t": { "Close": { "v": [""] } } }, { "l": "si", "t": { "Close": { "v": [""] } } }, { "l": "sk", "t": { "Close": { "v": ["Zavrieť"] } } }, { "l": "sl", "t": { "Close": { "v": ["Zapri"] } } }, { "l": "sq", "t": { "Close": { "v": [""] } } }, { "l": "sr", "t": { "Close": { "v": ["Затвори"] } } }, { "l": "sr@latin", "t": { "Close": { "v": [""] } } }, { "l": "sv", "t": { "Close": { "v": ["Stäng"] } } }, { "l": "sw", "t": { "Close": { "v": [""] } } }, { "l": "ta", "t": { "Close": { "v": [""] } } }, { "l": "th", "t": { "Close": { "v": [""] } } }, { "l": "tk", "t": { "Close": { "v": [""] } } }, { "l": "tr", "t": { "Close": { "v": ["Kapat"] } } }, { "l": "ug", "t": { "Close": { "v": [""] } } }, { "l": "uk", "t": { "Close": { "v": ["Закрити"] } } }, { "l": "ur_PK", "t": { "Close": { "v": [""] } } }, { "l": "uz", "t": { "Close": { "v": ["Yopish"] } } }, { "l": "vi", "t": { "Close": { "v": [""] } } }, { "l": "zh_CN", "t": { "Close": { "v": ["关闭"] } } }, { "l": "zh_HK", "t": { "Close": { "v": ["關閉"] } } }, { "l": "zh_TW", "t": { "Close": { "v": ["關閉"] } } }, { "l": "zu_ZA", "t": { "Close": { "v": [""] } } }];
const t19 = [{ "l": "af", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "ar", "t": { "Close navigation": { "v": ["إغلاق التصفح"] }, "Open navigation": { "v": ["فتح التنقُّل"] } } }, { "l": "ast", "t": { "Close navigation": { "v": ["Zarrar la navegación"] }, "Open navigation": { "v": ["Abrir la navegación"] } } }, { "l": "az", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "be", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "bg", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "bn_BD", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "br", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "bs", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "ca", "t": { "Close navigation": { "v": ["Tanca la navegació"] }, "Open navigation": { "v": ["Obre la navegació"] } } }, { "l": "cs", "t": { "Close navigation": { "v": ["Zavřít navigaci"] }, "Open navigation": { "v": ["Otevřít navigaci"] } } }, { "l": "cs_CZ", "t": { "Close navigation": { "v": ["Zavřít navigaci"] }, "Open navigation": { "v": ["Otevřít navigaci"] } } }, { "l": "cy_GB", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "da", "t": { "Close navigation": { "v": ["Luk navigation"] } } }, { "l": "de", "t": { "Close navigation": { "v": ["Navigation schließen"] }, "Open navigation": { "v": ["Navigation öffnen"] } } }, { "l": "de_DE", "t": { "Close navigation": { "v": ["Navigation schließen"] }, "Open navigation": { "v": ["Navigation öffnen"] } } }, { "l": "el", "t": { "Close navigation": { "v": ["Κλείσιμο πλοήγησης"] } } }, { "l": "en_GB", "t": { "Close navigation": { "v": ["Close navigation"] } } }, { "l": "eo", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es", "t": { "Close navigation": { "v": ["Cerrar navegación"] }, "Open navigation": { "v": ["Abrir navegación"] } } }, { "l": "es_419", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_AR", "t": { "Close navigation": { "v": ["Cerrar navegación"] }, "Open navigation": { "v": ["Abrir navegación"] } } }, { "l": "es_CL", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_CO", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_CR", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_DO", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_EC", "t": { "Close navigation": { "v": ["Cerrar navegación"] }, "Open navigation": { "v": ["Abrir navegación"] } } }, { "l": "es_GT", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_HN", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_MX", "t": { "Close navigation": { "v": ["Cerrar navegación"] }, "Open navigation": { "v": ["Abrir navegación"] } } }, { "l": "es_NI", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_PA", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_PE", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_PR", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_PY", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_SV", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_UY", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "et_EE", "t": { "Close navigation": { "v": ["Sulge navigatsioon"] }, "Open navigation": { "v": ["Ava liikumisvaade"] } } }, { "l": "eu", "t": { "Close navigation": { "v": ["Itxi nabigazioa"] }, "Open navigation": { "v": ["Ireki nabigazioa"] } } }, { "l": "fa", "t": { "Close navigation": { "v": ["بستن بخش ناوبری"] }, "Open navigation": { "v": ["باز کردن بخش ناوبری"] } } }, { "l": "fi", "t": { "Close navigation": { "v": ["Sulje navigaatio"] } } }, { "l": "fo", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "fr", "t": { "Close navigation": { "v": ["Fermer la navigation"] }, "Open navigation": { "v": ["Ouvrir la navigation"] } } }, { "l": "ga", "t": { "Close navigation": { "v": ["Dún nascleanúint"] }, "Open navigation": { "v": ["Oscail nascleanúint"] } } }, { "l": "gd", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "gl", "t": { "Close navigation": { "v": ["Pechar a navegación"] } } }, { "l": "he", "t": { "Close navigation": { "v": ["סגירת הניווט"] }, "Open navigation": { "v": ["פתיחת ניווט"] } } }, { "l": "hi_IN", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "hr", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "hsb", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "hu", "t": { "Close navigation": { "v": ["Navigáció bezárása"] }, "Open navigation": { "v": ["Navigáció megnyitása"] } } }, { "l": "hy", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "ia", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "id", "t": { "Close navigation": { "v": ["Tutup navigasi"] }, "Open navigation": { "v": ["Buka navigasi"] } } }, { "l": "ig", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "is", "t": { "Close navigation": { "v": ["Loka leiðsagnarsleða"] } } }, { "l": "it", "t": { "Close navigation": { "v": ["Chiudi la navigazione"] }, "Open navigation": { "v": ["Apri la navigazione"] } } }, { "l": "ja", "t": { "Close navigation": { "v": ["ナビゲーションを閉じる"] }, "Open navigation": { "v": ["ナビゲーションを開く"] } } }, { "l": "ja_JP", "t": { "Close navigation": { "v": ["ナビゲーションを閉じる"] }, "Open navigation": { "v": ["ナビゲーションを開く"] } } }, { "l": "ka", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "ka_GE", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "kab", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "kk", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "km", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "kn", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "ko", "t": { "Close navigation": { "v": ["탐색 닫기"] }, "Open navigation": { "v": ["탐색 열기"] } } }, { "l": "la", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "lb", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "lo", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "lt_LT", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "lv", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "mk", "t": { "Close navigation": { "v": ["Затвори навигација"] }, "Open navigation": { "v": ["Отвори навигација"] } } }, { "l": "mn", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "mr", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "ms_MY", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "my", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "nb", "t": { "Close navigation": { "v": ["Lukk navigasjon"] }, "Open navigation": { "v": ["Åpne navigasjon"] } } }, { "l": "ne", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "nl", "t": { "Close navigation": { "v": ["Navigatie sluiten"] } } }, { "l": "nn_NO", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "oc", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "pl", "t": { "Close navigation": { "v": ["Zamknij nawigację"] } } }, { "l": "ps", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "pt_BR", "t": { "Close navigation": { "v": ["Fechar navegação"] }, "Open navigation": { "v": ["Abrir navegação"] } } }, { "l": "pt_PT", "t": { "Close navigation": { "v": ["Fechar navegação"] } } }, { "l": "ro", "t": { "Close navigation": { "v": ["Închideți navigarea"] }, "Open navigation": { "v": ["Deschideți navigația"] } } }, { "l": "ru", "t": { "Close navigation": { "v": ["Закрыть навигацию"] } } }, { "l": "sc", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "si", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "sk", "t": { "Close navigation": { "v": ["Zavrieť navigáciu"] } } }, { "l": "sl", "t": { "Close navigation": { "v": ["Zapri krmarjenje"] }, "Open navigation": { "v": ["Odpri krmarjenje"] } } }, { "l": "sq", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "sr", "t": { "Close navigation": { "v": ["Затвори навигацију"] } } }, { "l": "sr@latin", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "sv", "t": { "Close navigation": { "v": ["Stäng navigering"] } } }, { "l": "sw", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "ta", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "th", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "tk", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "tr", "t": { "Close navigation": { "v": ["Gezinmeyi kapat"] }, "Open navigation": { "v": ["Gezinmeyi aç"] } } }, { "l": "ug", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "uk", "t": { "Close navigation": { "v": ["Закрити навігацію"] }, "Open navigation": { "v": ["Перейти до навігації"] } } }, { "l": "ur_PK", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "uz", "t": { "Close navigation": { "v": ["Navigatsiyani yopish"] }, "Open navigation": { "v": ["Navigatsiyani oching"] } } }, { "l": "vi", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "zh_CN", "t": { "Close navigation": { "v": ["关闭导航"] } } }, { "l": "zh_HK", "t": { "Close navigation": { "v": ["關閉導航"] } } }, { "l": "zh_TW", "t": { "Close navigation": { "v": ["關閉導航"] }, "Open navigation": { "v": ["開啟導航"] } } }, { "l": "zu_ZA", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }];
const t20 = [{ "l": "af", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "ar", "t": { "Collapse menu": { "v": ["طي القائمة"] }, "Open menu": { "v": ["إفتَح القائمة"] } } }, { "l": "ast", "t": { "Collapse menu": { "v": ["Recoyer el menú"] }, "Open menu": { "v": ["Abrir le menú"] } } }, { "l": "az", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "be", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "bg", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "bn_BD", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "br", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "bs", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "ca", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "cs", "t": { "Collapse menu": { "v": ["Sbalit nabídku"] }, "Open menu": { "v": ["Otevřít nabídku"] } } }, { "l": "cs_CZ", "t": { "Collapse menu": { "v": ["Sbalit nabídku"] }, "Open menu": { "v": ["Otevřít nabídku"] } } }, { "l": "cy_GB", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "da", "t": { "Collapse menu": { "v": ["Skjul menuen"] }, "Open menu": { "v": ["Åben menu"] } } }, { "l": "de", "t": { "Collapse menu": { "v": ["Menü einklappen"] }, "Open menu": { "v": ["Menü öffnen"] } } }, { "l": "de_DE", "t": { "Collapse menu": { "v": ["Menü einklappen"] }, "Open menu": { "v": ["Menü öffnen"] } } }, { "l": "el", "t": { "Collapse menu": { "v": ["Σύμπτυξη μενού"] }, "Open menu": { "v": ["Άνοιγμα μενού"] } } }, { "l": "en_GB", "t": { "Collapse menu": { "v": ["Collapse menu"] }, "Open menu": { "v": ["Open menu"] } } }, { "l": "eo", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es", "t": { "Collapse menu": { "v": ["Ocultar menú"] }, "Open menu": { "v": ["Abrir menú"] } } }, { "l": "es_419", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_AR", "t": { "Collapse menu": { "v": ["Ocultar menú"] }, "Open menu": { "v": ["Abrir menú"] } } }, { "l": "es_CL", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_CO", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_CR", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_DO", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_EC", "t": { "Collapse menu": { "v": ["Ocultar menú"] }, "Open menu": { "v": ["Abrir menú"] } } }, { "l": "es_GT", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_HN", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_MX", "t": { "Collapse menu": { "v": ["Ocultar menú"] }, "Open menu": { "v": ["Abrir menú"] } } }, { "l": "es_NI", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_PA", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_PE", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_PR", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_PY", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_SV", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_UY", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "et_EE", "t": { "Collapse menu": { "v": ["Menüü kokkuklappimine"] }, "Open menu": { "v": ["Ava menüü"] } } }, { "l": "eu", "t": { "Collapse menu": { "v": ["Tolestu menua"] }, "Open menu": { "v": ["Ireki menua"] } } }, { "l": "fa", "t": { "Collapse menu": { "v": ["بستن فهرست"] }, "Open menu": { "v": ["باز کردن فهرست"] } } }, { "l": "fi", "t": { "Collapse menu": { "v": ["Supista valikko"] }, "Open menu": { "v": ["Avaa valikko"] } } }, { "l": "fo", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "fr", "t": { "Collapse menu": { "v": ["Réduire le menu"] }, "Open menu": { "v": ["Ouvrir le menu"] } } }, { "l": "ga", "t": { "Collapse menu": { "v": ["Roghchlár Laghdaigh"] }, "Open menu": { "v": ["Roghchlár a oscailt"] } } }, { "l": "gd", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "gl", "t": { "Collapse menu": { "v": ["Contraer o menú"] }, "Open menu": { "v": ["Abrir o menú"] } } }, { "l": "he", "t": { "Collapse menu": { "v": ["צמצום התפריט"] }, "Open menu": { "v": ["פתיחת תפריט"] } } }, { "l": "hi_IN", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "hr", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "hsb", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "hu", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "hy", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "ia", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "id", "t": { "Collapse menu": { "v": ["Ciutkan menu"] }, "Open menu": { "v": ["Buka menu"] } } }, { "l": "ig", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "is", "t": { "Collapse menu": { "v": ["Fella valmynd saman"] }, "Open menu": { "v": ["Opna valmynd"] } } }, { "l": "it", "t": { "Collapse menu": { "v": ["Chiudi Menu"] }, "Open menu": { "v": ["Apri il menu"] } } }, { "l": "ja", "t": { "Collapse menu": { "v": ["メニューの折りたたみ"] }, "Open menu": { "v": ["メニューを開く"] } } }, { "l": "ja_JP", "t": { "Collapse menu": { "v": ["メニューの折りたたみ"] }, "Open menu": { "v": ["メニューを開く"] } } }, { "l": "ka", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "ka_GE", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "kab", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "kk", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "km", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "kn", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "ko", "t": { "Collapse menu": { "v": ["메뉴 접기"] }, "Open menu": { "v": ["메뉴 열기"] } } }, { "l": "la", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "lb", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "lo", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "lt_LT", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "lv", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "mk", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "mn", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "mr", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "ms_MY", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "my", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "nb", "t": { "Collapse menu": { "v": ["Skjul meny"] }, "Open menu": { "v": ["Åpne meny"] } } }, { "l": "ne", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "nl", "t": { "Collapse menu": { "v": ["Klap menu in"] }, "Open menu": { "v": ["Open menu"] } } }, { "l": "nn_NO", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "oc", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "pl", "t": { "Collapse menu": { "v": ["Zwiń menu"] }, "Open menu": { "v": ["Otwórz menu"] } } }, { "l": "ps", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "pt_BR", "t": { "Collapse menu": { "v": ["Recolher menu"] }, "Open menu": { "v": ["Abrir menu"] } } }, { "l": "pt_PT", "t": { "Collapse menu": { "v": ["Ocultar menu"] }, "Open menu": { "v": ["Abrir menu"] } } }, { "l": "ro", "t": { "Collapse menu": { "v": ["Restrânge meniul"] }, "Open menu": { "v": ["Deschide meniul"] } } }, { "l": "ru", "t": { "Collapse menu": { "v": ["Свернуть меню"] }, "Open menu": { "v": ["Открыть меню"] } } }, { "l": "sc", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "si", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "sk", "t": { "Collapse menu": { "v": ["Zbaliť menu"] }, "Open menu": { "v": ["Otvoriť menu"] } } }, { "l": "sl", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "sq", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "sr", "t": { "Collapse menu": { "v": ["Сажми мени"] }, "Open menu": { "v": ["Отвори мени"] } } }, { "l": "sr@latin", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "sv", "t": { "Collapse menu": { "v": ["Dölj menyn"] }, "Open menu": { "v": ["Öppna menyn"] } } }, { "l": "sw", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "ta", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "th", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "tk", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "tr", "t": { "Collapse menu": { "v": ["Menüyü daralt"] }, "Open menu": { "v": ["Menüyü aç"] } } }, { "l": "ug", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "uk", "t": { "Collapse menu": { "v": ["Згорнути меню"] }, "Open menu": { "v": ["Відкрити меню"] } } }, { "l": "ur_PK", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "uz", "t": { "Collapse menu": { "v": ["Menyuni yig‘ish"] }, "Open menu": { "v": ["Menyuni oching"] } } }, { "l": "vi", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "zh_CN", "t": { "Collapse menu": { "v": ["收起菜单"] }, "Open menu": { "v": ["打开菜单"] } } }, { "l": "zh_HK", "t": { "Collapse menu": { "v": ["折疊選單"] }, "Open menu": { "v": ["開啟選單"] } } }, { "l": "zh_TW", "t": { "Collapse menu": { "v": ["折疊選單"] }, "Open menu": { "v": ["開啟選單"] } } }, { "l": "zu_ZA", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }];
const t21 = [{ "l": "af", "t": { "Edit item": { "v": [""] } } }, { "l": "ar", "t": { "Edit item": { "v": ["تعديل عنصر"] } } }, { "l": "ast", "t": { "Edit item": { "v": ["Editar l'elementu"] } } }, { "l": "az", "t": { "Edit item": { "v": [""] } } }, { "l": "be", "t": { "Edit item": { "v": [""] } } }, { "l": "bg", "t": { "Edit item": { "v": [""] } } }, { "l": "bn_BD", "t": { "Edit item": { "v": [""] } } }, { "l": "br", "t": { "Edit item": { "v": [""] } } }, { "l": "bs", "t": { "Edit item": { "v": [""] } } }, { "l": "ca", "t": { "Edit item": { "v": ["Edita l'element"] } } }, { "l": "cs", "t": { "Edit item": { "v": ["Upravit položku"] } } }, { "l": "cs_CZ", "t": { "Edit item": { "v": ["Upravit položku"] } } }, { "l": "cy_GB", "t": { "Edit item": { "v": [""] } } }, { "l": "da", "t": { "Edit item": { "v": ["Rediger emne"] } } }, { "l": "de", "t": { "Edit item": { "v": ["Element bearbeiten"] } } }, { "l": "de_DE", "t": { "Edit item": { "v": ["Element bearbeiten"] } } }, { "l": "el", "t": { "Edit item": { "v": ["Επεξεργασία αντικειμένου"] } } }, { "l": "en_GB", "t": { "Edit item": { "v": ["Edit item"] } } }, { "l": "eo", "t": { "Edit item": { "v": [""] } } }, { "l": "es", "t": { "Edit item": { "v": ["Editar elemento"] } } }, { "l": "es_419", "t": { "Edit item": { "v": [""] } } }, { "l": "es_AR", "t": { "Edit item": { "v": ["Editar elemento"] } } }, { "l": "es_CL", "t": { "Edit item": { "v": [""] } } }, { "l": "es_CO", "t": { "Edit item": { "v": [""] } } }, { "l": "es_CR", "t": { "Edit item": { "v": [""] } } }, { "l": "es_DO", "t": { "Edit item": { "v": [""] } } }, { "l": "es_EC", "t": { "Edit item": { "v": ["Editar elemento"] } } }, { "l": "es_GT", "t": { "Edit item": { "v": [""] } } }, { "l": "es_HN", "t": { "Edit item": { "v": [""] } } }, { "l": "es_MX", "t": { "Edit item": { "v": ["Editar elemento"] } } }, { "l": "es_NI", "t": { "Edit item": { "v": [""] } } }, { "l": "es_PA", "t": { "Edit item": { "v": [""] } } }, { "l": "es_PE", "t": { "Edit item": { "v": [""] } } }, { "l": "es_PR", "t": { "Edit item": { "v": [""] } } }, { "l": "es_PY", "t": { "Edit item": { "v": [""] } } }, { "l": "es_SV", "t": { "Edit item": { "v": [""] } } }, { "l": "es_UY", "t": { "Edit item": { "v": [""] } } }, { "l": "et_EE", "t": { "Edit item": { "v": ["Muuda objekti"] } } }, { "l": "eu", "t": { "Edit item": { "v": ["Editatu elementua"] } } }, { "l": "fa", "t": { "Edit item": { "v": ["ویرایش مورد"] } } }, { "l": "fi", "t": { "Edit item": { "v": ["Muokkaa kohdetta"] } } }, { "l": "fo", "t": { "Edit item": { "v": [""] } } }, { "l": "fr", "t": { "Edit item": { "v": ["Éditer l'élément"] } } }, { "l": "ga", "t": { "Edit item": { "v": ["Cuir mír in eagar"] } } }, { "l": "gd", "t": { "Edit item": { "v": [""] } } }, { "l": "gl", "t": { "Edit item": { "v": ["Editar o elemento"] } } }, { "l": "he", "t": { "Edit item": { "v": ["עריכת פריט"] } } }, { "l": "hi_IN", "t": { "Edit item": { "v": [""] } } }, { "l": "hr", "t": { "Edit item": { "v": [""] } } }, { "l": "hsb", "t": { "Edit item": { "v": [""] } } }, { "l": "hu", "t": { "Edit item": { "v": ["Elem szerkesztése"] } } }, { "l": "hy", "t": { "Edit item": { "v": [""] } } }, { "l": "ia", "t": { "Edit item": { "v": [""] } } }, { "l": "id", "t": { "Edit item": { "v": ["Edit item"] } } }, { "l": "ig", "t": { "Edit item": { "v": [""] } } }, { "l": "is", "t": { "Edit item": { "v": ["Breyta atriði"] } } }, { "l": "it", "t": { "Edit item": { "v": ["Modifica l'elemento"] } } }, { "l": "ja", "t": { "Edit item": { "v": ["編集"] } } }, { "l": "ja_JP", "t": { "Edit item": { "v": ["編集"] } } }, { "l": "ka", "t": { "Edit item": { "v": [""] } } }, { "l": "ka_GE", "t": { "Edit item": { "v": [""] } } }, { "l": "kab", "t": { "Edit item": { "v": [""] } } }, { "l": "kk", "t": { "Edit item": { "v": [""] } } }, { "l": "km", "t": { "Edit item": { "v": [""] } } }, { "l": "kn", "t": { "Edit item": { "v": [""] } } }, { "l": "ko", "t": { "Edit item": { "v": ["항목 수정"] } } }, { "l": "la", "t": { "Edit item": { "v": [""] } } }, { "l": "lb", "t": { "Edit item": { "v": [""] } } }, { "l": "lo", "t": { "Edit item": { "v": [""] } } }, { "l": "lt_LT", "t": { "Edit item": { "v": [""] } } }, { "l": "lv", "t": { "Edit item": { "v": [""] } } }, { "l": "mk", "t": { "Edit item": { "v": ["Уреди"] } } }, { "l": "mn", "t": { "Edit item": { "v": [""] } } }, { "l": "mr", "t": { "Edit item": { "v": [""] } } }, { "l": "ms_MY", "t": { "Edit item": { "v": [""] } } }, { "l": "my", "t": { "Edit item": { "v": [""] } } }, { "l": "nb", "t": { "Edit item": { "v": ["Rediger"] } } }, { "l": "ne", "t": { "Edit item": { "v": [""] } } }, { "l": "nl", "t": { "Edit item": { "v": ["Item bewerken"] } } }, { "l": "nn_NO", "t": { "Edit item": { "v": [""] } } }, { "l": "oc", "t": { "Edit item": { "v": [""] } } }, { "l": "pl", "t": { "Edit item": { "v": ["Edytuj element"] } } }, { "l": "ps", "t": { "Edit item": { "v": [""] } } }, { "l": "pt_BR", "t": { "Edit item": { "v": ["Editar item"] } } }, { "l": "pt_PT", "t": { "Edit item": { "v": ["Editar item"] } } }, { "l": "ro", "t": { "Edit item": { "v": ["Editați elementul"] } } }, { "l": "ru", "t": { "Edit item": { "v": ["Изменить элемент"] } } }, { "l": "sc", "t": { "Edit item": { "v": [""] } } }, { "l": "si", "t": { "Edit item": { "v": [""] } } }, { "l": "sk", "t": { "Edit item": { "v": ["Upraviť položku"] } } }, { "l": "sl", "t": { "Edit item": { "v": ["Uredi predmet"] } } }, { "l": "sq", "t": { "Edit item": { "v": [""] } } }, { "l": "sr", "t": { "Edit item": { "v": ["Уреди ставку"] } } }, { "l": "sr@latin", "t": { "Edit item": { "v": [""] } } }, { "l": "sv", "t": { "Edit item": { "v": ["Redigera objekt"] } } }, { "l": "sw", "t": { "Edit item": { "v": [""] } } }, { "l": "ta", "t": { "Edit item": { "v": [""] } } }, { "l": "th", "t": { "Edit item": { "v": [""] } } }, { "l": "tk", "t": { "Edit item": { "v": [""] } } }, { "l": "tr", "t": { "Edit item": { "v": ["Ögeyi düzenle"] } } }, { "l": "ug", "t": { "Edit item": { "v": [""] } } }, { "l": "uk", "t": { "Edit item": { "v": ["Редагувати елемент"] } } }, { "l": "ur_PK", "t": { "Edit item": { "v": [""] } } }, { "l": "uz", "t": { "Edit item": { "v": ["Elementni tahrirlash"] } } }, { "l": "vi", "t": { "Edit item": { "v": [""] } } }, { "l": "zh_CN", "t": { "Edit item": { "v": ["编辑项目"] } } }, { "l": "zh_HK", "t": { "Edit item": { "v": ["編輯項目"] } } }, { "l": "zh_TW", "t": { "Edit item": { "v": ["編輯項目"] } } }, { "l": "zu_ZA", "t": { "Edit item": { "v": [""] } } }];
const t22 = [{ "l": "af", "t": {} }, { "l": "ar", "t": { "Enable interactive view": { "v": ["تمكين المنظور التفاعلي"] } } }, { "l": "ast", "t": { "Enable interactive view": { "v": ["Activar la vista interactiva"] } } }, { "l": "az", "t": {} }, { "l": "be", "t": {} }, { "l": "bg", "t": {} }, { "l": "bn_BD", "t": {} }, { "l": "br", "t": {} }, { "l": "bs", "t": {} }, { "l": "ca", "t": {} }, { "l": "cs", "t": { "Enable interactive view": { "v": ["Zapnout interaktivní zobrazení"] } } }, { "l": "cs_CZ", "t": {} }, { "l": "cy_GB", "t": {} }, { "l": "da", "t": { "Enable interactive view": { "v": ["Aktiver interaktiv visning"] } } }, { "l": "de", "t": { "Enable interactive view": { "v": ["Die interaktive Ansicht aktivieren"] } } }, { "l": "de_DE", "t": { "Enable interactive view": { "v": ["Die interaktive Ansicht aktivieren"] } } }, { "l": "el", "t": { "Enable interactive view": { "v": ["Ενεργοποίηση διαδραστικής προβολής"] } } }, { "l": "en_GB", "t": { "Enable interactive view": { "v": ["Enable interactive view"] } } }, { "l": "eo", "t": {} }, { "l": "es", "t": { "Enable interactive view": { "v": ["Habilitar vista interactiva"] } } }, { "l": "es_419", "t": {} }, { "l": "es_AR", "t": { "Enable interactive view": { "v": ["Habilitar vista interactiva"] } } }, { "l": "es_CL", "t": {} }, { "l": "es_CO", "t": {} }, { "l": "es_CR", "t": {} }, { "l": "es_DO", "t": {} }, { "l": "es_EC", "t": {} }, { "l": "es_GT", "t": {} }, { "l": "es_HN", "t": {} }, { "l": "es_MX", "t": { "Enable interactive view": { "v": ["Habilitar vista interactiva"] } } }, { "l": "es_NI", "t": {} }, { "l": "es_PA", "t": {} }, { "l": "es_PE", "t": {} }, { "l": "es_PR", "t": {} }, { "l": "es_PY", "t": {} }, { "l": "es_SV", "t": {} }, { "l": "es_UY", "t": {} }, { "l": "et_EE", "t": { "Enable interactive view": { "v": ["Lülita interaktiivne vaade sisse"] } } }, { "l": "eu", "t": {} }, { "l": "fa", "t": { "Enable interactive view": { "v": ["فعال‌سازی نمای تعاملی"] } } }, { "l": "fi", "t": { "Enable interactive view": { "v": ["Näytä vuorovaikutteinen näkymä"] } } }, { "l": "fo", "t": {} }, { "l": "fr", "t": { "Enable interactive view": { "v": ["Activer la vue interactive"] } } }, { "l": "ga", "t": { "Enable interactive view": { "v": ["Cumasaigh amharc idirghníomhach"] } } }, { "l": "gd", "t": {} }, { "l": "gl", "t": { "Enable interactive view": { "v": ["Activar a vista interactiva"] } } }, { "l": "he", "t": {} }, { "l": "hi_IN", "t": {} }, { "l": "hr", "t": {} }, { "l": "hsb", "t": {} }, { "l": "hu", "t": {} }, { "l": "hy", "t": {} }, { "l": "ia", "t": {} }, { "l": "id", "t": {} }, { "l": "ig", "t": {} }, { "l": "is", "t": { "Enable interactive view": { "v": ["Virkja gagnvirka sýn"] } } }, { "l": "it", "t": {} }, { "l": "ja", "t": { "Enable interactive view": { "v": ["インタラクティブ・ビューを有効にする"] } } }, { "l": "ja_JP", "t": { "Enable interactive view": { "v": ["インタラクティブ・ビューを有効にする"] } } }, { "l": "ka", "t": {} }, { "l": "ka_GE", "t": {} }, { "l": "kab", "t": {} }, { "l": "kk", "t": {} }, { "l": "km", "t": {} }, { "l": "kn", "t": {} }, { "l": "ko", "t": { "Enable interactive view": { "v": ["대화형 보기 활성화"] } } }, { "l": "la", "t": {} }, { "l": "lb", "t": {} }, { "l": "lo", "t": {} }, { "l": "lt_LT", "t": {} }, { "l": "lv", "t": {} }, { "l": "mk", "t": {} }, { "l": "mn", "t": {} }, { "l": "mr", "t": {} }, { "l": "ms_MY", "t": {} }, { "l": "my", "t": {} }, { "l": "nb", "t": { "Enable interactive view": { "v": ["Aktiver interaktiv visning"] } } }, { "l": "ne", "t": {} }, { "l": "nl", "t": { "Enable interactive view": { "v": ["Interactieve weergave inschakelen"] } } }, { "l": "nn_NO", "t": {} }, { "l": "oc", "t": {} }, { "l": "pl", "t": { "Enable interactive view": { "v": ["Włącz widok interaktywny"] } } }, { "l": "ps", "t": {} }, { "l": "pt_BR", "t": { "Enable interactive view": { "v": ["Ativar visualização interativa"] } } }, { "l": "pt_PT", "t": { "Enable interactive view": { "v": ["Ativar vista interativa"] } } }, { "l": "ro", "t": {} }, { "l": "ru", "t": { "Enable interactive view": { "v": ["Включить интерактивный просмотр"] } } }, { "l": "sc", "t": {} }, { "l": "si", "t": {} }, { "l": "sk", "t": { "Enable interactive view": { "v": ["Povoliť interaktívny pohľad"] } } }, { "l": "sl", "t": {} }, { "l": "sq", "t": {} }, { "l": "sr", "t": { "Enable interactive view": { "v": ["Укључи интерактивни приказ"] } } }, { "l": "sr@latin", "t": {} }, { "l": "sv", "t": { "Enable interactive view": { "v": ["Aktivera interaktiv vy"] } } }, { "l": "sw", "t": {} }, { "l": "ta", "t": {} }, { "l": "th", "t": {} }, { "l": "tk", "t": {} }, { "l": "tr", "t": { "Enable interactive view": { "v": ["Etkileşimli görünümü aç"] } } }, { "l": "ug", "t": {} }, { "l": "uk", "t": { "Enable interactive view": { "v": ["Увімкнути інтерактивний перегляд"] } } }, { "l": "ur_PK", "t": {} }, { "l": "uz", "t": { "Enable interactive view": { "v": ["Interaktiv ko'rinishni yoqing"] } } }, { "l": "vi", "t": {} }, { "l": "zh_CN", "t": { "Enable interactive view": { "v": ["启用交互视窗"] } } }, { "l": "zh_HK", "t": { "Enable interactive view": { "v": ["啟用互動視圖"] } } }, { "l": "zh_TW", "t": { "Enable interactive view": { "v": ["啟用互動檢視"] } } }, { "l": "zu_ZA", "t": {} }];
const t23 = [{ "l": "af", "t": { "Enter link": { "v": [""] } } }, { "l": "ar", "t": { "Enter link": { "v": ["أدخِل الرابط"] } } }, { "l": "ast", "t": { "Enter link": { "v": ["Introducir l'enllaz"] } } }, { "l": "az", "t": { "Enter link": { "v": [""] } } }, { "l": "be", "t": { "Enter link": { "v": [""] } } }, { "l": "bg", "t": { "Enter link": { "v": [""] } } }, { "l": "bn_BD", "t": { "Enter link": { "v": [""] } } }, { "l": "br", "t": { "Enter link": { "v": [""] } } }, { "l": "bs", "t": { "Enter link": { "v": [""] } } }, { "l": "ca", "t": { "Enter link": { "v": [""] } } }, { "l": "cs", "t": { "Enter link": { "v": ["Zadat odkaz"] } } }, { "l": "cs_CZ", "t": { "Enter link": { "v": ["Zadat odkaz"] } } }, { "l": "cy_GB", "t": { "Enter link": { "v": [""] } } }, { "l": "da", "t": { "Enter link": { "v": ["Indtast link"] } } }, { "l": "de", "t": { "Enter link": { "v": ["Link eingeben"] } } }, { "l": "de_DE", "t": { "Enter link": { "v": ["Link eingeben"] } } }, { "l": "el", "t": { "Enter link": { "v": ["Εισάγετε σύνδεσμο"] } } }, { "l": "en_GB", "t": { "Enter link": { "v": ["Enter link"] } } }, { "l": "eo", "t": { "Enter link": { "v": [""] } } }, { "l": "es", "t": { "Enter link": { "v": ["Ingrese enlace"] } } }, { "l": "es_419", "t": { "Enter link": { "v": [""] } } }, { "l": "es_AR", "t": { "Enter link": { "v": ["Ingresar enlace"] } } }, { "l": "es_CL", "t": { "Enter link": { "v": [""] } } }, { "l": "es_CO", "t": { "Enter link": { "v": [""] } } }, { "l": "es_CR", "t": { "Enter link": { "v": [""] } } }, { "l": "es_DO", "t": { "Enter link": { "v": [""] } } }, { "l": "es_EC", "t": { "Enter link": { "v": ["Ingresar enlace"] } } }, { "l": "es_GT", "t": { "Enter link": { "v": [""] } } }, { "l": "es_HN", "t": { "Enter link": { "v": [""] } } }, { "l": "es_MX", "t": { "Enter link": { "v": ["Ingresar enlace"] } } }, { "l": "es_NI", "t": { "Enter link": { "v": [""] } } }, { "l": "es_PA", "t": { "Enter link": { "v": [""] } } }, { "l": "es_PE", "t": { "Enter link": { "v": [""] } } }, { "l": "es_PR", "t": { "Enter link": { "v": [""] } } }, { "l": "es_PY", "t": { "Enter link": { "v": [""] } } }, { "l": "es_SV", "t": { "Enter link": { "v": [""] } } }, { "l": "es_UY", "t": { "Enter link": { "v": [""] } } }, { "l": "et_EE", "t": { "Enter link": { "v": ["Sisesta link"] } } }, { "l": "eu", "t": { "Enter link": { "v": ["Sartu esteka"] } } }, { "l": "fa", "t": { "Enter link": { "v": ["لینک را وارد کنید"] } } }, { "l": "fi", "t": { "Enter link": { "v": ["Kirjoita linkki"] } } }, { "l": "fo", "t": { "Enter link": { "v": [""] } } }, { "l": "fr", "t": { "Enter link": { "v": ["Saisissez le lien"] } } }, { "l": "ga", "t": { "Enter link": { "v": ["Cuir isteach nasc"] } } }, { "l": "gd", "t": { "Enter link": { "v": [""] } } }, { "l": "gl", "t": { "Enter link": { "v": ["Introducir a ligazón"] } } }, { "l": "he", "t": { "Enter link": { "v": ["מילוי קישור"] } } }, { "l": "hi_IN", "t": { "Enter link": { "v": [""] } } }, { "l": "hr", "t": { "Enter link": { "v": [""] } } }, { "l": "hsb", "t": { "Enter link": { "v": [""] } } }, { "l": "hu", "t": { "Enter link": { "v": [""] } } }, { "l": "hy", "t": { "Enter link": { "v": [""] } } }, { "l": "ia", "t": { "Enter link": { "v": [""] } } }, { "l": "id", "t": { "Enter link": { "v": ["Masukkan tautan"] } } }, { "l": "ig", "t": { "Enter link": { "v": [""] } } }, { "l": "is", "t": { "Enter link": { "v": ["Settu inn tengil"] } } }, { "l": "it", "t": { "Enter link": { "v": ["Inserire il link"] } } }, { "l": "ja", "t": { "Enter link": { "v": ["リンクを入力する"] } } }, { "l": "ja_JP", "t": { "Enter link": { "v": ["リンクを入力する"] } } }, { "l": "ka", "t": { "Enter link": { "v": [""] } } }, { "l": "ka_GE", "t": { "Enter link": { "v": [""] } } }, { "l": "kab", "t": { "Enter link": { "v": [""] } } }, { "l": "kk", "t": { "Enter link": { "v": [""] } } }, { "l": "km", "t": { "Enter link": { "v": [""] } } }, { "l": "kn", "t": { "Enter link": { "v": [""] } } }, { "l": "ko", "t": { "Enter link": { "v": ["링크 입력"] } } }, { "l": "la", "t": { "Enter link": { "v": [""] } } }, { "l": "lb", "t": { "Enter link": { "v": [""] } } }, { "l": "lo", "t": { "Enter link": { "v": [""] } } }, { "l": "lt_LT", "t": { "Enter link": { "v": [""] } } }, { "l": "lv", "t": { "Enter link": { "v": [""] } } }, { "l": "mk", "t": { "Enter link": { "v": [""] } } }, { "l": "mn", "t": { "Enter link": { "v": [""] } } }, { "l": "mr", "t": { "Enter link": { "v": [""] } } }, { "l": "ms_MY", "t": { "Enter link": { "v": [""] } } }, { "l": "my", "t": { "Enter link": { "v": [""] } } }, { "l": "nb", "t": { "Enter link": { "v": ["Skriv inn lenken"] } } }, { "l": "ne", "t": { "Enter link": { "v": [""] } } }, { "l": "nl", "t": { "Enter link": { "v": ["Voer link in"] } } }, { "l": "nn_NO", "t": { "Enter link": { "v": [""] } } }, { "l": "oc", "t": { "Enter link": { "v": [""] } } }, { "l": "pl", "t": { "Enter link": { "v": ["Wprowadź link"] } } }, { "l": "ps", "t": { "Enter link": { "v": [""] } } }, { "l": "pt_BR", "t": { "Enter link": { "v": ["Insira o link"] } } }, { "l": "pt_PT", "t": { "Enter link": { "v": ["Inserir hiperligação"] } } }, { "l": "ro", "t": { "Enter link": { "v": ["Introduceți link-ul"] } } }, { "l": "ru", "t": { "Enter link": { "v": ["Введите ссылку"] } } }, { "l": "sc", "t": { "Enter link": { "v": [""] } } }, { "l": "si", "t": { "Enter link": { "v": [""] } } }, { "l": "sk", "t": { "Enter link": { "v": ["Vložiť link"] } } }, { "l": "sl", "t": { "Enter link": { "v": [""] } } }, { "l": "sq", "t": { "Enter link": { "v": [""] } } }, { "l": "sr", "t": { "Enter link": { "v": ["Унесите линк"] } } }, { "l": "sr@latin", "t": { "Enter link": { "v": [""] } } }, { "l": "sv", "t": { "Enter link": { "v": ["Ange länk"] } } }, { "l": "sw", "t": { "Enter link": { "v": [""] } } }, { "l": "ta", "t": { "Enter link": { "v": [""] } } }, { "l": "th", "t": { "Enter link": { "v": [""] } } }, { "l": "tk", "t": { "Enter link": { "v": [""] } } }, { "l": "tr", "t": { "Enter link": { "v": ["Bağlantıyı yazın"] } } }, { "l": "ug", "t": { "Enter link": { "v": [""] } } }, { "l": "uk", "t": { "Enter link": { "v": ["Зазначте посилання"] } } }, { "l": "ur_PK", "t": { "Enter link": { "v": [""] } } }, { "l": "uz", "t": { "Enter link": { "v": ["Havolani kiriting"] } } }, { "l": "vi", "t": { "Enter link": { "v": [""] } } }, { "l": "zh_CN", "t": { "Enter link": { "v": ["输入链接"] } } }, { "l": "zh_HK", "t": { "Enter link": { "v": ["輸入連結"] } } }, { "l": "zh_TW", "t": { "Enter link": { "v": ["輸入連結"] } } }, { "l": "zu_ZA", "t": { "Enter link": { "v": [""] } } }];
const t24 = [{ "l": "af", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ar", "t": { "External documentation for {name}": { "v": ["التوثيق الخارجي لـ {name}"] } } }, { "l": "ast", "t": { "External documentation for {name}": { "v": ["Documentación esterna pa: {name}"] } } }, { "l": "az", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "be", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "bg", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "bn_BD", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "br", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "bs", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ca", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "cs", "t": { "External documentation for {name}": { "v": ["Externí dokumentace pro {name}"] } } }, { "l": "cs_CZ", "t": { "External documentation for {name}": { "v": ["Externí dokumentace pro {name}"] } } }, { "l": "cy_GB", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "da", "t": { "External documentation for {name}": { "v": ["Ekstern dokumentation for {name}"] } } }, { "l": "de", "t": { "External documentation for {name}": { "v": ["Externe Dokumentation für {name}"] } } }, { "l": "de_DE", "t": { "External documentation for {name}": { "v": ["Externe Dokumentation für {name}"] } } }, { "l": "el", "t": { "External documentation for {name}": { "v": ["Εξωτερική τεκμηρίωση για {name}"] } } }, { "l": "en_GB", "t": { "External documentation for {name}": { "v": ["External documentation for {name}"] } } }, { "l": "eo", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es", "t": { "External documentation for {name}": { "v": ["Documentación externa para {name}"] } } }, { "l": "es_419", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_AR", "t": { "External documentation for {name}": { "v": ["Documentación externa para {name}"] } } }, { "l": "es_CL", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_CO", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_CR", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_DO", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_EC", "t": { "External documentation for {name}": { "v": ["Documentación externa para {name}"] } } }, { "l": "es_GT", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_HN", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_MX", "t": { "External documentation for {name}": { "v": ["Documentación externa para {name}"] } } }, { "l": "es_NI", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_PA", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_PE", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_PR", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_PY", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_SV", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_UY", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "et_EE", "t": { "External documentation for {name}": { "v": ["Väline dokumentatsioon: {name}"] } } }, { "l": "eu", "t": { "External documentation for {name}": { "v": ["{name}-ren kanpoko dokumentazioa"] } } }, { "l": "fa", "t": { "External documentation for {name}": { "v": ["اسناد بیرونی برای {name}"] } } }, { "l": "fi", "t": { "External documentation for {name}": { "v": ["Ulkoinen dokumentaatio {name}lle"] } } }, { "l": "fo", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "fr", "t": { "External documentation for {name}": { "v": ["Documentation externe pour {name}"] } } }, { "l": "ga", "t": { "External documentation for {name}": { "v": ["Doiciméadúchán seachtrach le haghaidh {name}"] } } }, { "l": "gd", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "gl", "t": { "External documentation for {name}": { "v": ["Documentación externa para {name}"] } } }, { "l": "he", "t": { "External documentation for {name}": { "v": ["תיעוד חיצוני עבור {name}"] } } }, { "l": "hi_IN", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "hr", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "hsb", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "hu", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "hy", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ia", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "id", "t": { "External documentation for {name}": { "v": ["Dokumentasi eksternal untuk {name}"] } } }, { "l": "ig", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "is", "t": { "External documentation for {name}": { "v": ["Utanaðkomandi leiðbeiningar fyrir {name}"] } } }, { "l": "it", "t": { "External documentation for {name}": { "v": ["Documentazione esterna per {name}"] } } }, { "l": "ja", "t": { "External documentation for {name}": { "v": ["{name} の外部ドキュメント"] } } }, { "l": "ja_JP", "t": { "External documentation for {name}": { "v": ["{name} の外部ドキュメント"] } } }, { "l": "ka", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ka_GE", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "kab", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "kk", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "km", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "kn", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ko", "t": { "External documentation for {name}": { "v": ["{name}의 외부 문서"] } } }, { "l": "la", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "lb", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "lo", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "lt_LT", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "lv", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "mk", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "mn", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "mr", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ms_MY", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "my", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "nb", "t": { "External documentation for {name}": { "v": ["Ekstern dokumentasjon for {name}"] } } }, { "l": "ne", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "nl", "t": { "External documentation for {name}": { "v": ["Externe documentatie voor {name}"] } } }, { "l": "nn_NO", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "oc", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "pl", "t": { "External documentation for {name}": { "v": ["Dokumentacja zewnętrzna dla {name}"] } } }, { "l": "ps", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "pt_BR", "t": { "External documentation for {name}": { "v": ["Documentação externa para {name}"] } } }, { "l": "pt_PT", "t": { "External documentation for {name}": { "v": ["Documentação externa para {name}"] } } }, { "l": "ro", "t": { "External documentation for {name}": { "v": ["Documentație externă pentru {name}"] } } }, { "l": "ru", "t": { "External documentation for {name}": { "v": ["Внешняя документация для {name}"] } } }, { "l": "sc", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "si", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "sk", "t": { "External documentation for {name}": { "v": ["Externá dokumentácia pre {name}"] } } }, { "l": "sl", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "sq", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "sr", "t": { "External documentation for {name}": { "v": ["Спољна документација за {name}"] } } }, { "l": "sr@latin", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "sv", "t": { "External documentation for {name}": { "v": ["Extern dokumentation för {name}"] } } }, { "l": "sw", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ta", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "th", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "tk", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "tr", "t": { "External documentation for {name}": { "v": ["{name} için dış belgeler"] } } }, { "l": "ug", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "uk", "t": { "External documentation for {name}": { "v": ["Зовнішня документація для {name}"] } } }, { "l": "ur_PK", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "uz", "t": { "External documentation for {name}": { "v": ["{name}uchun tashqi hujjatlar"] } } }, { "l": "vi", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "zh_CN", "t": { "External documentation for {name}": { "v": ["{name} 的外部文档"] } } }, { "l": "zh_HK", "t": { "External documentation for {name}": { "v": ["{name} 的外部文件"] } } }, { "l": "zh_TW", "t": { "External documentation for {name}": { "v": ["{name} 的外部文件"] } } }, { "l": "zu_ZA", "t": { "External documentation for {name}": { "v": [""] } } }];
const t29 = [{ "l": "af", "t": {} }, { "l": "ar", "t": { "Keyboard navigation help": { "v": ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { "v": ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { "v": ["تجاوَز إلى المحتوى الرئيسي"] } } }, { "l": "ast", "t": { "Keyboard navigation help": { "v": ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { "v": ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { "v": ["Dir al conteníu principal"] } } }, { "l": "az", "t": {} }, { "l": "be", "t": {} }, { "l": "bg", "t": {} }, { "l": "bn_BD", "t": {} }, { "l": "br", "t": {} }, { "l": "bs", "t": {} }, { "l": "ca", "t": {} }, { "l": "cs", "t": { "Keyboard navigation help": { "v": ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { "v": ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { "v": ["Přeskočit na hlavní obsah"] } } }, { "l": "cs_CZ", "t": { "Keyboard navigation help": { "v": ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { "v": ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { "v": ["Přeskočit na hlavní obsah"] } } }, { "l": "cy_GB", "t": {} }, { "l": "da", "t": { "Keyboard navigation help": { "v": ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { "v": ["Spring til app navigation"] }, "Skip to main content": { "v": ["Spring til hovedindhold"] } } }, { "l": "de", "t": { "Keyboard navigation help": { "v": ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { "v": ["Zur App-Navigation springen"] }, "Skip to main content": { "v": ["Zum Hauptinhalt springen"] } } }, { "l": "de_DE", "t": { "Keyboard navigation help": { "v": ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { "v": ["Zur App-Navigation springen"] }, "Skip to main content": { "v": ["Zum Hauptinhalt springen"] } } }, { "l": "el", "t": { "Keyboard navigation help": { "v": ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { "v": ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { "v": ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { "l": "en_GB", "t": { "Keyboard navigation help": { "v": ["Keyboard navigation help"] }, "Skip to app navigation": { "v": ["Skip to app navigation"] }, "Skip to main content": { "v": ["Skip to main content"] } } }, { "l": "eo", "t": {} }, { "l": "es", "t": { "Keyboard navigation help": { "v": ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { "v": ["Saltar a la navegación de apps"] }, "Skip to main content": { "v": ["Saltar al contenido principal"] } } }, { "l": "es_419", "t": {} }, { "l": "es_AR", "t": { "Keyboard navigation help": { "v": ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { "v": ["Saltar a la navegación de app"] }, "Skip to main content": { "v": ["Saltar al contenido principal"] } } }, { "l": "es_CL", "t": {} }, { "l": "es_CO", "t": {} }, { "l": "es_CR", "t": {} }, { "l": "es_DO", "t": {} }, { "l": "es_EC", "t": {} }, { "l": "es_GT", "t": {} }, { "l": "es_HN", "t": {} }, { "l": "es_MX", "t": { "Keyboard navigation help": { "v": ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { "v": ["Saltar a la navegación de app"] }, "Skip to main content": { "v": ["Saltar al contenido principal"] } } }, { "l": "es_NI", "t": {} }, { "l": "es_PA", "t": {} }, { "l": "es_PE", "t": {} }, { "l": "es_PR", "t": {} }, { "l": "es_PY", "t": {} }, { "l": "es_SV", "t": {} }, { "l": "es_UY", "t": {} }, { "l": "et_EE", "t": { "Keyboard navigation help": { "v": ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { "v": ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { "v": ["Suundu põhisisu juurde"] } } }, { "l": "eu", "t": {} }, { "l": "fa", "t": { "Keyboard navigation help": { "v": ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { "v": ["رفتن به پیمایش برنامه"] }, "Skip to main content": { "v": ["رفتن به محتوای اصلی"] } } }, { "l": "fi", "t": { "Keyboard navigation help": { "v": ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { "v": ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { "v": ["Siirry pääsisältöön"] } } }, { "l": "fo", "t": {} }, { "l": "fr", "t": { "Keyboard navigation help": { "v": ["Aide à la navigation du clavier"] }, "Skip to app navigation": { "v": ["Passer à l'app navigation"] }, "Skip to main content": { "v": ["Passer au contenu principal"] } } }, { "l": "ga", "t": { "Keyboard navigation help": { "v": ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { "v": ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { "v": ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { "l": "gd", "t": {} }, { "l": "gl", "t": { "Keyboard navigation help": { "v": ["Axuda á navegación co teclado"] }, "Skip to app navigation": { "v": ["Ir á navegación da aplicación"] }, "Skip to main content": { "v": ["Ir ao contido principal"] } } }, { "l": "he", "t": {} }, { "l": "hi_IN", "t": {} }, { "l": "hr", "t": {} }, { "l": "hsb", "t": {} }, { "l": "hu", "t": {} }, { "l": "hy", "t": {} }, { "l": "ia", "t": {} }, { "l": "id", "t": {} }, { "l": "ig", "t": {} }, { "l": "is", "t": { "Keyboard navigation help": { "v": ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { "v": ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { "v": ["Sleppa og fara í meginefni"] } } }, { "l": "it", "t": {} }, { "l": "ja", "t": { "Keyboard navigation help": { "v": ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { "v": ["アプリのナビゲーションへ移動"] }, "Skip to main content": { "v": ["メインコンテンツへ移動"] } } }, { "l": "ja_JP", "t": { "Keyboard navigation help": { "v": ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { "v": ["アプリのナビゲーションへ移動"] }, "Skip to main content": { "v": ["メインコンテンツへ移動"] } } }, { "l": "ka", "t": {} }, { "l": "ka_GE", "t": {} }, { "l": "kab", "t": {} }, { "l": "kk", "t": {} }, { "l": "km", "t": {} }, { "l": "kn", "t": {} }, { "l": "ko", "t": { "Keyboard navigation help": { "v": ["키보드 탐색 도움말"] }, "Skip to app navigation": { "v": ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { "v": ["본 내용으로 건너뛰기"] } } }, { "l": "la", "t": {} }, { "l": "lb", "t": {} }, { "l": "lo", "t": {} }, { "l": "lt_LT", "t": {} }, { "l": "lv", "t": {} }, { "l": "mk", "t": {} }, { "l": "mn", "t": {} }, { "l": "mr", "t": {} }, { "l": "ms_MY", "t": {} }, { "l": "my", "t": {} }, { "l": "nb", "t": { "Keyboard navigation help": { "v": ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { "v": ["Hopp til appnavigering"] }, "Skip to main content": { "v": ["Hopp til hovedinnhold"] } } }, { "l": "ne", "t": {} }, { "l": "nl", "t": { "Keyboard navigation help": { "v": ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { "v": ["Doorgaan naar app-navigatie"] }, "Skip to main content": { "v": ["Naar hoofdinhoud gaan"] } } }, { "l": "nn_NO", "t": {} }, { "l": "oc", "t": {} }, { "l": "pl", "t": { "Keyboard navigation help": { "v": ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { "v": ["Przewiń do nawigacji"] }, "Skip to main content": { "v": ["Przewiń do głównych treści"] } } }, { "l": "ps", "t": {} }, { "l": "pt_BR", "t": { "Keyboard navigation help": { "v": ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { "v": ["Ir para navegação"] }, "Skip to main content": { "v": ["Ir para conteúdo principal"] } } }, { "l": "pt_PT", "t": { "Keyboard navigation help": { "v": ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { "v": ["Saltar para navegação da app"] }, "Skip to main content": { "v": ["Saltar para conteúdo principal"] } } }, { "l": "ro", "t": {} }, { "l": "ru", "t": { "Keyboard navigation help": { "v": ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { "v": ["Перейти к навигации по приложению"] }, "Skip to main content": { "v": ["Перейти к основному содержанию"] } } }, { "l": "sc", "t": {} }, { "l": "si", "t": {} }, { "l": "sk", "t": { "Keyboard navigation help": { "v": ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { "v": ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { "v": ["Preskočiť na hlavný obsah"] } } }, { "l": "sl", "t": {} }, { "l": "sq", "t": {} }, { "l": "sr", "t": { "Keyboard navigation help": { "v": ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { "v": ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { "v": ["Прескочи на главни садржај"] } } }, { "l": "sr@latin", "t": {} }, { "l": "sv", "t": { "Keyboard navigation help": { "v": ["Hjälp med tangentbordsnavigering"] }, "Skip to app navigation": { "v": ["Hoppa till appnavigering"] }, "Skip to main content": { "v": ["Hoppa till huvudinnehåll"] } } }, { "l": "sw", "t": {} }, { "l": "ta", "t": {} }, { "l": "th", "t": {} }, { "l": "tk", "t": {} }, { "l": "tr", "t": { "Keyboard navigation help": { "v": ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { "v": ["Uygulama gezinmesine git"] }, "Skip to main content": { "v": ["Ana içeriğe git"] } } }, { "l": "ug", "t": {} }, { "l": "uk", "t": { "Keyboard navigation help": { "v": ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { "v": ["Пропустити навігацію по застосунках"] }, "Skip to main content": { "v": ["Перейти одразу до головного вмісту"] } } }, { "l": "ur_PK", "t": {} }, { "l": "uz", "t": { "Keyboard navigation help": { "v": ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { "v": ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { "v": ["Asosiy tarkibga o'tish"] } } }, { "l": "vi", "t": {} }, { "l": "zh_CN", "t": { "Keyboard navigation help": { "v": ["键盘导航栏帮助"] }, "Skip to app navigation": { "v": ["跳转至应用程序导航页"] }, "Skip to main content": { "v": ["跳转至主要内容"] } } }, { "l": "zh_HK", "t": { "Keyboard navigation help": { "v": ["鍵盤導航幫助"] }, "Skip to app navigation": { "v": ["跳至應用程式導航"] }, "Skip to main content": { "v": ["跳至主要內容"] } } }, { "l": "zh_TW", "t": { "Keyboard navigation help": { "v": ["鍵盤導航說明"] }, "Skip to app navigation": { "v": ["略過應用程式導覽"] }, "Skip to main content": { "v": ["跳至主要內容"] } } }, { "l": "zu_ZA", "t": {} }];
const t30 = [{ "l": "af", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "ar", "t": { 'Load more "{options}"': { "v": ['تحميل المزيد من "{options}" '] }, "Raw link {options}": { "v": [" الرابط الخام raw link ـ {options}"] }, "Start typing to search": { "v": ["إبدإ كتابة مفردات البحث"] } } }, { "l": "ast", "t": { 'Load more "{options}"': { "v": ["Cargar más «{options}»"] }, "Raw link {options}": { "v": ["Enllaz en bruto {optiones}"] }, "Start typing to search": { "v": ["Comienza a escribir pa buscar"] } } }, { "l": "az", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "be", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "bg", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "bn_BD", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "br", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "bs", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "ca", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "cs", "t": { 'Load more "{options}"': { "v": ["Načíst další „{options}“"] }, "Raw link {options}": { "v": ["Holý odkaz {options}"] }, "Start typing to search": { "v": ["Vyhledávejte psaním"] } } }, { "l": "cs_CZ", "t": { 'Load more "{options}"': { "v": ["Načíst další „{options}“"] }, "Raw link {options}": { "v": ["Holý odkaz {options}"] }, "Start typing to search": { "v": ["Vyhledávejte psaním"] } } }, { "l": "cy_GB", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "da", "t": { 'Load more "{options}"': { "v": ['Indlæs flere "{options}"'] }, "Raw link {options}": { "v": ["Rå link {options}"] }, "Start typing to search": { "v": ["Begynd at skrive for at søge"] } } }, { "l": "de", "t": { 'Load more "{options}"': { "v": ['Weitere "{options}" laden'] }, "Raw link {options}": { "v": ["Unverarbeiteter Link {options}"] }, "Start typing to search": { "v": ["Mit der Eingabe beginnen, um zu suchen"] } } }, { "l": "de_DE", "t": { 'Load more "{options}"': { "v": ['Weitere "{options}" laden'] }, "Raw link {options}": { "v": ["Unverarbeiteter Link {options}"] }, "Start typing to search": { "v": ["Mit der Eingabe beginnen, um zu suchen"] } } }, { "l": "el", "t": { 'Load more "{options}"': { "v": ['Φόρτωση περισσότερων "{options}"'] }, "Raw link {options}": { "v": ["Ακατέργαστος σύνδεσμος {options}"] }, "Start typing to search": { "v": ["Ξεκινήστε να πληκτρολογείτε για αναζήτηση"] } } }, { "l": "en_GB", "t": { 'Load more "{options}"': { "v": ['Load more "{options}"'] }, "Raw link {options}": { "v": ["Raw link {options}"] }, "Start typing to search": { "v": ["Start typing to search"] } } }, { "l": "eo", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es", "t": { 'Load more "{options}"': { "v": ['Cargar más "{options}"'] }, "Raw link {options}": { "v": ["Enlace directo {options}"] }, "Start typing to search": { "v": ["Comience a escribir para buscar"] } } }, { "l": "es_419", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_AR", "t": { 'Load more "{options}"': { "v": ['Cargar más "{options}"'] }, "Raw link {options}": { "v": ["Enlace directo {options}"] }, "Start typing to search": { "v": ["Comience a escribir para buscar"] } } }, { "l": "es_CL", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_CO", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_CR", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_DO", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_EC", "t": { 'Load more "{options}"': { "v": [""] }, "Raw link {options}": { "v": ["Enlace directo {options}"] }, "Start typing to search": { "v": ["Comienza a escribir para buscar"] } } }, { "l": "es_GT", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_HN", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_MX", "t": { 'Load more "{options}"': { "v": ['Cargar más "{options}"'] }, "Raw link {options}": { "v": ["Enlace directo {options}"] }, "Start typing to search": { "v": ["Comience a escribir para buscar"] } } }, { "l": "es_NI", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_PA", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_PE", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_PR", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_PY", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_SV", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_UY", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "et_EE", "t": { 'Load more "{options}"': { "v": ["Laadi veel „{options}“"] }, "Raw link {options}": { "v": ["Töötlemata link: {options}"] }, "Start typing to search": { "v": ["Alusta otsinguks sisestamist"] } } }, { "l": "eu", "t": { 'Load more "{options}"': { "v": ['Kargatu "{options}" gehiago'] }, "Raw link {options}": { "v": ["Formaturik gabeko esteka {aukerak}"] }, "Start typing to search": { "v": ["Hasi idazten bilatzeko"] } } }, { "l": "fa", "t": { 'Load more "{options}"': { "v": ['بارگذاری بیشتر "{options}"'] }, "Raw link {options}": { "v": ["پیوند خام {options}"] }, "Start typing to search": { "v": ["برای جستجو تایپ کنید"] } } }, { "l": "fi", "t": { 'Load more "{options}"': { "v": ['Lataa lisää "{options}"'] }, "Raw link {options}": { "v": ["Raaka linkki {options}"] }, "Start typing to search": { "v": ["Aloita kirjoittaminen hakeaksesi"] } } }, { "l": "fo", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "fr", "t": { 'Load more "{options}"': { "v": [`Charger d'avantage "{options}"`] }, "Raw link {options}": { "v": ["Lien brut {options}"] }, "Start typing to search": { "v": ["Commencez à écrire pour rechercher"] } } }, { "l": "ga", "t": { 'Load more "{options}"': { "v": ['Luchtaigh tuilleadh "{options}"'] }, "Raw link {options}": { "v": ["Nasc amh {roghanna}"] }, "Start typing to search": { "v": ["Tosaigh ag clóscríobh chun cuardach a dhéanamh"] } } }, { "l": "gd", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "gl", "t": { 'Load more "{options}"': { "v": ["Cargar máis «{options}»"] }, "Raw link {options}": { "v": ["Ligazón sen procesar {options}"] }, "Start typing to search": { "v": ["Comece a escribir para buscar"] } } }, { "l": "he", "t": { 'Load more "{options}"': { "v": [""] }, "Raw link {options}": { "v": ["קישור גולמי {options}"] }, "Start typing to search": { "v": ["התחלת הקלדה מחפשת"] } } }, { "l": "hi_IN", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "hr", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "hsb", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "hu", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "hy", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "ia", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "id", "t": { 'Load more "{options}"': { "v": ['Muat "{options}" lainnya'] }, "Raw link {options}": { "v": ["Tautan mentah {options}"] }, "Start typing to search": { "v": ["Ketik untuk mulai mencari"] } } }, { "l": "ig", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "is", "t": { 'Load more "{options}"': { "v": ['Hlaða inn fleiri "{options}"'] }, "Raw link {options}": { "v": ["Hrár tengill {options}"] }, "Start typing to search": { "v": ["Byrjaðu að skrifa til að leita"] } } }, { "l": "it", "t": { 'Load more "{options}"': { "v": ['Carica più "{options}"'] }, "Raw link {options}": { "v": ["Raw link {options}"] }, "Start typing to search": { "v": ["Iniziare a digitare per effettuare la ricerca"] } } }, { "l": "ja", "t": { 'Load more "{options}"': { "v": ['"{options}" をもっと読み込む'] }, "Raw link {options}": { "v": ["未加工のリンク {options}"] }, "Start typing to search": { "v": ["入力を開始して検索します"] } } }, { "l": "ja_JP", "t": { 'Load more "{options}"': { "v": ['"{options}" をもっと読み込む'] }, "Raw link {options}": { "v": ["未加工のリンク {options}"] }, "Start typing to search": { "v": ["入力を開始して検索します"] } } }, { "l": "ka", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "ka_GE", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "kab", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "kk", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "km", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "kn", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "ko", "t": { 'Load more "{options}"': { "v": ['"{options}" 더 불러오기'] }, "Raw link {options}": { "v": ["{options} 원본 링크"] }, "Start typing to search": { "v": ["입력하여 검색"] } } }, { "l": "la", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "lb", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "lo", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "lt_LT", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "lv", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "mk", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "mn", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "mr", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "ms_MY", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "my", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "nb", "t": { 'Load more "{options}"': { "v": ['Last inn flere "{options}"'] }, "Raw link {options}": { "v": ["Rå lenke {options}"] }, "Start typing to search": { "v": ["Start å skrive for å søke"] } } }, { "l": "ne", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "nl", "t": { 'Load more "{options}"': { "v": ['Laad meer "{options}"'] }, "Raw link {options}": { "v": ["Basis link {options}"] }, "Start typing to search": { "v": ["Start met typen om te zoeken"] } } }, { "l": "nn_NO", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "oc", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "pl", "t": { 'Load more "{options}"': { "v": ['Załaduj więcej "{options}"'] }, "Raw link {options}": { "v": ["Surowy odnośnik {options}"] }, "Start typing to search": { "v": ["Zacznij pisać, aby wyszukać"] } } }, { "l": "ps", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "pt_BR", "t": { 'Load more "{options}"': { "v": ['Carregar mais "{options}"'] }, "Raw link {options}": { "v": ["Link bruto {options}"] }, "Start typing to search": { "v": ["Comece a digitar para pesquisar"] } } }, { "l": "pt_PT", "t": { 'Load more "{options}"': { "v": ['Carregar mais "{options}"'] }, "Raw link {options}": { "v": ["Link inicial {options}"] }, "Start typing to search": { "v": ["Comece a digitar para pesquisar"] } } }, { "l": "ro", "t": { 'Load more "{options}"': { "v": ['Încarcă mai multe "{options}"'] }, "Raw link {options}": { "v": ["Link brut {options}"] }, "Start typing to search": { "v": ["Tastați pentru căutare"] } } }, { "l": "ru", "t": { 'Load more "{options}"': { "v": ['Загрузить больше "{options}""'] }, "Raw link {options}": { "v": ["Необработанная ссылка {options}"] }, "Start typing to search": { "v": ["Начните вводить текст для поиска"] } } }, { "l": "sc", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "si", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "sk", "t": { 'Load more "{options}"': { "v": ['Načítať viac "{options}"'] }, "Raw link {options}": { "v": ["Raw odkaz {options}"] }, "Start typing to search": { "v": ["Začnite písať pre vyhľadávanie"] } } }, { "l": "sl", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "sq", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "sr", "t": { 'Load more "{options}"': { "v": ["Учитај још „{options}”"] }, "Raw link {options}": { "v": ["Сирови линк {options}"] }, "Start typing to search": { "v": ["Покрените претрагу куцањем"] } } }, { "l": "sr@latin", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "sv", "t": { 'Load more "{options}"': { "v": ['Ladda fler "{options}"'] }, "Raw link {options}": { "v": ["Oformaterad länk {options}"] }, "Start typing to search": { "v": ["Börja skriva för att söka"] } } }, { "l": "sw", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "ta", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "th", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "tk", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "tr", "t": { 'Load more "{options}"': { "v": ['Diğer "{options}"'] }, "Raw link {options}": { "v": ["Ham bağlantı {options}"] }, "Start typing to search": { "v": ["Aramak için yazmaya başlayın"] } } }, { "l": "ug", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "uk", "t": { 'Load more "{options}"': { "v": ['Завантажити більше "{options}"'] }, "Raw link {options}": { "v": ["Пряме посилання {options}"] }, "Start typing to search": { "v": ["Почніть вводити для пошуку"] } } }, { "l": "ur_PK", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "uz", "t": { 'Load more "{options}"': { "v": [`Ko'proq yuklash "{options}"`] }, "Raw link {options}": { "v": [" {options}satr havolasi"] }, "Start typing to search": { "v": ["Qidirish uchun yozishni boshlang"] } } }, { "l": "vi", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "zh_CN", "t": { 'Load more "{options}"': { "v": ["加载更多 “{options}”"] }, "Raw link {options}": { "v": ["原始链接 {options}"] }, "Start typing to search": { "v": ["开始输入以进行搜索"] } } }, { "l": "zh_HK", "t": { 'Load more "{options}"': { "v": ['載入更多 "{options}"'] }, "Raw link {options}": { "v": ["原始連結 {options}"] }, "Start typing to search": { "v": ["開始輸入以進行搜尋"] } } }, { "l": "zh_TW", "t": { 'Load more "{options}"': { "v": ["載入更多「{options}」"] }, "Raw link {options}": { "v": ["原始連結 {options}"] }, "Start typing to search": { "v": ["開始輸入以進行搜尋"] } } }, { "l": "zu_ZA", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }];
const t34 = [{ "l": "af", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "ar", "t": { "Next": { "v": ["التالي"] }, "Pause slideshow": { "v": ["تجميد عرض الشرائح"] }, "Previous": { "v": ["السابق"] }, "Start slideshow": { "v": ["إبدإ العرض"] } } }, { "l": "ast", "t": { "Next": { "v": ["Siguiente"] }, "Pause slideshow": { "v": ["Posar la presentación de diapositives"] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Aniciar la presentación de diapositives"] } } }, { "l": "az", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "be", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "bg", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "bn_BD", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "br", "t": { "Next": { "v": ["Da heul"] }, "Pause slideshow": { "v": ["Arsav an diaporama"] }, "Previous": { "v": ["A-raok"] }, "Start slideshow": { "v": ["Kregiñ an diaporama"] } } }, { "l": "bs", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "ca", "t": { "Next": { "v": ["Següent"] }, "Pause slideshow": { "v": ["Atura la presentació"] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Inicia la presentació"] } } }, { "l": "cs", "t": { "Next": { "v": ["Následující"] }, "Pause slideshow": { "v": ["Pozastavit prezentaci"] }, "Previous": { "v": ["Předchozí"] }, "Start slideshow": { "v": ["Spustit prezentaci"] } } }, { "l": "cs_CZ", "t": { "Next": { "v": ["Následující"] }, "Pause slideshow": { "v": ["Pozastavit prezentaci"] }, "Previous": { "v": ["Předchozí"] }, "Start slideshow": { "v": ["Spustit prezentaci"] } } }, { "l": "cy_GB", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "da", "t": { "Next": { "v": ["Videre"] }, "Pause slideshow": { "v": ["Suspender fremvisning"] }, "Previous": { "v": ["Forrige"] }, "Start slideshow": { "v": ["Start fremvisning"] } } }, { "l": "de", "t": { "Next": { "v": ["Weiter"] }, "Pause slideshow": { "v": ["Diashow pausieren"] }, "Previous": { "v": ["Vorherige"] }, "Start slideshow": { "v": ["Diashow starten"] } } }, { "l": "de_DE", "t": { "Next": { "v": ["Weiter"] }, "Pause slideshow": { "v": ["Diashow pausieren"] }, "Previous": { "v": ["Vorherige"] }, "Start slideshow": { "v": ["Diashow starten"] } } }, { "l": "el", "t": { "Next": { "v": ["Επόμενο"] }, "Pause slideshow": { "v": ["Παύση προβολής διαφανειών"] }, "Previous": { "v": ["Προηγούμενο"] }, "Start slideshow": { "v": ["Έναρξη προβολής διαφανειών"] } } }, { "l": "en_GB", "t": { "Next": { "v": ["Next"] }, "Pause slideshow": { "v": ["Pause slideshow"] }, "Previous": { "v": ["Previous"] }, "Start slideshow": { "v": ["Start slideshow"] } } }, { "l": "eo", "t": { "Next": { "v": ["Sekva"] }, "Pause slideshow": { "v": ["Payzi bildprezenton"] }, "Previous": { "v": ["Antaŭa"] }, "Start slideshow": { "v": ["Komenci bildprezenton"] } } }, { "l": "es", "t": { "Next": { "v": ["Siguiente"] }, "Pause slideshow": { "v": ["Pausar la presentación "] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Iniciar la presentación"] } } }, { "l": "es_419", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_AR", "t": { "Next": { "v": ["Siguiente"] }, "Pause slideshow": { "v": ["Pausar la presentación "] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Iniciar la presentación"] } } }, { "l": "es_CL", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_CO", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_CR", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_DO", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_EC", "t": { "Next": { "v": ["Siguiente"] }, "Pause slideshow": { "v": ["Pausar presentación de diapositivas"] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Iniciar presentación de diapositivas"] } } }, { "l": "es_GT", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_HN", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_MX", "t": { "Next": { "v": ["Siguiente"] }, "Pause slideshow": { "v": ["Pausar presentación de diapositivas"] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Iniciar presentación de diapositivas"] } } }, { "l": "es_NI", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_PA", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_PE", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_PR", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_PY", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_SV", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_UY", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "et_EE", "t": { "Next": { "v": ["Edasi"] }, "Pause slideshow": { "v": ["Slaidiesitluse paus"] }, "Previous": { "v": ["Eelmine"] }, "Start slideshow": { "v": ["Alusta slaidiesitust"] } } }, { "l": "eu", "t": { "Next": { "v": ["Hurrengoa"] }, "Pause slideshow": { "v": ["Pausatu diaporama"] }, "Previous": { "v": ["Aurrekoa"] }, "Start slideshow": { "v": ["Hasi diaporama"] } } }, { "l": "fa", "t": { "Next": { "v": ["بعدی"] }, "Pause slideshow": { "v": ["توقف نمایش اسلاید"] }, "Previous": { "v": ["قبلی"] }, "Start slideshow": { "v": ["شروع نمایش اسلاید"] } } }, { "l": "fi", "t": { "Next": { "v": ["Seuraava"] }, "Pause slideshow": { "v": ["Keskeytä diaesitys"] }, "Previous": { "v": ["Edellinen"] }, "Start slideshow": { "v": ["Aloita diaesitys"] } } }, { "l": "fo", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "fr", "t": { "Next": { "v": ["Suivant"] }, "Pause slideshow": { "v": ["Mettre le diaporama en pause"] }, "Previous": { "v": ["Précédent"] }, "Start slideshow": { "v": ["Démarrer le diaporama"] } } }, { "l": "ga", "t": { "Next": { "v": ["Ar aghaidh"] }, "Pause slideshow": { "v": ["Cuir taispeántas sleamhnán ar sos"] }, "Previous": { "v": ["Roimhe Seo"] }, "Start slideshow": { "v": ["Tosaigh taispeántas sleamhnán"] } } }, { "l": "gd", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "gl", "t": { "Next": { "v": ["Seguinte"] }, "Pause slideshow": { "v": ["Pausar o diaporama"] }, "Previous": { "v": ["Anterir"] }, "Start slideshow": { "v": ["Iniciar o diaporama"] } } }, { "l": "he", "t": { "Next": { "v": ["הבא"] }, "Pause slideshow": { "v": ["השהיית מצגת"] }, "Previous": { "v": ["הקודם"] }, "Start slideshow": { "v": ["התחלת המצגת"] } } }, { "l": "hi_IN", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "hr", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "hsb", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "hu", "t": { "Next": { "v": ["Következő"] }, "Pause slideshow": { "v": ["Diavetítés szüneteltetése"] }, "Previous": { "v": ["Előző"] }, "Start slideshow": { "v": ["Diavetítés indítása"] } } }, { "l": "hy", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "ia", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "id", "t": { "Next": { "v": ["Selanjutnya"] }, "Pause slideshow": { "v": ["Jeda tayangan slide"] }, "Previous": { "v": ["Sebelumnya"] }, "Start slideshow": { "v": ["Mulai salindia"] } } }, { "l": "ig", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "is", "t": { "Next": { "v": ["Næsta"] }, "Pause slideshow": { "v": ["Gera hlé á skyggnusýningu"] }, "Previous": { "v": ["Fyrri"] }, "Start slideshow": { "v": ["Byrja skyggnusýningu"] } } }, { "l": "it", "t": { "Next": { "v": ["Successivo"] }, "Pause slideshow": { "v": ["Presentazione in pausa"] }, "Previous": { "v": ["Precedente"] }, "Start slideshow": { "v": ["Avvia presentazione"] } } }, { "l": "ja", "t": { "Next": { "v": ["次"] }, "Pause slideshow": { "v": ["スライドショーを一時停止"] }, "Previous": { "v": ["前"] }, "Start slideshow": { "v": ["スライドショーを開始"] } } }, { "l": "ja_JP", "t": { "Next": { "v": ["次"] }, "Pause slideshow": { "v": ["スライドショーを一時停止"] }, "Previous": { "v": ["前"] }, "Start slideshow": { "v": ["スライドショーを開始"] } } }, { "l": "ka", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "ka_GE", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "kab", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "kk", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "km", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "kn", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "ko", "t": { "Next": { "v": ["다음"] }, "Pause slideshow": { "v": ["슬라이드쇼 일시정지"] }, "Previous": { "v": ["이전"] }, "Start slideshow": { "v": ["슬라이드쇼 시작"] } } }, { "l": "la", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "lb", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "lo", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "lt_LT", "t": { "Next": { "v": ["Kitas"] }, "Pause slideshow": { "v": ["Pristabdyti skaidrių rodymą"] }, "Previous": { "v": ["Ankstesnis"] }, "Start slideshow": { "v": ["Pradėti skaidrių rodymą"] } } }, { "l": "lv", "t": { "Next": { "v": ["Nākamais"] }, "Pause slideshow": { "v": ["Pauzēt slaidrādi"] }, "Previous": { "v": ["Iepriekšējais"] }, "Start slideshow": { "v": ["Sākt slaidrādi"] } } }, { "l": "mk", "t": { "Next": { "v": ["Следно"] }, "Pause slideshow": { "v": ["Пузирај слајдшоу"] }, "Previous": { "v": ["Предходно"] }, "Start slideshow": { "v": ["Стартувај слајдшоу"] } } }, { "l": "mn", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "mr", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "ms_MY", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "my", "t": { "Next": { "v": ["နောက်သို့ဆက်ရန်"] }, "Pause slideshow": { "v": ["စလိုက်ရှိုး ခေတ္တရပ်ရန်"] }, "Previous": { "v": ["ယခင်"] }, "Start slideshow": { "v": ["စလိုက်ရှိုးအား စတင်ရန်"] } } }, { "l": "nb", "t": { "Next": { "v": ["Neste"] }, "Pause slideshow": { "v": ["Pause lysbildefremvisning"] }, "Previous": { "v": ["Forrige"] }, "Start slideshow": { "v": ["Start lysbildefremvisning"] } } }, { "l": "ne", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "nl", "t": { "Next": { "v": ["Volgende"] }, "Pause slideshow": { "v": ["Pauzeer diavoorstelling"] }, "Previous": { "v": ["Vorige"] }, "Start slideshow": { "v": ["Start diavoorstelling"] } } }, { "l": "nn_NO", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "oc", "t": { "Next": { "v": ["Seguent"] }, "Pause slideshow": { "v": ["Metre en pausa lo diaporama"] }, "Previous": { "v": ["Precedent"] }, "Start slideshow": { "v": ["Lançar lo diaporama"] } } }, { "l": "pl", "t": { "Next": { "v": ["Następny"] }, "Pause slideshow": { "v": ["Wstrzymaj pokaz slajdów"] }, "Previous": { "v": ["Poprzedni"] }, "Start slideshow": { "v": ["Rozpocznij pokaz slajdów"] } } }, { "l": "ps", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "pt_BR", "t": { "Next": { "v": ["Próximo"] }, "Pause slideshow": { "v": ["Pausar apresentação de slides"] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Iniciar apresentação de slides"] } } }, { "l": "pt_PT", "t": { "Next": { "v": ["Seguinte"] }, "Pause slideshow": { "v": ["Pausar diaporama"] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Iniciar diaporama"] } } }, { "l": "ro", "t": { "Next": { "v": ["Următorul"] }, "Pause slideshow": { "v": ["Pauză prezentare de diapozitive"] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Începeți prezentarea de diapozitive"] } } }, { "l": "ru", "t": { "Next": { "v": ["Следующее"] }, "Pause slideshow": { "v": ["Приостановить показ слйдов"] }, "Previous": { "v": ["Предыдущее"] }, "Start slideshow": { "v": ["Начать показ слайдов"] } } }, { "l": "sc", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "si", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "sk", "t": { "Next": { "v": ["Ďalej"] }, "Pause slideshow": { "v": ["Pozastaviť prezentáciu"] }, "Previous": { "v": ["Predchádzajúce"] }, "Start slideshow": { "v": ["Začať prezentáciu"] } } }, { "l": "sl", "t": { "Next": { "v": ["Naslednji"] }, "Pause slideshow": { "v": ["Ustavi predstavitev"] }, "Previous": { "v": ["Predhodni"] }, "Start slideshow": { "v": ["Začni predstavitev"] } } }, { "l": "sq", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "sr", "t": { "Next": { "v": ["Следеће"] }, "Pause slideshow": { "v": ["Паузирај слајд шоу"] }, "Previous": { "v": ["Претходно"] }, "Start slideshow": { "v": ["Покрени слајд шоу"] } } }, { "l": "sr@latin", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "sv", "t": { "Next": { "v": ["Nästa"] }, "Pause slideshow": { "v": ["Pausa bildspelet"] }, "Previous": { "v": ["Föregående"] }, "Start slideshow": { "v": ["Starta bildspelet"] } } }, { "l": "sw", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "ta", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "th", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "tk", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "tr", "t": { "Next": { "v": ["Sonraki"] }, "Pause slideshow": { "v": ["Slayt sunumunu duraklat"] }, "Previous": { "v": ["Önceki"] }, "Start slideshow": { "v": ["Slayt sunumunu başlat"] } } }, { "l": "ug", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "uk", "t": { "Next": { "v": ["Вперед"] }, "Pause slideshow": { "v": ["Пауза у показі слайдів"] }, "Previous": { "v": ["Назад"] }, "Start slideshow": { "v": ["Почати показ слайдів"] } } }, { "l": "ur_PK", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "uz", "t": { "Next": { "v": ["Keyingi"] }, "Pause slideshow": { "v": ["Slayd-shouni to'xtatib turish"] }, "Previous": { "v": ["Oldingi"] }, "Start slideshow": { "v": ["Slayd-shouni boshlash"] } } }, { "l": "vi", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "zh_CN", "t": { "Next": { "v": ["下一个"] }, "Pause slideshow": { "v": ["暂停幻灯片"] }, "Previous": { "v": ["上一个"] }, "Start slideshow": { "v": ["开始幻灯片"] } } }, { "l": "zh_HK", "t": { "Next": { "v": ["下一個"] }, "Pause slideshow": { "v": ["暫停幻燈片"] }, "Previous": { "v": ["上一個"] }, "Start slideshow": { "v": ["開始幻燈片"] } } }, { "l": "zh_TW", "t": { "Next": { "v": ["下一個"] }, "Pause slideshow": { "v": ["暫停幻燈片"] }, "Previous": { "v": ["上一個"] }, "Start slideshow": { "v": ["開始幻燈片"] } } }, { "l": "zu_ZA", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }];
const t37 = [{ "l": "af", "t": { "Provider icon": { "v": [""] } } }, { "l": "ar", "t": { "Provider icon": { "v": ["أيقونة المزوّد"] } } }, { "l": "ast", "t": { "Provider icon": { "v": ["Iconu del fornidor"] } } }, { "l": "az", "t": { "Provider icon": { "v": [""] } } }, { "l": "be", "t": { "Provider icon": { "v": [""] } } }, { "l": "bg", "t": { "Provider icon": { "v": [""] } } }, { "l": "bn_BD", "t": { "Provider icon": { "v": [""] } } }, { "l": "br", "t": { "Provider icon": { "v": [""] } } }, { "l": "bs", "t": { "Provider icon": { "v": [""] } } }, { "l": "ca", "t": { "Provider icon": { "v": [""] } } }, { "l": "cs", "t": { "Provider icon": { "v": ["Ikona poskytovatele"] } } }, { "l": "cs_CZ", "t": { "Provider icon": { "v": ["Ikona poskytovatele"] } } }, { "l": "cy_GB", "t": { "Provider icon": { "v": [""] } } }, { "l": "da", "t": { "Provider icon": { "v": ["Udbyder ikon"] } } }, { "l": "de", "t": { "Provider icon": { "v": ["Anbietersymbol"] } } }, { "l": "de_DE", "t": { "Provider icon": { "v": ["Anbietersymbol"] } } }, { "l": "el", "t": { "Provider icon": { "v": ["Εικονίδιο παρόχου"] } } }, { "l": "en_GB", "t": { "Provider icon": { "v": ["Provider icon"] } } }, { "l": "eo", "t": { "Provider icon": { "v": [""] } } }, { "l": "es", "t": { "Provider icon": { "v": ["Ícono del proveedor"] } } }, { "l": "es_419", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_AR", "t": { "Provider icon": { "v": ["Ícono del proveedor"] } } }, { "l": "es_CL", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_CO", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_CR", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_DO", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_EC", "t": { "Provider icon": { "v": ["Ícono del proveedor"] } } }, { "l": "es_GT", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_HN", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_MX", "t": { "Provider icon": { "v": ["Ícono del proveedor"] } } }, { "l": "es_NI", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_PA", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_PE", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_PR", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_PY", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_SV", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_UY", "t": { "Provider icon": { "v": [""] } } }, { "l": "et_EE", "t": { "Provider icon": { "v": ["Teenusepakkuja ikoon"] } } }, { "l": "eu", "t": { "Provider icon": { "v": ["Hornitzailearen ikonoa"] } } }, { "l": "fa", "t": { "Provider icon": { "v": ["آیکون ارائه دهنده"] } } }, { "l": "fi", "t": { "Provider icon": { "v": ["Palveluntarjoajan kuvake"] } } }, { "l": "fo", "t": { "Provider icon": { "v": [""] } } }, { "l": "fr", "t": { "Provider icon": { "v": ["Icône du fournisseur"] } } }, { "l": "ga", "t": { "Provider icon": { "v": ["Deilbhín soláthraí"] } } }, { "l": "gd", "t": { "Provider icon": { "v": [""] } } }, { "l": "gl", "t": { "Provider icon": { "v": ["Icona do provedor"] } } }, { "l": "he", "t": { "Provider icon": { "v": ["סמל ספק"] } } }, { "l": "hi_IN", "t": { "Provider icon": { "v": [""] } } }, { "l": "hr", "t": { "Provider icon": { "v": [""] } } }, { "l": "hsb", "t": { "Provider icon": { "v": [""] } } }, { "l": "hu", "t": { "Provider icon": { "v": [""] } } }, { "l": "hy", "t": { "Provider icon": { "v": [""] } } }, { "l": "ia", "t": { "Provider icon": { "v": [""] } } }, { "l": "id", "t": { "Provider icon": { "v": ["Ikon penyedia"] } } }, { "l": "ig", "t": { "Provider icon": { "v": [""] } } }, { "l": "is", "t": { "Provider icon": { "v": ["Táknmynd þjónustuveitu"] } } }, { "l": "it", "t": { "Provider icon": { "v": ["Icona del provider"] } } }, { "l": "ja", "t": { "Provider icon": { "v": ["プロバイダーのアイコン"] } } }, { "l": "ja_JP", "t": { "Provider icon": { "v": ["プロバイダーのアイコン"] } } }, { "l": "ka", "t": { "Provider icon": { "v": [""] } } }, { "l": "ka_GE", "t": { "Provider icon": { "v": [""] } } }, { "l": "kab", "t": { "Provider icon": { "v": [""] } } }, { "l": "kk", "t": { "Provider icon": { "v": [""] } } }, { "l": "km", "t": { "Provider icon": { "v": [""] } } }, { "l": "kn", "t": { "Provider icon": { "v": [""] } } }, { "l": "ko", "t": { "Provider icon": { "v": ["제공자 아이콘"] } } }, { "l": "la", "t": { "Provider icon": { "v": [""] } } }, { "l": "lb", "t": { "Provider icon": { "v": [""] } } }, { "l": "lo", "t": { "Provider icon": { "v": [""] } } }, { "l": "lt_LT", "t": { "Provider icon": { "v": [""] } } }, { "l": "lv", "t": { "Provider icon": { "v": [""] } } }, { "l": "mk", "t": { "Provider icon": { "v": [""] } } }, { "l": "mn", "t": { "Provider icon": { "v": [""] } } }, { "l": "mr", "t": { "Provider icon": { "v": [""] } } }, { "l": "ms_MY", "t": { "Provider icon": { "v": [""] } } }, { "l": "my", "t": { "Provider icon": { "v": [""] } } }, { "l": "nb", "t": { "Provider icon": { "v": ["Leverandørikon"] } } }, { "l": "ne", "t": { "Provider icon": { "v": [""] } } }, { "l": "nl", "t": { "Provider icon": { "v": ["Provider icoon"] } } }, { "l": "nn_NO", "t": { "Provider icon": { "v": [""] } } }, { "l": "oc", "t": { "Provider icon": { "v": [""] } } }, { "l": "pl", "t": { "Provider icon": { "v": ["Dostawca ikony"] } } }, { "l": "ps", "t": { "Provider icon": { "v": [""] } } }, { "l": "pt_BR", "t": { "Provider icon": { "v": ["Ícone do provedor"] } } }, { "l": "pt_PT", "t": { "Provider icon": { "v": ["Ícone do fornecedor"] } } }, { "l": "ro", "t": { "Provider icon": { "v": ["Provider pentru icon"] } } }, { "l": "ru", "t": { "Provider icon": { "v": ["Значок поставщика"] } } }, { "l": "sc", "t": { "Provider icon": { "v": [""] } } }, { "l": "si", "t": { "Provider icon": { "v": [""] } } }, { "l": "sk", "t": { "Provider icon": { "v": ["Ikonka poskytovateľa"] } } }, { "l": "sl", "t": { "Provider icon": { "v": [""] } } }, { "l": "sq", "t": { "Provider icon": { "v": [""] } } }, { "l": "sr", "t": { "Provider icon": { "v": ["Икона пружаоца"] } } }, { "l": "sr@latin", "t": { "Provider icon": { "v": [""] } } }, { "l": "sv", "t": { "Provider icon": { "v": ["Leverantörsikon"] } } }, { "l": "sw", "t": { "Provider icon": { "v": [""] } } }, { "l": "ta", "t": { "Provider icon": { "v": [""] } } }, { "l": "th", "t": { "Provider icon": { "v": [""] } } }, { "l": "tk", "t": { "Provider icon": { "v": [""] } } }, { "l": "tr", "t": { "Provider icon": { "v": ["Hizmet sağlayıcı simgesi"] } } }, { "l": "ug", "t": { "Provider icon": { "v": [""] } } }, { "l": "uk", "t": { "Provider icon": { "v": ["Піктограма постачальника"] } } }, { "l": "ur_PK", "t": { "Provider icon": { "v": [""] } } }, { "l": "uz", "t": { "Provider icon": { "v": ["Provayder belgisi"] } } }, { "l": "vi", "t": { "Provider icon": { "v": [""] } } }, { "l": "zh_CN", "t": { "Provider icon": { "v": ["提供者图标"] } } }, { "l": "zh_HK", "t": { "Provider icon": { "v": ["提供者圖示"] } } }, { "l": "zh_TW", "t": { "Provider icon": { "v": ["提供者圖示"] } } }, { "l": "zu_ZA", "t": { "Provider icon": { "v": [""] } } }];
const t39 = [{ "l": "af", "t": { "Search": { "v": [""] } } }, { "l": "ar", "t": { "Search": { "v": ["بحث"] } } }, { "l": "ast", "t": { "Search": { "v": ["Buscar"] } } }, { "l": "az", "t": { "Search": { "v": [""] } } }, { "l": "be", "t": { "Search": { "v": [""] } } }, { "l": "bg", "t": { "Search": { "v": [""] } } }, { "l": "bn_BD", "t": { "Search": { "v": [""] } } }, { "l": "br", "t": { "Search": { "v": ["Klask"] } } }, { "l": "bs", "t": { "Search": { "v": [""] } } }, { "l": "ca", "t": { "Search": { "v": ["Cerca"] } } }, { "l": "cs", "t": { "Search": { "v": ["Hledat"] } } }, { "l": "cs_CZ", "t": { "Search": { "v": ["Hledat"] } } }, { "l": "cy_GB", "t": { "Search": { "v": [""] } } }, { "l": "da", "t": { "Search": { "v": ["Søg"] } } }, { "l": "de", "t": { "Search": { "v": ["Suche"] } } }, { "l": "de_DE", "t": { "Search": { "v": ["Suche"] } } }, { "l": "el", "t": { "Search": { "v": ["Αναζήτηση"] } } }, { "l": "en_GB", "t": { "Search": { "v": ["Search"] } } }, { "l": "eo", "t": { "Search": { "v": ["Serĉi"] } } }, { "l": "es", "t": { "Search": { "v": ["Buscar"] } } }, { "l": "es_419", "t": { "Search": { "v": [""] } } }, { "l": "es_AR", "t": { "Search": { "v": ["Buscar"] } } }, { "l": "es_CL", "t": { "Search": { "v": [""] } } }, { "l": "es_CO", "t": { "Search": { "v": [""] } } }, { "l": "es_CR", "t": { "Search": { "v": [""] } } }, { "l": "es_DO", "t": { "Search": { "v": [""] } } }, { "l": "es_EC", "t": { "Search": { "v": ["Buscar"] } } }, { "l": "es_GT", "t": { "Search": { "v": [""] } } }, { "l": "es_HN", "t": { "Search": { "v": [""] } } }, { "l": "es_MX", "t": { "Search": { "v": ["Buscar"] } } }, { "l": "es_NI", "t": { "Search": { "v": [""] } } }, { "l": "es_PA", "t": { "Search": { "v": [""] } } }, { "l": "es_PE", "t": { "Search": { "v": [""] } } }, { "l": "es_PR", "t": { "Search": { "v": [""] } } }, { "l": "es_PY", "t": { "Search": { "v": [""] } } }, { "l": "es_SV", "t": { "Search": { "v": [""] } } }, { "l": "es_UY", "t": { "Search": { "v": [""] } } }, { "l": "et_EE", "t": { "Search": { "v": ["Otsing"] } } }, { "l": "eu", "t": { "Search": { "v": ["Bilatu"] } } }, { "l": "fa", "t": { "Search": { "v": ["جستجو"] } } }, { "l": "fi", "t": { "Search": { "v": ["Etsi"] } } }, { "l": "fo", "t": { "Search": { "v": [""] } } }, { "l": "fr", "t": { "Search": { "v": ["Chercher"] } } }, { "l": "ga", "t": { "Search": { "v": ["Cuardach"] } } }, { "l": "gd", "t": { "Search": { "v": [""] } } }, { "l": "gl", "t": { "Search": { "v": ["Buscar"] } } }, { "l": "he", "t": { "Search": { "v": ["חיפוש"] } } }, { "l": "hi_IN", "t": { "Search": { "v": [""] } } }, { "l": "hr", "t": { "Search": { "v": [""] } } }, { "l": "hsb", "t": { "Search": { "v": [""] } } }, { "l": "hu", "t": { "Search": { "v": ["Keresés"] } } }, { "l": "hy", "t": { "Search": { "v": [""] } } }, { "l": "ia", "t": { "Search": { "v": [""] } } }, { "l": "id", "t": { "Search": { "v": ["Cari"] } } }, { "l": "ig", "t": { "Search": { "v": [""] } } }, { "l": "is", "t": { "Search": { "v": ["Leita"] } } }, { "l": "it", "t": { "Search": { "v": ["Cerca"] } } }, { "l": "ja", "t": { "Search": { "v": ["検索"] } } }, { "l": "ja_JP", "t": { "Search": { "v": ["検索"] } } }, { "l": "ka", "t": { "Search": { "v": [""] } } }, { "l": "ka_GE", "t": { "Search": { "v": [""] } } }, { "l": "kab", "t": { "Search": { "v": [""] } } }, { "l": "kk", "t": { "Search": { "v": [""] } } }, { "l": "km", "t": { "Search": { "v": [""] } } }, { "l": "kn", "t": { "Search": { "v": [""] } } }, { "l": "ko", "t": { "Search": { "v": ["검색"] } } }, { "l": "la", "t": { "Search": { "v": [""] } } }, { "l": "lb", "t": { "Search": { "v": [""] } } }, { "l": "lo", "t": { "Search": { "v": [""] } } }, { "l": "lt_LT", "t": { "Search": { "v": ["Ieškoti"] } } }, { "l": "lv", "t": { "Search": { "v": [""] } } }, { "l": "mk", "t": { "Search": { "v": ["Барај"] } } }, { "l": "mn", "t": { "Search": { "v": [""] } } }, { "l": "mr", "t": { "Search": { "v": [""] } } }, { "l": "ms_MY", "t": { "Search": { "v": [""] } } }, { "l": "my", "t": { "Search": { "v": ["ရှာဖွေရန်"] } } }, { "l": "nb", "t": { "Search": { "v": ["Søk"] } } }, { "l": "ne", "t": { "Search": { "v": [""] } } }, { "l": "nl", "t": { "Search": { "v": ["Zoeken"] } } }, { "l": "nn_NO", "t": { "Search": { "v": [""] } } }, { "l": "oc", "t": { "Search": { "v": [""] } } }, { "l": "pl", "t": { "Search": { "v": ["Szukaj"] } } }, { "l": "ps", "t": { "Search": { "v": [""] } } }, { "l": "pt_BR", "t": { "Search": { "v": ["Pesquisar"] } } }, { "l": "pt_PT", "t": { "Search": { "v": ["Pesquisar"] } } }, { "l": "ro", "t": { "Search": { "v": ["Căutare"] } } }, { "l": "ru", "t": { "Search": { "v": ["Поиск"] } } }, { "l": "sc", "t": { "Search": { "v": [""] } } }, { "l": "si", "t": { "Search": { "v": [""] } } }, { "l": "sk", "t": { "Search": { "v": ["Hľadať"] } } }, { "l": "sl", "t": { "Search": { "v": ["Iskanje"] } } }, { "l": "sq", "t": { "Search": { "v": [""] } } }, { "l": "sr", "t": { "Search": { "v": ["Претражи"] } } }, { "l": "sr@latin", "t": { "Search": { "v": [""] } } }, { "l": "sv", "t": { "Search": { "v": ["Sök"] } } }, { "l": "sw", "t": { "Search": { "v": [""] } } }, { "l": "ta", "t": { "Search": { "v": [""] } } }, { "l": "th", "t": { "Search": { "v": [""] } } }, { "l": "tk", "t": { "Search": { "v": [""] } } }, { "l": "tr", "t": { "Search": { "v": ["Ara"] } } }, { "l": "ug", "t": { "Search": { "v": [""] } } }, { "l": "uk", "t": { "Search": { "v": ["Пошук"] } } }, { "l": "ur_PK", "t": { "Search": { "v": [""] } } }, { "l": "uz", "t": { "Search": { "v": ["Qidiruv"] } } }, { "l": "vi", "t": { "Search": { "v": [""] } } }, { "l": "zh_CN", "t": { "Search": { "v": ["搜索"] } } }, { "l": "zh_HK", "t": { "Search": { "v": ["搜尋"] } } }, { "l": "zh_TW", "t": { "Search": { "v": ["搜尋"] } } }, { "l": "zu_ZA", "t": { "Search": { "v": [""] } } }];
const t41 = [{ "l": "af", "t": { "Select provider": { "v": [""] } } }, { "l": "ar", "t": { "Select provider": { "v": ["اختر مزود"] } } }, { "l": "ast", "t": { "Select provider": { "v": ["Seleicionar el fornidor"] } } }, { "l": "az", "t": { "Select provider": { "v": [""] } } }, { "l": "be", "t": { "Select provider": { "v": [""] } } }, { "l": "bg", "t": { "Select provider": { "v": [""] } } }, { "l": "bn_BD", "t": { "Select provider": { "v": [""] } } }, { "l": "br", "t": { "Select provider": { "v": [""] } } }, { "l": "bs", "t": { "Select provider": { "v": [""] } } }, { "l": "ca", "t": { "Select provider": { "v": [""] } } }, { "l": "cs", "t": { "Select provider": { "v": ["Vybrat poskytovatele"] } } }, { "l": "cs_CZ", "t": { "Select provider": { "v": ["Vybrat poskytovatele"] } } }, { "l": "cy_GB", "t": { "Select provider": { "v": [""] } } }, { "l": "da", "t": { "Select provider": { "v": ["Vælg udbyder"] } } }, { "l": "de", "t": { "Select provider": { "v": ["Anbieter auswählen"] } } }, { "l": "de_DE", "t": { "Select provider": { "v": ["Anbieter auswählen"] } } }, { "l": "el", "t": { "Select provider": { "v": ["Επιλογή παρόχου"] } } }, { "l": "en_GB", "t": { "Select provider": { "v": ["Select provider"] } } }, { "l": "eo", "t": { "Select provider": { "v": [""] } } }, { "l": "es", "t": { "Select provider": { "v": ["Seleccione proveedor"] } } }, { "l": "es_419", "t": { "Select provider": { "v": [""] } } }, { "l": "es_AR", "t": { "Select provider": { "v": ["Elija proveedor"] } } }, { "l": "es_CL", "t": { "Select provider": { "v": [""] } } }, { "l": "es_CO", "t": { "Select provider": { "v": [""] } } }, { "l": "es_CR", "t": { "Select provider": { "v": [""] } } }, { "l": "es_DO", "t": { "Select provider": { "v": [""] } } }, { "l": "es_EC", "t": { "Select provider": { "v": ["Seleccionar proveedor"] } } }, { "l": "es_GT", "t": { "Select provider": { "v": [""] } } }, { "l": "es_HN", "t": { "Select provider": { "v": [""] } } }, { "l": "es_MX", "t": { "Select provider": { "v": ["Seleccionar proveedor"] } } }, { "l": "es_NI", "t": { "Select provider": { "v": [""] } } }, { "l": "es_PA", "t": { "Select provider": { "v": [""] } } }, { "l": "es_PE", "t": { "Select provider": { "v": [""] } } }, { "l": "es_PR", "t": { "Select provider": { "v": [""] } } }, { "l": "es_PY", "t": { "Select provider": { "v": [""] } } }, { "l": "es_SV", "t": { "Select provider": { "v": [""] } } }, { "l": "es_UY", "t": { "Select provider": { "v": [""] } } }, { "l": "et_EE", "t": { "Select provider": { "v": ["Vali teenuspakkuja"] } } }, { "l": "eu", "t": { "Select provider": { "v": ["Hautatu hornitzailea"] } } }, { "l": "fa", "t": { "Select provider": { "v": ["ارائه دهنده را انتخاب کنید"] } } }, { "l": "fi", "t": { "Select provider": { "v": ["Valitse tarjoaja"] } } }, { "l": "fo", "t": { "Select provider": { "v": [""] } } }, { "l": "fr", "t": { "Select provider": { "v": ["Sélectionner un fournisseur"] } } }, { "l": "ga", "t": { "Select provider": { "v": ["Roghnaigh soláthraí"] } } }, { "l": "gd", "t": { "Select provider": { "v": [""] } } }, { "l": "gl", "t": { "Select provider": { "v": ["Seleccionar provedor"] } } }, { "l": "he", "t": { "Select provider": { "v": ["בחירת ספק"] } } }, { "l": "hi_IN", "t": { "Select provider": { "v": [""] } } }, { "l": "hr", "t": { "Select provider": { "v": [""] } } }, { "l": "hsb", "t": { "Select provider": { "v": [""] } } }, { "l": "hu", "t": { "Select provider": { "v": [""] } } }, { "l": "hy", "t": { "Select provider": { "v": [""] } } }, { "l": "ia", "t": { "Select provider": { "v": [""] } } }, { "l": "id", "t": { "Select provider": { "v": ["Pilih penyedia"] } } }, { "l": "ig", "t": { "Select provider": { "v": [""] } } }, { "l": "is", "t": { "Select provider": { "v": ["Veldu þjónustuveitu"] } } }, { "l": "it", "t": { "Select provider": { "v": ["Selezionare il provider"] } } }, { "l": "ja", "t": { "Select provider": { "v": ["プロバイダーを選択"] } } }, { "l": "ja_JP", "t": { "Select provider": { "v": ["プロバイダーを選択"] } } }, { "l": "ka", "t": { "Select provider": { "v": [""] } } }, { "l": "ka_GE", "t": { "Select provider": { "v": [""] } } }, { "l": "kab", "t": { "Select provider": { "v": [""] } } }, { "l": "kk", "t": { "Select provider": { "v": [""] } } }, { "l": "km", "t": { "Select provider": { "v": [""] } } }, { "l": "kn", "t": { "Select provider": { "v": [""] } } }, { "l": "ko", "t": { "Select provider": { "v": ["제공자 선택"] } } }, { "l": "la", "t": { "Select provider": { "v": [""] } } }, { "l": "lb", "t": { "Select provider": { "v": [""] } } }, { "l": "lo", "t": { "Select provider": { "v": [""] } } }, { "l": "lt_LT", "t": { "Select provider": { "v": [""] } } }, { "l": "lv", "t": { "Select provider": { "v": [""] } } }, { "l": "mk", "t": { "Select provider": { "v": [""] } } }, { "l": "mn", "t": { "Select provider": { "v": [""] } } }, { "l": "mr", "t": { "Select provider": { "v": [""] } } }, { "l": "ms_MY", "t": { "Select provider": { "v": [""] } } }, { "l": "my", "t": { "Select provider": { "v": [""] } } }, { "l": "nb", "t": { "Select provider": { "v": ["Velg leverandør"] } } }, { "l": "ne", "t": { "Select provider": { "v": [""] } } }, { "l": "nl", "t": { "Select provider": { "v": ["Selecteer provider"] } } }, { "l": "nn_NO", "t": { "Select provider": { "v": [""] } } }, { "l": "oc", "t": { "Select provider": { "v": [""] } } }, { "l": "pl", "t": { "Select provider": { "v": ["Wybierz dostawcę"] } } }, { "l": "ps", "t": { "Select provider": { "v": [""] } } }, { "l": "pt_BR", "t": { "Select provider": { "v": ["Selecionar provedor"] } } }, { "l": "pt_PT", "t": { "Select provider": { "v": ["Selecionar fornecedor"] } } }, { "l": "ro", "t": { "Select provider": { "v": ["Selectați providerul"] } } }, { "l": "ru", "t": { "Select provider": { "v": ["Выбрать поставщика"] } } }, { "l": "sc", "t": { "Select provider": { "v": [""] } } }, { "l": "si", "t": { "Select provider": { "v": [""] } } }, { "l": "sk", "t": { "Select provider": { "v": ["Vybrať poskytovateľa"] } } }, { "l": "sl", "t": { "Select provider": { "v": [""] } } }, { "l": "sq", "t": { "Select provider": { "v": [""] } } }, { "l": "sr", "t": { "Select provider": { "v": ["Изаберите пружаоца"] } } }, { "l": "sr@latin", "t": { "Select provider": { "v": [""] } } }, { "l": "sv", "t": { "Select provider": { "v": ["Välj leverantör"] } } }, { "l": "sw", "t": { "Select provider": { "v": [""] } } }, { "l": "ta", "t": { "Select provider": { "v": [""] } } }, { "l": "th", "t": { "Select provider": { "v": [""] } } }, { "l": "tk", "t": { "Select provider": { "v": [""] } } }, { "l": "tr", "t": { "Select provider": { "v": ["Hizmet sağlayıcı seçin"] } } }, { "l": "ug", "t": { "Select provider": { "v": [""] } } }, { "l": "uk", "t": { "Select provider": { "v": ["Виберіть постачальника"] } } }, { "l": "ur_PK", "t": { "Select provider": { "v": [""] } } }, { "l": "uz", "t": { "Select provider": { "v": ["Provayderni tanlang"] } } }, { "l": "vi", "t": { "Select provider": { "v": [""] } } }, { "l": "zh_CN", "t": { "Select provider": { "v": ["选择提供者"] } } }, { "l": "zh_HK", "t": { "Select provider": { "v": ["選擇提供者"] } } }, { "l": "zh_TW", "t": { "Select provider": { "v": ["選取提供者"] } } }, { "l": "zu_ZA", "t": { "Select provider": { "v": [""] } } }];
const t46 = [{ "l": "af", "t": { "Undo changes": { "v": [""] } } }, { "l": "ar", "t": { "Undo changes": { "v": ["تراجَع عن التغييرات"] } } }, { "l": "ast", "t": { "Undo changes": { "v": ["Desfacer los cambeos"] } } }, { "l": "az", "t": { "Undo changes": { "v": [""] } } }, { "l": "be", "t": { "Undo changes": { "v": [""] } } }, { "l": "bg", "t": { "Undo changes": { "v": [""] } } }, { "l": "bn_BD", "t": { "Undo changes": { "v": [""] } } }, { "l": "br", "t": { "Undo changes": { "v": [""] } } }, { "l": "bs", "t": { "Undo changes": { "v": [""] } } }, { "l": "ca", "t": { "Undo changes": { "v": ["Desfés els canvis"] } } }, { "l": "cs", "t": { "Undo changes": { "v": ["Vzít změny zpět"] } } }, { "l": "cs_CZ", "t": { "Undo changes": { "v": ["Vzít změny zpět"] } } }, { "l": "cy_GB", "t": { "Undo changes": { "v": [""] } } }, { "l": "da", "t": { "Undo changes": { "v": ["Fortryd ændringer"] } } }, { "l": "de", "t": { "Undo changes": { "v": ["Änderungen rückgängig machen"] } } }, { "l": "de_DE", "t": { "Undo changes": { "v": ["Änderungen rückgängig machen"] } } }, { "l": "el", "t": { "Undo changes": { "v": ["Αναίρεση Αλλαγών"] } } }, { "l": "en_GB", "t": { "Undo changes": { "v": ["Undo changes"] } } }, { "l": "eo", "t": { "Undo changes": { "v": [""] } } }, { "l": "es", "t": { "Undo changes": { "v": ["Deshacer cambios"] } } }, { "l": "es_419", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_AR", "t": { "Undo changes": { "v": ["Deshacer cambios"] } } }, { "l": "es_CL", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_CO", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_CR", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_DO", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_EC", "t": { "Undo changes": { "v": ["Deshacer cambios"] } } }, { "l": "es_GT", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_HN", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_MX", "t": { "Undo changes": { "v": ["Deshacer cambios"] } } }, { "l": "es_NI", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_PA", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_PE", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_PR", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_PY", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_SV", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_UY", "t": { "Undo changes": { "v": [""] } } }, { "l": "et_EE", "t": { "Undo changes": { "v": ["Pööra muudatused tagasi"] } } }, { "l": "eu", "t": { "Undo changes": { "v": ["Aldaketak desegin"] } } }, { "l": "fa", "t": { "Undo changes": { "v": ["لغو تغییرات"] } } }, { "l": "fi", "t": { "Undo changes": { "v": ["Kumoa muutokset"] } } }, { "l": "fo", "t": { "Undo changes": { "v": [""] } } }, { "l": "fr", "t": { "Undo changes": { "v": ["Annuler les changements"] } } }, { "l": "ga", "t": { "Undo changes": { "v": ["Cealaigh athruithe"] } } }, { "l": "gd", "t": { "Undo changes": { "v": [""] } } }, { "l": "gl", "t": { "Undo changes": { "v": ["Desfacer os cambios"] } } }, { "l": "he", "t": { "Undo changes": { "v": ["ביטול שינויים"] } } }, { "l": "hi_IN", "t": { "Undo changes": { "v": [""] } } }, { "l": "hr", "t": { "Undo changes": { "v": [""] } } }, { "l": "hsb", "t": { "Undo changes": { "v": [""] } } }, { "l": "hu", "t": { "Undo changes": { "v": ["Változtatások visszavonása"] } } }, { "l": "hy", "t": { "Undo changes": { "v": [""] } } }, { "l": "ia", "t": { "Undo changes": { "v": [""] } } }, { "l": "id", "t": { "Undo changes": { "v": ["Urungkan perubahan"] } } }, { "l": "ig", "t": { "Undo changes": { "v": [""] } } }, { "l": "is", "t": { "Undo changes": { "v": ["Afturkalla breytingar"] } } }, { "l": "it", "t": { "Undo changes": { "v": ["Cancella i cambiamenti"] } } }, { "l": "ja", "t": { "Undo changes": { "v": ["変更を取り消し"] } } }, { "l": "ja_JP", "t": { "Undo changes": { "v": ["変更を取り消し"] } } }, { "l": "ka", "t": { "Undo changes": { "v": [""] } } }, { "l": "ka_GE", "t": { "Undo changes": { "v": [""] } } }, { "l": "kab", "t": { "Undo changes": { "v": [""] } } }, { "l": "kk", "t": { "Undo changes": { "v": [""] } } }, { "l": "km", "t": { "Undo changes": { "v": [""] } } }, { "l": "kn", "t": { "Undo changes": { "v": [""] } } }, { "l": "ko", "t": { "Undo changes": { "v": ["변경 되돌리기"] } } }, { "l": "la", "t": { "Undo changes": { "v": [""] } } }, { "l": "lb", "t": { "Undo changes": { "v": [""] } } }, { "l": "lo", "t": { "Undo changes": { "v": [""] } } }, { "l": "lt_LT", "t": { "Undo changes": { "v": [""] } } }, { "l": "lv", "t": { "Undo changes": { "v": [""] } } }, { "l": "mk", "t": { "Undo changes": { "v": ["Врати ги промените"] } } }, { "l": "mn", "t": { "Undo changes": { "v": [""] } } }, { "l": "mr", "t": { "Undo changes": { "v": [""] } } }, { "l": "ms_MY", "t": { "Undo changes": { "v": [""] } } }, { "l": "my", "t": { "Undo changes": { "v": [""] } } }, { "l": "nb", "t": { "Undo changes": { "v": ["Tilbakestill endringer"] } } }, { "l": "ne", "t": { "Undo changes": { "v": [""] } } }, { "l": "nl", "t": { "Undo changes": { "v": ["Wijzigingen ongedaan maken"] } } }, { "l": "nn_NO", "t": { "Undo changes": { "v": [""] } } }, { "l": "oc", "t": { "Undo changes": { "v": [""] } } }, { "l": "pl", "t": { "Undo changes": { "v": ["Cofnij zmiany"] } } }, { "l": "ps", "t": { "Undo changes": { "v": [""] } } }, { "l": "pt_BR", "t": { "Undo changes": { "v": ["Desfazer modificações"] } } }, { "l": "pt_PT", "t": { "Undo changes": { "v": ["Anular alterações"] } } }, { "l": "ro", "t": { "Undo changes": { "v": ["Anularea modificărilor"] } } }, { "l": "ru", "t": { "Undo changes": { "v": ["Отменить изменения"] } } }, { "l": "sc", "t": { "Undo changes": { "v": [""] } } }, { "l": "si", "t": { "Undo changes": { "v": [""] } } }, { "l": "sk", "t": { "Undo changes": { "v": ["Vrátiť zmeny"] } } }, { "l": "sl", "t": { "Undo changes": { "v": ["Razveljavi spremembe"] } } }, { "l": "sq", "t": { "Undo changes": { "v": [""] } } }, { "l": "sr", "t": { "Undo changes": { "v": ["Поништи измене"] } } }, { "l": "sr@latin", "t": { "Undo changes": { "v": [""] } } }, { "l": "sv", "t": { "Undo changes": { "v": ["Ångra ändringar"] } } }, { "l": "sw", "t": { "Undo changes": { "v": [""] } } }, { "l": "ta", "t": { "Undo changes": { "v": [""] } } }, { "l": "th", "t": { "Undo changes": { "v": [""] } } }, { "l": "tk", "t": { "Undo changes": { "v": [""] } } }, { "l": "tr", "t": { "Undo changes": { "v": ["Değişiklikleri geri al"] } } }, { "l": "ug", "t": { "Undo changes": { "v": [""] } } }, { "l": "uk", "t": { "Undo changes": { "v": ["Скасувати зміни"] } } }, { "l": "ur_PK", "t": { "Undo changes": { "v": [""] } } }, { "l": "uz", "t": { "Undo changes": { "v": ["O'zgarishlarni bekor qilish"] } } }, { "l": "vi", "t": { "Undo changes": { "v": [""] } } }, { "l": "zh_CN", "t": { "Undo changes": { "v": ["撤销更改"] } } }, { "l": "zh_HK", "t": { "Undo changes": { "v": ["取消更改"] } } }, { "l": "zh_TW", "t": { "Undo changes": { "v": ["還原變更"] } } }, { "l": "zu_ZA", "t": { "Undo changes": { "v": [""] } } }];
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$1 = { class: "button-vue__wrapper" };
const _hoisted_2$1 = { class: "button-vue__icon" };
const _hoisted_3$1 = { class: "button-vue__text" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NcButton",
  props: {
    alignment: { default: "center" },
    ariaLabel: { default: void 0 },
    disabled: { type: Boolean },
    download: { type: [String, Boolean], default: void 0 },
    href: { default: void 0 },
    pressed: { type: Boolean, default: void 0 },
    size: { default: "normal" },
    target: { default: "_self" },
    text: { default: void 0 },
    to: { default: void 0 },
    type: { default: "button" },
    variant: { default: "secondary" },
    wide: { type: Boolean }
  },
  emits: ["click", "update:pressed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const routerLink = computed(() => inject(routerKey, null) !== null && props.to ? useLink({ to: toRef$1(() => props.to) }) : void 0);
    const isLink = computed(() => props.href);
    const hasPressedState = computed(() => !isLink.value && typeof props.pressed === "boolean");
    const realVariant = computed(() => {
      if (props.pressed) {
        return "primary";
      }
      if (props.pressed === false && props.variant === "primary") {
        return "secondary";
      }
      return props.variant;
    });
    const flexAlignment = computed(() => props.alignment.split("-")[0]);
    const isReverseAligned = computed(() => props.alignment.includes("-"));
    const getNcPopoverTriggerAttrs = inject("NcPopover:trigger:attrs", () => ({}), false);
    const ncPopoverTriggerAttrs = computed(() => getNcPopoverTriggerAttrs());
    const linkAttrs = computed(() => ({
      role: "button",
      href: props.href || "#",
      target: props.target,
      rel: "nofollow noreferrer noopener",
      download: props.download || null
    }));
    const buttonAttrs = computed(() => ({
      "aria-pressed": hasPressedState.value ? String(props.pressed) : void 0,
      type: props.type
    }));
    function onClick(event) {
      if (hasPressedState.value) {
        emit("update:pressed", !props.pressed);
      }
      emit("click", event);
      routerLink.value?.navigate(event);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(isLink.value ? "a" : "button"), mergeProps({
        class: ["button-vue", [
          `button-vue--size-${_ctx.size}`,
          {
            [`button-vue--${realVariant.value}`]: realVariant.value,
            "button-vue--wide": _ctx.wide,
            [`button-vue--${flexAlignment.value}`]: flexAlignment.value !== "center",
            "button-vue--reverse": isReverseAligned.value,
            active: routerLink.value?.isActive
          }
        ]],
        disabled: _ctx.disabled,
        "aria-label": _ctx.ariaLabel
      }, {
        ...ncPopoverTriggerAttrs.value,
        ...isLink.value ? linkAttrs.value : buttonAttrs.value
      }, { onClick }), {
        default: withCtx(() => [
          createBaseVNode("span", _hoisted_1$1, [
            createBaseVNode("span", _hoisted_2$1, [
              renderSlot(_ctx.$slots, "icon", {}, void 0, true)
            ]),
            createBaseVNode("span", _hoisted_3$1, [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(_ctx.text), 1)
              ], true)
            ])
          ])
        ]),
        _: 3
      }, 16, ["class", "disabled", "aria-label"]);
    };
  }
});
const NcButton = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-0cc855a4"]]);
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}
const { toString: toString$1 } = Object.prototype;
const { getPrototypeOf } = Object;
const { iterator, toStringTag } = Symbol;
const kindOf = /* @__PURE__ */ ((cache) => (thing) => {
  const str = toString$1.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
const typeOfTest = (type) => (thing) => typeof thing === type;
const { isArray } = Array;
const isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
const isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
const isString = typeOfTest("string");
const isFunction$1 = typeOfTest("function");
const isNumber = typeOfTest("number");
const isObject$1 = (thing) => thing !== null && typeof thing === "object";
const isBoolean = (thing) => thing === true || thing === false;
const isPlainObject = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype2 = getPrototypeOf(val);
  return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(toStringTag in val) && !(iterator in val);
};
const isEmptyObject = (val) => {
  if (!isObject$1(val) || isBuffer(val)) {
    return false;
  }
  try {
    return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
  } catch (e) {
    return false;
  }
};
const isDate = kindOfTest("Date");
const isFile = kindOfTest("File");
const isBlob = kindOfTest("Blob");
const isFileList = kindOfTest("FileList");
const isStream = (val) => isObject$1(val) && isFunction$1(val.pipe);
const isFormData = (thing) => {
  let kind;
  return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction$1(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
  kind === "object" && isFunction$1(thing.toString) && thing.toString() === "[object FormData]"));
};
const isURLSearchParams = kindOfTest("URLSearchParams");
const [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
const trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i;
  let l;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    if (isBuffer(obj)) {
      return;
    }
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  if (isBuffer(obj)) {
    return null;
  }
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
const _global = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
const isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  const { caseless, skipUndefined } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else if (!skipUndefined || !isUndefined(val)) {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}
const extend = (a, b2, thisArg, { allOwnKeys } = {}) => {
  forEach(b2, (val, key) => {
    if (thisArg && isFunction$1(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, { allOwnKeys });
  return a;
};
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
const inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
const toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
const toArray$1 = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};
const isTypedArray = /* @__PURE__ */ ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[iterator];
  const _iterator = generator.call(obj);
  let result;
  while ((result = _iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
const matchAll = (regExp, str) => {
  let matches2;
  const arr = [];
  while ((matches2 = regExp.exec(str)) !== null) {
    arr.push(matches2);
  }
  return arr;
};
const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str) => {
  return str.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function replacer(m2, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};
const hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer) => {
  const descriptors2 = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction$1(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction$1(value)) return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
const noop$1 = () => {
};
const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction$1(thing.append) && thing[toStringTag] === "FormData" && thing[iterator]);
}
const toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i) => {
    if (isObject$1(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (isBuffer(source)) {
        return source;
      }
      if (!("toJSON" in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = void 0;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing) => thing && (isObject$1(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);
const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }
  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener("message", ({ source, data }) => {
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);
    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    };
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(
  typeof setImmediate === "function",
  isFunction$1(_global.postMessage)
);
const asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process$1 !== "undefined" && process$1.nextTick || _setImmediate;
const isIterable = (thing) => thing != null && isFunction$1(thing[iterator]);
const utils$1 = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject: isObject$1,
  isPlainObject,
  isEmptyObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction: isFunction$1,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray: toArray$1,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop: noop$1,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap,
  isIterable
};
var buffer = {};
var base64Js = {};
base64Js.byteLength = byteLength;
base64Js.toByteArray = toByteArray;
base64Js.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  var validLen = b64.indexOf("=");
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
}
function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0;
  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  var i;
  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 255;
    arr[curByte++] = tmp >> 8 & 255;
    arr[curByte++] = tmp & 255;
  }
  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 255;
  }
  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 255;
    arr[curByte++] = tmp & 255;
  }
  return arr;
}
function tripletToBase64(num) {
  return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
    output.push(tripletToBase64(tmp));
  }
  return output.join("");
}
function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3;
  var parts = [];
  var maxChunkLength = 16383;
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(
      lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
    );
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(
      lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
    );
  }
  return parts.join("");
}
var ieee754 = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
ieee754.read = function(buffer2, offset2, isLE, mLen, nBytes) {
  var e, m2;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d2 = isLE ? -1 : 1;
  var s = buffer2[offset2 + i];
  i += d2;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer2[offset2 + i], i += d2, nBits -= 8) {
  }
  m2 = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m2 = m2 * 256 + buffer2[offset2 + i], i += d2, nBits -= 8) {
  }
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m2 ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m2 = m2 + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m2 * Math.pow(2, e - mLen);
};
ieee754.write = function(buffer2, value, offset2, isLE, mLen, nBytes) {
  var e, m2, c2;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt2 = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d2 = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);
  if (isNaN(value) || value === Infinity) {
    m2 = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c2 = Math.pow(2, -e)) < 1) {
      e--;
      c2 *= 2;
    }
    if (e + eBias >= 1) {
      value += rt2 / c2;
    } else {
      value += rt2 * Math.pow(2, 1 - eBias);
    }
    if (value * c2 >= 2) {
      e++;
      c2 /= 2;
    }
    if (e + eBias >= eMax) {
      m2 = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m2 = (value * c2 - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m2 = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer2[offset2 + i] = m2 & 255, i += d2, m2 /= 256, mLen -= 8) {
  }
  e = e << mLen | m2;
  eLen += mLen;
  for (; eLen > 0; buffer2[offset2 + i] = e & 255, i += d2, e /= 256, eLen -= 8) {
  }
  buffer2[offset2 + i - d2] |= s * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(exports) {
  const base64 = base64Js;
  const ieee754$1 = ieee754;
  const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
  exports.Buffer = Buffer2;
  exports.SlowBuffer = SlowBuffer;
  exports.INSPECT_MAX_BYTES = 50;
  const K_MAX_LENGTH = 2147483647;
  exports.kMaxLength = K_MAX_LENGTH;
  const { Uint8Array: GlobalUint8Array, ArrayBuffer: GlobalArrayBuffer, SharedArrayBuffer: GlobalSharedArrayBuffer } = globalThis;
  Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
  if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
  }
  function typedArraySupport() {
    try {
      const arr = new GlobalUint8Array(1);
      const proto = { foo: function() {
        return 42;
      } };
      Object.setPrototypeOf(proto, GlobalUint8Array.prototype);
      Object.setPrototypeOf(arr, proto);
      return arr.foo() === 42;
    } catch (e) {
      return false;
    }
  }
  Object.defineProperty(Buffer2.prototype, "parent", {
    enumerable: true,
    get: function() {
      if (!Buffer2.isBuffer(this)) return void 0;
      return this.buffer;
    }
  });
  Object.defineProperty(Buffer2.prototype, "offset", {
    enumerable: true,
    get: function() {
      if (!Buffer2.isBuffer(this)) return void 0;
      return this.byteOffset;
    }
  });
  function createBuffer(length) {
    if (length > K_MAX_LENGTH) {
      throw new RangeError('The value "' + length + '" is invalid for option "size"');
    }
    const buf = new GlobalUint8Array(length);
    Object.setPrototypeOf(buf, Buffer2.prototype);
    return buf;
  }
  function Buffer2(arg, encodingOrOffset, length) {
    if (typeof arg === "number") {
      if (typeof encodingOrOffset === "string") {
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      }
      return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
  }
  Buffer2.poolSize = 8192;
  function from(value, encodingOrOffset, length) {
    if (typeof value === "string") {
      return fromString(value, encodingOrOffset);
    }
    if (GlobalArrayBuffer.isView(value)) {
      return fromArrayView(value);
    }
    if (value == null) {
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
      );
    }
    if (isInstance(value, GlobalArrayBuffer) || value && isInstance(value.buffer, GlobalArrayBuffer)) {
      return fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof GlobalSharedArrayBuffer !== "undefined" && (isInstance(value, GlobalSharedArrayBuffer) || value && isInstance(value.buffer, GlobalSharedArrayBuffer))) {
      return fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof value === "number") {
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    }
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) {
      return Buffer2.from(valueOf, encodingOrOffset, length);
    }
    const b2 = fromObject(value);
    if (b2) return b2;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
      return Buffer2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    }
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
    );
  }
  Buffer2.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
  };
  Object.setPrototypeOf(Buffer2.prototype, GlobalUint8Array.prototype);
  Object.setPrototypeOf(Buffer2, GlobalUint8Array);
  function assertSize(size2) {
    if (typeof size2 !== "number") {
      throw new TypeError('"size" argument must be of type number');
    } else if (size2 < 0) {
      throw new RangeError('The value "' + size2 + '" is invalid for option "size"');
    }
  }
  function alloc(size2, fill, encoding) {
    assertSize(size2);
    if (size2 <= 0) {
      return createBuffer(size2);
    }
    if (fill !== void 0) {
      return typeof encoding === "string" ? createBuffer(size2).fill(fill, encoding) : createBuffer(size2).fill(fill);
    }
    return createBuffer(size2);
  }
  Buffer2.alloc = function(size2, fill, encoding) {
    return alloc(size2, fill, encoding);
  };
  function allocUnsafe(size2) {
    assertSize(size2);
    return createBuffer(size2 < 0 ? 0 : checked(size2) | 0);
  }
  Buffer2.allocUnsafe = function(size2) {
    return allocUnsafe(size2);
  };
  Buffer2.allocUnsafeSlow = function(size2) {
    return allocUnsafe(size2);
  };
  function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") {
      encoding = "utf8";
    }
    if (!Buffer2.isEncoding(encoding)) {
      throw new TypeError("Unknown encoding: " + encoding);
    }
    const length = byteLength2(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) {
      buf = buf.slice(0, actual);
    }
    return buf;
  }
  function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for (let i = 0; i < length; i += 1) {
      buf[i] = array[i] & 255;
    }
    return buf;
  }
  function fromArrayView(arrayView) {
    if (isInstance(arrayView, GlobalUint8Array)) {
      const copy = new GlobalUint8Array(arrayView);
      return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
  }
  function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('"offset" is outside of buffer bounds');
    }
    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('"length" is outside of buffer bounds');
    }
    let buf;
    if (byteOffset === void 0 && length === void 0) {
      buf = new GlobalUint8Array(array);
    } else if (length === void 0) {
      buf = new GlobalUint8Array(array, byteOffset);
    } else {
      buf = new GlobalUint8Array(array, byteOffset, length);
    }
    Object.setPrototypeOf(buf, Buffer2.prototype);
    return buf;
  }
  function fromObject(obj) {
    if (Buffer2.isBuffer(obj)) {
      const len = checked(obj.length) | 0;
      const buf = createBuffer(len);
      if (buf.length === 0) {
        return buf;
      }
      obj.copy(buf, 0, 0, len);
      return buf;
    }
    if (obj.length !== void 0) {
      if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
        return createBuffer(0);
      }
      return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) {
      return fromArrayLike(obj.data);
    }
  }
  function checked(length) {
    if (length >= K_MAX_LENGTH) {
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    }
    return length | 0;
  }
  function SlowBuffer(length) {
    if (+length != length) {
      length = 0;
    }
    return Buffer2.alloc(+length);
  }
  Buffer2.isBuffer = function isBuffer2(b2) {
    return b2 != null && b2._isBuffer === true && b2 !== Buffer2.prototype;
  };
  Buffer2.compare = function compare(a, b2) {
    if (isInstance(a, GlobalUint8Array)) a = Buffer2.from(a, a.offset, a.byteLength);
    if (isInstance(b2, GlobalUint8Array)) b2 = Buffer2.from(b2, b2.offset, b2.byteLength);
    if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b2)) {
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    }
    if (a === b2) return 0;
    let x = a.length;
    let y2 = b2.length;
    for (let i = 0, len = Math.min(x, y2); i < len; ++i) {
      if (a[i] !== b2[i]) {
        x = a[i];
        y2 = b2[i];
        break;
      }
    }
    if (x < y2) return -1;
    if (y2 < x) return 1;
    return 0;
  };
  Buffer2.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  };
  Buffer2.concat = function concat(list, length) {
    if (!Array.isArray(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    if (list.length === 0) {
      return Buffer2.alloc(0);
    }
    let i;
    if (length === void 0) {
      length = 0;
      for (i = 0; i < list.length; ++i) {
        length += list[i].length;
      }
    }
    const buffer2 = Buffer2.allocUnsafe(length);
    let pos = 0;
    for (i = 0; i < list.length; ++i) {
      let buf = list[i];
      if (isInstance(buf, GlobalUint8Array)) {
        if (pos + buf.length > buffer2.length) {
          if (!Buffer2.isBuffer(buf)) buf = Buffer2.from(buf);
          buf.copy(buffer2, pos);
        } else {
          GlobalUint8Array.prototype.set.call(
            buffer2,
            buf,
            pos
          );
        }
      } else if (!Buffer2.isBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      } else {
        buf.copy(buffer2, pos);
      }
      pos += buf.length;
    }
    return buffer2;
  };
  function byteLength2(string, encoding) {
    if (Buffer2.isBuffer(string)) {
      return string.length;
    }
    if (GlobalArrayBuffer.isView(string) || isInstance(string, GlobalArrayBuffer)) {
      return string.byteLength;
    }
    if (typeof string !== "string") {
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
      );
    }
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    let loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case "ascii":
        case "latin1":
        case "binary":
          return len;
        case "utf8":
        case "utf-8":
          return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return len * 2;
        case "hex":
          return len >>> 1;
        case "base64":
          return base64ToBytes(string).length;
        default:
          if (loweredCase) {
            return mustMatch ? -1 : utf8ToBytes(string).length;
          }
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer2.byteLength = byteLength2;
  function slowToString(encoding, start, end) {
    let loweredCase = false;
    if (start === void 0 || start < 0) {
      start = 0;
    }
    if (start > this.length) {
      return "";
    }
    if (end === void 0 || end > this.length) {
      end = this.length;
    }
    if (end <= 0) {
      return "";
    }
    end >>>= 0;
    start >>>= 0;
    if (end <= start) {
      return "";
    }
    if (!encoding) encoding = "utf8";
    while (true) {
      switch (encoding) {
        case "hex":
          return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
          return utf8Slice(this, start, end);
        case "ascii":
          return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
          return latin1Slice(this, start, end);
        case "base64":
          return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return utf16leSlice(this, start, end);
        default:
          if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
          encoding = (encoding + "").toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer2.prototype._isBuffer = true;
  function swap(b2, n2, m2) {
    const i = b2[n2];
    b2[n2] = b2[m2];
    b2[m2] = i;
  }
  Buffer2.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    }
    for (let i = 0; i < len; i += 2) {
      swap(this, i, i + 1);
    }
    return this;
  };
  Buffer2.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (let i = 0; i < len; i += 4) {
      swap(this, i, i + 3);
      swap(this, i + 1, i + 2);
    }
    return this;
  };
  Buffer2.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    }
    for (let i = 0; i < len; i += 8) {
      swap(this, i, i + 7);
      swap(this, i + 1, i + 6);
      swap(this, i + 2, i + 5);
      swap(this, i + 3, i + 4);
    }
    return this;
  };
  Buffer2.prototype.toString = function toString3() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
  };
  Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
  Buffer2.prototype.equals = function equals(b2) {
    if (!Buffer2.isBuffer(b2)) throw new TypeError("Argument must be a Buffer");
    if (this === b2) return true;
    return Buffer2.compare(this, b2) === 0;
  };
  Buffer2.prototype.inspect = function inspect() {
    let str = "";
    const max2 = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max2).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max2) str += " ... ";
    return "<Buffer " + str + ">";
  };
  if (customInspectSymbol) {
    Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
  }
  Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, GlobalUint8Array)) {
      target = Buffer2.from(target, target.offset, target.byteLength);
    }
    if (!Buffer2.isBuffer(target)) {
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
      );
    }
    if (start === void 0) {
      start = 0;
    }
    if (end === void 0) {
      end = target ? target.length : 0;
    }
    if (thisStart === void 0) {
      thisStart = 0;
    }
    if (thisEnd === void 0) {
      thisEnd = this.length;
    }
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError("out of range index");
    }
    if (thisStart >= thisEnd && start >= end) {
      return 0;
    }
    if (thisStart >= thisEnd) {
      return -1;
    }
    if (start >= end) {
      return 1;
    }
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y2 = end - start;
    const len = Math.min(x, y2);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for (let i = 0; i < len; ++i) {
      if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y2 = targetCopy[i];
        break;
      }
    }
    if (x < y2) return -1;
    if (y2 < x) return 1;
    return 0;
  };
  function bidirectionalIndexOf(buffer2, val, byteOffset, encoding, dir) {
    if (buffer2.length === 0) return -1;
    if (typeof byteOffset === "string") {
      encoding = byteOffset;
      byteOffset = 0;
    } else if (byteOffset > 2147483647) {
      byteOffset = 2147483647;
    } else if (byteOffset < -2147483648) {
      byteOffset = -2147483648;
    }
    byteOffset = +byteOffset;
    if (numberIsNaN(byteOffset)) {
      byteOffset = dir ? 0 : buffer2.length - 1;
    }
    if (byteOffset < 0) byteOffset = buffer2.length + byteOffset;
    if (byteOffset >= buffer2.length) {
      if (dir) return -1;
      else byteOffset = buffer2.length - 1;
    } else if (byteOffset < 0) {
      if (dir) byteOffset = 0;
      else return -1;
    }
    if (typeof val === "string") {
      val = Buffer2.from(val, encoding);
    }
    if (Buffer2.isBuffer(val)) {
      if (val.length === 0) {
        return -1;
      }
      return arrayIndexOf(buffer2, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
      val = val & 255;
      if (typeof GlobalUint8Array.prototype.indexOf === "function") {
        if (dir) {
          return GlobalUint8Array.prototype.indexOf.call(buffer2, val, byteOffset);
        } else {
          return GlobalUint8Array.prototype.lastIndexOf.call(buffer2, val, byteOffset);
        }
      }
      return arrayIndexOf(buffer2, [val], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
  }
  function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== void 0) {
      encoding = String(encoding).toLowerCase();
      if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
        if (arr.length < 2 || val.length < 2) {
          return -1;
        }
        indexSize = 2;
        arrLength /= 2;
        valLength /= 2;
        byteOffset /= 2;
      }
    }
    function read(buf, i2) {
      if (indexSize === 1) {
        return buf[i2];
      } else {
        return buf.readUInt16BE(i2 * indexSize);
      }
    }
    let i;
    if (dir) {
      let foundIndex = -1;
      for (i = byteOffset; i < arrLength; i++) {
        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
          if (foundIndex === -1) foundIndex = i;
          if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
          if (foundIndex !== -1) i -= i - foundIndex;
          foundIndex = -1;
        }
      }
    } else {
      if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
      for (i = byteOffset; i >= 0; i--) {
        let found = true;
        for (let j = 0; j < valLength; j++) {
          if (read(arr, i + j) !== read(val, j)) {
            found = false;
            break;
          }
        }
        if (found) return i;
      }
    }
    return -1;
  }
  Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
  };
  Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
  };
  Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
  };
  function hexWrite(buf, string, offset2, length) {
    offset2 = Number(offset2) || 0;
    const remaining = buf.length - offset2;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }
    const strLen = string.length;
    if (length > strLen / 2) {
      length = strLen / 2;
    }
    let i;
    for (i = 0; i < length; ++i) {
      const parsed = parseInt(string.substr(i * 2, 2), 16);
      if (numberIsNaN(parsed)) return i;
      buf[offset2 + i] = parsed;
    }
    return i;
  }
  function utf8Write(buf, string, offset2, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset2), buf, offset2, length);
  }
  function asciiWrite(buf, string, offset2, length) {
    return blitBuffer(asciiToBytes(string), buf, offset2, length);
  }
  function base64Write(buf, string, offset2, length) {
    return blitBuffer(base64ToBytes(string), buf, offset2, length);
  }
  function ucs2Write(buf, string, offset2, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset2), buf, offset2, length);
  }
  Buffer2.prototype.write = function write(string, offset2, length, encoding) {
    if (offset2 === void 0) {
      encoding = "utf8";
      length = this.length;
      offset2 = 0;
    } else if (length === void 0 && typeof offset2 === "string") {
      encoding = offset2;
      length = this.length;
      offset2 = 0;
    } else if (isFinite(offset2)) {
      offset2 = offset2 >>> 0;
      if (isFinite(length)) {
        length = length >>> 0;
        if (encoding === void 0) encoding = "utf8";
      } else {
        encoding = length;
        length = void 0;
      }
    } else {
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    }
    const remaining = this.length - offset2;
    if (length === void 0 || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset2 < 0) || offset2 > this.length) {
      throw new RangeError("Attempt to write outside buffer bounds");
    }
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case "hex":
          return hexWrite(this, string, offset2, length);
        case "utf8":
        case "utf-8":
          return utf8Write(this, string, offset2, length);
        case "ascii":
        case "latin1":
        case "binary":
          return asciiWrite(this, string, offset2, length);
        case "base64":
          return base64Write(this, string, offset2, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ucs2Write(this, string, offset2, length);
        default:
          if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };
  Buffer2.prototype.toJSON = function toJSON2() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64.fromByteArray(buf);
    } else {
      return base64.fromByteArray(buf.slice(start, end));
    }
  }
  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while (i < end) {
      const firstByte = buf[i];
      let codePoint = null;
      let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
      if (i + bytesPerSequence <= end) {
        let secondByte, thirdByte, fourthByte, tempCodePoint;
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 128) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i + 1];
            if ((secondByte & 192) === 128) {
              tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
              if (tempCodePoint > 127) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
              if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
              if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                codePoint = tempCodePoint;
              }
            }
        }
      }
      if (codePoint === null) {
        codePoint = 65533;
        bytesPerSequence = 1;
      } else if (codePoint > 65535) {
        codePoint -= 65536;
        res.push(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      res.push(codePoint);
      i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
  }
  const MAX_ARGUMENTS_LENGTH = 4096;
  function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints);
    }
    let res = "";
    let i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(
        String,
        codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
      );
    }
    return res;
  }
  function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for (let i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i] & 127);
    }
    return ret;
  }
  function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for (let i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i]);
    }
    return ret;
  }
  function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for (let i = start; i < end; ++i) {
      out += hexSliceLookupTable[buf[i]];
    }
    return out;
  }
  function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    for (let i = 0; i < bytes.length - 1; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
  }
  Buffer2.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === void 0 ? len : ~~end;
    if (start < 0) {
      start += len;
      if (start < 0) start = 0;
    } else if (start > len) {
      start = len;
    }
    if (end < 0) {
      end += len;
      if (end < 0) end = 0;
    } else if (end > len) {
      end = len;
    }
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    Object.setPrototypeOf(newBuf, Buffer2.prototype);
    return newBuf;
  };
  function checkOffset(offset2, ext, length) {
    if (offset2 % 1 !== 0 || offset2 < 0) throw new RangeError("offset is not uint");
    if (offset2 + ext > length) throw new RangeError("Trying to access beyond buffer length");
  }
  Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset2, byteLength3, noAssert) {
    offset2 = offset2 >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) checkOffset(offset2, byteLength3, this.length);
    let val = this[offset2];
    let mul = 1;
    let i = 0;
    while (++i < byteLength3 && (mul *= 256)) {
      val += this[offset2 + i] * mul;
    }
    return val;
  };
  Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset2, byteLength3, noAssert) {
    offset2 = offset2 >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) {
      checkOffset(offset2, byteLength3, this.length);
    }
    let val = this[offset2 + --byteLength3];
    let mul = 1;
    while (byteLength3 > 0 && (mul *= 256)) {
      val += this[offset2 + --byteLength3] * mul;
    }
    return val;
  };
  Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset2, noAssert) {
    offset2 = offset2 >>> 0;
    if (!noAssert) checkOffset(offset2, 1, this.length);
    return this[offset2];
  };
  Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset2, noAssert) {
    offset2 = offset2 >>> 0;
    if (!noAssert) checkOffset(offset2, 2, this.length);
    return this[offset2] | this[offset2 + 1] << 8;
  };
  Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset2, noAssert) {
    offset2 = offset2 >>> 0;
    if (!noAssert) checkOffset(offset2, 2, this.length);
    return this[offset2] << 8 | this[offset2 + 1];
  };
  Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset2, noAssert) {
    offset2 = offset2 >>> 0;
    if (!noAssert) checkOffset(offset2, 4, this.length);
    return (this[offset2] | this[offset2 + 1] << 8 | this[offset2 + 2] << 16) + this[offset2 + 3] * 16777216;
  };
  Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset2, noAssert) {
    offset2 = offset2 >>> 0;
    if (!noAssert) checkOffset(offset2, 4, this.length);
    return this[offset2] * 16777216 + (this[offset2 + 1] << 16 | this[offset2 + 2] << 8 | this[offset2 + 3]);
  };
  Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset2) {
    offset2 = offset2 >>> 0;
    validateNumber(offset2, "offset");
    const first = this[offset2];
    const last = this[offset2 + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset2, this.length - 8);
    }
    const lo = first + this[++offset2] * 2 ** 8 + this[++offset2] * 2 ** 16 + this[++offset2] * 2 ** 24;
    const hi = this[++offset2] + this[++offset2] * 2 ** 8 + this[++offset2] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
  });
  Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset2) {
    offset2 = offset2 >>> 0;
    validateNumber(offset2, "offset");
    const first = this[offset2];
    const last = this[offset2 + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset2, this.length - 8);
    }
    const hi = first * 2 ** 24 + this[++offset2] * 2 ** 16 + this[++offset2] * 2 ** 8 + this[++offset2];
    const lo = this[++offset2] * 2 ** 24 + this[++offset2] * 2 ** 16 + this[++offset2] * 2 ** 8 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
  });
  Buffer2.prototype.readIntLE = function readIntLE(offset2, byteLength3, noAssert) {
    offset2 = offset2 >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) checkOffset(offset2, byteLength3, this.length);
    let val = this[offset2];
    let mul = 1;
    let i = 0;
    while (++i < byteLength3 && (mul *= 256)) {
      val += this[offset2 + i] * mul;
    }
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
    return val;
  };
  Buffer2.prototype.readIntBE = function readIntBE(offset2, byteLength3, noAssert) {
    offset2 = offset2 >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) checkOffset(offset2, byteLength3, this.length);
    let i = byteLength3;
    let mul = 1;
    let val = this[offset2 + --i];
    while (i > 0 && (mul *= 256)) {
      val += this[offset2 + --i] * mul;
    }
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
    return val;
  };
  Buffer2.prototype.readInt8 = function readInt8(offset2, noAssert) {
    offset2 = offset2 >>> 0;
    if (!noAssert) checkOffset(offset2, 1, this.length);
    if (!(this[offset2] & 128)) return this[offset2];
    return (255 - this[offset2] + 1) * -1;
  };
  Buffer2.prototype.readInt16LE = function readInt16LE(offset2, noAssert) {
    offset2 = offset2 >>> 0;
    if (!noAssert) checkOffset(offset2, 2, this.length);
    const val = this[offset2] | this[offset2 + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
  };
  Buffer2.prototype.readInt16BE = function readInt16BE(offset2, noAssert) {
    offset2 = offset2 >>> 0;
    if (!noAssert) checkOffset(offset2, 2, this.length);
    const val = this[offset2 + 1] | this[offset2] << 8;
    return val & 32768 ? val | 4294901760 : val;
  };
  Buffer2.prototype.readInt32LE = function readInt32LE(offset2, noAssert) {
    offset2 = offset2 >>> 0;
    if (!noAssert) checkOffset(offset2, 4, this.length);
    return this[offset2] | this[offset2 + 1] << 8 | this[offset2 + 2] << 16 | this[offset2 + 3] << 24;
  };
  Buffer2.prototype.readInt32BE = function readInt32BE(offset2, noAssert) {
    offset2 = offset2 >>> 0;
    if (!noAssert) checkOffset(offset2, 4, this.length);
    return this[offset2] << 24 | this[offset2 + 1] << 16 | this[offset2 + 2] << 8 | this[offset2 + 3];
  };
  Buffer2.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset2) {
    offset2 = offset2 >>> 0;
    validateNumber(offset2, "offset");
    const first = this[offset2];
    const last = this[offset2 + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset2, this.length - 8);
    }
    const val = this[offset2 + 4] + this[offset2 + 5] * 2 ** 8 + this[offset2 + 6] * 2 ** 16 + (last << 24);
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset2] * 2 ** 8 + this[++offset2] * 2 ** 16 + this[++offset2] * 2 ** 24);
  });
  Buffer2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset2) {
    offset2 = offset2 >>> 0;
    validateNumber(offset2, "offset");
    const first = this[offset2];
    const last = this[offset2 + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset2, this.length - 8);
    }
    const val = (first << 24) + // Overflow
    this[++offset2] * 2 ** 16 + this[++offset2] * 2 ** 8 + this[++offset2];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset2] * 2 ** 24 + this[++offset2] * 2 ** 16 + this[++offset2] * 2 ** 8 + last);
  });
  Buffer2.prototype.readFloatLE = function readFloatLE(offset2, noAssert) {
    offset2 = offset2 >>> 0;
    if (!noAssert) checkOffset(offset2, 4, this.length);
    return ieee754$1.read(this, offset2, true, 23, 4);
  };
  Buffer2.prototype.readFloatBE = function readFloatBE(offset2, noAssert) {
    offset2 = offset2 >>> 0;
    if (!noAssert) checkOffset(offset2, 4, this.length);
    return ieee754$1.read(this, offset2, false, 23, 4);
  };
  Buffer2.prototype.readDoubleLE = function readDoubleLE(offset2, noAssert) {
    offset2 = offset2 >>> 0;
    if (!noAssert) checkOffset(offset2, 8, this.length);
    return ieee754$1.read(this, offset2, true, 52, 8);
  };
  Buffer2.prototype.readDoubleBE = function readDoubleBE(offset2, noAssert) {
    offset2 = offset2 >>> 0;
    if (!noAssert) checkOffset(offset2, 8, this.length);
    return ieee754$1.read(this, offset2, false, 52, 8);
  };
  function checkInt(buf, value, offset2, ext, max2, min2) {
    if (!Buffer2.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max2 || value < min2) throw new RangeError('"value" argument is out of bounds');
    if (offset2 + ext > buf.length) throw new RangeError("Index out of range");
  }
  Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset2, byteLength3, noAssert) {
    value = +value;
    offset2 = offset2 >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) {
      const maxBytes = Math.pow(2, 8 * byteLength3) - 1;
      checkInt(this, value, offset2, byteLength3, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset2] = value & 255;
    while (++i < byteLength3 && (mul *= 256)) {
      this[offset2 + i] = value / mul & 255;
    }
    return offset2 + byteLength3;
  };
  Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset2, byteLength3, noAssert) {
    value = +value;
    offset2 = offset2 >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) {
      const maxBytes = Math.pow(2, 8 * byteLength3) - 1;
      checkInt(this, value, offset2, byteLength3, maxBytes, 0);
    }
    let i = byteLength3 - 1;
    let mul = 1;
    this[offset2 + i] = value & 255;
    while (--i >= 0 && (mul *= 256)) {
      this[offset2 + i] = value / mul & 255;
    }
    return offset2 + byteLength3;
  };
  Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset2, noAssert) {
    value = +value;
    offset2 = offset2 >>> 0;
    if (!noAssert) checkInt(this, value, offset2, 1, 255, 0);
    this[offset2] = value & 255;
    return offset2 + 1;
  };
  Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset2, noAssert) {
    value = +value;
    offset2 = offset2 >>> 0;
    if (!noAssert) checkInt(this, value, offset2, 2, 65535, 0);
    this[offset2] = value & 255;
    this[offset2 + 1] = value >>> 8;
    return offset2 + 2;
  };
  Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset2, noAssert) {
    value = +value;
    offset2 = offset2 >>> 0;
    if (!noAssert) checkInt(this, value, offset2, 2, 65535, 0);
    this[offset2] = value >>> 8;
    this[offset2 + 1] = value & 255;
    return offset2 + 2;
  };
  Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset2, noAssert) {
    value = +value;
    offset2 = offset2 >>> 0;
    if (!noAssert) checkInt(this, value, offset2, 4, 4294967295, 0);
    this[offset2 + 3] = value >>> 24;
    this[offset2 + 2] = value >>> 16;
    this[offset2 + 1] = value >>> 8;
    this[offset2] = value & 255;
    return offset2 + 4;
  };
  Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset2, noAssert) {
    value = +value;
    offset2 = offset2 >>> 0;
    if (!noAssert) checkInt(this, value, offset2, 4, 4294967295, 0);
    this[offset2] = value >>> 24;
    this[offset2 + 1] = value >>> 16;
    this[offset2 + 2] = value >>> 8;
    this[offset2 + 3] = value & 255;
    return offset2 + 4;
  };
  function wrtBigUInt64LE(buf, value, offset2, min2, max2) {
    checkIntBI(value, min2, max2, buf, offset2, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset2++] = lo;
    lo = lo >> 8;
    buf[offset2++] = lo;
    lo = lo >> 8;
    buf[offset2++] = lo;
    lo = lo >> 8;
    buf[offset2++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset2++] = hi;
    hi = hi >> 8;
    buf[offset2++] = hi;
    hi = hi >> 8;
    buf[offset2++] = hi;
    hi = hi >> 8;
    buf[offset2++] = hi;
    return offset2;
  }
  function wrtBigUInt64BE(buf, value, offset2, min2, max2) {
    checkIntBI(value, min2, max2, buf, offset2, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset2 + 7] = lo;
    lo = lo >> 8;
    buf[offset2 + 6] = lo;
    lo = lo >> 8;
    buf[offset2 + 5] = lo;
    lo = lo >> 8;
    buf[offset2 + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset2 + 3] = hi;
    hi = hi >> 8;
    buf[offset2 + 2] = hi;
    hi = hi >> 8;
    buf[offset2 + 1] = hi;
    hi = hi >> 8;
    buf[offset2] = hi;
    return offset2 + 8;
  }
  Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset2 = 0) {
    return wrtBigUInt64LE(this, value, offset2, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset2 = 0) {
    return wrtBigUInt64BE(this, value, offset2, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  Buffer2.prototype.writeIntLE = function writeIntLE(value, offset2, byteLength3, noAssert) {
    value = +value;
    offset2 = offset2 >>> 0;
    if (!noAssert) {
      const limit = Math.pow(2, 8 * byteLength3 - 1);
      checkInt(this, value, offset2, byteLength3, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset2] = value & 255;
    while (++i < byteLength3 && (mul *= 256)) {
      if (value < 0 && sub === 0 && this[offset2 + i - 1] !== 0) {
        sub = 1;
      }
      this[offset2 + i] = (value / mul >> 0) - sub & 255;
    }
    return offset2 + byteLength3;
  };
  Buffer2.prototype.writeIntBE = function writeIntBE(value, offset2, byteLength3, noAssert) {
    value = +value;
    offset2 = offset2 >>> 0;
    if (!noAssert) {
      const limit = Math.pow(2, 8 * byteLength3 - 1);
      checkInt(this, value, offset2, byteLength3, limit - 1, -limit);
    }
    let i = byteLength3 - 1;
    let mul = 1;
    let sub = 0;
    this[offset2 + i] = value & 255;
    while (--i >= 0 && (mul *= 256)) {
      if (value < 0 && sub === 0 && this[offset2 + i + 1] !== 0) {
        sub = 1;
      }
      this[offset2 + i] = (value / mul >> 0) - sub & 255;
    }
    return offset2 + byteLength3;
  };
  Buffer2.prototype.writeInt8 = function writeInt8(value, offset2, noAssert) {
    value = +value;
    offset2 = offset2 >>> 0;
    if (!noAssert) checkInt(this, value, offset2, 1, 127, -128);
    if (value < 0) value = 255 + value + 1;
    this[offset2] = value & 255;
    return offset2 + 1;
  };
  Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset2, noAssert) {
    value = +value;
    offset2 = offset2 >>> 0;
    if (!noAssert) checkInt(this, value, offset2, 2, 32767, -32768);
    this[offset2] = value & 255;
    this[offset2 + 1] = value >>> 8;
    return offset2 + 2;
  };
  Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset2, noAssert) {
    value = +value;
    offset2 = offset2 >>> 0;
    if (!noAssert) checkInt(this, value, offset2, 2, 32767, -32768);
    this[offset2] = value >>> 8;
    this[offset2 + 1] = value & 255;
    return offset2 + 2;
  };
  Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset2, noAssert) {
    value = +value;
    offset2 = offset2 >>> 0;
    if (!noAssert) checkInt(this, value, offset2, 4, 2147483647, -2147483648);
    this[offset2] = value & 255;
    this[offset2 + 1] = value >>> 8;
    this[offset2 + 2] = value >>> 16;
    this[offset2 + 3] = value >>> 24;
    return offset2 + 4;
  };
  Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset2, noAssert) {
    value = +value;
    offset2 = offset2 >>> 0;
    if (!noAssert) checkInt(this, value, offset2, 4, 2147483647, -2147483648);
    if (value < 0) value = 4294967295 + value + 1;
    this[offset2] = value >>> 24;
    this[offset2 + 1] = value >>> 16;
    this[offset2 + 2] = value >>> 8;
    this[offset2 + 3] = value & 255;
    return offset2 + 4;
  };
  Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset2 = 0) {
    return wrtBigUInt64LE(this, value, offset2, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset2 = 0) {
    return wrtBigUInt64BE(this, value, offset2, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function checkIEEE754(buf, value, offset2, ext, max2, min2) {
    if (offset2 + ext > buf.length) throw new RangeError("Index out of range");
    if (offset2 < 0) throw new RangeError("Index out of range");
  }
  function writeFloat(buf, value, offset2, littleEndian, noAssert) {
    value = +value;
    offset2 = offset2 >>> 0;
    if (!noAssert) {
      checkIEEE754(buf, value, offset2, 4);
    }
    ieee754$1.write(buf, value, offset2, littleEndian, 23, 4);
    return offset2 + 4;
  }
  Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset2, noAssert) {
    return writeFloat(this, value, offset2, true, noAssert);
  };
  Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset2, noAssert) {
    return writeFloat(this, value, offset2, false, noAssert);
  };
  function writeDouble(buf, value, offset2, littleEndian, noAssert) {
    value = +value;
    offset2 = offset2 >>> 0;
    if (!noAssert) {
      checkIEEE754(buf, value, offset2, 8);
    }
    ieee754$1.write(buf, value, offset2, littleEndian, 52, 8);
    return offset2 + 8;
  }
  Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset2, noAssert) {
    return writeDouble(this, value, offset2, true, noAssert);
  };
  Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset2, noAssert) {
    return writeDouble(this, value, offset2, false, noAssert);
  };
  Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer2.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    if (targetStart < 0) {
      throw new RangeError("targetStart out of bounds");
    }
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }
    const len = end - start;
    if (this === target && typeof GlobalUint8Array.prototype.copyWithin === "function") {
      this.copyWithin(targetStart, start, end);
    } else {
      GlobalUint8Array.prototype.set.call(
        target,
        this.subarray(start, end),
        targetStart
      );
    }
    return len;
  };
  Buffer2.prototype.fill = function fill(val, start, end, encoding) {
    if (typeof val === "string") {
      if (typeof start === "string") {
        encoding = start;
        start = 0;
        end = this.length;
      } else if (typeof end === "string") {
        encoding = end;
        end = this.length;
      }
      if (encoding !== void 0 && typeof encoding !== "string") {
        throw new TypeError("encoding must be a string");
      }
      if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      if (val.length === 1) {
        const code2 = val.charCodeAt(0);
        if (encoding === "utf8" && code2 < 128 || encoding === "latin1") {
          val = code2;
        }
      }
    } else if (typeof val === "number") {
      val = val & 255;
    } else if (typeof val === "boolean") {
      val = Number(val);
    }
    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError("Out of range index");
    }
    if (end <= start) {
      return this;
    }
    start = start >>> 0;
    end = end === void 0 ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") {
      for (i = start; i < end; ++i) {
        this[i] = val;
      }
    } else {
      const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
      const len = bytes.length;
      if (len === 0) {
        throw new TypeError('The value "' + val + '" is invalid for argument "value"');
      }
      for (i = 0; i < end - start; ++i) {
        this[i + start] = bytes[i % len];
      }
    }
    return this;
  };
  const errors = {};
  function E2(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
      constructor() {
        super();
        Object.defineProperty(this, "message", {
          value: getMessage.apply(this, arguments),
          writable: true,
          configurable: true
        });
        this.name = `${this.name} [${sym}]`;
        this.stack;
        delete this.name;
      }
      get code() {
        return sym;
      }
      set code(value) {
        Object.defineProperty(this, "code", {
          configurable: true,
          enumerable: true,
          value,
          writable: true
        });
      }
      toString() {
        return `${this.name} [${sym}]: ${this.message}`;
      }
    };
  }
  E2(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(name) {
      if (name) {
        return `${name} is outside of buffer bounds`;
      }
      return "Attempt to access memory outside buffer bounds";
    },
    RangeError
  );
  E2(
    "ERR_INVALID_ARG_TYPE",
    function(name, actual) {
      return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
    },
    TypeError
  );
  E2(
    "ERR_OUT_OF_RANGE",
    function(str, range, input) {
      let msg = `The value of "${str}" is out of range.`;
      let received = input;
      if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
        received = addNumericalSeparator(String(input));
      } else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
          received = addNumericalSeparator(received);
        }
        received += "n";
      }
      msg += ` It must be ${range}. Received ${received}`;
      return msg;
    },
    RangeError
  );
  function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for (; i >= start + 4; i -= 3) {
      res = `_${val.slice(i - 3, i)}${res}`;
    }
    return `${val.slice(0, i)}${res}`;
  }
  function checkBounds(buf, offset2, byteLength3) {
    validateNumber(offset2, "offset");
    if (buf[offset2] === void 0 || buf[offset2 + byteLength3] === void 0) {
      boundsError(offset2, buf.length - (byteLength3 + 1));
    }
  }
  function checkIntBI(value, min2, max2, buf, offset2, byteLength3) {
    if (value > max2 || value < min2) {
      const n2 = typeof min2 === "bigint" ? "n" : "";
      let range;
      {
        if (min2 === 0 || min2 === BigInt(0)) {
          range = `>= 0${n2} and < 2${n2} ** ${(byteLength3 + 1) * 8}${n2}`;
        } else {
          range = `>= -(2${n2} ** ${(byteLength3 + 1) * 8 - 1}${n2}) and < 2 ** ${(byteLength3 + 1) * 8 - 1}${n2}`;
        }
      }
      throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset2, byteLength3);
  }
  function validateNumber(value, name) {
    if (typeof value !== "number") {
      throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
    }
  }
  function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
      validateNumber(value, type);
      throw new errors.ERR_OUT_OF_RANGE("offset", "an integer", value);
    }
    if (length < 0) {
      throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    }
    throw new errors.ERR_OUT_OF_RANGE(
      "offset",
      `>= ${0} and <= ${length}`,
      value
    );
  }
  const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
  function base64clean(str) {
    str = str.split("=")[0];
    str = str.trim().replace(INVALID_BASE64_RE, "");
    if (str.length < 2) return "";
    while (str.length % 4 !== 0) {
      str = str + "=";
    }
    return str;
  }
  function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for (let i = 0; i < length; ++i) {
      codePoint = string.charCodeAt(i);
      if (codePoint > 55295 && codePoint < 57344) {
        if (!leadSurrogate) {
          if (codePoint > 56319) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            continue;
          } else if (i + 1 === length) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            continue;
          }
          leadSurrogate = codePoint;
          continue;
        }
        if (codePoint < 56320) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
          leadSurrogate = codePoint;
          continue;
        }
        codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
      } else if (leadSurrogate) {
        if ((units -= 3) > -1) bytes.push(239, 191, 189);
      }
      leadSurrogate = null;
      if (codePoint < 128) {
        if ((units -= 1) < 0) break;
        bytes.push(codePoint);
      } else if (codePoint < 2048) {
        if ((units -= 2) < 0) break;
        bytes.push(
          codePoint >> 6 | 192,
          codePoint & 63 | 128
        );
      } else if (codePoint < 65536) {
        if ((units -= 3) < 0) break;
        bytes.push(
          codePoint >> 12 | 224,
          codePoint >> 6 & 63 | 128,
          codePoint & 63 | 128
        );
      } else if (codePoint < 1114112) {
        if ((units -= 4) < 0) break;
        bytes.push(
          codePoint >> 18 | 240,
          codePoint >> 12 & 63 | 128,
          codePoint >> 6 & 63 | 128,
          codePoint & 63 | 128
        );
      } else {
        throw new Error("Invalid code point");
      }
    }
    return bytes;
  }
  function asciiToBytes(str) {
    const byteArray = [];
    for (let i = 0; i < str.length; ++i) {
      byteArray.push(str.charCodeAt(i) & 255);
    }
    return byteArray;
  }
  function utf16leToBytes(str, units) {
    let c2, hi, lo;
    const byteArray = [];
    for (let i = 0; i < str.length; ++i) {
      if ((units -= 2) < 0) break;
      c2 = str.charCodeAt(i);
      hi = c2 >> 8;
      lo = c2 % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }
    return byteArray;
  }
  function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
  }
  function blitBuffer(src, dst, offset2, length) {
    let i;
    for (i = 0; i < length; ++i) {
      if (i + offset2 >= dst.length || i >= src.length) break;
      dst[i + offset2] = src[i];
    }
    return i;
  }
  function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
  }
  function numberIsNaN(obj) {
    return obj !== obj;
  }
  const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for (let i = 0; i < 16; ++i) {
      const i16 = i * 16;
      for (let j = 0; j < 16; ++j) {
        table[i16 + j] = alphabet[i] + alphabet[j];
      }
    }
    return table;
  }();
  function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
  }
  function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
  }
})(buffer);
const Buffer = buffer.Buffer;
function AxiosError$1(message, code2, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = "AxiosError";
  code2 && (this.code = code2);
  config && (this.config = config);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}
utils$1.inherits(AxiosError$1, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const prototype$1 = AxiosError$1.prototype;
const descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((code2) => {
  descriptors[code2] = { value: code2 };
});
Object.defineProperties(AxiosError$1, descriptors);
Object.defineProperty(prototype$1, "isAxiosError", { value: true });
AxiosError$1.from = (error, code2, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);
  utils$1.toFlatObject(error, axiosError, function filter2(obj) {
    return obj !== Error.prototype;
  }, (prop) => {
    return prop !== "isAxiosError";
  });
  const msg = error && error.message ? error.message : "Error";
  const errCode = code2 == null && error ? error.code : code2;
  AxiosError$1.call(axiosError, msg, errCode, config, request, response);
  if (error && axiosError.cause == null) {
    Object.defineProperty(axiosError, "cause", { value: error, configurable: true });
  }
  axiosError.name = error && error.name || "Error";
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
const httpAdapter = null;
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}
function removeBrackets(key) {
  return utils$1.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    token = removeBrackets(token);
    return !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}
const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData$1(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new FormData();
  options = utils$1.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    return !utils$1.isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
  if (!utils$1.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null) return "";
    if (utils$1.isDate(value)) {
      return value.toISOString();
    }
    if (utils$1.isBoolean(value)) {
      return value.toString();
    }
    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError$1("Blob is not supported. Use a Buffer instead.");
    }
    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === "object") {
      if (utils$1.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, "[]")) && (arr = utils$1.toArray(value))) {
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (utils$1.isUndefined(value)) return;
    if (stack.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value);
    utils$1.forEach(value, function each(el, key) {
      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
        formData,
        el,
        utils$1.isString(key) ? key.trim() : key,
        path,
        exposedHelpers
      );
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils$1.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
}
function encode$1(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData$1(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode;
  if (utils$1.isFunction(options)) {
    options = {
      serialize: options
    };
  }
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h2) {
      if (h2 !== null) {
        fn(h2);
      }
    });
  }
}
const transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
const URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
const FormData$1 = typeof FormData !== "undefined" ? FormData : null;
const Blob$1 = typeof Blob !== "undefined" ? Blob : null;
const platform$2 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
const hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
const _navigator = typeof navigator === "object" && navigator || void 0;
const hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
const hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
const origin = hasBrowserEnv && window.location.href || "http://localhost";
const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv,
  hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv,
  navigator: _navigator,
  origin
}, Symbol.toStringTag, { value: "Module" }));
const platform$1 = {
  ...utils,
  ...platform$2
};
function toURLEncodedForm(data, options) {
  return toFormData$1(data, new platform$1.classes.URLSearchParams(), {
    visitor: function(value, key, path, helpers) {
      if (platform$1.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    },
    ...options
  });
}
function parsePropPath(name) {
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === "[]" ? "" : match[1] || match[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    if (name === "__proto__") return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils$1.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};
    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
  transitional: transitionalDefaults,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || "";
    const hasJSONContentType = contentType.indexOf("application/json") > -1;
    const isObjectPayload = utils$1.isObject(data);
    if (isObjectPayload && utils$1.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData2 = utils$1.isFormData(data);
    if (isFormData2) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }
    if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data) || utils$1.isReadableStream(data)) {
      return data;
    }
    if (utils$1.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$1.isURLSearchParams(data)) {
      headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
      return data.toString();
    }
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList2 = utils$1.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        const _FormData = this.env && this.env.FormData;
        return toFormData$1(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType("application/json", false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional2 = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    const JSONRequested = this.responseType === "json";
    if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
      return data;
    }
    if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data, this.parseReviver);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform$1.classes.FormData,
    Blob: platform$1.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
utils$1.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
  defaults.headers[method] = {};
});
const ignoreDuplicateOf = utils$1.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
const parseHeaders = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
    i = line.indexOf(":");
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === "set-cookie") {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    }
  });
  return parsed;
};
const $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils$1.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils$1.isString(value)) return;
  if (utils$1.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils$1.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w2, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
let AxiosHeaders$1 = class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key = utils$1.findKey(self2, lHeader);
      if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils$1.isObject(header) && utils$1.isIterable(header)) {
      let obj = {}, dest, key;
      for (const entry of header) {
        if (!utils$1.isArray(entry)) {
          throw TypeError("Object iterator must return a key-value pair");
        }
        obj[key = entry[0]] = (dest = obj[key]) ? utils$1.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]] : entry[1];
      }
      setHeaders(obj, valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils$1.findKey(self2, _header);
        if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils$1.forEach(this, (value, header) => {
      const key = utils$1.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils$1.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed2 = new this(first);
    targets.forEach((target) => computed2.set(target));
    return computed2;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype2 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype2, _header);
        accessors[lHeader] = true;
      }
    }
    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
};
AxiosHeaders$1.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils$1.reduceDescriptors(AxiosHeaders$1.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils$1.freezeMethods(AxiosHeaders$1);
function transformData(fns, response) {
  const config = this || defaults;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;
  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}
function isCancel$1(value) {
  return !!(value && value.__CANCEL__);
}
function CanceledError$1(message, config, request) {
  AxiosError$1.call(this, message == null ? "canceled" : message, AxiosError$1.ERR_CANCELED, config, request);
  this.name = "CanceledError";
}
utils$1.inherits(CanceledError$1, AxiosError$1, {
  __CANCEL__: true
});
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError$1(
      "Request failed with status code " + response.status,
      [AxiosError$1.ERR_BAD_REQUEST, AxiosError$1.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || "";
}
function speedometer(samplesCount, min2) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min2 = min2 !== void 0 ? min2 : 1e3;
  return function push(chunkLength) {
    const now2 = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now2;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now2;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now2 - firstSampleTS < min2) {
      return;
    }
    const passed = startedAt && now2 - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1e3 / freq;
  let lastArgs;
  let timer;
  const invoke = (args, now2 = Date.now()) => {
    timestamp = now2;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn(...args);
  };
  const throttled = (...args) => {
    const now2 = Date.now();
    const passed = now2 - timestamp;
    if (passed >= threshold) {
      invoke(args, now2);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };
  const flush = () => lastArgs && invoke(lastArgs);
  return [throttled, flush];
}
const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);
  return throttle((e) => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : void 0;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? "download" : "upload"]: true
    };
    listener(data);
  }, freq);
};
const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;
  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
};
const asyncDecorator = (fn) => (...args) => utils$1.asap(() => fn(...args));
const isURLSameOrigin = platform$1.hasStandardBrowserEnv ? /* @__PURE__ */ ((origin2, isMSIE) => (url) => {
  url = new URL(url, platform$1.origin);
  return origin2.protocol === url.protocol && origin2.host === url.host && (isMSIE || origin2.port === url.port);
})(
  new URL(platform$1.origin),
  platform$1.navigator && /(msie|trident)/i.test(platform$1.navigator.userAgent)
) : () => true;
const cookies = platform$1.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + "=" + encodeURIComponent(value)];
      utils$1.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
      utils$1.isString(path) && cookie.push("path=" + path);
      utils$1.isString(domain) && cookie.push("domain=" + domain);
      secure === true && cookie.push("secure");
      document.cookie = cookie.join("; ");
    },
    read(name) {
      const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
  let isRelativeUrl = !isAbsoluteURL(requestedURL);
  if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}
const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? { ...thing } : thing;
function mergeConfig$1(config1, config2) {
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, prop, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({ caseless }, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a, b2, prop, caseless) {
    if (!utils$1.isUndefined(b2)) {
      return getMergedValue(a, b2, prop, caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(void 0, a, prop, caseless);
    }
  }
  function valueFromConfig2(a, b2) {
    if (!utils$1.isUndefined(b2)) {
      return getMergedValue(void 0, b2);
    }
  }
  function defaultToConfig2(a, b2) {
    if (!utils$1.isUndefined(b2)) {
      return getMergedValue(void 0, b2);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(void 0, a);
    }
  }
  function mergeDirectKeys(a, b2, prop) {
    if (prop in config2) {
      return getMergedValue(a, b2);
    } else if (prop in config1) {
      return getMergedValue(void 0, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b2, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b2), prop, true)
  };
  utils$1.forEach(Object.keys({ ...config1, ...config2 }), function computeConfigValue(prop) {
    const merge2 = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge2(config1[prop], config2[prop], prop);
    utils$1.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}
const resolveConfig = (config) => {
  const newConfig = mergeConfig$1({}, config);
  let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
  newConfig.headers = headers = AxiosHeaders$1.from(headers);
  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);
  if (auth) {
    headers.set(
      "Authorization",
      "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : ""))
    );
  }
  if (utils$1.isFormData(data)) {
    if (platform$1.hasStandardBrowserEnv || platform$1.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(void 0);
    } else if (utils$1.isFunction(data.getHeaders)) {
      const formHeaders = data.getHeaders();
      const allowedHeaders = ["content-type", "content-length"];
      Object.entries(formHeaders).forEach(([key, val]) => {
        if (allowedHeaders.includes(key.toLowerCase())) {
          headers.set(key, val);
        }
      });
    }
  }
  if (platform$1.hasStandardBrowserEnv) {
    withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
    if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(newConfig.url)) {
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }
  return newConfig;
};
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
const xhrAdapter = isXHRAdapterSupported && function(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig(config);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
    let { responseType, onUploadProgress, onDownloadProgress } = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;
    function done() {
      flushUpload && flushUpload();
      flushDownload && flushDownload();
      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
      _config.signal && _config.signal.removeEventListener("abort", onCanceled);
    }
    let request = new XMLHttpRequest();
    request.open(_config.method.toUpperCase(), _config.url, true);
    request.timeout = _config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders$1.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError$1("Request aborted", AxiosError$1.ECONNABORTED, config, request));
      request = null;
    };
    request.onerror = function handleError(event) {
      const msg = event && event.message ? event.message : "Network Error";
      const err = new AxiosError$1(msg, AxiosError$1.ERR_NETWORK, config, request);
      err.event = event || null;
      reject(err);
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = _config.transitional || transitionalDefaults;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new AxiosError$1(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError$1.ETIMEDOUT : AxiosError$1.ECONNABORTED,
        config,
        request
      ));
      request = null;
    };
    requestData === void 0 && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request) {
      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }
    if (!utils$1.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = _config.responseType;
    }
    if (onDownloadProgress) {
      [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
      request.addEventListener("progress", downloadThrottled);
    }
    if (onUploadProgress && request.upload) {
      [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
      request.upload.addEventListener("progress", uploadThrottled);
      request.upload.addEventListener("loadend", flushUpload);
    }
    if (_config.cancelToken || _config.signal) {
      onCanceled = (cancel) => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError$1(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(_config.url);
    if (protocol && platform$1.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError$1("Unsupported protocol " + protocol + ":", AxiosError$1.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};
const composeSignals = (signals, timeout) => {
  const { length } = signals = signals ? signals.filter(Boolean) : [];
  if (timeout || length) {
    let controller = new AbortController();
    let aborted;
    const onabort = function(reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof AxiosError$1 ? err : new CanceledError$1(err instanceof Error ? err.message : err));
      }
    };
    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new AxiosError$1(`timeout ${timeout} of ms exceeded`, AxiosError$1.ETIMEDOUT));
    }, timeout);
    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach((signal2) => {
          signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
        });
        signals = null;
      }
    };
    signals.forEach((signal2) => signal2.addEventListener("abort", onabort));
    const { signal } = controller;
    signal.unsubscribe = () => utils$1.asap(unsubscribe);
    return signal;
  }
};
const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;
  if (len < chunkSize) {
    yield chunk;
    return;
  }
  let pos = 0;
  let end;
  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};
const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};
const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }
  const reader = stream.getReader();
  try {
    for (; ; ) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};
const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator2 = readBytes(stream, chunkSize);
  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };
  return new ReadableStream({
    async pull(controller) {
      try {
        const { done: done2, value } = await iterator2.next();
        if (done2) {
          _onFinish();
          controller.close();
          return;
        }
        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator2.return();
    }
  }, {
    highWaterMark: 2
  });
};
const DEFAULT_CHUNK_SIZE = 64 * 1024;
const { isFunction } = utils$1;
const globalFetchAPI = (({ Request, Response }) => ({
  Request,
  Response
}))(utils$1.global);
const {
  ReadableStream: ReadableStream$1,
  TextEncoder
} = utils$1.global;
const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};
const factory = (env) => {
  env = utils$1.merge.call({
    skipUndefined: true
  }, globalFetchAPI, env);
  const { fetch: envFetch, Request, Response } = env;
  const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === "function";
  const isRequestSupported = isFunction(Request);
  const isResponseSupported = isFunction(Response);
  if (!isFetchSupported) {
    return false;
  }
  const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream$1);
  const encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Request(str).arrayBuffer()));
  const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(() => {
    let duplexAccessed = false;
    const hasContentType = new Request(platform$1.origin, {
      body: new ReadableStream$1(),
      method: "POST",
      get duplex() {
        duplexAccessed = true;
        return "half";
      }
    }).headers.has("Content-Type");
    return duplexAccessed && !hasContentType;
  });
  const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(() => utils$1.isReadableStream(new Response("").body));
  const resolvers = {
    stream: supportsResponseStream && ((res) => res.body)
  };
  isFetchSupported && (() => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
      !resolvers[type] && (resolvers[type] = (res, config) => {
        let method = res && res[type];
        if (method) {
          return method.call(res);
        }
        throw new AxiosError$1(`Response type '${type}' is not supported`, AxiosError$1.ERR_NOT_SUPPORT, config);
      });
    });
  })();
  const getBodyLength = async (body) => {
    if (body == null) {
      return 0;
    }
    if (utils$1.isBlob(body)) {
      return body.size;
    }
    if (utils$1.isSpecCompliantForm(body)) {
      const _request = new Request(platform$1.origin, {
        method: "POST",
        body
      });
      return (await _request.arrayBuffer()).byteLength;
    }
    if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
      return body.byteLength;
    }
    if (utils$1.isURLSearchParams(body)) {
      body = body + "";
    }
    if (utils$1.isString(body)) {
      return (await encodeText(body)).byteLength;
    }
  };
  const resolveBodyLength = async (headers, body) => {
    const length = utils$1.toFiniteNumber(headers.getContentLength());
    return length == null ? getBodyLength(body) : length;
  };
  return async (config) => {
    let {
      url,
      method,
      data,
      signal,
      cancelToken,
      timeout,
      onDownloadProgress,
      onUploadProgress,
      responseType,
      headers,
      withCredentials = "same-origin",
      fetchOptions
    } = resolveConfig(config);
    let _fetch = envFetch || fetch;
    responseType = responseType ? (responseType + "").toLowerCase() : "text";
    let composedSignal = composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
    let request = null;
    const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
    });
    let requestContentLength;
    try {
      if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
        let _request = new Request(url, {
          method: "POST",
          body: data,
          duplex: "half"
        });
        let contentTypeHeader;
        if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
          headers.setContentType(contentTypeHeader);
        }
        if (_request.body) {
          const [onProgress, flush] = progressEventDecorator(
            requestContentLength,
            progressEventReducer(asyncDecorator(onUploadProgress))
          );
          data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
        }
      }
      if (!utils$1.isString(withCredentials)) {
        withCredentials = withCredentials ? "include" : "omit";
      }
      const isCredentialsSupported = isRequestSupported && "credentials" in Request.prototype;
      const resolvedOptions = {
        ...fetchOptions,
        signal: composedSignal,
        method: method.toUpperCase(),
        headers: headers.normalize().toJSON(),
        body: data,
        duplex: "half",
        credentials: isCredentialsSupported ? withCredentials : void 0
      };
      request = isRequestSupported && new Request(url, resolvedOptions);
      let response = await (isRequestSupported ? _fetch(request, fetchOptions) : _fetch(url, resolvedOptions));
      const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
      if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
        const options = {};
        ["status", "statusText", "headers"].forEach((prop) => {
          options[prop] = response[prop];
        });
        const responseContentLength = utils$1.toFiniteNumber(response.headers.get("content-length"));
        const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
          responseContentLength,
          progressEventReducer(asyncDecorator(onDownloadProgress), true)
        ) || [];
        response = new Response(
          trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
            flush && flush();
            unsubscribe && unsubscribe();
          }),
          options
        );
      }
      responseType = responseType || "text";
      let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || "text"](response, config);
      !isStreamResponse && unsubscribe && unsubscribe();
      return await new Promise((resolve, reject) => {
        settle(resolve, reject, {
          data: responseData,
          headers: AxiosHeaders$1.from(response.headers),
          status: response.status,
          statusText: response.statusText,
          config,
          request
        });
      });
    } catch (err) {
      unsubscribe && unsubscribe();
      if (err && err.name === "TypeError" && /Load failed|fetch/i.test(err.message)) {
        throw Object.assign(
          new AxiosError$1("Network Error", AxiosError$1.ERR_NETWORK, config, request),
          {
            cause: err.cause || err
          }
        );
      }
      throw AxiosError$1.from(err, err && err.code, config, request);
    }
  };
};
const seedCache = /* @__PURE__ */ new Map();
const getFetch = (config) => {
  let env = config ? config.env : {};
  const { fetch: fetch2, Request, Response } = env;
  const seeds = [
    Request,
    Response,
    fetch2
  ];
  let len = seeds.length, i = len, seed, target, map = seedCache;
  while (i--) {
    seed = seeds[i];
    target = map.get(seed);
    target === void 0 && map.set(seed, target = i ? /* @__PURE__ */ new Map() : factory(env));
    map = target;
  }
  return target;
};
getFetch();
const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: {
    get: getFetch
  }
};
utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch (e) {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
const renderReason = (reason) => `- ${reason}`;
const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;
const adapters = {
  getAdapter: (adapters2, config) => {
    adapters2 = utils$1.isArray(adapters2) ? adapters2 : [adapters2];
    const { length } = adapters2;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters2[i];
      let id;
      adapter = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter === void 0) {
          throw new AxiosError$1(`Unknown adapter '${id}'`);
        }
      }
      if (adapter && (utils$1.isFunction(adapter) || (adapter = adapter.get(config)))) {
        break;
      }
      rejectedReasons[id || "#" + i] = adapter;
    }
    if (!adapter) {
      const reasons = Object.entries(rejectedReasons).map(
        ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
      );
      let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
      throw new AxiosError$1(
        `There is no suitable adapter to dispatch the request ` + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return adapter;
  },
  adapters: knownAdapters
};
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError$1(null, config);
  }
}
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders$1.from(config.headers);
  config.data = transformData.call(
    config,
    config.transformRequest
  );
  if (["post", "put", "patch"].indexOf(config.method) !== -1) {
    config.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters.getAdapter(config.adapter || defaults.adapter, config);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );
    response.headers = AxiosHeaders$1.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel$1(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}
const VERSION$1 = "1.12.2";
const validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
const deprecatedWarnings = {};
validators$1.transitional = function transitional(validator2, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION$1 + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator2 === false) {
      throw new AxiosError$1(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError$1.ERR_DEPRECATED
      );
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version + " and will be removed in the near future"
        )
      );
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
validators$1.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError$1("options must be an object", AxiosError$1.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator2 = schema[opt];
    if (validator2) {
      const value = options[opt];
      const result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new AxiosError$1("option " + opt + " must be " + result, AxiosError$1.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError$1("Unknown option " + opt, AxiosError$1.ERR_BAD_OPTION);
    }
  }
}
const validator = {
  assertOptions,
  validators: validators$1
};
const validators = validator.validators;
let Axios$1 = class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig || {};
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};
        Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
        try {
          if (!err.stack) {
            err.stack = stack;
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
            err.stack += "\n" + stack;
          }
        } catch (e) {
        }
      }
      throw err;
    }
  }
  _request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig$1(this.defaults, config);
    const { transitional: transitional2, paramsSerializer, headers } = config;
    if (transitional2 !== void 0) {
      validator.assertOptions(transitional2, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }
    if (config.allowAbsoluteUrls !== void 0) ;
    else if (this.defaults.allowAbsoluteUrls !== void 0) {
      config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
    } else {
      config.allowAbsoluteUrls = true;
    }
    validator.assertOptions(config, {
      baseUrl: validators.spelling("baseURL"),
      withXsrfToken: validators.spelling("withXSRFToken")
    }, true);
    config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders = headers && utils$1.merge(
      headers.common,
      headers[config.method]
    );
    headers && utils$1.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    );
    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), void 0];
      chain.unshift(...requestInterceptorChain);
      chain.push(...responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig$1(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};
utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  Axios$1.prototype[method] = function(url, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig$1(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url,
        data
      }));
    };
  }
  Axios$1.prototype[method] = generateHTTPMethod();
  Axios$1.prototype[method + "Form"] = generateHTTPMethod(true);
});
let CancelToken$1 = class CancelToken {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners) return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError$1(message, config, request);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  toAbortSignal() {
    const controller = new AbortController();
    const abort = (err) => {
      controller.abort(err);
    };
    this.subscribe(abort);
    controller.signal.unsubscribe = () => this.unsubscribe(abort);
    return controller.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c2) {
      cancel = c2;
    });
    return {
      token,
      cancel
    };
  }
};
function spread$1(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}
function isAxiosError$1(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
}
const HttpStatusCode$1 = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode$1).forEach(([key, value]) => {
  HttpStatusCode$1[value] = key;
});
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);
  utils$1.extend(instance, Axios$1.prototype, context, { allOwnKeys: true });
  utils$1.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig$1(defaultConfig, instanceConfig));
  };
  return instance;
}
const axios = createInstance(defaults);
axios.Axios = Axios$1;
axios.CanceledError = CanceledError$1;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel$1;
axios.VERSION = VERSION$1;
axios.toFormData = toFormData$1;
axios.AxiosError = AxiosError$1;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread$1;
axios.isAxiosError = isAxiosError$1;
axios.mergeConfig = mergeConfig$1;
axios.AxiosHeaders = AxiosHeaders$1;
axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters.getAdapter;
axios.HttpStatusCode = HttpStatusCode$1;
axios.default = axios;
const {
  Axios: Axios2,
  AxiosError,
  CanceledError,
  isCancel,
  CancelToken: CancelToken2,
  VERSION,
  all: all2,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders: AxiosHeaders2,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig
} = axios;
const RETRY_KEY = Symbol("csrf-retry");
const onError$2 = (axios2) => async (error) => {
  var _a2;
  const { config, response, request } = error;
  const responseURL = request == null ? void 0 : request.responseURL;
  const status = response == null ? void 0 : response.status;
  if (status === 412 && ((_a2 = response == null ? void 0 : response.data) == null ? void 0 : _a2.message) === "CSRF check failed" && config[RETRY_KEY] === void 0) {
    console.warn("Request to ".concat(responseURL, " failed because of a CSRF mismatch. Fetching a new token"));
    const { data: { token } } = await axios2.get(_$1("/csrftoken"));
    console.debug("New request token ".concat(token, " fetched"));
    axios2.defaults.headers.requesttoken = token;
    return axios2({
      ...config,
      headers: {
        ...config.headers,
        requesttoken: token
      },
      [RETRY_KEY]: true
    });
  }
  return Promise.reject(error);
};
const RETRY_DELAY_KEY = Symbol("retryDelay");
const onError$1 = (axios2) => async (error) => {
  var _a2;
  const { config, response, request } = error;
  const responseURL = request == null ? void 0 : request.responseURL;
  const status = response == null ? void 0 : response.status;
  const headers = response == null ? void 0 : response.headers;
  if (status === 503 && headers["x-nextcloud-maintenance-mode"] === "1" && config.retryIfMaintenanceMode && (!config[RETRY_DELAY_KEY] || config[RETRY_DELAY_KEY] <= 32)) {
    const retryDelay = ((_a2 = config[RETRY_DELAY_KEY]) != null ? _a2 : 1) * 2;
    console.warn("Request to ".concat(responseURL, " failed because of maintenance mode. Retrying in ").concat(retryDelay, "s"));
    await new Promise((resolve) => {
      setTimeout(resolve, retryDelay * 1e3);
    });
    return axios2({
      ...config,
      [RETRY_DELAY_KEY]: retryDelay
    });
  }
  return Promise.reject(error);
};
const onError = async (error) => {
  var _a2;
  const { config, response, request } = error;
  const responseURL = request == null ? void 0 : request.responseURL;
  const status = response == null ? void 0 : response.status;
  if (status === 401 && ((_a2 = response == null ? void 0 : response.data) == null ? void 0 : _a2.message) === "Current user is not logged in" && config.reloadExpiredSession && (window == null ? void 0 : window.location)) {
    console.error("Request to ".concat(responseURL, " failed because the user session expired. Reloading the page …"));
    window.location.reload();
  }
  return Promise.reject(error);
};
var _a;
const client = axios.create({
  headers: {
    requesttoken: (_a = getRequestToken()) != null ? _a : "",
    "X-Requested-With": "XMLHttpRequest"
  }
});
const cancelableClient = Object.assign(client, {
  CancelToken: axios.CancelToken,
  isCancel: axios.isCancel
});
cancelableClient.interceptors.response.use((r) => r, onError$2(cancelableClient));
cancelableClient.interceptors.response.use((r) => r, onError$1(cancelableClient));
cancelableClient.interceptors.response.use((r) => r, onError);
onRequestTokenUpdate((token) => {
  client.defaults.headers.requesttoken = token;
});
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
const localProvidedStateMap = /* @__PURE__ */ new WeakMap();
const injectLocal = (...args) => {
  var _a2;
  const key = args[0];
  const instance = (_a2 = getCurrentInstance()) == null ? void 0 : _a2.proxy;
  if (instance == null && !hasInjectionContext())
    throw new Error("injectLocal must be called in setup");
  if (instance && localProvidedStateMap.has(instance) && key in localProvidedStateMap.get(instance))
    return localProvidedStateMap.get(instance)[key];
  return inject(...args);
};
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const notNullish = (val) => val != null;
const toString2 = Object.prototype.toString;
const isObject = (val) => toString2.call(val) === "[object Object]";
const noop = () => {
};
const isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
  var _a2, _b;
  return isClient && ((_a2 = window == null ? void 0 : window.navigator) == null ? void 0 : _a2.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r = args[0];
  return typeof r === "function" ? readonly(customRef(() => ({ get: r, set: noop }))) : ref(r);
}
function createFilterWrapper(filter2, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter2(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  let lastInvoker;
  const filter2 = (invoke) => {
    const duration = toValue$1(ms);
    const maxDuration = toValue$1(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      lastInvoker = invoke;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(lastInvoker());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke());
      }, duration);
    });
  };
  return filter2;
}
function throttleFilter(...args) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  let lastRejector = noop;
  let lastValue;
  let ms;
  let trailing;
  let leading;
  let rejectOnCancel;
  if (!isRef(args[0]) && typeof args[0] === "object")
    ({ delay: ms, trailing = true, leading = true, rejectOnCancel = false } = args[0]);
  else
    [ms, trailing = true, leading = true, rejectOnCancel = false] = args;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
      lastRejector();
      lastRejector = noop;
    }
  };
  const filter2 = (_invoke) => {
    const duration = toValue$1(ms);
    const elapsed = Date.now() - lastExec;
    const invoke = () => {
      return lastValue = _invoke();
    };
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke();
    } else if (trailing) {
      lastValue = new Promise((resolve, reject) => {
        lastRejector = rejectOnCancel ? reject : resolve;
        timer = setTimeout(() => {
          lastExec = Date.now();
          isLeading = true;
          resolve(invoke());
          clear();
        }, Math.max(0, duration - elapsed));
      });
    }
    if (!leading && !timer)
      timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
    return lastValue;
  };
  return filter2;
}
function pxValue(px) {
  return px.endsWith("rem") ? Number.parseFloat(px) * 16 : Number.parseFloat(px);
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function getLifeCycleTarget(target) {
  return getCurrentInstance();
}
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(
    debounceFilter(ms, options),
    fn
  );
}
function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
  return createFilterWrapper(
    throttleFilter(ms, trailing, leading, rejectOnCancel),
    fn
  );
}
const toValue = toValue$1;
function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    onMounted(fn, target);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function tryOnUnmounted(fn, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    onUnmounted(fn, target);
}
function watchImmediate(source, cb, options) {
  return watch(
    source,
    cb,
    {
      ...options,
      immediate: true
    }
  );
}
function watchOnce(source, cb, options) {
  return watch(
    source,
    cb,
    {
      ...options,
      once: true
    }
  );
}
const defaultWindow = isClient ? window : void 0;
function unrefElement(elRef) {
  var _a2;
  const plain = toValue$1(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
function useEventListener(...args) {
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register2 = (el, event, listener, options) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test2 = toArray(toValue$1(args[0])).filter((e) => e != null);
    return test2.every((e) => typeof e !== "string") ? test2 : void 0;
  });
  const stopWatch = watchImmediate(
    () => {
      var _a2, _b;
      return [
        (_b = (_a2 = firstParamTargets.value) == null ? void 0 : _a2.map((e) => unrefElement(e))) != null ? _b : [defaultWindow].filter((e) => e != null),
        toArray(toValue$1(firstParamTargets.value ? args[1] : args[0])),
        toArray(unref(firstParamTargets.value ? args[2] : args[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        toValue$1(firstParamTargets.value ? args[3] : args[2])
      ];
    },
    ([raw_targets, raw_events, raw_listeners, raw_options]) => {
      cleanup();
      if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length))
        return;
      const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
      cleanups.push(
        ...raw_targets.flatMap(
          (el) => raw_events.flatMap(
            (event) => raw_listeners.map((listener) => register2(el, event, listener, optionsClone))
          )
        )
      );
    },
    { flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(cleanup);
  return stop;
}
let _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false, controls = false } = options;
  if (!window2) {
    return controls ? { stop: noop, cancel: noop, trigger: noop } : noop;
  }
  if (isIOS && !_iOSWorkaround) {
    _iOSWorkaround = true;
    const listenerOptions = { passive: true };
    Array.from(window2.document.body.children).forEach((el) => el.addEventListener("click", noop, listenerOptions));
    window2.document.documentElement.addEventListener("click", noop, listenerOptions);
  }
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return toValue$1(ignore).some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  function hasMultipleRoots(target2) {
    const vm = toValue$1(target2);
    return vm && vm.$.subTree.shapeFlag === 16;
  }
  function checkMultipleRoots(target2, event) {
    const vm = toValue$1(target2);
    const children = vm.$.subTree && vm.$.subTree.children;
    if (children == null || !Array.isArray(children))
      return false;
    return children.some((child) => child.el === event.target || event.composedPath().includes(child.el));
  }
  const listener = (event) => {
    const el = unrefElement(target);
    if (event.target == null)
      return;
    if (!(el instanceof Element) && hasMultipleRoots(target) && checkMultipleRoots(target, event))
      return;
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if ("detail" in event && event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  let isProcessingClick = false;
  const cleanup = [
    useEventListener(window2, "click", (event) => {
      if (!isProcessingClick) {
        isProcessingClick = true;
        setTimeout(() => {
          isProcessingClick = false;
        }, 0);
        listener(event);
      }
    }, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      setTimeout(() => {
        var _a2;
        const el = unrefElement(target);
        if (((_a2 = window2.document.activeElement) == null ? void 0 : _a2.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement))) {
          handler(event);
        }
      }, 0);
    }, { passive: true })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  if (controls) {
    return {
      stop,
      cancel: () => {
        shouldListen = false;
      },
      trigger: (event) => {
        shouldListen = true;
        listener(event);
        shouldListen = false;
      }
    };
  }
  return stop;
}
function useMounted() {
  const isMounted = shallowRef(false);
  const instance = getCurrentInstance();
  if (instance) {
    onMounted(() => {
      isMounted.value = true;
    }, instance);
  }
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMutationObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow, ...mutationOptions } = options;
  let observer;
  const isSupported = useSupported(() => window2 && "MutationObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = computed(() => {
    const value = toValue$1(target);
    const items = toArray(value).map(unrefElement).filter(notNullish);
    return new Set(items);
  });
  const stopWatch = watch(
    () => targets.value,
    (targets2) => {
      cleanup();
      if (isSupported.value && targets2.size) {
        observer = new MutationObserver(callback);
        targets2.forEach((el) => observer.observe(el, mutationOptions));
      }
    },
    { immediate: true, flush: "post" }
  );
  const takeRecords = () => {
    return observer == null ? void 0 : observer.takeRecords();
  };
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop,
    takeRecords
  };
}
const ssrWidthSymbol = Symbol("vueuse-ssr-width");
function useSSRWidth() {
  const ssrWidth = hasInjectionContext() ? injectLocal(ssrWidthSymbol, null) : null;
  return typeof ssrWidth === "number" ? ssrWidth : void 0;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow, ssrWidth = useSSRWidth() } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  const ssrSupport = shallowRef(typeof ssrWidth === "number");
  const mediaQuery = shallowRef();
  const matches2 = shallowRef(false);
  const handler = (event) => {
    matches2.value = event.matches;
  };
  watchEffect(() => {
    if (ssrSupport.value) {
      ssrSupport.value = !isSupported.value;
      const queryStrings = toValue$1(query).split(",");
      matches2.value = queryStrings.some((queryString) => {
        const not = queryString.includes("not all");
        const minWidth = queryString.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        const maxWidth = queryString.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let res = Boolean(minWidth || maxWidth);
        if (minWidth && res) {
          res = ssrWidth >= pxValue(minWidth[1]);
        }
        if (maxWidth && res) {
          res = ssrWidth <= pxValue(maxWidth[1]);
        }
        return not ? !res : res;
      });
      return;
    }
    if (!isSupported.value)
      return;
    mediaQuery.value = window2.matchMedia(toValue$1(query));
    matches2.value = mediaQuery.value.matches;
  });
  useEventListener(mediaQuery, "change", handler, { passive: true });
  return computed(() => matches2.value);
}
function useResizeObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow, ...observerOptions } = options;
  let observer;
  const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = computed(() => {
    const _targets = toValue$1(target);
    return Array.isArray(_targets) ? _targets.map((el) => unrefElement(el)) : [unrefElement(_targets)];
  });
  const stopWatch = watch(
    targets,
    (els) => {
      cleanup();
      if (isSupported.value && window2) {
        observer = new ResizeObserver(callback);
        for (const _el of els) {
          if (_el)
            observer.observe(_el, observerOptions);
        }
      }
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
function useElementBounding(target, options = {}) {
  const {
    reset = true,
    windowResize = true,
    windowScroll = true,
    immediate = true,
    updateTiming = "sync"
  } = options;
  const height = shallowRef(0);
  const bottom = shallowRef(0);
  const left = shallowRef(0);
  const right = shallowRef(0);
  const top = shallowRef(0);
  const width = shallowRef(0);
  const x = shallowRef(0);
  const y2 = shallowRef(0);
  function recalculate() {
    const el = unrefElement(target);
    if (!el) {
      if (reset) {
        height.value = 0;
        bottom.value = 0;
        left.value = 0;
        right.value = 0;
        top.value = 0;
        width.value = 0;
        x.value = 0;
        y2.value = 0;
      }
      return;
    }
    const rect = el.getBoundingClientRect();
    height.value = rect.height;
    bottom.value = rect.bottom;
    left.value = rect.left;
    right.value = rect.right;
    top.value = rect.top;
    width.value = rect.width;
    x.value = rect.x;
    y2.value = rect.y;
  }
  function update() {
    if (updateTiming === "sync")
      recalculate();
    else if (updateTiming === "next-frame")
      requestAnimationFrame(() => recalculate());
  }
  useResizeObserver(target, update);
  watch(() => unrefElement(target), (ele) => !ele && update());
  useMutationObserver(target, update, {
    attributeFilter: ["style", "class"]
  });
  if (windowScroll)
    useEventListener("scroll", update, { capture: true, passive: true });
  if (windowResize)
    useEventListener("resize", update, { passive: true });
  tryOnMounted(() => {
    if (immediate)
      update();
  });
  return {
    height,
    bottom,
    left,
    right,
    top,
    width,
    x,
    y: y2,
    update
  };
}
function useElementSize(target, initialSize = { width: 0, height: 0 }, options = {}) {
  const { window: window2 = defaultWindow, box = "content-box" } = options;
  const isSVG = computed(() => {
    var _a2, _b;
    return (_b = (_a2 = unrefElement(target)) == null ? void 0 : _a2.namespaceURI) == null ? void 0 : _b.includes("svg");
  });
  const width = shallowRef(initialSize.width);
  const height = shallowRef(initialSize.height);
  const { stop: stop1 } = useResizeObserver(
    target,
    ([entry]) => {
      const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
      if (window2 && isSVG.value) {
        const $elem = unrefElement(target);
        if ($elem) {
          const rect = $elem.getBoundingClientRect();
          width.value = rect.width;
          height.value = rect.height;
        }
      } else {
        if (boxSize) {
          const formatBoxSize = toArray(boxSize);
          width.value = formatBoxSize.reduce((acc, { inlineSize }) => acc + inlineSize, 0);
          height.value = formatBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0);
        } else {
          width.value = entry.contentRect.width;
          height.value = entry.contentRect.height;
        }
      }
    },
    options
  );
  tryOnMounted(() => {
    const ele = unrefElement(target);
    if (ele) {
      width.value = "offsetWidth" in ele ? ele.offsetWidth : initialSize.width;
      height.value = "offsetHeight" in ele ? ele.offsetHeight : initialSize.height;
    }
  });
  const stop2 = watch(
    () => unrefElement(target),
    (ele) => {
      width.value = ele ? initialSize.width : 0;
      height.value = ele ? initialSize.height : 0;
    }
  );
  function stop() {
    stop1();
    stop2();
  }
  return {
    width,
    height,
    stop
  };
}
function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0,
    window: window2 = defaultWindow,
    immediate = true
  } = options;
  const isSupported = useSupported(() => window2 && "IntersectionObserver" in window2);
  const targets = computed(() => {
    const _target = toValue$1(target);
    return toArray(_target).map(unrefElement).filter(notNullish);
  });
  let cleanup = noop;
  const isActive = shallowRef(immediate);
  const stopWatch = isSupported.value ? watch(
    () => [targets.value, unrefElement(root), isActive.value],
    ([targets2, root2]) => {
      cleanup();
      if (!isActive.value)
        return;
      if (!targets2.length)
        return;
      const observer = new IntersectionObserver(
        callback,
        {
          root: unrefElement(root2),
          rootMargin,
          threshold
        }
      );
      targets2.forEach((el) => el && observer.observe(el));
      cleanup = () => {
        observer.disconnect();
        cleanup = noop;
      };
    },
    { immediate, flush: "post" }
  ) : noop;
  const stop = () => {
    cleanup();
    stopWatch();
    isActive.value = false;
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    isActive,
    pause() {
      cleanup();
      isActive.value = false;
    },
    resume() {
      isActive.value = true;
    },
    stop
  };
}
function useElementVisibility(element, options = {}) {
  const {
    window: window2 = defaultWindow,
    scrollTarget,
    threshold = 0,
    rootMargin,
    once = false
  } = options;
  const elementIsVisible = shallowRef(false);
  const { stop } = useIntersectionObserver(
    element,
    (intersectionObserverEntries) => {
      let isIntersecting = elementIsVisible.value;
      let latestTime = 0;
      for (const entry of intersectionObserverEntries) {
        if (entry.time >= latestTime) {
          latestTime = entry.time;
          isIntersecting = entry.isIntersecting;
        }
      }
      elementIsVisible.value = isIntersecting;
      if (once) {
        watchOnce(elementIsVisible, () => {
          stop();
        });
      }
    },
    {
      root: scrollTarget,
      window: window2,
      threshold,
      rootMargin: toValue$1(rootMargin)
    }
  );
  return elementIsVisible;
}
function resolveElement(el) {
  if (typeof Window !== "undefined" && el instanceof Window)
    return el.document.documentElement;
  if (typeof Document !== "undefined" && el instanceof Document)
    return el.documentElement;
  return el;
}
const ARRIVED_STATE_THRESHOLD_PIXELS = 1;
function useScroll(element, options = {}) {
  const {
    throttle: throttle2 = 0,
    idle = 200,
    onStop = noop,
    onScroll = noop,
    offset: offset2 = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions = {
      capture: false,
      passive: true
    },
    behavior = "auto",
    window: window2 = defaultWindow,
    onError: onError2 = (e) => {
      console.error(e);
    }
  } = options;
  const internalX = shallowRef(0);
  const internalY = shallowRef(0);
  const x = computed({
    get() {
      return internalX.value;
    },
    set(x2) {
      scrollTo(x2, void 0);
    }
  });
  const y2 = computed({
    get() {
      return internalY.value;
    },
    set(y22) {
      scrollTo(void 0, y22);
    }
  });
  function scrollTo(_x, _y) {
    var _a2, _b, _c, _d;
    if (!window2)
      return;
    const _element = toValue$1(element);
    if (!_element)
      return;
    (_c = _element instanceof Document ? window2.document.body : _element) == null ? void 0 : _c.scrollTo({
      top: (_a2 = toValue$1(_y)) != null ? _a2 : y2.value,
      left: (_b = toValue$1(_x)) != null ? _b : x.value,
      behavior: toValue$1(behavior)
    });
    const scrollContainer = ((_d = _element == null ? void 0 : _element.document) == null ? void 0 : _d.documentElement) || (_element == null ? void 0 : _element.documentElement) || _element;
    if (x != null)
      internalX.value = scrollContainer.scrollLeft;
    if (y2 != null)
      internalY.value = scrollContainer.scrollTop;
  }
  const isScrolling = shallowRef(false);
  const arrivedState = reactive({
    left: true,
    right: false,
    top: true,
    bottom: false
  });
  const directions = reactive({
    left: false,
    right: false,
    top: false,
    bottom: false
  });
  const onScrollEnd = (e) => {
    if (!isScrolling.value)
      return;
    isScrolling.value = false;
    directions.left = false;
    directions.right = false;
    directions.top = false;
    directions.bottom = false;
    onStop(e);
  };
  const onScrollEndDebounced = useDebounceFn(onScrollEnd, throttle2 + idle);
  const setArrivedState = (target) => {
    var _a2;
    if (!window2)
      return;
    const el = ((_a2 = target == null ? void 0 : target.document) == null ? void 0 : _a2.documentElement) || (target == null ? void 0 : target.documentElement) || unrefElement(target);
    const { display, flexDirection, direction } = getComputedStyle(el);
    const directionMultipler = direction === "rtl" ? -1 : 1;
    const scrollLeft = el.scrollLeft;
    directions.left = scrollLeft < internalX.value;
    directions.right = scrollLeft > internalX.value;
    const left = Math.abs(scrollLeft * directionMultipler) <= (offset2.left || 0);
    const right = Math.abs(scrollLeft * directionMultipler) + el.clientWidth >= el.scrollWidth - (offset2.right || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
    if (display === "flex" && flexDirection === "row-reverse") {
      arrivedState.left = right;
      arrivedState.right = left;
    } else {
      arrivedState.left = left;
      arrivedState.right = right;
    }
    internalX.value = scrollLeft;
    let scrollTop = el.scrollTop;
    if (target === window2.document && !scrollTop)
      scrollTop = window2.document.body.scrollTop;
    directions.top = scrollTop < internalY.value;
    directions.bottom = scrollTop > internalY.value;
    const top = Math.abs(scrollTop) <= (offset2.top || 0);
    const bottom = Math.abs(scrollTop) + el.clientHeight >= el.scrollHeight - (offset2.bottom || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
    if (display === "flex" && flexDirection === "column-reverse") {
      arrivedState.top = bottom;
      arrivedState.bottom = top;
    } else {
      arrivedState.top = top;
      arrivedState.bottom = bottom;
    }
    internalY.value = scrollTop;
  };
  const onScrollHandler = (e) => {
    var _a2;
    if (!window2)
      return;
    const eventTarget = (_a2 = e.target.documentElement) != null ? _a2 : e.target;
    setArrivedState(eventTarget);
    isScrolling.value = true;
    onScrollEndDebounced(e);
    onScroll(e);
  };
  useEventListener(
    element,
    "scroll",
    throttle2 ? useThrottleFn(onScrollHandler, throttle2, true, false) : onScrollHandler,
    eventListenerOptions
  );
  tryOnMounted(() => {
    try {
      const _element = toValue$1(element);
      if (!_element)
        return;
      setArrivedState(_element);
    } catch (e) {
      onError2(e);
    }
  });
  useEventListener(
    element,
    "scrollend",
    onScrollEnd,
    eventListenerOptions
  );
  return {
    x,
    y: y2,
    isScrolling,
    arrivedState,
    directions,
    measure() {
      const _element = toValue$1(element);
      if (window2 && _element)
        setArrivedState(_element);
    }
  };
}
function useInfiniteScroll(element, onLoadMore, options = {}) {
  var _a2;
  const {
    direction = "bottom",
    interval = 100,
    canLoadMore = () => true
  } = options;
  const state = reactive(useScroll(
    element,
    {
      ...options,
      offset: {
        [direction]: (_a2 = options.distance) != null ? _a2 : 0,
        ...options.offset
      }
    }
  ));
  const promise = ref();
  const isLoading = computed(() => !!promise.value);
  const observedElement = computed(() => {
    return resolveElement(toValue$1(element));
  });
  const isElementVisible = useElementVisibility(observedElement);
  function checkAndLoad() {
    state.measure();
    if (!observedElement.value || !isElementVisible.value || !canLoadMore(observedElement.value))
      return;
    const { scrollHeight, clientHeight, scrollWidth, clientWidth } = observedElement.value;
    const isNarrower = direction === "bottom" || direction === "top" ? scrollHeight <= clientHeight : scrollWidth <= clientWidth;
    if (state.arrivedState[direction] || isNarrower) {
      if (!promise.value) {
        promise.value = Promise.all([
          onLoadMore(state),
          new Promise((resolve) => setTimeout(resolve, interval))
        ]).finally(() => {
          promise.value = null;
          nextTick(() => checkAndLoad());
        });
      }
    }
  }
  const stop = watch(
    () => [state.arrivedState[direction], isElementVisible.value],
    checkAndLoad,
    { immediate: true }
  );
  tryOnUnmounted(stop);
  return {
    isLoading,
    reset() {
      nextTick(() => checkAndLoad());
    }
  };
}
function useSwipe(target, options = {}) {
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart,
    passive = true
  } = options;
  const coordsStart = reactive({ x: 0, y: 0 });
  const coordsEnd = reactive({ x: 0, y: 0 });
  const diffX = computed(() => coordsStart.x - coordsEnd.x);
  const diffY = computed(() => coordsStart.y - coordsEnd.y);
  const { max: max2, abs } = Math;
  const isThresholdExceeded = computed(() => max2(abs(diffX.value), abs(diffY.value)) >= threshold);
  const isSwiping = shallowRef(false);
  const direction = computed(() => {
    if (!isThresholdExceeded.value)
      return "none";
    if (abs(diffX.value) > abs(diffY.value)) {
      return diffX.value > 0 ? "left" : "right";
    } else {
      return diffY.value > 0 ? "up" : "down";
    }
  });
  const getTouchEventCoords = (e) => [e.touches[0].clientX, e.touches[0].clientY];
  const updateCoordsStart = (x, y2) => {
    coordsStart.x = x;
    coordsStart.y = y2;
  };
  const updateCoordsEnd = (x, y2) => {
    coordsEnd.x = x;
    coordsEnd.y = y2;
  };
  const listenerOptions = { passive, capture: !passive };
  const onTouchEnd = (e) => {
    if (isSwiping.value)
      onSwipeEnd == null ? void 0 : onSwipeEnd(e, direction.value);
    isSwiping.value = false;
  };
  const stops = [
    useEventListener(target, "touchstart", (e) => {
      if (e.touches.length !== 1)
        return;
      const [x, y2] = getTouchEventCoords(e);
      updateCoordsStart(x, y2);
      updateCoordsEnd(x, y2);
      onSwipeStart == null ? void 0 : onSwipeStart(e);
    }, listenerOptions),
    useEventListener(target, "touchmove", (e) => {
      if (e.touches.length !== 1)
        return;
      const [x, y2] = getTouchEventCoords(e);
      updateCoordsEnd(x, y2);
      if (listenerOptions.capture && !listenerOptions.passive && Math.abs(diffX.value) > Math.abs(diffY.value))
        e.preventDefault();
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true;
      if (isSwiping.value)
        onSwipe == null ? void 0 : onSwipe(e);
    }, listenerOptions),
    useEventListener(target, ["touchend", "touchcancel"], onTouchEnd, listenerOptions)
  ];
  const stop = () => stops.forEach((s) => s());
  return {
    isSwiping,
    direction,
    coordsStart,
    coordsEnd,
    lengthX: diffX,
    lengthY: diffY,
    stop,
    // TODO: Remove in the next major version
    isPassiveEventSupported: true
  };
}
function useWindowSize(options = {}) {
  const {
    window: window2 = defaultWindow,
    initialWidth = Number.POSITIVE_INFINITY,
    initialHeight = Number.POSITIVE_INFINITY,
    listenOrientation = true,
    includeScrollbar = true,
    type = "inner"
  } = options;
  const width = shallowRef(initialWidth);
  const height = shallowRef(initialHeight);
  const update = () => {
    if (window2) {
      if (type === "outer") {
        width.value = window2.outerWidth;
        height.value = window2.outerHeight;
      } else if (type === "visual" && window2.visualViewport) {
        const { width: visualViewportWidth, height: visualViewportHeight, scale } = window2.visualViewport;
        width.value = Math.round(visualViewportWidth * scale);
        height.value = Math.round(visualViewportHeight * scale);
      } else if (includeScrollbar) {
        width.value = window2.innerWidth;
        height.value = window2.innerHeight;
      } else {
        width.value = window2.document.documentElement.clientWidth;
        height.value = window2.document.documentElement.clientHeight;
      }
    }
  };
  update();
  tryOnMounted(update);
  const listenerOptions = { passive: true };
  useEventListener("resize", update, listenerOptions);
  if (window2 && type === "visual" && window2.visualViewport) {
    useEventListener(window2.visualViewport, "resize", update, listenerOptions);
  }
  if (listenOrientation) {
    const matches2 = useMediaQuery("(orientation: portrait)");
    watch(matches2, () => update());
  }
  return { width, height };
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
var isInert = function isInert2(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
  var inert = inertAtt === "" || inertAtt === "true";
  var result = inert || lookUp && node && isInert2(node.parentNode);
  return result;
};
var isContentEditable = function isContentEditable2(node) {
  var _node$getAttribute2;
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
  return attValue === "" || attValue === "true";
};
var getCandidates = function getCandidates2(el, includeContainer, filter2) {
  if (isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter2);
  return candidates;
};
var getCandidatesIteratively = function getCandidatesIteratively2(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (isInert(element, false)) {
      continue;
    }
    if (element.tagName === "SLOT") {
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively2(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }
      var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
      typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
      var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};
var hasTabIndex = function hasTabIndex2(node) {
  return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
};
var getTabIndex = function getTabIndex2(node) {
  if (!node) {
    throw new Error("No node provided");
  }
  if (node.tabIndex < 0) {
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};
var getSortOrderTabIndex = function getSortOrderTabIndex2(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables2(a, b2) {
  return a.tabIndex === b2.tabIndex ? a.documentOrder - b2.documentOrder : a.tabIndex - b2.tabIndex;
};
var isInput = function isInput2(node) {
  return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput2(node) {
  return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary2(node) {
  var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
    return child.tagName === "SUMMARY";
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio2(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio2(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios2(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio2(node) {
  return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio2(node) {
  return isRadio(node) && !isTabbableRadio(node);
};
var isNodeAttached = function isNodeAttached2(node) {
  var _nodeRoot;
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea2(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden2(node, _ref) {
  var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
  if (getComputedStyle(node).visibility === "hidden") {
    return true;
  }
  var isDirectSummary = matches.call(node, "details>summary:first-of-type");
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
    return true;
  }
  if (!displayCheck || displayCheck === "full" || displayCheck === "legacy-full") {
    if (typeof getShadowRoot === "function") {
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          node = rootNode.host;
        } else {
          node = parentElement;
        }
      }
      node = originalNode;
    }
    if (isNodeAttached(node)) {
      return !node.getClientRects().length;
    }
    if (displayCheck !== "legacy-full") {
      return true;
    }
  } else if (displayCheck === "non-zero-area") {
    return isZeroArea(node);
  }
  return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    while (parentNode) {
      if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          if (child.tagName === "LEGEND") {
            return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
          }
        }
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
  if (node.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable2(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  return false;
};
var sortByOrder = function sortByOrder2(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function(item, i) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element, isScope);
    var elements = isScope ? sortByOrder2(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item,
        isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable2(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var focusable = function focusable2(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
var isFocusable = function isFocusable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};
/*!
* focus-trap 7.6.5
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n2 = Array(a); e < a; e++) n2[e] = r[e];
  return n2;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _defineProperty(e, r, t5) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t5,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t5, e;
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t5 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t5.push.apply(t5, o);
  }
  return t5;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t5 = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t5), true).forEach(function(r2) {
      _defineProperty(e, r2, t5[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t5)) : ownKeys(Object(t5)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t5, r2));
    });
  }
  return e;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t5, r) {
  if ("object" != typeof t5 || !t5) return t5;
  var e = t5[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t5, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t5);
}
function _toPropertyKey(t5) {
  var i = _toPrimitive(t5, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t5 = {}.toString.call(r).slice(8, -1);
    return "Object" === t5 && r.constructor && (t5 = r.constructor.name), "Map" === t5 || "Set" === t5 ? Array.from(r) : "Arguments" === t5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t5) ? _arrayLikeToArray(r, a) : void 0;
  }
}
var activeFocusTraps = {
  activateTrap: function activateTrap(trapStack, trap) {
    if (trapStack.length > 0) {
      var activeTrap = trapStack[trapStack.length - 1];
      if (activeTrap !== trap) {
        activeTrap._setPausedState(true);
      }
    }
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex === -1) {
      trapStack.push(trap);
    } else {
      trapStack.splice(trapIndex, 1);
      trapStack.push(trap);
    }
  },
  deactivateTrap: function deactivateTrap(trapStack, trap) {
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex !== -1) {
      trapStack.splice(trapIndex, 1);
    }
    if (trapStack.length > 0 && !trapStack[trapStack.length - 1]._isManuallyPaused()) {
      trapStack[trapStack.length - 1]._setPausedState(false);
    }
  }
};
var isSelectableInput = function isSelectableInput2(node) {
  return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
};
var isEscapeEvent = function isEscapeEvent2(e) {
  return (e === null || e === void 0 ? void 0 : e.key) === "Escape" || (e === null || e === void 0 ? void 0 : e.key) === "Esc" || (e === null || e === void 0 ? void 0 : e.keyCode) === 27;
};
var isTabEvent = function isTabEvent2(e) {
  return (e === null || e === void 0 ? void 0 : e.key) === "Tab" || (e === null || e === void 0 ? void 0 : e.keyCode) === 9;
};
var isKeyForward = function isKeyForward2(e) {
  return isTabEvent(e) && !e.shiftKey;
};
var isKeyBackward = function isKeyBackward2(e) {
  return isTabEvent(e) && e.shiftKey;
};
var delay = function delay2(fn) {
  return setTimeout(fn, 0);
};
var valueOrHandler = function valueOrHandler2(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }
  return typeof value === "function" ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget2(event) {
  return event.target.shadowRoot && typeof event.composedPath === "function" ? event.composedPath()[0] : event.target;
};
var internalTrapStack = [];
var createFocusTrap = function createFocusTrap2(elements, userOptions) {
  var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
  var trapStack = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.trapStack) || internalTrapStack;
  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true,
    isKeyForward,
    isKeyBackward
  }, userOptions);
  var state = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false,
    manuallyPaused: false,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  };
  var trap;
  var getOption = function getOption2(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  };
  var findContainerIndex = function findContainerIndex2(element, event) {
    var composedPath = typeof (event === null || event === void 0 ? void 0 : event.composedPath) === "function" ? event.composedPath() : void 0;
    return state.containerGroups.findIndex(function(_ref) {
      var container = _ref.container, tabbableNodes = _ref.tabbableNodes;
      return container.contains(element) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (composedPath === null || composedPath === void 0 ? void 0 : composedPath.includes(container)) || tabbableNodes.find(function(node) {
        return node === element;
      });
    });
  };
  var getNodeForOption = function getNodeForOption2(optionName) {
    var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref2$hasFallback = _ref2.hasFallback, hasFallback = _ref2$hasFallback === void 0 ? false : _ref2$hasFallback, _ref2$params = _ref2.params, params = _ref2$params === void 0 ? [] : _ref2$params;
    var optionValue = config[optionName];
    if (typeof optionValue === "function") {
      optionValue = optionValue.apply(void 0, _toConsumableArray(params));
    }
    if (optionValue === true) {
      optionValue = void 0;
    }
    if (!optionValue) {
      if (optionValue === void 0 || optionValue === false) {
        return optionValue;
      }
      throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
    }
    var node = optionValue;
    if (typeof optionValue === "string") {
      try {
        node = doc.querySelector(optionValue);
      } catch (err) {
        throw new Error("`".concat(optionName, '` appears to be an invalid selector; error="').concat(err.message, '"'));
      }
      if (!node) {
        if (!hasFallback) {
          throw new Error("`".concat(optionName, "` as selector refers to no known node"));
        }
      }
    }
    return node;
  };
  var getInitialFocusNode = function getInitialFocusNode2() {
    var node = getNodeForOption("initialFocus", {
      hasFallback: true
    });
    if (node === false) {
      return false;
    }
    if (node === void 0 || node && !isFocusable(node, config.tabbableOptions)) {
      if (findContainerIndex(doc.activeElement) >= 0) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
        node = firstTabbableNode || getNodeForOption("fallbackFocus");
      }
    } else if (node === null) {
      node = getNodeForOption("fallbackFocus");
    }
    if (!node) {
      throw new Error("Your focus-trap needs to have at least one focusable element");
    }
    return node;
  };
  var updateTabbableNodes = function updateTabbableNodes2() {
    state.containerGroups = state.containers.map(function(container) {
      var tabbableNodes = tabbable(container, config.tabbableOptions);
      var focusableNodes = focusable(container, config.tabbableOptions);
      var firstTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[0] : void 0;
      var lastTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : void 0;
      var firstDomTabbableNode = focusableNodes.find(function(node) {
        return isTabbable(node);
      });
      var lastDomTabbableNode = focusableNodes.slice().reverse().find(function(node) {
        return isTabbable(node);
      });
      var posTabIndexesFound = !!tabbableNodes.find(function(node) {
        return getTabIndex(node) > 0;
      });
      return {
        container,
        tabbableNodes,
        focusableNodes,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function nextTabbableNode(node) {
          var forward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
          var nodeIdx = tabbableNodes.indexOf(node);
          if (nodeIdx < 0) {
            if (forward) {
              return focusableNodes.slice(focusableNodes.indexOf(node) + 1).find(function(el) {
                return isTabbable(el);
              });
            }
            return focusableNodes.slice(0, focusableNodes.indexOf(node)).reverse().find(function(el) {
              return isTabbable(el);
            });
          }
          return tabbableNodes[nodeIdx + (forward ? 1 : -1)];
        }
      };
    });
    state.tabbableGroups = state.containerGroups.filter(function(group) {
      return group.tabbableNodes.length > 0;
    });
    if (state.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) {
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    }
    if (state.containerGroups.find(function(g2) {
      return g2.posTabIndexesFound;
    }) && state.containerGroups.length > 1) {
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
    }
  };
  var _getActiveElement = function getActiveElement(el) {
    var activeElement = el.activeElement;
    if (!activeElement) {
      return;
    }
    if (activeElement.shadowRoot && activeElement.shadowRoot.activeElement !== null) {
      return _getActiveElement(activeElement.shadowRoot);
    }
    return activeElement;
  };
  var _tryFocus = function tryFocus(node) {
    if (node === false) {
      return;
    }
    if (node === _getActiveElement(document)) {
      return;
    }
    if (!node || !node.focus) {
      _tryFocus(getInitialFocusNode());
      return;
    }
    node.focus({
      preventScroll: !!config.preventScroll
    });
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  };
  var getReturnFocusNode = function getReturnFocusNode2(previousActiveElement) {
    var node = getNodeForOption("setReturnFocus", {
      params: [previousActiveElement]
    });
    return node ? node : node === false ? false : previousActiveElement;
  };
  var findNextNavNode = function findNextNavNode2(_ref3) {
    var target = _ref3.target, event = _ref3.event, _ref3$isBackward = _ref3.isBackward, isBackward = _ref3$isBackward === void 0 ? false : _ref3$isBackward;
    target = target || getActualTarget(event);
    updateTabbableNodes();
    var destinationNode = null;
    if (state.tabbableGroups.length > 0) {
      var containerIndex = findContainerIndex(target, event);
      var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : void 0;
      if (containerIndex < 0) {
        if (isBackward) {
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (isBackward) {
        var startOfGroupIndex = state.tabbableGroups.findIndex(function(_ref4) {
          var firstTabbableNode = _ref4.firstTabbableNode;
          return target === firstTabbableNode;
        });
        if (startOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
          startOfGroupIndex = containerIndex;
        }
        if (startOfGroupIndex >= 0) {
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = getTabIndex(target) >= 0 ? destinationGroup.lastTabbableNode : destinationGroup.lastDomTabbableNode;
        } else if (!isTabEvent(event)) {
          destinationNode = containerGroup.nextTabbableNode(target, false);
        }
      } else {
        var lastOfGroupIndex = state.tabbableGroups.findIndex(function(_ref5) {
          var lastTabbableNode = _ref5.lastTabbableNode;
          return target === lastTabbableNode;
        });
        if (lastOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
          lastOfGroupIndex = containerIndex;
        }
        if (lastOfGroupIndex >= 0) {
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = getTabIndex(target) >= 0 ? _destinationGroup.firstTabbableNode : _destinationGroup.firstDomTabbableNode;
        } else if (!isTabEvent(event)) {
          destinationNode = containerGroup.nextTabbableNode(target);
        }
      }
    } else {
      destinationNode = getNodeForOption("fallbackFocus");
    }
    return destinationNode;
  };
  var checkPointerDown = function checkPointerDown2(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      trap.deactivate({
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked (and if not focusable, to "nothing"); by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node), whether the
        //  outside click was on a focusable node or not
        returnFocus: config.returnFocusOnDeactivate
      });
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }
    e.preventDefault();
  };
  var checkFocusIn = function checkFocusIn2(event) {
    var target = getActualTarget(event);
    var targetContained = findContainerIndex(target, event) >= 0;
    if (targetContained || target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = target;
      }
    } else {
      event.stopImmediatePropagation();
      var nextNode;
      var navAcrossContainers = true;
      if (state.mostRecentlyFocusedNode) {
        if (getTabIndex(state.mostRecentlyFocusedNode) > 0) {
          var mruContainerIdx = findContainerIndex(state.mostRecentlyFocusedNode);
          var tabbableNodes = state.containerGroups[mruContainerIdx].tabbableNodes;
          if (tabbableNodes.length > 0) {
            var mruTabIdx = tabbableNodes.findIndex(function(node) {
              return node === state.mostRecentlyFocusedNode;
            });
            if (mruTabIdx >= 0) {
              if (config.isKeyForward(state.recentNavEvent)) {
                if (mruTabIdx + 1 < tabbableNodes.length) {
                  nextNode = tabbableNodes[mruTabIdx + 1];
                  navAcrossContainers = false;
                }
              } else {
                if (mruTabIdx - 1 >= 0) {
                  nextNode = tabbableNodes[mruTabIdx - 1];
                  navAcrossContainers = false;
                }
              }
            }
          }
        } else {
          if (!state.containerGroups.some(function(g2) {
            return g2.tabbableNodes.some(function(n2) {
              return getTabIndex(n2) > 0;
            });
          })) {
            navAcrossContainers = false;
          }
        }
      } else {
        navAcrossContainers = false;
      }
      if (navAcrossContainers) {
        nextNode = findNextNavNode({
          // move FROM the MRU node, not event-related node (which will be the node that is
          //  outside the trap causing the focus escape we're trying to fix)
          target: state.mostRecentlyFocusedNode,
          isBackward: config.isKeyBackward(state.recentNavEvent)
        });
      }
      if (nextNode) {
        _tryFocus(nextNode);
      } else {
        _tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
      }
    }
    state.recentNavEvent = void 0;
  };
  var checkKeyNav = function checkKeyNav2(event) {
    var isBackward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    state.recentNavEvent = event;
    var destinationNode = findNextNavNode({
      event,
      isBackward
    });
    if (destinationNode) {
      if (isTabEvent(event)) {
        event.preventDefault();
      }
      _tryFocus(destinationNode);
    }
  };
  var checkTabKey = function checkTabKey2(event) {
    if (config.isKeyForward(event) || config.isKeyBackward(event)) {
      checkKeyNav(event, config.isKeyBackward(event));
    }
  };
  var checkEscapeKey = function checkEscapeKey2(event) {
    if (isEscapeEvent(event) && valueOrHandler(config.escapeDeactivates, event) !== false) {
      event.preventDefault();
      trap.deactivate();
    }
  };
  var checkClick = function checkClick2(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
  };
  var addListeners = function addListeners2() {
    if (!state.active) {
      return;
    }
    activeFocusTraps.activateTrap(trapStack, trap);
    state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function() {
      _tryFocus(getInitialFocusNode());
    }) : _tryFocus(getInitialFocusNode());
    doc.addEventListener("focusin", checkFocusIn, true);
    doc.addEventListener("mousedown", checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener("touchstart", checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener("click", checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener("keydown", checkTabKey, {
      capture: true,
      passive: false
    });
    doc.addEventListener("keydown", checkEscapeKey);
    return trap;
  };
  var removeListeners = function removeListeners2() {
    if (!state.active) {
      return;
    }
    doc.removeEventListener("focusin", checkFocusIn, true);
    doc.removeEventListener("mousedown", checkPointerDown, true);
    doc.removeEventListener("touchstart", checkPointerDown, true);
    doc.removeEventListener("click", checkClick, true);
    doc.removeEventListener("keydown", checkTabKey, true);
    doc.removeEventListener("keydown", checkEscapeKey);
    return trap;
  };
  var checkDomRemoval = function checkDomRemoval2(mutations) {
    var isFocusedNodeRemoved = mutations.some(function(mutation) {
      var removedNodes = Array.from(mutation.removedNodes);
      return removedNodes.some(function(node) {
        return node === state.mostRecentlyFocusedNode;
      });
    });
    if (isFocusedNodeRemoved) {
      _tryFocus(getInitialFocusNode());
    }
  };
  var mutationObserver = typeof window !== "undefined" && "MutationObserver" in window ? new MutationObserver(checkDomRemoval) : void 0;
  var updateObservedNodes = function updateObservedNodes2() {
    if (!mutationObserver) {
      return;
    }
    mutationObserver.disconnect();
    if (state.active && !state.paused) {
      state.containers.map(function(container) {
        mutationObserver.observe(container, {
          subtree: true,
          childList: true
        });
      });
    }
  };
  trap = {
    get active() {
      return state.active;
    },
    get paused() {
      return state.paused;
    },
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }
      var onActivate = getOption(activateOptions, "onActivate");
      var onPostActivate = getOption(activateOptions, "onPostActivate");
      var checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
      if (!checkCanFocusTrap) {
        updateTabbableNodes();
      }
      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = _getActiveElement(doc);
      onActivate === null || onActivate === void 0 || onActivate();
      var finishActivation = function finishActivation2() {
        if (checkCanFocusTrap) {
          updateTabbableNodes();
        }
        addListeners();
        updateObservedNodes();
        onPostActivate === null || onPostActivate === void 0 || onPostActivate();
      };
      if (checkCanFocusTrap) {
        checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
        return this;
      }
      finishActivation();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }
      var options = _objectSpread2({
        onDeactivate: config.onDeactivate,
        onPostDeactivate: config.onPostDeactivate,
        checkCanReturnFocus: config.checkCanReturnFocus
      }, deactivateOptions);
      clearTimeout(state.delayInitialFocusTimer);
      state.delayInitialFocusTimer = void 0;
      removeListeners();
      state.active = false;
      state.paused = false;
      updateObservedNodes();
      activeFocusTraps.deactivateTrap(trapStack, trap);
      var onDeactivate = getOption(options, "onDeactivate");
      var onPostDeactivate = getOption(options, "onPostDeactivate");
      var checkCanReturnFocus = getOption(options, "checkCanReturnFocus");
      var returnFocus = getOption(options, "returnFocus", "returnFocusOnDeactivate");
      onDeactivate === null || onDeactivate === void 0 || onDeactivate();
      var finishDeactivation = function finishDeactivation2() {
        delay(function() {
          if (returnFocus) {
            _tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
          }
          onPostDeactivate === null || onPostDeactivate === void 0 || onPostDeactivate();
        });
      };
      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }
      finishDeactivation();
      return this;
    },
    pause: function pause(pauseOptions) {
      if (!state.active) {
        return this;
      }
      state.manuallyPaused = true;
      return this._setPausedState(true, pauseOptions);
    },
    unpause: function unpause(unpauseOptions) {
      if (!state.active) {
        return this;
      }
      state.manuallyPaused = false;
      if (trapStack[trapStack.length - 1] !== this) {
        return this;
      }
      return this._setPausedState(false, unpauseOptions);
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function(element) {
        return typeof element === "string" ? doc.querySelector(element) : element;
      });
      if (state.active) {
        updateTabbableNodes();
      }
      updateObservedNodes();
      return this;
    }
  };
  Object.defineProperties(trap, {
    _isManuallyPaused: {
      value: function value() {
        return state.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function value(paused, options) {
        if (state.paused === paused) {
          return this;
        }
        state.paused = paused;
        if (paused) {
          var onPause = getOption(options, "onPause");
          var onPostPause = getOption(options, "onPostPause");
          onPause === null || onPause === void 0 || onPause();
          removeListeners();
          updateObservedNodes();
          onPostPause === null || onPostPause === void 0 || onPostPause();
        } else {
          var onUnpause = getOption(options, "onUnpause");
          var onPostUnpause = getOption(options, "onPostUnpause");
          onUnpause === null || onUnpause === void 0 || onUnpause();
          updateTabbableNodes();
          addListeners();
          updateObservedNodes();
          onPostUnpause === null || onPostUnpause === void 0 || onPostUnpause();
        }
        return this;
      }
    }
  });
  trap.updateContainerElements(elements);
  return trap;
};
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function createElementId() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
function getTrapStack() {
  window._nc_focus_trap ??= [];
  return window._nc_focus_trap;
}
function createTrapStackController() {
  let pausedStack = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      pausedStack = [...getTrapStack()];
      for (const trap of pausedStack) {
        trap.pause();
      }
    },
    /**
     * Unpause the paused focus trap stack
     */
    unpause() {
      for (const trap of pausedStack) {
        trap.unpause();
      }
      pausedStack = [];
    }
  };
}
function useTrapStackControl(shouldPause, options = {}) {
  const trapStackController = createTrapStackController();
  watch(shouldPause, () => {
    if (toValue(options.disabled)) {
      return;
    }
    if (toValue(shouldPause)) {
      trapStackController.pause();
    } else {
      trapStackController.unpause();
    }
  });
  onUnmounted(() => {
    trapStackController.unpause();
  });
}
const _sfc_main$3 = {
  name: "DotsHorizontalIcon",
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
const _hoisted_1 = ["aria-hidden", "aria-label"];
const _hoisted_2 = ["fill", "width", "height"];
const _hoisted_3 = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" };
const _hoisted_4 = { key: 0 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon dots-horizontal-icon",
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
  ], 16, _hoisted_1);
}
const DotsHorizontal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1]]);
const sides = ["top", "right", "bottom", "left"];
const alignments = ["start", "end"];
const placements = /* @__PURE__ */ sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min$1 = Math.min;
const max$1 = Math.max;
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max$1(start, min$1(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y: y2,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y2,
    left: x,
    right: x + width,
    bottom: y2 + height,
    x,
    y: y2
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y: y2
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y: y2,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y2 = nextY != null ? nextY : y2;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y: y2
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y: y2,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y: y2,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y: y2,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y: y2,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y: y2
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min$1(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min$1(paddingObject[maxProp], largestPossiblePadding);
    const min$1$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1$1 ? center - min$1$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter((placement) => getAlignment(placement) === alignment), ...allowedPlacements.filter((placement) => getAlignment(placement) !== alignment)] : allowedPlacements.filter((placement) => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter((placement) => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
const autoPlacement = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "autoPlacement",
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform: platform2,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = placements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const placements$1 = alignment !== void 0 || allowedPlacements === placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements$1[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const alignmentSides = getAlignmentSides(currentPlacement, rects, await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)));
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements$1[0]
          }
        };
      }
      const currentOverflows = [overflow[getSide(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
      const allOverflows = [...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [], {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements$1[currentIndex + 1];
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map((d2) => {
        const alignment2 = getAlignment(d2.placement);
        return [d2.placement, alignment2 && crossAxis ? (
          // Check along the mainAxis and main crossAxis side.
          d2.overflows.slice(0, 2).reduce((acc, v2) => acc + v2, 0)
        ) : (
          // Check only the mainAxis.
          d2.overflows[0]
        ), d2.overflows];
      }).sort((a, b2) => a[1] - b2[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d2) => d2[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        getAlignment(d2[0]) ? 2 : 3
      ).every((v2) => v2 <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};
const flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every((d2) => d2.overflows[0] > 0 && getSideAxis(d2.placement) === initialSideAxis)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d2) => d2.overflows[0] <= 0).sort((a, b2) => a.overflows[1] - b2.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d2) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d2.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d2) => [d2.placement, d2.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b2) => a[1] - b2[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y: y2,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y2 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
const shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y: y2,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y3
            } = _ref;
            return {
              x: x2,
              y: y3
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y: y2
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y2,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
const size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min$1(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min$1(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max$1(overflow.left, 0);
        const xMax = max$1(overflow.right, 0);
        const yMin = max$1(overflow.top, 0);
        const yMax = max$1(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max$1(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max$1(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};
function getWindow(node) {
  var _node$ownerDocument;
  return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
const min = Math.min;
const max = Math.max;
const round = Math.round;
function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  let width = parseFloat(css.width);
  let height = parseFloat(css.height);
  const offsetWidth = element.offsetWidth;
  const offsetHeight = element.offsetHeight;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    fallback: shouldFallback
  };
}
function getNodeName(node) {
  return isNode(node) ? (node.nodeName || "").toLowerCase() : "";
}
let uaString;
function getUAString() {
  if (uaString) {
    return uaString;
  }
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    uaString = uaData.brands.map((item) => item.brand + "/" + item.version).join(" ");
    return uaString;
  }
  return navigator.userAgent;
}
function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const isFirefox = /firefox/i.test(getUAString());
  const css = getComputedStyle$1(element);
  const backdropFilter = css.backdropFilter || css.WebkitBackdropFilter;
  return css.transform !== "none" || css.perspective !== "none" || (backdropFilter ? backdropFilter !== "none" : false) || isFirefox && css.willChange === "filter" || isFirefox && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective"].some((value) => css.willChange.includes(value)) || ["paint", "layout", "strict", "content"].some((value) => {
    const contain = css.contain;
    return contain != null ? contain.includes(value) : false;
  });
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
const FALLBACK_SCALE = {
  x: 1,
  y: 1
};
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return FALLBACK_SCALE;
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    fallback
  } = getCssDimensions(domElement);
  let x = (fallback ? round(rect.width) : rect.width) / width;
  let y2 = (fallback ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y2 || !Number.isFinite(y2)) {
    y2 = 1;
  }
  return {
    x,
    y: y2
  };
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  var _win$visualViewport, _win$visualViewport2;
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = FALLBACK_SCALE;
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const win = domElement ? getWindow(domElement) : window;
  const addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  let x = (clientRect.left + (addVisualOffsets ? ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0 : 0)) / scale.x;
  let y2 = (clientRect.top + (addVisualOffsets ? ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0 : 0)) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win2 = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win2.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win2) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      iframeRect.x += (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      iframeRect.y += (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y2 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += iframeRect.x;
      y2 += iframeRect.y;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return {
    width,
    height,
    top: y2,
    right: x + width,
    bottom: y2 + height,
    left: x,
    x,
    y: y2
  };
}
function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = {
    x: 1,
    y: 1
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y2 = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y: y2
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return parentNode.ownerDocument.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y: y2
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : {
    x: 1,
    y: 1
  };
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y2 = top * scale.y;
  return {
    width,
    height,
    x,
    y: y2
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  if (clippingAncestor === "viewport") {
    return rectToClientRect(getViewportRect(element, strategy));
  }
  if (isElement(clippingAncestor)) {
    return rectToClientRect(getInnerBoundingClientRect(clippingAncestor, strategy));
  }
  return rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const containingBlock = isContainingBlock(currentNode);
    const shouldDropCurrentNode = elementIsFixed ? !containingBlock && !currentContainingBlockComputedStyle : !containingBlock && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  if (isHTMLElement(element)) {
    return getCssDimensions(element);
  }
  return element.getBoundingClientRect();
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function getOffsetParent(element) {
  const window2 = getWindow(element);
  let offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(element, true, strategy === "fixed", offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
const platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getScale,
  async getElementRects(_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...await getDimensionsFn(floating)
      }
    };
  },
  getClientRects: (element) => Array.from(element.getClientRects()),
  isRTL: (element) => getComputedStyle$1(element).direction === "rtl"
};
const computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
const h = {
  // Disable popper components
  disabled: false,
  // Default position offset along main axis (px)
  distance: 5,
  // Default position offset along cross axis (px)
  skidding: 0,
  // Default container where the tooltip will be appended
  container: "body",
  // Element used to compute position and size boundaries
  boundary: void 0,
  // Skip delay & CSS transitions when another popper is shown, so that the popper appear to instanly move to the new position.
  instantMove: false,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 150,
  // Triggers on the popper itself
  popperTriggers: [],
  // Positioning strategy
  strategy: "absolute",
  // Prevent overflow
  preventOverflow: true,
  // Flip to the opposite placement if needed
  flip: true,
  // Shift on the cross axis to prevent the popper from overflowing
  shift: true,
  // Overflow padding (px)
  overflowPadding: 0,
  // Arrow padding (px)
  arrowPadding: 0,
  // Compute arrow overflow (useful to hide it)
  arrowOverflow: true,
  /**
   * By default, compute autohide on 'click'.
   */
  autoHideOnMousedown: false,
  // Themes
  themes: {
    tooltip: {
      // Default tooltip placement relative to target element
      placement: "top",
      // Default events that trigger the tooltip
      triggers: ["hover", "focus", "touch"],
      // Close tooltip on click on tooltip target
      hideTriggers: (e) => [...e, "click"],
      // Delay (ms)
      delay: {
        show: 200,
        hide: 0
      },
      // Update popper on content resize
      handleResize: false,
      // Enable HTML content in directive
      html: false,
      // Displayed when tooltip content is loading
      loadingContent: "..."
    },
    dropdown: {
      // Default dropdown placement relative to target element
      placement: "bottom",
      // Default events that trigger the dropdown
      triggers: ["click"],
      // Delay (ms)
      delay: 0,
      // Update popper on content resize
      handleResize: true,
      // Hide on clock outside
      autoHide: true
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function S(e, t5) {
  let o = h.themes[e] || {}, i;
  do
    i = o[t5], typeof i > "u" ? o.$extend ? o = h.themes[o.$extend] || {} : (o = null, i = h[t5]) : o = null;
  while (o);
  return i;
}
function Ze(e) {
  const t5 = [e];
  let o = h.themes[e] || {};
  do
    o.$extend && !o.$resetCss ? (t5.push(o.$extend), o = h.themes[o.$extend] || {}) : o = null;
  while (o);
  return t5.map((i) => `v-popper--theme-${i}`);
}
function re(e) {
  const t5 = [e];
  let o = h.themes[e] || {};
  do
    o.$extend ? (t5.push(o.$extend), o = h.themes[o.$extend] || {}) : o = null;
  while (o);
  return t5;
}
let $ = false;
if (typeof window < "u") {
  $ = false;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        $ = true;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let _e = false;
typeof window < "u" && typeof navigator < "u" && (_e = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Te = ["auto", "top", "bottom", "left", "right"].reduce((e, t5) => e.concat([
  t5,
  `${t5}-start`,
  `${t5}-end`
]), []), pe = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, ae = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function de(e, t5) {
  const o = e.indexOf(t5);
  o !== -1 && e.splice(o, 1);
}
function G() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const d = [];
let g = null;
const le = {};
function he(e) {
  let t5 = le[e];
  return t5 || (t5 = le[e] = []), t5;
}
let Y = function() {
};
typeof window < "u" && (Y = window.Element);
function n(e) {
  return function(t5) {
    return S(t5.theme, e);
  };
}
const q = "__floating-vue__popper", Q = () => defineComponent({
  name: "VPopper",
  provide() {
    return {
      [q]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [q]: { default: null }
  },
  props: {
    theme: {
      type: String,
      required: true
    },
    targetNodes: {
      type: Function,
      required: true
    },
    referenceNode: {
      type: Function,
      default: null
    },
    popperNode: {
      type: Function,
      required: true
    },
    shown: {
      type: Boolean,
      default: false
    },
    showGroup: {
      type: String,
      default: null
    },
    // eslint-disable-next-line vue/require-prop-types
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: n("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: n("positioningDisabled")
    },
    placement: {
      type: String,
      default: n("placement"),
      validator: (e) => Te.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: n("delay")
    },
    distance: {
      type: [Number, String],
      default: n("distance")
    },
    skidding: {
      type: [Number, String],
      default: n("skidding")
    },
    triggers: {
      type: Array,
      default: n("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: n("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: n("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: n("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: n("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: n("popperHideTriggers")
    },
    container: {
      type: [String, Object, Y, Boolean],
      default: n("container")
    },
    boundary: {
      type: [String, Y],
      default: n("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: n("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: n("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: n("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: n("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: n("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: n("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: n("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: n("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: n("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: n("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: n("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: n("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: n("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: n("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: n("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: n("flip")
    },
    shift: {
      type: Boolean,
      default: n("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: n("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: n("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: n("disposeTimeout")
    }
  },
  emits: {
    show: () => true,
    hide: () => true,
    "update:shown": (e) => true,
    "apply-show": () => true,
    "apply-hide": () => true,
    "close-group": () => true,
    "close-directive": () => true,
    "auto-hide": () => true,
    resize: () => true
  },
  data() {
    return {
      isShown: false,
      isMounted: false,
      skipTransition: false,
      classes: {
        showFrom: false,
        showTo: false,
        hideFrom: false,
        hideTo: true
      },
      result: {
        x: 0,
        y: 0,
        placement: "",
        strategy: this.strategy,
        arrow: {
          x: 0,
          y: 0,
          centerOffset: 0
        },
        transformOrigin: null
      },
      randomId: `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join("_")}`,
      shownChildren: /* @__PURE__ */ new Set(),
      lastAutoHide: true,
      pendingHide: false,
      containsGlobalTarget: false,
      isDisposed: true,
      mouseDownContains: false
    };
  },
  computed: {
    popperId() {
      return this.ariaId != null ? this.ariaId : this.randomId;
    },
    shouldMountContent() {
      return this.eagerMount || this.isMounted;
    },
    slotData() {
      return {
        popperId: this.popperId,
        isShown: this.isShown,
        shouldMountContent: this.shouldMountContent,
        skipTransition: this.skipTransition,
        autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
        show: this.show,
        hide: this.hide,
        handleResize: this.handleResize,
        onResize: this.onResize,
        classes: {
          ...this.classes,
          popperClass: this.popperClass
        },
        result: this.positioningDisabled ? null : this.result,
        attrs: this.$attrs
      };
    },
    parentPopper() {
      var e;
      return (e = this[q]) == null ? void 0 : e.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var e, t5;
      return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t5 = this.popperShowTriggers) == null ? void 0 : t5.includes("hover"));
    }
  },
  watch: {
    shown: "$_autoShowHide",
    disabled(e) {
      e ? this.dispose() : this.init();
    },
    async container() {
      this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
    },
    triggers: {
      handler: "$_refreshListeners",
      deep: true
    },
    positioningDisabled: "$_refreshListeners",
    ...[
      "placement",
      "distance",
      "skidding",
      "boundary",
      "strategy",
      "overflowPadding",
      "arrowPadding",
      "preventOverflow",
      "shift",
      "shiftCrossAxis",
      "flip"
    ].reduce((e, t5) => (e[t5] = "$_computePosition", e), {})
  },
  created() {
    this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
  },
  mounted() {
    this.init(), this.$_detachPopperNode();
  },
  activated() {
    this.$_autoShowHide();
  },
  deactivated() {
    this.hide();
  },
  beforeUnmount() {
    this.dispose();
  },
  methods: {
    show({ event: e = null, skipDelay: t5 = false, force: o = false } = {}) {
      var i, s;
      (i = this.parentPopper) != null && i.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = false, (o || !this.disabled) && (((s = this.parentPopper) == null ? void 0 : s.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t5), this.$emit("show"), this.$_showFrameLocked = true, requestAnimationFrame(() => {
        this.$_showFrameLocked = false;
      })), this.$emit("update:shown", true));
    },
    hide({ event: e = null, skipDelay: t5 = false } = {}) {
      var o;
      if (!this.$_hideInProgress) {
        if (this.shownChildren.size > 0) {
          this.pendingHide = true;
          return;
        }
        if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
          this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
            this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: t5 }), this.parentPopper.lockedChild = null);
          }, 1e3));
          return;
        }
        ((o = this.parentPopper) == null ? void 0 : o.lockedChild) === this && (this.parentPopper.lockedChild = null), this.pendingHide = false, this.$_scheduleHide(e, t5), this.$emit("hide"), this.$emit("update:shown", false);
      }
    },
    init() {
      var e;
      this.isDisposed && (this.isDisposed = false, this.isMounted = false, this.$_events = [], this.$_preventShow = false, this.$_referenceNode = ((e = this.referenceNode) == null ? void 0 : e.call(this)) ?? this.$el, this.$_targetNodes = this.targetNodes().filter((t5) => t5.nodeType === t5.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
    },
    dispose() {
      this.isDisposed || (this.isDisposed = true, this.$_removeEventListeners(), this.hide({ skipDelay: true }), this.$_detachPopperNode(), this.isMounted = false, this.isShown = false, this.$_updateParentShownChildren(false), this.$_swapTargetAttrs("data-original-title", "title"));
    },
    async onResize() {
      this.isShown && (await this.$_computePosition(), this.$emit("resize"));
    },
    async $_computePosition() {
      if (this.isDisposed || this.positioningDisabled)
        return;
      const e = {
        strategy: this.strategy,
        middleware: []
      };
      (this.distance || this.skidding) && e.middleware.push(offset({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t5 = this.placement.startsWith("auto");
      if (t5 ? e.middleware.push(autoPlacement({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(shift({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t5 && this.flip && e.middleware.push(flip({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(arrow({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: i, rects: s, middlewareData: r }) => {
          let p;
          const { centerOffset: a } = r.arrow;
          return i.startsWith("top") || i.startsWith("bottom") ? p = Math.abs(a) > s.reference.width / 2 : p = Math.abs(a) > s.reference.height / 2, {
            data: {
              overflow: p
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const i = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: s, placement: r, middlewareData: p }) => {
            var u2;
            if ((u2 = p.autoSize) != null && u2.skip)
              return {};
            let a, l;
            return r.startsWith("top") || r.startsWith("bottom") ? a = s.reference.width : l = s.reference.height, this.$_innerNode.style[i === "min" ? "minWidth" : i === "max" ? "maxWidth" : "width"] = a != null ? `${a}px` : null, this.$_innerNode.style[i === "min" ? "minHeight" : i === "max" ? "maxHeight" : "height"] = l != null ? `${l}px` : null, {
              data: {
                skip: true
              },
              reset: {
                rects: true
              }
            };
          }
        });
      }
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(size({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: s }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = s != null ? `${s}px` : null;
        }
      })));
      const o = await computePosition(this.$_referenceNode, this.$_popperNode, e);
      Object.assign(this.result, {
        x: o.x,
        y: o.y,
        placement: o.placement,
        strategy: o.strategy,
        arrow: {
          ...o.middlewareData.arrow,
          ...o.middlewareData.arrowOverflow
        }
      });
    },
    $_scheduleShow(e, t5 = false) {
      if (this.$_updateParentShownChildren(true), this.$_hideInProgress = false, clearTimeout(this.$_scheduleTimer), g && this.instantMove && g.instantMove && g !== this.parentPopper) {
        g.$_applyHide(true), this.$_applyShow(true);
        return;
      }
      t5 ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t5 = false) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = true;
        return;
      }
      this.$_updateParentShownChildren(false), this.$_hideInProgress = true, clearTimeout(this.$_scheduleTimer), this.isShown && (g = this), t5 ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t5 = this.delay;
      return parseInt(t5 && t5[e] || t5 || 0);
    },
    async $_applyShow(e = false) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await G(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...getOverflowAncestors(this.$_referenceNode),
        ...getOverflowAncestors(this.$_popperNode)
      ], "scroll", () => {
        this.$_computePosition();
      }));
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const t5 = this.$_referenceNode.getBoundingClientRect(), o = this.$_popperNode.querySelector(".v-popper__wrapper"), i = o.parentNode.getBoundingClientRect(), s = t5.x + t5.width / 2 - (i.left + o.offsetLeft), r = t5.y + t5.height / 2 - (i.top + o.offsetTop);
        this.result.transformOrigin = `${s}px ${r}px`;
      }
      this.isShown = true, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const e = this.showGroup;
      if (e) {
        let t5;
        for (let o = 0; o < d.length; o++)
          t5 = d[o], t5.showGroup !== e && (t5.hide(), t5.$emit("close-group"));
      }
      d.push(this), document.body.classList.add("v-popper--some-open");
      for (const t5 of re(this.theme))
        he(t5).push(this), document.body.classList.add(`v-popper--some-open--${t5}`);
      this.$emit("apply-show"), this.classes.showFrom = true, this.classes.showTo = false, this.classes.hideFrom = false, this.classes.hideTo = false, await G(), this.classes.showFrom = false, this.classes.showTo = true, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = false) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = true, this.$_hideInProgress = false;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, de(d, this), d.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const o of re(this.theme)) {
        const i = he(o);
        de(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${o}`);
      }
      g === this && (g = null), this.isShown = false, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t5 = this.disposeTimeout;
      t5 !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = false);
      }, t5)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = false, this.classes.showTo = false, this.classes.hideFrom = true, this.classes.hideTo = false, await G(), this.classes.hideFrom = false, this.classes.hideTo = true;
    },
    $_autoShowHide() {
      this.shown ? this.show() : this.hide();
    },
    $_ensureTeleport() {
      if (this.isDisposed)
        return;
      let e = this.container;
      if (typeof e == "string" ? e = window.document.querySelector(e) : e === false && (e = this.$_targetNodes[0].parentNode), !e)
        throw new Error("No container for popover: " + this.container);
      e.appendChild(this.$_popperNode), this.isMounted = true;
    },
    $_addEventListeners() {
      const e = (o) => {
        this.isShown && !this.$_hideInProgress || (o.usedByTooltip = true, !this.$_preventShow && this.show({ event: o }));
      };
      this.$_registerTriggerListeners(this.$_targetNodes, pe, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], pe, this.popperTriggers, this.popperShowTriggers, e);
      const t5 = (o) => {
        o.usedByTooltip || this.hide({ event: o });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, ae, this.triggers, this.hideTriggers, t5), this.$_registerTriggerListeners([this.$_popperNode], ae, this.popperTriggers, this.popperHideTriggers, t5);
    },
    $_registerEventListeners(e, t5, o) {
      this.$_events.push({ targetNodes: e, eventType: t5, handler: o }), e.forEach((i) => i.addEventListener(t5, o, $ ? {
        passive: true
      } : void 0));
    },
    $_registerTriggerListeners(e, t5, o, i, s) {
      let r = o;
      i != null && (r = typeof i == "function" ? i(r) : i), r.forEach((p) => {
        const a = t5[p];
        a && this.$_registerEventListeners(e, a, s);
      });
    },
    $_removeEventListeners(e) {
      const t5 = [];
      this.$_events.forEach((o) => {
        const { targetNodes: i, eventType: s, handler: r } = o;
        !e || e === s ? i.forEach((p) => p.removeEventListener(s, r)) : t5.push(o);
      }), this.$_events = t5;
    },
    $_refreshListeners() {
      this.isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
    },
    $_handleGlobalClose(e, t5 = false) {
      this.$_showFrameLocked || (this.hide({ event: e }), e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), t5 && (this.$_preventShow = true, setTimeout(() => {
        this.$_preventShow = false;
      }, 300)));
    },
    $_detachPopperNode() {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
    },
    $_swapTargetAttrs(e, t5) {
      for (const o of this.$_targetNodes) {
        const i = o.getAttribute(e);
        i && (o.removeAttribute(e), o.setAttribute(t5, i));
      }
    },
    $_applyAttrsToTarget(e) {
      for (const t5 of this.$_targetNodes)
        for (const o in e) {
          const i = e[o];
          i == null ? t5.removeAttribute(o) : t5.setAttribute(o, i);
        }
    },
    $_updateParentShownChildren(e) {
      let t5 = this.parentPopper;
      for (; t5; )
        e ? t5.shownChildren.add(this.randomId) : (t5.shownChildren.delete(this.randomId), t5.pendingHide && t5.hide()), t5 = t5.parentPopper;
    },
    $_isAimingPopper() {
      const e = this.$_referenceNode.getBoundingClientRect();
      if (y >= e.left && y <= e.right && _ >= e.top && _ <= e.bottom) {
        const t5 = this.$_popperNode.getBoundingClientRect(), o = y - c, i = _ - m, r = t5.left + t5.width / 2 - c + (t5.top + t5.height / 2) - m + t5.width + t5.height, p = c + o * r, a = m + i * r;
        return C(c, m, p, a, t5.left, t5.top, t5.left, t5.bottom) || // Left edge
        C(c, m, p, a, t5.left, t5.top, t5.right, t5.top) || // Top edge
        C(c, m, p, a, t5.right, t5.top, t5.right, t5.bottom) || // Right edge
        C(c, m, p, a, t5.left, t5.bottom, t5.right, t5.bottom);
      }
      return false;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (_e) {
    const e = $ ? {
      passive: true,
      capture: true
    } : true;
    document.addEventListener("touchstart", (t5) => ue(t5), e), document.addEventListener("touchend", (t5) => fe(t5, true), e);
  } else
    window.addEventListener("mousedown", (e) => ue(e), true), window.addEventListener("click", (e) => fe(e, false), true);
  window.addEventListener("resize", tt);
}
function ue(e, t5) {
  for (let o = 0; o < d.length; o++) {
    const i = d[o];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function fe(e, t5) {
  Pe(e, t5);
}
function Pe(e, t5) {
  const o = {};
  for (let i = d.length - 1; i >= 0; i--) {
    const s = d[i];
    try {
      const r = s.containsGlobalTarget = s.mouseDownContains || s.popperNode().contains(e.target);
      s.pendingHide = false, requestAnimationFrame(() => {
        if (s.pendingHide = false, !o[s.randomId] && ce(s, r, e)) {
          if (s.$_handleGlobalClose(e, t5), !e.closeAllPopover && e.closePopover && r) {
            let a = s.parentPopper;
            for (; a; )
              o[a.randomId] = true, a = a.parentPopper;
            return;
          }
          let p = s.parentPopper;
          for (; p && ce(p, p.containsGlobalTarget, e); ) {
            p.$_handleGlobalClose(e, t5);
            p = p.parentPopper;
          }
        }
      });
    } catch {
    }
  }
}
function ce(e, t5, o) {
  return o.closeAllPopover || o.closePopover && t5 || et(e, o) && !t5;
}
function et(e, t5) {
  if (typeof e.autoHide == "function") {
    const o = e.autoHide(t5);
    return e.lastAutoHide = o, o;
  }
  return e.autoHide;
}
function tt() {
  for (let e = 0; e < d.length; e++)
    d[e].$_computePosition();
}
let c = 0, m = 0, y = 0, _ = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  c = y, m = _, y = e.clientX, _ = e.clientY;
}, $ ? {
  passive: true
} : void 0);
function C(e, t5, o, i, s, r, p, a) {
  const l = ((p - s) * (t5 - r) - (a - r) * (e - s)) / ((a - r) * (o - e) - (p - s) * (i - t5)), u2 = ((o - e) * (t5 - r) - (i - t5) * (e - s)) / ((a - r) * (o - e) - (p - s) * (i - t5));
  return l >= 0 && l <= 1 && u2 >= 0 && u2 <= 1;
}
const ot = {
  extends: Q()
}, B = (e, t5) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of t5)
    o[i] = s;
  return o;
};
function it(e, t5, o, i, s, r) {
  return openBlock(), createElementBlock("div", {
    ref: "reference",
    class: normalizeClass(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    renderSlot(e.$slots, "default", normalizeProps(guardReactiveProps(e.slotData)))
  ], 2);
}
const st = /* @__PURE__ */ B(ot, [["render", it]]);
function nt() {
  var e = window.navigator.userAgent, t5 = e.indexOf("MSIE ");
  if (t5 > 0)
    return parseInt(e.substring(t5 + 5, e.indexOf(".", t5)), 10);
  var o = e.indexOf("Trident/");
  if (o > 0) {
    var i = e.indexOf("rv:");
    return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10);
  }
  var s = e.indexOf("Edge/");
  return s > 0 ? parseInt(e.substring(s + 5, e.indexOf(".", s)), 10) : -1;
}
let z;
function X() {
  X.init || (X.init = true, z = nt() !== -1);
}
var E = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: false
    },
    ignoreWidth: {
      type: Boolean,
      default: false
    },
    ignoreHeight: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    X(), nextTick(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", z && this.$el.appendChild(e), e.data = "about:blank", z || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!z && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const rt = /* @__PURE__ */ withScopeId();
pushScopeId("data-v-b329ee4c");
const pt = {
  class: "resize-observer",
  tabindex: "-1"
};
popScopeId();
const at = /* @__PURE__ */ rt((e, t5, o, i, s, r) => (openBlock(), createBlock("div", pt)));
E.render = at;
E.__scopeId = "data-v-b329ee4c";
E.__file = "src/components/ResizeObserver.vue";
const Z = (e = "theme") => ({
  computed: {
    themeClass() {
      return Ze(this[e]);
    }
  }
}), dt = defineComponent({
  name: "VPopperContent",
  components: {
    ResizeObserver: E
  },
  mixins: [
    Z()
  ],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object
  },
  emits: [
    "hide",
    "resize"
  ],
  methods: {
    toPx(e) {
      return e != null && !isNaN(e) ? `${e}px` : null;
    }
  }
}), lt = ["id", "aria-hidden", "tabindex", "data-popper-placement"], ht = {
  ref: "inner",
  class: "v-popper__inner"
}, ut = /* @__PURE__ */ createBaseVNode("div", { class: "v-popper__arrow-outer" }, null, -1), ft = /* @__PURE__ */ createBaseVNode("div", { class: "v-popper__arrow-inner" }, null, -1), ct = [
  ut,
  ft
];
function mt(e, t5, o, i, s, r) {
  const p = resolveComponent("ResizeObserver");
  return openBlock(), createElementBlock("div", {
    id: e.popperId,
    ref: "popover",
    class: normalizeClass(["v-popper__popper", [
      e.themeClass,
      e.classes.popperClass,
      {
        "v-popper__popper--shown": e.shown,
        "v-popper__popper--hidden": !e.shown,
        "v-popper__popper--show-from": e.classes.showFrom,
        "v-popper__popper--show-to": e.classes.showTo,
        "v-popper__popper--hide-from": e.classes.hideFrom,
        "v-popper__popper--hide-to": e.classes.hideTo,
        "v-popper__popper--skip-transition": e.skipTransition,
        "v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
        "v-popper__popper--no-positioning": !e.result
      }
    ]]),
    style: normalizeStyle(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t5[2] || (t5[2] = withKeys((a) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    createBaseVNode("div", {
      class: "v-popper__backdrop",
      onClick: t5[0] || (t5[0] = (a) => e.autoHide && e.$emit("hide"))
    }),
    createBaseVNode("div", {
      class: "v-popper__wrapper",
      style: normalizeStyle(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      createBaseVNode("div", ht, [
        e.mounted ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", null, [
            renderSlot(e.$slots, "default")
          ]),
          e.handleResize ? (openBlock(), createBlock(p, {
            key: 0,
            onNotify: t5[1] || (t5[1] = (a) => e.$emit("resize", a))
          })) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 512),
      createBaseVNode("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: normalizeStyle(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, ct, 4)
    ], 4)
  ], 46, lt);
}
const ee = /* @__PURE__ */ B(dt, [["render", mt]]), te = {
  methods: {
    show(...e) {
      return this.$refs.popper.show(...e);
    },
    hide(...e) {
      return this.$refs.popper.hide(...e);
    },
    dispose(...e) {
      return this.$refs.popper.dispose(...e);
    },
    onResize(...e) {
      return this.$refs.popper.onResize(...e);
    }
  }
};
let K = function() {
};
typeof window < "u" && (K = window.Element);
const gt = defineComponent({
  name: "VPopperWrapper",
  components: {
    Popper: st,
    PopperContent: ee
  },
  mixins: [
    te,
    Z("finalTheme")
  ],
  props: {
    theme: {
      type: String,
      default: null
    },
    referenceNode: {
      type: Function,
      default: null
    },
    shown: {
      type: Boolean,
      default: false
    },
    showGroup: {
      type: String,
      default: null
    },
    // eslint-disable-next-line vue/require-prop-types
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    positioningDisabled: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String,
      default: void 0
    },
    delay: {
      type: [String, Number, Object],
      default: void 0
    },
    distance: {
      type: [Number, String],
      default: void 0
    },
    skidding: {
      type: [Number, String],
      default: void 0
    },
    triggers: {
      type: Array,
      default: void 0
    },
    showTriggers: {
      type: [Array, Function],
      default: void 0
    },
    hideTriggers: {
      type: [Array, Function],
      default: void 0
    },
    popperTriggers: {
      type: Array,
      default: void 0
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: void 0
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: void 0
    },
    container: {
      type: [String, Object, K, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, K],
      default: void 0
    },
    strategy: {
      type: String,
      default: void 0
    },
    autoHide: {
      type: [Boolean, Function],
      default: void 0
    },
    handleResize: {
      type: Boolean,
      default: void 0
    },
    instantMove: {
      type: Boolean,
      default: void 0
    },
    eagerMount: {
      type: Boolean,
      default: void 0
    },
    popperClass: {
      type: [String, Array, Object],
      default: void 0
    },
    computeTransformOrigin: {
      type: Boolean,
      default: void 0
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: void 0
    },
    autoSize: {
      type: [Boolean, String],
      default: void 0
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: void 0
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: void 0
    },
    preventOverflow: {
      type: Boolean,
      default: void 0
    },
    overflowPadding: {
      type: [Number, String],
      default: void 0
    },
    arrowPadding: {
      type: [Number, String],
      default: void 0
    },
    arrowOverflow: {
      type: Boolean,
      default: void 0
    },
    flip: {
      type: Boolean,
      default: void 0
    },
    shift: {
      type: Boolean,
      default: void 0
    },
    shiftCrossAxis: {
      type: Boolean,
      default: void 0
    },
    noAutoFocus: {
      type: Boolean,
      default: void 0
    },
    disposeTimeout: {
      type: Number,
      default: void 0
    }
  },
  emits: {
    show: () => true,
    hide: () => true,
    "update:shown": (e) => true,
    "apply-show": () => true,
    "apply-hide": () => true,
    "close-group": () => true,
    "close-directive": () => true,
    "auto-hide": () => true,
    resize: () => true
  },
  computed: {
    finalTheme() {
      return this.theme ?? this.$options.vPopperTheme;
    }
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el);
    }
  }
});
function wt(e, t5, o, i, s, r) {
  const p = resolveComponent("PopperContent"), a = resolveComponent("Popper");
  return openBlock(), createBlock(a, mergeProps({ ref: "popper" }, e.$props, {
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: [
      e.themeClass
    ],
    onShow: t5[0] || (t5[0] = () => e.$emit("show")),
    onHide: t5[1] || (t5[1] = () => e.$emit("hide")),
    "onUpdate:shown": t5[2] || (t5[2] = (l) => e.$emit("update:shown", l)),
    onApplyShow: t5[3] || (t5[3] = () => e.$emit("apply-show")),
    onApplyHide: t5[4] || (t5[4] = () => e.$emit("apply-hide")),
    onCloseGroup: t5[5] || (t5[5] = () => e.$emit("close-group")),
    onCloseDirective: t5[6] || (t5[6] = () => e.$emit("close-directive")),
    onAutoHide: t5[7] || (t5[7] = () => e.$emit("auto-hide")),
    onResize: t5[8] || (t5[8] = () => e.$emit("resize"))
  }), {
    default: withCtx(({
      popperId: l,
      isShown: u2,
      shouldMountContent: L,
      skipTransition: D,
      autoHide: I,
      show: F,
      hide: v2,
      handleResize: R,
      onResize: j,
      classes: V,
      result: Ee
    }) => [
      renderSlot(e.$slots, "default", {
        shown: u2,
        show: F,
        hide: v2
      }),
      createVNode(p, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: u2,
        mounted: L,
        "skip-transition": D,
        "auto-hide": I,
        "handle-resize": R,
        classes: V,
        result: Ee,
        onHide: v2,
        onResize: j
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "popper", {
            shown: u2,
            hide: v2
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const k = /* @__PURE__ */ B(gt, [["render", wt]]), Se = {
  ...k,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...k
});
({
  ...k
});
defineComponent({
  name: "VTooltipDirective",
  components: {
    Popper: Q(),
    PopperContent: ee
  },
  mixins: [
    te
  ],
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => S(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => S(e.theme, "loadingContent")
    },
    targetNodes: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync() {
      return typeof this.content == "function";
    },
    loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent() {
      return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
    }
  },
  watch: {
    content: {
      handler() {
        this.fetchContent(true);
      },
      immediate: true
    },
    async finalContent() {
      await this.$nextTick(), this.$refs.popper.onResize();
    }
  },
  created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent(e) {
      if (typeof this.content == "function" && this.$_isShown && (e || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null, this.$_loading = true;
        const t5 = ++this.$_fetchId, o = this.content(this);
        o.then ? o.then((i) => this.onResult(t5, i)) : this.onResult(t5, o);
      }
    },
    onResult(e, t5) {
      e === this.$_fetchId && (this.$_loading = false, this.asyncContent = t5);
    },
    onShow() {
      this.$_isShown = true, this.fetchContent();
    },
    onHide() {
      this.$_isShown = false;
    }
  }
});
const kt = Se;
const isRtl = isRTL();
const _sfc_main$1 = defineComponent({
  name: "NcPopoverTriggerProvider",
  provide() {
    return {
      "NcPopover:trigger:shown": () => this.shown,
      "NcPopover:trigger:attrs": () => this.triggerAttrs
    };
  },
  props: {
    shown: {
      type: Boolean,
      required: true
    },
    popupRole: {
      type: String,
      default: void 0
    }
  },
  computed: {
    triggerAttrs() {
      return {
        "aria-haspopup": this.popupRole,
        "aria-expanded": this.shown.toString()
      };
    }
  },
  render() {
    return this.$slots.default?.({
      attrs: this.triggerAttrs
    });
  }
});
const _sfc_main$2 = {
  name: "NcPopover",
  components: {
    Dropdown: kt,
    NcPopoverTriggerProvider: _sfc_main$1
  },
  props: {
    /**
     * Element to use for calculating the popper boundary (size and position).
     * Either a query string or the actual HTMLElement.
     */
    boundary: {
      type: [String, Object],
      default: ""
    },
    /**
     * Automatically hide the popover on click outside.
     */
    closeOnClickOutside: {
      type: Boolean,
      default: false
    },
    /**
     * Container where to mount the popover.
     * Either a select query or `false` to mount to the parent node.
     */
    container: {
      type: [String, Boolean],
      default: "body"
    },
    /**
     * Delay for showing or hiding the popover.
     *
     * Can either be a number or an object to configure different delays (`{ show: number, hide: number }`).
     */
    delay: {
      type: [Number, Object],
      default: 0
    },
    /**
     * Disable the popover focus trap.
     */
    noFocusTrap: {
      type: Boolean,
      default: false
    },
    /**
     * Where to place the popover.
     *
     * This consists of the vertical placement and the horizontal placement.
     * E.g. `bottom` will place the popover on the bottom of the trigger (horizontally centered),
     * while `buttom-start` will horizontally align the popover on the logical start (e.g. for LTR layout on the left.).
     * The `start` or `end` placement will align the popover on the left or right side or the trigger element.
     *
     * @type {'auto'|'auto-start'|'auto-end'|'top'|'top-start'|'top-end'|'bottom'|'bottom-start'|'bottom-end'|'start'|'end'}
     */
    placement: {
      type: String,
      default: "bottom"
    },
    popoverBaseClass: {
      type: String,
      default: ""
    },
    /**
     * Events that trigger the popover on the popover container itself.
     * This is useful if you set `triggers` to `hover` and also want the popover to stay open while hovering the popover itself.
     *
     * It is possible to also pass an object to define different triggers for hide and show `{ show: ['hover'], hide: ['click'] }`.
     */
    popoverTriggers: {
      type: [Array, Object],
      default: null
    },
    /**
     * Popup role
     * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup#values
     */
    popupRole: {
      type: String,
      default: void 0,
      validator: (value) => ["menu", "listbox", "tree", "grid", "dialog", "true"].includes(value)
    },
    /**
     * Set element to return focus to after focus trap deactivation
     *
     * @type {SetReturnFocus}
     */
    setReturnFocus: {
      default: void 0,
      type: [HTMLElement, SVGElement, String, Boolean, Function]
    },
    /**
     * Show or hide the popper
     */
    shown: {
      type: Boolean,
      default: false
    },
    /**
     * Events that trigger the popover.
     *
     * If you pass an empty array then only the `shown` prop can control the popover state.
     * Following events are available:
     * - `'hover'`
     * - `'click'`
     * - `'focus'`
     * - `'touch'`
     *
     * It is also possible to pass an object to have different events for show and hide:
     * `{ hide: ['click'], show: ['click', 'hover'] }`
     */
    triggers: {
      type: [Array, Object],
      default: () => ["click"]
    }
  },
  emits: [
    "afterShow",
    "afterHide",
    "update:shown"
  ],
  data() {
    return {
      internalShown: this.shown
    };
  },
  computed: {
    popperTriggers() {
      if (this.popoverTriggers && Array.isArray(this.popoverTriggers)) {
        return this.popoverTriggers;
      }
      return void 0;
    },
    popperHideTriggers() {
      if (this.popoverTriggers && typeof this.popoverTriggers === "object") {
        return this.popoverTriggers.hide;
      }
      return void 0;
    },
    popperShowTriggers() {
      if (this.popoverTriggers && typeof this.popoverTriggers === "object") {
        return this.popoverTriggers.show;
      }
      return void 0;
    },
    internalTriggers() {
      if (this.triggers && Array.isArray(this.triggers)) {
        return this.triggers;
      }
      return void 0;
    },
    hideTriggers() {
      if (this.triggers && typeof this.triggers === "object") {
        return this.triggers.hide;
      }
      return void 0;
    },
    showTriggers() {
      if (this.triggers && typeof this.triggers === "object") {
        return this.triggers.show;
      }
      return void 0;
    },
    internalPlacement() {
      if (this.placement === "start") {
        return isRtl ? "right" : "left";
      } else if (this.placement === "end") {
        return isRtl ? "left" : "right";
      }
      return this.placement;
    }
  },
  watch: {
    shown(value) {
      this.internalShown = value;
    },
    internalShown(value) {
      this.$emit("update:shown", value);
    }
  },
  mounted() {
    this.checkTriggerA11y();
  },
  beforeUnmount() {
    this.clearFocusTrap();
    this.clearEscapeStopPropagation();
  },
  methods: {
    /**
     * Check if the trigger has all required a11y attributes.
     * Important to check custom trigger button.
     */
    checkTriggerA11y() {
      if (window.OC?.debug) {
        const triggerContainer = this.getPopoverTriggerContainerElement();
        const requiredTriggerButton = triggerContainer.querySelector("[aria-expanded]");
        if (!requiredTriggerButton) {
          warn$1("It looks like you are using a custom button as a <NcPopover> or other popover #trigger. If you are not using <NcButton> as a trigger, you need to bind attrs from the #trigger slot props to your custom button. See <NcPopover> docs for an example.");
        }
      }
    },
    /**
     * Remove incorrect aria-describedby attribute from the trigger.
     * @see https://github.com/Akryum/floating-vue/blob/8d4f7125aae0e3ea00ba4093d6d2001ab15058f1/packages/floating-vue/src/components/Popper.ts#L734
     */
    removeFloatingVueAriaDescribedBy() {
      const triggerContainer = this.getPopoverTriggerContainerElement();
      const triggerElements = triggerContainer.querySelectorAll("[data-popper-shown]");
      for (const el of triggerElements) {
        el.removeAttribute("aria-describedby");
      }
    },
    /**
     * @return {HTMLElement|undefined}
     */
    getPopoverContentElement() {
      return this.$refs.popover?.$refs.popperContent?.$el;
    },
    /**
     * @return {HTMLElement|undefined}
     */
    getPopoverTriggerContainerElement() {
      return this.$refs.popover?.$refs.popper?.$refs.reference;
    },
    /**
     * Add focus trap for accessibility.
     */
    async useFocusTrap() {
      await this.$nextTick();
      if (this.noFocusTrap) {
        return;
      }
      const el = this.getPopoverContentElement();
      el.tabIndex = -1;
      if (!el) {
        return;
      }
      this.$focusTrap = createFocusTrap(el, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: false,
        allowOutsideClick: true,
        setReturnFocus: this.setReturnFocus,
        trapStack: getTrapStack(),
        fallBackFocus: el
      });
      this.$focusTrap.activate();
    },
    /**
     * Remove focus trap
     *
     * @param {object} options The configuration options for focusTrap
     */
    clearFocusTrap(options = {}) {
      try {
        this.$focusTrap?.deactivate(options);
        this.$focusTrap = null;
      } catch (err) {
        console.warn(err);
      }
    },
    /**
     * Add stopPropagation for Escape.
     * It prevents global Escape handling after closing popover.
     *
     * Manual event handling is used here instead of v-on because there is no direct access to the node.
     * Alternative - wrap <template #popover> in a div wrapper.
     */
    addEscapeStopPropagation() {
      const el = this.getPopoverContentElement();
      el?.addEventListener("keydown", this.stopKeydownEscapeHandler);
    },
    /**
     * Remove stop Escape handler
     */
    clearEscapeStopPropagation() {
      const el = this.getPopoverContentElement();
      el?.removeEventListener("keydown", this.stopKeydownEscapeHandler);
    },
    /**
     * @param {KeyboardEvent} event - native keydown event
     */
    stopKeydownEscapeHandler(event) {
      if (event.type === "keydown" && event.key === "Escape") {
        event.stopPropagation();
      }
    },
    async afterShow() {
      this.getPopoverContentElement().addEventListener("transitionend", () => {
        this.$emit("afterShow");
      }, { once: true, passive: true });
      this.removeFloatingVueAriaDescribedBy();
      await this.$nextTick();
      await this.useFocusTrap();
      this.addEscapeStopPropagation();
    },
    afterHide() {
      this.getPopoverContentElement().addEventListener("transitionend", () => {
        this.$emit("afterHide");
      }, { once: true, passive: true });
      this.clearFocusTrap();
      this.clearEscapeStopPropagation();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NcPopoverTriggerProvider = resolveComponent("NcPopoverTriggerProvider");
  const _component_Dropdown = resolveComponent("Dropdown");
  return openBlock(), createBlock(_component_Dropdown, {
    ref: "popover",
    shown: $data.internalShown,
    "onUpdate:shown": [
      _cache[0] || (_cache[0] = ($event) => $data.internalShown = $event),
      _cache[1] || (_cache[1] = ($event) => $data.internalShown = $event)
    ],
    "arrow-padding": 10,
    "auto-hide": $props.closeOnClickOutside,
    boundary: $props.boundary || void 0,
    container: $props.container,
    delay: $props.delay,
    distance: 10,
    "handle-resize": "",
    "no-auto-focus": true,
    placement: $options.internalPlacement,
    "popper-class": $props.popoverBaseClass,
    "popper-triggers": $options.popperTriggers,
    "popper-hide-triggers": $options.popperHideTriggers,
    "popper-show-triggers": $options.popperShowTriggers,
    triggers: $options.internalTriggers,
    "hide-triggers": $options.hideTriggers,
    "show-triggers": $options.showTriggers,
    onApplyShow: $options.afterShow,
    onApplyHide: $options.afterHide
  }, {
    popper: withCtx((slotProps) => [
      renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(slotProps)))
    ]),
    default: withCtx(() => [
      createVNode(_component_NcPopoverTriggerProvider, {
        shown: $data.internalShown,
        "popup-role": $props.popupRole
      }, {
        default: withCtx((slotProps) => [
          renderSlot(_ctx.$slots, "trigger", normalizeProps(guardReactiveProps(slotProps)))
        ]),
        _: 3
      }, 8, ["shown", "popup-role"])
    ]),
    _: 3
  }, 8, ["shown", "auto-hide", "boundary", "container", "delay", "placement", "popper-class", "popper-triggers", "popper-hide-triggers", "popper-show-triggers", "triggers", "hide-triggers", "show-triggers", "onApplyShow", "onApplyHide"]);
}
const NcPopover = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
const NC_ACTIONS_IS_SEMANTIC_MENU = Symbol.for("NcActions:isSemanticMenu");
const NC_ACTIONS_CLOSE_MENU = Symbol.for("NcActions:closeMenu");
function isSlotPopulated(vnodes) {
  return Array.isArray(vnodes) && vnodes.some((node) => {
    if (node === null) return false;
    if (typeof node === "object") {
      const vnode = node;
      if (vnode.type === Comment) return false;
      if (vnode.type === Fragment && !isSlotPopulated(vnode.children)) return false;
      if (vnode.type === Text && !vnode.children.trim()) return false;
    }
    return true;
  });
}
register(t4);
const focusableSelector = ".focusable";
const _sfc_main = {
  name: "NcActions",
  components: {
    NcButton,
    NcPopover
  },
  provide() {
    return {
      /**
       * NcActions can be used as:
       * - Application menu (has menu role)
       * - Navigation (has no specific role, should be used an element with navigation role)
       * - Popover with plain text or text inputs (has no specific role)
       * Depending on the usage (used items), the menu and its items should have different roles for a11y.
       * Provide the role for NcAction* components in the NcActions content.
       * @type {import('vue').ComputedRef<boolean>}
       */
      [NC_ACTIONS_IS_SEMANTIC_MENU]: computed(() => this.actionsMenuSemanticType === "menu"),
      [NC_ACTIONS_CLOSE_MENU]: this.closeMenu
    };
  },
  props: {
    /**
     * Specify the open state of the popover menu
     */
    open: {
      type: Boolean,
      default: false
    },
    /**
     * This disables the internal open management,
     * so the actions menu only respects the `open` prop.
     * This is e.g. necessary for the NcAvatar component
     * to only open the actions menu after loading it's entries has finished.
     */
    manualOpen: {
      type: Boolean,
      default: false
    },
    /**
     * Force the actions to display in a three dot menu
     */
    forceMenu: {
      type: Boolean,
      default: false
    },
    /**
     * Force the name to show for single actions
     */
    forceName: {
      type: Boolean,
      default: false
    },
    /**
     * Specify the menu name
     */
    menuName: {
      type: String,
      default: null
    },
    /**
     * Apply primary styling for this menu
     */
    primary: {
      type: Boolean,
      default: false
    },
    /**
     * Icon to show for the toggle menu button
     * when more than one action is inside the actions component.
     * Only replace the default three-dot icon if really necessary.
     */
    defaultIcon: {
      type: String,
      default: ""
    },
    /**
     * Aria label for the actions menu.
     *
     * If `menuName` is defined this will not be used to prevent
     * any accessible name conflicts. This ensures that the
     * element can be activated via voice input.
     */
    ariaLabel: {
      type: String,
      default: t("Actions")
    },
    /**
     * Wanted direction of the menu
     */
    placement: {
      type: String,
      default: "bottom"
    },
    /**
     * DOM element for the actions' popover boundaries
     */
    boundariesElement: {
      type: Element,
      default: () => document.getElementById("content-vue") ?? document.querySelector("body")
    },
    /**
     * Selector for the actions' popover container
     */
    container: {
      type: [String, Object, Element, Boolean],
      default: "body"
    },
    /**
     * Disabled state of the main button (single action or menu toggle)
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Display x items inline out of the dropdown menu
     * Will be ignored if `forceMenu` is set
     */
    inline: {
      type: Number,
      default: 0
    },
    /**
     * Specifies the button variant used for trigger and single actions buttons.
     *
     * Accepted values: primary, secondary, tertiary, tertiary-no-background, tertiary-on-primary, error, warning, success.
     * If left empty, the default button style will be applied.
     *
     * @since 8.23.0
     */
    variant: {
      type: String,
      validator(value) {
        return ["primary", "secondary", "tertiary", "tertiary-no-background", "tertiary-on-primary", "error", "warning", "success"].includes(value);
      },
      default: null
    }
  },
  emits: [
    "click",
    "blur",
    "focus",
    "close",
    "closed",
    "open",
    "opened",
    "update:open"
  ],
  setup(props) {
    const randomId = createElementId();
    const triggerRandomId = `trigger-${randomId}`;
    const triggerButton = ref();
    const { top, bottom } = useElementBounding(triggerButton);
    const { top: boundaryTop, bottom: boundaryBottom } = useElementBounding(toRef$1(() => props.boundariesElement));
    const { height: windowHeight } = useWindowSize();
    const maxMenuHeight = computed(() => Math.max(
      // Either expand to the top
      Math.min(
        // max height is the top position of the trigger minus the header height minus the wedge and the padding
        top.value - 84,
        // and also limited to the space in the boundary
        top.value - boundaryTop.value
      ),
      // or expand to the bottom
      Math.min(
        // the max height is the window height minus current position of the trigger minus the wedge and padding
        windowHeight.value - bottom.value - 34,
        // and limit to the available space in the boundary
        boundaryBottom.value - bottom.value
      )
    ));
    return {
      triggerButton,
      maxMenuHeight,
      randomId,
      triggerRandomId
    };
  },
  data() {
    return {
      opened: this.open,
      focusIndex: 0,
      /**
       * @type {'menu'|'navigation'|'dialog'|'tooltip'|'unknown'}
       */
      actionsMenuSemanticType: "unknown"
    };
  },
  computed: {
    triggerButtonVariant() {
      return this.variant || (this.primary ? "primary" : this.menuName ? "secondary" : "tertiary");
    },
    /**
     * A11y roles and keyboard navigation configuration depending on the semantic type
     */
    config() {
      const configs = {
        menu: {
          popupRole: "menu",
          withArrowNavigation: true,
          withTabNavigation: false,
          withFocusTrap: false
        },
        navigation: {
          popupRole: void 0,
          withArrowNavigation: false,
          withTabNavigation: true,
          withFocusTrap: false
        },
        dialog: {
          popupRole: "dialog",
          withArrowNavigation: false,
          withTabNavigation: true,
          withFocusTrap: true
        },
        tooltip: {
          popupRole: void 0,
          withArrowNavigation: false,
          withTabNavigation: false,
          withFocusTrap: false
        },
        // Due to Vue limitations, we sometimes cannot determine the true type
        // As a fallback use both arrow navigation and focus trap
        unknown: {
          popupRole: void 0,
          role: void 0,
          withArrowNavigation: true,
          withTabNavigation: false,
          withFocusTrap: true
        }
      };
      return configs[this.actionsMenuSemanticType];
    },
    withFocusTrap() {
      return this.config.withFocusTrap;
    }
  },
  watch: {
    // Watch parent prop
    open(state) {
      if (state === this.opened) {
        return;
      }
      this.opened = state;
    },
    opened() {
      if (this.opened) {
        document.body.addEventListener("keydown", this.handleEscapePressed);
      } else {
        document.body.removeEventListener("keydown", this.handleEscapePressed);
      }
    }
  },
  created() {
    useTrapStackControl(() => this.opened, {
      disabled: () => this.config.withFocusTrap
    });
    if ("ariaHidden" in this.$attrs) {
      warn$1("[NcActions]: Do not set the ariaHidden attribute as the root element will inherit the incorrect aria-hidden.");
    }
  },
  methods: {
    /**
     * Get the name of the action component
     *
     * @param {import('vue').VNode} action - a vnode with a NcAction* component instance
     * @return {string} the name of the action component
     */
    getActionName(action) {
      return action?.type?.name;
    },
    /**
     * Do we have exactly one Action and
     * is it allowed as a standalone element?
     *
     * @param {import('vue').VNode} action The action to check
     * @return {boolean}
     */
    isValidSingleAction(action) {
      return ["NcActionButton", "NcActionLink", "NcActionRouter"].includes(this.getActionName(action));
    },
    isAction(action) {
      return this.getActionName(action)?.startsWith?.("NcAction");
    },
    /**
     * Check whether a icon prop value is an URL or not
     * @param {string} url The icon prop value
     */
    isIconUrl(url) {
      try {
        return !!new URL(url, url.startsWith("/") ? window.location.origin : void 0);
      } catch (error) {
        return false;
      }
    },
    // MENU STATE MANAGEMENT
    toggleMenu(state) {
      if (state) {
        this.openMenu();
      } else {
        this.closeMenu();
      }
    },
    openMenu() {
      if (this.opened) {
        return;
      }
      this.opened = true;
      this.$emit("update:open", true);
      this.$emit("open");
    },
    async closeMenu(returnFocus = true) {
      if (!this.opened) {
        return;
      }
      await this.$nextTick();
      this.opened = false;
      this.$refs.popover?.clearFocusTrap({ returnFocus });
      this.$emit("update:open", false);
      this.$emit("close");
      this.focusIndex = 0;
      if (returnFocus) {
        this.$refs.triggerButton?.$el.focus();
      }
    },
    /**
     * Called when popover is shown after the show delay
     */
    onOpened() {
      this.$nextTick(() => {
        this.focusFirstAction(null);
        this.resizePopover();
        this.$emit("opened");
      });
    },
    onClosed() {
      this.$emit("closed");
    },
    /**
     * Handle resizing the popover to make sure users can discover there is more to scroll
     */
    resizePopover() {
      const inner = this.$refs.menu.closest(".v-popper__inner");
      const height = this.$refs.menu.clientHeight;
      if (height > this.maxMenuHeight) {
        let currentHeight = 0;
        let actionHeight = 0;
        for (const action of this.$refs.menuList.children) {
          if (currentHeight + action.clientHeight / 2 > this.maxMenuHeight) {
            inner.style.height = `${currentHeight - actionHeight / 2}px`;
            break;
          }
          actionHeight = action.clientHeight;
          currentHeight += actionHeight;
        }
      } else {
        inner.style.height = "fit-content";
      }
    },
    // MENU KEYS & FOCUS MANAGEMENT
    /**
     * @return {HTMLElement|null}
     */
    getCurrentActiveMenuItemElement() {
      return this.$refs.menu.querySelector("li.active");
    },
    /**
     * @return {NodeListOf<HTMLElement>}
     */
    getFocusableMenuItemElements() {
      return this.$refs.menu.querySelectorAll(focusableSelector);
    },
    /**
     * Dispatches the keydown listener to different handlers
     *
     * @param {object} event The keydown event
     */
    onKeydown(event) {
      if (event.key === "Tab") {
        if (this.config.withFocusTrap) {
          return;
        }
        if (!this.config.withTabNavigation) {
          this.closeMenu(true);
          return;
        }
        event.preventDefault();
        const focusList = this.getFocusableMenuItemElements();
        const focusIndex = [...focusList].indexOf(document.activeElement);
        if (focusIndex === -1) {
          return;
        }
        const newFocusIndex = event.shiftKey ? focusIndex - 1 : focusIndex + 1;
        if (newFocusIndex < 0 || newFocusIndex === focusList.length) {
          this.closeMenu(true);
        }
        this.focusIndex = newFocusIndex;
        this.focusAction();
        return;
      }
      if (this.config.withArrowNavigation) {
        if (event.key === "ArrowUp") {
          this.focusPreviousAction(event);
        }
        if (event.key === "ArrowDown") {
          this.focusNextAction(event);
        }
        if (event.key === "PageUp") {
          this.focusFirstAction(event);
        }
        if (event.key === "PageDown") {
          this.focusLastAction(event);
        }
      }
      this.handleEscapePressed(event);
    },
    onTriggerKeydown(event) {
      if (event.key === "Escape") {
        if (this.actionsMenuSemanticType === "tooltip") {
          this.closeMenu();
        }
      }
    },
    handleEscapePressed(event) {
      if (event.key === "Escape") {
        this.closeMenu();
        event.preventDefault();
      }
    },
    removeCurrentActive() {
      const currentActiveElement = this.$refs.menu.querySelector("li.active");
      if (currentActiveElement) {
        currentActiveElement.classList.remove("active");
      }
    },
    focusAction() {
      const focusElement = this.getFocusableMenuItemElements()[this.focusIndex];
      if (focusElement) {
        this.removeCurrentActive();
        const liMenuParent = focusElement.closest("li.action");
        focusElement.focus();
        if (liMenuParent) {
          liMenuParent.classList.add("active");
        }
      }
    },
    focusPreviousAction(event) {
      if (this.opened) {
        if (this.focusIndex === 0) {
          this.focusLastAction(event);
        } else {
          this.preventIfEvent(event);
          this.focusIndex = this.focusIndex - 1;
        }
        this.focusAction();
      }
    },
    focusNextAction(event) {
      if (this.opened) {
        const indexLength = this.getFocusableMenuItemElements().length - 1;
        if (this.focusIndex === indexLength) {
          this.focusFirstAction(event);
        } else {
          this.preventIfEvent(event);
          this.focusIndex = this.focusIndex + 1;
        }
        this.focusAction();
      }
    },
    focusFirstAction(event) {
      if (this.opened) {
        this.preventIfEvent(event);
        const firstCheckedIndex = [...this.getFocusableMenuItemElements()].findIndex((button) => {
          return button.getAttribute("aria-checked") === "true" && button.getAttribute("role") === "menuitemradio";
        });
        this.focusIndex = firstCheckedIndex > -1 ? firstCheckedIndex : 0;
        this.focusAction();
      }
    },
    focusLastAction(event) {
      if (this.opened) {
        this.preventIfEvent(event);
        this.focusIndex = this.getFocusableMenuItemElements().length - 1;
        this.focusAction();
      }
    },
    preventIfEvent(event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    onFocus(event) {
      this.$emit("focus", event);
    },
    onBlur(event) {
      this.$emit("blur", event);
      if (this.actionsMenuSemanticType === "tooltip") {
        if (this.$refs.menu && this.getFocusableMenuItemElements().length === 0) {
          this.closeMenu(false);
        }
      }
    },
    onClick(event) {
      this.$emit("click", event);
    }
  },
  /**
   * The render function to display the component
   *
   * @return {object|undefined} The created VNode
   */
  render() {
    const actions = [];
    const findActions = (vnodes, actions2) => {
      vnodes.forEach((vnode) => {
        if (this.isAction(vnode)) {
          actions2.push(vnode);
          return;
        }
        if (vnode.type === Fragment) {
          findActions(vnode.children, actions2);
        }
      });
    };
    findActions(this.$slots.default?.(), actions);
    if (actions.length === 0) {
      return;
    }
    let validInlineActions = actions.filter(this.isValidSingleAction);
    if (this.forceMenu && validInlineActions.length > 0 && this.inline > 0) {
      warn$1("Specifying forceMenu will ignore any inline actions rendering.");
      validInlineActions = [];
    }
    const inlineActions = validInlineActions.slice(0, this.inline);
    const menuActions = actions.filter((action) => !inlineActions.includes(action));
    const menuItemsActions = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"];
    const textInputActions = ["NcActionInput", "NcActionTextEditable"];
    const linkActions = ["NcActionLink", "NcActionRouter"];
    const hasTextInputAction = menuActions.some((action) => textInputActions.includes(this.getActionName(action)));
    const hasMenuItemAction = menuActions.some((action) => menuItemsActions.includes(this.getActionName(action)));
    const hasLinkAction = menuActions.some((action) => linkActions.includes(this.getActionName(action)));
    if (hasTextInputAction) {
      this.actionsMenuSemanticType = "dialog";
    } else if (hasMenuItemAction) {
      this.actionsMenuSemanticType = "menu";
    } else if (hasLinkAction) {
      this.actionsMenuSemanticType = "navigation";
    } else {
      const ncActions = actions.filter((action) => this.getActionName(action).startsWith("NcAction"));
      if (ncActions.length === actions.length) {
        this.actionsMenuSemanticType = "tooltip";
      } else {
        this.actionsMenuSemanticType = "unknown";
      }
    }
    const renderInlineAction = (action) => {
      const iconProp = action?.props?.icon;
      const icon = action?.children?.icon?.()?.[0] ?? (this.isIconUrl(iconProp) ? h$2("img", { class: "action-item__menutoggle__icon", src: iconProp, alt: "" }) : h$2("span", { class: ["icon", iconProp] }));
      const text = action?.children?.default?.()?.[0]?.children?.trim();
      const buttonText = this.forceName ? text : "";
      let title = action?.props?.title;
      if (!(this.forceName || title)) {
        title = text;
      }
      const propsToForward = { ...action?.props ?? {} };
      const type = ["submit", "reset"].includes(propsToForward.type) ? propsToForward.modelValue : "button";
      delete propsToForward.modelValue;
      delete propsToForward.type;
      return h$2(
        NcButton,
        mergeProps(
          propsToForward,
          {
            class: "action-item action-item--single",
            "aria-label": action?.props?.["aria-label"] || text,
            title,
            disabled: this.disabled || action?.props?.disabled,
            pressed: action?.props?.modelValue,
            type,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (buttonText ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": action?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => buttonText,
          icon: () => icon
        }
      );
    };
    const renderActionsPopover = (actions2) => {
      const triggerIcon = isSlotPopulated(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? h$2("span", { class: ["icon", this.defaultIcon] }) : h$2(DotsHorizontal, { size: 20 });
      const triggerRandomId = `${this.randomId}-trigger`;
      return h$2(
        NcPopover,
        {
          ref: "popover",
          delay: 0,
          shown: this.opened,
          placement: this.placement,
          boundary: this.boundariesElement,
          container: this.container,
          ...this.manualOpen && {
            triggers: []
          },
          closeOnClickOutside: !this.manualOpen,
          popoverBaseClass: "action-item__popper",
          popupRole: this.config.popupRole,
          setReturnFocus: this.config.withFocusTrap ? this.$refs.triggerButton?.$el : void 0,
          focusTrap: this.config.withFocusTrap,
          "onUpdate:shown": this.toggleMenu,
          onAfterShow: this.onOpened,
          onAfterClose: this.onClosed
        },
        {
          trigger: () => h$2(NcButton, {
            id: triggerRandomId,
            class: "action-item__menutoggle",
            disabled: this.disabled,
            variant: this.triggerButtonVariant,
            ref: "triggerButton",
            "aria-label": this.menuName ? null : this.ariaLabel,
            // 'aria-controls' should only present together with a valid aria-haspopup
            "aria-controls": this.opened && this.config.popupRole ? this.randomId : null,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onClick: this.onClick,
            onKeydown: this.onTriggerKeydown
          }, {
            icon: () => triggerIcon,
            default: () => this.menuName
          }),
          default: () => h$2("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            h$2("ul", {
              id: this.randomId,
              tabindex: "-1",
              ref: "menuList",
              role: this.config.popupRole,
              // For most roles a label is required (dialog, menu), but also in general nothing speaks against labelling a list.
              // It is even recommended to do so.
              "aria-labelledby": triggerRandomId,
              "aria-modal": this.actionsMenuSemanticType === "dialog" ? "true" : void 0
            }, [
              actions2
            ])
          ])
        }
      );
    };
    if (actions.length === 1 && validInlineActions.length === 1 && !this.forceMenu) {
      return renderInlineAction(actions[0]);
    }
    this.$nextTick(() => {
      if (this.opened && this.$refs.menu) {
        this.resizePopover();
        const isAnyActive = this.$refs.menu.querySelector("li.active") || [];
        if (isAnyActive.length === 0) {
          this.focusFirstAction();
        }
      }
    });
    if (inlineActions.length > 0 && this.inline > 0) {
      return h$2(
        "div",
        {
          class: [
            "action-items",
            `action-item--${this.triggerButtonVariant}`
          ]
        },
        [
          // Render inline actions
          ...inlineActions.map(renderInlineAction),
          // render the rest within the popover menu
          menuActions.length > 0 ? h$2(
            "div",
            {
              class: [
                "action-item",
                {
                  "action-item--open": this.opened
                }
              ]
            },
            [
              renderActionsPopover(menuActions)
            ]
          ) : null
        ]
      );
    }
    return h$2(
      "div",
      {
        class: [
          "action-item action-item--default-popover",
          `action-item--${this.triggerButtonVariant}`,
          {
            "action-item--open": this.opened
          }
        ]
      },
      [
        renderActionsPopover(actions)
      ]
    );
  }
};
const NcActions = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d9d3fe59"]]);
register(t18, t34);
function loadState(app, key, fallback) {
  const elem = document.querySelector(`#initial-state-${app}-${key}`);
  if (elem === null) {
    if (fallback !== void 0) {
      return fallback;
    }
    throw new Error(`Could not find initial state ${key} of ${app}`);
  }
  try {
    return JSON.parse(atob(elem.value));
  } catch (e) {
    throw new Error(`Could not parse initial state ${key} of ${app}`);
  }
}
export {
  t22 as $,
  getGettextBuilder as A,
  NC_ACTIONS_CLOSE_MENU as B,
  NC_ACTIONS_IS_SEMANTIC_MENU as C,
  t10 as D,
  t3 as E,
  w as F,
  f as G,
  toRef as H,
  tryOnScopeDispose as I,
  isIOS as J,
  toArray as K,
  watchImmediate as L,
  isObject as M,
  NcButton as N,
  isClient as O,
  noop as P,
  t9 as Q,
  DotsHorizontal as R,
  t2 as S,
  t16 as T,
  U,
  t17 as V,
  t7 as W,
  h$1 as X,
  t41 as Y,
  t37 as Z,
  _export_sfc as _,
  t29 as a,
  t23 as a0,
  t39 as a1,
  t30 as a2,
  t18 as a3,
  t11 as a4,
  RouterLink as a5,
  useElementSize as a6,
  useIntersectionObserver as a7,
  NcPopover as a8,
  n$1 as a9,
  useRoute as b,
  useInfiniteScroll as c,
  cancelableClient as d,
  axios as e,
  t19 as f,
  createFocusTrap as g,
  getTrapStack as h,
  isRtl as i,
  t13 as j,
  t46 as k,
  loadState as l,
  t21 as m,
  t20 as n,
  createElementId as o,
  NcActions as p,
  onClickOutside as q,
  register as r,
  _$1 as s,
  t,
  useSwipe as u,
  v,
  createRouter as w,
  createWebHistory as x,
  setupDevtoolsPlugin as y,
  t24 as z
};
//# sourceMappingURL=index-BJ7ydZxs.chunk.mjs.map
