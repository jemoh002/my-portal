import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

function NavItem({ label, active = false }) {
return (
<div className={`px-4 py-3 text-sm ${active ? 'bg-[#f2b400] text-white font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}>
{label}
</div>
);
}

export default NavItem;