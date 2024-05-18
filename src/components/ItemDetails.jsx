import {
  useParams,
  Link,
} from 'react-router-dom';
import { itemsData } from '../utils/data';
import Icon from './Icon';

const ItemDetails = () => {
  const { id } = useParams();

  const data = itemsData.find(
    (item) => item.id === Number(id)
  );

  const { title, list, icon, color } =
    data;

  return (
    <div
      id={id}
      className={`relative w-full h-[460px] border-2 rounded-sm border-${color} flex flex-col items-center`}
    >
      <Icon
        iconName={icon}
        className={`max-w-16 tablet:max-w-24 fill-${color} h-16 tablet:h-24 ml-auto m-4`}
      />
      <div className='px-4'>
        <p className='font-semibold mobile:text-xl tablet:text-4xl mb-6'>
          {title}
        </p>
        <ul className='list-disc grid gap-y-3 ml-8 text-base tablet:text-xl desktop:text-2xl'>
          {list.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>
      <Link
        className='absolute top-6 left-6 underline mobile:text-base tablet:text-2xl'
        to={`/`}
      >
        back to list
      </Link>
    </div>
  );
};

export default ItemDetails;
