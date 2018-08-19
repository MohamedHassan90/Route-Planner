import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public imagesUrl;

  constructor() { }

  // On Initializing this component, the below photos will be loaded in the HTML page.
  ngOnInit() {
    this.imagesUrl = [
      'https://i0.wp.com/bongyatra.com/wp-content/uploads/2017/11/egypt-touch-ground-ark-s-zleri-ark-s-z-touch-ground-5sziks1b.jpg?resize=850%2C491',
      'https://i.ytimg.com/vi/7A1q7v4btbk/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Qi-fQ_eW--w/maxresdefault.jpg',
      'https://i.ytimg.com/vi/T4RiFAHHfcM/maxresdefault.jpg',
      'https://i.ytimg.com/vi/qs2OTVZjZXg/maxresdefault.jpg',
      'https://i.ytimg.com/vi/MDnzJmzHcMc/maxresdefault.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMwU3W97--cG2XkfGpTN0hcq4iTqGr0SlbvIaP1AH7ONX6L09VDQ',
      'http://www.medicabroad.com/Uploads/images/Mexico_Tourism.jpg',
      'http://www.youthincmag.com/wp-content/uploads/2018/06/canada-visa.png',
      'https://www.urdutrans.com/wp-content/uploads/2017/07/Urdu-translation-Services-in-USA.jpg',
      'http://static.asiawebdirect.com/m/bangkok/portals/bali-indonesia-com/homepage/pagePropertiesOgImage/bali.jpg.jpg',
      'https://i.ytimg.com/vi/RLlu2wCGoEA/maxresdefault.jpg',
      'https://i.ytimg.com/vi/6gL5DoE_4Ss/maxresdefault.jpg'
    ];
  }

}
