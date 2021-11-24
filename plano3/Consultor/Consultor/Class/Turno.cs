using System;
using System.Data;
using System.Data.SqlClient;

namespace Consultor.Class
{
    class Turno : ConexaoSql
    {
        public void PesquisarTabelaTurno()
        {
            var turnoTabela = new SqlDataAdapter("SELECT * FROM Turno", ConectarSql());
            var turnoTabelaContent = new DataTable();
            turnoTabela.Fill(turnoTabelaContent);
            foreach (DataRow item in turnoTabelaContent.Rows)
            {
                Console.Write($"Id: {item["Id"]}\t");
                Console.WriteLine($"Periodo: {item["Periodo"]}\t");
            }
        }
    }
}