import styles from "./card.module.css"
import Image from "next/image"
import InteractiveCard from "./InteractiveCard";

export default function Card({ hospitalName, imgSrc }: { hospitalName: string, imgSrc: string }) {
    return (
        <InteractiveCard contentName={hospitalName}>
            <div className={`${styles.card} w-[420px] h-[500px] mx-0 my-[20px]`}>
                <div className='relative h-[75%] w-[100%]'>
                    <Image src={imgSrc}
                        alt='Product Picture'
                        fill={true}
                        className="object-cover rounded-t-lg hover:opacity-[0.7]"
                    />
                </div>
                <div className={`${styles.cardText}`}>
                    <div className={`indent-0 font-bold text-3xl pt-5 text-center`}>
                        {hospitalName}
                    </div>
                </div>
            </div>
        </InteractiveCard>
    );
}