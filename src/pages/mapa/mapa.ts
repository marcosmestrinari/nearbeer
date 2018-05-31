import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 

declare var google;



@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
//   styleUrls: ['../assets/css/estilo.css']
})
export class MapaPage {
  
    options : GeolocationOptions;
    currentPos : Geoposition;
    places : Array<any>;
    @ViewChild('map') mapElement: ElementRef;
    map: any;
  constructor(public navCtrl: NavController, private geolocation : Geolocation) {
// this.getMinhaPosicao();
  }

  getMinhaPosicao(){
    this.options = {
    enableHighAccuracy : false
    };
    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

        this.currentPos = pos;     

        // console.log(pos);
        this.addMapa(pos.coords.latitude,pos.coords.longitude);

    },(err : PositionError)=>{
        // console.log("Erroo : " + err.message);
    ;
    })
  }


  getLugar(latLng)
  {
      var service = new google.maps.places.PlacesService(this.map);
      let request = {
          location : latLng,
          radius : 1000 ,
          types: ["bar", "pub", "Conveniência", "lanchonete", "serve festa", "restaurant", "beer", "cerveja", "padaria","panificadora", "mercado", "bebida"]
      };
      return new Promise((resolve,reject)=>{
          service.nearbySearch(request,function(results,status){
              if(status === google.maps.places.PlacesServiceStatus.OK)
              {
                  resolve(results);    
              }else
              {
                  reject(status);
              }

          }); 
      });

  }


  criarMarcador(place)
  {
      let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: place.geometry.location
      });   
      let content = '<p>' + place.name + '<p>'; // "<p>nome do ponto !</p>";          
      let infoWindow = new google.maps.InfoWindow({
      content: content
      });

      google.maps.event.addListener(marker, 'click', () => {
          infoWindow.close();
          infoWindow.open(this.map, marker);
      });
  } 

  addMarcador(){
  
      let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
      });
  
      let content = "<p>Cervejas em um raio de <br>1000 metros a partir daqui !</p>";          
      let infoWindow = new google.maps.InfoWindow({
      content: content
      });
  
      google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
      });
  
  }

  addMapa(lat,long){
      let latLng = new google.maps.LatLng(lat, long);
  
      let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      }
  
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  
      this.getLugar(latLng).then((results : Array<any>)=>{
          this.places = results;
          for(let i = 0 ;i < results.length ; i++)
          {
              this.criarMarcador(results[i]);
          }
      },(status)=>console.log(status));
  
      this.addMarcador();
  
  }


  ionViewDidEnter(){
     this.getMinhaPosicao();


 }  
 

}

