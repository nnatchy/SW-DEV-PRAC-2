'use client'
import { useReducer } from "react"
import ProductCard from "./ProductCard"
import Link from 'next/link'

export default function CarPanel() {

    const compareReducer = (compareList: Set<string>, action: { type: string, carName: string }) => {
        switch (action.type) {
            case 'add': {
                return new Set(compareList.add(action.carName))
            }
            case 'remove': {
                compareList.delete(action.carName)
                return new Set(compareList)
            }
            default:
                return compareList
        }
    }

    const [compareList, dispatchCompare] = useReducer(compareReducer, new Set<string>())

    /*
        Mock Data for Demonstration only
    */
    const mockCarRepo = [
        { cid: "001", name: "Honda Civic", image: "/img/civic.jpeg" },
        { cid: "002", name: "Toyota Civic", image: "/img/toyota.jpeg" },
        { cid: "003", name: "Benz Civic", image: "/img/benz.jpeg" },
        { cid: "004", name: "Bmw Civic", image: "/img/bmw.jpeg" },

    ]

    return (
        <div>
            <div style={{
                margin: "30px", display: 'flex', flexDirection: "row",
                flexWrap: "wrap", justifyContent: 'space-around', alignContent: 'space-around'
            }}>
                {
                    mockCarRepo.map((carItem) => (
                        <Link href={`/car/${carItem.cid}`} className="w-1/5">
                            <ProductCard carName={carItem.name} imgSrc={carItem.image}
                                onCompare={(car: string) => dispatchCompare({ type: 'add', carName: car })}
                            />
                        </Link>
                    ))
                }
            </div>
            <div className="w-full text-xl font-medium mt-10 pt-10">
                Compare List: {compareList.size}
            </div>
            {Array.from(compareList).map((car) =>
                <div key={car}
                    onClick={() => dispatchCompare({ type: 'remove', carName: car })}>
                    {car}
                </div>
            )}
        </div>
    )
}