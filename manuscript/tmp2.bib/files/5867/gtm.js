
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"175",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(document.querySelector){var a=document.querySelector(\".optanon-alert-box-wrapper\");if(a)return\"block\"===window.getComputedStyle(a).getPropertyValue(\"display\")}return!1})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.category.pageType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(document.querySelector){var a=document.querySelector('meta[property\\x3d\"og:type\"]');return a?a.getAttribute(\"content\"):null}})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],",b=",["escape",["macro",3],8,16],";return a?a:b?b:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"string\"===typeof a?a.replace(\/\u0026(?![#a-z0-9]+?;)\/g,\"and\").replace(\"\\x26amp;\",\"and\"):a}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"string\"===typeof a?a.replace(\/^\\s+\/,\"\").replace(\/\\s+$\/,\"\").replace(\/\\s+\/,\" \"):a}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.contentType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",7],8,16],"||window._pageMetaData[\"WT.cg_s\"]||null})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],",c=",["escape",["macro",8],8,16],";return b(a(c))})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=73;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OnetrustActiveGroups"
    },{
      "function":"__jsm",
      "convert_true_to":"true",
      "convert_false_to":"false",
      "vtp_javascript":["template","(function(){return-1!==",["escape",["macro",11],8,16],".indexOf(\",4,\")})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "convert_false_to":"(not set)",
      "vtp_javascript":["template","(function(){return document.querySelectorAll?!!document.querySelectorAll('a[href*\\x3d\"sci-hub\"]').length:null})()();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.deliveryPlatform"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(JSON.parse\u0026\u0026document.querySelector){var a=document.querySelector('script[type\\x3d\"application\/ld+json\"]');return a?JSON.parse(a.textContent):null}return null})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",14],8,16],"||(",["escape",["macro",15],8,16],"?\"aws\":\"(not set)\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",17],8,16],"||window._pageMetaData.citation_journal_title||null})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],",c=",["escape",["macro",18],8,16],";return b(a(c))})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.article.doi"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",20],8,16],";return a?a:window._pageMetaData.citation_doi\u0026\u0026\"string\"===typeof window._pageMetaData.citation_doi?window._pageMetaData.citation_doi.replace(\/^doi:\/,\"\"):null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"string\"===typeof a?a.split(\"\/\").join(\"-\"):a}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.publishedAtString"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],"||window._pageMetaData.citation_date||null})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",22],8,16],",b=",["escape",["macro",24],8,16],";return a(b)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.publishedAt"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",26],8,16],";if(b)return b;try{var a=(new Date(window._pageMetaData.citation_date)).getTime();return a\u0026\u0026!isNaN(a)?a:null}catch(c){return null}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.issue"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",28],8,16],"||window._pageMetaData.citation_issue||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.volume"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",30],8,16],"||window._pageMetaData.citation_volume||null})();"]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_true_to":"1",
      "convert_false_to":"0",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.authorization.status"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",32],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.legacy.webtrendsSiteID"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",34],8,16],"||window._pageMetaData.site_id||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.profile.profileInfo.profileID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",36],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.legacy.webtrendsLicenceType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",38],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.legacy.webtrendsContentCategory"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",40],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.legacy.webtrendsContentCollection"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",42],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsContentGroup"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",44],8,16],"||window._pageMetaData.product_name||window._pageMetaData.citation_journal_title||null})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],",c=",["escape",["macro",45],8,16],";return b(a(c))})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsContentSubGroup"
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",47],8,16],"||window._pageMetaData[\"WT.cg_s\"]||null})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsPrimaryArticleType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",49],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsSubjectTerms"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",51],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.cms"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",53],8,16],"||(",["escape",["macro",15],8,16],"?\"polopoly\":null)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.authors"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return(",["escape",["macro",55],8,16],"||[]).join(\";\")||window._pageMetaData.citation_authors||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.title"
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",57],8,16],"||window._pageMetaData.citation_title||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.attributes.template"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",59],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"version"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",61],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.search.keywords"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",6],8,16],",a=",["escape",["macro",63],8,16],";return a?b(a):\"(not set)\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.profile.profileInfo.bpid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",65],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.attributes.featureFlags"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return!!a\u0026\u0026Array===a.constructor}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,e){var b=",["escape",["macro",68],8,16],",d=[];if(b(a)){b=a.length;for(var c=0;c\u003Cb;++c)d.push(e(a[c]))}return d}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",67],8,16],"||[],c=",["escape",["macro",69],8,16],";return c(b,function(a){return\"string\"===typeof a?a+\"\\x3dtrue\":a.name?[a.name,!!a.active].join(\"\\x3d\"):\"\"}).join(\";\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.features"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",69],8,16],",c=",["escape",["macro",71],8,16],"||[];return b(c,function(a){return a.name?[a.name,!!a.present].join(\"\\x3d\"):\"\"}).join(\";\")||null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",60],8,16],",a=",["escape",["macro",19],8,16],",b=",["escape",["macro",48],8,16],";b=\/^editorial$|^world view$|^muse$|^seven days$|^news$|^news q and a$|^news explainer$|^news feature$|^comment$|^books and arts$|^books and arts q and a$|^correspondence$|^obituary$|^news.*views$|^news and views forum$|^futures$|^toolbox$|^career news$|^career feature$|^career q and a$|^career brief$|^career column$|^spotlight$|^career guide$|^technology feature$|^outlook$|^nature index$|^introduction$|^outline$|^correction$|^retraction$|^clarification$|^research highlight$|^research highlights$|^nature podcast$|^innovations in$|^nature careers podcast$|^nature briefing$|^arts review$|^book review$|^essay$|^news round\/.test(b);\na=\/^nature$\/.test(a);return\/magazine\/.test(c)||!0===b\u0026\u0026!0===a?\"magazine\":\"not magazine\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",19],8,16],".concat(",["escape",["macro",73],8,16],");return\/^naturemagazine$\/.test(a)?\"magazine nature\":",["escape",["macro",73],8,16],"})();"]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.collection.id"
    },{
      "function":"__j",
      "vtp_name":"Krux.user"
    },{
      "function":"__j",
      "vtp_name":"Krux.segments"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"mkt-key",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.documentType"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"briefingRedirectSource"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"unsupported\";\"connection\"in navigator\u0026\u0026(a=navigator.connection.saveData?\"on\":\"off\");return a})();"]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"briefingRedirectEid"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"acdid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"idp_marker"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"user.profile.profileInfo.resolvedBy"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"VSNUO",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","2","group",["macro",4]],["map","index","3","group",["macro",9]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",10]],["map","fieldName","anonymizeIp","value","true"],["map","fieldName","allowAdFeatures","value",["macro",12]]],
      "vtp_trackerName":"",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",13]],["map","index","4","dimension",["macro",16]],["map","index","5","dimension",["macro",19]],["map","index","6","dimension",["macro",21]],["map","index","8","dimension",["macro",25]],["map","index","9","dimension",["macro",27]],["map","index","10","dimension",["macro",29]],["map","index","11","dimension",["macro",31]],["map","index","12","dimension",["macro",33]],["map","index","13","dimension",["macro",35]],["map","index","14","dimension",["macro",37]],["map","index","16","dimension",["macro",39]],["map","index","17","dimension",["macro",41]],["map","index","18","dimension",["macro",43]],["map","index","19","dimension",["macro",46]],["map","index","20","dimension",["macro",48]],["map","index","21","dimension",["macro",50]],["map","index","22","dimension",["macro",52]],["map","index","23","dimension",["macro",54]],["map","index","25","dimension",["macro",56]],["map","index","26","dimension",["macro",58]],["map","index","27","dimension",["macro",60]],["map","index","28","dimension",["macro",62]],["map","index","30","dimension",["macro",64]],["map","index","60","dimension",["macro",9]],["map","index","61","dimension",["macro",66]],["map","index","63","dimension",["macro",70]],["map","index","72","dimension",["macro",72]],["map","index","74","dimension",["macro",74]],["map","index","65","dimension",["macro",75]],["map","index","1","dimension",["macro",76]],["map","index","2","dimension",["macro",77]],["map","index","75","dimension",["macro",78]],["map","index","78","dimension",["macro",79]],["map","index","80","dimension",["macro",80]],["map","index","79","dimension",["macro",81]],["map","index","81","dimension",["macro",82]],["map","index","82","dimension",["macro",83]],["map","index","84","dimension",["macro",75]],["map","index","86","dimension",["macro",84]],["map","index","90","dimension",["macro",85]],["map","index","91","dimension",["macro",85]],["map","index","92","dimension",["macro",86]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-71668177-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"productId",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=Bootstrapper.npg.utils.Consent;return a.allow(a.TARGETING)?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=Bootstrapper.npg.utils.Consent;return a.allow(a.PERFORMANCE)?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],",b=",["escape",["macro",3],8,16],";return a?a:b?b:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",101],8,16],";return a\u0026\u0026\"journal\"===a?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",101],8,16],";return!a||\"article\"!==a\u0026\u0026\"figure\"!==a\u0026\u0026\"issue\"!==a\u0026\u0026\"table\"!==a\u0026\u0026\"metrics\"!==a\u0026\u0026\"compound\"!==a\u0026\u0026\"scheme\"!==a?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",101],8,16],";return!a||\"search_results\"!==a\u0026\u0026\"journal-info\"!==a\u0026\u0026\"collection\"!==a\u0026\u0026\"publisher-level-subject\"!==a\u0026\u0026\"journal-articles\"!==a\u0026\u0026\"advanced_search\"!==a\u0026\u0026\"volume\"!==a\u0026\u0026\"journal-level-subject\"!==a\u0026\u0026\"site-index\"!==a\u0026\u0026\"magazine-index-page\"!==a\u0026\u0026\"volumes\"!==a\u0026\u0026\"contact\"!==a\u0026\u0026\"collection-articles\"!==a\u0026\u0026\"collections\"!==a\u0026\u0026\"subjects-homepage\"!==a\u0026\u0026\"journal-subjects\"!==a\u0026\u0026\"collection-info\"!==a\u0026\u0026\"static\"!==a\u0026\u0026\"issue-page\"!==a\u0026\u0026\"magazine-index-latest-careers\"!==a\u0026\u0026\"magazine-index-latest-news\"!==\na\u0026\u0026\"nature-briefing-unsubscribe-page\"!==a\u0026\u0026\"magazine-index-latest-research-analysis\"!==a\u0026\u0026\"magazine-index-latest-opinion\"!==a\u0026\u0026\"magazine-index-latest-books-culture\"!==a?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",80],8,16],",b=",["escape",["macro",82],8,16],";return a||b?!0:!1})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track-action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.pcode"
    },{
      "function":"__u",
      "vtp_component":"PROTOCOL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=Bootstrapper.npg.utils.Consent;return a.allow(a.FUNCTIONAL)?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",109],8,16],";return a\u0026\u0026(-1\u003Ca.indexOf(\"test-www\")||-1\u003Ca.indexOf(\"local-www\"))?\"\/\/recommended-qa.springernature.app\/latest\/generated\/entry-point.js\":\"\/\/recommended.springernature.com\/latest\/generated\/entry-point.js\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){if(b){var a=null,c=",["escape",["macro",67],8,16],";c\u0026\u0026(a=c.find(function(a){return a.name===b\u0026\u0026a.active}));return a\u0026\u0026a.active?!0:!1}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",116],8,16],"(\"ab_test_magazine_institution_survey\")})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ab_test_magazine_institution_survey"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",116],8,16],"(\"ab_test_magazine_paywall\")})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ab_test_magazine_paywall"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"backHalfContent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.open"
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],",c=",["escape",["macro",8],8,16],";return b(a(c))})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "convert_true_to":"granted",
      "convert_false_to":"denied",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",32],8,16],"||null})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "convert_null_to":"fish",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.open"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.ga.getAll()[0].get(\"clientId\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",77],8,16],";b=\/t8x81149p|t8x84p76g|t8x88awao|t8x9alusn\/.test(b);var a=",["escape",["macro",76],8,16],";a=\/[a-z]\/.test(a);return!0===b\u0026\u0026!0===a?\"usabilla survey SciRep ACD\":!0===a?\"usabilla survey\":\"do not include\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){var a=",["escape",["macro",117],8,16],"?\"ab_test_magazine_institution_survey\":\"ab_test_magazine_paywall\";window.Cookies.set(a,\"submitted\",{expires:31536E3,domain:\".nature.com\"})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){function e(c){var a=c.target;a=null!==a.getAttribute(\"href\")||null!==a.getAttribute(\"xlink:href\")||a.parentElement.classList.contains(\"paywall-box__button\");c.preventDefault();a\u0026\u0026(",["escape",["macro",129],8,16],"(),b.removeEventListener(\"click\",d,!1))}var b=document.querySelector(\"#usabilla-paywall-widget-container\");var d=e.bind(this);b\u0026\u0026b.addEventListener(\"click\",d,!1)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"object\"===typeof a\u0026\u0026null!==a}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){do{if(b(a))return a;a=a.parentNode}while(a)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,b,c){var e=",["escape",["macro",132],8,16],";return e(d,function(a){return a.hasAttribute\u0026\u0026a.hasAttribute(b)\u0026\u0026(\"undefined\"===typeof c||a.getAttribute(b)===c)})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){var c=",["escape",["macro",68],8,16],";return\"array\"===b\u0026\u0026!0===c(a)||typeof a===b?a:null}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,f){var g=",["escape",["macro",133],8,16],",d=function(){var c=g(b,\"data-track-component\");if(c)return c.getAttribute(\"data-track-component\");c=",["escape",["macro",59],8,16],";var a=",["escape",["macro",2],8,16],";return c\u0026\u0026a?c+\":\"+a:c||a||\"\"},a=function(){var a=g(b,\"data-track-component\");return a?a.getAttribute(\"data-track-component\")+\":\"+f:f};a=b.getAttribute(\"data-track-action\")||a();d=b.getAttribute(\"data-track-category\")||d();var e;(e=b.getAttribute(\"data-track-label\"))||(e=b.href\u0026\u0026window.location.hostname!==\nb.hostname?b.href:null);a={action:a,category:d,label:e};return a.label?a:null}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){window.dataLayer.push({event:\"interactive-event\",eventAction:a.action,eventCategory:a.category,eventLabel:a.label||void 0,eventValue:a.value||void 0,nonInteraction:a.nonInteraction||!1})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,a){var c=",["escape",["macro",133],8,16],",d=",["escape",["macro",135],8,16],",e=",["escape",["macro",136],8,16],";(b=c(b,\"data-track\",a))\u0026\u0026(a=d(b,a))\u0026\u0026e(a)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"nature\"===",["escape",["macro",112],8,16],"\u0026\u0026\"journal\"===",["escape",["macro",2],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",116],8,16],"(\"ab_use_nature_150_split_header\")})();"]
    },{
      "function":"__c",
      "vtp_value":"5dde6c3893906e530d7270d7"
    },{
      "function":"__c",
      "vtp_value":"5dde7c19658b762edd212ee4"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.category.pageType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1!==",["escape",["macro",11],8,16],".indexOf(\",3,\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"string\"===typeof ",["escape",["macro",11],8,16],"\u0026\u00260\u003C",["escape",["macro",11],8,16],".length?-1!==",["escape",["macro",11],8,16],".indexOf(\",2,\"):!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1!==",["escape",["macro",11],8,16],".indexOf(\",1,\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1!==",["escape",["macro",11],8,16],".indexOf(\",4,\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.author"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){arg=",["escape",["macro",147],8,16],";var a=0\u003Carg.length?arg.join(\";\"):null;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.authenticationID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){arg=",["escape",["macro",149],8,16],";var a=0\u003Carg.length?arg.join(\"|\"):null;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector);return function(a,b){for(console.log(a);a!==document.documentElement\u0026\u0026!a.matches(b);)a=a.parentElement;return a.matches(b)?a:void 0}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.section"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function b(a,b){a=a.map(function(a){return a[b]});return 0\u003Ca.length?a=a.join(\";\"):null}arr=",["escape",["macro",152],8,16],";arg=\"sectionName\";return b(arr,arg)})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-71668177-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.authenticationIDString"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.entitled"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.method"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"version"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track-category"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track-label"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track-value"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent\u0026\u0026a.attachEvent(\"on\"+b,function(){window.event.target=window.event.srcElement;c.apply(a,[window.event])})}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var b=",["escape",["macro",164],8,16],";a=parseInt(a.getAttribute(\"data-track-product\"),10);return productAtIndex(b,a)}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promotion"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var c=",["escape",["macro",134],8,16],";a=parseInt(a.getAttribute(\"data-track-promotion\"),10);var b=",["escape",["macro",166],8,16],";if(!isNaN(a)\u0026\u0026c(b,\"array\")\u0026\u0026b.length\u003Ea)return b=b[a],{id:c(b.promotionInfo.promotionID,\"string\"),name:c(b.promotionInfo.promotionName,\"string\"),position:\"slot\"+a}}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.template"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){function l(){var b=!0,a={\"page.category.pageType\":[",["escape",["macro",2],8,16],",\"string\"],\"content.attributes.template\":[",["escape",["macro",168],8,16],",\"string\"]},c;for(c in a){var d=a[c][0];var e=a[c][1];d=\"array\"===e\u0026\u0026!0===Array.isArray(d)?d:typeof d===e?d:null;d||(g(\"required\",c),b=!1);\"string\"==a[c][1]\u0026\u00261\u003Ea[c][0].length\u0026\u0026(g(\"empty\",c),b=!1)}return b}function g(a,b){var c;\"required\"==a\u0026\u0026(c=\"Required Field Misspecified\");\"empty\"==a\u0026\u0026(c=\"Missing Value\");a=\"dataLayerError: \"+c+\" (\"+\nb+\")\";console.error(a)}var e=b.getAttribute(\"data-track\"),h=",["escape",["macro",133],8,16],"(b,\"data-track-component\"),a={};if(!1===l())return null;if(\"click\"===e){var k=b.getAttribute(\"data-track-label\")||(b.href\u0026\u0026window.location.hostname!==b.hostname?b.href:null),m=b.getAttribute(\"data-track-category\")||",["escape",["macro",168],8,16],"+\":\"+",["escape",["macro",2],8,16],",f=b.getAttribute(\"data-track-action\");b.getAttribute(\"checked\");h\u0026\u0026!f\u0026\u0026(f=h.getAttribute(\"data-track-component\")+\":\"+e);if(k)return a.event=\"data-track\",a.eventAction=\nf,a.eventCategory=m,a.eventLabel=k,a;console.error(\"dataLayerError: More Arguments Needed (data-track-label)\");return null}if(\"download\"===e)return a.event=\"data-track\",a.eventAction=\"download\",a.category=",["escape",["macro",168],8,16],"+\":\"+",["escape",["macro",2],8,16],",a.eventLabel=b.getAttribute(\"href\"),a}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,c){var b=",["escape",["macro",134],8,16],";if(!isNaN(c)\u0026\u0026b(a,\"array\")\u0026\u0026a.length\u003Ec)return a=a[c],{id:b(a.productInfo.sku,\"string\"),name:b(a.productInfo.productName,\"string\"),brand:b(a.productInfo.brand,\"string\"),variant:b(a.category.productType,\"string\"),price:b(a.price.basePrice,\"number\").toString(),position:\"slot\"+c}}})();"]
    },{
      "function":"__v",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.token"
    },{
      "function":"__c",
      "vtp_value":"true"
    },{
      "function":"__v",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.profile.profileInfo.clientID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.href.substr(window.location.href.indexOf(\"mkt-key\\x3d\")+8)||null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",51],8,16],"?",["escape",["macro",51],8,16],".split(\";\"):[\"(not set)\"]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",21],8,16],";a=\/10\\.1038\\\/nphys1404\/.test(a);return!0===a?\"usabilla survey VSNU DOI\":\"do not include\"})();"]
    },{
      "function":"__j",
      "vtp_name":"localStorage._pdfps"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":9999,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EBootstrapper=window.Bootstrapper||{};Bootstrapper.npg=Bootstrapper.npg||{};Bootstrapper.npg.utils=Bootstrapper.npg.utils||{};\nBootstrapper.npg.utils.Consent=function(){var c=function(){for(var b=document.cookie.split(\/;\\s*\/),a=0;b[a];++a)if(-1!==b[a].indexOf(\"OptanonConsent\\x3d\"))return b[a].split(\"\\x3d\").slice(1).join(\"\\x3d\");return\"\"};c=unescape(c());var d=(\/groups=([^\u0026]+)\/.exec(c)||[\"\",\"\"])[1].split(\",\");return{STRICTLY_NECESSARY:1,PERFORMANCE:2,FUNCTIONAL:3,TARGETING:4,allow:function(b){if(b===this.STRICTLY_NECESSARY)return!0;for(var a=0;d[a];++a)if(d[a]===b+\":0\")return!1;return!0}}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__opt",
      "priority":99,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-P8FX28R",
      "vtp_gaSettings":["macro",87],
      "tag_id":58
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"OneTrust Cookie Consent",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",87],
      "vtp_eventAction":"Banner Display",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1
    },{
      "function":"__paused",
      "vtp_originalTagType":"cegg",
      "tag_id":5
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":7
    },{
      "function":"__paused",
      "vtp_originalTagType":"asp",
      "tag_id":8
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":10
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":14
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":15
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":18
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":19
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":20
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":21
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":22
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":26
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":27
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":28
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":29
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":32
    },{
      "function":"__ua",
      "teardown_tags":["list",["tag",80,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",87],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":36
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Collections Event Exit",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",87],
      "vtp_eventAction":"Exit Click",
      "vtp_eventLabel":["macro",94],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":39
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":42
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",96],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",97],
      "vtp_eventCategory":["macro",98],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",87],
      "vtp_eventAction":["macro",99],
      "vtp_eventLabel":["macro",100],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":43
    },{
      "function":"__crto",
      "once_per_event":true,
      "vtp_accountId":"60881",
      "vtp_tagType":"HOME_TAG",
      "vtp_siteType":["macro",103],
      "tag_id":48
    },{
      "function":"__crto",
      "once_per_event":true,
      "vtp_accountId":"60881",
      "vtp_productID":["macro",21],
      "vtp_tagType":"PRODUCT_TAG",
      "vtp_siteType":["macro",103],
      "tag_id":49
    },{
      "function":"__crto",
      "once_per_event":true,
      "vtp_accountId":"60881",
      "vtp_tagType":"LISTING_TAG",
      "vtp_listingID":["macro",106],
      "vtp_siteType":["macro",103],
      "tag_id":50
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"reading",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",87],
      "vtp_eventAction":"30-seconds-reading",
      "vtp_eventLabel":["macro",20],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":51
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":52
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":53
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":54
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":55
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":57
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"scroll-depth",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",87],
      "vtp_eventAction":"scrolling",
      "vtp_eventLabel":["template",["macro",110],"%"],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":63
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":65
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_tagId":"12000044",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":66
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"magazine test paywall",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",87],
      "vtp_eventAction":"in view",
      "vtp_eventLabel":"paywall box",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":76
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Nature Magazine Institution Survey",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",87],
      "vtp_eventAction":"in view",
      "vtp_eventLabel":"institution survey",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":77
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":305
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",87],
      "vtp_eventAction":"author link - publication",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":311
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",87],
      "vtp_eventAction":"author link - pubmed",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":314
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",87],
      "vtp_eventAction":"author link - scholar",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":315
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_77",
      "tag_id":363
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"10482319_145",
      "tag_id":364
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_150",
      "tag_id":365
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_151",
      "tag_id":366
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_152",
      "tag_id":367
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_153",
      "tag_id":368
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"10482319_193",
      "vtp_enableTriggerStartOption":true,
      "tag_id":369
    },{
      "function":"__evl",
      "vtp_elementId":"gtm-usabilla-survey-widget",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"100",
      "vtp_uniqueTriggerId":"10482319_289",
      "tag_id":370
    },{
      "function":"__evl",
      "vtp_elementId":"usabilla-paywall-widget-container",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"100",
      "vtp_uniqueTriggerId":"10482319_290",
      "tag_id":371
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"10482319_294",
      "vtp_enableTriggerStartOption":true,
      "tag_id":372
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_312",
      "tag_id":373
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_313",
      "tag_id":374
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_316",
      "tag_id":375
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction splitKeys(b){var k=[],g=\"\",f=[],l=b.split(\";\");for(b=0;b\u003Cl.length;++b){void 0!==n\u0026\u0026(g=n);var h=l[b].split(\"\\x3d\");var n=h[0];n!==g\u0026\u0026(0\u003Cg.length\u0026\u00260\u003Ck.length\u0026\u0026f.push([g,k]),k=[]);if(2===h.length\u0026\u0026\"\"!==h[0]\u0026\u0026\"\"!==h[1]){var r=h[1].split(\",\");for(h=0;h\u003Cr.length;++h)k.push(r[h])}}0\u003Cn.length\u0026\u00260\u003Ck.length\u0026\u0026f.push([n,k]);return f}\nfunction getScript(b,k){var g=document.createElement(\"script\"),f=document.getElementsByTagName(\"script\")[0];g.async=1;g.onload=g.onreadystatechange=function(l,h){if(h||!g.readyState||\/loaded|complete\/.test(g.readyState))g.onload=g.onreadystatechange=null,g=void 0,h||k\u0026\u0026k()};g.src=b;f.parentNode.insertBefore(g,f)}\nfunction splitSizes(b){var k=[];if(null!==b){var g=-1!==b.indexOf(\"|\")?b.split(\"|\"):b.split(\",\");for(b=0;b\u003Cg.length;++b){var f=g[b].split(\"x\");var l=parseInt(f[0],10);var h=parseInt(f[1],10);2===f.length\u0026\u0026!isNaN(l)\u0026\u0026!isNaN(h)\u0026\u00260\u003C=l\u0026\u00260\u003C=h\u0026\u0026k.push([l,h])}}return k}function hasClass(b,k){var g,f=b.className.split(\/\\s+\/);b=0;for(g=f.length;b\u003Cg;++b)if(f[b]===k)return!0;return!1}\nfunction getAdContainers(){if(\"function\"===typeof document.getElementsByClassName)return document.getElementsByClassName(\"div-gpt-ad\");var b,k=[],g=document.getElementsByTagName(\"div\");for(b=0;g[b];++b)hasClass(g[b],\"div-gpt-ad\")\u0026\u0026k.push(g[b]);return k}function debounce(b,k){var g=null,f=null;return function(){var l=this,h=+new Date,n=arguments;g\u0026\u0026h\u003Cg+k?(clearTimeout(f),f=setTimeout(function(){g=h;b.apply(l,n)},k)):(g=h,b.apply(l,n))}}\nfunction addResizeEvent(b){window.addEventListener?window.addEventListener(\"resize\",b,!1):window.attachEvent(\"resize\",b)}function addScrollEvent(b){window.addEventListener?window.addEventListener(\"scroll\",b,!1):window.attachEvent(\"onscroll\",b)}function removeScrollEvent(b){window.removeEventListener?window.removeEventListener(\"scroll\",b,!1):window.detachEvent(\"scroll\",b)}function serveAdsFor(b){return-1!==b.indexOf(\"\/naturejobs\")?!1:!0}\nfunction initAds(b,k){var g=Bootstrapper.npg.utils,f=[],l,h=null;if(-1===b.location.search.indexOf(\"hide_ads\\x3dtrue\")\u0026\u0026serveAdsFor(b.location.pathname)){var n=function(a){var d=Math.max(k.clientHeight,b.innerHeight||0);return r(a,function(c){if(c.isOutOfPage||c.forceLoadOnInit)return!0;var e=document.getElementById(c.divId),m=e.getBoundingClientRect();m=m.top-300;m=d\u003Em;var p=null!==e.offsetParent;c=c.sizeArray\u0026\u0026c.sizeArray.length\u0026\u0026c.sizeArray[0].length\u0026\u00262===c.sizeArray[0][0];e=e.getAttribute(\"data-ad-type\")?\n-1===e.getAttribute(\"data-ad-type\").indexOf(\"top\"):!1;var u=770\u003Eb.innerWidth;return m\u0026\u0026p\u0026\u0026!1===u||c||m\u0026\u0026p\u0026\u0026u\u0026\u0026e})},r=function(a,d){for(var c=a.length,e=[];c--;)d(a[c],c)\u0026\u0026(e.push(a[c].slot),a.splice(c,1));e.length\u0026\u0026googletag.pubads().refresh(e);return a},t={\"career feature\":!0,\"career news\":!0,\"career q\\x26a\":!0,\"career brief\":!0,\"career column\":!0,spotlight:!0,\"career guide\":!0,\"technology feature\":!0,\"nature careers podcast\":!0},z=function(){var a=b.dataLayer?",["escape",["macro",112],8,16],":null;if(a)return a;\nif(-1!==b.location.hostname.indexOf(\"guide.labanimal\"))return a=b.location.pathname,a=-1!==a.indexOf(\"categ\")?\"products\":-1!==a.indexOf(\"supplier\")?\"suppliers\":\"homepage\",\"laban\/guide.labanimal\/\"+a;a=b.location.pathname.replace(\/^\\\/+\/,\"\").split(\"\/\");var d=b.location.hostname.split(\".\").slice(1).join(\".\");return a.length\u0026\u0026\"\"!==a[0]?a[0]:d},A=function(a){var d=\"\/270604982\";0!==a.indexOf(\"\/\")\u0026\u0026(a=\"\/\"+a);0===a.indexOf(\"\/285\/\")\u0026\u0026(a=a.replace(\/^\\\/285\\\/[^\\\/]+\/,d+\"\/nature\/\"+z()));a=a.replace(\"\/nature\/laban\",\n\"\/laban\");a=a.replace(\"\/nature\/nature.com\/index\",\"\/nature\/nature\/homepage\");a=a.replace(\"\/collections\/collections\",\"\/collections\");a=a.replace(\"\/search\/search_results\",\"\/nature\/search\");a=a.replace(\/\\\/article$\/,\"\/articles\");a=a.replace(\/\\\/nature\\\/authors\\\/.*\/,\"\/nature\/nature\/authors\");-1!==b.location.hostname.indexOf(\"blogs\")\u0026\u0026(a=a.replace(\/\\\/nature\\\/.*\/,\"\/nature\/nature\/blogs\"));-1!==b.location.hostname.indexOf(\"natureindex\")\u0026\u0026(a=a.replace(\/\\\/nature\\\/.*\/,\"\/nature\/nature_index\"),\"\/\"===b.location.pathname\u0026\u0026\n(a+=\"\/homepage\"));window.dataLayer\u0026\u0026t[",["escape",["macro",7],8,16],"]\u0026\u0026(a=a.replace(\/\\\/articles$\/,\"\/naturecareers\"));a:{if(\/^\\\/nature\\\/articles\\\/?$\/.test(window.location.pathname)){var c=(\/^.*?(?:\\?|\u0026)type=([^\u0026]+)\/.exec(b.location.search)||[\"\",\"\"])[1];if(t[c.replace(\/-\/g,\" \").replace(\/ and \/,\"\\x26\")]){c=!0;break a}}c=!1}c\u0026\u0026(a=a.replace(\/\\\/article-list$\/,\"\/naturecareers\"));(c=document.querySelector('meta[name\\x3d\"brandedcontent\"]'))\u0026\u0026\"true\"===c.getAttribute(\"content\")\u0026\u0026(a=d+\"\/nature\/brandedcontent\");return a},\nB=function(a){for(var d={},c=0;a[c];++c){var e=a[c].size;var m=\"2x2\"===a[c].size?window.dataLayer\u0026\u0026\"core media\"===",["escape",["macro",53],8,16],"\u0026\u0026-1!==b.location.pathname.indexOf(\"\/articles\/\")?3:0:0;d[e]={count:m,name:a[c].name}}return d}([{size:\"728x90\",name:\"LB\"},{size:\"300x250\",name:\"MPU\"},{size:\"160x600\",name:\"SKY\"},{size:\"970x250\",name:\"BB\"},{size:\"2x2\",name:\"NATIVE\"},{size:\"300x100\",name:\"REC\"},{size:\"180x150\",name:\"EVENTS\"},{size:\"160x60\",name:\"TILE\"}]),q=function(a,d,c,e){for(var m=!1,p=0;a[p];++p)a[p][0]===\nd\u0026\u0026null!==c\u0026\u0026(a[p][1]=e?a[p][1].concat(c):[c],m=!0);m||null===c||a.push([d,[c]]);return a},v=function(a,d,c){for(var e=0;a[e];++e)a[e][0]===d\u0026\u0026(a[e][0]=c);return a},C=function(a,d){var c=a;var e=-1!==b.location.search.indexOf(\"test\\x3dads\")?\";adtype\\x3dtest\":\"\";c=c.getAttribute(\"data-gpt-targeting\");e\u0026\u0026-1===c.indexOf(e)\u0026\u0026(c+=e);(e=",["escape",["macro",65],8,16],")\u0026\u0026(c+=\";bpid\\x3d\"+e.replace(\/;\/g,\",\"));0===b.location.pathname.indexOf(\"\/collections\/\")\u0026\u0026(e=document.querySelector(\"span.hero-title-inner\"))\u0026\u0026(c+=\n\";sponsored\\x3d\"+e.innerText.replace(\/^\\s+\/,\"\").replace(\/\\s+$\/,\"\").replace(\/\\s+\/g,\"_\").replace(\/\\W+\/g,\"\"));c=v(splitKeys(c),\"artid\",\"articleid\");c=v(c,\"kw\",\"search\");a=a.getAttribute(\"data-gpt-sizes\");a=(a=B[a])?a.name+ ++a.count:null;a=q(c,\"pos\",a);d=q(a,\"tile\",d+1);a=b.location.pathname.split(\"\/\");a=3===a.length\u0026\u0026\"subjects\"===a[1]?a[2]:null;d=q(d,\"subject\",a);d=q(d,\"article\",window.dataLayer\u0026\u0026t[",["escape",["macro",7],8,16],"]?\"naturecareers\":null);a=window.dataLayer?",["escape",["macro",75],8,16],":null;d=q(d,\"collectionID\",\na);return d=q(d,\"type\",window.dataLayer\u0026\u0026\"core media\"===",["escape",["macro",53],8,16],"?\"fronthalf\":null,!0)},w=function(a){for(var d=[],c=0;a[c];++c){var e=a[c];d.push({divId:e.getAttribute(\"id\"),adUnitPath:A(e.getAttribute(\"data-gpt-unitpath\")),sizeArray:splitSizes(e.getAttribute(\"data-gpt-sizes\")),targeting:C(e,c),isOutOfPage:hasClass(e,\"out-of-page\"),forceLoadOnInit:!1,refreshed:!1})}return d},x=function(){googletag.cmd.push(function(){googletag.pubads().setRequestNonPersonalizedAds(g.Consent.allow(g.Consent.TARGETING)?\n0:1);googletag.pubads().disableInitialLoad();googletag.enableServices();var a={};googletag.pubads().addEventListener(\"slotRenderEnded\",function(d){var c=d.slot\u0026\u0026d.slot.getSlotElementId?d.slot.getSlotElementId():null,e;a[c]=!d.isEmpty;(a[\"div-gpt-ad-native-2\"]||a[\"div-gpt-ad-native-1\"])\u0026\u0026(e=document.querySelector(\".c-paid-content\"))\u0026\u0026e.classList.remove(\"hide\");\"div-gpt-ad-billboard-2\"===c\u0026\u0026!1===d.isEmpty\u0026\u0026(e=document.getElementById(c),e.parentNode.parentNode.classList.add(\"pb40\"),e.parentNode.parentNode.classList.remove(\"pb20\"),\ne.parentNode.parentNode.classList.remove(\"hide\"));c\u0026\u0026d.isEmpty\u0026\u0026(e=document.getElementById(c),e.parentNode.parentNode.classList.remove(\"pb20\"),e.parentNode.classList.remove(\"ad-with-label\"))})});googletag.cmd.push(function(){for(var a=0;f[a];++a)try{f[a].slot=f[a].isOutOfPage?googletag.defineOutOfPageSlot(f[a].adUnitPath,f[a].divId).addService(googletag.pubads()):googletag.defineSlot(f[a].adUnitPath,f[a].sizeArray,f[a].divId).addService(googletag.pubads());for(var d=0,c=f[a].targeting.length;d\u003Cc;++d)if(2===\nf[a].targeting[d].length\u0026\u0026\"\"!==f[a].targeting[d][0]\u0026\u0026\"\"!==f[a].targeting[d][1]){if(\"pos\"===f[a].targeting[d][0]\u0026\u00260===f[a].targeting[d][1][0].indexOf(\"BB\")){l=f[a].slot;var e=googletag.sizeMapping().addSize([970,250],[3,3]).addSize([770,100],[4,4]).addSize([0,0],[5,5]).build();l.defineSizeMapping(e);l.setCollapseEmptyDiv(!0,!1)}f[a].slot.setTargeting(f[a].targeting[d][0],f[a].targeting[d][1])}}catch(m){console.log(\"failed to create slot for\",f[a])}});googletag.cmd.push(function(){for(var a=0;f[a];++a)googletag.display(f[a].divId)})},\ny=function(){h\u0026\u0026removeScrollEvent(h);googletag.cmd.push(function(){f=n(f)});h=debounce(function(){googletag.cmd.push(function(){f=n(f);f.length||(removeScrollEvent(h),h=null)})},250);addScrollEvent(h)};getScript(\"\/\/www.googletagservices.com\/tag\/js\/gpt.js\",function(){b.googletag=b.googletag||{};b.googletag.cmd=b.googletag.cmd||[];f=w(getAdContainers());x();y();var a=969\u003Cb.innerWidth,d=769\u003Cb.innerWidth\u0026\u0026!a,c=770\u003Eb.innerWidth,e=debounce(function(){var m=b.innerWidth;970\u003C=m\u0026\u0026!a?(a=!0,c=d=!1,googletag.cmd.push(function(){googletag.pubads().refresh([l])})):\n770\u003Em\u0026\u0026!c?(d=a=!1,c=!0,googletag.cmd.push(function(){googletag.pubads().refresh([l])})):970\u003Em\u0026\u0026769\u003Cm\u0026\u0026!d\u0026\u0026(a=!1,d=!0,c=!1,googletag.cmd.push(function(){googletag.pubads().refresh([l])}))},250);addResizeEvent(e);document.addEventListener(\"refreshads\",function(){googletag.destroySlots();f=w(getAdContainers());x();y()},!1)})}}\n-1===window.location.hostname.indexOf(\"nature.com\")\u0026\u0026(\"complete\"===document.readyState||\"loaded\"===document.readyState||\"interactive\"===document.readyState?initAds(window,document.documentElement):document.addEventListener(\"load\",function(){initAds(window,document.documentElement)}));document.addEventListener(\"permutiveready\",function(){initAds(window,document.documentElement)},!1);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":16
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];s=a.createElement(\"script\");s.type=\"text\/javascript\";s.async=!0;s.src=\"\/\/optanon.blob.core.windows.net\/consent\/ce47efd6-7cab-4c50-806d-b2e4fc5cd34d.js\";b.parentNode.insertBefore(s,b)})();function OptanonWrapper(){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":23
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar filterMeta=function(b){for(var c=[],a=0;b[a];++a)b[a].name\u0026\u0026c.push(b[a]);return c},translateMeta=function(b){var c={\"WT.cg_n\":\"product_name\",\"WT.site_id\":\"site_id\",\"WT.site_id_name\":\"site_id_name\",\"WT.registrant_id\":\"user_id\"};return c[b]||b},getMeta=function(b){var c=filterMeta(document.getElementsByTagName(\"meta\")||[]),a=document.getElementsByTagName(\"body\")||[],f=function(){for(var a=c.length,d={},e;a--;)if(e=translateMeta(c[a].name))d[e]?(\"string\"===typeof d[e]\u0026\u0026(d[e]=[d[e]]),d[e].push(c[a].content)):\nd[e]=c[a].content||\"\";d.keywords\u0026\u0026(d.keywords=d.keywords.replace(\/,\/g,\";\"));b(d)};a.length?f():c.length\u0026\u0026f()};getMeta(function(b){window._pageMetaData=b});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":24
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var h=function(d,f,g,h){this.get=function(a){a+=\"\\x3d\";for(var b=document.cookie.split(\";\"),c=0,d=b.length;c\u003Cd;c++){for(var e=b[c];\" \"==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(a))return e.substring(a.length,e.length)}return null};this.set=function(a,b){var c=new Date;c.setTime(c.getTime()+6048E5);c=\"; expires\\x3d\"+c.toGMTString();document.cookie=a+\"\\x3d\"+b+c+\"; path\\x3d\/; \"};this.check=function(){var a=this.get(g);if(a)a=a.split(\":\");else if(100!=d)\"v\"==f\u0026\u0026(d=Math.random()\u003E=\nd\/100?0:100),a=[f,d,0],this.set(g,a.join(\":\"));else return!0;var b=a[1];if(100==b)return!0;switch(a[0]){case \"v\":return!1;case \"r\":return b=a[2]%Math.floor(100\/b),a[2]++,this.set(g,a.join(\":\")),!b}return!0};this.go=function(){if(this.check()){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=h+\"\\x26t\\x3d\"+(new Date).getTime();document.body\u0026\u0026document.body.appendChild(a)}};this.start=function(){var a=this;window.addEventListener?window.addEventListener(\"load\",function(){a.go()},\n!1):window.attachEvent\u0026\u0026window.attachEvent(\"onload\",function(){a.go()})}},f=document.createElement(\"div\");f.setAttribute(\"id\",\"SI_9LEO1QcbH9BEzFb\");document.body.appendChild(f);try{var k=new h(100,\"r\",\"QSI_S_SI_9LEO1QcbH9BEzFb\",\"https:\/\/zn7vxbjk81nhox2qf-springernature.siteintercept.qualtrics.com\/SIE\/?Q_SIID\\x3dSI_9LEO1QcbH9BEzFb\\x26Q_LOC\\x3d\"+encodeURIComponent(window.location.href));k.start()}catch(d){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar c_id=\"14617931\",_comscore=window._comscore=_comscore||[];_comscore.push({c1:\"2\",c2:c_id});(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;var c=\"https:\"==document.location.protocol?\"https:\/\/sb\":\"http:\/\/b\";a.src=c+\".scorecardresearch.com\/beacon.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":31
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=",["escape",["macro",115],8,16],";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s=document.getElementsByTagName(\"script\")[0],p=document.createElement(\"script\");p.async=\"async\";p.src=\"\/\/scripts.webcontentassessor.com\/scripts\/93dabb8d80079a87fec7bb6f67b807fce90e1688f8957ad7ad152bfd58ea01c2\";s.parentNode.insertBefore(p,s);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o1unr\");twq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E-1==document.location.href.search(\"appspot.com\")\u0026\u0026-1==document.referrer.search(\"appspot.com\")\u0026\u0026!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1229240860577415\");\nfbq(\"track\",\"PageView\");var segs=",["escape",["macro",77],8,16],";fbq(\"trackCustom\",\"SciRep_inMarket\",{t4fs93hlz:segs});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1229240860577415\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.querySelector\u0026\u0026function(d){if(d){var g={publisherName:\"SpringerNature\",imprint:\"Nature\",orderBeanReset:\"true\"},h=function(a){for(var b={},e=\/([^\u0026=]+)=?([^\u0026]*)\/g,c=a.substring(1);a=e.exec(c);)b[decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))]=decodeURIComponent(a[2].replace(\/\\+\/g,\" \"));return b}(d.search),k=function(a,b){var e=a.protocol+\"\/\/\"+a.hostname+a.pathname;var c=b;var d=[],f;for(f in c)c.hasOwnProperty(f)\u0026\u0026d.push(f+\"\\x3d\"+encodeURIComponent(c[f]));c=\"?\"+d.join(\"\\x26\");e+=c;a.setAttribute(\"href\",\ne)},b;for(b in g)g.hasOwnProperty(b)\u0026\u0026(h[b]=g[b]);k(d,h)}}(document.querySelector('a[href^\\x3d\"https:\/\/s100.copyright.com\"]'));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",78,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(c){function g(b,d){d\u0026\u0026(d+=(\/\\?\/.test(d)?\"\\x26\":\"?\")+\"lv\\x3d1\");c[b]||function(){var k=window,h=document,l=b,g=h.location.protocol,n=\"load\",m=0;(function(){function b(){a.P(n);a.w=1;c[l](\"_load\")}c[l]=function(){function p(){p.id=e;return c[l].apply(p,arguments)}var e=++m;var b=this\u0026\u0026this!=k?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);p.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],l=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b\u0026\u0026d.push(b);c\u0026\u0026l.push(c);h\u0026\u0026f.push(h);\nreturn p};return p};var a=c[l]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(\"https:\"==g?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();k.addEventListener?k.addEventListener(n,b,!1):k.attachEvent(\"on\"+n,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",e,' onload\\x3d\"var d\\x3d',q,\";d.getElementsByTagName('head')[0].\",d,\"(d.\",g,\"('script')).\",k,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",e,\"\\x3e\"].join(\"\")}var e=\"body\",c=h[e];if(!c)return setTimeout(t,\n100);a.P(1);var d=\"appendChild\",g=\"createElement\",k=\"src\",m=h[g](\"div\"),n=m[d](h[g](\"div\")),f=h[g](\"iframe\"),q=\"document\";m.style.display=\"none\";c.insertBefore(m,c.firstChild).id=r+\"-\"+l;f.frameBorder=\"0\";f.id=r+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(f[k]=\"javascript:false\");f.allowTransparency=\"true\";n[d](f);try{f.contentWindow[q].open()}catch(w){a.domain=h.domain;var u=\"javascript:var d\\x3d\"+q+\".open();d.domain\\x3d'\"+h.domain+\"';\";f[k]=u+\"void(0);\"}try{var v=f.contentWindow[q];v.write(b());\nv.close()}catch(w){f[k]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();c[b].lv=\"1\";return c[b]}var r=\"lightningjs\",m=window[r]=g(r);m.require=g;m.modules=c}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/c9624a2fb834.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":59
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",78,2]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(c){function g(b,d){d\u0026\u0026(d+=(\/\\?\/.test(d)?\"\\x26\":\"?\")+\"lv\\x3d1\");c[b]||function(){var k=window,h=document,l=b,g=h.location.protocol,n=\"load\",m=0;(function(){function b(){a.P(n);a.w=1;c[l](\"_load\")}c[l]=function(){function p(){p.id=e;return c[l].apply(p,arguments)}var e=++m;var b=this\u0026\u0026this!=k?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);p.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],l=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b\u0026\u0026d.push(b);c\u0026\u0026l.push(c);h\u0026\u0026f.push(h);\nreturn p};return p};var a=c[l]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(\"https:\"==g?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();k.addEventListener?k.addEventListener(n,b,!1):k.attachEvent(\"on\"+n,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",e,' onload\\x3d\"var d\\x3d',q,\";d.getElementsByTagName('head')[0].\",d,\"(d.\",g,\"('script')).\",k,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",e,\"\\x3e\"].join(\"\")}var e=\"body\",c=h[e];if(!c)return setTimeout(t,\n100);a.P(1);var d=\"appendChild\",g=\"createElement\",k=\"src\",m=h[g](\"div\"),n=m[d](h[g](\"div\")),f=h[g](\"iframe\"),q=\"document\";m.style.display=\"none\";c.insertBefore(m,c.firstChild).id=r+\"-\"+l;f.frameBorder=\"0\";f.id=r+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(f[k]=\"javascript:false\");f.allowTransparency=\"true\";n[d](f);try{f.contentWindow[q].open()}catch(w){a.domain=h.domain;var u=\"javascript:var d\\x3d\"+q+\".open();d.domain\\x3d'\"+h.domain+\"';\";f[k]=u+\"void(0);\"}try{var v=f.contentWindow[q];v.write(b());\nv.close()}catch(w){f[k]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();c[b].lv=\"1\";return c[b]}var r=\"lightningjs\",m=window[r]=g(r);m.require=g;m.modules=c}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/b91e4719b0f6.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":61
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",83,0]],
      "teardown_tags":["list",["tag",79,2]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003Ewindow.usabilla||function(){var a=window,d=a.document,b={},g=d.createElement(\"div\"),h=!1;a=a.usabilla=function(){(b.a=b.a||[]).push(arguments)};a._=b;b.ids={};g.style.display=\"none\";(function(){if(!d.body)return setTimeout(arguments.callee,100);d.body.insertBefore(g,d.body.firstChild).id=\"usabilla\";h=!0})();a.load=function(a,f,k){if(!b.ids[f]){var e=b.ids={};e.url=\"\/\/\"+a+\"\/\"+f+\".js?s1\";e.config=k;setTimeout(function(){if(!h)return setTimeout(arguments.callee,100);var c=d.createElement(\"iframe\");c.id=\n\"usabilla-\"+f;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(c.src=\"javascript:false\");g.appendChild(c);try{c.contentWindow.document.open()}catch(l){e.domain=d.domain;var a=\"javascript:var d\\x3ddocument.open();d.domain\\x3d'\"+e.domain+\"';\";c.src=a+\"void(0);\"}try{var b=c.contentWindow.document;b.write([\"\\x3c!DOCTYPE html\\x3e\\x3chtml\\x3e\\x3chead\\x3e\\x3c\/head\\x3e\\x3cbody onload\\x3d\\\"var d \\x3d document;d.getElementsByTagName('head')[0].appendChild(d.createElement('script')).src\\x3d'\",e.url,\"'\\\"\\x3e\\x3c\/body\\x3e\\x3c\/html\\x3e\"].join(\"\"));\nb.close()}catch(l){c.src=a+'d.write(\"'+loaderHtml().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}c.contentWindow.config=k;c.contentWindow.SCRIPT_ID=f},0)}}}();window.usabilla.load(\"w.usabilla.com\",\"6fa646ed3ab3\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":71
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar mainArticleBodyContainer=document.querySelector(\"#main-article-body\");mainArticleBodyContainer\u0026\u0026mainArticleBodyContainer.classList.remove(\"js-hide\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":75
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,b,c,d,e){if(!b)for(b=b||{},window.permutive=b,b.q=[],b.config=e||{},b.config.projectId=c,b.config.apiKey=d,b.config.environment=b.config.environment||\"production\",a=\"addon identify track trigger query segment segments ready on once user consent\".split(\" \"),c=0;c\u003Ca.length;c++)d=a[c],b[d]=function(a){return function(){var c=Array.prototype.slice.call(arguments,0);b.q.push({functionName:a,arguments:c})}}(d)}(document,window.permutive,\"2e4b93d1-a8ae-4a89-8885-6109135ac0de\",\"7509d50f-8950-4699-a535-f9942eea50bf\",\n{consentRequired:!0});window.googletag=window.googletag||{};window.googletag.cmd=window.googletag.cmd||[];window.googletag.cmd.push(function(){if(0===window.googletag.pubads().getTargeting(\"permutive\").length){var a=window.localStorage.getItem(\"_pdfps\");window.googletag.pubads().setTargeting(\"permutive\",a?JSON.parse(a):[])}});permutive.readyWithTimeout=function(a,b,c){var d=!1,e=function(){d||(a(),d=!0)};(c=c||1\/0)!==1\/0\u0026\u0026window.setTimeout(e,c);permutive.ready(e,b)};\nvar NOT_SET=\"(not set)\",identity=function(a){return a},clean=function(a,b){return(b||identity)(a===NOT_SET||!a\u0026\u0026\"number\"!==typeof a?null:a)},bool=function(a){return a===NOT_SET?!1:!!a},lower=function(a){return\"string\"===typeof a?a.toLowerCase():a},strip=function(a){var b=0,c=0,d;for(d in a)++b,a.hasOwnProperty(d)\u0026\u0026null===a[d]\u0026\u0026(++c,delete a[d]);return b===c?null:a},pathSegments=function(){for(var a={},b=window.location.pathname.slice(1).split(\"\/\"),c=0,d=b.length;c\u003Cd;++c)2\u003Ec?a[\"level\"+(c+1)]=b[c]:\na.level2+=\"\/\"+b[c];return a},clientId=function(){return window.ga\u0026\u0026window.ga.getAll?window.ga.getAll()[0].get(\"clientId\"):null},gaClientId=clientId(),content=strip({article:strip({doi:clean(",["escape",["macro",20],8,16],"),title:clean(",["escape",["macro",57],8,16],"),type:clean(",["escape",["macro",2],8,16],",lower),keywords:clean(",["escape",["macro",51],8,16],",function(a){a=(a||\"\").split(\";\");return 0===a.length||1===a.length\u0026\u0026\"\"===a[0]?null:a})}),category:strip({contentType:clean(",["escape",["macro",7],8,16],",lower)}),path:pathSegments(),backHalf:bool(",["escape",["macro",121],8,16],")}),\npage=strip({pageType:clean(",["escape",["macro",2],8,16],",lower)}),journal=strip({title:clean(",["escape",["macro",17],8,16],",lower)}),user=strip({bpid:clean(",["escape",["macro",65],8,16],"),accessType:clean(",["escape",["macro",85],8,16],",lower),authorizationStatus:bool(",["escape",["macro",32],8,16],")}),model={page:strip({content:content,page:page,journal:journal,user:user})},consent=Bootstrapper.npg.utils.Consent;consent.allow(consent.TARGETING)?permutive.consent({opt_in:!0,token:\"CONSENT_CAPTURED\"}):permutive.consent({opt_in:!1});\ngaClientId\u0026\u0026permutive.identify([{id:gaClientId,tag:\"client-id\"}]);permutive.addon(\"web\",model);permutive.readyWithTimeout(function(){document.dispatchEvent(new CustomEvent(\"permutiveready\"))},\"realtime\",1500);\u003C\/script\u003E\n\u003Cscript async data-gtmsrc=\"https:\/\/cdn.permutive.com\/2e4b93d1-a8ae-4a89-8885-6109135ac0de-web.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":307
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){var a=b.createElement(\"script\");a.setAttribute(\"async\",\"async\");a.src=\"https:\/\/scholar.google.com\/scholar_js\/casa.js\";b.head.appendChild(a)})(document);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":317
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",81,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.addEventListener(\"accessdetailsloaded\",function(a){a=a.detail;var b={event:\"update-access-details\"};if(a){var c=a.institutional_business_partner_ids\u0026\u0026a.institutional_business_partner_ids.join?a.institutional_business_partner_ids.join(\";\"):\"\",d=a.resolved_by\u0026\u0026a.resolved_by.join?a.resolved_by.join(\";\"):\"\";b.user={};b.user.profile={};b.user.profile.profileInfo={resolvedBy:d||null,bpid:c||null};b.session={};b.session.authentication={};b.session.authentication.token=a.token||null;b.session.authentication.legacy=\n{}}window.dataLayer.push(b)},!1);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":328
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.querySelector(\".optanon-alert-box-wrapper .banner-policy-link\");if(a){var b=a.cloneNode();b.textContent=a.textContent;a.parentNode.replaceChild(b,a)}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":333
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer.push({event:\"ga-client-id-pushed-to-datalayer\",gaClientId:null});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":354
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Econsole.log(\"idp test July 2020\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":356
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Econsole.log(\"IDP test 2020\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":358
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar event=document.createEvent(\"Event\");event.initEvent(\"OneTrustGroupsUpdated\",!0,!0);document.dispatchEvent(event);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":360
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Econsole.log(\"test IDP 2020\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":362
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar getClientId=function(){return window.ga\u0026\u0026window.ga.getAll\u0026\u0026window.ga.getAll().length?window.ga.getAll()[0].get(\"clientId\"):null};window.dataLayer.push({event:\"ga-client-id-pushed-to-datalayer\",gaClientId:getClientId()});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",82,0]],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.usabilla_live(\"data\",{custom:{kruxUser:",["escape",["macro",76],8,16],",kruxSegment:",["escape",["macro",77],8,16],",journalTitle:",["escape",["macro",19],8,16],",pageType:",["escape",["macro",4],8,16],",template:",["escape",["macro",59],8,16],",contentType:",["escape",["macro",123],8,16],",doi:",["escape",["macro",20],8,16],",abTestValue:",["escape",["macro",70],8,16],",authorization:",["escape",["macro",124],8,16],",bpid:",["escape",["macro",66],8,16],",primaryArticleType:",["escape",["macro",50],8,16],",referrer:",["escape",["macro",125],8,16],",openAcces:",["escape",["macro",126],8,16],",GAclientId:",["escape",["macro",127],8,16],",usabillaSurvey:",["escape",["macro",128],8,16],"}});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":62
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar widgetUsabillaSelector=document.getElementsByClassName(\"gtm-usabilla-in-page\")[0];\nwidgetUsabillaSelector\u0026\u0026(widgetUsabillaSelector.setAttribute(\"ub-in-page-kruxUser\",",["escape",["macro",76],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-kruxSegment\",",["escape",["macro",77],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-journalTitle\",",["escape",["macro",19],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-pageType\",",["escape",["macro",4],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-template\",",["escape",["macro",59],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-contentType\",",["escape",["macro",123],8,16],"),\nwidgetUsabillaSelector.setAttribute(\"ub-in-page-doi\",",["escape",["macro",20],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-abTestValue\",",["escape",["macro",70],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-authorization\",",["escape",["macro",124],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-bpid\",",["escape",["macro",66],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-primaryArticleType\",",["escape",["macro",50],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-referrer\",",["escape",["macro",125],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-openAcces\",\n",["escape",["macro",126],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-GAclientId\",",["escape",["macro",127],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-usabillaSurvey\",",["escape",["macro",128],8,16],"));",["escape",["macro",117],8,16],"\u0026\u0026window.usabilla(\"setEventCallback\",function(b,a,c,d,e){\"In-Page:Success\"===a\u0026\u0026",["escape",["macro",129],8,16],"()});",["escape",["macro",119],8,16],"\u0026\u0026",["escape",["macro",130],8,16],"();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":72
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",77,2]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(win,doc,undefined){var isArray=",["escape",["macro",68],8,16],";var isObject=",["escape",["macro",131],8,16],";var map=",["escape",["macro",69],8,16],";var closestByAttribute=",["escape",["macro",133],8,16],";var closest=",["escape",["macro",132],8,16],";var enforceDataType=",["escape",["macro",134],8,16],";var normaliseAnd=",["escape",["macro",5],8,16],";var normaliseWhitespace=",["escape",["macro",6],8,16],";var formatDate=",["escape",["macro",22],8,16],";var createEventPayload=",["escape",["macro",135],8,16],";var sendEvent=",["escape",["macro",136],8,16],";var eventHandler=",["escape",["macro",137],8,16],";var setupTracking=\nfunction(selector,eventName,handlerName){var elements=document.querySelectorAll(selector);if(!elements.length)return;Array.prototype.slice.call(elements).forEach(function(element){element.addEventListener(eventName,function(e){eventHandler(e.target,handlerName||eventName)})})};setupTracking('[data-track\\x3d\"click\"]',\"click\");setupTracking('[data-track\\x3d\"change\"]',\"change\");setupTracking('[data-track\\x3d\"download\"]',\"click\",\"download\");setupTracking('form[data-track\\x3d\"submit\"]',\"submit\");if(window.IntersectionObserver){var inViewElements=\ndocument.querySelectorAll('[data-track\\x3d\"in-view\"]');if(!inViewElements.length)return;var handleIntersect=function(entries,observer){entries.forEach(function(entry){if(entry.intersectionRatio\u003E.25){eventHandler(entry.target,\"in-view\");observer.unobserve(entry.target)}})};var observer=new IntersectionObserver(handleIntersect,{root:null,rootMargin:\"0px\",threshold:[0,.25,.75,1]});Array.prototype.slice.call(inViewElements).forEach(function(element){observer.observe(element)})}var sciHubLinks=document.querySelectorAll('a[href*\\x3d\"sci-hub\"],a[href*\\x3d\"dx.doi.org\"]');\nif(sciHubLinks.length)Array.prototype.slice.call(sciHubLinks).forEach(function(link){link.addEventListener(\"click\",function(){sendEvent({action:\"Click Event\",category:\"External Link\",label:this.href.indexOf(\"sci-hub\")!==-1?\"sci-hub\":\"dx.doi.org\"})})})})(window,document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){if(\"function\"===typeof window.CustomEvent)return!1;var b=function(b,c){c=c||{};var d=document.createEvent(\"CustomEvent\");d.initCustomEvent(b,c.bubbles||!1,c.cancelable||!1,c.detail||a);return d};b.prototype=window.Event.prototype;window.CustomEvent=b})();var parse=function(a,b){try{return 200===a?JSON.parse(b):null}catch(e){return null}},dispatch=function(a){a=new CustomEvent(\"accessdetailsloaded\",{detail:a});document.dispatchEvent(a)};\nif(-1!==window.location.hostname.indexOf(\".nature.com\")){var transport=new XMLHttpRequest;transport.open(\"GET\",\"https:\/\/idp.nature.com\/exposed-details\",!0);transport.withCredentials=!0;transport.onreadystatechange=function(){4===transport.readyState\u0026\u0026dispatch(parse(transport.status,transport.responseText))};transport.send()}else dispatch(null);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":329
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Eif(",["escape",["macro",138],8,16],"){var triggerName=",["escape",["macro",139],8,16],"?\"ab_use_nature_150_split_header\\x3dtrue\":\"ab_use_nature_150_split_header\\x3dfalse\";window.usabilla_live(\"trigger\",triggerName)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":345
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar usabillaId=",["escape",["macro",117],8,16],"?",["escape",["macro",140],8,16],":",["escape",["macro",141],8,16],",containerId=",["escape",["macro",117],8,16],"?\"gtm-usabilla-survey-widget\":\"gtm-usabilla-paywall-widget\",container=document.createElement(\"div\"),parentContainerSelector=\"#gtm-usabilla-container\",parentContainer=document.querySelector(parentContainerSelector);\nparentContainer\u0026\u0026(container.setAttribute(\"id\",containerId),container.setAttribute(\"class\",\"gtm-usabilla-in-page\"),",["escape",["macro",119],8,16],"\u0026\u0026parentContainer.classList.add(\"js-hide\"),container.setAttribute(\"ub-in-page\",usabillaId),parentContainer.insertBefore(container,parentContainer.firstChild));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"^((test-)?www\\.nature\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^(\/ecommerce\/subscribe\\.action)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",90],
      "arg1":"nature"
    },{
      "function":"_re",
      "arg0":["macro",91],
      "arg1":"^()$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"^(idp|transfer|press)\\..*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^\\\/(login|my-account|immersive|public\\\/n\\\/payment).*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",92],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",88],
      "arg1":"staging-www.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^\\\/news\\\/",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",88],
      "arg1":"test-www.nature.com"
    },{
      "function":"_eq",
      "arg0":["macro",88],
      "arg1":"www.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^\\\/articles\/n-",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^(\/nature\/journal\/v554\/n7690\/index\\.html\/?)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"^(www\\.nature\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^(\/naturejobs\/?)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"^(local\\.nature\\.com(:[0-9]+)?)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"^(local-www\\.nature\\.com(:\\d+)?)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^\\\/(login|my-account|public\\\/n\\\/payment).*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"(idp|transfer|press)\\..*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",88],
      "arg1":"natureindex.com"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"^(.*?\\.natureindex\\.com)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"nature-js-bundle-loaded"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^(\/nature\/journal\/.+?\/(?:(full)|(abs))\/.+?\\.html)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^(\/news\/.*?1\\.[0-9]+)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",59],
      "arg1":"bav"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"update-access-details"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^\/briefing.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",93],
      "arg1":"false"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"\/collections\/hgnwmmsqfr\/events"
    },{
      "function":"_re",
      "arg0":["macro",94],
      "arg1":".*aacr.*|.*cell\\-symposia.*|.*csh\\asia.*|.*meetings.*|.*ebi.*training.*|.*embl.*training.*|.*imb.*confer.*|.*asconacir.*|.*ature.*natureconfer.*|.*nyas.*events.*|.*ellcomegenomecam.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(^$|((^|,)10482319_77($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"interactive-event"
    },{
      "function":"_eq",
      "arg0":["macro",102],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",104],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",105],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(^$|((^|,)10482319_145($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",107],
      "arg1":"[datatracking=\"data-track=\\\"click\\\" data-track-action=\\\"learn-subscription\\\" data-track-label=\\\"link\\\"\"]"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(^$|((^|,)10482319_150($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",107],
      "arg1":"[datatracking=\"data-test=\\\"subscribe-prompt-log-in\\\" data-track=\\\"click\\\" data-track-action=\\\"login\\\" data-track-label=\\\"link\\\"\"]"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(^$|((^|,)10482319_151($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",107],
      "arg1":"[datatracking=\"data-track=\\\"click\\\" data-track-action=\\\"athens\\\" data-track-label=\\\"link\\\"\"]"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(^$|((^|,)10482319_152($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",107],
      "arg1":"[datatracking=\"data-track=\\\"click\\\" data-track-action=\\\"shibboleth\\\" data-track-label=\\\"link\\\"\"]"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(^$|((^|,)10482319_153($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",109],
      "arg1":"local-www"
    },{
      "function":"_eq",
      "arg0":["macro",89],
      "arg1":"\/srep"
    },{
      "function":"_eq",
      "arg0":["macro",89],
      "arg1":"\/srep\/"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"\/articles"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(^$|((^|,)10482319_193($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",89],
      "arg1":"\/srep"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(^$|((^|,)10482319_294($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(^$|((^|,)10482319_290($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(^$|((^|,)10482319_289($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",111],
      "arg1":"author link - publication"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(^$|((^|,)10482319_312($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",111],
      "arg1":"author link - pubmed"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(^$|((^|,)10482319_313($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",111],
      "arg1":"author link - scholar"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(^$|((^|,)10482319_316($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",59],
      "arg1":"mosaic"
    },{
      "function":"_eq",
      "arg0":["macro",88],
      "arg1":"guide.labanimal.com"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"^(.*?\\.natureasiapacific\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"^((test-|staging-)?www\\.palgrave-journals\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"(?i)blogs.nature.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"^(www\\.labanimal\\.com)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",88],
      "arg1":"staging-guide.labanimal.com"
    },{
      "function":"_eq",
      "arg0":["macro",88],
      "arg1":"test-guide.labanimal.com"
    },{
      "function":"_eq",
      "arg0":["macro",88],
      "arg1":"press.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^(\/collections\/?)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",113],
      "arg1":"^(https?)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"^((?!.*(press)).*\\.nature\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"\"^\/(nature_education|scitable|principles|search|subjects)(\/|$)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",114],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^\/news\/[0-9]{4}\/[0-9]+\/full\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"test-www.nature.com|qa-snpaas-www.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",82],
      "arg1":"(idp|transfer|press)\\..*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",59],
      "arg1":"magazine mosaic"
    },{
      "function":"_eq",
      "arg0":["macro",117],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"\/articles\/"
    },{
      "function":"_eq",
      "arg0":["macro",118],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",119],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",120],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^\\\/(login|my-account|public\\\/n\\\/payment).*"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"(idp|transfer|press)\\..*"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"ga-client-id-pushed-to-datalayer"
    },{
      "function":"_eq",
      "arg0":["macro",122],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",88],
      "arg1":"idp.nature.com"
    },{
      "function":"_eq",
      "arg0":["macro",88],
      "arg1":"staging-idp.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"OneTrustGroupsUpdated"
    }],
  "rules":[
    [["if",0,1],["add",2,71]],
    [["if",2,3,4,5,6],["add",3]],
    [["if",7],["add",4,14,15,16,0,56,70,41,43,44,45,46,48,49,51,52,53]],
    [["if",6],["unless",8,9],["add",5]],
    [["if",6,12,13],["add",6]],
    [["if",6,13,14],["add",6]],
    [["if",6,13,15],["add",6]],
    [["if",6,15,16],["add",6]],
    [["if",6,17,18],["add",6]],
    [["if",6,18,19],["add",7]],
    [["if",7,20],["add",8,54]],
    [["if",7,21],["add",8,54]],
    [["if",7],["unless",22,23],["add",9,10,37,60]],
    [["if",6,25],["add",11]],
    [["if",6,15],["add",12,58]],
    [["if",26],["add",13]],
    [["if",6,18,27],["add",17]],
    [["if",6,18,28],["add",17]],
    [["if",6],["unless",22,23,29],["add",18]],
    [["if",30],["add",19]],
    [["if",6,31],["add",19]],
    [["if",33,34,35,36],["add",20]],
    [["if",1],["add",21,61,62,47,50]],
    [["if",37],["add",22]],
    [["if",6,38],["add",23]],
    [["if",6,39],["add",24]],
    [["if",6,40],["add",25]],
    [["if",41,42],["add",26]],
    [["if",35,43,44],["add",27]],
    [["if",35,45,46],["add",28]],
    [["if",35,47,48],["add",29]],
    [["if",35,49,50],["add",30]],
    [["if",11,51],["add",31]],
    [["if",7,52,53],["add",1]],
    [["if",7,54],["add",1]],
    [["if",55,56,57],["add",32]],
    [["if",56,58,59],["add",32]],
    [["if",6,29],["add",33]],
    [["if",6],["add",34]],
    [["if",60,61],["add",35]],
    [["if",60,62],["add",36]],
    [["if",35,63,64],["add",38]],
    [["if",35,65,66],["add",39]],
    [["if",35,67,68],["add",40]],
    [["if",7,70],["unless",69],["add",42]],
    [["if",7,71],["add",54]],
    [["if",7,72],["add",54]],
    [["if",7,25],["add",54]],
    [["if",7,73],["add",54]],
    [["if",7,74],["add",54]],
    [["if",7,75],["add",54]],
    [["if",7,76],["add",54]],
    [["if",7,12],["add",54]],
    [["if",7,77],["add",54]],
    [["if",7,14],["add",54]],
    [["if",7,15],["add",54]],
    [["if",6,78],["add",55]],
    [["if",6,18,79,80],["add",57]],
    [["if",6,74],["add",58]],
    [["if",6,81],["unless",82],["add",59]],
    [["if",6,27],["add",63]],
    [["if",6,28],["add",63]],
    [["if",6,84],["add",63]],
    [["if",6,85],["unless",22,86],["add",64]],
    [["if",1],["unless",22,23,29],["add",65]],
    [["if",6,87,88,89,90],["add",66]],
    [["if",6,87,89,91,92],["add",66]],
    [["if",6,10,87,89,91,92],["add",67]],
    [["if",95],["unless",24,93,94],["add",68]],
    [["if",7,70,96,97],["unless",69],["add",69]],
    [["if",11,32],["add",72],["block",19,26,32]],
    [["if",6,98],["add",73]],
    [["if",6,99],["add",74,76]],
    [["if",100],["add",75]],
    [["if",10,11],["block",5,10,11,12,18,23,24,25,33,34,58,61,62,64,65,66]],
    [["if",7,24],["block",9,37]],
    [["if",11,83],["block",59]]]
},
"runtime":[[50,"__crto",[46,"a"],[52,"b",["require","createQueue"]],[52,"c",["require","injectScript"]],[52,"d","https://static.criteo.net/js/ld/ld.js"],[52,"e",["b","criteo_q"]],[41,"f"],[3,"f",[8,"event","viewHome"]],[38,[17,[15,"a"],"tagType"],[46,"LISTING_TAG","PRODUCT_TAG","BASKET_TAG","TRANSACTION_TAG"],[46,[5,[46,[3,"f",[8,"event","viewList","item",[17,[15,"a"],"listingID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewItem","item",[17,[15,"a"],"productID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewBasket","item",[17,[15,"a"],"basketArray"]]],[4]]],[5,[46,[3,"f",[8,"event","trackTransaction","id",[30,[17,[15,"a"],"TransactionID"],""],"item",[17,[15,"a"],"TransactionArray"]]],[4]]]]],["e",[8,"event","setAccount","account",[17,[15,"a"],"accountId"]],[8,"event","setHashedEmail","email",[30,[17,[15,"a"],"hashedEmail"],""]],[8,"event","setSiteType","type",[30,[17,[15,"a"],"siteType"],"d"]],[15,"f"]],["c",[15,"d"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"criteoStatic"]]]
,"permissions":{"__crto":{"access_globals":{"keys":[{"key":"criteo_q","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.criteo.net\/js\/ld\/ld.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__crto"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ca,da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ea;if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={Vf:!0},ja={};try{ja.__proto__=ha;fa=ja.Vf;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=ea,la=function(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},ma=this||self,na=/^[\w+/_-]+[=]{0,2}$/,oa=null;var pa=function(a,b){this.a=a;this.i=b};var ra=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},sa=function(){this.s={};this.m=!1;this.D={}};sa.prototype.get=function(a){return this.s["dust."+a]};sa.prototype.set=function(a,b){this.m||(a="dust."+a,this.D.hasOwnProperty(a)||(this.s[a]=b))};sa.prototype.has=function(a){return this.s.hasOwnProperty("dust."+a)};var ta=function(a){var b=[],c;for(c in a.s)a.s.hasOwnProperty(c)&&b.push(c.substr(5));return b};var h=function(a){this.i=new sa;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ra(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};ca=h.prototype;ca.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof h?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
ca.set=function(a,b){if("length"==a){if(!ra(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else ra(a)?this.a[Number(a)]=b:this.i.set(a,b)};ca.get=function(a){return"length"==a?this.length():ra(a)?this.a[Number(a)]:this.i.get(a)};ca.length=function(){return this.a.length};ca.bc=function(){for(var a=ta(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new h(a)};
var ua=function(a,b){if(ra(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.D.hasOwnProperty(d)||delete c.s[d]}};ca=h.prototype;ca.pop=function(){return this.a.pop()};ca.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};ca.shift=function(){return this.a.shift()};ca.splice=function(a,b,c){return new h(this.a.splice.apply(this.a,arguments))};ca.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
ca.has=function(a){return ra(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var wa=function(){function a(f,g){if(b[f]){if(b[f].Vb+g>b[f].max)throw Error("Quota exceeded");b[f].Vb+=g}}var b={},c=void 0,d=void 0,e={lh:function(f){c=f},we:function(){c&&a(c,1)},nh:function(f){d=f},Ca:function(f){d&&a(d,f)},Ih:function(f,g){b[f]=b[f]||{Vb:0};b[f].max=g},Mg:function(f){return b[f]&&b[f].Vb||0},reset:function(){b={}},ug:a};e.onFnConsume=e.lh;e.consumeFn=e.we;e.onStorageConsume=e.nh;e.consumeStorage=e.Ca;e.setMax=e.Ih;e.getConsumed=e.Mg;e.reset=e.reset;e.consume=e.ug;return e};var xa=function(a,b){this.D=a;this.M=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new sa;this.a=this.s=void 0};xa.prototype.add=function(a,b){ya(this,a,b,!1)};var ya=function(a,b,c,d){if(!a.i.m)if(a.D.Ca(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.D["dust."+b]=!0}else a.i.set(b,c)};
xa.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.D.Ca(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};xa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};xa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var za=function(a){var b=new xa(a.D,a);a.s&&(b.s=a.s);b.M=a.M;b.a=a.a;return b};var Aa=function(){},Ba=function(a){return"function"==typeof a},p=function(a){return"string"==typeof a},Ca=function(a){return"number"==typeof a&&!isNaN(a)},Ea=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Ga=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ha=function(a,b){if(a&&Ea(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ia=function(a,b){if(!Ca(a)||
!Ca(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},La=function(a,b){for(var c=new Ka,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ma=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Na=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Oa=function(a){return Math.round(Number(a))||0},Pa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Qa=function(a){var b=[];if(Ea(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ra=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Sa=function(){return(new Date).getTime()},Ka=function(){this.prefix="gtm.";this.values={}};Ka.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ka.prototype.get=function(a){return this.values[this.prefix+a]};
var Ta=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ua=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Va=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Wa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Xa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ya=function(a){for(var b=B,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},Za=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},$a=function(a){var b=[];Ma(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var ab=function(a,b){sa.call(this);this.a=a;this.M=b};la(ab,sa);ab.prototype.toString=function(){return this.a};ab.prototype.bc=function(){return new h(ta(this))};ab.prototype.i=function(a,b){a.D.we();return this.M.apply(bb(this,a),Array.prototype.slice.call(arguments,1))};var bb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Ea(d)?db(e,d):d};c.prototype.D=function(d){return eb(this.m,d)};c.prototype.s=function(){return b.D};return new c(a,b)};
ab.prototype.Fa=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var eb=function(a,b){for(var c,d=0;d<b.length&&!(c=db(a,b[d]),c instanceof pa);d++);return c},db=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof ab))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.s;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var fb=function(){sa.call(this)};la(fb,sa);fb.prototype.bc=function(){return new h(ta(this))};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var gb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,hb=function(a){if(null==a)return String(a);var b=gb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ib=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},jb=function(a){if(!a||"object"!=hb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ib(a,"constructor")&&!ib(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ib(a,b)},D=function(a,b){var c=b||("array"==hb(a)?[]:{}),d;for(d in a)if(ib(a,d)){var e=a[d];"array"==hb(e)?("array"!=hb(c[d])&&(c[d]=[]),c[d]=D(e,c[d])):jb(e)?(jb(c[d])||(c[d]={}),c[d]=D(e,c[d])):c[d]=e}return c};var lb=function(a,b){var c=[],d=[],e=function(g,k){for(var l=ta(g),m=0;m<l.length;m++)k[l[m]]=f(g.get(l[m]))},f=function(g){var k=Ga(c,g);if(-1<k)return d[k];if(g instanceof h){var l=[];c.push(g);d.push(l);for(var m=g.bc(),n=0;n<m.length();n++)l[m.get(n)]=f(g.get(m.get(n)));return l}if(g instanceof fb){var q={};c.push(g);d.push(q);e(g,q);return q}if(g instanceof ab){var t=function(){for(var r=Array.prototype.slice.call(arguments,0),u=0;u<r.length;u++)r[u]=kb(r[u],b);var v=b?b.D:wa(),w=new xa(v);b&&
(w.a=b.a);return f(g.i.apply(g,[w].concat(r)))};c.push(g);d.push(t);e(g,t);return t}switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},kb=function(a,b){var c=[],d=[],e=function(g,k){for(var l in g)g.hasOwnProperty(l)&&k.set(l,f(g[l]))},f=function(g){var k=Ga(c,g);if(-1<k)return d[k];if(Ea(g)||Na(g)){var l=new h([]);c.push(g);d.push(l);for(var m in g)g.hasOwnProperty(m)&&l.set(m,f(g[m]));return l}if(jb(g)){var n=
new fb;c.push(g);d.push(n);e(g,n);return n}if("function"===typeof g){var q=new ab("",function(r){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=lb(this.a(u[v]),b);return f((0,this.m.M)(g,g,u))});c.push(g);d.push(q);e(g,q);return q}var t=typeof g;if(null===g||"string"===t||"number"===t||"boolean"===t)return g};return f(a)};var mb={control:function(a,b){return new pa(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof h))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.s().Ca(a.length+f.length);return new ab(a,function(){return function(g){var k=za(d);void 0===k.a&&(k.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof pa)return l[m];for(var n=e.get("length"),q=
0;q<n;q++)q<l.length?k.add(e.get(q),l[q]):k.add(e.get(q),void 0);k.add("arguments",new h(l));var t=eb(k,f);if(t instanceof pa)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.s();b.Ca(arguments.length);for(var c=new h,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ca(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.s(),c=new fb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ca(g);c.set(e,f)}return c},undefined:function(){}};var nb=function(){this.m=wa();this.a=new xa(this.m)},rb=function(a,b,c){var d=new ab(b,c);d.m=!0;a.a.set(b,d)};nb.prototype.$b=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};nb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=db(this.a,arguments[c]);return b};nb.prototype.s=function(a,b){var c=za(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=d=db(c,arguments[e]);return d};var sb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var tb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof h)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new h(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new h(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new h(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=sb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ua(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new h(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=sb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ua(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var ub="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),vb=new pa("break"),wb=new pa("continue"),xb=function(a,b){return this.a(a)+this.a(b)},yb=function(a,b){return this.a(a)&&this.a(b)},zb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof h))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=Ga(ub,b))return kb(a[b].apply(a,sb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof h){if(a.has(b)){var d=a.get(b);if(d instanceof ab){var e=sb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=Ga(tb.supportedMethods,b)){var f=sb(c);f.unshift(this.m);
return tb[b].apply(a,f)}}if(a instanceof ab||a instanceof fb){if(a.has(b)){var g=a.get(b);if(g instanceof ab){var k=sb(c);k.unshift(this.m);return g.i.apply(g,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof ab?a.a:a.toString();if("hasOwnProperty"==b)return a.has.apply(a,sb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},Bb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+
b);var d=this.a(b);c.set(a,d);return d},Cb=function(a){var b=za(this.m),c=eb(b,Array.prototype.slice.apply(arguments));if(c instanceof pa)return c},Db=function(){return vb},Eb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof pa)return d}},Fb=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);ya(b,d,e,!0)}}},Gb=function(){return wb},Hb=function(a,b,c){var d=new h;b=this.a(b);for(var e=
0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},Ib=function(a,b){return this.a(a)/this.a(b)},Jb=function(a,b){return this.a(a)==this.a(b)},Kb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Lb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=eb(e,c);if(f instanceof pa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof fb||b instanceof h||b instanceof ab)for(var g=b.bc(),k=g.length(),l=0;l<k;l++){var m=a(g.get(l)),n=eb(m,c);if(n instanceof pa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Mb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Lb(function(e){d.set(a,e);return d},b,c)},Nb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Lb(function(e){var f=za(d);ya(f,a,e,!0);return f},b,c)},Ob=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Lb(function(e){var f=za(d);f.add(a,e);return f},b,c)},Pb=function(a){return this.m.get(this.a(a))},Qb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");a instanceof fb||a instanceof h||a instanceof ab?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ra(b)&&(c=a[b]));return c},Rb=function(a,b){return this.a(a)>this.a(b)},Tb=function(a,b){return this.a(a)>=this.a(b)},Ub=function(a,b){return this.a(a)===this.a(b)},Vb=function(a,b){return this.a(a)!==this.a(b)},Wb=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.D(d);if(e instanceof pa)return e},Xb=function(a,b){return this.a(a)<this.a(b)},Yb=function(a,b){return this.a(a)<=
this.a(b)},Zb=function(a,b){return this.a(a)%this.a(b)},$b=function(a,b){return this.a(a)*this.a(b)},ac=function(a){return-this.a(a)},bc=function(a){return!this.a(a)},cc=function(a,b){return this.a(a)!=this.a(b)},dc=function(){return null},ec=function(a,b){return this.a(a)||this.a(b)},fc=function(a,b){var c=this.a(a);this.a(b);return c},gc=function(a){return this.a(a)},hc=function(a){return Array.prototype.slice.apply(arguments)},ic=function(a){return new pa("return",this.a(a))},jc=function(a,b,c){a=
this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof ab||a instanceof h||a instanceof fb)&&a.set(b,c);return c},kc=function(a,b){return this.a(a)-this.a(b)},lc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ea(d)||!Ea(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,k=0;k<d.length;k++)if(g||a===this.a(d[k]))if(f=this.a(e[k]),f instanceof pa){var l=f.a;if("break"==l)return;if("return"==
l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof pa&&("return"==f.a||"continue"==f.a)))return f},mc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},nc=function(a){a=this.a(a);return a instanceof ab?"function":typeof a},oc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},pc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.D(f),e instanceof pa)){if("break"==e.a)return;if("return"==
e.a)return e}for(;this.a(a);){e=this.D(f);if(e instanceof pa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},qc=function(a){return~Number(this.a(a))},rc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},sc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},tc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},uc=function(a,b){return Number(this.a(a))&Number(this.a(b))},vc=function(a,b){return Number(this.a(a))^Number(this.a(b))},wc=function(a,b){return Number(this.a(a))|
Number(this.a(b))};var yc=function(){this.a=new nb;xc(this)};yc.prototype.$b=function(a){return zc(this.a.i(a))};
var Bc=function(a,b){return zc(Ac.a.s(a,b))},xc=function(a){var b=function(d,e){var f=a.a,g=String(e);mb.hasOwnProperty(d)&&rb(f,g||d,mb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){rb(a.a,String(d),e)};c(0,xb);c(1,yb);c(2,zb);c(3,Bb);c(53,Cb);c(4,Db);c(5,Eb);c(52,Fb);c(6,Gb);c(9,Eb);c(50,Hb);c(10,Ib);c(12,Jb);c(13,Kb);c(47,Mb);c(54,Nb);c(55,Ob);c(15,Pb);c(16,Qb);c(17,Qb);c(18,Rb);c(19,Tb);c(20,Ub);c(21,Vb);c(22,Wb);c(23,Xb);c(24,Yb);c(25,Zb);c(26,$b);
c(27,ac);c(28,bc);c(29,cc);c(45,dc);c(30,ec);c(32,fc);c(33,fc);c(34,gc);c(35,gc);c(46,hc);c(36,ic);c(43,jc);c(37,kc);c(38,lc);c(39,mc);c(40,nc);c(41,oc);c(42,pc);c(58,qc);c(57,rc);c(60,sc);c(61,tc);c(56,uc);c(62,vc);c(59,wc)},Dc=function(){var a=Ac,b=Cc();rb(a.a,"require",b)},Ec=function(a,b){a.a.a.M=b};function zc(a){if(a instanceof pa||a instanceof ab||a instanceof h||a instanceof fb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var Fc=[],Gc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Hc=function(a){return Gc[a]},Ic=/[\x00\x22\x26\x27\x3c\x3e]/g;var Mc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Nc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Oc=function(a){return Nc[a]};
Fc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Mc,Oc)+"'"}};var Xc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Yc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Zc=function(a){return Yc[a]};Fc[16]=function(a){return a};var ad;
var bd=[],cd=[],dd=[],ed=[],fd=[],gd={},hd,id,jd,kd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},ld=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=gd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):ad(c,e,b)},nd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=md(a[e],b,c));
return d},od=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=gd[b];return c?c.priorityOverride||0:0},md=function(a,b,c){if(Ea(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(md(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=bd[f];if(!g||b.gd(g))return;c[f]=!0;try{var k=nd(g,b,c);k.vtp_gtmEventId=b.id;d=ld(k,b);jd&&(d=jd.wg(d,k))}catch(y){b.Pe&&b.Pe(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[md(a[l],b,c)]=md(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=md(a[n],b,c);id&&(m=m||q===id.Ob);d.push(q)}return id&&m?id.zg(d):d.join("");case "escape":d=md(a[1],b,c);if(id&&Ea(a[1])&&"macro"===a[1][0]&&id.Yg(a))return id.sh(d);d=String(d);for(var t=2;t<a.length;t++)Fc[a[t]]&&(d=Fc[a[t]](d));return d;case "tag":var r=a[1];if(!ed[r])throw Error("Unable to resolve tag reference "+r+".");return d={Be:a[2],
index:r};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=pd(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},pd=function(a,b,c){try{return hd(nd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var qd=function(){var a=function(b){return{toString:function(){return b}}};return{Ld:a("convert_case_to"),Md:a("convert_false_to"),Nd:a("convert_null_to"),Od:a("convert_true_to"),Pd:a("convert_undefined_to"),ai:a("debug_mode_metadata"),Ka:a("function"),vf:a("instance_name"),zf:a("live_only"),Bf:a("malware_disabled"),Cf:a("metadata"),bi:a("original_vendor_template_id"),Gf:a("once_per_event"),Ud:a("once_per_load"),be:a("setup_tags"),de:a("tag_id"),ee:a("teardown_tags")}}();var rd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};la(rd,Error);function sd(a,b){if(Ea(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)sd(a[c],b[c])}};var td=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};la(td,Error);var ud=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var wd=function(){return function(a,b){a instanceof td||(a=new td(a,vd));b&&a.a.push(b);throw a;}};function vd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ca(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var xd=null,Ad=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];xd=yd(a);for(var e=0;e<cd.length;e++){var f=cd[e],g=zd(f);if(g){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<ed.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},zd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=xd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=xd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},yd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=pd(dd[c],a));return b[c]}};var Bd=function(){this.a={}};function Cd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(k){g="string"===typeof k?g+(": "+k):k instanceof Error?g+(": "+k.message):g+"."}if(!f)throw new rd(c,d,g);}}function Dd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Cd(e,b,d,g);Cd(f,b,d,g)}}}};var Hd=function(a){var b=Ed.B,c=this;this.i=new Bd;this.a={};var d={},e=Dd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ma(a,function(f,g){var k={};Ma(g,function(l,m){var n=Fd(l,m);k[l]=n.assert;d[l]||(d[l]=n.K)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Gd(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);n.apply(void 0,q);e.apply(void 0,q)}})},Jd=function(a){return Id.a[a]||
function(){}};function Fd(a,b){var c=kd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Gd;try{return ld(c)}catch(d){return{assert:function(e){throw new rd(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Gd(a,b,c){return new rd(a,b,c)};var Ld=!1;var Md={};Md.Rh=Pa('');Md.Fg=Pa('');var Nd=Ld,Od=Md.Fg,Pd=Md.Rh;
var ce=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},de=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;ce(b,"/*")&&(b=b.slice(0,-2));ce(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},ee=/^[a-z0-9-]+$/i,fe=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
ge=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!ee.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var k;var l=a,m=b[g];if(!fe.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),q=n.slice(0,n.indexOf("/")),t;var r=l.hostname,u=q;if(0!==u.indexOf("*."))t=r.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=r.toLowerCase().indexOf(u.toLowerCase());
t=-1===v?!1:r.length===u.length?!0:r.length!==u.length+v?!1:"."===r[v-1]}if(t){var w=n.slice(n.indexOf("/"));k=de(l.pathname+l.search,w)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var he,ie=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.ig&&(l["fix_"+m]=!0),l.De=l.De||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var r=k.indexOf("--\x3e");if(0<=r)return{content:k.substr(4,r),length:r+3}},endTag:function(){var r=k.match(d);if(r)return{tagName:r[1],length:r[0].length}},atomicTag:function(){var r=q.startTag();
if(r){var u=k.slice(r.length);if(u.match(new RegExp("</\\s*"+r.tagName+"\\s*>","i"))){var v=u.match(new RegExp("([\\s\\S]*?)</\\s*"+r.tagName+"\\s*>","i"));if(v)return{tagName:r.tagName,T:r.T,content:v[1],length:v[0].length+r.length}}}},startTag:function(){var r=k.match(c);if(r){var u={};r[2].replace(e,function(v,w,y,x,A){var C=y||x||A||f.test(w)&&w||null,z=document.createElement("div");z.innerHTML=C;u[w]=z.textContent||z.innerText||C});return{tagName:r[1],T:u,Hb:!!r[3],length:r[0].length}}},chars:function(){var r=
k.indexOf("<");return{length:0<=r?r:k.length}}},t=function(){for(var r in n)if(n[r].test(k)){var u=q[r]();return u?(u.type=u.type||r,u.text=k.substr(0,u.length),k=k.slice(u.length),u):null}};l.De&&function(){var r=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Me=function(){return this[this.length-1]};v.jd=function(z){var E=this.Me();return E&&E.tagName&&E.tagName.toUpperCase()===z.toUpperCase()};v.vg=
function(z){for(var E=0,G;G=this[E];E++)if(G.tagName===z)return!0;return!1};var w=function(z){z&&"startTag"===z.type&&(z.Hb=r.test(z.tagName)||z.Hb);return z},y=t,x=function(){k="</"+v.pop().tagName+">"+k},A={startTag:function(z){var E=z.tagName;"TR"===E.toUpperCase()&&v.jd("TABLE")?(k="<TBODY>"+k,C()):l.li&&u.test(E)&&v.vg(E)?v.jd(E)?x():(k="</"+z.tagName+">"+k,C()):z.Hb||v.push(z)},endTag:function(z){v.Me()?l.Hg&&!v.jd(z.tagName)?x():v.pop():l.Hg&&(y(),C())}},C=function(){var z=k,E=w(y());k=z;if(E&&
A[E.type])A[E.type](E)};t=function(){C();return w(y())}}();return{append:function(r){k+=r},yh:t,si:function(r){for(var u;(u=t())&&(!r[u.type]||!1!==r[u.type](u)););},clear:function(){var r=k;k="";return r},ui:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.wi="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.vi=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.m=b;a.o=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,q;for(q in m.T){var t=m.T[q];n+=
" "+q+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.Hb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.i=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var g in b)a.a=a.a||!b[g]&&g;he=a})();(function(){function a(){}function b(q){return void 0!==q&&null!==q}function c(q,t,r){var u,v=q&&q.length||0;for(u=0;u<v;u++)t.call(r,q[u],u)}function d(q,t,r){for(var u in q)q.hasOwnProperty(u)&&t.call(r,u,q[u])}function e(q,
t){d(t,function(r,u){q[r]=u});return q}function f(q,t){q=q||{};d(t,function(r,u){b(q[r])||(q[r]=u)});return q}function g(q){try{return m.call(q)}catch(r){var t=[];c(q,function(u){t.push(u)});return t}}var k={Zf:a,$f:a,ag:a,bg:a,jg:a,kg:function(q){return q},done:a,error:function(q){throw q;},Bh:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function q(r,u,v){var w="data-ps-"+u;if(2===arguments.length){var y=r.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?r.setAttribute(w,
v):r.removeAttribute(w)}function t(r,u){var v=r.ownerDocument;e(this,{root:r,options:u,Ib:v.defaultView||v.parentWindow,Sa:v,qc:he("",{ig:!0}),Vc:[r],ud:"",vd:v.createElement(r.nodeName),Eb:[],Ia:[]});q(this.vd,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Ia,arguments);for(var r;!this.Xb&&this.Ia.length;)r=this.Ia.shift(),"function"===typeof r?this.pg(r):this.Ed(r)};t.prototype.pg=function(r){var u={type:"function",value:r.name||r.toString()};this.qd(u);r.call(this.Ib,this.Sa);this.Te(u)};
t.prototype.Ed=function(r){this.qc.append(r);for(var u,v=[],w,y;(u=this.qc.yh())&&!(w=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(y=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)v.push(u);this.Wh(v);w&&this.Rg(u);y&&this.Sg(u)};t.prototype.Wh=function(r){var u=this.mg(r);u.se&&(u.ed=this.ud+u.se,this.ud+=u.wh,this.vd.innerHTML=u.ed,this.Th())};t.prototype.mg=function(r){var u=this.Vc.length,v=[],w=[],y=[];c(r,function(x){v.push(x.text);if(x.T){if(!/^noscript$/i.test(x.tagName)){var A=
u++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==x.T.id&&"ps-style"!==x.T.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+A+(x.Hb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{xi:r,raw:v.join(""),se:w.join(""),wh:y.join("")}};t.prototype.Th=function(){for(var r,u=[this.vd];b(r=u.shift());){var v=1===r.nodeType;if(!v||!q(r,"proxyof")){v&&(this.Vc[q(r,"id")]=r,q(r,"id",null));var w=r.parentNode&&q(r.parentNode,"proxyof");
w&&this.Vc[w].appendChild(r)}u.unshift.apply(u,g(r.childNodes))}};t.prototype.Rg=function(r){var u=this.qc.clear();u&&this.Ia.unshift(u);r.src=r.T.src||r.T.di;r.src&&this.Eb.length?this.Xb=r:this.qd(r);var v=this;this.Vh(r,function(){v.Te(r)})};t.prototype.Sg=function(r){var u=this.qc.clear();u&&this.Ia.unshift(u);r.type=r.T.type||r.T.TYPE||"text/css";this.Xh(r);u&&this.write()};t.prototype.Xh=function(r){var u=this.og(r);this.Vg(u);r.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=r.content:
u.appendChild(this.Sa.createTextNode(r.content)))};t.prototype.og=function(r){var u=this.Sa.createElement(r.tagName);u.setAttribute("type",r.type);d(r.T,function(v,w){u.setAttribute(v,w)});return u};t.prototype.Vg=function(r){this.Ed('<span id="ps-style"/>');var u=this.Sa.getElementById("ps-style");u.parentNode.replaceChild(r,u)};t.prototype.qd=function(r){r.oh=this.Ia;this.Ia=[];this.Eb.unshift(r)};t.prototype.Te=function(r){r!==this.Eb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Eb.shift(),this.write.apply(this,r.oh),!this.Eb.length&&this.Xb&&(this.qd(this.Xb),this.Xb=null))};t.prototype.Vh=function(r,u){var v=this.ng(r),w=this.Kh(v),y=this.options.Zf;r.src&&(v.src=r.src,this.Fh(v,w?y:function(){u();y()}));try{this.Ug(v),r.src&&!w||u()}catch(x){this.options.error(x),u()}};t.prototype.ng=function(r){var u=this.Sa.createElement(r.tagName);d(r.T,function(v,w){u.setAttribute(v,w)});r.content&&(u.text=r.content);return u};t.prototype.Ug=function(r){this.Ed('<span id="ps-script"/>');
var u=this.Sa.getElementById("ps-script");u.parentNode.replaceChild(r,u)};t.prototype.Fh=function(r,u){function v(){r=r.onload=r.onreadystatechange=r.onerror=null}var w=this.options.error;e(r,{onload:function(){v();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(r.readyState)&&(v(),u())},onerror:function(){var y={message:"remote script failed "+r.src};v();w(y);u()}})};t.prototype.Kh=function(r){return!/^script$/i.test(r.nodeName)||!!(this.options.Bh&&r.src&&r.hasAttribute("async"))};
return t}();l.postscribe=function(){function q(){var w=u.shift(),y;w&&(y=w[w.length-1],y.$f(),w.stream=t.apply(null,w),y.ag())}function t(w,y,x){function A(G){G=x.kg(G);v.write(G);x.bg(G)}v=new n(w,x);v.id=r++;v.name=x.name||v.id;var C=w.ownerDocument,z={close:C.close,open:C.open,write:C.write,writeln:C.writeln};e(C,{close:a,open:a,write:function(){return A(g(arguments).join(""))},writeln:function(){return A(g(arguments).join("")+"\n")}});var E=v.Ib.onerror||a;v.Ib.onerror=function(G,L,S){x.error({oi:G+
" - "+L+":"+S});E.apply(v.Ib,arguments)};v.write(y,function(){e(C,z);v.Ib.onerror=E;x.done();v=null;q()});return v}var r=0,u=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.ni?w[0]:w;var A=[w,y,x];w.rh={cancel:function(){A.stream?A.stream.abort():A[1]=a}};x.jg(A);u.push(A);v||q();return w.rh},{streams:{},ri:u,fi:n})}();ie=l.postscribe}})();var je=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,ke={Fn:"function",Map:"Object",List:"Array"},F=function(a,b,c){for(var d=0;d<b.length;d++){var e=je.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof ab?n="Fn":l instanceof h?n="List":l instanceof fb&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(ke[k]||k)+".");}}};function le(a){return""+a}
function me(a,b){var c=[];return c};var ne=function(a,b){var c=new ab(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},oe=function(a,b){var c=new fb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ba(e)?c.set(d,ne(a+"_"+d,e)):(Ca(e)||p(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var pe=function(a,b){F(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new fb;return d=oe("AssertApiSubject",c)};var qe=function(a,b){F(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new fb;return d=oe("AssertThatSubject",c)};function re(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(lb(arguments[d],c));return kb(a.apply(null,b))}}var te=function(){for(var a=Math,b=se,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=re(a[e].bind(a)))}return c};var ue=function(a){var b;return b};var ve=function(a){var b;return b};var we=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var xe=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var ye=function(a){F(this.i.a,["message:?string"],arguments);};var ze=function(a,b){F(this.i.a,["min:!number","max:!number"],arguments);return Ia(a,b)};var Ae=function(){return(new Date).getTime()};var Be=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.hg.apply(null,Array.prototype.slice.call(arguments,1))};var Ce=function(){Be(this,"read_container_data");var a=new fb;a.set("containerId",'GTM-NWDMT9Q');a.set("version",'175');a.set("environmentName",'');a.set("debugMode",Nd);a.set("previewMode",Pd);a.set("environmentMode",Od);a.m=!0;return a};var De=function(a){return null===a?"null":a instanceof h?"array":a instanceof ab?"function":typeof a};var Ee=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Nd||Pd)&&a.call(this,e.message)}}}return{parse:b(function(c){return kb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(lb(c))})}};var Fe=function(a){return Oa(lb(a,this.m))};var Ge=function(a){return Number(lb(a,this.m))};var He=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Ie=function(a,b,c){var d=null,e=!1;return e?d:null};var se="floor ceil round max min abs pow sqrt".split(" ");var Je=function(){var a={};return{Ng:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Jh:function(b,c){a[b]=c},reset:function(){a={}}}},Ke=function(a,b){F(this.i.a,["apiName:!string","mock:?*"],arguments);};var Le=function(){this.a={};this.i={}};Le.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};
Le.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.i.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.a[a]=c?void 0:Ba(b)?ne(a,b):oe(a,b)};function Me(){var a={};return a};var H={fb:"_ee",Tc:"_syn",ei:"_uei",ci:"_pci",Hc:"event_callback",Nb:"event_timeout",Z:"gtag.config",ja:"allow_ad_personalization_signals",Ic:"restricted_data_processing",cb:"allow_google_signals",ka:"cookie_expires",Mb:"cookie_update",eb:"session_duration",ma:"user_properties",ya:"transport_url",O:"ads_data_redaction"};H.Ne=[H.ja,H.cb,H.Mb];H.Re=[H.ka,H.Nb,H.eb];H.o="ad_storage",H.J="analytics_storage",H.Nh="region",H.Qh="wait_for_update";var Ne={},Oe=function(a,b){Ne[a]=Ne[a]||[];Ne[a][b]=!0},Pe=function(a){for(var b=[],c=Ne[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var I=function(a){Oe("GTM",a)};var B=window,K=document,Qe=navigator,Re=K.currentScript&&K.currentScript.src,Se=function(a,b){var c=B[a];B[a]=void 0===c?b:c;return B[a]},Te=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Ue=function(a,b,c){var d=K.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Te(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=ma.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var k=g.nonce||g.getAttribute("nonce");if(k&&na.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=K.getElementsByTagName("script")[0]||K.body||K.head;l.parentNode.insertBefore(d,l);return d},Ve=function(){if(Re){var a=Re.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},We=function(a,b){var c=K.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=K.body&&K.body.lastChild||
K.body||K.head;d.parentNode.insertBefore(c,d);Te(c,b);void 0!==a&&(c.src=a);return c},Xe=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ye=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ze=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){B.setTimeout(a,0)},$e=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},af=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},bf=function(a){var b=K.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},cf=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},df=function(a){Qe.sendBeacon&&Qe.sendBeacon(a)||Xe(a)},ef=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var ff={},gf=function(a){return void 0==ff[a]?!1:ff[a]};var hf=[];function jf(){var a=Se("google_tag_data",{});a.ics||(a.ics={entries:{},set:kf,update:lf,addListener:mf,notifyListeners:nf,active:!1});return a.ics}
function kf(a,b,c,d,e,f){var g=jf();g.active=!0;if(void 0!=b){var k=g.entries,l=k[a]||{},m=l.region,n=c&&p(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?m!==e:!n&&!m)){var q=!!(f&&0<f&&void 0===l.update),t={region:n,initial:"granted"===b,update:l.update,quiet:q};k[a]=t;q&&B.setTimeout(function(){k[a]===t&&t.quiet&&(t.quiet=!1,of(a),nf(),Oe("TAGGING",2))},f)}}}
function lf(a,b){var c=jf();c.active=!0;if(void 0!=b){var d=pf(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=pf(a);f.quiet?(f.quiet=!1,of(a)):g!==d&&of(a)}}function mf(a,b){hf.push({ve:a,Ig:b})}function of(a){for(var b=0;b<hf.length;++b){var c=hf[b];Ea(c.ve)&&-1!==c.ve.indexOf(a)&&(c.Xe=!0)}}function nf(){for(var a=0;a<hf.length;++a){var b=hf[a];if(b.Xe){b.Xe=!1;try{b.Ig.call()}catch(c){}}}}
var pf=function(a){var b=jf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},qf=function(a){return!(jf().entries[a]||{}).quiet},rf=function(){return gf("gtag_cs_api")?jf().active:!1},sf=function(a,b){jf().addListener(a,b)},tf=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!qf(b[e]))return!0;return!1}if(c()){var d=!1;sf(b,function(){d||c()||(d=!0,a())})}else a()},uf=function(a,b){if(!1===pf(b)){var c=!1;sf([b],function(){!c&&pf(b)&&(a(),c=!0)})}};var vf=[H.o,H.J],wf=function(a){var b=a[H.Nh];b&&I(40);var c=a[H.Qh];c&&I(41);for(var d=Ea(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<vf.length;f++){var g=vf[f],k=a[vf[f]],l=d[e];jf().set(g,k,l,"CH","CH-ZH",c)}},xf=function(a){for(var b=0;b<vf.length;b++){var c=vf[b],d=a[vf[b]];jf().update(c,d)}jf().notifyListeners()},yf=function(a){var b=pf(a);return void 0!=b?b:!0},zf=function(){for(var a=[],b=0;b<vf.length;b++){var c=pf(vf[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+a.join("")},
Af=function(a,b){tf(a,b)};var Cf=function(a){return Bf?K.querySelectorAll(a):null},Df=function(a,b){if(!Bf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!K.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Ef=!1;if(K.querySelectorAll)try{var Ff=K.querySelectorAll(":root");Ff&&1==Ff.length&&Ff[0]==K.documentElement&&(Ef=!0)}catch(a){}var Bf=Ef;var Ed={},R=null,Tf=Math.random();Ed.B="GTM-NWDMT9Q";Ed.Sb="7f0";Ed.Td="";var Uf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Vf="www.googletagmanager.com/gtm.js";
var Wf=Vf,Xf=null,Yf=null,Zf="//www.googletagmanager.com/a?id="+Ed.B+"&cv=175",$f={},ag={},bg=function(){var a=R.sequence||1;R.sequence=a+1;return a};
var cg=function(){return"&tc="+ed.filter(function(a){return a}).length},fg=function(){dg||(dg=B.setTimeout(eg,500))},eg=function(){dg&&(B.clearTimeout(dg),dg=void 0);void 0===gg||hg[gg]&&!ig&&!jg||(kg[gg]||lg.$g()||0>=mg--?(I(1),kg[gg]=!0):(lg.zh(),Xe(ng()),hg[gg]=!0,og=pg=jg=ig=""))},ng=function(){var a=gg;if(void 0===a)return"";var b=Pe("GTM"),c=Pe("TAGGING");return[qg,hg[a]?"":"&es=1",rg[a],b?"&u="+b:"",c?"&ut="+c:"",cg(),ig,jg,pg,og,"&z=0"].join("")},sg=function(){return[Zf,"&v=3&t=t","&pid="+
Ia(),"&rv="+Ed.Sb].join("")},tg="0.005000">Math.random(),qg=sg(),ug=function(){qg=sg()},hg={},ig="",jg="",og="",pg="",gg=void 0,rg={},kg={},dg=void 0,lg=function(a,b){var c=0,d=0;return{$g:function(){if(c<a)return!1;Sa()-d>=b&&(c=0);return c>=a},zh:function(){Sa()-d>=b&&(c=0);c++;d=Sa()}}}(2,1E3),mg=1E3,vg=function(a,b){if(tg&&!kg[a]&&gg!==a){eg();gg=a;og=ig="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";rg[a]="&e="+c+"&eid="+a;fg()}},wg=function(a,b,c){if(tg&&!kg[a]&&
b){a!==gg&&(eg(),gg=a);var d,e=String(b[qd.Ka]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;ig=ig?ig+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var k=(gd[g]?"1":"2")+d;og=og?og+"."+k:"&ti="+k;fg();2022<=ng().length&&eg()}},xg=function(a,b,c){if(tg&&!kg[a]){a!==gg&&(eg(),gg=a);var d=c+b;jg=jg?jg+
"."+d:"&epr="+d;fg();2022<=ng().length&&eg()}};var yg={},zg=new Ka,Ag={},Bg={},Eg={name:"dataLayer",set:function(a,b){D(Za(a,b),Ag);Cg()},get:function(a){return Dg(a,2)},reset:function(){zg=new Ka;Ag={};Cg()}},Dg=function(a,b){if(2!=b){var c=zg.get(a);tg&&c!==Fg(a.split("."))&&I(5);return c}return Fg(a.split("."))},Fg=function(a){for(var b=Ag,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b},Gg=function(a,b){Bg.hasOwnProperty(a)||(zg.set(a,b),D(Za(a,b),Ag),Cg())},Cg=function(a){Ma(Bg,function(b,c){zg.set(b,c);
D(Za(b,void 0),Ag);D(Za(b,c),Ag);a&&delete Bg[b]})},Hg=function(a,b,c){yg[a]=yg[a]||{};var d=1!==c?Fg(b.split(".")):zg.get(b);"array"===hb(d)||"object"===hb(d)?yg[a][b]=D(d):yg[a][b]=d},Ig=function(a,b){if(yg[a])return yg[a][b]},Jg=function(a,b){yg[a]&&delete yg[a][b]};var Mg=/:[0-9]+$/,Ng=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var k=f[g].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Qg=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Og(a.protocol)||Og(B.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
B.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||B.location.hostname).replace(Mg,"").toLowerCase());return Pg(a,b,c,d,e)},Pg=function(a,b,c,d,e){var f,g=Og(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Rg(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Mg,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Oe("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ga(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Ng(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Og=function(a){return a?a.replace(":",
"").toLowerCase():""},Rg=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Sg=function(a){var b=K.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Oe("TAGGING",1),c="/"+c);var d=b.hostname.replace(Mg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Tg=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=Sg(a),f=a.split(/[?#]/)[0],g=e.search,k=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===k[0]&&(k=k.substring(1));g=c(g);k=c(k);""!==g&&(g="?"+g);""!==k&&(k="#"+k);var l=""+f+g+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function Ug(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),k=g[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Wg=function(a,b,c,d){return Vg(d)?Ug(a,String(b||document.cookie),c):[]},Zg=function(a,b,c,d,e){if(Vg(e)){var f=Xg(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Yg(f,function(g){return g.Yb},b);if(1===f.length)return f[0].id;f=Yg(f,function(g){return g.Cb},c);return f[0]?f[0].id:void 0}}};function $g(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Wg(b,f,!1,d).indexOf(c)}
var eh=function(a,b,c,d){function e(w,y,x){if(null==x)return delete k[y],w;k[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete k[y],w;k[y]=!0;return w+"; "+y}if(!Vg(c.Ea))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=ah(b),g=a+"="+b);var k={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.ih);g=e(g,"samesite",
c.Dh);c.Gh&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var n=bh(),q=void 0,t=!1,r=0;r<n.length;++r){var u="none"!==n[r]?n[r]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,k)}catch(w){q=w;continue}t=!0;if(!dh(u,c.path)&&$g(v,a,b,c.Ea))return 0}if(q&&!t)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,k);return dh(m,c.path)?1:$g(g,a,b,c.Ea)?0:1},fh=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return eh(a,b,c)};
function Yg(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var k=a[g],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Xg(a,b,c){for(var d=[],e=Wg(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),k=g.shift();if(!b||-1!==b.indexOf(k)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Yb:1*l[0]||1,Cb:1*l[1]||1}))}}return d}
var ah=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},gh=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,hh=/(^|\.)doubleclick\.net$/i,dh=function(a,b){return hh.test(document.location.hostname)||"/"===b&&gh.test(a)},bh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;hh.test(e)||gh.test(e)||a.push("none");
return a},Vg=function(a){if(!gf("gtag_cs_api")||!a||!rf())return!0;if(!qf(a))return!1;var b=pf(a);return null==b?!0:!!b};var ih=function(){for(var a=Qe.userAgent+(K.cookie||"")+(K.referrer||""),b=a.length,c=B.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Sa()/1E3)].join(".")},lh=function(a,b,c,d,e){var f=jh(b);return Zg(a,f,kh(c),d,e)},mh=function(a,b,c,d){var e=""+jh(c),f=kh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},jh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},kh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function nh(a,b,c){var d,e=a.Ab;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Sa())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var oh=["1"],ph={},th=function(a){var b=qh(a.prefix);ph[b]||rh(b,a.path,a.domain)||(sh(b,ih(),a),rh(b,a.path,a.domain))};function sh(a,b,c){var d=mh(b,"1",c.domain,c.path),e=nh(c);e.Ea="ad_storage";fh(a,d,e)}function rh(a,b,c){var d=lh(a,b,c,oh,"ad_storage");d&&(ph[a]=d);return d}function qh(a){return(a||"_gcl")+"_au"};var uh=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function vh(){for(var a=wh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function xh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var wh,yh;function zh(a){wh=wh||xh();yh=yh||vh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,n=(g&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(wh[l],wh[m],wh[n],wh[q])}return b.join("")}
function Ah(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=yh[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}wh=wh||xh();yh=yh||vh();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=k&&(c+=String.fromCharCode(g<<6&192|k)))}};var Bh;var Fh=function(){var a=Ch,b=Dh,c=Eh(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Ye(K,"mousedown",d);Ye(K,"keyup",d);Ye(K,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Gh=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Eh().decorators.push(f)},Hh=function(a,b,c){for(var d=Eh().decorators,e={},f=0;f<d.length;++f){var g=
d[f],k;if(k=!c||g.forms)a:{var l=g.domains,m=a,n=!!g.sameHost;if(l&&(n||m!==K.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[q])||n&&0<=l[q].indexOf(m)){k=!0;break a}k=!1}if(k){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&Va(e,g.callback())}}return e},Eh=function(){var a=Se("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Ih=/(.*?)\*(.*?)\*(.*)/,Jh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Kh=/^(?:www\.|m\.|amp\.)+/,Lh=/([^?#]+)(\?[^#]*)?(#.*)?/;function Mh(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Oh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(zh(String(d))))}var e=b.join("*");return["1",Nh(e),e].join("*")},Nh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Bh)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,k=0;8>k;k++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Bh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Bh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Qh=function(){return function(a){var b=Sg(B.location.href),c=b.search.replace("?",""),d=Ng(c,"_gl",!1,!0)||"";a.query=Ph(d)||{};var e=Qg(b,"fragment").match(Mh("_gl"));a.fragment=Ph(e&&e[3]||"")||{}}},Rh=function(a){var b=Qh(),c=Eh();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Va(d,e.query),a&&Va(d,e.fragment));return d},
Ph=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Ih.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var k=g[3],l;a:{for(var m=g[2],n=0;n<b;++n)if(m===Nh(k,n)){l=!0;break a}l=!1}if(l){for(var q={},t=k?k.split("*"):[],r=0;r<t.length;r+=2)q[t[r]]=Ah(t[r+1]);return q}}}}catch(u){}};
function Sh(a,b,c,d){function e(n){var q=n,t=Mh(a).exec(q),r=q;if(t){var u=t[2],v=t[4];r=t[1];v&&(r=r+u+v)}n=r;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=Lh.exec(c);if(!f)return"";var g=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+g+k+l}
function Th(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Hh(b,1,c),e=Hh(b,2,c),f=Hh(b,3,c);if(Wa(d)){var g=Oh(d);c?Uh("_gl",g,a):Vh("_gl",g,a,!1)}if(!c&&Wa(e)){var k=Oh(e);Vh("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){Vh(m,n,q,void 0);break a}if("form"===q.tagName.toLowerCase()){Uh(m,n,q);break a}}"string"==typeof q&&Sh(m,n,q,void 0)}}
function Vh(a,b,c,d){if(c.href){var e=Sh(a,b,c.href,void 0===d?!1:d);uh.test(e)&&(c.href=e)}}
function Uh(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var k=e[g];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=K.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Sh(a,b,c.action);uh.test(m)&&(c.action=m)}}}
var Ch=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Th(e,e.hostname)}}catch(g){}},Dh=function(a){try{if(a.action){var b=Qg(Sg(a.action),"host");Th(a,b)}}catch(c){}},Wh=function(a,b,c,d){Fh();Gh(a,b,"fragment"===c?2:1,!!d,!1)},Xh=function(a,b){Fh();Gh(a,[Pg(B.location,"host",!0)],b,!0,!0)},Yh=function(){var a=K.location.hostname,b=Jh.exec(K.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Kh,""),l=e.replace(Kh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},Zh=function(a,b){return!1===a?!1:a||b||Yh()};var $h=/^\w+$/,ai=/^[\w-]+$/,bi=/^~?[\w-]+$/,ci={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},di=function(){if(!gf("gtag_cs_api")||!rf())return!0;var a=pf("ad_storage");return null==a?!0:!!a},ei=function(a,b){qf("ad_storage")?di()?a():uf(a,"ad_storage"):b?Oe("TAGGING",3):tf(function(){ei(a,!0)},["ad_storage"])},hi=function(a){var b=[];if(!K.cookie)return b;var c=Wg(a,K.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=fi(c[d]);e&&-1===Ga(b,e)&&b.push(e)}return gi(b)};
function ii(a){return a&&"string"==typeof a&&a.match($h)?a:"_gcl"}
var ki=function(){var a=Sg(B.location.href),b=Qg(a,"query",!1,void 0,"gclid"),c=Qg(a,"query",!1,void 0,"gclsrc"),d=Qg(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Ng(e,"gclid",!1,void 0);c=c||Ng(e,"gclsrc",!1,void 0)}return ji(b,c,d)},ji=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(ai))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":gf("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},mi=function(a){var b=ki();ei(function(){return li(b,a)})};
function li(a,b,c){function d(m,n){var q=ni(m,e);q&&(fh(q,n,f),g=!0)}b=b||{};var e=ii(b.prefix);c=c||Sa();var f=nh(b,c,!0);f.Ea="ad_storage";var g=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.yi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return g}
var pi=function(a,b){var c=Rh(!0);ei(function(){for(var d=ii(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==ci[f]){var g=ni(f,d),k=c[g];if(k){var l=Math.min(oi(k),Sa()),m;b:{for(var n=l,q=Wg(g,K.cookie,void 0,"ad_storage"),t=0;t<q.length;++t)if(oi(q[t])>n){m=!0;break b}m=!1}if(!m){var r=nh(b,l,!0);r.Ea="ad_storage";fh(g,k,r)}}}}li(ji(c.gclid,c.gclsrc),b)})},ni=function(a,b){var c=ci[a];if(void 0!==c)return b+c},oi=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function fi(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var qi=function(a,b,c,d,e){if(Ea(b)){var f=ii(e),g=function(){for(var k={},l=0;l<a.length;++l){var m=ni(a[l],f);if(m){var n=Wg(m,K.cookie,void 0,"ad_storage");n.length&&(k[m]=n.sort()[n.length-1])}}return k};ei(function(){Wh(g,b,c,d)})}},gi=function(a){return a.filter(function(b){return bi.test(b)})},ri=function(a,b){for(var c=ii(b.prefix),d={},e=0;e<a.length;e++)ci[a[e]]&&(d[a[e]]=ci[a[e]]);ei(function(){Ma(d,function(f,g){var k=Wg(c+g,K.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=oi(l),
n={};n[f]=[fi(l)];li(n,b,m)}})})};function si(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var ti=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(rf()){var c=ki();if(si(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);Xh(function(){return d},3);Xh(function(){var e={};return e._up="1",e},1)}}},ui=function(){var a;if(di()){for(var b=[],c=K.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Bd:f[1],value:f[2]})}var g={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[k].Bd]||(g[b[k].Bd]=[]),g[b[k].Bd].push({timestamp:l[1],Kg:l[2]}))}a=g}else a={};return a};var vi=/^\d+\.fls\.doubleclick\.net$/;function wi(a,b){qf(H.o)?yf(H.o)?a():uf(a,H.o):b?I(42):Af(function(){wi(a,!0)},[H.o])}function xi(a){var b=Sg(B.location.href),c=Qg(b,"host",!1);if(c&&c.match(vi)){var d=Qg(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function yi(a,b,c){if("aw"==a||"dc"==a){var d=xi("gcl"+a);if(d)return d.split(".")}var e=ii(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!yf(H.o)&&c,g;g=ki()[a]||[];if(0<g.length)return f?["0"]:g}var k=ni(a,e);return k?hi(k):[]}
var zi=function(a){var b=xi("gac");if(b)return!yf(H.o)&&a?"0":decodeURIComponent(b);var c=ui(),d=[];Ma(c,function(e,f){for(var g=[],k=0;k<f.length;k++)g.push(f[k].Kg);g=gi(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Ai=function(a,b){var c=ki().dc||[];wi(function(){th(b);var d=ph[qh(b.prefix)],e=!1;if(d&&0<c.length){var f=R.joined_au=R.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;df(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var m=qh(b.prefix),n=ph[m];n&&sh(m,n,b)}})};var Bi=/[A-Z]+/,Ci=/\s/,Di=function(a){if(p(a)&&(a=Ra(a),!Ci.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Bi.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],C:d}}}}},Fi=function(a){for(var b={},c=0;c<a.length;++c){var d=Di(a[c]);d&&(b[d.id]=d)}Ei(b);var e=[];Ma(b,function(f,g){e.push(g)});return e};
function Ei(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.C[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Gi=function(){var a=!1;return a};var Ii=function(a,b,c,d){return(2===Hi()||d||"http:"!=B.location.protocol?a:b)+c},Hi=function(){var a=Ve(),b;if(1===a)a:{var c=Wf;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=K.getElementsByTagName("script"),k=0;k<g.length&&100>k;k++){var l=g[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Wi=function(a){return yf(H.o)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=Tg(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var Xi=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Yi={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Zi={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},$i="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var bj=function(a){var b;b||(b=Dg("gtm.whitelist"));b&&I(9);
var c=b&&Xa(Qa(b),Yi),d;d||(d=Dg("gtm.blacklist"));d||(d=Dg("tagTypeBlacklist"))&&I(3);d?I(8):d=[];aj()&&(d=Qa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ga(Qa(d),"google")&&I(2);var e=d&&Xa(Qa(d),Zi),f={};return function(g){var k=
g&&g[qd.Ka];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=ag[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>Ga(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Ga(c,l[q])){I(11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var r=0<=Ga(e,k);if(r)t=r;else{var u=La(e,l||[]);u&&I(10);t=u}}var v=!m||t;v||!(0<=Ga(l,"sandboxedScripts"))||c&&-1!==Ga(c,"sandboxedScripts")||(v=La(e,$i));return f[k]=v}},aj=function(){return Xi.test(B.location&&B.location.hostname)};var cj={wg:function(a,b){b[qd.Ld]&&"string"===typeof a&&(a=1==b[qd.Ld]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(qd.Nd)&&null===a&&(a=b[qd.Nd]);b.hasOwnProperty(qd.Pd)&&void 0===a&&(a=b[qd.Pd]);b.hasOwnProperty(qd.Od)&&!0===a&&(a=b[qd.Od]);b.hasOwnProperty(qd.Md)&&!1===a&&(a=b[qd.Md]);return a}};var dj={active:!0,isAllowed:function(){return!0},isWhitelisted:function(){return!0}},ej=function(a){var b=R.zones;!b&&a&&(b=R.zones=a());return b};var fj=function(){};var gj=!1,hj=0,ij=[];function jj(a){if(!gj){var b=K.createEventObject,c="complete"==K.readyState,d="interactive"==K.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){gj=!0;for(var e=0;e<ij.length;e++)N(ij[e])}ij.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function kj(){if(!gj&&140>hj){hj++;try{K.documentElement.doScroll("left"),jj()}catch(a){B.setTimeout(kj,50)}}}var lj=function(a){gj?a():ij.push(a)};var mj={},nj={},oj=function(a,b,c,d){if(!nj[a]||Uf[b]||"__zone"===b)return-1;var e={};jb(d)&&(e=D(d,e));e.id=c;e.status="timeout";return nj[a].tags.push(e)-1},pj=function(a,b,c,d){if(nj[a]){var e=nj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function qj(a){for(var b=mj[a]||[],c=0;c<b.length;c++)b[c]();mj[a]={push:function(d){d(Ed.B,nj[a])}}}
var tj=function(a,b,c){nj[a]={tags:[]};Ba(b)&&rj(a,b);c&&B.setTimeout(function(){return qj(a)},Number(c));return sj(a)},rj=function(a,b){mj[a]=mj[a]||[];mj[a].push(Ua(function(){return N(function(){b(Ed.B,nj[a])})}))};function sj(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ua(function(){b++;d&&b>=c&&qj(a)})},gg:function(){d=!0;b>=c&&qj(a)}}};var uj=function(){function a(d){return!Ca(d)||0>d?0:d}if(!R._li&&B.performance&&B.performance.timing){var b=B.performance.timing.navigationStart,c=Ca(Eg.get("gtm.start"))?Eg.get("gtm.start"):0;R._li={cst:a(c-b),cbt:a(Yf-b)}}};var yj={},zj=function(){return B.GoogleAnalyticsObject&&B[B.GoogleAnalyticsObject]},Aj=!1;
var Bj=function(a){B.GoogleAnalyticsObject||(B.GoogleAnalyticsObject=a||"ga");var b=B.GoogleAnalyticsObject;if(B[b])B.hasOwnProperty(b)||I(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);B[b]=c}uj();return B[b]},Cj=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=zj();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Ej=function(a){},Dj=function(){return B.GoogleAnalyticsObject||"ga"};
var Fj=function(a,b){return function(){var c=zj(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),k=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",k,!0),f.set("_x_19",void 0,!0),e(f))})}}};var Kj=function(){return!1},Lj=function(){var a={};return function(b,c,d){}};function Mj(a,b,c,d){var e=ed[a],f=Nj(a,b,c,d);if(!f)return null;var g=md(e[qd.be],c,[]);if(g&&g.length){var k=g[0];f=Mj(k.index,{H:f,F:1===k.Be?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Nj(a,b,c,d){function e(){if(f[qd.Bf])k();else{var w=nd(f,c,[]),y=oj(c.id,String(f[qd.Ka]),Number(f[qd.de]),w[qd.Cf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Sa()-C;wg(c.id,ed[a],"5");pj(c.id,y,"success",z);g()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Sa()-C;wg(c.id,ed[a],"6");pj(c.id,y,"failure",z);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;wg(c.id,f,"1");var A=function(){var z=Sa()-C;wg(c.id,f,"7");pj(c.id,y,"exception",z);x||(x=!0,k())};var C=Sa();try{ld(w,c)}catch(z){A(z)}}}var f=ed[a],g=b.H,k=b.F,l=b.terminate;if(c.gd(f))return null;var m=md(f[qd.ee],c,[]);if(m&&m.length){var n=m[0],q=Mj(n.index,{H:g,F:k,terminate:l},c,d);if(!q)return null;g=q;k=2===n.Be?l:q}if(f[qd.Ud]||f[qd.Gf]){var t=f[qd.Ud]?fd:c.Lh,r=g,u=k;if(!t[a]){e=Ua(e);var v=Oj(a,t,e);g=v.H;k=v.F}return function(){t[a](r,u)}}return e}
function Oj(a,b,c){var d=[],e=[];b[a]=Pj(d,e,c);return{H:function(){b[a]=Qj;for(var f=0;f<d.length;f++)d[f]()},F:function(){b[a]=Rj;for(var f=0;f<e.length;f++)e[f]()}}}function Pj(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Qj(a){a()}function Rj(a,b){b()};var Uj=function(a,b){for(var c=[],d=0;d<ed.length;d++)if(a.Bb[d]){var e=ed[d];var f=b.add();try{var g=Mj(d,{H:f,F:f,terminate:f},a,d);g?c.push({ff:d,Ye:od(e),$b:g}):(Sj(d,a),f())}catch(l){f()}}b.gg();c.sort(Tj);for(var k=0;k<c.length;k++)c[k].$b();return 0<c.length};function Tj(a,b){var c,d=b.Ye,e=a.Ye;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.ff,k=b.ff;f=g>k?1:g<k?-1:0}return f}
function Sj(a,b){if(!tg)return;var c=function(d){var e=b.gd(ed[d])?"3":"4",f=md(ed[d][qd.be],b,[]);f&&f.length&&c(f[0].index);wg(b.id,ed[d],e);var g=md(ed[d][qd.ee],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Vj=!1,Wj=function(a,b,c,d,e){if("gtm.js"==b){if(Vj)return!1;Vj=!0}vg(a,b);var f=tj(a,d,e);Hg(a,"event",1);Hg(a,"ecommerce",1);Hg(a,"gtm");var g={id:a,name:b,gd:bj(c),Bb:[],Lh:[],Pe:function(){I(6)}};g.Bb=Ad(g);
var k=Uj(g,f);"gtm.js"!==b&&"gtm.sync"!==b||Ej(Ed.B);if(!k)return k;for(var l=0;l<g.Bb.length;l++)if(g.Bb[l]){var m=ed[l];if(m&&!Uf[String(m[qd.Ka])])return!0}return!1};function Xj(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Sg(""+c+b).href}}function Yj(a,b){return Zj()?Xj(a,b):void 0}
function Zj(){var a=!1;return a};var ak=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.H=function(){};this.F=function(){};this.eventId=void 0},bk=function(a){var b=new ak;b.eventModel=a;return b},ck=function(a,b){a.targetConfig=b;return a},dk=function(a,b){a.containerConfig=b;return a},ek=function(a,b){a.a=b;return a},fk=function(a,b){a.globalConfig=b;return a},gk=function(a,b){a.H=b;return a},hk=function(a,b){a.F=b;return a};
ak.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var ik=function(a){function b(e){Ma(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ma(c,function(e){d.push(e)});return d};var jk;if(3===Ed.Sb.length)jk="g";else{var kk="G";jk=kk}
var lk={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:jk,OPT:"o"},mk=function(a){var b=Ed.B.split("-"),c=b[0].toUpperCase(),d=lk[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Ed.Sb.length){var g="w";f="2"+g}else f="";return f+d+Ed.Sb+e};function nk(){var a=!1;a=rf();return a}
function ok(a,b,c){function d(q){var t;R.reported_gclid||(R.reported_gclid={});t=R.reported_gclid;var r=f+(q?"gcu":"gcs");if(!t[r]){t[r]=!0;var u=[],v=function(C,z){z&&u.push(C+"="+encodeURIComponent(z))},w="https://www.google.com";if(rf()){var y=yf(H.o);v("gcs",zf());q&&v("gcu","1");v("rnd",n);if((!f||g&&"aw.ds"!==g)&&yf(H.o)){var x=hi("_gcl_aw");v("gclaw",x.join("."))}v("url",String(B.location).split(/[?#]/)[0]);v("dclid",pk(b,k));!y&&b&&(w="https://pagead2.googlesyndication.com")}
"1"===Rh(!1)._up&&v("gtm_up","1");v("gclid",pk(b,f));v("gclsrc",g);v("gtm",mk(!c));var A=w+"/pagead/landing?"+u.join("&");df(A)}}var e=ki(),f=e.gclid||"",g=e.gclsrc,k=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),m=nk();if(l||m){var n=""+ih();m?Af(function(){d();yf(H.o)||uf(function(){return d(!0)},H.o)},[H.o]):d()}}function pk(a,b){var c=a&&!yf(H.o);if(b&&c)return"0";return b}var qk=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var rk=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var sk;a:{var tk=ma.navigator;if(tk){var uk=tk.userAgent;if(uk){sk=uk;break a}}sk=""}var vk=function(a){return-1!=sk.indexOf(a)};var wk=function(){return vk("iPhone")&&!vk("iPod")&&!vk("iPad")};vk("Opera");vk("Trident")||vk("MSIE");vk("Edge");!vk("Gecko")||-1!=sk.toLowerCase().indexOf("webkit")&&!vk("Edge")||vk("Trident")||vk("MSIE")||vk("Edge");-1!=sk.toLowerCase().indexOf("webkit")&&!vk("Edge")&&vk("Mobile");vk("Macintosh");vk("Windows");vk("Linux")||vk("CrOS");var xk=ma.navigator||null;xk&&(xk.appVersion||"").indexOf("X11");vk("Android");wk();vk("iPad");vk("iPod");wk()||vk("iPad")||vk("iPod");sk.toLowerCase().indexOf("kaios");var yk=function(){};var zk=function(a,b){this.i=a;this.a=null;this.s={};this.D=0;this.M=void 0===b?500:b;this.m=null};la(zk,yk);
var Bk=function(a,b){var c=setTimeout(function(){c=0;b({tcString:"tcunavailable"})},a.M);Ak(a,"addEventListener",function(d){if(d&&(!1===d.gdprApplies||"error"===d.cmpStatus||"loaded"===d.cmpStatus&&("tcloaded"===d.eventStatus||"useractioncomplete"===d.eventStatus))){if(void 0!==d.tcString&&"string"!==typeof d.tcString||void 0!==d.gdprApplies&&"boolean"!==typeof d.gdprApplies||void 0!==d.listenerId&&"number"!==typeof d.listenerId||void 0!==d.addtlConsent&&"string"!==typeof d.addtlConsent||!d.cmpStatus||
"error"===d.cmpStatus)d.tcString="tcunavailable";Ak(a,"removeEventListener",null,d.listenerId);c&&(clearTimeout(c),c=0,b(d))}})},Ak=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(Ck(a)){Dk(a);var f=++a.D;a.s[f]=c;if(a.a){var g={};a.a.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Ck=function(a){if(a.a)return a.a;var b;a:{for(var c=a.i,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames.__tcfapiLocator)}catch(k){e=
!1}if(e){b=c;break a}var f;b:{try{var g=c.parent;if(g&&g!=c){f=g;break b}}catch(k){}f=null}if(!(c=f))break}b=null}a.a=b;return a.a},Dk=function(a){a.m||(a.m=function(b){try{var c,d;"string"===typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.s[c.callId](c.returnValue,c.success)}catch(e){}},rk(a.i,a.m))};function Ek(){var a=R.tcf||{};return R.tcf=a}var Fk=function(){var a=Ek();if(!a.active){a.active=!0;var b=new zk(B),c;"function"===typeof B.__tcfapi?c="s":("function"===typeof b.i.__tcfapi||null!=Ck(b))&&(c="i");a.Oe=Sa();try{var d=!1;Bk(b,function(){d=!0;a.ld=Sa()});d&&(a.ld=a.Oe)}catch(e){c="e"}a.type=c}},Gk=function(){var a=Ek();if(a.active&&void 0!==a.ld)return Number(a.ld-a.Oe)};function Ll(){var a=R;return a.gcq=a.gcq||new Ml}
var Nl=function(a,b,c){Ll().register(a,b,c)},Ol=function(a,b,c,d){Ll().push("event",[b,a],c,d)},Pl=function(a,b){Ll().push("config",[a],b)},Ql={},Rl=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},Sl=function(a,b,c,d,e){this.type=a;this.m=b;this.da=c||"";this.a=d;this.i=e},Ml=function(){this.m={};this.i={};this.a=[]},Tl=function(a,b){var c=Di(b);return a.m[c.containerId]=a.m[c.containerId]||new Rl},Ul=function(a,b,c){if(b){var d=Di(b);if(d&&1===
Tl(a,b).status){Tl(a,b).status=2;var e={};tg&&(e.timeoutId=B.setTimeout(function(){I(38);fg()},3E3));a.push("require",[e],d.containerId);Ql[d.containerId]=Sa();if(Gi()){
}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=B.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Yj(c,g)||k;Ue(l)}}}},Vl=function(a,b,c,d){if(d.da){var e=Tl(a,d.da),f=e.m;if(f){var g=D(c),k=D(e.targetConfig[d.da]),l=D(e.containerConfig),m=D(e.i),n=D(a.i),q=Dg("gtm.uniqueEventId"),t=Di(d.da).prefix,r=hk(gk(fk(ek(dk(ck(bk(g),k),l),m),n),function(){
xg(q,t,"2");}),function(){xg(q,t,"3");});try{xg(q,t,"1");f(d.da,b,d.m,r)}catch(u){xg(q,t,"4");}}}};
Ml.prototype.register=function(a,b,c){if(3!==Tl(this,a).status){Tl(this,a).m=b;Tl(this,a).status=3;c&&(Tl(this,a).i=c);var d=Di(a),e=Ql[d.containerId];if(void 0!==e){var f=R[d.containerId].bootstrap,g=d.prefix.toUpperCase();R[d.containerId]._spx&&(g=g.toLowerCase());var k=Dg("gtm.uniqueEventId"),l=g,m=Sa()-f;if(tg&&!kg[k]){k!==gg&&(eg(),gg=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);pg=pg?pg+","+n:"&cl="+n}delete Ql[d.containerId]}this.flush()}};
Ml.prototype.push=function(a,b,c,d){var e=Math.floor(Sa()/1E3);Ul(this,c,b[0][H.ya]||this.i[H.ya]);this.a.push(new Sl(a,e,c,b,d));d||this.flush()};
Ml.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Tl(this,c.da).status&&!a)return;tg&&B.clearTimeout(c.a[0].timeoutId);break;case "set":Ma(c.a[0],function(l,m){D(Za(l,m),b.i)});break;case "config":var d=c.a[0],e=!!d[H.wc];delete d[H.wc];var f=Tl(this,c.da),g=Di(c.da),k=g.containerId===g.id;e||(k?f.containerConfig={}:f.targetConfig[c.da]={});f.a&&e||Vl(this,H.Z,d,c);f.a=!0;delete d[H.fb];k?D(d,f.containerConfig):
D(d,f.targetConfig[c.da]);break;case "event":Vl(this,c.a[1],c.a[0],c)}this.a.shift()}};var Wl=function(a){};var Xl=function(a,b){return!0};var Yl=function(a,b){var c;return c};var Zl=function(a){};var $l=function(a,b){var c;var d=kb(c,this.m);void 0===d&&void 0!==c&&I(45);return d};var am=function(a){var b;var f=kb(b,this.m);void 0===f&&void 0!==b&&I(45);return f};var bm=function(a,b){var c=null;return kb(c,this.m)};var cm=function(a){var b;F(this.i.a,["path:!string"],arguments);Be(this,"access_globals","readwrite",a);var c=a.split("."),d=Ya(c),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Ba(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};return kb(b,this.m)};var dm=function(a){var b;return b};var em=function(a,b){b=void 0===b?!0:b;var c;return c};var fm=function(a,b){var c;return c};var gm=function(a,b){var c;return c};var hm=function(a){var b="";return b};var im=function(a){var b="";return b};var jm=function(a,b){};var km={},lm=function(a,b,c,d){F(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Be(this,"inject_script",a);var e=this.m,f=function(){b instanceof ab&&b.Fa(e)},g=function(){c instanceof ab&&c.Fa(e)};if(!d){Ue(a,f,g);return}var k=d;km[k]?(km[k].onSuccess.push(f),km[k].onFailure.push(g)):(km[k]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=km[k].onSuccess,m=0;m<l.length;m++)N(l[m]);l.push=function(n){N(n);
return 0}},g=function(){for(var l=km[k].onFailure,m=0;m<l.length;m++)N(l[m]);km[k]=null},Ue(a,f,g));};var mm=function(){return!1},nm={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var om=function(){};var pm=function(a,b){var c=!1;return c};var qm=function(){var a="";return a};var rm=function(){var a="";return a};var sm=function(a,b,c){};var tm=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var um=function(a,b,c){return!1};var vm=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var wm=function(a,b,c){var d=this;};var xm={},ym={};xm.getItem=function(a){var b=null;return b};
xm.setItem=function(a,b){};
xm.removeItem=function(a){};xm.clear=function(){};var zm=function(a){var b;return b};var Cc=function(){var a=new Le;Gi()?(a.add("injectHiddenIframe",Aa),a.add("injectScript",Aa)):(a.add("injectHiddenIframe",jm),a.add("injectScript",lm));var b=sm;a.add("Math",te());a.add("TestHelper",Me());a.add("addEventCallback",Wl);a.add("aliasInWindow",Xl);a.add("assertApi",pe);a.add("assertThat",qe);a.add("callInWindow",
Yl);a.add("callLater",Zl);a.add("copyFromDataLayer",$l);a.add("copyFromWindow",am);a.add("createArgumentsQueue",bm);a.add("createQueue",cm);a.add("decodeUri",ue);a.add("decodeUriComponent",ve);a.add("encodeUri",we);a.add("encodeUriComponent",xe);a.add("fail",ye);a.add("fromBase64",dm,!("atob"in B));a.add("generateRandom",ze);a.add("getContainerVersion",Ce);a.add("getCookieValues",em);a.add("getQueryParameters",fm);a.add("getReferrerQueryParameters",gm);a.add("getReferrerUrl",hm);a.add("getTimestamp",
Ae);a.add("getType",De);a.add("getUrl",im);a.add("localStorage",nm,!mm());a.add("logToConsole",om);a.add("makeInteger",Fe);a.add("makeNumber",Ge);a.add("makeString",He);a.add("makeTableMap",Ie);a.add("mock",Ke);a.add("queryPermission",pm);a.add("readCharacterSet",qm);a.add("readTitle",rm);a.add("sendPixel",b);a.add("setCookie",tm);a.add("setInWindow",um);a.add("sha256",wm);a.add("toBase64",zm,!("btoa"in B));a.add("JSON",Ee(function(c){var d=this.m.a;
d&&d.log.call(this,"error",c)}));a.add("templateStorage",xm);return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.i.hasOwnProperty(c))b:{var f=this.m.a;if(f){var g=f.wb();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.i.hasOwnProperty(c)?a.i[c]:void 0;else throw Error(c+" is not a valid API name.");
}return d}};var Ac,Id;
function Am(){var a=data.runtime||[],b=data.runtime_lines;Ac=new yc;Bm();ad=function(e,f,g){Cm(f);var k=new fb;Ma(f,function(r,u){var v=kb(u);void 0===v&&void 0!==u&&I(44);k.set(r,v)});Ac.a.a.s=wd();var l={hg:Jd(e),eventId:void 0!==g?g.id:void 0,wb:function(){return e},log:function(){}};if(Kj()){var m=Lj(),n=void 0,q=void 0;l.fa={i:{},a:function(r,u,v){1===u&&(n=r);7===u&&(q=v);m(r,u,v)},m:Je()};l.log=function(r,u){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:r,source:q,message:v})}}}var t=
Bc(l,[e,k]);Ac.a.a.s=void 0;t instanceof pa&&"return"===t.a&&(t=t.i);return lb(t)};Dc();for(var c=0;c<a.length;c++){var d=a[c];if(!Ea(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&sd(d,b[c]);Ac.$b(d)}}function Cm(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ba(b)&&(a.gtmOnSuccess=function(){N(b)});Ba(c)&&(a.gtmOnFailure=function(){N(c)})}
function Bm(){var a=Ac;R.SANDBOXED_JS_SEMAPHORE=R.SANDBOXED_JS_SEMAPHORE||0;Ec(a,function(b,c,d){R.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{R.SANDBOXED_JS_SEMAPHORE--}})}function Dm(a){void 0!==a&&Ma(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");ag[e]=ag[e]||[];ag[e].push(b)}})};var Em="HA GF GP G UA AW DC".split(" "),Fm=!1,Gm={},Hm=!1;function Im(a,b){var c={event:a};b&&(c.eventModel=D(b),b[H.Hc]&&(c.eventCallback=b[H.Hc]),b[H.Nb]&&(c.eventTimeout=b[H.Nb]));return c}var Km=function(){return Fm};
var Mm={config:function(a){},event:function(a){var b=a[1];if(p(b)&&!(3<a.length)){var c;if(2<a.length){if(!jb(a[2])&&
void 0!=a[2])return;c=a[2]}var d=Im(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return Hm=!0,Km(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Id.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;2==a.length&&jb(a[1])?b=D(a[1]):3==a.length&&p(a[1])&&(b={},jb(a[2])||Ea(a[2])?b[a[1]]=D(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};Mm.consent=function(a){if(3===a.length){var b=function(){Km()&&D(a[2],{subcommand:a[1]})};I(39);var c=a[1];if("default"===c){b();wf(a[2]);return}if("update"===c){b();xf(a[2]);return}}};
var Nm={policy:!0};var Om=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Qm=function(a){var b=Pm(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Rm=!1,Sm=[];function Tm(){if(!Rm){Rm=!0;for(var a=0;a<Sm.length;a++)N(Sm[a])}}var Um=function(a){Rm?N(a):Sm.push(a)};var ln=function(a){if(kn(a))return a;this.a=a};ln.prototype.Qg=function(){return this.a};var kn=function(a){return!a||"object"!==hb(a)||jb(a)?!1:"getUntrustedUpdateValue"in a};ln.prototype.getUntrustedUpdateValue=ln.prototype.Qg;var mn=[],nn=!1,on=function(a){return B["dataLayer"].push(a)},pn=function(a){var b=R["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function qn(a){var b=a._clear;Ma(a,function(f,g){"_clear"!==f&&(b&&Gg(f,void 0),Gg(f,g))});Xf||(Xf=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=bg(),a["gtm.uniqueEventId"]=d,Gg("gtm.uniqueEventId",d));var e=rn(a);switch(c){case "gtm.init":I(19),e&&I(20)}return e}
function rn(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=R.zones;d=e?e.checkState(Ed.B,c):dj;return d.active?Wj(c,b,d.isAllowed||d.isWhitelist,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function sn(){for(var a=!1;!nn&&0<mn.length;){nn=!0;delete Ag.eventModel;Cg();var b=mn.shift();if(null!=b){var c=kn(b);if(c){var d=b;b=kn(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],k=Dg(g,1);if(Ea(k)||jb(k))k=D(k);Bg[g]=k}}try{if(Ba(b))try{b.call(Eg)}catch(v){}else if(Ea(b)){var l=
b;if(p(l[0])){var m=l[0].split("."),n=m.pop(),q=l.slice(1),t=Dg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,q)}catch(v){}}}else{if(Na(b)){a:{var r=b;if(r.length&&p(r[0])){var u=Mm[r[0]];if(u&&(!c||!Nm[r[0]])){b=u(r);break a}}b=void 0}if(!b){nn=!1;continue}}a=qn(b)||a}}finally{c&&Cg(!0)}}nn=!1}return!a}
function tn(){var a=sn();try{Om(B["dataLayer"],Ed.B)}catch(b){}return a}
var vn=function(){var a=Se("dataLayer",[]),b=Se("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};lj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Um(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<R.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new ln(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);mn.push.apply(mn,e);if(300<
this.length)for(I(4);300<this.length;)this.shift();var k="boolean"!==typeof g||g;return sn()&&k};var d=a.slice(0);mn.push.apply(mn,d);un()&&N(tn)},un=function(){var a=!0;return a};var wn={};wn.Ob=new String("undefined");
var xn=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===wn.Ob?b:a[d]);return c.join("")}};xn.prototype.toString=function(){return this.a("undefined")};xn.prototype.valueOf=xn.prototype.toString;wn.Pf=xn;wn.Sc={};wn.zg=function(a){return new xn(a)};var yn={};wn.Ah=function(a,b){var c=bg();yn[c]=[a,b];return c};wn.xe=function(a){var b=a?0:1;return function(c){var d=yn[c];if(d&&"function"===typeof d[b])d[b]();yn[c]=void 0}};wn.Yg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};wn.sh=function(a){if(a===wn.Ob)return a;var b=bg();wn.Sc[b]=a;return'google_tag_manager["'+Ed.B+'"].macro('+b+")"};wn.jh=function(a,b,c){a instanceof wn.Pf&&(a=a.a(wn.Ah(b,c)),b=Aa);return{ed:a,H:b}};var zn=function(a,b,c){function d(f,g){var k=f[g];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||$e(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},An=function(a){R.hasOwnProperty("autoEventsSettings")||(R.autoEventsSettings={});var b=R.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Bn=function(a,b,c){An(a)[b]=c},Cn=function(a,b,c,d){var e=An(a),f=Ta(e,b,d);e[b]=c(f)},Dn=function(a,b,c){var d=An(a);return Ta(d,b,c)};var En=["input","select","textarea"],Fn=["button","hidden","image","reset","submit"],Gn=function(a){var b=a.tagName.toLowerCase();return!Ha(En,function(c){return c===b})||"input"===b&&Ha(Fn,function(c){return c===a.type.toLowerCase()})?!1:!0},Hn=function(a){return a.form?a.form.tagName?a.form:K.getElementById(a.form):cf(a,["form"],100)},In=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Gn(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var Jn=!!B.MutationObserver,Kn=void 0,Ln=function(a){if(!Kn){var b=function(){var c=K.body;if(c)if(Jn)(new MutationObserver(function(){for(var e=0;e<Kn.length;e++)N(Kn[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ye(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<Kn.length;e++)N(Kn[e])}))})}};Kn=[];K.body?b():N(b)}Kn.push(a)};
var Wn=function(){var a=K.body,b=K.documentElement||a&&a.parentElement,c,d;if(K.compatMode&&"BackCompat"!==K.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};I(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Xn=function(a){var b=Wn(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},Yn=function(a){if(K.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!B.getComputedStyle)return!0;var c=B.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var k=g.indexOf("opacity(");0<=k&&(g=g.substring(k+8,g.indexOf(")",k)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,
f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=B.getComputedStyle(d,null))}return!1};var Zn=[],$n=!(!B.IntersectionObserver||!B.IntersectionObserverEntry),ao=function(a,b,c){for(var d=new B.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Zn.length;f++)if(!Zn[f])return Zn[f]=d,f;return Zn.push(d)-1},bo=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,height:0},n={boundingClientRect:k.getBoundingClientRect(),
intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Sa()};N(function(){return a(n)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=Xn(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},co=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if($n){var e=!1;N(function(){e||
bo(a,b,c)()});return ao(function(f){e=!0;for(var g={Za:0};g.Za<f.length;g={Za:g.Za},g.Za++)N(function(k){return function(){return a(f[k.Za])}}(g))},b,c)}return B.setInterval(bo(a,b,c),1E3)},eo=function(a){$n?0<=a&&a<Zn.length&&Zn[a]&&(Zn[a].disconnect(),Zn[a]=void 0):B.clearInterval(a)};var go=B.clearTimeout,ho=B.setTimeout,T=function(a,b,c){if(Gi()){b&&N(b)}else return Ue(a,b,c)},io=function(){return B.location.href},jo=function(a){return Qg(Sg(a),"fragment")},ko=function(a){return Rg(Sg(a))},lo=function(a,b){return Dg(a,b||2)},mo=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=on(a)):d=on(a);return d},no=function(a,b){B[a]=b},V=function(a,b,c){b&&(void 0===B[a]||c&&!B[a])&&(B[a]=
b);return B[a]},oo=function(a,b,c){return Wg(a,b,void 0===c?!0:!!c)},po=function(a,b){if(Gi()){b&&N(b)}else We(a,b)},qo=function(a){return!!Dn(a,"init",!1)},ro=function(a){Bn(a,"init",!0)},so=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Wf;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";T(Ii("https://","http://",c))},to=function(a,b){var c=a[b];return c};
var uo=wn.jh;function Ro(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var So=new Ka;function To(a,b){function c(g){var k=Sg(g),l=Qg(k,"protocol"),m=Qg(k,"host",!0),n=Qg(k,"port"),q=Qg(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Uo(a){return Vo(a)?1:0}
function Vo(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ea(c)){for(var d=0;d<c.length;d++)if(Uo({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<f.length;g++)if(b[f[g]]){e=b[f[g]](c);break a}}catch(t){}}e=!1}return e;case "_ew":return Ro(b,c);case "_eq":return String(b)==String(c);
case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var k;k=String(b).split(",");return 0<=Ga(k,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var l;var m=a.ignore_case?"i":void 0;try{var n=String(c)+m,q=So.get(n);q||(q=new RegExp(c,m),So.set(n,q));l=q.test(b)}catch(t){l=!1}return l;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return To(b,c)}return!1};var Wo={},Xo=encodeURI,W=encodeURIComponent,Yo=Xe;var Zo=function(a,b){if(!a)return!1;var c=Qg(Sg(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var $o=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Wo.Zg=function(){var a=!1;return a};function sq(){return B.gaGlobal=B.gaGlobal||{}}var tq=function(){var a=sq();a.hid=a.hid||Ia();return a.hid};var Cq=window,Dq=document,Eq=function(a){var b=Cq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Cq["ga-disable-"+a])return!0;try{var c=Cq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Ug("AMP_TOKEN",String(Dq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Dq.getElementById("__gaOptOutExtension")?!0:!1};function Hq(a,b){delete b.eventModel[H.fb];if(a!==H.Z){var c=b.getWithConfig(H.mc);if(Ea(c)){I(26);for(var d={},e=0;e<c.length;e++){var f=c[e],g=b.getWithConfig(f);void 0!==g&&(d[f]=g)}b.eventModel=d}}Jq(b.eventModel)}var Jq=function(a){Ma(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.ma]||{};Ma(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Mq=function(a,b,c){Ol(b,c,a)},Nq=function(a,b,c){Ol(b,c,a,!0)},Pq=function(a,b){};
function Oq(a,b){}var Y={b:{}};
Y.b.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var A=[],C=x.split(","),z=0;z<C.length;z++){var E=Number(C[z]);if(isNaN(E))return[];n.test(C[z])||A.push(E)}return A}function c(){var x=0,A=0;return function(){var C=Wn(),z=C.height;x=Math.max(v.scrollLeft+C.width,x);A=Math.max(v.scrollTop+z,A);return{Cg:x,Dg:A}}}function d(){r=V("self");
u=r.document;v=u.scrollingElement||u.body&&u.body.parentNode;y=c()}function e(x,A,C,z){var E=l(A),G={},L;for(L in E){G.Ja=L;if(E.hasOwnProperty(G.Ja)){var S=Number(G.Ja);x<S||(mo({event:"gtm.scrollDepth","gtm.scrollThreshold":S,"gtm.scrollUnits":C.toLowerCase(),"gtm.scrollDirection":z,"gtm.triggers":E[G.Ja].join(",")}),Cn("sdl",A,function(U){return function(P){delete P[U.Ja];return P}}(G),{}))}G={Ja:G.Ja}}}function f(){var x=y(),A=x.Cg,C=x.Dg,z=A/v.scrollWidth*100,E=C/v.scrollHeight*100;e(A,"horiz.pix",
q.Qb,t.Rd);e(z,"horiz.pct",q.Pb,t.Rd);e(C,"vert.pix",q.Qb,t.je);e(E,"vert.pct",q.Pb,t.je);Bn("sdl","pending",!1)}function g(){var x=250,A=!1;u.scrollingElement&&u.documentElement&&r.addEventListener&&(x=50,A=!0);var C=0,z=!1,E=function(){z?C=ho(E,x):(C=0,f(),qo("sdl")&&!a()&&(Ze(r,"scroll",G),Ze(r,"resize",G),Bn("sdl","init",!1)));z=!1},G=function(){A&&y();C?z=!0:(C=ho(E,x),Bn("sdl","pending",!0))};return G}function k(x,A,C){if(A){var z=b(String(x));Cn("sdl",C,function(E){for(var G=0;G<z.length;G++){var L=
String(z[G]);E.hasOwnProperty(L)||(E[L]=[]);E[L].push(A)}return E},{})}}function l(x){return Dn("sdl",x,{})}function m(x){N(x.vtp_gtmOnSuccess);var A=x.vtp_uniqueTriggerId,C=x.vtp_horizontalThresholdsPixels,z=x.vtp_horizontalThresholdsPercent,E=x.vtp_verticalThresholdUnits,G=x.vtp_verticalThresholdsPixels,L=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case q.Qb:k(C,A,"horiz.pix");break;case q.Pb:k(z,A,"horiz.pct")}switch(E){case q.Qb:k(G,A,"vert.pix");break;case q.Pb:k(L,
A,"vert.pct")}qo("sdl")?Dn("sdl","pending")||(w||(d(),w=!0),N(function(){return f()})):(d(),w=!0,v&&(ro("sdl"),Bn("sdl","pending",!0),N(function(){f();if(a()){var S=g();Ye(r,"scroll",S);Ye(r,"resize",S)}else Bn("sdl","init",!1)})))}var n=/^\s*$/,q={Pb:"PERCENT",Qb:"PIXELS"},t={je:"vertical",Rd:"horizontal"},r,u,v,w=!1,y;(function(x){Y.__sdl=x;Y.__sdl.g="sdl";Y.__sdl.h=!0;Y.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):Um(function(){m(x)})})}();

Y.b.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Y.b.c=["google"],function(){(function(a){Y.__c=a;Y.__c.g="c";Y.__c.h=!0;Y.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Y.b.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.priorityOverride=0})(function(a){return String(Ig(a.vtp_gtmEventId,"event"))})}();
Y.b.f=["google"],function(){(function(a){Y.__f=a;Y.__f.g="f";Y.__f.h=!0;Y.__f.priorityOverride=0})(function(a){var b=lo("gtm.referrer",1)||K.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Qg(Sg(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):ko(String(b)):String(b)})}();
Y.b.j=["google"],function(){(function(a){Y.__j=a;Y.__j.g="j";Y.__j.h=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=V(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Y.b.k=["google"],function(){(function(a){Y.__k=a;Y.__k.g="k";Y.__k.h=!0;Y.__k.priorityOverride=0})(function(a){return oo(a.vtp_name,lo("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Y.__access_globals=b;Y.__access_globals.g="access_globals";Y.__access_globals.h=!0;Y.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,q,t){if(!p(t))throw d(n,{},"Key must be a string.");if("read"===q){if(-1<Ga(e,t))return}else if("write"===q){if(-1<Ga(f,t))return}else if("readwrite"===q){if(-1<Ga(f,t)&&-1<Ga(e,t))return}else if("execute"===q){if(-1<Ga(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(n,{},"Prohibited "+q+" on global variable: "+
t+".");},K:a}})}();
Y.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.g="u";Y.__u.h=!0;Y.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=lo("gtm.url",1);c=c||io();var d=b[a("vtp_component")];if(!d||"URL"==d)return ko(String(c));var e=Sg(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ea(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var q=Qg(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=Qg(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.b.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=lo(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.b.tl=["google"],function(){function a(b){return function(){if(b.kd&&b.nd>=b.kd)b.fd&&V("self").clearInterval(b.fd);else{b.nd++;var c=(new Date).getTime();mo({event:b.S,"gtm.timerId":b.fd,"gtm.timerEventNumber":b.nd,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.kd,"gtm.timerStartTime":b.ef,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.ef,"gtm.triggers":b.Ph})}}}(function(b){Y.__tl=b;Y.__tl.g="tl";Y.__tl.h=!0;Y.__tl.priorityOverride=0})(function(b){N(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{S:b.vtp_eventName,nd:0,interval:Number(b.vtp_interval),kd:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Ph:String(b.vtp_uniqueTriggerId||"0"),ef:(new Date).getTime()};c.fd=V("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Y.b.ua=["google"],function(){var a,b={},c=function(e){Af(function(){d(e)},[H.J,H.o])},d=function(e){var f={},g={},k={},l={},m={};if(e.vtp_gaSettings){var n=e.vtp_gaSettings;D($o(n.vtp_fieldsToSet,"fieldName","value"),g);D($o(n.vtp_contentGroup,"index","group"),k);D($o(n.vtp_dimension,"index","dimension"),l);D($o(n.vtp_metric,"index","metric"),m);e.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var q=D(n);e=D(e,q)}D($o(e.vtp_fieldsToSet,
"fieldName","value"),g);D($o(e.vtp_contentGroup,"index","group"),k);D($o(e.vtp_dimension,"index","dimension"),l);D($o(e.vtp_metric,"index","metric"),m);yf(H.J)||(g.storage="none"),yf(H.o)||(g.allowAdFeatures=!1,g.storeGac=!1);var t=Bj(e.vtp_functionName);if(Ba(t)){var r="",u="";e.vtp_setTrackerName&&"string"==typeof e.vtp_trackerName?""!==e.vtp_trackerName&&(u=e.vtp_trackerName,r=u+"."):(u="gtm"+bg(),
r=u+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,
storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},y=function(O){var Q=[].slice.call(arguments,0);Q[0]=r+Q[0];t.apply(window,Q)},x=function(O,Q){return void 0===Q?Q:O(Q)},A=function(O,Q){if(Q)for(var Ja in Q)Q.hasOwnProperty(Ja)&&y("set",O+Ja,Q[Ja])},C=function(){},
z=function(O,Q,Ja){var pb=0;if(O)for(var Fa in O)if(O.hasOwnProperty(Fa)&&(Ja&&v[Fa]||!Ja&&void 0===v[Fa])){var cb=w[Fa]?Pa(O[Fa]):O[Fa];"anonymizeIp"!=Fa||cb||(cb=void 0);Q[Fa]=cb;pb++}return pb},E={name:u};e.vtp_transportUrl&&(g._x_19=e.vtp_transportUrl);z(g,E,!0);t("create",
e.vtp_trackingId||f.trackingId,E);y("set","&gtm",mk(!0));rf()&&y("set","&gcs",zf());g._x_19&&(null==Re&&delete g._x_19,g._x_20&&!b[u]&&(b[u]=!0,t(Fj(u,g._x_20))));e.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,Q){void 0!==e[Q]&&y("set",O,e[Q])})("nonInteraction","vtp_nonInteraction");A("contentGroup",
k);A("dimension",l);A("metric",m);var G={};z(g,G,!1)&&y("set",G);var L;e.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=g&&g.hitCallback;Ba(O)&&O();e.vtp_gtmOnSuccess()});if("TRACK_EVENT"==e.vtp_trackType){e.vtp_enableEcommerce&&
(y("require","ec","ec.js"),C());var S={hitType:"event",eventCategory:String(e.vtp_eventCategory||f.category),eventAction:String(e.vtp_eventAction||f.action),eventLabel:x(String,e.vtp_eventLabel||f.label),eventValue:x(Oa,e.vtp_eventValue||f.value)};z(L,S,!1);y("send",S);}else if("TRACK_SOCIAL"==e.vtp_trackType){}else if("TRACK_TRANSACTION"==e.vtp_trackType){}else if("TRACK_TIMING"==e.vtp_trackType){}else if("DECORATE_LINK"==e.vtp_trackType){}else if("DECORATE_FORM"==e.vtp_trackType){}else if("TRACK_DATA"==e.vtp_trackType){}else{e.vtp_enableEcommerce&&(y("require","ec","ec.js"),C());if(e.vtp_doubleClick||"DISPLAY_FEATURES"==e.vtp_advertisingFeaturesType){var ba="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:ba})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==e.vtp_advertisingFeaturesType){var Da="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");y("require","adfeatures",{cookieName:Da})}L?y("send","pageview",L):y("send","pageview");}if(!a){var va=e.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";e.vtp_useInternalVersion&&!e.vtp_useDebugVersion&&(va="internal/"+va);a=!0;var ob=Yj(g._x_19,"/analytics.js"),
qa=Ii("https:","http:","//www.google-analytics.com/"+va,g&&g.forceSSL);T("analytics.js"===va&&ob?ob:qa,function(){var O=zj();O&&O.loaded||e.vtp_gtmOnFailure();},e.vtp_gtmOnFailure)}}else N(e.vtp_gtmOnFailure)};Y.__ua=c;Y.__ua.g="ua";Y.__ua.h=!0;Y.__ua.priorityOverride=0}();

Y.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__inject_script=b;Y.__inject_script.g="inject_script";Y.__inject_script.h=!0;Y.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!p(f))throw d(e,{},"Script URL must be a string.");try{if(ge(Sg(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();


Y.b.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;D($o(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var f=D(e);c=D(c,f)||{}}D($o(c.vtp_fieldsToSet,"fieldName","value"),d);var g=Bj(c.vtp_functionName);if(Ba(g)){g.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+bg(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},n={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},q=function(y,x,A){var C=0,z;for(z in y)if(y.hasOwnProperty(z)&&
(A&&m[z]||!A&&void 0===m[z])){var E=n[z]?Pa(y[z]):y[z];"anonymizeIp"!==z||E||(E=void 0);x[z]=E;C++}return C},t={name:l};q(d,t,!0);var r={"&gtm":mk(!0)};q(d,r,!1);var u=encodeURI(Ii("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));g("create",c.vtp_trackingId,t);g(k+"set",r);g(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayer"});g(c.vtp_gtmOnSuccess);g(k+"require","render");a||(a=!0,T(u,function(){return zj().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var v=V("dataLayer"),w=v&&v.hide;w&&(w.end||!0===w["GTM-NWDMT9Q"])&&(w[c.vtp_optimizeContainerId]=!0)}else N(c.vtp_gtmOnFailure)};Y.__opt=b;Y.__opt.g="opt";Y.__opt.h=!0;Y.__opt.priorityOverride=0}();



Y.b.aev=["google"],function(){function a(r,u){var v=Ig(r,"gtm");if(v)return v[u]}function b(r,u,v,w){w||(w="element");var y=r+"."+u,x;if(n.hasOwnProperty(y))x=n[y];else{var A=a(r,w);if(A&&(x=v(A),n[y]=x,q.push(y),35<q.length)){var C=q.shift();delete n[C]}}return x}function c(r,u,v){var w=a(r,t[u]);return void 0!==w?w:v}function d(r,u){if(!r)return!1;var v=e(io());Ea(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++)if(u[y]instanceof RegExp){if(u[y].test(r))return!1}else{var x=
u[y];if(0!=x.length){if(0<=e(r).indexOf(x))return!1;w.push(e(x))}}return!Zo(r,w)}function e(r){m.test(r)||(r="http://"+r);return Qg(Sg(r),"HOST",!0)}function f(r,u,v){switch(r){case "SUBMIT_TEXT":return b(u,"FORM."+r,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+r,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function g(r){switch(r.tagName.toLowerCase()){case "input":return $e(r,"value");case "button":return af(r);default:return null}}function k(r){if("form"===r.tagName.toLowerCase()&&r.elements){for(var u=0,v=0;v<r.elements.length;v++)Gn(r.elements[v])&&u++;return u}}function l(r,u,v){var w=a(r,"interactedFormField");return w&&$e(w,u)||v}var m=/^https?:\/\//i,n={},q=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(r){Y.__aev=r;Y.__aev.g="aev";Y.__aev.h=!0;Y.__aev.priorityOverride=0})(function(r){var u=r.vtp_gtmEventId,v=r.vtp_defaultValue,w=r.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||
v;case "TEXT":return b(u,w,af)||v;case "URL":var x;a:{var A=String(a(u,"elementUrl")||v||""),C=Sg(A),z=String(r.vtp_component||"URL");switch(z){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,r.vtp_affiliatedDomains);break a;default:x=Qg(C,z,r.vtp_stripWww,r.vtp_defaultPages,r.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===r.vtp_attribute)E=c(u,w,v);else{var G=r.vtp_attribute,L=a(u,"element");E=L&&$e(L,G)||v||""}return E;case "MD":var S=r.vtp_mdValue,U=b(u,"MD",Sn);return S&&U?Vn(U,S)||
v:U||v;case "FORM":return f(String(r.vtp_component||"SUBMIT_TEXT"),u,v);default:return c(u,w,v)}})}();
Y.b.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.g="gas";Y.__gas.h=!0;Y.__gas.priorityOverride=0})(function(a){var b=D(a),c=b;c[qd.Ka]=null;c[qd.vf]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Y.b.baut=["nonGoogleScripts"],function(){var a=!1,b=function(c){var d=c.vtp_uetqName||"uetq",e=V(d,[],!0);if("VARIABLE_REVENUE"==c.vtp_eventType)e.push({gv:c.vtp_goalValue}),c.vtp_gtmOnSuccess();else if("CUSTOM"==c.vtp_eventType){var f={},g=function(k,l){void 0!==c[k]&&(f[l]=c[k])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");e.push(f);c.vtp_gtmOnSuccess()}else if(a)c.vtp_gtmOnSuccess();else try{T("//bat.bing.com/bat.js",
function(){var k=qk(V("UET"),{ti:c.vtp_tagId,q:e});B[d]=k;k.push("pageLoad");c.vtp_gtmOnSuccess()},c.vtp_gtmOnFailure),a=!0}catch(k){N(c.vtp_gtmOnFailure)}};Y.__baut=b;Y.__baut.g="baut";Y.__baut.h=!0;Y.__baut.priorityOverride=0}();



Y.b.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.g="paused";Y.__paused.h=!0;Y.__paused.priorityOverride=0})(function(a){N(a.vtp_gtmOnFailure)})}();

Y.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=K.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Te(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,g)()}else d.insertBefore(k,null),l()}else f()}catch(t){N(g)}}}var b=function(d,e,f){lj(function(){var g,k=R;k.postscribe||(k.postscribe=ie);g=k.postscribe;var l={done:e},m=K.createElement("div");m.style.display="none";m.style.visibility="hidden";K.body.appendChild(m);try{g(m,d,l)}catch(n){N(f)}})};var c=function(d){if(K.body){var e=
d.vtp_gtmOnFailure,f=uo(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.ed,k=f.H;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,k,e):a(K.body,bf(g),k,e)()}else ho(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.priorityOverride=0}();






Y.b.lcl=[],function(){function a(){var c=V("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Xg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=cf(g,["a","area"],100);if(!g)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=Dn("lcl",k?"nv.mwt":"mwt",0),m;m=k?Dn("lcl","nv.ids",[]):Dn("lcl","ids",[]);if(m.length){var n=zn(g,"gtm.linkClick",m);if(b(f,g,c)&&!k&&l&&g.href){var q=String(to(g,"rel")||""),t=!!Ha(q.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&I(36);var r=V((to(g,"target")||"_self").substring(1)),u=!0;if(mo(n,pn(function(){var v;if(v=u&&r){var w;a:if(t){var y;try{y=new MouseEvent(f.type)}catch(x){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Xg=!0;f.target.dispatchEvent(y);w=!0}else w=!1;v=!w}v&&(r.location.href=to(g,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else mo(n,function(){},l||2E3);return!0}}};Ye(c,"click",e,!1);Ye(c,"auxclick",e,!1)}function b(c,
d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=to(d,"href"),g=f.indexOf("#"),k=to(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===g)return!1;if(0<g){var l=ko(f),m=ko(e.location);return l!==m}return!0}(function(c){Y.__lcl=c;Y.__lcl.g="lcl";Y.__lcl.h=!0;Y.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;
var g=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};Cn("lcl","mwt",k,0);e||Cn("lcl","nv.mwt",k,0)}var l=function(m){m.push(g);return m};Cn("lcl","ids",l,[]);e||Cn("lcl","nv.ids",l,[]);qo("lcl")||(a(),ro("lcl"));N(c.vtp_gtmOnSuccess)})}();
Y.b.evl=["google"],function(){function a(){var f=Number(lo("gtm.start"))||0;return(new Date).getTime()-f}function b(f,g,k,l){function m(){if(!Yn(f.target)){g.has(d.Rb)||g.set(d.Rb,""+a());g.has(d.Kc)||g.set(d.Kc,""+a());var q=0;g.has(d.Tb)&&(q=Number(g.get(d.Tb)));q+=100;g.set(d.Tb,""+q);if(q>=k){var t=zn(f.target,"gtm.elementVisibility",[g.a]),r=Xn(f.target);t["gtm.visibleRatio"]=Math.round(1E3*r)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(g.get(d.Kc));t["gtm.visibleLastTime"]=Number(g.get(d.Rb));
mo(t);l()}}}if(!g.has(d.hb)&&(0==k&&m(),!g.has(d.La))){var n=V("self").setInterval(m,100);g.set(d.hb,n)}}function c(f){f.has(d.hb)&&(V("self").clearInterval(Number(f.get(d.hb))),f.i(d.hb))}var d={hb:"polling-id-",Kc:"first-on-screen-",Rb:"recent-on-screen-",Tb:"total-visible-time-",La:"has-fired-"},e=function(f,g){this.element=f;this.a=g};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.a)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.a)};e.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.a,g)};e.prototype.i=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.a)};(function(f){Y.__evl=f;Y.__evl.g="evl";Y.__evl.h=!0;Y.__evl.priorityOverride=0})(function(f){function g(){var y=!1,x=null;if("CSS"===l){try{x=Cf(m)}catch(G){I(46)}y=!!x&&v.length!=x.length}else if("ID"===l){var A=K.getElementById(m);A&&(x=[A],y=1!=v.length||v[0]!==A)}x||(x=[],y=0<v.length);if(y){for(var C=0;C<v.length;C++){var z=
new e(v[C],r);c(z)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&eo(w);0<v.length&&(w=co(k,v,[t]))}}function k(y){var x=new e(y.target,r);y.intersectionRatio>=t?x.has(d.La)||b(y,x,q,"ONCE"===u?function(){for(var A=0;A<v.length;A++){var C=new e(v[A],r);C.set(d.La,"1");c(C)}eo(w);if(n&&Kn)for(var z=0;z<Kn.length;z++)Kn[z]===g&&Kn.splice(z,1)}:function(){x.set(d.La,"1");c(x)}):(c(x),"MANY_PER_ELEMENT"===u&&x.has(d.La)&&(x.i(d.La),x.i(d.Tb)),x.i(d.Rb))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,q=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,r=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],w=-1;g();n&&Ln(g);N(f.vtp_gtmOnSuccess)})}();


var Qq={};Qq.macro=function(a){if(wn.Sc.hasOwnProperty(a))return wn.Sc[a]},Qq.onHtmlSuccess=wn.xe(!0),Qq.onHtmlFailure=wn.xe(!1);Qq.dataLayer=Eg;Qq.callback=function(a){$f.hasOwnProperty(a)&&Ba($f[a])&&$f[a]();delete $f[a]};function Rq(){R[Ed.B]=Qq;Va(ag,Y.b);id=id||wn;jd=cj}
function Sq(){ff.gtm_3pds=!0;ff.gtag_cs_api=!0;R=B.google_tag_manager=B.google_tag_manager||{};if(R[Ed.B]){var a=R.zones;a&&a.unregisterChild(Ed.B);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)bd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)ed.push(e[f]);for(var g=b.predicates||[],k=0;k<g.length;k++)dd.push(g[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},t=0;t<n.length;t++)q[n[t][0]]=Array.prototype.slice.call(n[t],1);cd.push(q)}gd=Y;hd=Uo;var r=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;Am();Id=new Hd(r);if(void 0!==
u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");ag[x]=w}Dm(v);Rq();vn();gj=!1;hj=0;if("interactive"==K.readyState&&!K.createEventObject||"complete"==K.readyState)jj();else{Ye(K,"DOMContentLoaded",jj);Ye(K,"readystatechange",jj);if(K.createEventObject&&K.documentElement.doScroll){var A=!0;try{A=!B.frameElement}catch(G){}A&&kj()}Ye(B,"load",jj)}Rm=!1;"complete"===K.readyState?Tm():Ye(B,"load",Tm);a:{if(!tg)break a;B.setInterval(ug,864E5);}
Yf=(new Date).getTime();}}
(function(a){a()})(Sq);

})()
