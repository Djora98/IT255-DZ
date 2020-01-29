import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-box',
  templateUrl: './video-box.component.html',
  styleUrls: ['./video-box.component.scss']
})
export class VideoBoxComponent implements OnInit {

  @Output() videoToDelete: EventEmitter<Video> = new EventEmitter();
  @Output() updateVideo: EventEmitter<Video> = new EventEmitter();

  public link: any;
  @Input() video: any;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.embedUrl();
  }

  public embedUrl(){
    this.link = this._sanitizer.bypassSecurityTrustResourceUrl(this.video.link);
  }

  public deleteVideo(): void{
    this.videoToDelete.emit(this.video);
  }

  public changeContent(): void{
    this.updateVideo.emit(this.video);
  }

}
