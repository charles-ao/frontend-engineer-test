import { BiCalendar } from "react-icons/bi";

const  LoanRecord = (props) => {
    const {month, borrowed, receivable} =props;
    return (
        <div className='loan-container'>
                    <div className='date'>
                        <BiCalendar size='20px'/>
                        <p>{month}</p>
                    </div>
                    <div className='cash-section'>
                        <div className='cash-section-container'>
                            <span>borrowed:</span> <span>&#x20A6;{borrowed}</span>
                        </div>
                        <hr className='line'/>
                        <div className='cash-section-container'>
                            <span>receivable:</span> <span>&#x20A6;{receivable}</span>
                        </div>
                    </div>
                </div>
    )
}

export default LoanRecord