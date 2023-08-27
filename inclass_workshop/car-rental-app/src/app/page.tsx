import Image from 'next/image'
import Banner from "@/components/Banner"
import ProductCard from "@/components/ProductCard";
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Banner />
      <div style={{margin: "20px", display: 'flex', flexDirection: "row",
                  flexWrap: "wrap", justifyContent: 'space-around', alignContent: 'space-around'}}>
        <ProductCard carName='Honda Civic' imgSrc='/img/civic.jpeg'/>
        <ProductCard carName='Toyota Civic' imgSrc='/img/toyota.jpeg'/>
        <ProductCard carName='Benz Civic' imgSrc='/img/benz.jpeg'/>
        <ProductCard carName='Bmw Civic' imgSrc='/img/bmw.jpeg'/>
      </div>
    </main>
  )
}
