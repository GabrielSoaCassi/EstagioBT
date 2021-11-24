using System;

namespace Consultor.Class
{
    public class Estrutura : Mensagem
    {
        public void ChamaConsultor()
        {
            string opcaoSair;
            var naoSair = false;
            while (!naoSair)
            {
                ApresentaOpcoes();
                string opcao;
                opcao = Console.ReadLine();
                switch (opcao)
                {
                    case "1":
                        Apresentacao("Funcionario");
                        
                        var pesquisaFuncionario = new Funcionario();
                        pesquisaFuncionario.PesquisarTabelaFuncionario();
                        break;
                    case "2":
                        Apresentacao("Historico");
                        var pesquisaHistorico = new Historico();
                        pesquisaHistorico.PesquisarHistorico();
                        break;
                    case "3":
                        Apresentacao("Turno");
                        var pesquisaTurno = new Turno();
                        pesquisaTurno.PesquisarTabelaTurno();
                        break;
                    case "4":
                        Apresentacao("TiposHorario");
                        var pesquisaHorario = new TipoHorario();
                        pesquisaHorario.PesquisarTabelaHorarios();
                        break;
                    case "5":
                        var registrar = new Historico();
                        registrar.RegistrarPonto();
                        break;
                    default:
                        Console.BackgroundColor = ConsoleColor.Red;
                        Console.WriteLine(" ------- OPÇÃO INVALIDA -------");
                        Console.ResetColor();
                        continue;
                }
                Console.BackgroundColor = ConsoleColor.Green;
                Console.WriteLine("Deseja Sair? [S/n]");
                Console.ResetColor();
                opcaoSair = Console.ReadLine().ToUpper();
                if (opcaoSair == "S") naoSair = true;
                else
                {
                    naoSair = false;
                    Console.Clear();
                }
            }
        }
    }
}

