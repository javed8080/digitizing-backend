import { MongooseModule } from '@nestjs/mongoose';

export const databaseProviders = [
  MongooseModule.forRootAsync({
    useFactory: async () => ({
      uri: 'mongodb://localhost:27017/digitizing', // Provide your MongoDB URI here.
    }),
  }),
];
