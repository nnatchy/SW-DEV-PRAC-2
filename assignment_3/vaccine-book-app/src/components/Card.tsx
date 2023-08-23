import styles from "./card.module.css"
import Image from "next/image"

export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <a href="https://www.bangkokhospital.com/content/know-well-before-getting-the-covid-19-vaccine" target="_blank">
                    <Image src={'/img/covid.jpg'}
                            alt='Product Picture'
                            fill={true}
                            objectFit="cover"
                    />
                </a>
            </div>
            <div className={styles.cardText}>
                วัคซีนป้องกันโควิด-19 จะช่วยกระตุ้นให้ร่างกายสร้างภูมิคุ้มกันต่อเชื้อไวรัสนี้ขึ้นมา ช่วยป้องกันการติดเชื้อหากได้รับเชื้อในอนาคต แต่ต้องใช้เวลาระยะหนึ่งหลังฉีดวัคซีนร่างกายจึงจะสร้างภูมิคุ้มกันขึ้นมาได้
            </div>
            <div className={styles.cardExample}>
                วัคซีนโควิด-19 ที่นำมาใช้และมีแผนที่จะนำเข้ามาใช้ในประเทศไทย 5 ยี่ห้อ ได้แก่
                <ul>
                    <li>วัคซีนซิโนแวค (Sinovac)</li>
                    <li>วัคซีนซิโนฟาร์ม (Sinopharm)</li>
                    <li>วัคซีนแอสตร้าเซนเนก้า (AstraZeneca)</li>
                    <li>วัคซีนไฟเซอร์ (Pfizer)</li>
                    <li>วัคซีนโมเดอร์นา (Moderna)</li>
                </ul>
            </div>
        </div>
    );
}