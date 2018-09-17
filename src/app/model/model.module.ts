import { NgModule } from "@angular/core";
import { EmotionRepository } from "./emotion.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers: [EmotionRepository, StaticDataSource]
})

export class ModelModule { }
