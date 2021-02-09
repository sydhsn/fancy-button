(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1080:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(54),_clientLogger=__webpack_require__(35),_configFilename=__webpack_require__(1081);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1081:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1082:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(357).configure)([__webpack_require__(1083),__webpack_require__(1085)],module,!1)}).call(this,__webpack_require__(105)(module))},1083:function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":1084};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1083},1084:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(66),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(211);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,{title:"Fancy-button/component",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h1",{id:"react-fancy-button-libarary"},"React Fancy Button Libarary"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"React Fancy Button Libarary helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Fancy-button/component",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(MDXContent,null))},__webpack_exports__.default=componentMeta},1085:function(module,exports,__webpack_require__){var map={"./components/Button/button.stories.js":1092};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1085},1086:function(module,exports,__webpack_require__){},1092:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondry",(function(){return Secondry})),__webpack_require__.d(__webpack_exports__,"ButtonLarge",(function(){return ButtonLarge})),__webpack_require__.d(__webpack_exports__,"ButtonSmall",(function(){return ButtonSmall}));var objectSpread2=__webpack_require__(80),objectWithoutProperties=(__webpack_require__(0),__webpack_require__(475)),jsx_runtime=(__webpack_require__(1086),__webpack_require__(212)),button_Button=function Button(_ref){var backgroundColor=_ref.backgroundColor,label=_ref.label,buttonClass=_ref.buttonClass,size=_ref.size,props=Object(objectWithoutProperties.a)(_ref,["backgroundColor","label","buttonClass","size"]);return Object(jsx_runtime.jsx)("button",Object(objectSpread2.a)(Object(objectSpread2.a)({type:"button",className:["fancy-button","fancy-button-".concat(buttonClass),"fancy-button-".concat(size)].join(" "),style:backgroundColor&&{backgroundColor:backgroundColor}},props),{},{children:label}))};button_Button.defaultProps={backgroundColor:null,buttonClass:null,size:"mall",onClick:void 0},button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},buttonClass:{defaultValue:{value:"null",computed:!1},type:{name:"bool"},required:!1,description:""},size:{defaultValue:{value:"'mall'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'large'",computed:!1}]},required:!1,description:""},onClick:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:""},label:{type:{name:"string"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Button\\button.js"]={name:"Button",docgenInfo:button_Button.__docgenInfo,path:"src\\components\\Button\\button.js"});__webpack_exports__.default={title:"Fancy-Button",component:button_Button,argTypes:{backgroundColor:{control:"color"}}};var button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(button_Button,Object(objectSpread2.a)({},args))},Default=button_stories_Template.bind({});Default.args={label:"Default Button",buttonClass:"default",size:"small"};var Primary=button_stories_Template.bind({});Primary.args={label:"Primary Button",buttonClass:"primary",size:"small"};var Secondry=button_stories_Template.bind({});Secondry.args={label:"Secondry Button",buttonClass:"secondry",size:"small"};var ButtonLarge=button_stories_Template.bind({});ButtonLarge.args={label:"Button Large",buttonClass:"primary",size:"large"};var ButtonSmall=button_stories_Template.bind({});ButtonSmall.args={label:"Button Small",buttonClass:"default",size:"small"},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Default.parameters),Primary.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters),Secondry.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Secondry.parameters),ButtonLarge.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},ButtonLarge.parameters),ButtonSmall.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},ButtonSmall.parameters)},478:function(module,exports,__webpack_require__){__webpack_require__(479),__webpack_require__(643),__webpack_require__(644),__webpack_require__(802),__webpack_require__(1021),__webpack_require__(1054),__webpack_require__(1059),__webpack_require__(1071),__webpack_require__(1073),__webpack_require__(1078),__webpack_require__(1080),module.exports=__webpack_require__(1082)},552:function(module,exports){},644:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(357)}},[[478,1,2]]]);
//# sourceMappingURL=main.e61cae331d27399a1cbe.bundle.js.map