import logo from './logo.svg';
import './App.css';
import Form from "./Form";
import Uye from "./Uye";
import React, {useState} from 'react';

const takimUyeleri = [
  {
    isimSoyisim: "ömer tanrıverdi", 
    rol: "Senior Designer", 
    email: "öt@gmail.com" 
  },
  {
    isimSoyisim: "emre şahiner",
    rol: "Senior Developer", 
    email: "eş@hotmail.com" 
  },
  {
    isimSoyisim: "kenan aksoy", 
    rol: "Jr.", 
    email: "ka@gmail.com"
  },
  {
    isimSoyisim: "ali koc", 
    rol: "Jr.", 
    email: "ak@outlook.com" 
  }

];

function App() {
  const [_takimUyeleri, _setTakimUyeleri] = useState(takimUyeleri)
  return (
    <div className="App">
      <h1 className='sayfaBaslik'>Team Builder</h1>

      <div className='Uyeler'>
        <h2 className='takimBaslik'>Takım Üyeleri</h2>
        <div className='uyelerListe'>
          {
            _takimUyeleri.map((_uye, index) => (
              <Uye uye={_uye} key={index} />
            ))
          }
        </div>
      </div>

      <div className='UyeKayit'>
          <div className='UyeKayitUst'>
            <h2 className='uyeKayitBaslik'>Yeni Takım Üyesi Ekle</h2>
          </div>

          <div className='UyeKayitAlt'>
            <Form  _takimUyeleri={_takimUyeleri} _setTakimUyeleri={_setTakimUyeleri}/>
          </div>


      </div>

    </div>
  );
}

export default App;
