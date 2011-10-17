package katas.KataRomanNumerals

object RomanNumerals {
	
	def getSimbol(number:Int):String = {
		number match {
			case 0 		=> 	""
			case 1 		=> 	"I"
			case 5 		=> 	"V"
			case 10 	=> 	"X"
			case 50 	=> 	"L"
			case 100 	=> 	"C"
			case 500 	=> 	"D"
			case 1000 => 	"M"
			case _ => "."
		}
	}
		
	// def convert(number:Int):String = {
		// val decomposedNumber = decomposeDecimals(number)		
	// }
	
	def composeRoman (decimals:List[String]) : String = {
		decimals match {
			case Nil => ""
			case num::Nil => {
				// val headNum = num.head.toInt
				// if ((headNum == 1) || (headNum % 5 == 0))
					// getSimbol(num.toInt)
				// else
					// getSimbol(1) * 2
				getSimbol(num.toInt)
			}
			case num::tail => getSimbol(num.toInt) + composeRoman(tail)
		}
	}
	
	// def _convert(num:String) : String = {
		// num match {
			// case head::tail => {
				// if (((head == 1) || (head % 5 == 0)) && (head != 0))
					// getSimbol(num.toInt)
			// }
		// }
	// }
	
	def decomposeDecimals (num:List[Char], length:Int) : List[String] = {
		num match {
			case Nil => Nil
			case head::Nil => head.toString :: Nil
			case '0'::tail => '0'.toString :: decomposeDecimals(tail, length-1)
			case head::tail => (head + "0" * length) :: decomposeDecimals(tail, length-1)
		}
	}
} 