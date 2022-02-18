import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import {SkillsComponent} from './skills/skills.component';
import {BioComponent} from './bio/bio.component';
import {EducationComponent} from './education/education.component';
const routes: Routes = [
    {path:'', redirectTo:'bio', pathMatch:'full'},
    {path:'work' , component:WorkComponent},
    {path:'skills', component: SkillsComponent},
    {path: 'bio', component: BioComponent},
    {path:'education', component: EducationComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
