import React from "react";

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
      <div className="bg-white rounded-md max-w-2xl w-full p-6 relative">
        <button className="absolute top-4 right-4" onClick={onClose}>
          ✕
        </button>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-slate-600 mb-4">{project.category}</p>
        <div className="h-56 bg-slate-100 mb-4 flex items-center justify-center">
          {project.image ? (
            <img
              src={project.image}
              alt=""
              className="w-full h-full object-cover"
            />
          ) : (
            "image"
          )}
        </div>
        <p>{project.details}</p>
      </div>
    </div>
  );
}
