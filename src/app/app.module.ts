import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from '@angular/forms';
import { AppComponent } from "./app.component";
import { EmotionsModule } from "./emotions/emotions.module";
import { EmotionsComponent } from "./emotions/emotions.component";
import { RouterModule } from "@angular/router";
import { EmotionsRouteGuard } from "./emotionsRoute.guard";
import { HttpClientModule }   from '@angular/common/http';

@NgModule({
    imports: [BrowserModule, EmotionsModule, FormsModule,  HttpClientModule,
        RouterModule.forRoot([
            { path: "emotions", component: EmotionsComponent,
              canActivate: [EmotionsRouteGuard]
            },
            { path: "**", redirectTo: "/emotions" }
        ])
    ],
    providers: [EmotionsRouteGuard],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }
