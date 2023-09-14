'use client'
import { useReducer } from "react"
import ProductCard from "./ProductCard"

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

    const [ compareList, dispatchCompare ] = useReducer(compareReducer, new Set<string>())

    return (
        <div>
            <div style={{
                margin: "20px", display: 'flex', flexDirection: "row",
                flexWrap: "wrap", justifyContent: 'space-around', alignContent: 'space-around'
            }}>
                <ProductCard carName='Honda Civic' imgSrc='/img/civic.jpeg' onCompare={(car: string) => dispatchCompare({type: 'add', carName: car})} />
                <ProductCard carName='Toyota Civic' imgSrc='/img/toyota.jpeg' onCompare={(car: string) => dispatchCompare({type: 'add', carName: car})} />
                <ProductCard carName='Benz Civic' imgSrc='/img/benz.jpeg' onCompare={(car: string) => dispatchCompare({type: 'add', carName: car})} />
                <ProductCard carName='Bmw Civic' imgSrc='/img/bmw.jpeg' onCompare={(car: string) => dispatchCompare({type: 'add', carName: car})} />
            </div>
            <div className="w-full text-xl font-medium">
                Compare List: {compareList.size}
            </div>
            { Array.from(compareList).map((car) => 
            <div key={car} 
                onClick={() => dispatchCompare({type: 'remove', carName: car})}>
                {car}
            </div>
            )}
        </div>
    )
}