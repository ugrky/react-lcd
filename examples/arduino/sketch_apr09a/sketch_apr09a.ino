#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  
  lcd.begin(16, 2);
  lcd.cursor();
  lcd.clear();
  Serial.begin(9600);
  
}

void loop() {
  receiveData();
}

int countOfBytesReceived = 0;

void receiveData() {
  
  while(Serial.available() > 0) {
    Serial.read();
    countOfBytesReceived++;
    lcd.setCursor(0, 0);
    lcd.print(countOfBytesReceived);
  }

}
