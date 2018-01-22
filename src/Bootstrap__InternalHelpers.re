open Core;

module Value = {
  external pack : string => value(_) = "%identity";
  external unpack : value(_) => string = "%identity";
};
