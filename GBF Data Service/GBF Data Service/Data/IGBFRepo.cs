using GBF_Data_Service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GBF_Data_Service.Data
{
    interface IGBFRepo
    {
        IEnumerable<GBFWeapon> GetAppCommands();
        GBFWeapon GetWeaponById(int id);
    }
}
