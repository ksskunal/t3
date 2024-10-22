import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      </div>
      <nav className="mt-4">
        <Link
          href="#"
          className="block py-2 px-4 text-gray-700 hover:bg-gray-200 font-medium"
        >
          Home
        </Link>
        <Link
          href="#"
          className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
        >
          Users
        </Link>
        <Link
          href="#"
          className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
        >
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
