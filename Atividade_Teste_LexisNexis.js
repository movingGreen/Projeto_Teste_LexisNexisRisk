// Declaração dos padrões de regex 
const REGEX_CPF = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;
const REGEX_DATA = /\d{2}\/\d{2}\/\d{4}/g;
const REGEX_TELEFONE = /\(\d{2}\)\d{5}-\d{4}/g;
const REGEX_CNPJ = /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/g;
const REGEX_EMAIL = /[A-Z][a-z]+@[a-z]+\.[a-z]+/g;
const REGEX_CARTAO = /(\d{4}-\d{4}-\d{4}-\d{4})|(\d{4} \d{4} \d{4} \d{4})|(\d{4}\.\d{4}\.\d{4}\.\d{4})/g;

