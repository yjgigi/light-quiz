'use client';
import MobileFrame from '../layout/MobileFrame';

export default function DisplayResultPage({ nextStep }) {
  return (
    <MobileFrame>
      <div className="text-center space-y-6">
        <h2 className="text-xl font-bold">準備好了嗎？</h2>
        <p>看看你是哪一種劇場燈光！</p>
        <button
          onClick={nextStep}
          className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
        >
          查看結果
        </button>
      </div>
    </MobileFrame>
  );
}
