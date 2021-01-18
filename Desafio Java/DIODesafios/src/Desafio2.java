import java.io.IOException;
import java.util.Scanner;

public class Desafio2 {
	
    public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);
        float idadeDias = leitor.nextFloat();
        
        float anos =  idadeDias / 365;
        float meses =  (idadeDias % 365) / 30;
        float dias = (idadeDias % 365) % 30;
        
        System.out.println((int)anos + " ano(s)");
        System.out.println(Math.round(meses)  + " mes(es)");
        System.out.println((int)dias + " dia(s)");
    }
}