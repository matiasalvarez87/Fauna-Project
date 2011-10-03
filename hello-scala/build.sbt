name := "A Project"
 
version := "0.1"
 
scalaVersion := "2.9.1"
 
checksums in update := Nil
 
// set Ivy logging to be at the highest level
ivyLoggingLevel := UpdateLogging.Full
 
libraryDependencies ++= Seq(
  "org.scalatest" %% "scalatest" % "1.6.1" % "test",
  "com.borachio" %% "borachio-scalatest-support" % "latest.integration",
  "net.liftweb" %% "lift-json" % "2.4-M4" % "compile->default"
)