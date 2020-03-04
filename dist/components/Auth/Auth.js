"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const reactstrap_1 = require("reactstrap");
const Login_1 = require("./Login");
const Signup_1 = require("./Signup");
function Auth({ updateToken }) {
    return (React.createElement(reactstrap_1.Container, { className: "auth-container" },
        React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: "6" },
                React.createElement(Signup_1.default, { updateToken: updateToken })),
            React.createElement(reactstrap_1.Col, { md: "6" },
                React.createElement(Login_1.default, { updateToken: updateToken })))));
}
;
exports.default = Auth;
//# sourceMappingURL=Auth.js.map