import { useRef } from "react";
import { BillIcon, PersonIcon } from "../Icons";
import { useTip } from "../hooks/useTip";
import { InputTip } from "./InputTip";

export const Inputs = () => {
	const { setBill, selectTip, setPeople, error } = useTip();
	const inputs = useRef<HTMLDivElement>(null);

	const resetTipPercentage = () => {
		inputs.current?.childNodes.forEach((nodo) => {
			if (nodo instanceof HTMLLabelElement) {
				const input = nodo?.childNodes[1] as HTMLInputElement;
				input.checked = false;
			}
		});
	};

	const handleFocus = () => {
		resetTipPercentage();
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const customTip = Number(event.target.value);
		selectTip(customTip);
	};

	console.log(error);

	return (
		<section className="flex flex-col gap-6">
			<div>
				<label className="font-bold text-dark-grayish-cyan">Bill</label>
				<div className="relative flex items-center mt-2">
					<input
						type="number"
						min="0"
						step="0.1"
						placeholder="0"
						pattern="[0-9]*([.,][0-9]+)?"
						className="w-[100%] bg-very-light-grayish-cyan text-right text-2xl rounded-md no-spinner pl-8 pr-4 py-2 text-very-dark-cyan font-bold focus:outline-strong-cyan"
						onChange={(e) => {
							setBill(Number(e.target.value));
						}}
					/>
					<BillIcon sx="absolute left-3" />
				</div>
			</div>

			<div>
				<label className="font-bold text-dark-grayish-cyan">Select Tip %</label>
				<div
					className="grid grid-cols-2 gap-4 mt-2 md:grid-cols-3"
					ref={inputs}
				>
					<InputTip id="5" name="tip">
						5%
					</InputTip>
					<InputTip id="10" name="tip">
						10%
					</InputTip>
					<InputTip id="15" name="tip">
						15%
					</InputTip>
					<InputTip id="25" name="tip">
						25%
					</InputTip>
					<InputTip id="50" name="tip">
						50%
					</InputTip>
					<input
						type="number"
						placeholder="Custom"
						onFocus={handleFocus}
						onChange={handleChange}
						className="no-spinner bg-very-light-grayish-cyan text-right rounded-md p-2 pr-4 text-2xl text-very-dark-cyan font-bold w-[100%] focus:outline-strong-cyan placeholder:text-center placeholder:text-dark-grayish-cyan placeholder:font-bold"
					/>
				</div>
			</div>

			<div>
				<div className="flex justify-between">
					<label className="font-bold text-dark-grayish-cyan">
						Number of People
					</label>
					<label className="text-red-600 font-bold">
						{error !== "" && error}
					</label>
				</div>
				<div className="relative flex items-center mt-2">
					<input
						type="number"
						min="0"
						placeholder="0"
						onChange={(e) => {
							setPeople(Number(e.target.value));
						}}
						className={`w-[100%] bg-very-light-grayish-cyan text-right rounded-md text-2xl no-spinner pl-8 pr-4 py-2 text-very-dark-cyan font-bold  ${
							error !== ""
								? "focus:outline-red-600"
								: "focus:outline-strong-cyan"
						}`}
					/>
					<PersonIcon sx="absolute left-4" />
				</div>
			</div>
		</section>
	);
};
