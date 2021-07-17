import { useGlobalContext } from '../context'
import LoanRecord from './LoanRecord'
import picture from '../images/profile.jpg'


const EmployeePage = () => {
    const {individual} = useGlobalContext();
    const {email, fullname, id, phoneNo, role} = individual[0]

    return (
        <div className='employee-page'>
            <div className='employee-page-section'>
                <div className='employee' key={id}>
                    <img src={picture} alt='employee'/>
                    <div className='employee-info'>
                        <h4>{fullname}</h4>
                        <p>{role}</p>
                        <p>{phoneNo}</p>
                        <p id='email'>{email}</p>
                    </div>
                </div>
                <div>
                    <h3>loan record</h3>
                    <LoanRecord  month='feb' borrowed='30,000' receivable='50,000'/>
                    <LoanRecord  month='jan' borrowed='50,000' receivable='100,000'/>
                    <div className='divider'> 
                        <h4>2019</h4> 
                        <div>
                            <hr className='line'/>
                        </div>
                    </div>
                    <LoanRecord  month='Dec' borrowed='30,000' receivable='50,000'/>
                    <LoanRecord  month='nov' borrowed='50,000' receivable='100,000'/>
                </div>
            </div>
        </div>
    )
}

export default EmployeePage;