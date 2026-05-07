import StudentSearch from "./StudentsSearch";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { deleteStudent, updateStudent } from "../../services/api";

function StudentTable({ students: initialStudents = [], onChange }) {
  const [search, setSearch] = useState("");
  const [students, setStudents] = useState([]);

  // MODAL STATE
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [form, setForm] = useState({
    name: "",
    major: "",
    score: "",
  });

  // sync dari parent
  useEffect(() => {
    setStudents(initialStudents);
  }, [initialStudents]);

  // DELETE
  const handleDelete = (id) => {
    deleteStudent(id).then(() => {
      onChange && onChange();
    });
  };

  // OPEN EDIT MODAL
  const handleEditClick = (item) => {
    setSelectedStudent(item);
    setForm({
      name: item.name,
      major: item.major,
      score: item.score,
    });
    setIsEditOpen(true);
  };

  // UPDATE
  const handleUpdate = () => {
    updateStudent({
      id: selectedStudent.id,
      ...form,
    }).then(() => {
      setIsEditOpen(false);
      onChange && onChange();
    });
  };

  // SEARCH FILTER
  const filteredStudents = students.filter((item) =>
    (item.name || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* SEARCH */}
      <div className="mb-4">
        <StudentSearch
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="w-full border-collapse mt-4">
        {/* HEAD */}
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-3">No</th>
            <th className="text-left p-3">Name</th>
            <th className="text-left p-3">Major</th>
            <th className="text-left p-3">Score</th>
            <th className="text-left p-3">Grade</th>
            <th className="text-left p-3">Status</th>
            <th className="text-left p-3">Action</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {filteredStudents.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center p-5 text-gray-400">
                No data available
              </td>
            </tr>
          ) : (
            filteredStudents.map((item, index) => (
              <tr
                key={item.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.major}</td>
                <td className="p-3">{item.score}</td>
                <td className="p-3">{item.grade}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.score >= 75
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.score >= 75 ? "Passed" : "Failed"}
                  </span>
                </td>

                <td className="p-3 flex gap-2">
                  {/* EDIT */}
                  <button
                    onClick={() => handleEditClick(item)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-2xl text-sm"
                  >
                    <FiEdit />
                  </button>

                  {/* DELETE */}
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-2xl text-sm"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* ================= MODAL EDIT ================= */}
      {isEditOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[400px] shadow-lg">

            <h2 className="text-lg font-bold mb-4">Edit Student</h2>

            <input
              className="w-full border p-2 mb-3 rounded"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              placeholder="Name"
            />

            <input
              className="w-full border p-2 mb-3 rounded"
              value={form.major}
              onChange={(e) =>
                setForm({ ...form, major: e.target.value })
              }
              placeholder="Major"
            />

            <input
              type="number"
              className="w-full border p-2 mb-4 rounded"
              value={form.score}
              onChange={(e) =>
                setForm({ ...form, score: e.target.value })
              }
              placeholder="Score"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsEditOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-md"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Update
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default StudentTable;