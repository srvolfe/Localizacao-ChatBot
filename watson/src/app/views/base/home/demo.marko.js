// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/watson$1.0.0/src/app/views/base/home/demo.marko",
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

  out.w("<html><head><meta charset=\"utf-8\"><link rel=\"stylesheet\" href=\"/estatico/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/fontawesome.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/casadocodigo.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"cabecalhoPrincipal\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\"><img src=\"/estatico/imagens/logo-casadocodigo.svg\" alt=\"Casa do Código\"></h1></div><div class=\"cabecalhoPrincipal-navegacao col-8\"><a href=\"#\" class=\"login\"><i class=\"fas fa-sign-in-alt\"></i>Login</a></div></div></div></header><main class=\"conteudoPrincipal\"><p id=\"output\"></p><button id=\"start\">Click and say something!</button><script>\r\n      (() => {\r\n        const startBtn = document.querySelector('#start');\r\n        const output = document.querySelector('#output');\r\n        function start() {\r\n          const recognition = new webkitSpeechRecognition();\r\n          recognition.interimResults = true;\r\n          recognition.lang = \"pt-br\";\r\n          recognition.continuous = true;\r\n          recognition.start();\r\n          // This event happens when you talk in the microphone\r\n          recognition.onresult = function(event) {\r\n            for (let i = event.resultIndex; i < event.results.length; i++) {\r\n              if (event.results[i].isFinal) {\r\n                // Here you can get the string of what you told\r\n                const content = event.results[i][0].transcript.trim();\r\n                output.textContent = content;\r\n              }\r\n            }\r\n          };\r\n        };\r\n        startBtn.addEventListener('click', () => start());\r\n      })();\r\n    </script></main><script src=\"/estatico/js/watson-speech.min.js\" type=\"text/javaScript\"> </script><script src=\"/estatico/js/stt.js\" type=\"text/javaScript\"> </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "22");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/watson$1.0.0/src/app/views/base/home/demo.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
