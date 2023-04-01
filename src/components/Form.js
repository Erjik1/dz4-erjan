import React, { useState } from 'react';

function Form() {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthYear, setBirthYear] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Вы зарегистрировались с данными: ${fullName}, ${phoneNumber}, ${birthYear}`);
        console.log(fullName, phoneNumber, birthYear);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                ФИО:
                <input type="text" value={fullName} onChange={(event) => setFullName(event.target.value)} />
            </label>
            <label>
                Номер телефона:
                <input type="text" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
            </label>
            <label>
                Год рождения:
                <input type="text" value={birthYear} onChange={(event) => setBirthYear(event.target.value)} />
            </label>
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
}

export default Form;
