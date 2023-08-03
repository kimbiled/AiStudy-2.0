import {Link} from 'react-router-dom';

const Mock = () =>{
    return(
        <div className="relative font-lato max-w-[1296px] m-auto mb-16 h-[410px] bg-white rounded-[30px] text-center flex flex-col gap-12">
            <div className="absolute w-[585px] h-24 bg-mockYellow rounded-[45px] flex text-end px-6 items-center top-[-50px] right-[-100px]">
                <p className="font-bold text-2xl">Узнай свой уровень прямо сейчас, пройдя пробный тест!</p>
            </div>
            <div className="mt-6">
                <h2 className="text-smrtBlack shadow1 text-[55px] xs:text-[30px] sm:text-[42px] md:text-[48px] lg:text-[55px] font-bold">
                    Mock Test
                </h2>
                <p className="text-[#4C4F6A] text-3xl font-bold sm:text-[27px] lg:text-[30px]">
                    Пробный тест по всем секциям
                </p>
            </div>
            <div className="flex flex-row justify-around text-white font-bold text-[28px]">
                <div className="w-56 h-16 bg-gradient-linear shadow-lg rounded-3xl flex items-center justify-center">
                    <p>Listening</p>
                </div>
                <div className="w-56 h-16 bg-gradient-linear shadow-lg rounded-3xl flex items-center justify-center">
                    <p>Reading</p>
                </div>
                <div className="w-56 h-16 bg-gradient-linear shadow-lg rounded-3xl flex items-center justify-center">
                    <p>Writing</p>
                </div>
                <div className="w-56 h-16 bg-gradient-linear shadow-lg rounded-3xl flex items-center justify-center">
                    <p>Speaking</p>
                </div>
            </div>
			<div className="flex justify-center">
                <Link to='/'>
                    <button className="group relative h-12 w-48 overflow-hidden rounded-md bg-smrtBlue text-lg font-bold text-white">
                        Начать
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default Mock;