import '../Styles/EventBox.css';
import { useState } from 'react';
import Select from 'react-select';
import '../Pages/Confirm.jsx';
import { Link } from 'react-router-dom';
function Course() {

    const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive((prev) => !prev);
  };

    const options = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        // { value: 'orange', label: 'Orange' },
        // { value: 'pear', label: 'Pear' },
        // { value: 'grape', label: 'Grape' },
      ];      
  
        const [selectedOptions, setSelectedOptions] = useState([]);
      
        const handleMultiSelectChange = (selectedOptions) => {
          setSelectedOptions(selectedOptions);
        };
    
    return (
        <div>
            <div className="modal-container">
                <div className="modal-content">
                <div className="evnt-create-box">
                    <div className=''>
                        <a href="/BookEvents"><img className="eb-img" src="https://openclipart.org/image/2400px/svg_to_png/183568/close-button.png"></img></a>
                        <h1 className='eb-h1'>Add Course:</h1><br></br>
                        <div className='event-details'>
                            <div className='event-items'>
                            <label className='eb-label'>Enter Course name:</label>
                            <input className="eb-input" type="text" placeholder="Course name "  />
                            <label className='eb-label'>      Enter course duration:</label>
                            <input className="eb-input" type="text" placeholder="Course duration"  required/><br></br>
                            <label className='eb-label'>Enter Course Timing:</label>
                            <input className="eb-input" type="text" placeholder="Timing"  required/>
                            <label className='eb-label'>Enter no.of.Students enrolled:</label>
                            <input className="eb-input" type="text" placeholder="number"  required/><br></br>
                            <label className='eb-label'>Enter Course Description:</label>
                            <input className="eb-input" type="tel" placeholder="Description" required />
                            
                            
                            </div>
                          
                           
                            <center>  <Link to="/Backhome"> <button className='create-button' >Add Course</button></Link></center> 
                            <center><p>or</p></center>
                            <center> <Link to="/Editcourse"> <button className='create-button' >Edit Course</button></Link></center> 
                            </div>
                            {/* <div className={wrapper ${isActive ? 'active' : ''}}>
                                <button className={custom-button ${isActive ? 'is_active' : ''}} onClick={handleButtonClick}> */}
                                    {/* <span>Book Event</span> */}
                                    <div className="success">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.756 29.756" >
                                        <path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173   c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752   c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z" />
                                    </svg> */}
                                    </div>
                                {/* </button> */}
                               
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
        
    )
}
export default Course