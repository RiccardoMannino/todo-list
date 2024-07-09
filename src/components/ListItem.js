import { Item } from "./Item";

export function ListItem({ items, onToggleItem, onDeleteItem }) {
	return (
		<div
			style={{
				textAlign: "center",
				color: "white",
				width: "100%",
				background: "#282828",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<ul
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "1rem",
				}}
			>
				<p>Cose da prendere</p>
				{items.map((item) => (
					<Item
						item={item}
						key={item.id}
						onToggleItem={onToggleItem}
						onDeleteItem={onDeleteItem}
					/>
				))}
			</ul>
			<p>
				Devi prendere
				{items.length === 1 ? `${items.length} cosa` : `${items.length} cose`}
			</p>
		</div>
	);
}
