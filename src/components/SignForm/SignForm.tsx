import React, { ComponentType, useState } from 'react';
import style from './sass/SignForm.module.scss';
import { handleChange } from './signup.utils';

const SignForm: ComponentType = () => {
	const [form, setForm] = useState<FormType>({
		age: new Date(),
		confirm_password: '',
		email: '',
		lastname: '',
		name: '',
		password: '',
		phone: '',
	});

	const [errors, setErrors] = useState<ErrorsType>([]);

	const inputNames = [
		'name',
		'lastname',
		'email',
		'password',
		'confirm_password',
		'age',
		'phone',
	];

	const placeholders = [
		'Name',
		'Lastname',
		'Email',
		'Password',
		'Confirm password',
		'',
		'Phone number',
	];

	const types = ['text', 'text', 'mail', 'password', 'password', 'date', 'tel'];

	return (
		<form action="" className={style.form}>
			{inputNames.map((value, index) => {
				return (
					<input
						type={types[index]}
						className={style.form__input}
						placeholder={placeholders[index]}
						value={form[value]}
						key={index}
						name={value}
						onChange={e => handleChange(e, form, setForm)}
					/>
				);
			})}
			<button type="submit">Submit</button>
		</form>
	);
};

export default SignForm;
