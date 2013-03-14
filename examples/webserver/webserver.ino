// This is a demo of the WebServer  with the Ether Card fork (EncSocket)
// 2013-01-28 <epromtech@gmail.com> http://opensource.org/licenses/mit-license.php

#include <EncSocket.h>


#define PAYLOAD  300 // MAX PAYLOAD 1500
#define TCPOFFSET 54

static byte mymac[] = {0xDD,0xDD,0xDD,0x00,0x13,0x01};
static byte myip[] = { 192,168,0,19 };
byte Ethernet::buffer[PAYLOAD+TCPOFFSET];


void setup () {
  
    Serial.begin(9600);
    enc.begin(sizeof Ethernet::buffer, mymac,10);
    enc.staticSetup(myip);
    //enc.hisport = 8085;
    Serial.println("OK");
}



void loop () {
  word len = enc.packetReceive();
  word pos = enc.packetLoop(len);
  if (pos){
      enc.httpServerReplyAck();
      processer((char *)Ethernet::buffer + pos);
  }  
    
}



void processer(char *buf){
  
  Serial.println(buf);
  sendHeader();
 
  for(uint8_t i = 0; i < 50; i++){
    sendToBrowser("Lorem Ipsum Dolor, Morbi vitae venenatis risus.<br>");
  }
  


  memcpy_P(enc.tcpOffset(), "\0", 0); // send the terminate flag
  enc.httpServerReply_with_flags(4,TCP_FLAGS_ACK_V|TCP_FLAGS_FIN_V);
  
}




void sendToBrowser(char *str, uint16_t bsize){
    uint16_t cur;
    for(cur = 0; cur < bsize; cur++) Ethernet::buffer[cur+TCPOFFSET] = str[cur];
    enc.httpServerReply_with_flags(bsize,TCP_FLAGS_ACK_V|TCP_FLAGS_PUSH_V);
}


void sendToBrowser(char *str){
    sendToBrowser(str, strlen(str));
}

void sendNumToBrowser(uint32_t num){
    char cnum[6];
    itoa(num, cnum, 10);
    sendToBrowser(cnum);
}


void sendHeader(){
  sendToBrowser("HTTP/1.0 200 OK\r\nContent-Type: text/html\r\n\r\n");
}
