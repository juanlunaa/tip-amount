import { useRef } from "react";
import { LogoSVG } from "./Icons";
import { Inputs } from "./components/Inputs";
import { Result } from "./components/Result";

function App() {
	const formRef = useRef<HTMLFormElement>(null);
	return (
		<main
			ref={formRef}
			className="bg-light-grayish-cyan md:min-h-[100vh] flex flex-col items-center gap-12"
		>
			<LogoSVG />
			<form className="bg-white w-[100%] p-6 rounded-xl md:h-[60%] md:grid md:grid-cols-2 md:gap-12 md:w-[90%] lg:max-w-[960px] shadow-xl">
				<Inputs />
				<Result formRef={formRef} />
			</form>
		</main>
	);
}

export default App;
