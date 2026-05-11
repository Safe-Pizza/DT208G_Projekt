import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { Course } from '../interfaces/course';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  private apiUrl = 'https://matdah.github.io/DT208G---Programmering-i-TypeScript/Moment%205%20-%20Projekt/miun_courses.json';

  http = inject(HttpClient);

  getCourses(): Signal<Course[]> {
    const courses$ = this.http.get<Course[]>(this.apiUrl);
    return toSignal(courses$, { initialValue: [] });
  };
}
