import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { FaceSnap } from '../model/face-snap';
import { NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle,
            NgClass],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  snapped!: boolean;
  snapButtonText!: string;
  @Input() faceSnap!: FaceSnap;
  ngOnInit(): void
  {
    this.snapButtonText = "Oh Snap!"
    this.snapped = false
    this.faceSnap.setlocation("")
  };
  removeSnap()
  {
    this.faceSnap.removeSnap()
    this.snapped = false;
    this.snapButtonText = "Oh Snap!"
  }
  onAddSnap() {
    if (this.snapped == false)
    {
      this.faceSnap.addSnap()
      this.snapButtonText = "Oops, un Snap!"
      this.snapped = true
    }
    else
    {
      this.removeSnap()
    }

  }

}

