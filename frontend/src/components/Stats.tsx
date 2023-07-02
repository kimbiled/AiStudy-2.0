import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
	<section className={`${styles.flexCenter}  flex-row flex-wrap gap-[30px] sm:mb-20 mb-6`}>
		{stats.map((stat) => (
			<div
				key={stat.id}
				className={` flex bg-white max-h-[400px] w-[300px]  space-y-[10px] pt-1  pb-10 rounded-3xl flex-col justify-center items-center `}
			>
				<img src={stat.photo} className="w-[230px] h-full" alt="" />
				<h4 className="font-lato text-smrtBlack  font-semibold xs:text-[23px]  xs:leading-[53.16px] leading-[43.16px] ">
					{stat.title}
				</h4>
				<p className="font-lato text-primary text-center font-normal xs:text-[17px] w-[240px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px]   ">
					{stat.value}
				</p>
			</div>
		))}
	</section>
);

export default Stats;
