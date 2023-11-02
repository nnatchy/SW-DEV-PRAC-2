import HospitalCatalog from "@/components/hospitalCatalog";
import { FaHeart } from "react-icons/fa";
import getHospitals from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddHospitalForm from "@/components/AddHospitalForm";

export default async function Hospital() {
  const hospitals = getHospitals();
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null
  const profile = session ? await getUserProfile(session.user.token) : null;
  return (
    <main className="text-center p-5">
      <div className="text-[30px] font-bold flex items-center justify-center mt-[50px] pt-[20px]">
        <span className="mr-3">โรงพยาบาลที่เข้าร่วมโครงการ</span>
        <span>
          <FaHeart />
        </span>
      </div>
      <Suspense fallback={
        <div>
          <p className="text-xl font-bold">Loading...</p>
          <LinearProgress />
        </div>
      }>
        <div className="flex flex-wrap justify-center">
          <HospitalCatalog hospitalJson={hospitals} />
        </div>
        {
          (profile?.data.role == "admin") ? <AddHospitalForm/> : null
        }
      </Suspense>
    </main>
  )
}
