import "./Selector.scss";

export function Selector({ title }: { title: string }) {
	return (
		<div className="selector">
			<h1>{title}</h1>
		</div>
	);
}
