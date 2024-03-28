import { useState } from 'react';

type AccordionProps = {
    title: string;
};

export function UncontrolledAccordion({ title }: AccordionProps) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div>
<<<<<<< HEAD
            <AccordionTitle title={props.title} />
            <button onClick={() => setCollapsed(!collapsed)}>TOGGLE </button>
=======
            <AccordionTitle
                title={title}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
            />
>>>>>>> 3bdd114c9ab7d58edf945a25463d2d52708cd3d8
            {!collapsed && <AccordionBody />}
        </div>
    );
}

type AccordionTitleProps = {
    title: string;
<<<<<<< HEAD
};

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.title}</h3>;
=======
    collapsed: boolean;
    setCollapsed: (isCollapsed: boolean) => void;
};

function AccordionTitle({
    title,
    collapsed,
    setCollapsed,
}: AccordionTitleProps) {
    return <h3 onClick={() => setCollapsed(!collapsed)}>{title}</h3>;
>>>>>>> 3bdd114c9ab7d58edf945a25463d2d52708cd3d8
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
