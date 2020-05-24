using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GBF_Data_Service.Data;
using GBF_Data_Service.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GBF_Data_Service.Controllers
{
    [Route("api/GBFWeapon")]
    [ApiController]
    public class GBFWeaponsController : ControllerBase
    {
        private readonly MockGBFRepo _repository = new MockGBFRepo();
        //GET api/GBFWeapon
        [HttpGet]
        public ActionResult <IEnumerable<GBFWeapon>> GetAllGBFWeapons()
        {
            var gbfWeapons = _repository.GetAppCommands();

            return Ok(gbfWeapons);
        }

        //GET api/GBFWeapon/{id}
        [HttpGet("{id}")]
        public ActionResult <GBFWeapon> GetGBFWeaponByID(int id)
        {
            var gbfWeapons = _repository.GetWeaponById(id);

            return Ok(gbfWeapons);
        }



    }
}