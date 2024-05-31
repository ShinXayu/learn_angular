import { Component } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './model/face-snap';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  faceSnaps! : FaceSnap[];
  ngOnInit()
  {
    this.faceSnaps = [
      new FaceSnap(
        'Archibald',
        'Mon meilleur ami depuis toujours !',
        new Date(),
        10,
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      ),
      new FaceSnap(
        'Three Rock Mountain',
        'Un endroit magnifique pour les randonnées.',
        new Date(),
        6,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',

      ),
      new FaceSnap(
        'Un bon repas',
        'Mmmh que c\'est bon !',
        new Date(),
        158,
        'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      )
    ];
    this.faceSnaps[1].setlocation('à la montagne');
  }
}
