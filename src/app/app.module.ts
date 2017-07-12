import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ConsultaEmpenhoComponent } from './consulta-empenho/consulta-empenho.component';
import { BreadcumbComponent } from './breadcumb/breadcumb.component';
import { EmpenhoService } from './consulta-empenho/empenho.service';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component'
import { WizardModule } from 'ng2-archwizard';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaEmpenhoComponent,
    BreadcumbComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    BootstrapModalModule,
    BsDropdownModule.forRoot(),
     WizardModule
  ],
  providers: [EmpenhoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
