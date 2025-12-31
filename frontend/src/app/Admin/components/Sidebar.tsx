import Link from "next/link";

export default function Sidebar({ collapsed }: { collapsed: boolean }) {
  return (
    <aside className={`admin-sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-logo">
        <div className="logo-icon">❄</div>
        {!collapsed && (
          <div>
            <div className="logo-text">Comfort HVAC</div>
            <small>Admin Panel</small>
          </div>
        )}
      </div>

      <ul className="sidebar-menu">
        <li className="active"><Link href="/admin">Dashboard</Link></li>
        <li><Link href="/admin/services">Services</Link></li>
        <li><Link href="/admin/categories">Categories</Link></li>
        <li><Link href="/admin/technicians">Technicians</Link></li>
        <li><Link href="/admin/users">Users</Link></li>
        <li><Link href="/admin/bookings">Bookings</Link></li>
        <li><Link href="/admin/settlements">Settlements</Link></li>
        <li><Link href="/admin/reports">Reports</Link></li>
        <li><Link href="/admin/settings">Settings</Link></li>
      </ul>

      <div className="sidebar-footer">
        <Link href="/logout">Logout</Link>
      </div>
    </aside>
  );
}
