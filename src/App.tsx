import { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import { OnOff } from './components/OnOff/OnOff';
import Rating, { RaitingValueType } from './components/Rating/Rating';
import UncontrolleRating from './components/UncontrolleRating/UncontrolleRating';
import { UncontrolledAccordion } from './components/UncontrolledAccordion copy/UncontrolledAccordion';

function App() {
    const [raitingValue, setRaitingValue] = useState<RaitingValueType>(0);
    const [accordionCollapsed, setCollapsed] = useState(true);
    return (
        <div className={'App'}>
            <PageTitle title={'This is APP component'} />
            <PageTitle title={'My friends'} />
            Articl 1
            <Rating value={raitingValue} onClick={setRaitingValue} />
            {/* <Accordion title={'Меню'} collapsed={true} /> */}
            <Accordion
                title={'Подменю'}
                collapsed={accordionCollapsed}
                onClick={() => {
                    setCollapsed(!accordionCollapsed);
                }}
            />
            Articl 2
            <OnOff on={true} />
            <OnOff on={false} />
            <OnOff on={true} />
            <UncontrolleRating />
            <UncontrolledAccordion title={'--Menu--'} />
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
