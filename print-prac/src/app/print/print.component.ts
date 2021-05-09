import { Post, PrintService } from './services/print.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {
  posts: Post[] = [];

  constructor(private service: PrintService) { }

  ngOnInit(): void {
    this.service.getPosts().subscribe(x => {
      this.posts = x;
    });

  }
  print() {
    const printContent = document.getElementById("componentID");
    window.print()
  }
}
