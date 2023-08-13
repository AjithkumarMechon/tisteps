import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBus } from "../Redux/Action/action";
import Buses from "./Buses";

export default function BusesListing() {
  const buses = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchList = async () => {
    const res = await axios.get("http://localhost:8080/buses");

    dispatch(setBus(res.data));
  };
  useEffect(() => {
    fetchList();
  }, []);
  console.log(buses);

  return (
    <div>
      <Buses />
    </div>
  );
}
