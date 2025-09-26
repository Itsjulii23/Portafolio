import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header-component/pages/header-component';
import { AboutmeComponent } from './aboutme-component/pages/aboutme-component';
import { ExperienceComponent } from './experience-component/pages/experience-component';
import { ProjectComponent } from "./project-component/pages/project-component";
import { ContactComponent } from './contact-component/pages/contact-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    AboutmeComponent,
    ExperienceComponent,
    ProjectComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('portafolio');
}
