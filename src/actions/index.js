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

export const UserCreationConfirmed = () => ({
  type: types.USER_CONFIRMED,
});



export const addUser = (
  id,
  usuario,
  password,
  genero,
  nombre,
  correo,
  apwllido,
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
    apwllido,
    dpi,
    telefono,
    edad,
  }
});