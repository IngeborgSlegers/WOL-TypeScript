"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const reactstrap_1 = require("reactstrap");
const WorkoutCreate_1 = require("./WorkoutCreate");
class WorkoutIndex extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            workouts: [],
            updateActive: false,
            workoutToUpdate: {}
        };
        this.fetchWorkouts = () => {
            fetch(`http://localhost:3000/log`, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.token
                })
            })
                .then((res) => res.json())
                .then((logData) => {
                console.log(logData.logs);
                this.setState({ workouts: logData.logs });
            });
        };
        this.editUpdateWorkout = (workout) => {
            console.log(workout);
            this.setState({ workoutToUpdate: workout });
        };
        this.updateToggle = () => {
            this.setState({ updateActive: !this.state.updateActive });
        };
    }
    componentWillMount() {
        this.fetchWorkouts();
    }
    render() {
        return (React.createElement(reactstrap_1.Container, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, { md: "3" },
                    React.createElement(WorkoutCreate_1.default, { fetchWorkouts: this.fetchWorkouts, token: this.props.token })))));
    }
}
exports.default = WorkoutIndex;
//# sourceMappingURL=WorkoutIndex.js.map