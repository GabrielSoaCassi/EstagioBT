using System;
using System.Data;
using System.Data.SqlClient;

namespace Consultor.Class
{
    class TipoHorario : ConexaoSql
    {
        public void PesquisarTabelaHorarios()
        {
            var tipoHorarioTabela = new SqlDataAdapter("SELECT * FROM TipoHorario", ConectarSql());
            var tipoHorarioContent = new DataTable();
            tipoHorarioTabela.Fill(tipoHorarioContent);
            foreach (DataRow item in tipoHorarioContent.Rows)
            {
                Console.Write($"Id: {item["Id"]}\t");
                Console.WriteLine($"Tipo: {item["TipoHorario"]}");
            }
        }
    }
}