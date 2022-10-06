function ProductsForm() {
    
    return (
        <>
            <h2>Добавление нового товара</h2>
            <form
                onSubmit={(e) => {
                    console.log(document.querySelectorAll('.form-input'))
                    e.preventDefault();
                }}
            >
                <input onChange={(e) => {
                    // console.log(e.target.value)
                }} type="text" className="form-input" placeholder="Название товара" />
                <input type="number" className="form-input" placeholder="Цена товара" />
                <input type="text" className="form-input" placeholder="Категория товара" />
                <input type="submit" value="Создать" />
            </form>
        </>
    );
}

export default ProductsForm