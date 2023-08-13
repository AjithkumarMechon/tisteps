import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedBus } from "../Redux/Action/action";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import EventSeatOutlinedIcon from "@mui/icons-material/EventSeatOutlined";

export default function BusDetails() {
  const bus = useSelector((state) => state.bus);
  const { propId } = useParams();
  const dispatch = useDispatch();
  const fetchList = async () => {
    const res = await axios.get(`http://localhost:8080/buses/${propId}`);

    dispatch(selectedBus(res.data));
  };
  useEffect(() => {
    fetchList();
  }, []);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isbook, setIsbook] = useState(false);
  const handleSeatSelect = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const calculateTotalAmount = () => {
    setTotalAmount(selectedSeats.length);
  };
  const handleBook = (e) => {
    e.preventDefault();
    setIsbook(true);
  };
  const { bus_name, bus_ticket_fare, image } = bus;
  return (
    <div>
      details{propId}
      <h1>{bus_name}</h1>
      <h2>Rs. {bus_ticket_fare}</h2>
      <img
        src={`http://localhost:3000/images/bus${propId}.jpg`}
        alt="Nothing"
        width={"500rem"}
      />
      <div>
        <a href="/">
          <button className="btn btn-danger m-2">Back</button>
        </a>
        <button onClick={handleBook} className="btn btn-success m-2">
          Book
        </button>
      </div>
      {isbook && (
        <div>
          <h2>Select Seats:</h2>
          <div className="seat-map">
            {Array.from({ length: 28 }, (_, index) => (
              <div
                key={index}
                className={`seat ${
                  selectedSeats.includes(index + 1) ? "selected" : ""
                }`}
                onClick={() => handleSeatSelect(index + 1)}
              >
                {index + 1}
                {selectedSeats.includes(index + 1) ? (
                  <EventSeatIcon className="seat-icon" />
                ) : (
                  <EventSeatOutlinedIcon className="seat-icon" />
                )}
              </div>
            ))}
          </div>
          <div>
            <button onClick={calculateTotalAmount}>Calculate Total</button>
            <p>Total Selected Seats: {totalAmount}</p>
            {totalAmount > 0 && (
              <div>
                <EventSeatIcon className="selected-icon" />
                <span className="selected-count">
                  Rs. {totalAmount * bus_ticket_fare}
                </span>
                <div>
                  <button className="btn btn-primary ml-5">Pay Now</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
