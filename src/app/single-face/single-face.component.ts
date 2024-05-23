import { Component, OnInit } from '@angular/core';
import { FacesnapService } from '../services/facesnap.service';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-single-face',
  templateUrl: './single-face.component.html',
  styleUrls: ['./single-face.component.scss'],
})
export class SingleFaceComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(
    private faceSnapsService: FacesnapService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }

  onViewFaceSnap() {}
}
