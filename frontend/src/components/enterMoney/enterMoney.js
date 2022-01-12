import './enterMoney.css'
import {FaPlus} from 'react-icons/fa';

const EnterMoney = ({setMoney, money}) => {

    const formatMoney = (e) => {
        const moneyInput = document.querySelector('.enterMoney__input');
        setMoney(moneyInput.value);
    }

    return ( 
        <div className="enterMoney__container">
            {
                money === 0 ? <>
                                <label className="enterMoney__label">Please enter how much money are you gonna spend</label>
                                <input type="number" className="enterMoney__input"></input>
                                <button className="enterMoney__button" onClick={formatMoney}><FaPlus /></button>
                            </>
                          : <>
                                <label className="enterMoney__label">You have entered ${money}</label>
                            </>
            }
        </div>
     );
}
 
export default EnterMoney;