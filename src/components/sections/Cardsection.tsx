'use client'
import { FC } from 'react';
import Card from '../Cards/CardOne';
import Button from '../Buttons/ButtonOne';
import {ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {CardData} from '@/constants/toolsData';


interface CardSectionProps {
    title: string;
    data: CardData[];
    showbtn?: string;
    showbtnLink?: string | any;
    projectGrid?:string

}

const CardSection: FC<CardSectionProps> = ({ title, data, showbtn, showbtnLink, projectGrid }) => {
    const router = useRouter()
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
            <div>
                {
                    showbtn ?
                        
                    <Button className='opacity-50 p-3' onClick={()=>router.push(showbtnLink)}>
                    {showbtn} <ChevronRight size={16}/>
                    </Button>
                        
                        : <></>}
            </div>
        </section>
    );
};

export default CardSection;