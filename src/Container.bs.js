// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var ReasonReact              = require("reason-react/src/ReasonReact.js");
var Bootstrap$ReactBootstrap = require("./Bootstrap.bs.js");

var component = ReasonReact.statelessComponent("Container");

function make($staropt$star, children) {
  var fluid = $staropt$star ? $staropt$star[0] : /* false */0;
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return ReasonReact.createDomElement("div", {
                  className: Bootstrap$ReactBootstrap.toClassNames(Bootstrap$ReactBootstrap.Layout[/* container */0](fluid))
                }, children);
    });
  return newrecord;
}

exports.component = component;
exports.make      = make;
/* component Not a pure module */
