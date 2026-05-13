import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CourseschemaService } from '../../services/courseschema-service';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-courseschema',
  imports: [MatIconModule],
  templateUrl: './courseschema.html',
  styleUrl: './courseschema.scss',
})
export class Courseschema {
  //Tillgång till service
  courseschemaService = inject(CourseschemaService);

  //variabel för kurser
  courses: Course[] = []

  //variabel för kurspoäng
  points: number = 0;

  //funktion vid init
  ngOnInit() {
    this.getCourses()
  }

  //hämta och lagra kurser från localStorage
  getCourses() {
    //hämta kurser från local storage
    this.courseschemaService.loadFromLocalStorage();
    this.courses = this.courseschemaService.getCourses();

    this.countCoursePoint(); //beräkna kurspoäng
  }

  //beräknar och lagrar kurspoäng
  countCoursePoint() {
    this.points = this.courseschemaService.countCoursePoint();
  }
}
