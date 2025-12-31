"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import './styles/admin.css'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`admin-wrapper ${collapsed ? "collapsed" : ""}`}>
      <Sidebar collapsed={collapsed} />
      <div className="admin-main">
        <Topbar onToggle={() => setCollapsed(!collapsed)} />
        <div className="admin-content">{children}</div>
      </div>
    </div>
  );
}
