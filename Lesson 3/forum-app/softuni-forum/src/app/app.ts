import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header.component';
import { Footer } from './shared/footer/footer.component';
import { ThemeBoard } from './features/themes/theme-board/theme-board.component';
import { PostBoard } from './features/posts/post-board/post-board.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ThemeBoard, PostBoard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'softuni-forum';
}
