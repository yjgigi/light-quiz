'use client';
import MobileFrame from '../layout/MobileFrame';

export default function StartPage({ nextStep }) {
  return (
    <MobileFrame>
      <div className="text-center space-y-6">
        <h1 className="text-2xl font-bold">你是哪一種劇場燈光？</h1>
        <p className="text-sm text-gray-600">
          透過 8 題問題，測出你在劇場裡的燈光人格。
        </p>
        <button
          onClick={nextStep}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
        >
          開始測驗
        </button>
      </div>
    </MobileFrame>
  );
}
