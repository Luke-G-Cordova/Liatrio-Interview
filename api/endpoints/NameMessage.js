import { constructNameMessage } from '../helpers.js';

export default [
  {
    name: 'NameMessage',
    description: 'Returns my name',
    rout: '/',
    method: 'GET',
    fn: NameMessage,
  },
];

function NameMessage(req, res) {
  res.json(constructNameMessage());
}
