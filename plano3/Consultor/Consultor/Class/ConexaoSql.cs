using System;
using System.Data.SqlClient;


namespace Consultor.Class
{
    public class ConexaoSql
    {
        public string stringConnection = @"Data Source=FTDDM-113\SQLEXPRESS;Initial Catalog=FolhaDePonto;Integrated Security=True;";
        public SqlConnection ConectarSql()
        {
            try
            {
                var sqlCon = new SqlConnection(stringConnection);
                return sqlCon;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
        }
    }
}
