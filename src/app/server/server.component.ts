import { Component } from "@angular/core";

@Component({
    selector : 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverID = 10;
    serverStatus : String = 'offline';

    constructor(){
     this.serverStatus =  Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
         return this.serverStatus;
    }
    
    getColor(){
        if (this.serverStatus == 'offline'){
            return 'red';
        }else{
            return 'green';
        }
        

    }
}