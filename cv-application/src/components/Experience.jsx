// import '../styles/education.css'

function Experience() {
    return (
        <div className="experience">
            <form>
                <ul> Education 
                    <li>
                        <label htmlFor='school'>School</label>
                        <input type='text' name='school'></input>
                    </li>
                    <li>
                        <label htmlFor='degree'>Degree</label>
                        {/* <input type='text' name='degree'></input> */}
                        <select name='degree'>
                            <option value='bachelors'>Bachelors</option>
                            <option value='masters'>Masters</option>
                            <option value='phd'>PhD</option>
                        </select>
                    </li>
                    <li>
                        <label htmlFor='start'>Start Date</label>
                        <input type='date' name='start'></input>
                    </li>
                    <li>
                        <label htmlFor='end'>End Date</label>
                        <input type='date' name='end'></input>
                    </li>
                    <li>
                        <label htmlFor='location'>Location</label>
                        <input type='text' name='address'></input>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default Experience