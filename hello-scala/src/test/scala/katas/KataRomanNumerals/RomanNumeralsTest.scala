package katas.KataRomanNumerals

import org.scalatest.FlatSpec
import org.scalatest.matchers.ShouldMatchers

class RomanNumeralsTest extends FlatSpec with ShouldMatchers {

	val romanNumerals = RomanNumerals
	
	/*"A Roman Numeral Converter" should "retrieve a String with I when 1 is passed" in {
	 	romanNumerals.convert(1) should equal ("I")
	}
	
	it should "retrieve a String with IV when 4 is passed" in {
		romanNumerals.convert(4) should equal ("IV")
	}
	
	it should "retrieve a String with IX when 9 is passed" in {
		romanNumerals.convert(9) should equal ("IX")
	} */
	
	"A method RomanNumerals.decomposeDecimals" should "('1') should return ('1')" in {
	 	romanNumerals.decomposeDecimals("1".toList, 0) should equal ("1"::Nil)
	}

	it should "('10') should return ('10', '0')" in {
	 	romanNumerals.decomposeDecimals("10".toList, 1) should equal ("10"::"0"::Nil)
	}
	
	it should "('100') should return ('100', '0', '0')" in {
	 	romanNumerals.decomposeDecimals("100".toList, 2) should equal ("100"::"0"::"0"::Nil)
	}
	
	it should "('154') should return ('100', '50', '4')" in {
	 	romanNumerals.decomposeDecimals("154".toList, 2) should equal ("100"::"50"::"4"::Nil)
	}
	
	it should "('9720') should return ('9000', '700', '20', '0')" in {
	 	romanNumerals.decomposeDecimals("9720".toList, 3) should equal ("9000"::"700"::"20"::"0"::Nil)
	}
	
	it should "('100000') should return ('100000', '0', '0', '0', '0', '0')" in {
	 	romanNumerals.decomposeDecimals("100000".toList, 5) should equal ("100000"::"0"::"0"::"0"::"0"::"0"::Nil)
	}
	
	it should "('5721639') should return ('5000000', '700000', '20000', '1000', '600', '30', '9')" in {
	 	romanNumerals.decomposeDecimals("5721639".toList, 6) should equal ("5000000"::"700000"::"20000"::"1000"::"600"::"30"::"9"::Nil)
	}

	"A method RomanNumerals.composeRoman" should "(List('1')) should return ('I')" in {
	 	romanNumerals.composeRoman(List("1")) should equal ("I")
	}
	
	it should "(List('2')) should return ('II')" in {
	 	romanNumerals.composeRoman(List("2")) should equal ("II")
	}
	
	it should "(List('3')) should return ('III')" in {
	 	romanNumerals.composeRoman(List("3")) should equal ("III")
	}
	
	it should "(List('4')) should return ('IV')" in {
	 	romanNumerals.composeRoman(List("4")) should equal ("IV")
	}
	
	it should "(List('5')) should return ('V')" in {
	 	romanNumerals.composeRoman(List("5")) should equal ("V")
	}	
	
	it should "(List('6')) should return ('VI')" in {
	 	romanNumerals.composeRoman(List("6")) should equal ("VI")
	}
	
	it should "(List('7')) should return ('VII')" in {
	 	romanNumerals.composeRoman(List("7")) should equal ("VII")
	}	
	
	it should "(List('8')) should return ('VIII')" in {
	 	romanNumerals.composeRoman(List("8")) should equal ("VIII")
	}	
	it should "(List('9')) should return ('IX')" in {
	 	romanNumerals.composeRoman(List("9")) should equal ("IX")
	}
	
	it should "(List('10', '0')) should return ('X')" in {
	 	romanNumerals.composeRoman(List("10", "0")) should equal ("X")
	}
	
	it should "(List('10', '1')) should return ('XI')" in {
	 	romanNumerals.composeRoman(List("10", "1")) should equal ("XI")
	}
	
	it should "(List('100', '10', '1')) should return ('CXI')" in {
	 	romanNumerals.composeRoman(List("100", "10", "1")) should equal ("CXI")
	}
	
	// "A method RomanNumerals.getContext" should "('1') should return (1)" in {
	 	// romanNumerals.getContext("1") should equal (1)
	// }
	
	// it should "('2') should return (2)" in {
	 	// romanNumerals.getContext("2") should equal (2)
	// }
	
	// it should "('20') should return (2)" in {
	 	// romanNumerals.getContext("20") should equal (2)
	// }
	
	// it should "('300') should return (3)" in {
	 	// romanNumerals.getContext("300") should equal (3)
	// }
}