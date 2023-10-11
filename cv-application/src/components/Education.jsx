// import '../styles/biodata.css'

function Biodata() {
    return (
        <div className="education">
            <form>
                <ul> Education 
                    <li>
                        <label htmlFor='name'>Full Name</label>
                        <input type='text' name='name'></input>
                    </li>
                    <li>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email'></input>
                    </li>
                    <li>
                        <label htmlFor='number'>Phone Number</label>
                        <input type='tel' name='number'></input>
                    </li>
                    <li>
                        <label htmlFor='address'>Address</label>
                        <input type='text' name='address'></input>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default Biodata