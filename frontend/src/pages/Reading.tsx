import { useState } from "react";
import styles from "../style";
import exercises from "../constants/db.json";
const Reading = () => {
   const reading = exercises.readingTasks[0];
   const rightAnswers = [1, 2, 0, 1, 2, 2, 1, 0, 2, 2];
   const [selectedAnswers, setSelectedAnswers] = useState(
      Array(reading.test.length).fill(null)
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
         alert("Well Done!");
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
                  Reading
               </h2>
               <h3 className="text-center text-primary text-[30px] leading-[110%] mb-[30px]">
                  Пробный тест по навыкам чтения
               </h3>
               <div className="flex text-smrtBlack mb-[70px] text-[24px] font-medium">
                  Задание: Прочитайте текст и ответьте на тестовые вопросы.
               </div>
               <div className="mx-auto max-w-[1230px] border-[1px] pt-[45px] pb-[68px] px-[95px] rounded-[30px] text-[20px] font-normal leading-[160%] text-smrtBlack mb-[70px] box-shadow-5px">
                  Chronobiology might sound a little futuristic – like something
                  from a science fiction novel, perhaps – but it’s actually a
                  field of study that concerns one of the oldest processes life
                  on this planet has ever known: short-term rhythms of time and
                  their effect on flora and fauna. This can take many forms.
                  Marine life, for example, is influenced by tidal patterns.
                  Animals tend to be active or inactive depending on the
                  position of the sun or moon. Numerous creatures, humans
                  included, are largely diurnal – that is, they like to come out
                  during the hours of sunlight. Nocturnal animals, such as bats
                  and possums, prefer to forage by night. A third group are
                  known as crepuscular: they thrive in the low-light of dawn and
                  dusk and remain inactive at other hours. When it comes to
                  humans, chronobiologists are interested in what is known as
                  the circadian rhythm. This is the complete cycle our bodies
                  are naturally geared to undergo within the passage of a
                  twenty-four hour day. Aside from sleeping at night and waking
                  during the day, each cycle involves many other factors such as
                  changes in blood pressure and body temperature. Not everyone
                  has an identical circadian rhythm. ‘Night people’, for
                  example, often describe how they find it very hard to operate
                  during the morning, but become alert and focused by evening.
                  This is a benign variation within circadian rhythms known as a
                  chronotype. Scientists have limited abilities to create
                  durable modifications of chronobiological demands. Recent
                  therapeutic developments for humans such as artificial light
                  machines and melatonin administration can reset our circadian
                  rhythms, for example, but our bodies can tell the difference
                  and health suffers when we breach these natural rhythms for
                  extended periods of time. Plants appear no more malleable in
                  this respect; studies demonstrate that vegetables grown in
                  season and ripened on the tree are far higher in essential
                  nutrients than those grown in greenhouses and ripened by
                  laser. Knowledge of chronobiological patterns can have many
                  pragmatic implications for our day-to-day lives. While
                  contemporary living can sometimes appear to subjugate biology
                  – after all, who needs circadian rhythms when we have caffeine
                  pills, energy drinks, shift work and cities that never sleep?
                  – keeping in synch with our body clock is important. The
                  average urban resident, for example, rouses at the
                  eye-blearing time of 6.04 a.m., which researchers believe to
                  be far too early. One study found that even rising at 7.00
                  a.m. has deleterious effects on health unless exercise is
                  performed for 30 minutes afterward. The optimum moment has
                  been whittled down to 7.22 a.m.; muscle aches, headaches and
                  moodiness were reported to be lowest by participants in the
                  study who awoke then. Once you’re up and ready to go, what
                  then? If you’re trying to shed some extra pounds, dieticians
                  are adamant: never skip breakfast. This disorients your
                  circadian rhythm and puts your body in starvation mode. The
                  recommended course of action is to follow an intense workout
                  with a carbohydrate-rich breakfast; the other way round and
                  weight loss results are not as pronounced. Morning is also
                  great for breaking out the vitamins. Supplement absorption by
                  the body is not temporal-dependent, but naturopath Pam Stone
                  notes that the extra boost at breakfast helps us get energized
                  for the day ahead. For improved absorption, Stone suggests
                  pairing supplements with a food in which they are soluble and
                  steering clear of caffeinated beverages. Finally, Stone warns
                  to take care with storage; high potency is best for
                  absorption, and warmth and humidity are known to deplete the
                  potency of a supplement. After-dinner espressos are becoming
                  more of a tradition – we have the Italians to thank for that –
                  but to prepare for a good night’s sleep we are better off
                  putting the brakes on caffeine consumption as early as 3 p.m.
                  With a seven hour half-life, a cup of coffee containing 90 mg
                  of caffeine taken at this hour could still leave 45 mg of
                  caffeine in your nervous system at ten o’clock that evening.
                  It is essential that, by the time you are ready to sleep, your
                  body is rid of all traces. Evenings are important for winding
                  down before sleep; however, dietician Geraldine Georgeou warns
                  that an after-five carbohydrate-fast is more cultural myth
                  than chronobiological demand. This will deprive your body of
                  vital energy needs. Overloading your gut could lead to
                  indigestion, though. Our digestive tracts do not shut down for
                  the night entirely, but their work slows to a crawl as our
                  bodies prepare for sleep. Consuming a modest snack should be
                  entirely sufficient.
               </div>
               <div className="max-w-[1230px] text-smrtBlack mx-auto border-[1px] pt-[45px] pb-[68px] px-[95px] rounded-[30px] box-shadow-5px">
                  <h3 className="text-[24px] font-medium mb-[35px]">
                     Выберите правильный ответ в каждом тестовом вопросе.
                  </h3>
                  <div className="flex flex-wrap gap-[30px] text-[20px] justify-between font-medium">
                     {reading.test.map((question) => (
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

export default Reading;
