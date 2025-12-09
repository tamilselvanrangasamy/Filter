import { useState } from 'react'
import './style.css'
import Product from './Products.json'
function Products() {
    const [items, setItems] = useState(Product)
    const Above = () => {
        const above = Product.filter(e => e.price > 1000)
        setItems(above)
    }
    const Below = () => {
        const below = Product.filter(e => { return e.price < 1000 })
        setItems(below)
    }
    const Clear = () => {
        setItems(Product)
    }
    const Find = (name: string) => {
        const find = Product.filter(e => e.title.toLowerCase().startsWith(name.toLowerCase()))
        setItems(find)
    }

    return (
        <div>

            <div>
                <button onClick={Above}>Above 1000</button>
                <button onClick={Below}>below 1000</button>
                <button onClick={Clear}>Clear</button>
                <button onClick={() => Find('c')}>Apple</button>
            </div>
            <div className='grid'>
                {
                    items.map((e: any, i: number) => (
                        <div key={i} >
                            <div className='one'>
                                <div className="title">
                                    <h1>{e.title}</h1>
                                </div>
                                <div className="image">
                                    <img src={e.thumbnail} alt="" />
                                </div>
                                <div className="price">
                                    <h1>{e.price}</h1>
                                </div>
                            </div>
                            {/* <div className='two'>
                                <div className="title">
                                    <h1>{e.products[1].title}</h1>
                                </div>
                                <div className="image">
                                    <img src={e.products[1].thumbnail} alt="" />
                                </div>
                                <div className="price">
                                    <h1>{e.products[1].price}</h1>
                                </div>
                            </div> */}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products