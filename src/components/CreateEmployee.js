import { useGlobalContext } from '../context';
import {useHistory} from "react-router-dom";
import InputField from './InputField'

const  CreateEmployee = () => {
    const historyObject = useHistory();

    const {updateEmployees, name, phone, email, position, salary, nameError, positionError, emailError, phoneError,salaryError, setName, setPhone, setEmail, setPosition, setSalary, warning, setWarning} = useGlobalContext()

    // Timestamp to get unique Id for each employee created
    const timestamp = new Date().getTime().toString()

    const createPost = (e) => {
        e.preventDefault();

        // Create employee if errors are absent
        if (nameError === '' && phoneError === '' && positionError === '' && emailError === '' && salaryError === '') {
            // Object created to group input values for employee created 
            const placeholderObject = {
                id: timestamp,
                fullname: name,
                phoneNo: phone,
                role: position,
                email: email,
                pay: salary
            }
            
            updateEmployees(placeholderObject)
            
            historyObject.push('/employees')

            // Returning values to empty string after sucessful creation
            setPhone('')
            setEmail('')
            setName('')
            setSalary('')
            setPosition('')
        } else {
            setWarning(true)
        }

    }
    
    return (
        <div className='create-employee'>
            <div className='section'>
                <h3>create employee profile</h3>
                <form onSubmit={createPost}>
                    <InputField title='full name' 
                                type='text' 
                                state={name} 
                                stateFunction={(e)=>setName(e.target.value)} 
                                errorState={nameError}
                    />
                    <InputField title='phone number' 
                                type='number' 
                                state={phone} 
                                stateFunction={(e)=>setPhone(e.target.value)} 
                                errorState={phoneError}
                    />
                    
                    <InputField title='email' 
                                type='email' 
                                state={email} 
                                stateFunction={(e)=>setEmail(e.target.value)} 
                                errorState={emailError}
                    />
                    <InputField title='position' 
                                type='text' 
                                state={position} 
                                stateFunction={(e)=>setPosition(e.target.value)} 
                                errorState={positionError}
                    />
                    <InputField title='salary' 
                                type='number' 
                                state={salary} 
                                stateFunction={(e)=>setSalary(e.target.value)} 
                                errorState={salaryError}
                    />
                    <div className={warning? 'error show-error': 'error'}>Fill all details correctly</div>
                    <div className='input-field'>
                            <button className='create-btn'>save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateEmployee