const { MongoClient } = import('mongodb');

async function main() {
   
    const uri = "mongodb+srv://Korisnik:korisnik@databaza.tip3k.mongodb.net/Databaza?retryWrites=true&w=majority";

    MongoClient.connect(uri,function(err, db){
        if(err) 
          console.log(err);
        else
        {
          console.log('Mongo Conn....');
  
        }
      });
}

main().catch(console.error);

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};