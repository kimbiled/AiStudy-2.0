const Subscribe = () => {
	return (
		<div className="flex flex-col gap-16 font-bold text-white bg-smrtBlue">
			<div className="max-w-[810px] h-auto text-center m-auto mt-16">
				<p>НЕ ПРОПУСТИ НОВОСТЕЙ!</p>
				<h5 className="font-semibold sm:text-5xl text-4xl">
					Подписывайся на новостную рассылку академии AIStudy
				</h5>
			</div>
			<div className="m-auto flex gap-12 mb-16 sm:flex-row flex-col">
				<input
					type="text"
					placeholder="Email"
					className="border-[1px] border-[#C0C0C0] text-smrtBlack w-[350px] xs:w-[420px] h-14 rounded-md p-6 text-sm"
				/>
				<button className="w-72 h-14 bg-subscribeButton text-xl text-white text-center rounded-md mx-auto">
					Подписаться
				</button>
			</div>
		</div>
	);
};
export default Subscribe;
