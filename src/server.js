import { connect } from 'mongoose';
import app from './App';
import { url, flags } from './config/database';

const port = process.env.PORT || 3333;

connect(url, flags)
  .then(() => {
    app.listen(port, () => {
      console.log(`🚀  Server is running ${port}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
