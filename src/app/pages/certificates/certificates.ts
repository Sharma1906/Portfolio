import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificates',
  imports: [CommonModule],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates {
  certificates = [
    { title: 'Angular Fundamentals', issuer: 'Udemy', date: '2026', link: '#' },
    { title: 'JavaScript Essentials', issuer: 'Coursera', date: '2025', link: '#' },
    { title: 'Java Programming', issuer: 'HackerRank', date: '2025', link: '#' },
  ];
}