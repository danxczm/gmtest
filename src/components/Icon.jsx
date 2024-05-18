import Icons from '../utils/sprite.svg';

const Icon = ({ iconName, className }) => {
    return (
        <svg className={className}>
            <use href={Icons + iconName}></use>
        </svg>
    );
};

export default Icon;
