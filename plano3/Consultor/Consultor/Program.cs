using System;
using Consultor.Class;

namespace Consultor
{
    class Program
    {
        static void Main(string[] args)
        {
            var iniciar = new Estrutura();
            iniciar.ChamaConsultor();
            Console.WriteLine("Pressione Enter pra sair");
            Console.ReadKey();
        }
    }
}

