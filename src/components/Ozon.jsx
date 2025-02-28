import React from 'react'
import { IoArrowRedoSharp } from "react-icons/io5";
import "../css/Ozon.css"

function Ozon() {
    return (
        <div className='ozon-everything'>
            <div className='ozon-header'>
                <p>OZON</p>
            </div>

            <div className='ozon-sorular'>
                <section>
                    <p><IoArrowRedoSharp />   Ozon Nedir?</p>
                    <p><IoArrowRedoSharp />   Ozon Güvenilir Bir Tedavi Yöntemi midir?</p>
                    <p><IoArrowRedoSharp />   Romatizma Ve Ozon Tedavisi</p>
                    <p><IoArrowRedoSharp />   Kanser ve Ozon Tedavisi</p>
                </section>
                <section>
                    <p><IoArrowRedoSharp />   Diyabette Ozon Tedavisi</p>
                    <p><IoArrowRedoSharp />   Kronik Yorgunluk, Fibromiyalji ve Ozon Tedavisi</p>
                    <p><IoArrowRedoSharp />   Ozonlu PRP</p>
                    <p><IoArrowRedoSharp />   Multiple Skleroz ve Ozon Tedavisi</p>
                </section>
                <section>
                    <p><IoArrowRedoSharp />   Ozon Tedavisi ve Zayıflama</p>
                    <p><IoArrowRedoSharp />   Ozon Tedavisinde Ozonlanmış Yağlar</p>
                    <p><IoArrowRedoSharp />   Ozon Yağı Alırken Nelere Dikkat Edilmelidir?</p>
                </section>
            </div>
        </div>
    )
}

export default Ozon