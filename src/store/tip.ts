import { create } from "zustand";

interface State {
	bill: number;
	tipPercentage: number;
	numberOfPeople: number;
	setBill: (bill: number) => void;
	selectTip: (percentage: number) => void;
	setPeople: (people: number) => void;
	tipAmount: number;
	total: number;
	error: string;
	reset: () => void;
}

/*type Calculate = <
	T extends State,
	Mps extends [StoreMutatorIdentifier, unknown][] = [],
	Mcs extends [StoreMutatorIdentifier, unknown][] = [],
>(
	f: StateCreator<T, Mps, Mcs>,
) => StateCreator<T, Mps, Mcs>;

type CalculateImpl = <T extends State>(
	config: StateCreator<T, [], []>,
) => StateCreator<T, [], []>;

const calculateImpl: CalculateImpl = (config) => (set, get, store) => {
	return config(
		(...args) => {
			console.log("Estado", ...args);
			set(...args);
		},
		get,
		store,
	);
};

export const calculate = calculateImpl as unknown as Calculate;*/

const calculateTip = ({
	bill,
	percentage,
	numberOfPeople,
}: { bill: number; percentage: number; numberOfPeople: number }): {
	tipAmount: number;
	total: number;
} => {
	console.log({ bill, percentage, numberOfPeople });
	if (bill <= 0 || percentage <= 0 || numberOfPeople <= 0) {
		return { tipAmount: 0, total: 0 };
	}
	const tip = (bill * percentage) / 100;
	const total = bill + tip;

	const tipPerson = Number((tip / numberOfPeople).toFixed(2));
	const totalPerson = Number((total / numberOfPeople).toFixed(2));

	return { tipAmount: tipPerson, total: totalPerson };
};

export const useTipStore = create<State>()((set, get) => ({
	bill: 0,
	tipPercentage: 0,
	numberOfPeople: 0,
	setBill: (bill) => {
		const { tipPercentage: percentage, numberOfPeople } = get();
		const { tipAmount, total } = calculateTip({
			bill,
			percentage,
			numberOfPeople,
		});

		set({ bill, tipAmount, total });
	},
	selectTip: (percentage) => {
		const { bill, numberOfPeople } = get();
		const { tipAmount, total } = calculateTip({
			bill,
			percentage,
			numberOfPeople,
		});

		set({ tipPercentage: percentage, tipAmount, total });
	},
	setPeople: (people) => {
		const { bill, tipPercentage: percentage } = get();
		const { tipAmount, total } = calculateTip({
			bill,
			percentage,
			numberOfPeople: people,
		});

		if (people <= 0) {
			set({ numberOfPeople: people, error: "Can't be zero", tipAmount, total });
			return;
		}

		set({ numberOfPeople: people, error: "", tipAmount, total });
	},
	tipAmount: 0,
	total: 0,
	error: "",
	reset: () => {
		set({
			bill: 0,
			tipPercentage: 0,
			numberOfPeople: 0,
			total: 0,
			tipAmount: 0,
			error: "",
		});
	},
}));
