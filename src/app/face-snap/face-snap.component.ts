import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  desscription!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  snapTexte!: string;
  snapped!: boolean;

  ngOnInit() {
    this.title = 'Archibald';
    this.desscription = 'Mon meilleur ami depuis tout petit';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl =
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.snapTexte = 'Oh, Snap';
    // this.snapped = false;
  }

  onAddSnap() {
    if (this.snapTexte === 'Oh, Snap') {
      this.snaps++;
      this.snapTexte = 'Oops, unSnap';
    } else {
      this.snaps--;
      this.snapTexte = 'Oh, Snap';
    }
    /*
    if (this.snapped == false) {
      this.snaps++;
      this.snapTexte = 'Oops, unSnap';
      this.snapped = true;
    } else {
      this.snaps--;
      this.snapTexte = 'Oh, Snap';
      this.snapped = false;
    }
    */
  }
}
