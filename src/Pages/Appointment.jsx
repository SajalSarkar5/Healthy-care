import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/ContextData";

const Appointment = () => {

    const { user } = useContext(UserContext);

    return (
        <div>
            <h1 className="text-2xl text-white">appointment : {appointment.length}</h1>
        </div>
    );
};

export default Appointment;