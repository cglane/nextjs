const { db } = require('@vercel/postgres');


async function createTable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS progress (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        firm_id VARCHAR(255) NOT NULL,
        current_path VARCHAR(255) NOT NULL
      );
    `;
    client.sql`
        INSERT INTO progress (id, name, email, image_url)
        VALUES ('1', 'progress', '1', '/setup/practice_area/import')
        ON CONFLICT (id) DO NOTHING;
      `,
    // const insertProgress = await Promise.all(
    //   customers.map(
    //     (customer) => client.sql`
    //     INSERT INTO customers (id, name, email, image_url)
    //     VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
    //     ON CONFLICT (id) DO NOTHING;
    //   `,
    //   ),
    // );
  }catch (error) {
    console.error('Error seeding table:', error);
    throw error;
  }

  }
  async function main() {
    const client = await db.connect();
  
    await createTable(client);
  
    await client.end();
  }
  
  main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });