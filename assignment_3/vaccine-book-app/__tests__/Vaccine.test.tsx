import hospitalCatalog from "@/components/hospitalCatalog"
import {render, screen, waitFor} from "@testing-library/react"

const mockResult = {
    "success": true,
    "count": 4,
    "pagination": {},
    "data": [
        {
        "_id": "652a9e3c99e37f2f94dcf4c9",
        "name": "Chulalongkorn Hospital",
        "address": "1873 Rama IV Rd",
        "district": "Pathum Wan",
        "province": "Bangkok",
        "postalcode": "10330",
        "tel": "026494000",
        "picture": "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
        "__v": 0,
        "id": "652a9e3c99e37f2f94dcf4c9"
        },
        {
        "_id": "652a9e8999e37f2f94dcf4cc",
        "name": "Rajavithi Hospital",
        "address": "2 Phaya Thai Rd, Thung Phaya Thai",
        "district": "Ratchathewi",
        "province": "Bangkok",
        "postalcode": "10400",
        "tel": "022062900",
        "picture": "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
        "__v": 0,
        "id": "652a9e8999e37f2f94dcf4cc"
        },
        {
        "_id": "652a9edc99e37f2f94dcf4cf",
        "name": "Thammasat University Hospital",
        "address": "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
        "district": "Khlong Luang",
        "province": "Pathum Thani",
        "postalcode": "12120",
        "tel": "029269999",
        "picture": "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
        "__v": 0,
        "id": "652a9edc99e37f2f94dcf4cf"
        },
        {
        "_id": "65434f25f195472d1859fcaa",
        "name": "Vajira Hospital",
        "address": "681 Samsen Road",
        "district": "Dusit",
        "province": "Bangkok",
        "postalcode": "10300",
        "tel": " 02-244-3000",
        "picture": "https://drive.google.com/uc?id=1YLciRsApgCzbozEZQpnu_5hz5g0HsIwP",
        "__v": 0,
        "id": "65434f25f195472d1859fcaa"
        }
    ]
}

describe('hospitalCatalog', () => {
    it('should have correct number of hospital images', async() => {
        const hospitalCatalogRes = await hospitalCatalog({hospitalJson: mockResult})
        render(hospitalCatalogRes)

        await waitFor(
            () => {
                const hospitalImg = screen.queryAllByRole('img')
                expect(hospitalImg.length).toBe(4)
            }
        )
    })
})