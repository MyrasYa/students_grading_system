function StudentForm() {
  return (
    <div>
      <form className="flex flex-col gap-5">
        {/* Student Name */}
        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold text-sm text-[#505F76]">
            Student Name
          </label>

          <input
            type="text"
            placeholder="Enter student name"
            className="border border-gray-200 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-black/10 text-sm bg-[#FFFFFF]/59"
          />
        </div>

        <div className="flex flex-row gap-3">
          {/* Major */}
          <div className="flex flex-col gap-2 w-xs">
            <label className="font-semibold text-sm text-[#505F76]">Major</label>

            <input
              type="text"
              placeholder="Enter major"
              className="border border-gray-200 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-black/10 text-sm bg-[#FFFFFF]/59 "
            />
          </div>

          {/* Score */}
          <div className="flex flex-col gap-2 w-[156px]">
            <label className="font-semibold text-sm text-[#505F76]">Score</label>

            <input
              type="number"
              placeholder="Enter score"
              className="border border-gray-200 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-black/10 text-sm bg-[#FFFFFF]/59 "
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-[#2563EB] text-white py-2 px-5 rounded-md w-31 text-sm font-bold"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
