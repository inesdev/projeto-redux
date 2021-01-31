import {combineReducers} from 'redux';
import carrinho from './carrinhoReducer';
import produtos from './produtosReducer';

export default combineReducers({
  carrinho,
  produtos,
}); 