import axios from "axios";
import { useEffect, useState } from "react";
import './Chart.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";
function PieRechartComponent() {
  const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
  const data = [
    {
      name: "January " + new Date().getFullYear(),
      amt: ''
    },
    {
      name: "February " + new Date().getFullYear(),
      amt: ''
    },
    {
      name: "March " + new Date().getFullYear(),
      amt: ''
    },
    {
      name: "April " + new Date().getFullYear(),
      amt: ''
    },
    {
      name: "May " + new Date().getFullYear(),
      amt: ''
    },
    {
      name: "June " + new Date().getFullYear(),
      amt: ''
    },
    {
      name: "July " + new Date().getFullYear(),
      amt: ''
    }, {
      name: "August " + new Date().getFullYear(),
      amt: ''
    },
    {
      name: "September " + new Date().getFullYear(),
      amt: ''
    },
    {
      name: "October " + new Date().getFullYear(),
      amt: ''
    },
    {
      name: "November " + new Date().getFullYear(),
      amt: ''
    },
    {
      name: "December " + new Date().getFullYear(),
      amt: '5000'
    }
  ];
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc"
          }}
        >
        </div>
      );
    }
    return null;
  };

  const [invoice, setInvoice] = useState([])
  const [bill, setBill] = useState([])
  const [qoute, setQoute] = useState([])
  const [po, setPo] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/invoice`, { headers: { 'authentication': 'Bearer ' + localStorage.getItem('token') } }).then(res => {
      setInvoice(res.data.invoice)
    })
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/bill`, { headers: { 'authentication': 'Bearer ' + localStorage.getItem('token') } }).then(res => {
      setBill(res.data.bills)
    })
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/qoute`, { headers: { 'authentication': 'Bearer ' + localStorage.getItem('token') } }).then(res => {
      setQoute(res.data.qoute)
    })
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/purchase`, { headers: { 'authentication': 'Bearer ' + localStorage.getItem('token') } }).then(res => {
      setPo(res.data.purchase)
    })


    // let invMax = invoice.reduce((acc, value) => {
    //   return (acc = acc > value.total ? acc : value.total);
    // }, 0);
    // let billMax = bill.reduce((acc, value) => {
    //   return (acc = acc > value.total ? acc : value.total);
    // }, 0);

    // let qouteMax = qoute.reduce((acc, value) => {
    //   return (acc = acc > value.total ? acc : value.total);
    // }, 0);
    // let purchaseMax = po.reduce((acc, value) => {
    //   return (acc = acc > value.total ? acc : value.total);
    // }, 0);

    // let invVSbill = Math.max(invMax, billMax)
    // let qouteVSpo = Math.max(qouteMax, purchaseMax)

    // console.log(inv)
    // console.log(maxValue);
  }, [])
  return (
    <>
      <BarChart
        width={850}
        height={300}
        data={data}
        style={{ margin: '5px 30px 5px 0rem', fontSize: 7, }}
      >
        <XAxis dataKey="name" style={{ transform: 'rotate(90deg) !important' }} />
        <YAxis />
        <Tooltip />
        <Bar width='1%' dataKey="amt" fill="#f39573" />
      </BarChart>
    </>
  );
}
export default PieRechartComponent;