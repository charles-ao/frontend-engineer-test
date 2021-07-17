import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { GoTrashcan, GoPlus } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import picture from '../images/profile.jpg'


const Employees = () => {
    const {employees, removeItem, error, showError, hideError, loadUser} = useGlobalContext();
    
    const historyObject = useHistory()

    // Call function to delete employee
    const deleteEmployee = (e) => {
        const element = e.target.parentElement;
        const elementId = element.getAttribute('data-id');
        removeItem(elementId)
    }

    // Call function to show details of clicked employee
    const getId = (e) => {
        const id = e.target.parentElement.nextSibling.getAttribute('data-id');
        loadUser(id)

        historyObject.push('/employee-page')
    }

    const goToCreatePage = () => {
        historyObject.push('/')
    }

    return (
        <div className='employees'>
            <div className='employees-section'>

                <h3>employees</h3>
                <div className={error? 'error show-error': 'error'}>
                    <p>Feature not available at the moment</p>
                    <AiFillCloseCircle onClick={hideError}/>
                </div>
                <div className='employee-list'>
                    {
                        employees.map((employee) => {
                            const {fullname, phoneNo, role, email, id} = employee;
                            return (
                                <div className='employee' key={id} >
                                    <img src={picture} alt='employee'/>
                                    <div className='employee-info'>
                                        <h4 onClick={getId}>{fullname}</h4>
                                        <p>{role}</p>
                                        <p>{phoneNo}</p>
                                        <p id='email'>{email}</p>
                                    </div>
                                    <div className='icons'   data-id={id} >
                                            <FiEdit size='24px'  className='icon' onClick={showError}/>
                                           <GoTrashcan size='24px'  onClick={deleteEmployee} className='icon'/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='add-employee' onClick={goToCreatePage}>
                    <GoPlus />
                    <p>Employee</p>
                </div>

            </div>
        </div>
    )
}

export default Employees;