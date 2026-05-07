import { FiSearch } from "react-icons/fi";

function StudentSearch({ value, onChange }) {
  return (
    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm w-full mt-3">
      
      {/* icon search */}
      <FiSearch className="text-gray-400 text-lg" />

      {/* input */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search student by name..."
        className="w-full outline-none text-sm text-gray-700"
      />
    </div>
  );
}

export default StudentSearch;