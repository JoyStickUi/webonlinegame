import {Figure} from "./Figure/Figure.js";
import {Rect} from "../../Components/Rect/Rect.js";

export class Spearman extends Figure{
    constructor(isEnemy){
        super("Spearman", "/static/game/Images/Spearman.png", isEnemy);
        this.animation.createState("dead", new Rect(0, 1292, 64, 46), 6);
        if(isEnemy){
            this.animation.createState("default", new Rect(0, 334, 64, 46), 1);
            this.animation.createState("attack", new Rect(0, 334, 64, 46), 8);
        }else{
            this.animation.createState("default", new Rect(0, 462, 64, 46), 1);
            this.animation.createState("attack", new Rect(0, 462, 64, 46), 8);
        }
        this.animation.add_on_end_state_handler("attack", (animation)=>{
            animation.restoreState();
        });
        this.animation.add_on_end_state_handler("dead", (animation)=>{
            animation.restoreState();
        });
    }

    updateStates(){
        this.animation.deleteStatesAndHandlers();
        this.animation.createState("dead", new Rect(0, 1292, 64, 46), 6);
        if(this.isEnemy){
            this.animation.createState("default", new Rect(0, 334, 64, 46), 1);
            this.animation.createState("attack", new Rect(0, 334, 64, 46), 8);
        }else{
            this.animation.createState("default", new Rect(0, 462, 64, 46), 1);
            this.animation.createState("attack", new Rect(0, 462, 64, 46), 8);
        }
        this.animation.add_on_end_state_handler("attack", (animation)=>{
            animation.restoreState();
        });
        this.animation.add_on_end_state_handler("dead", (animation)=>{
            animation.restoreState();
        });
    }
}