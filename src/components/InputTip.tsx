import { ReactNode } from "react";
import { useTip } from "../hooks/useTip";

export const InputTip = ({
	children,
	id,
	name,
}: { children: ReactNode; id: string; name: string }) => {
	const { selectTip } = useTip();

	return (
		<>
			<label
				htmlFor={id}
				className="bg-very-dark-cyan text-white cursor-pointer rounded-md p-2 font-bold text-center text-2xl has-[:checked]:bg-strong-cyan has-[:checked]:text-very-dark-cyan"
			>
				{children}
				<input
					type="radio"
					id={id}
					className="hidden"
					name={name}
					onChange={(e) => {
						selectTip(Number(e.target.id));
					}}
				/>
			</label>
		</>
	);
};
