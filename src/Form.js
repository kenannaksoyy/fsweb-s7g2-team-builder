import React from "react";
import { useState } from "react";

function Form(props) {
    const { _takimUyeleri, _setTakimUyeleri } = props;

    const [uyeObj, setUyeObj] = useState(
        {
            isimSoyisim:"",
            rol:"",
            email:""
        }
    );

    const formDegisiklik = (e) => {setUyeObj({...uyeObj, [e.target.name]: e.target.value});};

    

    return (
        <div className="formContainer">
            <form method="POST" onSubmit={(e) => {
          e.preventDefault();
          _setTakimUyeleri([..._takimUyeleri, uyeObj]);
            }}>
                <div className="uyeİsim">
                    <label htmlFor="isimSoyisim">İsim Soyisim:</label>
                    <input
                        type={"text"}
                        id="isimSoyisim"
                        name="isimSoyisim"
                        placeholder="isimSoyisim"
                        value={uyeObj.isimSoyisim}
                        onChange={formDegisiklik}
                    />
                </div>
                <div className="uyeRol">
                    <label htmlFor="rol">Rol:</label>
                    <input
                        type={"text"}
                        id="rol"
                        name="rol"
                        placeholder="Rolu"
                        value={uyeObj.rol}
                        onChange={formDegisiklik}
                    />
                </div>
                <div className="uyeemail">
                    <label htmlFor="email">e-Mail:</label>
                    <input
                        type={"text"}
                        id="email"
                        name="email"
                        placeholder="email"
                        value={uyeObj.email}
                        onChange={formDegisiklik}
                    />
                </div>
                <div>
                  <input type="submit" value={"Submit"} />
                </div>
                
            </form>
        </div>
    );
}

export default Form;