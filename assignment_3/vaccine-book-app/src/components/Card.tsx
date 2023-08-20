import styles from "./card.module.css"
import Image from "next/image"

export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <Image src={'/img/covid.jpg'}
                        alt='Product Picture'
                        fill={true}
                        objectFit="cover"
                />
            </div>
            <div className={styles.cardTopic}>
                <span> COVID-19</span>
            </div>
            <div className={styles.cardText}>
                วัคซีนป้องกันโควิด-19 จะช่วยกระตุ้นให้ร่างกายสร้างภูมิคุ้มกันต่อเชื้อไวรัสนี้ขึ้นมา ช่วยป้องกันการติดเชื้อหากได้รับเชื้อในอนาคต แต่ต้องใช้เวลาระยะหนึ่งหลังฉีดวัคซีนร่างกายจึงจะสร้างภูมิคุ้มกันขึ้นมาได้
            </div>
        </div>
    );
}