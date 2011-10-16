package katas.KataRomanNumerals

object RomanNumerals {
	
/*	def _convert(number:Int):String = {
		number match {
			case 1 		=> 	"I"
			case 5 		=> 	"V"
			case 10 	=> 	"X"
			case 50 	=> 	"L"
			case 100 	=> 	"C"
			case 500 	=> 	"D"
			case 1000 => 	"M"
		}
	}
	
	
	def convert(number:Int):String = {
		
		val strNumber = number.toString
		
		strNumber
	}
	
	def decompose (num:Seq[Char]) : List[Int] = {
		
		
	}*/
	
	def decomposeDecimals (num:List[Char], length:Int) : List[String] = {
		
		num match {
			case Nil => Nil
			case head::Nil => head.toString :: Nil
			case '0'::tail => '0'.toString :: decomposeDecimals(tail, length-1)
			case head::tail => (head + "0" * length) :: decomposeDecimals(tail, length-1)
		}
	}
	
	/*def convert(number:Int):String = {
		
		number match {
			case 1 => "I"
			case 2 => "I" + convert(1)
			case 3 => convert(2) + convert(1)
			case 4 => convert(1) + convert(5)
			case 5 => "V"
			case 6 => convert(5) + convert(1)
			case 7 => convert(5) + convert(2)
			case 8 => convert(5) + convert(3)
			case 9 => convert(1) + convert(10)
			case 10 => "X" 
		}
		
	}*/
} 