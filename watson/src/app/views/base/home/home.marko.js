// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/watson$1.0.0/src/app/views/base/home/home.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html lang=\"en\"><head><title>Preview Link</title><meta charset=\"utf-8\"><link href=\"https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed|IBM+Plex+Sans:400,700\" rel=\"stylesheet\"><link rel=\"stylesheet\" href=\"https://assistant-chat-us-south.watsonplatform.net/web/chat/styles/base.0.0.4.css\"><link rel=\"stylesheet\" href=\"https://assistant-chat-us-south.watsonplatform.net/web/chat/styles/themes/default.0.0.4.css\"><link rel=\"stylesheet\" href=\"https://assistant-chat-us-south.watsonplatform.net/web/chat/styles/chat.0.0.4.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"Chat__header\"><h2>Build your own assistant using <a href=\"https://www.ibm.com/watson/services/conversation/\" target=\"_blank\">IBM Watson Assistant <svg class=\"Chat__header-svg\" viewBox=\"0 0 24 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.7 9.7L22 3.4V8h2V0h-8v2h4.6l-6.3 6.3z\"></path><path d=\"M22 18H2V4h10V0H0v20h24v-8h-2z\"></path></svg></a></h2></div><div class=\"Chat__holder\"><div class=\"Chat__body\"></div></div><script src=\"https://assistant-chat-us-south.watsonplatform.net/web/chat/ibm.chat.0.0.4.js\"></script><script>\r\n    const config = {\r\n      bot_image: null, // 'http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/smiling-face-with-open-mouth.png'\r\n      bot_name: '',\r\n      debug: true,\r\n      element: document.querySelector('.Chat__body'),\r\n      integration_id: '21f3b9b4-6a33-4614-9752-60c4d8ee6924',\r\n      post_url: 'https://assistant-chat-us-south.watsonplatform.net/public/message/'\r\n    };\r\n    const chat = new WatsonChat(config);\r\n  </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "19");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/watson$1.0.0/src/app/views/base/home/home.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
