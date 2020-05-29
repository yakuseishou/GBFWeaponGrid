using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GBF_Data_Service.Data
{
    public interface IGBFDatabaseSettings
    {
        public string GBFCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
