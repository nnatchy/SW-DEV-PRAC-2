import Image from 'next/image'
import TopMenuItem from './TopMenuItem'

export default function TopMenu() {
    return (
        <div className='flex w-full fixed z-[11] justify-end 
        bg-gradient-to-l from-blue-950 from-10% via-indigo-600 
        via-60% to-sky-400 to-95%'>
            <TopMenuItem title='Booking' pageRef='/booking'/>
            <Image src={'/img/vaccine.png'} 
                    className='ml-10 w-[100px] h-[60px]'
                    alt='logo'
                    width={0}
                    height={0}
                    sizes='100vh'/>
        </div>
    )
}