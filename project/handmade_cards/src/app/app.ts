import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavCategory } from './layout/nav-category/nav-category.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NavCategory],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'handmade_cards';
}
