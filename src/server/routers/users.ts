import { z } from "zod";
import {
  CONTAINER_TYPES,
  container,
  type DatabaseService,
} from "../container/container";
import { usersTable } from "../db/schema";
import { procedure, router } from "../trpc";

const dbService = container.get<DatabaseService>(
  CONTAINER_TYPES.DatabaseService
);

export const userRouter = router({
  getAll: procedure.query(async () => {
    const users = await dbService!.db.select().from(usersTable);
    return users;
  }),
  add: procedure
    .input(
      z.object({
        name: z.string(),
        city: z.string(),
        age: z.number(),
        email: z.string().email(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;

      const result = await dbService!.db.insert(usersTable).values(input);
      return {
        success: true,
        message: "User added successfully!",
        data: result,
      };
    }),
});
