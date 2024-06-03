import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [NgClass,NgStyle,DatePipe, UpperCasePipe, RouterLink],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent   {
  snapped!: boolean;
  snapButtonText!: string;
  @Input() faceSnap!: FaceSnap;

  constructor(private router : Router, private route : ActivatedRoute,private faceSnapsService: FaceSnapsService)
  {

  }

  ngOnInit(): void
  {

    this.prepareInterface()
    this.getFaceSnap()
  }


  private prepareInterface() {
    this.snapButtonText = 'Oh Snap!';
    this.snapped = false;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    console.log(faceSnapId)
    try {
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
    }
    catch
    {
      this.router.navigateByUrl("facesnaps")
    }
  }

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

}
