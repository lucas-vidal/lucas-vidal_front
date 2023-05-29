import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateSkillComponent } from './components/update-skill/update-skill.component';
import { AppComponent } from './app.component';
import { UpdateEducationComponent } from './components/update-education/update-education.component';
import { UpdateExperienceComponent } from './components/update-experience/update-experience.component';
import { UpdateProyectComponent } from './components/update-proyect/update-proyect.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'skill/:id', component: UpdateSkillComponent},
  {path: 'education/:id', component: UpdateEducationComponent},
  {path: 'experience/:id', component: UpdateExperienceComponent},
  {path: 'proyect/:id', component: UpdateProyectComponent},
  {path: '', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

