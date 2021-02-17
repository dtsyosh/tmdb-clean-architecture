import 'module-alias/register';

import app from '@/main/config/app';

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});