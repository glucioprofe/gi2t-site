import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {

    constructor(private titleService: Title) {

    }
    ngOnInit(): void {
      this.setPageTitle('GI2T: Inicio');
    }
    private setPageTitle(title: string) {
      this.titleService.setTitle(title);
    }
}
