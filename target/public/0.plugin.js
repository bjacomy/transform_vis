(window["transformVis_bundle_jsonpfunction"] = window["transformVis_bundle_jsonpfunction"] || []).push([[0],{

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/resolve-url-loader/index.js?!../../node_modules/sass-loader/dist/cjs.js?!../../src/plugins/vis_default_editor/public/index.scss?v7dark":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/bjacomy/metriks/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/bjacomy/metriks/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/home/bjacomy/metriks/kibana/node_modules/resolve-url-loader??ref--6-oneOf-0-3!/home/bjacomy/metriks/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!/home/bjacomy/metriks/kibana/src/plugins/vis_default_editor/public/index.scss?v7dark ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".visEditor--default {\n  flex: 1 1 auto;\n  display: flex; }\n  @media only screen and (max-width: 574px) {\n    .visEditor--default {\n      flex-direction: column; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .visEditor--default {\n      flex-direction: column; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .visEditor--default {\n      flex-direction: column; } }\n\n/**\n * Collapsible sidebar container\n */\n.visEditor__collapsibleSidebar {\n  background: #25262E;\n  min-width: 350px;\n  max-width: 100%;\n  position: relative;\n  flex-shrink: 0; }\n  @media only screen and (max-width: 574px) {\n    .visEditor__collapsibleSidebar {\n      width: 100% !important; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .visEditor__collapsibleSidebar {\n      width: 100% !important; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .visEditor__collapsibleSidebar {\n      width: 100% !important; } }\n  @media only screen and (min-width: 992px) and (max-width: 1199px) {\n    .visEditor__collapsibleSidebar {\n      max-width: 75%; } }\n  @media only screen and (min-width: 1200px) {\n    .visEditor__collapsibleSidebar {\n      max-width: 75%; } }\n\n.visEditor__collapsibleSidebar-isClosed {\n  min-width: 0;\n  width: 32px !important; }\n  .visEditor__collapsibleSidebar-isClosed .visEditorSidebar {\n    display: none; }\n  @media only screen and (max-width: 574px) {\n    .visEditor__collapsibleSidebar-isClosed {\n      height: 40px;\n      width: 100% !important; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .visEditor__collapsibleSidebar-isClosed {\n      height: 40px;\n      width: 100% !important; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .visEditor__collapsibleSidebar-isClosed {\n      height: 40px;\n      width: 100% !important; } }\n\n.visEditor__collapsibleSidebarButton {\n  position: absolute;\n  right: 4px;\n  top: 8px; }\n\n/**\n * Resizer\n */\n.visEditor__resizer {\n  position: relative;\n  display: flex;\n  flex: 0 0 12px;\n  background-color: #1a1b20;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  -webkit-user-select: none;\n          user-select: none;\n  width: 12px; }\n  .visEditor__resizer:hover {\n    background-color: #0b4462; }\n  .visEditor__resizer:focus, .visEditor__resizer.active {\n    background-color: #1BA9F5;\n    color: #1D1E24; }\n  .visEditor__resizer::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    cursor: ew-resize; }\n  @media only screen and (max-width: 574px) {\n    .visEditor__resizer {\n      display: none; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .visEditor__resizer {\n      display: none; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .visEditor__resizer {\n      display: none; } }\n\n.visEditor__resizer-isHidden {\n  display: none; }\n\n/**\n * Canvas area\n */\n.visEditor__visualization {\n  display: flex;\n  flex: 1 1 auto;\n  overflow: hidden; }\n  @media only screen and (max-width: 574px) {\n    .visEditor__visualization {\n      width: 100% !important; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .visEditor__visualization {\n      width: 100% !important; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .visEditor__visualization {\n      width: 100% !important; } }\n\n.visEditor__canvas {\n  background-color: #1D1E24;\n  display: flex;\n  flex-direction: row;\n  overflow: auto;\n  flex-shrink: 1;\n  flex-basis: 100%; }\n  .visEditor__canvas.embedded {\n    flex-shrink: 1;\n    flex-basis: 100%; }\n  .visEditor__canvas .visualize {\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 100%; }\n  .visEditor__canvas .visChart {\n    position: relative; }\n\n.visEditorSidebar {\n  min-width: 350px; }\n  .visEditorSidebar > .visEditorSidebar__formWrapper {\n    flex-basis: auto; }\n\n.visEditorSidebar__form {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  max-width: 100%; }\n  .visEditorSidebar__form > * {\n    flex-shrink: 0; }\n\n.visEditorSidebar__config {\n  padding: 8px; }\n  .visEditorSidebar__config > * {\n    flex-grow: 0; }\n  @media only screen and (min-width: 992px) and (max-width: 1199px) {\n    .visEditorSidebar__config {\n      flex: 1 1 1px;\n      display: flex;\n      flex-direction: column;\n      scrollbar-width: thin;\n      overflow: auto; }\n      .visEditorSidebar__config > * {\n        flex-shrink: 0; }\n      .visEditorSidebar__config::-webkit-scrollbar {\n        width: 16px;\n        height: 16px; }\n      .visEditorSidebar__config::-webkit-scrollbar-thumb {\n        background-color: rgba(152, 162, 179, 0.5);\n        border: 6px solid transparent;\n        background-clip: content-box; }\n      .visEditorSidebar__config::-webkit-scrollbar-corner, .visEditorSidebar__config::-webkit-scrollbar-track {\n        background-color: transparent; } }\n  @media only screen and (min-width: 1200px) {\n    .visEditorSidebar__config {\n      flex: 1 1 1px;\n      display: flex;\n      flex-direction: column;\n      scrollbar-width: thin;\n      overflow: auto; }\n      .visEditorSidebar__config > * {\n        flex-shrink: 0; }\n      .visEditorSidebar__config::-webkit-scrollbar {\n        width: 16px;\n        height: 16px; }\n      .visEditorSidebar__config::-webkit-scrollbar-thumb {\n        background-color: rgba(152, 162, 179, 0.5);\n        border: 6px solid transparent;\n        background-clip: content-box; }\n      .visEditorSidebar__config::-webkit-scrollbar-corner, .visEditorSidebar__config::-webkit-scrollbar-track {\n        background-color: transparent; } }\n\n.visEditorSidebar__config-isHidden {\n  display: none; }\n\n.visEditorSidebar__titleContainer {\n  padding: 8px 32px 8px 8px; }\n\n.visEditorSidebar__indexPatternPlaceholder {\n  min-height: 40px;\n  border-bottom: 1px solid #343741; }\n\n.visEditorSidebar__nav,\n.visEditorSidebar__linkedSearch {\n  flex-grow: 0; }\n\n.visEditorSidebar__section {\n  background-color: #1D1E24;\n  padding: 8px;\n  border-radius: 4px; }\n  .visEditorSidebar__section + .visEditorSidebar__section {\n    margin-top: 8px; }\n\n.visEditorSidebar__collapsible {\n  background-color: #25262E; }\n\n.visEditorSidebar__collapsible--marginBottom {\n  margin-bottom: 12px; }\n\n.visEditorSidebar__formRow {\n  display: flex;\n  align-items: center;\n  margin-top: 12px; }\n\n.visEditorSidebar__formLabel {\n  display: flex;\n  align-items: center;\n  flex: 1 1 40%;\n  padding-right: 4px; }\n\n.visEditorSidebar__formControl {\n  display: flex;\n  align-items: center;\n  flex: 1 1 60%; }\n\n.visEditorSidebar__aggGroupAccordionButtonContent {\n  font-size: 14px; }\n  .visEditorSidebar__aggGroupAccordionButtonContent span {\n    color: #98A2B3; }\n\n.visEditorSidebar__controls {\n  border-top: 1px solid #343741;\n  padding: 8px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center; }\n  .visEditorSidebar__controls .visEditorSidebar__autoApplyButton {\n    margin-left: 12px; }\n\n.visEditorAgg__subAgg {\n  border: 2px solid #343741;\n  border-radius: 4px;\n  background-color: transparent;\n  padding: 8px; }\n\n.visEditorAgg__subAgg + .visEditorAggParam__string {\n  margin-top: 16px; }\n\n.visEditorAggParam--half {\n  margin: 16px 0;\n  display: inline-block;\n  width: calc(50% - 4px); }\n\n.visEditorAggParam--half-size {\n  margin-left: 8px; }\n", "",{"version":3,"sources":["index.scss"],"names":[],"mappings":"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","file":"index.scss","sourcesContent":[".visEditor--default {\n  flex: 1 1 auto;\n  display: flex; }\n  @media only screen and (max-width: 574px) {\n    .visEditor--default {\n      flex-direction: column; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .visEditor--default {\n      flex-direction: column; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .visEditor--default {\n      flex-direction: column; } }\n\n/**\n * Collapsible sidebar container\n */\n.visEditor__collapsibleSidebar {\n  background: #25262E;\n  min-width: 350px;\n  max-width: 100%;\n  position: relative;\n  flex-shrink: 0; }\n  @media only screen and (max-width: 574px) {\n    .visEditor__collapsibleSidebar {\n      width: 100% !important; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .visEditor__collapsibleSidebar {\n      width: 100% !important; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .visEditor__collapsibleSidebar {\n      width: 100% !important; } }\n  @media only screen and (min-width: 992px) and (max-width: 1199px) {\n    .visEditor__collapsibleSidebar {\n      max-width: 75%; } }\n  @media only screen and (min-width: 1200px) {\n    .visEditor__collapsibleSidebar {\n      max-width: 75%; } }\n\n.visEditor__collapsibleSidebar-isClosed {\n  min-width: 0;\n  width: 32px !important; }\n  .visEditor__collapsibleSidebar-isClosed .visEditorSidebar {\n    display: none; }\n  @media only screen and (max-width: 574px) {\n    .visEditor__collapsibleSidebar-isClosed {\n      height: 40px;\n      width: 100% !important; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .visEditor__collapsibleSidebar-isClosed {\n      height: 40px;\n      width: 100% !important; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .visEditor__collapsibleSidebar-isClosed {\n      height: 40px;\n      width: 100% !important; } }\n\n.visEditor__collapsibleSidebarButton {\n  position: absolute;\n  right: 4px;\n  top: 8px; }\n\n/**\n * Resizer\n */\n.visEditor__resizer {\n  position: relative;\n  display: flex;\n  flex: 0 0 12px;\n  background-color: #1a1b20;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  user-select: none;\n  width: 12px; }\n  .visEditor__resizer:hover {\n    background-color: #0b4462; }\n  .visEditor__resizer:focus, .visEditor__resizer.active {\n    background-color: #1BA9F5;\n    color: #1D1E24; }\n  .visEditor__resizer::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    cursor: ew-resize; }\n  @media only screen and (max-width: 574px) {\n    .visEditor__resizer {\n      display: none; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .visEditor__resizer {\n      display: none; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .visEditor__resizer {\n      display: none; } }\n\n.visEditor__resizer-isHidden {\n  display: none; }\n\n/**\n * Canvas area\n */\n.visEditor__visualization {\n  display: flex;\n  flex: 1 1 auto;\n  overflow: hidden; }\n  @media only screen and (max-width: 574px) {\n    .visEditor__visualization {\n      width: 100% !important; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .visEditor__visualization {\n      width: 100% !important; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .visEditor__visualization {\n      width: 100% !important; } }\n\n.visEditor__canvas {\n  background-color: #1D1E24;\n  display: flex;\n  flex-direction: row;\n  overflow: auto;\n  flex-shrink: 1;\n  flex-basis: 100%; }\n  .visEditor__canvas.embedded {\n    flex-shrink: 1;\n    flex-basis: 100%; }\n  .visEditor__canvas .visualize {\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 100%; }\n  .visEditor__canvas .visChart {\n    position: relative; }\n\n.visEditorSidebar {\n  min-width: 350px; }\n  .visEditorSidebar > .visEditorSidebar__formWrapper {\n    flex-basis: auto; }\n\n.visEditorSidebar__form {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  max-width: 100%; }\n  .visEditorSidebar__form > * {\n    flex-shrink: 0; }\n\n.visEditorSidebar__config {\n  padding: 8px; }\n  .visEditorSidebar__config > * {\n    flex-grow: 0; }\n  @media only screen and (min-width: 992px) and (max-width: 1199px) {\n    .visEditorSidebar__config {\n      flex: 1 1 1px;\n      display: flex;\n      flex-direction: column;\n      scrollbar-width: thin;\n      overflow: auto; }\n      .visEditorSidebar__config > * {\n        flex-shrink: 0; }\n      .visEditorSidebar__config::-webkit-scrollbar {\n        width: 16px;\n        height: 16px; }\n      .visEditorSidebar__config::-webkit-scrollbar-thumb {\n        background-color: rgba(152, 162, 179, 0.5);\n        border: 6px solid transparent;\n        background-clip: content-box; }\n      .visEditorSidebar__config::-webkit-scrollbar-corner, .visEditorSidebar__config::-webkit-scrollbar-track {\n        background-color: transparent; } }\n  @media only screen and (min-width: 1200px) {\n    .visEditorSidebar__config {\n      flex: 1 1 1px;\n      display: flex;\n      flex-direction: column;\n      scrollbar-width: thin;\n      overflow: auto; }\n      .visEditorSidebar__config > * {\n        flex-shrink: 0; }\n      .visEditorSidebar__config::-webkit-scrollbar {\n        width: 16px;\n        height: 16px; }\n      .visEditorSidebar__config::-webkit-scrollbar-thumb {\n        background-color: rgba(152, 162, 179, 0.5);\n        border: 6px solid transparent;\n        background-clip: content-box; }\n      .visEditorSidebar__config::-webkit-scrollbar-corner, .visEditorSidebar__config::-webkit-scrollbar-track {\n        background-color: transparent; } }\n\n.visEditorSidebar__config-isHidden {\n  display: none; }\n\n.visEditorSidebar__titleContainer {\n  padding: 8px 32px 8px 8px; }\n\n.visEditorSidebar__indexPatternPlaceholder {\n  min-height: 40px;\n  border-bottom: 1px solid #343741; }\n\n.visEditorSidebar__nav,\n.visEditorSidebar__linkedSearch {\n  flex-grow: 0; }\n\n.visEditorSidebar__section {\n  background-color: #1D1E24;\n  padding: 8px;\n  border-radius: 4px; }\n  .visEditorSidebar__section + .visEditorSidebar__section {\n    margin-top: 8px; }\n\n.visEditorSidebar__collapsible {\n  background-color: #25262E; }\n\n.visEditorSidebar__collapsible--marginBottom {\n  margin-bottom: 12px; }\n\n.visEditorSidebar__formRow {\n  display: flex;\n  align-items: center;\n  margin-top: 12px; }\n\n.visEditorSidebar__formLabel {\n  display: flex;\n  align-items: center;\n  flex: 1 1 40%;\n  padding-right: 4px; }\n\n.visEditorSidebar__formControl {\n  display: flex;\n  align-items: center;\n  flex: 1 1 60%; }\n\n.visEditorSidebar__aggGroupAccordionButtonContent {\n  font-size: 14px; }\n  .visEditorSidebar__aggGroupAccordionButtonContent span {\n    color: #98A2B3; }\n\n.visEditorSidebar__controls {\n  border-top: 1px solid #343741;\n  padding: 8px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center; }\n  .visEditorSidebar__controls .visEditorSidebar__autoApplyButton {\n    margin-left: 12px; }\n\n.visEditorAgg__subAgg {\n  border: 2px solid #343741;\n  border-radius: 4px;\n  background-color: transparent;\n  padding: 8px; }\n\n.visEditorAgg__subAgg + .visEditorAggParam__string {\n  margin-top: 16px; }\n\n.visEditorAggParam--half {\n  margin: 16px 0;\n  display: inline-block;\n  width: calc(50% - 4px); }\n\n.visEditorAggParam--half-size {\n  margin-left: 8px; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/resolve-url-loader/index.js?!../../node_modules/sass-loader/dist/cjs.js?!../../src/plugins/vis_default_editor/public/index.scss?v7light":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/bjacomy/metriks/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/bjacomy/metriks/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/home/bjacomy/metriks/kibana/node_modules/resolve-url-loader??ref--6-oneOf-1-3!/home/bjacomy/metriks/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!/home/bjacomy/metriks/kibana/src/plugins/vis_default_editor/public/index.scss?v7light ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".visEditor--default {\n  flex: 1 1 auto;\n  display: flex; }\n  @media only screen and (max-width: 574px) {\n    .visEditor--default {\n      flex-direction: column; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .visEditor--default {\n      flex-direction: column; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .visEditor--default {\n      flex-direction: column; } }\n\n/**\n * Collapsible sidebar container\n */\n.visEditor__collapsibleSidebar {\n  background: #F5F7FA;\n  min-width: 350px;\n  max-width: 100%;\n  position: relative;\n  flex-shrink: 0; }\n  @media only screen and (max-width: 574px) {\n    .visEditor__collapsibleSidebar {\n      width: 100% !important; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .visEditor__collapsibleSidebar {\n      width: 100% !important; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .visEditor__collapsibleSidebar {\n      width: 100% !important; } }\n  @media only screen and (min-width: 992px) and (max-width: 1199px) {\n    .visEditor__collapsibleSidebar {\n      max-width: 75%; } }\n  @media only screen and (min-width: 1200px) {\n    .visEditor__collapsibleSidebar {\n      max-width: 75%; } }\n\n.visEditor__collapsibleSidebar-isClosed {\n  min-width: 0;\n  width: 32px !important; }\n  .visEditor__collapsibleSidebar-isClosed .visEditorSidebar {\n    display: none; }\n  @media only screen and (max-width: 574px) {\n    .visEditor__collapsibleSidebar-isClosed {\n      height: 40px;\n      width: 100% !important; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .visEditor__collapsibleSidebar-isClosed {\n      height: 40px;\n      width: 100% !important; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .visEditor__collapsibleSidebar-isClosed {\n      height: 40px;\n      width: 100% !important; } }\n\n.visEditor__collapsibleSidebarButton {\n  position: absolute;\n  right: 4px;\n  top: 8px; }\n\n/**\n * Resizer\n */\n.visEditor__resizer {\n  position: relative;\n  display: flex;\n  flex: 0 0 12px;\n  background-color: #fafbfd;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  -webkit-user-select: none;\n          user-select: none;\n  width: 12px; }\n  .visEditor__resizer:hover {\n    background-color: #cce1f0; }\n  .visEditor__resizer:focus, .visEditor__resizer.active {\n    background-color: #006BB4;\n    color: #FFF; }\n  .visEditor__resizer::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    cursor: ew-resize; }\n  @media only screen and (max-width: 574px) {\n    .visEditor__resizer {\n      display: none; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .visEditor__resizer {\n      display: none; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .visEditor__resizer {\n      display: none; } }\n\n.visEditor__resizer-isHidden {\n  display: none; }\n\n/**\n * Canvas area\n */\n.visEditor__visualization {\n  display: flex;\n  flex: 1 1 auto;\n  overflow: hidden; }\n  @media only screen and (max-width: 574px) {\n    .visEditor__visualization {\n      width: 100% !important; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .visEditor__visualization {\n      width: 100% !important; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .visEditor__visualization {\n      width: 100% !important; } }\n\n.visEditor__canvas {\n  background-color: #FFF;\n  display: flex;\n  flex-direction: row;\n  overflow: auto;\n  flex-shrink: 1;\n  flex-basis: 100%; }\n  .visEditor__canvas.embedded {\n    flex-shrink: 1;\n    flex-basis: 100%; }\n  .visEditor__canvas .visualize {\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 100%; }\n  .visEditor__canvas .visChart {\n    position: relative; }\n\n.visEditorSidebar {\n  min-width: 350px; }\n  .visEditorSidebar > .visEditorSidebar__formWrapper {\n    flex-basis: auto; }\n\n.visEditorSidebar__form {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  max-width: 100%; }\n  .visEditorSidebar__form > * {\n    flex-shrink: 0; }\n\n.visEditorSidebar__config {\n  padding: 8px; }\n  .visEditorSidebar__config > * {\n    flex-grow: 0; }\n  @media only screen and (min-width: 992px) and (max-width: 1199px) {\n    .visEditorSidebar__config {\n      flex: 1 1 1px;\n      display: flex;\n      flex-direction: column;\n      scrollbar-width: thin;\n      overflow: auto; }\n      .visEditorSidebar__config > * {\n        flex-shrink: 0; }\n      .visEditorSidebar__config::-webkit-scrollbar {\n        width: 16px;\n        height: 16px; }\n      .visEditorSidebar__config::-webkit-scrollbar-thumb {\n        background-color: rgba(105, 112, 125, 0.5);\n        border: 6px solid transparent;\n        background-clip: content-box; }\n      .visEditorSidebar__config::-webkit-scrollbar-corner, .visEditorSidebar__config::-webkit-scrollbar-track {\n        background-color: transparent; } }\n  @media only screen and (min-width: 1200px) {\n    .visEditorSidebar__config {\n      flex: 1 1 1px;\n      display: flex;\n      flex-direction: column;\n      scrollbar-width: thin;\n      overflow: auto; }\n      .visEditorSidebar__config > * {\n        flex-shrink: 0; }\n      .visEditorSidebar__config::-webkit-scrollbar {\n        width: 16px;\n        height: 16px; }\n      .visEditorSidebar__config::-webkit-scrollbar-thumb {\n        background-color: rgba(105, 112, 125, 0.5);\n        border: 6px solid transparent;\n        background-clip: content-box; }\n      .visEditorSidebar__config::-webkit-scrollbar-corner, .visEditorSidebar__config::-webkit-scrollbar-track {\n        background-color: transparent; } }\n\n.visEditorSidebar__config-isHidden {\n  display: none; }\n\n.visEditorSidebar__titleContainer {\n  padding: 8px 32px 8px 8px; }\n\n.visEditorSidebar__indexPatternPlaceholder {\n  min-height: 40px;\n  border-bottom: 1px solid #D3DAE6; }\n\n.visEditorSidebar__nav,\n.visEditorSidebar__linkedSearch {\n  flex-grow: 0; }\n\n.visEditorSidebar__section {\n  background-color: #FFF;\n  padding: 8px;\n  border-radius: 4px; }\n  .visEditorSidebar__section + .visEditorSidebar__section {\n    margin-top: 8px; }\n\n.visEditorSidebar__collapsible {\n  background-color: #fafbfd; }\n\n.visEditorSidebar__collapsible--marginBottom {\n  margin-bottom: 12px; }\n\n.visEditorSidebar__formRow {\n  display: flex;\n  align-items: center;\n  margin-top: 12px; }\n\n.visEditorSidebar__formLabel {\n  display: flex;\n  align-items: center;\n  flex: 1 1 40%;\n  padding-right: 4px; }\n\n.visEditorSidebar__formControl {\n  display: flex;\n  align-items: center;\n  flex: 1 1 60%; }\n\n.visEditorSidebar__aggGroupAccordionButtonContent {\n  font-size: 14px; }\n  .visEditorSidebar__aggGroupAccordionButtonContent span {\n    color: #69707D; }\n\n.visEditorSidebar__controls {\n  border-top: 1px solid #D3DAE6;\n  padding: 8px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center; }\n  .visEditorSidebar__controls .visEditorSidebar__autoApplyButton {\n    margin-left: 12px; }\n\n.visEditorAgg__subAgg {\n  border: 2px solid #D3DAE6;\n  border-radius: 4px;\n  background-color: transparent;\n  padding: 8px; }\n\n.visEditorAgg__subAgg + .visEditorAggParam__string {\n  margin-top: 16px; }\n\n.visEditorAggParam--half {\n  margin: 16px 0;\n  display: inline-block;\n  width: calc(50% - 4px); }\n\n.visEditorAggParam--half-size {\n  margin-left: 8px; }\n", "",{"version":3,"sources":["index.scss"],"names":[],"mappings":"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","file":"index.scss","sourcesContent":[".visEditor--default {\n  flex: 1 1 auto;\n  display: flex; }\n  @media only screen and (max-width: 574px) {\n    .visEditor--default {\n      flex-direction: column; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .visEditor--default {\n      flex-direction: column; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .visEditor--default {\n      flex-direction: column; } }\n\n/**\n * Collapsible sidebar container\n */\n.visEditor__collapsibleSidebar {\n  background: #F5F7FA;\n  min-width: 350px;\n  max-width: 100%;\n  position: relative;\n  flex-shrink: 0; }\n  @media only screen and (max-width: 574px) {\n    .visEditor__collapsibleSidebar {\n      width: 100% !important; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .visEditor__collapsibleSidebar {\n      width: 100% !important; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .visEditor__collapsibleSidebar {\n      width: 100% !important; } }\n  @media only screen and (min-width: 992px) and (max-width: 1199px) {\n    .visEditor__collapsibleSidebar {\n      max-width: 75%; } }\n  @media only screen and (min-width: 1200px) {\n    .visEditor__collapsibleSidebar {\n      max-width: 75%; } }\n\n.visEditor__collapsibleSidebar-isClosed {\n  min-width: 0;\n  width: 32px !important; }\n  .visEditor__collapsibleSidebar-isClosed .visEditorSidebar {\n    display: none; }\n  @media only screen and (max-width: 574px) {\n    .visEditor__collapsibleSidebar-isClosed {\n      height: 40px;\n      width: 100% !important; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .visEditor__collapsibleSidebar-isClosed {\n      height: 40px;\n      width: 100% !important; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .visEditor__collapsibleSidebar-isClosed {\n      height: 40px;\n      width: 100% !important; } }\n\n.visEditor__collapsibleSidebarButton {\n  position: absolute;\n  right: 4px;\n  top: 8px; }\n\n/**\n * Resizer\n */\n.visEditor__resizer {\n  position: relative;\n  display: flex;\n  flex: 0 0 12px;\n  background-color: #fafbfd;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  user-select: none;\n  width: 12px; }\n  .visEditor__resizer:hover {\n    background-color: #cce1f0; }\n  .visEditor__resizer:focus, .visEditor__resizer.active {\n    background-color: #006BB4;\n    color: #FFF; }\n  .visEditor__resizer::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    cursor: ew-resize; }\n  @media only screen and (max-width: 574px) {\n    .visEditor__resizer {\n      display: none; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .visEditor__resizer {\n      display: none; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .visEditor__resizer {\n      display: none; } }\n\n.visEditor__resizer-isHidden {\n  display: none; }\n\n/**\n * Canvas area\n */\n.visEditor__visualization {\n  display: flex;\n  flex: 1 1 auto;\n  overflow: hidden; }\n  @media only screen and (max-width: 574px) {\n    .visEditor__visualization {\n      width: 100% !important; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .visEditor__visualization {\n      width: 100% !important; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .visEditor__visualization {\n      width: 100% !important; } }\n\n.visEditor__canvas {\n  background-color: #FFF;\n  display: flex;\n  flex-direction: row;\n  overflow: auto;\n  flex-shrink: 1;\n  flex-basis: 100%; }\n  .visEditor__canvas.embedded {\n    flex-shrink: 1;\n    flex-basis: 100%; }\n  .visEditor__canvas .visualize {\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 100%; }\n  .visEditor__canvas .visChart {\n    position: relative; }\n\n.visEditorSidebar {\n  min-width: 350px; }\n  .visEditorSidebar > .visEditorSidebar__formWrapper {\n    flex-basis: auto; }\n\n.visEditorSidebar__form {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  max-width: 100%; }\n  .visEditorSidebar__form > * {\n    flex-shrink: 0; }\n\n.visEditorSidebar__config {\n  padding: 8px; }\n  .visEditorSidebar__config > * {\n    flex-grow: 0; }\n  @media only screen and (min-width: 992px) and (max-width: 1199px) {\n    .visEditorSidebar__config {\n      flex: 1 1 1px;\n      display: flex;\n      flex-direction: column;\n      scrollbar-width: thin;\n      overflow: auto; }\n      .visEditorSidebar__config > * {\n        flex-shrink: 0; }\n      .visEditorSidebar__config::-webkit-scrollbar {\n        width: 16px;\n        height: 16px; }\n      .visEditorSidebar__config::-webkit-scrollbar-thumb {\n        background-color: rgba(105, 112, 125, 0.5);\n        border: 6px solid transparent;\n        background-clip: content-box; }\n      .visEditorSidebar__config::-webkit-scrollbar-corner, .visEditorSidebar__config::-webkit-scrollbar-track {\n        background-color: transparent; } }\n  @media only screen and (min-width: 1200px) {\n    .visEditorSidebar__config {\n      flex: 1 1 1px;\n      display: flex;\n      flex-direction: column;\n      scrollbar-width: thin;\n      overflow: auto; }\n      .visEditorSidebar__config > * {\n        flex-shrink: 0; }\n      .visEditorSidebar__config::-webkit-scrollbar {\n        width: 16px;\n        height: 16px; }\n      .visEditorSidebar__config::-webkit-scrollbar-thumb {\n        background-color: rgba(105, 112, 125, 0.5);\n        border: 6px solid transparent;\n        background-clip: content-box; }\n      .visEditorSidebar__config::-webkit-scrollbar-corner, .visEditorSidebar__config::-webkit-scrollbar-track {\n        background-color: transparent; } }\n\n.visEditorSidebar__config-isHidden {\n  display: none; }\n\n.visEditorSidebar__titleContainer {\n  padding: 8px 32px 8px 8px; }\n\n.visEditorSidebar__indexPatternPlaceholder {\n  min-height: 40px;\n  border-bottom: 1px solid #D3DAE6; }\n\n.visEditorSidebar__nav,\n.visEditorSidebar__linkedSearch {\n  flex-grow: 0; }\n\n.visEditorSidebar__section {\n  background-color: #FFF;\n  padding: 8px;\n  border-radius: 4px; }\n  .visEditorSidebar__section + .visEditorSidebar__section {\n    margin-top: 8px; }\n\n.visEditorSidebar__collapsible {\n  background-color: #fafbfd; }\n\n.visEditorSidebar__collapsible--marginBottom {\n  margin-bottom: 12px; }\n\n.visEditorSidebar__formRow {\n  display: flex;\n  align-items: center;\n  margin-top: 12px; }\n\n.visEditorSidebar__formLabel {\n  display: flex;\n  align-items: center;\n  flex: 1 1 40%;\n  padding-right: 4px; }\n\n.visEditorSidebar__formControl {\n  display: flex;\n  align-items: center;\n  flex: 1 1 60%; }\n\n.visEditorSidebar__aggGroupAccordionButtonContent {\n  font-size: 14px; }\n  .visEditorSidebar__aggGroupAccordionButtonContent span {\n    color: #69707D; }\n\n.visEditorSidebar__controls {\n  border-top: 1px solid #D3DAE6;\n  padding: 8px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center; }\n  .visEditorSidebar__controls .visEditorSidebar__autoApplyButton {\n    margin-left: 12px; }\n\n.visEditorAgg__subAgg {\n  border: 2px solid #D3DAE6;\n  border-radius: 4px;\n  background-color: transparent;\n  padding: 8px; }\n\n.visEditorAgg__subAgg + .visEditorAggParam__string {\n  margin-top: 16px; }\n\n.visEditorAggParam--half {\n  margin: 16px 0;\n  display: inline-block;\n  width: calc(50% - 4px); }\n\n.visEditorAggParam--half-size {\n  margin-left: 8px; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!********************************************************************************!*\
  !*** /home/bjacomy/metriks/kibana/node_modules/css-loader/dist/runtime/api.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*******************************************************************************************************!*\
  !*** /home/bjacomy/metriks/kibana/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../src/plugins/vis_default_editor/public/default_editor.tsx":
/*!*********************************************************************************************!*\
  !*** /home/bjacomy/metriks/kibana/src/plugins/vis_default_editor/public/default_editor.tsx ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultEditor; });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../../src/plugins/vis_default_editor/public/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kibana_react_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../kibana_react/public */ "plugin/kibanaReact/public");
/* harmony import */ var _kibana_react_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kibana_react_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kibana_utils_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../kibana_utils/public */ "plugin/kibanaUtils/public");
/* harmony import */ var _kibana_utils_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kibana_utils_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidebar */ "../../src/plugins/vis_default_editor/public/components/sidebar/index.ts");
/* harmony import */ var _editor_size__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor_size */ "../../src/plugins/vis_default_editor/public/editor_size.ts");
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */






const localStorage = new _kibana_utils_public__WEBPACK_IMPORTED_MODULE_3__["Storage"](window.localStorage);

function DefaultEditor({
  core,
  data,
  vis,
  uiState,
  timeRange,
  filters,
  optionTabs,
  query,
  embeddableHandler,
  eventEmitter,
  linked,
  savedSearch
}) {
  const visRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const [isCollapsed, setIsCollapsed] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const onClickCollapse = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setIsCollapsed(value => !value);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!visRef.current) {
      return;
    }

    embeddableHandler.render(visRef.current);
    setTimeout(() => {
      eventEmitter.emit('embeddableRendered');
    });
    return () => embeddableHandler.destroy();
  }, [embeddableHandler, eventEmitter]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    embeddableHandler.updateInput({
      timeRange,
      filters,
      query
    });
  }, [embeddableHandler, timeRange, filters, query]);
  const editorInitialWidth = Object(_editor_size__WEBPACK_IMPORTED_MODULE_5__["getInitialWidth"])(vis.type.editorConfig.defaultSize);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(core.i18n.Context, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kibana_react_public__WEBPACK_IMPORTED_MODULE_2__["KibanaContextProvider"], {
    services: {
      appName: 'vis_default_editor',
      storage: localStorage,
      data,
      ...core
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kibana_react_public__WEBPACK_IMPORTED_MODULE_2__["PanelsContainer"], {
    className: "visEditor--default",
    resizerClassName: `visEditor__resizer ${isCollapsed ? 'visEditor__resizer-isHidden' : ''}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kibana_react_public__WEBPACK_IMPORTED_MODULE_2__["Panel"], {
    className: "visEditor__visualization",
    initialWidth: 100 - editorInitialWidth
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "visEditor__canvas",
    ref: visRef,
    "data-shared-items-container": true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kibana_react_public__WEBPACK_IMPORTED_MODULE_2__["Panel"], {
    className: `visEditor__collapsibleSidebar ${isCollapsed ? 'visEditor__collapsibleSidebar-isClosed' : ''}`,
    initialWidth: editorInitialWidth
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_sidebar__WEBPACK_IMPORTED_MODULE_4__["DefaultEditorSideBar"], {
    embeddableHandler: embeddableHandler,
    isCollapsed: isCollapsed,
    onClickCollapse: onClickCollapse,
    optionTabs: optionTabs,
    vis: vis,
    uiState: uiState,
    isLinkedSearch: linked,
    savedSearch: savedSearch,
    timeRange: timeRange,
    eventEmitter: eventEmitter
  })))));
} // default export required for React.Lazy
// eslint-disable-next-line import/no-default-export




/***/ }),

/***/ "../../src/plugins/vis_default_editor/public/index.scss":
/*!*************************************************************************************!*\
  !*** /home/bjacomy/metriks/kibana/src/plugins/vis_default_editor/public/index.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    return __webpack_require__(/*! ./index.scss?v7dark */ "../../src/plugins/vis_default_editor/public/index.scss?v7dark");

  case 'v7light':
    return __webpack_require__(/*! ./index.scss?v7light */ "../../src/plugins/vis_default_editor/public/index.scss?v7light");

  case 'v8dark':
    console.error(new Error("SASS files in [transformVis] were not built for theme [v8dark]. Styles were compiled using the [v7dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v7dark,v7light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v8dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./index.scss?v7dark */ "../../src/plugins/vis_default_editor/public/index.scss?v7dark")

  case 'v8light':
    console.error(new Error("SASS files in [transformVis] were not built for theme [v8light]. Styles were compiled using the [v7light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v7dark,v7light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v8light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./index.scss?v7light */ "../../src/plugins/vis_default_editor/public/index.scss?v7light")
}

/***/ }),

/***/ "../../src/plugins/vis_default_editor/public/index.scss?v7dark":
/*!********************************************************************************************!*\
  !*** /home/bjacomy/metriks/kibana/src/plugins/vis_default_editor/public/index.scss?v7dark ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../node_modules/resolve-url-loader??ref--6-oneOf-0-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./index.scss?v7dark */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/resolve-url-loader/index.js?!../../node_modules/sass-loader/dist/cjs.js?!../../src/plugins/vis_default_editor/public/index.scss?v7dark");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "../../src/plugins/vis_default_editor/public/index.scss?v7light":
/*!*********************************************************************************************!*\
  !*** /home/bjacomy/metriks/kibana/src/plugins/vis_default_editor/public/index.scss?v7light ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../node_modules/resolve-url-loader??ref--6-oneOf-1-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./index.scss?v7light */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/resolve-url-loader/index.js?!../../node_modules/sass-loader/dist/cjs.js?!../../src/plugins/vis_default_editor/public/index.scss?v7light");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

}]);
//# sourceMappingURL=0.plugin.js.map