import { useState } from 'react';

type OnOffPropsType = {
    on: boolean;
    onChange: (on: boolean) => void;
};

export const ControlledOnOff = (props: OnOffPropsType) => {
    //
    const onStyles = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white',
    };

    const offStyles = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        display: 'inline-block',
        margin: '10px',
        backgroundColor: props.on ? 'white' : 'red',
    };

    const indicatorStyles = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'red',
    };
    return (
        <div>
            <div
                style={onStyles}
                onClick={() => {
                    props.onChange(true);
                }}
            >
                On
            </div>
            <div style={offStyles} onClick={() => props.onChange(false)}>
                Of
            </div>
            <div style={indicatorStyles}></div>
        </div>
    );
};
