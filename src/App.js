import './App.css';
import './index.css';

function Show() {
  document.querySelector('.side-bar').style.left = '0%';
  document.querySelector('.menu-icon').style.display = 'none';
}

function Hide() {
  document.querySelector('.side-bar').style.left = '-100%';
  document.querySelector('.menu-icon').style.display = 'block';
}

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Banner />
      <br />
      <FirstGrid />
      <AboutUs />
      <AllCourse />
      <Blog />
      <Download />
      <Footer />
    </div>
  );
}


// -------HEADER------
const Header = () => {
  return(
    <header className='container-fluid'>
    <div className='container head'>
       <div className='logo-div'>
        <a href='#' className='logo'>Futras
        <span>.</span></a>
       </div>

       <div className='menu'>
       <Menulist />
       <div className='sign-up'>
        <a href='#'>Sign Up</a>
       </div>

       <div className='menu-icon'  onClick={Show}>
        <img src='images/bars-solid.svg' alt='icon-menu'/>
       </div>
       </div>
    </div>
    </header>
  );
}


const Menulist = () => {
  return(
    <div className='menu-list'>
      <a href='#home'>Home</a>
      <a href='#about-us'>About Us</a>
      <a href='#all-courses'>All Courses</a>
      <a href='#blog'>Blog</a>
      <a href='#contact'>Contact</a>
    </div>
  )
}

const SideBar = () => {
   return <section className='side-bar'>
     <div onClick={Hide} className='close'>
        <img src="images/icon-close-menu.svg" alt="close" />
     </div>

     <div className="sideMenu">
             <Menulist />
           </div>

  </section>
}


// -----BANNER-----

const Banner =() => {
  return(
    <div className='banner home'>
     <div className='container'>
        <h5>fitness & nutrition</h5>
        <h1>This life style for your fitness, not only diet.</h1>
        <p>It has survived not only five centuries but also</p>
        <span><a href='#'>Start Courses</a></span>
     </div>
    </div>
  )
}



const FirstGrid = () => {
  return(
       <div className='container firstgrid'>
         <div className='row'>
           <div className='col-sm-12 col-lg-4 column'>
              <div className='container'>
                <div className='icon'>
                  <img src='images/service-1.svg' alt='service' />
                </div>
                <div className='course'>
                  <h2>Women's Course</h2>
                  <p>Lorem Ipsum is simply dummy themes industryes 
                  psum has been them industry the loep into type setting.</p>
                  <span className='follow'>
                    <a href='#'>&#10148;</a>
                  </span>
                </div>
              </div>
           </div>
           <div className='col-sm-12 col-lg-4 column'>
              <div className='container'>
                <div className='icon'>
                  <img src='images/service-2.svg' alt='service' />
                </div>
                <div className='course'>
                  <h2>Basic Course</h2>
                  <p>Lorem Ipsum is simply dummy themes industryes 
                  psum has been them industry the loep into type setting.</p>
                  <span className='follow'>
                    <a href='#'>&#10148;</a>
                  </span>
                </div>
              </div>
           </div>
           <div className='col-sm-12 col-lg-4 column'>
              <div className='container'>
                <div className='icon'>
                  <img src='images/service-3.svg' alt='service' />
                </div>
                <div className='course'>
                  <h2>Men's Course</h2>
                  <p>Lorem Ipsum is simply dummy themes industryes 
                  psum has been them industry the loep into type setting.</p>
                  <span className='follow'>
                    <a href='#'>&#10148;</a>
                  </span>
                </div>
              </div>
           </div>
         </div>
       </div>
  );
}



// -----ABOUT US--------

