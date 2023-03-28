import './about.scss';
import AboutImg from '../../assets/imgs/about.jpg';
import { BsCheck } from 'react-icons/bs';

const About = () =>{
	return(
		<div className="container about">
			<div className="about_img">
				<img src={AboutImg} alt=""/>
			</div>
			<div className="about_content">
				<h2>ABOUT US</h2>
				<p className="about_parag">Lorem ipsum, dolor sit amet c sint vero nihil vitae  blanditiis voluptatibus ex voluptates possimus earum sit commodi dolore accusamus? Impedit, praesentium! Accusamus quis, fugiat obcaecati ipsa laudantium aut hic vero, quibusdam perspiciatis voluptate possimus, sit consequatur voluptas, est. Ducimus dolorum, placeat.</p>
				<h3>Why Choose Us?</h3>
				<div className="about_choose">
					<div className="chose">  
						<ul type="none">
							<li> <BsCheck size="1.5rem" color="#5ca9fb"/> Lorem ipsum dolor</li>
							<li><BsCheck size="1.5rem" color="#5ca9fb"/> Tempor incididunt</li>
							<li><BsCheck size="1.5rem" color="#5ca9fb"/> Lorem ipsum dolor</li>
							<li><BsCheck size="1.5rem" color="#5ca9fb"/> Incididunt ut labore</li>
						</ul>      
                    </div>
					<div className="chose_second">
						<ul type="none">
							<li><BsCheck size="1.5rem" color="#5ca9fb"/> Lorem ipsum dolor</li>
							<li><BsCheck size="1.5rem" color="#5ca9fb"/> Tempor incididunt</li>
							<li><BsCheck size="1.5rem" color="#5ca9fb"/> Lorem ipsum dolor</li>
							<li><BsCheck size="1.5rem" color="#5ca9fb"/> Incididunt ut labore</li>
						</ul>    
					</div>
				</div>
			</div>

		</div>

	)
}

export default About;