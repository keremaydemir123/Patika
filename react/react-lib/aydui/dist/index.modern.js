import { useState, useEffect, createElement } from 'react';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var styles = {"button":"_4s-13"};

var _excluded = ["children", "className"];
var Button = function Button(_ref) {
  var children = _ref.children,
    className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _React$useState = useState(false),
    isHover = _React$useState[0],
    setIsHover = _React$useState[1];
  var _React$useState2 = useState({
      bgColor: '#333',
      textColor: '#eee',
      borderColor: '#333',
      hoverBgColor: '#444'
    }),
    cfg = _React$useState2[0],
    setCfg = _React$useState2[1];
  useEffect(function () {
    var button = document.querySelector("." + styles.button);
    if (!button) return;
    var buttonVars = getComputedStyle(button);
    if (!props.theme) return;
    var bgColor = buttonVars.getPropertyValue("--" + props.theme);
    var textColor = buttonVars.getPropertyValue("--" + props.theme + 'Content');
    var borderColor = buttonVars.getPropertyValue("--" + props.theme + 'Border');
    var hoverBgColor = buttonVars.getPropertyValue("--" + props.theme + 'Hover');
    setCfg({
      bgColor: bgColor,
      textColor: textColor,
      borderColor: borderColor,
      hoverBgColor: hoverBgColor
    });
  }, [props.theme]);
  return createElement("button", Object.assign({}, props, {
    style: {
      backgroundColor: isHover ? cfg.hoverBgColor : cfg.bgColor,
      color: cfg.textColor,
      borderColor: cfg.textColor
    },
    className: styles.button + " " + className,
    onMouseEnter: function onMouseEnter() {
      return setIsHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHover(false);
    }
  }), children);
};

export { Button };
//# sourceMappingURL=index.modern.js.map
