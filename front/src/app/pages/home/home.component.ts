import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  users: any[] = [
    { name: 'John Doe', email: 'john@example.com', department: 'IT', phone: '123-456-7890' },
    { name: 'Jane Smith', email: 'jane@example.com', department: 'HR', phone: '987-654-3210' },
    // Ajoutez plus d'utilisateurs ici si nécessaire
  ];

  deleteUser(user: any) {
    // Logique pour supprimer l'utilisateur
  }

  editUserDetails(user: any) {
    // Logique pour éditer les détails de l'utilisateur
  }

}
