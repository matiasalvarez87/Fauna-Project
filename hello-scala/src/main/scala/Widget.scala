package com.example
 
class Widget(db:DBRepository) {
  def colour = "Blue"
  def disposition = "Awesome"
  	
  def doBadThings = throw new UnsupportedOperationException()
  
  def sayHello:String = "Hello " + db.findName + "!"
}

trait DBRepository {
	
	def findName:String
	
}
