import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth/useAuth.tsx";
import { useEffect, useRef } from "react";

const Login = () => {
	const { signIn, user } = useAuth();
	const redirectTo = useNavigate();

	const usernameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (user) redirectTo("/");
	}, []);

	return (
		<section className="bg-gray-50 ">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
							Войти
						</h1>
						<form
							className="space-y-4 md:space-y-6"
							action="#"
							onSubmit={(event) => {
								event.preventDefault();
								if (!usernameRef.current) return;
								if (!passwordRef.current) return;

								signIn({
									username: usernameRef.current.value,
									password: passwordRef.current.value,
								}).then(() => {
									window.location.reload();
								});
							}}
						>
							<div>
								<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
									Ваш Никнейм
								</label>
								<input
									type="text"
									name="username"
									id="username"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
									placeholder="Your Username"
									required
									ref={usernameRef}
								/>
							</div>
							<div>
								<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
									Пароль
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
									required
									ref={passwordRef}
								/>
							</div>
							<div className="flex items-center justify-between">
								<div className="flex items-start">
									<div className="flex items-center h-5">
										<input
											id="remember"
											aria-describedby="remember"
											type="checkbox"
											className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  "
										/>
									</div>
									<div className="ml-3 text-sm">
										<label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
											Запомнить меня
										</label>
									</div>
								</div>
								<a
									href="#"
									className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
								>
									Забыли пароль?
								</a>
							</div>
							<button
								type="submit"
								className="w-full text-white bg-smrtBlue hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
							>
								Войти
							</button>
							<p className="text-sm font-light text-gray-500 dark:text-gray-400">
								Нет аккаунта?
								<Link
									to="/register"
									className="font-medium text-primary-600 hover:underline dark:text-primary-500"
								>
									Создать аккаунт
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
