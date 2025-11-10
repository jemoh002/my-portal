import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

function Card({ title, subtitle }) {
return (
<div className="bg-white p-6 rounded shadow hover:shadow-md transition">
<div className="h-12 w-12 bg-blue-200 rounded flex items-center justify-center">🎓</div>
<h3 className="text-xl mt-4 font-semibold text-[#1565a2]">{title}</h3>
<p className="text-gray-500 mt-2">{subtitle}</p>
<div className="mt-6">
<Link to="/login" className="inline-block text-sm font-semibold text-yellow-600">Login →</Link>
</div>
</div>
);
}

export default Card;