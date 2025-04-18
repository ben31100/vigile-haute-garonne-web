
interface CityCoordinates {
  [postalCodePrefix: string]: {
    lat: number;
    lng: number;
    department: string;
  };
}

export const CITY_COORDINATES: CityCoordinates = {
  '09': { lat: 42.9647, lng: 1.6087, department: 'Ariège' },        // Foix
  '11': { lat: 43.2157, lng: 2.3517, department: 'Aude' },         // Carcassonne
  '12': { lat: 44.3491, lng: 2.5752, department: 'Aveyron' },      // Rodez
  '30': { lat: 43.8374, lng: 4.3601, department: 'Gard' },         // Nîmes
  '31': { lat: 43.6047, lng: 1.4442, department: 'Haute-Garonne' }, // Toulouse
  '32': { lat: 43.6460, lng: 0.5866, department: 'Gers' },         // Auch
  '34': { lat: 43.6119, lng: 3.8772, department: 'Hérault' },      // Montpellier
  '46': { lat: 44.4491, lng: 1.4414, department: 'Lot' },          // Cahors
  '48': { lat: 44.5181, lng: 3.5012, department: 'Lozère' },       // Mende
  '65': { lat: 43.2327, lng: 0.0745, department: 'Hautes-Pyrénées' }, // Tarbes
  '66': { lat: 42.6986, lng: 2.8954, department: 'Pyrénées-Orientales' }, // Perpignan
  '81': { lat: 43.9283, lng: 2.1484, department: 'Tarn' },         // Albi
  '82': { lat: 44.0221, lng: 1.3523, department: 'Tarn-et-Garonne' } // Montauban
};

export const getCityCoordinates = (postalCode: string) => {
  const prefix = postalCode.substring(0, 2);
  return CITY_COORDINATES[prefix] || CITY_COORDINATES['31']; // Default to Toulouse
};
