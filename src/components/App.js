import "../index.css";
import { Footer } from "./Footer";
import { FormList } from "./FormList";
import { ListDone } from "./ListDone";
import { ListItem } from "./ListItem";
import { Header } from "./Header";

// TODO: Sistemazione stile di tutti i componenti

export default function App() {

	return (
		<div className="flex flex-col items-between justify-around h-screen overflow-x-hidden">
			<Header />
			<FormList />
			<section className="phone:flex-col phone:justify-between flex my-8 h-full">
				<ListItem />
				<ListDone />
			</section>
			<Footer />
		</div>
	);
}
