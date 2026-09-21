import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EXERCICES } from '../../pages/exercices/exercices.routes';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  readonly exercices = EXERCICES;
}
