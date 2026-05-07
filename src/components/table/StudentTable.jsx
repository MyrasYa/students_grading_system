import StudentSearch from "./StudentsSearch";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";

function StudentTable() {
  const [search, setSearch] = useState("");

  return (
    <div>
      {/* Search */}
      <div className="mb-4">
        <StudentSearch
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* Search */}

      <table className="w-full border-collapse mt-4">
        {/* Table Head */}
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
        {/* Table Head */}

        {/* Table Body */}
        <tbody>
          <tr className="border-b border-gray-100 hover:bg-gray-50">
            <td className="p-3">1</td>
            <td className="p-3">John Doe</td>
            <td className="p-3">Computer Science</td>
            <td className="p-3">90</td>
            <td className="p-3">A</td>

            <td className="p-3">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Passed
              </span>
            </td>

            <td className="p-3 flex gap-2">
              <button className="bg-blue-500 text-white px-3 py-1 rounded-2xl text-sm">
                <FiEdit />
              </button>

              <button className="bg-red-500 text-white px-3 py-1 rounded-2xl text-sm">
                <RiDeleteBin6Line />
              </button>
            </td>
          </tr>
        </tbody>
        {/* Table Body */}
      </table>
    </div>
  );
}

export default StudentTable;
