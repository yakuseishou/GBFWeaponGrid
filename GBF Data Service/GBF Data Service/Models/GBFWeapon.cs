using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GBF_Data_Service.Models
{
    public class GBFWeapon
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }
        public string weaponId { get; set; } = "1";
        public String weaponName { get; set; } = "Gisla";
        public String weaponType { get; set; } = "Sword";
        public int attackPoint { get; set; } = 999999;
        public int hitPoint { get; set; } = 9999;
        public String element { get; set; } = "Dark";
        public int weaponLevel { get; set; } = 150;
        public int weaponSkillLevel { get; set; } = 15;
        public String weaponSkill1 { get; set; } = "Enmity";
        public String weaponSkill2 { get; set; } = "";
        public String weaponSkill3 { get; set; } = "";
        public String ougiAbilityDescription { get; set; } = "Massive Dark Damage to one enemy. Inflict blind";
        public int uncapLevel { get; set; } = 4;
        public String imgUrl { get; set; } = "https://gbf.wiki/Gisla#/media/File:Weapon_b_1040200700.png";
    }
}
