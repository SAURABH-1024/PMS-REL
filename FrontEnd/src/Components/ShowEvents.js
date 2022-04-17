import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import DataTable from "./DataTable";
import "../Style/GetEvents.css"

const ShowEvents = () => {
    const navigate = useNavigate()

    const [appo, setAppo] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios
            .get("/api/calendar/appointments")
            .then((data) => setAppo(data.data))
            .catch((err) => console.log(err));

    }, []);
    // console.log(appo);

    const search = (rows) => {
        return rows.filter((row) => row.title.toLowerCase().indexOf(query.toLowerCase()) > -1)
    }

    return (
        <>
             <div>
                <button className="go-back" onClick={() => { navigate('/create-event') }} >Go back to calendar view</button>

                <div className="form-outline">
                    <input type="search" placeholder="enter patient details" id="form1" class="form-control" value={query} onChange={e => setQuery(e.target.value)} />
                </div>

                <DataTable appo={search(appo)} />
            </div>
        </>
    );
};

export default ShowEvents;


