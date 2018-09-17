import { Injectable } from "@angular/core";
import { Emotion } from "./emotion.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()

export class EmotionRepository {
    private emotions: Emotion[] = [];
    private categories: string[] = [];
    private statusMessage: string;
    constructor(private dataSource: StaticDataSource) {
        dataSource.getEmotions().subscribe((data:any) => this.emotions=data["smileList"]);
    }
    getEmotions(category: string = null): Emotion[] {
        return this.emotions
            .filter(p => category == null || category == p.category);
    }
    getEmotion(id: number): Emotion {
        return this.emotions.find(p => p.id == id);
    }
    getCategories(): string[] {
        return ["love","delete"];
    }
    editEmotion(emotion: Emotion) {
        this.dataSource.updateEmotion(emotion).subscribe((data:any) => {
        this.statusMessage = 'Данные успешно обновлены'
        });
    }
}