const AboutUs = () => {
  return(
    <section className='about-us container-fluid '>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-lg-6 column1'>
            <div className='about-banner-div1'>
            <div className='image-holder'>
              <img src='images/about-shape-1.png' alt='img-holder' />
            </div>
            <img src='images/about-banner.jpg' alt='about-banner' className='about-img'/>
            <span className='meet-instructor'><a href='#'>Meet Instructor</a></span>
            </div>  
          </div>
          <div className='col-sm-12 col-lg-6 column2'>
             <div className='about-banner-div2'>
               <h3>25+ YEARS OF EXPERIENCE</h3>

               <h2>We have expert instructor for help our students.</h2>
               <p>Lorem Ipsum is simply dummy text the printing and typesetting standard dummy text ever 
                since the 150 when an unknown print specimen book has survived centuries.</p>

               <h1>100+ Courses</h1>
               <p>Lorem Ipsum is simply dummy text the printing and typesetting standard dummy text ever 
                since the 150 when an unknown print specimen book has survived centuries</p>
             </div>
             <div className='column2-holder'>
              <img src='images/about-shape-2.png' alt='column2-holder-img' />
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}


// -----ALL COURSE----


const AllCourse = () => {
  return(
    <section className='all-course'>
      <div className='container'>
        <div className='heading'>
          <h6>100+ COURSE AVAILABLE</h6>
          <h1>Fitness & Nutrition Course</h1>
        </div>

        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-4 column'>
            <div className='img-div'>
              <img src='images/courses-1.jpg' alt='img-course' />
              <div><span>$98</span></div>
            </div>
            <div className='article-div'>
              <h6><span>By:</span>Ryan Patterson</h6>
              <h3>Children Nutrition and Cooking</h3>
              <div className='time'>08 hr 20 mins <span>.</span> 28 Lectures</div>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 column'>
            <div className='img-div'>
              <img src='images/courses-2.jpg' alt='img-course' />
              <div><span>$72</span></div>
            </div>
            <div className='article-div'>
              <h6><span>By:</span>Arlene Daniels</h6>
              <h3>Introduction to Food and Health</h3>
              <div className='time'>09 hr 25 mins <span>.</span> 16 Lectures</div>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 column'>
            <div className='img-div'>
              <img src='images/courses-3.jpg' alt='img-course' />
              <div><span>$68</span></div>
            </div>
            <div className='article-div'>
              <h6><span>By:</span>Selina Benton</h6>
              <h3>Nutrition and Lifestyle in Pregnancy</h3>
              <div className='time'>03 hr 38 mins <span>.</span> 18 Lectures</div>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 column'>
            <div className='img-div'>
              <img src='images/courses-4.jpg' alt='img-course' />
              <div><span>$98</span></div>
            </div>
            <div className='article-div'>
              <h6><span>By:</span>Ryan Patterson</h6>
              <h3>Expertise on Fitness, Nutrition and Health</h3>
              <div className='time'>02 hr 16 mins <span>.</span> 14 Lectures</div>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 column'>
            <div className='img-div'>
              <img src='images/courses-5.jpg' alt='img-course' />
              <div><span>$72</span></div>
            </div>
            <div className='article-div'>
              <h6><span>By:</span>Arlene Daniels</h6>
              <h3>Hacking exercise for health new science of fitness</h3>
              <div className='time'>06 hr 12 mins <span>.</span> 35 Lectures</div>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 column'>
            <div className='img-div'>
              <img src='images/courses-6.jpg' alt='img-course' />
              <div><span>$68</span></div>
            </div>
            <div className='article-div'>
              <h6><span>By:</span>Selina Benton</h6>
              <h3>Designing Your Personal Weight Loss Plan</h3>
              <div className='time'>09 hr 34 mins <span>.</span> 28 Lectures</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


// -----BLOG------

const Blog = () => {
  return(
    <section className='blog'>
     <div className='container'>
      <div className='heading'>
        <h6>OUR BLOG POST</h6>
        <h2>Latest Article Of Nutrition</h2>
      </div>

      <div className='row'>
        <div className='col-sm-12 col-lg-4 column'>
          <div className='inner-col'>
            <div className='top-block'>
              <div className='date'>
                <span className='date-date'>24</span>
                <span className='day'>Feb</span>
              </div>
              <div className='name-div'>
                <div className='author'><span>By:</span> Maddie Rife</div>
                <div className='likeAndShare'>87 Likes <span>.</span> 58 Shares</div>
              </div>
            </div>
            <div className='bottom-div'>
              <h3>It was popularised sheets the release contain</h3>
              <p>Lorem sum same dummy text theme industry psum have been them industry the leaf into type setting</p>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-lg-4 column'>
          <div className='inner-col'>
            <div className='top-block'>
              <div className='date'>
                <span className='date-date'>24</span>
                <span className='day'>Feb</span>
              </div>
              <div className='name-div'>
                <div className='author'><span>By:</span> Maddie Rife</div>
                <div className='likeAndShare'>87 Likes <span>.</span> 58 Shares</div>
              </div>
            </div>
            <div className='bottom-div'>
              <h3>It was popularised sheets the release contain</h3>
              <p>Lorem sum same dummy text theme industry psum have been them industry the leaf into type setting</p>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-lg-4 column'>
          <div className='inner-col'>
            <div className='top-block'>
              <div className='date'>
                <span className='date-date'>24</span>
                <span className='day'>Feb</span>
              </div>
              <div className='name-div'>
                <div className='author'><span>By:</span> Maddie Rife</div>
                <div className='likeAndShare'>87 Likes <span>.</span> 58 Shares</div>
              </div>
            </div>
            <div className='bottom-div'>
              <h3>It was popularised sheets the release contain</h3>
              <p>Lorem sum same dummy text theme industry psum have been them industry the leaf into type setting</p>
            </div>
          </div>
        </div>
      </div>
     </div>
    </section>
  )
}


// ----DOWNLOADS-----


const Download = () => {
  return(
    <section className='download'>
      <div className='container'>
         <h6>MOBILE APP AVAILABLE</h6>
         <h1>Download our mobile app. and start coaching anytime.</h1>
         <div className='download-icons'>
          <img src='images/play-store.jpg' alt='play store' />
          <img src='images/app-store.jpg' alt='app store' />
         </div>
         <img src='images/app-shape-1.png' alt='leaf' className='leaf' />
         <img src='images/app-shape-2.png' alt='leaf' className='leaf2' />
      </div>
    </section>
  )
}

// -----FOOTER------

const Footer =() => {

  const currentYear = new Date().getFullYear();

  return(
    <footer>
      <div className='footer1'>
       <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-lg-3'>
            <h5 className='heading'>Subscribe Newsletter</h5>
            <p>Lorem Ipsum has been them an industry printer took a gallery make book</p>
            <div className='input'>
              <input type='text' className='text' placeholder='Enter email' />
              <button className='btn'>Subscribe Now</button>
            </div>
          </div>
          <div className='col-sm-12 col-lg-3'>
            <h5 className='heading'>All Courses</h5>

            <ul className='list'>
              <li><a href='#'>Daily Exercise</a></li>
              <li><a href='#'>Find Your Balance</a></li>
              <li><a href='#'>Personal Program</a></li>
              <li><a href='#'>Natural Process</a></li>
              <li><a href='#'>Immune System</a></li>
              <li><a href='#'>Gives you Energy</a></li>
            </ul>
          </div>
          
          <div className='col-sm-12 col-lg-3'>
            <h5 className='heading'>Help Links</h5>

            <ul className='list'>
              <li><a href='#'>Privacy Policy</a></li>
              <li><a href='#'>Discussion</a></li>
              <li><a href='#'>Terms & Conditions</a></li>
              <li><a href='#'>Natural Process</a></li>
              <li><a href='#'>Customer Support</a></li>
              <li><a href='#'>Course FAQ's</a></li>
              <li><a href='#'>Online Classes</a></li>
            </ul>
          </div>
          
          <div className='col-sm-12 col-lg-3'>
             <h5>Opening Hours</h5>

             <ul className='list'>
              <li><a href='#'>Mon-Fri:9 AM-6 PM</a></li>
              <li><a href='#'>Saturday:9 AM- 4 PM</a></li>
              <li><a href='#'>Sunday: Closed</a></li>
             </ul>

             <h5>Location</h5>
             <p className='location'>176 W street name,New York,NY 10014</p>
          </div>
        </div>
       </div>
      </div>
      <div className='footer2'>
       <div className='container'>
        <div>
          <p>&copy; {currentYear} Futras Made With <span className='heart'>&hearts;</span> by <a href='#' className='me'>Damoblinkz</a></p>
        </div>
        <div>
          <p><a href='#'>Terms of Service</a> - <a href='#'>Privacy Policy</a> - <a href='#'>Sitemap</a> - <a href='#'>Security</a></p>
        </div>
       </div>
      </div>
    </footer>
  )
}
export default App;