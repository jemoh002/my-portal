import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

function Tab({ label, active = false }) {
return (
<div className={`px-6 py-4 ${active ? 'border-b-4 border-[#2b6cb0] text-[#2b6cb0] font-semibold' : 'text-gray-600'}`}>{label}</div>
);
}

export default Tab;