import Image from 'next/image'
import { FaCalendarAlt, FaSearchLocation } from 'react-icons/fa'
import styles from "./banner.module.css"

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image src={'/img/background.jpg'}
                alt='background'
                fill={true}
                priority
                objectFit='cover'
                className={styles.image}
            />
            <div className={styles.bannerText}>
                <h4> <FaCalendarAlt /> 10-12 ธันวาคม 2566
                    <span><FaSearchLocation /> ABC Tower ชั้น G ห้อง KING</span>
                </h4>
                <h1>บริการฉีดวัคซีนโควิด
                    <span>ฟรี</span>
                </h1>
                <h3>วัคซีนป้องกันโรคโควิด 
                    <span className={styles.pfizer}>
                        <a href="https://www.pfizer.co.th/" target='_blank'>Pfizer</a>
                    </span>
                    ให้คนไทยได้รับการฉีดอย่างทั่วถึง
                </h3>
                <p>
                    เปิดให้เข้ารับการฉีดตั้งเเต่ 
                    <span>08.00 - 17.30 น.</span>
                </p>
            </div>
        </div>
    )
}