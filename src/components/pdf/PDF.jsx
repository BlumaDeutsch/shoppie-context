import react from 'react'
import { useRef, useContext } from 'react';
import generatePDF from 'react-to-pdf';
import './PDF.css'
import Work from '../work/Work';
import Education from '../education/Education';
import Name from '../name/Name';
import context from '../../context/context';

export default function PDF() {
    const { work, education, name } = useContext(context);

    const targetRef = useRef();
    return (
        <div>
            <button onClick={() => generatePDF(targetRef, { filename: 'page.pdf' })}>Download PDF</button>
            <div id='pdf' ref={targetRef}>
                <h1>resume</h1>
                <Name name={name}></Name>
                {work?.map((x) => {
                    return (
                        <>
                            <Work work={x}></Work>
                        </>
                    )

                })}
                {education?.map((x) => {
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
