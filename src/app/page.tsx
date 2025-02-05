"use client";

const Sidebar = () => {
  return (
    <aside className="w-72 text-gray-900 p-6 shadow-lg!:=)àç_a²&  as">
      <h2 className="text-xl font-bold mb-6">Feed</h2>
      <nav>
        <ul className="space-y-4 text-gray-500">
          <li className="text-lg font-semibold">ESPACE NOUVEAUX MEMBRES</li>
          <li className="text-black transition">
            📌 Bienvenue : Commencez ici
          </li>
          <li className="text-black transition">📜 Règles à respecter</li>
          <li className="text-black transition">📘 Guide Circle</li>
          <li className="text-black transition">📧 Nous contacter</li>
          <li className="text-lg font-semibold mt-6">FORMATIONS</li>
          <li className="text-black transition">📚 ECOM AFRICA PRO</li>
          <li className="text-lg font-semibold mt-6">ESPACE MEMBRES</li>
          <li className="text-black transition">
            🗣️ Présentez-vous <span className="text-blue-400">5</span>
          </li>
          <li className="text-black transition">
            💬 Exprimez-vous <span className="text-blue-400">40</span>
          </li>
          <li className="text-black transition">
            🏆 Partagez vos réussites <span className="text-blue-400">1</span>
          </li>
          <li className="text-black transition">👥 Discutez entre vous</li>
        </ul>
      </nav>
    </aside>
  );
};

const Content = () => {
  return (
    <main className="ml-72 p-10 pt-24 bg-gray-50">
      <h2 className="text-xl font-bold mb-4">
        Nom du Produit :{" "}
        <span className="font-normal text-gray-700">
          Chaussettes de compression anti-fatigue
        </span>
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <img
          src="/mnt/data/image.png"
          alt="Produit"
          className="rounded-lg shadow-md w-full"
        />
      </div>
    </main>
  );
};

export default function Page() {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Content />
      </div>
    </div>
  );
}
