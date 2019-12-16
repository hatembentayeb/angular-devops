import { Component } from "@angular/core";

@Component({
    selector : 'app-server',
    templateUrl: './server.component.html',
    styles : [`
    .online {
        color:white;
    }
    
    `]
})
export class ServerComponent{
    serverID = new Date().toLocaleString();
    serverStatus : String = 'offline';

    constructor(){
     this.serverStatus =  Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
         return this.serverStatus;
    }
    
    getColor(){
        return this.serverStatus === "offline" ? 'red' : 'green';
        

    }
}