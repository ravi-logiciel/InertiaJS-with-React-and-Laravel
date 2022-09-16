import React from "react";
import { Link } from "@inertiajs/inertia-react";

function Home(props) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Home Component</div>

                        <div className="card-body">
                            I'm a Home component!
                            <ul>
                                {props.users.map((user) => (
                                    <li key={user.id}>{user.name}</li>
                                ))}
                            </ul>
                            <br />
                            <br />
                            <Link href="/">
                                Go to Welcome Page via inertiajs
                            </Link>
                            <br />
                            <br />
                            <a href="/">Go to Welcome Page via anchor</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
