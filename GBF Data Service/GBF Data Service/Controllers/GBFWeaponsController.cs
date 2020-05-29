using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GBF_Data_Service.Data;
using GBF_Data_Service.Models;
using GBF_Data_Service.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GBF_Data_Service.Controllers
{
    [Route("api/GBFWeapon")]
    [ApiController]
    public class GBFWeaponsController : ControllerBase
    {
        private readonly GBFDataService _gbfDataService;

        public GBFWeaponsController(GBFDataService dataService)
        {
            _gbfDataService = dataService;
        }

        //GET api/GBFWeapon
        [HttpGet]
        public ActionResult<List<GBFWeapon>> Get() => _gbfDataService.Get();

        //GET api/GBFWeapon/{id}
        [HttpGet("{id}",Name = "GetWeapon")]
        public ActionResult<GBFWeapon> GetGBFWeaponByID(string id)
        {
            var gbfWeapon = _gbfDataService.Get(id);

            if (gbfWeapon == null)
            {
                return NotFound();
            }
            return Ok(gbfWeapon);
        }

    }
}