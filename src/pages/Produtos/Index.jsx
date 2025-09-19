const Produtos = () => {

//objeto com a lista de pizzas
const pizzas = [
    'Pizza de muçarela',
    'Pizza de Calabresa',
    'Pizza de Baiana',
    'Pizza de Portuguesa'
]

//interação da lista de pizzas
const listaPizzas = pizzas.map(pizza=><li>{pizza}</li>)


    return (

        <div>
            <ul>
               {listaPizzas}
            </ul>
        </div>
    )
}
export default Produtos