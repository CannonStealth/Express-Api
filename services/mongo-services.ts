import { connect } from 'mongoose'

const mongo = async (mongoPath: string): Promise<boolean> => {
  await connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    keepAlive: true,
  })
  .catch((err) => console.error(err))
  .then(() => console.log("Connected to Mongo"));

  return true;
};

export default mongo;