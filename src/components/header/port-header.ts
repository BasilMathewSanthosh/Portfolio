import { Component } from "@angular/core";
import {Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector : 'header-compo',
    imports : [RouterLink, RouterLinkActive],
    templateUrl : './port-header.html',
    styleUrl : './port_header.css'
})

export class PortHeader {
    
}