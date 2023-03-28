import './gallery.scss'

const Gallery = () => {
  return (
    <>
    <div className="gallery_title">
        <h1 align="" className="features_title">GALLERY</h1>
        <p align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
          
    </div>
    
    <div className="container gallery">
          
            {
              itemData.map(item =>(
                  <div key={item.img} className="img_container">
                       <img className="gallery_img" src={item.img} alt={item.title}/>
                  </div>  
                  ))
          
            }
          

    </div>  
    </>

   
   
  );
}
export default Gallery;


const itemData = [
  {
    img: 'https://react-landing-page-template.herokuapp.com/img/portfolio/01-large.jpg',
    title: 'Breakfast',
  },
  {
    img: 'https://react-landing-page-template.herokuapp.com/img/portfolio/02-large.jpg',
    title: 'Burger',
  },
  {
    img: 'https://react-landing-page-template.herokuapp.com/img/portfolio/03-large.jpg',
    title: 'Camera',
  },
  {
    img: 'https://react-landing-page-template.herokuapp.com/img/portfolio/04-large.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://react-landing-page-template.herokuapp.com/img/portfolio/05-large.jpg',
    title: 'Hats',
  },
  {
    img: 'https://react-landing-page-template.herokuapp.com/img/portfolio/06-large.jpg',
    title: 'Honey',
  },
  {
    img: 'https://react-landing-page-template.herokuapp.com/img/portfolio/07-large.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://react-landing-page-template.herokuapp.com/img/portfolio/08-large.jpg',
    title: 'Fern',
  },
  {
    img: 'https://react-landing-page-template.herokuapp.com/img/portfolio/09-large.jpg',
    title: 'Mushrooms',
  },
  
];