import { Component } from "@angular/core";
import { Emotion } from "../model/emotion.model";
import { EmotionRepository } from "../model/emotion.repository";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Component({
    selector: "emotions",
    templateUrl: "emotions.component.html"
})

export class EmotionsComponent {
    public selectedCategory:any = null;
    public emotionsPerPage = 200;
    public selectedPage = 1;

    constructor(private repository: EmotionRepository,
                private router: Router) { }

    get emotions(): Emotion[] {
        let pageIndex = (this.selectedPage - 1) * this.emotionsPerPage
        return this.repository.getEmotions(this.selectedCategory)
        .slice(pageIndex, pageIndex + this.emotionsPerPage);
    }
    get categories(): string[] {
        return this.repository.getCategories();
    }
    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
        this.changePage(1);
    }
    changePage(newPage: number) {
        this.selectedPage = newPage;
    }
    changePageSize(newSize: number) {
        this.emotionsPerPage = Number(newSize);
        this.changePage(1);
    }
    get pageCount(): number {
        return Math.ceil(this.repository
            .getEmotions(this.selectedCategory).length / this.emotionsPerPage)
    }
    editEmotion(type:string, emotion: Emotion){
      if (type){
        emotion.category = type;
      }else{
        emotion.category ="";
      }
      return this.repository.editEmotion(emotion);
    }
}
