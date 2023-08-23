'use client';

import { Card } from 'flowbite-react';

export default function FirstSectionCard({ imgAlt, imgSrc, title, description }) {
  return (
    <Card
      imgAlt={imgAlt}
      imgSrc={imgSrc}
      className='card rounded-e-3xl shadow-none border-none'
    >
      <h5 className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
      </h5>
      <p className="card-description font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <p className="learn-more">
        Learn more <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
          <path d="M9.66934 1.17365L16.7201 8.22437L9.66934 15.2751" stroke="#2265B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16.72 8.22437L1.72006 8.22437" stroke="#2265B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg></span>
      </p>

    </Card>
  )
}