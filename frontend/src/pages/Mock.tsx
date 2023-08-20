import styles from "../style";
import {Link} from 'react-router-dom'
const Mock = () =>{
    return(
        <section className="pb-[150px] pt-[40px]">
            <div className={` ${styles.paddingX} font-lato font-bold mx-auto`}>
                <h2 className="text-center shadow1 text-smrtBlack leading-[105%] pb-[20px] text-[55px]">
                    Writing
                </h2>
                <h3 className="text-center text-primary text-[30px] leading-[110%] mb-[30px]">
                    Пробный тест по навыкам письма
                </h3>
            </div>

            <div className="flex flex-wrap justify-center max-w-[1230px] mx-auto gap-[30px]">
            <div className="border-[1px] w-[485px] h-[270px] flex justify-center items-center shadow-lg">
                <div className="font-lato h-auto w-[500px] text-center flex flex-col justify-between">
                        <h3 className="text-smrtBlue text-[28px] font-bold">Listening</h3>
                        <h4 className="text-transDesc text-[16px] mb-[20px]">IELTS</h4>
                        <p className="text-smrtBlack text-[18px] mb-[22px] font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum possimus placeat</p>
                        <Link to='/practice/listeningMock'>
                            <button className="group relative w-56 h-11 m-auto overflow-hidden rounded-[4px] bg-smrtBlue text-white font-bold">
                                Начать
                                <div className="absolute inset-0 h-full w-full scale-0 rounded-[4px] transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                            </button>    
                        </Link>    
                </div>
            </div>
            <div className="border-[1px] w-[485px] h-[270px] flex justify-center items-center shadow-lg">
                <div className="font-lato h-auto w-[500px] text-center flex flex-col justify-between">
                        <h3 className="text-smrtBlue text-[28px] font-bold">Reading</h3>
                        <h4 className="text-transDesc text-[16px] mb-[20px]">IELTS</h4>
                        <p className="text-smrtBlack text-[18px] mb-[22px] font-bold">Lorem ipsum, adipisicing elit. Rerum possimus placeat in doloribus! Architecto, dignissimos?</p>
                        <Link to='/practice/readingMock'>
                            <button className="group relative w-56 h-11 m-auto overflow-hidden rounded-[4px] bg-smrtBlue text-white font-bold">
                                Начать
                                <div className="absolute inset-0 h-full w-full scale-0 rounded-[4px] transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                            </button>    
                        </Link>   
                </div>
            </div>
            <div className="border-[1px] w-[485px] h-[270px] flex justify-center items-center shadow-lg">
                <div className="font-lato h-auto w-[500px] text-center flex flex-col justify-between">
                        <h3 className="text-smrtBlue text-[28px] font-bold">Writing</h3>
                        <h4 className="text-transDesc text-[16px] mb-[20px]">IELTS</h4>
                        <p className="text-smrtBlack text-[18px] mb-[22px] font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, dignissimos?</p>
                        <Link to='/practice/writingMock'>
                            <button className="group relative w-56 h-11 m-auto overflow-hidden rounded-[4px] bg-smrtBlue text-white font-bold">
                                Начать
                                <div className="absolute inset-0 h-full w-full scale-0 rounded-[4px] transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                            </button>    
                        </Link>    
                </div>
            </div>
            <div className="border-[1px] w-[485px] h-[270px] flex justify-center items-center shadow-lg">
                <div className="font-lato h-auto w-[500px] text-center flex flex-col justify-between">
                        <h3 className="text-smrtBlue text-[28px] font-bold">Speaking</h3>
                        <h4 className="text-transDesc text-[16px] mb-[20px]">IELTS</h4>
                        <p className="text-smrtBlack text-[18px] mb-[22px] font-bold">consectetur adipisicing elit. Rerum possimus placeat in doloribus! Architecto, dignissimos?</p>
                        <Link to='/practice/speakingMock'>
                            <button className="group relative w-56 h-11 m-auto overflow-hidden rounded-[4px] bg-smrtBlue text-white font-bold">
                                Начать
                                <div className="absolute inset-0 h-full w-full scale-0 rounded-[4px] transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                            </button>    
                        </Link>    
                </div>
            </div>
            </div>
        </section>
    )
}

export default Mock;