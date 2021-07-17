import React, { useState, useContext, useEffect} from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // State managing list of employees
  const [employees, setEmployees] = useState([]);
  // State managing rendering of full details of each employee
  const [individual, setIndividual] = useState()
  // States managing input values
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  // States managing input value errors
  const [nameError, setNameError] = useState( '')
  const [positionError, setPositionError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [salaryError, setSalaryError] = useState('')
  const [warning, setWarning] = useState(false);
  // State managing error feedback on edit button
  const [error, setError] = useState(false)

  // UseEffect for timely validation check on input 
  useEffect(() => {

    const validate = () => {
        if (!name) {
            setNameError('required')
        } else if (name.length < 5) {
            setNameError('name too short')
        } else { setNameError('')}

        if(!position) {
            setPositionError('required')
        } else if (position.length < 3) {
            setPositionError( 'position too short')
        }  else { setPositionError('')}

        if(!email)  {
            setEmailError('required') 
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setEmailError('invalid email address')
        } else {
            setEmailError('')
        }

        if(!phone) {
            setPhoneError('required')
        } else if (phone.length < 10) {
            setPhoneError('Enter Valid Phone number')
        } else {
            setPhoneError('')
        }
        
        if(!salary) {
            setSalaryError('required')
        } else {
            setSalaryError('')
        }
    }

    setWarning(false)
    validate()

  }, [name, email, position, salary, phone])

  // Creating and Updating employee list
  const updateEmployees = (param) => {
    setEmployees([...employees, param])
  }

  // Deleting an employee from employee list and updating list
  const removeItem = (id) => {
    const newList = employees.filter(val => {
      return val.id !== id
    })
    setEmployees(newList)
  }

  // Display Error message on Edit button click
  const showError = () => {
    setError(true)
  }

  // Remove Error message displayed
  const hideError = () => {
    setError(false)
  }

  // Get User clicked on to render full details
  const loadUser = (param) => {
    const user = employees.filter(val => {
      return val.id === param
    })
    setIndividual(user)
  }

 

  return (
    <AppContext.Provider
      value={{
        employees,
        updateEmployees, 
        removeItem,
        name, 
        phone, 
        email, 
        position, 
        salary, 
        nameError, 
        positionError, 
        emailError, 
        phoneError,
        salaryError, 
        setName, 
        setPhone, 
        setEmail, 
        setPosition, 
        setSalary, 
        warning, 
        setWarning, 
        error, 
        showError, 
        hideError, 
        individual, 
        loadUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
