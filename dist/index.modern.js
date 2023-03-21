import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom';

var Portal = (_ref => {
  let {
    children,
    name
  } = _ref;
  let nameRandom = ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  let modalRoot = document.getElementById(`root-${name}`);
  if (!modalRoot) {
    const tempEl = document.createElement('div');
    tempEl.id = `root-${name ? name : nameRandom}`;
    document.body.append(tempEl);
    modalRoot = tempEl;
  }
  return ReactDOM.createPortal(children, modalRoot);
});

const IcoClose = _ref => {
  let {
    style = {},
    cy = ''
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", {
    className: "icon-close",
    viewBox: "0 0 24 24",
    style: style,
    "data-cy": `CloseIcon${cy}`
  }, /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
  }));
};

const ADD_ALERT = 'ADD_ALERT';
const addAlert = e => ({
  type: ADD_ALERT,
  payload: e
});
const REMOVE_ALERT = 'REMOVE_ALERT';
const removeAlert = e => ({
  type: REMOVE_ALERT,
  payload: e
});
const verifyType = t => {
  switch (t) {
    case 'primary':
      return 'primary';
    case 'secondary':
      return 'secondary';
    case 'warning':
      return 'warning';
    case 'danger':
      return 'error';
    case 'error':
      return 'error';
    case 'success':
      return 'success';
    default:
      return 'secondary';
  }
};
const AddAlert = function (t, m, h) {
  if (m === void 0) {
    m = 'Insira uma mensagem';
  }
  if (h === void 0) {
    h = 5000;
  }
  const alert = {
    type: verifyType(t),
    mensage: m,
    time: h,
    id: Math.floor(Math.random() * 65536)
  };
  return dispatch => {
    dispatch(addAlert(alert));
  };
};
const RemoveAlert = e => {
  return dispatch => {
    dispatch(removeAlert(e));
  };
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
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

var style = {"btn":"_2mJKJ","circle":"_3ARop","transparent":"_3_cOP","small":"_2uwT7","block":"_3Roxm","normal":"_1HcHX","primary":"_1vqqk","secondary":"_18RZ3","success":"_1lzPR","warning":"_8OnPu","danger":"_1xBRM","outline":"_2DS6n","outlined":"_2YTqR","link":"_2jSDj"};

var _excluded = ["children", "type", "color", "variant", "size", "action", "cy"];
var Button = function Button(_ref) {
  var children = _ref.children,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'btn' : _ref$type,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'default' : _ref$color,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'normal' : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    _ref$action = _ref.action,
    action = _ref$action === void 0 ? function () {
      return null;
    } : _ref$action,
    _ref$cy = _ref.cy,
    cy = _ref$cy === void 0 ? '' : _ref$cy,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/React.createElement("button", _extends({
    "data-cy": "Button" + cy,
    className: props.className ? props.className : style[type] + " " + style[type][variant] + " " + style[type][variant][color] + " " + style[type][size] + " ",
    onClick: action
  }, props), children);
};

var Alert = function Alert() {
  var dispatch = useDispatch();
  var alerts = useSelector(function (state) {
    return state.alerts;
  });
  return /*#__PURE__*/React.createElement(Portal, {
    name: "alert"
  }, /*#__PURE__*/React.createElement(Fragment, null, alerts === null || alerts === void 0 ? void 0 : alerts.map(function (alert) {
    setTimeout(function () {
      dispatch(RemoveAlert(alert.id));
    }, alert.time ? alert.time : 3000);
    return /*#__PURE__*/React.createElement("div", {
      key: alert.id,
      className: "box-alert alert-" + alert.type,
      "data-cy": "Alert" + alert.id
    }, /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: alert.mensage
      },
      "data-cy": "Alert" + alert.id + "Message"
    }), /*#__PURE__*/React.createElement(Button, {
      className: "alert-close",
      action: function action() {
        return dispatch(RemoveAlert(alert.id));
      },
      cy: "Alert" + alert.id + "Close"
    }, /*#__PURE__*/React.createElement(IcoClose, {
      cy: "Alert" + alert.id
    })));
  })));
};

export { ADD_ALERT, AddAlert, Alert, Button, REMOVE_ALERT, RemoveAlert };
//# sourceMappingURL=index.modern.js.map
