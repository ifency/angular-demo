import { Component, OnInit, Input } from "@angular/core";
import { Hero } from "../hero";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.scss"],
})
export class HeroDetailComponent implements OnInit {
  // @Input() hero?: Hero;
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    console.log(
      "🚀 ~ file: hero-detail.component.ts ~ line 28 ~ HeroDetailComponent ~ getHero ~ id",
      id
    );
    this.heroService.getHero(id).subscribe((hero) => {
      console.log(
        "🚀 ~ file: hero-detail.component.ts ~ line 35 ~ HeroDetailComponent ~ this.heroService.getHero ~ hero",
        hero
      );
      this.hero = hero;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
