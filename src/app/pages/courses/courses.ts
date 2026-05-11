import { Component, computed, inject, signal } from '@angular/core';
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

  //sökinput
  searchInput = signal("");

  //filtrering från söktext
  coursesFiltered = computed(() => {
    const search = this.searchInput().trim().toLowerCase();
    if (!search) {
      return this.courses();
    }

    return this.courses().filter(c =>
      c.courseName.toLowerCase().includes(search) ||
      c.courseCode.toLowerCase().includes(search)
    );
  })
}
