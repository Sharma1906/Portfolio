import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {

  Projects=[{
title:'Portfolio Website',
description:'A personal portfolio website built using Angular to showcase my projects and skills.',
technologies:['Angular','TypeScript','HTML','CSS'],
  }]
}
