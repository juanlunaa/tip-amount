import { useTip } from "../hooks/useTip";

export const Result = ({
	formRef,
}: { formRef: React.RefObject<HTMLFormElement> }) => {
	const { total, tipAmount, reset } = useTip();

	const handleClick = () => {
		if (formRef != null) {
			formRef.current?.reset;
		}
		reset();
	};

	return (
		<section className="bg-very-dark-cyan p-4 rounded-lg mt-10 md:mt-0 md:flex md:flex-col md:justify-between">
			<div className="flex flex-col gap-10 p-4">
				<div className="flex justify-between items-center">
					<div>
						<h1 className="text-white font-bold text-md lg:text-lg">
							Tip Amount
						</h1>
						<p className="text-grayish-cyan font-bold text-sm">/ person</p>
					</div>
					<h1 className="text-strong-cyan font-bold text-4xl lg:text-5xl">
						${tipAmount === 0 ? "0.00" : tipAmount}
					</h1>
				</div>

				<div className="flex justify-between items-center">
					<div>
						<h1 className="text-white font-bold text-md lg:text-lg">Total</h1>
						<p className="text-grayish-cyan font-bold text-sm">/ person</p>
					</div>
					<h1 className="text-strong-cyan font-bold text-4xl lg:text-5xl">
						${total === 0 ? "0.00" : total}
					</h1>
				</div>
			</div>

			<button
				type="reset"
				onClick={handleClick}
				className="w-[100%] mt-6 bg-strong-cyan p-3 rounded-md text-very-dark-cyan font-bold text-xl"
			>
				RESET
			</button>
		</section>
	);
};
