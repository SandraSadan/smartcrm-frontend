import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  readonly menuItems = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard',
    },
    {
      label: 'Customers',
      icon: 'groups',
      route: '/customers',
    },
    {
      label: 'Leads',
      icon: 'trending_up',
      route: '/leads',
    },
    {
      label: 'Tasks',
      icon: 'task',
      route: '/tasks',
    },
    {
      label: 'Settings',
      icon: 'settings',
      route: '/settings',
    },
  ];
}
