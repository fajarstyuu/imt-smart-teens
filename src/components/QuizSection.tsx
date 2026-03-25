"use client";

import { useState } from "react";
import { quizQuestions } from "@/data/quiz";

type AnswerState = {
  selectedIndex: number;
  isCorrect: boolean;
};

export default function QuizSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(AnswerState | null)[]>(
    Array(quizQuestions.length).fill(null)
  );
  const [quizFinished, setQuizFinished] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const current = quizQuestions[currentIndex];
  const currentAnswer = answers[currentIndex];
  const totalCorrect = answers.filter((a) => a?.isCorrect).length;

  const handleAnswer = (selectedIndex: number) => {
    if (currentAnswer !== null) return; // already answered
    const isCorrect = selectedIndex === current.correctIndex;
    const newAnswers = [...answers];
    newAnswers[currentIndex] = { selectedIndex, isCorrect };
    setAnswers(newAnswers);
    setShowExplanation(false);
  };

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowExplanation(false);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setAnswers(Array(quizQuestions.length).fill(null));
    setQuizFinished(false);
    setShowExplanation(false);
  };

  const getScoreInfo = () => {
    const pct = (totalCorrect / quizQuestions.length) * 100;
    if (pct === 100) return { emoji: "🏆", message: "Luar biasa! Nilai sempurna!", color: "text-yellow-500" };
    if (pct >= 80) return { emoji: "🌟", message: "Bagus sekali! Kamu sangat paham IMT!", color: "text-green-600" };
    if (pct >= 60) return { emoji: "👍", message: "Cukup baik! Terus belajar ya!", color: "text-blue-600" };
    return { emoji: "📚", message: "Yuk pelajari lagi materinya!", color: "text-orange-500" };
  };

  const progress = ((currentIndex + 1) / quizQuestions.length) * 100;

  if (quizFinished) {
    const scoreInfo = getScoreInfo();
    const score = Math.round((totalCorrect / quizQuestions.length) * 100);
    return (
      <section id="kuis" className="section-padding bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-10 animate-scale-in shadow-xl shadow-green-100/50">
            <div className="text-7xl mb-4">{scoreInfo.emoji}</div>
            <h3
              className="text-3xl font-black text-gray-800 mb-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Kuis Selesai!
            </h3>
            <p className={`text-lg font-semibold mb-6 ${scoreInfo.color}`}>
              {scoreInfo.message}
            </p>

            {/* Score ring */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative w-40 h-40">
                <svg className="w-40 h-40 -rotate-90" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="60" fill="none" stroke="#dcfce7" strokeWidth="12" />
                  <circle
                    cx="80" cy="80" r="60"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 60}`}
                    strokeDashoffset={`${2 * Math.PI * 60 * (1 - score / 100)}`}
                    style={{ transition: "stroke-dashoffset 1s ease-out" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span
                    className="text-4xl font-black text-green-600"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {score}
                  </span>
                  <span className="text-xs text-gray-400 font-semibold">/ 100</span>
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="text-2xl font-black text-green-600">{totalCorrect}</div>
                <div className="text-xs text-gray-500">Benar ✅</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="text-2xl font-black text-red-500">{quizQuestions.length - totalCorrect}</div>
                <div className="text-xs text-gray-500">Salah ❌</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="text-2xl font-black text-gray-600">{quizQuestions.length}</div>
                <div className="text-xs text-gray-500">Total Soal</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleReset}
                className="flex-1 py-3.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-2xl shadow-md hover:scale-[1.02] transition-all"
              >
                🔄 Coba Lagi
              </button>
              <a
                href="#materi"
                className="flex-1 py-3.5 border-2 border-green-300 text-green-700 font-bold rounded-2xl hover:bg-green-50 transition-all text-center"
              >
                📚 Pelajari Materi
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="kuis" className="section-padding bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            ✏️ Kuis Interaktif
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black text-gray-800 mb-3"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Uji{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
              Pengetahuanmu
            </span>
          </h2>
          <p className="text-gray-500 text-sm">
            10 soal pilihan ganda seputar IMT. Pilih jawaban yang benar!
          </p>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-green-100/50 border border-green-100 overflow-hidden">
          {/* Progress Bar */}
          <div className="h-2 bg-green-50">
            <div
              className="h-2 bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="p-6 sm:p-8">
            {/* Question Counter & Score */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                Soal {currentIndex + 1} dari {quizQuestions.length}
              </span>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  ✅ {answers.filter((a) => a?.isCorrect).length}
                </span>
                <span className="flex items-center gap-1 text-xs font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full">
                  ❌ {answers.filter((a) => a !== null && !a.isCorrect).length}
                </span>
              </div>
            </div>

            {/* Dot navigation */}
            <div className="flex gap-1.5 mb-6 flex-wrap">
              {quizQuestions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrentIndex(i); setShowExplanation(false); }}
                  className={`w-7 h-7 rounded-full text-xs font-bold transition-all duration-200 ${
                    i === currentIndex
                      ? "bg-green-500 text-white scale-110 shadow-md"
                      : answers[i] === null
                      ? "bg-gray-100 text-gray-400 hover:bg-gray-200"
                      : answers[i]?.isCorrect
                      ? "bg-green-200 text-green-700"
                      : "bg-red-200 text-red-700"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            {/* Question */}
            <p
              className="text-gray-800 font-semibold text-lg leading-relaxed mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {current.question}
            </p>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {current.options.map((option, i) => {
                let optionStyle =
                  "border-2 border-gray-200 bg-gray-50 text-gray-700 hover:border-green-300 hover:bg-green-50";
                if (currentAnswer !== null) {
                  if (i === current.correctIndex) {
                    optionStyle = "border-2 border-green-400 bg-green-50 text-green-700 font-semibold";
                  } else if (i === currentAnswer.selectedIndex && !currentAnswer.isCorrect) {
                    optionStyle = "border-2 border-red-400 bg-red-50 text-red-700 font-semibold";
                  } else {
                    optionStyle = "border-2 border-gray-100 bg-gray-50 text-gray-400 opacity-60";
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    disabled={currentAnswer !== null}
                    className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-200 font-medium text-sm flex items-center gap-3 ${optionStyle} ${
                      currentAnswer === null ? "hover:scale-[1.01] cursor-pointer" : "cursor-default"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
                        currentAnswer !== null && i === current.correctIndex
                          ? "border-green-400 bg-green-400 text-white"
                          : currentAnswer !== null && i === currentAnswer.selectedIndex && !currentAnswer.isCorrect
                          ? "border-red-400 bg-red-400 text-white"
                          : "border-current"
                      }`}
                    >
                      {currentAnswer !== null && i === current.correctIndex
                        ? "✓"
                        : currentAnswer !== null && i === currentAnswer.selectedIndex && !currentAnswer.isCorrect
                        ? "✗"
                        : String.fromCharCode(65 + i)}
                    </span>
                    {option}
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {currentAnswer !== null && (
              <div
                className={`p-4 rounded-2xl mb-4 animate-fade-in-up ${
                  currentAnswer.isCorrect
                    ? "bg-green-50 border border-green-200"
                    : "bg-red-50 border border-red-200"
                }`}
              >
                <p
                  className={`font-bold text-sm mb-1 ${
                    currentAnswer.isCorrect ? "text-green-700" : "text-red-600"
                  }`}
                >
                  {currentAnswer.isCorrect ? "✅ Jawaban Benar!" : "❌ Jawaban Salah"}
                </p>
                {showExplanation && (
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {current.explanation}
                  </p>
                )}
                {!showExplanation && (
                  <button
                    onClick={() => setShowExplanation(true)}
                    className="text-xs font-semibold text-gray-500 underline hover:text-gray-700"
                  >
                    Lihat penjelasan →
                  </button>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-5 py-3 border-2 border-gray-200 text-gray-500 font-semibold rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ← Sebelumnya
              </button>
              <button
                onClick={handleNext}
                disabled={currentAnswer === null}
                className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl shadow-md hover:scale-[1.02] transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
              >
                {currentIndex === quizQuestions.length - 1 ? "🏁 Lihat Hasil" : "Soal Berikutnya →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
