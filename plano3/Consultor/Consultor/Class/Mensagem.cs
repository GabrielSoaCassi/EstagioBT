using System;

namespace Consultor.Class
{
    public class Mensagem
    {
        public void Apresentacao(string nomeTabela)
        {
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("Bem Vindo Ao Consultor");
            Console.WriteLine("Carregando a Tabela ");
            Console.ResetColor();
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("---------------------------------------------");
            Console.WriteLine($"Tabela de {nomeTabela}");
            Console.WriteLine("---------------------------------------------");
            Console.ResetColor();
        }
        public void ApresentaOpcoes()
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("Selecione a opção que deseja acessar\n" +
                " Digite 1 para consultar a tabela Funcionario\n" +
                " Digite 2 para consultar a Tabela Historico\n" +
                " Digite 3 para consultar a Tabela Turno\n" +
                " Digite 4 para consultar a tabela Tipo Horario\n" +
                " Digite 5 para registrar um horario");
            Console.ResetColor();
        }
    }
}
