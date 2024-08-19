export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
    onClick: (value: RatingValueType) => void;
};

function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star
                selected={props.value > 0}
                onClick={props.onClick}
                value={1}
            />
            <Star
                selected={props.value > 1}
                onClick={props.onClick}
                value={2}
            />
            <Star
                selected={props.value > 2}
                onClick={props.onClick}
                value={3}
            />
            <Star
                selected={props.value > 3}
                onClick={props.onClick}
                value={4}
            />
            <Star
                selected={props.value > 4}
                onClick={props.onClick}
                value={5}
            />
        </div>
    );
}

type StarPropsType = {
    selected: true | false;
    value: 0 | 1 | 2 | 3 | 4 | 5;
    onClick: (value: 0 | 1 | 2 | 3 | 4 | 5) => void;
};
function Star({ selected, value, onClick }: StarPropsType) {
    return (
        <span
            onClick={() => {
                onClick(value);
            }}
        >
            {selected ? <b> Star </b> : 'Star'}
        </span>
    );
}
export { Rating };
