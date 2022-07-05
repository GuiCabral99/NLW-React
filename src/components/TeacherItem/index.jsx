import React from "react";
import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://scontent.fbat1-1.fna.fbcdn.net/v/t1.6435-9/160252922_266388731661492_4217900706757720640_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bRzqhYyqbDEAX_tyMtX&_nc_ht=scontent.fbat1-1.fna&oh=00_AT-Z7B-L-rRLKhdSl2VmzJsD6kP-mBZ-lwQh26X9NNOgjw&oe=62E29775" alt="Foto de perfil" />
                <div>
                    <strong>Guilherme Cabral</strong>
                    <span>Desenvolvedor</span>
                </div>
            </header>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/><br/> Qui facere suscipit ipsum pariatur porro harum illo quibusdam itaque maxime, mollitia minus veritatis non. Rem vitae libero culpa corrupti impedit enim.</p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 10,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;