export interface Track {
  id: string;
  name: string;
  length: string;
  location: string;
  mapsUrl: string;
  imageUrl: string;
  imageWidth: string;
  imageHeight: string;
  pricing?: {
    individual: number;
    group: number;
  };
}

export const tracks: Track[] = [
  {
    id: 'misano',
    name: 'Misano',
    length: '4.226 km',
    location: 'Misano Adriatico, Rimini',
    mapsUrl: 'https://maps.google.com/?q=Misano+World+Circuit',
    imageUrl: '/Misano.jpg',
    imageWidth: '410px', 
    imageHeight: '250px',
    pricing: { individual: 850, group: 500 }
  },
  {
    id: 'magione',
    name: 'Magione',
    length: '2.507 km',
    location: 'Magione, Perugia',
    mapsUrl: 'https://maps.google.com/?q=Autodromo+di+Magione',
    imageUrl: '/magione.png',
    imageWidth: '400px',
    imageHeight: '250px',
    pricing: { individual: 700, group: 450 }
  },
  {
    id: 'pomposa',
    name: 'Pomposa',
    length: '2.505 km',
    location: 'Codigoro, Ferrara',
    mapsUrl: 'https://maps.google.com/?q=Autodromo+Pomposa',
    imageUrl: '/pomposa.png',
    imageWidth: '400px',
    imageHeight: '250px',
    pricing: { individual: 850, group: 450 }
  },
  {
    id: 'mugello',
    name: 'Mugello',
    length: '5.245 km',
    location: 'Scarperia, Firenze',
    mapsUrl: 'https://maps.google.com/?q=Mugello+Circuit',
    imageUrl: '/mgello.jpeg',
    imageWidth: '400px',
    imageHeight: '250px',
    pricing: { individual: 1000, group: 500 }
  },
  {
    id: 'cremona',
    name: 'Cremona',
    length: '3.849 km',
    location: 'Cremona',
    mapsUrl: 'https://maps.google.com/?q=Cremona+Circuit',
    imageUrl: '/cremona.png',
    imageWidth: '400px',
    imageHeight: '250px',
    pricing: { individual: 450, group: 250 }
  },
  {
    id: 'vallelunga',
    name: 'Vallelunga',
    length: '4.085 km',
    location: 'Campagnano di Roma, Roma',
    mapsUrl: 'https://maps.google.com/maps?vet=10CAAQoqAOahcKEwiY8PeamLSTAxUAAAAAHQAAAAAQCw..i&rlz=1C5AJCO_enIT1206IT1206&sca_esv=f339d775e9702b7a&pvq=CgovbS8wMjdoaDFjIhkKE2NpcmN1aXRvIHZhbGxlbHVuZ2EQAhgD&lqi=ChNjaXJjdWl0byB2YWxsZWx1bmdhSKv43iNaJRAAEAEYABgBIhNjaXJjdWl0byB2YWxsZWx1bmdhKgYIAhAAEAGSAQ5jYXJfcmFjZV90cmFjaw&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=it&sa=X&ftid=0x132f410e4080fdeb:0x132f410e4080fdeb:0x12c20214365b5afa', 
    imageUrl: '/Vallelunga.png',
    imageWidth: '400px',
    imageHeight: '250px',
    pricing: { individual: 800, group: 450 }
  },
];
