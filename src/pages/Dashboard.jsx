import StudentForm from '../components/form/StudentForm'
import StatsCard from '../components/cards/StatsCard'
import StudentTable from '../components/table/StudentTable'

function Dashboard() {
  return (
    <div>
      <h1 className="text-right text-[44px] antialiased font-bold text-[#4f4a4ac2] mb-[-25px] italic">
        Students Grading System
      </h1>

      {/* Input & Statistic Students Section */}
      <div>
        <h2 className="font-bold text-xl text-[#191C1E] mb-1">Add New Student</h2>
        <p className="text-[#191C1E]/50 text-base">
            Enter student information and grading details.
        </p>

        <div className="grid grid-cols-[1fr_auto_3fr] bg-[#CDCDCD]/3 rounded-3xl p-4 gap-6 mt-4 shadow-sm">
          <div className="">
            <StudentForm/>
          </div>
          <div className="flex justify-center">
            <div className="w-px h-full bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-2 mt-3">
            <StatsCard
                title="Total Students"
                value="10"
                bgColor="bg-[#FFFFFF]/74"
                wrapTitleColor="bg-[#5C5C5C]/5"
                txtColor="text-[#505F76]"
                cardWidth="w-[160px]"
            />
            <StatsCard
                title="Average Score"
                value="100"
                bgColor="bg-[#FFFFFF]/74"
                wrapTitleColor="bg-[#5C5C5C]/5"
                txtColor="text-[#505F76]"
                cardWidth="w-[190px]"
                className="right-2"
            />
            <StatsCard
                title="Passed"
                value="5"
                bgColor="bg-[#FFFFFF]/74"
                wrapTitleColor="bg-[#10B981]/10"
                txtColor="text-[#10B981]"
                cardWidth="w-[120px]"
                
            />
            <StatsCard
                title="Not Passed"
                value="100"
                bgColor="bg-[#FFFFFF]/74"
                wrapTitleColor="bg-[#FF0004]/10"
                txtColor="text-[#FF0004]"
                cardWidth="w-[230px]"
                className="right-12"
            />
          </div>
        </div>
      </div>
      {/* Input & Statistic Students Section */}

      {/* Tabel Students Section */}
      <div className="mt-7 rounded-3xl p-4 shadow-sm overflow-hidden bg-[#CDCDCD]/3">
        <h2 className="font-bold text-xl text-[#191C1E] mb-1">Tabel Students</h2>
        <p className="text-[#191C1E]/50 text-base">
            Manage and view all enrolled student records.
        </p>

        <StudentTable/>

      </div>
      {/* Tabel Students Section */}


    </div>
  );
}

export default Dashboard;