import { useState } from 'react';

type OnOffPropsType = {
    on: boolean;
};

export const OnOff = (props: OnOffPropsType) => {
    let [on, setOn] = useState(false);
    const onStyles = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white',
    };

    const offStyles = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        display: 'inline-block',
        margin: '10px',
        backgroundColor: on ? 'white' : 'red',
    };

    const indicatorStyles = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red',
    };
    return (
        <div>
            <div
                style={onStyles}
                onClick={() => {
                    setOn(true);
                }}
            >
                On
            </div>
            <div style={offStyles} onClick={() => setOn(false)}>
                Of
            </div>
            <div style={indicatorStyles}></div>
        </div>
    );
};
export default OnOff;