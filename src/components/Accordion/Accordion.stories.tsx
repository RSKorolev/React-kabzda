import { useState } from 'react';
import Accordion from './Accordion';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const FirstStory: Story = {
    args: {
        title: 'Accordion',
        collapsed: false,
        onClick: () => {},
    },
};

const onClickHandler = action('onClick');
export const CollapsedAccordion = () => {
    return (
        <Accordion
            title={'CollapsedAccordion'}
            collapsed={true}
            onClick={onClickHandler}
        />
    );
};

export const OpenAccordion = () => {
    return (
        <Accordion
            title={'OpenAccordion'}
            collapsed={false}
            onClick={() => {}}
        />
    );
};

export const AccordionAction = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Accordion
            title={'AccordionAction'}
            collapsed={collapsed}
            onClick={() => {
                setCollapsed(!collapsed);
            }}
        />
    );
};
