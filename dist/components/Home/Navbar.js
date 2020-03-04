"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const reactstrap_1 = require("reactstrap");
;
class Sitebar extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isOpen: false
        };
        this.toggle = () => {
            this.setState({ isOpen: !this.state.isOpen });
        };
    }
    render() {
        return (React.createElement(reactstrap_1.Navbar, { color: "faded", light: true, expand: "md" },
            React.createElement(reactstrap_1.NavbarBrand, { href: "/" }, "Workout Log"),
            React.createElement(reactstrap_1.NavbarToggler, { onClick: this.toggle }),
            React.createElement(reactstrap_1.Collapse, { isOpen: this.state.isOpen, navbar: true },
                React.createElement(reactstrap_1.Nav, { className: "ml-auto", navbar: true },
                    React.createElement(reactstrap_1.NavItem, null,
                        React.createElement(reactstrap_1.Button, { onClick: this.props.clearToken }, "Logout"))))));
    }
}
exports.default = Sitebar;
//# sourceMappingURL=Navbar.js.map