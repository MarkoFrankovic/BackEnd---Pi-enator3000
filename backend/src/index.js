const { MongoClient } = import('mongodb');

async function main() {
   
    const uri = "mongodb+srv://Korisnik:korisnik@databaza.tip3k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
    
        await client.connect();

        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {

        await client.close();
    }
}

main().catch(console.error);

/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};