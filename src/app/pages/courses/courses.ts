import { Component, computed, inject, Input, signal } from '@angular/core';
import { CoursesService } from '../../services/courses-service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CourseschemaService } from '../../services/courseschema-service';
import { Course } from '../../interfaces/course';
import { Courseschema } from '../courseschema/courseschema';

@Component({
  selector: 'app-courses',
  imports: [MatIconModule, FormsModule, Courseschema],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})

export class Courses {
  //Tillgång till service
  coursesService = inject(CoursesService);
  courseschemaService = inject(CourseschemaService)


  //hämtar kurserna från service
  courses = this.coursesService.getCourses();

  //varibel för reload
  reload: boolean = false;

  //unik array för ämnen till select input
  uniqueSubjects = computed(() =>
    Array.from(new Map(this.coursesFiltered().map(({ subjectCode, subject }) => [subjectCode, { subjectCode, subject }])).values()));

  //variabler för antal kurser
  allCourses: number = 0; //totalt antal kurser
  counter: number = 0; //antal visade kurser

  //filtrering från söktext
  searchInput = signal(""); //input  
  optionInput = signal("");

  coursesFiltered = computed(() => {
    const search = this.searchInput().trim().toLowerCase(); //trimmad input sök
    const selectOption = this.optionInput(); //input select option
    this.allCourses = this.courses().length; //antal kurser i array
    this.counter = this.courses().length; //antal vid filter

    const filteredSearch = this.courses().filter(course => {

      // sökfilter
      const matchesSearch =
        course.courseName.toLowerCase().includes(search) ||
        course.courseCode.toLowerCase().includes(search);

      // ämnesfilter
      const matchesSubject =
        !selectOption ||
        course.subjectCode === selectOption;

      return matchesSearch && matchesSubject;
    });

    this.counter = filteredSearch.length; //antal vid filter
    return filteredSearch;
  })

  //Sortering
  //räknare för sorteringsordning
  codeClickCount: number = 0;
  nameClickCount: number = 0;
  pointsClickCount: number = 0;
  subjectClickCount: number = 0;

  //sortering efter kurskod, växlar mellan stigande och fallande ordning
  sortByCode(): Course[] {
    this.codeClickCount++;
    if (this.codeClickCount % 2 !== 0) {
      return this.coursesFiltered().sort((a, b) => a.courseCode.localeCompare(b.courseCode));
    } else {
      return this.coursesFiltered().sort((a, b) => b.courseCode.localeCompare(a.courseCode));
    }
  }

  //sortering efter kursnamn, växlar mellan stigande och fallande ordning
  sortByName(): Course[] {
    this.nameClickCount++;
    if (this.nameClickCount % 2 !== 0) {
      return this.coursesFiltered().sort((a, b) => a.courseName.localeCompare(b.courseName));
    } else {
      return this.coursesFiltered().sort((a, b) => b.courseName.localeCompare(a.courseName));
    }
  }

  //sortering efter poäng, växlar mellan stigande och fallande ordning
  sortByPoints(): Course[] {
    this.pointsClickCount++;
    if (this.pointsClickCount % 2 !== 0) {
      return this.coursesFiltered().sort((a, b) => { return a.points - b.points });
    } else {
      return this.coursesFiltered().sort((a, b) => { return b.points - a.points });
    }
  }

  //sortering efter ämne, växlar mellan stigande och fallande ordning
  sortBySubject(): Course[] {
    this.subjectClickCount++;
    if (this.subjectClickCount % 2 !== 0) {
      return this.coursesFiltered().sort((a, b) => a.subject.localeCompare(b.subject));
    } else {
      return this.coursesFiltered().sort((a, b) => b.subject.localeCompare(a.subject));
    }
  }

  //lägg till kurs i ramschema
  addCourseToSchema(course: Course): void {
    this.courseschemaService.addCourseToSchema(course);
    course.added = true;
  }

  //ändra knapp när kurs tillagd i ramschema
  addButtonClicked(button: any): void {
    const buttonEl = document.getElementById(button) as HTMLButtonElement;
    console.log(buttonEl + button);
    buttonEl.textContent = "Tillagd";
    buttonEl.disabled = true;
    buttonEl.classList.add("button-disabled");
  }

  //trigger för reload
  triggerReload(): void {
    this.reload = !this.reload;
  }

  //togglefunktion för div med courseschema component
  toggleSchema(): void {
    const buttonSchemaEl = document.getElementById("show-schema") as HTMLButtonElement; //knapp
    const divEl = document.getElementById("page-schema") as HTMLDivElement; //div courseschema

    if (divEl.style.display === "block") {
      divEl.style.display = "none";
      buttonSchemaEl.innerHTML = "Visa ramschema";
    } else {
      divEl.style.display = "block";
      buttonSchemaEl.innerHTML = "Stäng ramschema";
    }
  }
}
