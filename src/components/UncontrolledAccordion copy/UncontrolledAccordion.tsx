import { useState } from 'react';

type AccordionProps = {
    title: string;
};

export function UncontrolledAccordion({ title }: AccordionProps) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle
                title={title}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
            />
            {!collapsed && <AccordionBody />}
        </div>
    );
}

type AccordionTitleProps = {
    title: string;
    collapsed: boolean;
    setCollapsed: (isCollapsed: boolean) => void;
};

function AccordionTitle({
    title,
    collapsed,
    setCollapsed,
}: AccordionTitleProps) {
    return <h3 onClick={() => setCollapsed(!collapsed)}>{title}</h3>;
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
