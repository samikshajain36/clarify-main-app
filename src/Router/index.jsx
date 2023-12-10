import React from 'react'
import MyDocuments from '../Components/MyDocuments/MyDocuments'
import Profile from '../Components/Profile/Profile'
import Subscription from '../Components/Subscription/Subscription'
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Signin from "../Components/Auth/Signin/Signin";
import Signup from "../Components/Auth/Signup/Signup";
import Dashboard from "../Components/Dashboard/Dashboard";
import Invoice from "../Components/Pages/Invoice/Create/Invoice";
import Bill from "../Components/Pages/Bills/Create/Bill";
import Qoute from "../Components/Pages/Qoute/Create/Qoute";
import PurchaseOrder from "../Components/Pages/PurchaseOrder/Create/PurchaseOrder";
import ViewInvoice from '../Components/Pages/Invoice/View/Invoice'
import ViewBill from "../Components/Pages/Bills/View/Bill";
import ViewQoute from "../Components/Pages/Qoute/View/Qoute";
import ViewPurchase from "../Components/Pages/PurchaseOrder/View/Purchase"
import MyReports from "../Components/Report/MyReport"
import Help from "../Components/Help";
import WrapperComp from '../utils/wrapperComp.jsx';
import Terms from "../Components/Home/TermConditions"
import Policy from "../Components/PrivacyPolicy/index.jsx"

function index() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/auth/register" element={<Signup />} />
            <Route path="/tandc" element={<Terms />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/dashboard" element={<WrapperComp Comp={Dashboard} />} />
            <Route path="/pages/myInvoice" element={<WrapperComp Comp={Invoice} />} />
            <Route path="/pages/myBill" element={<WrapperComp Comp={Bill} />} />
            <Route path="/pages/myQoute" element={<WrapperComp Comp={Qoute} />} />
            <Route path="/pages/myPurchaseOrder" element={<WrapperComp Comp={PurchaseOrder} />} />
            <Route path="/pages/myInvoices" element={<WrapperComp Comp={MyDocuments} />} />
            <Route path="/pages/myInvoices/viewInvoice/:id" element={<WrapperComp Comp={ViewInvoice} />} />
            <Route path="/pages/myBills/viewBill/:id" element={<WrapperComp Comp={ViewBill} />} />
            <Route path="/pages/myQoutes/viewQoute/:id" element={<WrapperComp Comp={ViewQoute} />} />
            <Route path="/pages/myPurchases/viewPurchase/:id" element={<WrapperComp Comp={ViewPurchase} />} />
            <Route path="/pages/profile" element={<WrapperComp Comp={Profile} />} />
            <Route path="/pages/subscriptions" element={<WrapperComp Comp={Subscription} />} />
            <Route path="/pages/help" element={<WrapperComp Comp={Help} />} />
            <Route path="/pages/myReports" element={<WrapperComp Comp={MyReports} />} />
        </Routes>
    )
}

export default index