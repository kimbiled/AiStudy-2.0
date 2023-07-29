import { useState } from "react";
import styles from "../style";
import exercises from "../constants/db.json";
const Listening = () => {
   const question = exercises.speakingTasks[0].question;
   return (
      <>
         <section className="pb-[150px] pt-[40px]">
            <div className={` ${styles.paddingX} font-lato font-bold mx-auto`}>
               <h2 className="text-center shadow1 text-smrtBlack leading-[105%] pb-[20px] text-[55px]">
                  Speaking
               </h2>
               <h3 className="text-center text-primary text-[30px] leading-[110%] mb-[30px]">
                  Пробный тест по навыкам говорения
               </h3>
               <div className="flex text-smrtBlack mb-[27px] text-[24px] font-medium">
                  Задание: Запишите ответ на предложеный ответ на 1 минуту.
               </div>
               <div className="mx-auto w-[1400px] border-[1px] py-[24px] px-[31px] rounded-[30px] text-[20px] font-normal leading-[160%] text-smrtBlack mb-[23px] box-shadow-5px">
                  <h4 className="text-[20px] font-medium heading-[120%] mb-[10px]">
                     Task: {question}
                  </h4>
                  <input type="file" id="upload" className="text-[10px]" />
               </div>
               <div className="w-60 xs:w-[260px] h-18 ml-auto">
                  <button className="group relative w-full h-12 overflow-hidden rounded-[4px] bg-smrtBlue  text-white font-bold">
                     Завершить
                     <div className="absolute inset-0 h-full w-full scale-0 rounded-[4px] transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                  </button>
               </div>
            </div>
         </section>
      </>
   );
};

export default Listening;
