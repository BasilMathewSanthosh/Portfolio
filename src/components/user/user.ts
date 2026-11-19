import { Component,inject} from "@angular/core";
import { personalDataFormat } from "../../models/home_interface";
import { HomeService } from "../../services/home_service";

@Component ({
    selector : 'user-compo',
    imports : [],
    templateUrl : './user.html',
    styleUrl : './user.css'
})

export class UserCard {
    homeService = inject(HomeService);
    userData : personalDataFormat = this.homeService.getHomeData();
}