import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

function App() {
  return (
    <div>
      <PageTitle title={"This is APP component"} />
      <PageTitle title={"My friends"} />
      Articl 1
      <Rating value={3} />
      <Accordion title={"Меню"} collapsed={true} />
      <Accordion title={"Подменю"} collapsed={false} />
      Articl 2
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};
export function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>;
}
export default App;
