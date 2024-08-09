import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AlumnoComponent } from "./componentes/alumno/alumno.component";
import { DiagnosticoComponent } from "./componentes/diagnostico/diagnostico.component";
import { JustificanteComponent } from "./componentes/justificante/justificante.component";
import { UsuarioComponent } from "./componentes/usuario/usuario.component";


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    AlumnoComponent,
    DiagnosticoComponent,
    JustificanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
