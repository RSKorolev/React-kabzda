import { Meta, StoryFn, StoryObj } from '@storybook/react';
import Rating, { RaitingValueType, RatingValueType } from './Rating';
import { useState } from 'react';

const meta: Meta<typeof Rating> = {
    component: Rating,
};

export default meta;

export const Raring1: StoryObj<typeof Rating> = {
    args: {
        value: 1,
        onClick: () => {},
    },
};
export const Raring2: StoryObj<typeof Rating> = {
    args: {
        value: 2,
        onClick: () => {},
    },
};
export const Raring3: StoryObj<typeof Rating> = {
    args: {
        value: 3,
        onClick: () => {},
    },
};
export const Raring4: StoryObj<typeof Rating> = {
    args: {
        value: 4,
        onClick: () => {},
    },
};
export const RatingChange: StoryFn<typeof Rating> = () => {
    const [value, setValue] = useState<RatingValueType>(1);
    return <Rating value={value} onClick={setValue} />;
};
