import React from 'react'
import Image from 'next/image'
function IdentityCard({ image, title, description, linkTitle, link }) {
    return (
        <div className='identity-card max-w-[30%]'>
            <Image src={image} alt={title} height={100} width={100} />
            <h4 className='identity-title'>{title}</h4>
            <p className='identity-description'>{description}</p>
            <a href={link} className='identity-button'>{linkTitle} <span><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.31451 1.18457L12.25 6.12008L7.31451 11.0556" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.2499 6.12012L1.75 6.12012" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg></span></a>
        </div>
    )
}

export default IdentityCard