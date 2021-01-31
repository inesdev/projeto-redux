import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

export default function Carrinho() {
  const dispatch = useDispatch();

  const carrinho = useSelector((state) =>
    state.carrinho.filter((item) => item.quant > 0)
  );

  const totalQuant = useSelector((state) =>
    state.carrinho.reduce((acc, cur) => acc + cur.quant, 0)
  );

  const totalPreco = useSelector((state) =>
    state.carrinho.reduce((acc, cur) => acc + cur.preco * cur.quant, 0)
  );

  return (
    <div style={styleCar}>
      <h2>
        Carrinho de Compras ({totalQuant})
        <button onClick={() => dispatch({type: 'excluir_tudo'})}>
          Excluir todos os itens
        </button>
      </h2>

      <table>
        <tbody>
          {carrinho.map((item) => (
            <tr key={item.id}>
              <td>{item.produto}</td>
              <td>
                R$ {(item.preco * item.quant).toFixed(2)}
              </td>
              <td>
              <button onClick={() => dispatch({ type: 'excluir_prod', id: item.id })}> - </button>
                {item.quant}
              <button onClick={() => dispatch({ type: 'adicionar_carrinho', id: item.id })}> + </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Total: R$ {totalPreco.toFixed(2)}</h4>
    </div>
  );
}

const styleCar = {
  height: '100vh',
  width: '95vw',
  margin: '20px',
  padding: '10px',
  background: '#E0F7FA',
};