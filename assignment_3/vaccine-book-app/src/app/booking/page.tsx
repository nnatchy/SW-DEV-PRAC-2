import LocationDateReserve from "@/components/LocationDateReserve"
import Image from 'next/image'
import styles from './page.module.css'

export default function Booking() {
    return (
        <main className={styles.main}>
            <div className="flex flex-col items-center justify-center h-screen">
                <Image src={'/img/booking_bg.jpg'}
                    alt='background'
                    fill={true}
                    priority
                    objectFit='cover'
                    className="opacity-[0.5]"
                />
                <div className="text-center z-10">
                    <LocationDateReserve />
                </div>
            </div>
        </main>
    )
}
