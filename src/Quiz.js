// Quiz.js
import React, { useMemo, useState } from 'react';
import quizData from './quizData';

function Quiz() {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  // unique topics from quizData
  const topics = useMemo(() => {
    const t = quizData.map((q) => q.topic || 'General');
    return Array.from(new Set(t));
  }, []);

  const questionsForTopic = useMemo(() => {
    if (!selectedTopic) return [];
    return quizData.filter((q) => (q.topic || 'General') === selectedTopic);
  }, [selectedTopic]);

  const totalQuestions = questionsForTopic.length;
  const question = questionsForTopic[currentQuestion];

  const startQuiz = (topic) => {
    setSelectedTopic(topic);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer('');
    setIsCorrect(null);
  };

  const handleAnswerOptionClick = (option) => {
    const correctAnswer = question.answer;
    setSelectedAnswer(option);

    if (option === correctAnswer) {
      setScore((prev) => prev + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < totalQuestions) {
        setCurrentQuestion(nextQuestion);
        setIsCorrect(null);
        setSelectedAnswer('');
      } else {
        setShowScore(true);
      }
    }, 900);
  };

  const handleRestart = () => {
    // back to front page with all topics
    setSelectedTopic('');
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer('');
    setIsCorrect(null);
  };

  // 1) Front page: topic cards
  if (!selectedTopic) {
    return (
      <div className="quiz-card">
        <h2 className="quiz-title">Choose your quiz</h2>
        <p className="score-text">
          Select a topic to start a 5‑question quiz.
        </p>

        <div className="options-grid">
          {topics.map((topic) => (
            <button
              key={topic}
              className="option-btn"
              onClick={() => startQuiz(topic)}
            >
              {topic === 'Cloud' && '☁️ Cloud Basics'}
              {topic === 'DSA' && '📚 DSA Fundamentals'}
              {topic === 'Programming' && '💻 Programming / Tech'}
              {topic !== 'Cloud' &&
                topic !== 'DSA' &&
                topic !== 'Programming' &&
                topic}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 2) Score screen
  if (showScore) {
    const percentage = Math.round((score / totalQuestions) * 100);

    return (
      <div className="quiz-card">
        <h2 className="quiz-title">{selectedTopic} Quiz Summary</h2>

        <div className="score-circle">
          <span>{percentage}%</span>
        </div>

        <p className="score-text">
          You scored <strong>{score}</strong> / <strong>{totalQuestions}</strong>
        </p>

        <div className="score-badges">
          {percentage === 100 && <span className="badge badge-gold">Perfect!</span>}
          {percentage >= 70 && percentage < 100 && (
            <span className="badge badge-green">Great job</span>
          )}
          {percentage < 70 && <span className="badge badge-blue">Keep practicing</span>}
        </div>

        <button className="primary-btn" onClick={handleRestart}>
          Back to topics
        </button>
      </div>
    );
  }

  // 3) Quiz for chosen topic
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="quiz-card">
      <div className="quiz-header">
        <span className="category-pill">{selectedTopic}</span>
        <span className="question-count">
          Question {currentQuestion + 1} / {totalQuestions}
        </span>
      </div>

      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      <h2 className="quiz-question">{question.question}</h2>

      <div className="options-grid">
        {question.options.map((option) => {
          const isSelectedAnswer = selectedAnswer === option;
          let optionClass = 'option-btn';

          if (isSelectedAnswer && isCorrect === true && option === question.answer) {
            optionClass += ' option-correct';
          } else if (isSelectedAnswer && isCorrect === false) {
            optionClass += ' option-wrong';
          }

          return (
            <button
              key={option}
              className={optionClass}
              onClick={() => handleAnswerOptionClick(option)}
              disabled={selectedAnswer !== ''}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="quiz-footer">
        {isCorrect === true && <span className="feedback correct">Correct 🎉</span>}
        {isCorrect === false && (
          <span className="feedback wrong">
            Oops! Correct answer: <strong>{question.answer}</strong>
          </span>
        )}
      </div>
    </div>
  );
}

export default Quiz;
