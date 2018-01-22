open Bootstrap;

let component = ReasonReact.statelessComponent("Container");

let make = (~fluid=false, children) => {
  ...component,
  render: (_) =>
    ReasonReact.createDomElement(
      "div",
      ~props={"className": Layout.container(~fluid) |> toClassNames},
      children
    )
};
