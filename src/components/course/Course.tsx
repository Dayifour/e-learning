"use client";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Course = () => {
  const [openSections, setOpenSections] = useState({
    intro: true,
    week1: false,
  });

  const toggleSection = (section: "intro" | "week1") => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Titre & Message de bienvenue */}
      <h1 className="text-3xl font-bold">Welcome, Abdou.</h1>

      {/* Progression du cours */}
      <div className="mt-4">
        <p className="text-gray-600">Course progress</p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className="bg-black h-2 rounded-full transition-all"
            style={{ width: "20%" }}
          ></div>
        </div>
        <p className="text-gray-500 text-sm mt-1">Completed 12 of 60 lessons</p>
      </div>

      {/* Bouton pour continuer */}
      <button className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
        Continue course
      </button>

      {/* Contenu du cours */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Course content</h2>
        <p className="text-gray-500 text-sm">
          7 sections • 60 lessons • 18 min
        </p>

        {/* Section INTRODUCTION */}
        <div className="mt-4 border rounded-md">
          <button
            className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 font-semibold"
            onClick={() => toggleSection("intro")}
          >
            <span>INTRODUCTION</span>
            {openSections.intro ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>
          {openSections.intro && (
            <div className="p-4 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                <span>INTRODUCTION - VIDÉO OBLIGATOIRE</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                <span>BUSINESS MODÈLE</span>
                <span className="ml-auto text-gray-500 text-sm">18:57</span>
              </div>
            </div>
          )}
        </div>

        {/* Section Semaine 1 */}
        <div className="mt-2 border rounded-md">
          <button
            className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 font-semibold"
            onClick={() => toggleSection("week1")}
          >
            <span>Semaine 1 | Mindset & Productivité</span>
            {openSections.week1 ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>
          {openSections.week1 && (
            <div className="p-4 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                <span>1 - INTROSPECTION</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Course;
