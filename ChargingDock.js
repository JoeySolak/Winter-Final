//defines how all charging stations work.
function ChargingDock(){
//Instance variables
    this.ports=["undefined","undefined","undefined","undefined","undefined";"undefined","undefined";"undefined"]; //finish from instructions
    this.leds=["red","red","red","red","red","red","red","red"]; //finish from instructions


//Instance Fucntions
    this.plug = function(dvc){

        //type in here
    };

    this.unplug = function(dvcIdx){
        //type in here
    };

    this.chargeAll = function(min){
        //type in here
    };


}

//defines the testing code
function main(){
    let flemphone = new Device("phone",3000,10000);
   console.log(flemphone.power());
   flemphone.on();
   flemphone.wake();
   flemphone.use(90);
   console.log(flemphone.power());
   flemphone.sleep();
   flemphone.use(300);
   console.log(flemphone.power());
   flemphone.off();
   flemphone.use(300);
   console.log(flemphone.power());
   flemphone.charge(60);
   console.log(flemphone.power());
   flemphone.charge(1000);
   console.log(flemphone.power());

}

//runs the main code
main();
