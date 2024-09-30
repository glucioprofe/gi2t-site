import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.sass']
})
export class EventosComponent implements OnInit {

  constructor(private titleService: Title) {

  }
  ngOnInit(): void {
    this.setPageTitle('GI2T: Eventos');
  }
  private setPageTitle(title: string) {
    this.titleService.setTitle(title);
  }

}
