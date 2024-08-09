import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { DiagnosticoComponent } from './componentes/diagnostico/diagnostico.component';
import { JustificanteComponent } from './componentes/justificante/justificante.component';

const routes: Routes = [
  {path:'usuario',component:UsuarioComponent},
  {path:'alumno',component:AlumnoComponent},
  {path:'diagnostico',component:DiagnosticoComponent},
  {path:'justificante',component:JustificanteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
