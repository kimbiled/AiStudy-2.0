import { useState } from "react";
import styles from "../style";
import exercises from "../constants/db.json";
const Listening = () => {
   const listening = exercises.listeningTasks[0];
   const source = listening.source;
   const rightAnswers = [1, 0, 1, 1, 2, 0, 2, 2, 1, 1];
   const [selectedAnswers, setSelectedAnswers] = useState(
      Array(listening.test.length).fill(null)
   );

   const handleSelectAnswer = (questionIndex: number, answerIndex: number) => {
      setSelectedAnswers(() => {
         const newSelectedAnswers = [...selectedAnswers];
         newSelectedAnswers[questionIndex] = answerIndex;
         return newSelectedAnswers;
      });
   };

   const handleButton = () => {
      console.log(selectedAnswers);
      if (selectedAnswers.includes(null)) {
         alert("lox");
      } else {
         const correctMatches = selectedAnswers.reduce(
            (count, selectedAnswer, index) => {
               // Compare the selected answer with the right answer at the same index
               if (selectedAnswer === rightAnswers[index]) {
                  return count + 1; // Increment count for each correct match
               }
               return count; // No change in count for incorrect match
            },
            0
         );

         console.log(correctMatches);
      }
   };
   return (
      <>
         <section className="pb-[150px] pt-[40px]">
            <div className={` ${styles.paddingX} font-lato font-bold mx-auto`}>
               <h2 className="text-center shadow1 text-smrtBlack leading-[105%] pb-[20px] text-[55px]">
                  Listening
               </h2>
               <h3 className="text-center text-primary text-[30px] leading-[110%] mb-[30px]">
                  Пробный тест по навыкам слушания
               </h3>
               <div className="flex text-smrtBlack mb-[27px] text-[24px] font-medium">
                  Задание: Прослушайте диалог и ответьте на тестовые вопросы.
               </div>
               <audio className="mb-[55px]" controls src={source}></audio>
               <div className="max-w-[1230px] text-smrtBlack mx-auto border-[1px] pt-[45px] pb-[68px] px-[95px] rounded-[30px] box-shadow-5px">
                  <h3 className="text-[24px] font-medium mb-[35px]">
                     Выберите правильный ответ в каждом тестовом вопросе.
                  </h3>
                  <div className="flex flex-wrap gap-[30px] text-[20px] justify-between font-medium">
                     {listening.test.map((question) => (
                        <>
                           <div
                              className="w-[435px] mb-[70px]"
                              key={question.id}
                           >
                              <div className="flex items-baseline gap-[8px]">
                                 <h4>{question.id + 1}.</h4>
                                 <h4 className="leading-[120%] pb-[8px]">
                                    {question.question}
                                 </h4>
                              </div>
                              <ul className="border-[2px] border-[#CECECE] rounded-[15px] box-shadow-5px">
                                 {question.answers.map((answer) => (
                                    <li
                                       className={`px-[30px] py-[18px] cursor-pointer ${
                                          selectedAnswers[question.id] ===
                                          answer.id
                                             ? "shadow-chosen-answer px-[30px] py-[18px] rounded-[15px] bg-white"
                                             : ""
                                       }`}
                                       key={answer.id}
                                       onClick={() =>
                                          handleSelectAnswer(
                                             question.id,
                                             answer.id
                                          )
                                       }
                                    >
                                       {answer.answer}
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </>
                     ))}
                  </div>
                  <div className="w-60 xs:w-[260px] h-18 mx-auto">
                     <button
                        className="group relative w-full h-12 overflow-hidden rounded-[4px] bg-smrtBlue  text-white font-bold"
                        onClick={handleButton}
                     >
                        Завершить
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-[4px] transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                     </button>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Listening;
