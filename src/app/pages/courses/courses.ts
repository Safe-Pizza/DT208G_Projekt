import { Component, computed, inject, signal } from '@angular/core';
import { CoursesService } from '../../services/courses-service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { Course } from '../../interfaces/course';
import { CourseschemaService } from '../../services/courseschema-service';

@Component({
  selector: 'app-courses',
  imports: [MatIconModule, FormsModule],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})

export class Courses {
  //Tillgång till service
  coursesService = inject(CoursesService);
  courseschemaService = inject(CourseschemaService)

  //hämtar kurserna från service
  courses = this.coursesService.getCourses();

  //variabler för antal kurser
  allCourses: number = 0; //totalt antal kurser
  counter: number = 0; //antal visade kurser

  //sökinput
  searchInput = signal("");

  //filtrering från söktext
  coursesFiltered = computed(() => {
    const search = this.searchInput().trim().toLowerCase();
    this.allCourses = this.courses().length;
    if (!search) {
      this.counter = this.courses().length;
      return this.courses();
    }

    const filteredSearch = this.courses().filter(c =>
      c.courseName.toLowerCase().includes(search) ||
      c.courseCode.toLowerCase().includes(search)
    );
        this.counter = filteredSearch.length;
        return filteredSearch;
  })

  optionInput = signal("");

  coursesFilteredBySubject = computed(() => {
    const option = this.optionInput().trim().toLowerCase();
    if (!option) {
      return this.courses();
    }

    return this.courses().filter(c =>
      c.subjectCode.toLowerCase().includes(option)
    );
  })

  /*coursesCategorized(): Course[] {
    const subject = this.optionInput.trim().toLocaleLowerCase();

    return this.courses().filter(s =>
      s.subjectCode.toLocaleLowerCase().includes(subject)
    );
  }*/
}
