using System;
using System.Globalization;

namespace DIODesafios
{
    class Program
    {
        static void DesafioTres()
        {
            String p1; 
            String p2;
            String p3;
            string[,] arrayVertebrado = new string[2, 2] { {/*ave*/ "carnivoro", "onivoro" }, {/*mamifero*/ "onivoro", "herbivoro" } };
            string[,] arrayInvertebrado = new string[2, 2] { {/*inseto*/ "hematofago", "herbivoro" }, {/*anelideo*/ "hematofago", "onivoro" } };

            p1 = Console.ReadLine();
            p2 = Console.ReadLine();
            p3 = Console.ReadLine();

            if (p1 == "vertebrado")
            {
                if (p2 == "ave")
                {
                    if (p3 == "carnivoro")
                    {
                        Console.WriteLine("aguia");
                    }
                    else //onivoro
                    {
                        Console.WriteLine("pomba");
                    }
                }
                else //mamifero
                {
                    if (p3 == "onivoro")
                    {
                        Console.WriteLine("homem");
                    }
                    else //herbivoro
                    {
                        Console.WriteLine("vaca");
                    }
                }
            }
            else //invertebrado
            {
                if (p2 == "inseto")
                {
                    if (p3 == "hematofago")
                    {
                        Console.WriteLine("pulga");
                    }
                    else //herbivoro
                    {
                        Console.WriteLine("lagarta");
                    }
                }
                else //anelideo
                {
                    if (p3 == "hematofago")
                    {
                        Console.WriteLine("sanguessuga");
                    }
                    else //onivoro
                    {
                        Console.WriteLine("minhoca");
                    }
                }
            }
        }
    }
}
