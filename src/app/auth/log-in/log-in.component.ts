import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  showError: boolean = false;
  sendValue(data: any) {
    if (data) {
      console.log(data, 'clicked');
      localStorage.setItem('token', '@48487hvf#hgyufgyu665$');
      this.router.navigate(['/product-list']);
    } else {
      this.showError = true;
    }
  }
}
