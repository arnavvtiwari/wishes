import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../auth/Auth';
import Navigation from '../navigation/Navigation';

const Questionnaire = () => {
  const { user } = useAuth();
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [displayQuestions, setDisplayQuestions] = useState([]);

  // All available questions
  const allQuestions = [
    {
      id: 1,
      question: "When is my birthday?",
      options: ["5th April", "10th May", "15th March", "20th June"],
      correct: "10th May"
    },
    {
      id: 2,
      question: "When did I confess my feelings to you?",
      options: ["25th December", "14th February", "1st January", "7th July"],
      correct: "1st January"
    },
    {
      id: 3,
      question: "When did we first meet?",
      options: ["7th June 2024", "1st May 2024", "15th June 2023", "10th July 2024"],
      correct: "7th June 2024"
    },
    {
      id: 4,
      question: "What is my favourite colour?",
      options: ["Lavender", "Black", "Blue", "Green"],
      correct: "Blue"
    },
    {
      id: 5,
      question: "What was the name of the hotel where we stayed together?",
      options: ["Moonlight Inn", "The Circle", "Sunset Bay", "Palm Grove"],
      correct: "The Circle"
    },
    {
      id: 6,
      question: "What is the one thing I desire the most?",
      options: ["i Phone", "Gamming PC", "Headphones", "Gamming Console"],
      correct: "Gamming Console"
    },
    {
      id: 7,
      question: "What movie/show did we first watch together?",
      options: ["Anabelle", "Dr. House", "CID", "Jab We Met"],
      correct: "Jab We Met"
    },
    {
      id: 8,
      question: "What nickname do I often use for you?",
      options: ["Pumpkin", "Boo", "Lovebug", "Snugglebear"],
      correct: "Pumpkin"
    },
    {
      id: 9,
      question: "Which drink do I always order when we go out?",
      options: ["Coffee", "Lemonade", "Hot Chocolate", "Chai "],
      correct: "Chai "
    },
    {
      id: 10,
      question: "What did I wear the first time we met?",
      options: ["Green shirt and jeans", "White shirt and jeans", "T-shirt and jeans", "Black Hoodie"],
      correct: "Green shirt and jeans"
    }
  ];
  

  // Shuffle utility
  const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

  useEffect(() => {
    if (user && user.username === 'Pumpkin') {
      const shuffled = shuffleArray(allQuestions).slice(0, 5);
      setDisplayQuestions(shuffled);
      setTimeout(() => setShowQuestionnaire(true), 1000);
    }
  }, [user]);

  const handleOptionChange = (questionId, option) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: option
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    displayQuestions.forEach(q => {
      if (answers[q.id] === q.correct) {
        correct++;
      }
    });
    return Math.round((correct / displayQuestions.length) * 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedScore = calculateScore();
    setScore(calculatedScore);
    setIsSubmitted(true);
  };

  if (!user || user.username !== 'Pumpkin') return null;

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-lavender-50 p-8 flex items-center justify-center">
        <AnimatePresence>
          {showQuestionnaire && !isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md"
            >
              <motion.form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-lg border border-lavender-200"
              >
                <motion.h2
                  className="text-2xl text-lavender-800 mb-6 text-center font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Knowledge Quiz
                </motion.h2>

                {displayQuestions.map((q, index) => (
                  <motion.div
                    key={q.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="mb-6"
                  >
                    <p className="text-lavender-700 mb-3 font-medium">
                      {index + 1}. {q.question}
                    </p>
                    <div className="space-y-2">
                      {q.options.map(option => (
                        <motion.label
                          key={option}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-lavender-50 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`question-${q.id}`}
                            checked={answers[q.id] === option}
                            onChange={() => handleOptionChange(q.id, option)}
                            className="text-lavender-600 focus:ring-lavender-500"
                          />
                          <span className="text-lavender-900">{option}</span>
                        </motion.label>
                      ))}
                    </div>
                  </motion.div>
                ))}

                <motion.button
                  type="submit"
                  disabled={Object.keys(answers).length !== displayQuestions.length}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-3 px-4 rounded-lg text-white font-medium mt-6 ${
                    Object.keys(answers).length !== displayQuestions.length
                      ? 'bg-lavender-300 cursor-not-allowed'
                      : 'bg-lavender-600 hover:bg-lavender-700'
                  }`}
                >
                  Submit Answers
                </motion.button>
              </motion.form>
            </motion.div>
          )}

          {isSubmitted && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="text-5xl mb-4"
              >
                {score >= 80 ? '🎉' : score >= 50 ? '🤔' : '💔'}
              </motion.div>

              <h2 className="text-2xl text-lavender-800 mb-2">
                Your Score: {score}%
              </h2>

              <p className="text-lavender-600 mb-6">
                {score >= 80
                  ? "Awwwww!"
                  : score >= 50
                  ? "Not bad, but room to grow!"
                  : "Don't you love me anymore?"}
              </p>

              <div className="bg-lavender-100 p-4 rounded-lg mb-6">
                <h3 className="text-lavender-700 font-medium mb-2">Correct Answers:</h3>
                <ul className="text-left text-sm text-lavender-800 space-y-1">
                  {displayQuestions.map(q => (
                    <li key={q.id}>
                      {q.question} - <span className="font-semibold">{q.correct}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                onClick={() => {
                  setAnswers({});
                  setScore(null);
                  setIsSubmitted(false);
                  const reshuffled = shuffleArray(allQuestions).slice(0, 5);
                  setDisplayQuestions(reshuffled);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-lavender-100 text-lavender-700 py-2 px-6 rounded-full border border-lavender-300"
              >
                Try Again
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Questionnaire;
