import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

const SekcjaFormularz = () => {
    const form = useRef();

    const [klasaImieINazwisko, zmianaKlasyImieINazwisko] = useState('Etykieta')
    const [wartoscImieINazwisko, zmianaWartosciImieINazwisko] = useState('')
    const [klasaTelefon, zmianaKlasyTelefon] = useState('Etykieta')
    const [wartoscTelefon, zmianaWartosciTelefon] = useState('')
    const [klasaEmail, zmianaKlasyEmail] = useState('Etykieta')
    const [wartoscEmail, zmianaWartosciEmail] = useState('')
    const [klasaTresc, zmianaKlasyTresc] = useState('Etykieta')
    const [wartoscTresc, zmianaWartosciTresc] = useState('')
  
    const [stanWysylania, zmienStanWysylania] = useState('')
    const [klasaWysylania, zmienKlaseWysylania] = useState('nicWysyla')

    const CzyInputPusty = (element, zmianaKlasyElementu) => {
        if (document.getElementById(element).value.length === 0) {
          zmianaKlasyElementu('Etykieta')
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();

        zmienKlaseWysylania('cosWysyla')
        zmienStanWysylania('Wysyłanie w toku..')
        
        emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, form.current, process.env.REACT_APP_LAST)
          .then((result) => {
            zmienKlaseWysylania('takWysyla')
            zmienStanWysylania('Wysłano wiadomość!')
          }, (error) => {
            zmienKlaseWysylania('nieWysyla')
            zmienStanWysylania('Nie udało się wysłać wiadomości')
          });
      };

    return (
    <div>
        <div className='Sekcja' id='FormularzLink'>
            <div className='PrzerywanaSekcji'></div>
            <div className='TytulSekcji'>KONTAKT</div>
            <div className='PrzerywanaSekcji'></div>
        </div>
        <form ref={form} onSubmit={sendEmail} className='Formularz'>
            <div className='PojemnikInputu'>
                <input required minLength="3" maxLength="30" type="text" id="imieINazwisko" name="imieINazwisko" 
                pattern="[a-zA-Z]+( [a-zA-Z]+)*$"
                onFocus={() => {zmianaKlasyImieINazwisko('EtykietaFokus')}}
                onBlur={() => {CzyInputPusty('imieINazwisko', zmianaKlasyImieINazwisko)}}
                value={wartoscImieINazwisko} onChange={(e) => zmianaWartosciImieINazwisko(e.target.value)}
                />
                <span className={klasaImieINazwisko}>Imię i nazwisko</span>
            </div>
            <div className='PojemnikInputu'>
                <input minLength="9" maxLength="15"type="tel" id="telefon" name="telefon" 
                pattern="[0-9-+]+( [0-9-+]+)*$"
                onFocus={() => {zmianaKlasyTelefon('EtykietaFokus')}}
                onBlur={() => {CzyInputPusty('telefon', zmianaKlasyTelefon)}}
                value={wartoscTelefon} onChange={(e) => zmianaWartosciTelefon(e.target.value)}
                />
                <span className={klasaTelefon}>Numer telefonu (opcjonalny)</span>
            </div>
            <div className='PojemnikInputu'>
                <input required minLength="6" maxLength="35" type="email" id="email" name="email"
                onFocus={() => {zmianaKlasyEmail('EtykietaFokus')}}
                onBlur={() => {CzyInputPusty('email', zmianaKlasyEmail)}}
                value={wartoscEmail} onChange={(e) => zmianaWartosciEmail(e.target.value)}
                />
                <span className={klasaEmail}>Adres E-mail</span>
            </div>
            <div className='PojemnikInputu'>
                <textarea required minLength="5" maxLength="150"id="wiadomosc" name="wiadomosc"
                onFocus={() => {zmianaKlasyTresc('EtykietaFokus')}}
                onBlur={() => {CzyInputPusty('wiadomosc', zmianaKlasyTresc)}}
                value={wartoscTresc} onChange={(e) => zmianaWartosciTresc(e.target.value)}
                />
                <span className={klasaTresc}>Treść wiadomości</span>
            </div>
            <div className='kontaktRelative'>
                <input type="submit" className='formButton' id="wyslijwiadomosc" name="wyslijwiadomosc" value="Wyślij wiadomość" />
            </div>
            <div className={klasaWysylania}>{stanWysylania}</div>
        </form>
        <div className='Poprawa'></div>
    </div>
    )
}

export default SekcjaFormularz
