import React, { Fragment } from "react";
import { AddDriver } from "./AddDriver";
import { DriversList } from "./DriversList";

const Dashboard = (props) => {
    return <Fragment>
        <DriversList />
    </Fragment>
}

export default Dashboard;