import { Component } from '@angular/core';
import { StatCard } from '../../../shared/components/stat-card/stat-card';

@Component({
  selector: 'app-dashboard',
  imports: [StatCard],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  stats = [
    { title: 'Customers', statValue: '0', icon: 'groups' },
    { title: 'Leads', statValue: '0', icon: 'trending_up' },
    { title: 'Tasks', statValue: '0', icon: 'task' },
    { title: 'Revenue', statValue: '$0', icon: 'payments' },
  ];
}
