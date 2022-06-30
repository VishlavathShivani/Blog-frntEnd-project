import React from 'react';
import '../App.css';

function Users() {

    const mystyle = {
        backgroundImage: "url('https://static.wixstatic.com/media/ce9814ce9f304fd6a9ae1bb862863c81.jpg/v1/fill/w_643,h_483,fp_0.50_0.50,q_90/ce9814ce9f304fd6a9ae1bb862863c81.webp')",
        backgroundSize: 'cover',
       // height: '100%',
       // height: '100vh',
       // backgroundSize:'100%',
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
        backgroundColor: "#4C3A51"
    }

    return (
        <div>
        <div className=" d-flex justify-content-center align-items-center overlay py-5 " style={mystyle}>
            <div className='m-5 w-75 '>
                <p className='text-white mb-2 display-5 usertitle' >Their Words..Not Our's</p>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card ">
                            <div className="card-body" style={{ backgroundColor: "lavenderblush" }}>
                                <h5 className="card-title">Mithila Parker</h5>
                                <p className="card-text">"Quo molestiae beatae est voluptatibus sequi et illo sequi quo enim necessitatibus est illo aliquid in ipsa galisum aut dolores velit. Aut maiores quia et odit sint ut earum maxime et autem error. Quo distinctio repudiandae hic veniam minima qui quod commodi. Ea minus dolores quo dolorum sunt ex illum dolores nam rerum accusantium in velit consequatur."</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card ">
                            <div className="card-body" style={{ backgroundColor: "lavender" }}>
                                <h5 className="card-title">Prajaktha Koli</h5>
                                <p className="card-text">"Quo molestiae beatae est voluptatibus sequi et illo sequi quo enim necessitatibus est illo aliquid in ipsa galisum aut dolores velit. Aut maiores quia et odit sint ut earum maxime et autem error. Quo distinctio repudiandae hic veniam minima qui quod commodi. Ea minus dolores quo dolorum sunt ex illum dolores nam rerum accusantium in velit consequatur."</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card ">
                            <div className="card-body" style={{ backgroundColor: "lavender" }}>
                                <h5 className="card-title">Ayaan Khan</h5>
                                <p className="card-text">"Quo molestiae beatae est voluptatibus sequi et illo sequi quo enim necessitatibus est illo aliquid in ipsa galisum aut dolores velit. Aut maiores quia et odit sint ut earum maxime et autem error. Quo distinctio repudiandae hic veniam minima qui quod commodi. Ea minus dolores quo dolorum sunt ex illum dolores nam rerum accusantium in velit consequatur."</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4">
                            <div className="card-body" style={{ backgroundColor: "lavenderblush" }}>
                                <h5 className="card-title">Krithika Menon</h5>
                                <p className="card-text">"Quo molestiae beatae est voluptatibus sequi et illo sequi quo enim necessitatibus est illo aliquid in ipsa galisum aut dolores velit. Aut maiores quia et odit sint ut earum maxime et autem error. Quo distinctio repudiandae hic veniam minima qui quod commodi. Ea minus dolores quo dolorum sunt ex illum dolores nam rerum accusantium in velit consequatur."</p>
                            </div>
                        </div>
                    </div>
                </div>
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

export default Users;