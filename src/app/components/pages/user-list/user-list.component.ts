import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { SHARED_IMPORTS } from '../../../shared/shared-imports'; // adjust path as needed

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [SHARED_IMPORTS],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  filtered: any[] = [];
  search = '';
  sortField = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  page = 1;
  pageSize = 5;
  currentPage: number = 1;
  loading: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: (res) => {
        if (res && res.length > 0) {
          this.users = this.filtered = res;
        } else {
          this.users = [];
        }
        this.loading = false;
      },
      error: () => {
        this.users = [];
        this.loading = false;
      },
    });
  }

  filterUsers() {
    this.filtered = this.users.filter(
      (u) =>
        u.name.toLowerCase().includes(this.search.toLowerCase()) ||
        u.email.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  getNestedValue(obj: any, path: string): string {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj) || '';
  }

  sortBy(field: string) {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    this.filtered.sort((a, b) => {
      const valA = this.getNestedValue(a, field).toLowerCase();
      const valB = this.getNestedValue(b, field).toLowerCase();

      return this.sortDirection === 'asc'
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    });
  }

  get paginatedUsers() {
    const start = (this.page - 1) * this.pageSize;
    return this.filtered.slice(start, start + this.pageSize);
  }

  totalPages() {
    return Math.ceil(this.filtered.length / this.pageSize);
  }
}
