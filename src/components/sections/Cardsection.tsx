'use client'
import { FC } from 'react';
import Card from '../Cards/CardOne';
import {CardData} from '@/constants/toolsData';

interface CardSectionProps {
    title: string;
    data: CardData[];
    projectGrid?:string

}

const CardSection: FC<CardSectionProps> = ({ title, data, projectGrid }) => {
 
    return (
        <section className={`grid gap-4`}>
            <div className={` text-md sm:text-2xl  font-bold text-neutral-200`}>{title}</div>
            <div className={`grid ${projectGrid}  lg:grid-cols-2 gap-4`}>
                {data.map((card) => (
                    <Card
                        key={card.id}
                        link={card.link}
                        title={card.title}
                        description={card.description}
                        icon={card.icon}                                        
                    />
                ))}
            </div>
       
        </section>
    );
};

export default CardSection;