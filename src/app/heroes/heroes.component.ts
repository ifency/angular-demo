import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
} from "@angular/core";
import { Hero } from "../hero";
// import { HEROES } from '../mock-heroes';
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";
import { CountdownTimerComponent } from "../countdown-timer/countdown-timer.component";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"],
})
export class HeroesComponent implements OnInit {
  @ViewChild(CountdownTimerComponent)
  private timerComponent!: CountdownTimerComponent;

  seconds() {
    return 0;
  }

  ngAfterViewInit() {
    setTimeout(() => (this.seconds = () => this.timerComponent.seconds), 0);
  }

  start() {
    this.timerComponent.start();
  }
  stop() {
    this.timerComponent.stop();
  }
  hero: Hero = {
    id: 1,
    name: "Windstorm",
  };
  heroes: Hero[] = [];
  selectedHero?: Hero;

  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = agreed;
  }
}
