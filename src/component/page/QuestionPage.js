'use client';
import MobileFrame from '../layout/MobileFrame';
import { usePsyStore, useQuestionStore } from '@/app/store/store';

export default function QuestionPage({ questionIndex, nextStep }) {
  const { questions } = useQuestionStore();
  const psyState = usePsyStore();

  const question = questions[questionIndex + 1];

  const handleAnswer = (value) => {
    psyState.updateScore(value);
    nextStep();
  };

  return (
    <MobileFrame>
      <div className="space-y-4 w-full">
        <div className="text-xl font-bold text-center">Q{questionIndex + 1}</div>
        <div className="text-center text-lg">{question.title}</div>
        {question.options.map((opt, i) => (
          <button
            key={i}
            className="w-full bg-blue-100 hover:bg-blue-300 p-3 rounded-full transition"
            onClick={() => handleAnswer(opt.value)}
          >
            {opt.title}
          </button>
        ))}
      </div>
    </MobileFrame>
  );
}
