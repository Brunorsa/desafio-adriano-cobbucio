// import faker from 'faker-br';
import { faker } from '@faker-js/faker';


export const generateUsers = () => ({
  nome: faker.name.firstName(),
  email: faker.internet.email(),
  senha: faker.internet.password(),
  conta: faker.word.adjective()
});

export const generateDate = () => {
  const dataAtual = new Date();
  const dia = String(dataAtual.getDate()).padStart(2, '0');
  const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
  const ano = dataAtual.getFullYear();
  return `${dia}/${mes}/${ano}`;
};

export const getMesAtual = () => {
  const dataAtual = new Date();
  const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
  return mes;
};

export const getAnoAtual = () => {
  const dataAtual = new Date();
  const ano = String(dataAtual.getFullYear());
  return ano;
};

export default {
  generateDate,
  getMesAtual,
  getAnoAtual
}

