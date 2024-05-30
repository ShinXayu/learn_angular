import { Component } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapped!: boolean;
  snapButtonText!: string;
  ngOnInit(): void
  {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis toujours !';
    this.createdAt = new Date();
    this.snaps = 5;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.snapButtonText = "Oh Snap!"
    this.snapped = false
  };
  removeSnap()
  {
    this.snapped = false;
    this.snapButtonText = "Oh Snap!"
    this.snaps--;
  }
  onAddSnap() {
    if (this.snapped == false)
    {
      this.snaps++;
      this.snapButtonText = "Oops, un Snap!"
      this.snapped = true
    }
    else
    {
      this.removeSnap()
    }

  }

}

