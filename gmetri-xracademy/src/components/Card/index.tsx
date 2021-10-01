/**
 * @format
 */
import React from 'react';
import './index.css'

interface Props {
  heading: string;
  link?: string;
  onClick?: (e: any) => void;
}

export default function Card({ heading, link, onClick = () => {}}: Props) {
  return (
    <a href={link ? link : 'javascript:void(0)'} onClick={onClick} className='tutorial_card'>
      <div className={`tutorial_card__wrapper`}>
        <div className="tutorial_card__heading">{heading}</div>
      </div>
    </a>
  );
}