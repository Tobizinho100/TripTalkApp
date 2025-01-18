import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  favorites: boolean[] = Array(6).fill(false);


  places = [
    { name: 'Mount Fuji, Tokyo', location: 'Japan', rating: 4.8, image: 'assets/imagem/mount-fuji.jpg' },
    { name: 'Tower Eifell, Paris', location: 'France', rating: 4.7, image: 'assets/imagem/paris.jpg' },
    { name: 'Casa de la Moneda, Madrid', location: 'Spain', rating: 4.7, image: 'assets/imagem/casa-de-la-moneda.jpg' },
    { name: 'Ponte de Lima, Viana do Castelo', location: 'Portugal', rating: 4.7, image: 'assets/imagem/ptl.jpg' },
    { name: 'Big Ben, London', location: 'England', rating: 4.7, image: 'assets/imagem/big-ben.jpg' },
    { name: 'The Coliseum, Roma', location: 'Italy', rating: 4.7, image: 'assets/imagem/coliseu-roma.jpg' },
  ];

  constructor(private router: Router) {}

  goToProfile() {
    this.router.navigate(['/profile']);
  }
  ngOnInit() {}


  toggleFavorite(index: number) {
    this.favorites[index] = !this.favorites[index];
  }
}
