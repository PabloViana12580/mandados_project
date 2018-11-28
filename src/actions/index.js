import * as types from '../types';

export const addToInventory = (
  id,
  name,
  qty,
  idConductor,
) => ({
  type: types.INVENTORY_ADDED,
  payload: {
    id,
    name,
    qty,
    idConductor,
  }
});

export const addToCart = id => ({
  type: types.PRODUCT_ADDED_TO_CART,
  payload: {
    id,
  }
});

export const userLogin = (
  user,
  password
) => ({
  type: types.USER_LOGGED,
  payload: {
    user,
    password
  }
});


export const addUser = (
  id,
  usuario,
  password,
  genero,
  nombre,
  correo,
  apellido,
  dpi,
  telefono,
  edad,
) => ({
  type: types.USER_ADDED,
  payload: {
    id,
    usuario,
    password,
    genero,
    nombre,
    correo,
    apellido,
    dpi,
    telefono,
    edad,
  }
});



export const selectMandadero = (
  id,
  name,
  last_name
) => ({
  type: types.MANDADERO_SELECTED,
  payload: {
    id,
  name,
  last_name
  }
});


export const deleteToCart = (
  id,
  name,
  last_name
)=>({
  type: types.DELETED_CART,
  payload:{
    id,
    name,
    last_name
  }
})