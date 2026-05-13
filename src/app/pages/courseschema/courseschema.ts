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

  courses: Course[] = []

  points: number = 0;

  ngOnInit() {
    this.getCourses()
  }

  getCourses() {
    //hämta kurser från local storage
    this.courseschemaService.loadFromLocalStorage();
    this.courses = this.courseschemaService.getCourses();

    this.countCoursePoint();
  }

  //uppdatering av kurspoäng till DOM
  countCoursePoint() {
    this.points = this.courseschemaService.countCoursePoint();
  }
}
