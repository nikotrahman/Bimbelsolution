import React, { useState } from "react";

interface Module {
  id: number;
  name: string;
  category: string;
  file: File | null;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 animate-slideUp">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

// Tailwind animations (inject into page or global CSS)
const styles = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}
.animate-slideUp {
  animation: slideUp 0.3s ease-out forwards;
}
`;

export default function LearningRepo() {
  const [modules, setModules] = useState<Module[]>([
    { id: 1, name: "Algebra Basics", category: "Math", file: null },
    { id: 2, name: "World History", category: "Social", file: null },
  ]);

  const [formName, setFormName] = useState("");
  const [formCategory, setFormCategory] = useState("Science");
  const [formFile, setFormFile] = useState<File | null>(null);

  const [modalType, setModalType] = useState<"" | "add" | "view" | "edit" | "download" | "delete">("")
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  const openModal = (type: "add" | "view" | "edit" | "download" | "delete", module?: Module) => {
    setModalType(type);
    setSelectedModule(module || null);
    if (type === "edit" && module) {
      setFormName(module.name);
      setFormCategory(module.category);
      setFormFile(module.file);
    }
  };

  const closeModal = () => {
    setModalType("");
    setSelectedModule(null);
    setFormName("");
    setFormCategory("Science");
    setFormFile(null);
  };

  const handleSave = () => {
    if (modalType === "add") {
      const newModule: Module = {
        id: modules.length + 1,
        name: formName,
        category: formCategory,
        file: formFile,
      };
      setModules([...modules, newModule]);
    } else if (modalType === "edit" && selectedModule) {
      setModules(
        modules.map((m) =>
          m.id === selectedModule.id
            ? { ...m, name: formName, category: formCategory, file: formFile }
            : m
        )
      );
    }
    closeModal();
  };

return (
  <div className="max-w-4xl mx-auto p-6">
    {/* Inject animation styles */}
    <style>{styles}</style>

    <h2 className="text-2xl font-bold text-center mb-6">Learning Repository</h2>

    <div className="mb-4">
      <button
        onClick={() => openModal("add")}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add New Module
      </button>
    </div>

    <table className="w-full border-collapse bg-white shadow rounded-lg">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-2 border">No</th>
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Category</th>
          <th className="p-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {modules.map((m, index) => (
          <tr key={m.id} className="hover:bg-gray-50">
            <td className="p-2 border">{index + 1}</td>
            <td className="p-2 border">{m.name}</td>
            <td className="p-2 border">{m.category}</td>
            <td className="p-2 border space-x-2">
              <button
                onClick={() => openModal("view", m)}
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-sm"
              >
                View
              </button>
              <button
                onClick={() => openModal("edit", m)}
                className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => openModal("download", m)}
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 text-sm"
              >
                Download
              </button>
              <button
                onClick={() => openModal("delete", m)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm"
              >
                Delete
              </button>     
            </td>
          </tr>
        ))} 
      </tbody>
    </table>

    {/* Add Modal */}
    <Modal isOpen={modalType === "add"} onClose={closeModal} title="Add Module">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        <select
          value={formCategory}
          onChange={(e) => setFormCategory(e.target.value)}
          className="w-full border rounded px-3 py-2"
        >
          <option value="Science">Science</option>
          <option value="Social">Social</option>
          <option value="Math">Math</option>
        </select>
        <input
          type="file"
          onChange={(e) => setFormFile(e.target.files?.[0] || null)}
          className="w-full border rounded px-3 py-2"
        />
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </div>
    </Modal>

    {/* View Modal */}
    <Modal isOpen={modalType === "view" && !!selectedModule} onClose={closeModal} title="Module Detail">
      {selectedModule && (
        <div>
          <p><b>Name:</b> {selectedModule.name}</p>
          <p><b>Category:</b> {selectedModule.category}</p>
          {selectedModule.file && <p><b>File:</b> {selectedModule.file.name}</p>}
        </div>
      )}
    </Modal>

    {/* Edit Modal */}
    <Modal isOpen={modalType === "edit" && !!selectedModule} onClose={closeModal} title="Edit Module">
      <div className="space-y-4">
        <input
          type="text"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        <select
          value={formCategory}
          onChange={(e) => setFormCategory(e.target.value)}
          className="w-full border rounded px-3 py-2"
        >
          <option value="Science">Science</option>
          <option value="Social">Social</option>
          <option value="Math">Math</option>
        </select>
        <input
          type="file"
          onChange={(e) => setFormFile(e.target.files?.[0] || null)}
          className="w-full border rounded px-3 py-2"
        />
        <button
          onClick={handleSave}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Update
        </button>
      </div>
    </Modal>

    {/* Download Modal */}
    <Modal isOpen={modalType === "download" && !!selectedModule} onClose={closeModal} title="Download Module">
      {selectedModule && (
        <div>
          <p>Downloading <b>{selectedModule.name}</b>...</p>
          <button
            onClick={() => {
              alert("Downloading " + selectedModule.name);
              closeModal();
            }}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-4"
          >
            Confirm Download
          </button>
        </div>
      )}
    </Modal>

    {/* Delete Modal */}
    <Modal isOpen={modalType === "delete" && !!selectedModule} onClose={closeModal} title="Delete Module">
      {selectedModule && (
        <div>
          <p>Are you sure you want to delete <b>{selectedModule.name}</b>?</p>
          <button
            onClick={() => {
              alert("Deleting " + selectedModule.name);
              closeModal();
            }}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-4"
          >
            Confirm Delete
          </button>
        </div>
      )}
    </Modal>
  </div>
);
}