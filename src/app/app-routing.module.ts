import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponentComponent } from './input-component/input-component.component';
import { OutputComponentComponent } from './output-component/output-component.component';
const routes: Routes = [
  {path:'',redirectTo:'input',pathMatch:'full'},
  {path:'input', component:InputComponentComponent},
  {path:'afterSubmit',component:OutputComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
