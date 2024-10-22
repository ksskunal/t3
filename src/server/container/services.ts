import { db } from "../db";

// services.ts
export const createDatabaseService = () => {
  // Initialize your Drizzle database connection
  if (process.env.NODE_ENV === "development") {
    return {
      db,
    };
  } else if (process.env.NODE_ENV === "test") {
    // return a diffrent database
  }
};

export const createSmsService = () => {
  return {
    sendSms: (to: string, message: string) => {
      // Logic for sending SMS
      return { message: "sent!" };
    },
  };
};

export const createEmailService = () => {
  return {
    sendEmail: (to: string, subject: string, body: string) => {
      // Logic for sending email
      return { message: "email sent successfully" };
    },
  };
};
