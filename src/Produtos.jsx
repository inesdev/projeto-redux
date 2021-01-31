import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

export default function Produtos() {
  const dispatch = useDispatch();
  const produtos = useSelector((state) => state.produtos);

  return (
    <div style={prodStyle}>
      <h2>Produtos</h2>

      <div style={divStyle}>
        {produtos.map((item) => (
          <div key={item.id} style={cardStyle}>
            <p>{item.produto}</p>
            <p>R$ {item.preco.toFixed(2)}</p>
            <button onClick={() => dispatch({type: 'adicionar_carrinho', id: item.id})}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const prodStyle = {
  height: '100vh',
  width: '50vw',
  background: 'white',
  padding: '10px',
};

const divStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};

const cardStyle = {
  width: '120px',
  height: '100px',
  margin: '5px',
  padding: '15px',
  background: '#cfd8dc',
  borderRadius: '7px',
  alignContent: 'center',
  textAlign: 'center',
  display: 'inline-block',
};