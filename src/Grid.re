let component = ReasonReact.statelessComponent("Grid");

let make = (~fluid=false, children) => {
  ...component,
  render: (_) =>
    ReasonReact.createDomElement("div", ~props={"className": "bla"}, children)
};
