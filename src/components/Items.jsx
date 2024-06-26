import { itemsData } from '../utils/data';
import ItemExcerpt from './ItemExcerpt';

const ItemsList = () => {
    const content = itemsData.map(item => (
        <ItemExcerpt key={item.id} item={item} />
    ));

    return (
        <ul className="grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-3 place-items-center">
            {content}
        </ul>
    );
};

export default ItemsList;
