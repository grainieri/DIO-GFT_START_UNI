using System;
using System.Globalization;

namespace DIODesafios
{
    class Desafio1
    {
        static void DesafioUm()
        {
            string tempoGastoVelMedia = Console.ReadLine();
            string[] fields = tempoGastoVelMedia.ToString().Split(' ');
            decimal tempoGasto = Convert.ToDecimal(fields[0]);
            decimal velocidadeMedia = Convert.ToDecimal(fields[1]);
            decimal kmPorLitro = 12;
            decimal custoCombustivel = 0;
            custoCombustivel = (tempoGasto * velocidadeMedia) / kmPorLitro;

            Console.Write("{0:N3}",custoCombustivel);
        }
    }
}
