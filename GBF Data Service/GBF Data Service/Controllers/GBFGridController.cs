using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace GBF_Data_Service.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GBFGridController : ControllerBase
    {

        private readonly ILogger<GBFGridController> _logger;

        public GBFGridController(ILogger<GBFGridController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public GBFWeapon Post([FromBody]int weaponId)
        {
            //fetch data from MongoDB based on weaponId
            return new GBFWeapon();
        }
    }
}
