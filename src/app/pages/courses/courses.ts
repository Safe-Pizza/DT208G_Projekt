import { Component, inject } from '@angular/core';
import { CoursesService } from '../../services/courses-service';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {
    //Tillgång till service
  coursesService= inject(CoursesService);

  //hämtar kurserna från service
  courses = this.coursesService.getCourses();
}
