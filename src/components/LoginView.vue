<template>
    <div class="header">
        <img src="src\components\img\dog.png" alt="">
    </div>
    <div class="app">
        <div class="card">
            <div class="form">
                <div class="inputs">
                    <input type="email" placeholder="Ingrese su email">
                    <input type="password" placeholder="Ingrese su contraseña">
                </div>
                <div class="btns">
                    <button>Iniciar sesion</button>
                    <div class="com">
                        <p>Olvidaste tu contraseña?</p>
                        <p>No tienes cuenta?</p>
                    </div>
                </div>
            </div>
            <div class="footer">
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: whitesmoke;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: rgb(109,151,115);
background: linear-gradient(90deg, rgba(109,151,115,1) 1%, rgba(141,159,94,1) 100%);
}
*{
    font-family: 'Comfortaa';
}

.app{
    display: grid;
    place-items: center;
    height: 100vh;
}




.header{
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 100%;
    border-radius: 0px 0px 60px 0px;
    background: rgb(141,159,94);
background: linear-gradient(90deg, rgba(141,159,94,1) 1%, rgba(109,151,115,1) 100%);
}
.header p{
    position: absolute;
}

.card{
    display: flex;
    max-width: 20em;
    height: 60%;
    width: 80%;
    justify-content: center;
    align-items: flex-end;
    border-radius: 10px;
}

.form{
    display: grid;
    place-items: center;
    width: 90%;
    height: 78%;
    flex-direction: column;

}

.inputs{
    display: flex;
    flex-direction: column; 
    height: 6em;
    width: 140%;
}

.inputs input{
    font-size: 16px;
    padding: 50px 10px 10px 5px;
    display: block;
    border: none;
    border-bottom: 1px solid #515151;
    background: transparent;
    text-align: center;
}

input:focus{
    outline: none;
}

.btns{
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    height: 10em;
    width: 15em;
}
.com{
    position: absolute;
    bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.btns button{
    width: 10em;
    height: 2em;
    font-size: 1.1em;
    cursor: pointer;
    background-color: #8d9f5e;
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: all .4s;
    
}

button:hover{
    transform: scale(1.1);    
}

</style>