import "./index.css";
import { Footer } from "./components/Footer";
import { FormList } from "./components/FormList";
import { ListDone } from "./components/ListDone";
import { ListItem } from "./components/ListItem";
import { Header } from "./components/Header";
import { ListDoing } from "./components/ListDoing";


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
