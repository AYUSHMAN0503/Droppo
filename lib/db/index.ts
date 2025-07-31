/* Database Connection for Droppo
 This file sets up the connection to our Neon PostgreSQL database using Drizzle ORM.
*/

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

const sql = neon(process.env.DATABASE_URL!);


// Step 2: Initialize Drizzle ORM with our schema

export const db = drizzle(sql, { schema });

/*
 * Step 3: Export the SQL client for direct queries
  import { sql } from './db';
  const result = await sql`SELECT * FROM files WHERE user_id = ${userId}`;
 */
export { sql };
