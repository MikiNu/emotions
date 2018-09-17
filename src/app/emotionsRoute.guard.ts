import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, RouterStateSnapshot,
    Router
} from "@angular/router";
import { EmotionsComponent } from "./emotions/emotions.component";

@Injectable()
export class EmotionsRouteGuard {

    private firstNavigation = true;

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component != EmotionsComponent) {
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    }
}
