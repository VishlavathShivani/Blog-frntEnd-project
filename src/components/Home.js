import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import '../App.css';

function Home() {
    const mystyle = {
        backgroundImage: "url('https://static.wixstatic.com/media/f61af8_97a68d95c3584eee8952b7b3184f5f80~mv2_d_6924_3840_s_4_2.jpg/v1/fill/w_1699,h_1125,al_c,q_85,usm_0.66_1.00_0.01/f61af8_97a68d95c3584eee8952b7b3184f5f80~mv2_d_6924_3840_s_4_2.webp')",
        backgroundSize: 'cover',
        height: '100vh',
        opacity: '0.9',
        margin:'0',
        padding:'0',
        backgroundPosition:'center',
        backgroundAttachment:'fixed',
        backgroundRepeat:'no-repeat'
    }
      const mystyle1 = {
      minHeight: '50vh',
      minWidth: '100vw',
      display: 'flex',
      flexDirection: 'column'
  }
  const mystyle2 ={
      //marginTop: 'auto',
     // opacity: '0.8',
      backgroundColor: "#3F4E4F"
  }
  
    return (
        <div >
        <div className=" d-flex justify-content-center align-items-center home" style={mystyle}>
            <div>
                <p className='text-white text-center display-2' style={{ fontWeightXbold: "700"}}>Welcome to the Blog</p>
                <button className='btn btn-lg btn-outline-light d-block mx-auto ps-4 pe-4 rounded-0' style={{ fontSize: "1.8rem" }}>Explore</button>
            </div>
        </div>
        <div class=" box"  style={mystyle1}>
  <div className='footer'
          class="text-center text-lg-start text-white"
          style={mystyle2}
          >
    <div class="container p-3 pb-0 ">
      <section class="">
        <div class="row">
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet
            </p>
          </div>

          <hr class="w-100 clearfix d-md-none" />


          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i class="fas fa fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i class="fas fa fa-envelope mr-3"></i> info@gmail.com</p>
            <p><i class="fas fa fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
        </div>
      </section>

     < hr class="my-3"/>

      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-lg-8 text-center text-md-start">
            <div class="p-3">
              © 2020 Copyright: FoodBlogSite
            
            </div>
          </div>

          <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            <a
               class="btn btn-outline-light btn-floating m-1 text-white"
               role="button"
               ><i class="fab fa fa-facebook-f"></i
              ></a>

            <a
               class="btn btn-outline-light btn-floating m-1 text-white"
               role="button"
               ><i class="fab fa fa-twitter"></i
              ></a>

            <a
               class="btn btn-outline-light btn-floating m-1 text-white"
               role="button"
               ><i class="fab fa-google"></i
              ></a>

            <a
               class="btn btn-outline-light btn-floating m-1 text-white"
               role="button"
               ><i class="fab fa fa-instagram"></i
              ></a>
          </div>
        </div>
      </section>
    </div>
  </div>

    </div>

    </div> 

    )
}

export default Home;