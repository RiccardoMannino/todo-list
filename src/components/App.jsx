import "../index.css";
import { Footer } from "./Footer";
import { FormList } from "./FormList";
import { ListDone } from "./ListDone";
import { ListItem } from "./ListItem";
import { Header } from "./Header";
import { ListDoing } from "./ListDoing";


// TODO: Aggiungere possibilità di avere task giornaliere e task a lungo termine

export default function App() {
	

	return (
		<div className="flex flex-col items-between justify-around h-screen overflow-x-hidden">
			<Header />
			<FormList />
			<section className="phone:flex-col phone:justify-between flex my-8 h-full">
				<ListItem />
				<ListDoing />
				<ListDone />
			</section>
			<Footer />
		</div>
	);
}
