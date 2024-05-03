const { db } = require('@vercel/postgres');


async function createTable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    // Practice Area
    await client.sql`
      CREATE TABLE IF NOT EXISTS case_types (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        firm_id VARCHAR(255) NOT NULL,
        import_names VARCHAR(255) NOT NULL
      );
    `;
    await client.sql`
        INSERT INTO case_types (id, name, firm_id, import_names)
        VALUES ('126eed9c-c90c-4ef6-a4a8-fcf7408d3c66', 'Personal Injury', '1', 'PI')
        ON CONFLICT (id) DO NOTHING;
      `
    // Stages
    await client.sql`
      CREATE TABLE IF NOT EXISTS case_statuses (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        firm_id VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        case_type_id VARCHAR(255) NOT NULL,
        import_names VARCHAR(255) NOT NULL
      );
    `;
    await client.sql`
        INSERT INTO case_statuses (id, name, firm_id, description, case_type_id, import_names)
        VALUES ('126eed9c-c90c-4ef6-a4a8-fcf7408d3c66', 'Released from Treatment', '1', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66', 'treating')
        ON CONFLICT (id) DO NOTHING;
      `

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