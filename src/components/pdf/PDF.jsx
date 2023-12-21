import react from 'react'
import { useRef, useContext } from 'react';
import generatePDF from 'react-to-pdf';
import './PDF.css'
import Work from '../work/Work';
import Education from '../education/Education';
import Name from '../name/Name';
import context from '../../context/context';
import { useParams } from 'react-router-dom';

export default function PDF() {
    const { work, education, users } = useContext(context);
    const { name, email, password } = useParams();
    let user;
    users.map((someUser) => {
        if(email === someUser.email && password === someUser.password){
            user = someUser;
        }
    })
    console.log("pdf: ", user);
    const targetRef = useRef();
    return (
        <div>
            <button onClick={() => generatePDF(targetRef, { filename: 'page.pdf' })}>Download PDF</button>
            <div id='pdf' ref={targetRef}>
                <h1>resume</h1>
                <Name name={name}></Name>
                {user.work?.map((x) => {
                    return (
                        <>
                            <Work work={x}></Work>
                        </>
                    )

                })}
                {user.education?.map((x) => {
                    return (
                        <>
                            <Education education={x}></Education>
                        </>
                    )

                })}
            </div>
        </div>
    )
}
