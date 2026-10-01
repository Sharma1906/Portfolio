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
    {title: 'Gen AI', issuer: 'Google Cloud', date: 'March 6,2025', link: 'image/Coursera JRTG4MPVIAFC.pdf' },
    { title: 'Angular Fundamentals', issuer: 'Udemy', date: '2026', link: '#' },
    { title: 'Java Programming', issuer: 'HackerRank', date: '2025', link: '#' },
    {title:'cloud infarastructure', issuer:'ORACLE', date:'apr 3,2025', link:'#'},
    {title:'Apache Flink', issuer:'Data Flair', date:'March 27,2024', link:'#'},
    {title:'Data Science', issuer:'Brain  o Vision', date:' feb 0 26,2024', link:'#'},

  ];
}
