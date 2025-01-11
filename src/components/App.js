import "../index.css";
import { Footer } from "./Footer";
import { FormList } from "./FormList";
import { ListDone } from "./ListDone";
import { ListItem } from "./ListItem";
import { Header } from "./Header";

// TODO: Sistemazione stile di tutti i componenti

export default function App() {


	return (
		<div className="app">
			<Header />
			<FormList />
			<div style={{ display: "flex" }}>
				<ListItem />
				<ListDone />
			</div>
			<Footer />
		</div>
	);
}
