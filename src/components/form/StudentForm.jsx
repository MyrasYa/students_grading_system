import { addStudent } from "../../services/api";
import { useState } from "react";

function StudentForm({ onSuccess }) {
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [score, setScore] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !major || !score) return;

    setLoading(true);

    addStudent({
      name,
      major,
      score,
    })
      .then((res) => {
        console.log("SUCCESS:", res.data);

        setName("");
        setMajor("");
        setScore("");

        onSuccess?.();
      })
      .catch((err) => {
        console.log("ERROR:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        
        {/* Student Name */}
        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold text-sm text-[#505F76]">
            Student Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter student name"
            className="border border-gray-200 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-black/10 text-sm bg-[#FFFFFF]/59"
          />
        </div>

        <div className="flex flex-row gap-3">
          
          {/* Major */}
          <div className="flex flex-col gap-2 w-xs">
            <label className="font-semibold text-sm text-[#505F76]">
              Major
            </label>

            <input
              type="text"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              placeholder="Enter major"
              className="border border-gray-200 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-black/10 text-sm bg-[#FFFFFF]/59 "
            />
          </div>

          {/* Score */}
          <div className="flex flex-col gap-2 w-[156px]">
            <label className="font-semibold text-sm text-[#505F76]">
              Score
            </label>

            <input
              type="number"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              placeholder="Enter score"
              className="border border-gray-200 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-black/10 text-sm bg-[#FFFFFF]/59 "
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-[#2563EB] text-white py-2 px-5 rounded-md w-31 text-sm font-bold"
        >
          {loading ? "Adding..." : "Add Student"}
        </button>
      </form>
    </div>
  );
}

export default StudentForm;