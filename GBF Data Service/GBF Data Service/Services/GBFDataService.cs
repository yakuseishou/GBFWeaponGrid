using GBF_Data_Service.Data;
using GBF_Data_Service.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GBF_Data_Service.Services
{
    public class GBFDataService
    {
        private readonly IMongoCollection<GBFWeapon> _gbfWeapons;

        public GBFDataService(IGBFDatabaseSettings settings)
        {

            var client = new MongoClient(settings.ConnectionString);
            var dbList = client.ListDatabases().ToList();
            var database = client.GetDatabase(settings.DatabaseName);

            _gbfWeapons = database.GetCollection<GBFWeapon>(settings.GBFCollectionName);
        }

        public List<GBFWeapon> Get() => _gbfWeapons.Find(gbfWeapon => true).ToList();

        public GBFWeapon Get(string id) => _gbfWeapons.Find<GBFWeapon>(gbfWeapon => gbfWeapon.weaponId == id).FirstOrDefault();

        public GBFWeapon Create(GBFWeapon gbfWeapon)
        {
            _gbfWeapons.InsertOne(gbfWeapon);
            return gbfWeapon;
        }

        public void Update(string id, GBFWeapon gbfWeaponIn) =>
            _gbfWeapons.ReplaceOne(gbfWeapon => gbfWeapon.weaponId == id, gbfWeaponIn);

        public void Remove(GBFWeapon gbfWeaponIn) =>
            _gbfWeapons.DeleteOne(gbfWeapon => gbfWeapon.weaponId == gbfWeaponIn.weaponId);

        public void Remove(string id) =>
            _gbfWeapons.DeleteOne(gbfWeapon => gbfWeapon.weaponId == id);
    }
}
