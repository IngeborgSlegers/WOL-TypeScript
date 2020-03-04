"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Auth_1 = require("./components/Auth/Auth");
const WorkoutIndex_1 = require("./components/Workouts/WorkoutIndex");
const Navbar_1 = require("./components/Home/Navbar");
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            token: ' '
        };
        this.clearToken = () => {
            localStorage.clear();
            this.setState({ token: ' ' });
            alert(`You have successfully logged out!`);
        };
        this.updateToken = (newToken) => {
            localStorage.setItem('token', newToken);
            this.setState({ token: newToken });
        };
        this.protectedViews = () => {
            return (this.state.token === localStorage.getItem('token') ? React.createElement(WorkoutIndex_1.default, null) : React.createElement(Auth_1.default, { updateToken: this.updateToken }));
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(Navbar_1.default, { clearToken: this.clearToken }),
            this.protectedViews()));
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map