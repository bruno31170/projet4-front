import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  content: string;
  // nord: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.userService.getNord().subscribe(
    //   (data) => {
    //     this.nord = JSON.stringify(data);
    //   },
    //   (err) => {
    //     this.nord = JSON.parse(err.error).message;
    //   }
    // );
  }
}
