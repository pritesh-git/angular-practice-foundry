import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ReqresUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface ReqresResponse {
  data: ReqresUser[];
}

@Component({
  selector: 'app-users',
  imports: [FormsModule],
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  users: ReqresUser[] = [];
  loading = true;
  loadError = '';
  editUser: ReqresUser | null = null;
  deleteUser: ReqresUser | null = null;
  readonly apiUrl = 'https://reqres.in/api/users?page=1';

  ngOnInit(): void {
    void this.loadUsers();
  }

  async loadUsers(): Promise<void> {
    this.loading = true;
    this.loadError = '';
    try {
      const response = await fetch(this.apiUrl, {
        headers: { 'x-api-key': 'reqres-free-v1' },
      });
      if (!response.ok) {
        throw new Error(`The user list returned ${response.status}.`);
      }
      const result = (await response.json()) as ReqresResponse;
      this.users = result.data;
    } catch (error) {
      this.loadError = error instanceof Error ? error.message : 'Unable to load users right now.';
    } finally {
      this.loading = false;
    }
  }

  startEdit(user: ReqresUser): void {
    this.editUser = { ...user };
  }

  saveUser(): void {
    if (!this.editUser) return;
    const updated = { ...this.editUser };
    this.users = this.users.map(user => user.id === updated.id ? updated : user);
    this.editUser = null;
  }

  confirmDelete(): void {
    if (!this.deleteUser) return;
    this.users = this.users.filter(user => user.id !== this.deleteUser?.id);
    this.deleteUser = null;
  }
}