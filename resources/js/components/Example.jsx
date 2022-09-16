import React from "react";
import ReactDOM from "react-dom";

function Example(props) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">
                            I'm an example component!
                        </div>
                        <ul>
                            {props.users.map((user) => (
                                <li key={user.id}>{user.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById("example")) {
    if (document.getElementById("example")) {
        const propsContainer = document.getElementById("example");

        const props = Object.assign({}, propsContainer.dataset);
        const users = JSON.parse(props.users);

        ReactDOM.render(
            <Example {...props} users={users} />,
            document.getElementById("example")
        );
    }
}
