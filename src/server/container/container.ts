// inversify.config.ts
import "reflect-metadata";
import { Container } from "inversify";
import {
  createDatabaseService,
  createSmsService,
  createEmailService,
} from "./services";

// Define your identifiers
export const CONTAINER_TYPES = {
  DatabaseService: Symbol.for("DatabaseService"),
  SmsService: Symbol.for("SmsService"),
  EmailService: Symbol.for("EmailService"),
};

export type DatabaseService = ReturnType<typeof createDatabaseService>;
export type SmsService = ReturnType<typeof createSmsService>;
export type EmailService = ReturnType<typeof createEmailService>;

// Create the container
const container = new Container();

// Register your services
container
  .bind<DatabaseService>(CONTAINER_TYPES.DatabaseService)
  .toDynamicValue(() => {
    return createDatabaseService();
  })
  .inSingletonScope();

container
  .bind<SmsService>(CONTAINER_TYPES.SmsService)
  .toDynamicValue(() => {
    return createSmsService();
  })
  .inSingletonScope();

container
  .bind<EmailService>(CONTAINER_TYPES.EmailService)
  .toDynamicValue(() => {
    return createEmailService();
  })
  .inSingletonScope();

export { container };
