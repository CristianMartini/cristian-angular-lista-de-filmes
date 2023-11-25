import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cristian-filmes';
  categoriaSelecionada: string = '';

  listaDeFilmes = [
    // Categoria: Ação
    { categoria: 'Ação', titulo: 'Rambo', urlImagem: 'https://m.media-amazon.com/images/M/MV5BODBmOWU2YWMtZGUzZi00YzRhLWJjNDAtYTUwNWVkNDcyZmU5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg' },
    { categoria: 'Ação', titulo: 'John Wick', urlImagem: 'https://m.media-amazon.com/images/I/81J1DaRKzUL._AC_UF1000,1000_QL80_.jpg' },
    { categoria: 'Ação', titulo: 'Mad Max: Estrada da Fúria', urlImagem: 'https://play-lh.googleusercontent.com/NZVX-GzNvaGUocLGSQNUtDB-H084hgOQpRIYmg_sTEYV2BQzgH0Iqm9jCJe47u3nSqA' },
    { categoria: 'Ação', titulo: 'O Exterminador do Futuro', urlImagem: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/92/90/99/20224665.jpg' },
    { categoria: 'Ação', titulo: 'Velozes e Furiosos 10', urlImagem: 'https://br.web.img2.acsta.net/pictures/23/05/16/22/53/0156803.jpg' },

    // Categoria: Romance
    { categoria: 'Romance', titulo: 'Titanic', urlImagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/2/22/Titanic_poster.jpg/240px-Titanic_poster.jpg' },
    { categoria: 'Romance', titulo: 'Orgulho e Preconceito', urlImagem: 'https://m.media-amazon.com/images/I/A1nnf-d831L._AC_UF1000,1000_QL80_.jpg' },
    { categoria: 'Romance', titulo: 'Diário de uma Paixão', urlImagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/91/21/92/20135014.jpg' },
    { categoria: 'Romance', titulo: 'La La Land', urlImagem: 'https://musicart.xboxlive.com/7/eae03f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080' },
    { categoria: 'Romance', titulo: 'A Culpa é das Estrelas', urlImagem: 'https://br.web.img3.acsta.net/pictures/14/01/23/14/12/101764.jpg' },

    // Categoria: Comédia
    { categoria: 'Comédia', titulo: 'O Grande Lebowski', urlImagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/96/35/42/20461724.jpg' },
    { categoria: 'Comédia', titulo: 'Superbad', urlImagem: 'https://m.media-amazon.com/images/I/61nHD0I77KL._AC_UF894,1000_QL80_.jpg' },
    { categoria: 'Comédia', titulo: 'As Branquelas', urlImagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/d/de/White_chicks.jpeg/230px-White_chicks.jpeg' },
    { categoria: 'Comédia', titulo: 'Se Beber, Não Case', urlImagem: 'https://m.media-amazon.com/images/I/618FiO7H+sS._AC_UF894,1000_QL80_.jpg' },
    { categoria: 'Comédia', titulo: 'Zumbilândia', urlImagem: 'https://upload.wikimedia.org/wikipedia/pt/a/a3/Zombieland-poster.jpg' },

    // Categoria: Ficção Científica
    { categoria: 'Ficção Científica', titulo: 'Interestelar', urlImagem: 'https://cdn.30porcento.com.br/capas/9788583110545.jpg' },
    { categoria: 'Ficção Científica', titulo: 'Blade Runner 2049', urlImagem: 'https://cinepop.com.br/wp-content/uploads/2017/08/blade-runner-2049-poster.jpg' },
    { categoria: 'Ficção Científica', titulo: 'Matrix', urlImagem: 'https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG' },
    { categoria: 'Ficção Científica', titulo: 'Guerra nas Estrelas', urlImagem: 'https://m.media-amazon.com/images/I/91Zoo4L63NL._AC_UF1000,1000_QL80_.jpg' },
    { categoria: 'Ficção Científica', titulo: 'O Quinto Elemento', urlImagem: 'https://br.web.img2.acsta.net/pictures/14/02/07/20/09/270960.jpg' },

    // Categoria: Terror
    { categoria: 'Terror', titulo: 'O Exorcista', urlImagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a6/The_Exorcist_1973.jpg/225px-The_Exorcist_1973.jpg' },
    { categoria: 'Terror', titulo: 'It: A Coisa', urlImagem: 'https://br.web.img3.acsta.net/pictures/17/03/30/22/44/345288.jpg' },
    { categoria: 'Terror', titulo: 'Invocação do Mal', urlImagem: 'https://play-lh.googleusercontent.com/WIoB_3qrwsJEpSs1k7Yu-BagH0x5TTD5GWvo8bsUrI8Db7PK6PGz8ALFlE96nyJvX5mMKIlX-E8S6SYjpzA' },
    { categoria: 'Terror', titulo: 'O Iluminado', urlImagem: 'https://m.media-amazon.com/images/I/81Q+pJi4NjL._AC_UF1000,1000_QL80_.jpg' },
    { categoria: 'Terror', titulo: 'Hereditário', urlImagem: 'https://cinepop.com.br/wp-content/uploads/2018/05/hereditary_ver3_xlg-768x1024.jpg' }
  ];


  get filmesFiltrados() {
    return this.listaDeFilmes.filter(filme => filme.categoria.toLowerCase() === this.categoriaSelecionada.toLowerCase());
  }

  Categoria(categoria: string) {
    this.categoriaSelecionada = categoria;
  }
}
