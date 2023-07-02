import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth/useAuth.tsx";
import { useEffect, useRef } from "react";
const Register = () => {
	const { signUp, user } = useAuth();
	const redirectTo = useNavigate();

	const emailRef = useRef<HTMLInputElement>(null);
	const usernameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const confirmPasswordRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		console.log(user);
		if (user) redirectTo("/");
	}, []);

	return (
		<section className="bg-gray-50 ">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
							Создать аккаунт
						</h1>
						<form
							className="space-y-4 md:space-y-6"
							action="#"
							onSubmit={(event) => {
								event.preventDefault();
								if (!usernameRef.current) return;
								if (!emailRef.current) return;
								if (!passwordRef.current) return;
								if (!confirmPasswordRef.current) return;

								signUp({
									username: usernameRef.current.value,
									email: emailRef.current.value,
									password: passwordRef.current.value,
								}).then(() => {
									window.location.reload();
								});
							}}
						>
							<div>
								<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
									Ваш email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
									placeholder="name@company.com"
									ref={emailRef}
									required
								/>
							</div>

							<div>
								<label
									htmlFor="username"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Никнейм
								</label>
								<input
									type="text"
									name="username"
									id="username"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
									placeholder="Your Username"
									ref={usernameRef}
									required
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
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
									placeholder="Password"
									ref={passwordRef}
									required
								/>
							</div>

							<div>
								<label
									htmlFor="confirmPassword"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Подтвердите пароль
								</label>
								<input
									type="password"
									name="confirmPassword"
									id="confirmPassword"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
									placeholder="Confirm Password"
									ref={confirmPasswordRef}
									required
								/>
							</div>

							<button
								type="submit"
								className="w-full text-white bg-smrtBlue hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-smrtBlue font-medium rounded-lg text-sm px-5 py-2.5 text-center "
							>
								Создать аккаунт
							</button>
							<p className="text-sm font-light text-gray-500 dark:text-gray-400">
								Уже есть аккаунт?
								<Link
									to="/login"
									className="font-medium text-primary-600 hover:underline dark:text-primary-500"
								>
									Войти
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
