"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const reactstrap_1 = require("reactstrap");
class WorkoutCreate extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            date: ' ',
            activity: ' ',
            duration: ' ',
            notes: ' '
        };
        this.handleSubmit = (event) => {
            console.log(event);
        };
        this.handleChange = (event) => {
            this.setState(Object.assign(Object.assign({}, this.state), { [event.target.name]: event.target.value }));
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h3", null, "Log a Workout"),
            React.createElement(reactstrap_1.Form, { onSubmit: this.handleSubmit },
                React.createElement(reactstrap_1.FormGroup, null,
                    React.createElement(reactstrap_1.Label, { htmlFor: "date" }),
                    React.createElement(reactstrap_1.Input, { onChange: this.handleChange, type: "date", name: "date", value: this.state.date })),
                React.createElement(reactstrap_1.FormGroup, null,
                    React.createElement(reactstrap_1.Label, { htmlFor: "activity" }),
                    React.createElement(reactstrap_1.Input, { onChange: this.handleChange, type: "select", name: "activity", value: this.state.activity },
                        React.createElement("option", null, "Select an activity"),
                        React.createElement("option", { value: "Gardening" }, "Gardening"),
                        React.createElement("option", { value: "Horse Riding" }, "Horse Riding"),
                        React.createElement("option", { value: "Swimming" }, "Swimming"),
                        React.createElement("option", { value: "Walk" }, "Walk"),
                        React.createElement("option", { value: "Yoga" }, "Yoga"),
                        React.createElement("option", { value: "Other" }, "Other"))),
                React.createElement(reactstrap_1.FormGroup, null,
                    React.createElement(reactstrap_1.Label, { htmlFor: "duration" }),
                    React.createElement(reactstrap_1.Input, { onChange: this.handleChange, type: "text", name: "duration", placeholder: "Time spent in hours or min.", value: this.state.duration })),
                React.createElement(reactstrap_1.FormGroup, null,
                    React.createElement(reactstrap_1.Label, { htmlFor: "notes" }),
                    React.createElement(reactstrap_1.Input, { onChange: this.handleChange, type: "textarea", name: "notes", placeholder: "Notes", value: this.state.notes })),
                React.createElement(reactstrap_1.Button, { type: "submit" }, "Click to Submit"))));
    }
}
exports.default = WorkoutCreate;
//# sourceMappingURL=WorkoutCreate.js.map