import React, { useState } from 'react'



export default function Form(props) {

    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props


    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = evt.target.type === 'checkbox' ? checked : value;
        change(name, value)
    }


    return (
        <div className='form-container' onSubmit={onSubmit}>
            <div className='form-inputs'>
                <label>Name
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>
                <label>Email
                    <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
                </label>
                <label>Password
                    <input
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='text'
                    />
                </label>
                <label>Terms of Service
                    <input
                        type='checkbox'
                        name='terms-of-service'
                        checked={values.tos}
                        onChange={onChange}
                    />
                </label>
                <button disabled={disabled}>Submit</button>
            </div>
        </div>
    )
}