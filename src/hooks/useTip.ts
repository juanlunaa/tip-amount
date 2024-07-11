import { useTipStore } from "../store/tip";

export const useTip = () => {
	const bill = useTipStore((state) => state.bill);
	const tipPercentage = useTipStore((state) => state.tipPercentage);
	const numberOfPeople = useTipStore((state) => state.numberOfPeople);

	const setBill = useTipStore((state) => state.setBill);
	const selectTip = useTipStore((state) => state.selectTip);
	const setPeople = useTipStore((state) => state.setPeople);

	const tipAmount = useTipStore((state) => state.tipAmount);
	const total = useTipStore((state) => state.total);
	const error = useTipStore((state) => state.error);
	const reset = useTipStore((state) => state.reset);

	return {
		bill,
		tipPercentage,
		numberOfPeople,
		setBill,
		selectTip,
		setPeople,
		tipAmount,
		total,
		error,
		reset,
	};
};
