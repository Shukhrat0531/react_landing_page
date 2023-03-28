import './testimonials.scss'
import People from '../../assets/imgs/01.jpg';


const Testimonials = () =>{
	return(
		<>
		<div><h1 align="center">What our clients say</h1></div>
		<div className="container people_container">
			<div className="people">
				<div className="people_i">
					<img className="people_img" src={People} alt=""/>
				</div>
				<div className="people_contnent">
					<p className="people_p">
						<i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</i>
					</p>
					<h6>- John Doe</h6>
				</div>
            </div>
            <div className="people">
				<div className="people_i">
					<img className="people_img" src={People} alt=""/>
				</div>
				<div className="people_contnent">
					<p className="people_p">
						<i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</i>
					</p>
					<h6>- John Doe</h6> 
				</div>
            </div>
            <div className="people">
				<div className="people_i">
					<img className="people_img" src={People} alt=""/>
				</div>
				<div className="people_contnent">
					<p className="people_p">
						<i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</i>
					</p>
					<h6>- John Doe</h6>
				</div>
            </div>
            <div className="people">
				<div className="people_i">
					<img className="people_img" src={People} alt=""/>
				</div>
				<div className="people_contnent">
					<p className="people_p">
						<i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</i>
					</p>
					<h6>- John Doe</h6>
				</div>
            </div>
            <div className="people">
				<div className="people_i">
					<img className="people_img" src={People} alt=""/>
				</div>
				<div className="people_contnent">
					<p className="people_p">
						<i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</i>
					</p>
					<h6>- John Doe</h6>
				</div>
            </div>
            <div className="people">
				<div className="people_i">
					<img className="people_img" src={People} alt=""/>
				</div>
				<div className="people_contnent">
					<p className="people_p">
						<i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</i>
					</p>
					<h6>- John Doe</h6>
				</div>
            </div>





		</div>
		</>

		)
}

export default Testimonials;