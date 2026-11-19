import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortHeader } from '../components/header/port-header';
import { UserCard } from '../components/user/user';

@Component({
  imports: [RouterOutlet, PortHeader, UserCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-demo-project1');
}
