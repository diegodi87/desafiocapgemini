package quest�o3;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner nome  = new Scanner ( System.in );
		String nomeanam;
		System.out.println("Digite uma palavra:");
		nomeanam = nome.nextLine();
		nome.close();
			
		partes (nomeanam);
	
		}

		static void partes(String s){
			HashMap<String, Integer> map= new HashMap<>();

			for(int i = 0; i < s.length(); i++){
				for(int j = i; j < s.length(); j++){
					char[] valC = s.substring(i, j+1).toCharArray();
					Arrays.sort(valC);
					String val = new String(valC);
					if (map.containsKey(val))
						map.put(val, map.get(val)+1);
					else
						map.put(val, 1);
				}
			}
			int anagramPairCount = 0;
			for(String key: map.keySet()){
				int n = map.get(key);
				anagramPairCount += (n * (n-1))/2;
			}
			System.out.println(anagramPairCount);
		}
	


	}

