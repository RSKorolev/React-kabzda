import { useState } from 'react';

type AccordionProps = {
    title: string;
};

export function UncontrolledAccordion({ title }: AccordionProps) {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div>
            <AccordionTitle
                title={title}
                onClick={() => setCollapsed(!collapsed)}
            />
            {!collapsed && <AccordionBody />}
        </div>
    );
}

type AccordionTitleProps = {
    title: string;
    onClick: () => void;
};

function AccordionTitle({ title, onClick }: AccordionTitleProps) {
    return (
        <h3
            onClick={() => {
                onClick();
            }}
        >
            {title}
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
