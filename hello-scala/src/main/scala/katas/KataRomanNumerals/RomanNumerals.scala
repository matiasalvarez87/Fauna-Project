package katas.KataRomanNumerals

object RomanNumerals {
	
	val simbols = Map(
		0 	 -> "",
		1 	 -> "I",
		5 	 -> "V",
		10 	 -> "X",
		50 	 -> "L",
		100  -> "C",
		500  -> "D",
		1000 -> "M"
	)
	
	// def getSimbol(number:Int):String = {
		// number match {
			// case 0 		=> 	""
			// case 1 		=> 	"I"
			// case 5 		=> 	"V"
			// case 10 	=> 	"X"
			// case 50 	=> 	"L"
			// case 100 	=> 	"C"
			// case 500 	=> 	"D"
			// case 1000 => 	"M"
			// case _ => "."
		// }
	// }
		
	// def convert(number:Int):String = {
		// val decomposedNumber = decomposeDecimals(number)		
	// }
	
	def composeRoman (decimals:List[String]) : String = {
		decimals match {
			case Nil => ""
			case num::Nil => {
				// val headNum = num.head.toInt
				val n = num.toInt
				
				if (simbols.contains(n)) {
					simbols(n)
				} else {
				
					var bfrSmbl = 0
					var aftSmbl = 0
					
					// Encontrar el simbolo anterior y el siguiente con pattern matching
					simbols.keySet foreach { case(key) => {
						if (n > key) {
							bfrSmbl = key
						} else if ((n < key) && aftSmbl == 0) {
							aftSmbl = key
						}
					} }
					
					simbols(bfrSmbl)
				}
				
				// if ((n == 1) || (n % 5 == 0)) // Si existe la representacion en romanos
					// simbols(num.toInt)
				// else {
					// var romanUnit = 0
					// var beforeRomanUnit = 0
					
					// if ((n % 5) > 3) {
						// romanUnit = 5
						// beforeRomanUnit = 1
						// simbols(beforeRomanUnit) + simbols(romanUnit)
					// } else {
						// romanUnit = 1
						// simbols(romanUnit) * n
					// }
				// }
			}
			case num::tail => simbols(num.toInt) + composeRoman(tail)
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
	
	/**
	 * Descompone el numero decimal en decena, centena, etc.
	 * ej: 1982 => [1000, 900, 80, 2]
	 * */
	def decomposeDecimals (num:List[Char], length:Int) : List[String] = {
		num match {
			case Nil => Nil
			case head::Nil => head.toString :: Nil
			case '0'::tail => '0'.toString :: decomposeDecimals(tail, length-1)
			case head::tail => (head + "0" * length) :: decomposeDecimals(tail, length-1)
		}
	}
} 