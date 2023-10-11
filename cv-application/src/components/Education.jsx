import '../styles/education.css'

function Education() {
    return (
        <div className="education">
            <form>
                <ul> Education 
                    <li>
                        <label htmlFor='school'>School</label>
                        <input type='text' name='school'></input>
                    </li>
                    <li>
                        <label htmlFor='degree'>Degree</label>
                        <input type='text' name='degree'></input>
                    </li>
                    <li>
                        <label htmlFor='start'>Start Date</label>
                        <input type='text' name='start'></input>
                    </li>
                    <li>
                        <label htmlFor='end'>End Date</label>
                        <input type='text' name='end'></input>
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

export default Education