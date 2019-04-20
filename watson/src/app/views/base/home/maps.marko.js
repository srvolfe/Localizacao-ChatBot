// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/watson$1.0.0/src/app/views/base/home/maps.marko",
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

  out.w("<header class=\"cabecalhoPrincipal\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\"><img src=\"/estatico/imagens/logo-casadocodigo.svg\" alt=\"Casa do Código\"></h1></div><div class=\"cabecalhoPrincipal-navegacao col-8\"><a href=\"#\" class=\"login\"><i class=\"fas fa-sign-in-alt\"></i>Login</a></div></div></div></header><main class=\"conteudoPrincipal\"><div class=\"container\"><h1>mensagem</h1><style>\r\n      /* Always set the map height explicitly to define the size of the div\r\n       * element that contains the map. */\r\n      #map {\r\n        height: 100%;\r\n      }\r\n      /* Optional: Makes the sample page fill the window. */\r\n      html, body {\r\n        height: 100%;\r\n        margin: 0;\r\n        padding: 0;\r\n      }\r\n    </style></div><div class=\"container\"><div id=\"map\"></div></div></main><script>\r\n      var map;\r\n      function initMap() {\r\n        map = new google.maps.Map(document.getElementById('map'), {\r\n          center: {lat: -34.397, lng: 150.644},\r\n          zoom: 8\r\n        });\r\n      }\r\n    </script><script src=\"https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&amp;callback=initMap\" async defer></script><script async defer src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyAxLNRXAO_NbGihsbK02zS5TOJCnTo4jIo&amp;callback=initMap\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "25");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/watson$1.0.0/src/app/views/base/home/maps.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
