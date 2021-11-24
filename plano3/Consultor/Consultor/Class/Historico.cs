using System;
using System.Data;
using System.Data.SqlClient;

namespace Consultor.Class
{
    class Historico : ConexaoSql
    {
        public void PesquisarHistorico()
        {
            var tabelaHistorico = new SqlDataAdapter("SELECT*FROM Historico", ConectarSql());
            var tabelaHistoricoContent = new DataTable();
            tabelaHistorico.Fill(tabelaHistoricoContent);
            foreach (DataRow item in tabelaHistoricoContent.Rows)
            {
                Console.Write($"Id Funcionario: {item["IdFuncionario"]}\t");
                Console.Write($"Id Tipo Horario:{item["IdTipoHorario"]}\t");
                Console.Write($"Id Turno: {item["IdTurno"]}\t");
                Console.WriteLine($"Hora: {item["Hora"]}");
            }
        }
        public void RegistrarPonto()
        {
            int id, idTurno, idTipoHora;
            SqlConnection sqlCon = new SqlConnection(stringConnection);
            sqlCon.Open();
            
            Console.ForegroundColor = ConsoleColor.Magenta;
            Console.WriteLine("Digite Seu Id de Funcionario");
            Console.ResetColor();
            id = int.Parse(Console.ReadLine());

            Console.ForegroundColor = ConsoleColor.Magenta;
            Console.WriteLine("Digite o Id do seu turno");
            Console.ResetColor();
            idTurno = int.Parse(Console.ReadLine());

            Console.ForegroundColor = ConsoleColor.Magenta;
            Console.WriteLine("Digite o id do tipo de horario");
            Console.ResetColor();
            idTipoHora = int.Parse(Console.ReadLine());

            try
            {
                var registrar = new SqlCommand(
                    $@"INSERT INTO Historico (IdFuncionario, IdTurno, IdTipoHorario, Hora) VALUES({id},{idTurno},{idTipoHora}, GETDATE())", sqlCon);
                registrar.ExecuteNonQuery();
                Console.WriteLine("Ponto Registrado Com Sucesso");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
