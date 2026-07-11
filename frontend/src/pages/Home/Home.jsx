import "./Home.css";


function Home(){

return(

<div>


<section className="hero">


<div className="hero-overlay"></div>


<div className="hero-content">


<p className="small-title">
LUXURY VILLA EXPERIENCE
</p>


<h1>
Where
<span> Elegance </span>
<br/>
Meets Nature
</h1>


<p>
Experience peaceful luxury surrounded by nature.
Private villas, infinity pools and unforgettable moments.
</p>


<div className="hero-buttons">

<button>
Book Your Stay
</button>

<button className="outline">
Explore Villa
</button>

</div>


</div>


</section>



<section className="stats">


<div>
<h2>12+</h2>
<p>Luxury Rooms</p>
</div>


<div>
<h2>5★</h2>
<p>Star Rating</p>
</div>


<div>
<h2>500+</h2>
<p>Happy Guests</p>
</div>


<div>
<h2>8 Acres</h2>
<p>Private Estate</p>
</div>


</section>




<section className="about">


<div className="about-text">

<h2>
A Legacy of
<br/>
Timeless Luxury
</h2>


<p>
Great Villa combines modern comfort with natural beauty.
Every corner is designed to create a memorable experience.
</p>


<button>
Discover More
</button>


</div>



<img src="/images/villa_hero.webp"/>


</section>





<section className="rooms">


<h2>
Our Luxury Rooms
</h2>


<div className="cards">


<div className="card">
<h3>
Garden Suite
</h3>
<p>
Private garden view luxury room.
</p>
</div>



<div className="card">
<h3>
Royal Villa
</h3>
<p>
Premium villa experience.
</p>
</div>




<div className="card">
<h3>
Pool Villa
</h3>
<p>
Private pool and relaxation.
</p>
</div>


</div>


</section>



</div>

)


}


export default Home;