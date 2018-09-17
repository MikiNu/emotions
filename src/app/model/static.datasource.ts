import { Injectable } from "@angular/core";
import { Emotion } from "./Emotion.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class StaticDataSource {

    constructor(private http: HttpClient){ }

    getEmotions(){
        return this.http.get('smiles.json')
    }
    updateEmotion(emotion: Emotion) {
        return this.http.post('updateEmotion.php', emotion);
    }
}
