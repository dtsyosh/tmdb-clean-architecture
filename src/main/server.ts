import moduleAlias from 'module-alias';
import path from 'path';

if (process.env.NODE_ENV === 'production') {
  moduleAlias.addAlias('@', path.join(__dirname, '..',));
}

import app from '@/main/config/app';



const port = process.env.PORT || 4000;

const server = app.listen(port);

export default server;