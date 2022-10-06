import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function ProductsItem(props) {
    const [item, setItem] = useState({})
    const url = "https://fakestoreapi.com"
    const params = useParams()


    useEffect(() => {
        console.log(params);
        if (params.id) {
            fetch(`${url}/products/${params.id}`)
                .then(res => res.json())
                .then(res => {
                    setItem(res)
                })
        }
    }, [params.id])

    return item.id && (
        <div className="products-item">
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>{item.category}</div>
        </div>
    )
}

export default ProductsItem