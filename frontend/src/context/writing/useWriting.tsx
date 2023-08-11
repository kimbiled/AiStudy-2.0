import { createContext, ReactNode, useContext } from "react";
import { ICreateWriting } from "./types";
import { Axios } from "../../lib/axios/Axios.ts";

interface WritingContextProps {
	create: (params: ICreateWriting) => Promise<void>;
}

const WritingContext = createContext<WritingContextProps>({} as WritingContextProps);

export function useWriting(): WritingContextProps {
	return useContext(WritingContext);
}

export function WritingProvider({ children }: { children: ReactNode }) {
	async function create(props: ICreateWriting) {
		await Axios({
			method: "POST",
			url: "/writing/create",
			data: props,
		});
	}

	const values: WritingContextProps = {
		create,
	};
	return <WritingContext.Provider value={values}>{children}</WritingContext.Provider>;
}
