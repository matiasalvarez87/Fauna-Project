package json

import org.scalatest.FlatSpec
import org.scalatest.matchers.ShouldMatchers

class ParserTest extends FlatSpec with ShouldMatchers {

	val parser = new Parser()
	
	"An invocation to parser.parsePerson()" should "retrieve a List[Person] with two elements" in {
	 	parser.parsePerson().length should equal (2)
	}
}