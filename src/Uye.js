import React from "react";


function Uye(props) {
    const { uye } = props;
    console.log(uye);
  
    return (
      <div className="uye">
        <p class="uyeBilgi">İsim Soyisim: {uye.isimSoyisim}</p>
        <p class="uyeBilgi">Title: {uye.rol}</p>
        <p class="uyeBilgi">e-Mail: {uye.email}</p>
      </div>
    );
  }
  
  export default Uye;