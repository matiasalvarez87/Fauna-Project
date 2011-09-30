package com.example.test
 
import org.scalatest.FlatSpec
import org.scalatest.matchers.ShouldMatchers
import com.example.Widget
import com.borachio.scalatest.MockFactory
import com.example.DBRepository
 
class WidgetTest extends FlatSpec with ShouldMatchers with MockFactory{
 
	val mockDB = mock[DBRepository]
	
	val widget = new Widget(mockDB)
	
	"A Widget" should "be blue" in {
	 	widget.colour should equal ("Blue")
	}
	
	it should "be Awesome" in {
		widget.disposition should equal ("Awesome")
	}
	
	it should "fail when doBadThings" in {
		evaluating { widget.doBadThings } should produce [UnsupportedOperationException]
	}
	
	it should "salutate when sayHello" in {
		
		inSequence{
			mockDB expects 'findName returning "Scala"
		}
		
		widget.sayHello should equal ("Hello Scala!")
	}
	
	
	
}
