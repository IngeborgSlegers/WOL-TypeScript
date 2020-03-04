"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const reactstrap_1 = require("reactstrap");
class Login extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            email: '',
            password: ''
        };
        this.handleChange = (event) => {
            this.setState(Object.assign(Object.assign({}, this.state), { [event.target.name]: event.target.value }));
        };
        this.handleSubmit = (event) => {
            event.preventDefault();
            fetch('http://localhost:3000/user/signin', {
                method: 'POST',
                body: JSON.stringify({
                    user: {
                        email: this.state.email,
                        password: this.state.password
                    }
                }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then((response) => response.json()).then((data) => {
                this.props.updateToken(data.sessionToken);
            });
        };
    }
    render() {
        return (React.createElement(reactstrap_1.Form, { onSubmit: this.handleSubmit },
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { htmlFor: "email" }, "Email"),
                React.createElement(reactstrap_1.Input, { onChange: this.handleChange, value: this.state.email, type: "email", name: "email", required: true })),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { htmlFor: "password" }, "Password"),
                React.createElement(reactstrap_1.Input, { onChange: this.handleChange, value: this.state.password, name: "password", type: "password" })),
            React.createElement(reactstrap_1.Button, { type: "submit" }, "Login")));
    }
}
exports.default = Login;
//# sourceMappingURL=Login.js.map