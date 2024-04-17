export const ProductCard = ({ product, addLunch }) => {
    return (
        <li className="product__container">
            <div className="product__lunch">
                <img src={product.img} alt={product.name} className="product__img"/>
            </div>
            <div className="product__info">
                <h3 className="title heading3 product__name">{product.name}</h3>
                <span className="caption product__type">{product.category}</span>
                <span className="body product__price" >
                    {product.price.toLocaleString('pt-BR', 
                    { style: "currency", currency: "BRL" })}</span>
                <button className="product__btn" onClick={() => addLunch(product)}>Adicionar</button>
            </div>
        </li>
    )
}