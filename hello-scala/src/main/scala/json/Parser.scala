package json

import net.liftweb.json._
import net.liftweb.json.JsonParser._
import json.model.Person

class Parser {
  
  implicit val formats = DefaultFormats // Brings in default date formats etc.

  def parsePerson() : List[Person] = {
    
    var str:String = """[
         { "name": "joe",
           "address": {
             "street": "Bulevard",
             "city": "Helsinki"
           },
           "children": [
             {
               "name": "Mary",
               "age": 5
               "birthdate": "2004-09-04T18:06:22Z"
             },
             {
               "name": "Mazy",
               "age": 3
             }
           ]
         },
         { "name": "john",
           "address": {
             "street": "Bulevard",
             "city": "Helsinki"
           },
           "children": [
             {
               "name": "Mary",
               "age": 5
               "birthdate": "2004-09-04T18:06:22Z"
             },
             {
               "name": "Mazy",
               "age": 3
             }
           ]
         },
       ]"""
    
    val json = JsonParser.parse(str)
       
    return json.children.map(_.extract[Person])
  }
}