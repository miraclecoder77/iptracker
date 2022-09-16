@Output() map$: EventEmitter<Map> = new EventEmitter;
@Output() zoom$: EventEmitter<number> = new EventEmitter;
@Input() options: MapOptions = {
                    layers:[tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                      opacity: 0.7,
                      maxZoom: 19,
                      detectRetina: true,
                      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    })],
                    zoom:1,
                    center:latLng(0,0)
};
public map!: Map;
public zoom!: number;

ngOnDestroy() {
  this.map.clearAllEventListeners;
  this.map.remove();
};

onMapReady(map: Map) {
  this.map = map;
  this.map$.emit(map);
  this.zoom = map.getZoom();
  this.zoom$.emit(this.zoom);
}
onMapZoomEnd(e: ZoomAnimEvent) {
  this.zoom = e.target.getZoom();
  this.zoom$.emit(this.zoom);
}