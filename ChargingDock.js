//defines how all charging stations work.
const Device = require("./Device.js");

function ChargingDock(){
//Instance variables
    this.ports=[undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]; //finish from instructions
    this.leds=["red","red","red","red","red","red","red","red"]; //finish from instructions


//Instance Fucntions
    this.plug = function(dvc){
      for(let s = 0; s<8; s++){
        if(this.leds[s] == "red"){
          this.port[s] = dvc;
          this.leds[s] = "yellow";
        }
      }
        //type in here
    };

    this.unplug = function(dvcIdx){
	if(this.leds[dvcIdx]== "yellow" || this.leds[dvcIdx] == green){
let temp = this.ports[dvcIdx];
this.ports[dvcIdx] = undefined;
this.leds[dvcIdx] = "red";
return temp;
        //type in here
    };


    this.chargeAll = function(min){
for(let s=0; s < this.ports.length; s++){
	if(this.leds[s] = "yellow" || this.leds[s] == "green"){
		this.ports[s].charge(min);
}
if(this.ports[s].juice >= 0.99){
	this.leds[s] = "green";
}
        //type in here
    };


}

//defines the testing code
function main(){
  let cd = new ChargingDock();

      let d1 = new Device("phone",3000,10000);
      let d2 = new Device("laptop",3000,15000);
      let d3 = new Device("laptop",5000,15000);
      let d4 = new Device("tablet",3000,15000);

      d1.use(90);
      d2.use(120);
      d3.use(90);
      d4.use(240);

      cd.plug(d1);
      cd.plug(d2);
      cd.plug(d3);
      cd.plug(d4);

      cd.chargeAll(60);

      cd.unplug(0);
      cd.unplug(1);

}

//runs the main code
main();
