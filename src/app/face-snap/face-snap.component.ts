import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle,
            NgClass,
          DatePipe,  CommonModule, UpperCasePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  constructor(private faceSnapsService: FaceSnapsService, private router: Router) {}
  snapped!: boolean;
  snapButtonText!: string;
  @Input() faceSnap!: FaceSnap;
  ngOnInit(): void
  {
    this.snapButtonText = "Oh Snap!"
    this.snapped = false
  };

  onAddSnap() {
    if (this.snapped == false)
    {
      this.snap()
    }
    else
    {
      this.unSnap()
    }

  }
  unSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.snapped = false;
  }
  
  snap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = 'Oops, unSnap!';
    this.snapped = true;
  }

  onViewFaceSnap()
  {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }


}

