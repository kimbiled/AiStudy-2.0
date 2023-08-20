import Video from "../components/Video";
import styles from "../style";
import { Footer } from "../components";
import { useLocation } from "react-router-dom";
import exercises from "../constants/db.json";
const VideoPractice = () => {
   const location = useLocation();
   const searchParams = new URLSearchParams(location.search);
   const videos = exercises.taskVideo1;
   const category = searchParams.get("category");
   const getLink = () => {
      const randomIndex = Math.floor(Math.random() * videos.length);
      return videos[randomIndex].source;
   };
   return (
      <>
         <section className="pb-[150px] pt-[40px]">
            <div className={` ${styles.paddingX} font-lato font-bold mx-auto`}>
               <h2 className="text-center shadow1 text-smrtBlack leading-[105%] pb-[20px] text-[55px]">
                  Video Practice
               </h2>
               <h3 className="text-center text-primary text-[30px] leading-[110%] mb-[30px]">
                  Учебные материалы
               </h3>
               <Video link={getLink()}></Video>
            </div>
         </section>
      </>
   );
};

export default VideoPractice;
