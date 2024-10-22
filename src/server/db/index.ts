import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";

// const poolConnection = mysql.createPool({
//   host: "mysql.railway.internal",
//   user: "root",
//   database: "railway",
// });
export const db = drizzle({ connection: { uri: process.env.DATABASE_URL } });
// or if you need client connection
// export async function main() {
//   const connection = await mysql.createConnection({
//     host: "mysql.railway.internal",
//     user: "root",
//     database: "railway",
//   });
//   const db = drizzle({ client: connection });
// }
// main();
