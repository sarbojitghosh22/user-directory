import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SHARED_IMPORTS } from '../../../shared/shared-imports'; // adjust path as needed
@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [SHARED_IMPORTS],
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getUserById(id);
    } else {
      alert('User ID is not provided');
    }
  }

  loading: boolean = false;
  user: any; // Accepts user object from parent

  getUserById(id: number) {
    this.loading = true;
    this.userService.getUserById(id).subscribe({
      next: (res) => {
        if (res && Object.keys(res).length > 0) {
          this.user = res;
        } else {
          this.user = null;
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching user by ID:', err);
        this.user = null;
        this.loading = false;
      },
    });
  }
}
