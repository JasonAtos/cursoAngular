import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Cast } from '../../interfaces/Credits-response';

@Component({
  selector: 'app-cast-slide-show',
  templateUrl: './cast-slide-show.component.html',
  styleUrls: ['./cast-slide-show.component.css']
})
export class CastSlideShowComponent implements OnInit, AfterViewInit {

  @Input() cast: Cast[] = [];
  swiper: Swiper = new Swiper('');

  constructor() { }

  ngOnInit(): void {
    console.log(this.cast);
    
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper', {
      // loop: true,
      slidesPerView: 5.3,
      spaceBetween: 15,
      freeMode: true
    });
  }

}
