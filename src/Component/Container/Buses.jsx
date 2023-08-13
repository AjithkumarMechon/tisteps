import React, { useState } from "react"; // Don't forget to import React and useState
import { Link } from "react-router-dom";
import "./bus.css";
import { useSelector } from "react-redux";

export default function Buses() {
  const allBuses = useSelector((state) => state.allBuses.buses);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBuses, setFilteredBuses] = useState(allBuses);

  const handleSubmit = (e) => {
    e.preventDefault();

    const filtered = allBuses.filter((bus) =>
      bus.bus_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredBuses(filtered);
  };

  const renderBuses = filteredBuses.map((item) => {
    const { id, bus_name, bus_ticket_fare } = item;
    return (
      <div className="border_content" key={id}>
        <h1> {bus_name}</h1>
        <Link to={`/${id}`}>
          <img
            src={`../../images/bus${id}.jpg`}
            alt="nothing to view"
            width={"200rem"}
          />
        </Link>
        <h1>Rs. {bus_ticket_fare}</h1>
      </div>
    );
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bus">Bus</label>
          <input
            type="text"
            id="bus"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bus">Bus</label>
          <input type="date" id="date" />
          <input type="time" id="time" />
        </div>
        <button type="submit">Search</button>
      </form>
      <div className="grid">{renderBuses}</div>
    </>
  );
}
