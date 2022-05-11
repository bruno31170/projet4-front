import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../model/user';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css'],
})
export class BoardAdminComponent implements OnInit {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  content: string;
  listUser: Array<any>;
  listUserFiltrer: Array<any>;
  critere: string = '';
  critereSelect: string = '';

  ngOnInit(): void {
    this.authService.getAllUser().subscribe((data) => {
      this.listUser = data;
      this.listUserFiltrer = data;
    });
  }

  public onChange(event): void {
    //event will give you full breif of action
    this.critereSelect = event.target.value;
    console.log(this.critereSelect);
  }

  deleteItem(id: number, index: number) {
    this.authService.deleteUser(id).subscribe((response) => {});
    this.listUser.splice(index, 1);

    //window.location.reload();
  }

  filter() {
    if (this.critereSelect == '') {
      this.listUserFiltrer = this.listUser;
    }
    if (this.critereSelect == 'username') {
      this.listUserFiltrer = this.listUser.filter(
        (u) => u.username == this.critere
      );
    }
    if (this.critereSelect == 'email') {
      this.listUserFiltrer = this.listUser.filter(
        (u) => u.email == this.critere
      );
    }
    if (this.critereSelect == 'role') {
      this.listUserFiltrer = this.listUser.filter(
        (u) => u.roles[0].name == this.critere
      );
    }
  }
}
