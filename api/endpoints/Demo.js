import url from 'url';
import path from 'path';

export default [
  {
    name: 'Demo',
    description: 'The starting page of the demo for this project',
    rout: '/demo',
    method: 'GET',
    fn: Demo,
  },
];

function Demo(req, res) {
  res.sendFile(
    path.join(
      path.dirname(url.fileURLToPath(import.meta.url)),
      '../html/demo.html'
    )
  );
}
