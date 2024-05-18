import { itemsData } from '../utils/data';
import ItemExcerpt from './ItemExcerpt';

const ItemsList = () => {
    const content = itemsData.map(item => (
        <ItemExcerpt key={item.id} item={item} />
    ));

    return (
        <div className="p-[30px] mx-auto w-full max-w-screen-desktop">
            <ul className="grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-3 place-items-center">
                {content}
            </ul>
        </div>
    );
};

export default ItemsList;
