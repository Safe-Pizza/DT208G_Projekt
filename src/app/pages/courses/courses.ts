import { Component, inject } from '@angular/core';
import { CoursesService } from '../../services/courses-service';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-courses',
  imports: [MatIconModule],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {
    //Tillgång till service
  coursesService= inject(CoursesService);

  //hämtar kurserna från service
  courses = this.coursesService.getCourses();
}
