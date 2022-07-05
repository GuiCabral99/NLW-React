import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from "./pages/Landing";
import TeacherForm from "./pages/TeacherForm";
import TeacherList from './pages/TeacherList'


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path='/give-classes' element={<TeacherForm />} />
                <Route path='/study' element={<TeacherList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;