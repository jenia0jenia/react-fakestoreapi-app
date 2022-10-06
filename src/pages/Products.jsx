import {
    Outlet,
    Link
  } from "react-router-dom";

function Products() {
    return (
        <>
            <h1>Products</h1>

            <Link to="/products/new" className="btn">Добавление нового товара</Link>

            <div className="products">
                <Outlet />
            </div>
        </>
    )
}

export default Products