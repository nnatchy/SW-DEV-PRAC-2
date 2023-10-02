import CardPanel from "@/components/CardPanel";
import { FaHeart } from "react-icons/fa";
export default function Car() {
  return (
    <main className="text-center mt-[50px] pt-[30px]">
      <div className="text-[30px] font-bold flex items-center justify-center">
        <span className="mr-3">โรงพยาบาลที่เข้าร่วมโครงการ</span>
        <span>
          <FaHeart />
        </span>
      </div>
      <div className="flex justify-center">
        <CardPanel />
      </div>
    </main>
  );
}
