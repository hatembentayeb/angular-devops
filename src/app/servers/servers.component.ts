import { Component, OnInit } from '@angular/core';
import {ServerComponent} from '../server/server.component'

@Component({
  selector: 'app-servers',
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "no servers was created !";
  serverName = '';
  serverCreated = false;
  servers = [];

  constructor() { 

    setTimeout(()=>{
      this.allowNewServer = true; 
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    return this.serverCreationStatus="server was created ! Name is : "+this.serverName;
  }

  // onUpdateServerName(event : Event){
  //  return this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
