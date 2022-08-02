import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';

export const handleChange = (
	e: ChangeEvent<HTMLInputElement>,
	form: FormType,
	setForm: Dispatch<SetStateAction<FormType>>,
) => {
	setForm({ ...form, [e.target.name]: e.target.value });
	console.log(form);
};

export const handleSubmit = async (
	e: FormEvent<SubmitEvent>,
	form: FormType,
) => {
	console.log();
};

const validate = (
	form: FormType,
	errors: ErrorsType,
	errorsState: Dispatch<SetStateAction<ErrorsType>>,
) => {
	console.log(form);
};
