import './App.css';
import Accordion from './components/Accordion/Accordion';
import { OnOff } from './components/OnOff/OnOff';
import Rating from './components/Rating/Rating';
import { UncontrolledAccordion } from './components/UncontrolledAccordion copy/UncontrolledAccordion';
import UncontrolleRating from './components/UncontrolleRating/UncontrolleRating';

function App() {
    return (
        <div className={'App'}>
            <PageTitle title={'This is APP component'} />
            <PageTitle title={'My friends'} />
            Articl 1
            <Rating value={3} />
            <Accordion title={'Меню'} collapsed={true} />
            <Accordion title={'Подменю'} collapsed={false} />
            Articl 2
            <Rating value={0} />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
            <OnOff on={true} />
            <OnOff on={false} />
            <OnOff on={true} />
<<<<<<< HEAD
            <UncontrolleRating />
            <UncontrolledAccordion title={'--Menu--'} />
=======
            <UncontrolledAccordion title={'Меню'} />
>>>>>>> 3bdd114c9ab7d58edf945a25463d2d52708cd3d8
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
