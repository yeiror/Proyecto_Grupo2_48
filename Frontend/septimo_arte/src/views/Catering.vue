<template>
    <v-app>
      <v-main>
  <section class="home mx-10" id="home">
  
      <div class="content">
          <h3>Bienvenido a nuestro catering </h3>
          <p>¿Qué esperas para ordenar?</p>
        </div>
  
  </section>
     
  
  <section class="products" id="products">
  
    <h1 class="heading"> Nuestros productos </h1>
    <li></li>
  
    <div class="box-container">
  
        <div class="box">
  
            <div class="image">
                <img src="@/assets/CateringImagenes/Combo1.png" alt="">
            </div>
            <div class="content">
                <h3>Combo 1</h3>
                <div class="descripcion">
                  <div> <p>1 Crispeta Grande <br> 2 Gaseosas Grandes 32 oz <br> 2 Chocolatinas de 12 gr </p> </div>
                </div>
                <div class="price">29.500</div>
                <li></li>
                <div class="boton">
                     <v-row
                       align="center"
                       justify="space-around" ><v-btn>
                              <i class="mdi mdi-cart"></i>Comprar</v-btn>
                     </v-row>
                </div>
            </div>
        </div>
  
        <div class="box">
  
            <div class="image">
                <img src="@/assets/CateringImagenes/Combo2.png" alt="">
            </div>
            <div class="content">
                <h3>Combo 2</h3>
                <div class="descripcion">
                  <div> <p>1 Crispeta Mediana<br> 2 Perros Calientes <br> 2 Gaseosas Medianas 22 oz </p> </div>
                </div>
                <div class="price">$42.000</div>
                 </div>
                 <li></li>
                <div class="boton">
                     <v-row
                       align="center"
                       justify="space-around" ><v-btn> 
                      <i class="mdi mdi-cart"></i> Comprar</v-btn>
                     </v-row>
                </div>
        </div>
  
        <div class="box">
  
            <div class="image">
                <img src="@/assets/CateringImagenes/Combo3.png" alt="">
            </div>
            <div class="content">
                <h3>Combo 3</h3>
                <div class="descripcion">
                  <div> <p>1 Crispeta Mediana <br> 1 Gaseosa Mediana 22 oz <br> 1 Chocolatina de 12 gr </p> </div>
  
                </div>
                <div class="price">$20.000</div>
            </div>
            <li></li>
                <div class="boton">
                     <v-row
                       align="center"
                       justify="space-around" ><v-btn> 
                       <i class="mdi mdi-cart"></i> Comprar</v-btn>
                     </v-row>
                </div>
        </div>
  
        <div class="box">
          <div class="image">
              <img src="@/assets/CateringImagenes/Combo4.png" alt="">
          </div>
          <div class="content">
              <h3>Combo 4</h3>
              <div class="descripcion">
                <div> <p>1 Perro Caliente <br> 1 Gaseosa Mediana 22 oz <br> 1 Chocolatina de 12 gr </p> </div>
              </div>
              <div class="price">$19.000</div>
          </div>
            <li></li>
                <div class="boton">
                     <v-row
                       align="center"
                       justify="space-around" ><v-btn> 
                       <i class="mdi mdi-cart"></i>Comprar</v-btn>
                     </v-row>
                </div>
      </div>
  
      <div class="box">
        <div class="image">
            <img src="@/assets/CateringImagenes/Combo5.png" alt="">
        </div>
        <div class="content">
            <h3>Combo 5</h3>
            <div class="descripcion">
              <div> <p>1 Crispeta Mediana <br> 2 Gaseosa Medianas 22 oz <br> 1 Perro Caliente</p> </div>
  
            </div>
            <div class="price">$35.000</div>
        </div>
        <li></li>
                <div class="boton">
                     <v-row
                       align="center"
                       justify="space-around" ><v-btn> 
                       <i class="mdi mdi-cart"></i> Comprar</v-btn>
                     </v-row>
                </div>
    </div>
    
    </div>
  
  </section>
  
  
  
      </v-main>
      <footer>
        <foter/>
      </footer>
  
    </v-app>
  </template>
  
  <script>
  import foter from '../components/foter.vue'
  export default {
    components: { foter },
  
  }
  
  </script>
  
  <style scoped>
  
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box; 
        }
  
  .box {
      background-color: #212529
      ;
    }
  
  h1{
      color: white;
  }
  a{
      text-decoration: none;
  }
  
  *{
      margin:0; padding:0;
      box-sizing: border-box;
      outline: none; border:none;
      text-decoration: none;
      text-transform: capitalize;
      transition: .2s linear;
  }
  
  
  .home{
      min-height: 100vh;
      display: flex;
      align-items: center;
      background:url(/VistaComidas/Imagenes/depositphotos_199170700-stock-photo-popcorn-red-white-cardboard-soda.jpg) no-repeat;
      background-size: cover;
      background-position: center;
  }
  
  .home .content{
      max-width: 60rem;
  }
  
  .home .content h3{
      font-size: 6rem;
      text-transform: uppercase;
      color:#fff;
  }
  
  .home .content p{
      font-size: 2rem;
      font-weight: lighter;
      line-height: 1.8;
      padding:1rem 0;
      color:#eee;
  }
  section{
      padding:2rem 7%;
  }
  
  .btn:hover{
      letter-spacing: .2rem;
  }
  
  
  
  .products .box-container{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
      gap:1.5rem;
  }
  
  .products .box-container .box{
      text-align: center;
      border:var(--border);
      padding: 2rem;
  }
  
  .products .box-container .box .icons a{
      height: 5rem;
      width: 5rem;
      line-height: 5rem;
      font-size: 2rem;
      border:var(--border);
      color:rgb(255, 255, 255);
      margin:.3rem;
  }
  
  .products .box-container .box .icons a:hover{
      background:var(--main-color);
  }
  
  .products .box-container .box .image{
      padding: 2.5rem 0;
  }
  
  .products .box-container .box .image img{
      height: 25rem;
  }
  
  .products .box-container .box .content h3{
      color:rgb(255, 255, 255);
      font-size: 2.5rem;
  }
  .products .box-container .box .content .price{
      color:rgb(255, 255, 255);
      font-size: 2.5rem;
  }
  
  .products .box-container .box .content .price span{
      text-decoration: line-through;
      font-weight: lighter;
      font-size: 1.5rem;
  }
  
  .products .descripcion{
      color: rgb(255, 255, 255);
      font-size: 20px; 
      font-weight: 500
      
  }
  
  @media (max-width:991px){
  
      html{
          font-size: 55%;
      }
  
      .header{
          padding:1.5rem 2rem;
      }
  
      section{
          padding:2rem;
      }
  
  }
  
  
  
  *{
      font-family: 'Roboto', sans-serif;
      margin:0; padding:0;
      box-sizing: border-box;
      outline: none; border:none;
      text-decoration: none;
      text-transform: capitalize;
      transition: .2s linear;
  }
  
  
  #menu-btn{
      display: none;
  }
  
  
  .home{
      min-height: 100vh;
      display: flex;
      align-items: center;
      background:url(../assets/CateringImagenes/banner2.jpg) no-repeat;
      background-size: cover;
      background-position: center;
  }
  
  .home .content{
      max-width: 60rem;
  }
  
  .home .content h3{
      font-size: 5rem;
      text-transform: uppercase;
      font-weight: bolder;
      color:#fff;
  }
  
  .home .content p{
      font-size: 2rem;
      font-weight: 100;
      font-weight: bolder;
      line-height: 1.8;
      padding:1rem 0;
      color:rgb(24, 17, 17)
  }
  
  
  
  @media (max-width:768px){
  
      #menu-btn{
          display: inline-block;
      }
  
      
      .home{
          background-position: left;
          justify-content: center;
          text-align: center;
      }
  
      .home .content h3{
          font-size: 4.5rem;
      }
  
      .home .content p{
          font-size: 1.5rem;
      }
  
  }
  
  @media (max-width:450px){
  
      html{
          font-size: 50%;
      }
  
  }
  
  
  </style>
  
  
  

