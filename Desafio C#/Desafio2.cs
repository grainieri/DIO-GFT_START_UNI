using System;

class Program
{

    static void DesafioDois()
    {
        int numeroDeFigurinhas = Int32.Parse(Console.ReadLine());
        int numeroDeFigurinhasCompradas = Int32.Parse(Console.ReadLine());
        int totalDeFigurinhasPreenchidas = 0;
        int[] albumDeFigurinha = new int[numeroDeFigurinhasCompradas];

        int figurinhasRepetidas = 0;

        for (int i = 0; i <= numeroDeFigurinhasCompradas - 1; i++)
        {
            albumDeFigurinha[i] = Convert.ToInt32(Console.ReadLine());
        }

        for (int i = 0; i < albumDeFigurinha.Length; i++)
        {
            if (i == albumDeFigurinha.Length - 1)
            {
                if (albumDeFigurinha[i].Equals(albumDeFigurinha[0]))
                {
                    figurinhasRepetidas++;
                }
                else
                {
                    totalDeFigurinhasPreenchidas++;
                }
            }
            else
            {
                if (albumDeFigurinha[i].Equals(albumDeFigurinha[i + 1]))
                {
                    figurinhasRepetidas++;
                }
                else
                {
                    totalDeFigurinhasPreenchidas++;
                }

            }
        }
        numeroDeFigurinhas -= totalDeFigurinhasPreenchidas;

        Console.WriteLine(numeroDeFigurinhas);
    }
}

