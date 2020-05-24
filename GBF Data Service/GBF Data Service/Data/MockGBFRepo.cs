using GBF_Data_Service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GBF_Data_Service.Data
{
    public class MockGBFRepo : IGBFRepo
    {
        public IEnumerable<GBFWeapon> GetAppCommands()
        {
            var gbfWeapons = new List<GBFWeapon>
            {
                new GBFWeapon{weaponId = 1, weaponName="Gisla",weaponType="Spear"},
                new GBFWeapon{weaponId = 2, weaponName="Gisla2",weaponType="Spear"},
                new GBFWeapon{weaponId = 3, weaponName="Gisla3",weaponType="Spear"},
                new GBFWeapon{weaponId = 4, weaponName="Gisla4",weaponType="Spear"},
            };

            return gbfWeapons;
        }

        public GBFWeapon GetWeaponById(int id)
        {
            return new GBFWeapon
            {
                weaponId = id,
                weaponName = "Gisla",
                weaponType = "Spear"
            };
        }
    }
}
