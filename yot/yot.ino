#include "ArduinoJson.h"
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600); 
}

void loop() {
      StaticJsonDocument<1024> telem;
   
  telem["gas"]= analogRead(0);
  telem["humidity"] =analogRead(1);
  telem["ph"]= analogRead(2);
/*
  telem["gas"]= 12;
  telem["humidity"] =2;
  telem["ph"]= 3;
*/
  Serial.println();
  serializeJson(telem,Serial);
 
  delay(2000);
}
