import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const ItemExcerpt = ({ item }) => {
  const {
    id,
    title,
    list,
    icon,
    color,
  } = item;

  return (
    <div
      id={id}
      className={`relative w-full desktop:max-w-[424px] tablet:h-[540px] h-[460px] border-2 rounded-sm border-${color} flex flex-col`}
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
        className='absolute bottom-6 right-6 underline mobile:text-base tablet:text-2xl'
        to={`/${id}`}
      >
        View more
      </Link>
    </div>
  );
};

export default ItemExcerpt;
