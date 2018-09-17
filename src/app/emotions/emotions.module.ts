import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { EmotionsComponent } from "./emotions.component";
import { CounterDirective } from "./counter.directive";
import { RouterModule } from "@angular/router";
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule, Angular2FontawesomeModule, Ng2SearchPipeModule],
    declarations: [EmotionsComponent,CounterDirective],
    exports: [EmotionsComponent]
})
export class EmotionsModule { }
