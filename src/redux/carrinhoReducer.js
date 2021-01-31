import boxProdutos from './boxProdutos';

const initialState = boxProdutos.map((item) => ({...item, quant: 0}));

export default function carrinho(state = initialState, action) {
  switch (action.type) {
    case 'adicionar_carrinho':
      return state.map((item) => {
        item.id === action.id && item.quant++;
        return item;
      });

    case 'excluir_prod':
      return state.map((item) => {
        item.id === action.id && item.quant--;
        return item;
      });

    case 'excluir_tudo':
      return state.map((item) => {
        item.quant = 0;
        return item;
      });

    default:
      return state;
  }
}