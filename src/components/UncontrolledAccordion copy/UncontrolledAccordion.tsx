import { useState } from 'react';

type AccordionPropsType = {
    title: string;
    setCollapsed: (isCollapsed: boolean) => void;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <AccordionTitle
                title={props.title}
                setCollapsed={setCollapsed}
                collapsed={collapsed}
            />
            {collapsed && <AccordionBody />}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string;
    setCollapsed: (isCollapsed: boolean) => void;
    collapsed: boolean;
};

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.setCollapsed(!props.collapsed)}>
            {props.title}
        </h3>
    );
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
