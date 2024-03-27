type OnOffPropsType = {
    on: boolean;
};

const onStyles = {};

const offStyles = {};

const indicatorStyles = {
    width: '30px',
    height: '30px',
    borderRadius: '15px',
    border: '1px solid black',
};

export const OnOff = (props: OnOffPropsType) => {
    return (
        <div>
            <div></div>
            <div></div>
            <div style={indicatorStyles}></div>
        </div>
    );
};
