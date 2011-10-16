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
	
	"A Roman Numeral Converter" should "return ('1') when decomposeDecimals('1') is called" in {
	 	romanNumerals.decomposeDecimals("1".toList, 0) should equal ("1"::Nil)
	}

	it should "return ('10', '0') when decomposeDecimals('10') is called" in {
	 	romanNumerals.decomposeDecimals("10".toList, 1) should equal ("10"::"0"::Nil)
	}
	
	it should "return ('100', '0', '0') when decomposeDecimals('100') is called" in {
	 	romanNumerals.decomposeDecimals("100".toList, 2) should equal ("100"::"0"::"0"::Nil)
	}
	
	it should "return ('100', '50', '4') when decomposeDecimals('154') is called" in {
	 	romanNumerals.decomposeDecimals("154".toList, 2) should equal ("100"::"50"::"4"::Nil)
	}
	
	it should "return ('9000', '700', '20', '0') when decomposeDecimals('9720') is called" in {
	 	romanNumerals.decomposeDecimals("9720".toList, 3) should equal ("9000"::"700"::"20"::"0"::Nil)
	}
	
	it should "return ('100000', '0', '0', '0', '0', '0') when decomposeDecimals('100000') is called" in {
	 	romanNumerals.decomposeDecimals("100000".toList, 5) should equal ("100000"::"0"::"0"::"0"::"0"::"0"::Nil)
	}
	
	it should "return ('5000000', '700000', '20000', '1000', '600', '30', '9') when decomposeDecimals('5721639') is called" in {
	 	romanNumerals.decomposeDecimals("5721639".toList, 6) should equal ("5000000"::"700000"::"20000"::"1000"::"600"::"30"::"9"::Nil)
	}
}