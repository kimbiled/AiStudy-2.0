import { useState } from "react";
import styles from "../style";
import exercises from "../constants/db.json";
const Listening = () => {
   const listening = exercises.listeningTasks[0];
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
   const help = () => {
      console.log(selectedAnswers);
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
               <audio
                  className="mb-[55px]"
                  controls
                  src="https://bd748f642cf8b253d59c-5c160b94f727c0d27cbeccc854542bc6.ssl.cf1.rackcdn.com/A1_first_day_at_school.mp3"
               ></audio>
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
                     <button className="group relative w-full h-12 overflow-hidden rounded-[4px] bg-smrtBlue  text-white font-bold">
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
