'use client';
import MobileFrame from '../layout/MobileFrame';
import { usePsyStore } from '@/app/store/store';

export default function ResultPage() {
  const { score } = usePsyStore();

  const getResult = () => {
    if (score <= 6) return '你是 Leko：精準冷靜的焦點燈光！';
    if (score <= 10) return '你是 Par：直來直往的熱情光束！';
    if (score <= 14) return '你是 發燈：混亂中照亮一切的存在！';
    if (score <= 18) return '你是 Cyc：情緒大海的背景光！';
    if (score <= 22) return '你是 Flood：毫無遮掩的強烈光線！';
    return '你是 Fresnel：溫柔擴散的萬用燈具！';
  };

  return (
    <MobileFrame>
      <div className="text-center space-y-6">
        <div className="text-2xl font-bold">{getResult()}</div>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600"
          onClick={() => window.location.reload()}
        >
          再玩一次
        </button>
      </div>
    </MobileFrame>
  );
}
