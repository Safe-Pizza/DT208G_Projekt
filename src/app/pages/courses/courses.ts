import { Component, computed, inject, signal } from '@angular/core';
import { CoursesService } from '../../services/courses-service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
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

  //filtrering från söktext
  searchInput = signal(""); //input

  coursesFiltered = computed(() => {
    const search = this.searchInput().trim().toLowerCase(); //trimmad input
    this.allCourses = this.courses().length; //antal kurser i array
    if (!search) { //kontroll om ej input finns
      this.counter = this.courses().length;
      return this.courses();
    }

    //om input finns
    const filteredSearch = this.courses().filter(c => //filtererar utifrån input
      c.courseName.toLowerCase().includes(search) ||
      c.courseCode.toLowerCase().includes(search)
    );
    this.counter = filteredSearch.length;
    return filteredSearch;
  })

  //unik array för ämnen till select input
  uniqueSubjects = computed(() =>
    Array.from(
      new Map(
        this.coursesFiltered().map(({ subjectCode, subject }) => [
          subjectCode,
          { subjectCode, subject }
        ])
      ).values()
    )
  );

  optionInput = signal("");

  //Sortering
  //räknare för sorteringsordning
  codeClickCount = 0;
  nameClickCount = 0;
  pointsClickCount = 0;
  subjectClickCount = 0;

  //sortering efter kurskod, växlar mellan stigande och fallande ordning
  sortByCode() {
    this.codeClickCount++;
    if (this.codeClickCount % 2 !== 0) {
      return this.coursesFiltered().sort((a, b) => a.courseCode.localeCompare(b.courseCode));
    } else {
      return this.coursesFiltered().sort((a, b) => b.courseCode.localeCompare(a.courseCode));
    }
  }

  //sortering efter kursnamn, växlar mellan stigande och fallande ordning
  sortByName() {
    this.nameClickCount++;
    if (this.nameClickCount % 2 !== 0) {
      return this.coursesFiltered().sort((a, b) => a.courseName.localeCompare(b.courseName));
    } else {
      return this.coursesFiltered().sort((a, b) => b.courseName.localeCompare(a.courseName));
    }
  }

  //sortering efter poäng, växlar mellan stigande och fallande ordning
  sortByPoints() {
    this.pointsClickCount++;
    if (this.pointsClickCount % 2 !== 0) {
      return this.coursesFiltered().sort((a, b) => { return a.points - b.points });
    } else {
      return this.coursesFiltered().sort((a, b) => { return b.points - a.points });
    }
  }

  //sortering efter ämne, växlar mellan stigande och fallande ordning
  sortBySubject() {
    this.subjectClickCount++;
    if (this.subjectClickCount % 2 !== 0) {
      return this.coursesFiltered().sort((a, b) => a.subject.localeCompare(b.subject));
    } else {
      return this.coursesFiltered().sort((a, b) => b.subject.localeCompare(a.subject));
    }
  }
}
