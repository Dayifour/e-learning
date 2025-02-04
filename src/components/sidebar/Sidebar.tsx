// components/Sidebar.tsx

import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 w-32 p-4">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link className="text-gray-700 hover:text-blue-500" href="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link className="text-gray-700 hover:text-blue-500" href="/page1">
              Page 1
            </Link>
          </li>
          <li>
            <Link className="text-gray-700 hover:text-blue-500" href="/page2">
              Page 2
            </Link>
          </li>
          {/* Ajouter d'autres liens si nécessaire */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
