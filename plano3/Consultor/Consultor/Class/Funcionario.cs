using System;
using System.Data;
using System.Data.SqlClient;

namespace Consultor.Class
{
    class Funcionario : ConexaoSql
    {
        public void PesquisarTabelaFuncionario()
        {
            var funcionarioTabela = new SqlDataAdapter("SELECT Id,Nome FROM Funcionario", ConectarSql());
            var funcionarioTabelaContent = new DataTable();
            funcionarioTabela.Fill(funcionarioTabelaContent);
            foreach (DataRow item in funcionarioTabelaContent.Rows)
                InserirMensagem(item);
        }
        private static void InserirMensagem(DataRow item)
        {
            Console.Write($"Id: {item["Id"]}\t");
            Console.WriteLine($"Nome: {item["Nome"]}\t");
        }
    }
}
