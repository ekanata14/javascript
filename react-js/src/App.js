// Parent Component
import React, {useEffect, useState} from 'react'
import Introduction from './components/Introduction'
import Profile from './components/Profile';

function App() {
  // kiri -> getter
  // kanan -> setter
  const [uangSaya, setUangSaya] = useState(1);
  const [barang, setBarang] = useState("Ipong");

  useEffect(()=>{
    if(uangSaya < 1){
      setBarang('Duit Habis Kawan')
    } else{
      if(uangSaya === 5){
        setBarang('Beli Ipong Bang')
      } else if(uangSaya > 5){
        setBarang('Nabung!!!')
      } else if(uangSaya > 1){
        setBarang('Beli Teh Gelas Bang')
      } else{
        setBarang('Cari Duit')
      }
    }
  }, [uangSaya])

  return (
    <>
      <h1>{barang}</h1>
      <h1>Uang di dompet : Rp{uangSaya} Ribu </h1>
      <button onClick = {()=> setUangSaya((prev) => prev + 1)}>Tambah Duit</button>
      <button onClick = {()=> setUangSaya((prev) => prev - 1)}>Pake Duit</button>
      {/* <Profile />
      <Introduction name="dreamerdream" />
      <Introduction name="gakure" /> */}
    </>
  );
}

export default App;
