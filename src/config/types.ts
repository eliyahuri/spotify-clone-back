export type Config = {
  port: number;
  cors: {
    origin: string;
    optionsSuccessStatus: number;
  };
};
