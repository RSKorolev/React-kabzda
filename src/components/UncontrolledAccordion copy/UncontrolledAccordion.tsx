import { useState } from 'react';

type AccordionProps = {
    title: string;
};

export function UncontrolledAccordion({ title }: AccordionProps) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle title={title} />
            <button onClick={() => setCollapsed(!collapsed)}>TOGGLE </button>
            {!collapsed && <AccordionBody />}
        </div>
    );
}

type AccordionTitleProps = {
    title: string;
};

function AccordionTitle(props: AccordionTitleProps) {
    return <h3>{props.title}</h3>;
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}
