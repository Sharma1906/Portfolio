import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  imports: [CommonModule],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  skills=[
    'java',
    'python',
    'Html',
    'CSS',
    'JavaScript',
    'Node.js',
    'Angular',

  ]
}

