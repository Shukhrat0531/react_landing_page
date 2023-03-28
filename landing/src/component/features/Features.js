import './features.scss';
import { FaBullhorn} from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';



const Features = () =>{
    return(
    <>
      <h1 className="features_title">Features</h1>
      <div className="container">
       
        <div className="card">
           <FaBullhorn  className="card_icon"/>
           <h3 align="center"> Lorem ipsum</h3>
           <p align ="center">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Non, nam!</p>
          
        </div>
        
          <div className="card">
           <IoIosPeople  className="card_icon"/>
           <h3 align="center"> Lorem ipsum</h3>
           <p align ="center">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Non, nam!</p>
          
        </div>
          <div className="card">
           <FaBullhorn  className="card_icon"/>
           <h3 align="center"> Lorem ipsum</h3>
           <p align ="center">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Non, nam!</p>
          
        </div>
          <div className="card">
           <IoIosPeople  className="card_icon"/>
           <h3 align="center"> Lorem ipsum</h3>
           <p align ="center">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Non, nam!</p>
          
        </div>
        
    </div>  
    </>  
    )
}
export default Features;