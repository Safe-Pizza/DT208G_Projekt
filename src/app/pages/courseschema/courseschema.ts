import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CourseschemaService } from '../../services/courseschema-service';

@Component({
  selector: 'app-courseschema',
  imports: [MatIconModule],
  templateUrl: './courseschema.html',
  styleUrl: './courseschema.scss',
})
export class Courseschema {
  //Tillgång till service
    courseschemaService = inject(CourseschemaService)

  ngOnInit() {
    this.courseschemaService.loadFromLocalStorage();
    const courses = this.courseschemaService.getCourses();

    console.log(courses);
  }
}
