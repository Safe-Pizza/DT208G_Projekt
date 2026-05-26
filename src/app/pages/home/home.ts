import { Component, computed, inject } from '@angular/core';
import { CoursesService } from '../../services/courses-service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  coursesService = inject(CoursesService);

  //hämtar kurserna från service
  courses = this.coursesService.getCourses();

  //unik array för ämnen till select input
  uniqueSubjects = computed(() =>
    Array.from(new Map(this.courses().map(({ subjectCode, subject }) => [subjectCode, { subjectCode, subject }])).values()));

  //bild
  homeImage = "/images/CF017226.IIQ.p.jpg";
}
