import React from 'react';
import { NavLink } from 'react-router-dom';
function SideMenu() {
  return (
    <div className='main-sidemenu'>
      <NavLink to='/'>Главная</NavLink>
      <NavLink to='info'>Общая информация</NavLink>
      <NavLink to='structur'>Структурные подразделения</NavLink>
      <NavLink to='eduprocess'>Учебный процесс</NavLink>
      <NavLink to='docs'>Документы</NavLink>
      <NavLink to='abitur'>Абитуриенту 2022</NavLink>
      <NavLink to='projects'>Проекты</NavLink>
      <NavLink to='tech'>Технологии</NavLink>
      <NavLink to='educuality'>Качество образования</NavLink>
      <NavLink to='contact'>Контакты</NavLink>
    </div>
  );
}

export default SideMenu;
