import React from "react";
import { pagination } from "../assets";
import styles from "../style";
import exercises from "../constants/db.json";
import { useNavigate } from "react-router-dom";

const Education = () => {
   const navigate = useNavigate();
   const handleButtonClick = (exercise: any) => {
      if (
         exercise.category == "taskVideo1" ||
         exercise.category == "taskVideo2"
      ) {
         navigate(`/video-practice?category=${exercise.category}`);
      } else if (
         exercise.category == "taskGame1" ||
         exercise.category == "taskGame2"
      ) {
         navigate(`/game-practice?category=${exercise.category}`);
      } else if (
         exercise.category == "taskWriting1" ||
         exercise.category == "taskWriting2"
      ) {
         navigate(`/writing-practice?category=${exercise.category}`);
      } else if (exercise.category == "readingTasks") {
         navigate(`/reading-practice?category=${exercise.category}`);
      } else if (exercise.category == "listeningTasks") {
         navigate(`/listening-practice?category=${exercise.category}`);
      } else if (exercise.category == "speakingTasks") {
         navigate(`/speaking-practice?category=${exercise.category}`);
      } else if (
         exercise.category == "taskVerbal" ||
         exercise.category == "taskMath"
      ) {
         console.log("hello");
      }
      window.scrollTo(0, 0);
   };
   return (
      <>
         <div
            className={` ${styles.paddingX} ${styles.boxWidth} font-lato font-bold `}
         >
            <div className="text-center mt-16">
               <p className="text-smrtBlack shadow1 text-[55px]">
                  Мейрамбеков Нурсултан
               </p>
               <p className="text-primary text-3xl mt-4"> Учебные материалы</p>
            </div>

            <div className="flex flex-row gap-8 ss:gap-16 mt-14 mb-8 flex-wrap">
               <div className="flex gap-4 items-center">
                  <p className="font-medium text-xl">Экзамен</p>
                  <input
                     type="text"
                     placeholder="IELTS"
                     className="border-[1px] border-[#C0C0C0] w-48 h-9 rounded-md p-2 text-sm"
                  />
               </div>

               <div className="flex gap-4 items-center">
                  <p className="font-medium text-xl">Уроки</p>
                  <input
                     type="text"
                     placeholder="Writing Task 1"
                     className="border-[1px] border-[#C0C0C0] w-48 h-9 rounded-md p-2 text-sm"
                  />
               </div>
            </div>

            {exercises.practiceDescription.map((exercise) => (
               <div
                  key={exercise.id}
                  className="hoverShadow w-full h-32 border-[1px] rounded-md mb-6 border-practiceBorderGray flex flex-row items-center p-3 ss:p-8 justify-between"
               >
                  <div className="flex flex-row gap-2 xs:gap-4 ss:gap-6">
                     <p className="text-smrtBlue font-black text-5xl">
                        {exercise.date}
                     </p>
                     <div className="leading-6">
                        <p className="text-lg ss:text-xl text-smrtBlack">
                           {exercise.month}
                        </p>
                        <p className="font-medium text-practiceGray">
                           {exercise.time}
                        </p>
                     </div>

                     <div className="ml-4">
                        <p className="text-base ss:text-xl text-smrtBlack">
                           {exercise.title}
                        </p>
                        <p className="font-medium text-practiceGray">
                           {exercise.task}
                        </p>
                     </div>
                  </div>
                  <button
                     className="hoverButton w-36 h-11 border-[1px] border-smrtBlue text-smrtBlue text-sm rounded-md"
                     onClick={() => handleButtonClick(exercise)}
                  >
                     Начать
                  </button>
               </div>
            ))}

            <div>
               <nav className="w-24 h-12 m-auto">
                  <ul className="cursor-pointer flex justify-between items-center">
                     <li className="text-smrtBlue">1</li>
                     <li>2</li>
                     <li>3</li>
                     <li>4</li>
                     <li>
                        <img src={pagination} alt="nextPage" />
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      </>
   );
};

export default Education;
