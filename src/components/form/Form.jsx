import React, { useContext } from 'react'
import Button from '../button/Button';
import context from '../../context/context';
import { useParams } from 'react-router-dom';


export default function Form() {
    const { createResume } = useContext(context);
    const { name, email, password } = useParams();
    const handleSubmit = (e) => {
        createResume(e, { name, email, password })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Full name: </label>
            <input name='name' type="text" defaultValue={name} />
            <br />

            <label>Work experience: </label>
            <input name='company1' type="text" placeholder='Company name' />
            <label> from: </label>
            <input name='fromC1' type="number" />
            <label> to: </label>
            <input name='toC1' type="number" />
            <br />

            <label>Work experience: </label>
            <input name='company2' type="text" placeholder='Company name' />
            <label> from: </label>
            <input name='fromC2' type="number" />
            <label> to: </label>
            <input name='toC2' type="number" />
            <br />

            <label>Work experience: </label>
            <input name='company3' type="text" placeholder='Company name' />
            <label> from: </label>
            <input name='fromC3' type="number" />
            <label> to: </label>
            <input name='toC3' type="number" />

            <Button type="button">add another work</Button>
            <br />

            <label>Education: </label>
            <input name='school1' type="text" />
            <label> from: </label>
            <input name='fromS1' type="number" />
            <label> to: </label>
            <input name='toS1' type="number" />
            <br />

            <label>Education: </label>
            <input name='school2' type="text" />
            <label> from: </label>
            <input name='fromS2' type="number" />
            <label> to: </label>
            <input name='toS2' type="number" />
            <br />

            <label>Education: </label>
            <input name='school3' type="text" />
            <label> from: </label>
            <input name='fromS3' type="number" />
            <label> to: </label>
            <input name='toS3' type="number" />

            <Button type="button">add another education</Button>
            <br />

            <label>Add image: </label>
            <input type="file" />

            <br />
            <Button type="submit">Create resume</Button>
        </form>
    )
}
