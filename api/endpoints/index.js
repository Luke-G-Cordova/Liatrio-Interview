// if there were going to be more routes this file is to conglomerate them into one array
import { default as NameMessage } from './NameMessage.js';
import { default as Demo } from './Demo.js';

const routes = [...NameMessage, ...Demo];
export default routes;
